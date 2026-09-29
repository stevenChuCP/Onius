var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Di, Fi;
let __tla = (async () => {
  (function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const m of document.querySelectorAll('link[rel="modulepreload"]')) d(m);
    new MutationObserver((m) => {
      for (const h of m) if (h.type === "childList") for (const p of h.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && d(p);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function s(m) {
      const h = {};
      return m.integrity && (h.integrity = m.integrity), m.referrerPolicy && (h.referrerPolicy = m.referrerPolicy), m.crossOrigin === "use-credentials" ? h.credentials = "include" : m.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
    }
    function d(m) {
      if (m.ep) return;
      m.ep = true;
      const h = s(m);
      fetch(m.href, h);
    }
  })();
  Di = function() {
    "serviceWorker" in navigator && window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((n) => console.error("SW registration failed", n));
    });
  };
  let Qe = null;
  function Ft(n) {
    document.querySelectorAll(".install-app-btn").forEach((o) => {
      o.classList.toggle("hidden", !n);
    });
  }
  function Oo() {
    window.addEventListener("beforeinstallprompt", (n) => {
      n.preventDefault(), Qe = n, Ft(true);
    }), window.addEventListener("appinstalled", () => {
      Qe = null, Ft(false);
    }), document.addEventListener("click", (n) => {
      if (!n.target.closest(".install-app-btn") || !Qe) return;
      const s = Qe;
      Qe = null, Ft(false), s.prompt();
    });
  }
  var nt = {
    "b64-icon": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" width="28" height="28"><path d="M570-160v-60h120q21 0 35.5-14.38Q740-248.75 740-270v-100q0-37 22.5-66t57.5-40v-8q-35-10-57.5-39.5T740-590v-100q0-21.25-14.37-35.63Q711.25-740 690-740H570v-60h120q46 0 78 32.08 32 32.09 32 77.92v100q0 21.25 14.38 35.62Q828.75-540 850-540h30v120h-30q-21.25 0-35.62 14.37Q800-391.25 800-370v100q0 45.83-32.08 77.92Q735.83-160 690-160H570Zm-300 0q-46 0-78-32.08-32-32.09-32-77.92v-100q0-21.25-14.37-35.63Q131.25-420 110-420H80v-120h30q21.25 0 35.63-14.38Q160-568.75 160-590v-100q0-45.83 32.08-77.92Q224.17-800 270-800h120v60H270q-21 0-35.5 14.37Q220-711.25 220-690v100q0 37-22.5 66.5T140-484v8q35 11 57.5 40t22.5 66v100q0 21.25 14.38 35.62Q248.75-220 270-220h120v60H270Z" fill="currentColor"/><text x="480" y="-460" text-anchor="middle" dominant-baseline="middle" font-family="Roboto Flex,Roboto,Arial,sans-serif" font-size="280" font-weight="700" fill="currentColor" letter-spacing="-10">b64</text></svg>'
  };
  const dt = "0.6.0", Rr = "onius_lang", Mr = "en", Nr = [
    "en",
    "zh-TW"
  ], Sr = {
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
      "sidebar.version": `Version ${dt}`,
      "settings.title": "Settings",
      "settings.appearance": "Appearance",
      "settings.theme": "Theme",
      "settings.language": "Language",
      "settings.links": "Links",
      "settings.requestFeature": "Request a feature",
      "settings.version": `Onius v${dt}`,
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
      "ecdh.subtitle": "Watch two parties derive a shared secret over an insecure channel \u2014 every key stays on your machine, computed live with the Web Crypto API.",
      "ecdh.warning.title": "Web Crypto API unavailable",
      "ecdh.warning.body": "This demo needs the browser's SubtleCrypto API, which requires a secure context (HTTPS or localhost) and a modern browser. Please switch browsers or load this page over HTTPS.",
      "ecdh.curve.label": "Curve",
      "ecdh.resetBtn": "Reset",
      "ecdh.alice.name": "Alice",
      "ecdh.bob.name": "Bob",
      "ecdh.generateBtn": "Generate Keypair",
      "ecdh.publicKey.label": "Public key (share freely)",
      "ecdh.privateKey.label": "Private key (keep secret)",
      "ecdh.privateKey.show": "Show private key",
      "ecdh.privateKey.hide": "Hide private key",
      "ecdh.peerKey.aliceLabel": "Bob's public key (received)",
      "ecdh.peerKey.bobLabel": "Alice's public key (received)",
      "ecdh.peerKey.placeholder": "Exchange keys, or paste a public key here",
      "ecdh.deriveBtn": "Derive Shared Secret",
      "ecdh.sharedSecret.label": "Derived shared secret",
      "ecdh.exchangeLabel.line1": "Exchange",
      "ecdh.exchangeLabel.line2": "Public Keys",
      "ecdh.match.success": "Shared secrets match \u2014 the key exchange succeeded.",
      "ecdh.match.failure": "Shared secrets don't match \u2014 check that the exchanged public key wasn't altered.",
      "ecdh.error.invalidHex": "That public key is not valid hex-encoded data.",
      "ecdh.error.keygenFailed": "Key generation failed.",
      "ecdh.error.deriveFailed": "Could not derive a shared secret from that public key.",
      "ecdh.explain.title": "How this works",
      "ecdh.explain.step1": "Alice and Bob each generate their own elliptic-curve keypair \u2014 a private key they never share, and a public key they do.",
      "ecdh.explain.step2": "They exchange public keys over a channel that could be watched by an eavesdropper \u2014 this is safe, because a public key alone can't be used to derive the private key or the shared secret.",
      "ecdh.explain.step3": "Each side combines their own private key with the other's public key. Thanks to the algebra of elliptic curves, both computations land on the exact same point \u2014 the shared secret \u2014 without either private key ever crossing the wire.",
      "ecdh.explain.step4": "That shared secret is typically fed into a key-derivation function to produce a symmetric encryption key. This page stops at the raw derived bytes for clarity.",
      "ecdh.explain.disclaimer": "All key generation and derivation happens locally via the browser's native Web Crypto API \u2014 nothing here is sent over the network. Keys are shown on screen purely for demonstration; a real application never displays private keys.",
      "ecdh.poweredBy": "Powered by the Web Crypto API (SubtleCrypto)",
      "tool.base64.name": "Base64 Converter",
      "tool.archiver.name": "Archive Manager",
      "tool.ecdh.name": "ECDH Key Exchange",
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
      "sidebar.version": `\u7248\u672C ${dt}`,
      "settings.title": "\u8A2D\u5B9A",
      "settings.appearance": "\u5916\u89C0",
      "settings.theme": "\u4E3B\u984C",
      "settings.language": "\u8A9E\u8A00",
      "settings.links": "\u9023\u7D50",
      "settings.requestFeature": "\u63D0\u51FA\u529F\u80FD\u5EFA\u8B70",
      "settings.version": `Onius v${dt}`,
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
      "ecdh.subtitle": "\u89C0\u5BDF\u96D9\u65B9\u5982\u4F55\u5728\u4E0D\u5B89\u5168\u7684\u901A\u9053\u4E0A\u63A8\u5C0E\u51FA\u5171\u540C\u5BC6\u9470 \u2014 \u6240\u6709\u91D1\u9470\u90FD\u7559\u5728\u60A8\u7684\u88DD\u7F6E\u4E0A\uFF0C\u4E26\u5373\u6642\u900F\u904E Web Crypto API \u904B\u7B97\u3002",
      "ecdh.warning.title": "\u7121\u6CD5\u4F7F\u7528 Web Crypto API",
      "ecdh.warning.body": "\u6B64\u5C55\u793A\u9700\u8981\u700F\u89BD\u5668\u7684 SubtleCrypto API\uFF0C\u8A72 API \u9700\u8981\u5B89\u5168\u7684\u74B0\u5883\uFF08HTTPS \u6216 localhost\uFF09\u8207\u73FE\u4EE3\u700F\u89BD\u5668\u3002\u8ACB\u5207\u63DB\u700F\u89BD\u5668\u6216\u4EE5 HTTPS \u958B\u555F\u6B64\u9801\u9762\u3002",
      "ecdh.curve.label": "\u6A62\u5713\u66F2\u7DDA",
      "ecdh.resetBtn": "\u91CD\u8A2D",
      "ecdh.alice.name": "Alice",
      "ecdh.bob.name": "Bob",
      "ecdh.generateBtn": "\u7522\u751F\u91D1\u9470\u5C0D",
      "ecdh.publicKey.label": "\u516C\u9470\uFF08\u53EF\u81EA\u7531\u5206\u4EAB\uFF09",
      "ecdh.privateKey.label": "\u79C1\u9470\uFF08\u8ACB\u4FDD\u5BC6\uFF09",
      "ecdh.privateKey.show": "\u986F\u793A\u79C1\u9470",
      "ecdh.privateKey.hide": "\u96B1\u85CF\u79C1\u9470",
      "ecdh.peerKey.aliceLabel": "Bob \u7684\u516C\u9470\uFF08\u5DF2\u6536\u5230\uFF09",
      "ecdh.peerKey.bobLabel": "Alice \u7684\u516C\u9470\uFF08\u5DF2\u6536\u5230\uFF09",
      "ecdh.peerKey.placeholder": "\u4EA4\u63DB\u91D1\u9470\uFF0C\u6216\u5728\u6B64\u8CBC\u4E0A\u516C\u9470",
      "ecdh.deriveBtn": "\u63A8\u5C0E\u5171\u540C\u5BC6\u9470",
      "ecdh.sharedSecret.label": "\u63A8\u5C0E\u51FA\u7684\u5171\u540C\u5BC6\u9470",
      "ecdh.exchangeLabel.line1": "\u4EA4\u63DB",
      "ecdh.exchangeLabel.line2": "\u516C\u9470",
      "ecdh.match.success": "\u96D9\u65B9\u7684\u5171\u540C\u5BC6\u9470\u76F8\u7B26 \u2014 \u91D1\u9470\u4EA4\u63DB\u6210\u529F\u3002",
      "ecdh.match.failure": "\u96D9\u65B9\u7684\u5171\u540C\u5BC6\u9470\u4E0D\u76F8\u7B26 \u2014 \u8ACB\u78BA\u8A8D\u4EA4\u63DB\u7684\u516C\u9470\u672A\u88AB\u7AC4\u6539\u3002",
      "ecdh.error.invalidHex": "\u8A72\u516C\u9470\u4E0D\u662F\u6709\u6548\u7684\u5341\u516D\u9032\u4F4D\u8CC7\u6599\u3002",
      "ecdh.error.keygenFailed": "\u91D1\u9470\u7522\u751F\u5931\u6557\u3002",
      "ecdh.error.deriveFailed": "\u7121\u6CD5\u5F9E\u8A72\u516C\u9470\u63A8\u5C0E\u51FA\u5171\u540C\u5BC6\u9470\u3002",
      "ecdh.explain.title": "\u904B\u4F5C\u539F\u7406",
      "ecdh.explain.step1": "Alice \u8207 Bob \u5404\u81EA\u7522\u751F\u81EA\u5DF1\u7684\u6A62\u5713\u66F2\u7DDA\u91D1\u9470\u5C0D \u2014 \u7D55\u4E0D\u5206\u4EAB\u7684\u79C1\u9470\uFF0C\u4EE5\u53CA\u6703\u5206\u4EAB\u7684\u516C\u9470\u3002",
      "ecdh.explain.step2": "\u96D9\u65B9\u5728\u53EF\u80FD\u88AB\u7ACA\u807D\u7684\u901A\u9053\u4E0A\u4EA4\u63DB\u516C\u9470 \u2014 \u9019\u662F\u5B89\u5168\u7684\uFF0C\u56E0\u70BA\u50C5\u6191\u516C\u9470\u7121\u6CD5\u63A8\u5C0E\u51FA\u79C1\u9470\u6216\u5171\u540C\u5BC6\u9470\u3002",
      "ecdh.explain.step3": "\u96D9\u65B9\u5404\u81EA\u5C07\u81EA\u5DF1\u7684\u79C1\u9470\u8207\u5C0D\u65B9\u7684\u516C\u9470\u7D50\u5408\u904B\u7B97\u3002\u5F97\u76CA\u65BC\u6A62\u5713\u66F2\u7DDA\u7684\u6578\u5B78\u7279\u6027\uFF0C\u5169\u908A\u7684\u904B\u7B97\u7D50\u679C\u6703\u843D\u5728\u540C\u4E00\u500B\u9EDE\u4E0A \u2014 \u4E5F\u5C31\u662F\u5171\u540C\u5BC6\u9470 \u2014 \u800C\u4EFB\u4F55\u4E00\u65B9\u7684\u79C1\u9470\u90FD\u4E0D\u66FE\u5728\u7DB2\u8DEF\u4E0A\u50B3\u8F38\u3002",
      "ecdh.explain.step4": "\u9019\u7D44\u5171\u540C\u5BC6\u9470\u901A\u5E38\u6703\u518D\u7D93\u904E\u91D1\u9470\u884D\u751F\u51FD\u5F0F\uFF0C\u7522\u751F\u5C0D\u7A31\u5F0F\u52A0\u5BC6\u91D1\u9470\u3002\u70BA\u6C42\u6E05\u695A\uFF0C\u672C\u9801\u50C5\u793A\u7BC4\u5230\u539F\u59CB\u63A8\u5C0E\u4F4D\u5143\u7D44\u70BA\u6B62\u3002",
      "ecdh.explain.disclaimer": "\u6240\u6709\u91D1\u9470\u7522\u751F\u8207\u63A8\u5C0E\u7686\u900F\u904E\u700F\u89BD\u5668\u539F\u751F\u7684 Web Crypto API \u5728\u672C\u6A5F\u5B8C\u6210 \u2014 \u4E0D\u6703\u900F\u904E\u7DB2\u8DEF\u50B3\u9001\u4EFB\u4F55\u8CC7\u6599\u3002\u756B\u9762\u4E0A\u986F\u793A\u91D1\u9470\u50C5\u70BA\u6559\u5B78\u793A\u7BC4\uFF1B\u6B63\u5F0F\u61C9\u7528\u7A0B\u5F0F\u7D55\u4E0D\u61C9\u986F\u793A\u79C1\u9470\u3002",
      "ecdh.poweredBy": "\u6280\u8853\u63D0\u4F9B\uFF1AWeb Crypto API\uFF08SubtleCrypto\uFF09",
      "tool.base64.name": "Base64 \u8F49\u63DB\u5DE5\u5177",
      "tool.archiver.name": "\u58D3\u7E2E\u5DE5\u5177",
      "tool.ecdh.name": "ECDH \u91D1\u9470\u4EA4\u63DB",
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
  function Ro() {
    const n = localStorage.getItem(Rr);
    return n && Nr.includes(n) ? n : Mr;
  }
  let Fe = Ro();
  function H(n) {
    return Sr[Fe][n] || Sr[Mr][n] || n;
  }
  function Mo(n) {
    return H("category." + n);
  }
  function No(n, o) {
    return Fe === "zh-TW" ? n + " \u9805\u53EF\u7ACB\u5373\u4F7F\u7528 \xB7 " + o + " \u9805\u5373\u5C07\u63A8\u51FA" : n + " ready to use \xB7 " + o + " on the way";
  }
  function zr(n) {
    const o = n || document;
    o.querySelectorAll("[data-i18n]").forEach((s) => {
      s.textContent = H(s.getAttribute("data-i18n"));
    }), o.querySelectorAll("[data-i18n-placeholder]").forEach((s) => {
      s.setAttribute("placeholder", H(s.getAttribute("data-i18n-placeholder")));
    }), o.querySelectorAll("[data-i18n-title]").forEach((s) => {
      s.setAttribute("title", H(s.getAttribute("data-i18n-title")));
    }), o.querySelectorAll("[data-tool]").forEach((s) => {
      s.textContent = H("tool." + s.getAttribute("data-tool") + ".name");
    });
  }
  function zo(n) {
    !Nr.includes(n) || n === Fe || (Fe = n, localStorage.setItem(Rr, n), document.documentElement.lang = n, zr(document), window.dispatchEvent(new CustomEvent("onius:langchange", {
      detail: {
        lang: n
      }
    })));
  }
  function Uo() {
    zo(Fe === "en" ? "zh-TW" : "en");
  }
  function Ho() {
    document.documentElement.lang = Fe;
  }
  function Wo() {
    const n = document.getElementById("settings-lang-btn"), o = document.getElementById("settings-lang-label");
    function s() {
      o && (o.textContent = Fe === "zh-TW" ? "\u7E41\u9AD4\u4E2D\u6587" : "English");
    }
    s(), n && n.addEventListener("click", Uo), window.addEventListener("onius:langchange", s);
  }
  const qo = "components", kr = "onius_sidebar_shrunk";
  function jo(n) {
    n.querySelectorAll("[data-icon]").forEach(function(o) {
      var s = o.getAttribute("data-icon"), d = nt[s];
      if (d) {
        var m = document.createElement("div");
        m.innerHTML = d;
        var h = m.firstElementChild;
        if (h) {
          var p = "";
          o.classList.forEach(function(y) {
            y !== "material-symbols-outlined" && (p += " " + y);
          }), h.setAttribute("class", "w-7 h-7 inline-block shrink-0 align-middle" + p), o.replaceWith(h);
        }
      }
    });
  }
  async function Wt(n, o) {
    const s = document.getElementById(n);
    if (s) try {
      const d = await fetch(`${qo}/${o}`);
      if (!d.ok) throw new Error(`Failed to load ${o}`);
      s.innerHTML = await d.text(), jo(s), zr(s);
    } catch (d) {
      console.error("Component load error:", d);
    }
  }
  async function Ko(n) {
    const o = n.map(({ id: s, file: d }) => Wt(s, d));
    await Promise.all(o);
  }
  function Go() {
    const n = document.getElementById("sidebar-toggle"), o = document.getElementById("main-sidebar"), s = document.getElementById("header-left");
    if (!n || !o) return;
    const d = (h) => {
      h ? (o.style.width = "80px", o.querySelectorAll(".sidebar-text, .sidebar-label, .sidebar-install-card").forEach((p) => p.classList.add("hidden")), o.querySelectorAll("#sidebar-nav a").forEach((p) => {
        p.classList.add("justify-center"), p.classList.remove("px-md"), p.classList.add("px-0");
      }), s && window.innerWidth >= 768 && (s.style.width = "", s.style.paddingLeft = "20px"), n.innerHTML = '<span class="material-symbols-outlined">menu</span>') : (o.style.width = "280px", o.querySelectorAll(".sidebar-text, .sidebar-label, .sidebar-install-card").forEach((p) => p.classList.remove("hidden")), o.querySelectorAll("#sidebar-nav a").forEach((p) => {
        p.classList.remove("justify-center"), p.classList.add("px-md"), p.classList.remove("px-0");
      }), s && window.innerWidth >= 768 && (s.style.width = "280px", s.style.paddingLeft = "24px"), n.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>');
    }, m = localStorage.getItem(kr) === "true";
    d(m), n.addEventListener("click", () => {
      const p = !(o.style.width === "80px");
      d(p), localStorage.setItem(kr, p);
    });
  }
  function $o() {
    const n = document.getElementById("sidebar-settings-trigger"), o = document.getElementById("sidebar-settings-popover");
    if (!n || !o) return;
    const s = () => !o.classList.contains("hidden"), d = () => o.classList.add("hidden");
    n.addEventListener("click", (m) => {
      m.stopPropagation(), o.classList.toggle("hidden");
    }), document.addEventListener("click", (m) => {
      s() && !o.contains(m.target) && m.target !== n && d();
    }), document.addEventListener("keydown", (m) => {
      m.key === "Escape" && s() && d();
    });
  }
  function Ur() {
    const n = document.documentElement, o = document.getElementById("theme-toggle-icon");
    n.classList.contains("dark") ? (n.classList.remove("dark"), n.classList.add("light"), o && (o.textContent = "dark_mode")) : (n.classList.remove("light"), n.classList.add("dark"), o && (o.textContent = "light_mode")), localStorage.setItem("onius_theme", n.classList.contains("dark") ? "dark" : "light");
  }
  function Vo() {
    const n = document.getElementById("theme-toggle");
    n && n.addEventListener("click", Ur);
  }
  function Yo() {
    const n = document.getElementById("theme-toggle-icon");
    if (!n) return;
    const o = document.documentElement.classList.contains("dark");
    n.textContent = o ? "light_mode" : "dark_mode";
  }
  var ee = {
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
    ecdh: {
      name: "ECDH Key Exchange",
      icon: "key",
      slug: "/ecdh.html",
      category: "Security",
      accent: "error"
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
  }, de = {
    lastY: 0,
    ticking: false,
    hidden: false
  };
  function Zo() {
    Xo(), Qo(), ea(), ca(), la();
  }
  function Xo() {
    var n = document.querySelector("header"), o = document.querySelector("main");
    if (!(!n || !o)) {
      n.classList.add("mobile-header-fixed");
      var s = document.createElement("div");
      s.className = "mobile-header-spacer", o.prepend(s);
    }
  }
  function Qo() {
    var n = document.querySelector("main"), o = document.querySelector("header");
    !n || !o || (de.lastY = n.scrollTop, n.addEventListener("scroll", Jo));
  }
  function Jo() {
    de.ticking || (de.ticking = true, window.requestAnimationFrame(function() {
      var n = document.querySelector("main"), o = document.querySelector("header");
      if (!n || !o) {
        de.ticking = false;
        return;
      }
      var s = n.scrollTop, d = s - de.lastY;
      d > 5 && s > 60 ? de.hidden || (o.classList.add("header-hidden"), de.hidden = true) : (d < -5 || s <= 60) && de.hidden && (o.classList.remove("header-hidden"), de.hidden = false), de.lastY = s, de.ticking = false;
    }));
  }
  function ea() {
    var n = document.getElementById("bottombar-placeholder");
    if (n) {
      var o = n.querySelector('[data-nav="tools"]'), s = n.querySelector('[data-nav="settings"]');
      o && o.addEventListener("click", function(d) {
        d.preventDefault(), na();
      }), s && s.addEventListener("click", function(d) {
        d.preventDefault(), sa();
      }), Hr(n, window.location.pathname);
    }
  }
  function Hr(n, o) {
    var s = o === "/" || o === "" || o === "/index.html";
    n.querySelectorAll("[data-nav]").forEach(function(d) {
      var m = d.getAttribute("data-nav"), h = m === "home" && s;
      d.classList.toggle("bg-primary-container", h), d.classList.toggle("text-on-primary-container", h);
    });
  }
  function ta(n) {
    var o = document.getElementById("bottombar-placeholder");
    o && Hr(o, n ?? window.location.pathname);
  }
  function ra() {
    mt(), ht();
  }
  function Wr() {
    document.body.classList.add("overlay-open");
  }
  function qr() {
    document.body.classList.remove("overlay-open");
  }
  function na() {
    var n = document.getElementById("tools-overlay");
    n && (n.classList.remove("hidden"), Wr(), jr());
  }
  function mt() {
    var n = document.getElementById("tools-overlay");
    n && (n.classList.add("hidden"), qr());
  }
  function jr() {
    var n = document.getElementById("tools-grid");
    if (n) {
      n.innerHTML = "";
      var o = Object.entries(ee), s = o.filter(function(h) {
        return !!h[1].slug;
      }).length;
      oa(s, o.length - s);
      var d = [], m = {};
      o.forEach(function(h) {
        var p = h[1], y = p.category || "More";
        m[y] || (m[y] = [], d.push(y)), m[y].push(h);
      }), d.forEach(function(h) {
        var p = document.createElement("div");
        p.className = "tools-section-label", p.textContent = Mo(h), n.appendChild(p), m[h].forEach(function(y) {
          n.appendChild(aa(y[0], y[1]));
        });
      });
    }
  }
  function oa(n, o) {
    var s = document.getElementById("tools-overlay-subtitle");
    s && (s.textContent = No(n, o));
  }
  function aa(n, o) {
    var s = !!o.slug, d = document.createElement("a");
    d.className = ia() + (s ? "" : " soon"), s ? d.href = o.slug : (d.href = "#", d.addEventListener("click", function(h) {
      h.preventDefault();
    }));
    var m = nt[o.icon] ? nt[o.icon] : '<span class="material-symbols-outlined">' + o.icon + "</span>";
    return d.innerHTML = '<div class="tool-icon-wrap tool-accent-' + (o.accent || "primary") + '">' + m + (s ? "" : '<span class="soon-badge">' + H("common.soon") + "</span>") + '</div><span class="tool-name">' + H("tool." + n + ".name") + "</span>", d;
  }
  function ia() {
    return "no-underline";
  }
  function sa() {
    var n = document.getElementById("settings-modal");
    n && (n.classList.remove("hidden"), Wr(), qt());
  }
  function ht() {
    var n = document.getElementById("settings-modal");
    n && (n.classList.add("hidden"), qr());
  }
  function qt() {
    var n = document.getElementById("settings-theme-icon"), o = document.getElementById("settings-theme-label");
    if (!(!n || !o)) {
      var s = document.documentElement.classList.contains("dark");
      n.textContent = s ? "light_mode" : "dark_mode", o.textContent = H(s ? "theme.dark" : "theme.light");
    }
  }
  function ca() {
    var n = document.getElementById("tools-overlay-backdrop"), o = document.getElementById("tools-overlay-close");
    n && n.addEventListener("click", mt), o && o.addEventListener("click", mt), window.addEventListener("onius:langchange", function() {
      qt();
      var s = document.getElementById("tools-overlay");
      s && !s.classList.contains("hidden") && jr();
    }), document.addEventListener("keydown", function(s) {
      s.key === "Escape" && (mt(), ht());
    });
  }
  function la() {
    var n = document.getElementById("settings-modal-backdrop"), o = document.getElementById("settings-modal-close"), s = document.getElementById("settings-theme-btn");
    n && n.addEventListener("click", ht), o && o.addEventListener("click", ht), s && s.addEventListener("click", function() {
      Ur(), qt();
    });
  }
  const jt = "onius_recent", Lr = 8;
  function Kt(n, o, s, d) {
    let m = Kr();
    m = m.filter(function(h) {
      return h.slug !== s;
    }), m.unshift({
      name: n,
      icon: o,
      slug: s,
      key: d,
      time: Date.now()
    }), m.length > Lr && (m = m.slice(0, Lr));
    try {
      localStorage.setItem(jt, JSON.stringify(m));
    } catch {
    }
  }
  function Kr() {
    try {
      var n = localStorage.getItem(jt);
      if (!n) return [];
      var o = JSON.parse(n);
      return Array.isArray(o) ? o : [];
    } catch {
      return [];
    }
  }
  function da() {
    try {
      localStorage.removeItem(jt);
    } catch {
    }
  }
  const ua = {
    contentFile: "home-content.html",
    title: "Onius - Developer Utilities"
  };
  async function fa() {
    Gt(), ha();
  }
  function ma() {
    Gt();
  }
  function Gt() {
    var n = document.getElementById("recent-section"), o = document.getElementById("recent-list"), s = document.getElementById("clear-recent");
    if (!(!n || !o)) {
      var d = Kr();
      if (d.length === 0) {
        n.classList.add("hidden");
        return;
      }
      n.classList.remove("hidden"), o.innerHTML = "", d.forEach(function(m) {
        var h = nt[m.icon] ? '<span class="text-primary">' + nt[m.icon] + "</span>" : '<span class="material-symbols-outlined text-primary">' + m.icon + "</span>", p = m.key ? H("tool." + m.key + ".name") : m.name, y = document.createElement("div");
        y.className = "w-48 sm:w-56 shrink-0 bg-surface-container-low border border-outline-variant rounded-lg p-md flex items-center gap-md hover:bg-surface-container-high transition-colors cursor-pointer group", y.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors shrink-0">' + h + '</div><div class="min-w-0"><p class="font-bold text-on-surface truncate">' + va(p) + "</p></div>", y.addEventListener("click", function() {
          un(m.slug);
        }), o.appendChild(y);
      }), s && s.addEventListener("click", function() {
        da(), n.classList.add("hidden");
      });
    }
  }
  function va(n) {
    var o = document.createElement("div");
    return o.appendChild(document.createTextNode(n)), o.innerHTML;
  }
  function ha() {
    document.querySelectorAll(".bento-grid > div, .bento-grid > a, section .flex.gap-md > div").forEach((o) => {
      o.addEventListener("mouseenter", () => {
        o.style.transform = "translateY(-4px)", o.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.3)", o.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      }), o.addEventListener("mouseleave", () => {
        o.style.transform = "translateY(0px)", o.style.boxShadow = "none";
      });
    });
  }
  window.addEventListener("onius:langchange", Gt);
  const Nt = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: fa,
    meta: ua,
    onPageShow: ma
  }, Symbol.toStringTag, {
    value: "Module"
  })), pa = "modulepreload", ga = function(n) {
    return "/" + n;
  }, xr = {}, _a = function(o, s, d) {
    let m = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName("link");
      const p = document.querySelector("meta[property=csp-nonce]"), y = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
      m = Promise.allSettled(s.map((L) => {
        if (L = ga(L), L in xr) return;
        xr[L] = true;
        const N = L.endsWith(".css"), j = N ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${L}"]${j}`)) return;
        const R = document.createElement("link");
        if (R.rel = N ? "stylesheet" : pa, N || (R.as = "script"), R.crossOrigin = "", R.href = L, y && R.setAttribute("nonce", y), document.head.appendChild(R), N) return new Promise((M, V) => {
          R.addEventListener("load", M), R.addEventListener("error", () => V(new Error(`Unable to preload CSS for ${L}`)));
        });
      }));
    }
    function h(p) {
      const y = new Event("vite:preloadError", {
        cancelable: true
      });
      if (y.payload = p, window.dispatchEvent(y), !y.defaultPrevented) throw p;
    }
    return m.then((p) => {
      for (const y of p || []) y.status === "rejected" && h(y.reason);
      return o().catch(h);
    });
  };
  var ya = async function(n = {}) {
    var _a2;
    var o, s = n, d = typeof window == "object", m = typeof WorkerGlobalScope < "u", h = typeof process == "object" && ((_a2 = process.versions) == null ? void 0 : _a2.node) && process.type != "renderer";
    if (h) {
      const { createRequire: e } = await _a(() => import("./__vite-browser-external-BIHI7g3E.js"), []);
      var p = e(import.meta.url);
    }
    s.noInitialRun = true;
    var y = [], L = "./this.program", N = (e, t) => {
      throw t;
    }, j = import.meta.url, R = "";
    function M(e) {
      return s.locateFile ? s.locateFile(e, R) : R + e;
    }
    var V, ie;
    if (h) {
      var I = p("fs");
      j.startsWith("file:") && (R = p("path").dirname(p("url").fileURLToPath(j)) + "/"), ie = (e) => {
        e = he(e) ? new URL(e) : e;
        var t = I.readFileSync(e);
        return t;
      }, V = async (e, t = true) => {
        e = he(e) ? new URL(e) : e;
        var r = I.readFileSync(e, t ? void 0 : "utf8");
        return r;
      }, process.argv.length > 1 && (L = process.argv[1].replace(/\\/g, "/")), y = process.argv.slice(2), N = (e, t) => {
        throw process.exitCode = e, t;
      };
    } else if (d || m) {
      try {
        R = new URL(".", j).href;
      } catch {
      }
      m && (ie = (e) => {
        var t = new XMLHttpRequest();
        return t.open("GET", e, false), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
      }), V = async (e) => {
        if (he(e)) return new Promise((r, i) => {
          var c = new XMLHttpRequest();
          c.open("GET", e, true), c.responseType = "arraybuffer", c.onload = () => {
            if (c.status == 200 || c.status == 0 && c.response) {
              r(c.response);
              return;
            }
            i(c.status);
          }, c.onerror = i, c.send(null);
        });
        var t = await fetch(e, {
          credentials: "same-origin"
        });
        if (t.ok) return t.arrayBuffer();
        throw new Error(t.status + " : " + t.url);
      };
    }
    var ke = console.log.bind(console), me = console.error.bind(console), ve, b = false, D;
    function z(e, t) {
      e || ct(t);
    }
    var he = (e) => e.startsWith("file://"), Qt, Jt, st, K, je, Ke, _, U, re, er = false;
    function tr() {
      var e = st.buffer;
      K = new Int8Array(e), Ke = new Int16Array(e), je = new Uint8Array(e), _ = new Int32Array(e), U = new Uint32Array(e), re = new BigInt64Array(e), new BigUint64Array(e);
    }
    function fn() {
      if (s.preRun) for (typeof s.preRun == "function" && (s.preRun = [
        s.preRun
      ]); s.preRun.length; ) Sn(s.preRun.shift());
      or(ir);
    }
    function mn() {
      er = true, !s.noFSInit && !a.initialized && a.init(), Ze.__wasm_call_ctors(), a.ignorePermissions = false;
    }
    function vn() {
      if (s.postRun) for (typeof s.postRun == "function" && (s.postRun = [
        s.postRun
      ]); s.postRun.length; ) En(s.postRun.shift());
      or(ar);
    }
    var Ae = 0, Ge = null;
    function rr(e) {
      var _a3;
      Ae++, (_a3 = s.monitorRunDependencies) == null ? void 0 : _a3.call(s, Ae);
    }
    function Lt(e) {
      var _a3;
      if (Ae--, (_a3 = s.monitorRunDependencies) == null ? void 0 : _a3.call(s, Ae), Ae == 0 && Ge) {
        var t = Ge;
        Ge = null, t();
      }
    }
    function ct(e) {
      var _a3;
      (_a3 = s.onAbort) == null ? void 0 : _a3.call(s, e), e = "Aborted(" + e + ")", me(e), b = true, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw Jt == null ? void 0 : Jt(t), t;
    }
    var xt;
    function hn() {
      return s.locateFile ? M("7zz.wasm") : new URL("/assets/7zz-Dnj2A7zV.wasm", import.meta.url).href;
    }
    function pn(e) {
      if (e == xt && ve) return new Uint8Array(ve);
      if (ie) return ie(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function gn(e) {
      if (!ve) try {
        var t = await V(e);
        return new Uint8Array(t);
      } catch {
      }
      return pn(e);
    }
    async function _n(e, t) {
      try {
        var r = await gn(e), i = await WebAssembly.instantiate(r, t);
        return i;
      } catch (c) {
        me(`failed to asynchronously prepare wasm: ${c}`), ct(c);
      }
    }
    async function yn(e, t, r) {
      if (!e && typeof WebAssembly.instantiateStreaming == "function" && !he(t) && !h) try {
        var i = fetch(t, {
          credentials: "same-origin"
        }), c = await WebAssembly.instantiateStreaming(i, r);
        return c;
      } catch (l) {
        me(`wasm streaming compile failed: ${l}`), me("falling back to ArrayBuffer instantiation");
      }
      return _n(t, r);
    }
    function wn() {
      return {
        env: Er,
        wasi_snapshot_preview1: Er
      };
    }
    async function bn() {
      function e(l, u) {
        return Ze = l.exports, st = Ze.memory, tr(), Do(Ze), Lt(), Ze;
      }
      rr();
      function t(l) {
        return e(l.instance);
      }
      var r = wn();
      if (s.instantiateWasm) return new Promise((l, u) => {
        s.instantiateWasm(r, (v, g) => {
          l(e(v));
        });
      });
      xt ?? (xt = hn());
      var i = await yn(ve, xt, r), c = t(i);
      return c;
    }
    class nr {
      constructor(t) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${t})`, this.status = t;
      }
    }
    var or = (e) => {
      for (; e.length > 0; ) e.shift()(s);
    }, ar = [], En = (e) => ar.push(e), ir = [], Sn = (e) => ir.push(e), sr = true;
    class kn {
      constructor(t) {
        this.excPtr = t, this.ptr = t - 24;
      }
      set_type(t) {
        U[this.ptr + 4 >> 2] = t;
      }
      get_type() {
        return U[this.ptr + 4 >> 2];
      }
      set_destructor(t) {
        U[this.ptr + 8 >> 2] = t;
      }
      get_destructor() {
        return U[this.ptr + 8 >> 2];
      }
      set_caught(t) {
        t = t ? 1 : 0, K[this.ptr + 12] = t;
      }
      get_caught() {
        return K[this.ptr + 12] != 0;
      }
      set_rethrown(t) {
        t = t ? 1 : 0, K[this.ptr + 13] = t;
      }
      get_rethrown() {
        return K[this.ptr + 13] != 0;
      }
      init(t, r) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
      }
      set_adjusted_ptr(t) {
        U[this.ptr + 16 >> 2] = t;
      }
      get_adjusted_ptr() {
        return U[this.ptr + 16 >> 2];
      }
    }
    var cr = 0, Ln = (e, t, r) => {
      var i = new kn(e);
      throw i.init(t, r), cr = e, cr;
    }, F = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return t.exec(e).slice(1);
      },
      normalizeArray: (e, t) => {
        for (var r = 0, i = e.length - 1; i >= 0; i--) {
          var c = e[i];
          c === "." ? e.splice(i, 1) : c === ".." ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--);
        }
        if (t) for (; r; r--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var t = F.isAbs(e), r = e.slice(-1) === "/";
        return e = F.normalizeArray(e.split("/").filter((i) => !!i), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
      },
      dirname: (e) => {
        var t = F.splitPath(e), r = t[0], i = t[1];
        return !r && !i ? "." : (i && (i = i.slice(0, -1)), r + i);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => F.normalize(e.join("/")),
      join2: (e, t) => F.normalize(e + "/" + t)
    }, xn = () => {
      if (h) {
        var e = p("crypto");
        return (t) => e.randomFillSync(t);
      }
      return (t) => crypto.getRandomValues(t);
    }, lr = (e) => {
      (lr = xn())(e);
    }, Oe = {
      resolve: (...e) => {
        for (var t = "", r = false, i = e.length - 1; i >= -1 && !r; i--) {
          var c = i >= 0 ? e[i] : a.cwd();
          if (typeof c != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!c) return "";
          t = c + "/" + t, r = F.isAbs(c);
        }
        return t = F.normalizeArray(t.split("/").filter((l) => !!l), !r).join("/"), (r ? "/" : "") + t || ".";
      },
      relative: (e, t) => {
        e = Oe.resolve(e).slice(1), t = Oe.resolve(t).slice(1);
        function r(w) {
          for (var P = 0; P < w.length && w[P] === ""; P++) ;
          for (var O = w.length - 1; O >= 0 && w[O] === ""; O--) ;
          return P > O ? [] : w.slice(P, O - P + 1);
        }
        for (var i = r(e.split("/")), c = r(t.split("/")), l = Math.min(i.length, c.length), u = l, v = 0; v < l; v++) if (i[v] !== c[v]) {
          u = v;
          break;
        }
        for (var g = [], v = u; v < i.length; v++) g.push("..");
        return g = g.concat(c.slice(u)), g.join("/");
      }
    }, dr = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Re = (e, t = 0, r = NaN) => {
      for (var i = t + r, c = t; e[c] && !(c >= i); ) ++c;
      if (c - t > 16 && e.buffer && dr) return dr.decode(e.subarray(t, c));
      for (var l = ""; t < c; ) {
        var u = e[t++];
        if (!(u & 128)) {
          l += String.fromCharCode(u);
          continue;
        }
        var v = e[t++] & 63;
        if ((u & 224) == 192) {
          l += String.fromCharCode((u & 31) << 6 | v);
          continue;
        }
        var g = e[t++] & 63;
        if ((u & 240) == 224 ? u = (u & 15) << 12 | v << 6 | g : u = (u & 7) << 18 | v << 12 | g << 6 | e[t++] & 63, u < 65536) l += String.fromCharCode(u);
        else {
          var w = u - 65536;
          l += String.fromCharCode(55296 | w >> 10, 56320 | w & 1023);
        }
      }
      return l;
    }, Ct = [], $e = (e) => {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var i = e.charCodeAt(r);
        i <= 127 ? t++ : i <= 2047 ? t += 2 : i >= 55296 && i <= 57343 ? (t += 4, ++r) : t += 3;
      }
      return t;
    }, ur = (e, t, r, i) => {
      if (!(i > 0)) return 0;
      for (var c = r, l = r + i - 1, u = 0; u < e.length; ++u) {
        var v = e.codePointAt(u);
        if (v <= 127) {
          if (r >= l) break;
          t[r++] = v;
        } else if (v <= 2047) {
          if (r + 1 >= l) break;
          t[r++] = 192 | v >> 6, t[r++] = 128 | v & 63;
        } else if (v <= 65535) {
          if (r + 2 >= l) break;
          t[r++] = 224 | v >> 12, t[r++] = 128 | v >> 6 & 63, t[r++] = 128 | v & 63;
        } else {
          if (r + 3 >= l) break;
          t[r++] = 240 | v >> 18, t[r++] = 128 | v >> 12 & 63, t[r++] = 128 | v >> 6 & 63, t[r++] = 128 | v & 63, u++;
        }
      }
      return t[r] = 0, r - c;
    }, At = (e, t, r) => {
      var i = $e(e) + 1, c = new Array(i), l = ur(e, c, 0, c.length);
      return c.length = l, c;
    }, Cn = () => {
      if (!Ct.length) {
        var e = null;
        if (h) {
          var t = 256, r = Buffer.alloc(t), i = 0, c = process.stdin.fd;
          try {
            i = I.readSync(c, r, 0, t);
          } catch (l) {
            if (l.toString().includes("EOF")) i = 0;
            else throw l;
          }
          i > 0 && (e = r.slice(0, i).toString("utf-8"));
        } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        Ct = At(e);
      }
      return Ct.shift();
    }, Te = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, t) {
        Te.ttys[e] = {
          input: [],
          output: [],
          ops: t
        }, a.registerDevice(e, Te.stream_ops);
      },
      stream_ops: {
        open(e) {
          var t = Te.ttys[e.node.rdev];
          if (!t) throw new a.ErrnoError(43);
          e.tty = t, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, t, r, i, c) {
          if (!e.tty || !e.tty.ops.get_char) throw new a.ErrnoError(60);
          for (var l = 0, u = 0; u < i; u++) {
            var v;
            try {
              v = e.tty.ops.get_char(e.tty);
            } catch {
              throw new a.ErrnoError(29);
            }
            if (v === void 0 && l === 0) throw new a.ErrnoError(6);
            if (v == null) break;
            l++, t[r + u] = v;
          }
          return l && (e.node.atime = Date.now()), l;
        },
        write(e, t, r, i, c) {
          if (!e.tty || !e.tty.ops.put_char) throw new a.ErrnoError(60);
          try {
            for (var l = 0; l < i; l++) e.tty.ops.put_char(e.tty, t[r + l]);
          } catch {
            throw new a.ErrnoError(29);
          }
          return i && (e.node.mtime = e.node.ctime = Date.now()), l;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return Cn();
        },
        put_char(e, t) {
          t === null || t === 10 ? (ke(Re(e.output)), e.output = []) : t != 0 && e.output.push(t);
        },
        fsync(e) {
          var _a3;
          ((_a3 = e.output) == null ? void 0 : _a3.length) > 0 && (ke(Re(e.output)), e.output = []);
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
          t === null || t === 10 ? (me(Re(e.output)), e.output = []) : t != 0 && e.output.push(t);
        },
        fsync(e) {
          var _a3;
          ((_a3 = e.output) == null ? void 0 : _a3.length) > 0 && (me(Re(e.output)), e.output = []);
        }
      }
    }, Tt = (e) => {
      ct();
    }, C = {
      ops_table: null,
      mount(e) {
        return C.createNode(null, "/", 16895, 0);
      },
      createNode(e, t, r, i) {
        if (a.isBlkdev(r) || a.isFIFO(r)) throw new a.ErrnoError(63);
        C.ops_table || (C.ops_table = {
          dir: {
            node: {
              getattr: C.node_ops.getattr,
              setattr: C.node_ops.setattr,
              lookup: C.node_ops.lookup,
              mknod: C.node_ops.mknod,
              rename: C.node_ops.rename,
              unlink: C.node_ops.unlink,
              rmdir: C.node_ops.rmdir,
              readdir: C.node_ops.readdir,
              symlink: C.node_ops.symlink
            },
            stream: {
              llseek: C.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: C.node_ops.getattr,
              setattr: C.node_ops.setattr
            },
            stream: {
              llseek: C.stream_ops.llseek,
              read: C.stream_ops.read,
              write: C.stream_ops.write,
              mmap: C.stream_ops.mmap,
              msync: C.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: C.node_ops.getattr,
              setattr: C.node_ops.setattr,
              readlink: C.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: C.node_ops.getattr,
              setattr: C.node_ops.setattr
            },
            stream: a.chrdev_stream_ops
          }
        });
        var c = a.createNode(e, t, r, i);
        return a.isDir(c.mode) ? (c.node_ops = C.ops_table.dir.node, c.stream_ops = C.ops_table.dir.stream, c.contents = {}) : a.isFile(c.mode) ? (c.node_ops = C.ops_table.file.node, c.stream_ops = C.ops_table.file.stream, c.usedBytes = 0, c.contents = null) : a.isLink(c.mode) ? (c.node_ops = C.ops_table.link.node, c.stream_ops = C.ops_table.link.stream) : a.isChrdev(c.mode) && (c.node_ops = C.ops_table.chrdev.node, c.stream_ops = C.ops_table.chrdev.stream), c.atime = c.mtime = c.ctime = Date.now(), e && (e.contents[t] = c, e.atime = e.mtime = e.ctime = c.atime), c;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, t) {
        var r = e.contents ? e.contents.length : 0;
        if (!(r >= t)) {
          var i = 1024 * 1024;
          t = Math.max(t, r * (r < i ? 2 : 1.125) >>> 0), r != 0 && (t = Math.max(t, 256));
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
          return t.dev = a.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, a.isDir(e.mode) ? t.size = 4096 : a.isFile(e.mode) ? t.size = e.usedBytes : a.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.atime), t.mtime = new Date(e.mtime), t.ctime = new Date(e.ctime), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
        },
        setattr(e, t) {
          for (const r of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) t[r] != null && (e[r] = t[r]);
          t.size !== void 0 && C.resizeFileStorage(e, t.size);
        },
        lookup(e, t) {
          throw C.doesNotExistError;
        },
        mknod(e, t, r, i) {
          return C.createNode(e, t, r, i);
        },
        rename(e, t, r) {
          var i;
          try {
            i = a.lookupNode(t, r);
          } catch {
          }
          if (i) {
            if (a.isDir(e.mode)) for (var c in i.contents) throw new a.ErrnoError(55);
            a.hashRemoveNode(i);
          }
          delete e.parent.contents[e.name], t.contents[r] = e, e.name = r, t.ctime = t.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, t) {
          delete e.contents[t], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, t) {
          var r = a.lookupNode(e, t);
          for (var i in r.contents) throw new a.ErrnoError(55);
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
          var i = C.createNode(e, t, 41471, 0);
          return i.link = r, i;
        },
        readlink(e) {
          if (!a.isLink(e.mode)) throw new a.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, t, r, i, c) {
          var l = e.node.contents;
          if (c >= e.node.usedBytes) return 0;
          var u = Math.min(e.node.usedBytes - c, i);
          if (u > 8 && l.subarray) t.set(l.subarray(c, c + u), r);
          else for (var v = 0; v < u; v++) t[r + v] = l[c + v];
          return u;
        },
        write(e, t, r, i, c, l) {
          if (t.buffer === K.buffer && (l = false), !i) return 0;
          var u = e.node;
          if (u.mtime = u.ctime = Date.now(), t.subarray && (!u.contents || u.contents.subarray)) {
            if (l) return u.contents = t.subarray(r, r + i), u.usedBytes = i, i;
            if (u.usedBytes === 0 && c === 0) return u.contents = t.slice(r, r + i), u.usedBytes = i, i;
            if (c + i <= u.usedBytes) return u.contents.set(t.subarray(r, r + i), c), i;
          }
          if (C.expandFileStorage(u, c + i), u.contents.subarray && t.subarray) u.contents.set(t.subarray(r, r + i), c);
          else for (var v = 0; v < i; v++) u.contents[c + v] = t[r + v];
          return u.usedBytes = Math.max(u.usedBytes, c + i), i;
        },
        llseek(e, t, r) {
          var i = t;
          if (r === 1 ? i += e.position : r === 2 && a.isFile(e.node.mode) && (i += e.node.usedBytes), i < 0) throw new a.ErrnoError(28);
          return i;
        },
        mmap(e, t, r, i, c) {
          if (!a.isFile(e.node.mode)) throw new a.ErrnoError(43);
          var l, u, v = e.node.contents;
          if (!(c & 2) && v && v.buffer === K.buffer) u = false, l = v.byteOffset;
          else {
            if (u = true, l = Tt(), !l) throw new a.ErrnoError(48);
            v && ((r > 0 || r + t < v.length) && (v.subarray ? v = v.subarray(r, r + t) : v = Array.prototype.slice.call(v, r, r + t)), K.set(v, l));
          }
          return {
            ptr: l,
            allocated: u
          };
        },
        msync(e, t, r, i, c) {
          return C.stream_ops.write(e, t, 0, i, r, false), 0;
        }
      }
    }, An = async (e) => {
      var t = await V(e);
      return new Uint8Array(t);
    }, Tn = (...e) => a.createDataFile(...e), fr = [], Bn = (e, t, r, i) => {
      typeof Browser < "u" && Browser.init();
      var c = false;
      return fr.forEach((l) => {
        c || l.canHandle(t) && (l.handle(e, t, r, i), c = true);
      }), c;
    }, In = (e, t, r, i, c, l, u, v, g, w) => {
      var P = t ? Oe.resolve(F.join2(e, t)) : e;
      function O(A) {
        function S(B) {
          w == null ? void 0 : w(), v || Tn(e, t, B, i, c, g), l == null ? void 0 : l(), Lt();
        }
        Bn(A, P, S, () => {
          u == null ? void 0 : u(), Lt();
        }) || S(A);
      }
      rr(), typeof r == "string" ? An(r).then(O, u) : O(r);
    }, Pn = (e) => {
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
    }, Bt = (e, t) => {
      var r = 0;
      return e && (r |= 365), t && (r |= 146), r;
    }, Dn = {
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
    }, E = {
      isWindows: false,
      staticInit() {
        E.isWindows = !!process.platform.match(/^win/);
        var e = process.binding("constants").fs;
        E.flagsForNodeMap = {
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
        return Dn[t];
      },
      tryFSOperation(e) {
        try {
          return e();
        } catch (t) {
          throw t.code ? t.code === "UNKNOWN" ? new a.ErrnoError(28) : new a.ErrnoError(E.convertNodeCode(t)) : t;
        }
      },
      mount(e) {
        return E.createNode(null, "/", E.getMode(e.opts.root), 0);
      },
      createNode(e, t, r, i) {
        if (!a.isDir(r) && !a.isFile(r) && !a.isLink(r)) throw new a.ErrnoError(28);
        var c = a.createNode(e, t, r);
        return c.node_ops = E.node_ops, c.stream_ops = E.stream_ops, c;
      },
      getMode(e) {
        return E.tryFSOperation(() => {
          var t = I.lstatSync(e).mode;
          return E.isWindows && (t |= (t & 292) >> 2), t;
        });
      },
      realPath(e) {
        for (var t = []; e.parent !== e; ) t.push(e.name), e = e.parent;
        return t.push(e.mount.opts.root), t.reverse(), F.join(...t);
      },
      flagsForNode(e) {
        e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
        var t = 0;
        for (var r in E.flagsForNodeMap) e & r && (t |= E.flagsForNodeMap[r], e ^= r);
        if (e) throw new a.ErrnoError(28);
        return t;
      },
      getattr(e, t) {
        var r = E.tryFSOperation(e);
        return E.isWindows && (r.blksize || (r.blksize = 4096), r.blocks || (r.blocks = (r.size + r.blksize - 1) / r.blksize | 0), r.mode |= (r.mode & 292) >> 2), {
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
      setattr(e, t, r, i, c, l, u) {
        E.tryFSOperation(() => {
          if (r.mode !== void 0) {
            var v = r.mode;
            E.isWindows && (v &= 384), i(e, v), t.mode = r.mode;
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
          var t = E.realPath(e);
          return E.getattr(() => I.lstatSync(t), e);
        },
        setattr(e, t) {
          var r = E.realPath(e);
          if (t.mode != null && t.dontFollow) throw new a.ErrnoError(52);
          E.setattr(r, e, t, I.chmodSync, I.utimesSync, I.truncateSync, I.lstatSync);
        },
        lookup(e, t) {
          var r = F.join2(E.realPath(e), t), i = E.getMode(r);
          return E.createNode(e, t, i);
        },
        mknod(e, t, r, i) {
          var c = E.createNode(e, t, r, i), l = E.realPath(c);
          return E.tryFSOperation(() => {
            a.isDir(c.mode) ? I.mkdirSync(l, c.mode) : I.writeFileSync(l, "", {
              mode: c.mode
            });
          }), c;
        },
        rename(e, t, r) {
          var i = E.realPath(e), c = F.join2(E.realPath(t), r);
          try {
            a.unlink(c);
          } catch {
          }
          E.tryFSOperation(() => I.renameSync(i, c)), e.name = r;
        },
        unlink(e, t) {
          var r = F.join2(E.realPath(e), t);
          E.tryFSOperation(() => I.unlinkSync(r));
        },
        rmdir(e, t) {
          var r = F.join2(E.realPath(e), t);
          E.tryFSOperation(() => I.rmdirSync(r));
        },
        readdir(e) {
          var t = E.realPath(e);
          return E.tryFSOperation(() => I.readdirSync(t));
        },
        symlink(e, t, r) {
          var i = F.join2(E.realPath(e), t);
          E.tryFSOperation(() => I.symlinkSync(r, i));
        },
        readlink(e) {
          var t = E.realPath(e);
          return E.tryFSOperation(() => I.readlinkSync(t));
        },
        statfs(e) {
          var t = E.tryFSOperation(() => I.statfsSync(e));
          return t.frsize = t.bsize, t;
        }
      },
      stream_ops: {
        getattr(e) {
          return E.getattr(() => I.fstatSync(e.nfd), e.node);
        },
        setattr(e, t) {
          E.setattr(e.nfd, e.node, t, I.fchmodSync, I.futimesSync, I.ftruncateSync, I.fstatSync);
        },
        open(e) {
          var t = E.realPath(e.node);
          E.tryFSOperation(() => {
            e.shared.refcount = 1, e.nfd = I.openSync(t, E.flagsForNode(e.flags));
          });
        },
        close(e) {
          E.tryFSOperation(() => {
            e.nfd && --e.shared.refcount === 0 && I.closeSync(e.nfd);
          });
        },
        dup(e) {
          e.shared.refcount++;
        },
        read(e, t, r, i, c) {
          return E.tryFSOperation(() => I.readSync(e.nfd, new Int8Array(t.buffer, r, i), 0, i, c));
        },
        write(e, t, r, i, c) {
          return E.tryFSOperation(() => I.writeSync(e.nfd, new Int8Array(t.buffer, r, i), 0, i, c));
        },
        llseek(e, t, r) {
          var i = t;
          if (r === 1 ? i += e.position : r === 2 && a.isFile(e.node.mode) && E.tryFSOperation(() => {
            var c = I.fstatSync(e.nfd);
            i += c.size;
          }), i < 0) throw new a.ErrnoError(28);
          return i;
        },
        mmap(e, t, r, i, c) {
          if (!a.isFile(e.node.mode)) throw new a.ErrnoError(43);
          var l = Tt();
          return E.stream_ops.read(e, K, l, t, r), {
            ptr: l,
            allocated: true
          };
        },
        msync(e, t, r, i, c) {
          return E.stream_ops.write(e, t, 0, i, r, false), 0;
        }
      }
    }, q = {
      DIR_MODE: 16895,
      FILE_MODE: 33279,
      reader: null,
      mount(e) {
        z(m), q.reader ?? (q.reader = new FileReaderSync());
        var t = q.createNode(null, "/", q.DIR_MODE, 0), r = {};
        function i(l) {
          for (var u = l.split("/"), v = t, g = 0; g < u.length - 1; g++) {
            var w = u.slice(0, g + 1).join("/");
            r[w] || (r[w] = q.createNode(v, u[g], q.DIR_MODE, 0)), v = r[w];
          }
          return v;
        }
        function c(l) {
          var u = l.split("/");
          return u[u.length - 1];
        }
        return Array.prototype.forEach.call(e.opts.files || [], function(l) {
          q.createNode(i(l.name), c(l.name), q.FILE_MODE, 0, l, l.lastModifiedDate);
        }), (e.opts.blobs || []).forEach((l) => {
          q.createNode(i(l.name), c(l.name), q.FILE_MODE, 0, l.data);
        }), (e.opts.packages || []).forEach((l) => {
          l.metadata.files.forEach((u) => {
            var v = u.filename.slice(1);
            q.createNode(i(v), c(v), q.FILE_MODE, 0, l.blob.slice(u.start, u.end));
          });
        }), t;
      },
      createNode(e, t, r, i, c, l) {
        var u = a.createNode(e, t, r);
        return u.mode = r, u.node_ops = q.node_ops, u.stream_ops = q.stream_ops, u.atime = u.mtime = u.ctime = (l || /* @__PURE__ */ new Date()).getTime(), z(q.FILE_MODE !== q.DIR_MODE), r === q.FILE_MODE ? (u.size = c.size, u.contents = c) : (u.size = 4096, u.contents = {}), e && (e.contents[t] = u), u;
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
          throw new a.ErrnoError(44);
        },
        mknod(e, t, r, i) {
          throw new a.ErrnoError(63);
        },
        rename(e, t, r) {
          throw new a.ErrnoError(63);
        },
        unlink(e, t) {
          throw new a.ErrnoError(63);
        },
        rmdir(e, t) {
          throw new a.ErrnoError(63);
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
          throw new a.ErrnoError(63);
        }
      },
      stream_ops: {
        read(e, t, r, i, c) {
          if (c >= e.node.size) return 0;
          var l = e.node.contents.slice(c, c + i), u = q.reader.readAsArrayBuffer(l);
          return t.set(new Uint8Array(u), r), l.size;
        },
        write(e, t, r, i, c) {
          throw new a.ErrnoError(29);
        },
        llseek(e, t, r) {
          var i = t;
          if (r === 1 ? i += e.position : r === 2 && a.isFile(e.node.mode) && (i += e.node.size), i < 0) throw new a.ErrnoError(28);
          return i;
        }
      }
    }, a = {
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
        constructor(e, t, r, i) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = a.nextInode++, this.name = t, this.mode = r, this.rdev = i, this.atime = this.mtime = this.ctime = Date.now();
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
          return a.isDir(this.mode);
        }
        get isDevice() {
          return a.isChrdev(this.mode);
        }
      },
      lookupPath(e, t = {}) {
        if (!e) throw new a.ErrnoError(44);
        t.follow_mount ?? (t.follow_mount = true), F.isAbs(e) || (e = a.cwd() + "/" + e);
        e: for (var r = 0; r < 40; r++) {
          for (var i = e.split("/").filter((w) => !!w), c = a.root, l = "/", u = 0; u < i.length; u++) {
            var v = u === i.length - 1;
            if (v && t.parent) break;
            if (i[u] !== ".") {
              if (i[u] === "..") {
                if (l = F.dirname(l), a.isRoot(c)) {
                  e = l + "/" + i.slice(u + 1).join("/");
                  continue e;
                } else c = c.parent;
                continue;
              }
              l = F.join2(l, i[u]);
              try {
                c = a.lookupNode(c, i[u]);
              } catch (w) {
                if ((w == null ? void 0 : w.errno) === 44 && v && t.noent_okay) return {
                  path: l
                };
                throw w;
              }
              if (a.isMountpoint(c) && (!v || t.follow_mount) && (c = c.mounted.root), a.isLink(c.mode) && (!v || t.follow)) {
                if (!c.node_ops.readlink) throw new a.ErrnoError(52);
                var g = c.node_ops.readlink(c);
                F.isAbs(g) || (g = F.dirname(l) + "/" + g), e = g + "/" + i.slice(u + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: l,
            node: c
          };
        }
        throw new a.ErrnoError(32);
      },
      getPath(e) {
        for (var t; ; ) {
          if (a.isRoot(e)) {
            var r = e.mount.mountpoint;
            return t ? r[r.length - 1] !== "/" ? `${r}/${t}` : r + t : r;
          }
          t = t ? `${e.name}/${t}` : e.name, e = e.parent;
        }
      },
      hashName(e, t) {
        for (var r = 0, i = 0; i < t.length; i++) r = (r << 5) - r + t.charCodeAt(i) | 0;
        return (e + r >>> 0) % a.nameTable.length;
      },
      hashAddNode(e) {
        var t = a.hashName(e.parent.id, e.name);
        e.name_next = a.nameTable[t], a.nameTable[t] = e;
      },
      hashRemoveNode(e) {
        var t = a.hashName(e.parent.id, e.name);
        if (a.nameTable[t] === e) a.nameTable[t] = e.name_next;
        else for (var r = a.nameTable[t]; r; ) {
          if (r.name_next === e) {
            r.name_next = e.name_next;
            break;
          }
          r = r.name_next;
        }
      },
      lookupNode(e, t) {
        var r = a.mayLookup(e);
        if (r) throw new a.ErrnoError(r);
        for (var i = a.hashName(e.id, t), c = a.nameTable[i]; c; c = c.name_next) {
          var l = c.name;
          if (c.parent.id === e.id && l === t) return c;
        }
        return a.lookup(e, t);
      },
      createNode(e, t, r, i) {
        var c = new a.FSNode(e, t, r, i);
        return a.hashAddNode(c), c;
      },
      destroyNode(e) {
        a.hashRemoveNode(e);
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
        return a.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!a.isDir(e.mode)) return 54;
        var t = a.nodePermissions(e, "x");
        return t || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, t) {
        if (!a.isDir(e.mode)) return 54;
        try {
          var r = a.lookupNode(e, t);
          return 20;
        } catch {
        }
        return a.nodePermissions(e, "wx");
      },
      mayDelete(e, t, r) {
        var i;
        try {
          i = a.lookupNode(e, t);
        } catch (l) {
          return l.errno;
        }
        var c = a.nodePermissions(e, "wx");
        if (c) return c;
        if (r) {
          if (!a.isDir(i.mode)) return 54;
          if (a.isRoot(i) || a.getPath(i) === a.cwd()) return 10;
        } else if (a.isDir(i.mode)) return 31;
        return 0;
      },
      mayOpen(e, t) {
        return e ? a.isLink(e.mode) ? 32 : a.isDir(e.mode) && (a.flagsToPermissionString(t) !== "r" || t & 576) ? 31 : a.nodePermissions(e, a.flagsToPermissionString(t)) : 44;
      },
      checkOpExists(e, t) {
        if (!e) throw new a.ErrnoError(t);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= a.MAX_OPEN_FDS; e++) if (!a.streams[e]) return e;
        throw new a.ErrnoError(33);
      },
      getStreamChecked(e) {
        var t = a.getStream(e);
        if (!t) throw new a.ErrnoError(8);
        return t;
      },
      getStream: (e) => a.streams[e],
      createStream(e, t = -1) {
        return e = Object.assign(new a.FSStream(), e), t == -1 && (t = a.nextfd()), e.fd = t, a.streams[t] = e, e;
      },
      closeStream(e) {
        a.streams[e] = null;
      },
      dupStream(e, t = -1) {
        var _a3, _b;
        var r = a.createStream(e, t);
        return (_b = (_a3 = r.stream_ops) == null ? void 0 : _a3.dup) == null ? void 0 : _b.call(_a3, r), r;
      },
      doSetAttr(e, t, r) {
        var i = e == null ? void 0 : e.stream_ops.setattr, c = i ? e : t;
        i ?? (i = t.node_ops.setattr), a.checkOpExists(i, 63), i(c, r);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a3, _b;
          var t = a.getDevice(e.node.rdev);
          e.stream_ops = t.stream_ops, (_b = (_a3 = e.stream_ops).open) == null ? void 0 : _b.call(_a3, e);
        },
        llseek() {
          throw new a.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, t) => e << 8 | t,
      registerDevice(e, t) {
        a.devices[e] = {
          stream_ops: t
        };
      },
      getDevice: (e) => a.devices[e],
      getMounts(e) {
        for (var t = [], r = [
          e
        ]; r.length; ) {
          var i = r.pop();
          t.push(i), r.push(...i.mounts);
        }
        return t;
      },
      syncfs(e, t) {
        typeof e == "function" && (t = e, e = false), a.syncFSRequests++, a.syncFSRequests > 1 && me(`warning: ${a.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var r = a.getMounts(a.root.mount), i = 0;
        function c(u) {
          return a.syncFSRequests--, t(u);
        }
        function l(u) {
          if (u) return l.errored ? void 0 : (l.errored = true, c(u));
          ++i >= r.length && c(null);
        }
        r.forEach((u) => {
          if (!u.type.syncfs) return l(null);
          u.type.syncfs(u, e, l);
        });
      },
      mount(e, t, r) {
        var i = r === "/", c = !r, l;
        if (i && a.root) throw new a.ErrnoError(10);
        if (!i && !c) {
          var u = a.lookupPath(r, {
            follow_mount: false
          });
          if (r = u.path, l = u.node, a.isMountpoint(l)) throw new a.ErrnoError(10);
          if (!a.isDir(l.mode)) throw new a.ErrnoError(54);
        }
        var v = {
          type: e,
          opts: t,
          mountpoint: r,
          mounts: []
        }, g = e.mount(v);
        return g.mount = v, v.root = g, i ? a.root = g : l && (l.mounted = v, l.mount && l.mount.mounts.push(v)), g;
      },
      unmount(e) {
        var t = a.lookupPath(e, {
          follow_mount: false
        });
        if (!a.isMountpoint(t.node)) throw new a.ErrnoError(28);
        var r = t.node, i = r.mounted, c = a.getMounts(i);
        Object.keys(a.nameTable).forEach((u) => {
          for (var v = a.nameTable[u]; v; ) {
            var g = v.name_next;
            c.includes(v.mount) && a.destroyNode(v), v = g;
          }
        }), r.mounted = null;
        var l = r.mount.mounts.indexOf(i);
        r.mount.mounts.splice(l, 1);
      },
      lookup(e, t) {
        return e.node_ops.lookup(e, t);
      },
      mknod(e, t, r) {
        var i = a.lookupPath(e, {
          parent: true
        }), c = i.node, l = F.basename(e);
        if (!l) throw new a.ErrnoError(28);
        if (l === "." || l === "..") throw new a.ErrnoError(20);
        var u = a.mayCreate(c, l);
        if (u) throw new a.ErrnoError(u);
        if (!c.node_ops.mknod) throw new a.ErrnoError(63);
        return c.node_ops.mknod(c, l, t, r);
      },
      statfs(e) {
        return a.statfsNode(a.lookupPath(e, {
          follow: true
        }).node);
      },
      statfsStream(e) {
        return a.statfsNode(e.node);
      },
      statfsNode(e) {
        var t = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: a.nextInode,
          ffree: a.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        return e.node_ops.statfs && Object.assign(t, e.node_ops.statfs(e.mount.opts.root)), t;
      },
      create(e, t = 438) {
        return t &= 4095, t |= 32768, a.mknod(e, t, 0);
      },
      mkdir(e, t = 511) {
        return t &= 1023, t |= 16384, a.mknod(e, t, 0);
      },
      mkdirTree(e, t) {
        var r = e.split("/"), i = "";
        for (var c of r) if (c) {
          (i || F.isAbs(e)) && (i += "/"), i += c;
          try {
            a.mkdir(i, t);
          } catch (l) {
            if (l.errno != 20) throw l;
          }
        }
      },
      mkdev(e, t, r) {
        return typeof r > "u" && (r = t, t = 438), t |= 8192, a.mknod(e, t, r);
      },
      symlink(e, t) {
        if (!Oe.resolve(e)) throw new a.ErrnoError(44);
        var r = a.lookupPath(t, {
          parent: true
        }), i = r.node;
        if (!i) throw new a.ErrnoError(44);
        var c = F.basename(t), l = a.mayCreate(i, c);
        if (l) throw new a.ErrnoError(l);
        if (!i.node_ops.symlink) throw new a.ErrnoError(63);
        return i.node_ops.symlink(i, c, e);
      },
      rename(e, t) {
        var r = F.dirname(e), i = F.dirname(t), c = F.basename(e), l = F.basename(t), u, v, g;
        if (u = a.lookupPath(e, {
          parent: true
        }), v = u.node, u = a.lookupPath(t, {
          parent: true
        }), g = u.node, !v || !g) throw new a.ErrnoError(44);
        if (v.mount !== g.mount) throw new a.ErrnoError(75);
        var w = a.lookupNode(v, c), P = Oe.relative(e, i);
        if (P.charAt(0) !== ".") throw new a.ErrnoError(28);
        if (P = Oe.relative(t, r), P.charAt(0) !== ".") throw new a.ErrnoError(55);
        var O;
        try {
          O = a.lookupNode(g, l);
        } catch {
        }
        if (w !== O) {
          var A = a.isDir(w.mode), S = a.mayDelete(v, c, A);
          if (S) throw new a.ErrnoError(S);
          if (S = O ? a.mayDelete(g, l, A) : a.mayCreate(g, l), S) throw new a.ErrnoError(S);
          if (!v.node_ops.rename) throw new a.ErrnoError(63);
          if (a.isMountpoint(w) || O && a.isMountpoint(O)) throw new a.ErrnoError(10);
          if (g !== v && (S = a.nodePermissions(v, "w"), S)) throw new a.ErrnoError(S);
          a.hashRemoveNode(w);
          try {
            v.node_ops.rename(w, g, l), w.parent = g;
          } catch (B) {
            throw B;
          } finally {
            a.hashAddNode(w);
          }
        }
      },
      rmdir(e) {
        var t = a.lookupPath(e, {
          parent: true
        }), r = t.node, i = F.basename(e), c = a.lookupNode(r, i), l = a.mayDelete(r, i, true);
        if (l) throw new a.ErrnoError(l);
        if (!r.node_ops.rmdir) throw new a.ErrnoError(63);
        if (a.isMountpoint(c)) throw new a.ErrnoError(10);
        r.node_ops.rmdir(r, i), a.destroyNode(c);
      },
      readdir(e) {
        var t = a.lookupPath(e, {
          follow: true
        }), r = t.node, i = a.checkOpExists(r.node_ops.readdir, 54);
        return i(r);
      },
      unlink(e) {
        var t = a.lookupPath(e, {
          parent: true
        }), r = t.node;
        if (!r) throw new a.ErrnoError(44);
        var i = F.basename(e), c = a.lookupNode(r, i), l = a.mayDelete(r, i, false);
        if (l) throw new a.ErrnoError(l);
        if (!r.node_ops.unlink) throw new a.ErrnoError(63);
        if (a.isMountpoint(c)) throw new a.ErrnoError(10);
        r.node_ops.unlink(r, i), a.destroyNode(c);
      },
      readlink(e) {
        var t = a.lookupPath(e), r = t.node;
        if (!r) throw new a.ErrnoError(44);
        if (!r.node_ops.readlink) throw new a.ErrnoError(28);
        return r.node_ops.readlink(r);
      },
      stat(e, t) {
        var r = a.lookupPath(e, {
          follow: !t
        }), i = r.node, c = a.checkOpExists(i.node_ops.getattr, 63);
        return c(i);
      },
      fstat(e) {
        var t = a.getStreamChecked(e), r = t.node, i = t.stream_ops.getattr, c = i ? t : r;
        return i ?? (i = r.node_ops.getattr), a.checkOpExists(i, 63), i(c);
      },
      lstat(e) {
        return a.stat(e, true);
      },
      doChmod(e, t, r, i) {
        a.doSetAttr(e, t, {
          mode: r & 4095 | t.mode & -4096,
          ctime: Date.now(),
          dontFollow: i
        });
      },
      chmod(e, t, r) {
        var i;
        if (typeof e == "string") {
          var c = a.lookupPath(e, {
            follow: !r
          });
          i = c.node;
        } else i = e;
        a.doChmod(null, i, t, r);
      },
      lchmod(e, t) {
        a.chmod(e, t, true);
      },
      fchmod(e, t) {
        var r = a.getStreamChecked(e);
        a.doChmod(r, r.node, t, false);
      },
      doChown(e, t, r) {
        a.doSetAttr(e, t, {
          timestamp: Date.now(),
          dontFollow: r
        });
      },
      chown(e, t, r, i) {
        var c;
        if (typeof e == "string") {
          var l = a.lookupPath(e, {
            follow: !i
          });
          c = l.node;
        } else c = e;
        a.doChown(null, c, i);
      },
      lchown(e, t, r) {
        a.chown(e, t, r, true);
      },
      fchown(e, t, r) {
        var i = a.getStreamChecked(e);
        a.doChown(i, i.node, false);
      },
      doTruncate(e, t, r) {
        if (a.isDir(t.mode)) throw new a.ErrnoError(31);
        if (!a.isFile(t.mode)) throw new a.ErrnoError(28);
        var i = a.nodePermissions(t, "w");
        if (i) throw new a.ErrnoError(i);
        a.doSetAttr(e, t, {
          size: r,
          timestamp: Date.now()
        });
      },
      truncate(e, t) {
        if (t < 0) throw new a.ErrnoError(28);
        var r;
        if (typeof e == "string") {
          var i = a.lookupPath(e, {
            follow: true
          });
          r = i.node;
        } else r = e;
        a.doTruncate(null, r, t);
      },
      ftruncate(e, t) {
        var r = a.getStreamChecked(e);
        if (t < 0 || !(r.flags & 2097155)) throw new a.ErrnoError(28);
        a.doTruncate(r, r.node, t);
      },
      utime(e, t, r) {
        var i = a.lookupPath(e, {
          follow: true
        }), c = i.node, l = a.checkOpExists(c.node_ops.setattr, 63);
        l(c, {
          atime: t,
          mtime: r
        });
      },
      open(e, t, r = 438) {
        if (e === "") throw new a.ErrnoError(44);
        t = typeof t == "string" ? Pn(t) : t, t & 64 ? r = r & 4095 | 32768 : r = 0;
        var i, c;
        if (typeof e == "object") i = e;
        else {
          c = e.endsWith("/");
          var l = a.lookupPath(e, {
            follow: !(t & 131072),
            noent_okay: true
          });
          i = l.node, e = l.path;
        }
        var u = false;
        if (t & 64) if (i) {
          if (t & 128) throw new a.ErrnoError(20);
        } else {
          if (c) throw new a.ErrnoError(31);
          i = a.mknod(e, r | 511, 0), u = true;
        }
        if (!i) throw new a.ErrnoError(44);
        if (a.isChrdev(i.mode) && (t &= -513), t & 65536 && !a.isDir(i.mode)) throw new a.ErrnoError(54);
        if (!u) {
          var v = a.mayOpen(i, t);
          if (v) throw new a.ErrnoError(v);
        }
        t & 512 && !u && a.truncate(i, 0), t &= -131713;
        var g = a.createStream({
          node: i,
          path: a.getPath(i),
          flags: t,
          seekable: true,
          position: 0,
          stream_ops: i.stream_ops,
          ungotten: [],
          error: false
        });
        return g.stream_ops.open && g.stream_ops.open(g), u && a.chmod(i, r & 511), s.logReadFiles && !(t & 1) && (e in a.readFiles || (a.readFiles[e] = 1)), g;
      },
      close(e) {
        if (a.isClosed(e)) throw new a.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (t) {
          throw t;
        } finally {
          a.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, t, r) {
        if (a.isClosed(e)) throw new a.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new a.ErrnoError(70);
        if (r != 0 && r != 1 && r != 2) throw new a.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position;
      },
      read(e, t, r, i, c) {
        if (i < 0 || c < 0) throw new a.ErrnoError(28);
        if (a.isClosed(e)) throw new a.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new a.ErrnoError(8);
        if (a.isDir(e.node.mode)) throw new a.ErrnoError(31);
        if (!e.stream_ops.read) throw new a.ErrnoError(28);
        var l = typeof c < "u";
        if (!l) c = e.position;
        else if (!e.seekable) throw new a.ErrnoError(70);
        var u = e.stream_ops.read(e, t, r, i, c);
        return l || (e.position += u), u;
      },
      write(e, t, r, i, c, l) {
        if (i < 0 || c < 0) throw new a.ErrnoError(28);
        if (a.isClosed(e)) throw new a.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new a.ErrnoError(8);
        if (a.isDir(e.node.mode)) throw new a.ErrnoError(31);
        if (!e.stream_ops.write) throw new a.ErrnoError(28);
        e.seekable && e.flags & 1024 && a.llseek(e, 0, 2);
        var u = typeof c < "u";
        if (!u) c = e.position;
        else if (!e.seekable) throw new a.ErrnoError(70);
        var v = e.stream_ops.write(e, t, r, i, c, l);
        return u || (e.position += v), v;
      },
      mmap(e, t, r, i, c) {
        if (i & 2 && !(c & 2) && (e.flags & 2097155) !== 2) throw new a.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new a.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new a.ErrnoError(43);
        if (!t) throw new a.ErrnoError(28);
        return e.stream_ops.mmap(e, t, r, i, c);
      },
      msync(e, t, r, i, c) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, t, r, i, c) : 0;
      },
      ioctl(e, t, r) {
        if (!e.stream_ops.ioctl) throw new a.ErrnoError(59);
        return e.stream_ops.ioctl(e, t, r);
      },
      readFile(e, t = {}) {
        if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary") throw new Error(`Invalid encoding type "${t.encoding}"`);
        var r = a.open(e, t.flags), i = a.stat(e), c = i.size, l = new Uint8Array(c);
        return a.read(r, l, 0, c, 0), t.encoding === "utf8" && (l = Re(l)), a.close(r), l;
      },
      writeFile(e, t, r = {}) {
        r.flags = r.flags || 577;
        var i = a.open(e, r.flags, r.mode);
        if (typeof t == "string" && (t = new Uint8Array(At(t))), ArrayBuffer.isView(t)) a.write(i, t, 0, t.byteLength, void 0, r.canOwn);
        else throw new Error("Unsupported data type");
        a.close(i);
      },
      cwd: () => a.currentPath,
      chdir(e) {
        var t = a.lookupPath(e, {
          follow: true
        });
        if (t.node === null) throw new a.ErrnoError(44);
        if (!a.isDir(t.node.mode)) throw new a.ErrnoError(54);
        var r = a.nodePermissions(t.node, "x");
        if (r) throw new a.ErrnoError(r);
        a.currentPath = t.path;
      },
      createDefaultDirectories() {
        a.mkdir("/tmp"), a.mkdir("/home"), a.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        a.mkdir("/dev"), a.registerDevice(a.makedev(1, 3), {
          read: () => 0,
          write: (i, c, l, u, v) => u,
          llseek: () => 0
        }), a.mkdev("/dev/null", a.makedev(1, 3)), Te.register(a.makedev(5, 0), Te.default_tty_ops), Te.register(a.makedev(6, 0), Te.default_tty1_ops), a.mkdev("/dev/tty", a.makedev(5, 0)), a.mkdev("/dev/tty1", a.makedev(6, 0));
        var e = new Uint8Array(1024), t = 0, r = () => (t === 0 && (lr(e), t = e.byteLength), e[--t]);
        a.createDevice("/dev", "random", r), a.createDevice("/dev", "urandom", r), a.mkdir("/dev/shm"), a.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        a.mkdir("/proc");
        var e = a.mkdir("/proc/self");
        a.mkdir("/proc/self/fd"), a.mount({
          mount() {
            var t = a.createNode(e, "fd", 16895, 73);
            return t.stream_ops = {
              llseek: C.stream_ops.llseek
            }, t.node_ops = {
              lookup(r, i) {
                var c = +i, l = a.getStreamChecked(c), u = {
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
                return Array.from(a.streams.entries()).filter(([r, i]) => i).map(([r, i]) => r.toString());
              }
            }, t;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, t, r) {
        e ? a.createDevice("/dev", "stdin", e) : a.symlink("/dev/tty", "/dev/stdin"), t ? a.createDevice("/dev", "stdout", null, t) : a.symlink("/dev/tty", "/dev/stdout"), r ? a.createDevice("/dev", "stderr", null, r) : a.symlink("/dev/tty1", "/dev/stderr"), a.open("/dev/stdin", 0), a.open("/dev/stdout", 1), a.open("/dev/stderr", 1);
      },
      staticInit() {
        a.nameTable = new Array(4096), a.mount(C, {}, "/"), a.createDefaultDirectories(), a.createDefaultDevices(), a.createSpecialDirectories(), a.filesystems = {
          MEMFS: C,
          NODEFS: E,
          WORKERFS: q
        };
      },
      init(e, t, r) {
        a.initialized = true, e ?? (e = s.stdin), t ?? (t = s.stdout), r ?? (r = s.stderr), a.createStandardStreams(e, t, r);
      },
      quit() {
        a.initialized = false;
        for (var e of a.streams) e && a.close(e);
      },
      findObject(e, t) {
        var r = a.analyzePath(e, t);
        return r.exists ? r.object : null;
      },
      analyzePath(e, t) {
        try {
          var r = a.lookupPath(e, {
            follow: !t
          });
          e = r.path;
        } catch {
        }
        var i = {
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
          var r = a.lookupPath(e, {
            parent: true
          });
          i.parentExists = true, i.parentPath = r.path, i.parentObject = r.node, i.name = F.basename(e), r = a.lookupPath(e, {
            follow: !t
          }), i.exists = true, i.path = r.path, i.object = r.node, i.name = r.node.name, i.isRoot = r.path === "/";
        } catch (c) {
          i.error = c.errno;
        }
        return i;
      },
      createPath(e, t, r, i) {
        e = typeof e == "string" ? e : a.getPath(e);
        for (var c = t.split("/").reverse(); c.length; ) {
          var l = c.pop();
          if (l) {
            var u = F.join2(e, l);
            try {
              a.mkdir(u);
            } catch (v) {
              if (v.errno != 20) throw v;
            }
            e = u;
          }
        }
        return u;
      },
      createFile(e, t, r, i, c) {
        var l = F.join2(typeof e == "string" ? e : a.getPath(e), t), u = Bt(i, c);
        return a.create(l, u);
      },
      createDataFile(e, t, r, i, c, l) {
        var u = t;
        e && (e = typeof e == "string" ? e : a.getPath(e), u = t ? F.join2(e, t) : e);
        var v = Bt(i, c), g = a.create(u, v);
        if (r) {
          if (typeof r == "string") {
            for (var w = new Array(r.length), P = 0, O = r.length; P < O; ++P) w[P] = r.charCodeAt(P);
            r = w;
          }
          a.chmod(g, v | 146);
          var A = a.open(g, 577);
          a.write(A, r, 0, r.length, 0, l), a.close(A), a.chmod(g, v);
        }
      },
      createDevice(e, t, r, i) {
        var _a3;
        var c = F.join2(typeof e == "string" ? e : a.getPath(e), t), l = Bt(!!r, !!i);
        (_a3 = a.createDevice).major ?? (_a3.major = 64);
        var u = a.makedev(a.createDevice.major++, 0);
        return a.registerDevice(u, {
          open(v) {
            v.seekable = false;
          },
          close(v) {
            var _a4;
            ((_a4 = i == null ? void 0 : i.buffer) == null ? void 0 : _a4.length) && i(10);
          },
          read(v, g, w, P, O) {
            for (var A = 0, S = 0; S < P; S++) {
              var B;
              try {
                B = r();
              } catch {
                throw new a.ErrnoError(29);
              }
              if (B === void 0 && A === 0) throw new a.ErrnoError(6);
              if (B == null) break;
              A++, g[w + S] = B;
            }
            return A && (v.node.atime = Date.now()), A;
          },
          write(v, g, w, P, O) {
            for (var A = 0; A < P; A++) try {
              i(g[w + A]);
            } catch {
              throw new a.ErrnoError(29);
            }
            return P && (v.node.mtime = v.node.ctime = Date.now()), A;
          }
        }), a.mkdev(c, l, u);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
          e.contents = ie(e.url), e.usedBytes = e.contents.length;
        } catch {
          throw new a.ErrnoError(29);
        }
      },
      createLazyFile(e, t, r, i, c) {
        class l {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(S) {
            if (!(S > this.length - 1 || S < 0)) {
              var B = S % this.chunkSize, W = S / this.chunkSize | 0;
              return this.getter(W)[B];
            }
          }
          setDataGetter(S) {
            this.getter = S;
          }
          cacheLength() {
            var S = new XMLHttpRequest();
            if (S.open("HEAD", r, false), S.send(null), !(S.status >= 200 && S.status < 300 || S.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + S.status);
            var B = Number(S.getResponseHeader("Content-length")), W, se = (W = S.getResponseHeader("Accept-Ranges")) && W === "bytes", X = (W = S.getResponseHeader("Content-Encoding")) && W === "gzip", ce = 1024 * 1024;
            se || (ce = B);
            var le = (pe, Me) => {
              if (pe > Me) throw new Error("invalid range (" + pe + ", " + Me + ") or no bytes requested!");
              if (Me > B - 1) throw new Error("only " + B + " bytes available! programmer error!");
              var G = new XMLHttpRequest();
              if (G.open("GET", r, false), B !== ce && G.setRequestHeader("Range", "bytes=" + pe + "-" + Me), G.responseType = "arraybuffer", G.overrideMimeType && G.overrideMimeType("text/plain; charset=x-user-defined"), G.send(null), !(G.status >= 200 && G.status < 300 || G.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + G.status);
              return G.response !== void 0 ? new Uint8Array(G.response || []) : At(G.responseText || "");
            }, Xe = this;
            Xe.setDataGetter((pe) => {
              var Me = pe * ce, G = (pe + 1) * ce - 1;
              if (G = Math.min(G, B - 1), typeof Xe.chunks[pe] > "u" && (Xe.chunks[pe] = le(Me, G)), typeof Xe.chunks[pe] > "u") throw new Error("doXHR failed!");
              return Xe.chunks[pe];
            }), (X || !B) && (ce = B = 1, B = this.getter(0).length, ce = B, ke("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = B, this._chunkSize = ce, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest < "u") {
          if (!m) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var u = new l(), v = {
            isDevice: false,
            contents: u
          };
        } else var v = {
          isDevice: false,
          url: r
        };
        var g = a.createFile(e, t, v, i, c);
        v.contents ? g.contents = v.contents : v.url && (g.contents = null, g.url = v.url), Object.defineProperties(g, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var w = {}, P = Object.keys(g.stream_ops);
        P.forEach((A) => {
          var S = g.stream_ops[A];
          w[A] = (...B) => (a.forceLoadFile(g), S(...B));
        });
        function O(A, S, B, W, se) {
          var X = A.node.contents;
          if (se >= X.length) return 0;
          var ce = Math.min(X.length - se, W);
          if (X.slice) for (var le = 0; le < ce; le++) S[B + le] = X[se + le];
          else for (var le = 0; le < ce; le++) S[B + le] = X.get(se + le);
          return ce;
        }
        return w.read = (A, S, B, W, se) => (a.forceLoadFile(g), O(A, S, B, W, se)), w.mmap = (A, S, B, W, se) => {
          a.forceLoadFile(g);
          var X = Tt();
          if (!X) throw new a.ErrnoError(48);
          return O(A, K, X, S, B), {
            ptr: X,
            allocated: true
          };
        }, g.stream_ops = w, g;
      }
    }, Fn = (e, t) => e ? Re(je, e, t) : "", T = {
      DEFAULT_POLLMASK: 5,
      calculateAt(e, t, r) {
        if (F.isAbs(t)) return t;
        var i;
        if (e === -100) i = a.cwd();
        else {
          var c = T.getStreamFromFD(e);
          i = c.path;
        }
        if (t.length == 0) {
          if (!r) throw new a.ErrnoError(44);
          return i;
        }
        return i + "/" + t;
      },
      writeStat(e, t) {
        _[e >> 2] = t.dev, _[e + 4 >> 2] = t.mode, U[e + 8 >> 2] = t.nlink, _[e + 12 >> 2] = t.uid, _[e + 16 >> 2] = t.gid, _[e + 20 >> 2] = t.rdev, re[e + 24 >> 3] = BigInt(t.size), _[e + 32 >> 2] = 4096, _[e + 36 >> 2] = t.blocks;
        var r = t.atime.getTime(), i = t.mtime.getTime(), c = t.ctime.getTime();
        return re[e + 40 >> 3] = BigInt(Math.floor(r / 1e3)), U[e + 48 >> 2] = r % 1e3 * 1e3 * 1e3, re[e + 56 >> 3] = BigInt(Math.floor(i / 1e3)), U[e + 64 >> 2] = i % 1e3 * 1e3 * 1e3, re[e + 72 >> 3] = BigInt(Math.floor(c / 1e3)), U[e + 80 >> 2] = c % 1e3 * 1e3 * 1e3, re[e + 88 >> 3] = BigInt(t.ino), 0;
      },
      writeStatFs(e, t) {
        _[e + 4 >> 2] = t.bsize, _[e + 40 >> 2] = t.bsize, _[e + 8 >> 2] = t.blocks, _[e + 12 >> 2] = t.bfree, _[e + 16 >> 2] = t.bavail, _[e + 20 >> 2] = t.files, _[e + 24 >> 2] = t.ffree, _[e + 28 >> 2] = t.fsid, _[e + 44 >> 2] = t.flags, _[e + 36 >> 2] = t.namelen;
      },
      doMsync(e, t, r, i, c) {
        if (!a.isFile(t.node.mode)) throw new a.ErrnoError(43);
        if (i & 2) return 0;
        var l = je.slice(e, e + r);
        a.msync(t, l, c, r, i);
      },
      getStreamFromFD(e) {
        var t = a.getStreamChecked(e);
        return t;
      },
      varargs: void 0,
      getStr(e) {
        var t = Fn(e);
        return t;
      }
    };
    function On(e, t) {
      try {
        return e = T.getStr(e), a.chmod(e, t), 0;
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function Rn(e, t, r, i, c) {
      try {
        t = T.getStr(t);
        var l = c & 256;
        return c = c & -257, t = T.calculateAt(e, t), (l ? a.lchown : a.chown)(t, r, i), 0;
      } catch (u) {
        if (typeof a > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    function Mn(e, t) {
      try {
        return T.writeStat(t, a.fstat(e));
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var Nn = 9007199254740992, zn = -9007199254740992, lt = (e) => e < zn || e > Nn ? NaN : Number(e);
    function Un(e, t) {
      t = lt(t);
      try {
        return isNaN(t) ? -61 : (a.ftruncate(e, t), 0);
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var _e = (e, t, r) => ur(e, je, t, r);
    function Hn(e, t) {
      try {
        if (t === 0) return -28;
        var r = a.cwd(), i = $e(r) + 1;
        return t < i ? -68 : (_e(r, e, t), i);
      } catch (c) {
        if (typeof a > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function Wn(e, t, r) {
      try {
        var i = T.getStreamFromFD(e);
        i.getdents || (i.getdents = a.readdir(i.path));
        for (var c = 280, l = 0, u = a.llseek(i, 0, 1), v = Math.floor(u / c), g = Math.min(i.getdents.length, v + Math.floor(r / c)), w = v; w < g; w++) {
          var P, O, A = i.getdents[w];
          if (A === ".") P = i.node.id, O = 4;
          else if (A === "..") {
            var S = a.lookupPath(i.path, {
              parent: true
            });
            P = S.node.id, O = 4;
          } else {
            var B;
            try {
              B = a.lookupNode(i.node, A);
            } catch (W) {
              if ((W == null ? void 0 : W.errno) === 28) continue;
              throw W;
            }
            P = B.id, O = a.isChrdev(B.mode) ? 2 : a.isDir(B.mode) ? 4 : a.isLink(B.mode) ? 10 : 8;
          }
          re[t + l >> 3] = BigInt(P), re[t + l + 8 >> 3] = BigInt((w + 1) * c), Ke[t + l + 16 >> 1] = 280, K[t + l + 18] = O, _e(A, t + l + 19, 256), l += c;
        }
        return a.llseek(i, w * c, 0), l;
      } catch (W) {
        if (typeof a > "u" || W.name !== "ErrnoError") throw W;
        return -W.errno;
      }
    }
    var mr = () => {
      var e = _[+T.varargs >> 2];
      return T.varargs += 4, e;
    }, Ve = mr;
    function qn(e, t, r) {
      T.varargs = r;
      try {
        var i = T.getStreamFromFD(e);
        switch (t) {
          case 21509:
            return i.tty ? 0 : -59;
          case 21505: {
            if (!i.tty) return -59;
            if (i.tty.ops.ioctl_tcgets) {
              var c = i.tty.ops.ioctl_tcgets(i), l = Ve();
              _[l >> 2] = c.c_iflag || 0, _[l + 4 >> 2] = c.c_oflag || 0, _[l + 8 >> 2] = c.c_cflag || 0, _[l + 12 >> 2] = c.c_lflag || 0;
              for (var u = 0; u < 32; u++) K[l + u + 17] = c.c_cc[u] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return i.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!i.tty) return -59;
            if (i.tty.ops.ioctl_tcsets) {
              for (var l = Ve(), v = _[l >> 2], g = _[l + 4 >> 2], w = _[l + 8 >> 2], P = _[l + 12 >> 2], O = [], u = 0; u < 32; u++) O.push(K[l + u + 17]);
              return i.tty.ops.ioctl_tcsets(i.tty, t, {
                c_iflag: v,
                c_oflag: g,
                c_cflag: w,
                c_lflag: P,
                c_cc: O
              });
            }
            return 0;
          }
          case 21519: {
            if (!i.tty) return -59;
            var l = Ve();
            return _[l >> 2] = 0, 0;
          }
          case 21520:
            return i.tty ? -28 : -59;
          case 21531: {
            var l = Ve();
            return a.ioctl(i, t, l);
          }
          case 21523: {
            if (!i.tty) return -59;
            if (i.tty.ops.ioctl_tiocgwinsz) {
              var A = i.tty.ops.ioctl_tiocgwinsz(i.tty), l = Ve();
              Ke[l >> 1] = A[0], Ke[l + 2 >> 1] = A[1];
            }
            return 0;
          }
          case 21524:
            return i.tty ? 0 : -59;
          case 21515:
            return i.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (S) {
        if (typeof a > "u" || S.name !== "ErrnoError") throw S;
        return -S.errno;
      }
    }
    function jn(e, t) {
      try {
        return e = T.getStr(e), T.writeStat(t, a.lstat(e));
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function Kn(e, t, r) {
      try {
        return t = T.getStr(t), t = T.calculateAt(e, t), a.mkdir(t, r, 0), 0;
      } catch (i) {
        if (typeof a > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function Gn(e, t, r, i) {
      try {
        t = T.getStr(t);
        var c = i & 256, l = i & 4096;
        return i = i & -6401, t = T.calculateAt(e, t, l), T.writeStat(r, c ? a.lstat(t) : a.stat(t));
      } catch (u) {
        if (typeof a > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    function $n(e, t, r, i) {
      T.varargs = i;
      try {
        t = T.getStr(t), t = T.calculateAt(e, t);
        var c = i ? mr() : 0;
        return a.open(t, r, c).fd;
      } catch (l) {
        if (typeof a > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    function Vn(e, t, r, i) {
      try {
        if (t = T.getStr(t), t = T.calculateAt(e, t), i <= 0) return -28;
        var c = a.readlink(t), l = Math.min(i, $e(c)), u = K[r + l];
        return _e(c, r, i + 1), K[r + l] = u, l;
      } catch (v) {
        if (typeof a > "u" || v.name !== "ErrnoError") throw v;
        return -v.errno;
      }
    }
    function Yn(e, t, r, i) {
      try {
        return t = T.getStr(t), i = T.getStr(i), t = T.calculateAt(e, t), i = T.calculateAt(r, i), a.rename(t, i), 0;
      } catch (c) {
        if (typeof a > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function Zn(e) {
      try {
        return e = T.getStr(e), a.rmdir(e), 0;
      } catch (t) {
        if (typeof a > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function Xn(e, t) {
      try {
        return e = T.getStr(e), T.writeStat(t, a.stat(e));
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function Qn(e, t, r) {
      try {
        return e = T.getStr(e), r = T.getStr(r), r = T.calculateAt(t, r), a.symlink(e, r), 0;
      } catch (i) {
        if (typeof a > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function Jn(e, t, r) {
      try {
        if (t = T.getStr(t), t = T.calculateAt(e, t), !r) a.unlink(t);
        else if (r === 512) a.rmdir(t);
        else return -28;
        return 0;
      } catch (i) {
        if (typeof a > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    var vr = (e) => U[e >> 2] + _[e + 4 >> 2] * 4294967296;
    function eo(e, t, r, i) {
      try {
        t = T.getStr(t), t = T.calculateAt(e, t, true);
        var c = Date.now(), l, u;
        if (!r) l = c, u = c;
        else {
          var v = vr(r), g = _[r + 8 >> 2];
          g == 1073741823 ? l = c : g == 1073741822 ? l = null : l = v * 1e3 + g / (1e3 * 1e3), r += 16, v = vr(r), g = _[r + 8 >> 2], g == 1073741823 ? u = c : g == 1073741822 ? u = null : u = v * 1e3 + g / (1e3 * 1e3);
        }
        return (u ?? l) !== null && a.utime(t, l, u), 0;
      } catch (w) {
        if (typeof a > "u" || w.name !== "ErrnoError") throw w;
        return -w.errno;
      }
    }
    var to = () => ct("");
    function ro(e, t) {
      e = lt(e);
      var r = new Date(e * 1e3);
      _[t >> 2] = r.getUTCSeconds(), _[t + 4 >> 2] = r.getUTCMinutes(), _[t + 8 >> 2] = r.getUTCHours(), _[t + 12 >> 2] = r.getUTCDate(), _[t + 16 >> 2] = r.getUTCMonth(), _[t + 20 >> 2] = r.getUTCFullYear() - 1900, _[t + 24 >> 2] = r.getUTCDay();
      var i = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0), c = (r.getTime() - i) / (1e3 * 60 * 60 * 24) | 0;
      _[t + 28 >> 2] = c;
    }
    var no = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), oo = [
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
    ], ao = [
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
    ], hr = (e) => {
      var t = no(e.getFullYear()), r = t ? oo : ao, i = r[e.getMonth()] + e.getDate() - 1;
      return i;
    };
    function io(e, t) {
      e = lt(e);
      var r = new Date(e * 1e3);
      _[t >> 2] = r.getSeconds(), _[t + 4 >> 2] = r.getMinutes(), _[t + 8 >> 2] = r.getHours(), _[t + 12 >> 2] = r.getDate(), _[t + 16 >> 2] = r.getMonth(), _[t + 20 >> 2] = r.getFullYear() - 1900, _[t + 24 >> 2] = r.getDay();
      var i = hr(r) | 0;
      _[t + 28 >> 2] = i, _[t + 36 >> 2] = -(r.getTimezoneOffset() * 60);
      var c = new Date(r.getFullYear(), 0, 1), l = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), u = c.getTimezoneOffset(), v = (l != u && r.getTimezoneOffset() == Math.min(u, l)) | 0;
      _[t + 32 >> 2] = v;
    }
    var so = function(e) {
      var t = (() => {
        var r = new Date(_[e + 20 >> 2] + 1900, _[e + 16 >> 2], _[e + 12 >> 2], _[e + 8 >> 2], _[e + 4 >> 2], _[e >> 2], 0), i = _[e + 32 >> 2], c = r.getTimezoneOffset(), l = new Date(r.getFullYear(), 0, 1), u = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), v = l.getTimezoneOffset(), g = Math.min(v, u);
        if (i < 0) _[e + 32 >> 2] = +(u != v && g == c);
        else if (i > 0 != (g == c)) {
          var w = Math.max(v, u), P = i > 0 ? g : w;
          r.setTime(r.getTime() + (P - c) * 6e4);
        }
        _[e + 24 >> 2] = r.getDay();
        var O = hr(r) | 0;
        _[e + 28 >> 2] = O, _[e >> 2] = r.getSeconds(), _[e + 4 >> 2] = r.getMinutes(), _[e + 8 >> 2] = r.getHours(), _[e + 12 >> 2] = r.getDate(), _[e + 16 >> 2] = r.getMonth(), _[e + 20 >> 2] = r.getYear();
        var A = r.getTime();
        return isNaN(A) ? -1 : A / 1e3;
      })();
      return BigInt(t);
    }, co = (e, t, r, i) => {
      var c = (/* @__PURE__ */ new Date()).getFullYear(), l = new Date(c, 0, 1), u = new Date(c, 6, 1), v = l.getTimezoneOffset(), g = u.getTimezoneOffset(), w = Math.max(v, g);
      U[e >> 2] = w * 60, _[t >> 2] = +(v != g);
      var P = (S) => {
        var B = S >= 0 ? "-" : "+", W = Math.abs(S), se = String(Math.floor(W / 60)).padStart(2, "0"), X = String(W % 60).padStart(2, "0");
        return `UTC${B}${se}${X}`;
      }, O = P(v), A = P(g);
      g < v ? (_e(O, r, 17), _e(A, i, 17)) : (_e(O, i, 17), _e(A, r, 17));
    }, lo = () => performance.now(), pr = () => Date.now(), uo = (e) => e >= 0 && e <= 3;
    function fo(e, t, r) {
      if (!uo(e)) return 28;
      var i;
      e === 0 ? i = pr() : i = lo();
      var c = Math.round(i * 1e3 * 1e3);
      return re[r >> 3] = BigInt(c), 0;
    }
    var gr = () => 2147483648, mo = () => gr(), vo = (e, t) => Math.ceil(e / t) * t, ho = (e) => {
      var t = st.buffer, r = (e - t.byteLength + 65535) / 65536 | 0;
      try {
        return st.grow(r), tr(), 1;
      } catch {
      }
    }, po = (e) => {
      var t = je.length;
      e >>>= 0;
      var r = gr();
      if (e > r) return false;
      for (var i = 1; i <= 4; i *= 2) {
        var c = t * (1 + 0.2 / i);
        c = Math.min(c, e + 100663296);
        var l = Math.min(r, vo(Math.max(e, c), 65536)), u = ho(l);
        if (u) return true;
      }
      return false;
    }, It = {}, go = () => L || "./this.program", Ye = () => {
      if (!Ye.strings) {
        var e = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", t = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: go()
        };
        for (var r in It) It[r] === void 0 ? delete t[r] : t[r] = It[r];
        var i = [];
        for (var r in t) i.push(`${r}=${t[r]}`);
        Ye.strings = i;
      }
      return Ye.strings;
    }, _o = (e, t) => {
      var r = 0, i = 0;
      for (var c of Ye()) {
        var l = t + r;
        U[e + i >> 2] = l, r += _e(c, l, 1 / 0) + 1, i += 4;
      }
      return 0;
    }, yo = (e, t) => {
      var r = Ye();
      U[e >> 2] = r.length;
      var i = 0;
      for (var c of r) i += $e(c) + 1;
      return U[t >> 2] = i, 0;
    }, wo = 0, bo = () => sr || wo > 0, Eo = (e) => {
      var _a3;
      D = e, bo() || ((_a3 = s.onExit) == null ? void 0 : _a3.call(s, e), b = true), N(e, new nr(e));
    }, _r = (e, t) => {
      D = e, Eo(e);
    }, So = _r;
    function ko(e) {
      try {
        var t = T.getStreamFromFD(e);
        return a.close(t), 0;
      } catch (r) {
        if (typeof a > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    function Lo(e, t) {
      try {
        var r = 0, i = 0, c = 0, l = T.getStreamFromFD(e), u = l.tty ? 2 : a.isDir(l.mode) ? 3 : a.isLink(l.mode) ? 7 : 4;
        return K[t] = u, Ke[t + 2 >> 1] = c, re[t + 8 >> 3] = BigInt(r), re[t + 16 >> 3] = BigInt(i), 0;
      } catch (v) {
        if (typeof a > "u" || v.name !== "ErrnoError") throw v;
        return v.errno;
      }
    }
    var xo = (e, t, r, i) => {
      for (var c = 0, l = 0; l < r; l++) {
        var u = U[t >> 2], v = U[t + 4 >> 2];
        t += 8;
        var g = a.read(e, K, u, v, i);
        if (g < 0) return -1;
        if (c += g, g < v) break;
      }
      return c;
    };
    function Co(e, t, r, i) {
      try {
        var c = T.getStreamFromFD(e), l = xo(c, t, r);
        return U[i >> 2] = l, 0;
      } catch (u) {
        if (typeof a > "u" || u.name !== "ErrnoError") throw u;
        return u.errno;
      }
    }
    function Ao(e, t, r, i) {
      t = lt(t);
      try {
        if (isNaN(t)) return 61;
        var c = T.getStreamFromFD(e);
        return a.llseek(c, t, r), re[i >> 3] = BigInt(c.position), c.getdents && t === 0 && r === 0 && (c.getdents = null), 0;
      } catch (l) {
        if (typeof a > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var To = (e, t, r, i) => {
      for (var c = 0, l = 0; l < r; l++) {
        var u = U[t >> 2], v = U[t + 4 >> 2];
        t += 8;
        var g = a.write(e, K, u, v, i);
        if (g < 0) return -1;
        if (c += g, g < v) break;
      }
      return c;
    };
    function Bo(e, t, r, i) {
      try {
        var c = T.getStreamFromFD(e), l = To(c, t, r);
        return U[i >> 2] = l, 0;
      } catch (u) {
        if (typeof a > "u" || u.name !== "ErrnoError") throw u;
        return u.errno;
      }
    }
    var Io = (e) => {
      if (e instanceof nr || e == "unwind") return D;
      N(1, e);
    }, yr = (e) => br(e), Po = (e) => {
      var t = $e(e) + 1, r = yr(t);
      return _e(e, r, t), r;
    };
    a.createPreloadedFile = In, a.staticInit(), C.doesNotExistError = new a.ErrnoError(44), C.doesNotExistError.stack = "<generic error, no stack>", h && E.staticInit(), s.noExitRuntime && (sr = s.noExitRuntime), s.preloadPlugins && (fr = s.preloadPlugins), s.print && (ke = s.print), s.printErr && (me = s.printErr), s.wasmBinary && (ve = s.wasmBinary), s.arguments && (y = s.arguments), s.thisProgram && (L = s.thisProgram), s.callMain = Pt, s.FS = a, s.NODEFS = E, s.WORKERFS = q;
    var wr, br;
    function Do(e) {
      s._main = wr = e.__main_argc_argv, e._emscripten_stack_restore, br = e._emscripten_stack_alloc, e.emscripten_stack_get_current;
    }
    var Er = {
      __cxa_throw: Ln,
      __syscall_chmod: On,
      __syscall_fchownat: Rn,
      __syscall_fstat64: Mn,
      __syscall_ftruncate64: Un,
      __syscall_getcwd: Hn,
      __syscall_getdents64: Wn,
      __syscall_ioctl: qn,
      __syscall_lstat64: jn,
      __syscall_mkdirat: Kn,
      __syscall_newfstatat: Gn,
      __syscall_openat: $n,
      __syscall_readlinkat: Vn,
      __syscall_renameat: Yn,
      __syscall_rmdir: Zn,
      __syscall_stat64: Xn,
      __syscall_symlinkat: Qn,
      __syscall_unlinkat: Jn,
      __syscall_utimensat: eo,
      _abort_js: to,
      _gmtime_js: ro,
      _localtime_js: io,
      _mktime_js: so,
      _tzset_js: co,
      clock_time_get: fo,
      emscripten_date_now: pr,
      emscripten_get_heap_max: mo,
      emscripten_resize_heap: po,
      environ_get: _o,
      environ_sizes_get: yo,
      exit: So,
      fd_close: ko,
      fd_fdstat_get: Lo,
      fd_read: Co,
      fd_seek: Ao,
      fd_write: Bo
    }, Ze = await bn();
    function Pt(e = []) {
      var t = wr;
      e.unshift(L);
      var r = e.length, i = yr((r + 1) * 4), c = i;
      e.forEach((u) => {
        U[c >> 2] = Po(u), c += 4;
      }), U[c >> 2] = 0;
      try {
        var l = t(r, i);
        return _r(l, true), l;
      } catch (u) {
        return Io(u);
      }
    }
    function Dt(e = y) {
      if (Ae > 0) {
        Ge = Dt;
        return;
      }
      if (fn(), Ae > 0) {
        Ge = Dt;
        return;
      }
      function t() {
        var _a3;
        if (s.calledRun = true, !b) {
          mn(), Qt == null ? void 0 : Qt(s), (_a3 = s.onRuntimeInitialized) == null ? void 0 : _a3.call(s);
          var r = s.noInitialRun || false;
          r || Pt(e), vn();
        }
      }
      s.setStatus ? (s.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => s.setStatus(""), 1), t();
      }, 1)) : t();
    }
    function Fo() {
      if (s.preInit) for (typeof s.preInit == "function" && (s.preInit = [
        s.preInit
      ]); s.preInit.length > 0; ) s.preInit.shift()();
    }
    return Fo(), Dt(), s.FS = a, s.NODEFS = E, s.WORKERFS = q, s.callMain = Pt, er ? o = s : o = new Promise((e, t) => {
      Qt = e, Jt = t;
    }), o;
  };
  const wa = "/assets/7zz-Dnj2A7zV.wasm";
  let oe = null, pt = false, gt = false, Je = null;
  function Cr(n) {
    const o = n.toLowerCase();
    (o.includes("password") || o.includes("encrypted")) && (gt = true);
  }
  async function ba(n) {
    Je = n || null;
    const o = (d) => {
      Cr(d), Je && Je(d + `
`);
    }, s = (d) => {
      Cr(d), Je && Je("ERROR: " + d + `
`);
    };
    oe ? (oe.print = o, oe.printErr = s) : oe = await ya({
      locateFile: (d) => d.endsWith(".wasm") ? wa : d,
      print: o,
      printErr: s,
      stdin: () => (pt = true, null)
    }), pt = false, gt = false;
  }
  function Ea(n) {
    pt = false, gt = false;
    let o = 0;
    try {
      oe.callMain(n);
    } catch (s) {
      s && typeof s == "object" && s.name === "ExitStatus" && typeof s.status == "number" ? o = s.status : o = -1;
    }
    return [
      o,
      gt || pt ? 1 : 0
    ];
  }
  function Sa(n, o) {
    oe.FS.writeFile(n, o);
  }
  function ka(n) {
    return oe.FS.readFile(n);
  }
  function La(n) {
    return oe.FS.readdir(n).filter((o) => o !== "." && o !== "..");
  }
  function xa(n) {
    oe.FS.mkdirTree(n);
  }
  function Ca(n) {
    try {
      oe.FS.unlink(n);
    } catch {
    }
  }
  function Aa(n) {
    return oe.FS.isDir(oe.FS.stat(n).mode);
  }
  function Gr(n, o, s, d) {
    const m = we(o, x.__wbindgen_malloc, x.__wbindgen_realloc), h = Z;
    var p = fe(s) ? 0 : we(s, x.__wbindgen_malloc, x.__wbindgen_realloc), y = Z;
    return x.compress_files(n, m, h, p, y, fe(d) ? 0 : Ie(d));
  }
  function Ta(n, o, s) {
    let d, m;
    try {
      const y = we(n, x.__wbindgen_malloc, x.__wbindgen_realloc), L = Z, N = we(o, x.__wbindgen_malloc, x.__wbindgen_realloc), j = Z, R = we(s, x.__wbindgen_malloc, x.__wbindgen_realloc), M = Z, V = x.convert(y, L, N, j, R, M);
      var h = V[0], p = V[1];
      if (V[3]) throw h = 0, p = 0, Vr(V[2]);
      return d = h, m = p, ue(h, p);
    } finally {
      x.__wbindgen_free(d, m, 1);
    }
  }
  function Ar(n, o, s, d) {
    const m = $r(n, x.__wbindgen_malloc), h = Z, p = we(o, x.__wbindgen_malloc, x.__wbindgen_realloc), y = Z;
    var L = fe(s) ? 0 : we(s, x.__wbindgen_malloc, x.__wbindgen_realloc), N = Z;
    return x.extract_archive(m, h, p, y, L, N, fe(d) ? 0 : Ie(d));
  }
  function Ba() {
    return {
      __proto__: null,
      "./onius_wasm_bg.js": {
        __proto__: null,
        __wbg_String_8564e559799eccda: function(o, s) {
          const d = String(s), m = we(d, x.__wbindgen_malloc, x.__wbindgen_realloc), h = Z;
          Le().setInt32(o + 4, h, true), Le().setInt32(o + 0, m, true);
        },
        __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(o) {
          return typeof o == "function";
        },
        __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(o) {
          return o === void 0;
        },
        __wbg___wbindgen_number_get_2e0e7dee9f701a71: function(o, s) {
          const d = s, m = typeof d == "number" ? d : void 0;
          Le().setFloat64(o + 8, fe(m) ? 0 : m, true), Le().setInt32(o + 0, !fe(m), true);
        },
        __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function(o, s) {
          const d = s, m = typeof d == "string" ? d : void 0;
          var h = fe(m) ? 0 : we(m, x.__wbindgen_malloc, x.__wbindgen_realloc), p = Z;
          Le().setInt32(o + 4, p, true), Le().setInt32(o + 0, h, true);
        },
        __wbg___wbindgen_throw_41e9ee4f547fc59a: function(o, s) {
          throw new Error(ue(o, s));
        },
        __wbg__wbg_cb_unref_dcc1a90847f04c41: function(o) {
          o._wbg_cb_unref();
        },
        __wbg_call_187d372bd5fdd4aa: function() {
          return Ot(function(o, s, d) {
            return o.call(s, d);
          }, arguments);
        },
        __wbg_forEach_7ad975c8e42636ed: function(o, s, d) {
          try {
            var m = {
              a: s,
              b: d
            }, h = (p, y) => {
              const L = m.a;
              m.a = 0;
              try {
                return Pa(L, m.b, p, y);
              } finally {
                m.a = L;
              }
            };
            o.forEach(h);
          } finally {
            m.a = 0;
          }
        },
        __wbg_from_296ca31f8d0f1c52: function(o) {
          return Array.from(o);
        },
        __wbg_get_6c896e0571ddae51: function(o, s) {
          return o[s >>> 0];
        },
        __wbg_get_unchecked_288889d017702237: function(o, s) {
          return o[s >>> 0];
        },
        __wbg_initSevenZip_0e289dfece0b1d7c: function() {
          return Ot(function(o) {
            return ba(o);
          }, arguments);
        },
        __wbg_length_7f3c00c40364105e: function(o) {
          return o.length;
        },
        __wbg_length_d4bdea10311bd9cf: function(o) {
          return o.length;
        },
        __wbg_new_1dbf7428bba60a42: function(o) {
          return new Uint8Array(o);
        },
        __wbg_new_343a093a3c2ffb4e: function(o, s) {
          return new Error(ue(o, s));
        },
        __wbg_new_617a8cdb8bb1130e: function() {
          return new Object();
        },
        __wbg_new_ee2291f50781bf1d: function() {
          return new Array();
        },
        __wbg_new_typed_b01cb72a8af741a3: function(o, s) {
          try {
            var d = {
              a: o,
              b: s
            }, m = (p, y) => {
              const L = d.a;
              d.a = 0;
              try {
                return Da(L, d.b, p, y);
              } finally {
                d.a = L;
              }
            };
            return new Promise(m);
          } finally {
            d.a = 0;
          }
        },
        __wbg_now_aa4ccb83129e9e55: function() {
          return Date.now();
        },
        __wbg_prototypesetcall_bc27214492979395: function(o, s, d) {
          Uint8Array.prototype.set.call(ut(o, s), d);
        },
        __wbg_push_2baf45db356cf468: function(o, s) {
          return o.push(s);
        },
        __wbg_queueMicrotask_9833f9a49df95a49: function(o) {
          return o.queueMicrotask;
        },
        __wbg_queueMicrotask_a72f977e97f23c5f: function(o) {
          queueMicrotask(o);
        },
        __wbg_resolve_0076e10020304ede: function(o) {
          return Promise.resolve(o);
        },
        __wbg_set_6be42768c690e380: function(o, s, d) {
          o[s] = d;
        },
        __wbg_set_bea140a88be9b277: function(o, s, d) {
          o[s >>> 0] = d;
        },
        __wbg_set_name_2c630595dc90a7aa: function(o, s, d) {
          o.name = ue(s, d);
        },
        __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
          const o = typeof global > "u" ? null : global;
          return fe(o) ? 0 : Ie(o);
        },
        __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
          const o = typeof globalThis > "u" ? null : globalThis;
          return fe(o) ? 0 : Ie(o);
        },
        __wbg_static_accessor_SELF_0b583911f537483a: function() {
          const o = typeof self > "u" ? null : self;
          return fe(o) ? 0 : Ie(o);
        },
        __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
          const o = typeof window > "u" ? null : window;
          return fe(o) ? 0 : Ie(o);
        },
        __wbg_szCallMain_46f5f073c91fc613: function() {
          return Ot(function(o) {
            return Ea(o);
          }, arguments);
        },
        __wbg_szIsDirPath_9ae3968319bb734f: function(o, s) {
          return Aa(ue(o, s));
        },
        __wbg_szMkdirTree_6d42faec119d49f4: function(o, s) {
          xa(ue(o, s));
        },
        __wbg_szReadDir_7cf9b0d47ac323e3: function(o, s) {
          return La(ue(o, s));
        },
        __wbg_szReadFile_6b0d1d292b543181: function(o, s, d) {
          const m = ka(ue(s, d)), h = $r(m, x.__wbindgen_malloc), p = Z;
          Le().setInt32(o + 4, p, true), Le().setInt32(o + 0, h, true);
        },
        __wbg_szUnlink_0753de6bf3645c4b: function(o, s) {
          Ca(ue(o, s));
        },
        __wbg_szWriteFile_c441463b375356ee: function(o, s, d, m) {
          Sa(ue(o, s), ut(d, m));
        },
        __wbg_then_c949d5a25a4e78f8: function(o, s, d) {
          return o.then(s, d);
        },
        __wbg_then_e71170d78fcf8954: function(o, s) {
          return o.then(s);
        },
        __wbindgen_generic_0000000000000001: function(o, s) {
          return Fa(o, s, Ia);
        },
        __wbindgen_generic_0000000000000002: function(o, s) {
          return ut(o, s);
        },
        __wbindgen_generic_0000000000000003: function(o, s) {
          return ue(o, s);
        },
        __wbindgen_generic_0000000000000004: function(o, s) {
          var d = ut(o, s).slice();
          return x.__wbindgen_free(o, s * 1, 1), d;
        },
        __wbindgen_init_externref_table: function() {
          const o = x.__wbindgen_externrefs, s = o.grow(4);
          o.set(0, void 0), o.set(s + 0, void 0), o.set(s + 1, null), o.set(s + 2, true), o.set(s + 3, false);
        }
      }
    };
  }
  function Ia(n, o, s) {
    const d = x.wasm_bindgen_63a46d96b29ae508___convert__closures_____invoke___wasm_bindgen_63a46d96b29ae508___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_63a46d96b29ae508___JsError___true_(n, o, s);
    if (d[1]) throw Vr(d[0]);
  }
  function Pa(n, o, s, d) {
    x.wasm_bindgen_63a46d96b29ae508___convert__closures_____invoke___js_sys_9a9f93f03cc98e8d___Function_fn_wasm_bindgen_63a46d96b29ae508___JsValue_____wasm_bindgen_63a46d96b29ae508___sys__Undefined___js_sys_9a9f93f03cc98e8d___Function_fn_wasm_bindgen_63a46d96b29ae508___JsValue_____wasm_bindgen_63a46d96b29ae508___sys__Undefined_______true_(n, o, s, d);
  }
  function Da(n, o, s, d) {
    x.wasm_bindgen_63a46d96b29ae508___convert__closures_____invoke___js_sys_9a9f93f03cc98e8d___Function_fn_wasm_bindgen_63a46d96b29ae508___JsValue_____wasm_bindgen_63a46d96b29ae508___sys__Undefined___js_sys_9a9f93f03cc98e8d___Function_fn_wasm_bindgen_63a46d96b29ae508___JsValue_____wasm_bindgen_63a46d96b29ae508___sys__Undefined_______true__4(n, o, s, d);
  }
  function Ie(n) {
    const o = x.__externref_table_alloc();
    return x.__wbindgen_externrefs.set(o, n), o;
  }
  const Tr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => x.__wbindgen_destroy_closure(n.a, n.b));
  function ut(n, o) {
    return n = n >>> 0, ze().subarray(n / 1, n / 1 + o);
  }
  let Be = null;
  function Le() {
    return (Be === null || Be.buffer.detached === true || Be.buffer.detached === void 0 && Be.buffer !== x.memory.buffer) && (Be = new DataView(x.memory.buffer)), Be;
  }
  function ue(n, o) {
    return Ra(n >>> 0, o);
  }
  let et = null;
  function ze() {
    return (et === null || et.byteLength === 0) && (et = new Uint8Array(x.memory.buffer)), et;
  }
  function Ot(n, o) {
    try {
      return n.apply(this, o);
    } catch (s) {
      const d = Ie(s);
      x.__wbindgen_exn_store(d);
    }
  }
  function fe(n) {
    return n == null;
  }
  function Fa(n, o, s) {
    const d = {
      a: n,
      b: o,
      cnt: 1
    }, m = (...h) => {
      d.cnt++;
      const p = d.a;
      d.a = 0;
      try {
        return s(p, d.b, ...h);
      } finally {
        d.a = p, m._wbg_cb_unref();
      }
    };
    return m._wbg_cb_unref = () => {
      --d.cnt === 0 && (x.__wbindgen_destroy_closure(d.a, d.b), d.a = 0, Tr.unregister(d));
    }, Tr.register(m, d, d), m;
  }
  function $r(n, o) {
    const s = o(n.length * 1, 1) >>> 0;
    return ze().set(n, s / 1), Z = n.length, s;
  }
  function we(n, o, s) {
    if (s === void 0) {
      const y = tt.encode(n), L = o(y.length, 1) >>> 0;
      return ze().subarray(L, L + y.length).set(y), Z = y.length, L;
    }
    let d = n.length, m = o(d, 1) >>> 0;
    const h = ze();
    let p = 0;
    for (; p < d; p++) {
      const y = n.charCodeAt(p);
      if (y > 127) break;
      h[m + p] = y;
    }
    if (p !== d) {
      p !== 0 && (n = n.slice(p)), m = s(m, d, d = p + n.length * 3, 1) >>> 0;
      const y = ze().subarray(m + p, m + d), L = tt.encodeInto(n, y);
      p += L.written, m = s(m, d, p, 1) >>> 0;
    }
    return Z = p, m;
  }
  function Vr(n) {
    const o = x.__wbindgen_externrefs.get(n);
    return x.__externref_table_dealloc(n), o;
  }
  let vt = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  vt.decode();
  const Oa = 2146435072;
  let Rt = 0;
  function Ra(n, o) {
    return Rt += o, Rt >= Oa && (vt = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), vt.decode(), Rt = o), vt.decode(ze().subarray(n, n + o));
  }
  const tt = new TextEncoder();
  "encodeInto" in tt || (tt.encodeInto = function(n, o) {
    const s = tt.encode(n);
    return o.set(s), {
      read: n.length,
      written: s.length
    };
  });
  let Z = 0, x;
  function Ma(n, o) {
    return x = n.exports, Be = null, et = null, x.__wbindgen_start(), x;
  }
  async function Na(n, o) {
    if (typeof Response == "function" && n instanceof Response) {
      if (!n.ok) throw new Error(`failed to fetch Wasm: ${n.status} ${n.statusText} fetching '${n.url}'`);
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(n, o);
      } catch (m) {
        if (s(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", m);
        else throw m;
      }
      const d = await n.arrayBuffer();
      return await WebAssembly.instantiate(d, o);
    } else {
      const d = await WebAssembly.instantiate(n, o);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: n
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
  async function Yr(n) {
    if (x !== void 0) return x;
    n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/assets/onius_wasm_bg-BDl7CO-H.wasm", import.meta.url));
    const o = Ba();
    (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
    const { instance: s, module: d } = await Na(await n, o);
    return Ma(s);
  }
  const za = {
    contentFile: "base64-content.html",
    title: "Onius \u2014 " + ee.base64.name
  }, Ua = Yr(), Br = {
    text: "plain",
    base64: "base64",
    base64url: "base64url",
    hex: "hex"
  };
  let ge = "text", Pe = "base64";
  async function Ha() {
    await Ua;
  }
  async function Wa() {
    await Ha(), ye("from", "text"), ye("to", "base64"), Kt(ee.base64.name, ee.base64.icon, ee.base64.slug, "base64"), qa();
  }
  function zt(n, o, s) {
    try {
      return Ta(n, Br[o] ?? o, Br[s] ?? s);
    } catch (d) {
      throw new Error(typeof d == "string" ? d : d && d.message || String(d));
    }
  }
  function ye(n, o) {
    n === "from" && (ge = o), n === "to" && (Pe = o);
  }
  function Zr() {
    const n = ge;
    ge = Pe, Pe = n;
  }
  function Ut() {
    const n = (y) => document.getElementById(y), o = n("input-text"), s = n("output-text"), d = n("empty-state"), m = n("char-count"), h = n("image-upload-area"), p = n("file-name");
    o && (o.value = "", o.classList.remove("hidden")), h && h.classList.add("hidden"), p && (p.textContent = ""), s && (s.value = ""), d && d.classList.remove("opacity-0"), m && (m.textContent = "0 " + H("base64.chars"));
  }
  function Xr() {
    const n = document.getElementById("output-text");
    if (n && n.value && !n.value.startsWith("Error:")) {
      const o = document.getElementById("copy-btn"), s = o.innerHTML;
      o.innerHTML = '<span class="material-symbols-outlined text-[18px]">done</span> ' + H("base64.copiedBtn"), o.classList.add("bg-green-600"), navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(n.value) : (n.select(), document.execCommand("copy")), setTimeout(() => {
        o.innerHTML = s, o.classList.remove("bg-green-600");
      }, 2e3);
    }
  }
  function Qr(n) {
    return new Promise((o, s) => {
      const d = new FileReader();
      d.onload = () => o(d.result), d.onerror = s, d.readAsDataURL(n);
    });
  }
  function qa() {
    const n = (b) => document.getElementById(b), o = n("input-text"), s = n("output-text"), d = n("empty-state"), m = n("char-count"), h = n("output-chars"), p = n("swap-btn"), y = n("image-upload-area"), L = n("image-input"), N = n("image-drop-zone"), j = n("file-name");
    let R = null;
    function M(b, D) {
      document.querySelectorAll(`.format-pill[data-group="${b}"]`).forEach((z) => {
        z.classList.toggle("active", z.dataset.format === D);
      });
    }
    function V() {
      if (ge === "image") m.textContent = j.textContent || "";
      else {
        const b = o.value.length, D = new TextEncoder().encode(o.value).length;
        m.textContent = b + " " + H("base64.chars") + (b !== D ? " \xB7 " + D + " " + H("base64.bytes") : "");
      }
    }
    function ie() {
      const b = s.value, D = b.length, z = new TextEncoder().encode(b).length;
      h.textContent = D + " " + H("base64.chars") + (D !== z ? " \xB7 " + z + " " + H("base64.bytes") : "");
    }
    function I() {
      const b = ge, D = Pe;
      if (V(), b === "image") {
        if (!R) {
          s.value = "", d.classList.remove("opacity-0"), ie();
          return;
        }
        const z = R.split(",")[1];
        try {
          s.value = D === "base64" ? z : zt(z, "base64", D), d.classList.add("opacity-0");
        } catch (he) {
          s.value = "Error: " + he.message;
        }
        ie();
        return;
      }
      if (!o.value) {
        s.value = "", d.classList.remove("opacity-0"), ie();
        return;
      }
      d.classList.add("opacity-0");
      try {
        s.value = zt(o.value, b, D);
      } catch (z) {
        s.value = "Error: " + z.message;
      }
      ie();
    }
    function ke(b) {
      Ut(), R = null, b ? (o.classList.add("hidden"), y.classList.remove("hidden")) : (o.classList.remove("hidden"), y.classList.add("hidden"));
    }
    function me(b) {
      const D = new FileReader();
      ge === "hex" ? (D.onload = () => {
        const z = new Uint8Array(D.result);
        o.value = Array.from(z).map((he) => he.toString(16).padStart(2, "0")).join(""), I();
      }, D.readAsArrayBuffer(b)) : (D.onload = () => {
        o.value = D.result, I();
      }, D.readAsText(b));
    }
    function ve() {
      document.querySelectorAll('.format-pill[data-group="to"]').forEach((b) => {
        ge === "image" && b.dataset.format === "text" ? (b.classList.add("opacity-40", "cursor-not-allowed"), Pe === "text" && (ye("to", "base64"), M("to", "base64"))) : b.classList.remove("opacity-40", "cursor-not-allowed");
      });
    }
    document.querySelectorAll(".format-pill").forEach((b) => {
      b.addEventListener("click", () => {
        const D = b.dataset.group, z = b.dataset.format;
        D === "from" ? (ye("from", z), M("from", z), ke(z === "image"), ve()) : (ye("to", z), M("to", z)), I();
      });
    }), p.addEventListener("click", () => {
      if (ge === "image") return;
      const b = s.value.startsWith("Error:") ? "" : s.value;
      Zr(), M("from", ge), M("to", Pe), ve(), o.value = b, I();
    }), o.addEventListener("input", I), o.addEventListener("dragover", (b) => {
      b.preventDefault(), o.classList.add("ring-2", "ring-primary");
    }), [
      "dragleave",
      "dragend"
    ].forEach((b) => o.addEventListener(b, () => o.classList.remove("ring-2", "ring-primary"))), o.addEventListener("drop", (b) => {
      b.preventDefault(), o.classList.remove("ring-2", "ring-primary");
      const D = b.dataTransfer.files[0];
      if (D) {
        if (D.type.startsWith("image/")) {
          ye("from", "image"), M("from", "image"), ke(true), ve(), L.files = b.dataTransfer.files, L.dispatchEvent(new Event("change"));
          return;
        }
        me(D);
      }
    }), L.addEventListener("change", async () => {
      const b = L.files[0];
      b && (j.textContent = b.name, R = await Qr(b), V(), I());
    }), N.addEventListener("click", () => L.click()), N.addEventListener("dragover", (b) => {
      b.preventDefault(), N.classList.add("drag-over");
    }), N.addEventListener("dragleave", () => N.classList.remove("drag-over")), N.addEventListener("drop", (b) => {
      b.preventDefault(), N.classList.remove("drag-over");
      const D = b.dataTransfer.files[0];
      D && D.type.startsWith("image/") && (L.files = b.dataTransfer.files, L.dispatchEvent(new Event("change")));
    }), n("clear-btn").addEventListener("click", () => {
      Ut(), L && (L.value = ""), j.textContent = "", R = null, V(), ie();
    }), n("copy-btn").addEventListener("click", Xr), document.querySelectorAll(".example-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const D = b.dataset.from, z = b.dataset.to, he = b.dataset.input;
        ye("from", D), ye("to", z), M("from", D), M("to", z), ke(false), ve(), o.value = he, I();
      });
    });
  }
  const ja = Object.freeze(Object.defineProperty({
    __proto__: null,
    clearAll: Ut,
    convert: zt,
    copyOutput: Xr,
    get fromFormat() {
      return ge;
    },
    init: Wa,
    meta: za,
    readImageAsDataURL: Qr,
    swapFormats: Zr,
    switchFormat: ye,
    get toFormat() {
      return Pe;
    }
  }, Symbol.toStringTag, {
    value: "Module"
  })), Ka = {
    contentFile: "archiver-content.html",
    title: "Onius \u2014 " + ee.archiver.name
  }, Ga = Yr();
  async function $a() {
    await Ga;
  }
  async function Va() {
    await $a(), Kt(ee.archiver.name, ee.archiver.icon, ee.archiver.slug, "archiver"), Za();
  }
  var $ = [], te = "compress", Q = null, Y = [], qe = "", J = false, xe = "", ae = "idle", bt = [], Ee = null, f = {}, Ir = {
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
  }, Ya = {
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
  function Za() {
    $ = [], te = "compress", Q = null, Y = [], qe = "", J = false, xe = "", ae = "idle", bt = [], Ee = null, Xa(), f.dropZone && (Qa(), Ja(), ei(), si(), f.formatSelect.dispatchEvent(new Event("change")), ci(), li(), oi(), ai(), ii(), di(), ui(), fi(), mi(), vi(), hi(), pi(), yt());
  }
  function Xa() {
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
      compressPasswordReveal: document.getElementById("compress-password-reveal"),
      compressPasswordConfirmReveal: document.getElementById("compress-password-confirm-reveal"),
      compressBtn: document.getElementById("compress-btn"),
      passwordModal: document.getElementById("password-modal"),
      modalPassword: document.getElementById("modal-password"),
      modalPasswordReveal: document.getElementById("modal-password-reveal"),
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
  function Qa() {
    !("showDirectoryPicker" in window) && f.browserWarning && f.browserWarning.classList.remove("hidden");
  }
  function Ja() {
    f.modeCompress.addEventListener("click", function() {
      Pr("compress");
    }), f.modeExtract.addEventListener("click", function() {
      Pr("extract");
    });
  }
  function Pr(n) {
    if (n !== te) {
      var o = te;
      te = n, o === "extract" ? (Q = null, Y = [], qe = "", f.archiveInspector.classList.add("hidden"), f.dropZone.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All") : $ = [], ae !== "running" && Ce();
      var s = function(m) {
        m.classList.add("bg-primary", "text-on-primary"), m.classList.remove("text-on-surface-variant", "hover:text-on-surface");
      }, d = function(m) {
        m.classList.remove("bg-primary", "text-on-primary"), m.classList.add("text-on-surface-variant", "hover:text-on-surface");
      };
      n === "compress" ? (s(f.modeCompress), d(f.modeExtract), f.compressDropContent.classList.remove("hidden"), f.extractDropContent.classList.add("hidden"), f.compressControls.classList.remove("hidden"), f.extractControls.classList.add("hidden"), f.leftCard.classList.remove("justify-center"), f.dropZone.classList.remove("flex-1"), f.dropZone.classList.add("min-h-[200px]"), f.queueSectionTitle.textContent = "Queued Files", f.fileCountBadge.classList.remove("hidden"), f.fileListEmptyTitle.textContent = "No files added yet", f.fileListEmptySubtitle.textContent = "Drop files above or click to browse", f.fileListEmptyIcon.textContent = "inventory_2", f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All", it()) : (s(f.modeExtract), d(f.modeCompress), f.compressDropContent.classList.add("hidden"), f.extractDropContent.classList.remove("hidden"), f.compressControls.classList.add("hidden"), f.extractControls.classList.remove("hidden"), f.leftCard.classList.add("justify-center"), f.dropZone.classList.add("flex-1"), f.dropZone.classList.remove("min-h-[200px]"), f.queueSectionTitle.textContent = "Extracted Files", f.fileCountBadge.classList.add("hidden"), f.fileListEmptyTitle.textContent = "No extracted files", f.fileListEmptySubtitle.textContent = "Start by dropping archives to the left", f.fileListEmptyIcon.textContent = "unarchive", Et()), yt();
    }
  }
  function ei() {
    [
      "dragenter",
      "dragover",
      "dragleave",
      "drop"
    ].forEach(function(n) {
      f.dropZone.addEventListener(n, function(o) {
        o.preventDefault(), o.stopPropagation();
      }, false);
    }), [
      "dragenter",
      "dragover"
    ].forEach(function(n) {
      f.dropZone.addEventListener(n, function() {
        f.dropZone.classList.add("drag-over");
      }, false);
    }), [
      "dragleave",
      "drop"
    ].forEach(function(n) {
      f.dropZone.addEventListener(n, function() {
        f.dropZone.classList.remove("drag-over");
      }, false);
    }), f.dropZone.addEventListener("drop", function(n) {
      var o = n.dataTransfer.files;
      o.length > 0 && ft(o);
    }), f.browseFilesBtn.addEventListener("click", function(n) {
      n.stopPropagation(), te === "compress" ? f.fileInput.click() : f.archiveInput.click();
    }), f.browseFolderBtn.addEventListener("click", function(n) {
      n.stopPropagation(), f.folderInput.click();
    }), f.browseArchiveBtn.addEventListener("click", function(n) {
      n.stopPropagation(), f.archiveInput.click();
    }), f.fileInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (ft(this.files), this.value = "");
    }), f.folderInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (ft(this.files), this.value = "");
    }), f.archiveInput.addEventListener("change", function() {
      this.files && this.files.length > 0 && (ft(this.files), this.value = "");
    });
  }
  function ft(n) {
    if (te === "extract") {
      if (ae === "running") return;
      ti(n[0]);
      return;
    }
    for (var o = [], s = 0; s < n.length; s++) {
      var d = n[s], m = d.webkitRelativePath || d.name, h = Vt(d.name);
      o.push({
        id: Date.now() + "-" + s + "-" + Math.random().toString(36).slice(2, 6),
        name: d.name,
        path: m,
        size: d.size,
        type: d.type || "application/octet-stream",
        ext: h,
        lastModified: d.lastModified,
        file: d
      });
    }
    $ = $.concat(o), it();
  }
  function ti(n) {
    Q = n, Y = [], qe = "";
    var o = Vt(n.name);
    f.dropZone.classList.add("hidden"), f.archiveInspector.classList.remove("hidden"), f.inspectorFilename.textContent = n.name, f.inspectorMeta.textContent = (Ya[o] || o.toUpperCase()) + " \xB7 " + Se(n.size), f.clearAllBtn.disabled = false, f.clearAllBtn.textContent = "Remove archive", Et(), $t(null);
  }
  async function $t(n) {
    if (Q) {
      var o = Q;
      J = false, rn("extract"), ne("Starting extraction: " + o.name), n && ne("Password provided"), Ue("Opening archive..."), De(10);
      var s = function(p) {
        var y = String(p).trim();
        y && (ne(y), an(y));
      };
      try {
        var d = await o.arrayBuffer();
        if (J || Q !== o) return;
        Ue("Extracting..."), De(35);
        for (var m = await Ar(new Uint8Array(d), o.name, n || null, s); !J && m.length === 1 && /\.tar$/i.test(m[0].name); ) ne("Detected nested TAR, extracting further: " + m[0].name), Ue("Extracting nested archive..."), m = await Ar(m[0].data, m[0].name, null, s);
        if (J || Q !== o) return;
        Y = m, qe = n || "", ri(), De(100), ne("Done: " + m.length + " file" + (m.length !== 1 ? "s" : "") + " extracted"), nn({
          mode: "extract",
          extracted: m.length
        });
      } catch (p) {
        if (J || Q !== o) return;
        if (p && p.name === "PasswordRequiredError") {
          ne("Password required"), Ce(), ni(!!n);
          return;
        }
        var h = p && p.message || String(p);
        ne("Error: " + h), Et(), on(h);
      }
    }
  }
  function ri() {
    if (f.fileList.innerHTML = "", f.archiveAnalyzing.classList.add("hidden"), Y.length === 0) {
      f.fileList.appendChild(f.fileListEmpty), f.fileCountBadge.textContent = "0 files", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B";
      return;
    }
    var n = 0;
    Y.forEach(function(d) {
      var m = d.data.length, h = Vt(d.name);
      n += m;
      var p = document.createElement("div");
      p.className = "p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors", p.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + en(h) + '"><span class="material-symbols-outlined text-[20px]">' + Jr(h) + '</span></div><div class="flex-1 min-w-0"><p class="text-body-sm font-bold text-on-surface truncate">' + at(d.name) + '</p><p class="text-label-sm text-on-surface-variant">' + Se(m) + "</p></div>", f.fileList.appendChild(p);
    });
    var o = Y.length, s = o + " file" + (o !== 1 ? "s" : "") + " inside";
    f.fileCountBadge.textContent = s, f.fileCountText.textContent = s, f.totalSizeText.textContent = Se(n);
  }
  function Et() {
    f.fileList.innerHTML = "", f.fileList.appendChild(f.fileListEmpty), f.archiveAnalyzing.classList.add("hidden"), f.fileCountBadge.textContent = "0 archives", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B";
  }
  function ot() {
    ae === "running" && (J = true), Q = null, Y = [], qe = "", f.archiveInspector.classList.add("hidden"), f.dropZone.classList.remove("hidden"), f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), f.clearAllBtn.textContent = "Clear All", f.clearAllBtn.disabled = true, Et(), Ce();
  }
  function ni(n) {
    f.modalPassword.value = "", _t(f.modalPassword, f.modalPasswordReveal, false), f.modalPasswordError.classList.toggle("hidden", !n), f.passwordModal.classList.remove("hidden"), setTimeout(function() {
      f.modalPassword.focus();
    }, 50);
  }
  function Mt() {
    f.passwordModal.classList.add("hidden");
  }
  function oi() {
    function n() {
      var o = f.modalPassword.value;
      Mt(), $t(o);
    }
    f.modalUnlockBtn.addEventListener("click", n), f.modalPassword.addEventListener("keydown", function(o) {
      o.key === "Enter" && n();
    }), f.modalCancelBtn.addEventListener("click", function() {
      Mt(), ot();
    }), f.passwordModal.addEventListener("click", function(o) {
      o.target === f.passwordModal && (Mt(), ot());
    });
  }
  function ai() {
    f.removeArchiveBtn.addEventListener("click", function() {
      ae !== "running" && ot();
    });
  }
  function ii() {
    f.saveOutputFooterBtn.addEventListener("click", function() {
      tn();
    });
  }
  function Vt(n) {
    var o = n.toLowerCase();
    if (o.endsWith(".tar.gz")) return "tar.gz";
    if (o.endsWith(".tar.bz") || o.endsWith(".tar.bz2")) return "tar.bz";
    if (o.endsWith(".tgz")) return "tar.gz";
    var s = o.lastIndexOf(".");
    return s === -1 ? "" : o.slice(s + 1);
  }
  function Jr(n) {
    var o = {
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
    return o[n] || o.default;
  }
  function en(n) {
    return Ir[n] || Ir.default;
  }
  function Se(n) {
    if (n === 0) return "0 B";
    var o = [
      "B",
      "KB",
      "MB",
      "GB",
      "TB"
    ], s = Math.floor(Math.log(n) / Math.log(1024));
    return s >= o.length && (s = o.length - 1), (n / Math.pow(1024, s)).toFixed(s === 0 ? 0 : 1) + " " + o[s];
  }
  function at(n) {
    var o = document.createElement("div");
    return o.appendChild(document.createTextNode(n)), o.innerHTML;
  }
  function it() {
    if (f.fileList.innerHTML = "", $.length === 0) {
      f.fileList.appendChild(f.fileListEmpty), f.fileCountBadge.textContent = "0 files", f.fileCountText.textContent = "0 files", f.totalSizeText.textContent = "0 B", yt();
      return;
    }
    var n = 0;
    $.forEach(function(s) {
      n += s.size;
      var d = document.createElement("div");
      d.className = "p-md flex items-center gap-md hover:bg-surface-container-high/50 transition-colors group", d.innerHTML = '<div class="w-10 h-10 rounded bg-surface-container-highest/50 flex items-center justify-center shrink-0 ' + en(s.ext) + '"><span class="material-symbols-outlined text-[20px]">' + Jr(s.ext) + '</span></div><div class="flex-1 min-w-0"><p class="text-body-sm font-bold text-on-surface truncate">' + at(s.name) + '</p><p class="text-label-sm text-on-surface-variant truncate">' + (s.path !== s.name ? at(s.path) : Se(s.size)) + '</p></div><button class="remove-file p-xs text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-all rounded" data-id="' + s.id + '"><span class="material-symbols-outlined text-[18px]">close</span></button>', f.fileList.appendChild(d);
    });
    var o = $.length;
    f.fileCountBadge.textContent = o + " " + (o === 1 ? "file" : "files"), f.fileCountText.textContent = o + " " + (o === 1 ? "file" : "files"), f.totalSizeText.textContent = Se(n), f.fileList.querySelectorAll(".remove-file").forEach(function(s) {
      s.addEventListener("click", function() {
        var d = this.getAttribute("data-id");
        $ = $.filter(function(m) {
          return m.id !== d;
        }), it(), (ae === "success" || ae === "error") && Ce();
      });
    }), yt();
  }
  function si() {
    f.formatSelect.addEventListener("change", function() {
      var n = this.value, o = n === "zip" || n === "7z";
      f.compressPasswordSection.classList.toggle("hidden", !o), o || (f.compressEnablePassword.checked = false, f.compressPasswordFields.classList.add("hidden"), f.compressPassword.disabled = true, f.compressPasswordConfirm.disabled = true, f.compressPasswordReveal.disabled = true, f.compressPasswordConfirmReveal.disabled = true);
    });
  }
  function ci() {
    f.compressEnablePassword.addEventListener("change", function() {
      var n = this.checked;
      f.compressPasswordFields.classList.toggle("hidden", !n), f.compressPassword.disabled = !n, f.compressPasswordConfirm.disabled = !n, f.compressPasswordReveal.disabled = !n, f.compressPasswordConfirmReveal.disabled = !n, n || (f.compressPassword.value = "", f.compressPasswordConfirm.value = "", _t(f.compressPassword, f.compressPasswordReveal, false), _t(f.compressPasswordConfirm, f.compressPasswordConfirmReveal, false));
    });
  }
  function _t(n, o, s) {
    n.type = s ? "text" : "password", o.querySelector(".material-symbols-outlined").textContent = s ? "visibility_off" : "visibility", o.setAttribute("aria-label", s ? "Hide password" : "Show password");
  }
  function li() {
    [
      [
        f.compressPassword,
        f.compressPasswordReveal
      ],
      [
        f.compressPasswordConfirm,
        f.compressPasswordConfirmReveal
      ],
      [
        f.modalPassword,
        f.modalPasswordReveal
      ]
    ].forEach(function(n) {
      var o = n[0], s = n[1];
      s.addEventListener("click", function() {
        _t(o, s, o.type === "password");
      });
    });
  }
  function di() {
    f.compressBtn.addEventListener("click", function() {
      this.disabled || gi();
    });
  }
  function yt() {
    if (te === "compress") {
      var n = $.length > 0;
      f.compressBtn.disabled = !n, f.clearAllBtn.disabled = !n;
    } else f.clearAllBtn.disabled = !Q;
  }
  function ui() {
    f.clearAllBtn.addEventListener("click", function() {
      if (!this.disabled) if (te === "extract") {
        if (ae === "running") return;
        ot();
      } else $ = [], it(), Ce();
    });
  }
  function fi() {
    f.cancelBtn.addEventListener("click", function() {
      J = true, Ce();
    });
  }
  function rt(n) {
    var o = URL.createObjectURL(n), s = document.createElement("a");
    s.href = o, s.download = xe || "archive.zip", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  async function tn() {
    if (te === "extract") {
      if (Y.length === 0) return;
      if ("showDirectoryPicker" in window) {
        try {
          for (var n = await window.showDirectoryPicker({
            mode: "readwrite"
          }), o = 0; o < Y.length; o++) {
            for (var s = Y[o], d = s.name.split("/"), m = d.pop(), h = n, p = 0; p < d.length; p++) d[p] && (h = await h.getDirectoryHandle(d[p], {
              create: true
            }));
            var y = await h.getFileHandle(m, {
              create: true
            }), L = await y.createWritable();
            await L.write(s.data), await L.close();
          }
        } catch (M) {
          M.name !== "AbortError" && M.name !== "SecurityError" && console.error("Save error:", M);
        }
        return;
      }
      var N = Q ? Q.name.replace(/\.[^.]+$/, "") : "extracted";
      if (Y.length === 1) {
        xe = Y[0].name, rt(new Blob([
          Y[0].data
        ]));
        return;
      }
      var j = /* @__PURE__ */ new Map();
      Y.forEach(function(M) {
        j.set(M.name, M.data);
      });
      var R = await Gr(j, "zip", null, function() {
      });
      xe = N + "_extracted.zip", rt(new Blob([
        R
      ]));
    } else Ee && rt(new Blob([
      Ee
    ]));
  }
  function mi() {
    f.downloadBtn.addEventListener("click", function() {
      this.disabled || (te === "extract" ? tn() : Ee && rt(new Blob([
        Ee
      ])));
    });
  }
  function vi() {
    f.compressAgainBtn.addEventListener("click", function() {
      te === "extract" ? ot() : ($ = [], xe = "", Ee = null, it(), Ce());
    });
  }
  function hi() {
    f.tryAgainBtn.addEventListener("click", function() {
      te === "extract" ? $t(qe || null) : Ce();
    });
  }
  function pi() {
    f.errorDetailsToggle.addEventListener("click", function() {
      var n = f.errorLog.classList.contains("hidden");
      f.errorLog.classList.toggle("hidden", !n), this.textContent = n ? "Hide details" : "Show details";
    });
  }
  function ne(n) {
    var o = /* @__PURE__ */ new Date(), s = o.getHours().toString().padStart(2, "0") + ":" + o.getMinutes().toString().padStart(2, "0") + ":" + o.getSeconds().toString().padStart(2, "0");
    bt.push({
      ts: s,
      msg: n
    });
  }
  function Ce() {
    ae = "idle", J = false, f.progressState.classList.add("hidden"), f.successState.classList.add("hidden"), f.errorState.classList.add("hidden"), te === "compress" ? f.controlsWrapper.classList.remove("hidden") : (f.controlsWrapper.classList.add("hidden"), f.saveOutputFooterBtn.classList.add("hidden"), f.clearAllBtn.classList.remove("hidden"), Q ? (f.dropZone.classList.add("hidden"), f.archiveInspector.classList.remove("hidden")) : (f.dropZone.classList.remove("hidden"), f.archiveInspector.classList.add("hidden")));
  }
  function rn(n) {
    ae = "running", bt = [], f.controlsWrapper.classList.add("hidden"), f.progressState.classList.remove("hidden"), f.successState.classList.add("hidden"), f.errorState.classList.add("hidden");
    var o = n === "compress";
    f.progressIcon.textContent = o ? "archive" : "unarchive", f.progressTitle.textContent = o ? "Compressing files..." : "Extracting archive...", f.progressSubtitle.textContent = "", De(0), Ue("Starting...");
  }
  function nn(n) {
    if (ae = "success", f.progressState.classList.add("hidden"), f.successState.classList.remove("hidden"), n.mode === "compress") {
      var o = n.originalSize - n.compressedSize, s = n.originalSize > 0 ? Math.round(o / n.originalSize * 100) : 0;
      f.successTitle.textContent = "Archive created", f.successFilename.classList.add("hidden"), f.successStatsRow.classList.remove("hidden"), f.successOriginalSize.textContent = Se(n.originalSize), f.successCompressedSize.textContent = Se(n.compressedSize), f.successSavedPct.textContent = s + "% smaller", Ee && rt(new Blob([
        Ee
      ])), f.downloadBtn.classList.remove("hidden"), f.downloadBtn.className = "flex-1 flex items-center justify-center gap-sm bg-primary text-on-primary py-md rounded-xl text-label-sm font-bold hover:opacity-90 transition-all active:scale-[0.99]", f.downloadBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">download</span> Save again', f.downloadBtn.disabled = false, f.compressAgainBtn.className = "flex-1 flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all", f.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Compress more';
    } else f.successTitle.textContent = "Extraction complete", f.successFilename.classList.remove("hidden"), f.successFilename.textContent = n.extracted + " files extracted", f.successStatsRow.classList.add("hidden"), f.downloadBtn.classList.add("hidden"), f.compressAgainBtn.className = "w-full flex items-center justify-center gap-sm bg-surface-container-high text-on-surface py-md rounded-xl text-label-sm font-bold border border-outline-variant/30 hover:bg-surface-container-highest transition-all", f.compressAgainBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">refresh</span> Extract another', f.saveOutputFooterBtn.classList.remove("hidden"), f.clearAllBtn.classList.add("hidden");
  }
  function on(n) {
    ae = "error", f.progressState.classList.add("hidden"), f.errorState.classList.remove("hidden"), f.errorDetail.textContent = n || "An unexpected error occurred.", f.errorLogContent.innerHTML = "", bt.forEach(function(o) {
      var s = document.createElement("div");
      s.className = "opacity-80", s.innerHTML = '<span class="text-on-surface-variant/40">[' + at(o.ts) + "]</span> " + at(o.msg), f.errorLogContent.appendChild(s);
    }), f.errorLog.classList.add("hidden"), f.errorDetailsToggle.textContent = "Show details";
  }
  function De(n) {
    f.progressFill.style.width = n + "%", f.progressPercentage.textContent = Math.round(n) + "%";
  }
  function Ue(n) {
    f.progressStatus.textContent = n;
  }
  function an(n) {
    f.progressSubtitle.textContent = n;
  }
  async function gi() {
    var n = f.formatSelect.value;
    xe = "archive." + n;
    var o = f.compressEnablePassword.checked ? f.compressPassword.value : "";
    J = false, rn("compress");
    var s = $.length, d = $.reduce(function(R, M) {
      return R + M.size;
    }, 0);
    ne("Starting compression: " + s + " file" + (s !== 1 ? "s" : "") + " (" + Se(d) + ")"), ne("Format: ." + n), Ue("Reading files..."), De(10);
    var m = function(R) {
      var M = String(R).trim();
      M && (ne(M), an(M));
    };
    try {
      for (var h = /* @__PURE__ */ new Map(), p = 0; p < $.length; p++) {
        var y = $[p], L = await y.file.arrayBuffer();
        if (J) return;
        h.set(y.path, new Uint8Array(L));
      }
      Ue("Compressing..."), De(40);
      var N = await Gr(h, n, o, m);
      if (J) return;
      Ee = N, De(100), ne("Done: " + xe + " (" + Se(N.length) + ")"), nn({
        mode: "compress",
        filename: xe,
        originalSize: d,
        compressedSize: N.length
      });
    } catch (R) {
      if (J) return;
      var j = R && R.message || String(R);
      ne("Error: " + j), on(j);
    }
  }
  const _i = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: Va,
    meta: Ka
  }, Symbol.toStringTag, {
    value: "Module"
  })), yi = {
    contentFile: "ecdh-content.html",
    title: "Onius \u2014 " + ee.ecdh.name
  }, wi = {
    "P-256": 256,
    "P-384": 384,
    "P-521": 528
  };
  let He = "P-256";
  const be = {
    alice: {
      keyPair: null
    },
    bob: {
      keyPair: null
    }
  };
  function k(n) {
    return document.getElementById(n);
  }
  function sn() {
    return !!(window.isSecureContext && window.crypto && window.crypto.subtle);
  }
  function Ht(n) {
    return Array.from(new Uint8Array(n)).map((o) => o.toString(16).padStart(2, "0")).join("");
  }
  function bi(n) {
    const o = n.trim().replace(/\s+/g, "");
    if (!o || o.length % 2 !== 0 || /[^0-9a-fA-F]/.test(o)) throw new Error(H("ecdh.error.invalidHex"));
    const s = new Uint8Array(o.length / 2);
    for (let d = 0; d < s.length; d++) s[d] = parseInt(o.substr(d * 2, 2), 16);
    return s.buffer;
  }
  function Yt(n, o) {
    const s = k(n + "-private-key"), d = k(n + "-private-key-reveal");
    !s || !d || (s.type = o ? "text" : "password", d.querySelector(".material-symbols-outlined").textContent = o ? "visibility_off" : "visibility", d.setAttribute("aria-label", H(o ? "ecdh.privateKey.hide" : "ecdh.privateKey.show")));
  }
  function cn(n, o) {
    const s = k(n + "-error"), d = k(n + "-error-text");
    !s || !d || (d.textContent = o, s.classList.remove("hidden"));
  }
  function We(n) {
    const o = k(n + "-error");
    o && o.classList.add("hidden");
  }
  function St() {
    const n = !!be.alice.keyPair, o = !!be.bob.keyPair, s = k("exchange-btn");
    s && (s.disabled = !(n && o)), [
      "alice",
      "bob"
    ].forEach((d) => {
      const m = k(d + "-derive-btn"), h = k(d + "-peer-key");
      m && h && (m.disabled = !(be[d].keyPair && h.value.trim()));
    });
  }
  function kt() {
    const n = k("alice-shared-secret").value, o = k("bob-shared-secret").value, s = k("ecdh-match-banner"), d = k("ecdh-match-icon"), m = k("ecdh-match-text");
    if (!s || !d || !m) return;
    if (!n || !o) {
      s.classList.add("hidden");
      return;
    }
    const h = n === o;
    s.classList.remove("hidden"), s.style.borderColor = `color-mix(in srgb, var(${h ? "--clr-success" : "--clr-error"}) 30%, transparent)`, s.style.background = `color-mix(in srgb, var(${h ? "--clr-success" : "--clr-error"}) 10%, transparent)`, d.style.color = `var(${h ? "--clr-success" : "--clr-error"})`, d.textContent = h ? "check_circle" : "error", m.style.color = `var(${h ? "--clr-success" : "--clr-error"})`, m.textContent = H(h ? "ecdh.match.success" : "ecdh.match.failure");
  }
  async function Dr(n) {
    if (!sn()) return;
    const o = k(n + "-generate-btn");
    o && (o.disabled = true);
    try {
      const s = await crypto.subtle.generateKey({
        name: "ECDH",
        namedCurve: He
      }, true, [
        "deriveBits"
      ]);
      be[n].keyPair = s;
      const d = await crypto.subtle.exportKey("raw", s.publicKey), m = await crypto.subtle.exportKey("pkcs8", s.privateKey);
      k(n + "-public-key").value = Ht(d), k(n + "-private-key").value = Ht(m), k(n + "-peer-key").value = "", k(n + "-shared-secret").value = "", Yt(n, false), We(n);
    } catch (s) {
      cn(n, H("ecdh.error.keygenFailed") + " (" + (s && s.message || s) + ")");
    } finally {
      o && (o.disabled = false), kt(), St();
    }
  }
  function Ei() {
    const n = k("alice-public-key").value, o = k("bob-public-key").value;
    !n || !o || (k("alice-peer-key").value = o, k("bob-peer-key").value = n, k("alice-shared-secret").value = "", k("bob-shared-secret").value = "", We("alice"), We("bob"), kt(), St());
  }
  async function Fr(n) {
    const o = be[n], s = k(n + "-peer-key").value.trim();
    if (We(n), !(!o.keyPair || !s)) {
      try {
        const d = await crypto.subtle.importKey("raw", bi(s), {
          name: "ECDH",
          namedCurve: He
        }, true, []), m = await crypto.subtle.deriveBits({
          name: "ECDH",
          public: d
        }, o.keyPair.privateKey, wi[He]);
        k(n + "-shared-secret").value = Ht(m);
      } catch (d) {
        k(n + "-shared-secret").value = "", cn(n, H("ecdh.error.deriveFailed") + " (" + (d && d.message || d) + ")");
      }
      kt();
    }
  }
  function ln() {
    [
      "alice",
      "bob"
    ].forEach((n) => {
      k(n + "-public-key").value = "", k(n + "-private-key").value = "", k(n + "-peer-key").value = "", k(n + "-shared-secret").value = "", We(n), Yt(n, false);
    }), k("ecdh-match-banner").classList.add("hidden"), St();
  }
  function Or() {
    be.alice = {
      keyPair: null
    }, be.bob = {
      keyPair: null
    }, ln();
  }
  function Ne(n, o) {
    const s = k(n), d = k(o);
    !s || !d || s.addEventListener("click", () => {
      if (!d.value) return;
      navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(d.value) : (d.select(), document.execCommand("copy"));
      const m = s.querySelector(".material-symbols-outlined"), h = m.textContent;
      m.textContent = "done", setTimeout(() => {
        m.textContent = h;
      }, 1200);
    });
  }
  function Si() {
    document.querySelectorAll(".curve-pill").forEach((n) => {
      n.addEventListener("click", () => {
        n.dataset.curve !== He && (He = n.dataset.curve, document.querySelectorAll(".curve-pill").forEach((o) => o.classList.toggle("active", o === n)), Or());
      });
    }), k("alice-generate-btn").addEventListener("click", () => Dr("alice")), k("bob-generate-btn").addEventListener("click", () => Dr("bob")), k("exchange-btn").addEventListener("click", Ei), k("alice-derive-btn").addEventListener("click", () => Fr("alice")), k("bob-derive-btn").addEventListener("click", () => Fr("bob")), k("ecdh-reset-btn").addEventListener("click", Or), [
      "alice",
      "bob"
    ].forEach((n) => {
      k(n + "-private-key-reveal").addEventListener("click", () => {
        const o = k(n + "-private-key");
        Yt(n, o.type === "password");
      }), k(n + "-peer-key").addEventListener("input", () => {
        k(n + "-shared-secret").value = "", We(n), kt(), St();
      });
    }), Ne("alice-public-key-copy", "alice-public-key"), Ne("alice-private-key-copy", "alice-private-key"), Ne("alice-shared-secret-copy", "alice-shared-secret"), Ne("bob-public-key-copy", "bob-public-key"), Ne("bob-private-key-copy", "bob-private-key"), Ne("bob-shared-secret-copy", "bob-shared-secret");
  }
  async function ki() {
    Kt(ee.ecdh.name, ee.ecdh.icon, ee.ecdh.slug, "ecdh"), He = "P-256", be.alice = {
      keyPair: null
    }, be.bob = {
      keyPair: null
    };
    const n = k("ecdh-browser-warning"), o = sn();
    n && n.classList.toggle("hidden", o), [
      "alice-generate-btn",
      "bob-generate-btn"
    ].forEach((s) => {
      const d = k(s);
      d && (d.disabled = !o);
    }), ln(), Si();
  }
  const Li = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: ki,
    meta: yi
  }, Symbol.toStringTag, {
    value: "Module"
  })), xi = {
    "/": Nt,
    "/index.html": Nt,
    "/base64.html": ja,
    "/archiver.html": _i,
    "/ecdh.html": Li
  };
  function wt(n) {
    return n === "" ? "/" : n;
  }
  function Zt(n) {
    return xi[wt(n)] || null;
  }
  function Ci() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function dn(n) {
    return Promise.all(n.getAnimations().map((o) => o.finished.catch(() => {
    })));
  }
  async function Ai() {
    const n = document.getElementById("main-content");
    n && (n.classList.remove("page-fade-in"), n.classList.add("page-fade-out"), await dn(n), n.classList.remove("page-fade-out"));
  }
  function Ti() {
    const n = document.getElementById("main-content");
    n && (n.classList.add("page-fade-in"), dn(n).then(() => n.classList.remove("page-fade-in")));
  }
  function Bi(n) {
    const o = document.getElementById("sidebar-nav");
    if (!o) return;
    const s = wt(n);
    o.querySelectorAll("a").forEach((d) => {
      d.classList.remove("text-primary", "font-bold", "bg-primary-container/20"), d.getAttribute("href") === s && d.classList.add("text-primary", "font-bold", "bg-primary-container/20");
    });
  }
  async function Xt(n) {
    const o = Zt(n) || Nt;
    ra(), await Wt("main-content", o.meta.contentFile), document.title = o.meta.title, Bi(n), ta(n), await o.init();
    const s = document.querySelector("main");
    s && (s.scrollTop = 0);
  }
  async function un(n, o) {
    o = o || {};
    const s = !!o.replace, d = wt(n);
    if (!s && d === wt(window.location.pathname)) return;
    const m = () => Xt(d), h = () => {
      s ? history.replaceState({
        path: d
      }, "", d) : history.pushState({
        path: d
      }, "", d);
    };
    if (Ci()) await m(), h();
    else if (document.startViewTransition) {
      const p = document.startViewTransition(m);
      try {
        await p.updateCallbackDone;
      } catch {
      }
      h(), p.finished.catch(() => {
      });
    } else await Ai(), await m(), h(), Ti();
  }
  function Ii(n) {
    if (!n || n.target && n.target !== "_self" || n.hasAttribute("download")) return false;
    let o;
    try {
      o = new URL(n.href, window.location.href);
    } catch {
      return false;
    }
    return o.origin !== window.location.origin ? false : !!Zt(o.pathname);
  }
  function Pi() {
    document.addEventListener("click", function(n) {
      if (n.defaultPrevented || n.button !== 0 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey) return;
      const o = n.target.closest("a[href]");
      Ii(o) && (n.preventDefault(), un(new URL(o.href, window.location.href).pathname));
    }), window.addEventListener("popstate", function() {
      Xt(window.location.pathname);
    });
  }
  Fi = async function() {
    Ho(), await Wt("app-shell", "shell.html"), await Ko([
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
    ]), Vo(), Yo(), Go(), $o(), Wo(), Zo(), Oo(), Pi(), history.replaceState({
      path: window.location.pathname
    }, "", window.location.pathname), await Xt(window.location.pathname), window.addEventListener("pageshow", function() {
      const n = Zt(window.location.pathname);
      n && n.onPageShow && n.onPageShow();
    });
  };
})();
export {
  __tla,
  Di as r,
  Fi as s
};
