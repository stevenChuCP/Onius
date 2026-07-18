import { loadComponent, loadComponents, initSidebarToggle, initSidebarSettingsPopover } from './components.js';
import { setupThemeToggle, initTheme } from './theme.js';
import { initMobileLayout, updateMobileNav, closeMobileOverlays } from './mobile.js';
import { initI18n, initLangToggles } from './i18n.js';

import * as homePage from './pages/home.js';
import * as base64Page from './pages/base64.js';
import * as archiverPage from './pages/archiver.js';

const routes = {
  '/': homePage,
  '/index.html': homePage,
  '/base64.html': base64Page,
  '/archiver.html': archiverPage
};

function normalizePath(path) {
  return path === '' ? '/' : path;
}

function resolveRoute(path) {
  return routes[normalizePath(path)] || null;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function waitForAnimations(el) {
  return Promise.all(el.getAnimations().map(a => a.finished.catch(() => {})));
}

async function fadeOut() {
  const main = document.getElementById('main-content');
  if (!main) return;
  main.classList.remove('page-fade-in');
  main.classList.add('page-fade-out');
  await waitForAnimations(main);
  main.classList.remove('page-fade-out');
}

function fadeIn() {
  const main = document.getElementById('main-content');
  if (!main) return;
  main.classList.add('page-fade-in');
  waitForAnimations(main).then(() => main.classList.remove('page-fade-in'));
}

function highlightActiveNav(path) {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  const normalized = normalizePath(path);
  nav.querySelectorAll('a').forEach(link => {
    link.classList.remove('text-primary', 'font-bold', 'bg-primary-container/20');
    const href = link.getAttribute('href');
    if (href === normalized) {
      link.classList.add('text-primary', 'font-bold', 'bg-primary-container/20');
    }
  });
}

async function renderRoute(path) {
  const page = resolveRoute(path) || homePage;
  closeMobileOverlays();
  await loadComponent('main-content', page.meta.contentFile);
  document.title = page.meta.title;
  highlightActiveNav(path);
  updateMobileNav(path);
  await page.init();
  const main = document.querySelector('main');
  if (main) main.scrollTop = 0;
}

export async function navigate(path, options) {
  options = options || {};
  const replace = !!options.replace;
  const normalized = normalizePath(path);

  if (!replace && normalized === normalizePath(window.location.pathname)) return;

  const doRender = () => renderRoute(normalized);
  const updateHistory = () => {
    if (replace) history.replaceState({ path: normalized }, '', normalized);
    else history.pushState({ path: normalized }, '', normalized);
  };

  if (prefersReducedMotion()) {
    await doRender();
    updateHistory();
  } else if (document.startViewTransition) {
    // update the URL as soon as the content has swapped in — don't wait for
    // the (much longer) animation to finish playing before history reflects it
    const transition = document.startViewTransition(doRender);
    try { await transition.updateCallbackDone; } catch (e) { /* ignore */ }
    updateHistory();
    transition.finished.catch(() => {});
  } else {
    await fadeOut();
    await doRender();
    updateHistory();
    fadeIn();
  }
}

function isNavigableLink(link) {
  if (!link) return false;
  if (link.target && link.target !== '_self') return false;
  if (link.hasAttribute('download')) return false;
  let url;
  try { url = new URL(link.href, window.location.href); }
  catch (e) { return false; }
  if (url.origin !== window.location.origin) return false;
  return !!resolveRoute(url.pathname);
}

function bindLinkInterception() {
  document.addEventListener('click', function(e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href]');
    if (!isNavigableLink(link)) return;
    e.preventDefault();
    navigate(new URL(link.href, window.location.href).pathname);
  });

  window.addEventListener('popstate', function() {
    renderRoute(window.location.pathname);
  });
}

export async function startRouter() {
  initI18n();
  await loadComponent('app-shell', 'shell.html');
  await loadComponents([
    { id: 'sidebar-placeholder', file: 'sidebar.html' },
    { id: 'header-placeholder', file: 'header.html' },
    { id: 'footer-placeholder', file: 'footer.html' },
    { id: 'bottombar-placeholder', file: 'bottombar.html' },
    { id: 'tools-overlay-placeholder', file: 'tools-overlay.html' },
    { id: 'settings-modal-placeholder', file: 'settings-modal.html' }
  ]);

  setupThemeToggle();
  initTheme();
  initSidebarToggle();
  initSidebarSettingsPopover();
  initLangToggles();
  initMobileLayout();
  bindLinkInterception();

  history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
  await renderRoute(window.location.pathname);

  window.addEventListener('pageshow', function() {
    const page = resolveRoute(window.location.pathname);
    if (page && page.onPageShow) page.onPageShow();
  });
}
