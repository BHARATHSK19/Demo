const CACHE_NAME = 'ojix-site-v9';
const CORE_ASSETS = [
  './', './index.html', './styles.css', './app.js', './assets/vendor/visual-effects.js', './manifest.webmanifest',
  './assets/ojix-primary-transparent-onlight.svg',
  './assets/ojix-primary-transparent-ondark.svg',
  './assets/ojix-appicon-navy-rounded.svg',
  './assets/ojix-icon-navy.svg',
  './assets/favicon-32.png',
  './assets/favicon-180.png',
  './assets/favicon-192.png',
  './assets/favicon-512.png',
  './assets/og-image.png',
  './assets/ojix-social-2026.png'
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

  // Documents are always fetched first, so visitors receive critical updates promptly.
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => {
    const network = fetch(event.request).then((response) => {
      const cacheControl = response.headers.get('Cache-Control') || '';
      if (response && response.ok && response.type === 'basic' && !cacheControl.includes('no-store')) {
        try {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache)).catch(() => {});
        } catch (e) {
          // Ignore clone errors if already streamed
        }
      }
      return response;
    }).catch(() => cached);
    return cached || network;
  }));
});
