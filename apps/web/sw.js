const CACHE_NAME = 'onius-v0.2';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './manifest.webmanifest',
    './favicon.ico',
    './android-chrome-192x192.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Advanced fetch handler for WASM and dynamic assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then((networkResponse) => {
                // Cache valid responses for offline use (especially WASM)
                if (networkResponse && networkResponse.status === 200) {
                    const cacheCopy = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, cacheCopy);
                    });
                }
                return networkResponse;
            });
        }).catch(() => {
            // Offline fallback
            return caches.match('./index.html');
        })
    );
});
