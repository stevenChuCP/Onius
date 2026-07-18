// Archive extraction/compression logic lives in Rust/WASM
// (apps/web/src/lib.rs: extract_archive / compress_files), orchestrating the
// vendored 7z-wasm engine. This module only drives the UI state machine and
// adapts browser file APIs (File System Access API, drag-and-drop) to those
// two calls — no archive business logic lives here.
import initWasm, { extract_archive as extractArchive, compress_files as compressFiles } from '/pkg/onius_wasm.js';
import { trackVisit } from '../recent.js';
import { toolRegistry } from '../tools.js';

export const meta = {
  contentFile: 'archiver-content.html',
  title: 'Onius — ' + toolRegistry.archiver.name
};

const ready = initWasm();
async function ensureReady() {
  await ready;
}

export async function init() {
  await ensureReady();
  trackVisit(toolRegistry.archiver.name, toolRegistry.archiver.icon, toolRegistry.archiver.slug, 'archiver');
  initArchiver();
}

var QUEUED_FILES = [];
var CURRENT_MODE = 'compress';
var EXTRACT_FILE = null;
var ARCHIVE_CONTENTS = [];
var EXTRACT_PASSWORD = '';
var CANCEL_TOKEN = false;
var SAVE_FILENAME = '';
var SAVE_FORMAT = 'zip';
var OP_STATE = 'idle'; // 'idle' | 'running' | 'success' | 'error'
var OP_LOG = [];
var LAST_COMPRESSED = null;

var EL = {};

var FILE_COLORS = {
  zip: 'text-amber-400', '7z': 'text-purple-400', rar: 'text-red-400',
  tar: 'text-blue-400', gz: 'text-cyan-400', bz: 'text-teal-400',
  pdf: 'text-rose-400', doc: 'text-blue-400', docx: 'text-blue-400',
  xls: 'text-green-400', xlsx: 'text-green-400', ppt: 'text-orange-400',
  pptx: 'text-orange-400', jpg: 'text-pink-400', jpeg: 'text-pink-400',
  png: 'text-pink-400', gif: 'text-purple-400', svg: 'text-yellow-400',
  mp4: 'text-violet-400', mov: 'text-violet-400', avi: 'text-violet-400',
  mkv: 'text-violet-400', mp3: 'text-lime-400', wav: 'text-lime-400',
  flac: 'text-lime-400', psd: 'text-indigo-400', ai: 'text-orange-400',
  exe: 'text-slate-400', dmg: 'text-slate-400', iso: 'text-yellow-400',
  default: 'text-blue-400'
};

var FORMAT_NAMES = {
  zip: 'ZIP', '7z': '7z', rar: 'RAR', tar: 'TAR', 'tar.gz': 'TAR.GZ',
  'tar.bz': 'TAR.BZ', gz: 'GZIP', bz: 'BZIP2', tgz: 'TGZ'
};

function initArchiver() {
  // the module persists across soft navigations (no full page reload), so
  // reset singleton state to match what a fresh page load would give us
  QUEUED_FILES = [];
  CURRENT_MODE = 'compress';
  EXTRACT_FILE = null;
  ARCHIVE_CONTENTS = [];
  EXTRACT_PASSWORD = '';
  CANCEL_TOKEN = false;
  SAVE_FILENAME = '';
  SAVE_FORMAT = 'zip';
  OP_STATE = 'idle';
  OP_LOG = [];
  LAST_COMPRESSED = null;

  cacheElements();
  if (!EL.dropZone) return;
  checkBrowser();
  initModeToggle();
  initDropZone();
  initFormatSelect();
  EL.formatSelect.dispatchEvent(new Event('change'));
  initCompressPassword();
  initPasswordModal();
  initRemoveArchiveBtn();
  initSaveOutputFooterBtn();
  initActionButtons();
  initClearAll();
  initCancelBtn();
  initDownloadBtn();
  initCompressAgainBtn();
  initTryAgainBtn();
  initErrorDetailsToggle();
  updateUI();
}

function cacheElements() {
  EL = {
    leftCard: document.getElementById('left-card'),
    modeCompress: document.getElementById('mode-compress'),
    modeExtract: document.getElementById('mode-extract'),
    dropZone: document.getElementById('drop-zone'),
    compressDropContent: document.getElementById('compress-drop-content'),
    extractDropContent: document.getElementById('extract-drop-content'),
    archiveInspector: document.getElementById('archive-inspector'),
    inspectorFilename: document.getElementById('inspector-filename'),
    inspectorMeta: document.getElementById('inspector-meta'),
    removeArchiveBtn: document.getElementById('remove-archive-btn'),
    controlsWrapper: document.getElementById('controls-wrapper'),
    compressControls: document.getElementById('compress-controls'),
    extractControls: document.getElementById('extract-controls'),
    fileInput: document.getElementById('file-input'),
    folderInput: document.getElementById('folder-input'),
    archiveInput: document.getElementById('archive-input'),
    browseFilesBtn: document.getElementById('browse-files-btn'),
    browseFolderBtn: document.getElementById('browse-folder-btn'),
    browseArchiveBtn: document.getElementById('browse-archive-btn'),
    formatSelect: document.getElementById('format-select'),
    compressPasswordSection: document.getElementById('compress-password-section'),
    compressEnablePassword: document.getElementById('compress-enable-password'),
    compressPasswordFields: document.getElementById('compress-password-fields'),
    compressPassword: document.getElementById('compress-password'),
    compressPasswordConfirm: document.getElementById('compress-password-confirm'),
    compressBtn: document.getElementById('compress-btn'),
    passwordModal: document.getElementById('password-modal'),
    modalPassword: document.getElementById('modal-password'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    modalUnlockBtn: document.getElementById('modal-unlock-btn'),
    modalPasswordError: document.getElementById('modal-password-error'),
    progressState: document.getElementById('progress-state'),
    progressIcon: document.getElementById('progress-icon'),
    progressTitle: document.getElementById('progress-title'),
    progressSubtitle: document.getElementById('progress-subtitle'),
    progressFill: document.getElementById('progress-fill'),
    progressStatus: document.getElementById('progress-status'),
    progressPercentage: document.getElementById('progress-percentage'),
    cancelBtn: document.getElementById('cancel-btn'),
    successState: document.getElementById('success-state'),
    successTitle: document.getElementById('success-title'),
    successFilename: document.getElementById('success-filename'),
    successStatsRow: document.getElementById('success-stats-row'),
    successOriginalSize: document.getElementById('success-original-size'),
    successCompressedSize: document.getElementById('success-compressed-size'),
    successSavedPct: document.getElementById('success-saved-pct'),
    downloadBtn: document.getElementById('download-btn'),
    compressAgainBtn: document.getElementById('compress-again-btn'),
    errorState: document.getElementById('error-state'),
    errorDetail: document.getElementById('error-detail'),
    errorDetailsToggle: document.getElementById('error-details-toggle'),
    errorLog: document.getElementById('error-log'),
    errorLogContent: document.getElementById('error-log-content'),
    tryAgainBtn: document.getElementById('try-again-btn'),
    fileList: document.getElementById('file-list'),
    fileListEmpty: document.getElementById('file-list-empty'),
    fileListEmptyTitle: document.getElementById('file-list-empty-title'),
    fileListEmptySubtitle: document.getElementById('file-list-empty-subtitle'),
    archiveAnalyzing: document.getElementById('archive-analyzing'),
    fileListEmptyIcon: document.getElementById('file-list-empty-icon'),
    fileCountBadge: document.getElementById('file-count-badge'),
    fileCountText: document.getElementById('file-count-text'),
    totalSizeText: document.getElementById('total-size-text'),
    clearAllBtn: document.getElementById('clear-all-btn'),
    saveOutputFooterBtn: document.getElementById('save-output-footer-btn'),
    browserWarning: document.getElementById('browser-warning'),
    queueSectionTitle: document.getElementById('queue-section-title')
  };
}

function checkBrowser() {
  if (!('showDirectoryPicker' in window) && EL.browserWarning) {
    EL.browserWarning.classList.remove('hidden');
  }
}

function initModeToggle() {
  EL.modeCompress.addEventListener('click', function() { setMode('compress'); });
  EL.modeExtract.addEventListener('click', function() { setMode('extract'); });
}

function setMode(mode) {
  if (mode === CURRENT_MODE) return;
  var previousMode = CURRENT_MODE;
  CURRENT_MODE = mode;

  if (previousMode === 'extract') {
    EXTRACT_FILE = null;
    ARCHIVE_CONTENTS = [];
    EXTRACT_PASSWORD = '';
    EL.archiveInspector.classList.add('hidden');
    EL.dropZone.classList.remove('hidden');
    EL.clearAllBtn.textContent = 'Clear All';
  } else {
    QUEUED_FILES = [];
  }

  if (OP_STATE !== 'running') toIdle();

  var setActive = function(btn) {
    btn.classList.add('bg-primary', 'text-on-primary');
    btn.classList.remove('text-on-surface-variant', 'hover:text-on-surface');
  };
  var setInactive = function(btn) {
    btn.classList.remove('bg-primary', 'text-on-primary');
    btn.classList.add('text-on-surface-variant', 'hover:text-on-surface');
  };

  if (mode === 'compress') {
    setActive(EL.modeCompress);
    setInactive(EL.modeExtract);
    EL.compressDropContent.classList.remove('hidden');
    EL.extractDropContent.classList.add('hidden');
    EL.compressControls.classList.remove('hidden');
    EL.extractControls.classList.add('hidden');
    EL.leftCard.classList.remove('justify-center');
    EL.dropZone.classList.remove('flex-1');
    EL.dropZone.classList.add('min-h-[200px]');
    EL.queueSectionTitle.textContent = 'Queued Files';
    EL.fileCountBadge.classList.remove('hidden');
    EL.fileListEmptyTitle.textContent = 'No files added yet';
    EL.fileListEmptySubtitle.textContent = 'Drop files above or click to browse';
    EL.fileListEmptyIcon.textContent = 'inventory_2';
    EL.saveOutputFooterBtn.classList.add('hidden');
    EL.clearAllBtn.classList.remove('hidden');
    EL.clearAllBtn.textContent = 'Clear All';
    renderFileList();
  } else {
    setActive(EL.modeExtract);
    setInactive(EL.modeCompress);
    EL.compressDropContent.classList.add('hidden');
    EL.extractDropContent.classList.remove('hidden');
    EL.compressControls.classList.add('hidden');
    EL.extractControls.classList.remove('hidden');
    EL.leftCard.classList.add('justify-center');
    EL.dropZone.classList.add('flex-1');
    EL.dropZone.classList.remove('min-h-[200px]');
    EL.queueSectionTitle.textContent = 'Extracted Files';
    EL.fileCountBadge.classList.add('hidden');
    EL.fileListEmptyTitle.textContent = 'No extracted files';
    EL.fileListEmptySubtitle.textContent = 'Start by dropping archives to the left';
    EL.fileListEmptyIcon.textContent = 'unarchive';
    resetArchivePanel();
  }

  updateUI();
}

function initDropZone() {
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(name) {
    EL.dropZone.addEventListener(name, function(e) {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  ['dragenter', 'dragover'].forEach(function(name) {
    EL.dropZone.addEventListener(name, function() {
      EL.dropZone.classList.add('drag-over');
    }, false);
  });

  ['dragleave', 'drop'].forEach(function(name) {
    EL.dropZone.addEventListener(name, function() {
      EL.dropZone.classList.remove('drag-over');
    }, false);
  });

  EL.dropZone.addEventListener('drop', function(e) {
    var files = e.dataTransfer.files;
    if (files.length > 0) handleFiles(files);
  });

  EL.browseFilesBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (CURRENT_MODE === 'compress') {
      EL.fileInput.click();
    } else {
      EL.archiveInput.click();
    }
  });

  EL.browseFolderBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    EL.folderInput.click();
  });

  EL.browseArchiveBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    EL.archiveInput.click();
  });

  EL.fileInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) { handleFiles(this.files); this.value = ''; }
  });

  EL.folderInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) { handleFiles(this.files); this.value = ''; }
  });

  EL.archiveInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) { handleFiles(this.files); this.value = ''; }
  });
}

function handleFiles(fileList) {
  if (CURRENT_MODE === 'extract') {
    if (OP_STATE === 'running') return;
    loadExtractFile(fileList[0]);
    return;
  }

  var items = [];
  for (var i = 0; i < fileList.length; i++) {
    var f = fileList[i];
    var path = f.webkitRelativePath || f.name;
    var ext = getExtension(f.name);
    items.push({
      id: Date.now() + '-' + i + '-' + Math.random().toString(36).slice(2, 6),
      name: f.name, path: path, size: f.size,
      type: f.type || 'application/octet-stream',
      ext: ext, lastModified: f.lastModified, file: f
    });
  }
  QUEUED_FILES = QUEUED_FILES.concat(items);
  renderFileList();
}

// ── Extract ─────────────────────────────────────────────────────

function loadExtractFile(file) {
  EXTRACT_FILE = file;
  ARCHIVE_CONTENTS = [];
  EXTRACT_PASSWORD = '';

  var ext = getExtension(file.name);

  EL.dropZone.classList.add('hidden');
  EL.archiveInspector.classList.remove('hidden');
  EL.inspectorFilename.textContent = file.name;
  EL.inspectorMeta.textContent = (FORMAT_NAMES[ext] || ext.toUpperCase()) + ' · ' + formatSize(file.size);

  EL.clearAllBtn.disabled = false;
  EL.clearAllBtn.textContent = 'Remove archive';

  resetArchivePanel();
  startExtract(null);
}

async function startExtract(password) {
  if (!EXTRACT_FILE) return;
  var archiveFile = EXTRACT_FILE;

  CANCEL_TOKEN = false;
  toRunning('extract');
  addLog('Starting extraction: ' + archiveFile.name);
  if (password) addLog('Password provided');
  setStatus('Opening archive...');
  setProgress(10);

  var onLog = function(msg) {
    var line = String(msg).trim();
    if (!line) return;
    addLog(line);
    setSubtitle(line);
  };

  try {
    var buf = await archiveFile.arrayBuffer();
    if (CANCEL_TOKEN || EXTRACT_FILE !== archiveFile) return;

    setStatus('Extracting...');
    setProgress(35);
    var files = await extractArchive(new Uint8Array(buf), archiveFile.name, password || null, onLog);

    while (!CANCEL_TOKEN && files.length === 1 && /\.tar$/i.test(files[0].name)) {
      addLog('Detected nested TAR, extracting further: ' + files[0].name);
      setStatus('Extracting nested archive...');
      files = await extractArchive(files[0].data, files[0].name, null, onLog);
    }
    if (CANCEL_TOKEN || EXTRACT_FILE !== archiveFile) return;

    ARCHIVE_CONTENTS = files;
    EXTRACT_PASSWORD = password || '';
    renderArchiveContents();
    setProgress(100);
    addLog('Done: ' + files.length + ' file' + (files.length !== 1 ? 's' : '') + ' extracted');
    toSuccess({ mode: 'extract', extracted: files.length });
  } catch (err) {
    if (CANCEL_TOKEN || EXTRACT_FILE !== archiveFile) return;
    if (err && err.name === 'PasswordRequiredError') {
      addLog('Password required');
      toIdle();
      showPasswordModal(!!password);
      return;
    }
    var msg = (err && err.message) || String(err);
    addLog('Error: ' + msg);
    resetArchivePanel();
    toError(msg);
  }
}

function renderArchiveContents() {
  EL.fileList.innerHTML = '';
  EL.archiveAnalyzing.classList.add('hidden');

  if (ARCHIVE_CONTENTS.length === 0) {
    EL.fileList.appendChild(EL.fileListEmpty);
    EL.fileCountBadge.textContent = '0 files';
    EL.fileCountText.textContent = '0 files';
    EL.totalSizeText.textContent = '0 B';
    return;
  }

  var totalSize = 0;
  ARCHIVE_CONTENTS.forEach(function(item) {
    var size = item.data.length;
    var ext = getExtension(item.name);
    totalSize += size;
    var div = document.createElement('div');
    div.className = 'p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors';
    div.innerHTML =
      '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + getFileColorClass(ext) + '">' +
        '<span class="material-symbols-outlined text-[20px]">' + getFileIcon(ext) + '</span>' +
      '</div>' +
      '<div class="flex-1 min-w-0">' +
        '<p class="text-body-sm font-bold text-on-surface truncate">' + escapeHtml(item.name) + '</p>' +
        '<p class="text-label-sm text-on-surface-variant">' + formatSize(size) + '</p>' +
      '</div>';
    EL.fileList.appendChild(div);
  });

  var count = ARCHIVE_CONTENTS.length;
  var label = count + ' file' + (count !== 1 ? 's' : '') + ' inside';
  EL.fileCountBadge.textContent = label;
  EL.fileCountText.textContent = label;
  EL.totalSizeText.textContent = formatSize(totalSize);
}

function resetArchivePanel() {
  EL.fileList.innerHTML = '';
  EL.fileList.appendChild(EL.fileListEmpty);
  EL.archiveAnalyzing.classList.add('hidden');
  EL.fileCountBadge.textContent = '0 archives';
  EL.fileCountText.textContent = '0 files';
  EL.totalSizeText.textContent = '0 B';
}

function removeArchive() {
  if (OP_STATE === 'running') CANCEL_TOKEN = true;
  EXTRACT_FILE = null;
  ARCHIVE_CONTENTS = [];
  EXTRACT_PASSWORD = '';
  EL.archiveInspector.classList.add('hidden');
  EL.dropZone.classList.remove('hidden');
  EL.saveOutputFooterBtn.classList.add('hidden');
  EL.clearAllBtn.classList.remove('hidden');
  EL.clearAllBtn.textContent = 'Clear All';
  EL.clearAllBtn.disabled = true;
  resetArchivePanel();
  toIdle();
}

// ── Extract: password modal ────────────────────────────────────

function showPasswordModal(isRetry) {
  EL.modalPassword.value = '';
  EL.modalPasswordError.classList.toggle('hidden', !isRetry);
  EL.passwordModal.classList.remove('hidden');
  setTimeout(function() { EL.modalPassword.focus(); }, 50);
}

function hidePasswordModal() {
  EL.passwordModal.classList.add('hidden');
}

function initPasswordModal() {
  function doExtract() {
    var pwd = EL.modalPassword.value;
    hidePasswordModal();
    startExtract(pwd);
  }

  EL.modalUnlockBtn.addEventListener('click', doExtract);

  EL.modalPassword.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doExtract();
  });

  EL.modalCancelBtn.addEventListener('click', function() {
    hidePasswordModal();
    removeArchive();
  });

  EL.passwordModal.addEventListener('click', function(e) {
    if (e.target === EL.passwordModal) {
      hidePasswordModal();
      removeArchive();
    }
  });
}

function initRemoveArchiveBtn() {
  EL.removeArchiveBtn.addEventListener('click', function() {
    if (OP_STATE === 'running') return;
    removeArchive();
  });
}

function initSaveOutputFooterBtn() {
  EL.saveOutputFooterBtn.addEventListener('click', function() {
    handleSaveOutput();
  });
}

// ── Shared helpers ─────────────────────────────────────────────

function getExtension(name) {
  var lower = name.toLowerCase();
  if (lower.endsWith('.tar.gz')) return 'tar.gz';
  if (lower.endsWith('.tar.bz')) return 'tar.bz';
  if (lower.endsWith('.tar.bz2')) return 'tar.bz';
  if (lower.endsWith('.tgz')) return 'tar.gz';
  var idx = lower.lastIndexOf('.');
  if (idx === -1) return '';
  return lower.slice(idx + 1);
}

function getFileIcon(ext) {
  var map = {
    zip: 'folder_zip', '7z': 'folder_zip', rar: 'folder_zip',
    tar: 'folder_zip', gz: 'folder_zip', bz: 'folder_zip',
    pdf: 'picture_as_pdf', psd: 'image',
    doc: 'description', docx: 'description',
    xls: 'table_chart', xlsx: 'table_chart',
    jpg: 'image', jpeg: 'image', png: 'image', gif: 'gif',
    svg: 'image', mp4: 'movie', mov: 'movie', avi: 'movie',
    mkv: 'movie', mp3: 'music_note', wav: 'music_note',
    flac: 'music_note', exe: 'terminal', dmg: 'terminal',
    iso: 'disc_full', default: 'description'
  };
  return map[ext] || map.default;
}

function getFileColorClass(ext) {
  return FILE_COLORS[ext] || FILE_COLORS.default;
}

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  var units = ['B', 'KB', 'MB', 'GB', 'TB'];
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  if (i >= units.length) i = units.length - 1;
  return (bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1) + ' ' + units[i];
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ── Compress: file list ────────────────────────────────────────

function renderFileList() {
  EL.fileList.innerHTML = '';

  if (QUEUED_FILES.length === 0) {
    EL.fileList.appendChild(EL.fileListEmpty);
    EL.fileCountBadge.textContent = '0 files';
    EL.fileCountText.textContent = '0 files';
    EL.totalSizeText.textContent = '0 B';
    updateUI();
    return;
  }

  var totalSize = 0;
  QUEUED_FILES.forEach(function(item) {
    totalSize += item.size;
    var div = document.createElement('div');
    div.className = 'p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors group';
    div.innerHTML =
      '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + getFileColorClass(item.ext) + '">' +
        '<span class="material-symbols-outlined text-[20px]">' + getFileIcon(item.ext) + '</span>' +
      '</div>' +
      '<div class="flex-1 min-w-0">' +
        '<p class="text-body-sm font-bold text-on-surface truncate">' + escapeHtml(item.name) + '</p>' +
        '<p class="text-label-sm text-on-surface-variant truncate">' + (item.path !== item.name ? escapeHtml(item.path) : formatSize(item.size)) + '</p>' +
      '</div>' +
      '<button class="remove-file p-xs text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-all rounded" data-id="' + item.id + '">' +
        '<span class="material-symbols-outlined text-[18px]">close</span>' +
      '</button>';
    EL.fileList.appendChild(div);
  });

  var n = QUEUED_FILES.length;
  EL.fileCountBadge.textContent = n + ' ' + (n === 1 ? 'file' : 'files');
  EL.fileCountText.textContent = n + ' ' + (n === 1 ? 'file' : 'files');
  EL.totalSizeText.textContent = formatSize(totalSize);

  EL.fileList.querySelectorAll('.remove-file').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = this.getAttribute('data-id');
      QUEUED_FILES = QUEUED_FILES.filter(function(f) { return f.id !== id; });
      renderFileList();
      if (OP_STATE === 'success' || OP_STATE === 'error') toIdle();
    });
  });

  updateUI();
}

// ── Controls ───────────────────────────────────────────────────

function initFormatSelect() {
  EL.formatSelect.addEventListener('change', function() {
    var val = this.value;
    var needsPassword = val === 'zip' || val === '7z';
    EL.compressPasswordSection.classList.toggle('hidden', !needsPassword);
    if (!needsPassword) {
      EL.compressEnablePassword.checked = false;
      EL.compressPasswordFields.classList.add('hidden');
      EL.compressPassword.disabled = true;
      EL.compressPasswordConfirm.disabled = true;
    }
  });
}

function initCompressPassword() {
  EL.compressEnablePassword.addEventListener('change', function() {
    var checked = this.checked;
    EL.compressPasswordFields.classList.toggle('hidden', !checked);
    EL.compressPassword.disabled = !checked;
    EL.compressPasswordConfirm.disabled = !checked;
    if (!checked) {
      EL.compressPassword.value = '';
      EL.compressPasswordConfirm.value = '';
    }
  });
}

function initActionButtons() {
  EL.compressBtn.addEventListener('click', function() {
    if (this.disabled) return;
    startCompress();
  });
}

function updateUI() {
  if (CURRENT_MODE === 'compress') {
    var hasFiles = QUEUED_FILES.length > 0;
    EL.compressBtn.disabled = !hasFiles;
    EL.clearAllBtn.disabled = !hasFiles;
  } else {
    EL.clearAllBtn.disabled = !EXTRACT_FILE;
  }
}

function initClearAll() {
  EL.clearAllBtn.addEventListener('click', function() {
    if (this.disabled) return;
    if (CURRENT_MODE === 'extract') {
      if (OP_STATE === 'running') return;
      removeArchive();
    } else {
      QUEUED_FILES = [];
      renderFileList();
      toIdle();
    }
  });
}

function initCancelBtn() {
  EL.cancelBtn.addEventListener('click', function() {
    CANCEL_TOKEN = true;
    toIdle();
  });
}

function triggerDownload(blob) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = SAVE_FILENAME || 'archive.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function handleSaveOutput() {
  if (CURRENT_MODE === 'extract') {
    if (ARCHIVE_CONTENTS.length === 0) return;

    if ('showDirectoryPicker' in window) {
      try {
        var dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
        for (var i = 0; i < ARCHIVE_CONTENTS.length; i++) {
          var ef = ARCHIVE_CONTENTS[i];
          var parts = ef.name.split('/');
          var filename = parts.pop();
          var currentDir = dirHandle;
          for (var p = 0; p < parts.length; p++) {
            if (!parts[p]) continue;
            currentDir = await currentDir.getDirectoryHandle(parts[p], { create: true });
          }
          var fileHandle = await currentDir.getFileHandle(filename, { create: true });
          var writable = await fileHandle.createWritable();
          await writable.write(ef.data);
          await writable.close();
        }
      } catch (e) {
        if (e.name !== 'AbortError' && e.name !== 'SecurityError') console.error('Save error:', e);
      }
      return;
    }

    var baseName = EXTRACT_FILE ? EXTRACT_FILE.name.replace(/\.[^.]+$/, '') : 'extracted';
    if (ARCHIVE_CONTENTS.length === 1) {
      SAVE_FILENAME = ARCHIVE_CONTENTS[0].name;
      triggerDownload(new Blob([ARCHIVE_CONTENTS[0].data]));
      return;
    }
    var filesMap = new Map();
    ARCHIVE_CONTENTS.forEach(function(ef) { filesMap.set(ef.name, ef.data); });
    var zipped = await compressFiles(filesMap, 'zip', null, function() {});
    SAVE_FILENAME = baseName + '_extracted.zip';
    triggerDownload(new Blob([zipped]));
  } else if (LAST_COMPRESSED) {
    triggerDownload(new Blob([LAST_COMPRESSED]));
  }
}

function initDownloadBtn() {
  EL.downloadBtn.addEventListener('click', function() {
    if (this.disabled) return;
    if (CURRENT_MODE === 'extract') {
      handleSaveOutput();
    } else if (LAST_COMPRESSED) {
      triggerDownload(new Blob([LAST_COMPRESSED]));
    }
  });
}

function initCompressAgainBtn() {
  EL.compressAgainBtn.addEventListener('click', function() {
    if (CURRENT_MODE === 'extract') {
      removeArchive();
    } else {
      QUEUED_FILES = [];
      SAVE_FILENAME = '';
      LAST_COMPRESSED = null;
      renderFileList();
      toIdle();
    }
  });
}

function initTryAgainBtn() {
  EL.tryAgainBtn.addEventListener('click', function() {
    if (CURRENT_MODE === 'extract') {
      startExtract(EXTRACT_PASSWORD || null);
    } else {
      toIdle();
    }
  });
}

function initErrorDetailsToggle() {
  EL.errorDetailsToggle.addEventListener('click', function() {
    var hidden = EL.errorLog.classList.contains('hidden');
    EL.errorLog.classList.toggle('hidden', !hidden);
    this.textContent = hidden ? 'Hide details' : 'Show details';
  });
}

// ── Logging ────────────────────────────────────────────────────

function addLog(msg) {
  var t = new Date();
  var ts = t.getHours().toString().padStart(2, '0') + ':' +
           t.getMinutes().toString().padStart(2, '0') + ':' +
           t.getSeconds().toString().padStart(2, '0');
  OP_LOG.push({ ts: ts, msg: msg });
}

// ── State transitions ──────────────────────────────────────────

function toIdle() {
  OP_STATE = 'idle';
  CANCEL_TOKEN = false;
  EL.progressState.classList.add('hidden');
  EL.successState.classList.add('hidden');
  EL.errorState.classList.add('hidden');

  if (CURRENT_MODE === 'compress') {
    EL.controlsWrapper.classList.remove('hidden');
  } else {
    EL.controlsWrapper.classList.add('hidden');
    EL.saveOutputFooterBtn.classList.add('hidden');
    EL.clearAllBtn.classList.remove('hidden');
    if (EXTRACT_FILE) {
      EL.dropZone.classList.add('hidden');
      EL.archiveInspector.classList.remove('hidden');
    } else {
      EL.dropZone.classList.remove('hidden');
      EL.archiveInspector.classList.add('hidden');
    }
  }
}

function toRunning(mode) {
  OP_STATE = 'running';
  OP_LOG = [];
  EL.controlsWrapper.classList.add('hidden');
  EL.progressState.classList.remove('hidden');
  EL.successState.classList.add('hidden');
  EL.errorState.classList.add('hidden');

  var isCompress = mode === 'compress';
  EL.progressIcon.textContent = isCompress ? 'archive' : 'unarchive';
  EL.progressTitle.textContent = isCompress ? 'Compressing files...' : 'Extracting archive...';
  EL.progressSubtitle.textContent = '';
  setProgress(0);
  setStatus('Starting...');
}

function toSuccess(data) {
  OP_STATE = 'success';
  EL.progressState.classList.add('hidden');
  EL.successState.classList.remove('hidden');

  if (data.mode === 'compress') {
    var savedBytes = data.originalSize - data.compressedSize;
    var savedPct = data.originalSize > 0 ? Math.round((savedBytes / data.originalSize) * 100) : 0;

    EL.successTitle.textContent = 'Archive created';
    EL.successFilename.classList.add('hidden');
    EL.successStatsRow.classList.remove('hidden');
    EL.successOriginalSize.textContent = formatSize(data.originalSize);
    EL.successCompressedSize.textContent = formatSize(data.compressedSize);
    EL.successSavedPct.textContent = savedPct + '% smaller';

    if (LAST_COMPRESSED) triggerDownload(new Blob([LAST_COMPRESSED]));

    EL.downloadBtn.classList.remove('hidden');
    EL.downloadBtn.className = 'flex-1 flex items-center justify-center gap-sm bg-primary text-on-primary py-md rounded-xl text-label-sm font-bold hover:opacity-90 transition-all active:scale-[0.99]';
    EL.downloadBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">download</span> Save again';
    EL.downloadBtn.disabled = false;

    EL.compressAgainBtn.className = 'flex-1 flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all';
    EL.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Compress more';

  } else {
    EL.successTitle.textContent = 'Extraction complete';
    EL.successFilename.classList.remove('hidden');
    EL.successFilename.textContent = data.extracted + ' files extracted';
    EL.successStatsRow.classList.add('hidden');

    EL.downloadBtn.classList.add('hidden');

    EL.compressAgainBtn.className = 'w-full flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all';
    EL.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Extract another';

    EL.saveOutputFooterBtn.classList.remove('hidden');
    EL.clearAllBtn.classList.add('hidden');
  }
}

function toError(msg) {
  OP_STATE = 'error';
  EL.progressState.classList.add('hidden');
  EL.errorState.classList.remove('hidden');
  EL.errorDetail.textContent = msg || 'An unexpected error occurred.';

  EL.errorLogContent.innerHTML = '';
  OP_LOG.forEach(function(entry) {
    var div = document.createElement('div');
    div.className = 'opacity-80';
    div.innerHTML = '<span class="text-on-surface-variant/40">[' + escapeHtml(entry.ts) + ']</span> ' + escapeHtml(entry.msg);
    EL.errorLogContent.appendChild(div);
  });

  EL.errorLog.classList.add('hidden');
  EL.errorDetailsToggle.textContent = 'Show details';
}

// ── Progress helpers ───────────────────────────────────────────

function setProgress(pct) {
  EL.progressFill.style.width = pct + '%';
  EL.progressPercentage.textContent = Math.round(pct) + '%';
}

function setStatus(msg) {
  EL.progressStatus.textContent = msg;
}

function setSubtitle(msg) {
  EL.progressSubtitle.textContent = msg;
}

// ── Compress ───────────────────────────────────────────────────

async function startCompress() {
  var format = EL.formatSelect.value;
  SAVE_FORMAT = format;
  SAVE_FILENAME = 'archive.' + format;

  var pwd = EL.compressEnablePassword.checked ? EL.compressPassword.value : '';

  CANCEL_TOKEN = false;
  toRunning('compress');

  var totalFiles = QUEUED_FILES.length;
  var totalSize = QUEUED_FILES.reduce(function(sum, f) { return sum + f.size; }, 0);

  addLog('Starting compression: ' + totalFiles + ' file' + (totalFiles !== 1 ? 's' : '') + ' (' + formatSize(totalSize) + ')');
  addLog('Format: .' + format);
  setStatus('Reading files...');
  setProgress(10);

  var onLog = function(msg) {
    var line = String(msg).trim();
    if (!line) return;
    addLog(line);
    setSubtitle(line);
  };

  try {
    var filesMap = new Map();
    for (var i = 0; i < QUEUED_FILES.length; i++) {
      var f = QUEUED_FILES[i];
      var buf = await f.file.arrayBuffer();
      if (CANCEL_TOKEN) return;
      filesMap.set(f.path, new Uint8Array(buf));
    }

    setStatus('Compressing...');
    setProgress(40);
    var compressed = await compressFiles(filesMap, format, pwd, onLog);
    if (CANCEL_TOKEN) return;

    LAST_COMPRESSED = compressed;
    setProgress(100);
    addLog('Done: ' + SAVE_FILENAME + ' (' + formatSize(compressed.length) + ')');
    toSuccess({ mode: 'compress', filename: SAVE_FILENAME, originalSize: totalSize, compressedSize: compressed.length });
  } catch (err) {
    if (CANCEL_TOKEN) return;
    var msg = (err && err.message) || String(err);
    addLog('Error: ' + msg);
    toError(msg);
  }
}
