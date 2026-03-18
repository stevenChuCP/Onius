(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const c of r) if (c.type === "childList") for (const t of c.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t);
  }).observe(document, { childList: true, subtree: true });
  function i(r) {
    const c = {};
    return r.integrity && (c.integrity = r.integrity), r.referrerPolicy && (c.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? c.credentials = "include" : r.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = true;
    const c = i(r);
    fetch(r.href, c);
  }
})();
function D(e, n, i) {
  let s, r;
  try {
    const o = I(e, d.__wbindgen_malloc, d.__wbindgen_realloc), a = _, l = I(n, d.__wbindgen_malloc, d.__wbindgen_realloc), u = _, v = I(i, d.__wbindgen_malloc, d.__wbindgen_realloc), h = _, g = d.convert(o, a, l, u, v, h);
    var c = g[0], t = g[1];
    if (g[3]) throw c = 0, t = 0, U(g[2]);
    return s = c, r = t, S(c, t);
  } finally {
    d.__wbindgen_free(s, r, 1);
  }
}
function C() {
  return { __proto__: null, "./onius_wasm_bg.js": { __proto__: null, __wbindgen_cast_0000000000000001: function(n, i) {
    return S(n, i);
  }, __wbindgen_init_externref_table: function() {
    const n = d.__wbindgen_externrefs, i = n.grow(4);
    n.set(0, void 0), n.set(i + 0, void 0), n.set(i + 1, null), n.set(i + 2, true), n.set(i + 3, false);
  } } };
}
function S(e, n) {
  return e = e >>> 0, j(e, n);
}
let b = null;
function x() {
  return (b === null || b.byteLength === 0) && (b = new Uint8Array(d.memory.buffer)), b;
}
function I(e, n, i) {
  if (i === void 0) {
    const o = w.encode(e), a = n(o.length, 1) >>> 0;
    return x().subarray(a, a + o.length).set(o), _ = o.length, a;
  }
  let s = e.length, r = n(s, 1) >>> 0;
  const c = x();
  let t = 0;
  for (; t < s; t++) {
    const o = e.charCodeAt(t);
    if (o > 127) break;
    c[r + t] = o;
  }
  if (t !== s) {
    t !== 0 && (e = e.slice(t)), r = i(r, s, s = t + e.length * 3, 1) >>> 0;
    const o = x().subarray(r + t, r + s), a = w.encodeInto(e, o);
    t += a.written, r = i(r, s, t, 1) >>> 0;
  }
  return _ = t, r;
}
function U(e) {
  const n = d.__wbindgen_externrefs.get(e);
  return d.__externref_table_dealloc(e), n;
}
let A = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
A.decode();
const P = 2146435072;
let B = 0;
function j(e, n) {
  return B += n, B >= P && (A = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), A.decode(), B = n), A.decode(x().subarray(e, e + n));
}
const w = new TextEncoder();
"encodeInto" in w || (w.encodeInto = function(e, n) {
  const i = w.encode(e);
  return n.set(i), { read: e.length, written: i.length };
});
let _ = 0, d;
function k(e, n) {
  return d = e.exports, b = null, d.__wbindgen_start(), d;
}
async function z(e, n) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, n);
    } catch (r) {
      if (e.ok && i(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const s = await e.arrayBuffer();
    return await WebAssembly.instantiate(s, n);
  } else {
    const s = await WebAssembly.instantiate(e, n);
    return s instanceof WebAssembly.Instance ? { instance: s, module: e } : s;
  }
  function i(s) {
    switch (s) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function N(e) {
  if (d !== void 0) return d;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("onius_wasm_bg-c-MIHSOV.wasm", import.meta.url).href, import.meta.url));
  const n = C();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: i, module: s } = await z(await e, n);
  return k(i);
}
const f = document.getElementById("input"), y = document.getElementById("output"), p = document.getElementById("from-fmt"), m = document.getElementById("to-fmt"), E = document.getElementById("swap-btn"), T = document.getElementById("error-msg"), L = document.getElementById("file-drop-zone"), O = document.getElementById("file-input"), R = document.getElementById("drop-zone-text"), W = document.getElementById("drop-icon"), F = document.getElementById("image-preview"), q = Array.from(m.options);
async function V() {
  await N();
  const e = (t) => {
    T.textContent = t, T.classList.remove("hidden");
  }, n = () => {
    T.classList.add("hidden");
  }, i = () => {
    const o = p.value === "image";
    m.innerHTML = "", q.forEach((a) => {
      const l = ["base64", "base64url", "hex"].includes(a.value), u = a.value === "plain";
      o ? l && m.appendChild(a) : (u || l) && m.appendChild(a);
    }), Array.from(m.options).some((a) => a.value === m.value) || (m.selectedIndex = 0), o ? (f.classList.add("hidden"), L.classList.remove("hidden"), f.value.startsWith("data:image") || (W.classList.remove("hidden"), F.classList.add("hidden"), F.src = "", R.textContent = "Drag & drop an image or click to choose")) : (f.classList.remove("hidden"), L.classList.add("hidden")), E.disabled = o, E.style.opacity = o ? "0.3" : "1", E.style.pointerEvents = o ? "none" : "auto";
  }, s = () => {
    n();
    let t = f.value;
    const o = p.value, a = m.value;
    if (!t) {
      y.value = "";
      return;
    }
    try {
      o === "image" && t.includes("base64,") && (t = t.split("base64,")[1]);
      const u = D(t, o === "image" ? "base64" : o, a);
      y.value = u;
    } catch (l) {
      e(l), y.value = "";
    }
  };
  f.addEventListener("input", s), p.addEventListener("change", () => {
    i(), s();
  }), m.addEventListener("change", s);
  const r = (t) => {
    if (!t) return;
    const o = p.value;
    t.type.startsWith("image/") && o !== "image" && (p.value = "image", i());
    const a = new FileReader();
    a.onload = (u) => {
      let v = "";
      const h = p.value;
      if (h === "image") {
        const g = u.target.result;
        f.value = g, W.classList.add("hidden"), F.src = g, F.classList.remove("hidden"), R.textContent = `Loaded: ${t.name}`, s();
        return;
      }
      if (h === "hex") {
        const g = new Uint8Array(u.target.result);
        v = Array.from(g).map((M) => M.toString(16).padStart(2, "0")).join("");
      }
      v && (f.value = v, s());
    };
    const l = p.value;
    if (l === "hex" || l === "image") l === "image" ? a.readAsDataURL(t) : a.readAsArrayBuffer(t);
    else {
      const u = new FileReader();
      u.onload = (v) => {
        f.value = v.target.result, s();
      }, u.readAsText(t);
    }
  };
  L.addEventListener("click", () => {
    O.click();
  }), O.addEventListener("change", (t) => {
    r(t.target.files[0]);
  }), [f, L].forEach((t) => {
    t.addEventListener("dragover", (o) => {
      o.preventDefault(), t.classList.add("drag-over");
    }), ["dragleave", "dragend"].forEach((o) => {
      t.addEventListener(o, () => {
        t.classList.remove("drag-over");
      });
    }), t.addEventListener("drop", (o) => {
      o.preventDefault(), t.classList.remove("drag-over"), r(o.dataTransfer.files[0]);
    });
  }), i(), E.addEventListener("click", () => {
    const t = f.value, o = p.value;
    f.value = y.value, p.value = m.value, y.value = t, m.value = o, s();
  }), s(), "serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((t) => console.log("SW registered")).catch((t) => console.error("SW registration failed", t));
  });
}
V();
