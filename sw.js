// Guarda la app en el dispositivo para que funcione sin conexión.
// Cambia CACHE cada vez que se publique una versión nueva.
const CACHE = 'francais-v1.4.0';
const FILES = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'data.js',
  'manifest.webmanifest',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'audio/m1-dialogo/01.mp3',
  'audio/m1-dialogo/02.mp3',
  'audio/m1-dialogo/03.mp3',
  'audio/m1-dialogo/04.mp3',
  'audio/m1-dialogo/05.mp3',
  'audio/m1-dialogo/06.mp3',
  'audio/m1-dialogo/07.mp3',
  'audio/m1-dialogo/08.mp3',
  'audio/m1-dialogo/09.mp3',
  'audio/m1-dialogo/10.mp3',
  'audio/m1-dialogo/11.mp3',
  'audio/m1-dialogo/12.mp3',
  'audio/m1-dialogo/13.mp3',
  'audio/m1-dialogo/14.mp3',
  'audio/m1-dialogo/15.mp3',
  'audio/m1-dialogo/16.mp3',
  'audio/m1-dialogo/17.mp3',
  'audio/m1-frases/amelie/anchor.mp3',
  'audio/m1-frases/amelie/m1-01.mp3',
  'audio/m1-frases/amelie/m1-02.mp3',
  'audio/m1-frases/amelie/m1-03.mp3',
  'audio/m1-frases/amelie/m1-04-tu.mp3',
  'audio/m1-frases/amelie/m1-04.mp3',
  'audio/m1-frases/amelie/m1-05-tu.mp3',
  'audio/m1-frases/amelie/m1-05.mp3',
  'audio/m1-frases/amelie/m1-06.mp3',
  'audio/m1-frases/amelie/m1-07.mp3',
  'audio/m1-frases/amelie/m1-08.mp3',
  'audio/m1-frases/amelie/m1-09-tu.mp3',
  'audio/m1-frases/amelie/m1-09.mp3',
  'audio/m1-frases/amelie/m1-10.mp3',
  'audio/m1-frases/amelie/m1-11.mp3',
  'audio/m1-frases/amelie/m1-12.mp3',
  'audio/m1-frases/amelie/m1-13-tu.mp3',
  'audio/m1-frases/amelie/m1-13.mp3',
  'audio/m1-frases/amelie/m1-14-tu.mp3',
  'audio/m1-frases/amelie/m1-14.mp3',
  'audio/m1-frases/amelie/m1-15.mp3',
  'audio/m1-frases/amelie/m1-16.mp3',
  'audio/m1-frases/amelie/m1-17.mp3',
  'audio/m1-frases/amelie/m1-18.mp3',
  'audio/m1-frases/amelie/m1-19-tu.mp3',
  'audio/m1-frases/amelie/m1-19.mp3',
  'audio/m1-frases/amelie/m1-20.mp3',
  'audio/m1-frases/amelie/m1-21.mp3',
  'audio/m1-frases/amelie/m1-22.mp3',
  'audio/m1-frases/amelie/m1-23.mp3',
  'audio/m1-frases/amelie/m1-24.mp3',
  'audio/m1-frases/amelie/m1-25.mp3',
  'audio/m1-frases/amelie/m1-26.mp3',
  'audio/m1-frases/amelie/m1-27.mp3',
  'audio/m1-frases/amelie/m1-28-tu.mp3',
  'audio/m1-frases/amelie/m1-28.mp3',
  'audio/m1-frases/amelie/m1-29.mp3',
  'audio/m1-frases/amelie/m1-30-tu.mp3',
  'audio/m1-frases/amelie/m1-30.mp3',
  'audio/m1-frases/amelie/m1-31.mp3',
  'audio/m1-frases/amelie/m1-32.mp3',
  'audio/m1-frases/amelie/m1-33.mp3',
  'audio/m1-frases/amelie/m1-34.mp3',
  'audio/m1-frases/amelie/m1-35.mp3',
  'audio/m1-frases/amelie/m1-36.mp3',
  'audio/m1-frases/paul/anchor.mp3',
  'audio/m1-frases/paul/m1-01.mp3',
  'audio/m1-frases/paul/m1-02.mp3',
  'audio/m1-frases/paul/m1-03.mp3',
  'audio/m1-frases/paul/m1-04-tu.mp3',
  'audio/m1-frases/paul/m1-04.mp3',
  'audio/m1-frases/paul/m1-05-tu.mp3',
  'audio/m1-frases/paul/m1-05.mp3',
  'audio/m1-frases/paul/m1-06.mp3',
  'audio/m1-frases/paul/m1-07.mp3',
  'audio/m1-frases/paul/m1-08.mp3',
  'audio/m1-frases/paul/m1-09-tu.mp3',
  'audio/m1-frases/paul/m1-09.mp3',
  'audio/m1-frases/paul/m1-10.mp3',
  'audio/m1-frases/paul/m1-11.mp3',
  'audio/m1-frases/paul/m1-12.mp3',
  'audio/m1-frases/paul/m1-13-tu.mp3',
  'audio/m1-frases/paul/m1-13.mp3',
  'audio/m1-frases/paul/m1-14-tu.mp3',
  'audio/m1-frases/paul/m1-14.mp3',
  'audio/m1-frases/paul/m1-15.mp3',
  'audio/m1-frases/paul/m1-16.mp3',
  'audio/m1-frases/paul/m1-17.mp3',
  'audio/m1-frases/paul/m1-18.mp3',
  'audio/m1-frases/paul/m1-19-tu.mp3',
  'audio/m1-frases/paul/m1-19.mp3',
  'audio/m1-frases/paul/m1-20.mp3',
  'audio/m1-frases/paul/m1-21.mp3',
  'audio/m1-frases/paul/m1-22.mp3',
  'audio/m1-frases/paul/m1-23.mp3',
  'audio/m1-frases/paul/m1-24.mp3',
  'audio/m1-frases/paul/m1-25.mp3',
  'audio/m1-frases/paul/m1-26.mp3',
  'audio/m1-frases/paul/m1-27.mp3',
  'audio/m1-frases/paul/m1-28-tu.mp3',
  'audio/m1-frases/paul/m1-28.mp3',
  'audio/m1-frases/paul/m1-29.mp3',
  'audio/m1-frases/paul/m1-30-tu.mp3',
  'audio/m1-frases/paul/m1-30.mp3',
  'audio/m1-frases/paul/m1-31.mp3',
  'audio/m1-frases/paul/m1-32.mp3',
  'audio/m1-frases/paul/m1-33.mp3',
  'audio/m1-frases/paul/m1-34.mp3',
  'audio/m1-frases/paul/m1-35.mp3',
  'audio/m1-frases/paul/m1-36.mp3',
  'podcast/ep01-bonjour.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

// Safari pide el audio por partes (Range). Desde el caché respondemos con la parte pedida (206).
const rangeResponse = async (request, response) => {
  const range = request.headers.get('range');
  if (!range) return response;
  const buf = await response.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  const start = m[1] ? Number(m[1]) : 0;
  const end = m[2] ? Math.min(Number(m[2]), buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${buf.byteLength}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
};

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.match(event.request.url, { ignoreSearch: true }).then(hit =>
        hit ? rangeResponse(event.request, hit) : fetch(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(event.request).catch(() => caches.match('index.html'));
    })
  );
});
