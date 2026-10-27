// Service worker: salva i file dell'app così si apre subito anche con rete lenta.
const CACHE = 'traduttore-v1';
const FILE = ['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILE)));
});

self.addEventListener('fetch', e => {
  // Le traduzioni vanno sempre chieste a internet, non dalla cache
  if (e.request.url.includes('mymemory')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
