import { customIcons } from '/js/icons.js';
import { applyTranslations } from '/js/i18n.js';

const COMPONENT_BASE = 'components';
const SIDEBAR_STATE_KEY = 'onius_sidebar_shrunk';

function replaceCustomIcons(container) {
  container.querySelectorAll('[data-icon]').forEach(function(el) {
    var key = el.getAttribute('data-icon');
    var svg = customIcons[key];
    if (svg) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = svg;
      var svgEl = wrapper.firstElementChild;
      if (svgEl) {
        var extra = '';
        el.classList.forEach(function(c) {
          if (c !== 'material-symbols-outlined') extra += ' ' + c;
        });
        svgEl.setAttribute('class', 'w-7 h-7 inline-block shrink-0 align-middle' + extra);
        el.replaceWith(svgEl);
      }
    }
  });
}

export async function loadComponent(id, file) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const res = await fetch(`${COMPONENT_BASE}/${file}`);
        if (!res.ok) throw new Error(`Failed to load ${file}`);
        el.innerHTML = await res.text();
        replaceCustomIcons(el);
        applyTranslations(el);
    } catch (e) {
        console.error('Component load error:', e);
    }
}

export async function loadComponents(components) {
    const promises = components.map(({ id, file }) => loadComponent(id, file));
    await Promise.all(promises);
}

export function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('main-sidebar');
    const headerLeft = document.getElementById('header-left');
    if (!toggleBtn || !sidebar) return;

    const applyState = (shrunk) => {
        if (shrunk) {
            sidebar.style.width = '80px';
            sidebar.querySelectorAll('.sidebar-text, .sidebar-label, .sidebar-install-card').forEach(el => el.classList.add('hidden'));
            sidebar.querySelectorAll('#sidebar-nav a').forEach(el => {
                el.classList.add('justify-center');
                el.classList.remove('px-md');
                el.classList.add('px-0');
            });
            if (headerLeft && window.innerWidth >= 768) { headerLeft.style.width = ''; headerLeft.style.paddingLeft = '20px'; }
            toggleBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        } else {
            sidebar.style.width = '280px';
            sidebar.querySelectorAll('.sidebar-text, .sidebar-label, .sidebar-install-card').forEach(el => el.classList.remove('hidden'));
            sidebar.querySelectorAll('#sidebar-nav a').forEach(el => {
                el.classList.remove('justify-center');
                el.classList.add('px-md');
                el.classList.remove('px-0');
            });
            if (headerLeft && window.innerWidth >= 768) { headerLeft.style.width = '280px'; headerLeft.style.paddingLeft = '24px'; }
            toggleBtn.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>';
        }
    };

    const saved = localStorage.getItem(SIDEBAR_STATE_KEY) === 'true';
    applyState(saved);

    toggleBtn.addEventListener('click', () => {
        const isShrunk = sidebar.style.width === '80px';
        const newShrunk = !isShrunk;
        applyState(newShrunk);
        localStorage.setItem(SIDEBAR_STATE_KEY, newShrunk);
    });
}

export function initSidebarSettingsPopover() {
    const trigger = document.getElementById('sidebar-settings-trigger');
    const popover = document.getElementById('sidebar-settings-popover');
    if (!trigger || !popover) return;

    const isOpen = () => !popover.classList.contains('hidden');
    const close = () => popover.classList.add('hidden');

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        popover.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (isOpen() && !popover.contains(e.target) && e.target !== trigger) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) close();
    });
}
