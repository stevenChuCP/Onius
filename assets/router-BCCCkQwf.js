var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let li, di;
let __tla = (async () => {
  (function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const v of document.querySelectorAll('link[rel="modulepreload"]')) d(v);
    new MutationObserver((v) => {
      for (const _ of v) if (_.type === "childList") for (const h of _.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && d(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function s(v) {
      const _ = {};
      return v.integrity && (_.integrity = v.integrity), v.referrerPolicy && (_.referrerPolicy = v.referrerPolicy), v.crossOrigin === "use-credentials" ? _.credentials = "include" : v.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _;
    }
    function d(v) {
      if (v.ep) return;
      v.ep = true;
      const _ = s(v);
      fetch(v.href, _);
    }
  })();
  li = function() {
    "serviceWorker" in navigator && window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((i) => console.error("SW registration failed", i));
    });
  };
  let Ye = null;
  function xt(i) {
    document.querySelectorAll(".install-app-btn").forEach((a) => {
      a.classList.toggle("hidden", !i);
    });
  }
  function yo() {
    window.addEventListener("beforeinstallprompt", (i) => {
      i.preventDefault(), Ye = i, xt(true);
    }), window.addEventListener("appinstalled", () => {
      Ye = null, xt(false);
    }), document.addEventListener("click", (i) => {
      if (!i.target.closest(".install-app-btn") || !Ye) return;
      const s = Ye;
      Ye = null, xt(false), s.prompt();
    });
  }
  var Qe = {
    "b64-icon": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" width="28" height="28"><path d="M570-160v-60h120q21 0 35.5-14.38Q740-248.75 740-270v-100q0-37 22.5-66t57.5-40v-8q-35-10-57.5-39.5T740-590v-100q0-21.25-14.37-35.63Q711.25-740 690-740H570v-60h120q46 0 78 32.08 32 32.09 32 77.92v100q0 21.25 14.38 35.62Q828.75-540 850-540h30v120h-30q-21.25 0-35.62 14.37Q800-391.25 800-370v100q0 45.83-32.08 77.92Q735.83-160 690-160H570Zm-300 0q-46 0-78-32.08-32-32.09-32-77.92v-100q0-21.25-14.37-35.63Q131.25-420 110-420H80v-120h30q21.25 0 35.63-14.38Q160-568.75 160-590v-100q0-45.83 32.08-77.92Q224.17-800 270-800h120v60H270q-21 0-35.5 14.37Q220-711.25 220-690v100q0 37-22.5 66.5T140-484v8q35 11 57.5 40t22.5 66v100q0 21.25 14.38 35.62Q248.75-220 270-220h120v60H270Z" fill="currentColor"/><text x="480" y="-460" text-anchor="middle" dominant-baseline="middle" font-family="Roboto Flex,Roboto,Arial,sans-serif" font-size="280" font-weight="700" fill="currentColor" letter-spacing="-10">b64</text></svg>'
  };
  const at = "0.5.0", br = "onius_lang", Sr = "en", Lr = [
    "en",
    "zh-TW"
  ], fr = {
    en: {
      "nav.docs": "Docs",
      "nav.api": "API",
      "nav.changelog": "Changelog",
      "nav.home": "Home",
      "nav.tools": "Tools",
      "nav.settings": "Settings",
      "search.placeholder": "Search tools...",
      "search.title": "Search tools",
      "search.close": "Close search",
      "search.clear": "Clear",
      "theme.toggle": "Toggle Theme",
      "theme.dark": "Dark",
      "theme.light": "Light",
      "lang.switch": "Switch Language",
      "sidebar.installApp": "Install App",
      "sidebar.version": `Version ${at}`,
      "settings.title": "Settings",
      "settings.appearance": "Appearance",
      "settings.theme": "Theme",
      "settings.language": "Language",
      "settings.links": "Links",
      "settings.requestFeature": "Request a feature",
      "settings.version": `Onius v${at}`,
      "common.soon": "SOON",
      "common.comingSoon": "COMING SOON",
      "footer.openSource": "Open source \u2014 Need something else?",
      "footer.requestGithub": "Request it on GitHub.",
      "home.hero.line1": "Your data. Your machine.",
      "home.hero.line2": "The right tool.",
      "home.search.placeholder": "Search 50+ developer tools",
      "home.tagline": "Powered by WebAssembly \u2014 your data never leaves your machine.",
      "home.recentlyUsed": "Recently Used",
      "home.clearHistory": "CLEAR HISTORY",
      "home.card.encoding.eyebrow": "ENCODING & DECODING",
      "home.card.encoding.title": "Data Transformation",
      "home.card.base64.desc": "Encode/Decode Base64 data",
      "home.card.archiving.eyebrow": "ARCHIVING",
      "home.card.archiving.title": "Compression/Extraction",
      "home.card.archiving.desc": "Extract .zip, .rar, .7z, .tar, or .gzip file contents.",
      "home.card.security.eyebrow": "SECURITY",
      "home.card.security.title": "Crypto Keys",
      "home.card.files.eyebrow": "FILES",
      "home.card.files.title": "Format Converters",
      "home.card.files.andMore": "and More",
      "archiver.warning.title": "Limited browser support",
      "archiver.warning.body": "Some features (folder selection, extraction to a specific location) require the File System API, which is currently only available in Chromium-based browsers (Chrome, Edge, Brave, Opera). Please switch to one of these for the full experience.",
      "archiver.subtitle": "Compress files to save space or extract existing archives \u2014 everything stays on your machine.",
      "archiver.mode.compress": "Compress",
      "archiver.mode.extract": "Extract",
      "archiver.drop.compressTitle": "Drop files or folders here",
      "archiver.drop.compressHint": "or click to browse",
      "archiver.drop.selectFiles": "Select files",
      "archiver.drop.selectFolder": "Select folder",
      "archiver.drop.extractTitle": "Drop archives here",
      "archiver.drop.selectArchive": "Select archive",
      "archiver.format.label": "Format",
      "archiver.format.zip": ".zip (recommended)",
      "archiver.format.7z": ".7z (best compression)",
      "archiver.password.label": "Password (optional)",
      "archiver.password.protect": "Protect with password",
      "archiver.password.enter": "Enter password",
      "archiver.password.confirm": "Confirm password",
      "archiver.compressBtn": "Compress Files",
      "archiver.progress.compressing": "Compressing files...",
      "archiver.progress.cancel": "Cancel",
      "archiver.progress.starting": "Starting...",
      "archiver.success.title": "Archive created",
      "archiver.success.original": "Original",
      "archiver.success.compressed": "Compressed",
      "archiver.success.saved": "Saved",
      "archiver.success.download": "Download",
      "archiver.success.compressMore": "Compress more",
      "archiver.error.title": "Something went wrong",
      "archiver.error.compressionFailed": "Compression failed.",
      "archiver.error.showDetails": "Show details",
      "archiver.error.log": "Operation log",
      "archiver.error.tryAgain": "Try again",
      "archiver.queue.title": "Queued Files",
      "archiver.queue.emptyTitle": "No extracted files",
      "archiver.queue.emptySubtitle": "Start by dropping archives to the left",
      "archiver.queue.analyzing": "Analyzing archive...",
      "archiver.queue.readingStructure": "Reading file structure",
      "archiver.queue.saveOutput": "Save output",
      "archiver.queue.clearAll": "Clear All",
      "archiver.passwordModal.title": "Password required",
      "archiver.passwordModal.hint": "Leave blank to try without a password",
      "archiver.passwordModal.placeholder": "Enter archive password",
      "archiver.passwordModal.wrongPassword": "Incorrect password \u2014 try again",
      "archiver.passwordModal.cancel": "Cancel",
      "archiver.passwordModal.unlock": "Unlock & Extract",
      "archiver.poweredBy": "Powered by",
      "base64.subtitle": "Convert between Text, Base64, Base64URL, Hex, and Image formats \u2014 all locally in your browser.",
      "base64.from": "From",
      "base64.to": "To",
      "base64.format.text": "Text",
      "base64.format.base64": "Base64",
      "base64.format.base64url": "Base64URL",
      "base64.format.hex": "Hex",
      "base64.format.image": "Image",
      "base64.input.placeholder": "Paste text, Base64, or hex here...",
      "base64.dropImage.title": "Drop an image here",
      "base64.dropImage.formats": "PNG, JPG, WebP, SVG, GIF",
      "base64.clearBtn": "CLEAR",
      "base64.copyBtn": "COPY",
      "base64.copiedBtn": "COPIED",
      "base64.output.placeholder": "Result will appear here...",
      "base64.emptyState": "Enter something to convert",
      "base64.swapTitle": "Swap formats",
      "base64.poweredBy": "Powered by",
      "base64.chars": "chars",
      "base64.bytes": "bytes",
      "tool.base64.name": "Base64 Converter",
      "tool.archiver.name": "Archive Manager",
      "tool.sha256.name": "SHA-256 Generator",
      "tool.rsa.name": "RSA Generator",
      "tool.pqc.name": "PQC Algorithm",
      "tool.svg2png.name": "SVG \u2192 PNG",
      "tool.pem2cer.name": "PEM \u2192 CER",
      "tool.pem2crt.name": "PEM \u2192 CRT",
      "category.Encoding & Decoding": "Encoding & Decoding",
      "category.Archiving": "Archiving",
      "category.Security": "Security",
      "category.Files": "Files",
      "category.More": "More"
    },
    "zh-TW": {
      "nav.docs": "\u6587\u4EF6",
      "nav.api": "API",
      "nav.changelog": "\u66F4\u65B0\u65E5\u8A8C",
      "nav.home": "\u9996\u9801",
      "nav.tools": "\u5DE5\u5177",
      "nav.settings": "\u8A2D\u5B9A",
      "search.placeholder": "\u641C\u5C0B\u5DE5\u5177...",
      "search.title": "\u641C\u5C0B\u5DE5\u5177",
      "search.close": "\u95DC\u9589\u641C\u5C0B",
      "search.clear": "\u6E05\u9664",
      "theme.toggle": "\u5207\u63DB\u4E3B\u984C",
      "theme.dark": "\u6DF1\u8272",
      "theme.light": "\u6DFA\u8272",
      "lang.switch": "\u5207\u63DB\u8A9E\u8A00",
      "sidebar.installApp": "\u5B89\u88DD\u61C9\u7528\u7A0B\u5F0F",
      "sidebar.version": `\u7248\u672C ${at}`,
      "settings.title": "\u8A2D\u5B9A",
      "settings.appearance": "\u5916\u89C0",
      "settings.theme": "\u4E3B\u984C",
      "settings.language": "\u8A9E\u8A00",
      "settings.links": "\u9023\u7D50",
      "settings.requestFeature": "\u63D0\u51FA\u529F\u80FD\u5EFA\u8B70",
      "settings.version": `Onius v${at}`,
      "common.soon": "\u5373\u5C07\u63A8\u51FA",
      "common.comingSoon": "\u5373\u5C07\u63A8\u51FA",
      "footer.openSource": "\u958B\u653E\u539F\u59CB\u78BC \u2014 \u9700\u8981\u5176\u4ED6\u529F\u80FD\uFF1F",
      "footer.requestGithub": "\u524D\u5F80 GitHub \u63D0\u51FA\u9700\u6C42\u3002",
      "home.hero.line1": "\u60A8\u7684\u8CC7\u6599\u3002\u60A8\u7684\u88DD\u7F6E\u3002",
      "home.hero.line2": "\u5C0D\u7684\u5DE5\u5177\u3002",
      "home.search.placeholder": "\u641C\u5C0B 50+ \u6B3E\u958B\u767C\u5DE5\u5177",
      "home.tagline": "\u7531 WebAssembly \u9A45\u52D5 \u2014 \u60A8\u7684\u8CC7\u6599\u4E0D\u6703\u96E2\u958B\u60A8\u7684\u88DD\u7F6E\u3002",
      "home.recentlyUsed": "\u6700\u8FD1\u4F7F\u7528",
      "home.clearHistory": "\u6E05\u9664\u7D00\u9304",
      "home.card.encoding.eyebrow": "\u7DE8\u78BC\u8207\u89E3\u78BC",
      "home.card.encoding.title": "\u8CC7\u6599\u8F49\u63DB",
      "home.card.base64.desc": "\u7DE8\u78BC\uFF0F\u89E3\u78BC Base64 \u8CC7\u6599",
      "home.card.archiving.eyebrow": "\u58D3\u7E2E\u8207\u5C01\u5B58",
      "home.card.archiving.title": "\u58D3\u7E2E\uFF0F\u89E3\u58D3\u7E2E",
      "home.card.archiving.desc": "\u89E3\u58D3\u7E2E .zip\u3001.rar\u3001.7z\u3001.tar \u6216 .gzip \u6A94\u6848\u5167\u5BB9\u3002",
      "home.card.security.eyebrow": "\u5B89\u5168\u6027",
      "home.card.security.title": "\u52A0\u5BC6\u91D1\u9470",
      "home.card.files.eyebrow": "\u6A94\u6848",
      "home.card.files.title": "\u683C\u5F0F\u8F49\u63DB\u5DE5\u5177",
      "home.card.files.andMore": "\u4EE5\u53CA\u66F4\u591A",
      "archiver.warning.title": "\u700F\u89BD\u5668\u652F\u63F4\u6709\u9650",
      "archiver.warning.body": "\u90E8\u5206\u529F\u80FD\uFF08\u9078\u64C7\u8CC7\u6599\u593E\u3001\u89E3\u58D3\u7E2E\u81F3\u6307\u5B9A\u4F4D\u7F6E\uFF09\u9700\u8981 File System API\uFF0C\u76EE\u524D\u50C5\u9069\u7528\u65BC Chromium \u6838\u5FC3\u7684\u700F\u89BD\u5668\uFF08Chrome\u3001Edge\u3001Brave\u3001Opera\uFF09\u3002\u8ACB\u5207\u63DB\u81F3\u4E0A\u8FF0\u700F\u89BD\u5668\u4EE5\u7372\u5F97\u5B8C\u6574\u9AD4\u9A57\u3002",
      "archiver.subtitle": "\u58D3\u7E2E\u6A94\u6848\u4EE5\u7BC0\u7701\u7A7A\u9593\uFF0C\u6216\u89E3\u58D3\u7E2E\u73FE\u6709\u7684\u58D3\u7E2E\u6A94 \u2014 \u6240\u6709\u8655\u7406\u90FD\u5728\u60A8\u7684\u88DD\u7F6E\u4E0A\u5B8C\u6210\u3002",
      "archiver.mode.compress": "\u58D3\u7E2E",
      "archiver.mode.extract": "\u89E3\u58D3\u7E2E",
      "archiver.drop.compressTitle": "\u5C07\u6A94\u6848\u6216\u8CC7\u6599\u593E\u62D6\u66F3\u81F3\u6B64",
      "archiver.drop.compressHint": "\u6216\u9EDE\u64CA\u700F\u89BD",
      "archiver.drop.selectFiles": "\u9078\u64C7\u6A94\u6848",
      "archiver.drop.selectFolder": "\u9078\u64C7\u8CC7\u6599\u593E",
      "archiver.drop.extractTitle": "\u5C07\u58D3\u7E2E\u6A94\u62D6\u66F3\u81F3\u6B64",
      "archiver.drop.selectArchive": "\u9078\u64C7\u58D3\u7E2E\u6A94",
      "archiver.format.label": "\u683C\u5F0F",
      "archiver.format.zip": ".zip\uFF08\u5EFA\u8B70\uFF09",
      "archiver.format.7z": ".7z\uFF08\u6700\u4F73\u58D3\u7E2E\u7387\uFF09",
      "archiver.password.label": "\u5BC6\u78BC\uFF08\u9078\u586B\uFF09",
      "archiver.password.protect": "\u4F7F\u7528\u5BC6\u78BC\u4FDD\u8B77",
      "archiver.password.enter": "\u8F38\u5165\u5BC6\u78BC",
      "archiver.password.confirm": "\u78BA\u8A8D\u5BC6\u78BC",
      "archiver.compressBtn": "\u58D3\u7E2E\u6A94\u6848",
      "archiver.progress.compressing": "\u6B63\u5728\u58D3\u7E2E\u6A94\u6848...",
      "archiver.progress.cancel": "\u53D6\u6D88",
      "archiver.progress.starting": "\u6E96\u5099\u4E2D...",
      "archiver.success.title": "\u58D3\u7E2E\u6A94\u5DF2\u5EFA\u7ACB",
      "archiver.success.original": "\u539F\u59CB\u5927\u5C0F",
      "archiver.success.compressed": "\u58D3\u7E2E\u5F8C\u5927\u5C0F",
      "archiver.success.saved": "\u7BC0\u7701\u7A7A\u9593",
      "archiver.success.download": "\u4E0B\u8F09",
      "archiver.success.compressMore": "\u7E7C\u7E8C\u58D3\u7E2E",
      "archiver.error.title": "\u767C\u751F\u932F\u8AA4",
      "archiver.error.compressionFailed": "\u58D3\u7E2E\u5931\u6557\u3002",
      "archiver.error.showDetails": "\u986F\u793A\u8A73\u7D30\u8CC7\u8A0A",
      "archiver.error.log": "\u64CD\u4F5C\u7D00\u9304",
      "archiver.error.tryAgain": "\u91CD\u8A66",
      "archiver.queue.title": "\u5F85\u8655\u7406\u6A94\u6848",
      "archiver.queue.emptyTitle": "\u5C1A\u7121\u89E3\u58D3\u7E2E\u7684\u6A94\u6848",
      "archiver.queue.emptySubtitle": "\u5F9E\u5DE6\u5074\u62D6\u66F3\u58D3\u7E2E\u6A94\u958B\u59CB",
      "archiver.queue.analyzing": "\u6B63\u5728\u5206\u6790\u58D3\u7E2E\u6A94...",
      "archiver.queue.readingStructure": "\u8B80\u53D6\u6A94\u6848\u7D50\u69CB\u4E2D",
      "archiver.queue.saveOutput": "\u5132\u5B58\u8F38\u51FA",
      "archiver.queue.clearAll": "\u5168\u90E8\u6E05\u9664",
      "archiver.passwordModal.title": "\u9700\u8981\u5BC6\u78BC",
      "archiver.passwordModal.hint": "\u7559\u7A7A\u4EE5\u5617\u8A66\u4E0D\u4F7F\u7528\u5BC6\u78BC\u958B\u555F",
      "archiver.passwordModal.placeholder": "\u8F38\u5165\u58D3\u7E2E\u6A94\u5BC6\u78BC",
      "archiver.passwordModal.wrongPassword": "\u5BC6\u78BC\u932F\u8AA4 \u2014 \u8ACB\u518D\u8A66\u4E00\u6B21",
      "archiver.passwordModal.cancel": "\u53D6\u6D88",
      "archiver.passwordModal.unlock": "\u89E3\u9396\u4E26\u89E3\u58D3\u7E2E",
      "archiver.poweredBy": "\u6280\u8853\u63D0\u4F9B",
      "base64.subtitle": "\u5728\u6587\u5B57\u3001Base64\u3001Base64URL\u3001\u5341\u516D\u9032\u4F4D\u8207\u5716\u7247\u683C\u5F0F\u4E4B\u9593\u8F49\u63DB \u2014 \u5168\u7A0B\u5728\u60A8\u7684\u700F\u89BD\u5668\u672C\u6A5F\u5B8C\u6210\u3002",
      "base64.from": "\u4F86\u6E90",
      "base64.to": "\u76EE\u6A19",
      "base64.format.text": "\u6587\u5B57",
      "base64.format.base64": "Base64",
      "base64.format.base64url": "Base64URL",
      "base64.format.hex": "\u5341\u516D\u9032\u4F4D",
      "base64.format.image": "\u5716\u7247",
      "base64.input.placeholder": "\u5728\u6B64\u8CBC\u4E0A\u6587\u5B57\u3001Base64 \u6216\u5341\u516D\u9032\u4F4D\u5167\u5BB9...",
      "base64.dropImage.title": "\u5C07\u5716\u7247\u62D6\u66F3\u81F3\u6B64",
      "base64.dropImage.formats": "PNG\u3001JPG\u3001WebP\u3001SVG\u3001GIF",
      "base64.clearBtn": "\u6E05\u9664",
      "base64.copyBtn": "\u8907\u88FD",
      "base64.copiedBtn": "\u5DF2\u8907\u88FD",
      "base64.output.placeholder": "\u7D50\u679C\u5C07\u986F\u793A\u65BC\u6B64...",
      "base64.emptyState": "\u8F38\u5165\u5167\u5BB9\u4EE5\u958B\u59CB\u8F49\u63DB",
      "base64.swapTitle": "\u4EA4\u63DB\u683C\u5F0F",
      "base64.poweredBy": "\u6280\u8853\u63D0\u4F9B",
      "base64.chars": "\u5B57\u5143",
      "base64.bytes": "\u4F4D\u5143\u7D44",
      "tool.base64.name": "Base64 \u8F49\u63DB\u5DE5\u5177",
      "tool.archiver.name": "\u58D3\u7E2E\u5DE5\u5177",
      "tool.sha256.name": "SHA-256 \u7522\u751F\u5668",
      "tool.rsa.name": "RSA \u7522\u751F\u5668",
      "tool.pqc.name": "\u5F8C\u91CF\u5B50\u52A0\u5BC6\u6F14\u7B97\u6CD5",
      "tool.svg2png.name": "SVG \u2192 PNG",
      "tool.pem2cer.name": "PEM \u2192 CER",
      "tool.pem2crt.name": "PEM \u2192 CRT",
      "category.Encoding & Decoding": "\u7DE8\u78BC\u8207\u89E3\u78BC",
      "category.Archiving": "\u5C01\u5B58\u5DE5\u5177",
      "category.Security": "\u5B89\u5168\u6027",
      "category.Files": "\u6A94\u6848",
      "category.More": "\u66F4\u591A"
    }
  };
  function wo() {
    const i = localStorage.getItem(br);
    return i && Lr.includes(i) ? i : Sr;
  }
  let Oe = wo();
  function V(i) {
    return fr[Oe][i] || fr[Sr][i] || i;
  }
  function Eo(i) {
    return V("category." + i);
  }
  function bo(i, a) {
    return Oe === "zh-TW" ? i + " \u9805\u53EF\u7ACB\u5373\u4F7F\u7528 \xB7 " + a + " \u9805\u5373\u5C07\u63A8\u51FA" : i + " ready to use \xB7 " + a + " on the way";
  }
  function kr(i) {
    const a = i || document;
    a.querySelectorAll("[data-i18n]").forEach((s) => {
      s.textContent = V(s.getAttribute("data-i18n"));
    }), a.querySelectorAll("[data-i18n-placeholder]").forEach((s) => {
      s.setAttribute("placeholder", V(s.getAttribute("data-i18n-placeholder")));
    }), a.querySelectorAll("[data-i18n-title]").forEach((s) => {
      s.setAttribute("title", V(s.getAttribute("data-i18n-title")));
    }), a.querySelectorAll("[data-tool]").forEach((s) => {
      s.textContent = V("tool." + s.getAttribute("data-tool") + ".name");
    });
  }
  function So(i) {
    !Lr.includes(i) || i === Oe || (Oe = i, localStorage.setItem(br, i), document.documentElement.lang = i, kr(document), window.dispatchEvent(new CustomEvent("onius:langchange", {
      detail: {
        lang: i
      }
    })));
  }
  function Lo() {
    So(Oe === "en" ? "zh-TW" : "en");
  }
  function ko() {
    document.documentElement.lang = Oe;
  }
  function xo() {
    const i = document.getElementById("settings-lang-btn"), a = document.getElementById("settings-lang-label");
    function s() {
      a && (a.textContent = Oe === "zh-TW" ? "\u7E41\u9AD4\u4E2D\u6587" : "English");
    }
    s(), i && i.addEventListener("click", Lo), window.addEventListener("onius:langchange", s);
  }
  const Ao = "components", mr = "onius_sidebar_shrunk";
  function To(i) {
    i.querySelectorAll("[data-icon]").forEach(function(a) {
      var s = a.getAttribute("data-icon"), d = Qe[s];
      if (d) {
        var v = document.createElement("div");
        v.innerHTML = d;
        var _ = v.firstElementChild;
        if (_) {
          var h = "";
          a.classList.forEach(function(y) {
            y !== "material-symbols-outlined" && (h += " " + y);
          }), _.setAttribute("class", "w-7 h-7 inline-block shrink-0 align-middle" + h), a.replaceWith(_);
        }
      }
    });
  }
  async function Dt(i, a) {
    const s = document.getElementById(i);
    if (s) try {
      const d = await fetch(`${Ao}/${a}`);
      if (!d.ok) throw new Error(`Failed to load ${a}`);
      s.innerHTML = await d.text(), To(s), kr(s);
    } catch (d) {
      console.error("Component load error:", d);
    }
  }
  async function Co(i) {
    const a = i.map(({ id: s, file: d }) => Dt(s, d));
    await Promise.all(a);
  }
  function Bo() {
    const i = document.getElementById("sidebar-toggle"), a = document.getElementById("main-sidebar"), s = document.getElementById("header-left");
    if (!i || !a) return;
    const d = (_) => {
      _ ? (a.style.width = "80px", a.querySelectorAll(".sidebar-text, .sidebar-label, .sidebar-install-card").forEach((h) => h.classList.add("hidden")), a.querySelectorAll("#sidebar-nav a").forEach((h) => {
        h.classList.add("justify-center"), h.classList.remove("px-md"), h.classList.add("px-0");
      }), s && window.innerWidth >= 768 && (s.style.width = "", s.style.paddingLeft = "20px"), i.innerHTML = '<span class="material-symbols-outlined">menu</span>') : (a.style.width = "280px", a.querySelectorAll(".sidebar-text, .sidebar-label, .sidebar-install-card").forEach((h) => h.classList.remove("hidden")), a.querySelectorAll("#sidebar-nav a").forEach((h) => {
        h.classList.remove("justify-center"), h.classList.add("px-md"), h.classList.remove("px-0");
      }), s && window.innerWidth >= 768 && (s.style.width = "280px", s.style.paddingLeft = "24px"), i.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>');
    }, v = localStorage.getItem(mr) === "true";
    d(v), i.addEventListener("click", () => {
      const h = !(a.style.width === "80px");
      d(h), localStorage.setItem(mr, h);
    });
  }
  function Io() {
    const i = document.getElementById("sidebar-settings-trigger"), a = document.getElementById("sidebar-settings-popover");
    if (!i || !a) return;
    const s = () => !a.classList.contains("hidden"), d = () => a.classList.add("hidden");
    i.addEventListener("click", (v) => {
      v.stopPropagation(), a.classList.toggle("hidden");
    }), document.addEventListener("click", (v) => {
      s() && !a.contains(v.target) && v.target !== i && d();
    }), document.addEventListener("keydown", (v) => {
      v.key === "Escape" && s() && d();
    });
  }
  function xr() {
    const i = document.documentElement, a = document.getElementById("theme-toggle-icon");
    i.classList.contains("dark") ? (i.classList.remove("dark"), i.classList.add("light"), a && (a.textContent = "dark_mode")) : (i.classList.remove("light"), i.classList.add("dark"), a && (a.textContent = "light_mode")), localStorage.setItem("onius_theme", i.classList.contains("dark") ? "dark" : "light");
  }
  function Oo() {
    const i = document.getElementById("theme-toggle");
    i && i.addEventListener("click", xr);
  }
  function Do() {
    const i = document.getElementById("theme-toggle-icon");
    if (!i) return;
    const a = document.documentElement.classList.contains("dark");
    i.textContent = a ? "light_mode" : "dark_mode";
  }
  var pe = {
    base64: {
      name: "Base64 Converter",
      icon: "b64-icon",
      slug: "/base64.html",
      category: "Encoding & Decoding",
      accent: "primary"
    },
    archiver: {
      name: "Archive Manager",
      icon: "inventory_2",
      slug: "/archiver.html",
      category: "Archiving",
      accent: "tertiary"
    },
    sha256: {
      name: "SHA-256 Generator",
      icon: "verified_user",
      category: "Security",
      accent: "error"
    },
    rsa: {
      name: "RSA Generator",
      icon: "verified_user",
      category: "Security",
      accent: "error"
    },
    pqc: {
      name: "PQC Algorithm",
      icon: "verified_user",
      category: "Security",
      accent: "error"
    },
    svg2png: {
      name: "SVG \u2192 PNG",
      icon: "description",
      category: "Files",
      accent: "secondary"
    },
    pem2cer: {
      name: "PEM \u2192 CER",
      icon: "description",
      category: "Files",
      accent: "secondary"
    },
    pem2crt: {
      name: "PEM \u2192 CRT",
      icon: "description",
      category: "Files",
      accent: "secondary"
    }
  }, ce = {
    lastY: 0,
    ticking: false,
    hidden: false
  };
  function Fo() {
    Ro(), Mo(), No(), Vo(), Yo();
  }
  function Ro() {
    var i = document.querySelector("header"), a = document.querySelector("main");
    if (!(!i || !a)) {
      i.classList.add("mobile-header-fixed");
      var s = document.createElement("div");
      s.className = "mobile-header-spacer", a.prepend(s);
    }
  }
  function Mo() {
    var i = document.querySelector("main"), a = document.querySelector("header");
    !i || !a || (ce.lastY = i.scrollTop, i.addEventListener("scroll", Po));
  }
  function Po() {
    ce.ticking || (ce.ticking = true, window.requestAnimationFrame(function() {
      var i = document.querySelector("main"), a = document.querySelector("header");
      if (!i || !a) {
        ce.ticking = false;
        return;
      }
      var s = i.scrollTop, d = s - ce.lastY;
      d > 5 && s > 60 ? ce.hidden || (a.classList.add("header-hidden"), ce.hidden = true) : (d < -5 || s <= 60) && ce.hidden && (a.classList.remove("header-hidden"), ce.hidden = false), ce.lastY = s, ce.ticking = false;
    }));
  }
  function No() {
    var i = document.getElementById("bottombar-placeholder");
    if (i) {
      var a = i.querySelector('[data-nav="tools"]'), s = i.querySelector('[data-nav="settings"]');
      a && a.addEventListener("click", function(d) {
        d.preventDefault(), Ho();
      }), s && s.addEventListener("click", function(d) {
        d.preventDefault(), Go();
      }), Ar(i, window.location.pathname);
    }
  }
  function Ar(i, a) {
    var s = a === "/" || a === "" || a === "/index.html";
    i.querySelectorAll("[data-nav]").forEach(function(d) {
      var v = d.getAttribute("data-nav"), _ = v === "home" && s;
      d.classList.toggle("bg-primary-container", _), d.classList.toggle("text-on-primary-container", _);
    });
  }
  function zo(i) {
    var a = document.getElementById("bottombar-placeholder");
    a && Ar(a, i ?? window.location.pathname);
  }
  function Uo() {
    ct(), dt();
  }
  function Tr() {
    document.body.classList.add("overlay-open");
  }
  function Cr() {
    document.body.classList.remove("overlay-open");
  }
  function Ho() {
    var i = document.getElementById("tools-overlay");
    i && (i.classList.remove("hidden"), Tr(), Br());
  }
  function ct() {
    var i = document.getElementById("tools-overlay");
    i && (i.classList.add("hidden"), Cr());
  }
  function Br() {
    var i = document.getElementById("tools-grid");
    if (i) {
      i.innerHTML = "";
      var a = Object.entries(pe), s = a.filter(function(_) {
        return !!_[1].slug;
      }).length;
      qo(s, a.length - s);
      var d = [], v = {};
      a.forEach(function(_) {
        var h = _[1], y = h.category || "More";
        v[y] || (v[y] = [], d.push(y)), v[y].push(_);
      }), d.forEach(function(_) {
        var h = document.createElement("div");
        h.className = "tools-section-label", h.textContent = Eo(_), i.appendChild(h), v[_].forEach(function(y) {
          i.appendChild(jo(y[0], y[1]));
        });
      });
    }
  }
  function qo(i, a) {
    var s = document.getElementById("tools-overlay-subtitle");
    s && (s.textContent = bo(i, a));
  }
  function jo(i, a) {
    var s = !!a.slug, d = document.createElement("a");
    d.className = Wo() + (s ? "" : " soon"), s ? d.href = a.slug : (d.href = "#", d.addEventListener("click", function(_) {
      _.preventDefault();
    }));
    var v = Qe[a.icon] ? Qe[a.icon] : '<span class="material-symbols-outlined">' + a.icon + "</span>";
    return d.innerHTML = '<div class="tool-icon-wrap tool-accent-' + (a.accent || "primary") + '">' + v + (s ? "" : '<span class="soon-badge">' + V("common.soon") + "</span>") + '</div><span class="tool-name">' + V("tool." + i + ".name") + "</span>", d;
  }
  function Wo() {
    return "no-underline";
  }
  function Go() {
    var i = document.getElementById("settings-modal");
    i && (i.classList.remove("hidden"), Tr(), Ft());
  }
  function dt() {
    var i = document.getElementById("settings-modal");
    i && (i.classList.add("hidden"), Cr());
  }
  function Ft() {
    var i = document.getElementById("settings-theme-icon"), a = document.getElementById("settings-theme-label");
    if (!(!i || !a)) {
      var s = document.documentElement.classList.contains("dark");
      i.textContent = s ? "light_mode" : "dark_mode", a.textContent = V(s ? "theme.dark" : "theme.light");
    }
  }
  function Vo() {
    var i = document.getElementById("tools-overlay-backdrop"), a = document.getElementById("tools-overlay-close");
    i && i.addEventListener("click", ct), a && a.addEventListener("click", ct), window.addEventListener("onius:langchange", function() {
      Ft();
      var s = document.getElementById("tools-overlay");
      s && !s.classList.contains("hidden") && Br();
    }), document.addEventListener("keydown", function(s) {
      s.key === "Escape" && (ct(), dt());
    });
  }
  function Yo() {
    var i = document.getElementById("settings-modal-backdrop"), a = document.getElementById("settings-modal-close"), s = document.getElementById("settings-theme-btn");
    i && i.addEventListener("click", dt), a && a.addEventListener("click", dt), s && s.addEventListener("click", function() {
      xr(), Ft();
    });
  }
  const Rt = "onius_recent", vr = 8;
  function Ir(i, a, s, d) {
    let v = Or();
    v = v.filter(function(_) {
      return _.slug !== s;
    }), v.unshift({
      name: i,
      icon: a,
      slug: s,
      key: d,
      time: Date.now()
    }), v.length > vr && (v = v.slice(0, vr));
    try {
      localStorage.setItem(Rt, JSON.stringify(v));
    } catch {
    }
  }
  function Or() {
    try {
      var i = localStorage.getItem(Rt);
      if (!i) return [];
      var a = JSON.parse(i);
      return Array.isArray(a) ? a : [];
    } catch {
      return [];
    }
  }
  function $o() {
    try {
      localStorage.removeItem(Rt);
    } catch {
    }
  }
  const Ko = {
    contentFile: "home-content.html",
    title: "Onius - Developer Utilities"
  };
  async function Zo() {
    Mt(), Jo();
  }
  function Xo() {
    Mt();
  }
  function Mt() {
    var i = document.getElementById("recent-section"), a = document.getElementById("recent-list"), s = document.getElementById("clear-recent");
    if (!(!i || !a)) {
      var d = Or();
      if (d.length === 0) {
        i.classList.add("hidden");
        return;
      }
      i.classList.remove("hidden"), a.innerHTML = "", d.forEach(function(v) {
        var _ = Qe[v.icon] ? '<span class="text-primary">' + Qe[v.icon] + "</span>" : '<span class="material-symbols-outlined text-primary">' + v.icon + "</span>", h = v.key ? V("tool." + v.key + ".name") : v.name, y = document.createElement("div");
        y.className = "w-48 sm:w-56 shrink-0 bg-surface-container-low border border-outline-variant rounded-lg p-md flex items-center gap-md hover:bg-surface-container-high transition-colors cursor-pointer group", y.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors shrink-0">' + _ + '</div><div class="min-w-0"><p class="font-bold text-on-surface truncate">' + Qo(h) + "</p></div>", y.addEventListener("click", function() {
          $r(v.slug);
        }), a.appendChild(y);
      }), s && s.addEventListener("click", function() {
        $o(), i.classList.add("hidden");
      });
    }
  }
  function Qo(i) {
    var a = document.createElement("div");
    return a.appendChild(document.createTextNode(i)), a.innerHTML;
  }
  function Jo() {
    document.querySelectorAll(".bento-grid > div, .bento-grid > a, section .flex.gap-md > div").forEach((a) => {
      a.addEventListener("mouseenter", () => {
        a.style.transform = "translateY(-4px)", a.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.3)", a.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      }), a.addEventListener("mouseleave", () => {
        a.style.transform = "translateY(0px)", a.style.boxShadow = "none";
      });
    });
  }
  window.addEventListener("onius:langchange", Mt);
  const Bt = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: Zo,
    meta: Ko,
    onPageShow: Xo
  }, Symbol.toStringTag, {
    value: "Module"
  })), ea = "modulepreload", ta = function(i) {
    return "/" + i;
  }, hr = {}, ra = function(a, s, d) {
    let v = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"), y = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      v = Promise.allSettled(s.map((L) => {
        if (L = ta(L), L in hr) return;
        hr[L] = true;
        const P = L.endsWith(".css"), q = P ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${L}"]${q}`)) return;
        const R = document.createElement("link");
        if (R.rel = P ? "stylesheet" : ea, P || (R.as = "script"), R.crossOrigin = "", R.href = L, y && R.setAttribute("nonce", y), document.head.appendChild(R), P) return new Promise((M, Y) => {
          R.addEventListener("load", M), R.addEventListener("error", () => Y(new Error(`Unable to preload CSS for ${L}`)));
        });
      }));
    }
    function _(h) {
      const y = new Event("vite:preloadError", {
        cancelable: true
      });
      if (y.payload = h, window.dispatchEvent(y), !y.defaultPrevented) throw h;
    }
    return v.then((h) => {
      for (const y of h || []) y.status === "rejected" && _(y.reason);
      return a().catch(_);
    });
  };
  var na = async function(i = {}) {
    var _a2;
    var a, s = i, d = typeof window == "object", v = typeof WorkerGlobalScope < "u", _ = typeof process == "object" && ((_a2 = process.versions) == null ? void 0 : _a2.node) && process.type != "renderer";
    if (_) {
      const { createRequire: e } = await ra(() => import("./__vite-browser-external-BIHI7g3E.js"), []);
      var h = e(import.meta.url);
    }
    s.noInitialRun = true;
    var y = [], L = "./this.program", P = (e, t) => {
      throw t;
    }, q = import.meta.url, R = "";
    function M(e) {
      return s.locateFile ? s.locateFile(e, R) : R + e;
    }
    var Y, oe;
    if (_) {
      var B = h("fs");
      q.startsWith("file:") && (R = h("path").dirname(h("url").fileURLToPath(q)) + "/"), oe = (e) => {
        e = me(e) ? new URL(e) : e;
        var t = B.readFileSync(e);
        return t;
      }, Y = async (e, t = true) => {
        e = me(e) ? new URL(e) : e;
        var r = B.readFileSync(e, t ? void 0 : "utf8");
        return r;
      }, process.argv.length > 1 && (L = process.argv[1].replace(/\\/g, "/")), y = process.argv.slice(2), P = (e, t) => {
        throw process.exitCode = e, t;
      };
    } else if (d || v) {
      try {
        R = new URL(".", q).href;
      } catch {
      }
      v && (oe = (e) => {
        var t = new XMLHttpRequest();
        return t.open("GET", e, false), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
      }), Y = async (e) => {
        if (me(e)) return new Promise((r, o) => {
          var c = new XMLHttpRequest();
          c.open("GET", e, true), c.responseType = "arraybuffer", c.onload = () => {
            if (c.status == 200 || c.status == 0 && c.response) {
              r(c.response);
              return;
            }
            o(c.status);
          }, c.onerror = o, c.send(null);
        });
        var t = await fetch(e, {
          credentials: "same-origin"
        });
        if (t.ok) return t.arrayBuffer();
        throw new Error(t.status + " : " + t.url);
      };
    }
    var be = console.log.bind(console), ue = console.error.bind(console), fe, E = false, O;
    function N(e, t) {
      e || nt(t);
    }
    var me = (e) => e.startsWith("file://"), Ht, qt, rt, j, ze, Ue, p, z, ee, jt = false;
    function Wt() {
      var e = rt.buffer;
      j = new Int8Array(e), Ue = new Int16Array(e), ze = new Uint8Array(e), p = new Int32Array(e), z = new Uint32Array(e), ee = new BigInt64Array(e), new BigUint64Array(e);
    }
    function Kr() {
      if (s.preRun) for (typeof s.preRun == "function" && (s.preRun = [
        s.preRun
      ]); s.preRun.length; ) sn(s.preRun.shift());
      Yt(Kt);
    }
    function Zr() {
      jt = true, !s.noFSInit && !n.initialized && n.init(), Ge.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function Xr() {
      if (s.postRun) for (typeof s.postRun == "function" && (s.postRun = [
        s.postRun
      ]); s.postRun.length; ) an(s.postRun.shift());
      Yt($t);
    }
    var xe = 0, He = null;
    function Gt(e) {
      var _a3;
      xe++, (_a3 = s.monitorRunDependencies) == null ? void 0 : _a3.call(s, xe);
    }
    function _t(e) {
      var _a3;
      if (xe--, (_a3 = s.monitorRunDependencies) == null ? void 0 : _a3.call(s, xe), xe == 0 && He) {
        var t = He;
        He = null, t();
      }
    }
    function nt(e) {
      var _a3;
      (_a3 = s.onAbort) == null ? void 0 : _a3.call(s, e), e = "Aborted(" + e + ")", ue(e), E = true, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw qt == null ? void 0 : qt(t), t;
    }
    var pt;
    function Qr() {
      return s.locateFile ? M("7zz.wasm") : new URL("/assets/7zz-Dnj2A7zV.wasm", import.meta.url).href;
    }
    function Jr(e) {
      if (e == pt && fe) return new Uint8Array(fe);
      if (oe) return oe(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function en(e) {
      if (!fe) try {
        var t = await Y(e);
        return new Uint8Array(t);
      } catch {
      }
      return Jr(e);
    }
    async function tn(e, t) {
      try {
        var r = await en(e), o = await WebAssembly.instantiate(r, t);
        return o;
      } catch (c) {
        ue(`failed to asynchronously prepare wasm: ${c}`), nt(c);
      }
    }
    async function rn(e, t, r) {
      if (!e && typeof WebAssembly.instantiateStreaming == "function" && !me(t) && !_) try {
        var o = fetch(t, {
          credentials: "same-origin"
        }), c = await WebAssembly.instantiateStreaming(o, r);
        return c;
      } catch (l) {
        ue(`wasm streaming compile failed: ${l}`), ue("falling back to ArrayBuffer instantiation");
      }
      return tn(t, r);
    }
    function nn() {
      return {
        env: ur,
        wasi_snapshot_preview1: ur
      };
    }
    async function on() {
      function e(l, u) {
        return Ge = l.exports, rt = Ge.memory, Wt(), _o(Ge), _t(), Ge;
      }
      Gt();
      function t(l) {
        return e(l.instance);
      }
      var r = nn();
      if (s.instantiateWasm) return new Promise((l, u) => {
        s.instantiateWasm(r, (m, g) => {
          l(e(m));
        });
      });
      pt ?? (pt = Qr());
      var o = await rn(fe, pt, r), c = t(o);
      return c;
    }
    class Vt {
      constructor(t) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${t})`, this.status = t;
      }
    }
    var Yt = (e) => {
      for (; e.length > 0; ) e.shift()(s);
    }, $t = [], an = (e) => $t.push(e), Kt = [], sn = (e) => Kt.push(e), Zt = true;
    class cn {
      constructor(t) {
        this.excPtr = t, this.ptr = t - 24;
      }
      set_type(t) {
        z[this.ptr + 4 >> 2] = t;
      }
      get_type() {
        return z[this.ptr + 4 >> 2];
      }
      set_destructor(t) {
        z[this.ptr + 8 >> 2] = t;
      }
      get_destructor() {
        return z[this.ptr + 8 >> 2];
      }
      set_caught(t) {
        t = t ? 1 : 0, j[this.ptr + 12] = t;
      }
      get_caught() {
        return j[this.ptr + 12] != 0;
      }
      set_rethrown(t) {
        t = t ? 1 : 0, j[this.ptr + 13] = t;
      }
      get_rethrown() {
        return j[this.ptr + 13] != 0;
      }
      init(t, r) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
      }
      set_adjusted_ptr(t) {
        z[this.ptr + 16 >> 2] = t;
      }
      get_adjusted_ptr() {
        return z[this.ptr + 16 >> 2];
      }
    }
    var Xt = 0, ln = (e, t, r) => {
      var o = new cn(e);
      throw o.init(t, r), Xt = e, Xt;
    }, D = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return t.exec(e).slice(1);
      },
      normalizeArray: (e, t) => {
        for (var r = 0, o = e.length - 1; o >= 0; o--) {
          var c = e[o];
          c === "." ? e.splice(o, 1) : c === ".." ? (e.splice(o, 1), r++) : r && (e.splice(o, 1), r--);
        }
        if (t) for (; r; r--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var t = D.isAbs(e), r = e.slice(-1) === "/";
        return e = D.normalizeArray(e.split("/").filter((o) => !!o), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
      },
      dirname: (e) => {
        var t = D.splitPath(e), r = t[0], o = t[1];
        return !r && !o ? "." : (o && (o = o.slice(0, -1)), r + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => D.normalize(e.join("/")),
      join2: (e, t) => D.normalize(e + "/" + t)
    }, dn = () => {
      if (_) {
        var e = h("crypto");
        return (t) => e.randomFillSync(t);
      }
      return (t) => crypto.getRandomValues(t);
    }, Qt = (e) => {
      (Qt = dn())(e);
    }, De = {
      resolve: (...e) => {
        for (var t = "", r = false, o = e.length - 1; o >= -1 && !r; o--) {
          var c = o >= 0 ? e[o] : n.cwd();
          if (typeof c != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!c) return "";
          t = c + "/" + t, r = D.isAbs(c);
        }
        return t = D.normalizeArray(t.split("/").filter((l) => !!l), !r).join("/"), (r ? "/" : "") + t || ".";
      },
      relative: (e, t) => {
        e = De.resolve(e).slice(1), t = De.resolve(t).slice(1);
        function r(w) {
          for (var I = 0; I < w.length && w[I] === ""; I++) ;
          for (var F = w.length - 1; F >= 0 && w[F] === ""; F--) ;
          return I > F ? [] : w.slice(I, F - I + 1);
        }
        for (var o = r(e.split("/")), c = r(t.split("/")), l = Math.min(o.length, c.length), u = l, m = 0; m < l; m++) if (o[m] !== c[m]) {
          u = m;
          break;
        }
        for (var g = [], m = u; m < o.length; m++) g.push("..");
        return g = g.concat(c.slice(u)), g.join("/");
      }
    }, Jt = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Fe = (e, t = 0, r = NaN) => {
      for (var o = t + r, c = t; e[c] && !(c >= o); ) ++c;
      if (c - t > 16 && e.buffer && Jt) return Jt.decode(e.subarray(t, c));
      for (var l = ""; t < c; ) {
        var u = e[t++];
        if (!(u & 128)) {
          l += String.fromCharCode(u);
          continue;
        }
        var m = e[t++] & 63;
        if ((u & 224) == 192) {
          l += String.fromCharCode((u & 31) << 6 | m);
          continue;
        }
        var g = e[t++] & 63;
        if ((u & 240) == 224 ? u = (u & 15) << 12 | m << 6 | g : u = (u & 7) << 18 | m << 12 | g << 6 | e[t++] & 63, u < 65536) l += String.fromCharCode(u);
        else {
          var w = u - 65536;
          l += String.fromCharCode(55296 | w >> 10, 56320 | w & 1023);
        }
      }
      return l;
    }, yt = [], qe = (e) => {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var o = e.charCodeAt(r);
        o <= 127 ? t++ : o <= 2047 ? t += 2 : o >= 55296 && o <= 57343 ? (t += 4, ++r) : t += 3;
      }
      return t;
    }, er = (e, t, r, o) => {
      if (!(o > 0)) return 0;
      for (var c = r, l = r + o - 1, u = 0; u < e.length; ++u) {
        var m = e.codePointAt(u);
        if (m <= 127) {
          if (r >= l) break;
          t[r++] = m;
        } else if (m <= 2047) {
          if (r + 1 >= l) break;
          t[r++] = 192 | m >> 6, t[r++] = 128 | m & 63;
        } else if (m <= 65535) {
          if (r + 2 >= l) break;
          t[r++] = 224 | m >> 12, t[r++] = 128 | m >> 6 & 63, t[r++] = 128 | m & 63;
        } else {
          if (r + 3 >= l) break;
          t[r++] = 240 | m >> 18, t[r++] = 128 | m >> 12 & 63, t[r++] = 128 | m >> 6 & 63, t[r++] = 128 | m & 63, u++;
        }
      }
      return t[r] = 0, r - c;
    }, wt = (e, t, r) => {
      var o = qe(e) + 1, c = new Array(o), l = er(e, c, 0, c.length);
      return c.length = l, c;
    }, un = () => {
      if (!yt.length) {
        var e = null;
        if (_) {
          var t = 256, r = Buffer.alloc(t), o = 0, c = process.stdin.fd;
          try {
            o = B.readSync(c, r, 0, t);
          } catch (l) {
            if (l.toString().includes("EOF")) o = 0;
            else throw l;
          }
          o > 0 && (e = r.slice(0, o).toString("utf-8"));
        } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        yt = wt(e);
      }
      return yt.shift();
    }, Ae = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, t) {
        Ae.ttys[e] = {
          input: [],
          output: [],
          ops: t
        }, n.registerDevice(e, Ae.stream_ops);
      },
      stream_ops: {
        open(e) {
          var t = Ae.ttys[e.node.rdev];
          if (!t) throw new n.ErrnoError(43);
          e.tty = t, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, t, r, o, c) {
          if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
          for (var l = 0, u = 0; u < o; u++) {
            var m;
            try {
              m = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (m === void 0 && l === 0) throw new n.ErrnoError(6);
            if (m == null) break;
            l++, t[r + u] = m;
          }
          return l && (e.node.atime = Date.now()), l;
        },
        write(e, t, r, o, c) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var l = 0; l < o; l++) e.tty.ops.put_char(e.tty, t[r + l]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), l;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return un();
        },
        put_char(e, t) {
          t === null || t === 10 ? (be(Fe(e.output)), e.output = []) : t != 0 && e.output.push(t);
        },
        fsync(e) {
          var _a3;
          ((_a3 = e.output) == null ? void 0 : _a3.length) > 0 && (be(Fe(e.output)), e.output = []);
        },
        ioctl_tcgets(e) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(e, t, r) {
          return 0;
        },
        ioctl_tiocgwinsz(e) {
          return [
            24,
            80
          ];
        }
      },
      default_tty1_ops: {
        put_char(e, t) {
          t === null || t === 10 ? (ue(Fe(e.output)), e.output = []) : t != 0 && e.output.push(t);
        },
        fsync(e) {
          var _a3;
          ((_a3 = e.output) == null ? void 0 : _a3.length) > 0 && (ue(Fe(e.output)), e.output = []);
        }
      }
    }, Et = (e) => {
      nt();
    }, x = {
      ops_table: null,
      mount(e) {
        return x.createNode(null, "/", 16895, 0);
      },
      createNode(e, t, r, o) {
        if (n.isBlkdev(r) || n.isFIFO(r)) throw new n.ErrnoError(63);
        x.ops_table || (x.ops_table = {
          dir: {
            node: {
              getattr: x.node_ops.getattr,
              setattr: x.node_ops.setattr,
              lookup: x.node_ops.lookup,
              mknod: x.node_ops.mknod,
              rename: x.node_ops.rename,
              unlink: x.node_ops.unlink,
              rmdir: x.node_ops.rmdir,
              readdir: x.node_ops.readdir,
              symlink: x.node_ops.symlink
            },
            stream: {
              llseek: x.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: x.node_ops.getattr,
              setattr: x.node_ops.setattr
            },
            stream: {
              llseek: x.stream_ops.llseek,
              read: x.stream_ops.read,
              write: x.stream_ops.write,
              mmap: x.stream_ops.mmap,
              msync: x.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: x.node_ops.getattr,
              setattr: x.node_ops.setattr,
              readlink: x.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: x.node_ops.getattr,
              setattr: x.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var c = n.createNode(e, t, r, o);
        return n.isDir(c.mode) ? (c.node_ops = x.ops_table.dir.node, c.stream_ops = x.ops_table.dir.stream, c.contents = {}) : n.isFile(c.mode) ? (c.node_ops = x.ops_table.file.node, c.stream_ops = x.ops_table.file.stream, c.usedBytes = 0, c.contents = null) : n.isLink(c.mode) ? (c.node_ops = x.ops_table.link.node, c.stream_ops = x.ops_table.link.stream) : n.isChrdev(c.mode) && (c.node_ops = x.ops_table.chrdev.node, c.stream_ops = x.ops_table.chrdev.stream), c.atime = c.mtime = c.ctime = Date.now(), e && (e.contents[t] = c, e.atime = e.mtime = e.ctime = c.atime), c;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, t) {
        var r = e.contents ? e.contents.length : 0;
        if (!(r >= t)) {
          var o = 1024 * 1024;
          t = Math.max(t, r * (r < o ? 2 : 1.125) >>> 0), r != 0 && (t = Math.max(t, 256));
          var c = e.contents;
          e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(c.subarray(0, e.usedBytes), 0);
        }
      },
      resizeFileStorage(e, t) {
        if (e.usedBytes != t) if (t == 0) e.contents = null, e.usedBytes = 0;
        else {
          var r = e.contents;
          e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
        }
      },
      node_ops: {
        getattr(e) {
          var t = {};
          return t.dev = n.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, n.isDir(e.mode) ? t.size = 4096 : n.isFile(e.mode) ? t.size = e.usedBytes : n.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.atime), t.mtime = new Date(e.mtime), t.ctime = new Date(e.ctime), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
        },
        setattr(e, t) {
          for (const r of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) t[r] != null && (e[r] = t[r]);
          t.size !== void 0 && x.resizeFileStorage(e, t.size);
        },
        lookup(e, t) {
          throw x.doesNotExistError;
        },
        mknod(e, t, r, o) {
          return x.createNode(e, t, r, o);
        },
        rename(e, t, r) {
          var o;
          try {
            o = n.lookupNode(t, r);
          } catch {
          }
          if (o) {
            if (n.isDir(e.mode)) for (var c in o.contents) throw new n.ErrnoError(55);
            n.hashRemoveNode(o);
          }
          delete e.parent.contents[e.name], t.contents[r] = e, e.name = r, t.ctime = t.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, t) {
          delete e.contents[t], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, t) {
          var r = n.lookupNode(e, t);
          for (var o in r.contents) throw new n.ErrnoError(55);
          delete e.contents[t], e.ctime = e.mtime = Date.now();
        },
        readdir(e) {
          return [
            ".",
            "..",
            ...Object.keys(e.contents)
          ];
        },
        symlink(e, t, r) {
          var o = x.createNode(e, t, 41471, 0);
          return o.link = r, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, t, r, o, c) {
          var l = e.node.contents;
          if (c >= e.node.usedBytes) return 0;
          var u = Math.min(e.node.usedBytes - c, o);
          if (u > 8 && l.subarray) t.set(l.subarray(c, c + u), r);
          else for (var m = 0; m < u; m++) t[r + m] = l[c + m];
          return u;
        },
        write(e, t, r, o, c, l) {
          if (t.buffer === j.buffer && (l = false), !o) return 0;
          var u = e.node;
          if (u.mtime = u.ctime = Date.now(), t.subarray && (!u.contents || u.contents.subarray)) {
            if (l) return u.contents = t.subarray(r, r + o), u.usedBytes = o, o;
            if (u.usedBytes === 0 && c === 0) return u.contents = t.slice(r, r + o), u.usedBytes = o, o;
            if (c + o <= u.usedBytes) return u.contents.set(t.subarray(r, r + o), c), o;
          }
          if (x.expandFileStorage(u, c + o), u.contents.subarray && t.subarray) u.contents.set(t.subarray(r, r + o), c);
          else for (var m = 0; m < o; m++) u.contents[c + m] = t[r + m];
          return u.usedBytes = Math.max(u.usedBytes, c + o), o;
        },
        llseek(e, t, r) {
          var o = t;
          if (r === 1 ? o += e.position : r === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, t, r, o, c) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var l, u, m = e.node.contents;
          if (!(c & 2) && m && m.buffer === j.buffer) u = false, l = m.byteOffset;
          else {
            if (u = true, l = Et(), !l) throw new n.ErrnoError(48);
            m && ((r > 0 || r + t < m.length) && (m.subarray ? m = m.subarray(r, r + t) : m = Array.prototype.slice.call(m, r, r + t)), j.set(m, l));
          }
          return {
            ptr: l,
            allocated: u
          };
        },
        msync(e, t, r, o, c) {
          return x.stream_ops.write(e, t, 0, o, r, false), 0;
        }
      }
    }, fn = async (e) => {
      var t = await Y(e);
      return new Uint8Array(t);
    }, mn = (...e) => n.createDataFile(...e), tr = [], vn = (e, t, r, o) => {
      typeof Browser < "u" && Browser.init();
      var c = false;
      return tr.forEach((l) => {
        c || l.canHandle(t) && (l.handle(e, t, r, o), c = true);
      }), c;
    }, hn = (e, t, r, o, c, l, u, m, g, w) => {
      var I = t ? De.resolve(D.join2(e, t)) : e;
      function F(A) {
        function S(C) {
          w == null ? void 0 : w(), m || mn(e, t, C, o, c, g), l == null ? void 0 : l(), _t();
        }
        vn(A, I, S, () => {
          u == null ? void 0 : u(), _t();
        }) || S(A);
      }
      Gt(), typeof r == "string" ? fn(r).then(F, u) : F(r);
    }, gn = (e) => {
      var t = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      }, r = t[e];
      if (typeof r > "u") throw new Error(`Unknown file open mode: ${e}`);
      return r;
    }, bt = (e, t) => {
      var r = 0;
      return e && (r |= 365), t && (r |= 146), r;
    }, _n = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    }, b = {
      isWindows: false,
      staticInit() {
        b.isWindows = !!process.platform.match(/^win/);
        var e = process.binding("constants").fs;
        b.flagsForNodeMap = {
          1024: e.O_APPEND,
          64: e.O_CREAT,
          128: e.O_EXCL,
          256: e.O_NOCTTY,
          0: e.O_RDONLY,
          2: e.O_RDWR,
          4096: e.O_SYNC,
          512: e.O_TRUNC,
          1: e.O_WRONLY,
          131072: e.O_NOFOLLOW
        };
      },
      convertNodeCode(e) {
        var t = e.code;
        return _n[t];
      },
      tryFSOperation(e) {
        try {
          return e();
        } catch (t) {
          throw t.code ? t.code === "UNKNOWN" ? new n.ErrnoError(28) : new n.ErrnoError(b.convertNodeCode(t)) : t;
        }
      },
      mount(e) {
        return b.createNode(null, "/", b.getMode(e.opts.root), 0);
      },
      createNode(e, t, r, o) {
        if (!n.isDir(r) && !n.isFile(r) && !n.isLink(r)) throw new n.ErrnoError(28);
        var c = n.createNode(e, t, r);
        return c.node_ops = b.node_ops, c.stream_ops = b.stream_ops, c;
      },
      getMode(e) {
        return b.tryFSOperation(() => {
          var t = B.lstatSync(e).mode;
          return b.isWindows && (t |= (t & 292) >> 2), t;
        });
      },
      realPath(e) {
        for (var t = []; e.parent !== e; ) t.push(e.name), e = e.parent;
        return t.push(e.mount.opts.root), t.reverse(), D.join(...t);
      },
      flagsForNode(e) {
        e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
        var t = 0;
        for (var r in b.flagsForNodeMap) e & r && (t |= b.flagsForNodeMap[r], e ^= r);
        if (e) throw new n.ErrnoError(28);
        return t;
      },
      getattr(e, t) {
        var r = b.tryFSOperation(e);
        return b.isWindows && (r.blksize || (r.blksize = 4096), r.blocks || (r.blocks = (r.size + r.blksize - 1) / r.blksize | 0), r.mode |= (r.mode & 292) >> 2), {
          dev: r.dev,
          ino: t.id,
          mode: r.mode,
          nlink: r.nlink,
          uid: r.uid,
          gid: r.gid,
          rdev: r.rdev,
          size: r.size,
          atime: r.atime,
          mtime: r.mtime,
          ctime: r.ctime,
          blksize: r.blksize,
          blocks: r.blocks
        };
      },
      setattr(e, t, r, o, c, l, u) {
        b.tryFSOperation(() => {
          if (r.mode !== void 0) {
            var m = r.mode;
            b.isWindows && (m &= 384), o(e, m), t.mode = r.mode;
          }
          if (typeof (r.atime ?? r.mtime) == "number") {
            var g = new Date(r.atime ?? u(e).atime), w = new Date(r.mtime ?? u(e).mtime);
            c(e, g, w);
          }
          r.size !== void 0 && l(e, r.size);
        });
      },
      node_ops: {
        getattr(e) {
          var t = b.realPath(e);
          return b.getattr(() => B.lstatSync(t), e);
        },
        setattr(e, t) {
          var r = b.realPath(e);
          if (t.mode != null && t.dontFollow) throw new n.ErrnoError(52);
          b.setattr(r, e, t, B.chmodSync, B.utimesSync, B.truncateSync, B.lstatSync);
        },
        lookup(e, t) {
          var r = D.join2(b.realPath(e), t), o = b.getMode(r);
          return b.createNode(e, t, o);
        },
        mknod(e, t, r, o) {
          var c = b.createNode(e, t, r, o), l = b.realPath(c);
          return b.tryFSOperation(() => {
            n.isDir(c.mode) ? B.mkdirSync(l, c.mode) : B.writeFileSync(l, "", {
              mode: c.mode
            });
          }), c;
        },
        rename(e, t, r) {
          var o = b.realPath(e), c = D.join2(b.realPath(t), r);
          try {
            n.unlink(c);
          } catch {
          }
          b.tryFSOperation(() => B.renameSync(o, c)), e.name = r;
        },
        unlink(e, t) {
          var r = D.join2(b.realPath(e), t);
          b.tryFSOperation(() => B.unlinkSync(r));
        },
        rmdir(e, t) {
          var r = D.join2(b.realPath(e), t);
          b.tryFSOperation(() => B.rmdirSync(r));
        },
        readdir(e) {
          var t = b.realPath(e);
          return b.tryFSOperation(() => B.readdirSync(t));
        },
        symlink(e, t, r) {
          var o = D.join2(b.realPath(e), t);
          b.tryFSOperation(() => B.symlinkSync(r, o));
        },
        readlink(e) {
          var t = b.realPath(e);
          return b.tryFSOperation(() => B.readlinkSync(t));
        },
        statfs(e) {
          var t = b.tryFSOperation(() => B.statfsSync(e));
          return t.frsize = t.bsize, t;
        }
      },
      stream_ops: {
        getattr(e) {
          return b.getattr(() => B.fstatSync(e.nfd), e.node);
        },
        setattr(e, t) {
          b.setattr(e.nfd, e.node, t, B.fchmodSync, B.futimesSync, B.ftruncateSync, B.fstatSync);
        },
        open(e) {
          var t = b.realPath(e.node);
          b.tryFSOperation(() => {
            e.shared.refcount = 1, e.nfd = B.openSync(t, b.flagsForNode(e.flags));
          });
        },
        close(e) {
          b.tryFSOperation(() => {
            e.nfd && --e.shared.refcount === 0 && B.closeSync(e.nfd);
          });
        },
        dup(e) {
          e.shared.refcount++;
        },
        read(e, t, r, o, c) {
          return b.tryFSOperation(() => B.readSync(e.nfd, new Int8Array(t.buffer, r, o), 0, o, c));
        },
        write(e, t, r, o, c) {
          return b.tryFSOperation(() => B.writeSync(e.nfd, new Int8Array(t.buffer, r, o), 0, o, c));
        },
        llseek(e, t, r) {
          var o = t;
          if (r === 1 ? o += e.position : r === 2 && n.isFile(e.node.mode) && b.tryFSOperation(() => {
            var c = B.fstatSync(e.nfd);
            o += c.size;
          }), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, t, r, o, c) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var l = Et();
          return b.stream_ops.read(e, j, l, t, r), {
            ptr: l,
            allocated: true
          };
        },
        msync(e, t, r, o, c) {
          return b.stream_ops.write(e, t, 0, o, r, false), 0;
        }
      }
    }, H = {
      DIR_MODE: 16895,
      FILE_MODE: 33279,
      reader: null,
      mount(e) {
        N(v), H.reader ?? (H.reader = new FileReaderSync());
        var t = H.createNode(null, "/", H.DIR_MODE, 0), r = {};
        function o(l) {
          for (var u = l.split("/"), m = t, g = 0; g < u.length - 1; g++) {
            var w = u.slice(0, g + 1).join("/");
            r[w] || (r[w] = H.createNode(m, u[g], H.DIR_MODE, 0)), m = r[w];
          }
          return m;
        }
        function c(l) {
          var u = l.split("/");
          return u[u.length - 1];
        }
        return Array.prototype.forEach.call(e.opts.files || [], function(l) {
          H.createNode(o(l.name), c(l.name), H.FILE_MODE, 0, l, l.lastModifiedDate);
        }), (e.opts.blobs || []).forEach((l) => {
          H.createNode(o(l.name), c(l.name), H.FILE_MODE, 0, l.data);
        }), (e.opts.packages || []).forEach((l) => {
          l.metadata.files.forEach((u) => {
            var m = u.filename.slice(1);
            H.createNode(o(m), c(m), H.FILE_MODE, 0, l.blob.slice(u.start, u.end));
          });
        }), t;
      },
      createNode(e, t, r, o, c, l) {
        var u = n.createNode(e, t, r);
        return u.mode = r, u.node_ops = H.node_ops, u.stream_ops = H.stream_ops, u.atime = u.mtime = u.ctime = (l || /* @__PURE__ */ new Date()).getTime(), N(H.FILE_MODE !== H.DIR_MODE), r === H.FILE_MODE ? (u.size = c.size, u.contents = c) : (u.size = 4096, u.contents = {}), e && (e.contents[t] = u), u;
      },
      node_ops: {
        getattr(e) {
          return {
            dev: 1,
            ino: e.id,
            mode: e.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: 0,
            size: e.size,
            atime: new Date(e.atime),
            mtime: new Date(e.mtime),
            ctime: new Date(e.ctime),
            blksize: 4096,
            blocks: Math.ceil(e.size / 4096)
          };
        },
        setattr(e, t) {
          for (const r of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) t[r] != null && (e[r] = t[r]);
        },
        lookup(e, t) {
          throw new n.ErrnoError(44);
        },
        mknod(e, t, r, o) {
          throw new n.ErrnoError(63);
        },
        rename(e, t, r) {
          throw new n.ErrnoError(63);
        },
        unlink(e, t) {
          throw new n.ErrnoError(63);
        },
        rmdir(e, t) {
          throw new n.ErrnoError(63);
        },
        readdir(e) {
          var t = [
            ".",
            ".."
          ];
          for (var r of Object.keys(e.contents)) t.push(r);
          return t;
        },
        symlink(e, t, r) {
          throw new n.ErrnoError(63);
        }
      },
      stream_ops: {
        read(e, t, r, o, c) {
          if (c >= e.node.size) return 0;
          var l = e.node.contents.slice(c, c + o), u = H.reader.readAsArrayBuffer(l);
          return t.set(new Uint8Array(u), r), l.size;
        },
        write(e, t, r, o, c) {
          throw new n.ErrnoError(29);
        },
        llseek(e, t, r) {
          var o = t;
          if (r === 1 ? o += e.position : r === 2 && n.isFile(e.node.mode) && (o += e.node.size), o < 0) throw new n.ErrnoError(28);
          return o;
        }
      }
    }, n = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      filesystems: null,
      syncFSRequests: 0,
      readFiles: {},
      ErrnoError: class {
        constructor(e) {
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
        }
      },
      FSStream: class {
        constructor() {
          __publicField(this, "shared", {});
        }
        get object() {
          return this.node;
        }
        set object(e) {
          this.node = e;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(e) {
          this.shared.flags = e;
        }
        get position() {
          return this.shared.position;
        }
        set position(e) {
          this.shared.position = e;
        }
      },
      FSNode: class {
        constructor(e, t, r, o) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = n.nextInode++, this.name = t, this.mode = r, this.rdev = o, this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(e) {
          e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(e) {
          e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return n.isDir(this.mode);
        }
        get isDevice() {
          return n.isChrdev(this.mode);
        }
      },
      lookupPath(e, t = {}) {
        if (!e) throw new n.ErrnoError(44);
        t.follow_mount ?? (t.follow_mount = true), D.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var r = 0; r < 40; r++) {
          for (var o = e.split("/").filter((w) => !!w), c = n.root, l = "/", u = 0; u < o.length; u++) {
            var m = u === o.length - 1;
            if (m && t.parent) break;
            if (o[u] !== ".") {
              if (o[u] === "..") {
                if (l = D.dirname(l), n.isRoot(c)) {
                  e = l + "/" + o.slice(u + 1).join("/");
                  continue e;
                } else c = c.parent;
                continue;
              }
              l = D.join2(l, o[u]);
              try {
                c = n.lookupNode(c, o[u]);
              } catch (w) {
                if ((w == null ? void 0 : w.errno) === 44 && m && t.noent_okay) return {
                  path: l
                };
                throw w;
              }
              if (n.isMountpoint(c) && (!m || t.follow_mount) && (c = c.mounted.root), n.isLink(c.mode) && (!m || t.follow)) {
                if (!c.node_ops.readlink) throw new n.ErrnoError(52);
                var g = c.node_ops.readlink(c);
                D.isAbs(g) || (g = D.dirname(l) + "/" + g), e = g + "/" + o.slice(u + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: l,
            node: c
          };
        }
        throw new n.ErrnoError(32);
      },
      getPath(e) {
        for (var t; ; ) {
          if (n.isRoot(e)) {
            var r = e.mount.mountpoint;
            return t ? r[r.length - 1] !== "/" ? `${r}/${t}` : r + t : r;
          }
          t = t ? `${e.name}/${t}` : e.name, e = e.parent;
        }
      },
      hashName(e, t) {
        for (var r = 0, o = 0; o < t.length; o++) r = (r << 5) - r + t.charCodeAt(o) | 0;
        return (e + r >>> 0) % n.nameTable.length;
      },
      hashAddNode(e) {
        var t = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[t], n.nameTable[t] = e;
      },
      hashRemoveNode(e) {
        var t = n.hashName(e.parent.id, e.name);
        if (n.nameTable[t] === e) n.nameTable[t] = e.name_next;
        else for (var r = n.nameTable[t]; r; ) {
          if (r.name_next === e) {
            r.name_next = e.name_next;
            break;
          }
          r = r.name_next;
        }
      },
      lookupNode(e, t) {
        var r = n.mayLookup(e);
        if (r) throw new n.ErrnoError(r);
        for (var o = n.hashName(e.id, t), c = n.nameTable[o]; c; c = c.name_next) {
          var l = c.name;
          if (c.parent.id === e.id && l === t) return c;
        }
        return n.lookup(e, t);
      },
      createNode(e, t, r, o) {
        var c = new n.FSNode(e, t, r, o);
        return n.hashAddNode(c), c;
      },
      destroyNode(e) {
        n.hashRemoveNode(e);
      },
      isRoot(e) {
        return e === e.parent;
      },
      isMountpoint(e) {
        return !!e.mounted;
      },
      isFile(e) {
        return (e & 61440) === 32768;
      },
      isDir(e) {
        return (e & 61440) === 16384;
      },
      isLink(e) {
        return (e & 61440) === 40960;
      },
      isChrdev(e) {
        return (e & 61440) === 8192;
      },
      isBlkdev(e) {
        return (e & 61440) === 24576;
      },
      isFIFO(e) {
        return (e & 61440) === 4096;
      },
      isSocket(e) {
        return (e & 49152) === 49152;
      },
      flagsToPermissionString(e) {
        var t = [
          "r",
          "w",
          "rw"
        ][e & 3];
        return e & 512 && (t += "w"), t;
      },
      nodePermissions(e, t) {
        return n.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!n.isDir(e.mode)) return 54;
        var t = n.nodePermissions(e, "x");
        return t || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, t) {
        if (!n.isDir(e.mode)) return 54;
        try {
          var r = n.lookupNode(e, t);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      },
      mayDelete(e, t, r) {
        var o;
        try {
          o = n.lookupNode(e, t);
        } catch (l) {
          return l.errno;
        }
        var c = n.nodePermissions(e, "wx");
        if (c) return c;
        if (r) {
          if (!n.isDir(o.mode)) return 54;
          if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
        } else if (n.isDir(o.mode)) return 31;
        return 0;
      },
      mayOpen(e, t) {
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(t) !== "r" || t & 576) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(t)) : 44;
      },
      checkOpExists(e, t) {
        if (!e) throw new n.ErrnoError(t);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++) if (!n.streams[e]) return e;
        throw new n.ErrnoError(33);
      },
      getStreamChecked(e) {
        var t = n.getStream(e);
        if (!t) throw new n.ErrnoError(8);
        return t;
      },
      getStream: (e) => n.streams[e],
      createStream(e, t = -1) {
        return e = Object.assign(new n.FSStream(), e), t == -1 && (t = n.nextfd()), e.fd = t, n.streams[t] = e, e;
      },
      closeStream(e) {
        n.streams[e] = null;
      },
      dupStream(e, t = -1) {
        var _a3, _b;
        var r = n.createStream(e, t);
        return (_b = (_a3 = r.stream_ops) == null ? void 0 : _a3.dup) == null ? void 0 : _b.call(_a3, r), r;
      },
      doSetAttr(e, t, r) {
        var o = e == null ? void 0 : e.stream_ops.setattr, c = o ? e : t;
        o ?? (o = t.node_ops.setattr), n.checkOpExists(o, 63), o(c, r);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a3, _b;
          var t = n.getDevice(e.node.rdev);
          e.stream_ops = t.stream_ops, (_b = (_a3 = e.stream_ops).open) == null ? void 0 : _b.call(_a3, e);
        },
        llseek() {
          throw new n.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, t) => e << 8 | t,
      registerDevice(e, t) {
        n.devices[e] = {
          stream_ops: t
        };
      },
      getDevice: (e) => n.devices[e],
      getMounts(e) {
        for (var t = [], r = [
          e
        ]; r.length; ) {
          var o = r.pop();
          t.push(o), r.push(...o.mounts);
        }
        return t;
      },
      syncfs(e, t) {
        typeof e == "function" && (t = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && ue(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var r = n.getMounts(n.root.mount), o = 0;
        function c(u) {
          return n.syncFSRequests--, t(u);
        }
        function l(u) {
          if (u) return l.errored ? void 0 : (l.errored = true, c(u));
          ++o >= r.length && c(null);
        }
        r.forEach((u) => {
          if (!u.type.syncfs) return l(null);
          u.type.syncfs(u, e, l);
        });
      },
      mount(e, t, r) {
        var o = r === "/", c = !r, l;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !c) {
          var u = n.lookupPath(r, {
            follow_mount: false
          });
          if (r = u.path, l = u.node, n.isMountpoint(l)) throw new n.ErrnoError(10);
          if (!n.isDir(l.mode)) throw new n.ErrnoError(54);
        }
        var m = {
          type: e,
          opts: t,
          mountpoint: r,
          mounts: []
        }, g = e.mount(m);
        return g.mount = m, m.root = g, o ? n.root = g : l && (l.mounted = m, l.mount && l.mount.mounts.push(m)), g;
      },
      unmount(e) {
        var t = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(t.node)) throw new n.ErrnoError(28);
        var r = t.node, o = r.mounted, c = n.getMounts(o);
        Object.keys(n.nameTable).forEach((u) => {
          for (var m = n.nameTable[u]; m; ) {
            var g = m.name_next;
            c.includes(m.mount) && n.destroyNode(m), m = g;
          }
        }), r.mounted = null;
        var l = r.mount.mounts.indexOf(o);
        r.mount.mounts.splice(l, 1);
      },
      lookup(e, t) {
        return e.node_ops.lookup(e, t);
      },
      mknod(e, t, r) {
        var o = n.lookupPath(e, {
          parent: true
        }), c = o.node, l = D.basename(e);
        if (!l) throw new n.ErrnoError(28);
        if (l === "." || l === "..") throw new n.ErrnoError(20);
        var u = n.mayCreate(c, l);
        if (u) throw new n.ErrnoError(u);
        if (!c.node_ops.mknod) throw new n.ErrnoError(63);
        return c.node_ops.mknod(c, l, t, r);
      },
      statfs(e) {
        return n.statfsNode(n.lookupPath(e, {
          follow: true
        }).node);
      },
      statfsStream(e) {
        return n.statfsNode(e.node);
      },
      statfsNode(e) {
        var t = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: n.nextInode,
          ffree: n.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        return e.node_ops.statfs && Object.assign(t, e.node_ops.statfs(e.mount.opts.root)), t;
      },
      create(e, t = 438) {
        return t &= 4095, t |= 32768, n.mknod(e, t, 0);
      },
      mkdir(e, t = 511) {
        return t &= 1023, t |= 16384, n.mknod(e, t, 0);
      },
      mkdirTree(e, t) {
        var r = e.split("/"), o = "";
        for (var c of r) if (c) {
          (o || D.isAbs(e)) && (o += "/"), o += c;
          try {
            n.mkdir(o, t);
          } catch (l) {
            if (l.errno != 20) throw l;
          }
        }
      },
      mkdev(e, t, r) {
        return typeof r > "u" && (r = t, t = 438), t |= 8192, n.mknod(e, t, r);
      },
      symlink(e, t) {
        if (!De.resolve(e)) throw new n.ErrnoError(44);
        var r = n.lookupPath(t, {
          parent: true
        }), o = r.node;
        if (!o) throw new n.ErrnoError(44);
        var c = D.basename(t), l = n.mayCreate(o, c);
        if (l) throw new n.ErrnoError(l);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, c, e);
      },
      rename(e, t) {
        var r = D.dirname(e), o = D.dirname(t), c = D.basename(e), l = D.basename(t), u, m, g;
        if (u = n.lookupPath(e, {
          parent: true
        }), m = u.node, u = n.lookupPath(t, {
          parent: true
        }), g = u.node, !m || !g) throw new n.ErrnoError(44);
        if (m.mount !== g.mount) throw new n.ErrnoError(75);
        var w = n.lookupNode(m, c), I = De.relative(e, o);
        if (I.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (I = De.relative(t, r), I.charAt(0) !== ".") throw new n.ErrnoError(55);
        var F;
        try {
          F = n.lookupNode(g, l);
        } catch {
        }
        if (w !== F) {
          var A = n.isDir(w.mode), S = n.mayDelete(m, c, A);
          if (S) throw new n.ErrnoError(S);
          if (S = F ? n.mayDelete(g, l, A) : n.mayCreate(g, l), S) throw new n.ErrnoError(S);
          if (!m.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(w) || F && n.isMountpoint(F)) throw new n.ErrnoError(10);
          if (g !== m && (S = n.nodePermissions(m, "w"), S)) throw new n.ErrnoError(S);
          n.hashRemoveNode(w);
          try {
            m.node_ops.rename(w, g, l), w.parent = g;
          } catch (C) {
            throw C;
          } finally {
            n.hashAddNode(w);
          }
        }
      },
      rmdir(e) {
        var t = n.lookupPath(e, {
          parent: true
        }), r = t.node, o = D.basename(e), c = n.lookupNode(r, o), l = n.mayDelete(r, o, true);
        if (l) throw new n.ErrnoError(l);
        if (!r.node_ops.rmdir) throw new n.ErrnoError(63);
        if (n.isMountpoint(c)) throw new n.ErrnoError(10);
        r.node_ops.rmdir(r, o), n.destroyNode(c);
      },
      readdir(e) {
        var t = n.lookupPath(e, {
          follow: true
        }), r = t.node, o = n.checkOpExists(r.node_ops.readdir, 54);
        return o(r);
      },
      unlink(e) {
        var t = n.lookupPath(e, {
          parent: true
        }), r = t.node;
        if (!r) throw new n.ErrnoError(44);
        var o = D.basename(e), c = n.lookupNode(r, o), l = n.mayDelete(r, o, false);
        if (l) throw new n.ErrnoError(l);
        if (!r.node_ops.unlink) throw new n.ErrnoError(63);
        if (n.isMountpoint(c)) throw new n.ErrnoError(10);
        r.node_ops.unlink(r, o), n.destroyNode(c);
      },
      readlink(e) {
        var t = n.lookupPath(e), r = t.node;
        if (!r) throw new n.ErrnoError(44);
        if (!r.node_ops.readlink) throw new n.ErrnoError(28);
        return r.node_ops.readlink(r);
      },
      stat(e, t) {
        var r = n.lookupPath(e, {
          follow: !t
        }), o = r.node, c = n.checkOpExists(o.node_ops.getattr, 63);
        return c(o);
      },
      fstat(e) {
        var t = n.getStreamChecked(e), r = t.node, o = t.stream_ops.getattr, c = o ? t : r;
        return o ?? (o = r.node_ops.getattr), n.checkOpExists(o, 63), o(c);
      },
      lstat(e) {
        return n.stat(e, true);
      },
      doChmod(e, t, r, o) {
        n.doSetAttr(e, t, {
          mode: r & 4095 | t.mode & -4096,
          ctime: Date.now(),
          dontFollow: o
        });
      },
      chmod(e, t, r) {
        var o;
        if (typeof e == "string") {
          var c = n.lookupPath(e, {
            follow: !r
          });
          o = c.node;
        } else o = e;
        n.doChmod(null, o, t, r);
      },
      lchmod(e, t) {
        n.chmod(e, t, true);
      },
      fchmod(e, t) {
        var r = n.getStreamChecked(e);
        n.doChmod(r, r.node, t, false);
      },
      doChown(e, t, r) {
        n.doSetAttr(e, t, {
          timestamp: Date.now(),
          dontFollow: r
        });
      },
      chown(e, t, r, o) {
        var c;
        if (typeof e == "string") {
          var l = n.lookupPath(e, {
            follow: !o
          });
          c = l.node;
        } else c = e;
        n.doChown(null, c, o);
      },
      lchown(e, t, r) {
        n.chown(e, t, r, true);
      },
      fchown(e, t, r) {
        var o = n.getStreamChecked(e);
        n.doChown(o, o.node, false);
      },
      doTruncate(e, t, r) {
        if (n.isDir(t.mode)) throw new n.ErrnoError(31);
        if (!n.isFile(t.mode)) throw new n.ErrnoError(28);
        var o = n.nodePermissions(t, "w");
        if (o) throw new n.ErrnoError(o);
        n.doSetAttr(e, t, {
          size: r,
          timestamp: Date.now()
        });
      },
      truncate(e, t) {
        if (t < 0) throw new n.ErrnoError(28);
        var r;
        if (typeof e == "string") {
          var o = n.lookupPath(e, {
            follow: true
          });
          r = o.node;
        } else r = e;
        n.doTruncate(null, r, t);
      },
      ftruncate(e, t) {
        var r = n.getStreamChecked(e);
        if (t < 0 || !(r.flags & 2097155)) throw new n.ErrnoError(28);
        n.doTruncate(r, r.node, t);
      },
      utime(e, t, r) {
        var o = n.lookupPath(e, {
          follow: true
        }), c = o.node, l = n.checkOpExists(c.node_ops.setattr, 63);
        l(c, {
          atime: t,
          mtime: r
        });
      },
      open(e, t, r = 438) {
        if (e === "") throw new n.ErrnoError(44);
        t = typeof t == "string" ? gn(t) : t, t & 64 ? r = r & 4095 | 32768 : r = 0;
        var o, c;
        if (typeof e == "object") o = e;
        else {
          c = e.endsWith("/");
          var l = n.lookupPath(e, {
            follow: !(t & 131072),
            noent_okay: true
          });
          o = l.node, e = l.path;
        }
        var u = false;
        if (t & 64) if (o) {
          if (t & 128) throw new n.ErrnoError(20);
        } else {
          if (c) throw new n.ErrnoError(31);
          o = n.mknod(e, r | 511, 0), u = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (t &= -513), t & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!u) {
          var m = n.mayOpen(o, t);
          if (m) throw new n.ErrnoError(m);
        }
        t & 512 && !u && n.truncate(o, 0), t &= -131713;
        var g = n.createStream({
          node: o,
          path: n.getPath(o),
          flags: t,
          seekable: true,
          position: 0,
          stream_ops: o.stream_ops,
          ungotten: [],
          error: false
        });
        return g.stream_ops.open && g.stream_ops.open(g), u && n.chmod(o, r & 511), s.logReadFiles && !(t & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), g;
      },
      close(e) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (t) {
          throw t;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, t, r) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new n.ErrnoError(70);
        if (r != 0 && r != 1 && r != 2) throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position;
      },
      read(e, t, r, o, c) {
        if (o < 0 || c < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.read) throw new n.ErrnoError(28);
        var l = typeof c < "u";
        if (!l) c = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var u = e.stream_ops.read(e, t, r, o, c);
        return l || (e.position += u), u;
      },
      write(e, t, r, o, c, l) {
        if (o < 0 || c < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var u = typeof c < "u";
        if (!u) c = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var m = e.stream_ops.write(e, t, r, o, c, l);
        return u || (e.position += m), m;
      },
      mmap(e, t, r, o, c) {
        if (o & 2 && !(c & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
        if (!t) throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, t, r, o, c);
      },
      msync(e, t, r, o, c) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, t, r, o, c) : 0;
      },
      ioctl(e, t, r) {
        if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, t, r);
      },
      readFile(e, t = {}) {
        if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary") throw new Error(`Invalid encoding type "${t.encoding}"`);
        var r = n.open(e, t.flags), o = n.stat(e), c = o.size, l = new Uint8Array(c);
        return n.read(r, l, 0, c, 0), t.encoding === "utf8" && (l = Fe(l)), n.close(r), l;
      },
      writeFile(e, t, r = {}) {
        r.flags = r.flags || 577;
        var o = n.open(e, r.flags, r.mode);
        if (typeof t == "string" && (t = new Uint8Array(wt(t))), ArrayBuffer.isView(t)) n.write(o, t, 0, t.byteLength, void 0, r.canOwn);
        else throw new Error("Unsupported data type");
        n.close(o);
      },
      cwd: () => n.currentPath,
      chdir(e) {
        var t = n.lookupPath(e, {
          follow: true
        });
        if (t.node === null) throw new n.ErrnoError(44);
        if (!n.isDir(t.node.mode)) throw new n.ErrnoError(54);
        var r = n.nodePermissions(t.node, "x");
        if (r) throw new n.ErrnoError(r);
        n.currentPath = t.path;
      },
      createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
          read: () => 0,
          write: (o, c, l, u, m) => u,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), Ae.register(n.makedev(5, 0), Ae.default_tty_ops), Ae.register(n.makedev(6, 0), Ae.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), t = 0, r = () => (t === 0 && (Qt(e), t = e.byteLength), e[--t]);
        n.createDevice("/dev", "random", r), n.createDevice("/dev", "urandom", r), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var t = n.createNode(e, "fd", 16895, 73);
            return t.stream_ops = {
              llseek: x.stream_ops.llseek
            }, t.node_ops = {
              lookup(r, o) {
                var c = +o, l = n.getStreamChecked(c), u = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => l.path
                  },
                  id: c + 1
                };
                return u.parent = u, u;
              },
              readdir() {
                return Array.from(n.streams.entries()).filter(([r, o]) => o).map(([r, o]) => r.toString());
              }
            }, t;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, t, r) {
        e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), t ? n.createDevice("/dev", "stdout", null, t) : n.symlink("/dev/tty", "/dev/stdout"), r ? n.createDevice("/dev", "stderr", null, r) : n.symlink("/dev/tty1", "/dev/stderr"), n.open("/dev/stdin", 0), n.open("/dev/stdout", 1), n.open("/dev/stderr", 1);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(x, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: x,
          NODEFS: b,
          WORKERFS: H
        };
      },
      init(e, t, r) {
        n.initialized = true, e ?? (e = s.stdin), t ?? (t = s.stdout), r ?? (r = s.stderr), n.createStandardStreams(e, t, r);
      },
      quit() {
        n.initialized = false;
        for (var e of n.streams) e && n.close(e);
      },
      findObject(e, t) {
        var r = n.analyzePath(e, t);
        return r.exists ? r.object : null;
      },
      analyzePath(e, t) {
        try {
          var r = n.lookupPath(e, {
            follow: !t
          });
          e = r.path;
        } catch {
        }
        var o = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var r = n.lookupPath(e, {
            parent: true
          });
          o.parentExists = true, o.parentPath = r.path, o.parentObject = r.node, o.name = D.basename(e), r = n.lookupPath(e, {
            follow: !t
          }), o.exists = true, o.path = r.path, o.object = r.node, o.name = r.node.name, o.isRoot = r.path === "/";
        } catch (c) {
          o.error = c.errno;
        }
        return o;
      },
      createPath(e, t, r, o) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var c = t.split("/").reverse(); c.length; ) {
          var l = c.pop();
          if (l) {
            var u = D.join2(e, l);
            try {
              n.mkdir(u);
            } catch (m) {
              if (m.errno != 20) throw m;
            }
            e = u;
          }
        }
        return u;
      },
      createFile(e, t, r, o, c) {
        var l = D.join2(typeof e == "string" ? e : n.getPath(e), t), u = bt(o, c);
        return n.create(l, u);
      },
      createDataFile(e, t, r, o, c, l) {
        var u = t;
        e && (e = typeof e == "string" ? e : n.getPath(e), u = t ? D.join2(e, t) : e);
        var m = bt(o, c), g = n.create(u, m);
        if (r) {
          if (typeof r == "string") {
            for (var w = new Array(r.length), I = 0, F = r.length; I < F; ++I) w[I] = r.charCodeAt(I);
            r = w;
          }
          n.chmod(g, m | 146);
          var A = n.open(g, 577);
          n.write(A, r, 0, r.length, 0, l), n.close(A), n.chmod(g, m);
        }
      },
      createDevice(e, t, r, o) {
        var _a3;
        var c = D.join2(typeof e == "string" ? e : n.getPath(e), t), l = bt(!!r, !!o);
        (_a3 = n.createDevice).major ?? (_a3.major = 64);
        var u = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(u, {
          open(m) {
            m.seekable = false;
          },
          close(m) {
            var _a4;
            ((_a4 = o == null ? void 0 : o.buffer) == null ? void 0 : _a4.length) && o(10);
          },
          read(m, g, w, I, F) {
            for (var A = 0, S = 0; S < I; S++) {
              var C;
              try {
                C = r();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (C === void 0 && A === 0) throw new n.ErrnoError(6);
              if (C == null) break;
              A++, g[w + S] = C;
            }
            return A && (m.node.atime = Date.now()), A;
          },
          write(m, g, w, I, F) {
            for (var A = 0; A < I; A++) try {
              o(g[w + A]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return I && (m.node.mtime = m.node.ctime = Date.now()), A;
          }
        }), n.mkdev(c, l, u);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
          e.contents = oe(e.url), e.usedBytes = e.contents.length;
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, t, r, o, c) {
        class l {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(S) {
            if (!(S > this.length - 1 || S < 0)) {
              var C = S % this.chunkSize, U = S / this.chunkSize | 0;
              return this.getter(U)[C];
            }
          }
          setDataGetter(S) {
            this.getter = S;
          }
          cacheLength() {
            var S = new XMLHttpRequest();
            if (S.open("HEAD", r, false), S.send(null), !(S.status >= 200 && S.status < 300 || S.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + S.status);
            var C = Number(S.getResponseHeader("Content-length")), U, ae = (U = S.getResponseHeader("Accept-Ranges")) && U === "bytes", Z = (U = S.getResponseHeader("Content-Encoding")) && U === "gzip", ie = 1024 * 1024;
            ae || (ie = C);
            var se = (ve, Re) => {
              if (ve > Re) throw new Error("invalid range (" + ve + ", " + Re + ") or no bytes requested!");
              if (Re > C - 1) throw new Error("only " + C + " bytes available! programmer error!");
              var W = new XMLHttpRequest();
              if (W.open("GET", r, false), C !== ie && W.setRequestHeader("Range", "bytes=" + ve + "-" + Re), W.responseType = "arraybuffer", W.overrideMimeType && W.overrideMimeType("text/plain; charset=x-user-defined"), W.send(null), !(W.status >= 200 && W.status < 300 || W.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + W.status);
              return W.response !== void 0 ? new Uint8Array(W.response || []) : wt(W.responseText || "");
            }, Ve = this;
            Ve.setDataGetter((ve) => {
              var Re = ve * ie, W = (ve + 1) * ie - 1;
              if (W = Math.min(W, C - 1), typeof Ve.chunks[ve] > "u" && (Ve.chunks[ve] = se(Re, W)), typeof Ve.chunks[ve] > "u") throw new Error("doXHR failed!");
              return Ve.chunks[ve];
            }), (Z || !C) && (ie = C = 1, C = this.getter(0).length, ie = C, be("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = C, this._chunkSize = ie, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest < "u") {
          if (!v) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var u = new l(), m = {
            isDevice: false,
            contents: u
          };
        } else var m = {
          isDevice: false,
          url: r
        };
        var g = n.createFile(e, t, m, o, c);
        m.contents ? g.contents = m.contents : m.url && (g.contents = null, g.url = m.url), Object.defineProperties(g, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var w = {}, I = Object.keys(g.stream_ops);
        I.forEach((A) => {
          var S = g.stream_ops[A];
          w[A] = (...C) => (n.forceLoadFile(g), S(...C));
        });
        function F(A, S, C, U, ae) {
          var Z = A.node.contents;
          if (ae >= Z.length) return 0;
          var ie = Math.min(Z.length - ae, U);
          if (Z.slice) for (var se = 0; se < ie; se++) S[C + se] = Z[ae + se];
          else for (var se = 0; se < ie; se++) S[C + se] = Z.get(ae + se);
          return ie;
        }
        return w.read = (A, S, C, U, ae) => (n.forceLoadFile(g), F(A, S, C, U, ae)), w.mmap = (A, S, C, U, ae) => {
          n.forceLoadFile(g);
          var Z = Et();
          if (!Z) throw new n.ErrnoError(48);
          return F(A, j, Z, S, C), {
            ptr: Z,
            allocated: true
          };
        }, g.stream_ops = w, g;
      }
    }, pn = (e, t) => e ? Fe(ze, e, t) : "", T = {
      DEFAULT_POLLMASK: 5,
      calculateAt(e, t, r) {
        if (D.isAbs(t)) return t;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var c = T.getStreamFromFD(e);
          o = c.path;
        }
        if (t.length == 0) {
          if (!r) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + t;
      },
      writeStat(e, t) {
        p[e >> 2] = t.dev, p[e + 4 >> 2] = t.mode, z[e + 8 >> 2] = t.nlink, p[e + 12 >> 2] = t.uid, p[e + 16 >> 2] = t.gid, p[e + 20 >> 2] = t.rdev, ee[e + 24 >> 3] = BigInt(t.size), p[e + 32 >> 2] = 4096, p[e + 36 >> 2] = t.blocks;
        var r = t.atime.getTime(), o = t.mtime.getTime(), c = t.ctime.getTime();
        return ee[e + 40 >> 3] = BigInt(Math.floor(r / 1e3)), z[e + 48 >> 2] = r % 1e3 * 1e3 * 1e3, ee[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), z[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, ee[e + 72 >> 3] = BigInt(Math.floor(c / 1e3)), z[e + 80 >> 2] = c % 1e3 * 1e3 * 1e3, ee[e + 88 >> 3] = BigInt(t.ino), 0;
      },
      writeStatFs(e, t) {
        p[e + 4 >> 2] = t.bsize, p[e + 40 >> 2] = t.bsize, p[e + 8 >> 2] = t.blocks, p[e + 12 >> 2] = t.bfree, p[e + 16 >> 2] = t.bavail, p[e + 20 >> 2] = t.files, p[e + 24 >> 2] = t.ffree, p[e + 28 >> 2] = t.fsid, p[e + 44 >> 2] = t.flags, p[e + 36 >> 2] = t.namelen;
      },
      doMsync(e, t, r, o, c) {
        if (!n.isFile(t.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var l = ze.slice(e, e + r);
        n.msync(t, l, c, r, o);
      },
      getStreamFromFD(e) {
        var t = n.getStreamChecked(e);
        return t;
      },
      varargs: void 0,
      getStr(e) {
        var t = pn(e);
        return t;
      }
    };
    function yn(e, t) {
      try {
        return e = T.getStr(e), n.chmod(e, t), 0;
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function wn(e, t, r, o, c) {
      try {
        t = T.getStr(t);
        var l = c & 256;
        return c = c & -257, t = T.calculateAt(e, t), (l ? n.lchown : n.chown)(t, r, o), 0;
      } catch (u) {
        if (typeof n > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    function En(e, t) {
      try {
        return T.writeStat(t, n.fstat(e));
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var bn = 9007199254740992, Sn = -9007199254740992, ot = (e) => e < Sn || e > bn ? NaN : Number(e);
    function Ln(e, t) {
      t = ot(t);
      try {
        return isNaN(t) ? -61 : (n.ftruncate(e, t), 0);
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var ge = (e, t, r) => er(e, ze, t, r);
    function kn(e, t) {
      try {
        if (t === 0) return -28;
        var r = n.cwd(), o = qe(r) + 1;
        return t < o ? -68 : (ge(r, e, t), o);
      } catch (c) {
        if (typeof n > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function xn(e, t, r) {
      try {
        var o = T.getStreamFromFD(e);
        o.getdents || (o.getdents = n.readdir(o.path));
        for (var c = 280, l = 0, u = n.llseek(o, 0, 1), m = Math.floor(u / c), g = Math.min(o.getdents.length, m + Math.floor(r / c)), w = m; w < g; w++) {
          var I, F, A = o.getdents[w];
          if (A === ".") I = o.node.id, F = 4;
          else if (A === "..") {
            var S = n.lookupPath(o.path, {
              parent: true
            });
            I = S.node.id, F = 4;
          } else {
            var C;
            try {
              C = n.lookupNode(o.node, A);
            } catch (U) {
              if ((U == null ? void 0 : U.errno) === 28) continue;
              throw U;
            }
            I = C.id, F = n.isChrdev(C.mode) ? 2 : n.isDir(C.mode) ? 4 : n.isLink(C.mode) ? 10 : 8;
          }
          ee[t + l >> 3] = BigInt(I), ee[t + l + 8 >> 3] = BigInt((w + 1) * c), Ue[t + l + 16 >> 1] = 280, j[t + l + 18] = F, ge(A, t + l + 19, 256), l += c;
        }
        return n.llseek(o, w * c, 0), l;
      } catch (U) {
        if (typeof n > "u" || U.name !== "ErrnoError") throw U;
        return -U.errno;
      }
    }
    var rr = () => {
      var e = p[+T.varargs >> 2];
      return T.varargs += 4, e;
    }, je = rr;
    function An(e, t, r) {
      T.varargs = r;
      try {
        var o = T.getStreamFromFD(e);
        switch (t) {
          case 21509:
            return o.tty ? 0 : -59;
          case 21505: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tcgets) {
              var c = o.tty.ops.ioctl_tcgets(o), l = je();
              p[l >> 2] = c.c_iflag || 0, p[l + 4 >> 2] = c.c_oflag || 0, p[l + 8 >> 2] = c.c_cflag || 0, p[l + 12 >> 2] = c.c_lflag || 0;
              for (var u = 0; u < 32; u++) j[l + u + 17] = c.c_cc[u] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return o.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tcsets) {
              for (var l = je(), m = p[l >> 2], g = p[l + 4 >> 2], w = p[l + 8 >> 2], I = p[l + 12 >> 2], F = [], u = 0; u < 32; u++) F.push(j[l + u + 17]);
              return o.tty.ops.ioctl_tcsets(o.tty, t, {
                c_iflag: m,
                c_oflag: g,
                c_cflag: w,
                c_lflag: I,
                c_cc: F
              });
            }
            return 0;
          }
          case 21519: {
            if (!o.tty) return -59;
            var l = je();
            return p[l >> 2] = 0, 0;
          }
          case 21520:
            return o.tty ? -28 : -59;
          case 21531: {
            var l = je();
            return n.ioctl(o, t, l);
          }
          case 21523: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tiocgwinsz) {
              var A = o.tty.ops.ioctl_tiocgwinsz(o.tty), l = je();
              Ue[l >> 1] = A[0], Ue[l + 2 >> 1] = A[1];
            }
            return 0;
          }
          case 21524:
            return o.tty ? 0 : -59;
          case 21515:
            return o.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (S) {
        if (typeof n > "u" || S.name !== "ErrnoError") throw S;
        return -S.errno;
      }
    }
    function Tn(e, t) {
      try {
        return e = T.getStr(e), T.writeStat(t, n.lstat(e));
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function Cn(e, t, r) {
      try {
        return t = T.getStr(t), t = T.calculateAt(e, t), n.mkdir(t, r, 0), 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function Bn(e, t, r, o) {
      try {
        t = T.getStr(t);
        var c = o & 256, l = o & 4096;
        return o = o & -6401, t = T.calculateAt(e, t, l), T.writeStat(r, c ? n.lstat(t) : n.stat(t));
      } catch (u) {
        if (typeof n > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    function In(e, t, r, o) {
      T.varargs = o;
      try {
        t = T.getStr(t), t = T.calculateAt(e, t);
        var c = o ? rr() : 0;
        return n.open(t, r, c).fd;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    function On(e, t, r, o) {
      try {
        if (t = T.getStr(t), t = T.calculateAt(e, t), o <= 0) return -28;
        var c = n.readlink(t), l = Math.min(o, qe(c)), u = j[r + l];
        return ge(c, r, o + 1), j[r + l] = u, l;
      } catch (m) {
        if (typeof n > "u" || m.name !== "ErrnoError") throw m;
        return -m.errno;
      }
    }
    function Dn(e, t, r, o) {
      try {
        return t = T.getStr(t), o = T.getStr(o), t = T.calculateAt(e, t), o = T.calculateAt(r, o), n.rename(t, o), 0;
      } catch (c) {
        if (typeof n > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function Fn(e) {
      try {
        return e = T.getStr(e), n.rmdir(e), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function Rn(e, t) {
      try {
        return e = T.getStr(e), T.writeStat(t, n.stat(e));
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function Mn(e, t, r) {
      try {
        return e = T.getStr(e), r = T.getStr(r), r = T.calculateAt(t, r), n.symlink(e, r), 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function Pn(e, t, r) {
      try {
        if (t = T.getStr(t), t = T.calculateAt(e, t), !r) n.unlink(t);
        else if (r === 512) n.rmdir(t);
        else return -28;
        return 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    var nr = (e) => z[e >> 2] + p[e + 4 >> 2] * 4294967296;
    function Nn(e, t, r, o) {
      try {
        t = T.getStr(t), t = T.calculateAt(e, t, true);
        var c = Date.now(), l, u;
        if (!r) l = c, u = c;
        else {
          var m = nr(r), g = p[r + 8 >> 2];
          g == 1073741823 ? l = c : g == 1073741822 ? l = null : l = m * 1e3 + g / (1e3 * 1e3), r += 16, m = nr(r), g = p[r + 8 >> 2], g == 1073741823 ? u = c : g == 1073741822 ? u = null : u = m * 1e3 + g / (1e3 * 1e3);
        }
        return (u ?? l) !== null && n.utime(t, l, u), 0;
      } catch (w) {
        if (typeof n > "u" || w.name !== "ErrnoError") throw w;
        return -w.errno;
      }
    }
    var zn = () => nt("");
    function Un(e, t) {
      e = ot(e);
      var r = new Date(e * 1e3);
      p[t >> 2] = r.getUTCSeconds(), p[t + 4 >> 2] = r.getUTCMinutes(), p[t + 8 >> 2] = r.getUTCHours(), p[t + 12 >> 2] = r.getUTCDate(), p[t + 16 >> 2] = r.getUTCMonth(), p[t + 20 >> 2] = r.getUTCFullYear() - 1900, p[t + 24 >> 2] = r.getUTCDay();
      var o = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0), c = (r.getTime() - o) / (1e3 * 60 * 60 * 24) | 0;
      p[t + 28 >> 2] = c;
    }
    var Hn = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), qn = [
      0,
      31,
      60,
      91,
      121,
      152,
      182,
      213,
      244,
      274,
      305,
      335
    ], jn = [
      0,
      31,
      59,
      90,
      120,
      151,
      181,
      212,
      243,
      273,
      304,
      334
    ], or = (e) => {
      var t = Hn(e.getFullYear()), r = t ? qn : jn, o = r[e.getMonth()] + e.getDate() - 1;
      return o;
    };
    function Wn(e, t) {
      e = ot(e);
      var r = new Date(e * 1e3);
      p[t >> 2] = r.getSeconds(), p[t + 4 >> 2] = r.getMinutes(), p[t + 8 >> 2] = r.getHours(), p[t + 12 >> 2] = r.getDate(), p[t + 16 >> 2] = r.getMonth(), p[t + 20 >> 2] = r.getFullYear() - 1900, p[t + 24 >> 2] = r.getDay();
      var o = or(r) | 0;
      p[t + 28 >> 2] = o, p[t + 36 >> 2] = -(r.getTimezoneOffset() * 60);
      var c = new Date(r.getFullYear(), 0, 1), l = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), u = c.getTimezoneOffset(), m = (l != u && r.getTimezoneOffset() == Math.min(u, l)) | 0;
      p[t + 32 >> 2] = m;
    }
    var Gn = function(e) {
      var t = (() => {
        var r = new Date(p[e + 20 >> 2] + 1900, p[e + 16 >> 2], p[e + 12 >> 2], p[e + 8 >> 2], p[e + 4 >> 2], p[e >> 2], 0), o = p[e + 32 >> 2], c = r.getTimezoneOffset(), l = new Date(r.getFullYear(), 0, 1), u = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), m = l.getTimezoneOffset(), g = Math.min(m, u);
        if (o < 0) p[e + 32 >> 2] = +(u != m && g == c);
        else if (o > 0 != (g == c)) {
          var w = Math.max(m, u), I = o > 0 ? g : w;
          r.setTime(r.getTime() + (I - c) * 6e4);
        }
        p[e + 24 >> 2] = r.getDay();
        var F = or(r) | 0;
        p[e + 28 >> 2] = F, p[e >> 2] = r.getSeconds(), p[e + 4 >> 2] = r.getMinutes(), p[e + 8 >> 2] = r.getHours(), p[e + 12 >> 2] = r.getDate(), p[e + 16 >> 2] = r.getMonth(), p[e + 20 >> 2] = r.getYear();
        var A = r.getTime();
        return isNaN(A) ? -1 : A / 1e3;
      })();
      return BigInt(t);
    }, Vn = (e, t, r, o) => {
      var c = (/* @__PURE__ */ new Date()).getFullYear(), l = new Date(c, 0, 1), u = new Date(c, 6, 1), m = l.getTimezoneOffset(), g = u.getTimezoneOffset(), w = Math.max(m, g);
      z[e >> 2] = w * 60, p[t >> 2] = +(m != g);
      var I = (S) => {
        var C = S >= 0 ? "-" : "+", U = Math.abs(S), ae = String(Math.floor(U / 60)).padStart(2, "0"), Z = String(U % 60).padStart(2, "0");
        return `UTC${C}${ae}${Z}`;
      }, F = I(m), A = I(g);
      g < m ? (ge(F, r, 17), ge(A, o, 17)) : (ge(F, o, 17), ge(A, r, 17));
    }, Yn = () => performance.now(), ar = () => Date.now(), $n = (e) => e >= 0 && e <= 3;
    function Kn(e, t, r) {
      if (!$n(e)) return 28;
      var o;
      e === 0 ? o = ar() : o = Yn();
      var c = Math.round(o * 1e3 * 1e3);
      return ee[r >> 3] = BigInt(c), 0;
    }
    var ir = () => 2147483648, Zn = () => ir(), Xn = (e, t) => Math.ceil(e / t) * t, Qn = (e) => {
      var t = rt.buffer, r = (e - t.byteLength + 65535) / 65536 | 0;
      try {
        return rt.grow(r), Wt(), 1;
      } catch {
      }
    }, Jn = (e) => {
      var t = ze.length;
      e >>>= 0;
      var r = ir();
      if (e > r) return false;
      for (var o = 1; o <= 4; o *= 2) {
        var c = t * (1 + 0.2 / o);
        c = Math.min(c, e + 100663296);
        var l = Math.min(r, Xn(Math.max(e, c), 65536)), u = Qn(l);
        if (u) return true;
      }
      return false;
    }, St = {}, eo = () => L || "./this.program", We = () => {
      if (!We.strings) {
        var e = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", t = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: eo()
        };
        for (var r in St) St[r] === void 0 ? delete t[r] : t[r] = St[r];
        var o = [];
        for (var r in t) o.push(`${r}=${t[r]}`);
        We.strings = o;
      }
      return We.strings;
    }, to = (e, t) => {
      var r = 0, o = 0;
      for (var c of We()) {
        var l = t + r;
        z[e + o >> 2] = l, r += ge(c, l, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, ro = (e, t) => {
      var r = We();
      z[e >> 2] = r.length;
      var o = 0;
      for (var c of r) o += qe(c) + 1;
      return z[t >> 2] = o, 0;
    }, no = 0, oo = () => Zt || no > 0, ao = (e) => {
      var _a3;
      O = e, oo() || ((_a3 = s.onExit) == null ? void 0 : _a3.call(s, e), E = true), P(e, new Vt(e));
    }, sr = (e, t) => {
      O = e, ao(e);
    }, io = sr;
    function so(e) {
      try {
        var t = T.getStreamFromFD(e);
        return n.close(t), 0;
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    function co(e, t) {
      try {
        var r = 0, o = 0, c = 0, l = T.getStreamFromFD(e), u = l.tty ? 2 : n.isDir(l.mode) ? 3 : n.isLink(l.mode) ? 7 : 4;
        return j[t] = u, Ue[t + 2 >> 1] = c, ee[t + 8 >> 3] = BigInt(r), ee[t + 16 >> 3] = BigInt(o), 0;
      } catch (m) {
        if (typeof n > "u" || m.name !== "ErrnoError") throw m;
        return m.errno;
      }
    }
    var lo = (e, t, r, o) => {
      for (var c = 0, l = 0; l < r; l++) {
        var u = z[t >> 2], m = z[t + 4 >> 2];
        t += 8;
        var g = n.read(e, j, u, m, o);
        if (g < 0) return -1;
        if (c += g, g < m) break;
      }
      return c;
    };
    function uo(e, t, r, o) {
      try {
        var c = T.getStreamFromFD(e), l = lo(c, t, r);
        return z[o >> 2] = l, 0;
      } catch (u) {
        if (typeof n > "u" || u.name !== "ErrnoError") throw u;
        return u.errno;
      }
    }
    function fo(e, t, r, o) {
      t = ot(t);
      try {
        if (isNaN(t)) return 61;
        var c = T.getStreamFromFD(e);
        return n.llseek(c, t, r), ee[o >> 3] = BigInt(c.position), c.getdents && t === 0 && r === 0 && (c.getdents = null), 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var mo = (e, t, r, o) => {
      for (var c = 0, l = 0; l < r; l++) {
        var u = z[t >> 2], m = z[t + 4 >> 2];
        t += 8;
        var g = n.write(e, j, u, m, o);
        if (g < 0) return -1;
        if (c += g, g < m) break;
      }
      return c;
    };
    function vo(e, t, r, o) {
      try {
        var c = T.getStreamFromFD(e), l = mo(c, t, r);
        return z[o >> 2] = l, 0;
      } catch (u) {
        if (typeof n > "u" || u.name !== "ErrnoError") throw u;
        return u.errno;
      }
    }
    var ho = (e) => {
      if (e instanceof Vt || e == "unwind") return O;
      P(1, e);
    }, cr = (e) => dr(e), go = (e) => {
      var t = qe(e) + 1, r = cr(t);
      return ge(e, r, t), r;
    };
    n.createPreloadedFile = hn, n.staticInit(), x.doesNotExistError = new n.ErrnoError(44), x.doesNotExistError.stack = "<generic error, no stack>", _ && b.staticInit(), s.noExitRuntime && (Zt = s.noExitRuntime), s.preloadPlugins && (tr = s.preloadPlugins), s.print && (be = s.print), s.printErr && (ue = s.printErr), s.wasmBinary && (fe = s.wasmBinary), s.arguments && (y = s.arguments), s.thisProgram && (L = s.thisProgram), s.callMain = Lt, s.FS = n, s.NODEFS = b, s.WORKERFS = H;
    var lr, dr;
    function _o(e) {
      s._main = lr = e.__main_argc_argv, e._emscripten_stack_restore, dr = e._emscripten_stack_alloc, e.emscripten_stack_get_current;
    }
    var ur = {
      __cxa_throw: ln,
      __syscall_chmod: yn,
      __syscall_fchownat: wn,
      __syscall_fstat64: En,
      __syscall_ftruncate64: Ln,
      __syscall_getcwd: kn,
      __syscall_getdents64: xn,
      __syscall_ioctl: An,
      __syscall_lstat64: Tn,
      __syscall_mkdirat: Cn,
      __syscall_newfstatat: Bn,
      __syscall_openat: In,
      __syscall_readlinkat: On,
      __syscall_renameat: Dn,
      __syscall_rmdir: Fn,
      __syscall_stat64: Rn,
      __syscall_symlinkat: Mn,
      __syscall_unlinkat: Pn,
      __syscall_utimensat: Nn,
      _abort_js: zn,
      _gmtime_js: Un,
      _localtime_js: Wn,
      _mktime_js: Gn,
      _tzset_js: Vn,
      clock_time_get: Kn,
      emscripten_date_now: ar,
      emscripten_get_heap_max: Zn,
      emscripten_resize_heap: Jn,
      environ_get: to,
      environ_sizes_get: ro,
      exit: io,
      fd_close: so,
      fd_fdstat_get: co,
      fd_read: uo,
      fd_seek: fo,
      fd_write: vo
    }, Ge = await on();
    function Lt(e = []) {
      var t = lr;
      e.unshift(L);
      var r = e.length, o = cr((r + 1) * 4), c = o;
      e.forEach((u) => {
        z[c >> 2] = go(u), c += 4;
      }), z[c >> 2] = 0;
      try {
        var l = t(r, o);
        return sr(l, true), l;
      } catch (u) {
        return ho(u);
      }
    }
    function kt(e = y) {
      if (xe > 0) {
        He = kt;
        return;
      }
      if (Kr(), xe > 0) {
        He = kt;
        return;
      }
      function t() {
        var _a3;
        if (s.calledRun = true, !E) {
          Zr(), Ht == null ? void 0 : Ht(s), (_a3 = s.onRuntimeInitialized) == null ? void 0 : _a3.call(s);
          var r = s.noInitialRun || false;
          r || Lt(e), Xr();
        }
      }
      s.setStatus ? (s.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => s.setStatus(""), 1), t();
      }, 1)) : t();
    }
    function po() {
      if (s.preInit) for (typeof s.preInit == "function" && (s.preInit = [
        s.preInit
      ]); s.preInit.length > 0; ) s.preInit.shift()();
    }
    return po(), kt(), s.FS = n, s.NODEFS = b, s.WORKERFS = H, s.callMain = Lt, jt ? a = s : a = new Promise((e, t) => {
      Ht = e, qt = t;
    }), a;
  };
  const oa = "/assets/7zz-Dnj2A7zV.wasm";
  let re = null, ut = false, ft = false, $e = null;
  function gr(i) {
    const a = i.toLowerCase();
    (a.includes("password") || a.includes("encrypted")) && (ft = true);
  }
  async function aa(i) {
    $e = i || null;
    const a = (d) => {
      gr(d), $e && $e(d + `
`);
    }, s = (d) => {
      gr(d), $e && $e("ERROR: " + d + `
`);
    };
    re ? (re.print = a, re.printErr = s) : re = await na({
      locateFile: (d) => d.endsWith(".wasm") ? oa : d,
      print: a,
      printErr: s,
      stdin: () => (ut = true, null)
    }), ut = false, ft = false;
  }
  function ia(i) {
    ut = false, ft = false;
    let a = 0;
    try {
      re.callMain(i);
    } catch (s) {
      s && typeof s == "object" && s.name === "ExitStatus" && typeof s.status == "number" ? a = s.status : a = -1;
    }
    return [
      a,
      ft || ut ? 1 : 0
    ];
  }
  function sa(i, a) {
    re.FS.writeFile(i, a);
  }
  function ca(i) {
    return re.FS.readFile(i);
  }
  function la(i) {
    return re.FS.readdir(i).filter((a) => a !== "." && a !== "..");
  }
  function da(i) {
    re.FS.mkdirTree(i);
  }
  function ua(i) {
    try {
      re.FS.unlink(i);
    } catch {
    }
  }
  function fa(i) {
    return re.FS.isDir(re.FS.stat(i).mode);
  }
  function Dr(i, a, s, d) {
    const v = ye(a, k.__wbindgen_malloc, k.__wbindgen_realloc), _ = K;
    var h = de(s) ? 0 : ye(s, k.__wbindgen_malloc, k.__wbindgen_realloc), y = K;
    return k.compress_files(i, v, _, h, y, de(d) ? 0 : Ce(d));
  }
  function ma(i, a, s) {
    let d, v;
    try {
      const y = ye(i, k.__wbindgen_malloc, k.__wbindgen_realloc), L = K, P = ye(a, k.__wbindgen_malloc, k.__wbindgen_realloc), q = K, R = ye(s, k.__wbindgen_malloc, k.__wbindgen_realloc), M = K, Y = k.convert(y, L, P, q, R, M);
      var _ = Y[0], h = Y[1];
      if (Y[3]) throw _ = 0, h = 0, Rr(Y[2]);
      return d = _, v = h, le(_, h);
    } finally {
      k.__wbindgen_free(d, v, 1);
    }
  }
  function _r(i, a, s, d) {
    const v = Fr(i, k.__wbindgen_malloc), _ = K, h = ye(a, k.__wbindgen_malloc, k.__wbindgen_realloc), y = K;
    var L = de(s) ? 0 : ye(s, k.__wbindgen_malloc, k.__wbindgen_realloc), P = K;
    return k.extract_archive(v, _, h, y, L, P, de(d) ? 0 : Ce(d));
  }
  function va() {
    return {
      __proto__: null,
      "./onius_wasm_bg.js": {
        __proto__: null,
        __wbg_String_8564e559799eccda: function(a, s) {
          const d = String(s), v = ye(d, k.__wbindgen_malloc, k.__wbindgen_realloc), _ = K;
          Se().setInt32(a + 4, _, true), Se().setInt32(a + 0, v, true);
        },
        __wbg___wbindgen_is_function_1ff95bcc5517c252: function(a) {
          return typeof a == "function";
        },
        __wbg___wbindgen_is_undefined_c05833b95a3cf397: function(a) {
          return a === void 0;
        },
        __wbg___wbindgen_number_get_394265ed1e1b84ee: function(a, s) {
          const d = s, v = typeof d == "number" ? d : void 0;
          Se().setFloat64(a + 8, de(v) ? 0 : v, true), Se().setInt32(a + 0, !de(v), true);
        },
        __wbg___wbindgen_string_get_b0ca35b86a603356: function(a, s) {
          const d = s, v = typeof d == "string" ? d : void 0;
          var _ = de(v) ? 0 : ye(v, k.__wbindgen_malloc, k.__wbindgen_realloc), h = K;
          Se().setInt32(a + 4, h, true), Se().setInt32(a + 0, _, true);
        },
        __wbg___wbindgen_throw_344f42d3211c4765: function(a, s) {
          throw new Error(le(a, s));
        },
        __wbg__wbg_cb_unref_fffb441def202758: function(a) {
          a._wbg_cb_unref();
        },
        __wbg_call_a6e5c5dce5018821: function() {
          return At(function(a, s, d) {
            return a.call(s, d);
          }, arguments);
        },
        __wbg_forEach_82ee661bb919e660: function(a, s, d) {
          try {
            var v = {
              a: s,
              b: d
            }, _ = (h, y) => {
              const L = v.a;
              v.a = 0;
              try {
                return ga(L, v.b, h, y);
              } finally {
                v.a = L;
              }
            };
            a.forEach(_);
          } finally {
            v.a = 0;
          }
        },
        __wbg_from_13e323c65fc8f464: function(a) {
          return Array.from(a);
        },
        __wbg_get_507a50627bffa49b: function(a, s) {
          return a[s >>> 0];
        },
        __wbg_get_unchecked_6e0ad6d2a41b06f6: function(a, s) {
          return a[s >>> 0];
        },
        __wbg_initSevenZip_0e289dfece0b1d7c: function() {
          return At(function(a) {
            return aa(a);
          }, arguments);
        },
        __wbg_length_1f0964f4a5e2c6d8: function(a) {
          return a.length;
        },
        __wbg_length_370319915dc99107: function(a) {
          return a.length;
        },
        __wbg_new_32b398fb48b6d94a: function() {
          return new Array();
        },
        __wbg_new_b667d279fd5aa943: function(a, s) {
          return new Error(le(a, s));
        },
        __wbg_new_cd45aabdf6073e84: function(a) {
          return new Uint8Array(a);
        },
        __wbg_new_da52cf8fe3429cb2: function() {
          return new Object();
        },
        __wbg_new_typed_1824d93f294193e5: function(a, s) {
          try {
            var d = {
              a,
              b: s
            }, v = (h, y) => {
              const L = d.a;
              d.a = 0;
              try {
                return _a(L, d.b, h, y);
              } finally {
                d.a = L;
              }
            };
            return new Promise(v);
          } finally {
            d.a = 0;
          }
        },
        __wbg_now_86c0d4ba3fa605b8: function() {
          return Date.now();
        },
        __wbg_prototypesetcall_4770620bbe4688a0: function(a, s, d) {
          Uint8Array.prototype.set.call(it(a, s), d);
        },
        __wbg_push_d2ae3af0c1217ae6: function(a, s) {
          return a.push(s);
        },
        __wbg_queueMicrotask_0ab5b2d2393e99b9: function(a) {
          return a.queueMicrotask;
        },
        __wbg_queueMicrotask_6a09b7bc46549209: function(a) {
          queueMicrotask(a);
        },
        __wbg_resolve_2191a4dfe481c25b: function(a) {
          return Promise.resolve(a);
        },
        __wbg_set_6be42768c690e380: function(a, s, d) {
          a[s] = d;
        },
        __wbg_set_8a16b38e4805b298: function(a, s, d) {
          a[s >>> 0] = d;
        },
        __wbg_set_name_3bbc583faefa4193: function(a, s, d) {
          a.name = le(s, d);
        },
        __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: function() {
          const a = typeof global > "u" ? null : global;
          return de(a) ? 0 : Ce(a);
        },
        __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: function() {
          const a = typeof globalThis > "u" ? null : globalThis;
          return de(a) ? 0 : Ce(a);
        },
        __wbg_static_accessor_SELF_146583524fe1469b: function() {
          const a = typeof self > "u" ? null : self;
          return de(a) ? 0 : Ce(a);
        },
        __wbg_static_accessor_WINDOW_f2829a2234d7819e: function() {
          const a = typeof window > "u" ? null : window;
          return de(a) ? 0 : Ce(a);
        },
        __wbg_szCallMain_46f5f073c91fc613: function() {
          return At(function(a) {
            return ia(a);
          }, arguments);
        },
        __wbg_szIsDirPath_9ae3968319bb734f: function(a, s) {
          return fa(le(a, s));
        },
        __wbg_szMkdirTree_6d42faec119d49f4: function(a, s) {
          da(le(a, s));
        },
        __wbg_szReadDir_7cf9b0d47ac323e3: function(a, s) {
          return la(le(a, s));
        },
        __wbg_szReadFile_6b0d1d292b543181: function(a, s, d) {
          const v = ca(le(s, d)), _ = Fr(v, k.__wbindgen_malloc), h = K;
          Se().setInt32(a + 4, h, true), Se().setInt32(a + 0, _, true);
        },
        __wbg_szUnlink_0753de6bf3645c4b: function(a, s) {
          ua(le(a, s));
        },
        __wbg_szWriteFile_c441463b375356ee: function(a, s, d, v) {
          sa(le(a, s), it(d, v));
        },
        __wbg_then_16d107c451e9905d: function(a, s, d) {
          return a.then(s, d);
        },
        __wbg_then_6ec10ae38b3e92f7: function(a, s) {
          return a.then(s);
        },
        __wbindgen_cast_0000000000000001: function(a, s) {
          return pa(a, s, ha);
        },
        __wbindgen_cast_0000000000000002: function(a, s) {
          return it(a, s);
        },
        __wbindgen_cast_0000000000000003: function(a, s) {
          return le(a, s);
        },
        __wbindgen_cast_0000000000000004: function(a, s) {
          var d = it(a, s).slice();
          return k.__wbindgen_free(a, s * 1, 1), d;
        },
        __wbindgen_init_externref_table: function() {
          const a = k.__wbindgen_externrefs, s = a.grow(4);
          a.set(0, void 0), a.set(s + 0, void 0), a.set(s + 1, null), a.set(s + 2, true), a.set(s + 3, false);
        }
      }
    };
  }
  function ha(i, a, s) {
    const d = k.wasm_bindgen_7815ba1f1746f71b___convert__closures_____invoke___wasm_bindgen_7815ba1f1746f71b___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_7815ba1f1746f71b___JsError___true_(i, a, s);
    if (d[1]) throw Rr(d[0]);
  }
  function ga(i, a, s, d) {
    k.wasm_bindgen_7815ba1f1746f71b___convert__closures_____invoke___js_sys_d4e169294ca48497___Function_fn_wasm_bindgen_7815ba1f1746f71b___JsValue_____wasm_bindgen_7815ba1f1746f71b___sys__Undefined___js_sys_d4e169294ca48497___Function_fn_wasm_bindgen_7815ba1f1746f71b___JsValue_____wasm_bindgen_7815ba1f1746f71b___sys__Undefined_______true_(i, a, s, d);
  }
  function _a(i, a, s, d) {
    k.wasm_bindgen_7815ba1f1746f71b___convert__closures_____invoke___js_sys_d4e169294ca48497___Function_fn_wasm_bindgen_7815ba1f1746f71b___JsValue_____wasm_bindgen_7815ba1f1746f71b___sys__Undefined___js_sys_d4e169294ca48497___Function_fn_wasm_bindgen_7815ba1f1746f71b___JsValue_____wasm_bindgen_7815ba1f1746f71b___sys__Undefined_______true__5(i, a, s, d);
  }
  function Ce(i) {
    const a = k.__externref_table_alloc();
    return k.__wbindgen_externrefs.set(a, i), a;
  }
  const pr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => k.__wbindgen_destroy_closure(i.a, i.b));
  function it(i, a) {
    return i = i >>> 0, Me().subarray(i / 1, i / 1 + a);
  }
  let Te = null;
  function Se() {
    return (Te === null || Te.buffer.detached === true || Te.buffer.detached === void 0 && Te.buffer !== k.memory.buffer) && (Te = new DataView(k.memory.buffer)), Te;
  }
  function le(i, a) {
    return wa(i >>> 0, a);
  }
  let Ke = null;
  function Me() {
    return (Ke === null || Ke.byteLength === 0) && (Ke = new Uint8Array(k.memory.buffer)), Ke;
  }
  function At(i, a) {
    try {
      return i.apply(this, a);
    } catch (s) {
      const d = Ce(s);
      k.__wbindgen_exn_store(d);
    }
  }
  function de(i) {
    return i == null;
  }
  function pa(i, a, s) {
    const d = {
      a: i,
      b: a,
      cnt: 1
    }, v = (..._) => {
      d.cnt++;
      const h = d.a;
      d.a = 0;
      try {
        return s(h, d.b, ..._);
      } finally {
        d.a = h, v._wbg_cb_unref();
      }
    };
    return v._wbg_cb_unref = () => {
      --d.cnt === 0 && (k.__wbindgen_destroy_closure(d.a, d.b), d.a = 0, pr.unregister(d));
    }, pr.register(v, d, d), v;
  }
  function Fr(i, a) {
    const s = a(i.length * 1, 1) >>> 0;
    return Me().set(i, s / 1), K = i.length, s;
  }
  function ye(i, a, s) {
    if (s === void 0) {
      const y = Ze.encode(i), L = a(y.length, 1) >>> 0;
      return Me().subarray(L, L + y.length).set(y), K = y.length, L;
    }
    let d = i.length, v = a(d, 1) >>> 0;
    const _ = Me();
    let h = 0;
    for (; h < d; h++) {
      const y = i.charCodeAt(h);
      if (y > 127) break;
      _[v + h] = y;
    }
    if (h !== d) {
      h !== 0 && (i = i.slice(h)), v = s(v, d, d = h + i.length * 3, 1) >>> 0;
      const y = Me().subarray(v + h, v + d), L = Ze.encodeInto(i, y);
      h += L.written, v = s(v, d, h, 1) >>> 0;
    }
    return K = h, v;
  }
  function Rr(i) {
    const a = k.__wbindgen_externrefs.get(i);
    return k.__externref_table_dealloc(i), a;
  }
  let lt = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  lt.decode();
  const ya = 2146435072;
  let Tt = 0;
  function wa(i, a) {
    return Tt += a, Tt >= ya && (lt = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), lt.decode(), Tt = a), lt.decode(Me().subarray(i, i + a));
  }
  const Ze = new TextEncoder();
  "encodeInto" in Ze || (Ze.encodeInto = function(i, a) {
    const s = Ze.encode(i);
    return a.set(s), {
      read: i.length,
      written: s.length
    };
  });
  let K = 0, k;
  function Ea(i, a) {
    return k = i.exports, Te = null, Ke = null, k.__wbindgen_start(), k;
  }
  async function ba(i, a) {
    if (typeof Response == "function" && i instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(i, a);
      } catch (v) {
        if (i.ok && s(i.type) && i.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", v);
        else throw v;
      }
      const d = await i.arrayBuffer();
      return await WebAssembly.instantiate(d, a);
    } else {
      const d = await WebAssembly.instantiate(i, a);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: i
      } : d;
    }
    function s(d) {
      switch (d) {
        case "basic":
        case "cors":
        case "default":
          return true;
      }
      return false;
    }
  }
  async function Mr(i) {
    if (k !== void 0) return k;
    i !== void 0 && (Object.getPrototypeOf(i) === Object.prototype ? { module_or_path: i } = i : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), i === void 0 && (i = new URL("/assets/onius_wasm_bg-DDz1YOr2.wasm", import.meta.url));
    const a = va();
    (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
    const { instance: s, module: d } = await ba(await i, a);
    return Ea(s);
  }
  const Sa = {
    contentFile: "base64-content.html",
    title: "Onius \u2014 " + pe.base64.name
  }, La = Mr(), yr = {
    text: "plain",
    base64: "base64",
    base64url: "base64url",
    hex: "hex"
  };
  let he = "text", Be = "base64";
  async function ka() {
    await La;
  }
  async function xa() {
    await ka(), _e("from", "text"), _e("to", "base64"), Ir(pe.base64.name, pe.base64.icon, pe.base64.slug, "base64"), Aa();
  }
  function It(i, a, s) {
    try {
      return ma(i, yr[a] ?? a, yr[s] ?? s);
    } catch (d) {
      throw new Error(typeof d == "string" ? d : d && d.message || String(d));
    }
  }
  function _e(i, a) {
    i === "from" && (he = a), i === "to" && (Be = a);
  }
  function Pr() {
    const i = he;
    he = Be, Be = i;
  }
  function Ot() {
    const i = (y) => document.getElementById(y), a = i("input-text"), s = i("output-text"), d = i("empty-state"), v = i("char-count"), _ = i("image-upload-area"), h = i("file-name");
    a && (a.value = "", a.classList.remove("hidden")), _ && _.classList.add("hidden"), h && (h.textContent = ""), s && (s.value = ""), d && d.classList.remove("opacity-0"), v && (v.textContent = "0 " + V("base64.chars"));
  }
  function Nr() {
    const i = document.getElementById("output-text");
    if (i && i.value && !i.value.startsWith("Error:")) {
      const a = document.getElementById("copy-btn"), s = a.innerHTML;
      a.innerHTML = '<span class="material-symbols-outlined text-[18px]">done</span> ' + V("base64.copiedBtn"), a.classList.add("bg-green-600"), navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(i.value) : (i.select(), document.execCommand("copy")), setTimeout(() => {
        a.innerHTML = s, a.classList.remove("bg-green-600");
      }, 2e3);
    }
  }
  function zr(i) {
    return new Promise((a, s) => {
      const d = new FileReader();
      d.onload = () => a(d.result), d.onerror = s, d.readAsDataURL(i);
    });
  }
  function Aa() {
    const i = (E) => document.getElementById(E), a = i("input-text"), s = i("output-text"), d = i("empty-state"), v = i("char-count"), _ = i("output-chars"), h = i("swap-btn"), y = i("image-upload-area"), L = i("image-input"), P = i("image-drop-zone"), q = i("file-name");
    let R = null;
    function M(E, O) {
      document.querySelectorAll(`.format-pill[data-group="${E}"]`).forEach((N) => {
        N.classList.toggle("active", N.dataset.format === O);
      });
    }
    function Y() {
      if (he === "image") v.textContent = q.textContent || "";
      else {
        const E = a.value.length, O = new TextEncoder().encode(a.value).length;
        v.textContent = E + " " + V("base64.chars") + (E !== O ? " \xB7 " + O + " " + V("base64.bytes") : "");
      }
    }
    function oe() {
      const E = s.value, O = E.length, N = new TextEncoder().encode(E).length;
      _.textContent = O + " " + V("base64.chars") + (O !== N ? " \xB7 " + N + " " + V("base64.bytes") : "");
    }
    function B() {
      const E = he, O = Be;
      if (Y(), E === "image") {
        if (!R) {
          s.value = "", d.classList.remove("opacity-0"), oe();
          return;
        }
        const N = R.split(",")[1];
        try {
          s.value = O === "base64" ? N : It(N, "base64", O), d.classList.add("opacity-0");
        } catch (me) {
          s.value = "Error: " + me.message;
        }
        oe();
        return;
      }
      if (!a.value) {
        s.value = "", d.classList.remove("opacity-0"), oe();
        return;
      }
      d.classList.add("opacity-0");
      try {
        s.value = It(a.value, E, O);
      } catch (N) {
        s.value = "Error: " + N.message;
      }
      oe();
    }
    function be(E) {
      Ot(), R = null, E ? (a.classList.add("hidden"), y.classList.remove("hidden")) : (a.classList.remove("hidden"), y.classList.add("hidden"));
    }
    function ue(E) {
      const O = new FileReader();
      he === "hex" ? (O.onload = () => {
        const N = new Uint8Array(O.result);
        a.value = Array.from(N).map((me) => me.toString(16).padStart(2, "0")).join(""), B();
      }, O.readAsArrayBuffer(E)) : (O.onload = () => {
        a.value = O.result, B();
      }, O.readAsText(E));
    }
    function fe() {
      document.querySelectorAll('.format-pill[data-group="to"]').forEach((E) => {
        he === "image" && E.dataset.format === "text" ? (E.classList.add("opacity-40", "cursor-not-allowed"), Be === "text" && (_e("to", "base64"), M("to", "base64"))) : E.classList.remove("opacity-40", "cursor-not-allowed");
      });
    }
    document.querySelectorAll(".format-pill").forEach((E) => {
      E.addEventListener("click", () => {
        const O = E.dataset.group, N = E.dataset.format;
        O === "from" ? (_e("from", N), M("from", N), be(N === "image"), fe()) : (_e("to", N), M("to", N)), B();
      });
    }), h.addEventListener("click", () => {
      if (he === "image") return;
      const E = s.value.startsWith("Error:") ? "" : s.value;
      Pr(), M("from", he), M("to", Be), fe(), a.value = E, B();
    }), a.addEventListener("input", B), a.addEventListener("dragover", (E) => {
      E.preventDefault(), a.classList.add("ring-2", "ring-primary");
    }), [
      "dragleave",
      "dragend"
    ].forEach((E) => a.addEventListener(E, () => a.classList.remove("ring-2", "ring-primary"))), a.addEventListener("drop", (E) => {
      E.preventDefault(), a.classList.remove("ring-2", "ring-primary");
      const O = E.dataTransfer.files[0];
      if (O) {
        if (O.type.startsWith("image/")) {
          _e("from", "image"), M("from", "image"), be(true), fe(), L.files = E.dataTransfer.files, L.dispatchEvent(new Event("change"));
          return;
        }
        ue(O);
      }
    }), L.addEventListener("change", async () => {
      const E = L.files[0];
      E && (q.textContent = E.name, R = await zr(E), Y(), B());
    }), P.addEventListener("click", () => L.click()), P.addEventListener("dragover", (E) => {
      E.preventDefault(), P.classList.add("drag-over");
    }), P.addEventListener("dragleave", () => P.classList.remove("drag-over")), P.addEventListener("drop", (E) => {
      E.preventDefault(), P.classList.remove("drag-over");
      const O = E.dataTransfer.files[0];
      O && O.type.startsWith("image/") && (L.files = E.dataTransfer.files, L.dispatchEvent(new Event("change")));
    }), i("clear-btn").addEventListener("click", () => {
      Ot(), L && (L.value = ""), q.textContent = "", R = null, Y(), oe();
    }), i("copy-btn").addEventListener("click", Nr), document.querySelectorAll(".example-btn").forEach((E) => {
      E.addEventListener("click", () => {
        const O = E.dataset.from, N = E.dataset.to, me = E.dataset.input;
        _e("from", O), _e("to", N), M("from", O), M("to", N), be(false), fe(), a.value = me, B();
      });
    });
  }
  const Ta = Object.freeze(Object.defineProperty({
    __proto__: null,
    clearAll: Ot,
    convert: It,
    copyOutput: Nr,
    get fromFormat() {
      return he;
    },
    init: xa,
    meta: Sa,
    readImageAsDataURL: zr,
    swapFormats: Pr,
    switchFormat: _e,
    get toFormat() {
      return Be;
    }
  }, Symbol.toStringTag, {
    value: "Module"
  })), Ca = {
    contentFile: "archiver-content.html",
    title: "Onius \u2014 " + pe.archiver.name
  }, Ba = Mr();
  async function Ia() {
    await Ba;
  }
  async function Oa() {
    await Ia(), Ir(pe.archiver.name, pe.archiver.icon, pe.archiver.slug, "archiver"), Fa();
  }
  var G = [], J = "compress", X = null, $ = [], Ne = "", Q = false, Le = "", ne = "idle", ht = [], we = null, f = {}, wr = {
    zip: "text-amber-400",
    "7z": "text-purple-400",
    rar: "text-red-400",
    tar: "text-blue-400",
    gz: "text-cyan-400",
    bz: "text-teal-400",
    pdf: "text-rose-400",
    doc: "text-blue-400",
    docx: "text-blue-400",
    xls: "text-green-400",
    xlsx: "text-green-400",
    ppt: "text-orange-400",
    pptx: "text-orange-400",
    jpg: "text-pink-400",
    jpeg: "text-pink-400",
    png: "text-pink-400",
    gif: "text-purple-400",
    svg: "text-yellow-400",
    mp4: "text-violet-400",
    mov: "text-violet-400",
    avi: "text-violet-400",
    mkv: "text-violet-400",
    mp3: "text-lime-400",
    wav: "text-lime-400",
    flac: "text-lime-400",
    psd: "text-indigo-400",
    ai: "text-orange-400",
    exe: "text-slate-400",
    dmg: "text-slate-400",
    iso: "text-yellow-400",
    default: "text-blue-400"
  }, Da = {
    zip: "ZIP",
    "7z": "7z",
    rar: "RAR",
    tar: "TAR",
    "tar.gz": "TAR.GZ",
    "tar.bz": "TAR.BZ",
    gz: "GZIP",
    bz: "BZIP2",
    tgz: "TGZ"
  };
  function Fa() {
    G = [], J = "compress", X = null, $ = [], Ne = "", Q = false, Le = "", ne = "idle", ht = [], we = null, Ra(), f.dropZone && (Ma(), Pa(), Na(), Ga(), f.formatSelect.dispatchEvent(new Event("change")), Va(), qa(), ja(), Wa(), Ya(), $a(), Ka(), Za(), Xa(), Qa(), Ja(), mt());
  }
  function Ra() {
    f = {
      leftCard: document.getElementById("left-card"),
      modeCompress: document.getElementById("mode-compress"),
      modeExtract: document.getElementById("mode-extract"),
      dropZone: document.getElementById("drop-zone"),
      compressDropContent: document.getElementById("compress-drop-content"),
      extractDropContent: document.getElementById("extract-drop-content"),
      archiveInspector: document.getElementById("archive-inspector"),
      inspectorFilename: document.getElementById("inspector-filename"),
      inspectorMeta: document.getElementById("inspector-meta"),
      removeArchiveBtn: document.getElementById("remove-archive-btn"),
      controlsWrapper: document.getElementById("controls-wrapper"),
      compressControls: document.getElementById("compress-controls"),
      extractControls: document.getElementById("extract-controls"),
      fileInput: document.getElementById("file-input"),
      folderInput: document.getElementById("folder-input"),
      archiveInput: document.getElementById("archive-input"),
      browseFilesBtn: document.getElementById("browse-files-btn"),
      browseFolderBtn: document.getElementById("browse-folder-btn"),
      browseArchiveBtn: document.getElementById("browse-archive-btn"),
      formatSelect: document.getElementById("format-select"),
      compressPasswordSection: document.getElementById("compress-password-section"),
      compressEnablePassword: document.getElementById("compress-enable-password"),
      compressPasswordFields: document.getElementById("compress-password-fields"),
      compressPassword: document.getElementById("compress-password"),
      compressPasswordConfirm: document.getElementById("compress-password-confirm"),
      compressBtn: document.getElementById("compress-btn"),
      passwordModal: document.getElementById("password-modal"),
      modalPassword: document.getElementById("modal-password"),
      modalCancelBtn: document.getElementById("modal-cancel-btn"),
      modalUnlockBtn: document.getElementById("modal-unlock-btn"),
      modalPasswordError: document.getElementById("modal-password-error"),
      progressState: document.getElementById("progress-state"),
      progressIcon: document.getElementById("progress-icon"),
      progressTitle: document.getElementById("progress-title"),
      progressSubtitle: document.getElementById("progress-subtitle"),
      progressFill: document.getElementById("progress-fill"),
      progressStatus: document.getElementById("progress-status"),
      progressPercentage: document.getElementById("progress-percentage"),
      cancelBtn: document.getElementById("cancel-btn"),
      successState: document.getElementById("success-state"),
      successTitle: document.getElementById("success-title"),
      successFilename: document.getElementById("success-filename"),
      successStatsRow: document.getElementById("success-stats-row"),
      successOriginalSize: document.getElementById("success-original-size"),
      successCompressedSize: document.getElementById("success-compressed-size"),
      successSavedPct: document.getElementById("success-saved-pct"),
      downloadBtn: document.getElementById("download-btn"),
      compressAgainBtn: document.getElementById("compress-again-btn"),
      errorState: document.getElementById("error-state"),
      errorDetail: document.getElementById("error-detail"),
      errorDetailsToggle: document.getElementById("error-details-toggle"),
      errorLog: document.getElementById("error-log"),
      errorLogContent: document.getElementById("error-log-content"),
      tryAgainBtn: document.getElementById("try-again-btn"),
      fileList: document.getElementById("file-list"),
      fileListEmpty: document.getElementById("file-list-empty"),
      fileListEmptyTitle: document.getElementById("file-list-empty-title"),
      fileListEmptySubtitle: document.getElementById("file-list-empty-subtitle"),
      archiveAnalyzing: document.getElementById("archive-analyzing"),
      fileListEmptyIcon: document.getElementById("file-list-empty-icon"),
      fileCountBadge: document.getElementById("file-count-badge"),
      fileCountText: document.getElementById("file-count-text"),
      totalSizeText: document.getElementById("total-size-text"),
      clearAllBtn: document.getElementById("clear-all-btn"),
      saveOutputFooterBtn: document.getElementById("save-output-footer-btn"),
      browserWarning: document.getElementById("browser-warning"),
      queueSectionTitle: document.getElementById("queue-section-title")
    };
  }
  function Ma() {
    !("showDirectoryPicker" in window) && f.browserWarning && f.browserWarning.classList.remove("hidden");
  }
  function Pa() {
    f.modeCompress.addEventListener("click", function() {
      Er("compress");
    }), f.modeExtract.addEventListener("click", function() {
      Er("extract");
    });
  }
  function Er(i) {
    if (i !== J) {
      var a = J;
      J = i, a === "extract" ? (X = null, $ = [], Ne = "", f.archiveInspector.classList.add("hidden"), f.dropZone.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All") : G = [], ne !== "running" && ke();
      var s = function(v) {
        v.classList.add("bg-primary", "text-on-primary"), v.classList.remove("text-on-surface-variant", "hover:text-on-surface");
      }, d = function(v) {
        v.classList.remove("bg-primary", "text-on-primary"), v.classList.add("text-on-surface-variant", "hover:text-on-surface");
      };
      i === "compress" ? (s(f.modeCompress), d(f.modeExtract), f.compressDropContent.classList.remove("hidden"), f.extractDropContent.classList.add("hidden"), f.compressControls.classList.remove("hidden"), f.extractControls.classList.add("hidden"), f.leftCard.classList.remove("justify-center"), f.dropZone.classList.remove("flex-1"), f.dropZone.classList.add("min-h-[200px]"), f.queueSectionTitle.textContent = "Queued Files", f.fileCountBadge.classList.remove("hidden"), f.fileListEmptyTitle.textContent = "No files added yet", f.fileListEmptySubtitle.textContent = "Drop files above or click to browse", f.fileListEmptyIcon.textContent = "inventory_2", f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All", tt()) : (s(f.modeExtract), d(f.modeCompress), f.compressDropContent.classList.add("hidden"), f.extractDropContent.classList.remove("hidden"), f.compressControls.classList.add("hidden"), f.extractControls.classList.remove("hidden"), f.leftCard.classList.add("justify-center"), f.dropZone.classList.add("flex-1"), f.dropZone.classList.remove("min-h-[200px]"), f.queueSectionTitle.textContent = "Extracted Files", f.fileCountBadge.classList.add("hidden"), f.fileListEmptyTitle.textContent = "No extracted files", f.fileListEmptySubtitle.textContent = "Start by dropping archives to the left", f.fileListEmptyIcon.textContent = "unarchive", gt()), mt();
    }
  }
  function Na() {
    [
      "dragenter",
      "dragover",
      "dragleave",
      "drop"
    ].forEach(function(i) {
      f.dropZone.addEventListener(i, function(a) {
        a.preventDefault(), a.stopPropagation();
      }, false);
    }), [
      "dragenter",
      "dragover"
    ].forEach(function(i) {
      f.dropZone.addEventListener(i, function() {
        f.dropZone.classList.add("drag-over");
      }, false);
    }), [
      "dragleave",
      "drop"
    ].forEach(function(i) {
      f.dropZone.addEventListener(i, function() {
        f.dropZone.classList.remove("drag-over");
      }, false);
    }), f.dropZone.addEventListener("drop", function(i) {
      var a = i.dataTransfer.files;
      a.length > 0 && st(a);
    }), f.browseFilesBtn.addEventListener("click", function(i) {
      i.stopPropagation(), J === "compress" ? f.fileInput.click() : f.archiveInput.click();
    }), f.browseFolderBtn.addEventListener("click", function(i) {
      i.stopPropagation(), f.folderInput.click();
    }), f.browseArchiveBtn.addEventListener("click", function(i) {
      i.stopPropagation(), f.archiveInput.click();
    }), f.fileInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (st(this.files), this.value = "");
    }), f.folderInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (st(this.files), this.value = "");
    }), f.archiveInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (st(this.files), this.value = "");
    });
  }
  function st(i) {
    if (J === "extract") {
      if (ne === "running") return;
      za(i[0]);
      return;
    }
    for (var a = [], s = 0; s < i.length; s++) {
      var d = i[s], v = d.webkitRelativePath || d.name, _ = Nt(d.name);
      a.push({
        id: Date.now() + "-" + s + "-" + Math.random().toString(36).slice(2, 6),
        name: d.name,
        path: v,
        size: d.size,
        type: d.type || "application/octet-stream",
        ext: _,
        lastModified: d.lastModified,
        file: d
      });
    }
    G = G.concat(a), tt();
  }
  function za(i) {
    X = i, $ = [], Ne = "";
    var a = Nt(i.name);
    f.dropZone.classList.add("hidden"), f.archiveInspector.classList.remove("hidden"), f.inspectorFilename.textContent = i.name, f.inspectorMeta.textContent = (Da[a] || a.toUpperCase()) + " \xB7 " + Ee(i.size), f.clearAllBtn.disabled = false, f.clearAllBtn.textContent = "Remove archive", gt(), Pt(null);
  }
  async function Pt(i) {
    if (X) {
      var a = X;
      Q = false, jr("extract"), te("Starting extraction: " + a.name), i && te("Password provided"), Pe("Opening archive..."), Ie(10);
      var s = function(h) {
        var y = String(h).trim();
        y && (te(y), Vr(y));
      };
      try {
        var d = await a.arrayBuffer();
        if (Q || X !== a) return;
        Pe("Extracting..."), Ie(35);
        for (var v = await _r(new Uint8Array(d), a.name, i || null, s); !Q && v.length === 1 && /\.tar$/i.test(v[0].name); ) te("Detected nested TAR, extracting further: " + v[0].name), Pe("Extracting nested archive..."), v = await _r(v[0].data, v[0].name, null, s);
        if (Q || X !== a) return;
        $ = v, Ne = i || "", Ua(), Ie(100), te("Done: " + v.length + " file" + (v.length !== 1 ? "s" : "") + " extracted"), Wr({
          mode: "extract",
          extracted: v.length
        });
      } catch (h) {
        if (Q || X !== a) return;
        if (h && h.name === "PasswordRequiredError") {
          te("Password required"), ke(), Ha(!!i);
          return;
        }
        var _ = h && h.message || String(h);
        te("Error: " + _), gt(), Gr(_);
      }
    }
  }
  function Ua() {
    if (f.fileList.innerHTML = "", f.archiveAnalyzing.classList.add("hidden"), $.length === 0) {
      f.fileList.appendChild(f.fileListEmpty), f.fileCountBadge.textContent = "0 files", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B";
      return;
    }
    var i = 0;
    $.forEach(function(d) {
      var v = d.data.length, _ = Nt(d.name);
      i += v;
      var h = document.createElement("div");
      h.className = "p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors", h.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + Hr(_) + '"><span class="material-symbols-outlined text-[20px]">' + Ur(_) + '</span></div><div class="flex-1 min-w-0"><p class="text-body-sm font-bold text-on-surface truncate">' + et(d.name) + '</p><p class="text-label-sm text-on-surface-variant">' + Ee(v) + "</p></div>", f.fileList.appendChild(h);
    });
    var a = $.length, s = a + " file" + (a !== 1 ? "s" : "") + " inside";
    f.fileCountBadge.textContent = s, f.fileCountText.textContent = s, f.totalSizeText.textContent = Ee(i);
  }
  function gt() {
    f.fileList.innerHTML = "", f.fileList.appendChild(f.fileListEmpty), f.archiveAnalyzing.classList.add("hidden"), f.fileCountBadge.textContent = "0 archives", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B";
  }
  function Je() {
    ne === "running" && (Q = true), X = null, $ = [], Ne = "", f.archiveInspector.classList.add("hidden"), f.dropZone.classList.remove("hidden"), f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All", f.clearAllBtn.disabled = true, gt(), ke();
  }
  function Ha(i) {
    f.modalPassword.value = "", f.modalPasswordError.classList.toggle("hidden", !i), f.passwordModal.classList.remove("hidden"), setTimeout(function() {
      f.modalPassword.focus();
    }, 50);
  }
  function Ct() {
    f.passwordModal.classList.add("hidden");
  }
  function qa() {
    function i() {
      var a = f.modalPassword.value;
      Ct(), Pt(a);
    }
    f.modalUnlockBtn.addEventListener("click", i), f.modalPassword.addEventListener("keydown", function(a) {
      a.key === "Enter" && i();
    }), f.modalCancelBtn.addEventListener("click", function() {
      Ct(), Je();
    }), f.passwordModal.addEventListener("click", function(a) {
      a.target === f.passwordModal && (Ct(), Je());
    });
  }
  function ja() {
    f.removeArchiveBtn.addEventListener("click", function() {
      ne !== "running" && Je();
    });
  }
  function Wa() {
    f.saveOutputFooterBtn.addEventListener("click", function() {
      qr();
    });
  }
  function Nt(i) {
    var a = i.toLowerCase();
    if (a.endsWith(".tar.gz")) return "tar.gz";
    if (a.endsWith(".tar.bz") || a.endsWith(".tar.bz2")) return "tar.bz";
    if (a.endsWith(".tgz")) return "tar.gz";
    var s = a.lastIndexOf(".");
    return s === -1 ? "" : a.slice(s + 1);
  }
  function Ur(i) {
    var a = {
      zip: "folder_zip",
      "7z": "folder_zip",
      rar: "folder_zip",
      tar: "folder_zip",
      gz: "folder_zip",
      bz: "folder_zip",
      pdf: "picture_as_pdf",
      psd: "image",
      doc: "description",
      docx: "description",
      xls: "table_chart",
      xlsx: "table_chart",
      jpg: "image",
      jpeg: "image",
      png: "image",
      gif: "gif",
      svg: "image",
      mp4: "movie",
      mov: "movie",
      avi: "movie",
      mkv: "movie",
      mp3: "music_note",
      wav: "music_note",
      flac: "music_note",
      exe: "terminal",
      dmg: "terminal",
      iso: "disc_full",
      default: "description"
    };
    return a[i] || a.default;
  }
  function Hr(i) {
    return wr[i] || wr.default;
  }
  function Ee(i) {
    if (i === 0) return "0 B";
    var a = [
      "B",
      "KB",
      "MB",
      "GB",
      "TB"
    ], s = Math.floor(Math.log(i) / Math.log(1024));
    return s >= a.length && (s = a.length - 1), (i / Math.pow(1024, s)).toFixed(s === 0 ? 0 : 1) + " " + a[s];
  }
  function et(i) {
    var a = document.createElement("div");
    return a.appendChild(document.createTextNode(i)), a.innerHTML;
  }
  function tt() {
    if (f.fileList.innerHTML = "", G.length === 0) {
      f.fileList.appendChild(f.fileListEmpty), f.fileCountBadge.textContent = "0 files", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B", mt();
      return;
    }
    var i = 0;
    G.forEach(function(s) {
      i += s.size;
      var d = document.createElement("div");
      d.className = "p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors group", d.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + Hr(s.ext) + '"><span class="material-symbols-outlined text-[20px]">' + Ur(s.ext) + '</span></div><div class="flex-1 min-w-0"><p class="text-body-sm font-bold text-on-surface truncate">' + et(s.name) + '</p><p class="text-label-sm text-on-surface-variant truncate">' + (s.path !== s.name ? et(s.path) : Ee(s.size)) + '</p></div><button class="remove-file p-xs text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-all rounded" data-id="' + s.id + '"><span class="material-symbols-outlined text-[18px]">close</span></button>', f.fileList.appendChild(d);
    });
    var a = G.length;
    f.fileCountBadge.textContent = a + " " + (a === 1 ? "file" : "files"), f.fileCountText.textContent = a + " " + (a === 1 ? "file" : "files"), f.totalSizeText.textContent = Ee(i), f.fileList.querySelectorAll(".remove-file").forEach(function(s) {
      s.addEventListener("click", function() {
        var d = this.getAttribute("data-id");
        G = G.filter(function(v) {
          return v.id !== d;
        }), tt(), (ne === "success" || ne === "error") && ke();
      });
    }), mt();
  }
  function Ga() {
    f.formatSelect.addEventListener("change", function() {
      var i = this.value, a = i === "zip" || i === "7z";
      f.compressPasswordSection.classList.toggle("hidden", !a), a || (f.compressEnablePassword.checked = false, f.compressPasswordFields.classList.add("hidden"), f.compressPassword.disabled = true, f.compressPasswordConfirm.disabled = true);
    });
  }
  function Va() {
    f.compressEnablePassword.addEventListener("change", function() {
      var i = this.checked;
      f.compressPasswordFields.classList.toggle("hidden", !i), f.compressPassword.disabled = !i, f.compressPasswordConfirm.disabled = !i, i || (f.compressPassword.value = "", f.compressPasswordConfirm.value = "");
    });
  }
  function Ya() {
    f.compressBtn.addEventListener("click", function() {
      this.disabled || ei();
    });
  }
  function mt() {
    if (J === "compress") {
      var i = G.length > 0;
      f.compressBtn.disabled = !i, f.clearAllBtn.disabled = !i;
    } else f.clearAllBtn.disabled = !X;
  }
  function $a() {
    f.clearAllBtn.addEventListener("click", function() {
      if (!this.disabled) if (J === "extract") {
        if (ne === "running") return;
        Je();
      } else G = [], tt(), ke();
    });
  }
  function Ka() {
    f.cancelBtn.addEventListener("click", function() {
      Q = true, ke();
    });
  }
  function Xe(i) {
    var a = URL.createObjectURL(i), s = document.createElement("a");
    s.href = a, s.download = Le || "archive.zip", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(a);
  }
  async function qr() {
    if (J === "extract") {
      if ($.length === 0) return;
      if ("showDirectoryPicker" in window) {
        try {
          for (var i = await window.showDirectoryPicker({
            mode: "readwrite"
          }), a = 0; a < $.length; a++) {
            for (var s = $[a], d = s.name.split("/"), v = d.pop(), _ = i, h = 0; h < d.length; h++) d[h] && (_ = await _.getDirectoryHandle(d[h], {
              create: true
            }));
            var y = await _.getFileHandle(v, {
              create: true
            }), L = await y.createWritable();
            await L.write(s.data), await L.close();
          }
        } catch (M) {
          M.name !== "AbortError" && M.name !== "SecurityError" && console.error("Save error:", M);
        }
        return;
      }
      var P = X ? X.name.replace(/\.[^.]+$/, "") : "extracted";
      if ($.length === 1) {
        Le = $[0].name, Xe(new Blob([
          $[0].data
        ]));
        return;
      }
      var q = /* @__PURE__ */ new Map();
      $.forEach(function(M) {
        q.set(M.name, M.data);
      });
      var R = await Dr(q, "zip", null, function() {
      });
      Le = P + "_extracted.zip", Xe(new Blob([
        R
      ]));
    } else we && Xe(new Blob([
      we
    ]));
  }
  function Za() {
    f.downloadBtn.addEventListener("click", function() {
      this.disabled || (J === "extract" ? qr() : we && Xe(new Blob([
        we
      ])));
    });
  }
  function Xa() {
    f.compressAgainBtn.addEventListener("click", function() {
      J === "extract" ? Je() : (G = [], Le = "", we = null, tt(), ke());
    });
  }
  function Qa() {
    f.tryAgainBtn.addEventListener("click", function() {
      J === "extract" ? Pt(Ne || null) : ke();
    });
  }
  function Ja() {
    f.errorDetailsToggle.addEventListener("click", function() {
      var i = f.errorLog.classList.contains("hidden");
      f.errorLog.classList.toggle("hidden", !i), this.textContent = i ? "Hide details" : "Show details";
    });
  }
  function te(i) {
    var a = /* @__PURE__ */ new Date(), s = a.getHours().toString().padStart(2, "0") + ":" + a.getMinutes().toString().padStart(2, "0") + ":" + a.getSeconds().toString().padStart(2, "0");
    ht.push({
      ts: s,
      msg: i
    });
  }
  function ke() {
    ne = "idle", Q = false, f.progressState.classList.add("hidden"), f.successState.classList.add("hidden"), f.errorState.classList.add("hidden"), J === "compress" ? f.controlsWrapper.classList.remove("hidden") : (f.controlsWrapper.classList.add("hidden"), f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), X ? (f.dropZone.classList.add("hidden"), f.archiveInspector.classList.remove("hidden")) : (f.dropZone.classList.remove("hidden"), f.archiveInspector.classList.add("hidden")));
  }
  function jr(i) {
    ne = "running", ht = [], f.controlsWrapper.classList.add("hidden"), f.progressState.classList.remove("hidden"), f.successState.classList.add("hidden"), f.errorState.classList.add("hidden");
    var a = i === "compress";
    f.progressIcon.textContent = a ? "archive" : "unarchive", f.progressTitle.textContent = a ? "Compressing files..." : "Extracting archive...", f.progressSubtitle.textContent = "", Ie(0), Pe("Starting...");
  }
  function Wr(i) {
    if (ne = "success", f.progressState.classList.add("hidden"), f.successState.classList.remove("hidden"), i.mode === "compress") {
      var a = i.originalSize - i.compressedSize, s = i.originalSize > 0 ? Math.round(a / i.originalSize * 100) : 0;
      f.successTitle.textContent = "Archive created", f.successFilename.classList.add("hidden"), f.successStatsRow.classList.remove("hidden"), f.successOriginalSize.textContent = Ee(i.originalSize), f.successCompressedSize.textContent = Ee(i.compressedSize), f.successSavedPct.textContent = s + "% smaller", we && Xe(new Blob([
        we
      ])), f.downloadBtn.classList.remove("hidden"), f.downloadBtn.className = "flex-1 flex items-center justify-center gap-sm bg-primary text-on-primary py-md rounded-xl text-label-sm font-bold hover:opacity-90 transition-all active:scale-[0.99]", f.downloadBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">download</span> Save again', f.downloadBtn.disabled = false, f.compressAgainBtn.className = "flex-1 flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all", f.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Compress more';
    } else f.successTitle.textContent = "Extraction complete", f.successFilename.classList.remove("hidden"), f.successFilename.textContent = i.extracted + " files extracted", f.successStatsRow.classList.add("hidden"), f.downloadBtn.classList.add("hidden"), f.compressAgainBtn.className = "w-full flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all", f.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Extract another', f.saveOutputFooterBtn.classList.remove("hidden"), f.clearAllBtn.classList.add("hidden");
  }
  function Gr(i) {
    ne = "error", f.progressState.classList.add("hidden"), f.errorState.classList.remove("hidden"), f.errorDetail.textContent = i || "An unexpected error occurred.", f.errorLogContent.innerHTML = "", ht.forEach(function(a) {
      var s = document.createElement("div");
      s.className = "opacity-80", s.innerHTML = '<span class="text-on-surface-variant/40">[' + et(a.ts) + "]</span> " + et(a.msg), f.errorLogContent.appendChild(s);
    }), f.errorLog.classList.add("hidden"), f.errorDetailsToggle.textContent = "Show details";
  }
  function Ie(i) {
    f.progressFill.style.width = i + "%", f.progressPercentage.textContent = Math.round(i) + "%";
  }
  function Pe(i) {
    f.progressStatus.textContent = i;
  }
  function Vr(i) {
    f.progressSubtitle.textContent = i;
  }
  async function ei() {
    var i = f.formatSelect.value;
    Le = "archive." + i;
    var a = f.compressEnablePassword.checked ? f.compressPassword.value : "";
    Q = false, jr("compress");
    var s = G.length, d = G.reduce(function(R, M) {
      return R + M.size;
    }, 0);
    te("Starting compression: " + s + " file" + (s !== 1 ? "s" : "") + " (" + Ee(d) + ")"), te("Format: ." + i), Pe("Reading files..."), Ie(10);
    var v = function(R) {
      var M = String(R).trim();
      M && (te(M), Vr(M));
    };
    try {
      for (var _ = /* @__PURE__ */ new Map(), h = 0; h < G.length; h++) {
        var y = G[h], L = await y.file.arrayBuffer();
        if (Q) return;
        _.set(y.path, new Uint8Array(L));
      }
      Pe("Compressing..."), Ie(40);
      var P = await Dr(_, i, a, v);
      if (Q) return;
      we = P, Ie(100), te("Done: " + Le + " (" + Ee(P.length) + ")"), Wr({
        mode: "compress",
        filename: Le,
        originalSize: d,
        compressedSize: P.length
      });
    } catch (R) {
      if (Q) return;
      var q = R && R.message || String(R);
      te("Error: " + q), Gr(q);
    }
  }
  const ti = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: Oa,
    meta: Ca
  }, Symbol.toStringTag, {
    value: "Module"
  })), ri = {
    "/": Bt,
    "/index.html": Bt,
    "/base64.html": Ta,
    "/archiver.html": ti
  };
  function vt(i) {
    return i === "" ? "/" : i;
  }
  function zt(i) {
    return ri[vt(i)] || null;
  }
  function ni() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function Yr(i) {
    return Promise.all(i.getAnimations().map((a) => a.finished.catch(() => {
    })));
  }
  async function oi() {
    const i = document.getElementById("main-content");
    i && (i.classList.remove("page-fade-in"), i.classList.add("page-fade-out"), await Yr(i), i.classList.remove("page-fade-out"));
  }
  function ai() {
    const i = document.getElementById("main-content");
    i && (i.classList.add("page-fade-in"), Yr(i).then(() => i.classList.remove("page-fade-in")));
  }
  function ii(i) {
    const a = document.getElementById("sidebar-nav");
    if (!a) return;
    const s = vt(i);
    a.querySelectorAll("a").forEach((d) => {
      d.classList.remove("text-primary", "font-bold", "bg-primary-container/20"), d.getAttribute("href") === s && d.classList.add("text-primary", "font-bold", "bg-primary-container/20");
    });
  }
  async function Ut(i) {
    const a = zt(i) || Bt;
    Uo(), await Dt("main-content", a.meta.contentFile), document.title = a.meta.title, ii(i), zo(i), await a.init();
    const s = document.querySelector("main");
    s && (s.scrollTop = 0);
  }
  async function $r(i, a) {
    a = a || {};
    const s = !!a.replace, d = vt(i);
    if (!s && d === vt(window.location.pathname)) return;
    const v = () => Ut(d), _ = () => {
      s ? history.replaceState({
        path: d
      }, "", d) : history.pushState({
        path: d
      }, "", d);
    };
    if (ni()) await v(), _();
    else if (document.startViewTransition) {
      const h = document.startViewTransition(v);
      try {
        await h.updateCallbackDone;
      } catch {
      }
      _(), h.finished.catch(() => {
      });
    } else await oi(), await v(), _(), ai();
  }
  function si(i) {
    if (!i || i.target && i.target !== "_self" || i.hasAttribute("download")) return false;
    let a;
    try {
      a = new URL(i.href, window.location.href);
    } catch {
      return false;
    }
    return a.origin !== window.location.origin ? false : !!zt(a.pathname);
  }
  function ci() {
    document.addEventListener("click", function(i) {
      if (i.defaultPrevented || i.button !== 0 || i.metaKey || i.ctrlKey || i.shiftKey || i.altKey) return;
      const a = i.target.closest("a[href]");
      si(a) && (i.preventDefault(), $r(new URL(a.href, window.location.href).pathname));
    }), window.addEventListener("popstate", function() {
      Ut(window.location.pathname);
    });
  }
  di = async function() {
    ko(), await Dt("app-shell", "shell.html"), await Co([
      {
        id: "sidebar-placeholder",
        file: "sidebar.html"
      },
      {
        id: "header-placeholder",
        file: "header.html"
      },
      {
        id: "footer-placeholder",
        file: "footer.html"
      },
      {
        id: "bottombar-placeholder",
        file: "bottombar.html"
      },
      {
        id: "tools-overlay-placeholder",
        file: "tools-overlay.html"
      },
      {
        id: "settings-modal-placeholder",
        file: "settings-modal.html"
      }
    ]), Oo(), Do(), Bo(), Io(), xo(), Fo(), yo(), ci(), history.replaceState({
      path: window.location.pathname
    }, "", window.location.pathname), await Ut(window.location.pathname), window.addEventListener("pageshow", function() {
      const i = zt(window.location.pathname);
      i && i.onPageShow && i.onPageShow();
    });
  };
})();
export {
  __tla,
  li as r,
  di as s
};
