export function registerServiceWorker() {
  // Skip in dev: a caching SW fights Vite's HMR/live-reload by serving stale assets.
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .catch((err) => console.error('SW registration failed', err));
    });
  }
}
