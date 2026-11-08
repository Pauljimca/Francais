(() => {
  'use strict';

  const VERSION = '1.3.0';
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
    voicePaul: load('voicePaul', null),
    voiceClaire: load('voiceClaire', null),
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
  const MALE = /thomas|daniel|jacques|nicolas|henri|antoine|mathieu|guillaume|eddy|reed|rocko|grandpa|male|homme|masculin/i;
  const FEMALE = /am[ée]lie|audrey|marie|aur[ée]lie|virginie|jo[ëe]lle|c[ée]line|chantal|flo\b|sandy|shelley|grandma|female|femme|f[ée]minin/i;
  const genderOf = v => FEMALE.test(v.name) ? 'f' : (MALE.test(v.name) ? 'm' : '?');
  const speakerVoice = who => {
    const key = who === 'Paul' ? 'voicePaul' : 'voiceClaire';
    const want = who === 'Paul' ? 'm' : 'f';
    const saved = state[key];
    if (saved) { const v = voices.find(x => x.voiceURI === saved); if (v) return v; }
    return voices.find(v => /fr[-_]fr/i.test(v.lang) && genderOf(v) === want) ||
           voices.find(v => genderOf(v) === want) || null;
  };
  const pickVoice = () =>
    voices.find(v => v.voiceURI === state.voiceURI) || voices.find(v => /fr[-_]fr/i.test(v.lang)) || voices[0] || null;

  // En iPhone, Safari a veces ignora un speak() justo después de cancel(),
  // y a veces la lista de voces llega tarde. Por eso: cancelar solo si hace falta,
  // recargar voces al tocar, y si la voz elegida falla, reintentar con la voz francesa por defecto.
  let lastSpeech = 'Todavía no se ha reproducido audio.';
  const speak = (text, rate = 1, opts = {}) => new Promise(res => {
    if (!synth) { lastSpeech = 'Este navegador no tiene síntesis de voz.'; return res(); }
    if (!voices.length) loadVoices();
    if (synth.speaking || synth.pending) synth.cancel();
    synth.resume();
    const make = useVoice => {
      const u = new SpeechSynthesisUtterance(text);
      const v = useVoice ? (opts.voice || pickVoice()) : null;
      if (v) u.voice = v;
      u.lang = v ? v.lang : 'fr-FR';
      u.rate = rate;
      if (opts.pitch) u.pitch = opts.pitch;
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

  // En iPhone, una conexión de micrófono reutilizada queda en silencio después de reproducir audio.
  // Por eso cada grabación abre una conexión nueva y la cierra al terminar.
  let lastRec = 'Todavía no se ha grabado.';
  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) throw new Error('Este navegador no permite grabar.');
    stopRecording();
    releaseMic();
    if (currentAudio) currentAudio.pause();
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const own = stream;
    const type = mime();
    const rec = new MediaRecorder(own, type ? { mimeType: type } : undefined);
    recorder = rec;
    const chunks = [];
    rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    const done = new Promise((res, rej) => {
      rec.onstop = () => {
        own.getTracks().forEach(t => t.stop());
        if (stream === own) stream = null;
        const blob = new Blob(chunks, { type: rec.mimeType || type || 'audio/mp4' });
        if (!blob.size) { lastRec = 'Última grabación: vacía'; rej(new Error('empty')); return; }
        lastRec = `Última grabación: OK (${Math.round(blob.size / 1024)} KB)`;
        res(blob);
      };
      rec.onerror = e => { lastRec = 'Última grabación: error ' + (e && e.error && e.error.name || ''); };
    });
    rec.start(250);
    return done;
  };
  const stopRecording = () => { if (recorder && recorder.state !== 'inactive') recorder.stop(); };
  const releaseMic = () => { if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; } };
  document.addEventListener('visibilitychange', () => { if (document.hidden) { stopRecording(); releaseMic(); synth && synth.cancel(); } });

  let currentAudio = null;
  // Audio grabado (ElevenLabs): velocidad lenta sin cambiar el tono.
  const playClip = (url, rate = 1) => new Promise(res => {
    if (currentAudio) currentAudio.pause();
    synth && synth.cancel();
    const a = new Audio(url);
    a.preservesPitch = true; a.webkitPreservesPitch = true;
    a.playbackRate = rate;
    currentAudio = a;
    a.onended = a.onerror = () => res();
    a.play().catch(() => res());
  });

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
        alert(e && e.message === 'empty'
          ? 'La grabación quedó vacía. Toca Grabar otra vez y habla después de que el botón se ponga rojo.'
          : 'No pude usar el micrófono. Revisa el permiso de micrófono para Safari o para la app.');
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

    box.replaceChildren(...[
      el('p', { class: 'hint', text: 'Lee la frase en español y dila en voz alta en francés. Luego revisa.' }),
      el('div', { class: 'card review-card' },
        el('p', { class: 'review-meta', text: `Quedan ${queue.length}` + (state.stars[p.id] ? ' · ★ difícil' : '') }),
        el('p', { class: 'es', text: v.es }),
        show,
        answer
      )
    ].filter(Boolean));
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
        status.textContent = e && e.message === 'empty'
          ? 'La grabación quedó vacía. Intenta de nuevo.'
          : 'No pude usar el micrófono. Revisa el permiso de micrófono.';
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
    [['voice-paul', 'Paul'], ['voice-claire', 'Claire']].forEach(([id, who]) => {
      const s2 = document.getElementById(id);
      const auto = speakerVoice(who);
      s2.replaceChildren(
        el('option', { value: '', text: 'Automática' + (auto ? ` (${auto.name})` : ' (cambio de tono)') }),
        ...voices.map(v => el('option', { value: v.voiceURI, text: `${v.name} (${v.lang})` }))
      );
      s2.value = state[who === 'Paul' ? 'voicePaul' : 'voiceClaire'] || '';
    });
    document.getElementById('voice-warning').hidden = voices.length > 0;
    renderDiag();
  };

  const renderDiag = () => {
    const d = document.getElementById('voice-diag');
    if (!d) return;
    const all = synth ? synth.getVoices().length : 0;
    const standalone = window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
    d.textContent = `Diagnóstico: ${voices.length} voces francesas de ${all} en total · ` +
      `${standalone ? 'abierta como app' : 'abierta en el navegador'} · ${lastSpeech} · ${lastRec}`;
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
    [['voice-paul', 'voicePaul', 'Paul', "Bonsoir ! Je m'appelle Paul."], ['voice-claire', 'voiceClaire', 'Claire', "Bonsoir ! Je m'appelle Claire."]]
      .forEach(([id, key, who, sample]) => {
        const s2 = document.getElementById(id);
        s2.addEventListener('change', () => {
          state[key] = s2.value || null; save(key, state[key]);
          renderVoiceSettings();
          speak(sample, 1, lineOpts({ who }));
        });
      });
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


  // ---------- Vista: Diálogo ----------
  const DLG = MOD.dialogue;
  let dialogueToken = 0;
  const dlgView = { text: false, trans: false, answers: {}, checked: false };
  let dlgResults = load('dlgResults', []);

  // Voces del diálogo: Paul con voz de hombre, Claire con voz de mujer.
  // Se eligen en Ajustes o se adivinan por el nombre de la voz; si no hay, se cambia el tono.
  const lineOpts = line => {
    const v = speakerVoice(line.who);
    if (v) return { voice: v };
    return line.who === 'Paul' ? { pitch: 0.75 } : { pitch: 1.25 };
  };

  const clipUrl = i => DLG.audioDir ? `${DLG.audioDir}${String(i + 1).padStart(2, '0')}.mp3` : null;
  const sayLine = (i, rate) => {
    const url = clipUrl(i);
    return url ? playClip(url, rate) : speak(DLG.lines[i].fr, rate, lineOpts(DLG.lines[i]));
  };

  const playDialogue = async rate => {
    const token = ++dialogueToken;
    const rows = document.querySelectorAll('#dialogue .line');
    for (let i = 0; i < DLG.lines.length; i++) {
      if (token !== dialogueToken) break;
      rows.forEach((r, j) => r.classList.toggle('playing', j === i));
      await sayLine(i, rate);
      if (token !== dialogueToken) break;
      await sleep(350);
    }
    rows.forEach(r => r.classList.remove('playing'));
  };

  const renderDialogue = () => {
    const box = document.getElementById('dialogue');
    const toggle = (label, key) => el('button', {
      type: 'button', class: 'btn' + (dlgView[key] ? ' on' : ''), text: label,
      onclick: () => { dlgView[key] = !dlgView[key]; renderDialogue(); }
    });

    const lines = el('div', { class: 'card' }, DLG.lines.map(l =>
      el('div', { class: 'line' },
        el('span', { class: 'who' + (l.who === 'Claire' ? ' claire' : ''), text: l.who }),
        el('div', {},
          el('p', { class: 'fr', lang: 'fr', text: l.fr }),
          dlgView.trans ? el('p', { class: 'es', text: l.es }) : null
        ),
        el('button', { type: 'button', class: 'btn', text: '▶', 'aria-label': 'Escuchar línea',
          onclick: () => { dialogueToken++; sayLine(DLG.lines.indexOf(l), 1); } })
      )
    ));
    if (!dlgView.text) lines.hidden = true;

    const qs = DLG.questions.map((q, qi) =>
      el('div', { class: 'q' },
        el('p', { text: `${qi + 1}. ${q.q}` }),
        q.options.map((o, oi) => {
          const chosen = dlgView.answers[qi] === oi;
          let cls = 'opt';
          if (dlgView.checked && oi === q.answer) cls += ' ok';
          else if (dlgView.checked && chosen) cls += ' bad';
          const input = el('input', { type: 'radio', name: 'q' + qi });
          input.checked = chosen;
          input.disabled = dlgView.checked;
          input.addEventListener('change', () => { dlgView.answers[qi] = oi; });
          return el('label', { class: cls }, input, el('span', { text: o }));
        })
      )
    );

    const score = DLG.questions.filter((q, i) => dlgView.answers[i] === q.answer).length;
    const checkBtn = el('button', {
      type: 'button', class: 'btn primary', text: dlgView.checked ? 'Intentar de nuevo' : 'Revisar respuestas',
      onclick: () => {
        if (dlgView.checked) { dlgView.checked = false; dlgView.answers = {}; renderDialogue(); return; }
        if (Object.keys(dlgView.answers).length < DLG.questions.length) { alert('Responde todas las preguntas primero.'); return; }
        dlgView.checked = true;
        const s = DLG.questions.filter((q, i) => dlgView.answers[i] === q.answer).length;
        dlgResults.push({ date: Date.now(), score: s, total: DLG.questions.length, withText: dlgView.text });
        save('dlgResults', dlgResults);
        renderDialogue();
      }
    });

    const history = dlgResults.slice(-5).reverse().map(r =>
      el('li', { text: `${fmtDate(r.date)}: ${r.score} de ${r.total}${r.withText ? ' (con texto)' : ''}` }));

    box.replaceChildren(...[
      el('h2', { text: DLG.title }),
      el('p', { class: 'scene muted', text: DLG.scene }),
      el('div', { class: 'row' },
        el('button', { type: 'button', class: 'btn primary', text: '▶ Escuchar todo', onclick: () => playDialogue(1) }),
        el('button', { type: 'button', class: 'btn', text: '▶ Lento', onclick: () => playDialogue(state.slowRate) }),
        el('button', { type: 'button', class: 'btn', text: '■ Parar', onclick: () => { dialogueToken++; synth && synth.cancel(); if (currentAudio) currentAudio.pause(); } })
      ),
      el('div', { class: 'row' }, toggle('Mostrar texto', 'text'), dlgView.text ? toggle('Traducción', 'trans') : null),
      dlgView.text ? null : el('p', { class: 'hint', text: 'Primero escucha sin texto. Cuando hayas respondido las preguntas, ábrelo y repite cada línea.' }),
      lines,
      el('h2', { text: 'Preguntas' }),
      el('div', { class: 'card' }, qs,
        dlgView.checked ? el('p', { class: 'score', text: `Resultado: ${score} de ${DLG.questions.length}` }) : null,
        checkBtn
      ),
      history.length ? el('h3', { text: 'Tus resultados' }) : null,
      history.length ? el('ul', { class: 'muted small' }, history) : null
    ].filter(Boolean));
  };

  // ---------- Vista: Hoy ----------
  const DAYS = MOD.week;
  const mondayOf = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); const wd = (x.getDay() + 6) % 7; x.setDate(x.getDate() - wd); return x; };
  const isoDate = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const todayIndex = () => Math.min((new Date().getDay() + 6) % 7, 5); // lunes=0 … sábado y domingo=5
  let shownDay = todayIndex();
  let checks = load('checks', {});
  let anchorThisWeek = false;

  const taskKey = (di, ti) => `${isoDate(mondayOf(new Date()))}:${di}:${ti}`;

  const checkinText = () => {
    const monday = mondayOf(new Date());
    let total = 0, doneN = 0;
    DAYS.slice(0, 5).forEach((d, di) => d.tasks.forEach((t, ti) => { total++; if (checks[taskKey(di, ti)]) doneN++; }));
    const weekResults = dlgResults.filter(r => r.date >= monday.getTime());
    const best = weekResults.reduce((m, r) => Math.max(m, r.score), -1);
    const seen = PHRASES.filter(p => state.srs[p.id]).length;
    const strong = PHRASES.filter(p => (state.srs[p.id] || {}).box >= 3).length;
    const hard = PHRASES.filter(p => state.stars[p.id]).map(p => '  · ' + p.fr);
    return [
      `Check-in semanal de francés, semana del ${monday.toLocaleDateString('es-CO', { day: 'numeric', month: 'long' })}`,
      `Módulo ${MOD.num}: ${MOD.title}`,
      `- Tareas completadas: ${doneN} de ${total}`,
      `- Diálogo: ${best >= 0 ? `mejor resultado ${best} de ${DLG.questions.length} (${weekResults.length} intentos)` : 'sin intentos esta semana'}`,
      `- Repaso: ${seen} de ${PHRASES.length} frases repasadas, ${strong} afianzadas`,
      `- Frases difíciles: ${hard.length ? '\n' + hard.join('\n') : 'ninguna marcada'}`,
      `- Grabación ancla esta semana: ${anchorThisWeek ? 'sí' : 'no'}`,
      `- Conversación en francés: ${convWeek().minutes || 0} minutos`,
      `- Palabras nuevas de la conversación: ${(convWeek().notes || '').trim() || 'ninguna anotada'}`,
      '',
      'Por favor: hazme un mini examen oral corto del módulo, revisa mis puntos débiles y ajusta el plan de la próxima semana.'
    ].join('\n');
  };

  const copyText = async (text, holder) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = el('textarea', { readonly: '' });
      ta.value = text;
      holder.replaceChildren(el('p', { class: 'muted small', text: 'No pude copiar automáticamente. Selecciona el texto y cópialo:' }), ta);
      ta.focus(); ta.select();
      return false;
    }
  };

  const renderToday = () => {
    const box = document.getElementById('today');
    const d = DAYS[shownDay];
    const monday = mondayOf(new Date());
    idb('anchor', 'readonly', s => s.getAll())
      .then(items => { anchorThisWeek = (items || []).some(it => it.date >= monday.getTime()); })
      .catch(() => {});

    const chips = el('div', { class: 'day-chips' }, DAYS.map((x, i) =>
      el('button', {
        type: 'button', class: 'chip' + (i === shownDay ? ' active' : '') + (i === todayIndex() ? ' today' : ''),
        text: x.day, onclick: () => { shownDay = i; renderToday(); }
      })));

    const tasks = d.tasks.map((t, ti) => {
      const key = taskKey(shownDay, ti);
      const cb = el('input', { type: 'checkbox', 'aria-label': 'Hecho' });
      cb.checked = !!checks[key];
      const row = el('div', { class: 'task' + (cb.checked ? ' checked' : '') });
      cb.addEventListener('change', () => {
        if (cb.checked) checks[key] = true; else delete checks[key];
        save('checks', checks);
        renderToday();
      });
      const holder = el('div');
      const actions = el('div', { class: 'row', style: 'margin:0' });
      if (t.go) actions.append(el('button', { type: 'button', class: 'btn', text: 'Ir', onclick: () => showTab(t.go) }));
      if (t.copy) {
        const btn = el('button', { type: 'button', class: 'btn primary', text: 'Copiar indicación' });
        btn.addEventListener('click', async () => {
          const text = t.copy === 'checkin' ? checkinText() : MOD.prompts[t.copy];
          if (await copyText(text, holder)) { btn.textContent = 'Copiado ✓'; setTimeout(() => { btn.textContent = 'Copiar indicación'; }, 2000); }
        });
        actions.append(btn);
      }
      row.append(cb, el('div', { class: 'body' }, el('p', { class: 'txt', text: t.text }), actions.childNodes.length ? actions : null, holder));
      return row;
    });

    const doneHere = d.tasks.filter((t, ti) => checks[taskKey(shownDay, ti)]).length;
    box.replaceChildren(...[
      el('p', { class: 'muted small', text: `Semana del ${monday.toLocaleDateString('es-CO', { day: 'numeric', month: 'long' })} · Módulo ${MOD.num}` }),
      chips,
      el('div', { class: 'day-head' },
        el('h2', { text: `${d.day}: ${d.focus}` }),
        el('p', { class: 'muted small', text: `${doneHere} de ${d.tasks.length} tareas hechas` }),
        el('div', { class: 'meter' }, el('span', { style: `width:${Math.round(100 * doneHere / d.tasks.length)}%` }))
      ),
      el('div', { class: 'card', style: 'margin-top:12px' }, tasks),
      shownDay < 5 ? el('p', { class: 'hint', text: 'Unos 30 minutos. Si un día tienes poco tiempo, con 5 minutos de Repaso basta: lo importante es no fallar dos días seguidos.' }) : null
    ].filter(Boolean));
  };

  // ---------- Vista: Conversación ----------
  let conv = load('conv', {});
  const convWeek = () => conv[isoDate(mondayOf(new Date()))] || {};
  const setConv = (k, v) => {
    const key = isoDate(mondayOf(new Date()));
    conv[key] = Object.assign({}, conv[key], { [k]: v });
    save('conv', conv);
  };

  const renderConversation = () => {
    const box = document.getElementById('conversation');
    const C = MOD.conversation;
    const list = (title, hint, items) => el('section', {},
      el('h2', { text: title }),
      hint ? el('p', { class: 'hint', text: hint }) : null,
      el('div', { class: 'card' }, items.map(it =>
        el('div', { class: 'line', style: 'grid-template-columns:1fr auto' },
          el('div', {}, el('p', { class: 'fr', lang: 'fr', text: it.fr }), el('p', { class: 'es', text: it.es })),
          el('button', { type: 'button', class: 'btn', text: '▶', 'aria-label': 'Escuchar', onclick: () => speak(it.fr, 1) })
        )))
    );
    const w = convWeek();
    const minutes = el('input', { type: 'number', min: '0', step: '5', inputmode: 'numeric', style: 'width:6rem;font-size:1rem;padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)' });
    minutes.value = w.minutes || '';
    minutes.addEventListener('input', () => setConv('minutes', Number(minutes.value) || 0));
    const notes = el('textarea', { rows: '4', placeholder: 'Ej.: « plongée » (¿buceo?), « la mer » …', style: 'width:100%;font:inherit;padding:8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)' });
    notes.value = w.notes || '';
    notes.addEventListener('input', () => setConv('notes', notes.value));

    box.replaceChildren(...[
      el('h2', { text: `Conversación: Módulo ${MOD.num}` }),
      el('p', { class: 'hint', text: 'Con tu amigo usas tu. Lleva la conversación con estas preguntas, cuenta algo de ti, y si te atascas, usa una frase de rescate en vez de pasar al español.' }),
      list('Preguntas para tu amigo', null, C.questions),
      list('Para contar de ti', null, C.aboutMe),
      list('Frases de rescate', null, C.rescue),
      el('h2', { text: 'Esta semana' }),
      el('div', { class: 'card' },
        el('label', { class: 'field' }, 'Minutos hablando en francés', minutes),
        el('label', { class: 'field' }, 'Palabras o frases que oíste y no conocías', notes),
        el('p', { class: 'muted small', text: 'Se guardan solas y van en el resumen del check-in del viernes.' })
      )
    ].filter(Boolean));
  };

  // ---------- Vista: Podcast ----------
  const renderPodcast = () => {
    const box = document.getElementById('podcast');
    const eps = (window.CURSO.podcast || []).slice().sort((a, b) => b.num - a.num);
    box.replaceChildren(...[
      el('h2', { text: 'Le petit café de Providencia' }),
      el('p', { class: 'hint', text: 'Un episodio por módulo: el diálogo despacio y a velocidad normal, frases para repetir en la pausa y preguntas para responder en voz alta. Funciona sin conexión.' }),
      ...eps.map(ep => {
        const audio = el('audio', { controls: '', preload: 'none', src: ep.file, style: 'width:100%;margin-top:10px' });
        return el('article', { class: 'card' },
          el('p', { class: 'fr', text: ep.title }),
          el('p', { class: 'es', text: `${ep.desc} · ${Math.round(ep.minutes)} min` }),
          audio);
      }),
      el('p', { class: 'muted small', text: 'También puedes seguirlo en Apple Podcasts: Biblioteca › ⋯ › Seguir un programa por URL, con la dirección https://pauljimca.github.io/Francais/podcast/feed.xml' })
    ].filter(Boolean));
  };

  // ---------- Navegación ----------
  const showTab = name => {
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.dataset.view !== name; });
    const navName = ['voz', 'gramatica', 'ajustes', 'conversacion', 'podcast'].includes(name) ? 'mas' : name;
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === navName));
    dialogueToken++;
    loopToken++;
    synth && synth.cancel();
    if (name === 'repaso') { buildQueue(); renderReview(); }
    if (name === 'ajustes') { loadVoices(); renderProgress(); }
    if (name === 'hoy') renderToday();
    if (name === 'dialogo') renderDialogue();
    if (name === 'conversacion') renderConversation();
    if (name === 'podcast') renderPodcast();
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
  document.querySelectorAll('.menu-item').forEach(b => b.addEventListener('click', () => showTab(b.dataset.go)));
  ['voz', 'gramatica', 'ajustes', 'conversacion', 'podcast'].forEach(v => {
    document.getElementById('view-' + v).prepend(el('button', { type: 'button', class: 'back', text: '‹ Más', onclick: () => showTab('mas') }));
  });
  setupAnchor();
  setupSettings();
  showTab('hoy');
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  // ---------- Modo sin conexión ----------
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(reg => {
      renderOffline('Listo para usarse sin conexión en este dispositivo.');
      // En iPhone, la app de la pantalla de inicio no siempre busca versiones nuevas sola:
      // se lo pedimos al abrir y cada vez que vuelve a la pantalla.
      const check = () => { if (navigator.onLine) reg.update().catch(() => {}); };
      check();
      document.addEventListener('visibilitychange', () => { if (!document.hidden) check(); });
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
