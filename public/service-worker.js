// service-worker.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('medikove-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/icon-192x192.png',
          '/icon-512x512.png',
          // Add paths to other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  