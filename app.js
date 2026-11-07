(() => {
  'use strict';

  const VERSION = '1.0.1';
  const MOD = window.CURSO.modules[0];
  const PHRASES = MOD.blocks.flatMap(b => b.phrases);
  const DAY = 864e5;
  const INTERVALS = [0, 1, 2, 4, 8, 16]; // días por caja de repaso

  // ---------- Almacenamiento ligero ----------
  const load = (k, d) => {
    try { const v = localStorage.getItem('fr.' + k); return v === null ? d : JSON.parse(v); }
    catch (e) { return d; }
  };
  const save = (k, v) => { try { localStorage.setItem('fr.' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } };

  const state = {
    mode: load('mode', 'vous'),
    voiceURI: load('voice', null),
    slowRate: load('slowRate', 0.7),
    stars: load('stars', {}),
    srs: load('srs', {})
  };

  // ---------- IndexedDB para grabaciones ----------
  let dbPromise = null;
  const openDB = () => dbPromise || (dbPromise = new Promise((res, rej) => {
    const r = indexedDB.open('francais', 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore('clips');
      r.result.createObjectStore('anchor', { keyPath: 'id', autoIncrement: true });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));
  const idb = async (store, mode, fn) => {
    const db = await openDB();
    return new Promise((res, rej) => {
      const tx = db.transaction(store, mode);
      const req = fn(tx.objectStore(store));
      tx.oncomplete = () => res(req ? req.result : undefined);
      tx.onerror = () => rej(tx.error);
    });
  };

  // ---------- Utilidades ----------
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    kids.flat().forEach(c => c != null && n.append(c));
    return n;
  };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const variant = p => (state.mode === 'tu' && p.tu) ? p.tu : p;
  const clipKey = p => p.id + (state.mode === 'tu' && p.tu ? '-tu' : '');

  // ---------- Voz francesa (síntesis del dispositivo) ----------
  let voices = [];
  const synth = window.speechSynthesis;
  const loadVoices = () => {
    if (!synth) return;
    voices = synth.getVoices().filter(v => (v.lang || '').toLowerCase().startsWith('fr'));
    voices.sort((a, b) => (/fr[-_]fr/i.test(b.lang) - /fr[-_]fr/i.test(a.lang)) || a.name.localeCompare(b.name));
    renderVoiceSettings();
  };
  const pickVoice = () =>
    voices.find(v => v.voiceURI === state.voiceURI) || voices.find(v => /fr[-_]fr/i.test(v.lang)) || voices[0] || null;

  // En iPhone, Safari a veces ignora un speak() justo después de cancel(),
  // y a veces la lista de voces llega tarde. Por eso: cancelar solo si hace falta,
  // recargar voces al tocar, y si la voz elegida falla, reintentar con la voz francesa por defecto.
  let lastSpeech = 'Todavía no se ha reproducido audio.';
  const speak = (text, rate = 1) => new Promise(res => {
    if (!synth) { lastSpeech = 'Este navegador no tiene síntesis de voz.'; return res(); }
    if (!voices.length) loadVoices();
    if (synth.speaking || synth.pending) synth.cancel();
    synth.resume();
    const make = useVoice => {
      const u = new SpeechSynthesisUtterance(text);
      const v = useVoice ? pickVoice() : null;
      if (v) u.voice = v;
      u.lang = v ? v.lang : 'fr-FR';
      u.rate = rate;
      return u;
    };
    const first = make(true);
    let started = false;
    first.onstart = () => { started = true; lastSpeech = 'Último audio: OK' + (first.voice ? ` (${first.voice.name})` : ' (voz por defecto)'); };
    first.onend = res;
    first.onerror = e => {
      lastSpeech = 'Último audio: error "' + (e && e.error || 'desconocido') + '"';
      if (started || !first.voice) return res();
      const retry = make(false);
      retry.onstart = () => { lastSpeech = 'Último audio: OK con la voz por defecto (la elegida falló)'; };
      retry.onend = retry.onerror = res;
      synth.speak(retry);
    };
    synth.speak(first);
  });

  // ---------- Micrófono ----------
  let stream = null, recorder = null;
  const mime = () => ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm']
    .find(t => window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t));

  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) throw new Error('Este navegador no permite grabar.');
    if (!stream || !stream.active) stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const type = mime();
    recorder = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    const chunks = [];
    recorder.ondataavailable = e => e.data && e.data.size && chunks.push(e.data);
    const done = new Promise(res => {
      recorder.onstop = () => res(new Blob(chunks, { type: recorder.mimeType || type || 'audio/mp4' }));
    });
    recorder.start();
    return done;
  };
  const stopRecording = () => { if (recorder && recorder.state !== 'inactive') recorder.stop(); };
  const releaseMic = () => { if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; } };
  document.addEventListener('visibilitychange', () => { if (document.hidden) { stopRecording(); releaseMic(); synth && synth.cancel(); } });

  let currentAudio = null;
  const playBlob = blob => new Promise(res => {
    if (currentAudio) currentAudio.pause();
    const url = URL.createObjectURL(blob);
    const a = new Audio(url);
    currentAudio = a;
    a.onended = a.onerror = () => { URL.revokeObjectURL(url); res(); };
    a.play().catch(() => res());
  });

  // ---------- Vista: Frases ----------
  let loopToken = 0;

  const phraseCard = p => {
    const v = variant(p);
    const other = p.tu ? (state.mode === 'tu' ? p.fr : p.tu.fr) : null;

    const star = el('button', {
      type: 'button', class: 'star' + (state.stars[p.id] ? ' on' : ''),
      'aria-label': 'Marcar como difícil', text: '★'
    });
    star.addEventListener('click', () => {
      state.stars[p.id] = !state.stars[p.id];
      if (!state.stars[p.id]) delete state.stars[p.id];
      save('stars', state.stars);
      star.classList.toggle('on', !!state.stars[p.id]);
    });

    const btnPlay = el('button', { type: 'button', class: 'btn', text: '▶ Normal' });
    const btnSlow = el('button', { type: 'button', class: 'btn', text: '▶ Lento' });
    const btnRec = el('button', { type: 'button', class: 'btn primary', text: '● Grabar' });
    const btnMine = el('button', { type: 'button', class: 'btn', text: 'Mi voz' });
    const btnCompare = el('button', { type: 'button', class: 'btn', text: 'Comparar' });
    const btnLoop = el('button', { type: 'button', class: 'btn', text: '↻ Bucle' });

    btnPlay.addEventListener('click', () => speak(v.fr, 1));
    btnSlow.addEventListener('click', () => speak(v.fr, state.slowRate));

    let myClip = null;
    const refreshMine = () => { btnMine.disabled = btnCompare.disabled = !myClip; };
    idb('clips', 'readonly', s => s.get(clipKey(p))).then(b => { myClip = b || null; refreshMine(); }).catch(refreshMine);
    refreshMine();

    let recording = null;
    btnRec.addEventListener('click', async () => {
      if (recording) { stopRecording(); return; }
      try {
        synth && synth.cancel();
        btnRec.classList.add('recording'); btnRec.textContent = '■ Parar';
        recording = startRecording();
        const blob = await recording;
        myClip = blob;
        await idb('clips', 'readwrite', s => s.put(blob, clipKey(p)));
        refreshMine();
      } catch (e) {
        alert('No pude usar el micrófono. Revisa el permiso de micrófono para Safari o para la app.');
      } finally {
        recording = null;
        btnRec.classList.remove('recording'); btnRec.textContent = '● Grabar';
      }
    });
    btnMine.addEventListener('click', () => myClip && playBlob(myClip));
    btnCompare.addEventListener('click', async () => {
      if (!myClip) return;
      await speak(v.fr, 1);
      await sleep(400);
      await playBlob(myClip);
    });

    btnLoop.addEventListener('click', async () => {
      if (btnLoop.classList.contains('on')) { loopToken++; synth && synth.cancel(); return; }
      document.querySelectorAll('.btn.on[data-loop]').forEach(b => b.classList.remove('on'));
      const token = ++loopToken;
      btnLoop.classList.add('on'); btnLoop.setAttribute('data-loop', '1');
      const pause = Math.max(1800, v.fr.length * 90); // tiempo para repetir en voz alta
      while (token === loopToken) {
        await speak(v.fr, state.slowRate);
        if (token !== loopToken) break;
        await sleep(pause);
      }
      btnLoop.classList.remove('on'); btnLoop.removeAttribute('data-loop');
    });

    return el('article', { class: 'card' },
      el('div', { class: 'card-head' },
        star,
        el('p', { class: 'fr', lang: 'fr', text: v.fr }),
        el('p', { class: 'es', text: v.es }),
        other ? el('p', { class: 'alt', lang: 'fr', text: (state.mode === 'tu' ? 'Con vous: ' : 'Con tu: ') + other }) : null,
        p.note ? el('span', { class: 'note', text: p.note }) : null
      ),
      el('div', { class: 'actions' }, btnPlay, btnSlow, btnRec, btnMine, btnCompare, btnLoop)
    );
  };

  const renderPhrases = () => {
    loopToken++;
    const list = document.getElementById('phrase-list');
    list.replaceChildren(...MOD.blocks.map(b =>
      el('section', {}, el('h2', { class: 'block-title', text: b.title }), b.phrases.map(phraseCard))
    ));
  };

  // ---------- Vista: Repaso (repetición espaciada simple) ----------
  let queue = [];
  const buildQueue = () => {
    const t = today();
    const due = PHRASES.filter(p => { const s = state.srs[p.id]; return !s || s.due <= t; });
    const starred = due.filter(p => state.stars[p.id]);
    const rest = due.filter(p => !state.stars[p.id]);
    // Las difíciles primero; luego las vencidas, las nuevas al final. Máximo 20 por sesión.
    rest.sort((a, b) => ((state.srs[a.id] ? 0 : 1) - (state.srs[b.id] ? 0 : 1)));
    queue = starred.concat(rest).slice(0, 20);
  };

  const rate = (p, grade) => {
    const s = state.srs[p.id] || { box: 0, due: 0 };
    if (grade === 'again') s.box = 0;
    else if (grade === 'good') s.box = Math.min(s.box + 1, INTERVALS.length - 1);
    else s.box = Math.min(s.box + 2, INTERVALS.length - 1);
    s.due = today() + INTERVALS[s.box] * DAY;
    state.srs[p.id] = s;
    save('srs', state.srs);
    queue.shift();
    if (grade === 'again') queue.push(p); // vuelve al final de esta sesión
  };

  const renderReview = () => {
    const box = document.getElementById('review');
    if (!queue.length) {
      box.replaceChildren(el('div', { class: 'card done' },
        el('p', { class: 'big', text: '✓' }),
        el('p', { text: 'No hay más frases para hoy.' }),
        el('p', { class: 'muted small', text: 'Vuelve mañana, o practica libremente en Frases.' })
      ));
      return;
    }
    const p = queue[0];
    const v = variant(p);
    const answer = el('div', { hidden: '' },
      el('p', { class: 'fr', lang: 'fr', text: v.fr }),
      p.note ? el('span', { class: 'note', text: p.note }) : null,
      el('div', { class: 'row', style: 'justify-content:center' },
        el('button', { type: 'button', class: 'btn', text: '▶ Normal', onclick: () => speak(v.fr, 1) }),
        el('button', { type: 'button', class: 'btn', text: '▶ Lento', onclick: () => speak(v.fr, state.slowRate) })
      ),
      el('div', { class: 'rate' },
        el('button', { type: 'button', class: 'btn', text: 'Otra vez', onclick: () => { rate(p, 'again'); renderReview(); } }),
        el('button', { type: 'button', class: 'btn', text: 'Bien', onclick: () => { rate(p, 'good'); renderReview(); } }),
        el('button', { type: 'button', class: 'btn', text: 'Fácil', onclick: () => { rate(p, 'easy'); renderReview(); } })
      )
    );
    const show = el('button', { type: 'button', class: 'btn primary', text: 'Mostrar en francés' });
    show.addEventListener('click', () => { answer.hidden = false; show.hidden = true; speak(v.fr, 1); });

    box.replaceChildren(
      el('p', { class: 'hint', text: 'Lee la frase en español y dila en voz alta en francés. Luego revisa.' }),
      el('div', { class: 'card review-card' },
        el('p', { class: 'review-meta', text: `Quedan ${queue.length}` + (state.stars[p.id] ? ' · ★ difícil' : '') }),
        el('p', { class: 'es', text: v.es }),
        show,
        answer
      )
    );
  };

  // ---------- Vista: Mi voz (texto ancla) ----------
  const fmtDate = ts => new Date(ts).toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
  const ext = type => (type || '').includes('webm') ? 'webm' : 'm4a';

  const renderAnchorList = async () => {
    const ul = document.getElementById('anchor-list');
    let items = [];
    try { items = await idb('anchor', 'readonly', s => s.getAll()); } catch (e) { /* sin IndexedDB */ }
    items.sort((a, b) => b.date - a.date);
    document.getElementById('anchor-compare').disabled = items.length < 2;
    if (!items.length) { ul.replaceChildren(el('li', { class: 'muted', text: 'Todavía no hay grabaciones.' })); return; }
    ul.replaceChildren(...items.map(it => {
      const url = URL.createObjectURL(it.blob);
      return el('li', {},
        el('span', { text: fmtDate(it.date) }),
        el('span', { class: 'row', style: 'margin:0' },
          el('button', { type: 'button', class: 'btn', text: '▶', 'aria-label': 'Escuchar', onclick: () => playBlob(it.blob) }),
          el('a', { class: 'btn', href: url, download: `frances-ancla-${new Date(it.date).toISOString().slice(0, 10)}.${ext(it.blob.type)}`, text: 'Guardar archivo' }),
          el('button', {
            type: 'button', class: 'btn danger', text: 'Borrar', onclick: async () => {
              if (!confirm('¿Borrar esta grabación? No se puede deshacer.')) return;
              await idb('anchor', 'readwrite', s => s.delete(it.id));
              renderAnchorList();
            }
          })
        )
      );
    }));
  };

  const setupAnchor = () => {
    document.getElementById('anchor-text').textContent = MOD.anchor;
    document.getElementById('anchor-listen').addEventListener('click', () => speak(MOD.anchor, 1));
    const btn = document.getElementById('anchor-rec');
    const status = document.getElementById('anchor-status');
    let rec = null;
    btn.addEventListener('click', async () => {
      if (rec) { stopRecording(); return; }
      try {
        synth && synth.cancel();
        btn.classList.add('recording'); btn.textContent = '■ Parar y guardar';
        status.textContent = 'Grabando… lee el texto con calma.';
        rec = startRecording();
        const blob = await rec;
        await idb('anchor', 'readwrite', s => s.add({ date: Date.now(), blob }));
        status.textContent = 'Grabación guardada.';
        renderAnchorList();
      } catch (e) {
        status.textContent = 'No pude usar el micrófono. Revisa el permiso de micrófono.';
      } finally {
        rec = null;
        btn.classList.remove('recording'); btn.textContent = 'Grabar';
      }
    });
    document.getElementById('anchor-compare').addEventListener('click', async () => {
      const items = (await idb('anchor', 'readonly', s => s.getAll())).sort((a, b) => a.date - b.date);
      if (items.length < 2) return;
      await playBlob(items[0].blob);
      await sleep(800);
      await playBlob(items[items.length - 1].blob);
    });
    renderAnchorList();
  };

  // ---------- Vista: Ajustes ----------
  const renderVoiceSettings = () => {
    const sel = document.getElementById('voice-select');
    if (!sel) return;
    const chosen = pickVoice();
    sel.replaceChildren(...voices.map(v =>
      el('option', { value: v.voiceURI, text: `${v.name} (${v.lang})${v.localService ? '' : ' · en línea'}` })
    ));
    if (chosen) sel.value = chosen.voiceURI;
    document.getElementById('voice-warning').hidden = voices.length > 0;
    renderDiag();
  };

  const renderDiag = () => {
    const d = document.getElementById('voice-diag');
    if (!d) return;
    const all = synth ? synth.getVoices().length : 0;
    const standalone = window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
    d.textContent = `Diagnóstico: ${voices.length} voces francesas de ${all} en total · ` +
      `${standalone ? 'abierta como app' : 'abierta en el navegador'} · ${lastSpeech}`;
  };

  const renderProgress = () => {
    const seen = PHRASES.filter(p => state.srs[p.id]).length;
    const strong = PHRASES.filter(p => (state.srs[p.id] || {}).box >= 3).length;
    const stars = PHRASES.filter(p => state.stars[p.id]).length;
    document.getElementById('progress-summary').textContent =
      `Módulo ${MOD.num}: ${seen} de ${PHRASES.length} frases repasadas, ${strong} bien afianzadas, ${stars} marcadas como difíciles.`;
  };

  const setupSettings = () => {
    document.getElementById('app-version').textContent = VERSION;
    const sel = document.getElementById('voice-select');
    sel.addEventListener('change', () => { state.voiceURI = sel.value; save('voice', sel.value); });
    const slow = document.getElementById('slow-rate');
    const slowVal = document.getElementById('slow-val');
    slow.value = state.slowRate; slowVal.textContent = state.slowRate.toFixed(2);
    slow.addEventListener('input', () => {
      state.slowRate = Number(slow.value); slowVal.textContent = state.slowRate.toFixed(2); save('slowRate', state.slowRate);
    });
    document.getElementById('voice-test').addEventListener('click', () => {
      speak("Bonjour ! Je m'appelle Paul. Bienvenue à Providencia !", 1).then(renderDiag);
      setTimeout(renderDiag, 1500);
    });
    document.getElementById('reset-review').addEventListener('click', () => {
      if (!confirm('¿Reiniciar todo el progreso del repaso? Tus grabaciones no se borran.')) return;
      state.srs = {}; save('srs', state.srs); buildQueue(); renderProgress();
    });
  };

  const renderOffline = (text) => { document.getElementById('offline-status').textContent = text; };

  // ---------- Navegación ----------
  const showTab = name => {
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.dataset.view !== name; });
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
    loopToken++;
    synth && synth.cancel();
    if (name === 'repaso') { buildQueue(); renderReview(); }
    if (name === 'ajustes') { loadVoices(); renderProgress(); }
    window.scrollTo(0, 0);
  };

  const setMode = mode => {
    state.mode = mode; save('mode', mode);
    document.querySelectorAll('.seg').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    renderPhrases();
    if (!document.getElementById('view-repaso').hidden) renderReview();
  };

  // ---------- Inicio ----------
  document.getElementById('module-subtitle').textContent = `Módulo ${MOD.num} · ${MOD.title}`;
  document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
  document.querySelectorAll('.seg').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  setMode(state.mode);
  setupAnchor();
  setupSettings();
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  // ---------- Modo sin conexión ----------
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      renderOffline('Listo para usarse sin conexión en este dispositivo.');
      const banner = document.getElementById('update-banner');
      const offer = w => {
        banner.hidden = false;
        document.getElementById('update-btn').onclick = () => w.postMessage('skipWaiting');
      };
      if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w && w.addEventListener('statechange', () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) offer(w);
        });
      });
      let reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloaded) { reloaded = true; location.reload(); } });
    }).catch(() => renderOffline('No se pudo activar el modo sin conexión. Abre la app desde su dirección web (https).'));
  } else {
    renderOffline('Este navegador no permite el modo sin conexión.');
  }
})();
