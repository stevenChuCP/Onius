import { getRecentTools, clearRecent } from '../recent.js';
import { customIcons } from '../icons.js';
import { navigate } from '../router.js';
import { t } from '../i18n.js';

export const meta = {
  contentFile: 'home-content.html',
  title: 'Onius - Developer Utilities'
};

export async function init() {
  renderRecentTools();
  setupCardInteractions();
}

export function onPageShow() {
  renderRecentTools();
}

function renderRecentTools() {
  var section = document.getElementById('recent-section');
  var list = document.getElementById('recent-list');
  var clearBtn = document.getElementById('clear-recent');
  if (!section || !list) return;

  var tools = getRecentTools();

  if (tools.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  list.innerHTML = '';

  tools.forEach(function(tool) {
    var iconHtml = customIcons[tool.icon]
      ? '<span class="text-primary">' + customIcons[tool.icon] + '</span>'
      : '<span class="material-symbols-outlined text-primary">' + tool.icon + '</span>';
    var displayName = tool.key ? t('tool.' + tool.key + '.name') : tool.name;
    var card = document.createElement('div');
    card.className = 'w-48 sm:w-56 shrink-0 bg-surface-container-low border border-outline-variant rounded-lg p-md flex items-center gap-md hover:bg-surface-container-high transition-colors cursor-pointer group';
    card.innerHTML =
      '<div class="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors shrink-0">' +
        iconHtml +
      '</div>' +
      '<div class="min-w-0">' +
        '<p class="font-bold text-on-surface truncate">' + escapeHtml(displayName) + '</p>' +
      '</div>';
    card.addEventListener('click', function() { navigate(tool.slug); });
    list.appendChild(card);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      clearRecent();
      section.classList.add('hidden');
    });
  }
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function setupCardInteractions() {
  const cards = document.querySelectorAll('.bento-grid > div, .bento-grid > a, section .flex.gap-md > div');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
      card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0px)';
      card.style.boxShadow = 'none';
    });
  });
}

// module-level (not inside init) so this is only ever registered once,
// regardless of how many times the home route is (re-)entered
window.addEventListener('onius:langchange', renderRecentTools);
