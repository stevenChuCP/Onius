import { version } from '../package.json';

const LANG_KEY = 'onius_lang';
const DEFAULT_LANG = 'en';
const SUPPORTED = ['en', 'zh-TW'];

const translations = {
  en: {
    'nav.docs': 'Docs',
    'nav.api': 'API',
    'nav.changelog': 'Changelog',
    'nav.home': 'Home',
    'nav.tools': 'Tools',
    'nav.settings': 'Settings',

    'search.placeholder': 'Search tools...',
    'search.title': 'Search tools',
    'search.close': 'Close search',
    'search.clear': 'Clear',

    'theme.toggle': 'Toggle Theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',

    'lang.switch': 'Switch Language',

    'sidebar.installApp': 'Install App',
    'sidebar.version': `Version ${version}`,

    'settings.title': 'Settings',
    'settings.appearance': 'Appearance',
    'settings.theme': 'Theme',
    'settings.language': 'Language',
    'settings.links': 'Links',
    'settings.requestFeature': 'Request a feature',
    'settings.version': `Onius v${version}`,

    'common.soon': 'SOON',
    'common.comingSoon': 'COMING SOON',

    'footer.openSource': 'Open source — Need something else?',
    'footer.requestGithub': 'Request it on GitHub.',

    'home.hero.line1': 'Your data. Your machine.',
    'home.hero.line2': 'The right tool.',
    'home.search.placeholder': 'Search 50+ developer tools',
    'home.tagline': 'Powered by WebAssembly — your data never leaves your machine.',
    'home.recentlyUsed': 'Recently Used',
    'home.clearHistory': 'CLEAR HISTORY',
    'home.card.encoding.eyebrow': 'ENCODING & DECODING',
    'home.card.encoding.title': 'Data Transformation',
    'home.card.base64.desc': 'Encode/Decode Base64 data',
    'home.card.archiving.eyebrow': 'ARCHIVING',
    'home.card.archiving.title': 'Compression/Extraction',
    'home.card.archiving.desc': 'Extract .zip, .rar, .7z, .tar, or .gzip file contents.',
    'home.card.security.eyebrow': 'SECURITY',
    'home.card.security.title': 'Crypto Keys',
    'home.card.files.eyebrow': 'FILES',
    'home.card.files.title': 'Format Converters',
    'home.card.files.andMore': 'and More',

    'archiver.warning.title': 'Limited browser support',
    'archiver.warning.body': 'Some features (folder selection, extraction to a specific location) require the File System API, which is currently only available in Chromium-based browsers (Chrome, Edge, Brave, Opera). Please switch to one of these for the full experience.',
    'archiver.subtitle': 'Compress files to save space or extract existing archives — everything stays on your machine.',
    'archiver.mode.compress': 'Compress',
    'archiver.mode.extract': 'Extract',
    'archiver.drop.compressTitle': 'Drop files or folders here',
    'archiver.drop.compressHint': 'or click to browse',
    'archiver.drop.selectFiles': 'Select files',
    'archiver.drop.selectFolder': 'Select folder',
    'archiver.drop.extractTitle': 'Drop archives here',
    'archiver.drop.selectArchive': 'Select archive',
    'archiver.format.label': 'Format',
    'archiver.format.zip': '.zip (recommended)',
    'archiver.format.7z': '.7z (best compression)',
    'archiver.password.label': 'Password (optional)',
    'archiver.password.protect': 'Protect with password',
    'archiver.password.enter': 'Enter password',
    'archiver.password.confirm': 'Confirm password',
    'archiver.compressBtn': 'Compress Files',
    'archiver.progress.compressing': 'Compressing files...',
    'archiver.progress.cancel': 'Cancel',
    'archiver.progress.starting': 'Starting...',
    'archiver.success.title': 'Archive created',
    'archiver.success.original': 'Original',
    'archiver.success.compressed': 'Compressed',
    'archiver.success.saved': 'Saved',
    'archiver.success.download': 'Download',
    'archiver.success.compressMore': 'Compress more',
    'archiver.error.title': 'Something went wrong',
    'archiver.error.compressionFailed': 'Compression failed.',
    'archiver.error.showDetails': 'Show details',
    'archiver.error.log': 'Operation log',
    'archiver.error.tryAgain': 'Try again',
    'archiver.queue.title': 'Queued Files',
    'archiver.queue.emptyTitle': 'No extracted files',
    'archiver.queue.emptySubtitle': 'Start by dropping archives to the left',
    'archiver.queue.analyzing': 'Analyzing archive...',
    'archiver.queue.readingStructure': 'Reading file structure',
    'archiver.queue.saveOutput': 'Save output',
    'archiver.queue.clearAll': 'Clear All',
    'archiver.passwordModal.title': 'Password required',
    'archiver.passwordModal.hint': 'Leave blank to try without a password',
    'archiver.passwordModal.placeholder': 'Enter archive password',
    'archiver.passwordModal.wrongPassword': 'Incorrect password — try again',
    'archiver.passwordModal.cancel': 'Cancel',
    'archiver.passwordModal.unlock': 'Unlock & Extract',
    'archiver.poweredBy': 'Powered by',

    'base64.subtitle': 'Convert between Text, Base64, Base64URL, Hex, and Image formats — all locally in your browser.',
    'base64.from': 'From',
    'base64.to': 'To',
    'base64.format.text': 'Text',
    'base64.format.base64': 'Base64',
    'base64.format.base64url': 'Base64URL',
    'base64.format.hex': 'Hex',
    'base64.format.image': 'Image',
    'base64.input.placeholder': 'Paste text, Base64, or hex here...',
    'base64.dropImage.title': 'Drop an image here',
    'base64.dropImage.formats': 'PNG, JPG, WebP, SVG, GIF',
    'base64.clearBtn': 'CLEAR',
    'base64.copyBtn': 'COPY',
    'base64.copiedBtn': 'COPIED',
    'base64.output.placeholder': 'Result will appear here...',
    'base64.emptyState': 'Enter something to convert',
    'base64.swapTitle': 'Swap formats',
    'base64.poweredBy': 'Powered by',
    'base64.chars': 'chars',
    'base64.bytes': 'bytes',

    'tool.base64.name': 'Base64 Converter',
    'tool.archiver.name': 'Archive Manager',
    'tool.sha256.name': 'SHA-256 Generator',
    'tool.rsa.name': 'RSA Generator',
    'tool.pqc.name': 'PQC Algorithm',
    'tool.svg2png.name': 'SVG → PNG',
    'tool.pem2cer.name': 'PEM → CER',
    'tool.pem2crt.name': 'PEM → CRT',

    'category.Encoding & Decoding': 'Encoding & Decoding',
    'category.Archiving': 'Archiving',
    'category.Security': 'Security',
    'category.Files': 'Files',
    'category.More': 'More',
  },
  'zh-TW': {
    'nav.docs': '文件',
    'nav.api': 'API',
    'nav.changelog': '更新日誌',
    'nav.home': '首頁',
    'nav.tools': '工具',
    'nav.settings': '設定',

    'search.placeholder': '搜尋工具...',
    'search.title': '搜尋工具',
    'search.close': '關閉搜尋',
    'search.clear': '清除',

    'theme.toggle': '切換主題',
    'theme.dark': '深色',
    'theme.light': '淺色',

    'lang.switch': '切換語言',

    'sidebar.installApp': '安裝應用程式',
    'sidebar.version': `版本 ${version}`,

    'settings.title': '設定',
    'settings.appearance': '外觀',
    'settings.theme': '主題',
    'settings.language': '語言',
    'settings.links': '連結',
    'settings.requestFeature': '提出功能建議',
    'settings.version': `Onius v${version}`,

    'common.soon': '即將推出',
    'common.comingSoon': '即將推出',

    'footer.openSource': '開放原始碼 — 需要其他功能？',
    'footer.requestGithub': '前往 GitHub 提出需求。',

    'home.hero.line1': '您的資料。您的裝置。',
    'home.hero.line2': '對的工具。',
    'home.search.placeholder': '搜尋 50+ 款開發工具',
    'home.tagline': '由 WebAssembly 驅動 — 您的資料不會離開您的裝置。',
    'home.recentlyUsed': '最近使用',
    'home.clearHistory': '清除紀錄',
    'home.card.encoding.eyebrow': '編碼與解碼',
    'home.card.encoding.title': '資料轉換',
    'home.card.base64.desc': '編碼／解碼 Base64 資料',
    'home.card.archiving.eyebrow': '壓縮與封存',
    'home.card.archiving.title': '壓縮／解壓縮',
    'home.card.archiving.desc': '解壓縮 .zip、.rar、.7z、.tar 或 .gzip 檔案內容。',
    'home.card.security.eyebrow': '安全性',
    'home.card.security.title': '加密金鑰',
    'home.card.files.eyebrow': '檔案',
    'home.card.files.title': '格式轉換工具',
    'home.card.files.andMore': '以及更多',

    'archiver.warning.title': '瀏覽器支援有限',
    'archiver.warning.body': '部分功能（選擇資料夾、解壓縮至指定位置）需要 File System API，目前僅適用於 Chromium 核心的瀏覽器（Chrome、Edge、Brave、Opera）。請切換至上述瀏覽器以獲得完整體驗。',
    'archiver.subtitle': '壓縮檔案以節省空間，或解壓縮現有的壓縮檔 — 所有處理都在您的裝置上完成。',
    'archiver.mode.compress': '壓縮',
    'archiver.mode.extract': '解壓縮',
    'archiver.drop.compressTitle': '將檔案或資料夾拖曳至此',
    'archiver.drop.compressHint': '或點擊瀏覽',
    'archiver.drop.selectFiles': '選擇檔案',
    'archiver.drop.selectFolder': '選擇資料夾',
    'archiver.drop.extractTitle': '將壓縮檔拖曳至此',
    'archiver.drop.selectArchive': '選擇壓縮檔',
    'archiver.format.label': '格式',
    'archiver.format.zip': '.zip（建議）',
    'archiver.format.7z': '.7z（最佳壓縮率）',
    'archiver.password.label': '密碼（選填）',
    'archiver.password.protect': '使用密碼保護',
    'archiver.password.enter': '輸入密碼',
    'archiver.password.confirm': '確認密碼',
    'archiver.compressBtn': '壓縮檔案',
    'archiver.progress.compressing': '正在壓縮檔案...',
    'archiver.progress.cancel': '取消',
    'archiver.progress.starting': '準備中...',
    'archiver.success.title': '壓縮檔已建立',
    'archiver.success.original': '原始大小',
    'archiver.success.compressed': '壓縮後大小',
    'archiver.success.saved': '節省空間',
    'archiver.success.download': '下載',
    'archiver.success.compressMore': '繼續壓縮',
    'archiver.error.title': '發生錯誤',
    'archiver.error.compressionFailed': '壓縮失敗。',
    'archiver.error.showDetails': '顯示詳細資訊',
    'archiver.error.log': '操作紀錄',
    'archiver.error.tryAgain': '重試',
    'archiver.queue.title': '待處理檔案',
    'archiver.queue.emptyTitle': '尚無解壓縮的檔案',
    'archiver.queue.emptySubtitle': '從左側拖曳壓縮檔開始',
    'archiver.queue.analyzing': '正在分析壓縮檔...',
    'archiver.queue.readingStructure': '讀取檔案結構中',
    'archiver.queue.saveOutput': '儲存輸出',
    'archiver.queue.clearAll': '全部清除',
    'archiver.passwordModal.title': '需要密碼',
    'archiver.passwordModal.hint': '留空以嘗試不使用密碼開啟',
    'archiver.passwordModal.placeholder': '輸入壓縮檔密碼',
    'archiver.passwordModal.wrongPassword': '密碼錯誤 — 請再試一次',
    'archiver.passwordModal.cancel': '取消',
    'archiver.passwordModal.unlock': '解鎖並解壓縮',
    'archiver.poweredBy': '技術提供',

    'base64.subtitle': '在文字、Base64、Base64URL、十六進位與圖片格式之間轉換 — 全程在您的瀏覽器本機完成。',
    'base64.from': '來源',
    'base64.to': '目標',
    'base64.format.text': '文字',
    'base64.format.base64': 'Base64',
    'base64.format.base64url': 'Base64URL',
    'base64.format.hex': '十六進位',
    'base64.format.image': '圖片',
    'base64.input.placeholder': '在此貼上文字、Base64 或十六進位內容...',
    'base64.dropImage.title': '將圖片拖曳至此',
    'base64.dropImage.formats': 'PNG、JPG、WebP、SVG、GIF',
    'base64.clearBtn': '清除',
    'base64.copyBtn': '複製',
    'base64.copiedBtn': '已複製',
    'base64.output.placeholder': '結果將顯示於此...',
    'base64.emptyState': '輸入內容以開始轉換',
    'base64.swapTitle': '交換格式',
    'base64.poweredBy': '技術提供',
    'base64.chars': '字元',
    'base64.bytes': '位元組',

    'tool.base64.name': 'Base64 轉換工具',
    'tool.archiver.name': '壓縮工具',
    'tool.sha256.name': 'SHA-256 產生器',
    'tool.rsa.name': 'RSA 產生器',
    'tool.pqc.name': '後量子加密演算法',
    'tool.svg2png.name': 'SVG → PNG',
    'tool.pem2cer.name': 'PEM → CER',
    'tool.pem2crt.name': 'PEM → CRT',

    'category.Encoding & Decoding': '編碼與解碼',
    'category.Archiving': '封存工具',
    'category.Security': '安全性',
    'category.Files': '檔案',
    'category.More': '更多',
  },
};

function detectDefaultLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  return DEFAULT_LANG;
}

let currentLang = detectDefaultLang();

export function getLang() {
  return currentLang;
}

export function t(key) {
  return translations[currentLang][key] || translations[DEFAULT_LANG][key] || key;
}

export function translateCategory(category) {
  return t('category.' + category);
}

export function formatToolsOverlaySubtitle(liveCount, soonCount) {
  return currentLang === 'zh-TW'
    ? liveCount + ' 項可立即使用 · ' + soonCount + ' 項即將推出'
    : liveCount + ' ready to use · ' + soonCount + ' on the way';
}

export function applyTranslations(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  scope.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  scope.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  scope.querySelectorAll('[data-tool]').forEach((el) => {
    el.textContent = t('tool.' + el.getAttribute('data-tool') + '.name');
  });
}

export function setLang(lang) {
  if (!SUPPORTED.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations(document);
  window.dispatchEvent(new CustomEvent('onius:langchange', { detail: { lang } }));
}

export function toggleLang() {
  setLang(currentLang === 'en' ? 'zh-TW' : 'en');
}

export function initI18n() {
  document.documentElement.lang = currentLang;
}

export function initLangToggles() {
  const settingsBtn = document.getElementById('settings-lang-btn');
  const settingsLabel = document.getElementById('settings-lang-label');

  function sync() {
    if (settingsLabel) settingsLabel.textContent = currentLang === 'zh-TW' ? '繁體中文' : 'English';
  }
  sync();

  if (settingsBtn) settingsBtn.addEventListener('click', toggleLang);
  window.addEventListener('onius:langchange', sync);
}
