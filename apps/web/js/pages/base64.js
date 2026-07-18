// Format conversion is implemented once, in Rust/WASM (apps/web/src/lib.rs,
// backed by onius_core). This module is a thin adapter between that export
// and the UI's format-name/error conventions — no conversion logic lives
// here.
import initWasm, { convert as wasmConvert } from '/pkg/onius_wasm.js';
import { t } from '../i18n.js';
import { trackVisit } from '../recent.js';
import { toolRegistry } from '../tools.js';

export const meta = {
  contentFile: 'base64-content.html',
  title: 'Onius — ' + toolRegistry.base64.name
};

const ready = initWasm();

// The UI calls formats 'text'/'image'; the wasm export calls plain text
// 'plain'. 'image' has no wasm-side format of its own — base64.html always
// converts image data via its base64-encoded form (see readImageAsDataURL).
const FORMAT_MAP = { text: 'plain', base64: 'base64', base64url: 'base64url', hex: 'hex' };

export let fromFormat = 'text';
export let toFormat = 'base64';

async function ensureReady() {
  await ready;
}

export async function init() {
  await ensureReady();
  // module-level format state persists across soft navigations; reset to
  // match the defaults baked into base64-content.html's markup
  switchFormat('from', 'text');
  switchFormat('to', 'base64');
  trackVisit(toolRegistry.base64.name, toolRegistry.base64.icon, toolRegistry.base64.slug, 'base64');
  bindEvents();
}

export function convert(input, from, to) {
  try {
    return wasmConvert(input, FORMAT_MAP[from] ?? from, FORMAT_MAP[to] ?? to);
  } catch (e) {
    // wasm-bindgen throws the raw `Err` value (a plain string here) rather
    // than an Error instance, so wrap it for callers that read `.message`.
    throw new Error(typeof e === 'string' ? e : (e && e.message) || String(e));
  }
}

export function switchFormat(type, value) {
  if (type === 'from') fromFormat = value;
  if (type === 'to') toFormat = value;
}

export function swapFormats() {
  const tmp = fromFormat;
  fromFormat = toFormat;
  toFormat = tmp;
}

export function clearAll() {
  const el = id => document.getElementById(id);
  const i = el('input-text'), o = el('output-text'), e = el('empty-state'), c = el('char-count');
  const ia = el('image-upload-area'), fn = el('file-name');
  if (i) { i.value = ''; i.classList.remove('hidden'); }
  if (ia) ia.classList.add('hidden');
  if (fn) fn.textContent = '';
  if (o) o.value = '';
  if (e) e.classList.remove('opacity-0');
  if (c) c.textContent = '0 ' + t('base64.chars');
}

export function copyOutput() {
  const o = document.getElementById('output-text');
  if (o && o.value && !o.value.startsWith('Error:')) {
    const btn = document.getElementById('copy-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">done</span> ' + t('base64.copiedBtn');
    btn.classList.add('bg-green-600');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(o.value);
    } else {
      o.select();
      document.execCommand('copy');
    }
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('bg-green-600'); }, 2000);
  }
}

export function readImageAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

function bindEvents() {
  const $ = id => document.getElementById(id);
  const input = $('input-text');
  const output = $('output-text');
  const emptyState = $('empty-state');
  const charCount = $('char-count');
  const outputChars = $('output-chars');
  const swapBtn = $('swap-btn');
  const imageArea = $('image-upload-area');
  const imageInput = $('image-input');
  const imageDropZone = $('image-drop-zone');
  const fileName = $('file-name');

  let imageDataURL = null;

  function setActivePill(group, format) {
    document.querySelectorAll(`.format-pill[data-group="${group}"]`).forEach(p => {
      p.classList.toggle('active', p.dataset.format === format);
    });
  }

  function updateCharCount() {
    if (fromFormat === 'image') {
      charCount.textContent = fileName.textContent || '';
    } else {
      const chars = input.value.length;
      const bytes = new TextEncoder().encode(input.value).length;
      charCount.textContent = chars + ' ' + t('base64.chars') + (chars !== bytes ? ' · ' + bytes + ' ' + t('base64.bytes') : '');
    }
  }

  function updateOutputCount() {
    const text = output.value;
    const chars = text.length;
    const bytes = new TextEncoder().encode(text).length;
    outputChars.textContent = chars + ' ' + t('base64.chars') + (chars !== bytes ? ' · ' + bytes + ' ' + t('base64.bytes') : '');
  }

  function runConversion() {
    const from = fromFormat;
    const to = toFormat;
    updateCharCount();

    if (from === 'image') {
      if (!imageDataURL) { output.value = ''; emptyState.classList.remove('opacity-0'); updateOutputCount(); return; }
      const b64 = imageDataURL.split(',')[1];
      try {
        output.value = to === 'base64' ? b64 : convert(b64, 'base64', to);
        emptyState.classList.add('opacity-0');
      } catch (e) { output.value = 'Error: ' + e.message; }
      updateOutputCount();
      return;
    }

    if (!input.value) { output.value = ''; emptyState.classList.remove('opacity-0'); updateOutputCount(); return; }
    emptyState.classList.add('opacity-0');
    try { output.value = convert(input.value, from, to); }
    catch (e) { output.value = 'Error: ' + e.message; }
    updateOutputCount();
  }

  function toggleImageUpload(show) {
    clearAll(); imageDataURL = null;
    if (show) { input.classList.add('hidden'); imageArea.classList.remove('hidden'); }
    else { input.classList.remove('hidden'); imageArea.classList.add('hidden'); }
  }

  // Drag/drop a file onto the textarea itself for non-image formats: hex
  // reads the file's raw bytes and hex-encodes them, everything else (text/
  // base64/base64url) is loaded as plain text.
  function loadFileIntoInput(file) {
    const reader = new FileReader();
    if (fromFormat === 'hex') {
      reader.onload = () => {
        const bytes = new Uint8Array(reader.result);
        input.value = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        runConversion();
      };
      reader.readAsArrayBuffer(file);
    } else {
      reader.onload = () => { input.value = reader.result; runConversion(); };
      reader.readAsText(file);
    }
  }

  function updateToOptions() {
    document.querySelectorAll('.format-pill[data-group="to"]').forEach(p => {
      if (fromFormat === 'image' && p.dataset.format === 'text') {
        p.classList.add('opacity-40', 'cursor-not-allowed');
        if (toFormat === 'text') {
          switchFormat('to', 'base64');
          setActivePill('to', 'base64');
        }
      } else {
        p.classList.remove('opacity-40', 'cursor-not-allowed');
      }
    });
  }

  document.querySelectorAll('.format-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.dataset.group;
      const format = pill.dataset.format;
      if (group === 'from') {
        switchFormat('from', format);
        setActivePill('from', format);
        toggleImageUpload(format === 'image');
        updateToOptions();
      } else {
        switchFormat('to', format);
        setActivePill('to', format);
      }
      runConversion();
    });
  });

  swapBtn.addEventListener('click', () => {
    if (fromFormat === 'image') return;
    swapFormats();
    setActivePill('from', fromFormat);
    setActivePill('to', toFormat);
    toggleImageUpload(false);
    updateToOptions();
    runConversion();
  });

  input.addEventListener('input', runConversion);

  input.addEventListener('dragover', e => { e.preventDefault(); input.classList.add('ring-2', 'ring-primary'); });
  ['dragleave', 'dragend'].forEach(type => input.addEventListener(type, () => input.classList.remove('ring-2', 'ring-primary')));
  input.addEventListener('drop', e => {
    e.preventDefault();
    input.classList.remove('ring-2', 'ring-primary');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (file.type.startsWith('image/')) {
      switchFormat('from', 'image');
      setActivePill('from', 'image');
      toggleImageUpload(true);
      updateToOptions();
      imageInput.files = e.dataTransfer.files;
      imageInput.dispatchEvent(new Event('change'));
      return;
    }
    loadFileIntoInput(file);
  });

  imageInput.addEventListener('change', async () => {
    const file = imageInput.files[0];
    if (!file) return;
    fileName.textContent = file.name;
    imageDataURL = await readImageAsDataURL(file);
    updateCharCount();
    runConversion();
  });

  imageDropZone.addEventListener('click', () => imageInput.click());
  imageDropZone.addEventListener('dragover', e => { e.preventDefault(); imageDropZone.classList.add('drag-over'); });
  imageDropZone.addEventListener('dragleave', () => imageDropZone.classList.remove('drag-over'));
  imageDropZone.addEventListener('drop', e => {
    e.preventDefault();
    imageDropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      imageInput.files = e.dataTransfer.files;
      imageInput.dispatchEvent(new Event('change'));
    }
  });

  $('clear-btn').addEventListener('click', () => {
    clearAll();
    if (imageInput) imageInput.value = '';
    fileName.textContent = '';
    imageDataURL = null;
    updateCharCount();
    updateOutputCount();
  });

  $('copy-btn').addEventListener('click', copyOutput);

  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const from = btn.dataset.from;
      const to = btn.dataset.to;
      const text = btn.dataset.input;
      switchFormat('from', from);
      switchFormat('to', to);
      setActivePill('from', from);
      setActivePill('to', to);
      toggleImageUpload(false);
      updateToOptions();
      input.value = text;
      runConversion();
    });
  });
}
