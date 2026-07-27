export function registerServiceWorker() {
  // Skip in dev: a caching SW fights Vite's HMR/live-reload by serving stale assets.
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .catch((err) => console.error('SW registration failed', err));
    });
  }
}

let deferredInstallPrompt = null;

function setInstallButtonsVisible(visible) {
  document.querySelectorAll('.install-app-btn').forEach((btn) => {
    btn.classList.toggle('hidden', !visible);
  });
}

// The "Install App" button (sidebar.html) starts hidden — there's nothing
// useful it can do until the browser decides the site is installable and
// fires this event. Event delegation on `document` (rather than binding
// directly to the button) means this works regardless of whether
// sidebar.html has been fetched/injected yet by the time this runs.
export function initInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallButtonsVisible(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
  });

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.install-app-btn');
    if (!btn || !deferredInstallPrompt) return;
    // A BeforeInstallPromptEvent can only be prompted once, accepted or not
    // — hide the button now rather than waiting for userChoice, since
    // there's nothing a second click could do with the same event.
    const promptEvent = deferredInstallPrompt;
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
    promptEvent.prompt();
  });
}
