import { toolRegistry } from '/js/tools.js';
import { customIcons } from '/js/icons.js';
import { toggleTheme } from '/js/theme.js';
import { t, translateCategory, formatToolsOverlaySubtitle } from '/js/i18n.js';

var scrollState = { lastY: 0, ticking: false, hidden: false };

export function initMobileLayout() {
  makeHeaderFixed();
  initScrollHeader();
  initBottomBarNav();
  initToolsOverlay();
  initSettingsModal();
}

function makeHeaderFixed() {
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  if (!header || !main) return;
  header.classList.add('mobile-header-fixed');
  var spacer = document.createElement('div');
  spacer.className = 'mobile-header-spacer';
  main.prepend(spacer);
}

export function initScrollHeader() {
  var main = document.querySelector('main');
  var header = document.querySelector('header');
  if (!main || !header) return;
  scrollState.lastY = main.scrollTop;
  main.addEventListener('scroll', onScroll);
}

function onScroll() {
  if (scrollState.ticking) return;
  scrollState.ticking = true;
  window.requestAnimationFrame(function () {
    var main = document.querySelector('main');
    var header = document.querySelector('header');
    if (!main || !header) { scrollState.ticking = false; return; }
    var currentY = main.scrollTop;
    var delta = currentY - scrollState.lastY;
    if (delta > 5 && currentY > 60) {
      if (!scrollState.hidden) {
        header.classList.add('header-hidden');
        scrollState.hidden = true;
      }
    } else if (delta < -5 || currentY <= 60) {
      if (scrollState.hidden) {
        header.classList.remove('header-hidden');
        scrollState.hidden = false;
      }
    }
    scrollState.lastY = currentY;
    scrollState.ticking = false;
  });
}

function initBottomBarNav() {
  var bar = document.getElementById('bottombar-placeholder');
  if (!bar) return;
  var toolsBtn = bar.querySelector('[data-nav="tools"]');
  var settingsBtn = bar.querySelector('[data-nav="settings"]');
  if (toolsBtn) toolsBtn.addEventListener('click', function (e) { e.preventDefault(); showToolsOverlay(); });
  if (settingsBtn) settingsBtn.addEventListener('click', function (e) { e.preventDefault(); showSettingsModal(); });
  highlightBottomNav(bar, window.location.pathname);
}

function highlightBottomNav(bar, path) {
  var isHome = (path === '/' || path === '' || path === '/index.html');
  bar.querySelectorAll('[data-nav]').forEach(function (el) {
    var nav = el.getAttribute('data-nav');
    var active = nav === 'home' && isHome;
    el.classList.toggle('bg-primary-container', active);
    el.classList.toggle('text-on-primary-container', active);
  });
}

export function updateMobileNav(path) {
  var bar = document.getElementById('bottombar-placeholder');
  if (bar) highlightBottomNav(bar, path == null ? window.location.pathname : path);
}

export function closeMobileOverlays() {
  hideToolsOverlay();
  hideSettingsModal();
}

function enableScrollLock() {
  document.body.classList.add('overlay-open');
}

function disableScrollLock() {
  document.body.classList.remove('overlay-open');
}

function showToolsOverlay() {
  var overlay = document.getElementById('tools-overlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');
  enableScrollLock();
  populateToolsGrid();
}

function hideToolsOverlay() {
  var overlay = document.getElementById('tools-overlay');
  if (!overlay) return;
  overlay.classList.add('hidden');
  disableScrollLock();
}

function populateToolsGrid() {
  var grid = document.getElementById('tools-grid');
  if (!grid) return;
  grid.innerHTML = '';
  var entries = Object.entries(toolRegistry);
  var liveCount = entries.filter(function (e) { return !!e[1].slug; }).length;
  setToolsOverlaySubtitle(liveCount, entries.length - liveCount);

  var seen = [];
  var sections = {};
  entries.forEach(function (_a) {
    var tool = _a[1];
    var cat = tool.category || 'More';
    if (!sections[cat]) { sections[cat] = []; seen.push(cat); }
    sections[cat].push(_a);
  });

  seen.forEach(function (cat) {
    var label = document.createElement('div');
    label.className = 'tools-section-label';
    label.textContent = translateCategory(cat);
    grid.appendChild(label);
    sections[cat].forEach(function (_a) {
      grid.appendChild(buildToolCard(_a[0], _a[1]));
    });
  });
}

function setToolsOverlaySubtitle(liveCount, soonCount) {
  var el = document.getElementById('tools-overlay-subtitle');
  if (!el) return;
  el.textContent = formatToolsOverlaySubtitle(liveCount, soonCount);
}

function buildToolCard(key, tool) {
  var isActive = !!tool.slug;
  var card = document.createElement('a');
  card.className = getBaseClass() + (isActive ? '' : ' soon');
  if (isActive) {
    card.href = tool.slug;
  } else {
    card.href = '#';
    card.addEventListener('click', function (e) { e.preventDefault(); });
  }
  var iconHtml = customIcons[tool.icon]
    ? customIcons[tool.icon]
    : '<span class="material-symbols-outlined">' + tool.icon + '</span>';
  card.innerHTML =
    '<div class="tool-icon-wrap tool-accent-' + (tool.accent || 'primary') + '">' + iconHtml +
      (isActive ? '' : '<span class="soon-badge">' + t('common.soon') + '</span>') +
    '</div>' +
    '<span class="tool-name">' + t('tool.' + key + '.name') + '</span>';
  return card;
}

function getBaseClass() {
  return 'no-underline';
}

function showSettingsModal() {
  var modal = document.getElementById('settings-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  enableScrollLock();
  syncSettingsTheme();
}

function hideSettingsModal() {
  var modal = document.getElementById('settings-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  disableScrollLock();
}

function syncSettingsTheme() {
  var icon = document.getElementById('settings-theme-icon');
  var label = document.getElementById('settings-theme-label');
  if (!icon || !label) return;
  var isDark = document.documentElement.classList.contains('dark');
  icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  label.textContent = isDark ? t('theme.dark') : t('theme.light');
}

function initToolsOverlay() {
  var backdrop = document.getElementById('tools-overlay-backdrop');
  var closeBtn = document.getElementById('tools-overlay-close');
  if (backdrop) backdrop.addEventListener('click', hideToolsOverlay);
  if (closeBtn) closeBtn.addEventListener('click', hideToolsOverlay);
  window.addEventListener('onius:langchange', function () {
    syncSettingsTheme();
    var overlay = document.getElementById('tools-overlay');
    if (overlay && !overlay.classList.contains('hidden')) populateToolsGrid();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hideToolsOverlay();
      hideSettingsModal();
    }
  });
}

function initSettingsModal() {
  var backdrop = document.getElementById('settings-modal-backdrop');
  var closeBtn = document.getElementById('settings-modal-close');
  var themeBtn = document.getElementById('settings-theme-btn');
  if (backdrop) backdrop.addEventListener('click', hideSettingsModal);
  if (closeBtn) closeBtn.addEventListener('click', hideSettingsModal);
  if (themeBtn) themeBtn.addEventListener('click', function () {
    toggleTheme();
    syncSettingsTheme();
  });
}
