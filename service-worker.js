const CACHE_NAME = 'ojix-site-v16';
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
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

  // Network-first for HTML documents, stylesheets, and scripts to guarantee instant visual updates
  const isCodeAsset = event.request.mode === 'navigate' ||
                      event.request.destination === 'style' ||
                      event.request.destination === 'script' ||
                      event.request.url.includes('.css') ||
                      event.request.url.includes('.js');

  if (isCodeAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache)).catch(() => {});
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : null)))
    );
    return;
  }

  // Cache-first with background revalidation for static media (images, fonts, icons)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((response) => {
        if (response && response.ok && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache)).catch(() => {});
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
