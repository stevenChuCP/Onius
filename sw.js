const c = "onius-v0.5.0", h = ["/", "/index.html", "/base64.html", "/archiver.html", "/css/style.css", "/js/config.js", "/components/shell.html", "/components/sidebar.html", "/components/header.html", "/components/footer.html", "/components/bottombar.html", "/components/tools-overlay.html", "/components/settings-modal.html", "/components/home-content.html", "/components/base64-content.html", "/components/archiver-content.html", "/manifest.webmanifest", "/favicon.ico", "/android-chrome-192x192.png"];
self.addEventListener("install", (t) => {
  t.waitUntil(caches.open(c).then((n) => n.addAll(h)));
});
self.addEventListener("activate", (t) => {
  t.waitUntil(caches.keys().then((n) => Promise.all(n.filter((e) => e !== c).map((e) => caches.delete(e)))));
});
self.addEventListener("fetch", (t) => {
  t.respondWith(caches.match(t.request).then((n) => n || fetch(t.request).then((e) => {
    if (e && e.status === 200) {
      const s = e.clone();
      caches.open(c).then((o) => {
        o.put(t.request, s);
      });
    }
    return e;
  })).catch(() => caches.match("/index.html")));
});
