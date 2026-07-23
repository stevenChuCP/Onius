// __APP_VERSION__ is inlined at build time (see vite.config.js) — sw.js is
// only ever fetched in production (registration is skipped in dev, see
// js/pwa.js), so this doesn't need to work as a live import in dev.
const CACHE_NAME = 'onius-v' + __APP_VERSION__;
// Only assets guaranteed to keep a stable, unhashed URL in the production
// build: the HTML entry documents themselves (Vite/Rollup entry outputs) and
// files served verbatim from public/ (css, this one js file, the component
// fragments, manifest, icons). Everything reached through the JS module
// graph (js/router.js, js/pages/*.js, pkg/onius_wasm*, ...) gets
// content-hashed into assets/*-<hash>.* at build time, so its dev-time path
// won't exist post-build — cache.addAll() is atomic, and a single 404 among
// those would fail the entire install. Those get cached opportunistically
// instead, by the fetch handler below, the first time they're requested.
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/base64.html',
    '/archiver.html',
    '/css/style.css',
    '/js/config.js',
    '/components/shell.html',
    '/components/sidebar.html',
    '/components/header.html',
    '/components/footer.html',
    '/components/bottombar.html',
    '/components/tools-overlay.html',
    '/components/settings-modal.html',
    '/components/home-content.html',
    '/components/base64-content.html',
    '/components/archiver-content.html',
    '/manifest.webmanifest',
    '/favicon.ico',
    '/android-chrome-192x192.png'
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
            return caches.match('/index.html');
        })
    );
});
