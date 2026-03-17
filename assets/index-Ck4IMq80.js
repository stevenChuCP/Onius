(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n);
  new MutationObserver((n) => {
    for (const i of n) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && t(o);
  }).observe(document, { childList: true, subtree: true });
  function s(n) {
    const i = {};
    return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function t(n) {
    if (n.ep) return;
    n.ep = true;
    const i = s(n);
    fetch(n.href, i);
  }
})();
function F(e, r, s) {
  let t, n;
  try {
    const c = E(e, a.__wbindgen_malloc, a.__wbindgen_realloc), d = w, f = E(r, a.__wbindgen_malloc, a.__wbindgen_realloc), u = w, R = E(s, a.__wbindgen_malloc, a.__wbindgen_realloc), T = w, _ = a.convert(c, d, f, u, R, T);
    var i = _[0], o = _[1];
    if (_[3]) throw i = 0, o = 0, W(_[2]);
    return t = i, n = o, x(i, o);
  } finally {
    a.__wbindgen_free(t, n, 1);
  }
}
function O() {
  return { __proto__: null, "./onius_wasm_bg.js": { __proto__: null, __wbindgen_cast_0000000000000001: function(r, s) {
    return x(r, s);
  }, __wbindgen_init_externref_table: function() {
    const r = a.__wbindgen_externrefs, s = r.grow(4);
    r.set(0, void 0), r.set(s + 0, void 0), r.set(s + 1, null), r.set(s + 2, true), r.set(s + 3, false);
  } } };
}
function x(e, r) {
  return e = e >>> 0, S(e, r);
}
let y = null;
function v() {
  return (y === null || y.byteLength === 0) && (y = new Uint8Array(a.memory.buffer)), y;
}
function E(e, r, s) {
  if (s === void 0) {
    const c = b.encode(e), d = r(c.length, 1) >>> 0;
    return v().subarray(d, d + c.length).set(c), w = c.length, d;
  }
  let t = e.length, n = r(t, 1) >>> 0;
  const i = v();
  let o = 0;
  for (; o < t; o++) {
    const c = e.charCodeAt(o);
    if (c > 127) break;
    i[n + o] = c;
  }
  if (o !== t) {
    o !== 0 && (e = e.slice(o)), n = s(n, t, t = o + e.length * 3, 1) >>> 0;
    const c = v().subarray(n + o, n + t), d = b.encodeInto(e, c);
    o += d.written, n = s(n, t, o, 1) >>> 0;
  }
  return w = o, n;
}
function W(e) {
  const r = a.__wbindgen_externrefs.get(e);
  return a.__externref_table_dealloc(e), r;
}
let h = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
h.decode();
const I = 2146435072;
let L = 0;
function S(e, r) {
  return L += r, L >= I && (h = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), h.decode(), L = r), h.decode(v().subarray(e, e + r));
}
const b = new TextEncoder();
"encodeInto" in b || (b.encodeInto = function(e, r) {
  const s = b.encode(e);
  return r.set(s), { read: e.length, written: s.length };
});
let w = 0, a;
function B(e, r) {
  return a = e.exports, y = null, a.__wbindgen_start(), a;
}
async function M(e, r) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, r);
    } catch (n) {
      if (e.ok && s(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const t = await e.arrayBuffer();
    return await WebAssembly.instantiate(t, r);
  } else {
    const t = await WebAssembly.instantiate(e, r);
    return t instanceof WebAssembly.Instance ? { instance: t, module: e } : t;
  }
  function s(t) {
    switch (t) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function D(e) {
  if (a !== void 0) return a;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("onius_wasm_bg-c-MIHSOV.wasm", import.meta.url).href, import.meta.url));
  const r = O();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: s, module: t } = await M(await e, r);
  return B(s);
}
const l = document.getElementById("input"), g = document.getElementById("output"), m = document.getElementById("from-fmt"), p = document.getElementById("to-fmt"), U = document.getElementById("swap-btn"), A = document.getElementById("error-msg");
async function j() {
  await D();
  const e = (t) => {
    A.textContent = t, A.classList.remove("hidden");
  }, r = () => {
    A.classList.add("hidden");
  }, s = () => {
    r();
    const t = l.value, n = m.value, i = p.value;
    if (!t) {
      g.value = "";
      return;
    }
    try {
      const o = F(t, n, i);
      g.value = o;
    } catch (o) {
      e(o), g.value = "";
    }
  };
  l.addEventListener("input", s), m.addEventListener("change", s), p.addEventListener("change", s), l.addEventListener("dragover", (t) => {
    t.preventDefault(), l.classList.add("drag-over");
  }), ["dragleave", "dragend"].forEach((t) => {
    l.addEventListener(t, () => {
      l.classList.remove("drag-over");
    });
  }), l.addEventListener("drop", (t) => {
    t.preventDefault(), l.classList.remove("drag-over");
    const n = t.dataTransfer.files[0];
    if (!n) return;
    const i = new FileReader(), o = m.value;
    i.onload = (c) => {
      let d = "";
      if (o === "hex") {
        const f = new Uint8Array(c.target.result);
        d = Array.from(f).map((u) => u.toString(16).padStart(2, "0")).join("");
      } else if (o === "base64" || o === "base64url") {
        const f = new FileReader();
        f.onload = (u) => {
          l.value = u.target.result, s();
        }, f.readAsText(n);
        return;
      } else {
        const f = new FileReader();
        f.onload = (u) => {
          l.value = u.target.result, s();
        }, f.readAsText(n);
        return;
      }
      l.value = d, s();
    }, o === "hex" ? i.readAsArrayBuffer(n) : i.readAsText(n);
  }), U.addEventListener("click", () => {
    const t = l.value, n = m.value;
    l.value = g.value, m.value = p.value, g.value = t, p.value = n, s();
  }), s(), "serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((t) => console.log("SW registered")).catch((t) => console.error("SW registration failed", t));
  });
}
j();
