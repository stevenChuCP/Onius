import { t } from '../i18n.js';
import { trackVisit } from '../recent.js';
import { toolRegistry } from '../tools.js';

export const meta = {
  contentFile: 'ecdh-content.html',
  title: 'Onius — ' + toolRegistry.ecdh.name
};

// P-521's field is 521 bits wide, so the shared point's x-coordinate (what
// deriveBits returns) is conventionally packed into 66 bytes (528 bits).
const DERIVE_BITS = { 'P-256': 256, 'P-384': 384, 'P-521': 528 };

let curve = 'P-256';
const parties = {
  alice: { keyPair: null },
  bob: { keyPair: null }
};

function $(id) {
  return document.getElementById(id);
}

function isSupported() {
  return !!(window.isSecureContext && window.crypto && window.crypto.subtle);
}

function buf2hex(buf) {
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hex2buf(hex) {
  const clean = hex.trim().replace(/\s+/g, '');
  if (!clean || clean.length % 2 !== 0 || /[^0-9a-fA-F]/.test(clean)) {
    throw new Error(t('ecdh.error.invalidHex'));
  }
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(clean.substr(i * 2, 2), 16);
  return bytes.buffer;
}

function setRevealed(name, revealed) {
  const input = $(name + '-private-key');
  const btn = $(name + '-private-key-reveal');
  if (!input || !btn) return;
  input.type = revealed ? 'text' : 'password';
  btn.querySelector('.material-symbols-outlined').textContent = revealed ? 'visibility_off' : 'visibility';
  btn.setAttribute('aria-label', revealed ? t('ecdh.privateKey.hide') : t('ecdh.privateKey.show'));
}

function showError(name, message) {
  const el = $(name + '-error');
  const text = $(name + '-error-text');
  if (!el || !text) return;
  text.textContent = message;
  el.classList.remove('hidden');
}

function clearError(name) {
  const el = $(name + '-error');
  if (el) el.classList.add('hidden');
}

function updateButtonStates() {
  const aReady = !!parties.alice.keyPair;
  const bReady = !!parties.bob.keyPair;
  const exchangeBtn = $('exchange-btn');
  if (exchangeBtn) exchangeBtn.disabled = !(aReady && bReady);

  ['alice', 'bob'].forEach(name => {
    const btn = $(name + '-derive-btn');
    const peerKey = $(name + '-peer-key');
    if (btn && peerKey) btn.disabled = !(parties[name].keyPair && peerKey.value.trim());
  });
}

function updateMatchBanner() {
  const a = $('alice-shared-secret').value;
  const b = $('bob-shared-secret').value;
  const banner = $('ecdh-match-banner');
  const icon = $('ecdh-match-icon');
  const text = $('ecdh-match-text');
  if (!banner || !icon || !text) return;

  if (!a || !b) {
    banner.classList.add('hidden');
    return;
  }

  const match = a === b;
  banner.classList.remove('hidden');
  banner.style.borderColor = `color-mix(in srgb, var(${match ? '--clr-success' : '--clr-error'}) 30%, transparent)`;
  banner.style.background = `color-mix(in srgb, var(${match ? '--clr-success' : '--clr-error'}) 10%, transparent)`;
  icon.style.color = `var(${match ? '--clr-success' : '--clr-error'})`;
  icon.textContent = match ? 'check_circle' : 'error';
  text.style.color = `var(${match ? '--clr-success' : '--clr-error'})`;
  text.textContent = match ? t('ecdh.match.success') : t('ecdh.match.failure');
}

async function generateParty(name) {
  if (!isSupported()) return;
  const btn = $(name + '-generate-btn');
  if (btn) btn.disabled = true;
  try {
    const keyPair = await crypto.subtle.generateKey(
      { name: 'ECDH', namedCurve: curve },
      true,
      ['deriveBits']
    );
    parties[name].keyPair = keyPair;

    const rawPub = await crypto.subtle.exportKey('raw', keyPair.publicKey);
    const pkcs8Priv = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

    $(name + '-public-key').value = buf2hex(rawPub);
    $(name + '-private-key').value = buf2hex(pkcs8Priv);
    $(name + '-peer-key').value = '';
    $(name + '-shared-secret').value = '';
    setRevealed(name, false);
    clearError(name);
  } catch (e) {
    showError(name, t('ecdh.error.keygenFailed') + ' (' + (e && e.message || e) + ')');
  } finally {
    if (btn) btn.disabled = false;
    updateMatchBanner();
    updateButtonStates();
  }
}

function exchangeKeys() {
  const aPub = $('alice-public-key').value;
  const bPub = $('bob-public-key').value;
  if (!aPub || !bPub) return;
  $('alice-peer-key').value = bPub;
  $('bob-peer-key').value = aPub;
  $('alice-shared-secret').value = '';
  $('bob-shared-secret').value = '';
  clearError('alice');
  clearError('bob');
  updateMatchBanner();
  updateButtonStates();
}

async function deriveParty(name) {
  const party = parties[name];
  const peerHex = $(name + '-peer-key').value.trim();
  clearError(name);
  if (!party.keyPair || !peerHex) return;

  try {
    const peerPublicKey = await crypto.subtle.importKey(
      'raw', hex2buf(peerHex), { name: 'ECDH', namedCurve: curve }, true, []
    );
    const bits = await crypto.subtle.deriveBits(
      { name: 'ECDH', public: peerPublicKey }, party.keyPair.privateKey, DERIVE_BITS[curve]
    );
    $(name + '-shared-secret').value = buf2hex(bits);
  } catch (e) {
    $(name + '-shared-secret').value = '';
    showError(name, t('ecdh.error.deriveFailed') + ' (' + (e && e.message || e) + ')');
  }
  updateMatchBanner();
}

function resetUI() {
  ['alice', 'bob'].forEach(name => {
    $(name + '-public-key').value = '';
    $(name + '-private-key').value = '';
    $(name + '-peer-key').value = '';
    $(name + '-shared-secret').value = '';
    clearError(name);
    setRevealed(name, false);
  });
  $('ecdh-match-banner').classList.add('hidden');
  updateButtonStates();
}

function resetParties() {
  parties.alice = { keyPair: null };
  parties.bob = { keyPair: null };
  resetUI();
}

function bindCopy(btnId, fieldId) {
  const btn = $(btnId);
  const field = $(fieldId);
  if (!btn || !field) return;
  btn.addEventListener('click', () => {
    if (!field.value) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(field.value);
    } else {
      field.select();
      document.execCommand('copy');
    }
    const icon = btn.querySelector('.material-symbols-outlined');
    const orig = icon.textContent;
    icon.textContent = 'done';
    setTimeout(() => { icon.textContent = orig; }, 1200);
  });
}

function bindEvents() {
  document.querySelectorAll('.curve-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      if (pill.dataset.curve === curve) return;
      curve = pill.dataset.curve;
      document.querySelectorAll('.curve-pill').forEach(p => p.classList.toggle('active', p === pill));
      resetParties();
    });
  });

  $('alice-generate-btn').addEventListener('click', () => generateParty('alice'));
  $('bob-generate-btn').addEventListener('click', () => generateParty('bob'));
  $('exchange-btn').addEventListener('click', exchangeKeys);
  $('alice-derive-btn').addEventListener('click', () => deriveParty('alice'));
  $('bob-derive-btn').addEventListener('click', () => deriveParty('bob'));
  $('ecdh-reset-btn').addEventListener('click', resetParties);

  ['alice', 'bob'].forEach(name => {
    $(name + '-private-key-reveal').addEventListener('click', () => {
      const input = $(name + '-private-key');
      setRevealed(name, input.type === 'password');
    });
    $(name + '-peer-key').addEventListener('input', () => {
      $(name + '-shared-secret').value = '';
      clearError(name);
      updateMatchBanner();
      updateButtonStates();
    });
  });

  bindCopy('alice-public-key-copy', 'alice-public-key');
  bindCopy('alice-private-key-copy', 'alice-private-key');
  bindCopy('alice-shared-secret-copy', 'alice-shared-secret');
  bindCopy('bob-public-key-copy', 'bob-public-key');
  bindCopy('bob-private-key-copy', 'bob-private-key');
  bindCopy('bob-shared-secret-copy', 'bob-shared-secret');
}

export async function init() {
  trackVisit(toolRegistry.ecdh.name, toolRegistry.ecdh.icon, toolRegistry.ecdh.slug, 'ecdh');

  curve = 'P-256';
  parties.alice = { keyPair: null };
  parties.bob = { keyPair: null };

  const warning = $('ecdh-browser-warning');
  const supported = isSupported();
  if (warning) warning.classList.toggle('hidden', supported);
  ['alice-generate-btn', 'bob-generate-btn'].forEach(id => {
    const btn = $(id);
    if (btn) btn.disabled = !supported;
  });

  resetUI();
  bindEvents();
}
