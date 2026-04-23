let Te;
let __tla = (async () => {
  (function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) m(a);
    new MutationObserver((a) => {
      for (const c of a) if (c.type === "childList") for (const o of c.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && m(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function u(a) {
      const c = {};
      return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
    }
    function m(a) {
      if (a.ep) return;
      a.ep = true;
      const c = u(a);
      fetch(a.href, c);
    }
  })();
  let Pe, Se, Le;
  Pe = "modulepreload";
  Se = function(t, i) {
    return new URL(t, i).href;
  };
  Le = {};
  Te = function(i, u, m) {
    let a = Promise.resolve();
    if (u && u.length > 0) {
      const o = document.getElementsByTagName("link"), g = document.querySelector("meta[property=csp-nonce]"), h = (g == null ? void 0 : g.nonce) || (g == null ? void 0 : g.getAttribute("nonce"));
      a = Promise.allSettled(u.map((b) => {
        if (b = Se(b, m), b in Le) return;
        Le[b] = true;
        const k = b.endsWith(".css"), _ = k ? '[rel="stylesheet"]' : "";
        if (!!m) for (let M = o.length - 1; M >= 0; M--) {
          const C = o[M];
          if (C.href === b && (!k || C.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${b}"]${_}`)) return;
        const L = document.createElement("link");
        if (L.rel = k ? "stylesheet" : Pe, k || (L.as = "script"), L.crossOrigin = "", L.href = b, h && L.setAttribute("nonce", h), document.head.appendChild(L), k) return new Promise((M, C) => {
          L.addEventListener("load", M), L.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${b}`)));
        });
      }));
    }
    function c(o) {
      const g = new Event("vite:preloadError", {
        cancelable: true
      });
      if (g.payload = o, window.dispatchEvent(g), !g.defaultPrevented) throw o;
    }
    return a.then((o) => {
      for (const g of o || []) g.status === "rejected" && c(g.reason);
      return i().catch(c);
    });
  };
  function Me(t, i, u) {
    let m, a;
    try {
      const g = de(t, E.__wbindgen_malloc, E.__wbindgen_realloc), h = N, b = de(i, E.__wbindgen_malloc, E.__wbindgen_realloc), k = N, _ = de(u, E.__wbindgen_malloc, E.__wbindgen_realloc), T = N, L = E.convert(g, h, b, k, _, T);
      var c = L[0], o = L[1];
      if (L[3]) throw c = 0, o = 0, We(L[2]);
      return m = c, a = o, _e(c, o);
    } finally {
      E.__wbindgen_free(m, a, 1);
    }
  }
  function De() {
    return {
      __proto__: null,
      "./onius_wasm_bg.js": {
        __proto__: null,
        __wbindgen_cast_0000000000000001: function(i, u) {
          return _e(i, u);
        },
        __wbindgen_init_externref_table: function() {
          const i = E.__wbindgen_externrefs, u = i.grow(4);
          i.set(0, void 0), i.set(u + 0, void 0), i.set(u + 1, null), i.set(u + 2, true), i.set(u + 3, false);
        }
      }
    };
  }
  function _e(t, i) {
    return t = t >>> 0, Oe(t, i);
  }
  let H = null;
  function X() {
    return (H === null || H.byteLength === 0) && (H = new Uint8Array(E.memory.buffer)), H;
  }
  function de(t, i, u) {
    if (u === void 0) {
      const g = q.encode(t), h = i(g.length, 1) >>> 0;
      return X().subarray(h, h + g.length).set(g), N = g.length, h;
    }
    let m = t.length, a = i(m, 1) >>> 0;
    const c = X();
    let o = 0;
    for (; o < m; o++) {
      const g = t.charCodeAt(o);
      if (g > 127) break;
      c[a + o] = g;
    }
    if (o !== m) {
      o !== 0 && (t = t.slice(o)), a = u(a, m, m = o + t.length * 3, 1) >>> 0;
      const g = X().subarray(a + o, a + m), h = q.encodeInto(t, g);
      o += h.written, a = u(a, m, o, 1) >>> 0;
    }
    return N = o, a;
  }
  function We(t) {
    const i = E.__wbindgen_externrefs.get(t);
    return E.__externref_table_dealloc(t), i;
  }
  let J = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  J.decode();
  const $e = 2146435072;
  let le = 0;
  function Oe(t, i) {
    return le += i, le >= $e && (J = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), J.decode(), le = i), J.decode(X().subarray(t, t + i));
  }
  const q = new TextEncoder();
  "encodeInto" in q || (q.encodeInto = function(t, i) {
    const u = q.encode(t);
    return i.set(u), {
      read: t.length,
      written: u.length
    };
  });
  let N = 0, E;
  function Ue(t, i) {
    return E = t.exports, H = null, E.__wbindgen_start(), E;
  }
  async function He(t, i) {
    if (typeof Response == "function" && t instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(t, i);
      } catch (a) {
        if (t.ok && u(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", a);
        else throw a;
      }
      const m = await t.arrayBuffer();
      return await WebAssembly.instantiate(m, i);
    } else {
      const m = await WebAssembly.instantiate(t, i);
      return m instanceof WebAssembly.Instance ? {
        instance: m,
        module: t
      } : m;
    }
    function u(m) {
      switch (m) {
        case "basic":
        case "cors":
        case "default":
          return true;
      }
      return false;
    }
  }
  async function qe(t) {
    if (E !== void 0) return E;
    t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), t === void 0 && (t = new URL("" + new URL("onius_wasm_bg-CkYdbu9Z.wasm", import.meta.url).href, import.meta.url));
    const i = De();
    (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
    const { instance: u, module: m } = await He(await t, i);
    return Ue(u);
  }
  const A = document.getElementById("input"), U = document.getElementById("output"), S = document.getElementById("from-fmt"), F = document.getElementById("to-fmt"), G = document.getElementById("swap-btn"), me = document.getElementById("error-msg"), Y = document.getElementById("file-drop-zone"), be = document.getElementById("file-input"), Be = document.getElementById("drop-zone-text"), Ie = document.getElementById("drop-icon"), K = document.getElementById("image-preview"), Ne = Array.from(F.options);
  async function ze() {
    await qe();
    const t = document.querySelectorAll(".nav-btn"), i = document.querySelectorAll(".tool-view");
    t.forEach((e) => {
      e.addEventListener("click", () => {
        t.forEach((d) => d.classList.remove("active")), i.forEach((d) => {
          d.classList.remove("active"), d.classList.add("hidden");
        }), e.classList.add("active");
        const n = document.getElementById(e.dataset.target);
        n && (n.classList.remove("hidden"), n.classList.add("active")), document.querySelectorAll(".tool-credit").forEach((d) => d.classList.add("hidden"));
        const s = e.dataset.target === "view-base64" ? "credit-base64" : "credit-archive", l = document.getElementById(s);
        l && l.classList.remove("hidden");
      });
    });
    const u = (e) => {
      me.textContent = e, me.classList.remove("hidden");
    }, m = () => {
      me.classList.add("hidden");
    }, a = () => {
      const n = S.value === "image";
      F.innerHTML = "", Ne.forEach((r) => {
        const s = [
          "base64",
          "base64url",
          "hex"
        ].includes(r.value), l = r.value === "plain";
        n ? s && F.appendChild(r) : (l || s) && F.appendChild(r);
      }), Array.from(F.options).some((r) => r.value === F.value) || (F.selectedIndex = 0), n ? (A.classList.add("hidden"), Y.classList.remove("hidden"), A.value.startsWith("data:image") || (Ie.classList.remove("hidden"), K.classList.add("hidden"), K.src = "", Be.textContent = "Drag & drop an image or click to choose")) : (A.classList.remove("hidden"), Y.classList.add("hidden")), G.disabled = n, G.style.opacity = n ? "0.3" : "1", G.style.pointerEvents = n ? "none" : "auto";
    }, c = () => {
      m();
      let e = A.value;
      const n = S.value, r = F.value;
      if (!e) {
        U.value = "";
        return;
      }
      try {
        n === "image" && e.includes("base64,") && (e = e.split("base64,")[1]);
        const l = Me(e, n === "image" ? "base64" : n, r);
        U.value = l;
      } catch (s) {
        u(s), U.value = "";
      }
    };
    A.addEventListener("input", c), S.addEventListener("change", () => {
      a(), c();
    }), F.addEventListener("change", c);
    const o = (e) => {
      if (!e) return;
      const n = S.value;
      e.type.startsWith("image/") && n !== "image" && (S.value = "image", a());
      const r = new FileReader();
      r.onload = (l) => {
        let d = "";
        const f = S.value;
        if (f === "image") {
          const v = l.target.result;
          A.value = v, Ie.classList.add("hidden"), K.src = v, K.classList.remove("hidden"), Be.textContent = `Loaded: ${e.name}`, c();
          return;
        }
        if (f === "hex") {
          const v = new Uint8Array(l.target.result);
          d = Array.from(v).map((w) => w.toString(16).padStart(2, "0")).join("");
        }
        d && (A.value = d, c());
      };
      const s = S.value;
      if (s === "hex" || s === "image") s === "image" ? r.readAsDataURL(e) : r.readAsArrayBuffer(e);
      else {
        const l = new FileReader();
        l.onload = (d) => {
          A.value = d.target.result, c();
        }, l.readAsText(e);
      }
    };
    Y.addEventListener("click", () => {
      be.click();
    }), be.addEventListener("change", (e) => {
      o(e.target.files[0]);
    }), [
      A,
      Y
    ].forEach((e) => {
      e.addEventListener("dragover", (n) => {
        n.preventDefault(), e.classList.add("drag-over");
      }), [
        "dragleave",
        "dragend"
      ].forEach((n) => {
        e.addEventListener(n, () => {
          e.classList.remove("drag-over");
        });
      }), e.addEventListener("drop", (n) => {
        n.preventDefault(), e.classList.remove("drag-over"), o(n.dataTransfer.files[0]);
      });
    }), a(), G.addEventListener("click", () => {
      const e = A.value, n = S.value;
      A.value = U.value, S.value = F.value, U.value = e, F.value = n, c();
    }), c(), "serviceWorker" in navigator && window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((e) => console.log("SW registered")).catch((e) => console.error("SW registration failed", e));
    });
    const h = document.getElementById("mode-extract"), b = document.getElementById("mode-compress"), k = document.getElementById("compress-options"), _ = document.getElementById("archive-action-btn"), T = document.getElementById("browser-warning"), L = document.getElementById("archive-drop-zone"), M = "showDirectoryPicker" in window, C = document.getElementById("archive-file-input"), ue = document.getElementById("archive-folder-input"), z = document.getElementById("archive-drop-text"), xe = document.getElementById("archive-format"), Q = document.getElementById("archive-advance-btn"), O = document.getElementById("advanced-modal"), Ae = document.getElementById("modal-close"), Fe = document.getElementById("modal-save"), fe = document.getElementById("archive-password"), ge = document.getElementById("archive-clear-btn");
    document.querySelector(".drop-zone-controls");
    const y = (e, n = "", r = "\u{1F4E6}", s = false) => {
      ke.textContent = e, Ce.textContent = n, te.textContent = r, s ? te.classList.add("active") : te.classList.remove("active");
    }, ee = (e, n = "info") => {
      const r = document.createElement("div");
      r.className = `history-item ${n}`, r.innerHTML = `<span class="history-dot"></span><span>${e}</span>`, R.prepend(r), R.children.length > 5 && R.lastElementChild.remove();
    }, te = document.getElementById("status-icon"), ke = document.getElementById("status-text"), Ce = document.getElementById("status-subtext"), R = document.getElementById("status-history"), j = document.getElementById("archive-status-monitor"), Z = document.querySelector(".archive-grid"), ne = document.getElementById("container-extract"), pe = document.getElementById("container-compress");
    let p = [];
    const se = () => {
      const e = h.classList.contains("active");
      e && !M ? T.classList.remove("hidden") : T.classList.add("hidden"), L.classList.remove("hidden"), e ? (Q.classList.add("hidden"), C.multiple = false, pe.classList.add("hidden"), M ? (ne.classList.remove("hidden"), T.classList.add("hidden")) : (ne.classList.add("hidden"), T.classList.remove("hidden")), Z && Z.classList.add("extract-mode"), j && j.classList.add("compact")) : (Q.classList.remove("hidden"), C.multiple = true, T.classList.add("hidden"), ne.classList.add("hidden"), pe.classList.remove("hidden"), Z && Z.classList.remove("extract-mode"), j && j.classList.remove("compact"));
    };
    h.addEventListener("click", () => {
      h.classList.add("active"), b.classList.remove("active"), k.classList.add("hidden"), _.textContent = "Start Extraction", p = [], $(), se();
    }), b.addEventListener("click", () => {
      b.classList.add("active"), h.classList.remove("active"), k.classList.remove("hidden"), _.textContent = "Start Compression", p = [], $(), se();
    });
    const ve = (e) => e.classList.remove("hidden"), V = (e) => e.classList.add("hidden");
    Q.addEventListener("click", () => ve(O)), Ae.addEventListener("click", () => V(O)), Fe.addEventListener("click", () => V(O)), window.addEventListener("click", (e) => {
      e.target === O && V(O), e.target === document.getElementById("password-modal") && document.getElementById("password-modal").classList.add("hidden");
    });
    const Re = () => new Promise((e) => {
      const n = document.getElementById("password-modal"), r = document.getElementById("password-submit-btn"), s = document.getElementById("password-modal-close"), l = document.getElementById("modal-password-input");
      l.value = "", ve(n), l.focus();
      const d = () => {
        const w = l.value.trim();
        w && (v(), e(w));
      }, f = () => {
        v(), e(null);
      }, v = () => {
        r.removeEventListener("click", d), s.removeEventListener("click", f), V(n);
      };
      r.addEventListener("click", d), s.addEventListener("click", f), l.onkeydown = (w) => {
        w.key === "Enter" && d(), w.key === "Escape" && f();
      };
    }), $ = () => {
      const e = h.classList.contains("active");
      if (p.length === 0) e ? z.innerHTML = '<span class="main-text">Drag & drop an archive or click to browse</span>' : z.innerHTML = '<span class="main-text">Drag & drop files or a folder here or click to browse</span>', y("Ready to process", "No files selected"), R.innerHTML = '<div class="history-item info"><span class="history-dot"></span><span>Waiting for manifest...</span></div>';
      else if (p.length === 1) {
        const n = p[0].name;
        if (z.innerHTML = `Ready: <strong>${n}</strong>`, y("Item Ready", n, "\u{1F4C4}"), !e) {
          R.innerHTML = "";
          const r = document.createElement("div");
          r.className = "history-item info", r.innerHTML = `<span>\u{1F4C4} ${n}</span>`, R.appendChild(r);
        }
      } else z.innerHTML = `Ready: <strong>${p.length} files selected</strong>`, y("Multiple Items Ready", `${p.length} files staged`, "\u{1F4C1}"), R.innerHTML = "", p.forEach((n) => {
        const r = document.createElement("div");
        r.className = "history-item info";
        const s = n.name.includes("/");
        r.innerHTML = `<span>${s ? "\u{1F4C1}" : "\u{1F4C4}"} ${n.name}</span>`, R.appendChild(r);
      });
    };
    (() => {
      ge && (ge.onclick = (e) => {
        e.stopPropagation(), p = [], $(), R.innerHTML = "";
      });
    })();
    const re = (e) => {
      const n = h.classList.contains("active"), s = Array.from(e).map((l) => ({
        name: l.webkitRelativePath || l.name,
        file: l
      }));
      n ? p = s.length > 0 ? [
        s[0]
      ] : [] : p = [
        ...p,
        ...s
      ], $();
    }, ie = async (e, n = "") => {
      if (e.isFile) return new Promise((r) => {
        e.file((s) => {
          r([
            {
              name: n + s.name,
              file: s
            }
          ]);
        });
      });
      if (e.isDirectory) {
        const r = e.createReader(), s = await new Promise((d) => r.readEntries(d));
        return (await Promise.all(s.map((d) => ie(d, n + e.name + "/")))).flat();
      }
      return [];
    }, ae = (e, n, r = false) => {
      e.addEventListener("dragover", (s) => {
        s.preventDefault(), e.classList.add("drag-over");
      }), e.addEventListener("dragleave", () => e.classList.remove("drag-over")), e.addEventListener("drop", async (s) => {
        s.preventDefault(), e.classList.remove("drag-over");
        const l = h.classList.contains("active"), d = s.dataTransfer.items;
        if (d) {
          let f = Array.from(d).map((v) => v.webkitGetAsEntry()).filter(Boolean);
          if (l) {
            const v = f.filter((w) => w.isFile);
            v.length > 0 && (p = await ie(v[0]));
          } else {
            const v = r ? f.filter((W) => W.isDirectory) : f, w = await Promise.all(v.map((W) => ie(W)));
            p = [
              ...p,
              ...w.flat()
            ];
          }
        } else if (l) {
          const f = Array.from(s.dataTransfer.files);
          p = f.length > 0 ? [
            {
              name: f[0].name,
              file: f[0]
            }
          ] : [];
        } else re(s.dataTransfer.files);
        $();
      }), e.addEventListener("click", () => n.click());
    };
    ae(L, C);
    const he = document.getElementById("drop-zone-files"), ye = document.getElementById("drop-zone-folder");
    he && ae(he, C), ye && ae(ye, ue), C.addEventListener("change", (e) => {
      re(e.target.files);
    }), ue.addEventListener("change", (e) => {
      re(e.target.files);
    });
    const oe = (e, n) => {
      const r = URL.createObjectURL(e), s = document.createElement("a");
      s.href = r, s.download = n, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(r);
    };
    se(), $(), _.addEventListener("click", async () => {
      if (p.length === 0) {
        y("Nothing to do", "Please select some files first", "\u2753");
        return;
      }
      const e = h.classList.contains("active"), n = fe.value.trim(), r = xe.value;
      y(e ? "Extracting..." : "Compressing...", "Initializing WASM engine", "\u2699\uFE0F", true), _.disabled = true;
      try {
        const s = await Te(() => import("./archive-BbxB2fn2.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url), l = (d) => {
          console.log(`[7z] ${d.trim()}`);
          const f = d.toLowerCase();
          f.includes("reading") && y(e ? "Reading Archive" : "Reading Files", "Preparing data...", "\u{1F4D6}", true), f.includes("success") && ee(e ? "Extraction successful" : "Compression successful", "success");
        };
        if (e) {
          if (p.length > 1) {
            y("Error", "Single file only", "\u274C"), _.disabled = false;
            return;
          }
          const f = p[0].file, v = await f.arrayBuffer(), w = async (B, I, x) => {
            let D = await s.extractArchive(new Uint8Array(B), I, x, l);
            for (; D.length === 1 && /\.(tar|tgz|tar\.gz|tar\.bz2|tar\.xz)$/i.test(D[0].name); ) D = await s.extractArchive(D[0].data, D[0].name, x, l);
            return D;
          };
          let W = null;
          if ("showDirectoryPicker" in window) try {
            y("Pending Action", "Choose destination folder", "\u{1F4C2}", true), W = await window.showDirectoryPicker({
              mode: "readwrite"
            });
          } catch {
            y("Action Cancelled", "Folder not selected", "\u{1F4E6}"), _.disabled = false;
            return;
          }
          let P;
          try {
            y("Processing...", "Running extraction engine", "\u2699\uFE0F", true), P = await w(v, f.name, n);
          } catch (B) {
            if (B.name === "PasswordRequiredError") {
              y("Locked Archive", "Enter password to continue", "\u{1F511}");
              const I = await Re();
              if (I !== null) fe.value = I, y("Processing...", "Running extraction engine", "\u2699\uFE0F", true), P = await w(v, f.name, I);
              else throw new Error("Cancelled: Password required.");
            } else throw B;
          }
          if (W) {
            let B = 0;
            for (const I of P) try {
              y("Saving...", `Writing file ${B + 1} of ${P.length}`, "\u{1F4BE}", true);
              const x = I.name.split("/"), D = x.pop();
              let ce = W;
              for (const Ee of x) Ee.trim() !== "" && (ce = await ce.getDirectoryHandle(Ee, {
                create: true
              }));
              const we = await (await ce.getFileHandle(D, {
                create: true
              })).createWritable();
              await we.write(I.data), await we.close(), B++;
            } catch (x) {
              console.error(`Save error: ${I.name}`, x), ee(`Failed to save ${I.name}: ${x.name}`, "error");
            }
            y("\u2705 Complete!", `Saved ${B} files successfully`, "\u2705");
          } else {
            if (y("Finalizing...", "Preparing downloads", "\u{1F4E6}", true), P.length > 1) {
              const B = {};
              P.forEach((x) => B[x.name] = x.data);
              const I = await s.compressFiles(B, "zip", null, () => {
              });
              oe(new Blob([
                I
              ]), `extracted_${f.name.split(".")[0]}.zip`);
            } else P.length === 1 && oe(new Blob([
              P[0].data
            ]), P[0].name);
            y("Success!", "Download started", "\u2705");
          }
        } else {
          y("Compressing...", `Packing ${p.length} items`, "\u2699\uFE0F", true);
          const d = {};
          for (const v of p) {
            const w = await v.file.arrayBuffer();
            d[v.name] = new Uint8Array(w);
          }
          const f = await s.compressFiles(d, r, n, l);
          oe(new Blob([
            f
          ]), `archive.${r}`), y("Success!", `Created ${r.toUpperCase()} archive`, "\u2705");
        }
      } catch (s) {
        y("Process Failed", s.message || "Check console", "\u274C"), ee(s.message, "error"), console.error(s);
      } finally {
        _.disabled = false;
      }
    });
  }
  ze().catch(console.error);
})();
export {
  Te as _,
  __tla
};
