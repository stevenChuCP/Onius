var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as St, __tla as __tla_0 } from "./index-BParov67.js";
let Rt, Ft;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Dt = async function(T = {}) {
    var _a;
    var D, f = T, U = typeof window == "object", F = typeof WorkerGlobalScope < "u", O = typeof process == "object" && ((_a = process.versions) == null ? void 0 : _a.node) && process.type != "renderer";
    if (O) {
      const { createRequire: e } = await St(() => import("./__vite-browser-external-BIHI7g3E.js"), [], import.meta.url);
      var A = e(import.meta.url);
    }
    f.noInitialRun = true;
    var P = [], I = "./this.program", H = (e, r) => {
      throw r;
    }, S = import.meta.url, L = "";
    function z(e) {
      return f.locateFile ? f.locateFile(e, L) : L + e;
    }
    var B, j;
    if (O) {
      var E = A("fs");
      S.startsWith("file:") && (L = A("path").dirname(A("url").fileURLToPath(S)) + "/"), j = (e) => {
        e = de(e) ? new URL(e) : e;
        var r = E.readFileSync(e);
        return r;
      }, B = async (e, r = true) => {
        e = de(e) ? new URL(e) : e;
        var t = E.readFileSync(e, r ? void 0 : "utf8");
        return t;
      }, process.argv.length > 1 && (I = process.argv[1].replace(/\\/g, "/")), P = process.argv.slice(2), H = (e, r) => {
        throw process.exitCode = e, r;
      };
    } else if (U || F) {
      try {
        L = new URL(".", S).href;
      } catch {
      }
      F && (j = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), B = async (e) => {
        if (de(e)) return new Promise((t, o) => {
          var a = new XMLHttpRequest();
          a.open("GET", e, true), a.responseType = "arraybuffer", a.onload = () => {
            if (a.status == 200 || a.status == 0 && a.response) {
              t(a.response);
              return;
            }
            o(a.status);
          }, a.onerror = o, a.send(null);
        });
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    }
    var G = console.log.bind(console), q = console.error.bind(console), ne, he = false, we;
    function Re(e, r) {
      e || me(r);
    }
    var de = (e) => e.startsWith("file://"), Te, Ae, ve, M, oe, ae, c, N, W, be = false;
    function Me() {
      var e = ve.buffer;
      M = new Int8Array(e), ae = new Int16Array(e), oe = new Uint8Array(e), c = new Int32Array(e), N = new Uint32Array(e), W = new BigInt64Array(e), new BigUint64Array(e);
    }
    function rr() {
      if (f.preRun) for (typeof f.preRun == "function" && (f.preRun = [
        f.preRun
      ]); f.preRun.length; ) dr(f.preRun.shift());
      Ie(ze);
    }
    function tr() {
      be = true, !f.noFSInit && !n.initialized && n.init(), fe.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function nr() {
      if (f.postRun) for (typeof f.postRun == "function" && (f.postRun = [
        f.postRun
      ]); f.postRun.length; ) cr(f.postRun.shift());
      Ie(Le);
    }
    var Z = 0, ie = null;
    function Pe(e) {
      var _a2;
      Z++, (_a2 = f.monitorRunDependencies) == null ? void 0 : _a2.call(f, Z);
    }
    function ye(e) {
      var _a2;
      if (Z--, (_a2 = f.monitorRunDependencies) == null ? void 0 : _a2.call(f, Z), Z == 0 && ie) {
        var r = ie;
        ie = null, r();
      }
    }
    function me(e) {
      var _a2;
      (_a2 = f.onAbort) == null ? void 0 : _a2.call(f, e), e = "Aborted(" + e + ")", q(e), he = true, e += ". Build with -sASSERTIONS for more info.";
      var r = new WebAssembly.RuntimeError(e);
      throw Ae == null ? void 0 : Ae(r), r;
    }
    var _e;
    function or() {
      return f.locateFile ? z("7zz.wasm") : new URL("" + new URL("7zz-CgkXYLdN.wasm", import.meta.url).href, import.meta.url).href;
    }
    function ar(e) {
      if (e == _e && ne) return new Uint8Array(ne);
      if (j) return j(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function ir(e) {
      if (!ne) try {
        var r = await B(e);
        return new Uint8Array(r);
      } catch {
      }
      return ar(e);
    }
    async function sr(e, r) {
      try {
        var t = await ir(e), o = await WebAssembly.instantiate(t, r);
        return o;
      } catch (a) {
        q(`failed to asynchronously prepare wasm: ${a}`), me(a);
      }
    }
    async function lr(e, r, t) {
      if (!e && typeof WebAssembly.instantiateStreaming == "function" && !de(r) && !O) try {
        var o = fetch(r, {
          credentials: "same-origin"
        }), a = await WebAssembly.instantiateStreaming(o, t);
        return a;
      } catch (i) {
        q(`wasm streaming compile failed: ${i}`), q("falling back to ArrayBuffer instantiation");
      }
      return sr(r, t);
    }
    function ur() {
      return {
        env: Je,
        wasi_snapshot_preview1: Je
      };
    }
    async function fr() {
      function e(i, s) {
        return fe = i.exports, ve = fe.memory, Me(), gt(fe), ye(), fe;
      }
      Pe();
      function r(i) {
        return e(i.instance);
      }
      var t = ur();
      if (f.instantiateWasm) return new Promise((i, s) => {
        f.instantiateWasm(t, (l, u) => {
          i(e(l));
        });
      });
      _e ?? (_e = or());
      var o = await lr(ne, _e, t), a = r(o);
      return a;
    }
    class Ce {
      constructor(r) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${r})`, this.status = r;
      }
    }
    var Ie = (e) => {
      for (; e.length > 0; ) e.shift()(f);
    }, Le = [], cr = (e) => Le.push(e), ze = [], dr = (e) => ze.push(e), Ue = true;
    class vr {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        N[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return N[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        N[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return N[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, M[this.ptr + 12] = r;
      }
      get_caught() {
        return M[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, M[this.ptr + 13] = r;
      }
      get_rethrown() {
        return M[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        N[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return N[this.ptr + 16 >> 2];
      }
    }
    var Be = 0, mr = (e, r, t) => {
      var o = new vr(e);
      throw o.init(r, t), Be = e, Be;
    }, g = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(e).slice(1);
      },
      normalizeArray: (e, r) => {
        for (var t = 0, o = e.length - 1; o >= 0; o--) {
          var a = e[o];
          a === "." ? e.splice(o, 1) : a === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
        }
        if (r) for (; t; t--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var r = g.isAbs(e), t = e.slice(-1) === "/";
        return e = g.normalizeArray(e.split("/").filter((o) => !!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = g.splitPath(e), t = r[0], o = r[1];
        return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => g.normalize(e.join("/")),
      join2: (e, r) => g.normalize(e + "/" + r)
    }, Er = () => {
      if (O) {
        var e = A("crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, xe = (e) => {
      (xe = Er())(e);
    }, ee = {
      resolve: (...e) => {
        for (var r = "", t = false, o = e.length - 1; o >= -1 && !t; o--) {
          var a = o >= 0 ? e[o] : n.cwd();
          if (typeof a != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!a) return "";
          r = a + "/" + r, t = g.isAbs(a);
        }
        return r = g.normalizeArray(r.split("/").filter((i) => !!i), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = ee.resolve(e).slice(1), r = ee.resolve(r).slice(1);
        function t(d) {
          for (var p = 0; p < d.length && d[p] === ""; p++) ;
          for (var k = d.length - 1; k >= 0 && d[k] === ""; k--) ;
          return p > k ? [] : d.slice(p, k - p + 1);
        }
        for (var o = t(e.split("/")), a = t(r.split("/")), i = Math.min(o.length, a.length), s = i, l = 0; l < i; l++) if (o[l] !== a[l]) {
          s = l;
          break;
        }
        for (var u = [], l = s; l < o.length; l++) u.push("..");
        return u = u.concat(a.slice(s)), u.join("/");
      }
    }, je = typeof TextDecoder < "u" ? new TextDecoder() : void 0, re = (e, r = 0, t = NaN) => {
      for (var o = r + t, a = r; e[a] && !(a >= o); ) ++a;
      if (a - r > 16 && e.buffer && je) return je.decode(e.subarray(r, a));
      for (var i = ""; r < a; ) {
        var s = e[r++];
        if (!(s & 128)) {
          i += String.fromCharCode(s);
          continue;
        }
        var l = e[r++] & 63;
        if ((s & 224) == 192) {
          i += String.fromCharCode((s & 31) << 6 | l);
          continue;
        }
        var u = e[r++] & 63;
        if ((s & 240) == 224 ? s = (s & 15) << 12 | l << 6 | u : s = (s & 7) << 18 | l << 12 | u << 6 | e[r++] & 63, s < 65536) i += String.fromCharCode(s);
        else {
          var d = s - 65536;
          i += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023);
        }
      }
      return i;
    }, pe = [], se = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var o = e.charCodeAt(t);
        o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, We = (e, r, t, o) => {
      if (!(o > 0)) return 0;
      for (var a = t, i = t + o - 1, s = 0; s < e.length; ++s) {
        var l = e.codePointAt(s);
        if (l <= 127) {
          if (t >= i) break;
          r[t++] = l;
        } else if (l <= 2047) {
          if (t + 1 >= i) break;
          r[t++] = 192 | l >> 6, r[t++] = 128 | l & 63;
        } else if (l <= 65535) {
          if (t + 2 >= i) break;
          r[t++] = 224 | l >> 12, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63;
        } else {
          if (t + 3 >= i) break;
          r[t++] = 240 | l >> 18, r[t++] = 128 | l >> 12 & 63, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63, s++;
        }
      }
      return r[t] = 0, t - a;
    }, ge = (e, r, t) => {
      var o = se(e) + 1, a = new Array(o), i = We(e, a, 0, a.length);
      return a.length = i, a;
    }, hr = () => {
      if (!pe.length) {
        var e = null;
        if (O) {
          var r = 256, t = Buffer.alloc(r), o = 0, a = process.stdin.fd;
          try {
            o = E.readSync(a, t, 0, r);
          } catch (i) {
            if (i.toString().includes("EOF")) o = 0;
            else throw i;
          }
          o > 0 && (e = t.slice(0, o).toString("utf-8"));
        } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        pe = ge(e);
      }
      return pe.shift();
    }, J = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, r) {
        J.ttys[e] = {
          input: [],
          output: [],
          ops: r
        }, n.registerDevice(e, J.stream_ops);
      },
      stream_ops: {
        open(e) {
          var r = J.ttys[e.node.rdev];
          if (!r) throw new n.ErrnoError(43);
          e.tty = r, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, r, t, o, a) {
          if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
          for (var i = 0, s = 0; s < o; s++) {
            var l;
            try {
              l = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (l === void 0 && i === 0) throw new n.ErrnoError(6);
            if (l == null) break;
            i++, r[t + s] = l;
          }
          return i && (e.node.atime = Date.now()), i;
        },
        write(e, r, t, o, a) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var i = 0; i < o; i++) e.tty.ops.put_char(e.tty, r[t + i]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), i;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return hr();
        },
        put_char(e, r) {
          r === null || r === 10 ? (G(re(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (G(re(e.output)), e.output = []);
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
        ioctl_tcsets(e, r, t) {
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
        put_char(e, r) {
          r === null || r === 10 ? (q(re(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (q(re(e.output)), e.output = []);
        }
      }
    }, ke = (e) => {
      me();
    }, h = {
      ops_table: null,
      mount(e) {
        return h.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, o) {
        if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
        h.ops_table || (h.ops_table = {
          dir: {
            node: {
              getattr: h.node_ops.getattr,
              setattr: h.node_ops.setattr,
              lookup: h.node_ops.lookup,
              mknod: h.node_ops.mknod,
              rename: h.node_ops.rename,
              unlink: h.node_ops.unlink,
              rmdir: h.node_ops.rmdir,
              readdir: h.node_ops.readdir,
              symlink: h.node_ops.symlink
            },
            stream: {
              llseek: h.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: h.node_ops.getattr,
              setattr: h.node_ops.setattr
            },
            stream: {
              llseek: h.stream_ops.llseek,
              read: h.stream_ops.read,
              write: h.stream_ops.write,
              mmap: h.stream_ops.mmap,
              msync: h.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: h.node_ops.getattr,
              setattr: h.node_ops.setattr,
              readlink: h.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: h.node_ops.getattr,
              setattr: h.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var a = n.createNode(e, r, t, o);
        return n.isDir(a.mode) ? (a.node_ops = h.ops_table.dir.node, a.stream_ops = h.ops_table.dir.stream, a.contents = {}) : n.isFile(a.mode) ? (a.node_ops = h.ops_table.file.node, a.stream_ops = h.ops_table.file.stream, a.usedBytes = 0, a.contents = null) : n.isLink(a.mode) ? (a.node_ops = h.ops_table.link.node, a.stream_ops = h.ops_table.link.stream) : n.isChrdev(a.mode) && (a.node_ops = h.ops_table.chrdev.node, a.stream_ops = h.ops_table.chrdev.stream), a.atime = a.mtime = a.ctime = Date.now(), e && (e.contents[r] = a, e.atime = e.mtime = e.ctime = a.atime), a;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, r) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= r)) {
          var o = 1024 * 1024;
          r = Math.max(r, t * (t < o ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
          var a = e.contents;
          e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(a.subarray(0, e.usedBytes), 0);
        }
      },
      resizeFileStorage(e, r) {
        if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
        else {
          var t = e.contents;
          e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
        }
      },
      node_ops: {
        getattr(e) {
          var r = {};
          return r.dev = n.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, n.isDir(e.mode) ? r.size = 4096 : n.isFile(e.mode) ? r.size = e.usedBytes : n.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
        },
        setattr(e, r) {
          for (const t of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) r[t] != null && (e[t] = r[t]);
          r.size !== void 0 && h.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw h.doesNotExistError;
        },
        mknod(e, r, t, o) {
          return h.createNode(e, r, t, o);
        },
        rename(e, r, t) {
          var o;
          try {
            o = n.lookupNode(r, t);
          } catch {
          }
          if (o) {
            if (n.isDir(e.mode)) for (var a in o.contents) throw new n.ErrnoError(55);
            n.hashRemoveNode(o);
          }
          delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, r) {
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, r) {
          var t = n.lookupNode(e, r);
          for (var o in t.contents) throw new n.ErrnoError(55);
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        readdir(e) {
          return [
            ".",
            "..",
            ...Object.keys(e.contents)
          ];
        },
        symlink(e, r, t) {
          var o = h.createNode(e, r, 41471, 0);
          return o.link = t, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, o, a) {
          var i = e.node.contents;
          if (a >= e.node.usedBytes) return 0;
          var s = Math.min(e.node.usedBytes - a, o);
          if (s > 8 && i.subarray) r.set(i.subarray(a, a + s), t);
          else for (var l = 0; l < s; l++) r[t + l] = i[a + l];
          return s;
        },
        write(e, r, t, o, a, i) {
          if (r.buffer === M.buffer && (i = false), !o) return 0;
          var s = e.node;
          if (s.mtime = s.ctime = Date.now(), r.subarray && (!s.contents || s.contents.subarray)) {
            if (i) return s.contents = r.subarray(t, t + o), s.usedBytes = o, o;
            if (s.usedBytes === 0 && a === 0) return s.contents = r.slice(t, t + o), s.usedBytes = o, o;
            if (a + o <= s.usedBytes) return s.contents.set(r.subarray(t, t + o), a), o;
          }
          if (h.expandFileStorage(s, a + o), s.contents.subarray && r.subarray) s.contents.set(r.subarray(t, t + o), a);
          else for (var l = 0; l < o; l++) s.contents[a + l] = r[t + l];
          return s.usedBytes = Math.max(s.usedBytes, a + o), o;
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, a) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var i, s, l = e.node.contents;
          if (!(a & 2) && l && l.buffer === M.buffer) s = false, i = l.byteOffset;
          else {
            if (s = true, i = ke(), !i) throw new n.ErrnoError(48);
            l && ((t > 0 || t + r < l.length) && (l.subarray ? l = l.subarray(t, t + r) : l = Array.prototype.slice.call(l, t, t + r)), M.set(l, i));
          }
          return {
            ptr: i,
            allocated: s
          };
        },
        msync(e, r, t, o, a) {
          return h.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, wr = async (e) => {
      var r = await B(e);
      return new Uint8Array(r);
    }, yr = (...e) => n.createDataFile(...e), He = [], _r = (e, r, t, o) => {
      typeof Browser < "u" && Browser.init();
      var a = false;
      return He.forEach((i) => {
        a || i.canHandle(r) && (i.handle(e, r, t, o), a = true);
      }), a;
    }, pr = (e, r, t, o, a, i, s, l, u, d) => {
      var p = r ? ee.resolve(g.join2(e, r)) : e;
      function k(w) {
        function m(_) {
          d == null ? void 0 : d(), l || yr(e, r, _, o, a, u), i == null ? void 0 : i(), ye();
        }
        _r(w, p, m, () => {
          s == null ? void 0 : s(), ye();
        }) || m(w);
      }
      Pe(), typeof t == "string" ? wr(t).then(k, s) : k(t);
    }, gr = (e) => {
      var r = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      }, t = r[e];
      if (typeof t > "u") throw new Error(`Unknown file open mode: ${e}`);
      return t;
    }, Se = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, kr = {
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
    }, v = {
      isWindows: false,
      staticInit() {
        v.isWindows = !!process.platform.match(/^win/);
        var e = process.binding("constants").fs;
        v.flagsForNodeMap = {
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
        var r = e.code;
        return kr[r];
      },
      tryFSOperation(e) {
        try {
          return e();
        } catch (r) {
          throw r.code ? r.code === "UNKNOWN" ? new n.ErrnoError(28) : new n.ErrnoError(v.convertNodeCode(r)) : r;
        }
      },
      mount(e) {
        return v.createNode(null, "/", v.getMode(e.opts.root), 0);
      },
      createNode(e, r, t, o) {
        if (!n.isDir(t) && !n.isFile(t) && !n.isLink(t)) throw new n.ErrnoError(28);
        var a = n.createNode(e, r, t);
        return a.node_ops = v.node_ops, a.stream_ops = v.stream_ops, a;
      },
      getMode(e) {
        return v.tryFSOperation(() => {
          var r = E.lstatSync(e).mode;
          return v.isWindows && (r |= (r & 292) >> 2), r;
        });
      },
      realPath(e) {
        for (var r = []; e.parent !== e; ) r.push(e.name), e = e.parent;
        return r.push(e.mount.opts.root), r.reverse(), g.join(...r);
      },
      flagsForNode(e) {
        e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
        var r = 0;
        for (var t in v.flagsForNodeMap) e & t && (r |= v.flagsForNodeMap[t], e ^= t);
        if (e) throw new n.ErrnoError(28);
        return r;
      },
      getattr(e, r) {
        var t = v.tryFSOperation(e);
        return v.isWindows && (t.blksize || (t.blksize = 4096), t.blocks || (t.blocks = (t.size + t.blksize - 1) / t.blksize | 0), t.mode |= (t.mode & 292) >> 2), {
          dev: t.dev,
          ino: r.id,
          mode: t.mode,
          nlink: t.nlink,
          uid: t.uid,
          gid: t.gid,
          rdev: t.rdev,
          size: t.size,
          atime: t.atime,
          mtime: t.mtime,
          ctime: t.ctime,
          blksize: t.blksize,
          blocks: t.blocks
        };
      },
      setattr(e, r, t, o, a, i, s) {
        v.tryFSOperation(() => {
          if (t.mode !== void 0) {
            var l = t.mode;
            v.isWindows && (l &= 384), o(e, l), r.mode = t.mode;
          }
          if (typeof (t.atime ?? t.mtime) == "number") {
            var u = new Date(t.atime ?? s(e).atime), d = new Date(t.mtime ?? s(e).mtime);
            a(e, u, d);
          }
          t.size !== void 0 && i(e, t.size);
        });
      },
      node_ops: {
        getattr(e) {
          var r = v.realPath(e);
          return v.getattr(() => E.lstatSync(r), e);
        },
        setattr(e, r) {
          var t = v.realPath(e);
          if (r.mode != null && r.dontFollow) throw new n.ErrnoError(52);
          v.setattr(t, e, r, E.chmodSync, E.utimesSync, E.truncateSync, E.lstatSync);
        },
        lookup(e, r) {
          var t = g.join2(v.realPath(e), r), o = v.getMode(t);
          return v.createNode(e, r, o);
        },
        mknod(e, r, t, o) {
          var a = v.createNode(e, r, t, o), i = v.realPath(a);
          return v.tryFSOperation(() => {
            n.isDir(a.mode) ? E.mkdirSync(i, a.mode) : E.writeFileSync(i, "", {
              mode: a.mode
            });
          }), a;
        },
        rename(e, r, t) {
          var o = v.realPath(e), a = g.join2(v.realPath(r), t);
          try {
            n.unlink(a);
          } catch {
          }
          v.tryFSOperation(() => E.renameSync(o, a)), e.name = t;
        },
        unlink(e, r) {
          var t = g.join2(v.realPath(e), r);
          v.tryFSOperation(() => E.unlinkSync(t));
        },
        rmdir(e, r) {
          var t = g.join2(v.realPath(e), r);
          v.tryFSOperation(() => E.rmdirSync(t));
        },
        readdir(e) {
          var r = v.realPath(e);
          return v.tryFSOperation(() => E.readdirSync(r));
        },
        symlink(e, r, t) {
          var o = g.join2(v.realPath(e), r);
          v.tryFSOperation(() => E.symlinkSync(t, o));
        },
        readlink(e) {
          var r = v.realPath(e);
          return v.tryFSOperation(() => E.readlinkSync(r));
        },
        statfs(e) {
          var r = v.tryFSOperation(() => E.statfsSync(e));
          return r.frsize = r.bsize, r;
        }
      },
      stream_ops: {
        getattr(e) {
          return v.getattr(() => E.fstatSync(e.nfd), e.node);
        },
        setattr(e, r) {
          v.setattr(e.nfd, e.node, r, E.fchmodSync, E.futimesSync, E.ftruncateSync, E.fstatSync);
        },
        open(e) {
          var r = v.realPath(e.node);
          v.tryFSOperation(() => {
            e.shared.refcount = 1, e.nfd = E.openSync(r, v.flagsForNode(e.flags));
          });
        },
        close(e) {
          v.tryFSOperation(() => {
            e.nfd && --e.shared.refcount === 0 && E.closeSync(e.nfd);
          });
        },
        dup(e) {
          e.shared.refcount++;
        },
        read(e, r, t, o, a) {
          return v.tryFSOperation(() => E.readSync(e.nfd, new Int8Array(r.buffer, t, o), 0, o, a));
        },
        write(e, r, t, o, a) {
          return v.tryFSOperation(() => E.writeSync(e.nfd, new Int8Array(r.buffer, t, o), 0, o, a));
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && v.tryFSOperation(() => {
            var a = E.fstatSync(e.nfd);
            o += a.size;
          }), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, a) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var i = ke();
          return v.stream_ops.read(e, M, i, r, t), {
            ptr: i,
            allocated: true
          };
        },
        msync(e, r, t, o, a) {
          return v.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, b = {
      DIR_MODE: 16895,
      FILE_MODE: 33279,
      reader: null,
      mount(e) {
        Re(F), b.reader ?? (b.reader = new FileReaderSync());
        var r = b.createNode(null, "/", b.DIR_MODE, 0), t = {};
        function o(i) {
          for (var s = i.split("/"), l = r, u = 0; u < s.length - 1; u++) {
            var d = s.slice(0, u + 1).join("/");
            t[d] || (t[d] = b.createNode(l, s[u], b.DIR_MODE, 0)), l = t[d];
          }
          return l;
        }
        function a(i) {
          var s = i.split("/");
          return s[s.length - 1];
        }
        return Array.prototype.forEach.call(e.opts.files || [], function(i) {
          b.createNode(o(i.name), a(i.name), b.FILE_MODE, 0, i, i.lastModifiedDate);
        }), (e.opts.blobs || []).forEach((i) => {
          b.createNode(o(i.name), a(i.name), b.FILE_MODE, 0, i.data);
        }), (e.opts.packages || []).forEach((i) => {
          i.metadata.files.forEach((s) => {
            var l = s.filename.slice(1);
            b.createNode(o(l), a(l), b.FILE_MODE, 0, i.blob.slice(s.start, s.end));
          });
        }), r;
      },
      createNode(e, r, t, o, a, i) {
        var s = n.createNode(e, r, t);
        return s.mode = t, s.node_ops = b.node_ops, s.stream_ops = b.stream_ops, s.atime = s.mtime = s.ctime = (i || /* @__PURE__ */ new Date()).getTime(), Re(b.FILE_MODE !== b.DIR_MODE), t === b.FILE_MODE ? (s.size = a.size, s.contents = a) : (s.size = 4096, s.contents = {}), e && (e.contents[r] = s), s;
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
        setattr(e, r) {
          for (const t of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) r[t] != null && (e[t] = r[t]);
        },
        lookup(e, r) {
          throw new n.ErrnoError(44);
        },
        mknod(e, r, t, o) {
          throw new n.ErrnoError(63);
        },
        rename(e, r, t) {
          throw new n.ErrnoError(63);
        },
        unlink(e, r) {
          throw new n.ErrnoError(63);
        },
        rmdir(e, r) {
          throw new n.ErrnoError(63);
        },
        readdir(e) {
          var r = [
            ".",
            ".."
          ];
          for (var t of Object.keys(e.contents)) r.push(t);
          return r;
        },
        symlink(e, r, t) {
          throw new n.ErrnoError(63);
        }
      },
      stream_ops: {
        read(e, r, t, o, a) {
          if (a >= e.node.size) return 0;
          var i = e.node.contents.slice(a, a + o), s = b.reader.readAsArrayBuffer(i);
          return r.set(new Uint8Array(s), t), i.size;
        },
        write(e, r, t, o, a) {
          throw new n.ErrnoError(29);
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.size), o < 0) throw new n.ErrnoError(28);
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
        constructor(e, r, t, o) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = n.nextInode++, this.name = r, this.mode = t, this.rdev = o, this.atime = this.mtime = this.ctime = Date.now();
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
      lookupPath(e, r = {}) {
        if (!e) throw new n.ErrnoError(44);
        r.follow_mount ?? (r.follow_mount = true), g.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var o = e.split("/").filter((d) => !!d), a = n.root, i = "/", s = 0; s < o.length; s++) {
            var l = s === o.length - 1;
            if (l && r.parent) break;
            if (o[s] !== ".") {
              if (o[s] === "..") {
                if (i = g.dirname(i), n.isRoot(a)) {
                  e = i + "/" + o.slice(s + 1).join("/");
                  continue e;
                } else a = a.parent;
                continue;
              }
              i = g.join2(i, o[s]);
              try {
                a = n.lookupNode(a, o[s]);
              } catch (d) {
                if ((d == null ? void 0 : d.errno) === 44 && l && r.noent_okay) return {
                  path: i
                };
                throw d;
              }
              if (n.isMountpoint(a) && (!l || r.follow_mount) && (a = a.mounted.root), n.isLink(a.mode) && (!l || r.follow)) {
                if (!a.node_ops.readlink) throw new n.ErrnoError(52);
                var u = a.node_ops.readlink(a);
                g.isAbs(u) || (u = g.dirname(i) + "/" + u), e = u + "/" + o.slice(s + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: i,
            node: a
          };
        }
        throw new n.ErrnoError(32);
      },
      getPath(e) {
        for (var r; ; ) {
          if (n.isRoot(e)) {
            var t = e.mount.mountpoint;
            return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
          }
          r = r ? `${e.name}/${r}` : e.name, e = e.parent;
        }
      },
      hashName(e, r) {
        for (var t = 0, o = 0; o < r.length; o++) t = (t << 5) - t + r.charCodeAt(o) | 0;
        return (e + t >>> 0) % n.nameTable.length;
      },
      hashAddNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[r], n.nameTable[r] = e;
      },
      hashRemoveNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        if (n.nameTable[r] === e) n.nameTable[r] = e.name_next;
        else for (var t = n.nameTable[r]; t; ) {
          if (t.name_next === e) {
            t.name_next = e.name_next;
            break;
          }
          t = t.name_next;
        }
      },
      lookupNode(e, r) {
        var t = n.mayLookup(e);
        if (t) throw new n.ErrnoError(t);
        for (var o = n.hashName(e.id, r), a = n.nameTable[o]; a; a = a.name_next) {
          var i = a.name;
          if (a.parent.id === e.id && i === r) return a;
        }
        return n.lookup(e, r);
      },
      createNode(e, r, t, o) {
        var a = new n.FSNode(e, r, t, o);
        return n.hashAddNode(a), a;
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
        var r = [
          "r",
          "w",
          "rw"
        ][e & 3];
        return e & 512 && (r += "w"), r;
      },
      nodePermissions(e, r) {
        return n.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!n.isDir(e.mode)) return 54;
        var r = n.nodePermissions(e, "x");
        return r || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, r) {
        if (!n.isDir(e.mode)) return 54;
        try {
          var t = n.lookupNode(e, r);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      },
      mayDelete(e, r, t) {
        var o;
        try {
          o = n.lookupNode(e, r);
        } catch (i) {
          return i.errno;
        }
        var a = n.nodePermissions(e, "wx");
        if (a) return a;
        if (t) {
          if (!n.isDir(o.mode)) return 54;
          if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
        } else if (n.isDir(o.mode)) return 31;
        return 0;
      },
      mayOpen(e, r) {
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(r)) : 44;
      },
      checkOpExists(e, r) {
        if (!e) throw new n.ErrnoError(r);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++) if (!n.streams[e]) return e;
        throw new n.ErrnoError(33);
      },
      getStreamChecked(e) {
        var r = n.getStream(e);
        if (!r) throw new n.ErrnoError(8);
        return r;
      },
      getStream: (e) => n.streams[e],
      createStream(e, r = -1) {
        return e = Object.assign(new n.FSStream(), e), r == -1 && (r = n.nextfd()), e.fd = r, n.streams[r] = e, e;
      },
      closeStream(e) {
        n.streams[e] = null;
      },
      dupStream(e, r = -1) {
        var _a2, _b;
        var t = n.createStream(e, r);
        return (_b = (_a2 = t.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b.call(_a2, t), t;
      },
      doSetAttr(e, r, t) {
        var o = e == null ? void 0 : e.stream_ops.setattr, a = o ? e : r;
        o ?? (o = r.node_ops.setattr), n.checkOpExists(o, 63), o(a, t);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a2, _b;
          var r = n.getDevice(e.node.rdev);
          e.stream_ops = r.stream_ops, (_b = (_a2 = e.stream_ops).open) == null ? void 0 : _b.call(_a2, e);
        },
        llseek() {
          throw new n.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, r) => e << 8 | r,
      registerDevice(e, r) {
        n.devices[e] = {
          stream_ops: r
        };
      },
      getDevice: (e) => n.devices[e],
      getMounts(e) {
        for (var r = [], t = [
          e
        ]; t.length; ) {
          var o = t.pop();
          r.push(o), t.push(...o.mounts);
        }
        return r;
      },
      syncfs(e, r) {
        typeof e == "function" && (r = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && q(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), o = 0;
        function a(s) {
          return n.syncFSRequests--, r(s);
        }
        function i(s) {
          if (s) return i.errored ? void 0 : (i.errored = true, a(s));
          ++o >= t.length && a(null);
        }
        t.forEach((s) => {
          if (!s.type.syncfs) return i(null);
          s.type.syncfs(s, e, i);
        });
      },
      mount(e, r, t) {
        var o = t === "/", a = !t, i;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !a) {
          var s = n.lookupPath(t, {
            follow_mount: false
          });
          if (t = s.path, i = s.node, n.isMountpoint(i)) throw new n.ErrnoError(10);
          if (!n.isDir(i.mode)) throw new n.ErrnoError(54);
        }
        var l = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, u = e.mount(l);
        return u.mount = l, l.root = u, o ? n.root = u : i && (i.mounted = l, i.mount && i.mount.mounts.push(l)), u;
      },
      unmount(e) {
        var r = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
        var t = r.node, o = t.mounted, a = n.getMounts(o);
        Object.keys(n.nameTable).forEach((s) => {
          for (var l = n.nameTable[s]; l; ) {
            var u = l.name_next;
            a.includes(l.mount) && n.destroyNode(l), l = u;
          }
        }), t.mounted = null;
        var i = t.mount.mounts.indexOf(o);
        t.mount.mounts.splice(i, 1);
      },
      lookup(e, r) {
        return e.node_ops.lookup(e, r);
      },
      mknod(e, r, t) {
        var o = n.lookupPath(e, {
          parent: true
        }), a = o.node, i = g.basename(e);
        if (!i) throw new n.ErrnoError(28);
        if (i === "." || i === "..") throw new n.ErrnoError(20);
        var s = n.mayCreate(a, i);
        if (s) throw new n.ErrnoError(s);
        if (!a.node_ops.mknod) throw new n.ErrnoError(63);
        return a.node_ops.mknod(a, i, r, t);
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
        var r = {
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
        return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
      },
      create(e, r = 438) {
        return r &= 4095, r |= 32768, n.mknod(e, r, 0);
      },
      mkdir(e, r = 511) {
        return r &= 1023, r |= 16384, n.mknod(e, r, 0);
      },
      mkdirTree(e, r) {
        var t = e.split("/"), o = "";
        for (var a of t) if (a) {
          (o || g.isAbs(e)) && (o += "/"), o += a;
          try {
            n.mkdir(o, r);
          } catch (i) {
            if (i.errno != 20) throw i;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!ee.resolve(e)) throw new n.ErrnoError(44);
        var t = n.lookupPath(r, {
          parent: true
        }), o = t.node;
        if (!o) throw new n.ErrnoError(44);
        var a = g.basename(r), i = n.mayCreate(o, a);
        if (i) throw new n.ErrnoError(i);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, a, e);
      },
      rename(e, r) {
        var t = g.dirname(e), o = g.dirname(r), a = g.basename(e), i = g.basename(r), s, l, u;
        if (s = n.lookupPath(e, {
          parent: true
        }), l = s.node, s = n.lookupPath(r, {
          parent: true
        }), u = s.node, !l || !u) throw new n.ErrnoError(44);
        if (l.mount !== u.mount) throw new n.ErrnoError(75);
        var d = n.lookupNode(l, a), p = ee.relative(e, o);
        if (p.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (p = ee.relative(r, t), p.charAt(0) !== ".") throw new n.ErrnoError(55);
        var k;
        try {
          k = n.lookupNode(u, i);
        } catch {
        }
        if (d !== k) {
          var w = n.isDir(d.mode), m = n.mayDelete(l, a, w);
          if (m) throw new n.ErrnoError(m);
          if (m = k ? n.mayDelete(u, i, w) : n.mayCreate(u, i), m) throw new n.ErrnoError(m);
          if (!l.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(d) || k && n.isMountpoint(k)) throw new n.ErrnoError(10);
          if (u !== l && (m = n.nodePermissions(l, "w"), m)) throw new n.ErrnoError(m);
          n.hashRemoveNode(d);
          try {
            l.node_ops.rename(d, u, i), d.parent = u;
          } catch (_) {
            throw _;
          } finally {
            n.hashAddNode(d);
          }
        }
      },
      rmdir(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node, o = g.basename(e), a = n.lookupNode(t, o), i = n.mayDelete(t, o, true);
        if (i) throw new n.ErrnoError(i);
        if (!t.node_ops.rmdir) throw new n.ErrnoError(63);
        if (n.isMountpoint(a)) throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, o), n.destroyNode(a);
      },
      readdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        }), t = r.node, o = n.checkOpExists(t.node_ops.readdir, 54);
        return o(t);
      },
      unlink(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        var o = g.basename(e), a = n.lookupNode(t, o), i = n.mayDelete(t, o, false);
        if (i) throw new n.ErrnoError(i);
        if (!t.node_ops.unlink) throw new n.ErrnoError(63);
        if (n.isMountpoint(a)) throw new n.ErrnoError(10);
        t.node_ops.unlink(t, o), n.destroyNode(a);
      },
      readlink(e) {
        var r = n.lookupPath(e), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        if (!t.node_ops.readlink) throw new n.ErrnoError(28);
        return t.node_ops.readlink(t);
      },
      stat(e, r) {
        var t = n.lookupPath(e, {
          follow: !r
        }), o = t.node, a = n.checkOpExists(o.node_ops.getattr, 63);
        return a(o);
      },
      fstat(e) {
        var r = n.getStreamChecked(e), t = r.node, o = r.stream_ops.getattr, a = o ? r : t;
        return o ?? (o = t.node_ops.getattr), n.checkOpExists(o, 63), o(a);
      },
      lstat(e) {
        return n.stat(e, true);
      },
      doChmod(e, r, t, o) {
        n.doSetAttr(e, r, {
          mode: t & 4095 | r.mode & -4096,
          ctime: Date.now(),
          dontFollow: o
        });
      },
      chmod(e, r, t) {
        var o;
        if (typeof e == "string") {
          var a = n.lookupPath(e, {
            follow: !t
          });
          o = a.node;
        } else o = e;
        n.doChmod(null, o, r, t);
      },
      lchmod(e, r) {
        n.chmod(e, r, true);
      },
      fchmod(e, r) {
        var t = n.getStreamChecked(e);
        n.doChmod(t, t.node, r, false);
      },
      doChown(e, r, t) {
        n.doSetAttr(e, r, {
          timestamp: Date.now(),
          dontFollow: t
        });
      },
      chown(e, r, t, o) {
        var a;
        if (typeof e == "string") {
          var i = n.lookupPath(e, {
            follow: !o
          });
          a = i.node;
        } else a = e;
        n.doChown(null, a, o);
      },
      lchown(e, r, t) {
        n.chown(e, r, t, true);
      },
      fchown(e, r, t) {
        var o = n.getStreamChecked(e);
        n.doChown(o, o.node, false);
      },
      doTruncate(e, r, t) {
        if (n.isDir(r.mode)) throw new n.ErrnoError(31);
        if (!n.isFile(r.mode)) throw new n.ErrnoError(28);
        var o = n.nodePermissions(r, "w");
        if (o) throw new n.ErrnoError(o);
        n.doSetAttr(e, r, {
          size: t,
          timestamp: Date.now()
        });
      },
      truncate(e, r) {
        if (r < 0) throw new n.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var o = n.lookupPath(e, {
            follow: true
          });
          t = o.node;
        } else t = e;
        n.doTruncate(null, t, r);
      },
      ftruncate(e, r) {
        var t = n.getStreamChecked(e);
        if (r < 0 || !(t.flags & 2097155)) throw new n.ErrnoError(28);
        n.doTruncate(t, t.node, r);
      },
      utime(e, r, t) {
        var o = n.lookupPath(e, {
          follow: true
        }), a = o.node, i = n.checkOpExists(a.node_ops.setattr, 63);
        i(a, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new n.ErrnoError(44);
        r = typeof r == "string" ? gr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var o, a;
        if (typeof e == "object") o = e;
        else {
          a = e.endsWith("/");
          var i = n.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          o = i.node, e = i.path;
        }
        var s = false;
        if (r & 64) if (o) {
          if (r & 128) throw new n.ErrnoError(20);
        } else {
          if (a) throw new n.ErrnoError(31);
          o = n.mknod(e, t | 511, 0), s = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!s) {
          var l = n.mayOpen(o, r);
          if (l) throw new n.ErrnoError(l);
        }
        r & 512 && !s && n.truncate(o, 0), r &= -131713;
        var u = n.createStream({
          node: o,
          path: n.getPath(o),
          flags: r,
          seekable: true,
          position: 0,
          stream_ops: o.stream_ops,
          ungotten: [],
          error: false
        });
        return u.stream_ops.open && u.stream_ops.open(u), s && n.chmod(o, t & 511), f.logReadFiles && !(r & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), u;
      },
      close(e) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (r) {
          throw r;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, r, t) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new n.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2) throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
      },
      read(e, r, t, o, a) {
        if (o < 0 || a < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.read) throw new n.ErrnoError(28);
        var i = typeof a < "u";
        if (!i) a = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var s = e.stream_ops.read(e, r, t, o, a);
        return i || (e.position += s), s;
      },
      write(e, r, t, o, a, i) {
        if (o < 0 || a < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var s = typeof a < "u";
        if (!s) a = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var l = e.stream_ops.write(e, r, t, o, a, i);
        return s || (e.position += l), l;
      },
      mmap(e, r, t, o, a) {
        if (o & 2 && !(a & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
        if (!r) throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, r, t, o, a);
      },
      msync(e, r, t, o, a) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, r, t, o, a) : 0;
      },
      ioctl(e, r, t) {
        if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, r, t);
      },
      readFile(e, r = {}) {
        if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary") throw new Error(`Invalid encoding type "${r.encoding}"`);
        var t = n.open(e, r.flags), o = n.stat(e), a = o.size, i = new Uint8Array(a);
        return n.read(t, i, 0, a, 0), r.encoding === "utf8" && (i = re(i)), n.close(t), i;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var o = n.open(e, t.flags, t.mode);
        if (typeof r == "string" && (r = new Uint8Array(ge(r))), ArrayBuffer.isView(r)) n.write(o, r, 0, r.byteLength, void 0, t.canOwn);
        else throw new Error("Unsupported data type");
        n.close(o);
      },
      cwd: () => n.currentPath,
      chdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        });
        if (r.node === null) throw new n.ErrnoError(44);
        if (!n.isDir(r.node.mode)) throw new n.ErrnoError(54);
        var t = n.nodePermissions(r.node, "x");
        if (t) throw new n.ErrnoError(t);
        n.currentPath = r.path;
      },
      createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
          read: () => 0,
          write: (o, a, i, s, l) => s,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), J.register(n.makedev(5, 0), J.default_tty_ops), J.register(n.makedev(6, 0), J.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (xe(e), r = e.byteLength), e[--r]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var r = n.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: h.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, o) {
                var a = +o, i = n.getStreamChecked(a), s = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => i.path
                  },
                  id: a + 1
                };
                return s.parent = s, s;
              },
              readdir() {
                return Array.from(n.streams.entries()).filter(([t, o]) => o).map(([t, o]) => t.toString());
              }
            }, r;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, r, t) {
        e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), r ? n.createDevice("/dev", "stdout", null, r) : n.symlink("/dev/tty", "/dev/stdout"), t ? n.createDevice("/dev", "stderr", null, t) : n.symlink("/dev/tty1", "/dev/stderr"), n.open("/dev/stdin", 0), n.open("/dev/stdout", 1), n.open("/dev/stderr", 1);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(h, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: h,
          NODEFS: v,
          WORKERFS: b
        };
      },
      init(e, r, t) {
        n.initialized = true, e ?? (e = f.stdin), r ?? (r = f.stdout), t ?? (t = f.stderr), n.createStandardStreams(e, r, t);
      },
      quit() {
        n.initialized = false;
        for (var e of n.streams) e && n.close(e);
      },
      findObject(e, r) {
        var t = n.analyzePath(e, r);
        return t.exists ? t.object : null;
      },
      analyzePath(e, r) {
        try {
          var t = n.lookupPath(e, {
            follow: !r
          });
          e = t.path;
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
          var t = n.lookupPath(e, {
            parent: true
          });
          o.parentExists = true, o.parentPath = t.path, o.parentObject = t.node, o.name = g.basename(e), t = n.lookupPath(e, {
            follow: !r
          }), o.exists = true, o.path = t.path, o.object = t.node, o.name = t.node.name, o.isRoot = t.path === "/";
        } catch (a) {
          o.error = a.errno;
        }
        return o;
      },
      createPath(e, r, t, o) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var a = r.split("/").reverse(); a.length; ) {
          var i = a.pop();
          if (i) {
            var s = g.join2(e, i);
            try {
              n.mkdir(s);
            } catch (l) {
              if (l.errno != 20) throw l;
            }
            e = s;
          }
        }
        return s;
      },
      createFile(e, r, t, o, a) {
        var i = g.join2(typeof e == "string" ? e : n.getPath(e), r), s = Se(o, a);
        return n.create(i, s);
      },
      createDataFile(e, r, t, o, a, i) {
        var s = r;
        e && (e = typeof e == "string" ? e : n.getPath(e), s = r ? g.join2(e, r) : e);
        var l = Se(o, a), u = n.create(s, l);
        if (t) {
          if (typeof t == "string") {
            for (var d = new Array(t.length), p = 0, k = t.length; p < k; ++p) d[p] = t.charCodeAt(p);
            t = d;
          }
          n.chmod(u, l | 146);
          var w = n.open(u, 577);
          n.write(w, t, 0, t.length, 0, i), n.close(w), n.chmod(u, l);
        }
      },
      createDevice(e, r, t, o) {
        var _a2;
        var a = g.join2(typeof e == "string" ? e : n.getPath(e), r), i = Se(!!t, !!o);
        (_a2 = n.createDevice).major ?? (_a2.major = 64);
        var s = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(s, {
          open(l) {
            l.seekable = false;
          },
          close(l) {
            var _a3;
            ((_a3 = o == null ? void 0 : o.buffer) == null ? void 0 : _a3.length) && o(10);
          },
          read(l, u, d, p, k) {
            for (var w = 0, m = 0; m < p; m++) {
              var _;
              try {
                _ = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (_ === void 0 && w === 0) throw new n.ErrnoError(6);
              if (_ == null) break;
              w++, u[d + m] = _;
            }
            return w && (l.node.atime = Date.now()), w;
          },
          write(l, u, d, p, k) {
            for (var w = 0; w < p; w++) try {
              o(u[d + w]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return p && (l.node.mtime = l.node.ctime = Date.now()), w;
          }
        }), n.mkdev(a, i, s);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
          e.contents = j(e.url), e.usedBytes = e.contents.length;
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, o, a) {
        class i {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(m) {
            if (!(m > this.length - 1 || m < 0)) {
              var _ = m % this.chunkSize, R = m / this.chunkSize | 0;
              return this.getter(R)[_];
            }
          }
          setDataGetter(m) {
            this.getter = m;
          }
          cacheLength() {
            var m = new XMLHttpRequest();
            if (m.open("HEAD", t, false), m.send(null), !(m.status >= 200 && m.status < 300 || m.status === 304)) throw new Error("Couldn't load " + t + ". Status: " + m.status);
            var _ = Number(m.getResponseHeader("Content-length")), R, $ = (R = m.getResponseHeader("Accept-Ranges")) && R === "bytes", x = (R = m.getResponseHeader("Content-Encoding")) && R === "gzip", Y = 1024 * 1024;
            $ || (Y = _);
            var X = (K, te) => {
              if (K > te) throw new Error("invalid range (" + K + ", " + te + ") or no bytes requested!");
              if (te > _ - 1) throw new Error("only " + _ + " bytes available! programmer error!");
              var C = new XMLHttpRequest();
              if (C.open("GET", t, false), _ !== Y && C.setRequestHeader("Range", "bytes=" + K + "-" + te), C.responseType = "arraybuffer", C.overrideMimeType && C.overrideMimeType("text/plain; charset=x-user-defined"), C.send(null), !(C.status >= 200 && C.status < 300 || C.status === 304)) throw new Error("Couldn't load " + t + ". Status: " + C.status);
              return C.response !== void 0 ? new Uint8Array(C.response || []) : ge(C.responseText || "");
            }, ce = this;
            ce.setDataGetter((K) => {
              var te = K * Y, C = (K + 1) * Y - 1;
              if (C = Math.min(C, _ - 1), typeof ce.chunks[K] > "u" && (ce.chunks[K] = X(te, C)), typeof ce.chunks[K] > "u") throw new Error("doXHR failed!");
              return ce.chunks[K];
            }), (x || !_) && (Y = _ = 1, _ = this.getter(0).length, Y = _, G("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = _, this._chunkSize = Y, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest < "u") {
          if (!F) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var s = new i(), l = {
            isDevice: false,
            contents: s
          };
        } else var l = {
          isDevice: false,
          url: t
        };
        var u = n.createFile(e, r, l, o, a);
        l.contents ? u.contents = l.contents : l.url && (u.contents = null, u.url = l.url), Object.defineProperties(u, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var d = {}, p = Object.keys(u.stream_ops);
        p.forEach((w) => {
          var m = u.stream_ops[w];
          d[w] = (..._) => (n.forceLoadFile(u), m(..._));
        });
        function k(w, m, _, R, $) {
          var x = w.node.contents;
          if ($ >= x.length) return 0;
          var Y = Math.min(x.length - $, R);
          if (x.slice) for (var X = 0; X < Y; X++) m[_ + X] = x[$ + X];
          else for (var X = 0; X < Y; X++) m[_ + X] = x.get($ + X);
          return Y;
        }
        return d.read = (w, m, _, R, $) => (n.forceLoadFile(u), k(w, m, _, R, $)), d.mmap = (w, m, _, R, $) => {
          n.forceLoadFile(u);
          var x = ke();
          if (!x) throw new n.ErrnoError(48);
          return k(w, M, x, m, _), {
            ptr: x,
            allocated: true
          };
        }, u.stream_ops = d, u;
      }
    }, Sr = (e, r) => e ? re(oe, e, r) : "", y = {
      DEFAULT_POLLMASK: 5,
      calculateAt(e, r, t) {
        if (g.isAbs(r)) return r;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var a = y.getStreamFromFD(e);
          o = a.path;
        }
        if (r.length == 0) {
          if (!t) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + r;
      },
      writeStat(e, r) {
        c[e >> 2] = r.dev, c[e + 4 >> 2] = r.mode, N[e + 8 >> 2] = r.nlink, c[e + 12 >> 2] = r.uid, c[e + 16 >> 2] = r.gid, c[e + 20 >> 2] = r.rdev, W[e + 24 >> 3] = BigInt(r.size), c[e + 32 >> 2] = 4096, c[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), o = r.mtime.getTime(), a = r.ctime.getTime();
        return W[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), N[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, W[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), N[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, W[e + 72 >> 3] = BigInt(Math.floor(a / 1e3)), N[e + 80 >> 2] = a % 1e3 * 1e3 * 1e3, W[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        c[e + 4 >> 2] = r.bsize, c[e + 40 >> 2] = r.bsize, c[e + 8 >> 2] = r.blocks, c[e + 12 >> 2] = r.bfree, c[e + 16 >> 2] = r.bavail, c[e + 20 >> 2] = r.files, c[e + 24 >> 2] = r.ffree, c[e + 28 >> 2] = r.fsid, c[e + 44 >> 2] = r.flags, c[e + 36 >> 2] = r.namelen;
      },
      doMsync(e, r, t, o, a) {
        if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var i = oe.slice(e, e + t);
        n.msync(r, i, a, t, o);
      },
      getStreamFromFD(e) {
        var r = n.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = Sr(e);
        return r;
      }
    };
    function Dr(e, r) {
      try {
        return e = y.getStr(e), n.chmod(e, r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function Or(e, r, t, o, a) {
      try {
        r = y.getStr(r);
        var i = a & 256;
        return a = a & -257, r = y.calculateAt(e, r), (i ? n.lchown : n.chown)(r, t, o), 0;
      } catch (s) {
        if (typeof n > "u" || s.name !== "ErrnoError") throw s;
        return -s.errno;
      }
    }
    function Nr(e, r) {
      try {
        return y.writeStat(r, n.fstat(e));
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    var Fr = 9007199254740992, Rr = -9007199254740992, Ee = (e) => e < Rr || e > Fr ? NaN : Number(e);
    function Tr(e, r) {
      r = Ee(r);
      try {
        return isNaN(r) ? -61 : (n.ftruncate(e, r), 0);
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    var V = (e, r, t) => We(e, oe, r, t);
    function Ar(e, r) {
      try {
        if (r === 0) return -28;
        var t = n.cwd(), o = se(t) + 1;
        return r < o ? -68 : (V(t, e, r), o);
      } catch (a) {
        if (typeof n > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function br(e, r, t) {
      try {
        var o = y.getStreamFromFD(e);
        o.getdents || (o.getdents = n.readdir(o.path));
        for (var a = 280, i = 0, s = n.llseek(o, 0, 1), l = Math.floor(s / a), u = Math.min(o.getdents.length, l + Math.floor(t / a)), d = l; d < u; d++) {
          var p, k, w = o.getdents[d];
          if (w === ".") p = o.node.id, k = 4;
          else if (w === "..") {
            var m = n.lookupPath(o.path, {
              parent: true
            });
            p = m.node.id, k = 4;
          } else {
            var _;
            try {
              _ = n.lookupNode(o.node, w);
            } catch (R) {
              if ((R == null ? void 0 : R.errno) === 28) continue;
              throw R;
            }
            p = _.id, k = n.isChrdev(_.mode) ? 2 : n.isDir(_.mode) ? 4 : n.isLink(_.mode) ? 10 : 8;
          }
          W[r + i >> 3] = BigInt(p), W[r + i + 8 >> 3] = BigInt((d + 1) * a), ae[r + i + 16 >> 1] = 280, M[r + i + 18] = k, V(w, r + i + 19, 256), i += a;
        }
        return n.llseek(o, d * a, 0), i;
      } catch (R) {
        if (typeof n > "u" || R.name !== "ErrnoError") throw R;
        return -R.errno;
      }
    }
    var $e = () => {
      var e = c[+y.varargs >> 2];
      return y.varargs += 4, e;
    }, le = $e;
    function Mr(e, r, t) {
      y.varargs = t;
      try {
        var o = y.getStreamFromFD(e);
        switch (r) {
          case 21509:
            return o.tty ? 0 : -59;
          case 21505: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tcgets) {
              var a = o.tty.ops.ioctl_tcgets(o), i = le();
              c[i >> 2] = a.c_iflag || 0, c[i + 4 >> 2] = a.c_oflag || 0, c[i + 8 >> 2] = a.c_cflag || 0, c[i + 12 >> 2] = a.c_lflag || 0;
              for (var s = 0; s < 32; s++) M[i + s + 17] = a.c_cc[s] || 0;
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
              for (var i = le(), l = c[i >> 2], u = c[i + 4 >> 2], d = c[i + 8 >> 2], p = c[i + 12 >> 2], k = [], s = 0; s < 32; s++) k.push(M[i + s + 17]);
              return o.tty.ops.ioctl_tcsets(o.tty, r, {
                c_iflag: l,
                c_oflag: u,
                c_cflag: d,
                c_lflag: p,
                c_cc: k
              });
            }
            return 0;
          }
          case 21519: {
            if (!o.tty) return -59;
            var i = le();
            return c[i >> 2] = 0, 0;
          }
          case 21520:
            return o.tty ? -28 : -59;
          case 21531: {
            var i = le();
            return n.ioctl(o, r, i);
          }
          case 21523: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tiocgwinsz) {
              var w = o.tty.ops.ioctl_tiocgwinsz(o.tty), i = le();
              ae[i >> 1] = w[0], ae[i + 2 >> 1] = w[1];
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
      } catch (m) {
        if (typeof n > "u" || m.name !== "ErrnoError") throw m;
        return -m.errno;
      }
    }
    function Pr(e, r) {
      try {
        return e = y.getStr(e), y.writeStat(r, n.lstat(e));
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function Cr(e, r, t) {
      try {
        return r = y.getStr(r), r = y.calculateAt(e, r), n.mkdir(r, t, 0), 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function Ir(e, r, t, o) {
      try {
        r = y.getStr(r);
        var a = o & 256, i = o & 4096;
        return o = o & -6401, r = y.calculateAt(e, r, i), y.writeStat(t, a ? n.lstat(r) : n.stat(r));
      } catch (s) {
        if (typeof n > "u" || s.name !== "ErrnoError") throw s;
        return -s.errno;
      }
    }
    function Lr(e, r, t, o) {
      y.varargs = o;
      try {
        r = y.getStr(r), r = y.calculateAt(e, r);
        var a = o ? $e() : 0;
        return n.open(r, t, a).fd;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function zr(e, r, t, o) {
      try {
        if (r = y.getStr(r), r = y.calculateAt(e, r), o <= 0) return -28;
        var a = n.readlink(r), i = Math.min(o, se(a)), s = M[t + i];
        return V(a, t, o + 1), M[t + i] = s, i;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    function Ur(e, r, t, o) {
      try {
        return r = y.getStr(r), o = y.getStr(o), r = y.calculateAt(e, r), o = y.calculateAt(t, o), n.rename(r, o), 0;
      } catch (a) {
        if (typeof n > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function Br(e) {
      try {
        return e = y.getStr(e), n.rmdir(e), 0;
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function xr(e, r) {
      try {
        return e = y.getStr(e), y.writeStat(r, n.stat(e));
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function jr(e, r, t) {
      try {
        return e = y.getStr(e), t = y.getStr(t), t = y.calculateAt(r, t), n.symlink(e, t), 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function Wr(e, r, t) {
      try {
        if (r = y.getStr(r), r = y.calculateAt(e, r), !t) n.unlink(r);
        else if (t === 512) n.rmdir(r);
        else return -28;
        return 0;
      } catch (o) {
        if (typeof n > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    var Ye = (e) => N[e >> 2] + c[e + 4 >> 2] * 4294967296;
    function Hr(e, r, t, o) {
      try {
        r = y.getStr(r), r = y.calculateAt(e, r, true);
        var a = Date.now(), i, s;
        if (!t) i = a, s = a;
        else {
          var l = Ye(t), u = c[t + 8 >> 2];
          u == 1073741823 ? i = a : u == 1073741822 ? i = null : i = l * 1e3 + u / (1e3 * 1e3), t += 16, l = Ye(t), u = c[t + 8 >> 2], u == 1073741823 ? s = a : u == 1073741822 ? s = null : s = l * 1e3 + u / (1e3 * 1e3);
        }
        return (s ?? i) !== null && n.utime(r, i, s), 0;
      } catch (d) {
        if (typeof n > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    var $r = () => me("");
    function Yr(e, r) {
      e = Ee(e);
      var t = new Date(e * 1e3);
      c[r >> 2] = t.getUTCSeconds(), c[r + 4 >> 2] = t.getUTCMinutes(), c[r + 8 >> 2] = t.getUTCHours(), c[r + 12 >> 2] = t.getUTCDate(), c[r + 16 >> 2] = t.getUTCMonth(), c[r + 20 >> 2] = t.getUTCFullYear() - 1900, c[r + 24 >> 2] = t.getUTCDay();
      var o = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0), a = (t.getTime() - o) / (1e3 * 60 * 60 * 24) | 0;
      c[r + 28 >> 2] = a;
    }
    var Xr = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), Gr = [
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
    ], Kr = [
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
    ], Xe = (e) => {
      var r = Xr(e.getFullYear()), t = r ? Gr : Kr, o = t[e.getMonth()] + e.getDate() - 1;
      return o;
    };
    function Vr(e, r) {
      e = Ee(e);
      var t = new Date(e * 1e3);
      c[r >> 2] = t.getSeconds(), c[r + 4 >> 2] = t.getMinutes(), c[r + 8 >> 2] = t.getHours(), c[r + 12 >> 2] = t.getDate(), c[r + 16 >> 2] = t.getMonth(), c[r + 20 >> 2] = t.getFullYear() - 1900, c[r + 24 >> 2] = t.getDay();
      var o = Xe(t) | 0;
      c[r + 28 >> 2] = o, c[r + 36 >> 2] = -(t.getTimezoneOffset() * 60);
      var a = new Date(t.getFullYear(), 0, 1), i = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), s = a.getTimezoneOffset(), l = (i != s && t.getTimezoneOffset() == Math.min(s, i)) | 0;
      c[r + 32 >> 2] = l;
    }
    var qr = function(e) {
      var r = (() => {
        var t = new Date(c[e + 20 >> 2] + 1900, c[e + 16 >> 2], c[e + 12 >> 2], c[e + 8 >> 2], c[e + 4 >> 2], c[e >> 2], 0), o = c[e + 32 >> 2], a = t.getTimezoneOffset(), i = new Date(t.getFullYear(), 0, 1), s = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), l = i.getTimezoneOffset(), u = Math.min(l, s);
        if (o < 0) c[e + 32 >> 2] = +(s != l && u == a);
        else if (o > 0 != (u == a)) {
          var d = Math.max(l, s), p = o > 0 ? u : d;
          t.setTime(t.getTime() + (p - a) * 6e4);
        }
        c[e + 24 >> 2] = t.getDay();
        var k = Xe(t) | 0;
        c[e + 28 >> 2] = k, c[e >> 2] = t.getSeconds(), c[e + 4 >> 2] = t.getMinutes(), c[e + 8 >> 2] = t.getHours(), c[e + 12 >> 2] = t.getDate(), c[e + 16 >> 2] = t.getMonth(), c[e + 20 >> 2] = t.getYear();
        var w = t.getTime();
        return isNaN(w) ? -1 : w / 1e3;
      })();
      return BigInt(r);
    }, Qr = (e, r, t, o) => {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(a, 0, 1), s = new Date(a, 6, 1), l = i.getTimezoneOffset(), u = s.getTimezoneOffset(), d = Math.max(l, u);
      N[e >> 2] = d * 60, c[r >> 2] = +(l != u);
      var p = (m) => {
        var _ = m >= 0 ? "-" : "+", R = Math.abs(m), $ = String(Math.floor(R / 60)).padStart(2, "0"), x = String(R % 60).padStart(2, "0");
        return `UTC${_}${$}${x}`;
      }, k = p(l), w = p(u);
      u < l ? (V(k, t, 17), V(w, o, 17)) : (V(k, o, 17), V(w, t, 17));
    }, Zr = () => performance.now(), Ge = () => Date.now(), Jr = (e) => e >= 0 && e <= 3;
    function et(e, r, t) {
      if (!Jr(e)) return 28;
      var o;
      e === 0 ? o = Ge() : o = Zr();
      var a = Math.round(o * 1e3 * 1e3);
      return W[t >> 3] = BigInt(a), 0;
    }
    var Ke = () => 2147483648, rt = () => Ke(), tt = (e, r) => Math.ceil(e / r) * r, nt = (e) => {
      var r = ve.buffer, t = (e - r.byteLength + 65535) / 65536 | 0;
      try {
        return ve.grow(t), Me(), 1;
      } catch {
      }
    }, ot = (e) => {
      var r = oe.length;
      e >>>= 0;
      var t = Ke();
      if (e > t) return false;
      for (var o = 1; o <= 4; o *= 2) {
        var a = r * (1 + 0.2 / o);
        a = Math.min(a, e + 100663296);
        var i = Math.min(t, tt(Math.max(e, a), 65536)), s = nt(i);
        if (s) return true;
      }
      return false;
    }, De = {}, at = () => I || "./this.program", ue = () => {
      if (!ue.strings) {
        var e = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: at()
        };
        for (var t in De) De[t] === void 0 ? delete r[t] : r[t] = De[t];
        var o = [];
        for (var t in r) o.push(`${t}=${r[t]}`);
        ue.strings = o;
      }
      return ue.strings;
    }, it = (e, r) => {
      var t = 0, o = 0;
      for (var a of ue()) {
        var i = r + t;
        N[e + o >> 2] = i, t += V(a, i, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, st = (e, r) => {
      var t = ue();
      N[e >> 2] = t.length;
      var o = 0;
      for (var a of t) o += se(a) + 1;
      return N[r >> 2] = o, 0;
    }, lt = 0, ut = () => Ue || lt > 0, ft = (e) => {
      var _a2;
      we = e, ut() || ((_a2 = f.onExit) == null ? void 0 : _a2.call(f, e), he = true), H(e, new Ce(e));
    }, Ve = (e, r) => {
      we = e, ft(e);
    }, ct = Ve;
    function dt(e) {
      try {
        var r = y.getStreamFromFD(e);
        return n.close(r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    function vt(e, r) {
      try {
        var t = 0, o = 0, a = 0, i = y.getStreamFromFD(e), s = i.tty ? 2 : n.isDir(i.mode) ? 3 : n.isLink(i.mode) ? 7 : 4;
        return M[r] = s, ae[r + 2 >> 1] = a, W[r + 8 >> 3] = BigInt(t), W[r + 16 >> 3] = BigInt(o), 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var mt = (e, r, t, o) => {
      for (var a = 0, i = 0; i < t; i++) {
        var s = N[r >> 2], l = N[r + 4 >> 2];
        r += 8;
        var u = n.read(e, M, s, l, o);
        if (u < 0) return -1;
        if (a += u, u < l) break;
      }
      return a;
    };
    function Et(e, r, t, o) {
      try {
        var a = y.getStreamFromFD(e), i = mt(a, r, t);
        return N[o >> 2] = i, 0;
      } catch (s) {
        if (typeof n > "u" || s.name !== "ErrnoError") throw s;
        return s.errno;
      }
    }
    function ht(e, r, t, o) {
      r = Ee(r);
      try {
        if (isNaN(r)) return 61;
        var a = y.getStreamFromFD(e);
        return n.llseek(a, r, t), W[o >> 3] = BigInt(a.position), a.getdents && r === 0 && t === 0 && (a.getdents = null), 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var wt = (e, r, t, o) => {
      for (var a = 0, i = 0; i < t; i++) {
        var s = N[r >> 2], l = N[r + 4 >> 2];
        r += 8;
        var u = n.write(e, M, s, l, o);
        if (u < 0) return -1;
        if (a += u, u < l) break;
      }
      return a;
    };
    function yt(e, r, t, o) {
      try {
        var a = y.getStreamFromFD(e), i = wt(a, r, t);
        return N[o >> 2] = i, 0;
      } catch (s) {
        if (typeof n > "u" || s.name !== "ErrnoError") throw s;
        return s.errno;
      }
    }
    var _t = (e) => {
      if (e instanceof Ce || e == "unwind") return we;
      H(1, e);
    }, qe = (e) => Ze(e), pt = (e) => {
      var r = se(e) + 1, t = qe(r);
      return V(e, t, r), t;
    };
    n.createPreloadedFile = pr, n.staticInit(), h.doesNotExistError = new n.ErrnoError(44), h.doesNotExistError.stack = "<generic error, no stack>", O && v.staticInit(), f.noExitRuntime && (Ue = f.noExitRuntime), f.preloadPlugins && (He = f.preloadPlugins), f.print && (G = f.print), f.printErr && (q = f.printErr), f.wasmBinary && (ne = f.wasmBinary), f.arguments && (P = f.arguments), f.thisProgram && (I = f.thisProgram), f.callMain = Oe, f.FS = n, f.NODEFS = v, f.WORKERFS = b;
    var Qe, Ze;
    function gt(e) {
      f._main = Qe = e.__main_argc_argv, e._emscripten_stack_restore, Ze = e._emscripten_stack_alloc, e.emscripten_stack_get_current;
    }
    var Je = {
      __cxa_throw: mr,
      __syscall_chmod: Dr,
      __syscall_fchownat: Or,
      __syscall_fstat64: Nr,
      __syscall_ftruncate64: Tr,
      __syscall_getcwd: Ar,
      __syscall_getdents64: br,
      __syscall_ioctl: Mr,
      __syscall_lstat64: Pr,
      __syscall_mkdirat: Cr,
      __syscall_newfstatat: Ir,
      __syscall_openat: Lr,
      __syscall_readlinkat: zr,
      __syscall_renameat: Ur,
      __syscall_rmdir: Br,
      __syscall_stat64: xr,
      __syscall_symlinkat: jr,
      __syscall_unlinkat: Wr,
      __syscall_utimensat: Hr,
      _abort_js: $r,
      _gmtime_js: Yr,
      _localtime_js: Vr,
      _mktime_js: qr,
      _tzset_js: Qr,
      clock_time_get: et,
      emscripten_date_now: Ge,
      emscripten_get_heap_max: rt,
      emscripten_resize_heap: ot,
      environ_get: it,
      environ_sizes_get: st,
      exit: ct,
      fd_close: dt,
      fd_fdstat_get: vt,
      fd_read: Et,
      fd_seek: ht,
      fd_write: yt
    }, fe = await fr();
    function Oe(e = []) {
      var r = Qe;
      e.unshift(I);
      var t = e.length, o = qe((t + 1) * 4), a = o;
      e.forEach((s) => {
        N[a >> 2] = pt(s), a += 4;
      }), N[a >> 2] = 0;
      try {
        var i = r(t, o);
        return Ve(i, true), i;
      } catch (s) {
        return _t(s);
      }
    }
    function Ne(e = P) {
      if (Z > 0) {
        ie = Ne;
        return;
      }
      if (rr(), Z > 0) {
        ie = Ne;
        return;
      }
      function r() {
        var _a2;
        if (f.calledRun = true, !he) {
          tr(), Te == null ? void 0 : Te(f), (_a2 = f.onRuntimeInitialized) == null ? void 0 : _a2.call(f);
          var t = f.noInitialRun || false;
          t || Oe(e), nr();
        }
      }
      f.setStatus ? (f.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => f.setStatus(""), 1), r();
      }, 1)) : r();
    }
    function kt() {
      if (f.preInit) for (typeof f.preInit == "function" && (f.preInit = [
        f.preInit
      ]); f.preInit.length > 0; ) f.preInit.shift()();
    }
    return kt(), Ne(), f.FS = n, f.NODEFS = v, f.WORKERFS = b, f.callMain = Oe, be ? D = f : D = new Promise((e, r) => {
      Te = e, Ae = r;
    }), D;
  };
  const Ot = "" + new URL("7zz-CgkXYLdN.wasm", import.meta.url).href;
  let Q = null;
  async function er(T) {
    return Q ? (Q.print = (D) => {
      T && T(D + `
`);
    }, Q.printErr = (D) => {
      T && T("ERROR: " + D + `
`);
    }) : Q = await Dt({
      locateFile: (D) => D.endsWith(".wasm") ? Ot : D,
      print: (D) => {
        T && T(D + `
`);
      },
      printErr: (D) => {
        T && T("ERROR: " + D + `
`);
      },
      stdin: () => (Q && (Q.wasStdinCalled = true), null)
    }), Q.wasStdinCalled = false, Q;
  }
  function Fe(T, D, f) {
    let U = [];
    const F = f || D, O = T.readdir(D).filter((A) => A !== "." && A !== "..");
    for (const A of O) {
      const P = `${D}/${A}`, I = T.stat(P);
      T.isDir(I.mode) ? U = U.concat(Fe(T, P, F)) : U.push({
        name: P.replace(F + "/", ""),
        data: T.readFile(P)
      });
    }
    return U;
  }
  Ft = async function(T, D, f, U) {
    const F = await er(U), O = F.FS, A = "/extract_" + Date.now();
    try {
      O.unlink(D);
    } catch {
    }
    O.mkdir(A), O.writeFile(D, T);
    const P = (S) => {
      let L = false;
      const z = F.print, B = F.printErr, j = (E) => {
        const G = E.toLowerCase();
        (G.includes("password") || G.includes("encrypted")) && (L = true);
      };
      F.print = (E) => {
        j(E), z(E);
      }, F.printErr = (E) => {
        j(E), B(E);
      };
      try {
        F.callMain(S);
      } catch (E) {
        if (F.print = z, F.printErr = B, L || F.wasStdinCalled || E.name === "ExitStatus" && E.status === 2) {
          const G = new Error("PASSWORD_REQUIRED");
          throw G.name = "PasswordRequiredError", G;
        }
        if (E.name === "ExitStatus" && E.status !== 0) throw new Error(`Extraction failed with exit status ${E.status}`);
        if (E.name !== "ExitStatus" && E !== 0 && (!E.message || !E.message.includes("0"))) throw new Error(`Execution error: ${E.message || JSON.stringify(E) || String(E)}`);
      } finally {
        F.print = z, F.printErr = B;
      }
    }, I = [
      "x",
      D,
      `-o${A}`,
      "-y"
    ];
    f && I.push(`-p${f}`), U(`> 7z ${I.join(" ")}
`), P(I);
    let H = Fe(O, A);
    if (H.length === 1 && H[0].name.toLowerCase().endsWith(".tar")) {
      const S = H[0];
      U(`Detected TAR within compressed stream. Performing second pass on ${S.name}...
`);
      const L = `${A}/${S.name}`, z = A + "_final";
      O.mkdir(z);
      const B = [
        "x",
        L,
        `-o${z}`,
        "-y"
      ];
      U(`> 7z ${B.join(" ")}
`), P(B), H = Fe(O, z);
    }
    try {
      O.unlink(D);
    } catch {
    }
    return H;
  };
  Rt = async function(T, D, f, U) {
    const F = await er(U), O = F.FS, A = `output.${D}`;
    try {
      O.unlink(A);
    } catch {
    }
    const P = [];
    for (const [S, L] of Object.entries(T)) try {
      if (S.includes("/")) {
        const z = S.split("/");
        let B = "";
        for (let j = 0; j < z.length - 1; j++) {
          B += (B ? "/" : "") + z[j];
          try {
            O.mkdir(B);
          } catch {
          }
        }
      }
      O.writeFile(S, L), P.push(S);
    } catch (z) {
      U(`Failed to write virtual file ${S}: ${z}
`);
    }
    const I = [
      "a",
      A
    ];
    f && (I.push(`-p${f}`), D === "7z" && I.push("-mhe=on")), I.push(...P), U(`> 7z ${I.join(" ")}
`);
    try {
      F.callMain(I);
    } catch (S) {
      if (S.name === "ExitStatus" && S.status !== 0) throw P.forEach((L) => {
        try {
          O.unlink(L);
        } catch {
        }
      }), new Error(`Compression failed with exit status ${S.status}`);
      if (S.name !== "ExitStatus" && S !== 0 && (!S.message || !S.message.includes("0"))) throw P.forEach((L) => {
        try {
          O.unlink(L);
        } catch {
        }
      }), new Error(`Execution error: ${S.message || JSON.stringify(S)}`);
    }
    const H = O.readFile(A);
    return O.unlink(A), P.forEach((S) => {
      try {
        O.unlink(S);
      } catch {
      }
    }), H;
  };
});
export {
  __tla,
  Rt as compressFiles,
  Ft as extractArchive
};
