(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function s(n) {
    const i = {};
    return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(n) {
    if (n.ep) return;
    n.ep = true;
    const i = s(n);
    fetch(n.href, i);
  }
})();
function R(e, t, s) {
  let r, n;
  try {
    const a = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), u = m, A = v(t, c.__wbindgen_malloc, c.__wbindgen_realloc), O = m, x = v(s, c.__wbindgen_malloc, c.__wbindgen_realloc), I = m, g = c.convert(a, u, A, O, x, I);
    var i = g[0], o = g[1];
    if (g[3]) throw i = 0, o = 0, T(g[2]);
    return r = i, n = o, L(i, o);
  } finally {
    c.__wbindgen_free(r, n, 1);
  }
}
function B() {
  return { __proto__: null, "./onius_wasm_bg.js": { __proto__: null, __wbindgen_cast_0000000000000001: function(t, s) {
    return L(t, s);
  }, __wbindgen_init_externref_table: function() {
    const t = c.__wbindgen_externrefs, s = t.grow(4);
    t.set(0, void 0), t.set(s + 0, void 0), t.set(s + 1, null), t.set(s + 2, true), t.set(s + 3, false);
  } } };
}
function L(e, t) {
  return e = e >>> 0, M(e, t);
}
let l = null;
function w() {
  return (l === null || l.byteLength === 0) && (l = new Uint8Array(c.memory.buffer)), l;
}
function v(e, t, s) {
  if (s === void 0) {
    const a = d.encode(e), u = t(a.length, 1) >>> 0;
    return w().subarray(u, u + a.length).set(a), m = a.length, u;
  }
  let r = e.length, n = t(r, 1) >>> 0;
  const i = w();
  let o = 0;
  for (; o < r; o++) {
    const a = e.charCodeAt(o);
    if (a > 127) break;
    i[n + o] = a;
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), n = s(n, r, r = o + e.length * 3, 1) >>> 0;
    const a = w().subarray(n + o, n + r), u = d.encodeInto(e, a);
    o += u.written, n = s(n, r, o, 1) >>> 0;
  }
  return m = o, n;
}
function T(e) {
  const t = c.__wbindgen_externrefs.get(e);
  return c.__externref_table_dealloc(e), t;
}
let p = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
p.decode();
const F = 2146435072;
let h = 0;
function M(e, t) {
  return h += t, h >= F && (p = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), p.decode(), h = t), p.decode(w().subarray(e, e + t));
}
const d = new TextEncoder();
"encodeInto" in d || (d.encodeInto = function(e, t) {
  const s = d.encode(e);
  return t.set(s), { read: e.length, written: s.length };
});
let m = 0, c;
function W(e, t) {
  return c = e.exports, l = null, c.__wbindgen_start(), c;
}
async function S(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (n) {
      if (e.ok && s(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const r = await e.arrayBuffer();
    return await WebAssembly.instantiate(r, t);
  } else {
    const r = await WebAssembly.instantiate(e, t);
    return r instanceof WebAssembly.Instance ? { instance: r, module: e } : r;
  }
  function s(r) {
    switch (r) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function U(e) {
  if (c !== void 0) return c;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("onius_wasm_bg-c-MIHSOV.wasm", import.meta.url).href, import.meta.url));
  const t = B();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: s, module: r } = await S(await e, t);
  return W(s);
}
const b = document.getElementById("input"), f = document.getElementById("output"), y = document.getElementById("from-fmt"), _ = document.getElementById("to-fmt"), C = document.getElementById("swap-btn"), E = document.getElementById("error-msg");
async function D() {
  await U();
  const e = (r) => {
    E.textContent = r, E.classList.remove("hidden");
  }, t = () => {
    E.classList.add("hidden");
  }, s = () => {
    t();
    const r = b.value, n = y.value, i = _.value;
    if (!r) {
      f.value = "";
      return;
    }
    try {
      const o = R(r, n, i);
      f.value = o;
    } catch (o) {
      e(o), f.value = "";
    }
  };
  b.addEventListener("input", s), y.addEventListener("change", s), _.addEventListener("change", s), C.addEventListener("click", () => {
    const r = b.value, n = y.value;
    b.value = f.value, y.value = _.value, f.value = r, _.value = n, s();
  }), s();
}
D();
