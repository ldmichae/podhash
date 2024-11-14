// public/worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/static/css/*',   
  
          '/static/js/*',
          '/_next/*',
          '/',
        ]);
      })
    );
  });