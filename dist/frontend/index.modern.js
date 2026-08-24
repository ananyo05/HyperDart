var ZC = Object.defineProperty;
var JC = (e, a, o) => a in e ? ZC(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var jl = (e, a, o) => JC(e, typeof a != "symbol" ? a + "" : a, o);
function e2(e, a) {
  for (var o = 0; o < a.length; o++) {
    const i = a[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const c = Object.getOwnPropertyDescriptor(i, s);
          c && Object.defineProperty(e, s, c.get ? c : {
            enumerable: !0,
            get: () => i[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rp = { exports: {} }, Bl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv;
function t2() {
  if (Bv) return Bl;
  Bv = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function o(i, s, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: i,
      key: d,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return Bl.Fragment = a, Bl.jsx = o, Bl.jsxs = o, Bl;
}
var _v;
function n2() {
  return _v || (_v = 1, rp.exports = t2()), rp.exports;
}
var T = n2(), op = { exports: {} }, Qe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hv;
function a2() {
  if (Hv) return Qe;
  Hv = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), x = Symbol.iterator;
  function C(L) {
    return L === null || typeof L != "object" ? null : (L = x && L[x] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var R = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, E = Object.assign, w = {};
  function z(L, W, re) {
    this.props = L, this.context = W, this.refs = w, this.updater = re || R;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(L, W) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, L, W, "setState");
  }, z.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function k() {
  }
  k.prototype = z.prototype;
  function O(L, W, re) {
    this.props = L, this.context = W, this.refs = w, this.updater = re || R;
  }
  var D = O.prototype = new k();
  D.constructor = O, E(D, z.prototype), D.isPureReactComponent = !0;
  var M = Array.isArray;
  function $() {
  }
  var j = { H: null, A: null, T: null, S: null }, U = Object.prototype.hasOwnProperty;
  function P(L, W, re) {
    var te = re.ref;
    return {
      $$typeof: e,
      type: L,
      key: W,
      ref: te !== void 0 ? te : null,
      props: re
    };
  }
  function S(L, W) {
    return P(L.type, W, L.props);
  }
  function B(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }
  function H(L) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(re) {
      return W[re];
    });
  }
  var G = /\/+/g;
  function J(L, W) {
    return typeof L == "object" && L !== null && L.key != null ? H("" + L.key) : W.toString(36);
  }
  function F(L) {
    switch (L.status) {
      case "fulfilled":
        return L.value;
      case "rejected":
        throw L.reason;
      default:
        switch (typeof L.status == "string" ? L.then($, $) : (L.status = "pending", L.then(
          function(W) {
            L.status === "pending" && (L.status = "fulfilled", L.value = W);
          },
          function(W) {
            L.status === "pending" && (L.status = "rejected", L.reason = W);
          }
        )), L.status) {
          case "fulfilled":
            return L.value;
          case "rejected":
            throw L.reason;
        }
    }
    throw L;
  }
  function N(L, W, re, te, fe) {
    var se = typeof L;
    (se === "undefined" || se === "boolean") && (L = null);
    var ge = !1;
    if (L === null) ge = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case e:
            case a:
              ge = !0;
              break;
            case g:
              return ge = L._init, N(
                ge(L._payload),
                W,
                re,
                te,
                fe
              );
          }
      }
    if (ge)
      return fe = fe(L), ge = te === "" ? "." + J(L, 0) : te, M(fe) ? (re = "", ge != null && (re = ge.replace(G, "$&/") + "/"), N(fe, W, re, "", function(Te) {
        return Te;
      })) : fe != null && (B(fe) && (fe = S(
        fe,
        re + (fe.key == null || L && L.key === fe.key ? "" : ("" + fe.key).replace(
          G,
          "$&/"
        ) + "/") + ge
      )), W.push(fe)), 1;
    ge = 0;
    var ye = te === "" ? "." : te + ":";
    if (M(L))
      for (var be = 0; be < L.length; be++)
        te = L[be], se = ye + J(te, be), ge += N(
          te,
          W,
          re,
          se,
          fe
        );
    else if (be = C(L), typeof be == "function")
      for (L = be.call(L), be = 0; !(te = L.next()).done; )
        te = te.value, se = ye + J(te, be++), ge += N(
          te,
          W,
          re,
          se,
          fe
        );
    else if (se === "object") {
      if (typeof L.then == "function")
        return N(
          F(L),
          W,
          re,
          te,
          fe
        );
      throw W = String(L), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ge;
  }
  function V(L, W, re) {
    if (L == null) return L;
    var te = [], fe = 0;
    return N(L, te, "", "", function(se) {
      return W.call(re, se, fe++);
    }), te;
  }
  function K(L) {
    if (L._status === -1) {
      var W = L._result;
      W = W(), W.then(
        function(re) {
          (L._status === 0 || L._status === -1) && (L._status = 1, L._result = re);
        },
        function(re) {
          (L._status === 0 || L._status === -1) && (L._status = 2, L._result = re);
        }
      ), L._status === -1 && (L._status = 0, L._result = W);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(L) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof L == "object" && L !== null && typeof L.message == "string" ? String(L.message) : String(L),
        error: L
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", L);
      return;
    }
    console.error(L);
  }, pe = {
    map: V,
    forEach: function(L, W, re) {
      V(
        L,
        function() {
          W.apply(this, arguments);
        },
        re
      );
    },
    count: function(L) {
      var W = 0;
      return V(L, function() {
        W++;
      }), W;
    },
    toArray: function(L) {
      return V(L, function(W) {
        return W;
      }) || [];
    },
    only: function(L) {
      if (!B(L))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return L;
    }
  };
  return Qe.Activity = y, Qe.Children = pe, Qe.Component = z, Qe.Fragment = o, Qe.Profiler = s, Qe.PureComponent = O, Qe.StrictMode = i, Qe.Suspense = m, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(L) {
      return j.H.useMemoCache(L);
    }
  }, Qe.cache = function(L) {
    return function() {
      return L.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(L, W, re) {
    if (L == null)
      throw Error(
        "The argument must be a React element, but you passed " + L + "."
      );
    var te = E({}, L.props), fe = L.key;
    if (W != null)
      for (se in W.key !== void 0 && (fe = "" + W.key), W)
        !U.call(W, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && W.ref === void 0 || (te[se] = W[se]);
    var se = arguments.length - 2;
    if (se === 1) te.children = re;
    else if (1 < se) {
      for (var ge = Array(se), ye = 0; ye < se; ye++)
        ge[ye] = arguments[ye + 2];
      te.children = ge;
    }
    return P(L.type, fe, te);
  }, Qe.createContext = function(L) {
    return L = {
      $$typeof: d,
      _currentValue: L,
      _currentValue2: L,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, L.Provider = L, L.Consumer = {
      $$typeof: c,
      _context: L
    }, L;
  }, Qe.createElement = function(L, W, re) {
    var te, fe = {}, se = null;
    if (W != null)
      for (te in W.key !== void 0 && (se = "" + W.key), W)
        U.call(W, te) && te !== "key" && te !== "__self" && te !== "__source" && (fe[te] = W[te]);
    var ge = arguments.length - 2;
    if (ge === 1) fe.children = re;
    else if (1 < ge) {
      for (var ye = Array(ge), be = 0; be < ge; be++)
        ye[be] = arguments[be + 2];
      fe.children = ye;
    }
    if (L && L.defaultProps)
      for (te in ge = L.defaultProps, ge)
        fe[te] === void 0 && (fe[te] = ge[te]);
    return P(L, se, fe);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(L) {
    return { $$typeof: p, render: L };
  }, Qe.isValidElement = B, Qe.lazy = function(L) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: L },
      _init: K
    };
  }, Qe.memo = function(L, W) {
    return {
      $$typeof: h,
      type: L,
      compare: W === void 0 ? null : W
    };
  }, Qe.startTransition = function(L) {
    var W = j.T, re = {};
    j.T = re;
    try {
      var te = L(), fe = j.S;
      fe !== null && fe(re, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then($, Y);
    } catch (se) {
      Y(se);
    } finally {
      W !== null && re.types !== null && (W.types = re.types), j.T = W;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, Qe.use = function(L) {
    return j.H.use(L);
  }, Qe.useActionState = function(L, W, re) {
    return j.H.useActionState(L, W, re);
  }, Qe.useCallback = function(L, W) {
    return j.H.useCallback(L, W);
  }, Qe.useContext = function(L) {
    return j.H.useContext(L);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(L, W) {
    return j.H.useDeferredValue(L, W);
  }, Qe.useEffect = function(L, W) {
    return j.H.useEffect(L, W);
  }, Qe.useEffectEvent = function(L) {
    return j.H.useEffectEvent(L);
  }, Qe.useId = function() {
    return j.H.useId();
  }, Qe.useImperativeHandle = function(L, W, re) {
    return j.H.useImperativeHandle(L, W, re);
  }, Qe.useInsertionEffect = function(L, W) {
    return j.H.useInsertionEffect(L, W);
  }, Qe.useLayoutEffect = function(L, W) {
    return j.H.useLayoutEffect(L, W);
  }, Qe.useMemo = function(L, W) {
    return j.H.useMemo(L, W);
  }, Qe.useOptimistic = function(L, W) {
    return j.H.useOptimistic(L, W);
  }, Qe.useReducer = function(L, W, re) {
    return j.H.useReducer(L, W, re);
  }, Qe.useRef = function(L) {
    return j.H.useRef(L);
  }, Qe.useState = function(L) {
    return j.H.useState(L);
  }, Qe.useSyncExternalStore = function(L, W, re) {
    return j.H.useSyncExternalStore(
      L,
      W,
      re
    );
  }, Qe.useTransition = function() {
    return j.H.useTransition();
  }, Qe.version = "19.2.8", Qe;
}
var Uv;
function tm() {
  return Uv || (Uv = 1, op.exports = a2()), op.exports;
}
var v = tm();
const Be = /* @__PURE__ */ em(v), fu = /* @__PURE__ */ e2({
  __proto__: null,
  default: Be
}, [v]);
/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var nm = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Yb = /^[\\/]{2}/;
function r2(e, a) {
  return a + e.replace(/\\/g, "/");
}
var Iv = "popstate";
function Pv(e) {
  return typeof e == "object" && e != null && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function o2(e = {}) {
  function a(i, s) {
    var h;
    let c = (h = s.state) == null ? void 0 : h.masked, { pathname: d, search: p, hash: m } = c || i.location;
    return zp(
      "",
      { pathname: d, search: p, hash: m },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default",
      c ? {
        pathname: i.location.pathname,
        search: i.location.search,
        hash: i.location.hash
      } : void 0
    );
  }
  function o(i, s) {
    return typeof s == "string" ? s : rs(s);
  }
  return l2(
    a,
    o,
    null,
    e
  );
}
function Xt(e, a) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(a);
}
function Ja(e, a) {
  if (!e) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function i2() {
  return Math.random().toString(36).substring(2, 10);
}
function Vv(e, a) {
  return {
    usr: e.state,
    key: e.key,
    idx: a,
    masked: e.mask ? {
      pathname: e.pathname,
      search: e.search,
      hash: e.hash
    } : void 0
  };
}
function zp(e, a, o = null, i, s) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? Vi(a) : a,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || i || i2(),
    mask: s
  };
}
function rs({
  pathname: e = "/",
  search: a = "",
  hash: o = ""
}) {
  return a && a !== "?" && (e += a.charAt(0) === "?" ? a : "?" + a), o && o !== "#" && (e += o.charAt(0) === "#" ? o : "#" + o), e;
}
function Vi(e) {
  let a = {};
  if (e) {
    let o = e.indexOf("#");
    o >= 0 && (a.hash = e.substring(o), e = e.substring(0, o));
    let i = e.indexOf("?");
    i >= 0 && (a.search = e.substring(i), e = e.substring(0, i)), e && (a.pathname = e);
  }
  return a;
}
function l2(e, a, o, i = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = i, d = s.history, p = "POP", m = null, h = g();
  h == null && (h = 0, d.replaceState({ ...d.state, idx: h }, ""));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function y() {
    p = "POP";
    let w = g(), z = w == null ? null : w - h;
    h = w, m && m({ action: p, location: E.location, delta: z });
  }
  function x(w, z) {
    p = "PUSH";
    let k = Pv(w) ? w : zp(E.location, w, z);
    h = g() + 1;
    let O = Vv(k, h), D = E.createHref(k.mask || k);
    try {
      d.pushState(O, "", D);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      s.location.assign(D);
    }
    c && m && m({ action: p, location: E.location, delta: 1 });
  }
  function C(w, z) {
    p = "REPLACE";
    let k = Pv(w) ? w : zp(E.location, w, z);
    h = g();
    let O = Vv(k, h), D = E.createHref(k.mask || k);
    d.replaceState(O, "", D), c && m && m({ action: p, location: E.location, delta: 0 });
  }
  function R(w) {
    return s2(s, w);
  }
  let E = {
    get action() {
      return p;
    },
    get location() {
      return e(s, d);
    },
    listen(w) {
      if (m)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Iv, y), m = w, () => {
        s.removeEventListener(Iv, y), m = null;
      };
    },
    createHref(w) {
      return a(s, w);
    },
    createURL: R,
    encodeLocation(w) {
      let z = R(w);
      return {
        pathname: z.pathname,
        search: z.search,
        hash: z.hash
      };
    },
    push: x,
    replace: C,
    go(w) {
      return d.go(w);
    }
  };
  return E;
}
function s2(e, a, o = !1) {
  let i = "http://localhost";
  e && (i = e.location.origin !== "null" ? e.location.origin : e.location.href), Xt(i, "No window.location.(origin|href) available to create URL");
  let s = typeof a == "string" ? a : rs(a);
  return s = s.replace(/ $/, "%20"), !o && Yb.test(s) && (s = i + s), new URL(s, i);
}
function Fb(e, a, o = "/") {
  return c2(e, a, o, !1);
}
function c2(e, a, o, i, s) {
  let c = typeof a == "string" ? Vi(a) : a, d = Tr(c.pathname || "/", o);
  if (d == null)
    return null;
  let p = u2(e), m = null, h = S2(d);
  for (let g = 0; m == null && g < p.length; ++g)
    m = x2(
      p[g],
      h,
      i
    );
  return m;
}
function u2(e) {
  let a = Wb(e);
  return d2(a), a;
}
function Wb(e, a = [], o = [], i = "", s = !1) {
  let c = (d, p, m = s, h) => {
    let g = {
      relativePath: h === void 0 ? d.path || "" : h,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(i) && m)
        return;
      Xt(
        g.relativePath.startsWith(i),
        `Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), g.relativePath = g.relativePath.slice(i.length);
    }
    let y = Ha([i, g.relativePath]), x = o.concat(g);
    d.children && d.children.length > 0 && (Xt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
    ), Wb(
      d.children,
      a,
      x,
      y,
      m
    )), !(d.path == null && !d.index) && a.push({
      path: y,
      score: v2(y, d.index),
      routesMeta: x.map((C, R) => {
        let [E, w] = Qb(
          C.relativePath,
          C.caseSensitive,
          R === x.length - 1
        );
        return {
          ...C,
          matcher: E,
          compiledParams: w
        };
      })
    });
  };
  return e.forEach((d, p) => {
    var m;
    if (d.path === "" || !((m = d.path) != null && m.includes("?")))
      c(d, p);
    else
      for (let h of Kb(d.path))
        c(d, p, !0, h);
  }), a;
}
function Kb(e) {
  let a = e.split("/");
  if (a.length === 0) return [];
  let [o, ...i] = a, s = o.endsWith("?"), c = o.replace(/\?$/, "");
  if (i.length === 0)
    return s ? [c, ""] : [c];
  let d = Kb(i.join("/")), p = [];
  return p.push(
    ...d.map(
      (m) => m === "" ? c : [c, m].join("/")
    )
  ), s && p.push(...d), p.map(
    (m) => e.startsWith("/") && m === "" ? "/" : m
  );
}
function d2(e) {
  e.sort(
    (a, o) => a.score !== o.score ? o.score - a.score : b2(
      a.routesMeta.map((i) => i.childrenIndex),
      o.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var f2 = /^:[\w-]+$/, p2 = 3, m2 = 2, h2 = 1, g2 = 10, y2 = -2, Gv = (e) => e === "*";
function v2(e, a) {
  let o = e.split("/"), i = o.length;
  return o.some(Gv) && (i += y2), a && (i += m2), o.filter((s) => !Gv(s)).reduce(
    (s, c) => s + (f2.test(c) ? p2 : c === "" ? h2 : g2),
    i
  );
}
function b2(e, a) {
  return e.length === a.length && e.slice(0, -1).every((i, s) => i === a[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function x2(e, a, o = !1) {
  let { routesMeta: i } = e, s = {}, c = "/", d = [];
  for (let p = 0; p < i.length; ++p) {
    let m = i[p], h = p === i.length - 1, g = c === "/" ? a : a.slice(c.length) || "/", y = {
      path: m.relativePath,
      caseSensitive: m.caseSensitive,
      end: h
    }, x = (
      // Use precomputed matcher if it exists
      m.matcher && m.compiledParams ? Xb(
        y,
        g,
        m.matcher,
        m.compiledParams
      ) : pu(y, g)
    ), C = m.route;
    if (!x && h && o && !i[i.length - 1].route.index && (x = pu(
      {
        path: m.relativePath,
        caseSensitive: m.caseSensitive,
        end: !1
      },
      g
    )), !x)
      return null;
    Object.assign(s, x.params), d.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: Ha([c, x.pathname]),
      pathnameBase: T2(
        Ha([c, x.pathnameBase])
      ),
      route: C
    }), x.pathnameBase !== "/" && (c = Ha([c, x.pathnameBase]));
  }
  return d;
}
function pu(e, a) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [o, i] = Qb(
    e.path,
    e.caseSensitive,
    e.end
  );
  return Xb(e, a, o, i);
}
function Xb(e, a, o, i) {
  let s = a.match(o);
  if (!s) return null;
  let c = s[0], d = c.replace(/(.)\/+$/, "$1"), p = s.slice(1);
  return {
    params: i.reduce(
      (h, { paramName: g, isOptional: y }, x) => {
        if (g === "*") {
          let R = p[x] || "";
          d = c.slice(0, c.length - R.length).replace(/(.)\/+$/, "$1");
        }
        const C = p[x];
        return y && !C ? h[g] = void 0 : h[g] = (C || "").replace(/%2F/g, "/"), h;
      },
      {}
    ),
    pathname: c,
    pathnameBase: d,
    pattern: e
  };
}
function Qb(e, a = !1, o = !0) {
  Ja(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let i = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, p, m, h, g) => {
      if (i.push({ paramName: p, isOptional: m != null }), m) {
        let y = g.charAt(h + d.length);
        return y && y !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (i.push({ paramName: "*" }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, a ? void 0 : "i"), i];
}
function S2(e) {
  try {
    return e.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Ja(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), e;
  }
}
function Tr(e, a) {
  if (a === "/") return e;
  if (!e.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length, i = e.charAt(o);
  return i && i !== "/" ? null : e.slice(o) || "/";
}
function C2(e, a = "/") {
  let {
    pathname: o,
    search: i = "",
    hash: s = ""
  } = typeof e == "string" ? Vi(e) : e, c;
  return o ? (o = Jb(o), o.startsWith("/") ? c = qv(o.substring(1), "/") : c = qv(o, a)) : c = a, {
    pathname: c,
    search: R2(i),
    hash: w2(s)
  };
}
function qv(e, a) {
  let o = mu(a).split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
  }), o.length > 1 ? o.join("/") : "/";
}
function ip(e, a, o, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function E2(e) {
  return e.filter(
    (a, o) => o === 0 || a.route.path && a.route.path.length > 0
  );
}
function Zb(e) {
  let a = E2(e);
  return a.map(
    (o, i) => i === a.length - 1 ? o.pathname : o.pathnameBase
  );
}
function am(e, a, o, i = !1) {
  let s;
  typeof e == "string" ? s = Vi(e) : (s = { ...e }, Xt(
    !s.pathname || !s.pathname.includes("?"),
    ip("?", "pathname", "search", s)
  ), Xt(
    !s.pathname || !s.pathname.includes("#"),
    ip("#", "pathname", "hash", s)
  ), Xt(
    !s.search || !s.search.includes("#"),
    ip("#", "search", "hash", s)
  ));
  let c = e === "" || s.pathname === "", d = c ? "/" : s.pathname, p;
  if (d == null)
    p = o;
  else {
    let y = a.length - 1;
    if (!i && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; )
        x.shift(), y -= 1;
      s.pathname = x.join("/");
    }
    p = y >= 0 ? a[y] : "/";
  }
  let m = C2(s, p), h = d && d !== "/" && d.endsWith("/"), g = (c || d === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (h || g) && (m.pathname += "/"), m;
}
var Jb = (e) => e.replace(/[\\/]{2,}/g, "/"), Ha = (e) => Jb(e.join("/")), mu = (e) => e.replace(/\/+$/, ""), T2 = (e) => mu(e).replace(/^\/*/, "/"), R2 = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, w2 = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, M2 = class {
  constructor(e, a, o, i = !1) {
    this.status = e, this.statusText = a || "", this.internal = i, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function A2(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function O2(e) {
  let a = e.map((o) => o.route.path).filter(Boolean);
  return Ha(a) || "/";
}
var e1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function t1(e, a) {
  let o = e;
  if (typeof o != "string" || !nm.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let i = o, s = !1;
  if (e1)
    try {
      let c = new URL(window.location.href), d = Yb.test(o) ? new URL(r2(o, c.protocol)) : new URL(o), p = Tr(d.pathname, a);
      d.origin === c.origin && p != null ? o = p + d.search + d.hash : s = !0;
    } catch {
      Ja(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: i,
    isExternal: s,
    to: o
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var n1 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  n1
);
var z2 = [
  "GET",
  ...n1
];
new Set(z2);
var D2 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function $2(e) {
  try {
    return D2.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
var Gi = v.createContext(null);
Gi.displayName = "DataRouter";
var wu = v.createContext(null);
wu.displayName = "DataRouterState";
var a1 = v.createContext(!1);
function k2() {
  return v.useContext(a1);
}
var r1 = v.createContext({
  isTransitioning: !1
});
r1.displayName = "ViewTransition";
var N2 = v.createContext(
  /* @__PURE__ */ new Map()
);
N2.displayName = "Fetchers";
var L2 = v.createContext(null);
L2.displayName = "Await";
var Da = v.createContext(
  null
);
Da.displayName = "Navigation";
var hs = v.createContext(
  null
);
hs.displayName = "Location";
var Mr = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Mr.displayName = "Route";
var rm = v.createContext(null);
rm.displayName = "RouteError";
var o1 = "REACT_ROUTER_ERROR", j2 = "REDIRECT", B2 = "ROUTE_ERROR_RESPONSE";
function _2(e) {
  if (e.startsWith(`${o1}:${j2}:{`))
    try {
      let a = JSON.parse(e.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function H2(e) {
  if (e.startsWith(
    `${o1}:${B2}:{`
  ))
    try {
      let a = JSON.parse(e.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new M2(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function U2(e, { relative: a } = {}) {
  Xt(
    gs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: i } = v.useContext(Da), { hash: s, pathname: c, search: d } = ys(e, { relative: a }), p = c;
  return o !== "/" && (p = c === "/" ? o : Ha([o, c])), i.createHref({ pathname: p, search: d, hash: s });
}
function gs() {
  return v.useContext(hs) != null;
}
function tr() {
  return Xt(
    gs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(hs).location;
}
var i1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function l1(e) {
  v.useContext(Da).static || v.useLayoutEffect(e);
}
function s1() {
  let { isDataRoute: e } = v.useContext(Mr);
  return e ? J2() : I2();
}
function I2() {
  Xt(
    gs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = v.useContext(Gi), { basename: a, navigator: o } = v.useContext(Da), { matches: i } = v.useContext(Mr), { pathname: s } = tr(), c = JSON.stringify(Zb(i)), d = v.useRef(!1);
  return l1(() => {
    d.current = !0;
  }), v.useCallback(
    (m, h = {}) => {
      if (Ja(d.current, i1), !d.current) return;
      if (typeof m == "number") {
        o.go(m);
        return;
      }
      let g = am(
        m,
        JSON.parse(c),
        s,
        h.relative === "path"
      );
      e == null && a !== "/" && (g.pathname = g.pathname === "/" ? a : Ha([a, g.pathname])), (h.replace ? o.replace : o.push)(
        g,
        h.state,
        h
      );
    },
    [
      a,
      o,
      c,
      s,
      e
    ]
  );
}
v.createContext(null);
function ys(e, { relative: a } = {}) {
  let { matches: o } = v.useContext(Mr), { pathname: i } = tr(), s = JSON.stringify(Zb(o));
  return v.useMemo(
    () => am(
      e,
      JSON.parse(s),
      i,
      a === "path"
    ),
    [e, s, i, a]
  );
}
function P2(e, a) {
  return c1(e, a);
}
function c1(e, a, o) {
  var w;
  Xt(
    gs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = v.useContext(Da), { matches: s } = v.useContext(Mr), c = s[s.length - 1], d = c ? c.params : {}, p = c ? c.pathname : "/", m = c ? c.pathnameBase : "/", h = c && c.route;
  {
    let z = h && h.path || "";
    d1(
      p,
      !h || z.endsWith("*") || z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z === "/" ? "*" : `${z}/*`}">.`
    );
  }
  let g = tr(), y;
  if (a) {
    let z = typeof a == "string" ? Vi(a) : a;
    Xt(
      m === "/" || ((w = z.pathname) == null ? void 0 : w.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${z.pathname}" was given in the \`location\` prop.`
    ), y = z;
  } else
    y = g;
  let x = y.pathname || "/", C = x;
  if (m !== "/") {
    let z = m.replace(/^\//, "").split("/");
    C = "/" + x.replace(/^\//, "").split("/").slice(z.length).join("/");
  }
  let R = o && o.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    o.state.matches.map(
      (z) => Object.assign(z, {
        route: o.manifest[z.route.id] || z.route
      })
    )
  ) : Fb(e, { pathname: C });
  Ja(
    h || R != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ), Ja(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = F2(
    R && R.map(
      (z) => Object.assign({}, z, {
        params: Object.assign({}, d, z.params),
        pathname: Ha([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          i.encodeLocation ? i.encodeLocation(
            z.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : z.pathname
        ]),
        pathnameBase: z.pathnameBase === "/" ? m : Ha([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          i.encodeLocation ? i.encodeLocation(
            z.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : z.pathnameBase
        ])
      })
    ),
    s,
    o
  );
  return a && E ? /* @__PURE__ */ v.createElement(
    hs.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...y
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    E
  ) : E;
}
function V2() {
  let e = Z2(), a = A2(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), o = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: i }, c = { padding: "2px 4px", backgroundColor: i }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), d = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: c }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: c }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), o ? /* @__PURE__ */ v.createElement("pre", { style: s }, o) : null, d);
}
var G2 = /* @__PURE__ */ v.createElement(V2, null), u1 = class extends v.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, a) {
    return a.location !== e.location || a.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : a.error,
      location: a.location,
      revalidation: e.revalidation || a.revalidation
    };
  }
  componentDidCatch(e, a) {
    this.props.onError ? this.props.onError(e, a) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const o = H2(e.digest);
      o && (e = o);
    }
    let a = e !== void 0 ? /* @__PURE__ */ v.createElement(Mr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      rm.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(q2, { error: e }, a) : a;
  }
};
u1.contextType = a1;
var lp = /* @__PURE__ */ new WeakMap();
function q2({
  children: e,
  error: a
}) {
  let { basename: o } = v.useContext(Da);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let i = _2(a.digest);
    if (i) {
      let s = lp.get(a);
      if (s) throw s;
      let c = t1(i.location, o), d = c.absoluteURL || c.to;
      if ($2(d))
        throw new Error("Invalid redirect location");
      if (e1 && !lp.get(a))
        if (c.isExternal || i.reloadDocument)
          window.location.href = d;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(c.to, {
              replace: i.replace
            })
          );
          throw lp.set(a, p), p;
        }
      return /* @__PURE__ */ v.createElement("meta", { httpEquiv: "refresh", content: `0;url=${d}` });
    }
  }
  return e;
}
function Y2({ routeContext: e, match: a, children: o }) {
  let i = v.useContext(Gi);
  return i && i.static && i.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(Mr.Provider, { value: e }, o);
}
function F2(e, a = [], o) {
  let i = o == null ? void 0 : o.state;
  if (e == null) {
    if (!i)
      return null;
    if (i.errors)
      e = i.matches;
    else if (a.length === 0 && !i.initialized && i.matches.length > 0)
      e = i.matches;
    else
      return null;
  }
  let s = e, c = i == null ? void 0 : i.errors;
  if (c != null) {
    let g = s.findIndex(
      (y) => y.route.id && (c == null ? void 0 : c[y.route.id]) !== void 0
    );
    Xt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, g + 1)
    );
  }
  let d = !1, p = -1;
  if (o && i) {
    d = i.renderFallback;
    for (let g = 0; g < s.length; g++) {
      let y = s[g];
      if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = g), y.route.id) {
        let { loaderData: x, errors: C } = i, R = y.route.loader && !x.hasOwnProperty(y.route.id) && (!C || C[y.route.id] === void 0);
        if (y.route.lazy || R) {
          o.isStatic && (d = !0), p >= 0 ? s = s.slice(0, p + 1) : s = [s[0]];
          break;
        }
      }
    }
  }
  let m = o == null ? void 0 : o.onError, h = i && m ? (g, y) => {
    var x, C;
    m(g, {
      location: i.location,
      params: ((C = (x = i.matches) == null ? void 0 : x[0]) == null ? void 0 : C.params) ?? {},
      pattern: O2(i.matches),
      errorInfo: y
    });
  } : void 0;
  return s.reduceRight(
    (g, y, x) => {
      let C, R = !1, E = null, w = null;
      i && (C = c && y.route.id ? c[y.route.id] : void 0, E = y.route.errorElement || G2, d && (p < 0 && x === 0 ? (d1(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, w = null) : p === x && (R = !0, w = y.route.hydrateFallbackElement || null)));
      let z = a.concat(s.slice(0, x + 1)), k = () => {
        let O;
        return C ? O = E : R ? O = w : y.route.Component ? O = /* @__PURE__ */ v.createElement(y.route.Component, null) : y.route.element ? O = y.route.element : O = g, /* @__PURE__ */ v.createElement(
          Y2,
          {
            match: y,
            routeContext: {
              outlet: g,
              matches: z,
              isDataRoute: i != null
            },
            children: O
          }
        );
      };
      return i && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? /* @__PURE__ */ v.createElement(
        u1,
        {
          location: i.location,
          revalidation: i.revalidation,
          component: E,
          error: C,
          children: k(),
          routeContext: { outlet: null, matches: z, isDataRoute: !0 },
          onError: h
        }
      ) : k();
    },
    null
  );
}
function om(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function W2(e) {
  let a = v.useContext(Gi);
  return Xt(a, om(e)), a;
}
function K2(e) {
  let a = v.useContext(wu);
  return Xt(a, om(e)), a;
}
function X2(e) {
  let a = v.useContext(Mr);
  return Xt(a, om(e)), a;
}
function im(e) {
  let a = X2(e), o = a.matches[a.matches.length - 1];
  return Xt(
    o.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function Q2() {
  return im(
    "useRouteId"
    /* UseRouteId */
  );
}
function Z2() {
  var i;
  let e = v.useContext(rm), a = K2(
    "useRouteError"
    /* UseRouteError */
  ), o = im(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (i = a.errors) == null ? void 0 : i[o];
}
function J2() {
  let { router: e } = W2(
    "useNavigate"
    /* UseNavigateStable */
  ), a = im(
    "useNavigate"
    /* UseNavigateStable */
  ), o = v.useRef(!1);
  return l1(() => {
    o.current = !0;
  }), v.useCallback(
    async (s, c = {}) => {
      Ja(o.current, i1), o.current && (typeof s == "number" ? await e.navigate(s) : await e.navigate(s, { fromRouteId: a, ...c }));
    },
    [e, a]
  );
}
var Yv = {};
function d1(e, a, o) {
  !a && !Yv[e] && (Yv[e] = !0, Ja(!1, o));
}
v.memo(eE);
function eE({
  routes: e,
  manifest: a,
  future: o,
  state: i,
  isStatic: s,
  onError: c
}) {
  return c1(e, void 0, {
    manifest: a,
    state: i,
    isStatic: s,
    onError: c
  });
}
function f1(e) {
  Xt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function tE({
  basename: e = "/",
  children: a = null,
  location: o,
  navigationType: i = "POP",
  navigator: s,
  static: c = !1,
  useTransitions: d
}) {
  Xt(
    !gs(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = e.replace(/^\/*/, "/"), m = v.useMemo(
    () => ({
      basename: p,
      navigator: s,
      static: c,
      useTransitions: d,
      future: {}
    }),
    [p, s, c, d]
  );
  typeof o == "string" && (o = Vi(o));
  let {
    pathname: h = "/",
    search: g = "",
    hash: y = "",
    state: x = null,
    key: C = "default",
    mask: R
  } = o, E = v.useMemo(() => {
    let w = Tr(h, p);
    return w == null ? null : {
      location: {
        pathname: w,
        search: g,
        hash: y,
        state: x,
        key: C,
        mask: R
      },
      navigationType: i
    };
  }, [p, h, g, y, x, C, i, R]);
  return Ja(
    E != null,
    `<Router basename="${p}"> is not able to match the URL "${h}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ v.createElement(Da.Provider, { value: m }, /* @__PURE__ */ v.createElement(hs.Provider, { children: a, value: E }));
}
function nE({
  children: e,
  location: a
}) {
  return P2(Dp(e), a);
}
function Dp(e, a = []) {
  let o = [];
  return v.Children.forEach(e, (i, s) => {
    if (!v.isValidElement(i))
      return;
    let c = [...a, s];
    if (i.type === v.Fragment) {
      o.push.apply(
        o,
        Dp(i.props.children, c)
      );
      return;
    }
    Xt(
      i.type === f1,
      `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Xt(
      !i.props.index || !i.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: i.props.id || c.join("-"),
      caseSensitive: i.props.caseSensitive,
      element: i.props.element,
      Component: i.props.Component,
      index: i.props.index,
      path: i.props.path,
      middleware: i.props.middleware,
      loader: i.props.loader,
      action: i.props.action,
      hydrateFallbackElement: i.props.hydrateFallbackElement,
      HydrateFallback: i.props.HydrateFallback,
      errorElement: i.props.errorElement,
      ErrorBoundary: i.props.ErrorBoundary,
      hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
      shouldRevalidate: i.props.shouldRevalidate,
      handle: i.props.handle,
      lazy: i.props.lazy
    };
    i.props.children && (d.children = Dp(
      i.props.children,
      c
    )), o.push(d);
  }), o;
}
var ru = "get", ou = "application/x-www-form-urlencoded";
function Mu(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function aE(e) {
  return Mu(e) && e.tagName.toLowerCase() === "button";
}
function rE(e) {
  return Mu(e) && e.tagName.toLowerCase() === "form";
}
function oE(e) {
  return Mu(e) && e.tagName.toLowerCase() === "input";
}
function iE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function lE(e, a) {
  return e.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !iE(e);
}
var Ic = null;
function sE() {
  if (Ic === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ic = !1;
    } catch {
      Ic = !0;
    }
  return Ic;
}
var cE = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function sp(e) {
  return e != null && !cE.has(e) ? (Ja(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`
  ), null) : e;
}
function uE(e, a) {
  let o, i, s, c, d;
  if (rE(e)) {
    let p = e.getAttribute("action");
    i = p ? Tr(p, a) : null, o = e.getAttribute("method") || ru, s = sp(e.getAttribute("enctype")) || ou, c = new FormData(e);
  } else if (aE(e) || oE(e) && (e.type === "submit" || e.type === "image")) {
    let p = e.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = e.getAttribute("formaction") || p.getAttribute("action");
    if (i = m ? Tr(m, a) : null, o = e.getAttribute("formmethod") || p.getAttribute("method") || ru, s = sp(e.getAttribute("formenctype")) || sp(p.getAttribute("enctype")) || ou, c = new FormData(p, e), !sE()) {
      let { name: h, type: g, value: y } = e;
      if (g === "image") {
        let x = h ? `${h}.` : "";
        c.append(`${x}x`, "0"), c.append(`${x}y`, "0");
      } else h && c.append(h, y);
    }
  } else {
    if (Mu(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = ru, i = null, s = ou, d = e;
  }
  return c && s === "text/plain" && (d = c, c = void 0), { action: i, method: o.toLowerCase(), encType: s, formData: c, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function lm(e, a) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(a);
}
function p1(e, a, o, i) {
  let s = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return o ? s.pathname.endsWith("/") ? s.pathname = `${s.pathname}_.${i}` : s.pathname = `${s.pathname}.${i}` : s.pathname === "/" ? s.pathname = `_root.${i}` : a && Tr(s.pathname, a) === "/" ? s.pathname = `${mu(a)}/_root.${i}` : s.pathname = `${mu(s.pathname)}.${i}`, s;
}
async function dE(e, a) {
  if (e.id in a)
    return a[e.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return a[e.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function fE(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function pE(e, a, o) {
  let i = await Promise.all(
    e.map(async (s) => {
      let c = a.routes[s.route.id];
      if (c) {
        let d = await dE(c, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return yE(
    i.flat(1).filter(fE).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Fv(e, a, o, i, s, c) {
  let d = (m, h) => o[h] ? m.route.id !== o[h].route.id : !0, p = (m, h) => {
    var g;
    return (
      // param change, /users/123 -> /users/456
      o[h].pathname !== m.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((g = o[h].route.path) == null ? void 0 : g.endsWith("*")) && o[h].params["*"] !== m.params["*"]
    );
  };
  return c === "assets" ? a.filter(
    (m, h) => d(m, h) || p(m, h)
  ) : c === "data" ? a.filter((m, h) => {
    var y;
    let g = i.routes[m.route.id];
    if (!g || !g.hasLoader)
      return !1;
    if (d(m, h) || p(m, h))
      return !0;
    if (m.route.shouldRevalidate) {
      let x = m.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: ((y = o[0]) == null ? void 0 : y.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: m.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function mE(e, a, { includeHydrateFallback: o } = {}) {
  return hE(
    e.map((i) => {
      let s = a.routes[i.route.id];
      if (!s) return [];
      let c = [s.module];
      return s.clientActionModule && (c = c.concat(s.clientActionModule)), s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)), o && s.hydrateFallbackModule && (c = c.concat(s.hydrateFallbackModule)), s.imports && (c = c.concat(s.imports)), c;
    }).flat(1)
  );
}
function hE(e) {
  return [...new Set(e)];
}
function gE(e) {
  let a = {}, o = Object.keys(e).sort();
  for (let i of o)
    a[i] = e[i];
  return a;
}
function yE(e, a) {
  let o = /* @__PURE__ */ new Set();
  return new Set(a), e.reduce((i, s) => {
    let c = JSON.stringify(gE(s));
    return o.has(c) || (o.add(c), i.push({ key: c, link: s })), i;
  }, []);
}
function sm() {
  let e = v.useContext(Gi);
  return lm(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function vE() {
  let e = v.useContext(wu);
  return lm(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var cm = v.createContext(void 0);
cm.displayName = "FrameworkContext";
function Au() {
  let e = v.useContext(cm);
  return lm(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function bE(e, a) {
  let o = v.useContext(cm), [i, s] = v.useState(!1), [c, d] = v.useState(!1), { onFocus: p, onBlur: m, onMouseEnter: h, onMouseLeave: g, onTouchStart: y } = a, x = v.useRef(null);
  v.useEffect(() => {
    if (e === "render" && d(!0), e === "viewport") {
      let E = (z) => {
        z.forEach((k) => {
          d(k.isIntersecting);
        });
      }, w = new IntersectionObserver(E, { threshold: 0.5 });
      return x.current && w.observe(x.current), () => {
        w.disconnect();
      };
    }
  }, [e]), v.useEffect(() => {
    if (i) {
      let E = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [i]);
  let C = () => {
    s(!0);
  }, R = () => {
    s(!1), d(!1);
  };
  return o ? e !== "intent" ? [c, x, {}] : [
    c,
    x,
    {
      onFocus: _l(p, C),
      onBlur: _l(m, R),
      onMouseEnter: _l(h, C),
      onMouseLeave: _l(g, R),
      onTouchStart: _l(y, C)
    }
  ] : [!1, x, {}];
}
function _l(e, a) {
  return (o) => {
    e && e(o), o.defaultPrevented || a(o);
  };
}
function xE({ page: e, ...a }) {
  let o = k2(), { nonce: i } = Au(), { router: s } = sm(), c = v.useMemo(
    () => Fb(s.routes, e, s.basename),
    [s.routes, e, s.basename]
  );
  return c ? (a.nonce == null && i && (a = { ...a, nonce: i }), o ? /* @__PURE__ */ v.createElement(CE, { page: e, matches: c, ...a }) : /* @__PURE__ */ v.createElement(EE, { page: e, matches: c, ...a })) : null;
}
function SE(e) {
  let { manifest: a, routeModules: o } = Au(), [i, s] = v.useState([]);
  return v.useEffect(() => {
    let c = !1;
    return pE(e, a, o).then(
      (d) => {
        c || s(d);
      }
    ), () => {
      c = !0;
    };
  }, [e, a, o]), i;
}
function CE({
  page: e,
  matches: a,
  ...o
}) {
  let i = tr(), { future: s } = Au(), { basename: c } = sm(), d = v.useMemo(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let p = p1(
      e,
      c,
      s.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), m = !1, h = [];
    for (let g of a)
      typeof g.route.shouldRevalidate == "function" ? m = !0 : h.push(g.route.id);
    return m && h.length > 0 && p.searchParams.set("_routes", h.join(",")), [p.pathname + p.search];
  }, [
    c,
    s.v8_trailingSlashAwareDataRequests,
    e,
    i,
    a
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, d.map((p) => /* @__PURE__ */ v.createElement("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...o })));
}
function EE({
  page: e,
  matches: a,
  ...o
}) {
  let i = tr(), { future: s, manifest: c, routeModules: d } = Au(), { basename: p } = sm(), { loaderData: m, matches: h } = vE(), g = v.useMemo(
    () => Fv(
      e,
      a,
      h,
      c,
      i,
      "data"
    ),
    [e, a, h, c, i]
  ), y = v.useMemo(
    () => Fv(
      e,
      a,
      h,
      c,
      i,
      "assets"
    ),
    [e, a, h, c, i]
  ), x = v.useMemo(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), w = !1;
    if (a.forEach((k) => {
      var D;
      let O = c.routes[k.route.id];
      !O || !O.hasLoader || (!g.some((M) => M.route.id === k.route.id) && k.route.id in m && ((D = d[k.route.id]) != null && D.shouldRevalidate) || O.hasClientLoader ? w = !0 : E.add(k.route.id));
    }), E.size === 0)
      return [];
    let z = p1(
      e,
      p,
      s.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && E.size > 0 && z.searchParams.set(
      "_routes",
      a.filter((k) => E.has(k.route.id)).map((k) => k.route.id).join(",")
    ), [z.pathname + z.search];
  }, [
    p,
    s.v8_trailingSlashAwareDataRequests,
    m,
    i,
    c,
    g,
    a,
    e,
    d
  ]), C = v.useMemo(
    () => mE(y, c),
    [y, c]
  ), R = SE(y);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, x.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...o })), C.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "modulepreload", href: E, ...o })), R.map(({ key: E, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: E,
        nonce: o.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? o.crossOrigin
      }
    )
  )));
}
function TE(...e) {
  return (a) => {
    e.forEach((o) => {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var RE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  RE && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.2");
} catch {
}
function wE({
  basename: e,
  children: a,
  useTransitions: o,
  window: i
}) {
  let s = v.useRef();
  s.current == null && (s.current = o2({ window: i, v5Compat: !0 }));
  let c = s.current, [d, p] = v.useState({
    action: c.action,
    location: c.location
  }), m = v.useCallback(
    (h) => {
      o === !1 ? p(h) : v.startTransition(() => p(h));
    },
    [o]
  );
  return v.useLayoutEffect(() => c.listen(m), [c, m]), /* @__PURE__ */ v.createElement(
    tE,
    {
      basename: e,
      children: a,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      useTransitions: o
    }
  );
}
var m1 = v.forwardRef(
  function({
    onClick: a,
    discover: o = "render",
    prefetch: i = "none",
    relative: s,
    reloadDocument: c,
    replace: d,
    mask: p,
    state: m,
    target: h,
    to: g,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: C,
    ...R
  }, E) {
    let { basename: w, navigator: z, useTransitions: k } = v.useContext(Da), O = typeof g == "string" && nm.test(g), D = t1(g, w);
    g = D.to;
    let M = U2(g, { relative: s }), $ = tr(), j = null;
    if (p) {
      let F = am(
        p,
        [],
        $.mask ? $.mask.pathname : "/",
        !0
      );
      w !== "/" && (F.pathname = F.pathname === "/" ? w : Ha([w, F.pathname])), j = z.createHref(F);
    }
    let [U, P, S] = bE(
      i,
      R
    ), B = zE(g, {
      replace: d,
      mask: p,
      state: m,
      target: h,
      preventScrollReset: y,
      relative: s,
      viewTransition: x,
      defaultShouldRevalidate: C,
      useTransitions: k
    });
    function H(F) {
      a && a(F), F.defaultPrevented || B(F);
    }
    let G = !(D.isExternal || c), J = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...R,
          ...S,
          href: (G ? j : void 0) || D.absoluteURL || M,
          onClick: G ? H : a,
          ref: TE(E, P),
          target: h,
          "data-discover": !O && o === "render" ? "true" : void 0
        }
      )
    );
    return U && !O ? /* @__PURE__ */ v.createElement(v.Fragment, null, J, /* @__PURE__ */ v.createElement(xE, { page: M })) : J;
  }
);
m1.displayName = "Link";
var ME = v.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: p,
    children: m,
    ...h
  }, g) {
    let y = ys(d, { relative: h.relative }), x = tr(), C = v.useContext(wu), { navigator: R, basename: E } = v.useContext(Da), w = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    LE(y) && p === !0, z = R.encodeLocation ? R.encodeLocation(y).pathname : y.pathname, k = x.pathname, O = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    o || (k = k.toLowerCase(), O = O ? O.toLowerCase() : null, z = z.toLowerCase()), O && E && (O = Tr(O, E) || O);
    const D = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let M = k === z || !s && k.startsWith(z) && k.charAt(D) === "/", $ = O != null && (O === z || !s && O.startsWith(z) && O.charAt(z.length) === "/"), j = {
      isActive: M,
      isPending: $,
      isTransitioning: w
    }, U = M ? a : void 0, P;
    typeof i == "function" ? P = i(j) : P = [
      i,
      M ? "active" : null,
      $ ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof c == "function" ? c(j) : c;
    return /* @__PURE__ */ v.createElement(
      m1,
      {
        ...h,
        "aria-current": U,
        className: P,
        ref: g,
        style: S,
        to: d,
        viewTransition: p
      },
      typeof m == "function" ? m(j) : m
    );
  }
);
ME.displayName = "NavLink";
var AE = v.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: a,
    navigate: o,
    reloadDocument: i,
    replace: s,
    state: c,
    method: d = ru,
    action: p,
    onSubmit: m,
    relative: h,
    preventScrollReset: g,
    viewTransition: y,
    defaultShouldRevalidate: x,
    ...C
  }, R) => {
    let { useTransitions: E } = v.useContext(Da), w = kE(), z = NE(p, { relative: h }), k = d.toLowerCase() === "get" ? "get" : "post", O = typeof p == "string" && nm.test(p), D = (M) => {
      if (m && m(M), M.defaultPrevented) return;
      M.preventDefault();
      let $ = M.nativeEvent.submitter, j = ($ == null ? void 0 : $.getAttribute("formmethod")) || d, U = () => w($ || M.currentTarget, {
        fetcherKey: a,
        method: j,
        navigate: o,
        replace: s,
        state: c,
        relative: h,
        preventScrollReset: g,
        viewTransition: y,
        defaultShouldRevalidate: x
      });
      E && o !== !1 ? v.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: R,
        method: k,
        action: z,
        onSubmit: i ? m : D,
        ...C,
        "data-discover": !O && e === "render" ? "true" : void 0
      }
    );
  }
);
AE.displayName = "Form";
function OE(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function h1(e) {
  let a = v.useContext(Gi);
  return Xt(a, OE(e)), a;
}
function zE(e, {
  target: a,
  replace: o,
  mask: i,
  state: s,
  preventScrollReset: c,
  relative: d,
  viewTransition: p,
  defaultShouldRevalidate: m,
  useTransitions: h
} = {}) {
  let g = s1(), y = tr(), x = ys(e, { relative: d });
  return v.useCallback(
    (C) => {
      if (lE(C, a)) {
        C.preventDefault();
        let R = o !== void 0 ? o : rs(y) === rs(x), E = () => g(e, {
          replace: R,
          mask: i,
          state: s,
          preventScrollReset: c,
          relative: d,
          viewTransition: p,
          defaultShouldRevalidate: m
        });
        h ? v.startTransition(() => E()) : E();
      }
    },
    [
      y,
      g,
      x,
      o,
      i,
      s,
      a,
      e,
      c,
      d,
      p,
      m,
      h
    ]
  );
}
var DE = 0, $E = () => `__${String(++DE)}__`;
function kE() {
  let { router: e } = h1(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(Da), o = Q2(), i = e.fetch, s = e.navigate;
  return v.useCallback(
    async (c, d = {}) => {
      let { action: p, method: m, encType: h, formData: g, body: y } = uE(
        c,
        a
      );
      if (d.navigate === !1) {
        let x = d.fetcherKey || $E();
        await i(x, o, d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: g,
          body: y,
          formMethod: d.method || m,
          formEncType: d.encType || h,
          flushSync: d.flushSync
        });
      } else
        await s(d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: g,
          body: y,
          formMethod: d.method || m,
          formEncType: d.encType || h,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [i, s, a, o]
  );
}
function NE(e, { relative: a } = {}) {
  let { basename: o } = v.useContext(Da), i = v.useContext(Mr);
  Xt(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1), c = { ...ys(e || ".", { relative: a }) }, d = tr();
  if (e == null) {
    c.search = d.search;
    let p = new URLSearchParams(c.search), m = p.getAll("index");
    if (m.some((g) => g === "")) {
      p.delete("index"), m.filter((y) => y).forEach((y) => p.append("index", y));
      let g = p.toString();
      c.search = g ? `?${g}` : "";
    }
  }
  return (!e || e === ".") && s.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (c.pathname = c.pathname === "/" ? o : Ha([o, c.pathname])), rs(c);
}
function LE(e, { relative: a } = {}) {
  let o = v.useContext(r1);
  Xt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = h1(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = ys(e, { relative: a });
  if (!o.isTransitioning)
    return !1;
  let c = Tr(o.currentLocation.pathname, i) || o.currentLocation.pathname, d = Tr(o.nextLocation.pathname, i) || o.nextLocation.pathname;
  return pu(s.pathname, d) != null || pu(s.pathname, c) != null;
}
var cp = { exports: {} }, $n = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wv;
function jE() {
  if (Wv) return $n;
  Wv = 1;
  var e = tm();
  function a(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var i = {
    d: {
      f: o,
      r: function() {
        throw Error(a(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function c(m, h, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: h,
      implementation: g
    };
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, h) {
    if (m === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, $n.createPortal = function(m, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(a(299));
    return c(m, h, null, g);
  }, $n.flushSync = function(m) {
    var h = d.T, g = i.p;
    try {
      if (d.T = null, i.p = 2, m) return m();
    } finally {
      d.T = h, i.p = g, i.d.f();
    }
  }, $n.preconnect = function(m, h) {
    typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, i.d.C(m, h));
  }, $n.prefetchDNS = function(m) {
    typeof m == "string" && i.d.D(m);
  }, $n.preinit = function(m, h) {
    if (typeof m == "string" && h && typeof h.as == "string") {
      var g = h.as, y = p(g, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? i.d.S(
        m,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: y,
          integrity: x,
          fetchPriority: C
        }
      ) : g === "script" && i.d.X(m, {
        crossOrigin: y,
        integrity: x,
        fetchPriority: C,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, $n.preinitModule = function(m, h) {
    if (typeof m == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var g = p(
            h.as,
            h.crossOrigin
          );
          i.d.M(m, {
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && i.d.M(m);
  }, $n.preload = function(m, h) {
    if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var g = h.as, y = p(g, h.crossOrigin);
      i.d.L(m, g, {
        crossOrigin: y,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, $n.preloadModule = function(m, h) {
    if (typeof m == "string")
      if (h) {
        var g = p(h.as, h.crossOrigin);
        i.d.m(m, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else i.d.m(m);
  }, $n.requestFormReset = function(m) {
    i.d.r(m);
  }, $n.unstable_batchedUpdates = function(m, h) {
    return m(h);
  }, $n.useFormState = function(m, h, g) {
    return d.H.useFormState(m, h, g);
  }, $n.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, $n.version = "19.2.8", $n;
}
var Kv;
function g1() {
  if (Kv) return cp.exports;
  Kv = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (a) {
        console.error(a);
      }
  }
  return e(), cp.exports = jE(), cp.exports;
}
var y1 = g1();
const Pc = /* @__PURE__ */ em(y1);
function Rr(e, ...a) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return a.forEach((i) => o.searchParams.append("args[]", i)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const Ua = "$$material";
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, hu.apply(null, arguments);
}
function BE(e) {
  if (e.sheet)
    return e.sheet;
  for (var a = 0; a < document.styleSheets.length; a++)
    if (document.styleSheets[a].ownerNode === e)
      return document.styleSheets[a];
}
function _E(e) {
  var a = document.createElement("style");
  return a.setAttribute("data-emotion", e.key), e.nonce !== void 0 && a.setAttribute("nonce", e.nonce), a.appendChild(document.createTextNode("")), a.setAttribute("data-s", ""), a;
}
var v1 = /* @__PURE__ */ (function() {
  function e(o) {
    var i = this;
    this._insertTag = function(s) {
      var c;
      i.tags.length === 0 ? i.insertionPoint ? c = i.insertionPoint.nextSibling : i.prepend ? c = i.container.firstChild : c = i.before : c = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(s, c), i.tags.push(s);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var a = e.prototype;
  return a.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, a.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_E(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = BE(s);
      try {
        c.insertRule(i, c.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(i));
    this.ctr++;
  }, a.flush = function() {
    this.tags.forEach(function(i) {
      var s;
      return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), kn = "-ms-", gu = "-moz-", Rt = "-webkit-", b1 = "comm", um = "rule", dm = "decl", HE = "@import", x1 = "@keyframes", UE = "@layer", IE = Math.abs, Ou = String.fromCharCode, PE = Object.assign;
function VE(e, a) {
  return zn(e, 0) ^ 45 ? (((a << 2 ^ zn(e, 0)) << 2 ^ zn(e, 1)) << 2 ^ zn(e, 2)) << 2 ^ zn(e, 3) : 0;
}
function S1(e) {
  return e.trim();
}
function GE(e, a) {
  return (e = a.exec(e)) ? e[0] : e;
}
function wt(e, a, o) {
  return e.replace(a, o);
}
function $p(e, a) {
  return e.indexOf(a);
}
function zn(e, a) {
  return e.charCodeAt(a) | 0;
}
function os(e, a, o) {
  return e.slice(a, o);
}
function Wa(e) {
  return e.length;
}
function fm(e) {
  return e.length;
}
function Vc(e, a) {
  return a.push(e), e;
}
function qE(e, a) {
  return e.map(a).join("");
}
var zu = 1, Li = 1, C1 = 0, Kn = 0, gn = 0, qi = "";
function Du(e, a, o, i, s, c, d) {
  return { value: e, root: a, parent: o, type: i, props: s, children: c, line: zu, column: Li, length: d, return: "" };
}
function Hl(e, a) {
  return PE(Du("", null, null, "", null, null, 0), e, { length: -e.length }, a);
}
function YE() {
  return gn;
}
function FE() {
  return gn = Kn > 0 ? zn(qi, --Kn) : 0, Li--, gn === 10 && (Li = 1, zu--), gn;
}
function ca() {
  return gn = Kn < C1 ? zn(qi, Kn++) : 0, Li++, gn === 10 && (Li = 1, zu++), gn;
}
function Qa() {
  return zn(qi, Kn);
}
function iu() {
  return Kn;
}
function vs(e, a) {
  return os(qi, e, a);
}
function is(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function E1(e) {
  return zu = Li = 1, C1 = Wa(qi = e), Kn = 0, [];
}
function T1(e) {
  return qi = "", e;
}
function lu(e) {
  return S1(vs(Kn - 1, kp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function WE(e) {
  for (; (gn = Qa()) && gn < 33; )
    ca();
  return is(e) > 2 || is(gn) > 3 ? "" : " ";
}
function KE(e, a) {
  for (; --a && ca() && !(gn < 48 || gn > 102 || gn > 57 && gn < 65 || gn > 70 && gn < 97); )
    ;
  return vs(e, iu() + (a < 6 && Qa() == 32 && ca() == 32));
}
function kp(e) {
  for (; ca(); )
    switch (gn) {
      // ] ) " '
      case e:
        return Kn;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && kp(gn);
        break;
      // (
      case 40:
        e === 41 && kp(e);
        break;
      // \
      case 92:
        ca();
        break;
    }
  return Kn;
}
function XE(e, a) {
  for (; ca() && e + gn !== 57; )
    if (e + gn === 84 && Qa() === 47)
      break;
  return "/*" + vs(a, Kn - 1) + "*" + Ou(e === 47 ? e : ca());
}
function QE(e) {
  for (; !is(Qa()); )
    ca();
  return vs(e, Kn);
}
function ZE(e) {
  return T1(su("", null, null, null, [""], e = E1(e), 0, [0], e));
}
function su(e, a, o, i, s, c, d, p, m) {
  for (var h = 0, g = 0, y = d, x = 0, C = 0, R = 0, E = 1, w = 1, z = 1, k = 0, O = "", D = s, M = c, $ = i, j = O; w; )
    switch (R = k, k = ca()) {
      // (
      case 40:
        if (R != 108 && zn(j, y - 1) == 58) {
          $p(j += wt(lu(k), "&", "&\f"), "&\f") != -1 && (z = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        j += lu(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        j += WE(R);
        break;
      // \
      case 92:
        j += KE(iu() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qa()) {
          case 42:
          case 47:
            Vc(JE(XE(ca(), iu()), a, o), m);
            break;
          default:
            j += "/";
        }
        break;
      // {
      case 123 * E:
        p[h++] = Wa(j) * z;
      // } ; \0
      case 125 * E:
      case 59:
      case 0:
        switch (k) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + g:
            z == -1 && (j = wt(j, /\f/g, "")), C > 0 && Wa(j) - y && Vc(C > 32 ? Qv(j + ";", i, o, y - 1) : Qv(wt(j, " ", "") + ";", i, o, y - 2), m);
            break;
          // @ ;
          case 59:
            j += ";";
          // { rule/at-rule
          default:
            if (Vc($ = Xv(j, a, o, h, g, s, p, O, D = [], M = [], y), c), k === 123)
              if (g === 0)
                su(j, a, $, $, D, c, y, p, M);
              else
                switch (x === 99 && zn(j, 3) === 110 ? 100 : x) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    su(e, $, $, i && Vc(Xv(e, $, $, 0, 0, s, p, O, s, D = [], y), M), s, M, y, p, i ? D : M);
                    break;
                  default:
                    su(j, $, $, $, [""], M, 0, p, M);
                }
        }
        h = g = C = 0, E = z = 1, O = j = "", y = d;
        break;
      // :
      case 58:
        y = 1 + Wa(j), C = R;
      default:
        if (E < 1) {
          if (k == 123)
            --E;
          else if (k == 125 && E++ == 0 && FE() == 125)
            continue;
        }
        switch (j += Ou(k), k * E) {
          // &
          case 38:
            z = g > 0 ? 1 : (j += "\f", -1);
            break;
          // ,
          case 44:
            p[h++] = (Wa(j) - 1) * z, z = 1;
            break;
          // @
          case 64:
            Qa() === 45 && (j += lu(ca())), x = Qa(), g = y = Wa(O = j += QE(iu())), k++;
            break;
          // -
          case 45:
            R === 45 && Wa(j) == 2 && (E = 0);
        }
    }
  return c;
}
function Xv(e, a, o, i, s, c, d, p, m, h, g) {
  for (var y = s - 1, x = s === 0 ? c : [""], C = fm(x), R = 0, E = 0, w = 0; R < i; ++R)
    for (var z = 0, k = os(e, y + 1, y = IE(E = d[R])), O = e; z < C; ++z)
      (O = S1(E > 0 ? x[z] + " " + k : wt(k, /&\f/g, x[z]))) && (m[w++] = O);
  return Du(e, a, o, s === 0 ? um : p, m, h, g);
}
function JE(e, a, o) {
  return Du(e, a, o, b1, Ou(YE()), os(e, 2, -2), 0);
}
function Qv(e, a, o, i) {
  return Du(e, a, o, dm, os(e, 0, i), os(e, i + 1, -1), i);
}
function zi(e, a) {
  for (var o = "", i = fm(e), s = 0; s < i; s++)
    o += a(e[s], s, e, a) || "";
  return o;
}
function eT(e, a, o, i) {
  switch (e.type) {
    case UE:
      if (e.children.length) break;
    case HE:
    case dm:
      return e.return = e.return || e.value;
    case b1:
      return "";
    case x1:
      return e.return = e.value + "{" + zi(e.children, i) + "}";
    case um:
      e.value = e.props.join(",");
  }
  return Wa(o = zi(e.children, i)) ? e.return = e.value + "{" + o + "}" : "";
}
function tT(e) {
  var a = fm(e);
  return function(o, i, s, c) {
    for (var d = "", p = 0; p < a; p++)
      d += e[p](o, i, s, c) || "";
    return d;
  };
}
function nT(e) {
  return function(a) {
    a.root || (a = a.return) && e(a);
  };
}
function R1(e) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return a[o] === void 0 && (a[o] = e(o)), a[o];
  };
}
var aT = function(a, o, i) {
  for (var s = 0, c = 0; s = c, c = Qa(), s === 38 && c === 12 && (o[i] = 1), !is(c); )
    ca();
  return vs(a, Kn);
}, rT = function(a, o) {
  var i = -1, s = 44;
  do
    switch (is(s)) {
      case 0:
        s === 38 && Qa() === 12 && (o[i] = 1), a[i] += aT(Kn - 1, o, i);
        break;
      case 2:
        a[i] += lu(s);
        break;
      case 4:
        if (s === 44) {
          a[++i] = Qa() === 58 ? "&\f" : "", o[i] = a[i].length;
          break;
        }
      // fallthrough
      default:
        a[i] += Ou(s);
    }
  while (s = ca());
  return a;
}, oT = function(a, o) {
  return T1(rT(E1(a), o));
}, Zv = /* @__PURE__ */ new WeakMap(), iT = function(a) {
  if (!(a.type !== "rule" || !a.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  a.length < 1)) {
    for (var o = a.value, i = a.parent, s = a.column === i.column && a.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(a.props.length === 1 && o.charCodeAt(0) !== 58 && !Zv.get(i)) && !s) {
      Zv.set(a, !0);
      for (var c = [], d = oT(o, c), p = i.props, m = 0, h = 0; m < d.length; m++)
        for (var g = 0; g < p.length; g++, h++)
          a.props[h] = c[m] ? d[m].replace(/&\f/g, p[g]) : p[g] + " " + d[m];
    }
  }
}, lT = function(a) {
  if (a.type === "decl") {
    var o = a.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (a.return = "", a.value = "");
  }
};
function w1(e, a) {
  switch (VE(e, a)) {
    // color-adjust
    case 5103:
      return Rt + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Rt + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Rt + e + gu + e + kn + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Rt + e + kn + e + e;
    // order
    case 6165:
      return Rt + e + kn + "flex-" + e + e;
    // align-items
    case 5187:
      return Rt + e + wt(e, /(\w+).+(:[^]+)/, Rt + "box-$1$2" + kn + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Rt + e + kn + "flex-item-" + wt(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Rt + e + kn + "flex-line-pack" + wt(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Rt + e + kn + wt(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Rt + e + kn + wt(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Rt + "box-" + wt(e, "-grow", "") + Rt + e + kn + wt(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Rt + wt(e, /([^-])(transform)/g, "$1" + Rt + "$2") + e;
    // cursor
    case 6187:
      return wt(wt(wt(e, /(zoom-|grab)/, Rt + "$1"), /(image-set)/, Rt + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return wt(e, /(image-set\([^]*)/, Rt + "$1$`$1");
    // justify-content
    case 4968:
      return wt(wt(e, /(.+:)(flex-)?(.*)/, Rt + "box-pack:$3" + kn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Rt + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return wt(e, /(.+)-inline(.+)/, Rt + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Wa(e) - 1 - a > 6) switch (zn(e, a + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (zn(e, a + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return wt(e, /(.+:)(.+)-([^]+)/, "$1" + Rt + "$2-$3$1" + gu + (zn(e, a + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~$p(e, "stretch") ? w1(wt(e, "stretch", "fill-available"), a) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (zn(e, a + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (zn(e, Wa(e) - 3 - (~$p(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return wt(e, ":", ":" + Rt) + e;
        // (inline-)?fl(e)x
        case 101:
          return wt(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Rt + (zn(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Rt + "$2$3$1" + kn + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (zn(e, a + 11)) {
        // vertical-l(r)
        case 114:
          return Rt + e + kn + wt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Rt + e + kn + wt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Rt + e + kn + wt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Rt + e + kn + e + e;
  }
  return e;
}
var sT = function(a, o, i, s) {
  if (a.length > -1 && !a.return) switch (a.type) {
    case dm:
      a.return = w1(a.value, a.length);
      break;
    case x1:
      return zi([Hl(a, {
        value: wt(a.value, "@", "@" + Rt)
      })], s);
    case um:
      if (a.length) return qE(a.props, function(c) {
        switch (GE(c, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return zi([Hl(a, {
              props: [wt(c, /:(read-\w+)/, ":" + gu + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return zi([Hl(a, {
              props: [wt(c, /:(plac\w+)/, ":" + Rt + "input-$1")]
            }), Hl(a, {
              props: [wt(c, /:(plac\w+)/, ":" + gu + "$1")]
            }), Hl(a, {
              props: [wt(c, /:(plac\w+)/, kn + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, cT = [sT], M1 = function(a) {
  var o = a.key;
  if (o === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(E) {
      var w = E.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(E), E.setAttribute("data-s", ""));
    });
  }
  var s = a.stylisPlugins || cT, c = {}, d, p = [];
  d = a.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(E) {
      for (var w = E.getAttribute("data-emotion").split(" "), z = 1; z < w.length; z++)
        c[w[z]] = !0;
      p.push(E);
    }
  );
  var m, h = [iT, lT];
  {
    var g, y = [eT, nT(function(E) {
      g.insert(E);
    })], x = tT(h.concat(s, y)), C = function(w) {
      return zi(ZE(w), x);
    };
    m = function(w, z, k, O) {
      g = k, C(w ? w + "{" + z.styles + "}" : z.styles), O && (R.inserted[z.name] = !0);
    };
  }
  var R = {
    key: o,
    sheet: new v1({
      key: o,
      container: d,
      nonce: a.nonce,
      speedy: a.speedy,
      prepend: a.prepend,
      insertionPoint: a.insertionPoint
    }),
    nonce: a.nonce,
    inserted: c,
    registered: {},
    insert: m
  };
  return R.sheet.hydrate(p), R;
}, up = { exports: {} }, Mt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jv;
function uT() {
  if (Jv) return Mt;
  Jv = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function O(M) {
    if (typeof M == "object" && M !== null) {
      var $ = M.$$typeof;
      switch ($) {
        case a:
          switch (M = M.type, M) {
            case m:
            case h:
            case i:
            case c:
            case s:
            case y:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case p:
                case g:
                case R:
                case C:
                case d:
                  return M;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function D(M) {
    return O(M) === h;
  }
  return Mt.AsyncMode = m, Mt.ConcurrentMode = h, Mt.ContextConsumer = p, Mt.ContextProvider = d, Mt.Element = a, Mt.ForwardRef = g, Mt.Fragment = i, Mt.Lazy = R, Mt.Memo = C, Mt.Portal = o, Mt.Profiler = c, Mt.StrictMode = s, Mt.Suspense = y, Mt.isAsyncMode = function(M) {
    return D(M) || O(M) === m;
  }, Mt.isConcurrentMode = D, Mt.isContextConsumer = function(M) {
    return O(M) === p;
  }, Mt.isContextProvider = function(M) {
    return O(M) === d;
  }, Mt.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a;
  }, Mt.isForwardRef = function(M) {
    return O(M) === g;
  }, Mt.isFragment = function(M) {
    return O(M) === i;
  }, Mt.isLazy = function(M) {
    return O(M) === R;
  }, Mt.isMemo = function(M) {
    return O(M) === C;
  }, Mt.isPortal = function(M) {
    return O(M) === o;
  }, Mt.isProfiler = function(M) {
    return O(M) === c;
  }, Mt.isStrictMode = function(M) {
    return O(M) === s;
  }, Mt.isSuspense = function(M) {
    return O(M) === y;
  }, Mt.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === i || M === h || M === c || M === s || M === y || M === x || typeof M == "object" && M !== null && (M.$$typeof === R || M.$$typeof === C || M.$$typeof === d || M.$$typeof === p || M.$$typeof === g || M.$$typeof === w || M.$$typeof === z || M.$$typeof === k || M.$$typeof === E);
  }, Mt.typeOf = O, Mt;
}
var e0;
function dT() {
  return e0 || (e0 = 1, up.exports = uT()), up.exports;
}
var dp, t0;
function fT() {
  if (t0) return dp;
  t0 = 1;
  var e = dT(), a = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, c = {};
  c[e.ForwardRef] = i, c[e.Memo] = s;
  function d(R) {
    return e.isMemo(R) ? s : c[R.$$typeof] || a;
  }
  var p = Object.defineProperty, m = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, g = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, x = Object.prototype;
  function C(R, E, w) {
    if (typeof E != "string") {
      if (x) {
        var z = y(E);
        z && z !== x && C(R, z, w);
      }
      var k = m(E);
      h && (k = k.concat(h(E)));
      for (var O = d(R), D = d(E), M = 0; M < k.length; ++M) {
        var $ = k[M];
        if (!o[$] && !(w && w[$]) && !(D && D[$]) && !(O && O[$])) {
          var j = g(E, $);
          try {
            p(R, $, j);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return dp = C, dp;
}
fT();
var pT = !0;
function A1(e, a, o) {
  var i = "";
  return o.split(" ").forEach(function(s) {
    e[s] !== void 0 ? a.push(e[s] + ";") : s && (i += s + " ");
  }), i;
}
var pm = function(a, o, i) {
  var s = a.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  pT === !1) && a.registered[s] === void 0 && (a.registered[s] = o.styles);
}, mm = function(a, o, i) {
  pm(a, o, i);
  var s = a.key + "-" + o.name;
  if (a.inserted[o.name] === void 0) {
    var c = o;
    do
      a.insert(o === c ? "." + s : "", c, a.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function mT(e) {
  for (var a = 0, o, i = 0, s = e.length; s >= 4; ++i, s -= 4)
    o = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, a = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      a ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      a ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      a ^= e.charCodeAt(i) & 255, a = /* Math.imul(h, m): */
      (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  }
  return a ^= a >>> 13, a = /* Math.imul(h, m): */
  (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), ((a ^ a >>> 15) >>> 0).toString(36);
}
var hT = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, gT = /[A-Z]|^ms/g, yT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, O1 = function(a) {
  return a.charCodeAt(1) === 45;
}, n0 = function(a) {
  return a != null && typeof a != "boolean";
}, fp = /* @__PURE__ */ R1(function(e) {
  return O1(e) ? e : e.replace(gT, "-$&").toLowerCase();
}), a0 = function(a, o) {
  switch (a) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(yT, function(i, s, c) {
          return Ka = {
            name: s,
            styles: c,
            next: Ka
          }, s;
        });
  }
  return hT[a] !== 1 && !O1(a) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function ls(e, a, o) {
  if (o == null)
    return "";
  var i = o;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var s = o;
      if (s.anim === 1)
        return Ka = {
          name: s.name,
          styles: s.styles,
          next: Ka
        }, s.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Ka = {
              name: d.name,
              styles: d.styles,
              next: Ka
            }, d = d.next;
        var p = c.styles + ";";
        return p;
      }
      return vT(e, a, o);
    }
    case "function": {
      if (e !== void 0) {
        var m = Ka, h = o(e);
        return Ka = m, ls(e, a, h);
      }
      break;
    }
  }
  var g = o;
  if (a == null)
    return g;
  var y = a[g];
  return y !== void 0 ? y : g;
}
function vT(e, a, o) {
  var i = "";
  if (Array.isArray(o))
    for (var s = 0; s < o.length; s++)
      i += ls(e, a, o[s]) + ";";
  else
    for (var c in o) {
      var d = o[c];
      if (typeof d != "object") {
        var p = d;
        a != null && a[p] !== void 0 ? i += c + "{" + a[p] + "}" : n0(p) && (i += fp(c) + ":" + a0(c, p) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (a == null || a[d[0]] === void 0))
        for (var m = 0; m < d.length; m++)
          n0(d[m]) && (i += fp(c) + ":" + a0(c, d[m]) + ";");
      else {
        var h = ls(e, a, d);
        switch (c) {
          case "animation":
          case "animationName": {
            i += fp(c) + ":" + h + ";";
            break;
          }
          default:
            i += c + "{" + h + "}";
        }
      }
    }
  return i;
}
var r0 = /label:\s*([^\s;{]+)\s*(;|$)/g, Ka;
function bs(e, a, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, s = "";
  Ka = void 0;
  var c = e[0];
  if (c == null || c.raw === void 0)
    i = !1, s += ls(o, a, c);
  else {
    var d = c;
    s += d[0];
  }
  for (var p = 1; p < e.length; p++)
    if (s += ls(o, a, e[p]), i) {
      var m = c;
      s += m[p];
    }
  r0.lastIndex = 0;
  for (var h = "", g; (g = r0.exec(s)) !== null; )
    h += "-" + g[1];
  var y = mT(s) + h;
  return {
    name: y,
    styles: s,
    next: Ka
  };
}
var bT = function(a) {
  return a();
}, z1 = fu.useInsertionEffect ? fu.useInsertionEffect : !1, D1 = z1 || bT, o0 = z1 || v.useLayoutEffect, $1 = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ M1({
    key: "css"
  }) : null
), xT = $1.Provider, hm = function(a) {
  return /* @__PURE__ */ v.forwardRef(function(o, i) {
    var s = v.useContext($1);
    return a(o, s, i);
  });
}, xs = /* @__PURE__ */ v.createContext({}), gm = {}.hasOwnProperty, Np = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ST = function(a, o) {
  var i = {};
  for (var s in o)
    gm.call(o, s) && (i[s] = o[s]);
  return i[Np] = a, i;
}, CT = function(a) {
  var o = a.cache, i = a.serialized, s = a.isStringTag;
  return pm(o, i, s), D1(function() {
    return mm(o, i, s);
  }), null;
}, ET = /* @__PURE__ */ hm(function(e, a, o) {
  var i = e.css;
  typeof i == "string" && a.registered[i] !== void 0 && (i = a.registered[i]);
  var s = e[Np], c = [i], d = "";
  typeof e.className == "string" ? d = A1(a.registered, c, e.className) : e.className != null && (d = e.className + " ");
  var p = bs(c, void 0, v.useContext(xs));
  d += a.key + "-" + p.name;
  var m = {};
  for (var h in e)
    gm.call(e, h) && h !== "css" && h !== Np && (m[h] = e[h]);
  return m.className = d, o && (m.ref = o), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(CT, {
    cache: a,
    serialized: p,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ v.createElement(s, m));
}), TT = ET, i0 = function(a, o) {
  var i = arguments;
  if (o == null || !gm.call(o, "css"))
    return v.createElement.apply(void 0, i);
  var s = i.length, c = new Array(s);
  c[0] = TT, c[1] = ST(a, o);
  for (var d = 2; d < s; d++)
    c[d] = i[d];
  return v.createElement.apply(null, c);
};
(function(e) {
  var a;
  a || (a = e.JSX || (e.JSX = {}));
})(i0 || (i0 = {}));
var RT = /* @__PURE__ */ hm(function(e, a) {
  var o = e.styles, i = bs([o], void 0, v.useContext(xs)), s = v.useRef();
  return o0(function() {
    var c = a.key + "-global", d = new a.sheet.constructor({
      key: c,
      nonce: a.sheet.nonce,
      container: a.sheet.container,
      speedy: a.sheet.isSpeedy
    }), p = !1, m = document.querySelector('style[data-emotion="' + c + " " + i.name + '"]');
    return a.sheet.tags.length && (d.before = a.sheet.tags[0]), m !== null && (p = !0, m.setAttribute("data-emotion", c), d.hydrate([m])), s.current = [d, p], function() {
      d.flush();
    };
  }, [a]), o0(function() {
    var c = s.current, d = c[0], p = c[1];
    if (p) {
      c[1] = !1;
      return;
    }
    if (i.next !== void 0 && mm(a, i.next, !0), d.tags.length) {
      var m = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = m, d.flush();
    }
    a.insert("", i, d, !1);
  }, [a, i.name]), null;
});
function ym() {
  for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++)
    a[o] = arguments[o];
  return bs(a);
}
function Ss() {
  var e = ym.apply(void 0, arguments), a = "animation-" + e.name;
  return {
    name: a,
    styles: "@keyframes " + a + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var wT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, MT = /* @__PURE__ */ R1(
  function(e) {
    return wT.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), AT = MT, OT = function(a) {
  return a !== "theme";
}, l0 = function(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96 ? AT : OT;
}, s0 = function(a, o, i) {
  var s;
  if (o) {
    var c = o.shouldForwardProp;
    s = a.__emotion_forwardProp && c ? function(d) {
      return a.__emotion_forwardProp(d) && c(d);
    } : c;
  }
  return typeof s != "function" && i && (s = a.__emotion_forwardProp), s;
}, zT = function(a) {
  var o = a.cache, i = a.serialized, s = a.isStringTag;
  return pm(o, i, s), D1(function() {
    return mm(o, i, s);
  }), null;
}, DT = function e(a, o) {
  var i = a.__emotion_real === a, s = i && a.__emotion_base || a, c, d;
  o !== void 0 && (c = o.label, d = o.target);
  var p = s0(a, o, i), m = p || l0(s), h = !m("as");
  return function() {
    var g = arguments, y = i && a.__emotion_styles !== void 0 ? a.__emotion_styles.slice(0) : [];
    if (c !== void 0 && y.push("label:" + c + ";"), g[0] == null || g[0].raw === void 0)
      y.push.apply(y, g);
    else {
      var x = g[0];
      y.push(x[0]);
      for (var C = g.length, R = 1; R < C; R++)
        y.push(g[R], x[R]);
    }
    var E = hm(function(w, z, k) {
      var O = h && w.as || s, D = "", M = [], $ = w;
      if (w.theme == null) {
        $ = {};
        for (var j in w)
          $[j] = w[j];
        $.theme = v.useContext(xs);
      }
      typeof w.className == "string" ? D = A1(z.registered, M, w.className) : w.className != null && (D = w.className + " ");
      var U = bs(y.concat(M), z.registered, $);
      D += z.key + "-" + U.name, d !== void 0 && (D += " " + d);
      var P = h && p === void 0 ? l0(O) : m, S = {};
      for (var B in w)
        h && B === "as" || P(B) && (S[B] = w[B]);
      return S.className = D, k && (S.ref = k), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(zT, {
        cache: z,
        serialized: U,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ v.createElement(O, S));
    });
    return E.displayName = c !== void 0 ? c : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", E.defaultProps = a.defaultProps, E.__emotion_real = E, E.__emotion_base = s, E.__emotion_styles = y, E.__emotion_forwardProp = p, Object.defineProperty(E, "toString", {
      value: function() {
        return "." + d;
      }
    }), E.withComponent = function(w, z) {
      var k = e(w, hu({}, o, z, {
        shouldForwardProp: s0(E, z, !0)
      }));
      return k.apply(void 0, y);
    }, E;
  };
}, $T = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Lp = DT.bind(null);
$T.forEach(function(e) {
  Lp[e] = Lp(e);
});
const pp = /* @__PURE__ */ new Map(), kT = (e, a) => {
  const o = M1(e);
  return o.sheet = new a({
    key: o.key,
    nonce: o.sheet.nonce,
    container: o.sheet.container,
    speedy: o.sheet.isSpeedy,
    prepend: o.sheet.prepend,
    insertionPoint: o.sheet.insertionPoint
  }), o;
};
let to;
if (typeof document == "object" && (to = document.querySelector('[name="emotion-insertion-point"]'), !to)) {
  to = document.createElement("meta"), to.setAttribute("name", "emotion-insertion-point"), to.setAttribute("content", "");
  const e = document.querySelector("head");
  e && e.prepend(to);
}
function NT(e, a) {
  if (e || a) {
    class o extends v1 {
      insert(c, d) {
        return this.key && this.key.endsWith("global") && (this.before = to), super.insert(c, d);
      }
    }
    const i = kT({
      key: "css",
      insertionPoint: e ? to : void 0
    }, o);
    if (a) {
      const s = i.insert;
      i.insert = (...c) => (c[1].styles.match(/^@layer\s+[^{]*$/) || (c[1].styles = `@layer mui {${c[1].styles}}`), s(...c));
    }
    return i;
  }
}
function LT(e) {
  const {
    injectFirst: a,
    enableCssLayer: o,
    children: i
  } = e, s = v.useMemo(() => {
    const c = `${a}-${o}`;
    if (typeof document == "object" && pp.has(c))
      return pp.get(c);
    const d = NT(a, o);
    return pp.set(c, d), d;
  }, [a, o]);
  return s ? /* @__PURE__ */ T.jsx(xT, {
    value: s,
    children: i
  }) : i;
}
function jT(e) {
  return e == null || Object.keys(e).length === 0;
}
function k1(e) {
  const {
    styles: a,
    defaultTheme: o = {}
  } = e, i = typeof a == "function" ? (s) => a(jT(s) ? o : s) : a;
  return /* @__PURE__ */ T.jsx(RT, {
    styles: i
  });
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function N1(e, a) {
  return Lp(e, a);
}
function BT(e, a) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = a(e.__emotion_styles));
}
const c0 = [];
function ao(e) {
  return c0[0] = e, bs(c0);
}
var mp = { exports: {} }, jt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0;
function _T() {
  if (u0) return jt;
  u0 = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), C = Symbol.for("react.client.reference");
  function R(E) {
    if (typeof E == "object" && E !== null) {
      var w = E.$$typeof;
      switch (w) {
        case e:
          switch (E = E.type, E) {
            case o:
            case s:
            case i:
            case m:
            case h:
            case x:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case d:
                case p:
                case y:
                case g:
                  return E;
                case c:
                  return E;
                default:
                  return w;
              }
          }
        case a:
          return w;
      }
    }
  }
  return jt.ContextConsumer = c, jt.ContextProvider = d, jt.Element = e, jt.ForwardRef = p, jt.Fragment = o, jt.Lazy = y, jt.Memo = g, jt.Portal = a, jt.Profiler = s, jt.StrictMode = i, jt.Suspense = m, jt.SuspenseList = h, jt.isContextConsumer = function(E) {
    return R(E) === c;
  }, jt.isContextProvider = function(E) {
    return R(E) === d;
  }, jt.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, jt.isForwardRef = function(E) {
    return R(E) === p;
  }, jt.isFragment = function(E) {
    return R(E) === o;
  }, jt.isLazy = function(E) {
    return R(E) === y;
  }, jt.isMemo = function(E) {
    return R(E) === g;
  }, jt.isPortal = function(E) {
    return R(E) === a;
  }, jt.isProfiler = function(E) {
    return R(E) === s;
  }, jt.isStrictMode = function(E) {
    return R(E) === i;
  }, jt.isSuspense = function(E) {
    return R(E) === m;
  }, jt.isSuspenseList = function(E) {
    return R(E) === h;
  }, jt.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === o || E === s || E === i || E === m || E === h || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === g || E.$$typeof === d || E.$$typeof === c || E.$$typeof === p || E.$$typeof === C || E.getModuleId !== void 0);
  }, jt.typeOf = R, jt;
}
var d0;
function HT() {
  return d0 || (d0 = 1, mp.exports = /* @__PURE__ */ _T()), mp.exports;
}
var L1 = /* @__PURE__ */ HT();
function Xa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const a = Object.getPrototypeOf(e);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function j1(e) {
  if (/* @__PURE__ */ v.isValidElement(e) || L1.isValidElementType(e) || !Xa(e))
    return e;
  const a = {};
  return Object.keys(e).forEach((o) => {
    a[o] = j1(e[o]);
  }), a;
}
function jn(e, a, o = {
  clone: !0
}) {
  const i = o.clone ? {
    ...e
  } : e;
  return Xa(e) && Xa(a) && Object.keys(a).forEach((s) => {
    /* @__PURE__ */ v.isValidElement(a[s]) || L1.isValidElementType(a[s]) ? i[s] = a[s] : Xa(a[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && Xa(e[s]) ? i[s] = jn(e[s], a[s], o) : o.clone ? i[s] = Xa(a[s]) ? j1(a[s]) : a[s] : i[s] = a[s];
  }), i;
}
const UT = (e) => {
  const a = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return a.sort((o, i) => o.val - i.val), a.reduce((o, i) => ({
    ...o,
    [i.key]: i.val
  }), {});
};
function B1(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: a = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: i = 5,
    ...s
  } = e, c = UT(a), d = Object.keys(c);
  function p(x) {
    return `@media (min-width:${typeof a[x] == "number" ? a[x] : x}${o})`;
  }
  function m(x) {
    return `@media (max-width:${(typeof a[x] == "number" ? a[x] : x) - i / 100}${o})`;
  }
  function h(x, C) {
    const R = d.indexOf(C);
    return `@media (min-width:${typeof a[x] == "number" ? a[x] : x}${o}) and (max-width:${(R !== -1 && typeof a[d[R]] == "number" ? a[d[R]] : C) - i / 100}${o})`;
  }
  function g(x) {
    return d.indexOf(x) + 1 < d.length ? h(x, d[d.indexOf(x) + 1]) : p(x);
  }
  function y(x) {
    const C = d.indexOf(x);
    return C === 0 ? p(d[1]) : C === d.length - 1 ? m(d[C]) : h(x, d[d.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: c,
    up: p,
    down: m,
    between: h,
    only: g,
    not: y,
    unit: o,
    ...s
  };
}
function f0(e, a) {
  if (!e.containerQueries)
    return a;
  const o = Object.keys(a).filter((i) => i.startsWith("@container")).sort((i, s) => {
    var d, p;
    const c = /min-width:\s*([0-9.]+)/;
    return +(((d = i.match(c)) == null ? void 0 : d[1]) || 0) - +(((p = s.match(c)) == null ? void 0 : p[1]) || 0);
  });
  return o.length ? o.reduce((i, s) => {
    const c = a[s];
    return delete i[s], i[s] = c, i;
  }, {
    ...a
  }) : a;
}
function IT(e, a) {
  return a === "@" || a.startsWith("@") && (e.some((o) => a.startsWith(`@${o}`)) || !!a.match(/^@\d/));
}
function PT(e, a) {
  const o = a.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, i, s] = o, c = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(s).up(c);
}
function VT(e) {
  const a = (c, d) => c.replace("@media", d ? `@container ${d}` : "@container");
  function o(c, d) {
    c.up = (...p) => a(e.breakpoints.up(...p), d), c.down = (...p) => a(e.breakpoints.down(...p), d), c.between = (...p) => a(e.breakpoints.between(...p), d), c.only = (...p) => a(e.breakpoints.only(...p), d), c.not = (...p) => {
      const m = a(e.breakpoints.not(...p), d);
      return m.includes("not all and") ? m.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : m;
    };
  }
  const i = {}, s = (c) => (o(i, c), i);
  return o(s), {
    ...e,
    containerQueries: s
  };
}
const GT = {
  borderRadius: 4
};
function Ql(e, a) {
  return a ? jn(e, a, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const $u = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, p0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${$u[e]}px)`
}, qT = {
  containerQueries: (e) => ({
    up: (a) => {
      let o = typeof a == "number" ? a : $u[a] || a;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Aa(e, a, o) {
  const i = e.theme || {};
  if (Array.isArray(a)) {
    const c = i.breakpoints || p0;
    return a.reduce((d, p, m) => (d[c.up(c.keys[m])] = o(a[m]), d), {});
  }
  if (typeof a == "object") {
    const c = i.breakpoints || p0;
    return Object.keys(a).reduce((d, p) => {
      if (IT(c.keys, p)) {
        const m = PT(i.containerQueries ? i : qT, p);
        m && (d[m] = o(a[p], p));
      } else if (Object.keys(c.values || $u).includes(p)) {
        const m = c.up(p);
        d[m] = o(a[p], p);
      } else {
        const m = p;
        d[m] = a[m];
      }
      return d;
    }, {});
  }
  return o(a);
}
function YT(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((i, s) => {
    const c = e.up(s);
    return i[c] = {}, i;
  }, {})) || {};
}
function m0(e, a) {
  return e.reduce((o, i) => {
    const s = o[i];
    return (!s || Object.keys(s).length === 0) && delete o[i], o;
  }, a);
}
function FT(e, a) {
  if (typeof e != "object")
    return {};
  const o = {}, i = Object.keys(a);
  return Array.isArray(e) ? i.forEach((s, c) => {
    c < e.length && (o[s] = !0);
  }) : i.forEach((s) => {
    e[s] != null && (o[s] = !0);
  }), o;
}
function ku({
  values: e,
  breakpoints: a,
  base: o
}) {
  const i = o || FT(e, a), s = Object.keys(i);
  if (s.length === 0)
    return e;
  let c;
  return s.reduce((d, p, m) => (Array.isArray(e) ? (d[p] = e[m] != null ? e[m] : e[c], c = m) : typeof e == "object" ? (d[p] = e[p] != null ? e[p] : e[c], c = p) : d[p] = e, d), {});
}
function ue(e) {
  if (typeof e != "string")
    throw new Error(Rr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Nu(e, a, o = !0) {
  if (!a || typeof a != "string")
    return null;
  if (e && e.vars && o) {
    const i = `vars.${a}`.split(".").reduce((s, c) => s && s[c] ? s[c] : null, e);
    if (i != null)
      return i;
  }
  return a.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, e);
}
function yu(e, a, o, i = o) {
  let s;
  return typeof e == "function" ? s = e(o) : Array.isArray(e) ? s = e[o] || i : s = Nu(e, o) || i, a && (s = a(s, i, e)), s;
}
function un(e) {
  const {
    prop: a,
    cssProperty: o = e.prop,
    themeKey: i,
    transform: s
  } = e, c = (d) => {
    if (d[a] == null)
      return null;
    const p = d[a], m = d.theme, h = Nu(m, i) || {};
    return Aa(d, p, (y) => {
      let x = yu(h, s, y);
      return y === x && typeof y == "string" && (x = yu(h, s, `${a}${y === "default" ? "" : ue(y)}`, y)), o === !1 ? x : {
        [o]: x
      };
    });
  };
  return c.propTypes = {}, c.filterProps = [a], c;
}
function WT(e) {
  const a = {};
  return (o) => (a[o] === void 0 && (a[o] = e(o)), a[o]);
}
const KT = {
  m: "margin",
  p: "padding"
}, XT = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, h0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, QT = WT((e) => {
  if (e.length > 2)
    if (h0[e])
      e = h0[e];
    else
      return [e];
  const [a, o] = e.split(""), i = KT[a], s = XT[o] || "";
  return Array.isArray(s) ? s.map((c) => i + c) : [i + s];
}), vm = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], bm = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...vm, ...bm];
function Cs(e, a, o, i) {
  const s = Nu(e, a, !0) ?? o;
  return typeof s == "number" || typeof s == "string" ? (c) => typeof c == "string" ? c : typeof s == "string" ? `calc(${c} * ${s})` : s * c : Array.isArray(s) ? (c) => {
    if (typeof c == "string")
      return c;
    const d = Math.abs(c), p = s[d];
    return c >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
  } : typeof s == "function" ? s : () => {
  };
}
function xm(e) {
  return Cs(e, "spacing", 8);
}
function Es(e, a) {
  return typeof a == "string" || a == null ? a : e(a);
}
function ZT(e, a) {
  return (o) => e.reduce((i, s) => (i[s] = Es(a, o), i), {});
}
function JT(e, a, o, i) {
  if (!a.includes(o))
    return null;
  const s = QT(o), c = ZT(s, i), d = e[o];
  return Aa(e, d, c);
}
function _1(e, a) {
  const o = xm(e.theme);
  return Object.keys(e).map((i) => JT(e, a, i, o)).reduce(Ql, {});
}
function en(e) {
  return _1(e, vm);
}
en.propTypes = {};
en.filterProps = vm;
function tn(e) {
  return _1(e, bm);
}
tn.propTypes = {};
tn.filterProps = bm;
function Sm(e = 8, a = xm({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...i) => (i.length === 0 ? [1] : i).map((c) => {
    const d = a(c);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return o.mui = !0, o;
}
function Lu(...e) {
  const a = e.reduce((i, s) => (s.filterProps.forEach((c) => {
    i[c] = s;
  }), i), {}), o = (i) => Object.keys(i).reduce((s, c) => a[c] ? Ql(s, a[c](i)) : s, {});
  return o.propTypes = {}, o.filterProps = e.reduce((i, s) => i.concat(s.filterProps), []), o;
}
function wa(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $a(e, a) {
  return un({
    prop: e,
    themeKey: "borders",
    transform: a
  });
}
const eR = $a("border", wa), tR = $a("borderTop", wa), nR = $a("borderRight", wa), aR = $a("borderBottom", wa), rR = $a("borderLeft", wa), oR = $a("borderColor"), iR = $a("borderTopColor"), lR = $a("borderRightColor"), sR = $a("borderBottomColor"), cR = $a("borderLeftColor"), uR = $a("outline", wa), dR = $a("outlineColor"), ju = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const a = Cs(e.theme, "shape.borderRadius", 4), o = (i) => ({
      borderRadius: Es(a, i)
    });
    return Aa(e, e.borderRadius, o);
  }
  return null;
};
ju.propTypes = {};
ju.filterProps = ["borderRadius"];
Lu(eR, tR, nR, aR, rR, oR, iR, lR, sR, cR, ju, uR, dR);
const Bu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const a = Cs(e.theme, "spacing", 8), o = (i) => ({
      gap: Es(a, i)
    });
    return Aa(e, e.gap, o);
  }
  return null;
};
Bu.propTypes = {};
Bu.filterProps = ["gap"];
const _u = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const a = Cs(e.theme, "spacing", 8), o = (i) => ({
      columnGap: Es(a, i)
    });
    return Aa(e, e.columnGap, o);
  }
  return null;
};
_u.propTypes = {};
_u.filterProps = ["columnGap"];
const Hu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const a = Cs(e.theme, "spacing", 8), o = (i) => ({
      rowGap: Es(a, i)
    });
    return Aa(e, e.rowGap, o);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ["rowGap"];
const fR = un({
  prop: "gridColumn"
}), pR = un({
  prop: "gridRow"
}), mR = un({
  prop: "gridAutoFlow"
}), hR = un({
  prop: "gridAutoColumns"
}), gR = un({
  prop: "gridAutoRows"
}), yR = un({
  prop: "gridTemplateColumns"
}), vR = un({
  prop: "gridTemplateRows"
}), bR = un({
  prop: "gridTemplateAreas"
}), xR = un({
  prop: "gridArea"
});
Lu(Bu, _u, Hu, fR, pR, mR, hR, gR, yR, vR, bR, xR);
function Di(e, a) {
  return a === "grey" ? a : e;
}
const SR = un({
  prop: "color",
  themeKey: "palette",
  transform: Di
}), CR = un({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Di
}), ER = un({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Di
});
Lu(SR, CR, ER);
function sa(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const TR = un({
  prop: "width",
  transform: sa
}), Cm = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const a = (o) => {
      var s, c, d, p, m;
      const i = ((d = (c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.values) == null ? void 0 : d[o]) || $u[o];
      return i ? ((m = (p = e.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : m.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: sa(o)
      };
    };
    return Aa(e, e.maxWidth, a);
  }
  return null;
};
Cm.filterProps = ["maxWidth"];
const RR = un({
  prop: "minWidth",
  transform: sa
}), wR = un({
  prop: "height",
  transform: sa
}), MR = un({
  prop: "maxHeight",
  transform: sa
}), AR = un({
  prop: "minHeight",
  transform: sa
});
un({
  prop: "size",
  cssProperty: "width",
  transform: sa
});
un({
  prop: "size",
  cssProperty: "height",
  transform: sa
});
const OR = un({
  prop: "boxSizing"
});
Lu(TR, Cm, RR, wR, MR, AR, OR);
const Ts = {
  // borders
  border: {
    themeKey: "borders",
    transform: wa
  },
  borderTop: {
    themeKey: "borders",
    transform: wa
  },
  borderRight: {
    themeKey: "borders",
    transform: wa
  },
  borderBottom: {
    themeKey: "borders",
    transform: wa
  },
  borderLeft: {
    themeKey: "borders",
    transform: wa
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: wa
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ju
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Di
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Di
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Di
  },
  // spacing
  p: {
    style: tn
  },
  pt: {
    style: tn
  },
  pr: {
    style: tn
  },
  pb: {
    style: tn
  },
  pl: {
    style: tn
  },
  px: {
    style: tn
  },
  py: {
    style: tn
  },
  padding: {
    style: tn
  },
  paddingTop: {
    style: tn
  },
  paddingRight: {
    style: tn
  },
  paddingBottom: {
    style: tn
  },
  paddingLeft: {
    style: tn
  },
  paddingX: {
    style: tn
  },
  paddingY: {
    style: tn
  },
  paddingInline: {
    style: tn
  },
  paddingInlineStart: {
    style: tn
  },
  paddingInlineEnd: {
    style: tn
  },
  paddingBlock: {
    style: tn
  },
  paddingBlockStart: {
    style: tn
  },
  paddingBlockEnd: {
    style: tn
  },
  m: {
    style: en
  },
  mt: {
    style: en
  },
  mr: {
    style: en
  },
  mb: {
    style: en
  },
  ml: {
    style: en
  },
  mx: {
    style: en
  },
  my: {
    style: en
  },
  margin: {
    style: en
  },
  marginTop: {
    style: en
  },
  marginRight: {
    style: en
  },
  marginBottom: {
    style: en
  },
  marginLeft: {
    style: en
  },
  marginX: {
    style: en
  },
  marginY: {
    style: en
  },
  marginInline: {
    style: en
  },
  marginInlineStart: {
    style: en
  },
  marginInlineEnd: {
    style: en
  },
  marginBlock: {
    style: en
  },
  marginBlockStart: {
    style: en
  },
  marginBlockEnd: {
    style: en
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Bu
  },
  rowGap: {
    style: Hu
  },
  columnGap: {
    style: _u
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sa
  },
  maxWidth: {
    style: Cm
  },
  minWidth: {
    transform: sa
  },
  height: {
    transform: sa
  },
  maxHeight: {
    transform: sa
  },
  minHeight: {
    transform: sa
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function zR(...e) {
  const a = e.reduce((i, s) => i.concat(Object.keys(s)), []), o = new Set(a);
  return e.every((i) => o.size === Object.keys(i).length);
}
function DR(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function $R() {
  function e(o, i, s, c) {
    const d = {
      [o]: i,
      theme: s
    }, p = c[o];
    if (!p)
      return {
        [o]: i
      };
    const {
      cssProperty: m = o,
      themeKey: h,
      transform: g,
      style: y
    } = p;
    if (i == null)
      return null;
    if (h === "typography" && i === "inherit")
      return {
        [o]: i
      };
    const x = Nu(s, h) || {};
    return y ? y(d) : Aa(d, i, (R) => {
      let E = yu(x, g, R);
      return R === E && typeof R == "string" && (E = yu(x, g, `${o}${R === "default" ? "" : ue(R)}`, R)), m === !1 ? E : {
        [m]: E
      };
    });
  }
  function a(o) {
    const {
      sx: i,
      theme: s = {},
      nested: c
    } = o || {};
    if (!i)
      return null;
    const d = s.unstable_sxConfig ?? Ts;
    function p(m) {
      let h = m;
      if (typeof m == "function")
        h = m(s);
      else if (typeof m != "object")
        return m;
      if (!h)
        return null;
      const g = YT(s.breakpoints), y = Object.keys(g);
      let x = g;
      return Object.keys(h).forEach((C) => {
        const R = DR(h[C], s);
        if (R != null)
          if (typeof R == "object")
            if (d[C])
              x = Ql(x, e(C, R, s, d));
            else {
              const E = Aa({
                theme: s
              }, R, (w) => ({
                [C]: w
              }));
              zR(E, R) ? x[C] = a({
                sx: R,
                theme: s,
                nested: !0
              }) : x = Ql(x, E);
            }
          else
            x = Ql(x, e(C, R, s, d));
      }), !c && s.modularCssLayers ? {
        "@layer sx": f0(s, m0(y, x))
      } : f0(s, m0(y, x));
    }
    return Array.isArray(i) ? i.map(p) : p(i);
  }
  return a;
}
const oo = $R();
oo.filterProps = ["sx"];
function kR(e, a) {
  var i;
  const o = this;
  if (o.vars) {
    if (!((i = o.colorSchemes) != null && i[e]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let s = o.getColorSchemeSelector(e);
    return s === "&" ? a : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), {
      [s]: a
    });
  }
  return o.palette.mode === e ? a : {};
}
function Em(e = {}, ...a) {
  const {
    breakpoints: o = {},
    palette: i = {},
    spacing: s,
    shape: c = {},
    ...d
  } = e, p = B1(o), m = Sm(s);
  let h = jn({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...i
    },
    spacing: m,
    shape: {
      ...GT,
      ...c
    }
  }, d);
  return h = VT(h), h.applyStyles = kR, h = a.reduce((g, y) => jn(g, y), h), h.unstable_sxConfig = {
    ...Ts,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return oo({
      sx: y,
      theme: this
    });
  }, h;
}
function NR(e) {
  return Object.keys(e).length === 0;
}
function Uu(e = null) {
  const a = v.useContext(xs);
  return !a || NR(a) ? e : a;
}
const LR = Em();
function Tm(e = LR) {
  return Uu(e);
}
function hp(e) {
  const a = ao(e);
  return e !== a && a.styles ? (a.styles.match(/^@layer\s+[^{]*$/) || (a.styles = `@layer global{${a.styles}}`), a) : e;
}
function H1({
  styles: e,
  themeId: a,
  defaultTheme: o = {}
}) {
  const i = Tm(o), s = a && i[a] || i;
  let c = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(c) ? c = c.map((d) => hp(typeof d == "function" ? d(s) : d)) : c = hp(c)), /* @__PURE__ */ T.jsx(k1, {
    styles: c
  });
}
const jR = (e) => {
  var i;
  const a = {
    systemProps: {},
    otherProps: {}
  }, o = ((i = e == null ? void 0 : e.theme) == null ? void 0 : i.unstable_sxConfig) ?? Ts;
  return Object.keys(e).forEach((s) => {
    o[s] ? a.systemProps[s] = e[s] : a.otherProps[s] = e[s];
  }), a;
};
function Rm(e) {
  const {
    sx: a,
    ...o
  } = e, {
    systemProps: i,
    otherProps: s
  } = jR(o);
  let c;
  return Array.isArray(a) ? c = [i, ...a] : typeof a == "function" ? c = (...d) => {
    const p = a(...d);
    return Xa(p) ? {
      ...i,
      ...p
    } : i;
  } : c = {
    ...i,
    ...a
  }, {
    ...s,
    sx: c
  };
}
const g0 = (e) => e, BR = () => {
  let e = g0;
  return {
    configure(a) {
      e = a;
    },
    generate(a) {
      return e(a);
    },
    reset() {
      e = g0;
    }
  };
}, U1 = BR();
function I1(e) {
  var a, o, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (a = 0; a < s; a++) e[a] && (o = I1(e[a])) && (i && (i += " "), i += o);
  } else for (o in e) e[o] && (i && (i += " "), i += o);
  return i;
}
function he() {
  for (var e, a, o = 0, i = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (a = I1(e)) && (i && (i += " "), i += a);
  return i;
}
function _R(e = {}) {
  const {
    themeId: a,
    defaultTheme: o,
    defaultClassName: i = "MuiBox-root",
    generateClassName: s
  } = e, c = N1("div", {
    shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as"
  })(oo);
  return /* @__PURE__ */ v.forwardRef(function(m, h) {
    const g = Tm(o), {
      className: y,
      component: x = "div",
      ...C
    } = Rm(m);
    return /* @__PURE__ */ T.jsx(c, {
      as: x,
      ref: h,
      className: he(y, s ? s(i) : i),
      theme: a && g[a] || g,
      ...C
    });
  });
}
const HR = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ge(e, a, o = "Mui") {
  const i = HR[a];
  return i ? `${o}-${i}` : `${U1.generate(e)}-${a}`;
}
function _e(e, a, o = "Mui") {
  const i = {};
  return a.forEach((s) => {
    i[s] = Ge(e, s, o);
  }), i;
}
function P1(e) {
  const {
    variants: a,
    ...o
  } = e, i = {
    variants: a,
    style: ao(o),
    isProcessed: !0
  };
  return i.style === o || a && a.forEach((s) => {
    typeof s.style != "function" && (s.style = ao(s.style));
  }), i;
}
const UR = Em();
function gp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ko(e, a) {
  return a && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${a}{${String(e.styles)}}`), e;
}
function IR(e) {
  return e ? (a, o) => o[e] : null;
}
function PR(e, a, o) {
  e.theme = qR(e.theme) ? o : e.theme[a] || e.theme;
}
function cu(e, a, o) {
  const i = typeof a == "function" ? a(e) : a;
  if (Array.isArray(i))
    return i.flatMap((s) => cu(e, s, o));
  if (Array.isArray(i == null ? void 0 : i.variants)) {
    let s;
    if (i.isProcessed)
      s = o ? ko(i.style, o) : i.style;
    else {
      const {
        variants: c,
        ...d
      } = i;
      s = o ? ko(ao(d), o) : d;
    }
    return V1(e, i.variants, [s], o);
  }
  return i != null && i.isProcessed ? o ? ko(ao(i.style), o) : i.style : o ? ko(ao(i), o) : i;
}
function V1(e, a, o = [], i = void 0) {
  var c;
  let s;
  e: for (let d = 0; d < a.length; d += 1) {
    const p = a[d];
    if (typeof p.props == "function") {
      if (s ?? (s = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !p.props(s))
        continue;
    } else
      for (const m in p.props)
        if (e[m] !== p.props[m] && ((c = e.ownerState) == null ? void 0 : c[m]) !== p.props[m])
          continue e;
    typeof p.style == "function" ? (s ?? (s = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), o.push(i ? ko(ao(p.style(s)), i) : p.style(s))) : o.push(i ? ko(ao(p.style), i) : p.style);
  }
  return o;
}
function VR(e = {}) {
  const {
    themeId: a,
    defaultTheme: o = UR,
    rootShouldForwardProp: i = gp,
    slotShouldForwardProp: s = gp
  } = e;
  function c(p) {
    PR(p, a, o);
  }
  return (p, m = {}) => {
    BT(p, ($) => $.filter((j) => j !== oo));
    const {
      name: h,
      slot: g,
      skipVariantsResolver: y,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = IR(FR(g)),
      ...R
    } = m, E = h && h.startsWith("Mui") || g ? "components" : "custom", w = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), z = x || !1;
    let k = gp;
    g === "Root" || g === "root" ? k = i : g ? k = s : YR(p) && (k = void 0);
    const O = N1(p, {
      shouldForwardProp: k,
      label: GR(),
      ...R
    }), D = ($) => {
      if ($.__emotion_real === $)
        return $;
      if (typeof $ == "function")
        return function(U) {
          return cu(U, $, U.theme.modularCssLayers ? E : void 0);
        };
      if (Xa($)) {
        const j = P1($);
        return function(P) {
          return j.variants ? cu(P, j, P.theme.modularCssLayers ? E : void 0) : P.theme.modularCssLayers ? ko(j.style, E) : j.style;
        };
      }
      return $;
    }, M = (...$) => {
      const j = [], U = $.map(D), P = [];
      if (j.push(c), h && C && P.push(function(G) {
        var V, K;
        const F = (K = (V = G.theme.components) == null ? void 0 : V[h]) == null ? void 0 : K.styleOverrides;
        if (!F)
          return null;
        const N = {};
        for (const Y in F)
          N[Y] = cu(G, F[Y], G.theme.modularCssLayers ? "theme" : void 0);
        return C(G, N);
      }), h && !w && P.push(function(G) {
        var N, V;
        const J = G.theme, F = (V = (N = J == null ? void 0 : J.components) == null ? void 0 : N[h]) == null ? void 0 : V.variants;
        return F ? V1(G, F, [], G.theme.modularCssLayers ? "theme" : void 0) : null;
      }), z || P.push(oo), Array.isArray(U[0])) {
        const H = U.shift(), G = new Array(j.length).fill(""), J = new Array(P.length).fill("");
        let F;
        F = [...G, ...H, ...J], F.raw = [...G, ...H.raw, ...J], j.unshift(F);
      }
      const S = [...j, ...U, ...P], B = O(...S);
      return p.muiName && (B.muiName = p.muiName), B;
    };
    return O.withConfig && (M.withConfig = O.withConfig), M;
  };
}
function GR(e, a) {
  return void 0;
}
function qR(e) {
  for (const a in e)
    return !1;
  return !0;
}
function YR(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function FR(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ss(e, a) {
  const o = {
    ...a
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        o[s] = {
          ...e[s],
          ...o[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const c = e[s], d = a[s];
        if (!d)
          o[s] = c || {};
        else if (!c)
          o[s] = d;
        else {
          o[s] = {
            ...d
          };
          for (const p in c)
            if (Object.prototype.hasOwnProperty.call(c, p)) {
              const m = p;
              o[s][m] = ss(c[m], d[m]);
            }
        }
      } else o[s] === void 0 && (o[s] = e[s]);
    }
  return o;
}
function WR(e) {
  const {
    theme: a,
    name: o,
    props: i
  } = e;
  return !a || !a.components || !a.components[o] || !a.components[o].defaultProps ? i : ss(a.components[o].defaultProps, i);
}
const Xn = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function KR(e, a, o, i, s) {
  const [c, d] = v.useState(() => s && o ? o(e).matches : i ? i(e).matches : a);
  return Xn(() => {
    if (!o)
      return;
    const p = o(e), m = () => {
      d(p.matches);
    };
    return m(), p.addEventListener("change", m), () => {
      p.removeEventListener("change", m);
    };
  }, [e, o]), c;
}
const XR = {
  ...fu
}, G1 = XR.useSyncExternalStore;
function QR(e, a, o, i, s) {
  const c = v.useCallback(() => a, [a]), d = v.useMemo(() => {
    if (s && o)
      return () => o(e).matches;
    if (i !== null) {
      const {
        matches: g
      } = i(e);
      return () => g;
    }
    return c;
  }, [c, e, i, s, o]), [p, m] = v.useMemo(() => {
    if (o === null)
      return [c, () => () => {
      }];
    const g = o(e);
    return [() => g.matches, (y) => (g.addEventListener("change", y), () => {
      g.removeEventListener("change", y);
    })];
  }, [c, o, e]);
  return G1(m, p, d);
}
function q1(e = {}) {
  const {
    themeId: a
  } = e;
  return function(i, s = {}) {
    let c = Uu();
    c && a && (c = c[a] || c);
    const d = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: p = !1,
      matchMedia: m = d ? window.matchMedia : null,
      ssrMatchMedia: h = null,
      noSsr: g = !1
    } = WR({
      name: "MuiUseMediaQuery",
      props: s,
      theme: c
    });
    let y = typeof i == "function" ? i(c) : i;
    return y = y.replace(/^@media( ?)/m, ""), y.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (G1 !== void 0 ? QR : KR)(y, p, m, h, g);
  };
}
q1();
function ZR(e, a = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(a, Math.min(e, o));
}
function wm(e, a = 0, o = 1) {
  return ZR(e, a, o);
}
function JR(e) {
  e = e.slice(1);
  const a = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(a);
  return o && o[0].length === 1 && (o = o.map((i) => i + i)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function io(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return io(JR(e));
  const a = e.indexOf("("), o = e.substring(0, a);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(Rr(9, e));
  let i = e.substring(a + 1, e.length - 1), s;
  if (o === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(Rr(10, s));
  } else
    i = i.split(",");
  return i = i.map((c) => parseFloat(c)), {
    type: o,
    values: i,
    colorSpace: s
  };
}
const ew = (e) => {
  const a = io(e);
  return a.values.slice(0, 3).map((o, i) => a.type.includes("hsl") && i !== 0 ? `${o}%` : o).join(" ");
}, Wl = (e, a) => {
  try {
    return ew(e);
  } catch {
    return e;
  }
};
function Iu(e) {
  const {
    type: a,
    colorSpace: o
  } = e;
  let {
    values: i
  } = e;
  return a.includes("rgb") ? i = i.map((s, c) => c < 3 ? parseInt(s, 10) : s) : a.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), a.includes("color") ? i = `${o} ${i.join(" ")}` : i = `${i.join(", ")}`, `${a}(${i})`;
}
function Y1(e) {
  e = io(e);
  const {
    values: a
  } = e, o = a[0], i = a[1] / 100, s = a[2] / 100, c = i * Math.min(s, 1 - s), d = (h, g = (h + o / 30) % 12) => s - c * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let p = "rgb";
  const m = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return e.type === "hsla" && (p += "a", m.push(a[3])), Iu({
    type: p,
    values: m
  });
}
function jp(e) {
  e = io(e);
  let a = e.type === "hsl" || e.type === "hsla" ? io(Y1(e)).values : e.values;
  return a = a.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]).toFixed(3));
}
function tw(e, a) {
  const o = jp(e), i = jp(a);
  return (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05);
}
function xt(e, a) {
  return e = io(e), a = wm(a), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${a}` : e.values[3] = a, Iu(e);
}
function Gc(e, a, o) {
  try {
    return xt(e, a);
  } catch {
    return e;
  }
}
function ji(e, a) {
  if (e = io(e), a = wm(a), e.type.includes("hsl"))
    e.values[2] *= 1 - a;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - a;
  return Iu(e);
}
function It(e, a, o) {
  try {
    return ji(e, a);
  } catch {
    return e;
  }
}
function Bi(e, a) {
  if (e = io(e), a = wm(a), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * a;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * a;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * a;
  return Iu(e);
}
function Pt(e, a, o) {
  try {
    return Bi(e, a);
  } catch {
    return e;
  }
}
function nw(e, a = 0.15) {
  return jp(e) > 0.5 ? ji(e, a) : Bi(e, a);
}
function qc(e, a, o) {
  try {
    return nw(e, a);
  } catch {
    return e;
  }
}
function y0(...e) {
  return e.reduce((a, o) => o == null ? a : function(...s) {
    a.apply(this, s), o.apply(this, s);
  }, () => {
  });
}
function Rs(e, a = 166) {
  let o;
  function i(...s) {
    const c = () => {
      e.apply(this, s);
    };
    clearTimeout(o), o = setTimeout(c, a);
  }
  return i.clear = () => {
    clearTimeout(o);
  }, i;
}
function uu(e, a) {
  var o, i, s;
  return /* @__PURE__ */ v.isValidElement(e) && a.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((s = (i = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : i.value) == null ? void 0 : s.muiName)
  ) !== -1;
}
function Qn(e) {
  return e && e.ownerDocument || document;
}
function ua(e) {
  return Qn(e).defaultView || window;
}
function Bp(e, a) {
  typeof e == "function" ? e(a) : e && (e.current = a);
}
let v0 = 0;
function aw(e) {
  const [a, o] = v.useState(e), i = e || a;
  return v.useEffect(() => {
    a == null && (v0 += 1, o(`mui-${v0}`));
  }, [a]), i;
}
const rw = {
  ...fu
}, b0 = rw.useId;
function Uo(e) {
  if (b0 !== void 0) {
    const a = b0();
    return e ?? a;
  }
  return aw(e);
}
function $i({
  controlled: e,
  default: a,
  name: o,
  state: i = "value"
}) {
  const {
    current: s
  } = v.useRef(e !== void 0), [c, d] = v.useState(a), p = s ? e : c, m = v.useCallback((h) => {
    s || d(h);
  }, []);
  return [p, m];
}
function Ln(e) {
  const a = v.useRef(e);
  return Xn(() => {
    a.current = e;
  }), v.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, a.current)(...o)
  )).current;
}
function an(...e) {
  const a = v.useRef(void 0), o = v.useCallback((i) => {
    const s = e.map((c) => {
      if (c == null)
        return null;
      if (typeof c == "function") {
        const d = c, p = d(i);
        return typeof p == "function" ? p : () => {
          d(null);
        };
      }
      return c.current = i, () => {
        c.current = null;
      };
    });
    return () => {
      s.forEach((c) => c == null ? void 0 : c());
    };
  }, e);
  return v.useMemo(() => e.every((i) => i == null) ? null : (i) => {
    a.current && (a.current(), a.current = void 0), i != null && (a.current = o(i));
  }, e);
}
const x0 = {};
function F1(e, a) {
  const o = v.useRef(x0);
  return o.current === x0 && (o.current = e(a)), o;
}
const ow = [];
function iw(e) {
  v.useEffect(e, ow);
}
class Pu {
  constructor() {
    jl(this, "currentId", null);
    jl(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    jl(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Pu();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(a, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, a);
  }
}
function No() {
  const e = F1(Pu.create).current;
  return iw(e.disposeEffect), e;
}
function vu(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function W1(e = window) {
  const a = e.document.documentElement.clientWidth;
  return e.innerWidth - a;
}
const Mm = (e) => {
  const a = v.useRef({});
  return v.useEffect(() => {
    a.current = e;
  }), a.current;
};
function qe(e, a, o = void 0) {
  const i = {};
  for (const s in e) {
    const c = e[s];
    let d = "", p = !0;
    for (let m = 0; m < c.length; m += 1) {
      const h = c[m];
      h && (d += (p === !0 ? "" : " ") + a(h), p = !1, o && o[h] && (d += " " + o[h]));
    }
    i[s] = d;
  }
  return i;
}
function lw(e) {
  return typeof e == "string";
}
function K1(e, a, o) {
  return e === void 0 || lw(e) ? a : {
    ...a,
    ownerState: {
      ...a.ownerState,
      ...o
    }
  };
}
function X1(e, a = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((i) => i.match(/^on[A-Z]/) && typeof e[i] == "function" && !a.includes(i)).forEach((i) => {
    o[i] = e[i];
  }), o;
}
function S0(e) {
  if (e === void 0)
    return {};
  const a = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    a[o] = e[o];
  }), a;
}
function Q1(e) {
  const {
    getSlotProps: a,
    additionalProps: o,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: c
  } = e;
  if (!a) {
    const C = he(o == null ? void 0 : o.className, c, s == null ? void 0 : s.className, i == null ? void 0 : i.className), R = {
      ...o == null ? void 0 : o.style,
      ...s == null ? void 0 : s.style,
      ...i == null ? void 0 : i.style
    }, E = {
      ...o,
      ...s,
      ...i
    };
    return C.length > 0 && (E.className = C), Object.keys(R).length > 0 && (E.style = R), {
      props: E,
      internalRef: void 0
    };
  }
  const d = X1({
    ...s,
    ...i
  }), p = S0(i), m = S0(s), h = a(d), g = he(h == null ? void 0 : h.className, o == null ? void 0 : o.className, c, s == null ? void 0 : s.className, i == null ? void 0 : i.className), y = {
    ...h == null ? void 0 : h.style,
    ...o == null ? void 0 : o.style,
    ...s == null ? void 0 : s.style,
    ...i == null ? void 0 : i.style
  }, x = {
    ...h,
    ...o,
    ...m,
    ...p
  };
  return g.length > 0 && (x.className = g), Object.keys(y).length > 0 && (x.style = y), {
    props: x,
    internalRef: h.ref
  };
}
function Z1(e, a, o) {
  return typeof e == "function" ? e(a, o) : e;
}
function _i(e) {
  var y;
  const {
    elementType: a,
    externalSlotProps: o,
    ownerState: i,
    skipResolvingSlotProps: s = !1,
    ...c
  } = e, d = s ? {} : Z1(o, i), {
    props: p,
    internalRef: m
  } = Q1({
    ...c,
    externalSlotProps: d
  }), h = an(m, d == null ? void 0 : d.ref, (y = e.additionalProps) == null ? void 0 : y.ref);
  return K1(a, {
    ...p,
    ref: h
  }, i);
}
function Io(e) {
  var a;
  return parseInt(v.version, 10) >= 19 ? ((a = e == null ? void 0 : e.props) == null ? void 0 : a.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const J1 = /* @__PURE__ */ v.createContext(null);
function Am() {
  return v.useContext(J1);
}
const sw = typeof Symbol == "function" && Symbol.for, cw = sw ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function uw(e, a) {
  return typeof a == "function" ? a(e) : {
    ...e,
    ...a
  };
}
function dw(e) {
  const {
    children: a,
    theme: o
  } = e, i = Am(), s = v.useMemo(() => {
    const c = i === null ? {
      ...o
    } : uw(i, o);
    return c != null && (c[cw] = i !== null), c;
  }, [o, i]);
  return /* @__PURE__ */ T.jsx(J1.Provider, {
    value: s,
    children: a
  });
}
const ex = /* @__PURE__ */ v.createContext();
function fw({
  value: e,
  ...a
}) {
  return /* @__PURE__ */ T.jsx(ex.Provider, {
    value: e ?? !0,
    ...a
  });
}
const Yi = () => v.useContext(ex) ?? !1, tx = /* @__PURE__ */ v.createContext(void 0);
function pw({
  value: e,
  children: a
}) {
  return /* @__PURE__ */ T.jsx(tx.Provider, {
    value: e,
    children: a
  });
}
function mw(e) {
  const {
    theme: a,
    name: o,
    props: i
  } = e;
  if (!a || !a.components || !a.components[o])
    return i;
  const s = a.components[o];
  return s.defaultProps ? ss(s.defaultProps, i) : !s.styleOverrides && !s.variants ? ss(s, i) : i;
}
function hw({
  props: e,
  name: a
}) {
  const o = v.useContext(tx);
  return mw({
    props: e,
    name: a,
    theme: {
      components: o
    }
  });
}
function gw(e) {
  const a = Uu(), o = Uo() || "", {
    modularCssLayers: i
  } = e;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !i || a !== null ? s = "" : typeof i == "string" ? s = i.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, Xn(() => {
    var p, m;
    const c = document.querySelector("head");
    if (!c)
      return;
    const d = c.firstChild;
    if (s) {
      if (d && ((p = d.hasAttribute) != null && p.call(d, "data-mui-layer-order")) && d.getAttribute("data-mui-layer-order") === o)
        return;
      const h = document.createElement("style");
      h.setAttribute("data-mui-layer-order", o), h.textContent = s, c.prepend(h);
    } else
      (m = c.querySelector(`style[data-mui-layer-order="${o}"]`)) == null || m.remove();
  }, [s, o]), s ? /* @__PURE__ */ T.jsx(H1, {
    styles: s
  }) : null;
}
const C0 = {};
function E0(e, a, o, i = !1) {
  return v.useMemo(() => {
    const s = e && a[e] || a;
    if (typeof o == "function") {
      const c = o(s), d = e ? {
        ...a,
        [e]: c
      } : c;
      return i ? () => d : d;
    }
    return e ? {
      ...a,
      [e]: o
    } : {
      ...a,
      ...o
    };
  }, [e, a, o, i]);
}
function nx(e) {
  const {
    children: a,
    theme: o,
    themeId: i
  } = e, s = Uu(C0), c = Am() || C0, d = E0(i, s, o), p = E0(i, c, o, !0), m = (i ? d[i] : d).direction === "rtl", h = gw(d);
  return /* @__PURE__ */ T.jsx(dw, {
    theme: p,
    children: /* @__PURE__ */ T.jsx(xs.Provider, {
      value: d,
      children: /* @__PURE__ */ T.jsx(fw, {
        value: m,
        children: /* @__PURE__ */ T.jsxs(pw, {
          value: i ? d[i].components : d.components,
          children: [h, a]
        })
      })
    })
  });
}
const T0 = {
  theme: void 0
};
function yw(e) {
  let a, o;
  return function(s) {
    let c = a;
    return (c === void 0 || s.theme !== o) && (T0.theme = s.theme, c = P1(e(T0)), a = c, o = s.theme), c;
  };
}
const Om = "mode", zm = "color-scheme", vw = "data-color-scheme";
function bw(e) {
  const {
    defaultMode: a = "system",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: s = Om,
    colorSchemeStorageKey: c = zm,
    attribute: d = vw,
    colorSchemeNode: p = "document.documentElement",
    nonce: m
  } = e || {};
  let h = "", g = d;
  if (d === "class" && (g = ".%s"), d === "data" && (g = "[data-%s]"), g.startsWith(".")) {
    const x = g.substring(1);
    h += `${p}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${p}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const y = g.match(/\[([^\]]+)\]/);
  if (y) {
    const [x, C] = y[1].split("=");
    C || (h += `${p}.removeAttribute('${x}'.replace('%s', light));
      ${p}.removeAttribute('${x}'.replace('%s', dark));`), h += `
      ${p}.setAttribute('${x}'.replace('%s', colorScheme), ${C ? `${C}.replace('%s', colorScheme)` : '""'});`;
  } else
    h += `${p}.setAttribute('${g}', colorScheme);`;
  return /* @__PURE__ */ T.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? m : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${a}';
  const dark = localStorage.getItem('${c}-dark') || '${i}';
  const light = localStorage.getItem('${c}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function xw() {
}
const Sw = ({
  key: e,
  storageWindow: a
}) => (!a && typeof window < "u" && (a = window), {
  get(o) {
    if (typeof window > "u")
      return;
    if (!a)
      return o;
    let i;
    try {
      i = a.localStorage.getItem(e);
    } catch {
    }
    return i || o;
  },
  set: (o) => {
    if (a)
      try {
        a.localStorage.setItem(e, o);
      } catch {
      }
  },
  subscribe: (o) => {
    if (!a)
      return xw;
    const i = (s) => {
      const c = s.newValue;
      s.key === e && o(c);
    };
    return a.addEventListener("storage", i), () => {
      a.removeEventListener("storage", i);
    };
  }
});
function yp() {
}
function R0(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ax(e, a) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return a("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return a("dark");
}
function Cw(e) {
  return ax(e, (a) => {
    if (a === "light")
      return e.lightColorScheme;
    if (a === "dark")
      return e.darkColorScheme;
  });
}
function Ew(e) {
  const {
    defaultMode: a = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: i,
    supportedColorSchemes: s = [],
    modeStorageKey: c = Om,
    colorSchemeStorageKey: d = zm,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: m = Sw,
    noSsr: h = !1
  } = e, g = s.join(","), y = s.length > 1, x = v.useMemo(() => m == null ? void 0 : m({
    key: c,
    storageWindow: p
  }), [m, c, p]), C = v.useMemo(() => m == null ? void 0 : m({
    key: `${d}-light`,
    storageWindow: p
  }), [m, d, p]), R = v.useMemo(() => m == null ? void 0 : m({
    key: `${d}-dark`,
    storageWindow: p
  }), [m, d, p]), [E, w] = v.useState(() => {
    const U = (x == null ? void 0 : x.get(a)) || a, P = (C == null ? void 0 : C.get(o)) || o, S = (R == null ? void 0 : R.get(i)) || i;
    return {
      mode: U,
      systemMode: R0(U),
      lightColorScheme: P,
      darkColorScheme: S
    };
  }), [z, k] = v.useState(h || !y);
  v.useEffect(() => {
    k(!0);
  }, []);
  const O = Cw(E), D = v.useCallback((U) => {
    w((P) => {
      if (U === P.mode)
        return P;
      const S = U ?? a;
      return x == null || x.set(S), {
        ...P,
        mode: S,
        systemMode: R0(S)
      };
    });
  }, [x, a]), M = v.useCallback((U) => {
    U ? typeof U == "string" ? U && !g.includes(U) ? console.error(`\`${U}\` does not exist in \`theme.colorSchemes\`.`) : w((P) => {
      const S = {
        ...P
      };
      return ax(P, (B) => {
        B === "light" && (C == null || C.set(U), S.lightColorScheme = U), B === "dark" && (R == null || R.set(U), S.darkColorScheme = U);
      }), S;
    }) : w((P) => {
      const S = {
        ...P
      }, B = U.light === null ? o : U.light, H = U.dark === null ? i : U.dark;
      return B && (g.includes(B) ? (S.lightColorScheme = B, C == null || C.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), H && (g.includes(H) ? (S.darkColorScheme = H, R == null || R.set(H)) : console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : w((P) => (C == null || C.set(o), R == null || R.set(i), {
      ...P,
      lightColorScheme: o,
      darkColorScheme: i
    }));
  }, [g, C, R, o, i]), $ = v.useCallback((U) => {
    E.mode === "system" && w((P) => {
      const S = U != null && U.matches ? "dark" : "light";
      return P.systemMode === S ? P : {
        ...P,
        systemMode: S
      };
    });
  }, [E.mode]), j = v.useRef($);
  return j.current = $, v.useEffect(() => {
    if (typeof window.matchMedia != "function" || !y)
      return;
    const U = (...S) => j.current(...S), P = window.matchMedia("(prefers-color-scheme: dark)");
    return P.addListener(U), U(P), () => {
      P.removeListener(U);
    };
  }, [y]), v.useEffect(() => {
    if (y) {
      const U = (x == null ? void 0 : x.subscribe((B) => {
        (!B || ["light", "dark", "system"].includes(B)) && D(B || a);
      })) || yp, P = (C == null ? void 0 : C.subscribe((B) => {
        (!B || g.match(B)) && M({
          light: B
        });
      })) || yp, S = (R == null ? void 0 : R.subscribe((B) => {
        (!B || g.match(B)) && M({
          dark: B
        });
      })) || yp;
      return () => {
        U(), P(), S();
      };
    }
  }, [M, D, g, a, p, y, x, C, R]), {
    ...E,
    mode: z ? E.mode : void 0,
    systemMode: z ? E.systemMode : void 0,
    colorScheme: z ? O : void 0,
    setMode: D,
    setColorScheme: M
  };
}
const Tw = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Rw(e) {
  const {
    themeId: a,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    modeStorageKey: i = Om,
    colorSchemeStorageKey: s = zm,
    disableTransitionOnChange: c = !1,
    defaultColorScheme: d,
    resolveTheme: p
  } = e, m = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, h = /* @__PURE__ */ v.createContext(void 0), g = () => v.useContext(h) || m, y = {}, x = {};
  function C(z) {
    var Ue, Ft, rn, Bt;
    const {
      children: k,
      theme: O,
      modeStorageKey: D = i,
      colorSchemeStorageKey: M = s,
      disableTransitionOnChange: $ = c,
      storageManager: j,
      storageWindow: U = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: H = !1,
      defaultMode: G = "system",
      noSsr: J
    } = z, F = v.useRef(!1), N = Am(), V = v.useContext(h), K = !!V && !B, Y = v.useMemo(() => O || (typeof o == "function" ? o() : o), [O]), pe = Y[a], L = pe || Y, {
      colorSchemes: W = y,
      components: re = x,
      cssVarPrefix: te
    } = L, fe = Object.keys(W).filter((Je) => !!W[Je]).join(","), se = v.useMemo(() => fe.split(","), [fe]), ge = typeof d == "string" ? d : d.light, ye = typeof d == "string" ? d : d.dark, be = W[ge] && W[ye] ? G : ((Ft = (Ue = W[L.defaultColorScheme]) == null ? void 0 : Ue.palette) == null ? void 0 : Ft.mode) || ((rn = L.palette) == null ? void 0 : rn.mode), {
      mode: Te,
      setMode: De,
      systemMode: Se,
      lightColorScheme: ct,
      darkColorScheme: Oe,
      colorScheme: ke,
      setColorScheme: vt
    } = Ew({
      supportedColorSchemes: se,
      defaultLightColorScheme: ge,
      defaultDarkColorScheme: ye,
      modeStorageKey: D,
      colorSchemeStorageKey: M,
      defaultMode: be,
      storageManager: j,
      storageWindow: U,
      noSsr: J
    });
    let me = Te, He = ke;
    K && (me = V.mode, He = V.colorScheme);
    const Me = v.useMemo(() => {
      var ze;
      const Je = He || L.defaultColorScheme, Ke = ((ze = L.generateThemeVars) == null ? void 0 : ze.call(L)) || L.vars, je = {
        ...L,
        components: re,
        colorSchemes: W,
        cssVarPrefix: te,
        vars: Ke
      };
      if (typeof je.generateSpacing == "function" && (je.spacing = je.generateSpacing()), Je) {
        const bt = W[Je];
        bt && typeof bt == "object" && Object.keys(bt).forEach((lt) => {
          bt[lt] && typeof bt[lt] == "object" ? je[lt] = {
            ...je[lt],
            ...bt[lt]
          } : je[lt] = bt[lt];
        });
      }
      return p ? p(je) : je;
    }, [L, He, re, W, te]), We = L.colorSchemeSelector;
    Xn(() => {
      if (He && S && We && We !== "media") {
        const Je = We;
        let Ke = We;
        if (Je === "class" && (Ke = ".%s"), Je === "data" && (Ke = "[data-%s]"), Je != null && Je.startsWith("data-") && !Je.includes("%s") && (Ke = `[${Je}="%s"]`), Ke.startsWith("."))
          S.classList.remove(...se.map((je) => Ke.substring(1).replace("%s", je))), S.classList.add(Ke.substring(1).replace("%s", He));
        else {
          const je = Ke.replace("%s", He).match(/\[([^\]]+)\]/);
          if (je) {
            const [ze, bt] = je[1].split("=");
            bt || se.forEach((lt) => {
              S.removeAttribute(ze.replace(He, lt));
            }), S.setAttribute(ze, bt ? bt.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(Ke, He);
        }
      }
    }, [He, We, S, se]), v.useEffect(() => {
      let Je;
      if ($ && F.current && P) {
        const Ke = P.createElement("style");
        Ke.appendChild(P.createTextNode(Tw)), P.head.appendChild(Ke), window.getComputedStyle(P.body), Je = setTimeout(() => {
          P.head.removeChild(Ke);
        }, 1);
      }
      return () => {
        clearTimeout(Je);
      };
    }, [He, $, P]), v.useEffect(() => (F.current = !0, () => {
      F.current = !1;
    }), []);
    const Fe = v.useMemo(() => ({
      allColorSchemes: se,
      colorScheme: He,
      darkColorScheme: Oe,
      lightColorScheme: ct,
      mode: me,
      setColorScheme: vt,
      setMode: De,
      systemMode: Se
    }), [se, He, Oe, ct, me, vt, De, Se, Me.colorSchemeSelector]);
    let Ce = !0;
    (H || L.cssVariables === !1 || K && (N == null ? void 0 : N.cssVarPrefix) === te) && (Ce = !1);
    const At = /* @__PURE__ */ T.jsxs(v.Fragment, {
      children: [/* @__PURE__ */ T.jsx(nx, {
        themeId: pe ? a : void 0,
        theme: Me,
        children: k
      }), Ce && /* @__PURE__ */ T.jsx(k1, {
        styles: ((Bt = Me.generateStyleSheets) == null ? void 0 : Bt.call(Me)) || []
      })]
    });
    return K ? At : /* @__PURE__ */ T.jsx(h.Provider, {
      value: Fe,
      children: At
    });
  }
  const R = typeof d == "string" ? d : d.light, E = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: C,
    useColorScheme: g,
    getInitColorSchemeScript: (z) => bw({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: R,
      defaultDarkColorScheme: E,
      modeStorageKey: i,
      ...z
    })
  };
}
function ww(e = "") {
  function a(...i) {
    if (!i.length)
      return "";
    const s = i[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${a(...i.slice(1))})` : `, ${s}`;
  }
  return (i, ...s) => `var(--${e ? `${e}-` : ""}${i}${a(...s)})`;
}
const w0 = (e, a, o, i = []) => {
  let s = e;
  a.forEach((c, d) => {
    d === a.length - 1 ? Array.isArray(s) ? s[Number(c)] = o : s && typeof s == "object" && (s[c] = o) : s && typeof s == "object" && (s[c] || (s[c] = i.includes(c) ? [] : {}), s = s[c]);
  });
}, Mw = (e, a, o) => {
  function i(s, c = [], d = []) {
    Object.entries(s).forEach(([p, m]) => {
      (!o || o && !o([...c, p])) && m != null && (typeof m == "object" && Object.keys(m).length > 0 ? i(m, [...c, p], Array.isArray(m) ? [...d, p] : d) : a([...c, p], m, d));
    });
  }
  i(e);
}, Aw = (e, a) => typeof a == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => e.includes(i)) || e[e.length - 1].toLowerCase().includes("opacity") ? a : `${a}px` : a;
function vp(e, a) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: i
  } = a || {}, s = {}, c = {}, d = {};
  return Mw(
    e,
    (p, m, h) => {
      if ((typeof m == "string" || typeof m == "number") && (!i || !i(p, m))) {
        const g = `--${o ? `${o}-` : ""}${p.join("-")}`, y = Aw(p, m);
        Object.assign(s, {
          [g]: y
        }), w0(c, p, `var(${g})`, h), w0(d, p, `var(${g}, ${y})`, h);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: c,
    varsWithDefaults: d
  };
}
function Ow(e, a = {}) {
  const {
    getSelector: o = w,
    disableCssColorScheme: i,
    colorSchemeSelector: s
  } = a, {
    colorSchemes: c = {},
    components: d,
    defaultColorScheme: p = "light",
    ...m
  } = e, {
    vars: h,
    css: g,
    varsWithDefaults: y
  } = vp(m, a);
  let x = y;
  const C = {}, {
    [p]: R,
    ...E
  } = c;
  if (Object.entries(E || {}).forEach(([O, D]) => {
    const {
      vars: M,
      css: $,
      varsWithDefaults: j
    } = vp(D, a);
    x = jn(x, j), C[O] = {
      css: $,
      vars: M
    };
  }), R) {
    const {
      css: O,
      vars: D,
      varsWithDefaults: M
    } = vp(R, a);
    x = jn(x, M), C[p] = {
      css: O,
      vars: D
    };
  }
  function w(O, D) {
    var $, j;
    let M = s;
    if (s === "class" && (M = ".%s"), s === "data" && (M = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (M = `[${s}="%s"]`), O) {
      if (M === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((j = ($ = c[O]) == null ? void 0 : $.palette) == null ? void 0 : j.mode) || O})`]: {
            ":root": D
          }
        };
      if (M)
        return e.defaultColorScheme === O ? `:root, ${M.replace("%s", String(O))}` : M.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let O = {
        ...h
      };
      return Object.entries(C).forEach(([, {
        vars: D
      }]) => {
        O = jn(O, D);
      }), O;
    },
    generateStyleSheets: () => {
      var U, P;
      const O = [], D = e.defaultColorScheme || "light";
      function M(S, B) {
        Object.keys(B).length && O.push(typeof S == "string" ? {
          [S]: {
            ...B
          }
        } : S);
      }
      M(o(void 0, {
        ...g
      }), g);
      const {
        [D]: $,
        ...j
      } = C;
      if ($) {
        const {
          css: S
        } = $, B = (P = (U = c[D]) == null ? void 0 : U.palette) == null ? void 0 : P.mode, H = !i && B ? {
          colorScheme: B,
          ...S
        } : {
          ...S
        };
        M(o(D, {
          ...H
        }), H);
      }
      return Object.entries(j).forEach(([S, {
        css: B
      }]) => {
        var J, F;
        const H = (F = (J = c[S]) == null ? void 0 : J.palette) == null ? void 0 : F.mode, G = !i && H ? {
          colorScheme: H,
          ...B
        } : {
          ...B
        };
        M(o(S, {
          ...G
        }), G);
      }), O;
    }
  };
}
function zw(e) {
  return function(o) {
    return e === "media" ? `@media (prefers-color-scheme: ${o})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function M0(e) {
  const {
    defaultProps: a = {},
    mixins: o = {},
    overrides: i = {},
    palette: s = {},
    props: c = {},
    styleOverrides: d = {},
    ...p
  } = e, m = {
    ...p,
    components: {}
  };
  Object.keys(a).forEach((E) => {
    const w = m.components[E] || {};
    w.defaultProps = a[E], m.components[E] = w;
  }), Object.keys(c).forEach((E) => {
    const w = m.components[E] || {};
    w.defaultProps = c[E], m.components[E] = w;
  }), Object.keys(d).forEach((E) => {
    const w = m.components[E] || {};
    w.styleOverrides = d[E], m.components[E] = w;
  }), Object.keys(i).forEach((E) => {
    const w = m.components[E] || {};
    w.styleOverrides = i[E], m.components[E] = w;
  }), m.spacing = Sm(e.spacing);
  const h = B1(e.breakpoints || {}), g = m.spacing;
  m.mixins = {
    gutters: (E = {}) => ({
      paddingLeft: g(2),
      paddingRight: g(2),
      ...E,
      [h.up("sm")]: {
        paddingLeft: g(3),
        paddingRight: g(3),
        ...E[h.up("sm")]
      }
    }),
    ...o
  };
  const {
    type: y,
    mode: x,
    ...C
  } = s, R = x || y || "light";
  return m.palette = {
    // theme.palette.text.hint
    text: {
      hint: R === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: R,
    type: R,
    ...C
  }, m;
}
const cs = {
  black: "#000",
  white: "#fff"
}, Dw = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Si = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ci = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ul = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ei = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ti = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ri = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function rx() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: cs.white,
      default: cs.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const $w = rx();
function ox() {
  return {
    text: {
      primary: cs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: cs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const A0 = ox();
function O0(e, a, o, i) {
  const s = i.light || i, c = i.dark || i * 1.5;
  e[a] || (e.hasOwnProperty(o) ? e[a] = e[o] : a === "light" ? e.light = Bi(e.main, s) : a === "dark" && (e.dark = ji(e.main, c)));
}
function kw(e = "light") {
  return e === "dark" ? {
    main: Ei[200],
    light: Ei[50],
    dark: Ei[400]
  } : {
    main: Ei[700],
    light: Ei[400],
    dark: Ei[800]
  };
}
function Nw(e = "light") {
  return e === "dark" ? {
    main: Si[200],
    light: Si[50],
    dark: Si[400]
  } : {
    main: Si[500],
    light: Si[300],
    dark: Si[700]
  };
}
function Lw(e = "light") {
  return e === "dark" ? {
    main: Ci[500],
    light: Ci[300],
    dark: Ci[700]
  } : {
    main: Ci[700],
    light: Ci[400],
    dark: Ci[800]
  };
}
function jw(e = "light") {
  return e === "dark" ? {
    main: Ti[400],
    light: Ti[300],
    dark: Ti[700]
  } : {
    main: Ti[700],
    light: Ti[500],
    dark: Ti[900]
  };
}
function Bw(e = "light") {
  return e === "dark" ? {
    main: Ri[400],
    light: Ri[300],
    dark: Ri[700]
  } : {
    main: Ri[800],
    light: Ri[500],
    dark: Ri[900]
  };
}
function _w(e = "light") {
  return e === "dark" ? {
    main: Ul[400],
    light: Ul[300],
    dark: Ul[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ul[500],
    dark: Ul[900]
  };
}
function Dm(e) {
  const {
    mode: a = "light",
    contrastThreshold: o = 3,
    tonalOffset: i = 0.2,
    ...s
  } = e, c = e.primary || kw(a), d = e.secondary || Nw(a), p = e.error || Lw(a), m = e.info || jw(a), h = e.success || Bw(a), g = e.warning || _w(a);
  function y(E) {
    return tw(E, A0.text.primary) >= o ? A0.text.primary : $w.text.primary;
  }
  const x = ({
    color: E,
    name: w,
    mainShade: z = 500,
    lightShade: k = 300,
    darkShade: O = 700
  }) => {
    if (E = {
      ...E
    }, !E.main && E[z] && (E.main = E[z]), !E.hasOwnProperty("main"))
      throw new Error(Rr(11, w ? ` (${w})` : "", z));
    if (typeof E.main != "string")
      throw new Error(Rr(12, w ? ` (${w})` : "", JSON.stringify(E.main)));
    return O0(E, "light", k, i), O0(E, "dark", O, i), E.contrastText || (E.contrastText = y(E.main)), E;
  };
  let C;
  return a === "light" ? C = rx() : a === "dark" && (C = ox()), jn({
    // A collection of common colors.
    common: {
      ...cs
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: a,
    // The colors used to represent primary interface elements for a user.
    primary: x({
      color: c,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: x({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: x({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: x({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: x({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: x({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: Dw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: x,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...C
  }, s);
}
function Hw(e) {
  const a = {};
  return Object.entries(e).forEach((i) => {
    const [s, c] = i;
    typeof c == "object" && (a[s] = `${c.fontStyle ? `${c.fontStyle} ` : ""}${c.fontVariant ? `${c.fontVariant} ` : ""}${c.fontWeight ? `${c.fontWeight} ` : ""}${c.fontStretch ? `${c.fontStretch} ` : ""}${c.fontSize || ""}${c.lineHeight ? `/${c.lineHeight} ` : ""}${c.fontFamily || ""}`);
  }), a;
}
function Uw(e, a) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...a
  };
}
function Iw(e) {
  return Math.round(e * 1e5) / 1e5;
}
const z0 = {
  textTransform: "uppercase"
}, D0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function ix(e, a) {
  const {
    fontFamily: o = D0,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: c = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: g,
    ...y
  } = typeof a == "function" ? a(e) : a, x = i / 14, C = g || ((w) => `${w / m * x}rem`), R = (w, z, k, O, D) => ({
    fontFamily: o,
    fontWeight: w,
    fontSize: C(z),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === D0 ? {
      letterSpacing: `${Iw(O / z)}em`
    } : {},
    ...D,
    ...h
  }), E = {
    h1: R(s, 96, 1.167, -1.5),
    h2: R(s, 60, 1.2, -0.5),
    h3: R(c, 48, 1.167, 0),
    h4: R(c, 34, 1.235, 0.25),
    h5: R(c, 24, 1.334, 0),
    h6: R(d, 20, 1.6, 0.15),
    subtitle1: R(c, 16, 1.75, 0.15),
    subtitle2: R(d, 14, 1.57, 0.1),
    body1: R(c, 16, 1.5, 0.15),
    body2: R(c, 14, 1.43, 0.15),
    button: R(d, 14, 1.75, 0.4, z0),
    caption: R(c, 12, 1.66, 0.4),
    overline: R(c, 12, 2.66, 1, z0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return jn({
    htmlFontSize: m,
    pxToRem: C,
    fontFamily: o,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: c,
    fontWeightMedium: d,
    fontWeightBold: p,
    ...E
  }, y, {
    clone: !1
    // No need to clone deep
  });
}
const Pw = 0.2, Vw = 0.14, Gw = 0.12;
function Kt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Pw})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vw})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gw})`].join(",");
}
const qw = ["none", Kt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Kt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Kt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Kt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Kt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Kt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Kt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Kt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Kt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Kt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Kt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Kt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Kt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Kt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Kt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Kt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Kt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Kt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Kt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Kt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Kt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Kt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Kt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Kt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yw = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, lx = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function $0(e) {
  return `${Math.round(e)}ms`;
}
function Fw(e) {
  if (!e)
    return 0;
  const a = e / 36;
  return Math.min(Math.round((4 + 15 * a ** 0.25 + a / 5) * 10), 3e3);
}
function Ww(e) {
  const a = {
    ...Yw,
    ...e.easing
  }, o = {
    ...lx,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Fw,
    create: (s = ["all"], c = {}) => {
      const {
        duration: d = o.standard,
        easing: p = a.easeInOut,
        delay: m = 0,
        ...h
      } = c;
      return (Array.isArray(s) ? s : [s]).map((g) => `${g} ${typeof d == "string" ? d : $0(d)} ${p} ${typeof m == "string" ? m : $0(m)}`).join(",");
    },
    ...e,
    easing: a,
    duration: o
  };
}
const Kw = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Xw(e) {
  return Xa(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function sx(e = {}) {
  const a = {
    ...e
  };
  function o(i) {
    const s = Object.entries(i);
    for (let c = 0; c < s.length; c++) {
      const [d, p] = s[c];
      !Xw(p) || d.startsWith("unstable_") ? delete i[d] : Xa(p) && (i[d] = {
        ...p
      }, o(i[d]));
    }
  }
  return o(a), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(a, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function _p(e = {}, ...a) {
  const {
    breakpoints: o,
    mixins: i = {},
    spacing: s,
    palette: c = {},
    transitions: d = {},
    typography: p = {},
    shape: m,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Rr(20));
  const g = Dm(c), y = Em(e);
  let x = jn(y, {
    mixins: Uw(y.breakpoints, i),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: qw.slice(),
    typography: ix(g, p),
    transitions: Ww(d),
    zIndex: {
      ...Kw
    }
  });
  return x = jn(x, h), x = a.reduce((C, R) => jn(C, R), x), x.unstable_sxConfig = {
    ...Ts,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, x.unstable_sx = function(R) {
    return oo({
      sx: R,
      theme: this
    });
  }, x.toRuntimeSource = sx, x;
}
function Hp(e) {
  let a;
  return e < 1 ? a = 5.11916 * e ** 2 : a = 4.5 * Math.log(e + 1) + 2, Math.round(a * 10) / 1e3;
}
const Qw = [...Array(25)].map((e, a) => {
  if (a === 0)
    return "none";
  const o = Hp(a);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function cx(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ux(e) {
  return e === "dark" ? Qw : [];
}
function Zw(e) {
  const {
    palette: a = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: i,
    ...s
  } = e, c = Dm(a);
  return {
    palette: c,
    opacity: {
      ...cx(c.mode),
      ...o
    },
    overlays: i || ux(c.mode),
    ...s
  };
}
function Jw(e) {
  var a;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((a = e[1]) != null && a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const eM = (e) => [...[...Array(25)].map((a, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], tM = (e) => (a, o) => {
  const i = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (c = `[${s}="%s"]`), e.defaultColorScheme === a) {
    if (a === "dark") {
      const d = {};
      return eM(e.cssVarPrefix).forEach((p) => {
        d[p] = o[p], delete o[p];
      }), c === "media" ? {
        [i]: o,
        "@media (prefers-color-scheme: dark)": {
          [i]: d
        }
      } : c ? {
        [c.replace("%s", a)]: d,
        [`${i}, ${c.replace("%s", a)}`]: o
      } : {
        [i]: {
          ...o,
          ...d
        }
      };
    }
    if (c && c !== "media")
      return `${i}, ${c.replace("%s", String(a))}`;
  } else if (a) {
    if (c === "media")
      return {
        [`@media (prefers-color-scheme: ${String(a)})`]: {
          [i]: o
        }
      };
    if (c)
      return c.replace("%s", String(a));
  }
  return i;
};
function nM(e, a) {
  a.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function ae(e, a, o) {
  !e[a] && o && (e[a] = o);
}
function Kl(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Y1(e);
}
function Cr(e, a) {
  `${a}Channel` in e || (e[`${a}Channel`] = Wl(Kl(e[a])));
}
function aM(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Fa = (e) => {
  try {
    return e();
  } catch {
  }
}, rM = (e = "mui") => ww(e);
function bp(e, a, o, i) {
  if (!a)
    return;
  a = a === !0 ? {} : a;
  const s = i === "dark" ? "dark" : "light";
  if (!o) {
    e[i] = Zw({
      ...a,
      palette: {
        mode: s,
        ...a == null ? void 0 : a.palette
      }
    });
    return;
  }
  const {
    palette: c,
    ...d
  } = _p({
    ...o,
    palette: {
      mode: s,
      ...a == null ? void 0 : a.palette
    }
  });
  return e[i] = {
    ...a,
    palette: c,
    opacity: {
      ...cx(s),
      ...a == null ? void 0 : a.opacity
    },
    overlays: (a == null ? void 0 : a.overlays) || ux(s)
  }, d;
}
function oM(e = {}, ...a) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: i,
    disableCssColorScheme: s = !1,
    cssVarPrefix: c = "mui",
    shouldSkipGeneratingVar: d = Jw,
    colorSchemeSelector: p = o.light && o.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...h
  } = e, g = Object.keys(o)[0], y = i || (o.light && g !== "light" ? "light" : g), x = rM(c), {
    [y]: C,
    light: R,
    dark: E,
    ...w
  } = o, z = {
    ...w
  };
  let k = C;
  if ((y === "dark" && !("dark" in o) || y === "light" && !("light" in o)) && (k = !0), !k)
    throw new Error(Rr(21, y));
  const O = bp(z, k, h, y);
  R && !z.light && bp(z, R, void 0, "light"), E && !z.dark && bp(z, E, void 0, "dark");
  let D = {
    defaultColorScheme: y,
    ...O,
    cssVarPrefix: c,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: x,
    colorSchemes: z,
    font: {
      ...Hw(O.typography),
      ...O.font
    },
    spacing: aM(h.spacing)
  };
  Object.keys(D.colorSchemes).forEach((P) => {
    const S = D.colorSchemes[P].palette, B = (H) => {
      const G = H.split("-"), J = G[1], F = G[2];
      return x(H, S[J][F]);
    };
    if (S.mode === "light" && (ae(S.common, "background", "#fff"), ae(S.common, "onBackground", "#000")), S.mode === "dark" && (ae(S.common, "background", "#000"), ae(S.common, "onBackground", "#fff")), nM(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      ae(S.Alert, "errorColor", It(S.error.light, 0.6)), ae(S.Alert, "infoColor", It(S.info.light, 0.6)), ae(S.Alert, "successColor", It(S.success.light, 0.6)), ae(S.Alert, "warningColor", It(S.warning.light, 0.6)), ae(S.Alert, "errorFilledBg", B("palette-error-main")), ae(S.Alert, "infoFilledBg", B("palette-info-main")), ae(S.Alert, "successFilledBg", B("palette-success-main")), ae(S.Alert, "warningFilledBg", B("palette-warning-main")), ae(S.Alert, "errorFilledColor", Fa(() => S.getContrastText(S.error.main))), ae(S.Alert, "infoFilledColor", Fa(() => S.getContrastText(S.info.main))), ae(S.Alert, "successFilledColor", Fa(() => S.getContrastText(S.success.main))), ae(S.Alert, "warningFilledColor", Fa(() => S.getContrastText(S.warning.main))), ae(S.Alert, "errorStandardBg", Pt(S.error.light, 0.9)), ae(S.Alert, "infoStandardBg", Pt(S.info.light, 0.9)), ae(S.Alert, "successStandardBg", Pt(S.success.light, 0.9)), ae(S.Alert, "warningStandardBg", Pt(S.warning.light, 0.9)), ae(S.Alert, "errorIconColor", B("palette-error-main")), ae(S.Alert, "infoIconColor", B("palette-info-main")), ae(S.Alert, "successIconColor", B("palette-success-main")), ae(S.Alert, "warningIconColor", B("palette-warning-main")), ae(S.AppBar, "defaultBg", B("palette-grey-100")), ae(S.Avatar, "defaultBg", B("palette-grey-400")), ae(S.Button, "inheritContainedBg", B("palette-grey-300")), ae(S.Button, "inheritContainedHoverBg", B("palette-grey-A100")), ae(S.Chip, "defaultBorder", B("palette-grey-400")), ae(S.Chip, "defaultAvatarColor", B("palette-grey-700")), ae(S.Chip, "defaultIconColor", B("palette-grey-700")), ae(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ae(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ae(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ae(S.LinearProgress, "primaryBg", Pt(S.primary.main, 0.62)), ae(S.LinearProgress, "secondaryBg", Pt(S.secondary.main, 0.62)), ae(S.LinearProgress, "errorBg", Pt(S.error.main, 0.62)), ae(S.LinearProgress, "infoBg", Pt(S.info.main, 0.62)), ae(S.LinearProgress, "successBg", Pt(S.success.main, 0.62)), ae(S.LinearProgress, "warningBg", Pt(S.warning.main, 0.62)), ae(S.Skeleton, "bg", `rgba(${B("palette-text-primaryChannel")} / 0.11)`), ae(S.Slider, "primaryTrack", Pt(S.primary.main, 0.62)), ae(S.Slider, "secondaryTrack", Pt(S.secondary.main, 0.62)), ae(S.Slider, "errorTrack", Pt(S.error.main, 0.62)), ae(S.Slider, "infoTrack", Pt(S.info.main, 0.62)), ae(S.Slider, "successTrack", Pt(S.success.main, 0.62)), ae(S.Slider, "warningTrack", Pt(S.warning.main, 0.62));
      const H = qc(S.background.default, 0.8);
      ae(S.SnackbarContent, "bg", H), ae(S.SnackbarContent, "color", Fa(() => S.getContrastText(H))), ae(S.SpeedDialAction, "fabHoverBg", qc(S.background.paper, 0.15)), ae(S.StepConnector, "border", B("palette-grey-400")), ae(S.StepContent, "border", B("palette-grey-400")), ae(S.Switch, "defaultColor", B("palette-common-white")), ae(S.Switch, "defaultDisabledColor", B("palette-grey-100")), ae(S.Switch, "primaryDisabledColor", Pt(S.primary.main, 0.62)), ae(S.Switch, "secondaryDisabledColor", Pt(S.secondary.main, 0.62)), ae(S.Switch, "errorDisabledColor", Pt(S.error.main, 0.62)), ae(S.Switch, "infoDisabledColor", Pt(S.info.main, 0.62)), ae(S.Switch, "successDisabledColor", Pt(S.success.main, 0.62)), ae(S.Switch, "warningDisabledColor", Pt(S.warning.main, 0.62)), ae(S.TableCell, "border", Pt(Gc(S.divider, 1), 0.88)), ae(S.Tooltip, "bg", Gc(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      ae(S.Alert, "errorColor", Pt(S.error.light, 0.6)), ae(S.Alert, "infoColor", Pt(S.info.light, 0.6)), ae(S.Alert, "successColor", Pt(S.success.light, 0.6)), ae(S.Alert, "warningColor", Pt(S.warning.light, 0.6)), ae(S.Alert, "errorFilledBg", B("palette-error-dark")), ae(S.Alert, "infoFilledBg", B("palette-info-dark")), ae(S.Alert, "successFilledBg", B("palette-success-dark")), ae(S.Alert, "warningFilledBg", B("palette-warning-dark")), ae(S.Alert, "errorFilledColor", Fa(() => S.getContrastText(S.error.dark))), ae(S.Alert, "infoFilledColor", Fa(() => S.getContrastText(S.info.dark))), ae(S.Alert, "successFilledColor", Fa(() => S.getContrastText(S.success.dark))), ae(S.Alert, "warningFilledColor", Fa(() => S.getContrastText(S.warning.dark))), ae(S.Alert, "errorStandardBg", It(S.error.light, 0.9)), ae(S.Alert, "infoStandardBg", It(S.info.light, 0.9)), ae(S.Alert, "successStandardBg", It(S.success.light, 0.9)), ae(S.Alert, "warningStandardBg", It(S.warning.light, 0.9)), ae(S.Alert, "errorIconColor", B("palette-error-main")), ae(S.Alert, "infoIconColor", B("palette-info-main")), ae(S.Alert, "successIconColor", B("palette-success-main")), ae(S.Alert, "warningIconColor", B("palette-warning-main")), ae(S.AppBar, "defaultBg", B("palette-grey-900")), ae(S.AppBar, "darkBg", B("palette-background-paper")), ae(S.AppBar, "darkColor", B("palette-text-primary")), ae(S.Avatar, "defaultBg", B("palette-grey-600")), ae(S.Button, "inheritContainedBg", B("palette-grey-800")), ae(S.Button, "inheritContainedHoverBg", B("palette-grey-700")), ae(S.Chip, "defaultBorder", B("palette-grey-700")), ae(S.Chip, "defaultAvatarColor", B("palette-grey-300")), ae(S.Chip, "defaultIconColor", B("palette-grey-300")), ae(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ae(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ae(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ae(S.LinearProgress, "primaryBg", It(S.primary.main, 0.5)), ae(S.LinearProgress, "secondaryBg", It(S.secondary.main, 0.5)), ae(S.LinearProgress, "errorBg", It(S.error.main, 0.5)), ae(S.LinearProgress, "infoBg", It(S.info.main, 0.5)), ae(S.LinearProgress, "successBg", It(S.success.main, 0.5)), ae(S.LinearProgress, "warningBg", It(S.warning.main, 0.5)), ae(S.Skeleton, "bg", `rgba(${B("palette-text-primaryChannel")} / 0.13)`), ae(S.Slider, "primaryTrack", It(S.primary.main, 0.5)), ae(S.Slider, "secondaryTrack", It(S.secondary.main, 0.5)), ae(S.Slider, "errorTrack", It(S.error.main, 0.5)), ae(S.Slider, "infoTrack", It(S.info.main, 0.5)), ae(S.Slider, "successTrack", It(S.success.main, 0.5)), ae(S.Slider, "warningTrack", It(S.warning.main, 0.5));
      const H = qc(S.background.default, 0.98);
      ae(S.SnackbarContent, "bg", H), ae(S.SnackbarContent, "color", Fa(() => S.getContrastText(H))), ae(S.SpeedDialAction, "fabHoverBg", qc(S.background.paper, 0.15)), ae(S.StepConnector, "border", B("palette-grey-600")), ae(S.StepContent, "border", B("palette-grey-600")), ae(S.Switch, "defaultColor", B("palette-grey-300")), ae(S.Switch, "defaultDisabledColor", B("palette-grey-600")), ae(S.Switch, "primaryDisabledColor", It(S.primary.main, 0.55)), ae(S.Switch, "secondaryDisabledColor", It(S.secondary.main, 0.55)), ae(S.Switch, "errorDisabledColor", It(S.error.main, 0.55)), ae(S.Switch, "infoDisabledColor", It(S.info.main, 0.55)), ae(S.Switch, "successDisabledColor", It(S.success.main, 0.55)), ae(S.Switch, "warningDisabledColor", It(S.warning.main, 0.55)), ae(S.TableCell, "border", It(Gc(S.divider, 1), 0.68)), ae(S.Tooltip, "bg", Gc(S.grey[700], 0.92));
    }
    Cr(S.background, "default"), Cr(S.background, "paper"), Cr(S.common, "background"), Cr(S.common, "onBackground"), Cr(S, "divider"), Object.keys(S).forEach((H) => {
      const G = S[H];
      H !== "tonalOffset" && G && typeof G == "object" && (G.main && ae(S[H], "mainChannel", Wl(Kl(G.main))), G.light && ae(S[H], "lightChannel", Wl(Kl(G.light))), G.dark && ae(S[H], "darkChannel", Wl(Kl(G.dark))), G.contrastText && ae(S[H], "contrastTextChannel", Wl(Kl(G.contrastText))), H === "text" && (Cr(S[H], "primary"), Cr(S[H], "secondary")), H === "action" && (G.active && Cr(S[H], "active"), G.selected && Cr(S[H], "selected")));
    });
  }), D = a.reduce((P, S) => jn(P, S), D);
  const M = {
    prefix: c,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: d,
    getSelector: tM(D)
  }, {
    vars: $,
    generateThemeVars: j,
    generateStyleSheets: U
  } = Ow(D, M);
  return D.vars = $, Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([P, S]) => {
    D[P] = S;
  }), D.generateThemeVars = j, D.generateStyleSheets = U, D.generateSpacing = function() {
    return Sm(h.spacing, xm(this));
  }, D.getColorSchemeSelector = zw(p), D.spacing = D.generateSpacing(), D.shouldSkipGeneratingVar = d, D.unstable_sxConfig = {
    ...Ts,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, D.unstable_sx = function(S) {
    return oo({
      sx: S,
      theme: this
    });
  }, D.toRuntimeSource = sx, D;
}
function k0(e, a, o) {
  e.colorSchemes && o && (e.colorSchemes[a] = {
    ...o !== !0 && o,
    palette: Dm({
      ...o === !0 ? {} : o.palette,
      mode: a
    })
    // cast type to skip module augmentation test
  });
}
function us(e = {}, ...a) {
  const {
    palette: o,
    cssVariables: i = !1,
    colorSchemes: s = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: c = o == null ? void 0 : o.mode,
    ...d
  } = e, p = c || "light", m = s == null ? void 0 : s[p], h = {
    ...s,
    ...o ? {
      [p]: {
        ...typeof m != "boolean" && m,
        palette: o
      }
    } : void 0
  };
  if (i === !1) {
    if (!("colorSchemes" in e))
      return _p(e, ...a);
    let g = o;
    "palette" in e || h[p] && (h[p] !== !0 ? g = h[p].palette : p === "dark" && (g = {
      mode: "dark"
    }));
    const y = _p({
      ...e,
      palette: g
    }, ...a);
    return y.defaultColorScheme = p, y.colorSchemes = h, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: y.palette
    }, k0(y, "dark", h.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: y.palette
    }, k0(y, "light", h.light)), y;
  }
  return !o && !("light" in h) && p === "light" && (h.light = !0), oM({
    ...d,
    colorSchemes: h,
    defaultColorScheme: p,
    ...typeof i != "boolean" && i
  }, ...a);
}
const $m = us();
function nr() {
  const e = Tm($m);
  return e[Ua] || e;
}
function dx(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Zn = (e) => dx(e) && e !== "classes", de = VR({
  themeId: Ua,
  defaultTheme: $m,
  rootShouldForwardProp: Zn
});
function iM({
  theme: e,
  ...a
}) {
  const o = Ua in e ? e[Ua] : void 0;
  return /* @__PURE__ */ T.jsx(nx, {
    ...a,
    themeId: o ? Ua : void 0,
    theme: o || e
  });
}
const Yc = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: lM
} = Rw({
  themeId: Ua,
  // @ts-ignore ignore module augmentation tests
  theme: () => us({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Yc.colorSchemeStorageKey,
  modeStorageKey: Yc.modeStorageKey,
  defaultColorScheme: {
    light: Yc.defaultLightColorScheme,
    dark: Yc.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const a = {
      ...e,
      typography: ix(e.palette, e.typography)
    };
    return a.unstable_sx = function(i) {
      return oo({
        sx: i,
        theme: this
      });
    }, a;
  }
}), sM = lM;
function cM({
  theme: e,
  ...a
}) {
  const o = v.useMemo(() => {
    if (typeof e == "function")
      return e;
    const i = Ua in e ? e[Ua] : e;
    return "colorSchemes" in i ? null : "vars" in i ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return o ? /* @__PURE__ */ T.jsx(iM, {
    theme: o,
    ...a
  }) : /* @__PURE__ */ T.jsx(sM, {
    theme: e,
    ...a
  });
}
var xp = { exports: {} }, Il = {}, Sp = { exports: {} }, Cp = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N0;
function uM() {
  return N0 || (N0 = 1, (function(e) {
    function a(N, V) {
      var K = N.length;
      N.push(V);
      e: for (; 0 < K; ) {
        var Y = K - 1 >>> 1, pe = N[Y];
        if (0 < s(pe, V))
          N[Y] = V, N[K] = pe, K = Y;
        else break e;
      }
    }
    function o(N) {
      return N.length === 0 ? null : N[0];
    }
    function i(N) {
      if (N.length === 0) return null;
      var V = N[0], K = N.pop();
      if (K !== V) {
        N[0] = K;
        e: for (var Y = 0, pe = N.length, L = pe >>> 1; Y < L; ) {
          var W = 2 * (Y + 1) - 1, re = N[W], te = W + 1, fe = N[te];
          if (0 > s(re, K))
            te < pe && 0 > s(fe, re) ? (N[Y] = fe, N[te] = K, Y = te) : (N[Y] = re, N[W] = K, Y = W);
          else if (te < pe && 0 > s(fe, K))
            N[Y] = fe, N[te] = K, Y = te;
          else break e;
        }
      }
      return V;
    }
    function s(N, V) {
      var K = N.sortIndex - V.sortIndex;
      return K !== 0 ? K : N.id - V.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, p = d.now();
      e.unstable_now = function() {
        return d.now() - p;
      };
    }
    var m = [], h = [], g = 1, y = null, x = 3, C = !1, R = !1, E = !1, w = !1, z = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    function D(N) {
      for (var V = o(h); V !== null; ) {
        if (V.callback === null) i(h);
        else if (V.startTime <= N)
          i(h), V.sortIndex = V.expirationTime, a(m, V);
        else break;
        V = o(h);
      }
    }
    function M(N) {
      if (E = !1, D(N), !R)
        if (o(m) !== null)
          R = !0, $ || ($ = !0, H());
        else {
          var V = o(h);
          V !== null && F(M, V.startTime - N);
        }
    }
    var $ = !1, j = -1, U = 5, P = -1;
    function S() {
      return w ? !0 : !(e.unstable_now() - P < U);
    }
    function B() {
      if (w = !1, $) {
        var N = e.unstable_now();
        P = N;
        var V = !0;
        try {
          e: {
            R = !1, E && (E = !1, k(j), j = -1), C = !0;
            var K = x;
            try {
              t: {
                for (D(N), y = o(m); y !== null && !(y.expirationTime > N && S()); ) {
                  var Y = y.callback;
                  if (typeof Y == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var pe = Y(
                      y.expirationTime <= N
                    );
                    if (N = e.unstable_now(), typeof pe == "function") {
                      y.callback = pe, D(N), V = !0;
                      break t;
                    }
                    y === o(m) && i(m), D(N);
                  } else i(m);
                  y = o(m);
                }
                if (y !== null) V = !0;
                else {
                  var L = o(h);
                  L !== null && F(
                    M,
                    L.startTime - N
                  ), V = !1;
                }
              }
              break e;
            } finally {
              y = null, x = K, C = !1;
            }
            V = void 0;
          }
        } finally {
          V ? H() : $ = !1;
        }
      }
    }
    var H;
    if (typeof O == "function")
      H = function() {
        O(B);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), J = G.port2;
      G.port1.onmessage = B, H = function() {
        J.postMessage(null);
      };
    } else
      H = function() {
        z(B, 0);
      };
    function F(N, V) {
      j = z(function() {
        N(e.unstable_now());
      }, V);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, e.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < N ? Math.floor(1e3 / N) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, e.unstable_next = function(N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = x;
      }
      var K = x;
      x = V;
      try {
        return N();
      } finally {
        x = K;
      }
    }, e.unstable_requestPaint = function() {
      w = !0;
    }, e.unstable_runWithPriority = function(N, V) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var K = x;
      x = N;
      try {
        return V();
      } finally {
        x = K;
      }
    }, e.unstable_scheduleCallback = function(N, V, K) {
      var Y = e.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Y + K : Y) : K = Y, N) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = K + pe, N = {
        id: g++,
        callback: V,
        priorityLevel: N,
        startTime: K,
        expirationTime: pe,
        sortIndex: -1
      }, K > Y ? (N.sortIndex = K, a(h, N), o(m) === null && N === o(h) && (E ? (k(j), j = -1) : E = !0, F(M, K - Y))) : (N.sortIndex = pe, a(m, N), R || C || (R = !0, $ || ($ = !0, H()))), N;
    }, e.unstable_shouldYield = S, e.unstable_wrapCallback = function(N) {
      var V = x;
      return function() {
        var K = x;
        x = V;
        try {
          return N.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(Cp)), Cp;
}
var L0;
function dM() {
  return L0 || (L0 = 1, Sp.exports = uM()), Sp.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j0;
function fM() {
  if (j0) return Il;
  j0 = 1;
  var e = dM(), a = tm(), o = g1();
  function i(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function c(t) {
    var n = t, r = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do
        n = t, (n.flags & 4098) !== 0 && (r = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? r : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (c(t) !== t)
      throw Error(i(188));
  }
  function h(t) {
    var n = t.alternate;
    if (!n) {
      if (n = c(t), n === null) throw Error(i(188));
      return n !== t ? null : t;
    }
    for (var r = t, l = n; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (l = u.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return m(u), t;
          if (f === l) return m(u), n;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== l.return) r = u, l = f;
      else {
        for (var b = !1, A = u.child; A; ) {
          if (A === r) {
            b = !0, r = u, l = f;
            break;
          }
          if (A === l) {
            b = !0, l = u, r = f;
            break;
          }
          A = A.sibling;
        }
        if (!b) {
          for (A = f.child; A; ) {
            if (A === r) {
              b = !0, r = f, l = u;
              break;
            }
            if (A === l) {
              b = !0, l = f, r = u;
              break;
            }
            A = A.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (r.alternate !== l) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? t : n;
  }
  function g(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (n = g(t), n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign, x = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), O = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), S = Symbol.for("react.memo_cache_sentinel"), B = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var G = Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === G ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case z:
        return "Profiler";
      case w:
        return "StrictMode";
      case M:
        return "Suspense";
      case $:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return "Portal";
        case O:
          return t.displayName || "Context";
        case k:
          return (t._context.displayName || "Context") + ".Consumer";
        case D:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case j:
          return n = t.displayName || null, n !== null ? n : J(t.type) || "Memo";
        case U:
          n = t._payload, t = t._init;
          try {
            return J(t(n));
          } catch {
          }
      }
    return null;
  }
  var F = Array.isArray, N = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Y = [], pe = -1;
  function L(t) {
    return { current: t };
  }
  function W(t) {
    0 > pe || (t.current = Y[pe], Y[pe] = null, pe--);
  }
  function re(t, n) {
    pe++, Y[pe] = t.current, t.current = n;
  }
  var te = L(null), fe = L(null), se = L(null), ge = L(null);
  function ye(t, n) {
    switch (re(se, n), re(fe, t), re(te, null), n.nodeType) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? iv(t) : 0;
        break;
      default:
        if (t = n.tagName, n = n.namespaceURI)
          n = iv(n), t = lv(n, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    W(te), re(te, t);
  }
  function be() {
    W(te), W(fe), W(se);
  }
  function Te(t) {
    t.memoizedState !== null && re(ge, t);
    var n = te.current, r = lv(n, t.type);
    n !== r && (re(fe, t), re(te, r));
  }
  function De(t) {
    fe.current === t && (W(te), W(fe)), ge.current === t && (W(ge), $l._currentValue = K);
  }
  var Se, ct;
  function Oe(t) {
    if (Se === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        Se = n && n[1] || "", ct = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Se + t + ct;
  }
  var ke = !1;
  function vt(t, n) {
    if (!t || ke) return "";
    ke = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var ce = function() {
                throw Error();
              };
              if (Object.defineProperty(ce.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ce, []);
                } catch (ee) {
                  var Z = ee;
                }
                Reflect.construct(t, [], ce);
              } else {
                try {
                  ce.call();
                } catch (ee) {
                  Z = ee;
                }
                t.call(ce.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                Z = ee;
              }
              (ce = t()) && typeof ce.catch == "function" && ce.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && Z && typeof ee.stack == "string")
              return [ee.stack, Z.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = l.DetermineComponentFrameRoot(), b = f[0], A = f[1];
      if (b && A) {
        var _ = b.split(`
`), Q = A.split(`
`);
        for (u = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < Q.length && !Q[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === _.length || u === Q.length)
          for (l = _.length - 1, u = Q.length - 1; 1 <= l && 0 <= u && _[l] !== Q[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (_[l] !== Q[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || _[l] !== Q[u]) {
                  var ne = `
` + _[l].replace(" at new ", " at ");
                  return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), ne;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ke = !1, Error.prepareStackTrace = r;
    }
    return (r = t ? t.displayName || t.name : "") ? Oe(r) : "";
  }
  function me(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(t.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return t.child !== n && n !== null ? Oe("Suspense Fallback") : Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 15:
        return vt(t.type, !1);
      case 11:
        return vt(t.type.render, !1);
      case 1:
        return vt(t.type, !0);
      case 31:
        return Oe("Activity");
      default:
        return "";
    }
  }
  function He(t) {
    try {
      var n = "", r = null;
      do
        n += me(t, r), r = t, t = t.return;
      while (t);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Me = Object.prototype.hasOwnProperty, We = e.unstable_scheduleCallback, Fe = e.unstable_cancelCallback, Ce = e.unstable_shouldYield, At = e.unstable_requestPaint, Ue = e.unstable_now, Ft = e.unstable_getCurrentPriorityLevel, rn = e.unstable_ImmediatePriority, Bt = e.unstable_UserBlockingPriority, Je = e.unstable_NormalPriority, Ke = e.unstable_LowPriority, je = e.unstable_IdlePriority, ze = e.log, bt = e.unstable_setDisableYieldValue, lt = null, gt = null;
  function xe(t) {
    if (typeof ze == "function" && bt(t), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(lt, t);
      } catch {
      }
  }
  var $e = Math.clz32 ? Math.clz32 : Bn, _t = Math.log, Qt = Math.LN2;
  function Bn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (_t(t) / Qt | 0) | 0;
  }
  var dn = 256, Dn = 262144, yn = 4194304;
  function Sn(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function vn(t, n, r) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = t.suspendedLanes, b = t.pingedLanes;
    t = t.warmLanes;
    var A = l & 134217727;
    return A !== 0 ? (l = A & ~f, l !== 0 ? u = Sn(l) : (b &= A, b !== 0 ? u = Sn(b) : r || (r = A & ~t, r !== 0 && (u = Sn(r))))) : (A = l & ~f, A !== 0 ? u = Sn(A) : b !== 0 ? u = Sn(b) : r || (r = l & ~t, r !== 0 && (u = Sn(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u, r = n & -n, f >= r || f === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function Un(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Ia(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ie() {
    var t = yn;
    return yn <<= 1, (yn & 62914560) === 0 && (yn = 4194304), t;
  }
  function on(t) {
    for (var n = [], r = 0; 31 > r; r++) n.push(t);
    return n;
  }
  function ve(t, n) {
    t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Re(t, n, r, l, u, f) {
    var b = t.pendingLanes;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= r, t.entangledLanes &= r, t.errorRecoveryDisabledLanes &= r, t.shellSuspendCounter = 0;
    var A = t.entanglements, _ = t.expirationTimes, Q = t.hiddenUpdates;
    for (r = b & ~r; 0 < r; ) {
      var ne = 31 - $e(r), ce = 1 << ne;
      A[ne] = 0, _[ne] = -1;
      var Z = Q[ne];
      if (Z !== null)
        for (Q[ne] = null, ne = 0; ne < Z.length; ne++) {
          var ee = Z[ne];
          ee !== null && (ee.lane &= -536870913);
        }
      r &= ~ce;
    }
    l !== 0 && nt(t, l, 0), f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(b & ~n));
  }
  function nt(t, n, r) {
    t.pendingLanes |= n, t.suspendedLanes &= ~n;
    var l = 31 - $e(n);
    t.entangledLanes |= n, t.entanglements[l] = t.entanglements[l] | 1073741824 | r & 261930;
  }
  function ot(t, n) {
    var r = t.entangledLanes |= n;
    for (t = t.entanglements; r; ) {
      var l = 31 - $e(r), u = 1 << l;
      u & n | t[l] & n && (t[l] |= n), r &= ~u;
    }
  }
  function Ot(t, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Cn(r), (r & (t.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Cn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function _n(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fa() {
    var t = V.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : zv(t.type));
  }
  function Na(t, n) {
    var r = V.p;
    try {
      return V.p = t, n();
    } finally {
      V.p = r;
    }
  }
  var zt = Math.random().toString(36).slice(2), pt = "__reactFiber$" + zt, Vt = "__reactProps$" + zt, La = "__reactContainer$" + zt, ie = "__reactEvents$" + zt, oe = "__reactListeners$" + zt, Ee = "__reactHandles$" + zt, Xe = "__reactResources$" + zt, et = "__reactMarker$" + zt;
  function Et(t) {
    delete t[pt], delete t[Vt], delete t[ie], delete t[oe], delete t[Ee];
  }
  function Ht(t) {
    var n = t[pt];
    if (n) return n;
    for (var r = t.parentNode; r; ) {
      if (n = r[La] || r[pt]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (t = mv(t); t !== null; ) {
            if (r = t[pt]) return r;
            t = mv(t);
          }
        return n;
      }
      t = r, r = t.parentNode;
    }
    return null;
  }
  function bn(t) {
    if (t = t[pt] || t[La]) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function ar(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Ar(t) {
    var n = t[Xe];
    return n || (n = t[Xe] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function ln(t) {
    t[et] = !0;
  }
  var fo = /* @__PURE__ */ new Set(), po = {};
  function st(t, n) {
    Rn(t, n), Rn(t + "Capture", n);
  }
  function Rn(t, n) {
    for (po[t] = n, t = 0; t < n.length; t++)
      fo.add(n[t]);
  }
  var Pa = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Or = {}, As = {};
  function Gx(t) {
    return Me.call(As, t) ? !0 : Me.call(Or, t) ? !1 : Pa.test(t) ? As[t] = !0 : (Or[t] = !0, !1);
  }
  function Os(t, n, r) {
    if (Gx(n))
      if (r === null) t.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + r);
      }
  }
  function zs(t, n, r) {
    if (r === null) t.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + r);
    }
  }
  function rr(t, n, r, l) {
    if (l === null) t.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(n, r, "" + l);
    }
  }
  function pa(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Zm(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function qx(t, n, r) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      n
    );
    if (!t.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, f = l.set;
      return Object.defineProperty(t, n, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(b) {
          r = "" + b, f.call(this, b);
        }
      }), Object.defineProperty(t, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(b) {
          r = "" + b;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[n];
        }
      };
    }
  }
  function Xu(t) {
    if (!t._valueTracker) {
      var n = Zm(t) ? "checked" : "value";
      t._valueTracker = qx(
        t,
        n,
        "" + t[n]
      );
    }
  }
  function Jm(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return t && (l = Zm(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== r ? (n.setValue(t), !0) : !1;
  }
  function Ds(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Yx = /[\n"\\]/g;
  function ma(t) {
    return t.replace(
      Yx,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qu(t, n, r, l, u, f, b, A) {
    t.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.type = b : t.removeAttribute("type"), n != null ? b === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + pa(n)) : t.value !== "" + pa(n) && (t.value = "" + pa(n)) : b !== "submit" && b !== "reset" || t.removeAttribute("value"), n != null ? Zu(t, b, pa(n)) : r != null ? Zu(t, b, pa(r)) : l != null && t.removeAttribute("value"), u == null && f != null && (t.defaultChecked = !!f), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? t.name = "" + pa(A) : t.removeAttribute("name");
  }
  function eh(t, n, r, l, u, f, b, A) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f), n != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || n != null)) {
        Xu(t);
        return;
      }
      r = r != null ? "" + pa(r) : "", n = n != null ? "" + pa(n) : r, A || n === t.value || (t.value = n), t.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = A ? t.checked : !!l, t.defaultChecked = !!l, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (t.name = b), Xu(t);
  }
  function Zu(t, n, r) {
    n === "number" && Ds(t.ownerDocument) === t || t.defaultValue === "" + r || (t.defaultValue = "" + r);
  }
  function Po(t, n, r, l) {
    if (t = t.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < t.length; r++)
        u = n.hasOwnProperty("$" + t[r].value), t[r].selected !== u && (t[r].selected = u), u && l && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + pa(r), n = null, u = 0; u < t.length; u++) {
        if (t[u].value === r) {
          t[u].selected = !0, l && (t[u].defaultSelected = !0);
          return;
        }
        n !== null || t[u].disabled || (n = t[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function th(t, n, r) {
    if (n != null && (n = "" + pa(n), n !== t.value && (t.value = n), r == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = r != null ? "" + pa(r) : "";
  }
  function nh(t, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(i(92));
        if (F(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = pa(n), t.defaultValue = r, l = t.textContent, l === r && l !== "" && l !== null && (t.value = l), Xu(t);
  }
  function Vo(t, n) {
    if (n) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Fx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ah(t, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : l ? t.setProperty(n, r) : typeof r != "number" || r === 0 || Fx.has(n) ? n === "float" ? t.cssFloat = r : t[n] = ("" + r).trim() : t[n] = r + "px";
  }
  function rh(t, n, r) {
    if (n != null && typeof n != "object")
      throw Error(i(62));
    if (t = t.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && ah(t, u, l);
    } else
      for (var f in n)
        n.hasOwnProperty(f) && ah(t, f, n[f]);
  }
  function Ju(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wx = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $s(t) {
    return Kx.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function or() {
  }
  var ed = null;
  function td(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Go = null, qo = null;
  function oh(t) {
    var n = bn(t);
    if (n && (t = n.stateNode)) {
      var r = t[Vt] || null;
      e: switch (t = n.stateNode, n.type) {
        case "input":
          if (Qu(
            t,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), n = r.name, r.type === "radio" && n != null) {
            for (r = t; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + ma(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== t && l.form === t.form) {
                var u = l[Vt] || null;
                if (!u) throw Error(i(90));
                Qu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              l = r[n], l.form === t.form && Jm(l);
          }
          break e;
        case "textarea":
          th(t, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && Po(t, !!r.multiple, n, !1);
      }
    }
  }
  var nd = !1;
  function ih(t, n, r) {
    if (nd) return t(n, r);
    nd = !0;
    try {
      var l = t(n);
      return l;
    } finally {
      if (nd = !1, (Go !== null || qo !== null) && (bc(), Go && (n = Go, t = qo, qo = Go = null, oh(n), t)))
        for (n = 0; n < t.length; n++) oh(t[n]);
    }
  }
  function Ki(t, n) {
    var r = t.stateNode;
    if (r === null) return null;
    var l = r[Vt] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (r && typeof r != "function")
      throw Error(
        i(231, n, typeof r)
      );
    return r;
  }
  var ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ad = !1;
  if (ir)
    try {
      var Xi = {};
      Object.defineProperty(Xi, "passive", {
        get: function() {
          ad = !0;
        }
      }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
    } catch {
      ad = !1;
    }
  var zr = null, rd = null, ks = null;
  function lh() {
    if (ks) return ks;
    var t, n = rd, r = n.length, l, u = "value" in zr ? zr.value : zr.textContent, f = u.length;
    for (t = 0; t < r && n[t] === u[t]; t++) ;
    var b = r - t;
    for (l = 1; l <= b && n[r - l] === u[f - l]; l++) ;
    return ks = u.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Ns(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ls() {
    return !0;
  }
  function sh() {
    return !1;
  }
  function In(t) {
    function n(r, l, u, f, b) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = b, this.currentTarget = null;
      for (var A in t)
        t.hasOwnProperty(A) && (r = t[A], this[A] = r ? r(f) : f[A]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Ls : sh, this.isPropagationStopped = sh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Ls);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Ls);
      },
      persist: function() {
      },
      isPersistent: Ls
    }), n;
  }
  var mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, js = In(mo), Qi = y({}, mo, { view: 0, detail: 0 }), Xx = In(Qi), od, id, Zi, Bs = y({}, Qi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sd,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Zi && (Zi && t.type === "mousemove" ? (od = t.screenX - Zi.screenX, id = t.screenY - Zi.screenY) : id = od = 0, Zi = t), od);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : id;
    }
  }), ch = In(Bs), Qx = y({}, Bs, { dataTransfer: 0 }), Zx = In(Qx), Jx = y({}, Qi, { relatedTarget: 0 }), ld = In(Jx), eS = y({}, mo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tS = In(eS), nS = y({}, mo, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), aS = In(nS), rS = y({}, mo, { data: 0 }), uh = In(rS), oS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, iS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, lS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sS(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = lS[t]) ? !!n[t] : !1;
  }
  function sd() {
    return sS;
  }
  var cS = y({}, Qi, {
    key: function(t) {
      if (t.key) {
        var n = oS[t.key] || t.key;
        if (n !== "Unidentified") return n;
      }
      return t.type === "keypress" ? (t = Ns(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? iS[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sd,
    charCode: function(t) {
      return t.type === "keypress" ? Ns(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ns(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), uS = In(cS), dS = y({}, Bs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), dh = In(dS), fS = y({}, Qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sd
  }), pS = In(fS), mS = y({}, mo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hS = In(mS), gS = y({}, Bs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yS = In(gS), vS = y({}, mo, {
    newState: 0,
    oldState: 0
  }), bS = In(vS), xS = [9, 13, 27, 32], cd = ir && "CompositionEvent" in window, Ji = null;
  ir && "documentMode" in document && (Ji = document.documentMode);
  var SS = ir && "TextEvent" in window && !Ji, fh = ir && (!cd || Ji && 8 < Ji && 11 >= Ji), ph = " ", mh = !1;
  function hh(t, n) {
    switch (t) {
      case "keyup":
        return xS.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Yo = !1;
  function CS(t, n) {
    switch (t) {
      case "compositionend":
        return gh(n);
      case "keypress":
        return n.which !== 32 ? null : (mh = !0, ph);
      case "textInput":
        return t = n.data, t === ph && mh ? null : t;
      default:
        return null;
    }
  }
  function ES(t, n) {
    if (Yo)
      return t === "compositionend" || !cd && hh(t, n) ? (t = lh(), ks = rd = zr = null, Yo = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return fh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var TS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function yh(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!TS[t.type] : n === "textarea";
  }
  function vh(t, n, r, l) {
    Go ? qo ? qo.push(l) : qo = [l] : Go = l, n = wc(n, "onChange"), 0 < n.length && (r = new js(
      "onChange",
      "change",
      null,
      r,
      l
    ), t.push({ event: r, listeners: n }));
  }
  var el = null, tl = null;
  function RS(t) {
    ev(t, 0);
  }
  function _s(t) {
    var n = ar(t);
    if (Jm(n)) return t;
  }
  function bh(t, n) {
    if (t === "change") return n;
  }
  var xh = !1;
  if (ir) {
    var ud;
    if (ir) {
      var dd = "oninput" in document;
      if (!dd) {
        var Sh = document.createElement("div");
        Sh.setAttribute("oninput", "return;"), dd = typeof Sh.oninput == "function";
      }
      ud = dd;
    } else ud = !1;
    xh = ud && (!document.documentMode || 9 < document.documentMode);
  }
  function Ch() {
    el && (el.detachEvent("onpropertychange", Eh), tl = el = null);
  }
  function Eh(t) {
    if (t.propertyName === "value" && _s(tl)) {
      var n = [];
      vh(
        n,
        tl,
        t,
        td(t)
      ), ih(RS, n);
    }
  }
  function wS(t, n, r) {
    t === "focusin" ? (Ch(), el = n, tl = r, el.attachEvent("onpropertychange", Eh)) : t === "focusout" && Ch();
  }
  function MS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _s(tl);
  }
  function AS(t, n) {
    if (t === "click") return _s(n);
  }
  function OS(t, n) {
    if (t === "input" || t === "change")
      return _s(n);
  }
  function zS(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var Jn = typeof Object.is == "function" ? Object.is : zS;
  function nl(t, n) {
    if (Jn(t, n)) return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(t), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!Me.call(n, u) || !Jn(t[u], n[u]))
        return !1;
    }
    return !0;
  }
  function Th(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Rh(t, n) {
    var r = Th(t);
    t = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = t + r.textContent.length, t <= n && l >= n)
          return { node: r, offset: n - t };
        t = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Th(r);
    }
  }
  function wh(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? wh(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Mh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = Ds(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = n.contentWindow;
      else break;
      n = Ds(t.document);
    }
    return n;
  }
  function fd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  var DS = ir && "documentMode" in document && 11 >= document.documentMode, Fo = null, pd = null, al = null, md = !1;
  function Ah(t, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    md || Fo == null || Fo !== Ds(l) || (l = Fo, "selectionStart" in l && fd(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), al && nl(al, l) || (al = l, l = wc(pd, "onSelect"), 0 < l.length && (n = new js(
      "onSelect",
      "select",
      null,
      n,
      r
    ), t.push({ event: n, listeners: l }), n.target = Fo)));
  }
  function ho(t, n) {
    var r = {};
    return r[t.toLowerCase()] = n.toLowerCase(), r["Webkit" + t] = "webkit" + n, r["Moz" + t] = "moz" + n, r;
  }
  var Wo = {
    animationend: ho("Animation", "AnimationEnd"),
    animationiteration: ho("Animation", "AnimationIteration"),
    animationstart: ho("Animation", "AnimationStart"),
    transitionrun: ho("Transition", "TransitionRun"),
    transitionstart: ho("Transition", "TransitionStart"),
    transitioncancel: ho("Transition", "TransitionCancel"),
    transitionend: ho("Transition", "TransitionEnd")
  }, hd = {}, Oh = {};
  ir && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete Wo.animationend.animation, delete Wo.animationiteration.animation, delete Wo.animationstart.animation), "TransitionEvent" in window || delete Wo.transitionend.transition);
  function go(t) {
    if (hd[t]) return hd[t];
    if (!Wo[t]) return t;
    var n = Wo[t], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in Oh)
        return hd[t] = n[r];
    return t;
  }
  var zh = go("animationend"), Dh = go("animationiteration"), $h = go("animationstart"), $S = go("transitionrun"), kS = go("transitionstart"), NS = go("transitioncancel"), kh = go("transitionend"), Nh = /* @__PURE__ */ new Map(), gd = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gd.push("scrollEnd");
  function ja(t, n) {
    Nh.set(t, n), st(n, [t]);
  }
  var Hs = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ha = [], Ko = 0, yd = 0;
  function Us() {
    for (var t = Ko, n = yd = Ko = 0; n < t; ) {
      var r = ha[n];
      ha[n++] = null;
      var l = ha[n];
      ha[n++] = null;
      var u = ha[n];
      ha[n++] = null;
      var f = ha[n];
      if (ha[n++] = null, l !== null && u !== null) {
        var b = l.pending;
        b === null ? u.next = u : (u.next = b.next, b.next = u), l.pending = u;
      }
      f !== 0 && Lh(r, u, f);
    }
  }
  function Is(t, n, r, l) {
    ha[Ko++] = t, ha[Ko++] = n, ha[Ko++] = r, ha[Ko++] = l, yd |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function vd(t, n, r, l) {
    return Is(t, n, r, l), Ps(t);
  }
  function yo(t, n) {
    return Is(t, null, null, n), Ps(t);
  }
  function Lh(t, n, r) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, f = t.return; f !== null; )
      f.childLanes |= r, l = f.alternate, l !== null && (l.childLanes |= r), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & 1 || (u = !0)), t = f, f = f.return;
    return t.tag === 3 ? (f = t.stateNode, u && n !== null && (u = 31 - $e(r), t = f.hiddenUpdates, l = t[u], l === null ? t[u] = [n] : l.push(n), n.lane = r | 536870912), f) : null;
  }
  function Ps(t) {
    if (50 < Rl)
      throw Rl = 0, Af = null, Error(i(185));
    for (var n = t.return; n !== null; )
      t = n, n = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xo = {};
  function LS(t, n, r, l) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ea(t, n, r, l) {
    return new LS(t, n, r, l);
  }
  function bd(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function lr(t, n) {
    var r = t.alternate;
    return r === null ? (r = ea(
      t.tag,
      n,
      t.key,
      t.mode
    ), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = n, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 65011712, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, n = t.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r.refCleanup = t.refCleanup, r;
  }
  function jh(t, n) {
    t.flags &= 65011714;
    var r = t.alternate;
    return r === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, t.type = r.type, n = r.dependencies, t.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), t;
  }
  function Vs(t, n, r, l, u, f) {
    var b = 0;
    if (l = t, typeof t == "function") bd(t) && (b = 1);
    else if (typeof t == "string")
      b = UC(
        t,
        r,
        te.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      e: switch (t) {
        case P:
          return t = ea(31, r, n, u), t.elementType = P, t.lanes = f, t;
        case E:
          return vo(r.children, u, f, n);
        case w:
          b = 8, u |= 24;
          break;
        case z:
          return t = ea(12, r, n, u | 2), t.elementType = z, t.lanes = f, t;
        case M:
          return t = ea(13, r, n, u), t.elementType = M, t.lanes = f, t;
        case $:
          return t = ea(19, r, n, u), t.elementType = $, t.lanes = f, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case O:
                b = 10;
                break e;
              case k:
                b = 9;
                break e;
              case D:
                b = 11;
                break e;
              case j:
                b = 14;
                break e;
              case U:
                b = 16, l = null;
                break e;
            }
          b = 29, r = Error(
            i(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return n = ea(b, r, n, u), n.elementType = t, n.type = l, n.lanes = f, n;
  }
  function vo(t, n, r, l) {
    return t = ea(7, t, l, n), t.lanes = r, t;
  }
  function xd(t, n, r) {
    return t = ea(6, t, null, n), t.lanes = r, t;
  }
  function Bh(t) {
    var n = ea(18, null, null, 0);
    return n.stateNode = t, n;
  }
  function Sd(t, n, r) {
    return n = ea(
      4,
      t.children !== null ? t.children : [],
      t.key,
      n
    ), n.lanes = r, n.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, n;
  }
  var _h = /* @__PURE__ */ new WeakMap();
  function ga(t, n) {
    if (typeof t == "object" && t !== null) {
      var r = _h.get(t);
      return r !== void 0 ? r : (n = {
        value: t,
        source: n,
        stack: He(n)
      }, _h.set(t, n), n);
    }
    return {
      value: t,
      source: n,
      stack: He(n)
    };
  }
  var Qo = [], Zo = 0, Gs = null, rl = 0, ya = [], va = 0, Dr = null, Va = 1, Ga = "";
  function sr(t, n) {
    Qo[Zo++] = rl, Qo[Zo++] = Gs, Gs = t, rl = n;
  }
  function Hh(t, n, r) {
    ya[va++] = Va, ya[va++] = Ga, ya[va++] = Dr, Dr = t;
    var l = Va;
    t = Ga;
    var u = 32 - $e(l) - 1;
    l &= ~(1 << u), r += 1;
    var f = 32 - $e(n) + u;
    if (30 < f) {
      var b = u - u % 5;
      f = (l & (1 << b) - 1).toString(32), l >>= b, u -= b, Va = 1 << 32 - $e(n) + u | r << u | l, Ga = f + t;
    } else
      Va = 1 << f | r << u | l, Ga = t;
  }
  function Cd(t) {
    t.return !== null && (sr(t, 1), Hh(t, 1, 0));
  }
  function Ed(t) {
    for (; t === Gs; )
      Gs = Qo[--Zo], Qo[Zo] = null, rl = Qo[--Zo], Qo[Zo] = null;
    for (; t === Dr; )
      Dr = ya[--va], ya[va] = null, Ga = ya[--va], ya[va] = null, Va = ya[--va], ya[va] = null;
  }
  function Uh(t, n) {
    ya[va++] = Va, ya[va++] = Ga, ya[va++] = Dr, Va = n.id, Ga = n.overflow, Dr = t;
  }
  var wn = null, Gt = null, yt = !1, $r = null, ba = !1, Td = Error(i(519));
  function kr(t) {
    var n = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ol(ga(n, t)), Td;
  }
  function Ih(t) {
    var n = t.stateNode, r = t.type, l = t.memoizedProps;
    switch (n[pt] = t, n[Vt] = l, r) {
      case "dialog":
        dt("cancel", n), dt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ml.length; r++)
          dt(Ml[r], n);
        break;
      case "source":
        dt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", n), dt("load", n);
        break;
      case "details":
        dt("toggle", n);
        break;
      case "input":
        dt("invalid", n), eh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        dt("invalid", n);
        break;
      case "textarea":
        dt("invalid", n), nh(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || rv(n.textContent, r) ? (l.popover != null && (dt("beforetoggle", n), dt("toggle", n)), l.onScroll != null && dt("scroll", n), l.onScrollEnd != null && dt("scrollend", n), l.onClick != null && (n.onclick = or), n = !0) : n = !1, n || kr(t, !0);
  }
  function Ph(t) {
    for (wn = t.return; wn; )
      switch (wn.tag) {
        case 5:
        case 31:
        case 13:
          ba = !1;
          return;
        case 27:
        case 3:
          ba = !0;
          return;
        default:
          wn = wn.return;
      }
  }
  function Jo(t) {
    if (t !== wn) return !1;
    if (!yt) return Ph(t), yt = !0, !1;
    var n = t.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = t.type, r = !(r !== "form" && r !== "button") || Vf(t.type, t.memoizedProps)), r = !r), r && Gt && kr(t), Ph(t), n === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      Gt = pv(t);
    } else if (n === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      Gt = pv(t);
    } else
      n === 27 ? (n = Gt, Fr(t.type) ? (t = Wf, Wf = null, Gt = t) : Gt = n) : Gt = wn ? Sa(t.stateNode.nextSibling) : null;
    return !0;
  }
  function bo() {
    Gt = wn = null, yt = !1;
  }
  function Rd() {
    var t = $r;
    return t !== null && (qn === null ? qn = t : qn.push.apply(
      qn,
      t
    ), $r = null), t;
  }
  function ol(t) {
    $r === null ? $r = [t] : $r.push(t);
  }
  var wd = L(null), xo = null, cr = null;
  function Nr(t, n, r) {
    re(wd, n._currentValue), n._currentValue = r;
  }
  function ur(t) {
    t._currentValue = wd.current, W(wd);
  }
  function Md(t, n, r) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), t === r) break;
      t = t.return;
    }
  }
  function Ad(t, n, r, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var b = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var A = f;
          f = u;
          for (var _ = 0; _ < n.length; _++)
            if (A.context === n[_]) {
              f.lanes |= r, A = f.alternate, A !== null && (A.lanes |= r), Md(
                f.return,
                r,
                t
              ), l || (b = null);
              break e;
            }
          f = A.next;
        }
      } else if (u.tag === 18) {
        if (b = u.return, b === null) throw Error(i(341));
        b.lanes |= r, f = b.alternate, f !== null && (f.lanes |= r), Md(b, r, t), b = null;
      } else b = u.child;
      if (b !== null) b.return = u;
      else
        for (b = u; b !== null; ) {
          if (b === t) {
            b = null;
            break;
          }
          if (u = b.sibling, u !== null) {
            u.return = b.return, b = u;
            break;
          }
          b = b.return;
        }
      u = b;
    }
  }
  function ei(t, n, r, l) {
    t = null;
    for (var u = n, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var b = u.alternate;
        if (b === null) throw Error(i(387));
        if (b = b.memoizedProps, b !== null) {
          var A = u.type;
          Jn(u.pendingProps.value, b.value) || (t !== null ? t.push(A) : t = [A]);
        }
      } else if (u === ge.current) {
        if (b = u.alternate, b === null) throw Error(i(387));
        b.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push($l) : t = [$l]);
      }
      u = u.return;
    }
    t !== null && Ad(
      n,
      t,
      r,
      l
    ), n.flags |= 262144;
  }
  function qs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Jn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function So(t) {
    xo = t, cr = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Mn(t) {
    return Vh(xo, t);
  }
  function Ys(t, n) {
    return xo === null && So(t), Vh(t, n);
  }
  function Vh(t, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, cr === null) {
      if (t === null) throw Error(i(308));
      cr = n, t.dependencies = { lanes: 0, firstContext: n }, t.flags |= 524288;
    } else cr = cr.next = n;
    return r;
  }
  var jS = typeof AbortController < "u" ? AbortController : function() {
    var t = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, t.forEach(function(r) {
        return r();
      });
    };
  }, BS = e.unstable_scheduleCallback, _S = e.unstable_NormalPriority, fn = {
    $$typeof: O,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Od() {
    return {
      controller: new jS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function il(t) {
    t.refCount--, t.refCount === 0 && BS(_S, function() {
      t.controller.abort();
    });
  }
  var ll = null, zd = 0, ti = 0, ni = null;
  function HS(t, n) {
    if (ll === null) {
      var r = ll = [];
      zd = 0, ti = Nf(), ni = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return zd++, n.then(Gh, Gh), n;
  }
  function Gh() {
    if (--zd === 0 && ll !== null) {
      ni !== null && (ni.status = "fulfilled");
      var t = ll;
      ll = null, ti = 0, ni = null;
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function US(t, n) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        r.push(u);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var u = 0; u < r.length; u++) (0, r[u])(n);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < r.length; u++)
          (0, r[u])(void 0);
      }
    ), l;
  }
  var qh = N.S;
  N.S = function(t, n) {
    Ay = Ue(), typeof n == "object" && n !== null && typeof n.then == "function" && HS(t, n), qh !== null && qh(t, n);
  };
  var Co = L(null);
  function Dd() {
    var t = Co.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function Fs(t, n) {
    n === null ? re(Co, Co.current) : re(Co, n.pool);
  }
  function Yh() {
    var t = Dd();
    return t === null ? null : { parent: fn._currentValue, pool: t };
  }
  var ai = Error(i(460)), $d = Error(i(474)), Ws = Error(i(542)), Ks = { then: function() {
  } };
  function Fh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Wh(t, n, r) {
    switch (r = t[r], r === void 0 ? t.push(n) : r !== n && (n.then(or, or), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason, Xh(t), t;
      default:
        if (typeof n.status == "string") n.then(or, or);
        else {
          if (t = Ut, t !== null && 100 < t.shellSuspendCounter)
            throw Error(i(482));
          t = n, t.status = "pending", t.then(
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw t = n.reason, Xh(t), t;
        }
        throw To = n, ai;
    }
  }
  function Eo(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (To = r, ai) : r;
    }
  }
  var To = null;
  function Kh() {
    if (To === null) throw Error(i(459));
    var t = To;
    return To = null, t;
  }
  function Xh(t) {
    if (t === ai || t === Ws)
      throw Error(i(483));
  }
  var ri = null, sl = 0;
  function Xs(t) {
    var n = sl;
    return sl += 1, ri === null && (ri = []), Wh(ri, t, n);
  }
  function cl(t, n) {
    n = n.props.ref, t.ref = n !== void 0 ? n : null;
  }
  function Qs(t, n) {
    throw n.$$typeof === x ? Error(i(525)) : (t = Object.prototype.toString.call(n), Error(
      i(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t
      )
    ));
  }
  function Qh(t) {
    function n(q, I) {
      if (t) {
        var X = q.deletions;
        X === null ? (q.deletions = [I], q.flags |= 16) : X.push(I);
      }
    }
    function r(q, I) {
      if (!t) return null;
      for (; I !== null; )
        n(q, I), I = I.sibling;
      return null;
    }
    function l(q) {
      for (var I = /* @__PURE__ */ new Map(); q !== null; )
        q.key !== null ? I.set(q.key, q) : I.set(q.index, q), q = q.sibling;
      return I;
    }
    function u(q, I) {
      return q = lr(q, I), q.index = 0, q.sibling = null, q;
    }
    function f(q, I, X) {
      return q.index = X, t ? (X = q.alternate, X !== null ? (X = X.index, X < I ? (q.flags |= 67108866, I) : X) : (q.flags |= 67108866, I)) : (q.flags |= 1048576, I);
    }
    function b(q) {
      return t && q.alternate === null && (q.flags |= 67108866), q;
    }
    function A(q, I, X, le) {
      return I === null || I.tag !== 6 ? (I = xd(X, q.mode, le), I.return = q, I) : (I = u(I, X), I.return = q, I);
    }
    function _(q, I, X, le) {
      var Ne = X.type;
      return Ne === E ? ne(
        q,
        I,
        X.props.children,
        le,
        X.key
      ) : I !== null && (I.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === U && Eo(Ne) === I.type) ? (I = u(I, X.props), cl(I, X), I.return = q, I) : (I = Vs(
        X.type,
        X.key,
        X.props,
        null,
        q.mode,
        le
      ), cl(I, X), I.return = q, I);
    }
    function Q(q, I, X, le) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== X.containerInfo || I.stateNode.implementation !== X.implementation ? (I = Sd(X, q.mode, le), I.return = q, I) : (I = u(I, X.children || []), I.return = q, I);
    }
    function ne(q, I, X, le, Ne) {
      return I === null || I.tag !== 7 ? (I = vo(
        X,
        q.mode,
        le,
        Ne
      ), I.return = q, I) : (I = u(I, X), I.return = q, I);
    }
    function ce(q, I, X) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return I = xd(
          "" + I,
          q.mode,
          X
        ), I.return = q, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case C:
            return X = Vs(
              I.type,
              I.key,
              I.props,
              null,
              q.mode,
              X
            ), cl(X, I), X.return = q, X;
          case R:
            return I = Sd(
              I,
              q.mode,
              X
            ), I.return = q, I;
          case U:
            return I = Eo(I), ce(q, I, X);
        }
        if (F(I) || H(I))
          return I = vo(
            I,
            q.mode,
            X,
            null
          ), I.return = q, I;
        if (typeof I.then == "function")
          return ce(q, Xs(I), X);
        if (I.$$typeof === O)
          return ce(
            q,
            Ys(q, I),
            X
          );
        Qs(q, I);
      }
      return null;
    }
    function Z(q, I, X, le) {
      var Ne = I !== null ? I.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return Ne !== null ? null : A(q, I, "" + X, le);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case C:
            return X.key === Ne ? _(q, I, X, le) : null;
          case R:
            return X.key === Ne ? Q(q, I, X, le) : null;
          case U:
            return X = Eo(X), Z(q, I, X, le);
        }
        if (F(X) || H(X))
          return Ne !== null ? null : ne(q, I, X, le, null);
        if (typeof X.then == "function")
          return Z(
            q,
            I,
            Xs(X),
            le
          );
        if (X.$$typeof === O)
          return Z(
            q,
            I,
            Ys(q, X),
            le
          );
        Qs(q, X);
      }
      return null;
    }
    function ee(q, I, X, le, Ne) {
      if (typeof le == "string" && le !== "" || typeof le == "number" || typeof le == "bigint")
        return q = q.get(X) || null, A(I, q, "" + le, Ne);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case C:
            return q = q.get(
              le.key === null ? X : le.key
            ) || null, _(I, q, le, Ne);
          case R:
            return q = q.get(
              le.key === null ? X : le.key
            ) || null, Q(I, q, le, Ne);
          case U:
            return le = Eo(le), ee(
              q,
              I,
              X,
              le,
              Ne
            );
        }
        if (F(le) || H(le))
          return q = q.get(X) || null, ne(I, q, le, Ne, null);
        if (typeof le.then == "function")
          return ee(
            q,
            I,
            X,
            Xs(le),
            Ne
          );
        if (le.$$typeof === O)
          return ee(
            q,
            I,
            X,
            Ys(I, le),
            Ne
          );
        Qs(I, le);
      }
      return null;
    }
    function we(q, I, X, le) {
      for (var Ne = null, St = null, Ae = I, at = I = 0, ht = null; Ae !== null && at < X.length; at++) {
        Ae.index > at ? (ht = Ae, Ae = null) : ht = Ae.sibling;
        var Ct = Z(
          q,
          Ae,
          X[at],
          le
        );
        if (Ct === null) {
          Ae === null && (Ae = ht);
          break;
        }
        t && Ae && Ct.alternate === null && n(q, Ae), I = f(Ct, I, at), St === null ? Ne = Ct : St.sibling = Ct, St = Ct, Ae = ht;
      }
      if (at === X.length)
        return r(q, Ae), yt && sr(q, at), Ne;
      if (Ae === null) {
        for (; at < X.length; at++)
          Ae = ce(q, X[at], le), Ae !== null && (I = f(
            Ae,
            I,
            at
          ), St === null ? Ne = Ae : St.sibling = Ae, St = Ae);
        return yt && sr(q, at), Ne;
      }
      for (Ae = l(Ae); at < X.length; at++)
        ht = ee(
          Ae,
          q,
          at,
          X[at],
          le
        ), ht !== null && (t && ht.alternate !== null && Ae.delete(
          ht.key === null ? at : ht.key
        ), I = f(
          ht,
          I,
          at
        ), St === null ? Ne = ht : St.sibling = ht, St = ht);
      return t && Ae.forEach(function(Zr) {
        return n(q, Zr);
      }), yt && sr(q, at), Ne;
    }
    function Pe(q, I, X, le) {
      if (X == null) throw Error(i(151));
      for (var Ne = null, St = null, Ae = I, at = I = 0, ht = null, Ct = X.next(); Ae !== null && !Ct.done; at++, Ct = X.next()) {
        Ae.index > at ? (ht = Ae, Ae = null) : ht = Ae.sibling;
        var Zr = Z(q, Ae, Ct.value, le);
        if (Zr === null) {
          Ae === null && (Ae = ht);
          break;
        }
        t && Ae && Zr.alternate === null && n(q, Ae), I = f(Zr, I, at), St === null ? Ne = Zr : St.sibling = Zr, St = Zr, Ae = ht;
      }
      if (Ct.done)
        return r(q, Ae), yt && sr(q, at), Ne;
      if (Ae === null) {
        for (; !Ct.done; at++, Ct = X.next())
          Ct = ce(q, Ct.value, le), Ct !== null && (I = f(Ct, I, at), St === null ? Ne = Ct : St.sibling = Ct, St = Ct);
        return yt && sr(q, at), Ne;
      }
      for (Ae = l(Ae); !Ct.done; at++, Ct = X.next())
        Ct = ee(Ae, q, at, Ct.value, le), Ct !== null && (t && Ct.alternate !== null && Ae.delete(Ct.key === null ? at : Ct.key), I = f(Ct, I, at), St === null ? Ne = Ct : St.sibling = Ct, St = Ct);
      return t && Ae.forEach(function(QC) {
        return n(q, QC);
      }), yt && sr(q, at), Ne;
    }
    function Lt(q, I, X, le) {
      if (typeof X == "object" && X !== null && X.type === E && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case C:
            e: {
              for (var Ne = X.key; I !== null; ) {
                if (I.key === Ne) {
                  if (Ne = X.type, Ne === E) {
                    if (I.tag === 7) {
                      r(
                        q,
                        I.sibling
                      ), le = u(
                        I,
                        X.props.children
                      ), le.return = q, q = le;
                      break e;
                    }
                  } else if (I.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === U && Eo(Ne) === I.type) {
                    r(
                      q,
                      I.sibling
                    ), le = u(I, X.props), cl(le, X), le.return = q, q = le;
                    break e;
                  }
                  r(q, I);
                  break;
                } else n(q, I);
                I = I.sibling;
              }
              X.type === E ? (le = vo(
                X.props.children,
                q.mode,
                le,
                X.key
              ), le.return = q, q = le) : (le = Vs(
                X.type,
                X.key,
                X.props,
                null,
                q.mode,
                le
              ), cl(le, X), le.return = q, q = le);
            }
            return b(q);
          case R:
            e: {
              for (Ne = X.key; I !== null; ) {
                if (I.key === Ne)
                  if (I.tag === 4 && I.stateNode.containerInfo === X.containerInfo && I.stateNode.implementation === X.implementation) {
                    r(
                      q,
                      I.sibling
                    ), le = u(I, X.children || []), le.return = q, q = le;
                    break e;
                  } else {
                    r(q, I);
                    break;
                  }
                else n(q, I);
                I = I.sibling;
              }
              le = Sd(X, q.mode, le), le.return = q, q = le;
            }
            return b(q);
          case U:
            return X = Eo(X), Lt(
              q,
              I,
              X,
              le
            );
        }
        if (F(X))
          return we(
            q,
            I,
            X,
            le
          );
        if (H(X)) {
          if (Ne = H(X), typeof Ne != "function") throw Error(i(150));
          return X = Ne.call(X), Pe(
            q,
            I,
            X,
            le
          );
        }
        if (typeof X.then == "function")
          return Lt(
            q,
            I,
            Xs(X),
            le
          );
        if (X.$$typeof === O)
          return Lt(
            q,
            I,
            Ys(q, X),
            le
          );
        Qs(q, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, I !== null && I.tag === 6 ? (r(q, I.sibling), le = u(I, X), le.return = q, q = le) : (r(q, I), le = xd(X, q.mode, le), le.return = q, q = le), b(q)) : r(q, I);
    }
    return function(q, I, X, le) {
      try {
        sl = 0;
        var Ne = Lt(
          q,
          I,
          X,
          le
        );
        return ri = null, Ne;
      } catch (Ae) {
        if (Ae === ai || Ae === Ws) throw Ae;
        var St = ea(29, Ae, null, q.mode);
        return St.lanes = le, St.return = q, St;
      } finally {
      }
    };
  }
  var Ro = Qh(!0), Zh = Qh(!1), Lr = !1;
  function kd(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nd(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function jr(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Br(t, n, r) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Tt & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = Ps(t), Lh(t, null, r), n;
    }
    return Is(t, l, n, r), Ps(t);
  }
  function ul(t, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= t.pendingLanes, r |= l, n.lanes = r, ot(t, r);
    }
  }
  function Ld(t, n) {
    var r = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var u = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var b = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = b : f = f.next = b, r = r.next;
        } while (r !== null);
        f === null ? u = f = n : f = f.next = n;
      } else u = f = n;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = r;
      return;
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = n : t.next = n, r.lastBaseUpdate = n;
  }
  var jd = !1;
  function dl() {
    if (jd) {
      var t = ni;
      if (t !== null) throw t;
    }
  }
  function fl(t, n, r, l) {
    jd = !1;
    var u = t.updateQueue;
    Lr = !1;
    var f = u.firstBaseUpdate, b = u.lastBaseUpdate, A = u.shared.pending;
    if (A !== null) {
      u.shared.pending = null;
      var _ = A, Q = _.next;
      _.next = null, b === null ? f = Q : b.next = Q, b = _;
      var ne = t.alternate;
      ne !== null && (ne = ne.updateQueue, A = ne.lastBaseUpdate, A !== b && (A === null ? ne.firstBaseUpdate = Q : A.next = Q, ne.lastBaseUpdate = _));
    }
    if (f !== null) {
      var ce = u.baseState;
      b = 0, ne = Q = _ = null, A = f;
      do {
        var Z = A.lane & -536870913, ee = Z !== A.lane;
        if (ee ? (mt & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ti && (jd = !0), ne !== null && (ne = ne.next = {
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: null,
            next: null
          });
          e: {
            var we = t, Pe = A;
            Z = n;
            var Lt = r;
            switch (Pe.tag) {
              case 1:
                if (we = Pe.payload, typeof we == "function") {
                  ce = we.call(Lt, ce, Z);
                  break e;
                }
                ce = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Pe.payload, Z = typeof we == "function" ? we.call(Lt, ce, Z) : we, Z == null) break e;
                ce = y({}, ce, Z);
                break e;
              case 2:
                Lr = !0;
            }
          }
          Z = A.callback, Z !== null && (t.flags |= 64, ee && (t.flags |= 8192), ee = u.callbacks, ee === null ? u.callbacks = [Z] : ee.push(Z));
        } else
          ee = {
            lane: Z,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          }, ne === null ? (Q = ne = ee, _ = ce) : ne = ne.next = ee, b |= Z;
        if (A = A.next, A === null) {
          if (A = u.shared.pending, A === null)
            break;
          ee = A, A = ee.next, ee.next = null, u.lastBaseUpdate = ee, u.shared.pending = null;
        }
      } while (!0);
      ne === null && (_ = ce), u.baseState = _, u.firstBaseUpdate = Q, u.lastBaseUpdate = ne, f === null && (u.shared.lanes = 0), Pr |= b, t.lanes = b, t.memoizedState = ce;
    }
  }
  function Jh(t, n) {
    if (typeof t != "function")
      throw Error(i(191, t));
    t.call(n);
  }
  function eg(t, n) {
    var r = t.callbacks;
    if (r !== null)
      for (t.callbacks = null, t = 0; t < r.length; t++)
        Jh(r[t], n);
  }
  var oi = L(null), Zs = L(0);
  function tg(t, n) {
    t = br, re(Zs, t), re(oi, n), br = t | n.baseLanes;
  }
  function Bd() {
    re(Zs, br), re(oi, oi.current);
  }
  function _d() {
    br = Zs.current, W(oi), W(Zs);
  }
  var ta = L(null), xa = null;
  function _r(t) {
    var n = t.alternate;
    re(sn, sn.current & 1), re(ta, t), xa === null && (n === null || oi.current !== null || n.memoizedState !== null) && (xa = t);
  }
  function Hd(t) {
    re(sn, sn.current), re(ta, t), xa === null && (xa = t);
  }
  function ng(t) {
    t.tag === 22 ? (re(sn, sn.current), re(ta, t), xa === null && (xa = t)) : Hr();
  }
  function Hr() {
    re(sn, sn.current), re(ta, ta.current);
  }
  function na(t) {
    W(ta), xa === t && (xa = null), W(sn);
  }
  var sn = L(0);
  function Js(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Yf(r) || Ff(r)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var dr = 0, tt = null, kt = null, pn = null, ec = !1, ii = !1, wo = !1, tc = 0, pl = 0, li = null, IS = 0;
  function Zt() {
    throw Error(i(321));
  }
  function Ud(t, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < t.length; r++)
      if (!Jn(t[r], n[r])) return !1;
    return !0;
  }
  function Id(t, n, r, l, u, f) {
    return dr = f, tt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, N.H = t === null || t.memoizedState === null ? Hg : nf, wo = !1, f = r(l, u), wo = !1, ii && (f = rg(
      n,
      r,
      l,
      u
    )), ag(t), f;
  }
  function ag(t) {
    N.H = gl;
    var n = kt !== null && kt.next !== null;
    if (dr = 0, pn = kt = tt = null, ec = !1, pl = 0, li = null, n) throw Error(i(300));
    t === null || mn || (t = t.dependencies, t !== null && qs(t) && (mn = !0));
  }
  function rg(t, n, r, l) {
    tt = t;
    var u = 0;
    do {
      if (ii && (li = null), pl = 0, ii = !1, 25 <= u) throw Error(i(301));
      if (u += 1, pn = kt = null, t.updateQueue != null) {
        var f = t.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      N.H = Ug, f = n(r, l);
    } while (ii);
    return f;
  }
  function PS() {
    var t = N.H, n = t.useState()[0];
    return n = typeof n.then == "function" ? ml(n) : n, t = t.useState()[0], (kt !== null ? kt.memoizedState : null) !== t && (tt.flags |= 1024), n;
  }
  function Pd() {
    var t = tc !== 0;
    return tc = 0, t;
  }
  function Vd(t, n, r) {
    n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~r;
  }
  function Gd(t) {
    if (ec) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), t = t.next;
      }
      ec = !1;
    }
    dr = 0, pn = kt = tt = null, ii = !1, pl = tc = 0, li = null;
  }
  function Hn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pn === null ? tt.memoizedState = pn = t : pn = pn.next = t, pn;
  }
  function cn() {
    if (kt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = kt.next;
    var n = pn === null ? tt.memoizedState : pn.next;
    if (n !== null)
      pn = n, kt = t;
    else {
      if (t === null)
        throw tt.alternate === null ? Error(i(467)) : Error(i(310));
      kt = t, t = {
        memoizedState: kt.memoizedState,
        baseState: kt.baseState,
        baseQueue: kt.baseQueue,
        queue: kt.queue,
        next: null
      }, pn === null ? tt.memoizedState = pn = t : pn = pn.next = t;
    }
    return pn;
  }
  function nc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ml(t) {
    var n = pl;
    return pl += 1, li === null && (li = []), t = Wh(li, t, n), n = tt, (pn === null ? n.memoizedState : pn.next) === null && (n = n.alternate, N.H = n === null || n.memoizedState === null ? Hg : nf), t;
  }
  function ac(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ml(t);
      if (t.$$typeof === O) return Mn(t);
    }
    throw Error(i(438, String(t)));
  }
  function qd(t) {
    var n = null, r = tt.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var l = tt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = nc(), tt.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(t), l = 0; l < t; l++)
        r[l] = S;
    return n.index++, r;
  }
  function fr(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function rc(t) {
    var n = cn();
    return Yd(n, kt, t);
  }
  function Yd(t, n, r) {
    var l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = r;
    var u = t.baseQueue, f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var b = u.next;
        u.next = f.next, f.next = b;
      }
      n.baseQueue = u = f, l.pending = null;
    }
    if (f = t.baseState, u === null) t.memoizedState = f;
    else {
      n = u.next;
      var A = b = null, _ = null, Q = n, ne = !1;
      do {
        var ce = Q.lane & -536870913;
        if (ce !== Q.lane ? (mt & ce) === ce : (dr & ce) === ce) {
          var Z = Q.revertLane;
          if (Z === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), ce === ti && (ne = !0);
          else if ((dr & Z) === Z) {
            Q = Q.next, Z === ti && (ne = !0);
            continue;
          } else
            ce = {
              lane: 0,
              revertLane: Q.revertLane,
              gesture: null,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, _ === null ? (A = _ = ce, b = f) : _ = _.next = ce, tt.lanes |= Z, Pr |= Z;
          ce = Q.action, wo && r(f, ce), f = Q.hasEagerState ? Q.eagerState : r(f, ce);
        } else
          Z = {
            lane: ce,
            revertLane: Q.revertLane,
            gesture: Q.gesture,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, _ === null ? (A = _ = Z, b = f) : _ = _.next = Z, tt.lanes |= ce, Pr |= ce;
        Q = Q.next;
      } while (Q !== null && Q !== n);
      if (_ === null ? b = f : _.next = A, !Jn(f, t.memoizedState) && (mn = !0, ne && (r = ni, r !== null)))
        throw r;
      t.memoizedState = f, t.baseState = b, t.baseQueue = _, l.lastRenderedState = f;
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Fd(t) {
    var n = cn(), r = n.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = t;
    var l = r.dispatch, u = r.pending, f = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var b = u = u.next;
      do
        f = t(f, b.action), b = b.next;
      while (b !== u);
      Jn(f, n.memoizedState) || (mn = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), r.lastRenderedState = f;
    }
    return [f, l];
  }
  function og(t, n, r) {
    var l = tt, u = cn(), f = yt;
    if (f) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = n();
    var b = !Jn(
      (kt || u).memoizedState,
      r
    );
    if (b && (u.memoizedState = r, mn = !0), u = u.queue, Xd(sg.bind(null, l, u, t), [
      t
    ]), u.getSnapshot !== n || b || pn !== null && pn.memoizedState.tag & 1) {
      if (l.flags |= 2048, si(
        9,
        { destroy: void 0 },
        lg.bind(
          null,
          l,
          u,
          r,
          n
        ),
        null
      ), Ut === null) throw Error(i(349));
      f || (dr & 127) !== 0 || ig(l, n, r);
    }
    return r;
  }
  function ig(t, n, r) {
    t.flags |= 16384, t = { getSnapshot: n, value: r }, n = tt.updateQueue, n === null ? (n = nc(), tt.updateQueue = n, n.stores = [t]) : (r = n.stores, r === null ? n.stores = [t] : r.push(t));
  }
  function lg(t, n, r, l) {
    n.value = r, n.getSnapshot = l, cg(n) && ug(t);
  }
  function sg(t, n, r) {
    return r(function() {
      cg(n) && ug(t);
    });
  }
  function cg(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var r = n();
      return !Jn(t, r);
    } catch {
      return !0;
    }
  }
  function ug(t) {
    var n = yo(t, 2);
    n !== null && Yn(n, t, 2);
  }
  function Wd(t) {
    var n = Hn();
    if (typeof t == "function") {
      var r = t;
      if (t = r(), wo) {
        xe(!0);
        try {
          r();
        } finally {
          xe(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = t, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: t
    }, n;
  }
  function dg(t, n, r, l) {
    return t.baseState = r, Yd(
      t,
      kt,
      typeof l == "function" ? l : fr
    );
  }
  function VS(t, n, r, l, u) {
    if (lc(t)) throw Error(i(485));
    if (t = n.action, t !== null) {
      var f = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          f.listeners.push(b);
        }
      };
      N.T !== null ? r(!0) : f.isTransition = !1, l(f), r = n.pending, r === null ? (f.next = n.pending = f, fg(n, f)) : (f.next = r.next, n.pending = r.next = f);
    }
  }
  function fg(t, n) {
    var r = n.action, l = n.payload, u = t.state;
    if (n.isTransition) {
      var f = N.T, b = {};
      N.T = b;
      try {
        var A = r(u, l), _ = N.S;
        _ !== null && _(b, A), pg(t, n, A);
      } catch (Q) {
        Kd(t, n, Q);
      } finally {
        f !== null && b.types !== null && (f.types = b.types), N.T = f;
      }
    } else
      try {
        f = r(u, l), pg(t, n, f);
      } catch (Q) {
        Kd(t, n, Q);
      }
  }
  function pg(t, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        mg(t, n, l);
      },
      function(l) {
        return Kd(t, n, l);
      }
    ) : mg(t, n, r);
  }
  function mg(t, n, r) {
    n.status = "fulfilled", n.value = r, hg(n), t.state = r, n = t.pending, n !== null && (r = n.next, r === n ? t.pending = null : (r = r.next, n.next = r, fg(t, r)));
  }
  function Kd(t, n, r) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, hg(n), n = n.next;
      while (n !== l);
    }
    t.action = null;
  }
  function hg(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function gg(t, n) {
    return n;
  }
  function yg(t, n) {
    if (yt) {
      var r = Ut.formState;
      if (r !== null) {
        e: {
          var l = tt;
          if (yt) {
            if (Gt) {
              t: {
                for (var u = Gt, f = ba; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = Sa(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                Gt = Sa(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            kr(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = Hn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gg,
      lastRenderedState: n
    }, r.queue = l, r = jg.bind(
      null,
      tt,
      l
    ), l.dispatch = r, l = Wd(!1), f = tf.bind(
      null,
      tt,
      !1,
      l.queue
    ), l = Hn(), u = {
      state: n,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = u, r = VS.bind(
      null,
      tt,
      u,
      f,
      r
    ), u.dispatch = r, l.memoizedState = t, [n, r, !1];
  }
  function vg(t) {
    var n = cn();
    return bg(n, kt, t);
  }
  function bg(t, n, r) {
    if (n = Yd(
      t,
      n,
      gg
    )[0], t = rc(fr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = ml(n);
      } catch (b) {
        throw b === ai ? Ws : b;
      }
    else l = n;
    n = cn();
    var u = n.queue, f = u.dispatch;
    return r !== n.memoizedState && (tt.flags |= 2048, si(
      9,
      { destroy: void 0 },
      GS.bind(null, u, r),
      null
    )), [l, f, t];
  }
  function GS(t, n) {
    t.action = n;
  }
  function xg(t) {
    var n = cn(), r = kt;
    if (r !== null)
      return bg(n, r, t);
    cn(), n = n.memoizedState, r = cn();
    var l = r.queue.dispatch;
    return r.memoizedState = t, [n, l, !1];
  }
  function si(t, n, r, l) {
    return t = { tag: t, create: r, deps: l, inst: n, next: null }, n = tt.updateQueue, n === null && (n = nc(), tt.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = t.next = t : (l = r.next, r.next = t, t.next = l, n.lastEffect = t), t;
  }
  function Sg() {
    return cn().memoizedState;
  }
  function oc(t, n, r, l) {
    var u = Hn();
    tt.flags |= t, u.memoizedState = si(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function ic(t, n, r, l) {
    var u = cn();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    kt !== null && l !== null && Ud(l, kt.memoizedState.deps) ? u.memoizedState = si(n, f, r, l) : (tt.flags |= t, u.memoizedState = si(
      1 | n,
      f,
      r,
      l
    ));
  }
  function Cg(t, n) {
    oc(8390656, 8, t, n);
  }
  function Xd(t, n) {
    ic(2048, 8, t, n);
  }
  function qS(t) {
    tt.flags |= 4;
    var n = tt.updateQueue;
    if (n === null)
      n = nc(), tt.updateQueue = n, n.events = [t];
    else {
      var r = n.events;
      r === null ? n.events = [t] : r.push(t);
    }
  }
  function Eg(t) {
    var n = cn().memoizedState;
    return qS({ ref: n, nextImpl: t }), function() {
      if ((Tt & 2) !== 0) throw Error(i(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Tg(t, n) {
    return ic(4, 2, t, n);
  }
  function Rg(t, n) {
    return ic(4, 4, t, n);
  }
  function wg(t, n) {
    if (typeof n == "function") {
      t = t();
      var r = n(t);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return t = t(), n.current = t, function() {
        n.current = null;
      };
  }
  function Mg(t, n, r) {
    r = r != null ? r.concat([t]) : null, ic(4, 4, wg.bind(null, n, t), r);
  }
  function Qd() {
  }
  function Ag(t, n) {
    var r = cn();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Ud(n, l[1]) ? l[0] : (r.memoizedState = [t, n], t);
  }
  function Og(t, n) {
    var r = cn();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Ud(n, l[1]))
      return l[0];
    if (l = t(), wo) {
      xe(!0);
      try {
        t();
      } finally {
        xe(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Zd(t, n, r) {
    return r === void 0 || (dr & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = r, t = zy(), tt.lanes |= t, Pr |= t, r);
  }
  function zg(t, n, r, l) {
    return Jn(r, n) ? r : oi.current !== null ? (t = Zd(t, r, l), Jn(t, n) || (mn = !0), t) : (dr & 42) === 0 || (dr & 1073741824) !== 0 && (mt & 261930) === 0 ? (mn = !0, t.memoizedState = r) : (t = zy(), tt.lanes |= t, Pr |= t, n);
  }
  function Dg(t, n, r, l, u) {
    var f = V.p;
    V.p = f !== 0 && 8 > f ? f : 8;
    var b = N.T, A = {};
    N.T = A, tf(t, !1, n, r);
    try {
      var _ = u(), Q = N.S;
      if (Q !== null && Q(A, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var ne = US(
          _,
          l
        );
        hl(
          t,
          n,
          ne,
          oa(t)
        );
      } else
        hl(
          t,
          n,
          l,
          oa(t)
        );
    } catch (ce) {
      hl(
        t,
        n,
        { then: function() {
        }, status: "rejected", reason: ce },
        oa()
      );
    } finally {
      V.p = f, b !== null && A.types !== null && (b.types = A.types), N.T = b;
    }
  }
  function YS() {
  }
  function Jd(t, n, r, l) {
    if (t.tag !== 5) throw Error(i(476));
    var u = $g(t).queue;
    Dg(
      t,
      u,
      n,
      K,
      r === null ? YS : function() {
        return kg(t), r(l);
      }
    );
  }
  function $g(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: K
      },
      next: null
    };
    var r = {};
    return n.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: r
      },
      next: null
    }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n;
  }
  function kg(t) {
    var n = $g(t);
    n.next === null && (n = t.alternate.memoizedState), hl(
      t,
      n.next.queue,
      {},
      oa()
    );
  }
  function ef() {
    return Mn($l);
  }
  function Ng() {
    return cn().memoizedState;
  }
  function Lg() {
    return cn().memoizedState;
  }
  function FS(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = oa();
          t = jr(r);
          var l = Br(n, t, r);
          l !== null && (Yn(l, n, r), ul(l, n, r)), n = { cache: Od() }, t.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function WS(t, n, r) {
    var l = oa();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lc(t) ? Bg(n, r) : (r = vd(t, n, r, l), r !== null && (Yn(r, t, l), _g(r, n, l)));
  }
  function jg(t, n, r) {
    var l = oa();
    hl(t, n, r, l);
  }
  function hl(t, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (lc(t)) Bg(n, u);
    else {
      var f = t.alternate;
      if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null))
        try {
          var b = n.lastRenderedState, A = f(b, r);
          if (u.hasEagerState = !0, u.eagerState = A, Jn(A, b))
            return Is(t, n, u, 0), Ut === null && Us(), !1;
        } catch {
        } finally {
        }
      if (r = vd(t, n, u, l), r !== null)
        return Yn(r, t, l), _g(r, n, l), !0;
    }
    return !1;
  }
  function tf(t, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: Nf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lc(t)) {
      if (n) throw Error(i(479));
    } else
      n = vd(
        t,
        r,
        l,
        2
      ), n !== null && Yn(n, t, 2);
  }
  function lc(t) {
    var n = t.alternate;
    return t === tt || n !== null && n === tt;
  }
  function Bg(t, n) {
    ii = ec = !0;
    var r = t.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), t.pending = n;
  }
  function _g(t, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= t.pendingLanes, r |= l, n.lanes = r, ot(t, r);
    }
  }
  var gl = {
    readContext: Mn,
    use: ac,
    useCallback: Zt,
    useContext: Zt,
    useEffect: Zt,
    useImperativeHandle: Zt,
    useLayoutEffect: Zt,
    useInsertionEffect: Zt,
    useMemo: Zt,
    useReducer: Zt,
    useRef: Zt,
    useState: Zt,
    useDebugValue: Zt,
    useDeferredValue: Zt,
    useTransition: Zt,
    useSyncExternalStore: Zt,
    useId: Zt,
    useHostTransitionStatus: Zt,
    useFormState: Zt,
    useActionState: Zt,
    useOptimistic: Zt,
    useMemoCache: Zt,
    useCacheRefresh: Zt
  };
  gl.useEffectEvent = Zt;
  var Hg = {
    readContext: Mn,
    use: ac,
    useCallback: function(t, n) {
      return Hn().memoizedState = [
        t,
        n === void 0 ? null : n
      ], t;
    },
    useContext: Mn,
    useEffect: Cg,
    useImperativeHandle: function(t, n, r) {
      r = r != null ? r.concat([t]) : null, oc(
        4194308,
        4,
        wg.bind(null, n, t),
        r
      );
    },
    useLayoutEffect: function(t, n) {
      return oc(4194308, 4, t, n);
    },
    useInsertionEffect: function(t, n) {
      oc(4, 2, t, n);
    },
    useMemo: function(t, n) {
      var r = Hn();
      n = n === void 0 ? null : n;
      var l = t();
      if (wo) {
        xe(!0);
        try {
          t();
        } finally {
          xe(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(t, n, r) {
      var l = Hn();
      if (r !== void 0) {
        var u = r(n);
        if (wo) {
          xe(!0);
          try {
            r(n);
          } finally {
            xe(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, l.queue = t, t = t.dispatch = WS.bind(
        null,
        tt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var n = Hn();
      return t = { current: t }, n.memoizedState = t;
    },
    useState: function(t) {
      t = Wd(t);
      var n = t.queue, r = jg.bind(null, tt, n);
      return n.dispatch = r, [t.memoizedState, r];
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, n) {
      var r = Hn();
      return Zd(r, t, n);
    },
    useTransition: function() {
      var t = Wd(!1);
      return t = Dg.bind(
        null,
        tt,
        t.queue,
        !0,
        !1
      ), Hn().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, n, r) {
      var l = tt, u = Hn();
      if (yt) {
        if (r === void 0)
          throw Error(i(407));
        r = r();
      } else {
        if (r = n(), Ut === null)
          throw Error(i(349));
        (mt & 127) !== 0 || ig(l, n, r);
      }
      u.memoizedState = r;
      var f = { value: r, getSnapshot: n };
      return u.queue = f, Cg(sg.bind(null, l, f, t), [
        t
      ]), l.flags |= 2048, si(
        9,
        { destroy: void 0 },
        lg.bind(
          null,
          l,
          f,
          r,
          n
        ),
        null
      ), r;
    },
    useId: function() {
      var t = Hn(), n = Ut.identifierPrefix;
      if (yt) {
        var r = Ga, l = Va;
        r = (l & ~(1 << 32 - $e(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = tc++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = IS++, n = "_" + n + "r_" + r.toString(32) + "_";
      return t.memoizedState = n;
    },
    useHostTransitionStatus: ef,
    useFormState: yg,
    useActionState: yg,
    useOptimistic: function(t) {
      var n = Hn();
      n.memoizedState = n.baseState = t;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = tf.bind(
        null,
        tt,
        !0,
        r
      ), r.dispatch = n, [t, n];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return Hn().memoizedState = FS.bind(
        null,
        tt
      );
    },
    useEffectEvent: function(t) {
      var n = Hn(), r = { impl: t };
      return n.memoizedState = r, function() {
        if ((Tt & 2) !== 0)
          throw Error(i(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, nf = {
    readContext: Mn,
    use: ac,
    useCallback: Ag,
    useContext: Mn,
    useEffect: Xd,
    useImperativeHandle: Mg,
    useInsertionEffect: Tg,
    useLayoutEffect: Rg,
    useMemo: Og,
    useReducer: rc,
    useRef: Sg,
    useState: function() {
      return rc(fr);
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, n) {
      var r = cn();
      return zg(
        r,
        kt.memoizedState,
        t,
        n
      );
    },
    useTransition: function() {
      var t = rc(fr)[0], n = cn().memoizedState;
      return [
        typeof t == "boolean" ? t : ml(t),
        n
      ];
    },
    useSyncExternalStore: og,
    useId: Ng,
    useHostTransitionStatus: ef,
    useFormState: vg,
    useActionState: vg,
    useOptimistic: function(t, n) {
      var r = cn();
      return dg(r, kt, t, n);
    },
    useMemoCache: qd,
    useCacheRefresh: Lg
  };
  nf.useEffectEvent = Eg;
  var Ug = {
    readContext: Mn,
    use: ac,
    useCallback: Ag,
    useContext: Mn,
    useEffect: Xd,
    useImperativeHandle: Mg,
    useInsertionEffect: Tg,
    useLayoutEffect: Rg,
    useMemo: Og,
    useReducer: Fd,
    useRef: Sg,
    useState: function() {
      return Fd(fr);
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, n) {
      var r = cn();
      return kt === null ? Zd(r, t, n) : zg(
        r,
        kt.memoizedState,
        t,
        n
      );
    },
    useTransition: function() {
      var t = Fd(fr)[0], n = cn().memoizedState;
      return [
        typeof t == "boolean" ? t : ml(t),
        n
      ];
    },
    useSyncExternalStore: og,
    useId: Ng,
    useHostTransitionStatus: ef,
    useFormState: xg,
    useActionState: xg,
    useOptimistic: function(t, n) {
      var r = cn();
      return kt !== null ? dg(r, kt, t, n) : (r.baseState = t, [t, r.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: Lg
  };
  Ug.useEffectEvent = Eg;
  function af(t, n, r, l) {
    n = t.memoizedState, r = r(l, n), r = r == null ? n : y({}, n, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var rf = {
    enqueueSetState: function(t, n, r) {
      t = t._reactInternals;
      var l = oa(), u = jr(l);
      u.payload = n, r != null && (u.callback = r), n = Br(t, u, l), n !== null && (Yn(n, t, l), ul(n, t, l));
    },
    enqueueReplaceState: function(t, n, r) {
      t = t._reactInternals;
      var l = oa(), u = jr(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = Br(t, u, l), n !== null && (Yn(n, t, l), ul(n, t, l));
    },
    enqueueForceUpdate: function(t, n) {
      t = t._reactInternals;
      var r = oa(), l = jr(r);
      l.tag = 2, n != null && (l.callback = n), n = Br(t, l, r), n !== null && (Yn(n, t, r), ul(n, t, r));
    }
  };
  function Ig(t, n, r, l, u, f, b) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, f, b) : n.prototype && n.prototype.isPureReactComponent ? !nl(r, l) || !nl(u, f) : !0;
  }
  function Pg(t, n, r, l) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== t && rf.enqueueReplaceState(n, n.state, null);
  }
  function Mo(t, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (t = t.defaultProps) {
      r === n && (r = y({}, r));
      for (var u in t)
        r[u] === void 0 && (r[u] = t[u]);
    }
    return r;
  }
  function Vg(t) {
    Hs(t);
  }
  function Gg(t) {
    console.error(t);
  }
  function qg(t) {
    Hs(t);
  }
  function sc(t, n) {
    try {
      var r = t.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Yg(t, n, r) {
    try {
      var l = t.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function of(t, n, r) {
    return r = jr(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      sc(t, n);
    }, r;
  }
  function Fg(t) {
    return t = jr(t), t.tag = 3, t;
  }
  function Wg(t, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      t.payload = function() {
        return u(f);
      }, t.callback = function() {
        Yg(n, r, l);
      };
    }
    var b = r.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (t.callback = function() {
      Yg(n, r, l), typeof u != "function" && (Vr === null ? Vr = /* @__PURE__ */ new Set([this]) : Vr.add(this));
      var A = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: A !== null ? A : ""
      });
    });
  }
  function KS(t, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && ei(
        n,
        r,
        u,
        !0
      ), r = ta.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return xa === null ? xc() : r.alternate === null && Jt === 0 && (Jt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === Ks ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Df(t, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === Ks ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), Df(t, l, u)), !1;
        }
        throw Error(i(435, r.tag));
      }
      return Df(t, l, u), xc(), !1;
    }
    if (yt)
      return n = ta.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== Td && (t = Error(i(422), { cause: l }), ol(ga(t, r)))) : (l !== Td && (n = Error(i(423), {
        cause: l
      }), ol(
        ga(n, r)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = ga(l, r), u = of(
        t.stateNode,
        l,
        u
      ), Ld(t, u), Jt !== 4 && (Jt = 2)), !1;
    var f = Error(i(520), { cause: l });
    if (f = ga(f, r), Tl === null ? Tl = [f] : Tl.push(f), Jt !== 4 && (Jt = 2), n === null) return !0;
    l = ga(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, t = u & -u, r.lanes |= t, t = of(r.stateNode, l, t), Ld(r, t), !1;
        case 1:
          if (n = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Vr === null || !Vr.has(f))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = Fg(u), Wg(
              u,
              t,
              r,
              l
            ), Ld(r, u), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var lf = Error(i(461)), mn = !1;
  function An(t, n, r, l) {
    n.child = t === null ? Zh(n, null, r, l) : Ro(
      n,
      t.child,
      r,
      l
    );
  }
  function Kg(t, n, r, l, u) {
    r = r.render;
    var f = n.ref;
    if ("ref" in l) {
      var b = {};
      for (var A in l)
        A !== "ref" && (b[A] = l[A]);
    } else b = l;
    return So(n), l = Id(
      t,
      n,
      r,
      b,
      f,
      u
    ), A = Pd(), t !== null && !mn ? (Vd(t, n, u), pr(t, n, u)) : (yt && A && Cd(n), n.flags |= 1, An(t, n, l, u), n.child);
  }
  function Xg(t, n, r, l, u) {
    if (t === null) {
      var f = r.type;
      return typeof f == "function" && !bd(f) && f.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = f, Qg(
        t,
        n,
        f,
        l,
        u
      )) : (t = Vs(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (f = t.child, !hf(t, u)) {
      var b = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : nl, r(b, l) && t.ref === n.ref)
        return pr(t, n, u);
    }
    return n.flags |= 1, t = lr(f, l), t.ref = n.ref, t.return = n, n.child = t;
  }
  function Qg(t, n, r, l, u) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (nl(f, l) && t.ref === n.ref)
        if (mn = !1, n.pendingProps = l = f, hf(t, u))
          (t.flags & 131072) !== 0 && (mn = !0);
        else
          return n.lanes = t.lanes, pr(t, n, u);
    }
    return sf(
      t,
      n,
      r,
      l,
      u
    );
  }
  function Zg(t, n, r, l) {
    var u = l.children, f = t !== null ? t.memoizedState : null;
    if (t === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | r : r, t !== null) {
          for (l = n.child = t.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~f;
        } else l = 0, n.child = null;
        return Jg(
          t,
          n,
          f,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Fs(
          n,
          f !== null ? f.cachePool : null
        ), f !== null ? tg(n, f) : Bd(), ng(n);
      else
        return l = n.lanes = 536870912, Jg(
          t,
          n,
          f !== null ? f.baseLanes | r : r,
          r,
          l
        );
    } else
      f !== null ? (Fs(n, f.cachePool), tg(n, f), Hr(), n.memoizedState = null) : (t !== null && Fs(n, null), Bd(), Hr());
    return An(t, n, u, r), n.child;
  }
  function yl(t, n) {
    return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Jg(t, n, r, l, u) {
    var f = Dd();
    return f = f === null ? null : { parent: fn._currentValue, pool: f }, n.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, t !== null && Fs(n, null), Bd(), ng(n), t !== null && ei(t, n, l, !0), n.childLanes = u, null;
  }
  function cc(t, n) {
    return n = dc(
      { mode: n.mode, children: n.children },
      t.mode
    ), n.ref = t.ref, t.child = n, n.return = t, n;
  }
  function ey(t, n, r) {
    return Ro(n, t.child, null, r), t = cc(n, n.pendingProps), t.flags |= 2, na(n), n.memoizedState = null, t;
  }
  function XS(t, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, t === null) {
      if (yt) {
        if (l.mode === "hidden")
          return t = cc(n, l), n.lanes = 536870912, yl(null, t);
        if (Hd(n), (t = Gt) ? (t = fv(
          t,
          ba
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: Dr !== null ? { id: Va, overflow: Ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Bh(t), r.return = n, n.child = r, wn = n, Gt = null)) : t = null, t === null) throw kr(n);
        return n.lanes = 536870912, null;
      }
      return cc(n, l);
    }
    var f = t.memoizedState;
    if (f !== null) {
      var b = f.dehydrated;
      if (Hd(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = ey(
            t,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = t.child, n.flags |= 128, n = null;
        else throw Error(i(558));
      else if (mn || ei(t, n, r, !1), u = (r & t.childLanes) !== 0, mn || u) {
        if (l = Ut, l !== null && (b = Ot(l, r), b !== 0 && b !== f.retryLane))
          throw f.retryLane = b, yo(t, b), Yn(l, t, b), lf;
        xc(), n = ey(
          t,
          n,
          r
        );
      } else
        t = f.treeContext, Gt = Sa(b.nextSibling), wn = n, yt = !0, $r = null, ba = !1, t !== null && Uh(n, t), n = cc(n, l), n.flags |= 4096;
      return n;
    }
    return t = lr(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = n.ref, n.child = t, t.return = n, t;
  }
  function uc(t, n) {
    var r = n.ref;
    if (r === null)
      t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(i(284));
      (t === null || t.ref !== r) && (n.flags |= 4194816);
    }
  }
  function sf(t, n, r, l, u) {
    return So(n), r = Id(
      t,
      n,
      r,
      l,
      void 0,
      u
    ), l = Pd(), t !== null && !mn ? (Vd(t, n, u), pr(t, n, u)) : (yt && l && Cd(n), n.flags |= 1, An(t, n, r, u), n.child);
  }
  function ty(t, n, r, l, u, f) {
    return So(n), n.updateQueue = null, r = rg(
      n,
      l,
      r,
      u
    ), ag(t), l = Pd(), t !== null && !mn ? (Vd(t, n, f), pr(t, n, f)) : (yt && l && Cd(n), n.flags |= 1, An(t, n, r, f), n.child);
  }
  function ny(t, n, r, l, u) {
    if (So(n), n.stateNode === null) {
      var f = Xo, b = r.contextType;
      typeof b == "object" && b !== null && (f = Mn(b)), f = new r(l, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = rf, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = l, f.state = n.memoizedState, f.refs = {}, kd(n), b = r.contextType, f.context = typeof b == "object" && b !== null ? Mn(b) : Xo, f.state = n.memoizedState, b = r.getDerivedStateFromProps, typeof b == "function" && (af(
        n,
        r,
        b,
        l
      ), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && rf.enqueueReplaceState(f, f.state, null), fl(n, l, f, u), dl(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (t === null) {
      f = n.stateNode;
      var A = n.memoizedProps, _ = Mo(r, A);
      f.props = _;
      var Q = f.context, ne = r.contextType;
      b = Xo, typeof ne == "object" && ne !== null && (b = Mn(ne));
      var ce = r.getDerivedStateFromProps;
      ne = typeof ce == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = n.pendingProps !== A, ne || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || Q !== b) && Pg(
        n,
        f,
        l,
        b
      ), Lr = !1;
      var Z = n.memoizedState;
      f.state = Z, fl(n, l, f, u), dl(), Q = n.memoizedState, A || Z !== Q || Lr ? (typeof ce == "function" && (af(
        n,
        r,
        ce,
        l
      ), Q = n.memoizedState), (_ = Lr || Ig(
        n,
        r,
        _,
        l,
        Z,
        Q,
        b
      )) ? (ne || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = Q), f.props = l, f.state = Q, f.context = b, l = _) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      f = n.stateNode, Nd(t, n), b = n.memoizedProps, ne = Mo(r, b), f.props = ne, ce = n.pendingProps, Z = f.context, Q = r.contextType, _ = Xo, typeof Q == "object" && Q !== null && (_ = Mn(Q)), A = r.getDerivedStateFromProps, (Q = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== ce || Z !== _) && Pg(
        n,
        f,
        l,
        _
      ), Lr = !1, Z = n.memoizedState, f.state = Z, fl(n, l, f, u), dl();
      var ee = n.memoizedState;
      b !== ce || Z !== ee || Lr || t !== null && t.dependencies !== null && qs(t.dependencies) ? (typeof A == "function" && (af(
        n,
        r,
        A,
        l
      ), ee = n.memoizedState), (ne = Lr || Ig(
        n,
        r,
        ne,
        l,
        Z,
        ee,
        _
      ) || t !== null && t.dependencies !== null && qs(t.dependencies)) ? (Q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, ee, _), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        ee,
        _
      )), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === t.memoizedProps && Z === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === t.memoizedProps && Z === t.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = ee), f.props = l, f.state = ee, f.context = _, l = ne) : (typeof f.componentDidUpdate != "function" || b === t.memoizedProps && Z === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === t.memoizedProps && Z === t.memoizedState || (n.flags |= 1024), l = !1);
    }
    return f = l, uc(t, n), l = (n.flags & 128) !== 0, f || l ? (f = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, t !== null && l ? (n.child = Ro(
      n,
      t.child,
      null,
      u
    ), n.child = Ro(
      n,
      null,
      r,
      u
    )) : An(t, n, r, u), n.memoizedState = f.state, t = n.child) : t = pr(
      t,
      n,
      u
    ), t;
  }
  function ay(t, n, r, l) {
    return bo(), n.flags |= 256, An(t, n, r, l), n.child;
  }
  var cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uf(t) {
    return { baseLanes: t, cachePool: Yh() };
  }
  function df(t, n, r) {
    return t = t !== null ? t.childLanes & ~r : 0, n && (t |= ra), t;
  }
  function ry(t, n, r) {
    var l = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, b;
    if ((b = f) || (b = t !== null && t.memoizedState === null ? !1 : (sn.current & 2) !== 0), b && (u = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
      if (yt) {
        if (u ? _r(n) : Hr(), (t = Gt) ? (t = fv(
          t,
          ba
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: Dr !== null ? { id: Va, overflow: Ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Bh(t), r.return = n, n.child = r, wn = n, Gt = null)) : t = null, t === null) throw kr(n);
        return Ff(t) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var A = l.children;
      return l = l.fallback, u ? (Hr(), u = n.mode, A = dc(
        { mode: "hidden", children: A },
        u
      ), l = vo(
        l,
        u,
        r,
        null
      ), A.return = n, l.return = n, A.sibling = l, n.child = A, l = n.child, l.memoizedState = uf(r), l.childLanes = df(
        t,
        b,
        r
      ), n.memoizedState = cf, yl(null, l)) : (_r(n), ff(n, A));
    }
    var _ = t.memoizedState;
    if (_ !== null && (A = _.dehydrated, A !== null)) {
      if (f)
        n.flags & 256 ? (_r(n), n.flags &= -257, n = pf(
          t,
          n,
          r
        )) : n.memoizedState !== null ? (Hr(), n.child = t.child, n.flags |= 128, n = null) : (Hr(), A = l.fallback, u = n.mode, l = dc(
          { mode: "visible", children: l.children },
          u
        ), A = vo(
          A,
          u,
          r,
          null
        ), A.flags |= 2, l.return = n, A.return = n, l.sibling = A, n.child = l, Ro(
          n,
          t.child,
          null,
          r
        ), l = n.child, l.memoizedState = uf(r), l.childLanes = df(
          t,
          b,
          r
        ), n.memoizedState = cf, n = yl(null, l));
      else if (_r(n), Ff(A)) {
        if (b = A.nextSibling && A.nextSibling.dataset, b) var Q = b.dgst;
        b = Q, l = Error(i(419)), l.stack = "", l.digest = b, ol({ value: l, source: null, stack: null }), n = pf(
          t,
          n,
          r
        );
      } else if (mn || ei(t, n, r, !1), b = (r & t.childLanes) !== 0, mn || b) {
        if (b = Ut, b !== null && (l = Ot(b, r), l !== 0 && l !== _.retryLane))
          throw _.retryLane = l, yo(t, l), Yn(b, t, l), lf;
        Yf(A) || xc(), n = pf(
          t,
          n,
          r
        );
      } else
        Yf(A) ? (n.flags |= 192, n.child = t.child, n = null) : (t = _.treeContext, Gt = Sa(
          A.nextSibling
        ), wn = n, yt = !0, $r = null, ba = !1, t !== null && Uh(n, t), n = ff(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return u ? (Hr(), A = l.fallback, u = n.mode, _ = t.child, Q = _.sibling, l = lr(_, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = _.subtreeFlags & 65011712, Q !== null ? A = lr(
      Q,
      A
    ) : (A = vo(
      A,
      u,
      r,
      null
    ), A.flags |= 2), A.return = n, l.return = n, l.sibling = A, n.child = l, yl(null, l), l = n.child, A = t.child.memoizedState, A === null ? A = uf(r) : (u = A.cachePool, u !== null ? (_ = fn._currentValue, u = u.parent !== _ ? { parent: _, pool: _ } : u) : u = Yh(), A = {
      baseLanes: A.baseLanes | r,
      cachePool: u
    }), l.memoizedState = A, l.childLanes = df(
      t,
      b,
      r
    ), n.memoizedState = cf, yl(t.child, l)) : (_r(n), r = t.child, t = r.sibling, r = lr(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, t !== null && (b = n.deletions, b === null ? (n.deletions = [t], n.flags |= 16) : b.push(t)), n.child = r, n.memoizedState = null, r);
  }
  function ff(t, n) {
    return n = dc(
      { mode: "visible", children: n },
      t.mode
    ), n.return = t, t.child = n;
  }
  function dc(t, n) {
    return t = ea(22, t, null, n), t.lanes = 0, t;
  }
  function pf(t, n, r) {
    return Ro(n, t.child, null, r), t = ff(
      n,
      n.pendingProps.children
    ), t.flags |= 2, n.memoizedState = null, t;
  }
  function oy(t, n, r) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n), Md(t.return, n, r);
  }
  function mf(t, n, r, l, u, f) {
    var b = t.memoizedState;
    b === null ? t.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: u,
      treeForkCount: f
    } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = l, b.tail = r, b.tailMode = u, b.treeForkCount = f);
  }
  function iy(t, n, r) {
    var l = n.pendingProps, u = l.revealOrder, f = l.tail;
    l = l.children;
    var b = sn.current, A = (b & 2) !== 0;
    if (A ? (b = b & 1 | 2, n.flags |= 128) : b &= 1, re(sn, b), An(t, n, l, r), l = yt ? rl : 0, !A && t !== null && (t.flags & 128) !== 0)
      e: for (t = n.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && oy(t, r, n);
        else if (t.tag === 19)
          oy(t, r, n);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === n) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n)
            break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (r = n.child, u = null; r !== null; )
          t = r.alternate, t !== null && Js(t) === null && (u = r), r = r.sibling;
        r = u, r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), mf(
          n,
          !1,
          u,
          r,
          f,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, u = n.child, n.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Js(t) === null) {
            n.child = u;
            break;
          }
          t = u.sibling, u.sibling = r, r = u, u = t;
        }
        mf(
          n,
          !0,
          r,
          null,
          f,
          l
        );
        break;
      case "together":
        mf(
          n,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(t, n, r) {
    if (t !== null && (n.dependencies = t.dependencies), Pr |= n.lanes, (r & n.childLanes) === 0)
      if (t !== null) {
        if (ei(
          t,
          n,
          r,
          !1
        ), (r & n.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && n.child !== t.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (t = n.child, r = lr(t, t.pendingProps), n.child = r, r.return = n; t.sibling !== null; )
        t = t.sibling, r = r.sibling = lr(t, t.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function hf(t, n) {
    return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && qs(t)));
  }
  function QS(t, n, r) {
    switch (n.tag) {
      case 3:
        ye(n, n.stateNode.containerInfo), Nr(n, fn, t.memoizedState.cache), bo();
        break;
      case 27:
      case 5:
        Te(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Hd(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (_r(n), n.flags |= 128, null) : (r & n.child.childLanes) !== 0 ? ry(t, n, r) : (_r(n), t = pr(
            t,
            n,
            r
          ), t !== null ? t.sibling : null);
        _r(n);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (l = (r & n.childLanes) !== 0, l || (ei(
          t,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return iy(
              t,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), re(sn, sn.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, Zg(
          t,
          n,
          r,
          n.pendingProps
        );
      case 24:
        Nr(n, fn, t.memoizedState.cache);
    }
    return pr(t, n, r);
  }
  function ly(t, n, r) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps)
        mn = !0;
      else {
        if (!hf(t, r) && (n.flags & 128) === 0)
          return mn = !1, QS(
            t,
            n,
            r
          );
        mn = (t.flags & 131072) !== 0;
      }
    else
      mn = !1, yt && (n.flags & 1048576) !== 0 && Hh(n, rl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (t = Eo(n.elementType), n.type = t, typeof t == "function")
            bd(t) ? (l = Mo(t, l), n.tag = 1, n = ny(
              null,
              n,
              t,
              l,
              r
            )) : (n.tag = 0, n = sf(
              null,
              n,
              t,
              l,
              r
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === D) {
                n.tag = 11, n = Kg(
                  null,
                  n,
                  t,
                  l,
                  r
                );
                break e;
              } else if (u === j) {
                n.tag = 14, n = Xg(
                  null,
                  n,
                  t,
                  l,
                  r
                );
                break e;
              }
            }
            throw n = J(t) || t, Error(i(306, n, ""));
          }
        }
        return n;
      case 0:
        return sf(
          t,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = Mo(
          l,
          n.pendingProps
        ), ny(
          t,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (ye(
            n,
            n.stateNode.containerInfo
          ), t === null) throw Error(i(387));
          l = n.pendingProps;
          var f = n.memoizedState;
          u = f.element, Nd(t, n), fl(n, l, null, r);
          var b = n.memoizedState;
          if (l = b.cache, Nr(n, fn, l), l !== f.cache && Ad(
            n,
            [fn],
            r,
            !0
          ), dl(), l = b.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: b.cache
            }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
              n = ay(
                t,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = ga(
                Error(i(424)),
                n
              ), ol(u), n = ay(
                t,
                n,
                l,
                r
              );
              break e;
            } else {
              switch (t = n.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Gt = Sa(t.firstChild), wn = n, yt = !0, $r = null, ba = !0, r = Zh(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
            }
          else {
            if (bo(), l === u) {
              n = pr(
                t,
                n,
                r
              );
              break e;
            }
            An(t, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return uc(t, n), t === null ? (r = vv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : yt || (r = n.type, t = n.pendingProps, l = Mc(
          se.current
        ).createElement(r), l[pt] = n, l[Vt] = t, On(l, r, t), ln(l), n.stateNode = l) : n.memoizedState = vv(
          n.type,
          t.memoizedProps,
          n.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Te(n), t === null && yt && (l = n.stateNode = hv(
          n.type,
          n.pendingProps,
          se.current
        ), wn = n, ba = !0, u = Gt, Fr(n.type) ? (Wf = u, Gt = Sa(l.firstChild)) : Gt = u), An(
          t,
          n,
          n.pendingProps.children,
          r
        ), uc(t, n), t === null && (n.flags |= 4194304), n.child;
      case 5:
        return t === null && yt && ((u = l = Gt) && (l = MC(
          l,
          n.type,
          n.pendingProps,
          ba
        ), l !== null ? (n.stateNode = l, wn = n, Gt = Sa(l.firstChild), ba = !1, u = !0) : u = !1), u || kr(n)), Te(n), u = n.type, f = n.pendingProps, b = t !== null ? t.memoizedProps : null, l = f.children, Vf(u, f) ? l = null : b !== null && Vf(u, b) && (n.flags |= 32), n.memoizedState !== null && (u = Id(
          t,
          n,
          PS,
          null,
          null,
          r
        ), $l._currentValue = u), uc(t, n), An(t, n, l, r), n.child;
      case 6:
        return t === null && yt && ((t = r = Gt) && (r = AC(
          r,
          n.pendingProps,
          ba
        ), r !== null ? (n.stateNode = r, wn = n, Gt = null, t = !0) : t = !1), t || kr(n)), null;
      case 13:
        return ry(t, n, r);
      case 4:
        return ye(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, t === null ? n.child = Ro(
          n,
          null,
          l,
          r
        ) : An(t, n, l, r), n.child;
      case 11:
        return Kg(
          t,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return An(
          t,
          n,
          n.pendingProps,
          r
        ), n.child;
      case 8:
        return An(
          t,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return An(
          t,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return l = n.pendingProps, Nr(n, n.type, l.value), An(t, n, l.children, r), n.child;
      case 9:
        return u = n.type._context, l = n.pendingProps.children, So(n), u = Mn(u), l = l(u), n.flags |= 1, An(t, n, l, r), n.child;
      case 14:
        return Xg(
          t,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return Qg(
          t,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return iy(t, n, r);
      case 31:
        return XS(t, n, r);
      case 22:
        return Zg(
          t,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return So(n), l = Mn(fn), t === null ? (u = Dd(), u === null && (u = Ut, f = Od(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= r), u = f), n.memoizedState = { parent: l, cache: u }, kd(n), Nr(n, fn, u)) : ((t.lanes & r) !== 0 && (Nd(t, n), fl(n, null, null, r), dl()), u = t.memoizedState, f = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Nr(n, fn, l)) : (l = f.cache, Nr(n, fn, l), l !== u.cache && Ad(
          n,
          [fn],
          r,
          !0
        ))), An(
          t,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function mr(t) {
    t.flags |= 4;
  }
  function gf(t, n, r, l, u) {
    if ((n = (t.mode & 32) !== 0) && (n = !1), n) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ny()) t.flags |= 8192;
        else
          throw To = Ks, $d;
    } else t.flags &= -16777217;
  }
  function sy(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ev(n))
      if (Ny()) t.flags |= 8192;
      else
        throw To = Ks, $d;
  }
  function fc(t, n) {
    n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Ie() : 536870912, t.lanes |= n, fi |= n);
  }
  function vl(t, n) {
    if (!yt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = t.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function qt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, r = 0, l = 0;
    if (n)
      for (var u = t.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= l, t.childLanes = r, n;
  }
  function ZS(t, n, r) {
    var l = n.pendingProps;
    switch (Ed(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(n), null;
      case 1:
        return qt(n), null;
      case 3:
        return r = n.stateNode, l = null, t !== null && (l = t.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), ur(fn), be(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Jo(n) ? mr(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Rd())), qt(n), null;
      case 26:
        var u = n.type, f = n.memoizedState;
        return t === null ? (mr(n), f !== null ? (qt(n), sy(n, f)) : (qt(n), gf(
          n,
          u,
          null,
          l,
          r
        ))) : f ? f !== t.memoizedState ? (mr(n), qt(n), sy(n, f)) : (qt(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== l && mr(n), qt(n), gf(
          n,
          u,
          t,
          l,
          r
        )), null;
      case 27:
        if (De(n), r = se.current, u = n.type, t !== null && n.stateNode != null)
          t.memoizedProps !== l && mr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(i(166));
            return qt(n), null;
          }
          t = te.current, Jo(n) ? Ih(n) : (t = hv(u, l, r), n.stateNode = t, mr(n));
        }
        return qt(n), null;
      case 5:
        if (De(n), u = n.type, t !== null && n.stateNode != null)
          t.memoizedProps !== l && mr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(i(166));
            return qt(n), null;
          }
          if (f = te.current, Jo(n))
            Ih(n);
          else {
            var b = Mc(
              se.current
            );
            switch (f) {
              case 1:
                f = b.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                f = b.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    f = b.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    f = b.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    f = b.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof l.is == "string" ? b.createElement("select", {
                      is: l.is
                    }) : b.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? b.createElement(u, { is: l.is }) : b.createElement(u);
                }
            }
            f[pt] = n, f[Vt] = l;
            e: for (b = n.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6)
                f.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === n) break e;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === n)
                  break e;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            n.stateNode = f;
            e: switch (On(f, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && mr(n);
          }
        }
        return qt(n), gf(
          n,
          n.type,
          t === null ? null : t.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (t && n.stateNode != null)
          t.memoizedProps !== l && mr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(i(166));
          if (t = se.current, Jo(n)) {
            if (t = n.stateNode, r = n.memoizedProps, l = null, u = wn, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            t[pt] = n, t = !!(t.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || rv(t.nodeValue, r)), t || kr(n, !0);
          } else
            t = Mc(t).createTextNode(
              l
            ), t[pt] = n, n.stateNode = t;
        }
        return qt(n), null;
      case 31:
        if (r = n.memoizedState, t === null || t.memoizedState !== null) {
          if (l = Jo(n), r !== null) {
            if (t === null) {
              if (!l) throw Error(i(318));
              if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(557));
              t[pt] = n;
            } else
              bo(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qt(n), t = !1;
          } else
            r = Rd(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), t = !0;
          if (!t)
            return n.flags & 256 ? (na(n), n) : (na(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(i(558));
        }
        return qt(n), null;
      case 13:
        if (l = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Jo(n), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(i(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[pt] = n;
            } else
              bo(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qt(n), u = !1;
          } else
            u = Rd(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (na(n), n) : (na(n), null);
        }
        return na(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, t = t !== null && t.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== u && (l.flags |= 2048)), r !== t && r && (n.child.flags |= 8192), fc(n, n.updateQueue), qt(n), null);
      case 4:
        return be(), t === null && _f(n.stateNode.containerInfo), qt(n), null;
      case 10:
        return ur(n.type), qt(n), null;
      case 19:
        if (W(sn), l = n.memoizedState, l === null) return qt(n), null;
        if (u = (n.flags & 128) !== 0, f = l.rendering, f === null)
          if (u) vl(l, !1);
          else {
            if (Jt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = n.child; t !== null; ) {
                if (f = Js(t), f !== null) {
                  for (n.flags |= 128, vl(l, !1), t = f.updateQueue, n.updateQueue = t, fc(n, t), n.subtreeFlags = 0, t = r, r = n.child; r !== null; )
                    jh(r, t), r = r.sibling;
                  return re(
                    sn,
                    sn.current & 1 | 2
                  ), yt && sr(n, l.treeForkCount), n.child;
                }
                t = t.sibling;
              }
            l.tail !== null && Ue() > yc && (n.flags |= 128, u = !0, vl(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Js(f), t !== null) {
              if (n.flags |= 128, u = !0, t = t.updateQueue, n.updateQueue = t, fc(n, t), vl(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !yt)
                return qt(n), null;
            } else
              2 * Ue() - l.renderingStartTime > yc && r !== 536870912 && (n.flags |= 128, u = !0, vl(l, !1), n.lanes = 4194304);
          l.isBackwards ? (f.sibling = n.child, n.child = f) : (t = l.last, t !== null ? t.sibling = f : n.child = f, l.last = f);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ue(), t.sibling = null, r = sn.current, re(
          sn,
          u ? r & 1 | 2 : r & 1
        ), yt && sr(n, l.treeForkCount), t) : (qt(n), null);
      case 22:
      case 23:
        return na(n), _d(), l = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (qt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : qt(n), r = n.updateQueue, r !== null && fc(n, r.retryQueue), r = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), t !== null && W(Co), null;
      case 24:
        return r = null, t !== null && (r = t.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), ur(fn), qt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function JS(t, n) {
    switch (Ed(n), n.tag) {
      case 1:
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return ur(fn), be(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return De(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (na(n), n.alternate === null)
            throw Error(i(340));
          bo();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 13:
        if (na(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          bo();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return W(sn), null;
      case 4:
        return be(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return na(n), _d(), t !== null && W(Co), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 24:
        return ur(fn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cy(t, n) {
    switch (Ed(n), n.tag) {
      case 3:
        ur(fn), be();
        break;
      case 26:
      case 27:
      case 5:
        De(n);
        break;
      case 4:
        be();
        break;
      case 31:
        n.memoizedState !== null && na(n);
        break;
      case 13:
        na(n);
        break;
      case 19:
        W(sn);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        na(n), _d(), t !== null && W(Co);
        break;
      case 24:
        ur(fn);
    }
  }
  function bl(t, n) {
    try {
      var r = n.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & t) === t) {
            l = void 0;
            var f = r.create, b = r.inst;
            l = f(), b.destroy = l;
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (A) {
      $t(n, n.return, A);
    }
  }
  function Ur(t, n, r) {
    try {
      var l = n.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & t) === t) {
            var b = l.inst, A = b.destroy;
            if (A !== void 0) {
              b.destroy = void 0, u = n;
              var _ = r, Q = A;
              try {
                Q();
              } catch (ne) {
                $t(
                  u,
                  _,
                  ne
                );
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (ne) {
      $t(n, n.return, ne);
    }
  }
  function uy(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var r = t.stateNode;
      try {
        eg(n, r);
      } catch (l) {
        $t(t, t.return, l);
      }
    }
  }
  function dy(t, n, r) {
    r.props = Mo(
      t.type,
      t.memoizedProps
    ), r.state = t.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      $t(t, n, l);
    }
  }
  function xl(t, n) {
    try {
      var r = t.ref;
      if (r !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof r == "function" ? t.refCleanup = r(l) : r.current = l;
      }
    } catch (u) {
      $t(t, n, u);
    }
  }
  function qa(t, n) {
    var r = t.ref, l = t.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          $t(t, n, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          $t(t, n, u);
        }
      else r.current = null;
  }
  function fy(t) {
    var n = t.type, r = t.memoizedProps, l = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (u) {
      $t(t, t.return, u);
    }
  }
  function yf(t, n, r) {
    try {
      var l = t.stateNode;
      SC(l, t.type, r, n), l[Vt] = n;
    } catch (u) {
      $t(t, t.return, u);
    }
  }
  function py(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Fr(t.type) || t.tag === 4;
  }
  function vf(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || py(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Fr(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function bf(t, n, r) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(t, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(t), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = or));
    else if (l !== 4 && (l === 27 && Fr(t.type) && (r = t.stateNode, n = null), t = t.child, t !== null))
      for (bf(t, n, r), t = t.sibling; t !== null; )
        bf(t, n, r), t = t.sibling;
  }
  function pc(t, n, r) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, n ? r.insertBefore(t, n) : r.appendChild(t);
    else if (l !== 4 && (l === 27 && Fr(t.type) && (r = t.stateNode), t = t.child, t !== null))
      for (pc(t, n, r), t = t.sibling; t !== null; )
        pc(t, n, r), t = t.sibling;
  }
  function my(t) {
    var n = t.stateNode, r = t.memoizedProps;
    try {
      for (var l = t.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      On(n, l, r), n[pt] = t, n[Vt] = r;
    } catch (f) {
      $t(t, t.return, f);
    }
  }
  var hr = !1, hn = !1, xf = !1, hy = typeof WeakSet == "function" ? WeakSet : Set, En = null;
  function eC(t, n) {
    if (t = t.containerInfo, If = Nc, t = Mh(t), fd(t)) {
      if ("selectionStart" in t)
        var r = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        e: {
          r = (r = t.ownerDocument) && r.defaultView || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var u = l.anchorOffset, f = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var b = 0, A = -1, _ = -1, Q = 0, ne = 0, ce = t, Z = null;
            t: for (; ; ) {
              for (var ee; ce !== r || u !== 0 && ce.nodeType !== 3 || (A = b + u), ce !== f || l !== 0 && ce.nodeType !== 3 || (_ = b + l), ce.nodeType === 3 && (b += ce.nodeValue.length), (ee = ce.firstChild) !== null; )
                Z = ce, ce = ee;
              for (; ; ) {
                if (ce === t) break t;
                if (Z === r && ++Q === u && (A = b), Z === f && ++ne === l && (_ = b), (ee = ce.nextSibling) !== null) break;
                ce = Z, Z = ce.parentNode;
              }
              ce = ee;
            }
            r = A === -1 || _ === -1 ? null : { start: A, end: _ };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Pf = { focusedElem: t, selectionRange: r }, Nc = !1, En = n; En !== null; )
      if (n = En, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = n, En = t;
      else
        for (; En !== null; ) {
          switch (n = En, f = n.alternate, t = n.flags, n.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (r = 0; r < t.length; r++)
                  u = t[r], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                t = void 0, r = n, u = f.memoizedProps, f = f.memoizedState, l = r.stateNode;
                try {
                  var we = Mo(
                    r.type,
                    u
                  );
                  t = l.getSnapshotBeforeUpdate(
                    we,
                    f
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Pe) {
                  $t(
                    r,
                    r.return,
                    Pe
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = n.stateNode.containerInfo, r = t.nodeType, r === 9)
                  qf(t);
                else if (r === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (t = n.sibling, t !== null) {
            t.return = n.return, En = t;
            break;
          }
          En = n.return;
        }
  }
  function gy(t, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        yr(t, r), l & 4 && bl(5, r);
        break;
      case 1:
        if (yr(t, r), l & 4)
          if (t = r.stateNode, n === null)
            try {
              t.componentDidMount();
            } catch (b) {
              $t(r, r.return, b);
            }
          else {
            var u = Mo(
              r.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                n,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              $t(
                r,
                r.return,
                b
              );
            }
          }
        l & 64 && uy(r), l & 512 && xl(r, r.return);
        break;
      case 3:
        if (yr(t, r), l & 64 && (t = r.updateQueue, t !== null)) {
          if (n = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            eg(t, n);
          } catch (b) {
            $t(r, r.return, b);
          }
        }
        break;
      case 27:
        n === null && l & 4 && my(r);
      case 26:
      case 5:
        yr(t, r), n === null && l & 4 && fy(r), l & 512 && xl(r, r.return);
        break;
      case 12:
        yr(t, r);
        break;
      case 31:
        yr(t, r), l & 4 && by(t, r);
        break;
      case 13:
        yr(t, r), l & 4 && xy(t, r), l & 64 && (t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null && (r = cC.bind(
          null,
          r
        ), OC(t, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || hr, !l) {
          n = n !== null && n.memoizedState !== null || hn, u = hr;
          var f = hn;
          hr = l, (hn = n) && !f ? vr(
            t,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : yr(t, r), hr = u, hn = f;
        }
        break;
      case 30:
        break;
      default:
        yr(t, r);
    }
  }
  function yy(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, yy(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && Et(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Wt = null, Pn = !1;
  function gr(t, n, r) {
    for (r = r.child; r !== null; )
      vy(t, n, r), r = r.sibling;
  }
  function vy(t, n, r) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(lt, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        hn || qa(r, n), gr(
          t,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        hn || qa(r, n);
        var l = Wt, u = Pn;
        Fr(r.type) && (Wt = r.stateNode, Pn = !1), gr(
          t,
          n,
          r
        ), Ol(r.stateNode), Wt = l, Pn = u;
        break;
      case 5:
        hn || qa(r, n);
      case 6:
        if (l = Wt, u = Pn, Wt = null, gr(
          t,
          n,
          r
        ), Wt = l, Pn = u, Wt !== null)
          if (Pn)
            try {
              (Wt.nodeType === 9 ? Wt.body : Wt.nodeName === "HTML" ? Wt.ownerDocument.body : Wt).removeChild(r.stateNode);
            } catch (f) {
              $t(
                r,
                n,
                f
              );
            }
          else
            try {
              Wt.removeChild(r.stateNode);
            } catch (f) {
              $t(
                r,
                n,
                f
              );
            }
        break;
      case 18:
        Wt !== null && (Pn ? (t = Wt, uv(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          r.stateNode
        ), xi(t)) : uv(Wt, r.stateNode));
        break;
      case 4:
        l = Wt, u = Pn, Wt = r.stateNode.containerInfo, Pn = !0, gr(
          t,
          n,
          r
        ), Wt = l, Pn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ur(2, r, n), hn || Ur(4, r, n), gr(
          t,
          n,
          r
        );
        break;
      case 1:
        hn || (qa(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && dy(
          r,
          n,
          l
        )), gr(
          t,
          n,
          r
        );
        break;
      case 21:
        gr(
          t,
          n,
          r
        );
        break;
      case 22:
        hn = (l = hn) || r.memoizedState !== null, gr(
          t,
          n,
          r
        ), hn = l;
        break;
      default:
        gr(
          t,
          n,
          r
        );
    }
  }
  function by(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        xi(t);
      } catch (r) {
        $t(n, n.return, r);
      }
    }
  }
  function xy(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        xi(t);
      } catch (r) {
        $t(n, n.return, r);
      }
  }
  function tC(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new hy()), n;
      case 22:
        return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new hy()), n;
      default:
        throw Error(i(435, t.tag));
    }
  }
  function mc(t, n) {
    var r = tC(t);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = uC.bind(null, t, l);
        l.then(u, u);
      }
    });
  }
  function Vn(t, n) {
    var r = n.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l], f = t, b = n, A = b;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Fr(A.type)) {
                Wt = A.stateNode, Pn = !1;
                break e;
              }
              break;
            case 5:
              Wt = A.stateNode, Pn = !1;
              break e;
            case 3:
            case 4:
              Wt = A.stateNode.containerInfo, Pn = !0;
              break e;
          }
          A = A.return;
        }
        if (Wt === null) throw Error(i(160));
        vy(f, b, u), Wt = null, Pn = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Sy(n, t), n = n.sibling;
  }
  var Ba = null;
  function Sy(t, n) {
    var r = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(n, t), Gn(t), l & 4 && (Ur(3, t, t.return), bl(3, t), Ur(5, t, t.return));
        break;
      case 1:
        Vn(n, t), Gn(t), l & 512 && (hn || r === null || qa(r, r.return)), l & 64 && hr && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (r = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
        break;
      case 26:
        var u = Ba;
        if (Vn(n, t), Gn(t), l & 512 && (hn || r === null || qa(r, r.return)), l & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (l = t.memoizedState, r === null)
            if (l === null)
              if (t.stateNode === null) {
                e: {
                  l = t.type, r = t.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      f = u.getElementsByTagName("title")[0], (!f || f[et] || f[pt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l), u.head.insertBefore(
                        f,
                        u.querySelector("head > title")
                      )), On(f, l, r), f[pt] = t, ln(f), l = f;
                      break e;
                    case "link":
                      var b = Sv(
                        "link",
                        "href",
                        u
                      ).get(l + (r.href || ""));
                      if (b) {
                        for (var A = 0; A < b.length; A++)
                          if (f = b[A], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            b.splice(A, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), On(f, l, r), u.head.appendChild(f);
                      break;
                    case "meta":
                      if (b = Sv(
                        "meta",
                        "content",
                        u
                      ).get(l + (r.content || ""))) {
                        for (A = 0; A < b.length; A++)
                          if (f = b[A], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            b.splice(A, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), On(f, l, r), u.head.appendChild(f);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  f[pt] = t, ln(f), l = f;
                }
                t.stateNode = l;
              } else
                Cv(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = xv(
                u,
                l,
                t.memoizedProps
              );
          else
            f !== l ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, l === null ? Cv(
              u,
              t.type,
              t.stateNode
            ) : xv(
              u,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && yf(
              t,
              t.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Vn(n, t), Gn(t), l & 512 && (hn || r === null || qa(r, r.return)), r !== null && l & 4 && yf(
          t,
          t.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Vn(n, t), Gn(t), l & 512 && (hn || r === null || qa(r, r.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Vo(u, "");
          } catch (we) {
            $t(t, t.return, we);
          }
        }
        l & 4 && t.stateNode != null && (u = t.memoizedProps, yf(
          t,
          u,
          r !== null ? r.memoizedProps : u
        )), l & 1024 && (xf = !0);
        break;
      case 6:
        if (Vn(n, t), Gn(t), l & 4) {
          if (t.stateNode === null)
            throw Error(i(162));
          l = t.memoizedProps, r = t.stateNode;
          try {
            r.nodeValue = l;
          } catch (we) {
            $t(t, t.return, we);
          }
        }
        break;
      case 3:
        if (zc = null, u = Ba, Ba = Ac(n.containerInfo), Vn(n, t), Ba = u, Gn(t), l & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            xi(n.containerInfo);
          } catch (we) {
            $t(t, t.return, we);
          }
        xf && (xf = !1, Cy(t));
        break;
      case 4:
        l = Ba, Ba = Ac(
          t.stateNode.containerInfo
        ), Vn(n, t), Gn(t), Ba = l;
        break;
      case 12:
        Vn(n, t), Gn(t);
        break;
      case 31:
        Vn(n, t), Gn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mc(t, l)));
        break;
      case 13:
        Vn(n, t), Gn(t), t.child.flags & 8192 && t.memoizedState !== null != (r !== null && r.memoizedState !== null) && (gc = Ue()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mc(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var _ = r !== null && r.memoizedState !== null, Q = hr, ne = hn;
        if (hr = Q || u, hn = ne || _, Vn(n, t), hn = ne, hr = Q, Gn(t), l & 8192)
          e: for (n = t.stateNode, n._visibility = u ? n._visibility & -2 : n._visibility | 1, u && (r === null || _ || hr || hn || Ao(t)), r = null, n = t; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                _ = r = n;
                try {
                  if (f = _.stateNode, u)
                    b = f.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    A = _.stateNode;
                    var ce = _.memoizedProps.style, Z = ce != null && ce.hasOwnProperty("display") ? ce.display : null;
                    A.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (we) {
                  $t(_, _.return, we);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                _ = n;
                try {
                  _.stateNode.nodeValue = u ? "" : _.memoizedProps;
                } catch (we) {
                  $t(_, _.return, we);
                }
              }
            } else if (n.tag === 18) {
              if (r === null) {
                _ = n;
                try {
                  var ee = _.stateNode;
                  u ? dv(ee, !0) : dv(_.stateNode, !1);
                } catch (we) {
                  $t(_, _.return, we);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === t) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e;
              r === n && (r = null), n = n.return;
            }
            r === n && (r = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (r = l.retryQueue, r !== null && (l.retryQueue = null, mc(t, r))));
        break;
      case 19:
        Vn(n, t), Gn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mc(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Vn(n, t), Gn(t);
    }
  }
  function Gn(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var r, l = t.return; l !== null; ) {
          if (py(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var u = r.stateNode, f = vf(t);
            pc(t, f, u);
            break;
          case 5:
            var b = r.stateNode;
            r.flags & 32 && (Vo(b, ""), r.flags &= -33);
            var A = vf(t);
            pc(t, A, b);
            break;
          case 3:
          case 4:
            var _ = r.stateNode.containerInfo, Q = vf(t);
            bf(
              t,
              Q,
              _
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (ne) {
        $t(t, t.return, ne);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function Cy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        Cy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling;
      }
  }
  function yr(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        gy(t, n.alternate, n), n = n.sibling;
  }
  function Ao(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ur(4, n, n.return), Ao(n);
          break;
        case 1:
          qa(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && dy(
            n,
            n.return,
            r
          ), Ao(n);
          break;
        case 27:
          Ol(n.stateNode);
        case 26:
        case 5:
          qa(n, n.return), Ao(n);
          break;
        case 22:
          n.memoizedState === null && Ao(n);
          break;
        case 30:
          Ao(n);
          break;
        default:
          Ao(n);
      }
      t = t.sibling;
    }
  }
  function vr(t, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, u = t, f = n, b = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          vr(
            u,
            f,
            r
          ), bl(4, f);
          break;
        case 1:
          if (vr(
            u,
            f,
            r
          ), l = f, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (Q) {
              $t(l, l.return, Q);
            }
          if (l = f, u = l.updateQueue, u !== null) {
            var A = l.stateNode;
            try {
              var _ = u.shared.hiddenCallbacks;
              if (_ !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < _.length; u++)
                  Jh(_[u], A);
            } catch (Q) {
              $t(l, l.return, Q);
            }
          }
          r && b & 64 && uy(f), xl(f, f.return);
          break;
        case 27:
          my(f);
        case 26:
        case 5:
          vr(
            u,
            f,
            r
          ), r && l === null && b & 4 && fy(f), xl(f, f.return);
          break;
        case 12:
          vr(
            u,
            f,
            r
          );
          break;
        case 31:
          vr(
            u,
            f,
            r
          ), r && b & 4 && by(u, f);
          break;
        case 13:
          vr(
            u,
            f,
            r
          ), r && b & 4 && xy(u, f);
          break;
        case 22:
          f.memoizedState === null && vr(
            u,
            f,
            r
          ), xl(f, f.return);
          break;
        case 30:
          break;
        default:
          vr(
            u,
            f,
            r
          );
      }
      n = n.sibling;
    }
  }
  function Sf(t, n) {
    var r = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== r && (t != null && t.refCount++, r != null && il(r));
  }
  function Cf(t, n) {
    t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && il(t));
  }
  function _a(t, n, r, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ey(
          t,
          n,
          r,
          l
        ), n = n.sibling;
  }
  function Ey(t, n, r, l) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        _a(
          t,
          n,
          r,
          l
        ), u & 2048 && bl(9, n);
        break;
      case 1:
        _a(
          t,
          n,
          r,
          l
        );
        break;
      case 3:
        _a(
          t,
          n,
          r,
          l
        ), u & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && il(t)));
        break;
      case 12:
        if (u & 2048) {
          _a(
            t,
            n,
            r,
            l
          ), t = n.stateNode;
          try {
            var f = n.memoizedProps, b = f.id, A = f.onPostCommit;
            typeof A == "function" && A(
              b,
              n.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (_) {
            $t(n, n.return, _);
          }
        } else
          _a(
            t,
            n,
            r,
            l
          );
        break;
      case 31:
        _a(
          t,
          n,
          r,
          l
        );
        break;
      case 13:
        _a(
          t,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        f = n.stateNode, b = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? _a(
          t,
          n,
          r,
          l
        ) : Sl(t, n) : f._visibility & 2 ? _a(
          t,
          n,
          r,
          l
        ) : (f._visibility |= 2, ci(
          t,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Sf(b, n);
        break;
      case 24:
        _a(
          t,
          n,
          r,
          l
        ), u & 2048 && Cf(n.alternate, n);
        break;
      default:
        _a(
          t,
          n,
          r,
          l
        );
    }
  }
  function ci(t, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var f = t, b = n, A = r, _ = l, Q = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            f,
            b,
            A,
            _,
            u
          ), bl(8, b);
          break;
        case 23:
          break;
        case 22:
          var ne = b.stateNode;
          b.memoizedState !== null ? ne._visibility & 2 ? ci(
            f,
            b,
            A,
            _,
            u
          ) : Sl(
            f,
            b
          ) : (ne._visibility |= 2, ci(
            f,
            b,
            A,
            _,
            u
          )), u && Q & 2048 && Sf(
            b.alternate,
            b
          );
          break;
        case 24:
          ci(
            f,
            b,
            A,
            _,
            u
          ), u && Q & 2048 && Cf(b.alternate, b);
          break;
        default:
          ci(
            f,
            b,
            A,
            _,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Sl(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = t, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            Sl(r, l), u & 2048 && Sf(
              l.alternate,
              l
            );
            break;
          case 24:
            Sl(r, l), u & 2048 && Cf(l.alternate, l);
            break;
          default:
            Sl(r, l);
        }
        n = n.sibling;
      }
  }
  var Cl = 8192;
  function ui(t, n, r) {
    if (t.subtreeFlags & Cl)
      for (t = t.child; t !== null; )
        Ty(
          t,
          n,
          r
        ), t = t.sibling;
  }
  function Ty(t, n, r) {
    switch (t.tag) {
      case 26:
        ui(
          t,
          n,
          r
        ), t.flags & Cl && t.memoizedState !== null && IC(
          r,
          Ba,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ui(
          t,
          n,
          r
        );
        break;
      case 3:
      case 4:
        var l = Ba;
        Ba = Ac(t.stateNode.containerInfo), ui(
          t,
          n,
          r
        ), Ba = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Cl, Cl = 16777216, ui(
          t,
          n,
          r
        ), Cl = l) : ui(
          t,
          n,
          r
        ));
        break;
      default:
        ui(
          t,
          n,
          r
        );
    }
  }
  function Ry(t) {
    var n = t.alternate;
    if (n !== null && (t = n.child, t !== null)) {
      n.child = null;
      do
        n = t.sibling, t.sibling = null, t = n;
      while (t !== null);
    }
  }
  function El(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          En = l, My(
            l,
            t
          );
        }
      Ry(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wy(t), t = t.sibling;
  }
  function wy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        El(t), t.flags & 2048 && Ur(9, t, t.return);
        break;
      case 3:
        El(t);
        break;
      case 12:
        El(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, hc(t)) : El(t);
        break;
      default:
        El(t);
    }
  }
  function hc(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          En = l, My(
            l,
            t
          );
        }
      Ry(t);
    }
    for (t = t.child; t !== null; ) {
      switch (n = t, n.tag) {
        case 0:
        case 11:
        case 15:
          Ur(8, n, n.return), hc(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, hc(n));
          break;
        default:
          hc(n);
      }
      t = t.sibling;
    }
  }
  function My(t, n) {
    for (; En !== null; ) {
      var r = En;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ur(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          il(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, En = l;
      else
        e: for (r = t; En !== null; ) {
          l = En;
          var u = l.sibling, f = l.return;
          if (yy(l), l === r) {
            En = null;
            break e;
          }
          if (u !== null) {
            u.return = f, En = u;
            break e;
          }
          En = f;
        }
    }
  }
  var nC = {
    getCacheForType: function(t) {
      var n = Mn(fn), r = n.data.get(t);
      return r === void 0 && (r = t(), n.data.set(t, r)), r;
    },
    cacheSignal: function() {
      return Mn(fn).controller.signal;
    }
  }, aC = typeof WeakMap == "function" ? WeakMap : Map, Tt = 0, Ut = null, ut = null, mt = 0, Dt = 0, aa = null, Ir = !1, di = !1, Ef = !1, br = 0, Jt = 0, Pr = 0, Oo = 0, Tf = 0, ra = 0, fi = 0, Tl = null, qn = null, Rf = !1, gc = 0, Ay = 0, yc = 1 / 0, vc = null, Vr = null, xn = 0, Gr = null, pi = null, xr = 0, wf = 0, Mf = null, Oy = null, Rl = 0, Af = null;
  function oa() {
    return (Tt & 2) !== 0 && mt !== 0 ? mt & -mt : N.T !== null ? Nf() : fa();
  }
  function zy() {
    if (ra === 0)
      if ((mt & 536870912) === 0 || yt) {
        var t = Dn;
        Dn <<= 1, (Dn & 3932160) === 0 && (Dn = 262144), ra = t;
      } else ra = 536870912;
    return t = ta.current, t !== null && (t.flags |= 32), ra;
  }
  function Yn(t, n, r) {
    (t === Ut && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) && (mi(t, 0), qr(
      t,
      mt,
      ra,
      !1
    )), ve(t, r), ((Tt & 2) === 0 || t !== Ut) && (t === Ut && ((Tt & 2) === 0 && (Oo |= r), Jt === 4 && qr(
      t,
      mt,
      ra,
      !1
    )), Ya(t));
  }
  function Dy(t, n, r) {
    if ((Tt & 6) !== 0) throw Error(i(327));
    var l = !r && (n & 127) === 0 && (n & t.expiredLanes) === 0 || Un(t, n), u = l ? iC(t, n) : zf(t, n, !0), f = l;
    do {
      if (u === 0) {
        di && !l && qr(t, n, 0, !1);
        break;
      } else {
        if (r = t.current.alternate, f && !rC(r)) {
          u = zf(t, n, !1), f = !1;
          continue;
        }
        if (u === 2) {
          if (f = n, t.errorRecoveryDisabledLanes & f)
            var b = 0;
          else
            b = t.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            n = b;
            e: {
              var A = t;
              u = Tl;
              var _ = A.current.memoizedState.isDehydrated;
              if (_ && (mi(A, b).flags |= 256), b = zf(
                A,
                b,
                !1
              ), b !== 2) {
                if (Ef && !_) {
                  A.errorRecoveryDisabledLanes |= f, Oo |= f, u = 4;
                  break e;
                }
                f = qn, qn = u, f !== null && (qn === null ? qn = f : qn.push.apply(
                  qn,
                  f
                ));
              }
              u = b;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          mi(t, 0), qr(t, n, 0, !0);
          break;
        }
        e: {
          switch (l = t, f = u, f) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              qr(
                l,
                n,
                ra,
                !Ir
              );
              break e;
            case 2:
              qn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && (u = gc + 300 - Ue(), 10 < u)) {
            if (qr(
              l,
              n,
              ra,
              !Ir
            ), vn(l, 0, !0) !== 0) break e;
            xr = n, l.timeoutHandle = sv(
              $y.bind(
                null,
                l,
                r,
                qn,
                vc,
                Rf,
                n,
                ra,
                Oo,
                fi,
                Ir,
                f,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          $y(
            l,
            r,
            qn,
            vc,
            Rf,
            n,
            ra,
            Oo,
            fi,
            Ir,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ya(t);
  }
  function $y(t, n, r, l, u, f, b, A, _, Q, ne, ce, Z, ee) {
    if (t.timeoutHandle = -1, ce = n.subtreeFlags, ce & 8192 || (ce & 16785408) === 16785408) {
      ce = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: or
      }, Ty(
        n,
        f,
        ce
      );
      var we = (f & 62914560) === f ? gc - Ue() : (f & 4194048) === f ? Ay - Ue() : 0;
      if (we = PC(
        ce,
        we
      ), we !== null) {
        xr = f, t.cancelPendingCommit = we(
          Uy.bind(
            null,
            t,
            n,
            f,
            r,
            l,
            u,
            b,
            A,
            _,
            ne,
            ce,
            null,
            Z,
            ee
          )
        ), qr(t, f, b, !Q);
        return;
      }
    }
    Uy(
      t,
      n,
      f,
      r,
      l,
      u,
      b,
      A,
      _
    );
  }
  function rC(t) {
    for (var n = t; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], f = u.getSnapshot;
          u = u.value;
          try {
            if (!Jn(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null)
        r.return = n, n = r;
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function qr(t, n, r, l) {
    n &= ~Tf, n &= ~Oo, t.suspendedLanes |= n, t.pingedLanes &= ~n, l && (t.warmLanes |= n), l = t.expirationTimes;
    for (var u = n; 0 < u; ) {
      var f = 31 - $e(u), b = 1 << f;
      l[f] = -1, u &= ~b;
    }
    r !== 0 && nt(t, r, n);
  }
  function bc() {
    return (Tt & 6) === 0 ? (wl(0), !1) : !0;
  }
  function Of() {
    if (ut !== null) {
      if (Dt === 0)
        var t = ut.return;
      else
        t = ut, cr = xo = null, Gd(t), ri = null, sl = 0, t = ut;
      for (; t !== null; )
        cy(t.alternate, t), t = t.return;
      ut = null;
    }
  }
  function mi(t, n) {
    var r = t.timeoutHandle;
    r !== -1 && (t.timeoutHandle = -1, TC(r)), r = t.cancelPendingCommit, r !== null && (t.cancelPendingCommit = null, r()), xr = 0, Of(), Ut = t, ut = r = lr(t.current, null), mt = n, Dt = 0, aa = null, Ir = !1, di = Un(t, n), Ef = !1, fi = ra = Tf = Oo = Pr = Jt = 0, qn = Tl = null, Rf = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= n; 0 < l; ) {
        var u = 31 - $e(l), f = 1 << u;
        n |= t[u], l &= ~f;
      }
    return br = n, Us(), r;
  }
  function ky(t, n) {
    tt = null, N.H = gl, n === ai || n === Ws ? (n = Kh(), Dt = 3) : n === $d ? (n = Kh(), Dt = 4) : Dt = n === lf ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, aa = n, ut === null && (Jt = 1, sc(
      t,
      ga(n, t.current)
    ));
  }
  function Ny() {
    var t = ta.current;
    return t === null ? !0 : (mt & 4194048) === mt ? xa === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === xa : !1;
  }
  function Ly() {
    var t = N.H;
    return N.H = gl, t === null ? gl : t;
  }
  function jy() {
    var t = N.A;
    return N.A = nC, t;
  }
  function xc() {
    Jt = 4, Ir || (mt & 4194048) !== mt && ta.current !== null || (di = !0), (Pr & 134217727) === 0 && (Oo & 134217727) === 0 || Ut === null || qr(
      Ut,
      mt,
      ra,
      !1
    );
  }
  function zf(t, n, r) {
    var l = Tt;
    Tt |= 2;
    var u = Ly(), f = jy();
    (Ut !== t || mt !== n) && (vc = null, mi(t, n)), n = !1;
    var b = Jt;
    e: do
      try {
        if (Dt !== 0 && ut !== null) {
          var A = ut, _ = aa;
          switch (Dt) {
            case 8:
              Of(), b = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ta.current === null && (n = !0);
              var Q = Dt;
              if (Dt = 0, aa = null, hi(t, A, _, Q), r && di) {
                b = 0;
                break e;
              }
              break;
            default:
              Q = Dt, Dt = 0, aa = null, hi(t, A, _, Q);
          }
        }
        oC(), b = Jt;
        break;
      } catch (ne) {
        ky(t, ne);
      }
    while (!0);
    return n && t.shellSuspendCounter++, cr = xo = null, Tt = l, N.H = u, N.A = f, ut === null && (Ut = null, mt = 0, Us()), b;
  }
  function oC() {
    for (; ut !== null; ) By(ut);
  }
  function iC(t, n) {
    var r = Tt;
    Tt |= 2;
    var l = Ly(), u = jy();
    Ut !== t || mt !== n ? (vc = null, yc = Ue() + 500, mi(t, n)) : di = Un(
      t,
      n
    );
    e: do
      try {
        if (Dt !== 0 && ut !== null) {
          n = ut;
          var f = aa;
          t: switch (Dt) {
            case 1:
              Dt = 0, aa = null, hi(t, n, f, 1);
              break;
            case 2:
            case 9:
              if (Fh(f)) {
                Dt = 0, aa = null, _y(n);
                break;
              }
              n = function() {
                Dt !== 2 && Dt !== 9 || Ut !== t || (Dt = 7), Ya(t);
              }, f.then(n, n);
              break e;
            case 3:
              Dt = 7;
              break e;
            case 4:
              Dt = 5;
              break e;
            case 7:
              Fh(f) ? (Dt = 0, aa = null, _y(n)) : (Dt = 0, aa = null, hi(t, n, f, 7));
              break;
            case 5:
              var b = null;
              switch (ut.tag) {
                case 26:
                  b = ut.memoizedState;
                case 5:
                case 27:
                  var A = ut;
                  if (b ? Ev(b) : A.stateNode.complete) {
                    Dt = 0, aa = null;
                    var _ = A.sibling;
                    if (_ !== null) ut = _;
                    else {
                      var Q = A.return;
                      Q !== null ? (ut = Q, Sc(Q)) : ut = null;
                    }
                    break t;
                  }
              }
              Dt = 0, aa = null, hi(t, n, f, 5);
              break;
            case 6:
              Dt = 0, aa = null, hi(t, n, f, 6);
              break;
            case 8:
              Of(), Jt = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        lC();
        break;
      } catch (ne) {
        ky(t, ne);
      }
    while (!0);
    return cr = xo = null, N.H = l, N.A = u, Tt = r, ut !== null ? 0 : (Ut = null, mt = 0, Us(), Jt);
  }
  function lC() {
    for (; ut !== null && !Ce(); )
      By(ut);
  }
  function By(t) {
    var n = ly(t.alternate, t, br);
    t.memoizedProps = t.pendingProps, n === null ? Sc(t) : ut = n;
  }
  function _y(t) {
    var n = t, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ty(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          mt
        );
        break;
      case 11:
        n = ty(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          mt
        );
        break;
      case 5:
        Gd(n);
      default:
        cy(r, n), n = ut = jh(n, br), n = ly(r, n, br);
    }
    t.memoizedProps = t.pendingProps, n === null ? Sc(t) : ut = n;
  }
  function hi(t, n, r, l) {
    cr = xo = null, Gd(n), ri = null, sl = 0;
    var u = n.return;
    try {
      if (KS(
        t,
        u,
        n,
        r,
        mt
      )) {
        Jt = 1, sc(
          t,
          ga(r, t.current)
        ), ut = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw ut = u, f;
      Jt = 1, sc(
        t,
        ga(r, t.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (yt || l === 1 ? t = !0 : di || (mt & 536870912) !== 0 ? t = !1 : (Ir = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ta.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Hy(n, t)) : Sc(n);
  }
  function Sc(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Hy(
          n,
          Ir
        );
        return;
      }
      t = n.return;
      var r = ZS(
        n.alternate,
        n,
        br
      );
      if (r !== null) {
        ut = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        ut = n;
        return;
      }
      ut = n = t;
    } while (n !== null);
    Jt === 0 && (Jt = 5);
  }
  function Hy(t, n) {
    do {
      var r = JS(t.alternate, t);
      if (r !== null) {
        r.flags &= 32767, ut = r;
        return;
      }
      if (r = t.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (t = t.sibling, t !== null)) {
        ut = t;
        return;
      }
      ut = t = r;
    } while (t !== null);
    Jt = 6, ut = null;
  }
  function Uy(t, n, r, l, u, f, b, A, _) {
    t.cancelPendingCommit = null;
    do
      Cc();
    while (xn !== 0);
    if ((Tt & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === t.current) throw Error(i(177));
      if (f = n.lanes | n.childLanes, f |= yd, Re(
        t,
        r,
        f,
        b,
        A,
        _
      ), t === Ut && (ut = Ut = null, mt = 0), pi = n, Gr = t, xr = r, wf = f, Mf = u, Oy = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, dC(Je, function() {
        return qy(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null, u = V.p, V.p = 2, b = Tt, Tt |= 4;
        try {
          eC(t, n, r);
        } finally {
          Tt = b, V.p = u, N.T = l;
        }
      }
      xn = 1, Iy(), Py(), Vy();
    }
  }
  function Iy() {
    if (xn === 1) {
      xn = 0;
      var t = Gr, n = pi, r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        r = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
        var u = Tt;
        Tt |= 4;
        try {
          Sy(n, t);
          var f = Pf, b = Mh(t.containerInfo), A = f.focusedElem, _ = f.selectionRange;
          if (b !== A && A && A.ownerDocument && wh(
            A.ownerDocument.documentElement,
            A
          )) {
            if (_ !== null && fd(A)) {
              var Q = _.start, ne = _.end;
              if (ne === void 0 && (ne = Q), "selectionStart" in A)
                A.selectionStart = Q, A.selectionEnd = Math.min(
                  ne,
                  A.value.length
                );
              else {
                var ce = A.ownerDocument || document, Z = ce && ce.defaultView || window;
                if (Z.getSelection) {
                  var ee = Z.getSelection(), we = A.textContent.length, Pe = Math.min(_.start, we), Lt = _.end === void 0 ? Pe : Math.min(_.end, we);
                  !ee.extend && Pe > Lt && (b = Lt, Lt = Pe, Pe = b);
                  var q = Rh(
                    A,
                    Pe
                  ), I = Rh(
                    A,
                    Lt
                  );
                  if (q && I && (ee.rangeCount !== 1 || ee.anchorNode !== q.node || ee.anchorOffset !== q.offset || ee.focusNode !== I.node || ee.focusOffset !== I.offset)) {
                    var X = ce.createRange();
                    X.setStart(q.node, q.offset), ee.removeAllRanges(), Pe > Lt ? (ee.addRange(X), ee.extend(I.node, I.offset)) : (X.setEnd(I.node, I.offset), ee.addRange(X));
                  }
                }
              }
            }
            for (ce = [], ee = A; ee = ee.parentNode; )
              ee.nodeType === 1 && ce.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof A.focus == "function" && A.focus(), A = 0; A < ce.length; A++) {
              var le = ce[A];
              le.element.scrollLeft = le.left, le.element.scrollTop = le.top;
            }
          }
          Nc = !!If, Pf = If = null;
        } finally {
          Tt = u, V.p = l, N.T = r;
        }
      }
      t.current = n, xn = 2;
    }
  }
  function Py() {
    if (xn === 2) {
      xn = 0;
      var t = Gr, n = pi, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
        var u = Tt;
        Tt |= 4;
        try {
          gy(t, n.alternate, n);
        } finally {
          Tt = u, V.p = l, N.T = r;
        }
      }
      xn = 3;
    }
  }
  function Vy() {
    if (xn === 4 || xn === 3) {
      xn = 0, At();
      var t = Gr, n = pi, r = xr, l = Oy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? xn = 5 : (xn = 0, pi = Gr = null, Gy(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Vr = null), _n(r), n = n.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            lt,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = N.T, u = V.p, V.p = 2, N.T = null;
        try {
          for (var f = t.onRecoverableError, b = 0; b < l.length; b++) {
            var A = l[b];
            f(A.value, {
              componentStack: A.stack
            });
          }
        } finally {
          N.T = n, V.p = u;
        }
      }
      (xr & 3) !== 0 && Cc(), Ya(t), u = t.pendingLanes, (r & 261930) !== 0 && (u & 42) !== 0 ? t === Af ? Rl++ : (Rl = 0, Af = t) : Rl = 0, wl(0);
    }
  }
  function Gy(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, il(n)));
  }
  function Cc() {
    return Iy(), Py(), Vy(), qy();
  }
  function qy() {
    if (xn !== 5) return !1;
    var t = Gr, n = wf;
    wf = 0;
    var r = _n(xr), l = N.T, u = V.p;
    try {
      V.p = 32 > r ? 32 : r, N.T = null, r = Mf, Mf = null;
      var f = Gr, b = xr;
      if (xn = 0, pi = Gr = null, xr = 0, (Tt & 6) !== 0) throw Error(i(331));
      var A = Tt;
      if (Tt |= 4, wy(f.current), Ey(
        f,
        f.current,
        b,
        r
      ), Tt = A, wl(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(lt, f);
        } catch {
        }
      return !0;
    } finally {
      V.p = u, N.T = l, Gy(t, n);
    }
  }
  function Yy(t, n, r) {
    n = ga(r, n), n = of(t.stateNode, n, 2), t = Br(t, n, 2), t !== null && (ve(t, 2), Ya(t));
  }
  function $t(t, n, r) {
    if (t.tag === 3)
      Yy(t, t, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Yy(
            n,
            t,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Vr === null || !Vr.has(l))) {
            t = ga(r, t), r = Fg(2), l = Br(n, r, 2), l !== null && (Wg(
              r,
              l,
              n,
              t
            ), ve(l, 2), Ya(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Df(t, n, r) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new aC();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (Ef = !0, u.add(r), t = sC.bind(null, t, n, r), n.then(t, t));
  }
  function sC(t, n, r) {
    var l = t.pingCache;
    l !== null && l.delete(n), t.pingedLanes |= t.suspendedLanes & r, t.warmLanes &= ~r, Ut === t && (mt & r) === r && (Jt === 4 || Jt === 3 && (mt & 62914560) === mt && 300 > Ue() - gc ? (Tt & 2) === 0 && mi(t, 0) : Tf |= r, fi === mt && (fi = 0)), Ya(t);
  }
  function Fy(t, n) {
    n === 0 && (n = Ie()), t = yo(t, n), t !== null && (ve(t, n), Ya(t));
  }
  function cC(t) {
    var n = t.memoizedState, r = 0;
    n !== null && (r = n.retryLane), Fy(t, r);
  }
  function uC(t, n) {
    var r = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, u = t.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(n), Fy(t, r);
  }
  function dC(t, n) {
    return We(t, n);
  }
  var Ec = null, gi = null, $f = !1, Tc = !1, kf = !1, Yr = 0;
  function Ya(t) {
    t !== gi && t.next === null && (gi === null ? Ec = gi = t : gi = gi.next = t), Tc = !0, $f || ($f = !0, pC());
  }
  function wl(t, n) {
    if (!kf && Tc) {
      kf = !0;
      do
        for (var r = !1, l = Ec; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var b = l.suspendedLanes, A = l.pingedLanes;
              f = (1 << 31 - $e(42 | t) + 1) - 1, f &= u & ~(b & ~A), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, Qy(l, f));
          } else
            f = mt, f = vn(
              l,
              l === Ut ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || Un(l, f) || (r = !0, Qy(l, f));
          l = l.next;
        }
      while (r);
      kf = !1;
    }
  }
  function fC() {
    Wy();
  }
  function Wy() {
    Tc = $f = !1;
    var t = 0;
    Yr !== 0 && EC() && (t = Yr);
    for (var n = Ue(), r = null, l = Ec; l !== null; ) {
      var u = l.next, f = Ky(l, n);
      f === 0 ? (l.next = null, r === null ? Ec = u : r.next = u, u === null && (gi = r)) : (r = l, (t !== 0 || (f & 3) !== 0) && (Tc = !0)), l = u;
    }
    xn !== 0 && xn !== 5 || wl(t), Yr !== 0 && (Yr = 0);
  }
  function Ky(t, n) {
    for (var r = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
      var b = 31 - $e(f), A = 1 << b, _ = u[b];
      _ === -1 ? ((A & r) === 0 || (A & l) !== 0) && (u[b] = Ia(A, n)) : _ <= n && (t.expiredLanes |= A), f &= ~A;
    }
    if (n = Ut, r = mt, r = vn(
      t,
      t === n ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, r === 0 || t === n && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Fe(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((r & 3) === 0 || Un(t, r)) {
      if (n = r & -r, n === t.callbackPriority) return n;
      switch (l !== null && Fe(l), _n(r)) {
        case 2:
        case 8:
          r = Bt;
          break;
        case 32:
          r = Je;
          break;
        case 268435456:
          r = je;
          break;
        default:
          r = Je;
      }
      return l = Xy.bind(null, t), r = We(r, l), t.callbackPriority = n, t.callbackNode = r, n;
    }
    return l !== null && l !== null && Fe(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Xy(t, n) {
    if (xn !== 0 && xn !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var r = t.callbackNode;
    if (Cc() && t.callbackNode !== r)
      return null;
    var l = mt;
    return l = vn(
      t,
      t === Ut ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Dy(t, l, n), Ky(t, Ue()), t.callbackNode != null && t.callbackNode === r ? Xy.bind(null, t) : null);
  }
  function Qy(t, n) {
    if (Cc()) return null;
    Dy(t, n, !0);
  }
  function pC() {
    RC(function() {
      (Tt & 6) !== 0 ? We(
        rn,
        fC
      ) : Wy();
    });
  }
  function Nf() {
    if (Yr === 0) {
      var t = ti;
      t === 0 && (t = dn, dn <<= 1, (dn & 261888) === 0 && (dn = 256)), Yr = t;
    }
    return Yr;
  }
  function Zy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $s("" + t);
  }
  function Jy(t, n) {
    var r = n.ownerDocument.createElement("input");
    return r.name = n.name, r.value = n.value, t.id && r.setAttribute("form", t.id), n.parentNode.insertBefore(r, n), t = new FormData(t), r.parentNode.removeChild(r), t;
  }
  function mC(t, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var f = Zy(
        (u[Vt] || null).action
      ), b = l.submitter;
      b && (n = (n = b[Vt] || null) ? Zy(n.formAction) : b.getAttribute("formAction"), n !== null && (f = n, b = null));
      var A = new js(
        "action",
        "action",
        null,
        l,
        u
      );
      t.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Yr !== 0) {
                  var _ = b ? Jy(u, b) : new FormData(u);
                  Jd(
                    r,
                    {
                      pending: !0,
                      data: _,
                      method: u.method,
                      action: f
                    },
                    null,
                    _
                  );
                }
              } else
                typeof f == "function" && (A.preventDefault(), _ = b ? Jy(u, b) : new FormData(u), Jd(
                  r,
                  {
                    pending: !0,
                    data: _,
                    method: u.method,
                    action: f
                  },
                  f,
                  _
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Lf = 0; Lf < gd.length; Lf++) {
    var jf = gd[Lf], hC = jf.toLowerCase(), gC = jf[0].toUpperCase() + jf.slice(1);
    ja(
      hC,
      "on" + gC
    );
  }
  ja(zh, "onAnimationEnd"), ja(Dh, "onAnimationIteration"), ja($h, "onAnimationStart"), ja("dblclick", "onDoubleClick"), ja("focusin", "onFocus"), ja("focusout", "onBlur"), ja($S, "onTransitionRun"), ja(kS, "onTransitionStart"), ja(NS, "onTransitionCancel"), ja(kh, "onTransitionEnd"), Rn("onMouseEnter", ["mouseout", "mouseover"]), Rn("onMouseLeave", ["mouseout", "mouseover"]), Rn("onPointerEnter", ["pointerout", "pointerover"]), Rn("onPointerLeave", ["pointerout", "pointerover"]), st(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), st(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), st("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), st(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), st(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), st(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ml = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), yC = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml)
  );
  function ev(t, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var l = t[r], u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (n)
          for (var b = l.length - 1; 0 <= b; b--) {
            var A = l[b], _ = A.instance, Q = A.currentTarget;
            if (A = A.listener, _ !== f && u.isPropagationStopped())
              break e;
            f = A, u.currentTarget = Q;
            try {
              f(u);
            } catch (ne) {
              Hs(ne);
            }
            u.currentTarget = null, f = _;
          }
        else
          for (b = 0; b < l.length; b++) {
            if (A = l[b], _ = A.instance, Q = A.currentTarget, A = A.listener, _ !== f && u.isPropagationStopped())
              break e;
            f = A, u.currentTarget = Q;
            try {
              f(u);
            } catch (ne) {
              Hs(ne);
            }
            u.currentTarget = null, f = _;
          }
      }
    }
  }
  function dt(t, n) {
    var r = n[ie];
    r === void 0 && (r = n[ie] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    r.has(l) || (tv(n, t, 2, !1), r.add(l));
  }
  function Bf(t, n, r) {
    var l = 0;
    n && (l |= 4), tv(
      r,
      t,
      l,
      n
    );
  }
  var Rc = "_reactListening" + Math.random().toString(36).slice(2);
  function _f(t) {
    if (!t[Rc]) {
      t[Rc] = !0, fo.forEach(function(r) {
        r !== "selectionchange" && (yC.has(r) || Bf(r, !1, t), Bf(r, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Rc] || (n[Rc] = !0, Bf("selectionchange", !1, n));
    }
  }
  function tv(t, n, r, l) {
    switch (zv(n)) {
      case 2:
        var u = qC;
        break;
      case 8:
        u = YC;
        break;
      default:
        u = Jf;
    }
    r = u.bind(
      null,
      n,
      r,
      t
    ), u = void 0, !ad || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : t.addEventListener(n, r, !0) : u !== void 0 ? t.addEventListener(n, r, {
      passive: u
    }) : t.addEventListener(n, r, !1);
  }
  function Hf(t, n, r, l, u) {
    var f = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var A = l.stateNode.containerInfo;
          if (A === u) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var _ = b.tag;
              if ((_ === 3 || _ === 4) && b.stateNode.containerInfo === u)
                return;
              b = b.return;
            }
          for (; A !== null; ) {
            if (b = Ht(A), b === null) return;
            if (_ = b.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = f = b;
              continue e;
            }
            A = A.parentNode;
          }
        }
        l = l.return;
      }
    ih(function() {
      var Q = f, ne = td(r), ce = [];
      e: {
        var Z = Nh.get(t);
        if (Z !== void 0) {
          var ee = js, we = t;
          switch (t) {
            case "keypress":
              if (Ns(r) === 0) break e;
            case "keydown":
            case "keyup":
              ee = uS;
              break;
            case "focusin":
              we = "focus", ee = ld;
              break;
            case "focusout":
              we = "blur", ee = ld;
              break;
            case "beforeblur":
            case "afterblur":
              ee = ld;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = ch;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Zx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = pS;
              break;
            case zh:
            case Dh:
            case $h:
              ee = tS;
              break;
            case kh:
              ee = hS;
              break;
            case "scroll":
            case "scrollend":
              ee = Xx;
              break;
            case "wheel":
              ee = yS;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = aS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = dh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = bS;
          }
          var Pe = (n & 4) !== 0, Lt = !Pe && (t === "scroll" || t === "scrollend"), q = Pe ? Z !== null ? Z + "Capture" : null : Z;
          Pe = [];
          for (var I = Q, X; I !== null; ) {
            var le = I;
            if (X = le.stateNode, le = le.tag, le !== 5 && le !== 26 && le !== 27 || X === null || q === null || (le = Ki(I, q), le != null && Pe.push(
              Al(I, le, X)
            )), Lt) break;
            I = I.return;
          }
          0 < Pe.length && (Z = new ee(
            Z,
            we,
            null,
            r,
            ne
          ), ce.push({ event: Z, listeners: Pe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = t === "mouseover" || t === "pointerover", ee = t === "mouseout" || t === "pointerout", Z && r !== ed && (we = r.relatedTarget || r.fromElement) && (Ht(we) || we[La]))
            break e;
          if ((ee || Z) && (Z = ne.window === ne ? ne : (Z = ne.ownerDocument) ? Z.defaultView || Z.parentWindow : window, ee ? (we = r.relatedTarget || r.toElement, ee = Q, we = we ? Ht(we) : null, we !== null && (Lt = c(we), Pe = we.tag, we !== Lt || Pe !== 5 && Pe !== 27 && Pe !== 6) && (we = null)) : (ee = null, we = Q), ee !== we)) {
            if (Pe = ch, le = "onMouseLeave", q = "onMouseEnter", I = "mouse", (t === "pointerout" || t === "pointerover") && (Pe = dh, le = "onPointerLeave", q = "onPointerEnter", I = "pointer"), Lt = ee == null ? Z : ar(ee), X = we == null ? Z : ar(we), Z = new Pe(
              le,
              I + "leave",
              ee,
              r,
              ne
            ), Z.target = Lt, Z.relatedTarget = X, le = null, Ht(ne) === Q && (Pe = new Pe(
              q,
              I + "enter",
              we,
              r,
              ne
            ), Pe.target = X, Pe.relatedTarget = Lt, le = Pe), Lt = le, ee && we)
              t: {
                for (Pe = vC, q = ee, I = we, X = 0, le = q; le; le = Pe(le))
                  X++;
                le = 0;
                for (var Ne = I; Ne; Ne = Pe(Ne))
                  le++;
                for (; 0 < X - le; )
                  q = Pe(q), X--;
                for (; 0 < le - X; )
                  I = Pe(I), le--;
                for (; X--; ) {
                  if (q === I || I !== null && q === I.alternate) {
                    Pe = q;
                    break t;
                  }
                  q = Pe(q), I = Pe(I);
                }
                Pe = null;
              }
            else Pe = null;
            ee !== null && nv(
              ce,
              Z,
              ee,
              Pe,
              !1
            ), we !== null && Lt !== null && nv(
              ce,
              Lt,
              we,
              Pe,
              !0
            );
          }
        }
        e: {
          if (Z = Q ? ar(Q) : window, ee = Z.nodeName && Z.nodeName.toLowerCase(), ee === "select" || ee === "input" && Z.type === "file")
            var St = bh;
          else if (yh(Z))
            if (xh)
              St = OS;
            else {
              St = MS;
              var Ae = wS;
            }
          else
            ee = Z.nodeName, !ee || ee.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? Q && Ju(Q.elementType) && (St = bh) : St = AS;
          if (St && (St = St(t, Q))) {
            vh(
              ce,
              St,
              r,
              ne
            );
            break e;
          }
          Ae && Ae(t, Z, Q), t === "focusout" && Q && Z.type === "number" && Q.memoizedProps.value != null && Zu(Z, "number", Z.value);
        }
        switch (Ae = Q ? ar(Q) : window, t) {
          case "focusin":
            (yh(Ae) || Ae.contentEditable === "true") && (Fo = Ae, pd = Q, al = null);
            break;
          case "focusout":
            al = pd = Fo = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            md = !1, Ah(ce, r, ne);
            break;
          case "selectionchange":
            if (DS) break;
          case "keydown":
          case "keyup":
            Ah(ce, r, ne);
        }
        var at;
        if (cd)
          e: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break e;
              case "compositionend":
                ht = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break e;
            }
            ht = void 0;
          }
        else
          Yo ? hh(t, r) && (ht = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (ht = "onCompositionStart");
        ht && (fh && r.locale !== "ko" && (Yo || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Yo && (at = lh()) : (zr = ne, rd = "value" in zr ? zr.value : zr.textContent, Yo = !0)), Ae = wc(Q, ht), 0 < Ae.length && (ht = new uh(
          ht,
          t,
          null,
          r,
          ne
        ), ce.push({ event: ht, listeners: Ae }), at ? ht.data = at : (at = gh(r), at !== null && (ht.data = at)))), (at = SS ? CS(t, r) : ES(t, r)) && (ht = wc(Q, "onBeforeInput"), 0 < ht.length && (Ae = new uh(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          ne
        ), ce.push({
          event: Ae,
          listeners: ht
        }), Ae.data = at)), mC(
          ce,
          t,
          Q,
          r,
          ne
        );
      }
      ev(ce, n);
    });
  }
  function Al(t, n, r) {
    return {
      instance: t,
      listener: n,
      currentTarget: r
    };
  }
  function wc(t, n) {
    for (var r = n + "Capture", l = []; t !== null; ) {
      var u = t, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Ki(t, r), u != null && l.unshift(
        Al(t, u, f)
      ), u = Ki(t, n), u != null && l.push(
        Al(t, u, f)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function vC(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function nv(t, n, r, l, u) {
    for (var f = n._reactName, b = []; r !== null && r !== l; ) {
      var A = r, _ = A.alternate, Q = A.stateNode;
      if (A = A.tag, _ !== null && _ === l) break;
      A !== 5 && A !== 26 && A !== 27 || Q === null || (_ = Q, u ? (Q = Ki(r, f), Q != null && b.unshift(
        Al(r, Q, _)
      )) : u || (Q = Ki(r, f), Q != null && b.push(
        Al(r, Q, _)
      ))), r = r.return;
    }
    b.length !== 0 && t.push({ event: n, listeners: b });
  }
  var bC = /\r\n?/g, xC = /\u0000|\uFFFD/g;
  function av(t) {
    return (typeof t == "string" ? t : "" + t).replace(bC, `
`).replace(xC, "");
  }
  function rv(t, n) {
    return n = av(n), av(t) === n;
  }
  function Nt(t, n, r, l, u, f) {
    switch (r) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Vo(t, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Vo(t, "" + l);
        break;
      case "className":
        zs(t, "class", l);
        break;
      case "tabIndex":
        zs(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zs(t, r, l);
        break;
      case "style":
        rh(t, l, f);
        break;
      case "data":
        if (n !== "object") {
          zs(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(r);
          break;
        }
        l = $s("" + l), t.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (r === "formAction" ? (n !== "input" && Nt(t, n, "name", u.name, u, null), Nt(
            t,
            n,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Nt(
            t,
            n,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Nt(
            t,
            n,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Nt(t, n, "encType", u.encType, u, null), Nt(t, n, "method", u.method, u, null), Nt(t, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(r);
          break;
        }
        l = $s("" + l), t.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (t.onclick = or);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = r;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        r = $s("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, "" + l) : t.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, "") : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, l) : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(r, l) : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(r) : t.setAttribute(r, l);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), Os(t, "popover", l);
        break;
      case "xlinkActuate":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        rr(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        rr(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        rr(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        rr(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Os(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Wx.get(r) || r, Os(t, r, l));
    }
  }
  function Uf(t, n, r, l, u, f) {
    switch (r) {
      case "style":
        rh(t, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Vo(t, l) : (typeof l == "number" || typeof l == "bigint") && Vo(t, "" + l);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = or);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!po.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), n = r.slice(2, u ? r.length - 7 : void 0), f = t[Vt] || null, f = f != null ? f[r] : null, typeof f == "function" && t.removeEventListener(n, f, u), typeof l == "function")) {
              typeof f != "function" && f !== null && (r in t ? t[r] = null : t.hasAttribute(r) && t.removeAttribute(r)), t.addEventListener(n, l, u);
              break e;
            }
            r in t ? t[r] = l : l === !0 ? t.setAttribute(r, "") : Os(t, r, l);
          }
    }
  }
  function On(t, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var l = !1, u = !1, f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var b = r[f];
            if (b != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, n));
                default:
                  Nt(t, n, f, b, r, null);
              }
          }
        u && Nt(t, n, "srcSet", r.srcSet, r, null), l && Nt(t, n, "src", r.src, r, null);
        return;
      case "input":
        dt("invalid", t);
        var A = f = b = u = null, _ = null, Q = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var ne = r[l];
            if (ne != null)
              switch (l) {
                case "name":
                  u = ne;
                  break;
                case "type":
                  b = ne;
                  break;
                case "checked":
                  _ = ne;
                  break;
                case "defaultChecked":
                  Q = ne;
                  break;
                case "value":
                  f = ne;
                  break;
                case "defaultValue":
                  A = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null)
                    throw Error(i(137, n));
                  break;
                default:
                  Nt(t, n, l, ne, r, null);
              }
          }
        eh(
          t,
          f,
          A,
          _,
          Q,
          b,
          u,
          !1
        );
        return;
      case "select":
        dt("invalid", t), l = b = f = null;
        for (u in r)
          if (r.hasOwnProperty(u) && (A = r[u], A != null))
            switch (u) {
              case "value":
                f = A;
                break;
              case "defaultValue":
                b = A;
                break;
              case "multiple":
                l = A;
              default:
                Nt(t, n, u, A, r, null);
            }
        n = f, r = b, t.multiple = !!l, n != null ? Po(t, !!l, n, !1) : r != null && Po(t, !!l, r, !0);
        return;
      case "textarea":
        dt("invalid", t), f = u = l = null;
        for (b in r)
          if (r.hasOwnProperty(b) && (A = r[b], A != null))
            switch (b) {
              case "value":
                l = A;
                break;
              case "defaultValue":
                u = A;
                break;
              case "children":
                f = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(i(91));
                break;
              default:
                Nt(t, n, b, A, r, null);
            }
        nh(t, l, u, f);
        return;
      case "option":
        for (_ in r)
          if (r.hasOwnProperty(_) && (l = r[_], l != null))
            switch (_) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Nt(t, n, _, l, r, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ml.length; l++)
          dt(Ml[l], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Q in r)
          if (r.hasOwnProperty(Q) && (l = r[Q], l != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                Nt(t, n, Q, l, r, null);
            }
        return;
      default:
        if (Ju(n)) {
          for (ne in r)
            r.hasOwnProperty(ne) && (l = r[ne], l !== void 0 && Uf(
              t,
              n,
              ne,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (A in r)
      r.hasOwnProperty(A) && (l = r[A], l != null && Nt(t, n, A, l, r, null));
  }
  function SC(t, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, f = null, b = null, A = null, _ = null, Q = null, ne = null;
        for (ee in r) {
          var ce = r[ee];
          if (r.hasOwnProperty(ee) && ce != null)
            switch (ee) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = ce;
              default:
                l.hasOwnProperty(ee) || Nt(t, n, ee, null, l, ce);
            }
        }
        for (var Z in l) {
          var ee = l[Z];
          if (ce = r[Z], l.hasOwnProperty(Z) && (ee != null || ce != null))
            switch (Z) {
              case "type":
                f = ee;
                break;
              case "name":
                u = ee;
                break;
              case "checked":
                Q = ee;
                break;
              case "defaultChecked":
                ne = ee;
                break;
              case "value":
                b = ee;
                break;
              case "defaultValue":
                A = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(i(137, n));
                break;
              default:
                ee !== ce && Nt(
                  t,
                  n,
                  Z,
                  ee,
                  l,
                  ce
                );
            }
        }
        Qu(
          t,
          b,
          A,
          _,
          Q,
          ne,
          f,
          u
        );
        return;
      case "select":
        ee = b = A = Z = null;
        for (f in r)
          if (_ = r[f], r.hasOwnProperty(f) && _ != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                ee = _;
              default:
                l.hasOwnProperty(f) || Nt(
                  t,
                  n,
                  f,
                  null,
                  l,
                  _
                );
            }
        for (u in l)
          if (f = l[u], _ = r[u], l.hasOwnProperty(u) && (f != null || _ != null))
            switch (u) {
              case "value":
                Z = f;
                break;
              case "defaultValue":
                A = f;
                break;
              case "multiple":
                b = f;
              default:
                f !== _ && Nt(
                  t,
                  n,
                  u,
                  f,
                  l,
                  _
                );
            }
        n = A, r = b, l = ee, Z != null ? Po(t, !!r, Z, !1) : !!l != !!r && (n != null ? Po(t, !!r, n, !0) : Po(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        ee = Z = null;
        for (A in r)
          if (u = r[A], r.hasOwnProperty(A) && u != null && !l.hasOwnProperty(A))
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, n, A, null, l, u);
            }
        for (b in l)
          if (u = l[b], f = r[b], l.hasOwnProperty(b) && (u != null || f != null))
            switch (b) {
              case "value":
                Z = u;
                break;
              case "defaultValue":
                ee = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== f && Nt(t, n, b, u, l, f);
            }
        th(t, Z, ee);
        return;
      case "option":
        for (var we in r)
          if (Z = r[we], r.hasOwnProperty(we) && Z != null && !l.hasOwnProperty(we))
            switch (we) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Nt(
                  t,
                  n,
                  we,
                  null,
                  l,
                  Z
                );
            }
        for (_ in l)
          if (Z = l[_], ee = r[_], l.hasOwnProperty(_) && Z !== ee && (Z != null || ee != null))
            switch (_) {
              case "selected":
                t.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                Nt(
                  t,
                  n,
                  _,
                  Z,
                  l,
                  ee
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Pe in r)
          Z = r[Pe], r.hasOwnProperty(Pe) && Z != null && !l.hasOwnProperty(Pe) && Nt(t, n, Pe, null, l, Z);
        for (Q in l)
          if (Z = l[Q], ee = r[Q], l.hasOwnProperty(Q) && Z !== ee && (Z != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(i(137, n));
                break;
              default:
                Nt(
                  t,
                  n,
                  Q,
                  Z,
                  l,
                  ee
                );
            }
        return;
      default:
        if (Ju(n)) {
          for (var Lt in r)
            Z = r[Lt], r.hasOwnProperty(Lt) && Z !== void 0 && !l.hasOwnProperty(Lt) && Uf(
              t,
              n,
              Lt,
              void 0,
              l,
              Z
            );
          for (ne in l)
            Z = l[ne], ee = r[ne], !l.hasOwnProperty(ne) || Z === ee || Z === void 0 && ee === void 0 || Uf(
              t,
              n,
              ne,
              Z,
              l,
              ee
            );
          return;
        }
    }
    for (var q in r)
      Z = r[q], r.hasOwnProperty(q) && Z != null && !l.hasOwnProperty(q) && Nt(t, n, q, null, l, Z);
    for (ce in l)
      Z = l[ce], ee = r[ce], !l.hasOwnProperty(ce) || Z === ee || Z == null && ee == null || Nt(t, n, ce, Z, l, ee);
  }
  function ov(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function CC() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], f = u.transferSize, b = u.initiatorType, A = u.duration;
        if (f && A && ov(b)) {
          for (b = 0, A = u.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], Q = _.startTime;
            if (Q > A) break;
            var ne = _.transferSize, ce = _.initiatorType;
            ne && ov(ce) && (_ = _.responseEnd, b += ne * (_ < A ? 1 : (A - Q) / (_ - Q)));
          }
          if (--l, n += 8 * (f + b) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var If = null, Pf = null;
  function Mc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function iv(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lv(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Vf(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Gf = null;
  function EC() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Gf ? !1 : (Gf = t, !0) : (Gf = null, !1);
  }
  var sv = typeof setTimeout == "function" ? setTimeout : void 0, TC = typeof clearTimeout == "function" ? clearTimeout : void 0, cv = typeof Promise == "function" ? Promise : void 0, RC = typeof queueMicrotask == "function" ? queueMicrotask : typeof cv < "u" ? function(t) {
    return cv.resolve(null).then(t).catch(wC);
  } : sv;
  function wC(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Fr(t) {
    return t === "head";
  }
  function uv(t, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (t.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            t.removeChild(u), xi(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          Ol(t.ownerDocument.documentElement);
        else if (r === "head") {
          r = t.ownerDocument.head, Ol(r);
          for (var f = r.firstChild; f; ) {
            var b = f.nextSibling, A = f.nodeName;
            f[et] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = b;
          }
        } else
          r === "body" && Ol(t.ownerDocument.body);
      r = u;
    } while (r);
    xi(n);
  }
  function dv(t, n) {
    var r = t;
    t = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8)
        if (r = l.data, r === "/$") {
          if (t === 0) break;
          t--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || t++;
      r = l;
    } while (r);
  }
  function qf(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qf(r), Et(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function MC(t, n, r, l) {
    for (; t.nodeType === 1; ) {
      var u = r;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[et])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (f = t.getAttribute("src"), (f !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === f)
          return t;
      } else return t;
      if (t = Sa(t.nextSibling), t === null) break;
    }
    return null;
  }
  function AC(t, n, r) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !r || (t = Sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function fv(t, n) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function Yf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ff(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function OC(t, n) {
    var r = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || r.readyState !== "loading")
      n();
    else {
      var l = function() {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Sa(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var Wf = null;
  function pv(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return Sa(t.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function mv(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return t;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function hv(t, n, r) {
    switch (n = Mc(r), t) {
      case "html":
        if (t = n.documentElement, !t) throw Error(i(452));
        return t;
      case "head":
        if (t = n.head, !t) throw Error(i(453));
        return t;
      case "body":
        if (t = n.body, !t) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Ol(t) {
    for (var n = t.attributes; n.length; )
      t.removeAttributeNode(n[0]);
    Et(t);
  }
  var Ca = /* @__PURE__ */ new Map(), gv = /* @__PURE__ */ new Set();
  function Ac(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Sr = V.d;
  V.d = {
    f: zC,
    r: DC,
    D: $C,
    C: kC,
    L: NC,
    m: LC,
    X: BC,
    S: jC,
    M: _C
  };
  function zC() {
    var t = Sr.f(), n = bc();
    return t || n;
  }
  function DC(t) {
    var n = bn(t);
    n !== null && n.tag === 5 && n.type === "form" ? kg(n) : Sr.r(t);
  }
  var yi = typeof document > "u" ? null : document;
  function yv(t, n, r) {
    var l = yi;
    if (l && typeof n == "string" && n) {
      var u = ma(n);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), gv.has(u) || (gv.add(u), t = { rel: t, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), On(n, "link", t), ln(n), l.head.appendChild(n)));
    }
  }
  function $C(t) {
    Sr.D(t), yv("dns-prefetch", t, null);
  }
  function kC(t, n) {
    Sr.C(t, n), yv("preconnect", t, n);
  }
  function NC(t, n, r) {
    Sr.L(t, n, r);
    var l = yi;
    if (l && t && n) {
      var u = 'link[rel="preload"][as="' + ma(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + ma(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + ma(
        r.imageSizes
      ) + '"]')) : u += '[href="' + ma(t) + '"]';
      var f = u;
      switch (n) {
        case "style":
          f = vi(t);
          break;
        case "script":
          f = bi(t);
      }
      Ca.has(f) || (t = y(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : t,
          as: n
        },
        r
      ), Ca.set(f, t), l.querySelector(u) !== null || n === "style" && l.querySelector(zl(f)) || n === "script" && l.querySelector(Dl(f)) || (n = l.createElement("link"), On(n, "link", t), ln(n), l.head.appendChild(n)));
    }
  }
  function LC(t, n) {
    Sr.m(t, n);
    var r = yi;
    if (r && t) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + ma(l) + '"][href="' + ma(t) + '"]', f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = bi(t);
      }
      if (!Ca.has(f) && (t = y({ rel: "modulepreload", href: t }, n), Ca.set(f, t), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Dl(f)))
              return;
        }
        l = r.createElement("link"), On(l, "link", t), ln(l), r.head.appendChild(l);
      }
    }
  }
  function jC(t, n, r) {
    Sr.S(t, n, r);
    var l = yi;
    if (l && t) {
      var u = Ar(l).hoistableStyles, f = vi(t);
      n = n || "default";
      var b = u.get(f);
      if (!b) {
        var A = { loading: 0, preload: null };
        if (b = l.querySelector(
          zl(f)
        ))
          A.loading = 5;
        else {
          t = y(
            { rel: "stylesheet", href: t, "data-precedence": n },
            r
          ), (r = Ca.get(f)) && Kf(t, r);
          var _ = b = l.createElement("link");
          ln(_), On(_, "link", t), _._p = new Promise(function(Q, ne) {
            _.onload = Q, _.onerror = ne;
          }), _.addEventListener("load", function() {
            A.loading |= 1;
          }), _.addEventListener("error", function() {
            A.loading |= 2;
          }), A.loading |= 4, Oc(b, n, l);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: A
        }, u.set(f, b);
      }
    }
  }
  function BC(t, n) {
    Sr.X(t, n);
    var r = yi;
    if (r && t) {
      var l = Ar(r).hoistableScripts, u = bi(t), f = l.get(u);
      f || (f = r.querySelector(Dl(u)), f || (t = y({ src: t, async: !0 }, n), (n = Ca.get(u)) && Xf(t, n), f = r.createElement("script"), ln(f), On(f, "link", t), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function _C(t, n) {
    Sr.M(t, n);
    var r = yi;
    if (r && t) {
      var l = Ar(r).hoistableScripts, u = bi(t), f = l.get(u);
      f || (f = r.querySelector(Dl(u)), f || (t = y({ src: t, async: !0, type: "module" }, n), (n = Ca.get(u)) && Xf(t, n), f = r.createElement("script"), ln(f), On(f, "link", t), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function vv(t, n, r, l) {
    var u = (u = se.current) ? Ac(u) : null;
    if (!u) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (n = vi(r.href), r = Ar(
          u
        ).hoistableStyles, l = r.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          t = vi(r.href);
          var f = Ar(
            u
          ).hoistableStyles, b = f.get(t);
          if (b || (u = u.ownerDocument || u, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(t, b), (f = u.querySelector(
            zl(t)
          )) && !f._p && (b.instance = f, b.state.loading = 5), Ca.has(t) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Ca.set(t, r), f || HC(
            u,
            t,
            r,
            b.state
          ))), n && l === null)
            throw Error(i(528, ""));
          return b;
        }
        if (n && l !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = bi(r), r = Ar(
          u
        ).hoistableScripts, l = r.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, t));
    }
  }
  function vi(t) {
    return 'href="' + ma(t) + '"';
  }
  function zl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function bv(t) {
    return y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function HC(t, n, r, l) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = t.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), On(n, "link", r), ln(n), t.head.appendChild(n));
  }
  function bi(t) {
    return '[src="' + ma(t) + '"]';
  }
  function Dl(t) {
    return "script[async]" + t;
  }
  function xv(t, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + ma(r.href) + '"]'
          );
          if (l)
            return n.instance = l, ln(l), l;
          var u = y({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), ln(l), On(l, "style", u), Oc(l, r.precedence, t), n.instance = l;
        case "stylesheet":
          u = vi(r.href);
          var f = t.querySelector(
            zl(u)
          );
          if (f)
            return n.state.loading |= 4, n.instance = f, ln(f), f;
          l = bv(r), (u = Ca.get(u)) && Kf(l, u), f = (t.ownerDocument || t).createElement("link"), ln(f);
          var b = f;
          return b._p = new Promise(function(A, _) {
            b.onload = A, b.onerror = _;
          }), On(f, "link", l), n.state.loading |= 4, Oc(f, r.precedence, t), n.instance = f;
        case "script":
          return f = bi(r.src), (u = t.querySelector(
            Dl(f)
          )) ? (n.instance = u, ln(u), u) : (l = r, (u = Ca.get(f)) && (l = y({}, r), Xf(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), ln(u), On(u, "link", l), t.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, Oc(l, r.precedence, t));
    return n.instance;
  }
  function Oc(t, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, f = u, b = 0; b < l.length; b++) {
      var A = l[b];
      if (A.dataset.precedence === n) f = A;
      else if (f !== u) break;
    }
    f ? f.parentNode.insertBefore(t, f.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(t, n.firstChild));
  }
  function Kf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title);
  }
  function Xf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity);
  }
  var zc = null;
  function Sv(t, n, r) {
    if (zc === null) {
      var l = /* @__PURE__ */ new Map(), u = zc = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = zc, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(t)) return l;
    for (l.set(t, null), r = r.getElementsByTagName(t), u = 0; u < r.length; u++) {
      var f = r[u];
      if (!(f[et] || f[pt] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = f.getAttribute(n) || "";
        b = t + b;
        var A = l.get(b);
        A ? A.push(f) : l.set(b, [f]);
      }
    }
    return l;
  }
  function Cv(t, n, r) {
    t = t.ownerDocument || t, t.head.insertBefore(
      r,
      n === "title" ? t.querySelector("head > title") : null
    );
  }
  function UC(t, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return t = n.disabled, typeof n.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Ev(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function IC(t, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = vi(l.href), f = n.querySelector(
          zl(u)
        );
        if (f) {
          n = f._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = Dc.bind(t), n.then(t, t)), r.state.loading |= 4, r.instance = f, ln(f);
          return;
        }
        f = n.ownerDocument || n, l = bv(l), (u = Ca.get(u)) && Kf(l, u), f = f.createElement("link"), ln(f);
        var b = f;
        b._p = new Promise(function(A, _) {
          b.onload = A, b.onerror = _;
        }), On(f, "link", l), r.instance = f;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (t.count++, r = Dc.bind(t), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var Qf = 0;
  function PC(t, n) {
    return t.stylesheets && t.count === 0 && kc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (t.stylesheets && kc(t, t.stylesheets), t.unsuspend) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, 6e4 + n);
      0 < t.imgBytes && Qf === 0 && (Qf = 62500 * CC());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && kc(t, t.stylesheets), t.unsuspend)) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        },
        (t.imgBytes > Qf ? 50 : 800) + n
      );
      return t.unsuspend = r, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Dc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) kc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $c = null;
  function kc(t, n) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $c = /* @__PURE__ */ new Map(), n.forEach(VC, t), $c = null, Dc.call(t));
  }
  function VC(t, n) {
    if (!(n.state.loading & 4)) {
      var r = $c.get(t);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), $c.set(t, r);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < u.length; f++) {
          var b = u[f];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (r.set(b.dataset.precedence, b), l = b);
        }
        l && r.set(null, l);
      }
      u = n.instance, b = u.getAttribute("data-precedence"), f = r.get(b) || l, f === l && r.set(null, u), r.set(b, u), this.count++, l = Dc.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), f ? f.parentNode.insertBefore(u, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), n.state.loading |= 4;
    }
  }
  var $l = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function GC(t, n, r, l, u, f, b, A, _) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = on(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = on(0), this.hiddenUpdates = on(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tv(t, n, r, l, u, f, b, A, _, Q, ne, ce) {
    return t = new GC(
      t,
      n,
      r,
      b,
      _,
      Q,
      ne,
      ce,
      A
    ), n = 1, f === !0 && (n |= 24), f = ea(3, null, null, n), t.current = f, f.stateNode = t, n = Od(), n.refCount++, t.pooledCache = n, n.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, kd(f), t;
  }
  function Rv(t) {
    return t ? (t = Xo, t) : Xo;
  }
  function wv(t, n, r, l, u, f) {
    u = Rv(u), l.context === null ? l.context = u : l.pendingContext = u, l = jr(n), l.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (l.callback = f), r = Br(t, l, n), r !== null && (Yn(r, t, n), ul(r, t, n));
  }
  function Mv(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function Zf(t, n) {
    Mv(t, n), (t = t.alternate) && Mv(t, n);
  }
  function Av(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = yo(t, 67108864);
      n !== null && Yn(n, t, 67108864), Zf(t, 67108864);
    }
  }
  function Ov(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = oa();
      n = Cn(n);
      var r = yo(t, n);
      r !== null && Yn(r, t, n), Zf(t, n);
    }
  }
  var Nc = !0;
  function qC(t, n, r, l) {
    var u = N.T;
    N.T = null;
    var f = V.p;
    try {
      V.p = 2, Jf(t, n, r, l);
    } finally {
      V.p = f, N.T = u;
    }
  }
  function YC(t, n, r, l) {
    var u = N.T;
    N.T = null;
    var f = V.p;
    try {
      V.p = 8, Jf(t, n, r, l);
    } finally {
      V.p = f, N.T = u;
    }
  }
  function Jf(t, n, r, l) {
    if (Nc) {
      var u = ep(l);
      if (u === null)
        Hf(
          t,
          n,
          l,
          Lc,
          r
        ), Dv(t, l);
      else if (WC(
        u,
        t,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (Dv(t, l), n & 4 && -1 < FC.indexOf(t)) {
        for (; u !== null; ) {
          var f = bn(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var b = Sn(f.pendingLanes);
                  if (b !== 0) {
                    var A = f;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; b; ) {
                      var _ = 1 << 31 - $e(b);
                      A.entanglements[1] |= _, b &= ~_;
                    }
                    Ya(f), (Tt & 6) === 0 && (yc = Ue() + 500, wl(0));
                  }
                }
                break;
              case 31:
              case 13:
                A = yo(f, 2), A !== null && Yn(A, f, 2), bc(), Zf(f, 2);
            }
          if (f = ep(l), f === null && Hf(
            t,
            n,
            l,
            Lc,
            r
          ), f === u) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else
        Hf(
          t,
          n,
          l,
          null,
          r
        );
    }
  }
  function ep(t) {
    return t = td(t), tp(t);
  }
  var Lc = null;
  function tp(t) {
    if (Lc = null, t = Ht(t), t !== null) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (t = d(n), t !== null) return t;
          t = null;
        } else if (r === 31) {
          if (t = p(n), t !== null) return t;
          t = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return Lc = t, null;
  }
  function zv(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ft()) {
          case rn:
            return 2;
          case Bt:
            return 8;
          case Je:
          case Ke:
            return 32;
          case je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var np = !1, Wr = null, Kr = null, Xr = null, kl = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map(), Qr = [], FC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Dv(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Wr = null;
        break;
      case "dragenter":
      case "dragleave":
        Kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Xr = null;
        break;
      case "pointerover":
      case "pointerout":
        kl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nl.delete(n.pointerId);
    }
  }
  function Ll(t, n, r, l, u, f) {
    return t === null || t.nativeEvent !== f ? (t = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [u]
    }, n !== null && (n = bn(n), n !== null && Av(n)), t) : (t.eventSystemFlags |= l, n = t.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), t);
  }
  function WC(t, n, r, l, u) {
    switch (n) {
      case "focusin":
        return Wr = Ll(
          Wr,
          t,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return Kr = Ll(
          Kr,
          t,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return Xr = Ll(
          Xr,
          t,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return kl.set(
          f,
          Ll(
            kl.get(f) || null,
            t,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, Nl.set(
          f,
          Ll(
            Nl.get(f) || null,
            t,
            n,
            r,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function $v(t) {
    var n = Ht(t.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = d(r), n !== null) {
            t.blockedOn = n, Na(t.priority, function() {
              Ov(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            t.blockedOn = n, Na(t.priority, function() {
              Ov(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function jc(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var r = ep(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        ed = l, r.target.dispatchEvent(l), ed = null;
      } else
        return n = bn(r), n !== null && Av(n), t.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function kv(t, n, r) {
    jc(t) && r.delete(n);
  }
  function KC() {
    np = !1, Wr !== null && jc(Wr) && (Wr = null), Kr !== null && jc(Kr) && (Kr = null), Xr !== null && jc(Xr) && (Xr = null), kl.forEach(kv), Nl.forEach(kv);
  }
  function Bc(t, n) {
    t.blockedOn === n && (t.blockedOn = null, np || (np = !0, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      KC
    )));
  }
  var _c = null;
  function Nv(t) {
    _c !== t && (_c = t, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      function() {
        _c === t && (_c = null);
        for (var n = 0; n < t.length; n += 3) {
          var r = t[n], l = t[n + 1], u = t[n + 2];
          if (typeof l != "function") {
            if (tp(l || r) === null)
              continue;
            break;
          }
          var f = bn(r);
          f !== null && (t.splice(n, 3), n -= 3, Jd(
            f,
            {
              pending: !0,
              data: u,
              method: r.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function xi(t) {
    function n(_) {
      return Bc(_, t);
    }
    Wr !== null && Bc(Wr, t), Kr !== null && Bc(Kr, t), Xr !== null && Bc(Xr, t), kl.forEach(n), Nl.forEach(n);
    for (var r = 0; r < Qr.length; r++) {
      var l = Qr[r];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Qr.length && (r = Qr[0], r.blockedOn === null); )
      $v(r), r.blockedOn === null && Qr.shift();
    if (r = (t.ownerDocument || t).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], f = r[l + 1], b = u[Vt] || null;
        if (typeof f == "function")
          b || Nv(r);
        else if (b) {
          var A = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, b = f[Vt] || null)
              A = b.formAction;
            else if (tp(u) !== null) continue;
          } else A = b.action;
          typeof A == "function" ? r[l + 1] = A : (r.splice(l, 3), l -= 3), Nv(r);
        }
      }
  }
  function Lv() {
    function t(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(b) {
            return u = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      u !== null && (u(), u = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), u !== null && (u(), u = null);
      };
    }
  }
  function ap(t) {
    this._internalRoot = t;
  }
  Hc.prototype.render = ap.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var r = n.current, l = oa();
    wv(r, l, t, n, null, null);
  }, Hc.prototype.unmount = ap.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      wv(t.current, 2, null, t, null, null), bc(), n[La] = null;
    }
  };
  function Hc(t) {
    this._internalRoot = t;
  }
  Hc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = fa();
      t = { blockedOn: null, target: t, priority: n };
      for (var r = 0; r < Qr.length && n !== 0 && n < Qr[r].priority; r++) ;
      Qr.splice(r, 0, t), r === 0 && $v(t);
    }
  };
  var jv = a.version;
  if (jv !== "19.2.8")
    throw Error(
      i(
        527,
        jv,
        "19.2.8"
      )
    );
  V.findDOMNode = function(t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = h(n), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var XC = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uc.isDisabled && Uc.supportsFiber)
      try {
        lt = Uc.inject(
          XC
        ), gt = Uc;
      } catch {
      }
  }
  return Il.createRoot = function(t, n) {
    if (!s(t)) throw Error(i(299));
    var r = !1, l = "", u = Vg, f = Gg, b = qg;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError)), n = Tv(
      t,
      1,
      !1,
      null,
      null,
      r,
      l,
      null,
      u,
      f,
      b,
      Lv
    ), t[La] = n.current, _f(t), new ap(n);
  }, Il.hydrateRoot = function(t, n, r) {
    if (!s(t)) throw Error(i(299));
    var l = !1, u = "", f = Vg, b = Gg, A = qg, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (b = r.onCaughtError), r.onRecoverableError !== void 0 && (A = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), n = Tv(
      t,
      1,
      !0,
      n,
      r ?? null,
      l,
      u,
      _,
      f,
      b,
      A,
      Lv
    ), n.context = Rv(null), r = n.current, l = oa(), l = Cn(l), u = jr(l), u.callback = null, Br(r, u, l), r = l, n.current.lanes = r, ve(n, r), Ya(n), t[La] = n.current, _f(t), new Hc(n);
  }, Il.version = "19.2.8", Il;
}
var B0;
function pM() {
  if (B0) return xp.exports;
  B0 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (a) {
        console.error(a);
      }
  }
  return e(), xp.exports = fM(), xp.exports;
}
var mM = pM();
const hM = /* @__PURE__ */ em(mM);
function gM(e) {
  return /* @__PURE__ */ T.jsx(H1, {
    ...e,
    defaultTheme: $m,
    themeId: Ua
  });
}
function yM(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ T.jsx(gM, {
        styles: typeof e == "function" ? (i) => e({
          theme: i,
          ...o
        }) : e
      })
    );
  };
}
function vM() {
  return Rm;
}
const Ve = yw;
function Ye(e) {
  return hw(e);
}
function bM(e) {
  return Ge("MuiSvgIcon", e);
}
_e("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const xM = (e) => {
  const {
    color: a,
    fontSize: o,
    classes: i
  } = e, s = {
    root: ["root", a !== "inherit" && `color${ue(a)}`, `fontSize${ue(o)}`]
  };
  return qe(s, bM, i);
}, SM = de("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.color !== "inherit" && a[`color${ue(o.color)}`], a[`fontSize${ue(o.fontSize)}`]];
  }
})(Ve(({
  theme: e
}) => {
  var a, o, i, s, c, d, p, m, h, g, y, x, C, R;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (s = (a = e.transitions) == null ? void 0 : a.create) == null ? void 0 : s.call(a, "fill", {
      duration: (i = (o = (e.vars ?? e).transitions) == null ? void 0 : o.duration) == null ? void 0 : i.shorter
    }),
    variants: [
      {
        props: (E) => !E.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((d = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : d.call(c, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((m = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : m.call(p, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((g = (h = e.typography) == null ? void 0 : h.pxToRem) == null ? void 0 : g.call(h, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, E]) => E && E.main).map(([E]) => {
        var w, z;
        return {
          props: {
            color: E
          },
          style: {
            color: (z = (w = (e.vars ?? e).palette) == null ? void 0 : w[E]) == null ? void 0 : z.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (x = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : x.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (R = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) == null ? void 0 : R.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Up = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: c,
    color: d = "inherit",
    component: p = "svg",
    fontSize: m = "medium",
    htmlColor: h,
    inheritViewBox: g = !1,
    titleAccess: y,
    viewBox: x = "0 0 24 24",
    ...C
  } = i, R = /* @__PURE__ */ v.isValidElement(s) && s.type === "svg", E = {
    ...i,
    color: d,
    component: p,
    fontSize: m,
    instanceFontSize: a.fontSize,
    inheritViewBox: g,
    viewBox: x,
    hasSvgAsChild: R
  }, w = {};
  g || (w.viewBox = x);
  const z = xM(E);
  return /* @__PURE__ */ T.jsxs(SM, {
    as: p,
    className: he(z.root, c),
    focusable: "false",
    color: h,
    "aria-hidden": y ? void 0 : !0,
    role: y ? "img" : void 0,
    ref: o,
    ...w,
    ...C,
    ...R && s.props,
    ownerState: E,
    children: [R ? s.props.children : s, y ? /* @__PURE__ */ T.jsx("title", {
      children: y
    }) : null]
  });
});
Up.muiName = "SvgIcon";
function Yt(e, a) {
  function o(i, s) {
    return /* @__PURE__ */ T.jsx(Up, {
      "data-testid": `${a}Icon`,
      ref: s,
      ...i,
      children: e
    });
  }
  return o.muiName = Up.muiName, /* @__PURE__ */ v.memo(/* @__PURE__ */ v.forwardRef(o));
}
function fx(e, a) {
  if (!e)
    return a;
  if (typeof e == "function" || typeof a == "function")
    return (s) => {
      const c = typeof a == "function" ? a(s) : a, d = typeof e == "function" ? e({
        ...s,
        ...c
      }) : e, p = he(s == null ? void 0 : s.className, c == null ? void 0 : c.className, d == null ? void 0 : d.className);
      return {
        ...c,
        ...d,
        ...!!p && {
          className: p
        },
        ...(c == null ? void 0 : c.style) && (d == null ? void 0 : d.style) && {
          style: {
            ...c.style,
            ...d.style
          }
        },
        ...(c == null ? void 0 : c.sx) && (d == null ? void 0 : d.sx) && {
          sx: [...Array.isArray(c.sx) ? c.sx : [c.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
        }
      };
    };
  const o = a, i = he(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...a,
    ...e,
    ...!!i && {
      className: i
    },
    ...(o == null ? void 0 : o.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...(o == null ? void 0 : o.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
function px(e, a) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) !== -1) continue;
    o[i] = e[i];
  }
  return o;
}
function Ip(e, a) {
  return Ip = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, Ip(e, a);
}
function mx(e, a) {
  e.prototype = Object.create(a.prototype), e.prototype.constructor = e, Ip(e, a);
}
const _0 = {
  disabled: !1
}, bu = Be.createContext(null);
var CM = function(a) {
  return a.scrollTop;
}, Xl = "unmounted", Do = "exited", $o = "entering", Ai = "entered", Pp = "exiting", ka = /* @__PURE__ */ (function(e) {
  mx(a, e);
  function a(i, s) {
    var c;
    c = e.call(this, i, s) || this;
    var d = s, p = d && !d.isMounting ? i.enter : i.appear, m;
    return c.appearStatus = null, i.in ? p ? (m = Do, c.appearStatus = $o) : m = Ai : i.unmountOnExit || i.mountOnEnter ? m = Xl : m = Do, c.state = {
      status: m
    }, c.nextCallback = null, c;
  }
  a.getDerivedStateFromProps = function(s, c) {
    var d = s.in;
    return d && c.status === Xl ? {
      status: Do
    } : null;
  };
  var o = a.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(s) {
    var c = null;
    if (s !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== $o && d !== Ai && (c = $o) : (d === $o || d === Ai) && (c = Pp);
    }
    this.updateStatus(!1, c);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var s = this.props.timeout, c, d, p;
    return c = d = p = s, s != null && typeof s != "number" && (c = s.exit, d = s.enter, p = s.appear !== void 0 ? s.appear : d), {
      exit: c,
      enter: d,
      appear: p
    };
  }, o.updateStatus = function(s, c) {
    if (s === void 0 && (s = !1), c !== null)
      if (this.cancelNextCallback(), c === $o) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Pc.findDOMNode(this);
          d && CM(d);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Do && this.setState({
      status: Xl
    });
  }, o.performEnter = function(s) {
    var c = this, d = this.props.enter, p = this.context ? this.context.isMounting : s, m = this.props.nodeRef ? [p] : [Pc.findDOMNode(this), p], h = m[0], g = m[1], y = this.getTimeouts(), x = p ? y.appear : y.enter;
    if (!s && !d || _0.disabled) {
      this.safeSetState({
        status: Ai
      }, function() {
        c.props.onEntered(h);
      });
      return;
    }
    this.props.onEnter(h, g), this.safeSetState({
      status: $o
    }, function() {
      c.props.onEntering(h, g), c.onTransitionEnd(x, function() {
        c.safeSetState({
          status: Ai
        }, function() {
          c.props.onEntered(h, g);
        });
      });
    });
  }, o.performExit = function() {
    var s = this, c = this.props.exit, d = this.getTimeouts(), p = this.props.nodeRef ? void 0 : Pc.findDOMNode(this);
    if (!c || _0.disabled) {
      this.safeSetState({
        status: Do
      }, function() {
        s.props.onExited(p);
      });
      return;
    }
    this.props.onExit(p), this.safeSetState({
      status: Pp
    }, function() {
      s.props.onExiting(p), s.onTransitionEnd(d.exit, function() {
        s.safeSetState({
          status: Do
        }, function() {
          s.props.onExited(p);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(s, c) {
    c = this.setNextCallback(c), this.setState(s, c);
  }, o.setNextCallback = function(s) {
    var c = this, d = !0;
    return this.nextCallback = function(p) {
      d && (d = !1, c.nextCallback = null, s(p));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(s, c) {
    this.setNextCallback(c);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Pc.findDOMNode(this), p = s == null && !this.props.addEndListener;
    if (!d || p) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], h = m[0], g = m[1];
      this.props.addEndListener(h, g);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, o.render = function() {
    var s = this.state.status;
    if (s === Xl)
      return null;
    var c = this.props, d = c.children;
    c.in, c.mountOnEnter, c.unmountOnExit, c.appear, c.enter, c.exit, c.timeout, c.addEndListener, c.onEnter, c.onEntering, c.onEntered, c.onExit, c.onExiting, c.onExited, c.nodeRef;
    var p = px(c, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Be.createElement(bu.Provider, {
        value: null
      }, typeof d == "function" ? d(s, p) : Be.cloneElement(Be.Children.only(d), p))
    );
  }, a;
})(Be.Component);
ka.contextType = bu;
ka.propTypes = {};
function wi() {
}
ka.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wi,
  onEntering: wi,
  onEntered: wi,
  onExit: wi,
  onExiting: wi,
  onExited: wi
};
ka.UNMOUNTED = Xl;
ka.EXITED = Do;
ka.ENTERING = $o;
ka.ENTERED = Ai;
ka.EXITING = Pp;
function EM(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function km(e, a) {
  var o = function(c) {
    return a && v.isValidElement(c) ? a(c) : c;
  }, i = /* @__PURE__ */ Object.create(null);
  return e && v.Children.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    i[s.key] = o(s);
  }), i;
}
function TM(e, a) {
  e = e || {}, a = a || {};
  function o(g) {
    return g in a ? a[g] : e[g];
  }
  var i = /* @__PURE__ */ Object.create(null), s = [];
  for (var c in e)
    c in a ? s.length && (i[c] = s, s = []) : s.push(c);
  var d, p = {};
  for (var m in a) {
    if (i[m])
      for (d = 0; d < i[m].length; d++) {
        var h = i[m][d];
        p[i[m][d]] = o(h);
      }
    p[m] = o(m);
  }
  for (d = 0; d < s.length; d++)
    p[s[d]] = o(s[d]);
  return p;
}
function Lo(e, a, o) {
  return o[a] != null ? o[a] : e.props[a];
}
function RM(e, a) {
  return km(e.children, function(o) {
    return v.cloneElement(o, {
      onExited: a.bind(null, o),
      in: !0,
      appear: Lo(o, "appear", e),
      enter: Lo(o, "enter", e),
      exit: Lo(o, "exit", e)
    });
  });
}
function wM(e, a, o) {
  var i = km(e.children), s = TM(a, i);
  return Object.keys(s).forEach(function(c) {
    var d = s[c];
    if (v.isValidElement(d)) {
      var p = c in a, m = c in i, h = a[c], g = v.isValidElement(h) && !h.props.in;
      m && (!p || g) ? s[c] = v.cloneElement(d, {
        onExited: o.bind(null, d),
        in: !0,
        exit: Lo(d, "exit", e),
        enter: Lo(d, "enter", e)
      }) : !m && p && !g ? s[c] = v.cloneElement(d, {
        in: !1
      }) : m && p && v.isValidElement(h) && (s[c] = v.cloneElement(d, {
        onExited: o.bind(null, d),
        in: h.props.in,
        exit: Lo(d, "exit", e),
        enter: Lo(d, "enter", e)
      }));
    }
  }), s;
}
var MM = Object.values || function(e) {
  return Object.keys(e).map(function(a) {
    return e[a];
  });
}, AM = {
  component: "div",
  childFactory: function(a) {
    return a;
  }
}, Nm = /* @__PURE__ */ (function(e) {
  mx(a, e);
  function a(i, s) {
    var c;
    c = e.call(this, i, s) || this;
    var d = c.handleExited.bind(EM(c));
    return c.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, c;
  }
  var o = a.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, a.getDerivedStateFromProps = function(s, c) {
    var d = c.children, p = c.handleExited, m = c.firstRender;
    return {
      children: m ? RM(s, p) : wM(s, d, p),
      firstRender: !1
    };
  }, o.handleExited = function(s, c) {
    var d = km(this.props.children);
    s.key in d || (s.props.onExited && s.props.onExited(c), this.mounted && this.setState(function(p) {
      var m = hu({}, p.children);
      return delete m[s.key], {
        children: m
      };
    }));
  }, o.render = function() {
    var s = this.props, c = s.component, d = s.childFactory, p = px(s, ["component", "childFactory"]), m = this.state.contextValue, h = MM(this.state.children).map(d);
    return delete p.appear, delete p.enter, delete p.exit, c === null ? /* @__PURE__ */ Be.createElement(bu.Provider, {
      value: m
    }, h) : /* @__PURE__ */ Be.createElement(bu.Provider, {
      value: m
    }, /* @__PURE__ */ Be.createElement(c, p, h));
  }, a;
})(Be.Component);
Nm.propTypes = {};
Nm.defaultProps = AM;
const Lm = (e) => e.scrollTop;
function lo(e, a) {
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: s.transitionDuration ?? (typeof o == "number" ? o : o[a.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof i == "object" ? i[a.mode] : i),
    delay: s.transitionDelay
  };
}
function OM(e) {
  return Ge("MuiCollapse", e);
}
_e("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const zM = (e) => {
  const {
    orientation: a,
    classes: o
  } = e, i = {
    root: ["root", `${a}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${a}`],
    wrapperInner: ["wrapperInner", `${a}`]
  };
  return qe(i, OM, o);
}, DM = de("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.orientation], o.state === "entered" && a.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && a.hidden];
  }
})(Ve(({
  theme: e
}) => ({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: e.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.state === "exited" && !a.in && a.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), $M = de("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, a) => a.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), kM = de("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, a) => a.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), Vp = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiCollapse"
  }), {
    addEndListener: s,
    children: c,
    className: d,
    collapsedSize: p = "0px",
    component: m,
    easing: h,
    in: g,
    onEnter: y,
    onEntered: x,
    onEntering: C,
    onExit: R,
    onExited: E,
    onExiting: w,
    orientation: z = "vertical",
    style: k,
    timeout: O = lx.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: D = ka,
    ...M
  } = i, $ = {
    ...i,
    orientation: z,
    collapsedSize: p
  }, j = zM($), U = nr(), P = No(), S = v.useRef(null), B = v.useRef(), H = typeof p == "number" ? `${p}px` : p, G = z === "horizontal", J = G ? "width" : "height", F = v.useRef(null), N = an(o, F), V = (se) => (ge) => {
    if (se) {
      const ye = F.current;
      ge === void 0 ? se(ye) : se(ye, ge);
    }
  }, K = () => S.current ? S.current[G ? "clientWidth" : "clientHeight"] : 0, Y = V((se, ge) => {
    S.current && G && (S.current.style.position = "absolute"), se.style[J] = H, y && y(se, ge);
  }), pe = V((se, ge) => {
    const ye = K();
    S.current && G && (S.current.style.position = "");
    const {
      duration: be,
      easing: Te
    } = lo({
      style: k,
      timeout: O,
      easing: h
    }, {
      mode: "enter"
    });
    if (O === "auto") {
      const De = U.transitions.getAutoHeightDuration(ye);
      se.style.transitionDuration = `${De}ms`, B.current = De;
    } else
      se.style.transitionDuration = typeof be == "string" ? be : `${be}ms`;
    se.style[J] = `${ye}px`, se.style.transitionTimingFunction = Te, C && C(se, ge);
  }), L = V((se, ge) => {
    se.style[J] = "auto", x && x(se, ge);
  }), W = V((se) => {
    se.style[J] = `${K()}px`, R && R(se);
  }), re = V(E), te = V((se) => {
    const ge = K(), {
      duration: ye,
      easing: be
    } = lo({
      style: k,
      timeout: O,
      easing: h
    }, {
      mode: "exit"
    });
    if (O === "auto") {
      const Te = U.transitions.getAutoHeightDuration(ge);
      se.style.transitionDuration = `${Te}ms`, B.current = Te;
    } else
      se.style.transitionDuration = typeof ye == "string" ? ye : `${ye}ms`;
    se.style[J] = H, se.style.transitionTimingFunction = be, w && w(se);
  }), fe = (se) => {
    O === "auto" && P.start(B.current || 0, se), s && s(F.current, se);
  };
  return /* @__PURE__ */ T.jsx(D, {
    in: g,
    onEnter: Y,
    onEntered: L,
    onEntering: pe,
    onExit: W,
    onExited: re,
    onExiting: te,
    addEndListener: fe,
    nodeRef: F,
    timeout: O === "auto" ? null : O,
    ...M,
    children: (se, {
      ownerState: ge,
      ...ye
    }) => /* @__PURE__ */ T.jsx(DM, {
      as: m,
      className: he(j.root, d, {
        entered: j.entered,
        exited: !g && H === "0px" && j.hidden
      }[se]),
      style: {
        [G ? "minWidth" : "minHeight"]: H,
        ...k
      },
      ref: N,
      ownerState: {
        ...$,
        state: se
      },
      ...ye,
      children: /* @__PURE__ */ T.jsx($M, {
        ownerState: {
          ...$,
          state: se
        },
        className: j.wrapper,
        ref: S,
        children: /* @__PURE__ */ T.jsx(kM, {
          ownerState: {
            ...$,
            state: se
          },
          className: j.wrapperInner,
          children: c
        })
      })
    })
  });
});
Vp && (Vp.muiSupportAuto = !0);
function NM(e) {
  return Ge("MuiPaper", e);
}
_e("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const LM = (e) => {
  const {
    square: a,
    elevation: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, !a && "rounded", i === "elevation" && `elevation${o}`]
  };
  return qe(c, NM, s);
}, jM = de("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], !o.square && a.rounded, o.variant === "elevation" && a[`elevation${o.elevation}`]];
  }
})(Ve(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: a
    }) => !a.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), co = /* @__PURE__ */ v.forwardRef(function(a, o) {
  var C;
  const i = Ye({
    props: a,
    name: "MuiPaper"
  }), s = nr(), {
    className: c,
    component: d = "div",
    elevation: p = 1,
    square: m = !1,
    variant: h = "elevation",
    ...g
  } = i, y = {
    ...i,
    component: d,
    elevation: p,
    square: m,
    variant: h
  }, x = LM(y);
  return /* @__PURE__ */ T.jsx(jM, {
    as: d,
    ownerState: y,
    className: he(x.root, c),
    ref: o,
    ...g,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[p],
        ...s.vars && {
          "--Paper-overlay": (C = s.vars.overlays) == null ? void 0 : C[p]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${xt("#fff", Hp(p))}, ${xt("#fff", Hp(p))})`
        }
      },
      ...g.style
    }
  });
});
function Ze(e, a) {
  const {
    className: o,
    elementType: i,
    ownerState: s,
    externalForwardedProps: c,
    internalForwardedProps: d,
    shouldForwardComponentProp: p = !1,
    ...m
  } = a, {
    component: h,
    slots: g = {
      [e]: void 0
    },
    slotProps: y = {
      [e]: void 0
    },
    ...x
  } = c, C = g[e] || i, R = Z1(y[e], s), {
    props: {
      component: E,
      ...w
    },
    internalRef: z
  } = Q1({
    className: o,
    ...m,
    externalForwardedProps: e === "root" ? x : void 0,
    externalSlotProps: R
  }), k = an(z, R == null ? void 0 : R.ref, a.ref), O = e === "root" ? E || h : E, D = K1(C, {
    ...e === "root" && !h && !g[e] && d,
    ...e !== "root" && !g[e] && d,
    ...w,
    ...O && !p && {
      as: O
    },
    ...O && p && {
      component: O
    },
    ref: k
  }, s);
  return [C, D];
}
class xu {
  constructor() {
    jl(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new xu();
  }
  static use() {
    const a = F1(xu.create).current, [o, i] = v.useState(!1);
    return a.shouldMount = o, a.setShouldMount = i, v.useEffect(a.mountEffect, [o]), a;
  }
  mount() {
    return this.mounted || (this.mounted = _M(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...a);
    });
  }
  stop(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...a);
    });
  }
  pulsate(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...a);
    });
  }
}
function BM() {
  return xu.use();
}
function _M() {
  let e, a;
  const o = new Promise((i, s) => {
    e = i, a = s;
  });
  return o.resolve = e, o.reject = a, o;
}
function HM(e) {
  const {
    className: a,
    classes: o,
    pulsate: i = !1,
    rippleX: s,
    rippleY: c,
    rippleSize: d,
    in: p,
    onExited: m,
    timeout: h
  } = e, [g, y] = v.useState(!1), x = he(a, o.ripple, o.rippleVisible, i && o.ripplePulsate), C = {
    width: d,
    height: d,
    top: -(d / 2) + c,
    left: -(d / 2) + s
  }, R = he(o.child, g && o.childLeaving, i && o.childPulsate);
  return !p && !g && y(!0), v.useEffect(() => {
    if (!p && m != null) {
      const E = setTimeout(m, h);
      return () => {
        clearTimeout(E);
      };
    }
  }, [m, p, h]), /* @__PURE__ */ T.jsx("span", {
    className: x,
    style: C,
    children: /* @__PURE__ */ T.jsx("span", {
      className: R
    })
  });
}
const Ra = _e("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Gp = 550, UM = 80, IM = Ss`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, PM = Ss`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, VM = Ss`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, GM = de("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), qM = de(HM, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ra.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${IM};
    animation-duration: ${Gp}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ra.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ra.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ra.childLeaving} {
    opacity: 0;
    animation-name: ${PM};
    animation-duration: ${Gp}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ra.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${VM};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, YM = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: c = {},
    className: d,
    ...p
  } = i, [m, h] = v.useState([]), g = v.useRef(0), y = v.useRef(null);
  v.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [m]);
  const x = v.useRef(!1), C = No(), R = v.useRef(null), E = v.useRef(null), w = v.useCallback((D) => {
    const {
      pulsate: M,
      rippleX: $,
      rippleY: j,
      rippleSize: U,
      cb: P
    } = D;
    h((S) => [...S, /* @__PURE__ */ T.jsx(qM, {
      classes: {
        ripple: he(c.ripple, Ra.ripple),
        rippleVisible: he(c.rippleVisible, Ra.rippleVisible),
        ripplePulsate: he(c.ripplePulsate, Ra.ripplePulsate),
        child: he(c.child, Ra.child),
        childLeaving: he(c.childLeaving, Ra.childLeaving),
        childPulsate: he(c.childPulsate, Ra.childPulsate)
      },
      timeout: Gp,
      pulsate: M,
      rippleX: $,
      rippleY: j,
      rippleSize: U
    }, g.current)]), g.current += 1, y.current = P;
  }, [c]), z = v.useCallback((D = {}, M = {}, $ = () => {
  }) => {
    const {
      pulsate: j = !1,
      center: U = s || M.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = M;
    if ((D == null ? void 0 : D.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (D == null ? void 0 : D.type) === "touchstart" && (x.current = !0);
    const S = P ? null : E.current, B = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let H, G, J;
    if (U || D === void 0 || D.clientX === 0 && D.clientY === 0 || !D.clientX && !D.touches)
      H = Math.round(B.width / 2), G = Math.round(B.height / 2);
    else {
      const {
        clientX: F,
        clientY: N
      } = D.touches && D.touches.length > 0 ? D.touches[0] : D;
      H = Math.round(F - B.left), G = Math.round(N - B.top);
    }
    if (U)
      J = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), J % 2 === 0 && (J += 1);
    else {
      const F = Math.max(Math.abs((S ? S.clientWidth : 0) - H), H) * 2 + 2, N = Math.max(Math.abs((S ? S.clientHeight : 0) - G), G) * 2 + 2;
      J = Math.sqrt(F ** 2 + N ** 2);
    }
    D != null && D.touches ? R.current === null && (R.current = () => {
      w({
        pulsate: j,
        rippleX: H,
        rippleY: G,
        rippleSize: J,
        cb: $
      });
    }, C.start(UM, () => {
      R.current && (R.current(), R.current = null);
    })) : w({
      pulsate: j,
      rippleX: H,
      rippleY: G,
      rippleSize: J,
      cb: $
    });
  }, [s, w, C]), k = v.useCallback(() => {
    z({}, {
      pulsate: !0
    });
  }, [z]), O = v.useCallback((D, M) => {
    if (C.clear(), (D == null ? void 0 : D.type) === "touchend" && R.current) {
      R.current(), R.current = null, C.start(0, () => {
        O(D, M);
      });
      return;
    }
    R.current = null, h(($) => $.length > 0 ? $.slice(1) : $), y.current = M;
  }, [C]);
  return v.useImperativeHandle(o, () => ({
    pulsate: k,
    start: z,
    stop: O
  }), [k, z, O]), /* @__PURE__ */ T.jsx(GM, {
    className: he(Ra.root, c.root, d),
    ref: E,
    ...p,
    children: /* @__PURE__ */ T.jsx(Nm, {
      component: null,
      exit: !0,
      children: m
    })
  });
});
function FM(e) {
  return Ge("MuiButtonBase", e);
}
const WM = _e("MuiButtonBase", ["root", "disabled", "focusVisible"]), KM = (e) => {
  const {
    disabled: a,
    focusVisible: o,
    focusVisibleClassName: i,
    classes: s
  } = e, d = qe({
    root: ["root", a && "disabled", o && "focusVisible"]
  }, FM, s);
  return o && i && (d.root += ` ${i}`), d;
}, XM = de("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${WM.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), so = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: c = !1,
    children: d,
    className: p,
    component: m = "button",
    disabled: h = !1,
    disableRipple: g = !1,
    disableTouchRipple: y = !1,
    focusRipple: x = !1,
    focusVisibleClassName: C,
    LinkComponent: R = "a",
    onBlur: E,
    onClick: w,
    onContextMenu: z,
    onDragLeave: k,
    onFocus: O,
    onFocusVisible: D,
    onKeyDown: M,
    onKeyUp: $,
    onMouseDown: j,
    onMouseLeave: U,
    onMouseUp: P,
    onTouchEnd: S,
    onTouchMove: B,
    onTouchStart: H,
    tabIndex: G = 0,
    TouchRippleProps: J,
    touchRippleRef: F,
    type: N,
    ...V
  } = i, K = v.useRef(null), Y = BM(), pe = an(Y.ref, F), [L, W] = v.useState(!1);
  h && L && W(!1), v.useImperativeHandle(s, () => ({
    focusVisible: () => {
      W(!0), K.current.focus();
    }
  }), []);
  const re = Y.shouldMount && !g && !h;
  v.useEffect(() => {
    L && x && !g && Y.pulsate();
  }, [g, x, L, Y]);
  const te = Er(Y, "start", j, y), fe = Er(Y, "stop", z, y), se = Er(Y, "stop", k, y), ge = Er(Y, "stop", P, y), ye = Er(Y, "stop", (Ce) => {
    L && Ce.preventDefault(), U && U(Ce);
  }, y), be = Er(Y, "start", H, y), Te = Er(Y, "stop", S, y), De = Er(Y, "stop", B, y), Se = Er(Y, "stop", (Ce) => {
    vu(Ce.target) || W(!1), E && E(Ce);
  }, !1), ct = Ln((Ce) => {
    K.current || (K.current = Ce.currentTarget), vu(Ce.target) && (W(!0), D && D(Ce)), O && O(Ce);
  }), Oe = () => {
    const Ce = K.current;
    return m && m !== "button" && !(Ce.tagName === "A" && Ce.href);
  }, ke = Ln((Ce) => {
    x && !Ce.repeat && L && Ce.key === " " && Y.stop(Ce, () => {
      Y.start(Ce);
    }), Ce.target === Ce.currentTarget && Oe() && Ce.key === " " && Ce.preventDefault(), M && M(Ce), Ce.target === Ce.currentTarget && Oe() && Ce.key === "Enter" && !h && (Ce.preventDefault(), w && w(Ce));
  }), vt = Ln((Ce) => {
    x && Ce.key === " " && L && !Ce.defaultPrevented && Y.stop(Ce, () => {
      Y.pulsate(Ce);
    }), $ && $(Ce), w && Ce.target === Ce.currentTarget && Oe() && Ce.key === " " && !Ce.defaultPrevented && w(Ce);
  });
  let me = m;
  me === "button" && (V.href || V.to) && (me = R);
  const He = {};
  me === "button" ? (He.type = N === void 0 ? "button" : N, He.disabled = h) : (!V.href && !V.to && (He.role = "button"), h && (He["aria-disabled"] = h));
  const Me = an(o, K), We = {
    ...i,
    centerRipple: c,
    component: m,
    disabled: h,
    disableRipple: g,
    disableTouchRipple: y,
    focusRipple: x,
    tabIndex: G,
    focusVisible: L
  }, Fe = KM(We);
  return /* @__PURE__ */ T.jsxs(XM, {
    as: me,
    className: he(Fe.root, p),
    ownerState: We,
    onBlur: Se,
    onClick: w,
    onContextMenu: fe,
    onFocus: ct,
    onKeyDown: ke,
    onKeyUp: vt,
    onMouseDown: te,
    onMouseLeave: ye,
    onMouseUp: ge,
    onDragLeave: se,
    onTouchEnd: Te,
    onTouchMove: De,
    onTouchStart: be,
    ref: Me,
    tabIndex: h ? -1 : G,
    type: N,
    ...He,
    ...V,
    children: [d, re ? /* @__PURE__ */ T.jsx(YM, {
      ref: pe,
      center: c,
      ...J
    }) : null]
  });
});
function Er(e, a, o, i = !1) {
  return Ln((s) => (o && o(s), i || e[a](s), !0));
}
function QM(e) {
  return typeof e.main == "string";
}
function ZM(e, a = []) {
  if (!QM(e))
    return !1;
  for (const o of a)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function Tn(e = []) {
  return ([, a]) => a && ZM(a, e);
}
function JM(e) {
  return Ge("MuiAlert", e);
}
const H0 = _e("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function eA(e) {
  return Ge("MuiCircularProgress", e);
}
_e("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Jr = 44, qp = Ss`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Yp = Ss`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, tA = typeof qp != "string" ? ym`
        animation: ${qp} 1.4s linear infinite;
      ` : null, nA = typeof Yp != "string" ? ym`
        animation: ${Yp} 1.4s ease-in-out infinite;
      ` : null, aA = (e) => {
  const {
    classes: a,
    variant: o,
    color: i,
    disableShrink: s
  } = e, c = {
    root: ["root", o, `color${ue(i)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ue(o)}`, s && "circleDisableShrink"]
  };
  return qe(c, eA, a);
}, rA = de("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], a[`color${ue(o.color)}`]];
  }
})(Ve(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: tA || {
      animation: `${qp} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Tn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (e.vars || e).palette[a].main
    }
  }))]
}))), oA = de("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, a) => a.svg
})({
  display: "block"
  // Keeps the progress centered
}), iA = de("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.circle, a[`circle${ue(o.variant)}`], o.disableShrink && a.circleDisableShrink];
  }
})(Ve(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: a
    }) => a.variant === "indeterminate" && !a.disableShrink,
    style: nA || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Yp} 1.4s ease-in-out infinite`
    }
  }]
}))), jm = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: c = "primary",
    disableShrink: d = !1,
    size: p = 40,
    style: m,
    thickness: h = 3.6,
    value: g = 0,
    variant: y = "indeterminate",
    ...x
  } = i, C = {
    ...i,
    color: c,
    disableShrink: d,
    size: p,
    thickness: h,
    value: g,
    variant: y
  }, R = aA(C), E = {}, w = {}, z = {};
  if (y === "determinate") {
    const k = 2 * Math.PI * ((Jr - h) / 2);
    E.strokeDasharray = k.toFixed(3), z["aria-valuenow"] = Math.round(g), E.strokeDashoffset = `${((100 - g) / 100 * k).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ T.jsx(rA, {
    className: he(R.root, s),
    style: {
      width: p,
      height: p,
      ...w,
      ...m
    },
    ownerState: C,
    ref: o,
    role: "progressbar",
    ...z,
    ...x,
    children: /* @__PURE__ */ T.jsx(oA, {
      className: R.svg,
      ownerState: C,
      viewBox: `${Jr / 2} ${Jr / 2} ${Jr} ${Jr}`,
      children: /* @__PURE__ */ T.jsx(iA, {
        className: R.circle,
        style: E,
        ownerState: C,
        cx: Jr,
        cy: Jr,
        r: (Jr - h) / 2,
        fill: "none",
        strokeWidth: h
      })
    })
  });
});
function lA(e) {
  return Ge("MuiIconButton", e);
}
const U0 = _e("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), sA = (e) => {
  const {
    classes: a,
    disabled: o,
    color: i,
    edge: s,
    size: c,
    loading: d
  } = e, p = {
    root: ["root", d && "loading", o && "disabled", i !== "default" && `color${ue(i)}`, s && `edge${ue(s)}`, `size${ue(c)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return qe(p, lA, a);
}, cA = de(so, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.loading && a.loading, o.color !== "default" && a[`color${ue(o.color)}`], o.edge && a[`edge${ue(o.edge)}`], a[`size${ue(o.size)}`]];
  }
})(Ve(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (a) => !a.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ve(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Tn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (e.vars || e).palette[a].main
    }
  })), ...Object.entries(e.palette).filter(Tn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[a].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt((e.vars || e).palette[a].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${U0.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${U0.loading}`]: {
    color: "transparent"
  }
}))), uA = de("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, a) => a.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), _o = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: c,
    className: d,
    color: p = "default",
    disabled: m = !1,
    disableFocusRipple: h = !1,
    size: g = "medium",
    id: y,
    loading: x = null,
    loadingIndicator: C,
    ...R
  } = i, E = Uo(y), w = C ?? /* @__PURE__ */ T.jsx(jm, {
    "aria-labelledby": E,
    color: "inherit",
    size: 16
  }), z = {
    ...i,
    edge: s,
    color: p,
    disabled: m,
    disableFocusRipple: h,
    loading: x,
    loadingIndicator: w,
    size: g
  }, k = sA(z);
  return /* @__PURE__ */ T.jsxs(cA, {
    id: x ? E : y,
    className: he(k.root, d),
    centerRipple: !0,
    focusRipple: !h,
    disabled: m || x,
    ref: o,
    ...R,
    ownerState: z,
    children: [typeof x == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: k.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ T.jsx(uA, {
        className: k.loadingIndicator,
        ownerState: z,
        children: x && w
      })
    }), c]
  });
}), dA = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), fA = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), pA = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), mA = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), hx = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), hA = (e) => {
  const {
    variant: a,
    color: o,
    severity: i,
    classes: s
  } = e, c = {
    root: ["root", `color${ue(o || i)}`, `${a}${ue(o || i)}`, `${a}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return qe(c, JM, s);
}, gA = de(co, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], a[`${o.variant}${ue(o.color || o.severity)}`]];
  }
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light" ? ji : Bi, o = e.palette.mode === "light" ? Bi : ji;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Tn(["light"])).map(([i]) => ({
      props: {
        colorSeverity: i,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${i}Color`] : a(e.palette[i].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${i}StandardBg`] : o(e.palette[i].light, 0.9),
        [`& .${H0.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${i}IconColor`]
        } : {
          color: e.palette[i].main
        }
      }
    })), ...Object.entries(e.palette).filter(Tn(["light"])).map(([i]) => ({
      props: {
        colorSeverity: i,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${i}Color`] : a(e.palette[i].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[i].light}`,
        [`& .${H0.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${i}IconColor`]
        } : {
          color: e.palette[i].main
        }
      }
    })), ...Object.entries(e.palette).filter(Tn(["dark"])).map(([i]) => ({
      props: {
        colorSeverity: i,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${i}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${i}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[i].dark : e.palette[i].main,
          color: e.palette.getContrastText(e.palette[i].main)
        }
      }
    }))]
  };
})), yA = de("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, a) => a.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), vA = de("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, a) => a.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), bA = de("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, a) => a.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), I0 = {
  success: /* @__PURE__ */ T.jsx(dA, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ T.jsx(fA, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ T.jsx(pA, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ T.jsx(mA, {
    fontSize: "inherit"
  })
}, xA = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiAlert"
  }), {
    action: s,
    children: c,
    className: d,
    closeText: p = "Close",
    color: m,
    components: h = {},
    componentsProps: g = {},
    icon: y,
    iconMapping: x = I0,
    onClose: C,
    role: R = "alert",
    severity: E = "success",
    slotProps: w = {},
    slots: z = {},
    variant: k = "standard",
    ...O
  } = i, D = {
    ...i,
    color: m,
    severity: E,
    variant: k,
    colorSeverity: m || E
  }, M = hA(D), $ = {
    slots: {
      closeButton: h.CloseButton,
      closeIcon: h.CloseIcon,
      ...z
    },
    slotProps: {
      ...g,
      ...w
    }
  }, [j, U] = Ze("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: he(M.root, d),
    elementType: gA,
    externalForwardedProps: {
      ...$,
      ...O
    },
    ownerState: D,
    additionalProps: {
      role: R,
      elevation: 0
    }
  }), [P, S] = Ze("icon", {
    className: M.icon,
    elementType: yA,
    externalForwardedProps: $,
    ownerState: D
  }), [B, H] = Ze("message", {
    className: M.message,
    elementType: vA,
    externalForwardedProps: $,
    ownerState: D
  }), [G, J] = Ze("action", {
    className: M.action,
    elementType: bA,
    externalForwardedProps: $,
    ownerState: D
  }), [F, N] = Ze("closeButton", {
    elementType: _o,
    externalForwardedProps: $,
    ownerState: D
  }), [V, K] = Ze("closeIcon", {
    elementType: hx,
    externalForwardedProps: $,
    ownerState: D
  });
  return /* @__PURE__ */ T.jsxs(j, {
    ...U,
    children: [y !== !1 ? /* @__PURE__ */ T.jsx(P, {
      ...S,
      children: y || x[E] || I0[E]
    }) : null, /* @__PURE__ */ T.jsx(B, {
      ...H,
      children: c
    }), s != null ? /* @__PURE__ */ T.jsx(G, {
      ...J,
      children: s
    }) : null, s == null && C ? /* @__PURE__ */ T.jsx(G, {
      ...J,
      children: /* @__PURE__ */ T.jsx(F, {
        size: "small",
        "aria-label": p,
        title: p,
        color: "inherit",
        onClick: C,
        ...N,
        children: /* @__PURE__ */ T.jsx(V, {
          fontSize: "small",
          ...K
        })
      })
    }) : null]
  });
});
function SA(e) {
  return Ge("MuiTypography", e);
}
const P0 = _e("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), CA = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, EA = vM(), TA = (e) => {
  const {
    align: a,
    gutterBottom: o,
    noWrap: i,
    paragraph: s,
    variant: c,
    classes: d
  } = e, p = {
    root: ["root", c, e.align !== "inherit" && `align${ue(a)}`, o && "gutterBottom", i && "noWrap", s && "paragraph"]
  };
  return qe(p, SA, d);
}, RA = de("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.variant && a[o.variant], o.align !== "inherit" && a[`align${ue(o.align)}`], o.noWrap && a.noWrap, o.gutterBottom && a.gutterBottom, o.paragraph && a.paragraph];
  }
})(Ve(({
  theme: e
}) => {
  var a;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([o, i]) => o !== "inherit" && i && typeof i == "object").map(([o, i]) => ({
      props: {
        variant: o
      },
      style: i
    })), ...Object.entries(e.palette).filter(Tn()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((a = e.palette) == null ? void 0 : a.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${ue(o)}`
      },
      style: {
        color: (e.vars || e).palette.text[o]
      }
    })), {
      props: ({
        ownerState: o
      }) => o.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), V0 = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Le = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    color: i,
    ...s
  } = Ye({
    props: a,
    name: "MuiTypography"
  }), c = !CA[i], d = EA({
    ...s,
    ...c && {
      color: i
    }
  }), {
    align: p = "inherit",
    className: m,
    component: h,
    gutterBottom: g = !1,
    noWrap: y = !1,
    paragraph: x = !1,
    variant: C = "body1",
    variantMapping: R = V0,
    ...E
  } = d, w = {
    ...d,
    align: p,
    color: i,
    className: m,
    component: h,
    gutterBottom: g,
    noWrap: y,
    paragraph: x,
    variant: C,
    variantMapping: R
  }, z = h || (x ? "p" : R[C] || V0[C]) || "span", k = TA(w);
  return /* @__PURE__ */ T.jsx(RA, {
    as: z,
    ref: o,
    className: he(k.root, m),
    ...E,
    ownerState: w,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...E.style
    }
  });
});
function G0(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function wA(e = {}) {
  const {
    ignoreAccents: a = !0,
    ignoreCase: o = !0,
    limit: i,
    matchFrom: s = "any",
    stringify: c,
    trim: d = !1
  } = e;
  return (p, {
    inputValue: m,
    getOptionLabel: h
  }) => {
    let g = d ? m.trim() : m;
    o && (g = g.toLowerCase()), a && (g = G0(g));
    const y = g ? p.filter((x) => {
      let C = (c || h)(x);
      return o && (C = C.toLowerCase()), a && (C = G0(C)), s === "start" ? C.startsWith(g) : C.includes(g);
    }) : p;
    return typeof i == "number" ? y.slice(0, i) : y;
  };
}
const MA = wA(), q0 = 5, AA = (e) => {
  var a;
  return e.current !== null && ((a = e.current.parentElement) == null ? void 0 : a.contains(document.activeElement));
}, OA = [];
function Y0(e, a, o) {
  if (a || e == null)
    return "";
  const i = o(e);
  return typeof i == "string" ? i : "";
}
function zA(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: a = AA,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: i = !1,
    autoHighlight: s = !1,
    autoSelect: c = !1,
    blurOnSelect: d = !1,
    clearOnBlur: p = !e.freeSolo,
    clearOnEscape: m = !1,
    componentName: h = "useAutocomplete",
    defaultValue: g = e.multiple ? OA : null,
    disableClearable: y = !1,
    disableCloseOnSelect: x = !1,
    disabled: C,
    disabledItemsFocusable: R = !1,
    disableListWrap: E = !1,
    filterOptions: w = MA,
    filterSelectedOptions: z = !1,
    freeSolo: k = !1,
    getOptionDisabled: O,
    getOptionKey: D,
    getOptionLabel: M = (ie) => ie.label ?? ie,
    groupBy: $,
    handleHomeEndKeys: j = !e.freeSolo,
    id: U,
    includeInputInList: P = !1,
    inputValue: S,
    isOptionEqualToValue: B = (ie, oe) => ie === oe,
    multiple: H = !1,
    onChange: G,
    onClose: J,
    onHighlightChange: F,
    onInputChange: N,
    onOpen: V,
    open: K,
    openOnFocus: Y = !1,
    options: pe,
    readOnly: L = !1,
    selectOnFocus: W = !e.freeSolo,
    value: re
  } = e, te = Uo(U);
  let fe = M;
  fe = (ie) => {
    const oe = M(ie);
    return typeof oe != "string" ? String(oe) : oe;
  };
  const se = v.useRef(!1), ge = v.useRef(!0), ye = v.useRef(null), be = v.useRef(null), [Te, De] = v.useState(null), [Se, ct] = v.useState(-1), Oe = s ? 0 : -1, ke = v.useRef(Oe), vt = v.useRef(Y0(g ?? re, H, fe)).current, [me, He] = $i({
    controlled: re,
    default: g,
    name: h
  }), [Me, We] = $i({
    controlled: S,
    default: vt,
    name: h,
    state: "inputValue"
  }), [Fe, Ce] = v.useState(!1), At = v.useCallback((ie, oe, Ee) => {
    if (!(H ? me.length < oe.length : oe !== null) && !p)
      return;
    const et = Y0(oe, H, fe);
    Me !== et && (We(et), N && N(ie, et, Ee));
  }, [fe, Me, H, N, We, p, me]), [Ue, Ft] = $i({
    controlled: K,
    default: !1,
    name: h,
    state: "open"
  }), [rn, Bt] = v.useState(!0), Je = !H && me != null && Me === fe(me), Ke = Ue && !L, je = Ke ? w(
    pe.filter((ie) => !(z && (H ? me : [me]).some((oe) => oe !== null && B(ie, oe)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Je && rn ? "" : Me,
      getOptionLabel: fe
    }
  ) : [], ze = Mm({
    filteredOptions: je,
    value: me,
    inputValue: Me
  });
  v.useEffect(() => {
    const ie = me !== ze.value;
    Fe && !ie || k && !ie || At(null, me, "reset");
  }, [me, At, Fe, ze.value, k]);
  const bt = Ue && je.length > 0 && !L, lt = Ln((ie) => {
    ie === -1 ? ye.current.focus() : Te.querySelector(`[data-tag-index="${ie}"]`).focus();
  });
  v.useEffect(() => {
    H && Se > me.length - 1 && (ct(-1), lt(-1));
  }, [me, H, Se, lt]);
  function gt(ie, oe) {
    if (!be.current || ie < 0 || ie >= je.length)
      return -1;
    let Ee = ie;
    for (; ; ) {
      const Xe = be.current.querySelector(`[data-option-index="${Ee}"]`), et = R ? !1 : !Xe || Xe.disabled || Xe.getAttribute("aria-disabled") === "true";
      if (Xe && Xe.hasAttribute("tabindex") && !et)
        return Ee;
      if (oe === "next" ? Ee = (Ee + 1) % je.length : Ee = (Ee - 1 + je.length) % je.length, Ee === ie)
        return -1;
    }
  }
  const xe = Ln(({
    event: ie,
    index: oe,
    reason: Ee
  }) => {
    if (ke.current = oe, oe === -1 ? ye.current.removeAttribute("aria-activedescendant") : ye.current.setAttribute("aria-activedescendant", `${te}-option-${oe}`), F && ["mouse", "keyboard", "touch"].includes(Ee) && F(ie, oe === -1 ? null : je[oe], Ee), !be.current)
      return;
    const Xe = be.current.querySelector(`[role="option"].${o}-focused`);
    Xe && (Xe.classList.remove(`${o}-focused`), Xe.classList.remove(`${o}-focusVisible`));
    let et = be.current;
    if (be.current.getAttribute("role") !== "listbox" && (et = be.current.parentElement.querySelector('[role="listbox"]')), !et)
      return;
    if (oe === -1) {
      et.scrollTop = 0;
      return;
    }
    const Et = be.current.querySelector(`[data-option-index="${oe}"]`);
    if (Et && (Et.classList.add(`${o}-focused`), Ee === "keyboard" && Et.classList.add(`${o}-focusVisible`), et.scrollHeight > et.clientHeight && Ee !== "mouse" && Ee !== "touch")) {
      const Ht = Et, bn = et.clientHeight + et.scrollTop, ar = Ht.offsetTop + Ht.offsetHeight;
      ar > bn ? et.scrollTop = ar - et.clientHeight : Ht.offsetTop - Ht.offsetHeight * ($ ? 1.3 : 0) < et.scrollTop && (et.scrollTop = Ht.offsetTop - Ht.offsetHeight * ($ ? 1.3 : 0));
    }
  }), $e = Ln(({
    event: ie,
    diff: oe,
    direction: Ee = "next",
    reason: Xe
  }) => {
    if (!Ke)
      return;
    const Et = gt((() => {
      const Ht = je.length - 1;
      if (oe === "reset")
        return Oe;
      if (oe === "start")
        return 0;
      if (oe === "end")
        return Ht;
      const bn = ke.current + oe;
      return bn < 0 ? bn === -1 && P ? -1 : E && ke.current !== -1 || Math.abs(oe) > 1 ? 0 : Ht : bn > Ht ? bn === Ht + 1 && P ? -1 : E || Math.abs(oe) > 1 ? Ht : 0 : bn;
    })(), Ee);
    if (xe({
      index: Et,
      reason: Xe,
      event: ie
    }), i && oe !== "reset")
      if (Et === -1)
        ye.current.value = Me;
      else {
        const Ht = fe(je[Et]);
        ye.current.value = Ht, Ht.toLowerCase().indexOf(Me.toLowerCase()) === 0 && Me.length > 0 && ye.current.setSelectionRange(Me.length, Ht.length);
      }
  }), _t = () => {
    const ie = (oe, Ee) => {
      const Xe = oe ? fe(oe) : "", et = Ee ? fe(Ee) : "";
      return Xe === et;
    };
    if (ke.current !== -1 && ze.filteredOptions && ze.filteredOptions.length !== je.length && ze.inputValue === Me && (H ? me.length === ze.value.length && ze.value.every((oe, Ee) => fe(me[Ee]) === fe(oe)) : ie(ze.value, me))) {
      const oe = ze.filteredOptions[ke.current];
      if (oe)
        return je.findIndex((Ee) => fe(Ee) === fe(oe));
    }
    return -1;
  }, Qt = v.useCallback(() => {
    if (!Ke)
      return;
    const ie = _t();
    if (ie !== -1) {
      ke.current = ie;
      return;
    }
    const oe = H ? me[0] : me;
    if (je.length === 0 || oe == null) {
      $e({
        diff: "reset"
      });
      return;
    }
    if (be.current) {
      if (oe != null) {
        const Ee = je[ke.current];
        if (H && Ee && me.findIndex((et) => B(Ee, et)) !== -1)
          return;
        const Xe = je.findIndex((et) => B(et, oe));
        Xe === -1 ? $e({
          diff: "reset"
        }) : xe({
          index: Xe
        });
        return;
      }
      if (ke.current >= je.length - 1) {
        xe({
          index: je.length - 1
        });
        return;
      }
      xe({
        index: ke.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    je.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    H ? !1 : me,
    z,
    $e,
    xe,
    Ke,
    Me,
    H
  ]), Bn = Ln((ie) => {
    Bp(be, ie), ie && Qt();
  });
  v.useEffect(() => {
    Qt();
  }, [Qt]);
  const dn = (ie) => {
    Ue || (Ft(!0), Bt(!0), V && V(ie));
  }, Dn = (ie, oe) => {
    Ue && (Ft(!1), J && J(ie, oe));
  }, yn = (ie, oe, Ee, Xe) => {
    if (H) {
      if (me.length === oe.length && me.every((et, Et) => et === oe[Et]))
        return;
    } else if (me === oe)
      return;
    G && G(ie, oe, Ee, Xe), He(oe);
  }, Sn = v.useRef(!1), vn = (ie, oe, Ee = "selectOption", Xe = "options") => {
    let et = Ee, Et = oe;
    if (H) {
      Et = Array.isArray(me) ? me.slice() : [];
      const Ht = Et.findIndex((bn) => B(oe, bn));
      Ht === -1 ? Et.push(oe) : Xe !== "freeSolo" && (Et.splice(Ht, 1), et = "removeOption");
    }
    At(ie, Et, et), yn(ie, Et, et, {
      option: oe
    }), !x && (!ie || !ie.ctrlKey && !ie.metaKey) && Dn(ie, et), (d === !0 || d === "touch" && Sn.current || d === "mouse" && !Sn.current) && ye.current.blur();
  };
  function Un(ie, oe) {
    if (ie === -1)
      return -1;
    let Ee = ie;
    for (; ; ) {
      if (oe === "next" && Ee === me.length || oe === "previous" && Ee === -1)
        return -1;
      const Xe = Te.querySelector(`[data-tag-index="${Ee}"]`);
      if (!Xe || !Xe.hasAttribute("tabindex") || Xe.disabled || Xe.getAttribute("aria-disabled") === "true")
        Ee += oe === "next" ? 1 : -1;
      else
        return Ee;
    }
  }
  const Ia = (ie, oe) => {
    if (!H)
      return;
    Me === "" && Dn(ie, "toggleInput");
    let Ee = Se;
    Se === -1 ? Me === "" && oe === "previous" && (Ee = me.length - 1) : (Ee += oe === "next" ? 1 : -1, Ee < 0 && (Ee = 0), Ee === me.length && (Ee = -1)), Ee = Un(Ee, oe), ct(Ee), lt(Ee);
  }, Ie = (ie) => {
    se.current = !0, We(""), N && N(ie, "", "clear"), yn(ie, H ? [] : null, "clear");
  }, on = (ie) => (oe) => {
    if (ie.onKeyDown && ie.onKeyDown(oe), !oe.defaultMuiPrevented && (Se !== -1 && !["ArrowLeft", "ArrowRight"].includes(oe.key) && (ct(-1), lt(-1)), oe.which !== 229))
      switch (oe.key) {
        case "Home":
          Ke && j && (oe.preventDefault(), $e({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: oe
          }));
          break;
        case "End":
          Ke && j && (oe.preventDefault(), $e({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: oe
          }));
          break;
        case "PageUp":
          oe.preventDefault(), $e({
            diff: -q0,
            direction: "previous",
            reason: "keyboard",
            event: oe
          }), dn(oe);
          break;
        case "PageDown":
          oe.preventDefault(), $e({
            diff: q0,
            direction: "next",
            reason: "keyboard",
            event: oe
          }), dn(oe);
          break;
        case "ArrowDown":
          oe.preventDefault(), $e({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: oe
          }), dn(oe);
          break;
        case "ArrowUp":
          oe.preventDefault(), $e({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: oe
          }), dn(oe);
          break;
        case "ArrowLeft":
          Ia(oe, "previous");
          break;
        case "ArrowRight":
          Ia(oe, "next");
          break;
        case "Enter":
          if (ke.current !== -1 && Ke) {
            const Ee = je[ke.current], Xe = O ? O(Ee) : !1;
            if (oe.preventDefault(), Xe)
              return;
            vn(oe, Ee, "selectOption"), i && ye.current.setSelectionRange(ye.current.value.length, ye.current.value.length);
          } else k && Me !== "" && Je === !1 && (H && oe.preventDefault(), vn(oe, Me, "createOption", "freeSolo"));
          break;
        case "Escape":
          Ke ? (oe.preventDefault(), oe.stopPropagation(), Dn(oe, "escape")) : m && (Me !== "" || H && me.length > 0) && (oe.preventDefault(), oe.stopPropagation(), Ie(oe));
          break;
        case "Backspace":
          if (H && !L && Me === "" && me.length > 0) {
            const Ee = Se === -1 ? me.length - 1 : Se, Xe = me.slice();
            Xe.splice(Ee, 1), yn(oe, Xe, "removeOption", {
              option: me[Ee]
            });
          }
          break;
        case "Delete":
          if (H && !L && Me === "" && me.length > 0 && Se !== -1) {
            const Ee = Se, Xe = me.slice();
            Xe.splice(Ee, 1), yn(oe, Xe, "removeOption", {
              option: me[Ee]
            });
          }
          break;
      }
  }, ve = (ie) => {
    Ce(!0), Y && !se.current && dn(ie);
  }, Re = (ie) => {
    if (a(be)) {
      ye.current.focus();
      return;
    }
    Ce(!1), ge.current = !0, se.current = !1, c && ke.current !== -1 && Ke ? vn(ie, je[ke.current], "blur") : c && k && Me !== "" ? vn(ie, Me, "blur", "freeSolo") : p && At(ie, me, "blur"), Dn(ie, "blur");
  }, nt = (ie) => {
    const oe = ie.target.value;
    Me !== oe && (We(oe), Bt(!1), N && N(ie, oe, "input")), oe === "" ? !y && !H && yn(ie, null, "clear") : dn(ie);
  }, ot = (ie) => {
    const oe = Number(ie.currentTarget.getAttribute("data-option-index"));
    ke.current !== oe && xe({
      event: ie,
      index: oe,
      reason: "mouse"
    });
  }, Ot = (ie) => {
    xe({
      event: ie,
      index: Number(ie.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Sn.current = !0;
  }, Cn = (ie) => {
    const oe = Number(ie.currentTarget.getAttribute("data-option-index"));
    vn(ie, je[oe], "selectOption"), Sn.current = !1;
  }, _n = (ie) => (oe) => {
    const Ee = me.slice();
    Ee.splice(ie, 1), yn(oe, Ee, "removeOption", {
      option: me[ie]
    });
  }, fa = (ie) => {
    Ue ? Dn(ie, "toggleInput") : dn(ie);
  }, Na = (ie) => {
    ie.currentTarget.contains(ie.target) && ie.target.getAttribute("id") !== te && ie.preventDefault();
  }, zt = (ie) => {
    ie.currentTarget.contains(ie.target) && (ye.current.focus(), W && ge.current && ye.current.selectionEnd - ye.current.selectionStart === 0 && ye.current.select(), ge.current = !1);
  }, pt = (ie) => {
    !C && (Me === "" || !Ue) && fa(ie);
  };
  let Vt = k && Me.length > 0;
  Vt = Vt || (H ? me.length > 0 : me !== null);
  let La = je;
  return $ && (La = je.reduce((ie, oe, Ee) => {
    const Xe = $(oe);
    return ie.length > 0 && ie[ie.length - 1].group === Xe ? ie[ie.length - 1].options.push(oe) : ie.push({
      key: Ee,
      index: Ee,
      group: Xe,
      options: [oe]
    }), ie;
  }, [])), C && Fe && Re(), {
    getRootProps: (ie = {}) => ({
      ...ie,
      onKeyDown: on(ie),
      onMouseDown: Na,
      onClick: zt
    }),
    getInputLabelProps: () => ({
      id: `${te}-label`,
      htmlFor: te
    }),
    getInputProps: () => ({
      id: te,
      value: Me,
      onBlur: Re,
      onFocus: ve,
      onChange: nt,
      onMouseDown: pt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Ke ? "" : null,
      "aria-autocomplete": i ? "both" : "list",
      "aria-controls": bt ? `${te}-listbox` : void 0,
      "aria-expanded": bt,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: ye,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: C
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Ie
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: fa
    }),
    getTagProps: ({
      index: ie
    }) => ({
      key: ie,
      "data-tag-index": ie,
      tabIndex: -1,
      ...!L && {
        onDelete: _n(ie)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${te}-listbox`,
      "aria-labelledby": `${te}-label`,
      ref: Bn,
      onMouseDown: (ie) => {
        ie.preventDefault();
      }
    }),
    getOptionProps: ({
      index: ie,
      option: oe
    }) => {
      const Ee = (H ? me : [me]).some((et) => et != null && B(oe, et)), Xe = O ? O(oe) : !1;
      return {
        key: (D == null ? void 0 : D(oe)) ?? fe(oe),
        tabIndex: -1,
        role: "option",
        id: `${te}-option-${ie}`,
        onMouseMove: ot,
        onClick: Cn,
        onTouchStart: Ot,
        "data-option-index": ie,
        "aria-disabled": Xe,
        "aria-selected": Ee
      };
    },
    id: te,
    inputValue: Me,
    value: me,
    dirty: Vt,
    expanded: Ke && Te,
    popupOpen: Ke,
    focused: Fe || Se !== -1,
    anchorEl: Te,
    setAnchorEl: De,
    focusedTag: Se,
    groupedOptions: La
  };
}
var Fn = "top", Oa = "bottom", za = "right", Wn = "left", Bm = "auto", ws = [Fn, Oa, za, Wn], Hi = "start", ds = "end", DA = "clippingParents", gx = "viewport", Pl = "popper", $A = "reference", F0 = /* @__PURE__ */ ws.reduce(function(e, a) {
  return e.concat([a + "-" + Hi, a + "-" + ds]);
}, []), yx = /* @__PURE__ */ [].concat(ws, [Bm]).reduce(function(e, a) {
  return e.concat([a, a + "-" + Hi, a + "-" + ds]);
}, []), kA = "beforeRead", NA = "read", LA = "afterRead", jA = "beforeMain", BA = "main", _A = "afterMain", HA = "beforeWrite", UA = "write", IA = "afterWrite", PA = [kA, NA, LA, jA, BA, _A, HA, UA, IA];
function er(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function da(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var a = e.ownerDocument;
    return a && a.defaultView || window;
  }
  return e;
}
function Ho(e) {
  var a = da(e).Element;
  return e instanceof a || e instanceof Element;
}
function Ma(e) {
  var a = da(e).HTMLElement;
  return e instanceof a || e instanceof HTMLElement;
}
function _m(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var a = da(e).ShadowRoot;
  return e instanceof a || e instanceof ShadowRoot;
}
function VA(e) {
  var a = e.state;
  Object.keys(a.elements).forEach(function(o) {
    var i = a.styles[o] || {}, s = a.attributes[o] || {}, c = a.elements[o];
    !Ma(c) || !er(c) || (Object.assign(c.style, i), Object.keys(s).forEach(function(d) {
      var p = s[d];
      p === !1 ? c.removeAttribute(d) : c.setAttribute(d, p === !0 ? "" : p);
    }));
  });
}
function GA(e) {
  var a = e.state, o = {
    popper: {
      position: a.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(a.elements.popper.style, o.popper), a.styles = o, a.elements.arrow && Object.assign(a.elements.arrow.style, o.arrow), function() {
    Object.keys(a.elements).forEach(function(i) {
      var s = a.elements[i], c = a.attributes[i] || {}, d = Object.keys(a.styles.hasOwnProperty(i) ? a.styles[i] : o[i]), p = d.reduce(function(m, h) {
        return m[h] = "", m;
      }, {});
      !Ma(s) || !er(s) || (Object.assign(s.style, p), Object.keys(c).forEach(function(m) {
        s.removeAttribute(m);
      }));
    });
  };
}
const qA = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: VA,
  effect: GA,
  requires: ["computeStyles"]
};
function Za(e) {
  return e.split("-")[0];
}
var Bo = Math.max, Su = Math.min, Ui = Math.round;
function Fp() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(a) {
    return a.brand + "/" + a.version;
  }).join(" ") : navigator.userAgent;
}
function vx() {
  return !/^((?!chrome|android).)*safari/i.test(Fp());
}
function Ii(e, a, o) {
  a === void 0 && (a = !1), o === void 0 && (o = !1);
  var i = e.getBoundingClientRect(), s = 1, c = 1;
  a && Ma(e) && (s = e.offsetWidth > 0 && Ui(i.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && Ui(i.height) / e.offsetHeight || 1);
  var d = Ho(e) ? da(e) : window, p = d.visualViewport, m = !vx() && o, h = (i.left + (m && p ? p.offsetLeft : 0)) / s, g = (i.top + (m && p ? p.offsetTop : 0)) / c, y = i.width / s, x = i.height / c;
  return {
    width: y,
    height: x,
    top: g,
    right: h + y,
    bottom: g + x,
    left: h,
    x: h,
    y: g
  };
}
function Hm(e) {
  var a = Ii(e), o = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(a.width - o) <= 1 && (o = a.width), Math.abs(a.height - i) <= 1 && (i = a.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: i
  };
}
function bx(e, a) {
  var o = a.getRootNode && a.getRootNode();
  if (e.contains(a))
    return !0;
  if (o && _m(o)) {
    var i = a;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function wr(e) {
  return da(e).getComputedStyle(e);
}
function YA(e) {
  return ["table", "td", "th"].indexOf(er(e)) >= 0;
}
function uo(e) {
  return ((Ho(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Vu(e) {
  return er(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_m(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    uo(e)
  );
}
function W0(e) {
  return !Ma(e) || // https://github.com/popperjs/popper-core/issues/837
  wr(e).position === "fixed" ? null : e.offsetParent;
}
function FA(e) {
  var a = /firefox/i.test(Fp()), o = /Trident/i.test(Fp());
  if (o && Ma(e)) {
    var i = wr(e);
    if (i.position === "fixed")
      return null;
  }
  var s = Vu(e);
  for (_m(s) && (s = s.host); Ma(s) && ["html", "body"].indexOf(er(s)) < 0; ) {
    var c = wr(s);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || a && c.willChange === "filter" || a && c.filter && c.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ms(e) {
  for (var a = da(e), o = W0(e); o && YA(o) && wr(o).position === "static"; )
    o = W0(o);
  return o && (er(o) === "html" || er(o) === "body" && wr(o).position === "static") ? a : o || FA(e) || a;
}
function Um(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zl(e, a, o) {
  return Bo(e, Su(a, o));
}
function WA(e, a, o) {
  var i = Zl(e, a, o);
  return i > o ? o : i;
}
function xx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sx(e) {
  return Object.assign({}, xx(), e);
}
function Cx(e, a) {
  return a.reduce(function(o, i) {
    return o[i] = e, o;
  }, {});
}
var KA = function(a, o) {
  return a = typeof a == "function" ? a(Object.assign({}, o.rects, {
    placement: o.placement
  })) : a, Sx(typeof a != "number" ? a : Cx(a, ws));
};
function XA(e) {
  var a, o = e.state, i = e.name, s = e.options, c = o.elements.arrow, d = o.modifiersData.popperOffsets, p = Za(o.placement), m = Um(p), h = [Wn, za].indexOf(p) >= 0, g = h ? "height" : "width";
  if (!(!c || !d)) {
    var y = KA(s.padding, o), x = Hm(c), C = m === "y" ? Fn : Wn, R = m === "y" ? Oa : za, E = o.rects.reference[g] + o.rects.reference[m] - d[m] - o.rects.popper[g], w = d[m] - o.rects.reference[m], z = Ms(c), k = z ? m === "y" ? z.clientHeight || 0 : z.clientWidth || 0 : 0, O = E / 2 - w / 2, D = y[C], M = k - x[g] - y[R], $ = k / 2 - x[g] / 2 + O, j = Zl(D, $, M), U = m;
    o.modifiersData[i] = (a = {}, a[U] = j, a.centerOffset = j - $, a);
  }
}
function QA(e) {
  var a = e.state, o = e.options, i = o.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = a.elements.popper.querySelector(s), !s) || bx(a.elements.popper, s) && (a.elements.arrow = s));
}
const ZA = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: XA,
  effect: QA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pi(e) {
  return e.split("-")[1];
}
var JA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function eO(e, a) {
  var o = e.x, i = e.y, s = a.devicePixelRatio || 1;
  return {
    x: Ui(o * s) / s || 0,
    y: Ui(i * s) / s || 0
  };
}
function K0(e) {
  var a, o = e.popper, i = e.popperRect, s = e.placement, c = e.variation, d = e.offsets, p = e.position, m = e.gpuAcceleration, h = e.adaptive, g = e.roundOffsets, y = e.isFixed, x = d.x, C = x === void 0 ? 0 : x, R = d.y, E = R === void 0 ? 0 : R, w = typeof g == "function" ? g({
    x: C,
    y: E
  }) : {
    x: C,
    y: E
  };
  C = w.x, E = w.y;
  var z = d.hasOwnProperty("x"), k = d.hasOwnProperty("y"), O = Wn, D = Fn, M = window;
  if (h) {
    var $ = Ms(o), j = "clientHeight", U = "clientWidth";
    if ($ === da(o) && ($ = uo(o), wr($).position !== "static" && p === "absolute" && (j = "scrollHeight", U = "scrollWidth")), $ = $, s === Fn || (s === Wn || s === za) && c === ds) {
      D = Oa;
      var P = y && $ === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[j]
      );
      E -= P - i.height, E *= m ? 1 : -1;
    }
    if (s === Wn || (s === Fn || s === Oa) && c === ds) {
      O = za;
      var S = y && $ === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[U]
      );
      C -= S - i.width, C *= m ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: p
  }, h && JA), H = g === !0 ? eO({
    x: C,
    y: E
  }, da(o)) : {
    x: C,
    y: E
  };
  if (C = H.x, E = H.y, m) {
    var G;
    return Object.assign({}, B, (G = {}, G[D] = k ? "0" : "", G[O] = z ? "0" : "", G.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + E + "px)" : "translate3d(" + C + "px, " + E + "px, 0)", G));
  }
  return Object.assign({}, B, (a = {}, a[D] = k ? E + "px" : "", a[O] = z ? C + "px" : "", a.transform = "", a));
}
function tO(e) {
  var a = e.state, o = e.options, i = o.gpuAcceleration, s = i === void 0 ? !0 : i, c = o.adaptive, d = c === void 0 ? !0 : c, p = o.roundOffsets, m = p === void 0 ? !0 : p, h = {
    placement: Za(a.placement),
    variation: Pi(a.placement),
    popper: a.elements.popper,
    popperRect: a.rects.popper,
    gpuAcceleration: s,
    isFixed: a.options.strategy === "fixed"
  };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, K0(Object.assign({}, h, {
    offsets: a.modifiersData.popperOffsets,
    position: a.options.strategy,
    adaptive: d,
    roundOffsets: m
  })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, K0(Object.assign({}, h, {
    offsets: a.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: m
  })))), a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-placement": a.placement
  });
}
const nO = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tO,
  data: {}
};
var Fc = {
  passive: !0
};
function aO(e) {
  var a = e.state, o = e.instance, i = e.options, s = i.scroll, c = s === void 0 ? !0 : s, d = i.resize, p = d === void 0 ? !0 : d, m = da(a.elements.popper), h = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return c && h.forEach(function(g) {
    g.addEventListener("scroll", o.update, Fc);
  }), p && m.addEventListener("resize", o.update, Fc), function() {
    c && h.forEach(function(g) {
      g.removeEventListener("scroll", o.update, Fc);
    }), p && m.removeEventListener("resize", o.update, Fc);
  };
}
const rO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: aO,
  data: {}
};
var oO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function du(e) {
  return e.replace(/left|right|bottom|top/g, function(a) {
    return oO[a];
  });
}
var iO = {
  start: "end",
  end: "start"
};
function X0(e) {
  return e.replace(/start|end/g, function(a) {
    return iO[a];
  });
}
function Im(e) {
  var a = da(e), o = a.pageXOffset, i = a.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: i
  };
}
function Pm(e) {
  return Ii(uo(e)).left + Im(e).scrollLeft;
}
function lO(e, a) {
  var o = da(e), i = uo(e), s = o.visualViewport, c = i.clientWidth, d = i.clientHeight, p = 0, m = 0;
  if (s) {
    c = s.width, d = s.height;
    var h = vx();
    (h || !h && a === "fixed") && (p = s.offsetLeft, m = s.offsetTop);
  }
  return {
    width: c,
    height: d,
    x: p + Pm(e),
    y: m
  };
}
function sO(e) {
  var a, o = uo(e), i = Im(e), s = (a = e.ownerDocument) == null ? void 0 : a.body, c = Bo(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), d = Bo(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), p = -i.scrollLeft + Pm(e), m = -i.scrollTop;
  return wr(s || o).direction === "rtl" && (p += Bo(o.clientWidth, s ? s.clientWidth : 0) - c), {
    width: c,
    height: d,
    x: p,
    y: m
  };
}
function Vm(e) {
  var a = wr(e), o = a.overflow, i = a.overflowX, s = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + i);
}
function Ex(e) {
  return ["html", "body", "#document"].indexOf(er(e)) >= 0 ? e.ownerDocument.body : Ma(e) && Vm(e) ? e : Ex(Vu(e));
}
function Jl(e, a) {
  var o;
  a === void 0 && (a = []);
  var i = Ex(e), s = i === ((o = e.ownerDocument) == null ? void 0 : o.body), c = da(i), d = s ? [c].concat(c.visualViewport || [], Vm(i) ? i : []) : i, p = a.concat(d);
  return s ? p : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    p.concat(Jl(Vu(d)))
  );
}
function Wp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cO(e, a) {
  var o = Ii(e, !1, a === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Q0(e, a, o) {
  return a === gx ? Wp(lO(e, o)) : Ho(a) ? cO(a, o) : Wp(sO(uo(e)));
}
function uO(e) {
  var a = Jl(Vu(e)), o = ["absolute", "fixed"].indexOf(wr(e).position) >= 0, i = o && Ma(e) ? Ms(e) : e;
  return Ho(i) ? a.filter(function(s) {
    return Ho(s) && bx(s, i) && er(s) !== "body";
  }) : [];
}
function dO(e, a, o, i) {
  var s = a === "clippingParents" ? uO(e) : [].concat(a), c = [].concat(s, [o]), d = c[0], p = c.reduce(function(m, h) {
    var g = Q0(e, h, i);
    return m.top = Bo(g.top, m.top), m.right = Su(g.right, m.right), m.bottom = Su(g.bottom, m.bottom), m.left = Bo(g.left, m.left), m;
  }, Q0(e, d, i));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
function Tx(e) {
  var a = e.reference, o = e.element, i = e.placement, s = i ? Za(i) : null, c = i ? Pi(i) : null, d = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, m;
  switch (s) {
    case Fn:
      m = {
        x: d,
        y: a.y - o.height
      };
      break;
    case Oa:
      m = {
        x: d,
        y: a.y + a.height
      };
      break;
    case za:
      m = {
        x: a.x + a.width,
        y: p
      };
      break;
    case Wn:
      m = {
        x: a.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: a.x,
        y: a.y
      };
  }
  var h = s ? Um(s) : null;
  if (h != null) {
    var g = h === "y" ? "height" : "width";
    switch (c) {
      case Hi:
        m[h] = m[h] - (a[g] / 2 - o[g] / 2);
        break;
      case ds:
        m[h] = m[h] + (a[g] / 2 - o[g] / 2);
        break;
    }
  }
  return m;
}
function fs(e, a) {
  a === void 0 && (a = {});
  var o = a, i = o.placement, s = i === void 0 ? e.placement : i, c = o.strategy, d = c === void 0 ? e.strategy : c, p = o.boundary, m = p === void 0 ? DA : p, h = o.rootBoundary, g = h === void 0 ? gx : h, y = o.elementContext, x = y === void 0 ? Pl : y, C = o.altBoundary, R = C === void 0 ? !1 : C, E = o.padding, w = E === void 0 ? 0 : E, z = Sx(typeof w != "number" ? w : Cx(w, ws)), k = x === Pl ? $A : Pl, O = e.rects.popper, D = e.elements[R ? k : x], M = dO(Ho(D) ? D : D.contextElement || uo(e.elements.popper), m, g, d), $ = Ii(e.elements.reference), j = Tx({
    reference: $,
    element: O,
    placement: s
  }), U = Wp(Object.assign({}, O, j)), P = x === Pl ? U : $, S = {
    top: M.top - P.top + z.top,
    bottom: P.bottom - M.bottom + z.bottom,
    left: M.left - P.left + z.left,
    right: P.right - M.right + z.right
  }, B = e.modifiersData.offset;
  if (x === Pl && B) {
    var H = B[s];
    Object.keys(S).forEach(function(G) {
      var J = [za, Oa].indexOf(G) >= 0 ? 1 : -1, F = [Fn, Oa].indexOf(G) >= 0 ? "y" : "x";
      S[G] += H[F] * J;
    });
  }
  return S;
}
function fO(e, a) {
  a === void 0 && (a = {});
  var o = a, i = o.placement, s = o.boundary, c = o.rootBoundary, d = o.padding, p = o.flipVariations, m = o.allowedAutoPlacements, h = m === void 0 ? yx : m, g = Pi(i), y = g ? p ? F0 : F0.filter(function(R) {
    return Pi(R) === g;
  }) : ws, x = y.filter(function(R) {
    return h.indexOf(R) >= 0;
  });
  x.length === 0 && (x = y);
  var C = x.reduce(function(R, E) {
    return R[E] = fs(e, {
      placement: E,
      boundary: s,
      rootBoundary: c,
      padding: d
    })[Za(E)], R;
  }, {});
  return Object.keys(C).sort(function(R, E) {
    return C[R] - C[E];
  });
}
function pO(e) {
  if (Za(e) === Bm)
    return [];
  var a = du(e);
  return [X0(e), a, X0(a)];
}
function mO(e) {
  var a = e.state, o = e.options, i = e.name;
  if (!a.modifiersData[i]._skip) {
    for (var s = o.mainAxis, c = s === void 0 ? !0 : s, d = o.altAxis, p = d === void 0 ? !0 : d, m = o.fallbackPlacements, h = o.padding, g = o.boundary, y = o.rootBoundary, x = o.altBoundary, C = o.flipVariations, R = C === void 0 ? !0 : C, E = o.allowedAutoPlacements, w = a.options.placement, z = Za(w), k = z === w, O = m || (k || !R ? [du(w)] : pO(w)), D = [w].concat(O).reduce(function(te, fe) {
      return te.concat(Za(fe) === Bm ? fO(a, {
        placement: fe,
        boundary: g,
        rootBoundary: y,
        padding: h,
        flipVariations: R,
        allowedAutoPlacements: E
      }) : fe);
    }, []), M = a.rects.reference, $ = a.rects.popper, j = /* @__PURE__ */ new Map(), U = !0, P = D[0], S = 0; S < D.length; S++) {
      var B = D[S], H = Za(B), G = Pi(B) === Hi, J = [Fn, Oa].indexOf(H) >= 0, F = J ? "width" : "height", N = fs(a, {
        placement: B,
        boundary: g,
        rootBoundary: y,
        altBoundary: x,
        padding: h
      }), V = J ? G ? za : Wn : G ? Oa : Fn;
      M[F] > $[F] && (V = du(V));
      var K = du(V), Y = [];
      if (c && Y.push(N[H] <= 0), p && Y.push(N[V] <= 0, N[K] <= 0), Y.every(function(te) {
        return te;
      })) {
        P = B, U = !1;
        break;
      }
      j.set(B, Y);
    }
    if (U)
      for (var pe = R ? 3 : 1, L = function(fe) {
        var se = D.find(function(ge) {
          var ye = j.get(ge);
          if (ye)
            return ye.slice(0, fe).every(function(be) {
              return be;
            });
        });
        if (se)
          return P = se, "break";
      }, W = pe; W > 0; W--) {
        var re = L(W);
        if (re === "break") break;
      }
    a.placement !== P && (a.modifiersData[i]._skip = !0, a.placement = P, a.reset = !0);
  }
}
const hO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Z0(e, a, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - a.height - o.y,
    right: e.right - a.width + o.x,
    bottom: e.bottom - a.height + o.y,
    left: e.left - a.width - o.x
  };
}
function J0(e) {
  return [Fn, za, Oa, Wn].some(function(a) {
    return e[a] >= 0;
  });
}
function gO(e) {
  var a = e.state, o = e.name, i = a.rects.reference, s = a.rects.popper, c = a.modifiersData.preventOverflow, d = fs(a, {
    elementContext: "reference"
  }), p = fs(a, {
    altBoundary: !0
  }), m = Z0(d, i), h = Z0(p, s, c), g = J0(m), y = J0(h);
  a.modifiersData[o] = {
    referenceClippingOffsets: m,
    popperEscapeOffsets: h,
    isReferenceHidden: g,
    hasPopperEscaped: y
  }, a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-reference-hidden": g,
    "data-popper-escaped": y
  });
}
const yO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gO
};
function vO(e, a, o) {
  var i = Za(e), s = [Wn, Fn].indexOf(i) >= 0 ? -1 : 1, c = typeof o == "function" ? o(Object.assign({}, a, {
    placement: e
  })) : o, d = c[0], p = c[1];
  return d = d || 0, p = (p || 0) * s, [Wn, za].indexOf(i) >= 0 ? {
    x: p,
    y: d
  } : {
    x: d,
    y: p
  };
}
function bO(e) {
  var a = e.state, o = e.options, i = e.name, s = o.offset, c = s === void 0 ? [0, 0] : s, d = yx.reduce(function(g, y) {
    return g[y] = vO(y, a.rects, c), g;
  }, {}), p = d[a.placement], m = p.x, h = p.y;
  a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += m, a.modifiersData.popperOffsets.y += h), a.modifiersData[i] = d;
}
const xO = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bO
};
function SO(e) {
  var a = e.state, o = e.name;
  a.modifiersData[o] = Tx({
    reference: a.rects.reference,
    element: a.rects.popper,
    placement: a.placement
  });
}
const CO = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: SO,
  data: {}
};
function EO(e) {
  return e === "x" ? "y" : "x";
}
function TO(e) {
  var a = e.state, o = e.options, i = e.name, s = o.mainAxis, c = s === void 0 ? !0 : s, d = o.altAxis, p = d === void 0 ? !1 : d, m = o.boundary, h = o.rootBoundary, g = o.altBoundary, y = o.padding, x = o.tether, C = x === void 0 ? !0 : x, R = o.tetherOffset, E = R === void 0 ? 0 : R, w = fs(a, {
    boundary: m,
    rootBoundary: h,
    padding: y,
    altBoundary: g
  }), z = Za(a.placement), k = Pi(a.placement), O = !k, D = Um(z), M = EO(D), $ = a.modifiersData.popperOffsets, j = a.rects.reference, U = a.rects.popper, P = typeof E == "function" ? E(Object.assign({}, a.rects, {
    placement: a.placement
  })) : E, S = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), B = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, H = {
    x: 0,
    y: 0
  };
  if ($) {
    if (c) {
      var G, J = D === "y" ? Fn : Wn, F = D === "y" ? Oa : za, N = D === "y" ? "height" : "width", V = $[D], K = V + w[J], Y = V - w[F], pe = C ? -U[N] / 2 : 0, L = k === Hi ? j[N] : U[N], W = k === Hi ? -U[N] : -j[N], re = a.elements.arrow, te = C && re ? Hm(re) : {
        width: 0,
        height: 0
      }, fe = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : xx(), se = fe[J], ge = fe[F], ye = Zl(0, j[N], te[N]), be = O ? j[N] / 2 - pe - ye - se - S.mainAxis : L - ye - se - S.mainAxis, Te = O ? -j[N] / 2 + pe + ye + ge + S.mainAxis : W + ye + ge + S.mainAxis, De = a.elements.arrow && Ms(a.elements.arrow), Se = De ? D === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, ct = (G = B == null ? void 0 : B[D]) != null ? G : 0, Oe = V + be - ct - Se, ke = V + Te - ct, vt = Zl(C ? Su(K, Oe) : K, V, C ? Bo(Y, ke) : Y);
      $[D] = vt, H[D] = vt - V;
    }
    if (p) {
      var me, He = D === "x" ? Fn : Wn, Me = D === "x" ? Oa : za, We = $[M], Fe = M === "y" ? "height" : "width", Ce = We + w[He], At = We - w[Me], Ue = [Fn, Wn].indexOf(z) !== -1, Ft = (me = B == null ? void 0 : B[M]) != null ? me : 0, rn = Ue ? Ce : We - j[Fe] - U[Fe] - Ft + S.altAxis, Bt = Ue ? We + j[Fe] + U[Fe] - Ft - S.altAxis : At, Je = C && Ue ? WA(rn, We, Bt) : Zl(C ? rn : Ce, We, C ? Bt : At);
      $[M] = Je, H[M] = Je - We;
    }
    a.modifiersData[i] = H;
  }
}
const RO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: TO,
  requiresIfExists: ["offset"]
};
function wO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function MO(e) {
  return e === da(e) || !Ma(e) ? Im(e) : wO(e);
}
function AO(e) {
  var a = e.getBoundingClientRect(), o = Ui(a.width) / e.offsetWidth || 1, i = Ui(a.height) / e.offsetHeight || 1;
  return o !== 1 || i !== 1;
}
function OO(e, a, o) {
  o === void 0 && (o = !1);
  var i = Ma(a), s = Ma(a) && AO(a), c = uo(a), d = Ii(e, s, o), p = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = {
    x: 0,
    y: 0
  };
  return (i || !i && !o) && ((er(a) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Vm(c)) && (p = MO(a)), Ma(a) ? (m = Ii(a, !0), m.x += a.clientLeft, m.y += a.clientTop) : c && (m.x = Pm(c))), {
    x: d.left + p.scrollLeft - m.x,
    y: d.top + p.scrollTop - m.y,
    width: d.width,
    height: d.height
  };
}
function zO(e) {
  var a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(c) {
    a.set(c.name, c);
  });
  function s(c) {
    o.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(p) {
      if (!o.has(p)) {
        var m = a.get(p);
        m && s(m);
      }
    }), i.push(c);
  }
  return e.forEach(function(c) {
    o.has(c.name) || s(c);
  }), i;
}
function DO(e) {
  var a = zO(e);
  return PA.reduce(function(o, i) {
    return o.concat(a.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function $O(e) {
  var a;
  return function() {
    return a || (a = new Promise(function(o) {
      Promise.resolve().then(function() {
        a = void 0, o(e());
      });
    })), a;
  };
}
function kO(e) {
  var a = e.reduce(function(o, i) {
    var s = o[i.name];
    return o[i.name] = s ? Object.assign({}, s, i, {
      options: Object.assign({}, s.options, i.options),
      data: Object.assign({}, s.data, i.data)
    }) : i, o;
  }, {});
  return Object.keys(a).map(function(o) {
    return a[o];
  });
}
var eb = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function tb() {
  for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++)
    a[o] = arguments[o];
  return !a.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function NO(e) {
  e === void 0 && (e = {});
  var a = e, o = a.defaultModifiers, i = o === void 0 ? [] : o, s = a.defaultOptions, c = s === void 0 ? eb : s;
  return function(p, m, h) {
    h === void 0 && (h = c);
    var g = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, eb, c),
      modifiersData: {},
      elements: {
        reference: p,
        popper: m
      },
      attributes: {},
      styles: {}
    }, y = [], x = !1, C = {
      state: g,
      setOptions: function(z) {
        var k = typeof z == "function" ? z(g.options) : z;
        E(), g.options = Object.assign({}, c, g.options, k), g.scrollParents = {
          reference: Ho(p) ? Jl(p) : p.contextElement ? Jl(p.contextElement) : [],
          popper: Jl(m)
        };
        var O = DO(kO([].concat(i, g.options.modifiers)));
        return g.orderedModifiers = O.filter(function(D) {
          return D.enabled;
        }), R(), C.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var z = g.elements, k = z.reference, O = z.popper;
          if (tb(k, O)) {
            g.rects = {
              reference: OO(k, Ms(O), g.options.strategy === "fixed"),
              popper: Hm(O)
            }, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function(S) {
              return g.modifiersData[S.name] = Object.assign({}, S.data);
            });
            for (var D = 0; D < g.orderedModifiers.length; D++) {
              if (g.reset === !0) {
                g.reset = !1, D = -1;
                continue;
              }
              var M = g.orderedModifiers[D], $ = M.fn, j = M.options, U = j === void 0 ? {} : j, P = M.name;
              typeof $ == "function" && (g = $({
                state: g,
                options: U,
                name: P,
                instance: C
              }) || g);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $O(function() {
        return new Promise(function(w) {
          C.forceUpdate(), w(g);
        });
      }),
      destroy: function() {
        E(), x = !0;
      }
    };
    if (!tb(p, m))
      return C;
    C.setOptions(h).then(function(w) {
      !x && h.onFirstUpdate && h.onFirstUpdate(w);
    });
    function R() {
      g.orderedModifiers.forEach(function(w) {
        var z = w.name, k = w.options, O = k === void 0 ? {} : k, D = w.effect;
        if (typeof D == "function") {
          var M = D({
            state: g,
            name: z,
            instance: C,
            options: O
          }), $ = function() {
          };
          y.push(M || $);
        }
      });
    }
    function E() {
      y.forEach(function(w) {
        return w();
      }), y = [];
    }
    return C;
  };
}
var LO = [rO, CO, nO, qA, xO, hO, RO, ZA, yO], jO = /* @__PURE__ */ NO({
  defaultModifiers: LO
});
function BO(e) {
  return typeof e == "function" ? e() : e;
}
const Rx = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    children: i,
    container: s,
    disablePortal: c = !1
  } = a, [d, p] = v.useState(null), m = an(/* @__PURE__ */ v.isValidElement(i) ? Io(i) : null, o);
  if (Xn(() => {
    c || p(BO(s) || document.body);
  }, [s, c]), Xn(() => {
    if (d && !c)
      return Bp(o, d), () => {
        Bp(o, null);
      };
  }, [o, d, c]), c) {
    if (/* @__PURE__ */ v.isValidElement(i)) {
      const h = {
        ref: m
      };
      return /* @__PURE__ */ v.cloneElement(i, h);
    }
    return i;
  }
  return d && /* @__PURE__ */ y1.createPortal(i, d);
});
function _O(e) {
  return Ge("MuiPopper", e);
}
_e("MuiPopper", ["root"]);
function HO(e, a) {
  if (a === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Kp(e) {
  return typeof e == "function" ? e() : e;
}
function UO(e) {
  return e.nodeType !== void 0;
}
const IO = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, _O, a);
}, PO = {}, VO = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    anchorEl: i,
    children: s,
    direction: c,
    disablePortal: d,
    modifiers: p,
    open: m,
    placement: h,
    popperOptions: g,
    popperRef: y,
    slotProps: x = {},
    slots: C = {},
    TransitionProps: R,
    // @ts-ignore internal logic
    ownerState: E,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...w
  } = a, z = v.useRef(null), k = an(z, o), O = v.useRef(null), D = an(O, y), M = v.useRef(D);
  Xn(() => {
    M.current = D;
  }, [D]), v.useImperativeHandle(y, () => O.current, []);
  const $ = HO(h, c), [j, U] = v.useState($), [P, S] = v.useState(Kp(i));
  v.useEffect(() => {
    O.current && O.current.forceUpdate();
  }), v.useEffect(() => {
    i && S(Kp(i));
  }, [i]), Xn(() => {
    if (!P || !m)
      return;
    const F = (K) => {
      U(K.placement);
    };
    let N = [{
      name: "preventOverflow",
      options: {
        altBoundary: d
      }
    }, {
      name: "flip",
      options: {
        altBoundary: d
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: K
      }) => {
        F(K);
      }
    }];
    p != null && (N = N.concat(p)), g && g.modifiers != null && (N = N.concat(g.modifiers));
    const V = jO(P, z.current, {
      placement: $,
      ...g,
      modifiers: N
    });
    return M.current(V), () => {
      V.destroy(), M.current(null);
    };
  }, [P, d, p, m, g, $]);
  const B = {
    placement: j
  };
  R !== null && (B.TransitionProps = R);
  const H = IO(a), G = C.root ?? "div", J = _i({
    elementType: G,
    externalSlotProps: x.root,
    externalForwardedProps: w,
    additionalProps: {
      role: "tooltip",
      ref: k
    },
    ownerState: a,
    className: H.root
  });
  return /* @__PURE__ */ T.jsx(G, {
    ...J,
    children: typeof s == "function" ? s(B) : s
  });
}), GO = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    anchorEl: i,
    children: s,
    container: c,
    direction: d = "ltr",
    disablePortal: p = !1,
    keepMounted: m = !1,
    modifiers: h,
    open: g,
    placement: y = "bottom",
    popperOptions: x = PO,
    popperRef: C,
    style: R,
    transition: E = !1,
    slotProps: w = {},
    slots: z = {},
    ...k
  } = a, [O, D] = v.useState(!0), M = () => {
    D(!1);
  }, $ = () => {
    D(!0);
  };
  if (!m && !g && (!E || O))
    return null;
  let j;
  if (c)
    j = c;
  else if (i) {
    const S = Kp(i);
    j = S && UO(S) ? Qn(S).body : Qn(null).body;
  }
  const U = !g && m && (!E || O) ? "none" : void 0, P = E ? {
    in: g,
    onEnter: M,
    onExited: $
  } : void 0;
  return /* @__PURE__ */ T.jsx(Rx, {
    disablePortal: p,
    container: j,
    children: /* @__PURE__ */ T.jsx(VO, {
      anchorEl: i,
      direction: d,
      disablePortal: p,
      modifiers: h,
      ref: o,
      open: E ? !O : g,
      placement: y,
      popperOptions: x,
      popperRef: C,
      slotProps: w,
      slots: z,
      ...k,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: U,
        ...R
      },
      TransitionProps: P,
      children: s
    })
  });
}), qO = de(GO, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({}), Gu = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Yi(), s = Ye({
    props: a,
    name: "MuiPopper"
  }), {
    anchorEl: c,
    component: d,
    components: p,
    componentsProps: m,
    container: h,
    disablePortal: g,
    keepMounted: y,
    modifiers: x,
    open: C,
    placement: R,
    popperOptions: E,
    popperRef: w,
    transition: z,
    slots: k,
    slotProps: O,
    ...D
  } = s, M = (k == null ? void 0 : k.root) ?? (p == null ? void 0 : p.Root), $ = {
    anchorEl: c,
    container: h,
    disablePortal: g,
    keepMounted: y,
    modifiers: x,
    open: C,
    placement: R,
    popperOptions: E,
    popperRef: w,
    transition: z,
    ...D
  };
  return /* @__PURE__ */ T.jsx(qO, {
    as: d,
    direction: i ? "rtl" : "ltr",
    slots: {
      root: M
    },
    slotProps: O ?? m,
    ...$,
    ref: o
  });
});
function YO(e) {
  return Ge("MuiListSubheader", e);
}
_e("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const FO = (e) => {
  const {
    classes: a,
    color: o,
    disableGutters: i,
    inset: s,
    disableSticky: c
  } = e, d = {
    root: ["root", o !== "default" && `color${ue(o)}`, !i && "gutters", s && "inset", !c && "sticky"]
  };
  return qe(d, YO, a);
}, WO = de("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.color !== "default" && a[`color${ue(o.color)}`], !o.disableGutters && a.gutters, o.inset && a.inset, !o.disableSticky && a.sticky];
  }
})(Ve(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: a
    }) => a.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), Xp = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiListSubheader"
  }), {
    className: s,
    color: c = "default",
    component: d = "li",
    disableGutters: p = !1,
    disableSticky: m = !1,
    inset: h = !1,
    ...g
  } = i, y = {
    ...i,
    color: c,
    component: d,
    disableGutters: p,
    disableSticky: m,
    inset: h
  }, x = FO(y);
  return /* @__PURE__ */ T.jsx(WO, {
    as: d,
    className: he(x.root, s),
    ref: o,
    ownerState: y,
    ...g
  });
});
Xp && (Xp.muiSkipListHighlight = !0);
const KO = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function XO(e) {
  return Ge("MuiChip", e);
}
const ft = _e("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), QO = (e) => {
  const {
    classes: a,
    disabled: o,
    size: i,
    color: s,
    iconColor: c,
    onDelete: d,
    clickable: p,
    variant: m
  } = e, h = {
    root: ["root", m, o && "disabled", `size${ue(i)}`, `color${ue(s)}`, p && "clickable", p && `clickableColor${ue(s)}`, d && "deletable", d && `deletableColor${ue(s)}`, `${m}${ue(s)}`],
    label: ["label", `label${ue(i)}`],
    avatar: ["avatar", `avatar${ue(i)}`, `avatarColor${ue(s)}`],
    icon: ["icon", `icon${ue(i)}`, `iconColor${ue(c)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ue(i)}`, `deleteIconColor${ue(s)}`, `deleteIcon${ue(m)}Color${ue(s)}`]
  };
  return qe(h, XO, a);
}, ZO = de("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e, {
      color: i,
      iconColor: s,
      clickable: c,
      onDelete: d,
      size: p,
      variant: m
    } = o;
    return [{
      [`& .${ft.avatar}`]: a.avatar
    }, {
      [`& .${ft.avatar}`]: a[`avatar${ue(p)}`]
    }, {
      [`& .${ft.avatar}`]: a[`avatarColor${ue(i)}`]
    }, {
      [`& .${ft.icon}`]: a.icon
    }, {
      [`& .${ft.icon}`]: a[`icon${ue(p)}`]
    }, {
      [`& .${ft.icon}`]: a[`iconColor${ue(s)}`]
    }, {
      [`& .${ft.deleteIcon}`]: a.deleteIcon
    }, {
      [`& .${ft.deleteIcon}`]: a[`deleteIcon${ue(p)}`]
    }, {
      [`& .${ft.deleteIcon}`]: a[`deleteIconColor${ue(i)}`]
    }, {
      [`& .${ft.deleteIcon}`]: a[`deleteIcon${ue(m)}Color${ue(i)}`]
    }, a.root, a[`size${ue(p)}`], a[`color${ue(i)}`], c && a.clickable, c && i !== "default" && a[`clickableColor${ue(i)})`], d && a.deletable, d && i !== "default" && a[`deletableColor${ue(i)}`], a[m], a[`${m}${ue(i)}`]];
  }
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ft.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ft.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : a,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ft.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ft.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ft.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ft.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ft.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : xt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : xt(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ft.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ft.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Tn(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${ft.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : xt(e.palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${ft.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : a
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${ft.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ft.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Tn(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${ft.focusVisible}`]: {
          background: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ft.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Tn(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ft.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${ft.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ft.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${ft.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ft.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ft.icon}`]: {
          marginLeft: 4
        },
        [`& .${ft.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ft.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ft.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Tn()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : xt(e.palette[o].main, 0.7)}`,
        [`&.${ft.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette[o].main, e.palette.action.hoverOpacity)
        },
        [`&.${ft.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : xt(e.palette[o].main, e.palette.action.focusOpacity)
        },
        [`& .${ft.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : xt(e.palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), JO = de("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e, {
      size: i
    } = o;
    return [a.label, a[`label${ue(i)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function nb(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const ki = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiChip"
  }), {
    avatar: s,
    className: c,
    clickable: d,
    color: p = "default",
    component: m,
    deleteIcon: h,
    disabled: g = !1,
    icon: y,
    label: x,
    onClick: C,
    onDelete: R,
    onKeyDown: E,
    onKeyUp: w,
    size: z = "medium",
    variant: k = "filled",
    tabIndex: O,
    skipFocusWhenDisabled: D = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...M
  } = i, $ = v.useRef(null), j = an($, o), U = (Y) => {
    Y.stopPropagation(), R && R(Y);
  }, P = (Y) => {
    Y.currentTarget === Y.target && nb(Y) && Y.preventDefault(), E && E(Y);
  }, S = (Y) => {
    Y.currentTarget === Y.target && R && nb(Y) && R(Y), w && w(Y);
  }, B = d !== !1 && C ? !0 : d, H = B || R ? so : m || "div", G = {
    ...i,
    component: H,
    disabled: g,
    size: z,
    color: p,
    iconColor: /* @__PURE__ */ v.isValidElement(y) && y.props.color || p,
    onDelete: !!R,
    clickable: B,
    variant: k
  }, J = QO(G), F = H === so ? {
    component: m || "div",
    focusVisibleClassName: J.focusVisible,
    ...R && {
      disableRipple: !0
    }
  } : {};
  let N = null;
  R && (N = h && /* @__PURE__ */ v.isValidElement(h) ? /* @__PURE__ */ v.cloneElement(h, {
    className: he(h.props.className, J.deleteIcon),
    onClick: U
  }) : /* @__PURE__ */ T.jsx(KO, {
    className: he(J.deleteIcon),
    onClick: U
  }));
  let V = null;
  s && /* @__PURE__ */ v.isValidElement(s) && (V = /* @__PURE__ */ v.cloneElement(s, {
    className: he(J.avatar, s.props.className)
  }));
  let K = null;
  return y && /* @__PURE__ */ v.isValidElement(y) && (K = /* @__PURE__ */ v.cloneElement(y, {
    className: he(J.icon, y.props.className)
  })), /* @__PURE__ */ T.jsxs(ZO, {
    as: H,
    className: he(J.root, c),
    disabled: B && g ? !0 : void 0,
    onClick: C,
    onKeyDown: P,
    onKeyUp: S,
    ref: j,
    tabIndex: D && g ? -1 : O,
    ownerState: G,
    ...F,
    ...M,
    children: [V || K, /* @__PURE__ */ T.jsx(JO, {
      className: he(J.label),
      ownerState: G,
      children: x
    }), N]
  });
});
function Wc(e) {
  return parseInt(e, 10) || 0;
}
const e5 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function t5(e) {
  for (const a in e)
    return !1;
  return !0;
}
function ab(e) {
  return t5(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const n5 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    onChange: i,
    maxRows: s,
    minRows: c = 1,
    style: d,
    value: p,
    ...m
  } = a, {
    current: h
  } = v.useRef(p != null), g = v.useRef(null), y = an(o, g), x = v.useRef(null), C = v.useRef(null), R = v.useCallback(() => {
    const O = g.current, D = C.current;
    if (!O || !D)
      return;
    const $ = ua(O).getComputedStyle(O);
    if ($.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    D.style.width = $.width, D.value = O.value || a.placeholder || "x", D.value.slice(-1) === `
` && (D.value += " ");
    const j = $.boxSizing, U = Wc($.paddingBottom) + Wc($.paddingTop), P = Wc($.borderBottomWidth) + Wc($.borderTopWidth), S = D.scrollHeight;
    D.value = "x";
    const B = D.scrollHeight;
    let H = S;
    c && (H = Math.max(Number(c) * B, H)), s && (H = Math.min(Number(s) * B, H)), H = Math.max(H, B);
    const G = H + (j === "border-box" ? U + P : 0), J = Math.abs(H - S) <= 1;
    return {
      outerHeightStyle: G,
      overflowing: J
    };
  }, [s, c, a.placeholder]), E = Ln(() => {
    const O = g.current, D = R();
    if (!O || !D || ab(D))
      return !1;
    const M = D.outerHeightStyle;
    return x.current != null && x.current !== M;
  }), w = v.useCallback(() => {
    const O = g.current, D = R();
    if (!O || !D || ab(D))
      return;
    const M = D.outerHeightStyle;
    x.current !== M && (x.current = M, O.style.height = `${M}px`), O.style.overflow = D.overflowing ? "hidden" : "";
  }, [R]), z = v.useRef(-1);
  Xn(() => {
    const O = Rs(w), D = g == null ? void 0 : g.current;
    if (!D)
      return;
    const M = ua(D);
    M.addEventListener("resize", O);
    let $;
    return typeof ResizeObserver < "u" && ($ = new ResizeObserver(() => {
      E() && ($.unobserve(D), cancelAnimationFrame(z.current), w(), z.current = requestAnimationFrame(() => {
        $.observe(D);
      }));
    }), $.observe(D)), () => {
      O.clear(), cancelAnimationFrame(z.current), M.removeEventListener("resize", O), $ && $.disconnect();
    };
  }, [R, w, E]), Xn(() => {
    w();
  });
  const k = (O) => {
    h || w(), i && i(O);
  };
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ T.jsx("textarea", {
      value: p,
      onChange: k,
      ref: y,
      rows: c,
      style: d,
      ...m
    }), /* @__PURE__ */ T.jsx("textarea", {
      "aria-hidden": !0,
      className: a.className,
      readOnly: !0,
      ref: C,
      tabIndex: -1,
      style: {
        ...e5.shadow,
        ...d,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function ps(e) {
  return typeof e == "string";
}
function Fi({
  props: e,
  states: a,
  muiFormControl: o
}) {
  return a.reduce((i, s) => (i[s] = e[s], o && typeof e[s] > "u" && (i[s] = o[s]), i), {});
}
const Gm = /* @__PURE__ */ v.createContext(void 0);
function Wi() {
  return v.useContext(Gm);
}
function rb(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Cu(e, a = !1) {
  return e && (rb(e.value) && e.value !== "" || a && rb(e.defaultValue) && e.defaultValue !== "");
}
function a5(e) {
  return e.startAdornment;
}
function r5(e) {
  return Ge("MuiInputBase", e);
}
const ia = _e("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var ob;
const qu = (e, a) => {
  const {
    ownerState: o
  } = e;
  return [a.root, o.formControl && a.formControl, o.startAdornment && a.adornedStart, o.endAdornment && a.adornedEnd, o.error && a.error, o.size === "small" && a.sizeSmall, o.multiline && a.multiline, o.color && a[`color${ue(o.color)}`], o.fullWidth && a.fullWidth, o.hiddenLabel && a.hiddenLabel];
}, Yu = (e, a) => {
  const {
    ownerState: o
  } = e;
  return [a.input, o.size === "small" && a.inputSizeSmall, o.multiline && a.inputMultiline, o.type === "search" && a.inputTypeSearch, o.startAdornment && a.inputAdornedStart, o.endAdornment && a.inputAdornedEnd, o.hiddenLabel && a.inputHiddenLabel];
}, o5 = (e) => {
  const {
    classes: a,
    color: o,
    disabled: i,
    error: s,
    endAdornment: c,
    focused: d,
    formControl: p,
    fullWidth: m,
    hiddenLabel: h,
    multiline: g,
    readOnly: y,
    size: x,
    startAdornment: C,
    type: R
  } = e, E = {
    root: ["root", `color${ue(o)}`, i && "disabled", s && "error", m && "fullWidth", d && "focused", p && "formControl", x && x !== "medium" && `size${ue(x)}`, g && "multiline", C && "adornedStart", c && "adornedEnd", h && "hiddenLabel", y && "readOnly"],
    input: ["input", i && "disabled", R === "search" && "inputTypeSearch", g && "inputMultiline", x === "small" && "inputSizeSmall", h && "inputHiddenLabel", C && "inputAdornedStart", c && "inputAdornedEnd", y && "readOnly"]
  };
  return qe(E, r5, a);
}, Fu = de("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: qu
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ia.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: a,
      size: o
    }) => a.multiline && o === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: a
    }) => a.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Wu = de("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Yu
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light", o = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: a ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: a ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&::-ms-input-placeholder": o,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ia.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${ia.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: c
      }) => !c.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: c
      }) => c.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), ib = yM({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), qm = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: c,
    autoFocus: d,
    className: p,
    color: m,
    components: h = {},
    componentsProps: g = {},
    defaultValue: y,
    disabled: x,
    disableInjectingGlobalStyles: C,
    endAdornment: R,
    error: E,
    fullWidth: w = !1,
    id: z,
    inputComponent: k = "input",
    inputProps: O = {},
    inputRef: D,
    margin: M,
    maxRows: $,
    minRows: j,
    multiline: U = !1,
    name: P,
    onBlur: S,
    onChange: B,
    onClick: H,
    onFocus: G,
    onKeyDown: J,
    onKeyUp: F,
    placeholder: N,
    readOnly: V,
    renderSuffix: K,
    rows: Y,
    size: pe,
    slotProps: L = {},
    slots: W = {},
    startAdornment: re,
    type: te = "text",
    value: fe,
    ...se
  } = i, ge = O.value != null ? O.value : fe, {
    current: ye
  } = v.useRef(ge != null), be = v.useRef(), Te = v.useCallback((ze) => {
  }, []), De = an(be, D, O.ref, Te), [Se, ct] = v.useState(!1), Oe = Wi(), ke = Fi({
    props: i,
    muiFormControl: Oe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ke.focused = Oe ? Oe.focused : Se, v.useEffect(() => {
    !Oe && x && Se && (ct(!1), S && S());
  }, [Oe, x, Se, S]);
  const vt = Oe && Oe.onFilled, me = Oe && Oe.onEmpty, He = v.useCallback((ze) => {
    Cu(ze) ? vt && vt() : me && me();
  }, [vt, me]);
  Xn(() => {
    ye && He({
      value: ge
    });
  }, [ge, He, ye]);
  const Me = (ze) => {
    G && G(ze), O.onFocus && O.onFocus(ze), Oe && Oe.onFocus ? Oe.onFocus(ze) : ct(!0);
  }, We = (ze) => {
    S && S(ze), O.onBlur && O.onBlur(ze), Oe && Oe.onBlur ? Oe.onBlur(ze) : ct(!1);
  }, Fe = (ze, ...bt) => {
    if (!ye) {
      const lt = ze.target || be.current;
      if (lt == null)
        throw new Error(Rr(1));
      He({
        value: lt.value
      });
    }
    O.onChange && O.onChange(ze, ...bt), B && B(ze, ...bt);
  };
  v.useEffect(() => {
    He(be.current);
  }, []);
  const Ce = (ze) => {
    be.current && ze.currentTarget === ze.target && be.current.focus(), H && H(ze);
  };
  let At = k, Ue = O;
  U && At === "input" && (Y ? Ue = {
    type: void 0,
    minRows: Y,
    maxRows: Y,
    ...Ue
  } : Ue = {
    type: void 0,
    maxRows: $,
    minRows: j,
    ...Ue
  }, At = n5);
  const Ft = (ze) => {
    He(ze.animationName === "mui-auto-fill-cancel" ? be.current : {
      value: "x"
    });
  };
  v.useEffect(() => {
    Oe && Oe.setAdornedStart(!!re);
  }, [Oe, re]);
  const rn = {
    ...i,
    color: ke.color || "primary",
    disabled: ke.disabled,
    endAdornment: R,
    error: ke.error,
    focused: ke.focused,
    formControl: Oe,
    fullWidth: w,
    hiddenLabel: ke.hiddenLabel,
    multiline: U,
    size: ke.size,
    startAdornment: re,
    type: te
  }, Bt = o5(rn), Je = W.root || h.Root || Fu, Ke = L.root || g.root || {}, je = W.input || h.Input || Wu;
  return Ue = {
    ...Ue,
    ...L.input ?? g.input
  }, /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [!C && typeof ib == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (ob || (ob = /* @__PURE__ */ T.jsx(ib, {}))), /* @__PURE__ */ T.jsxs(Je, {
      ...Ke,
      ref: o,
      onClick: Ce,
      ...se,
      ...!ps(Je) && {
        ownerState: {
          ...rn,
          ...Ke.ownerState
        }
      },
      className: he(Bt.root, Ke.className, p, V && "MuiInputBase-readOnly"),
      children: [re, /* @__PURE__ */ T.jsx(Gm.Provider, {
        value: null,
        children: /* @__PURE__ */ T.jsx(je, {
          "aria-invalid": ke.error,
          "aria-describedby": s,
          autoComplete: c,
          autoFocus: d,
          defaultValue: y,
          disabled: ke.disabled,
          id: z,
          onAnimationStart: Ft,
          name: P,
          placeholder: N,
          readOnly: V,
          required: ke.required,
          rows: Y,
          value: ge,
          onKeyDown: J,
          onKeyUp: F,
          type: te,
          ...Ue,
          ...!ps(je) && {
            as: At,
            ownerState: {
              ...rn,
              ...Ue.ownerState
            }
          },
          ref: De,
          className: he(Bt.input, Ue.className, V && "MuiInputBase-readOnly"),
          onBlur: We,
          onChange: Fe,
          onFocus: Me
        })
      }), R, K ? K({
        ...ke,
        startAdornment: re
      }) : null]
    })]
  });
});
function i5(e) {
  return Ge("MuiInput", e);
}
const no = {
  ...ia,
  ..._e("MuiInput", ["root", "underline", "input"])
};
function l5(e) {
  return Ge("MuiOutlinedInput", e);
}
const Ta = {
  ...ia,
  ..._e("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function s5(e) {
  return Ge("MuiFilledInput", e);
}
const la = {
  ...ia,
  ..._e("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, wx = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function c5(e) {
  return Ge("MuiAutocomplete", e);
}
const it = _e("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var lb, sb;
const u5 = (e) => {
  const {
    classes: a,
    disablePortal: o,
    expanded: i,
    focused: s,
    fullWidth: c,
    hasClearIcon: d,
    hasPopupIcon: p,
    inputFocused: m,
    popupOpen: h,
    size: g
  } = e, y = {
    root: ["root", i && "expanded", s && "focused", c && "fullWidth", d && "hasClearIcon", p && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", m && "inputFocused"],
    tag: ["tag", `tagSize${ue(g)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", h && "popupIndicatorOpen"],
    popper: ["popper", o && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return qe(y, c5, a);
}, d5 = de("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e, {
      fullWidth: i,
      hasClearIcon: s,
      hasPopupIcon: c,
      inputFocused: d,
      size: p
    } = o;
    return [{
      [`& .${it.tag}`]: a.tag
    }, {
      [`& .${it.tag}`]: a[`tagSize${ue(p)}`]
    }, {
      [`& .${it.inputRoot}`]: a.inputRoot
    }, {
      [`& .${it.input}`]: a.input
    }, {
      [`& .${it.input}`]: d && a.inputFocused
    }, a.root, i && a.fullWidth, c && a.hasPopupIcon, s && a.hasClearIcon];
  }
})({
  [`&.${it.focused} .${it.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${it.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${it.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${it.inputRoot}`]: {
    [`.${it.hasPopupIcon}&, .${it.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${it.hasPopupIcon}.${it.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${it.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${no.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${no.root}.${ia.sizeSmall}`]: {
    [`& .${no.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Ta.root}`]: {
    padding: 9,
    [`.${it.hasPopupIcon}&, .${it.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${it.hasPopupIcon}.${it.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${it.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${it.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Ta.root}.${ia.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${it.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${la.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${it.hasPopupIcon}&, .${it.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${it.hasPopupIcon}.${it.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${la.input}`]: {
      padding: "7px 4px"
    },
    [`& .${it.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${la.root}.${ia.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${la.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${ia.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${la.root}.${ia.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${it.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${la.root}.${ia.hiddenLabel}.${ia.sizeSmall}`]: {
    [`& .${it.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${it.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${it.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${it.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${it.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), f5 = de("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, a) => a.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), p5 = de(_o, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, a) => a.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), m5 = de(_o, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.popupIndicator, o.popupOpen && a.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), h5 = de(Gu, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${it.option}`]: a.option
    }, a.popper, o.disablePortal && a.popperDisablePortal];
  }
})(Ve(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), g5 = de(co, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, a) => a.paper
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), y5 = de("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, a) => a.loading
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), v5 = de("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, a) => a.noOptions
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), b5 = de("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, a) => a.listbox
})(Ve(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${it.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${it.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${it.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : xt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${it.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${it.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), x5 = de(Xp, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, a) => a.groupLabel
})(Ve(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), S5 = de("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, a) => a.groupUl
})({
  padding: 0,
  [`& .${it.option}`]: {
    paddingLeft: 24
  }
}), C5 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiAutocomplete"
  }), {
    autoComplete: s = !1,
    autoHighlight: c = !1,
    autoSelect: d = !1,
    blurOnSelect: p = !1,
    ChipProps: m,
    className: h,
    clearIcon: g = lb || (lb = /* @__PURE__ */ T.jsx(hx, {
      fontSize: "small"
    })),
    clearOnBlur: y = !i.freeSolo,
    clearOnEscape: x = !1,
    clearText: C = "Clear",
    closeText: R = "Close",
    componentsProps: E,
    defaultValue: w = i.multiple ? [] : null,
    disableClearable: z = !1,
    disableCloseOnSelect: k = !1,
    disabled: O = !1,
    disabledItemsFocusable: D = !1,
    disableListWrap: M = !1,
    disablePortal: $ = !1,
    filterOptions: j,
    filterSelectedOptions: U = !1,
    forcePopupIcon: P = "auto",
    freeSolo: S = !1,
    fullWidth: B = !1,
    getLimitTagsText: H = (st) => `+${st}`,
    getOptionDisabled: G,
    getOptionKey: J,
    getOptionLabel: F,
    isOptionEqualToValue: N,
    groupBy: V,
    handleHomeEndKeys: K = !i.freeSolo,
    id: Y,
    includeInputInList: pe = !1,
    inputValue: L,
    limitTags: W = -1,
    ListboxComponent: re,
    ListboxProps: te,
    loading: fe = !1,
    loadingText: se = "Loading…",
    multiple: ge = !1,
    noOptionsText: ye = "No options",
    onChange: be,
    onClose: Te,
    onHighlightChange: De,
    onInputChange: Se,
    onOpen: ct,
    open: Oe,
    openOnFocus: ke = !1,
    openText: vt = "Open",
    options: me,
    PaperComponent: He,
    PopperComponent: Me,
    popupIcon: We = sb || (sb = /* @__PURE__ */ T.jsx(wx, {})),
    readOnly: Fe = !1,
    renderGroup: Ce,
    renderInput: At,
    renderOption: Ue,
    renderTags: Ft,
    selectOnFocus: rn = !i.freeSolo,
    size: Bt = "medium",
    slots: Je = {},
    slotProps: Ke = {},
    value: je,
    ...ze
  } = i, {
    getRootProps: bt,
    getInputProps: lt,
    getInputLabelProps: gt,
    getPopupIndicatorProps: xe,
    getClearProps: $e,
    getTagProps: _t,
    getListboxProps: Qt,
    getOptionProps: Bn,
    value: dn,
    dirty: Dn,
    expanded: yn,
    id: Sn,
    popupOpen: vn,
    focused: Un,
    focusedTag: Ia,
    anchorEl: Ie,
    setAnchorEl: on,
    inputValue: ve,
    groupedOptions: Re
  } = zA({
    ...i,
    componentName: "Autocomplete"
  }), nt = !z && !O && Dn && !Fe, ot = (!S || P === !0) && P !== !1, {
    onMouseDown: Ot
  } = lt(), {
    ref: Cn,
    ..._n
  } = Qt(), Na = F || ((st) => st.label ?? st), zt = {
    ...i,
    disablePortal: $,
    expanded: yn,
    focused: Un,
    fullWidth: B,
    getOptionLabel: Na,
    hasClearIcon: nt,
    hasPopupIcon: ot,
    inputFocused: Ia === -1,
    popupOpen: vn,
    size: Bt
  }, pt = u5(zt), Vt = {
    slots: {
      paper: He,
      popper: Me,
      ...Je
    },
    slotProps: {
      chip: m,
      listbox: te,
      ...E,
      ...Ke
    }
  }, [La, ie] = Ze("listbox", {
    elementType: b5,
    externalForwardedProps: Vt,
    ownerState: zt,
    className: pt.listbox,
    additionalProps: _n,
    ref: Cn
  }), [oe, Ee] = Ze("paper", {
    elementType: co,
    externalForwardedProps: Vt,
    ownerState: zt,
    className: pt.paper
  }), [Xe, et] = Ze("popper", {
    elementType: Gu,
    externalForwardedProps: Vt,
    ownerState: zt,
    className: pt.popper,
    additionalProps: {
      disablePortal: $,
      style: {
        width: Ie ? Ie.clientWidth : null
      },
      role: "presentation",
      anchorEl: Ie,
      open: vn
    }
  });
  let Et;
  if (ge && dn.length > 0) {
    const st = (Rn) => ({
      className: pt.tag,
      disabled: O,
      ..._t(Rn)
    });
    Ft ? Et = Ft(dn, st, zt) : Et = dn.map((Rn, Pa) => {
      const {
        key: Or,
        ...As
      } = st({
        index: Pa
      });
      return /* @__PURE__ */ T.jsx(ki, {
        label: Na(Rn),
        size: Bt,
        ...As,
        ...Vt.slotProps.chip
      }, Or);
    });
  }
  if (W > -1 && Array.isArray(Et)) {
    const st = Et.length - W;
    !Un && st > 0 && (Et = Et.splice(0, W), Et.push(/* @__PURE__ */ T.jsx("span", {
      className: pt.tag,
      children: H(st)
    }, Et.length)));
  }
  const bn = Ce || ((st) => /* @__PURE__ */ T.jsxs("li", {
    children: [/* @__PURE__ */ T.jsx(x5, {
      className: pt.groupLabel,
      ownerState: zt,
      component: "div",
      children: st.group
    }), /* @__PURE__ */ T.jsx(S5, {
      className: pt.groupUl,
      ownerState: zt,
      children: st.children
    })]
  }, st.key)), Ar = Ue || ((st, Rn) => {
    const {
      key: Pa,
      ...Or
    } = st;
    return /* @__PURE__ */ T.jsx("li", {
      ...Or,
      children: Na(Rn)
    }, Pa);
  }), ln = (st, Rn) => {
    const Pa = Bn({
      option: st,
      index: Rn
    });
    return Ar({
      ...Pa,
      className: pt.option
    }, st, {
      selected: Pa["aria-selected"],
      index: Rn,
      inputValue: ve
    }, zt);
  }, fo = Vt.slotProps.clearIndicator, po = Vt.slotProps.popupIndicator;
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ T.jsx(d5, {
      ref: o,
      className: he(pt.root, h),
      ownerState: zt,
      ...bt(ze),
      children: At({
        id: Sn,
        disabled: O,
        fullWidth: !0,
        size: Bt === "small" ? "small" : void 0,
        InputLabelProps: gt(),
        InputProps: {
          ref: on,
          className: pt.inputRoot,
          startAdornment: Et,
          onMouseDown: (st) => {
            st.target === st.currentTarget && Ot(st);
          },
          ...(nt || ot) && {
            endAdornment: /* @__PURE__ */ T.jsxs(f5, {
              className: pt.endAdornment,
              ownerState: zt,
              children: [nt ? /* @__PURE__ */ T.jsx(p5, {
                ...$e(),
                "aria-label": C,
                title: C,
                ownerState: zt,
                ...fo,
                className: he(pt.clearIndicator, fo == null ? void 0 : fo.className),
                children: g
              }) : null, ot ? /* @__PURE__ */ T.jsx(m5, {
                ...xe(),
                disabled: O,
                "aria-label": vn ? R : vt,
                title: vn ? R : vt,
                ownerState: zt,
                ...po,
                className: he(pt.popupIndicator, po == null ? void 0 : po.className),
                children: We
              }) : null]
            })
          }
        },
        inputProps: {
          className: pt.input,
          disabled: O,
          readOnly: Fe,
          ...lt()
        }
      })
    }), Ie ? /* @__PURE__ */ T.jsx(h5, {
      as: Xe,
      ...et,
      children: /* @__PURE__ */ T.jsxs(g5, {
        as: oe,
        ...Ee,
        children: [fe && Re.length === 0 ? /* @__PURE__ */ T.jsx(y5, {
          className: pt.loading,
          ownerState: zt,
          children: se
        }) : null, Re.length === 0 && !S && !fe ? /* @__PURE__ */ T.jsx(v5, {
          className: pt.noOptions,
          ownerState: zt,
          role: "presentation",
          onMouseDown: (st) => {
            st.preventDefault();
          },
          children: ye
        }) : null, Re.length > 0 ? /* @__PURE__ */ T.jsx(La, {
          as: re,
          ...ie,
          children: Re.map((st, Rn) => V ? bn({
            key: st.key,
            group: st.group,
            children: st.options.map((Pa, Or) => ln(Pa, st.index + Or))
          }) : ln(st, Rn))
        }) : null]
      })
    }) : null]
  });
}), E5 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, T5 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = nr(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    addEndListener: c,
    appear: d = !0,
    children: p,
    easing: m,
    in: h,
    onEnter: g,
    onEntered: y,
    onEntering: x,
    onExit: C,
    onExited: R,
    onExiting: E,
    style: w,
    timeout: z = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = ka,
    ...O
  } = a, D = v.useRef(null), M = an(D, Io(p), o), $ = (J) => (F) => {
    if (J) {
      const N = D.current;
      F === void 0 ? J(N) : J(N, F);
    }
  }, j = $(x), U = $((J, F) => {
    Lm(J);
    const N = lo({
      style: w,
      timeout: z,
      easing: m
    }, {
      mode: "enter"
    });
    J.style.webkitTransition = i.transitions.create("opacity", N), J.style.transition = i.transitions.create("opacity", N), g && g(J, F);
  }), P = $(y), S = $(E), B = $((J) => {
    const F = lo({
      style: w,
      timeout: z,
      easing: m
    }, {
      mode: "exit"
    });
    J.style.webkitTransition = i.transitions.create("opacity", F), J.style.transition = i.transitions.create("opacity", F), C && C(J);
  }), H = $(R), G = (J) => {
    c && c(D.current, J);
  };
  return /* @__PURE__ */ T.jsx(k, {
    appear: d,
    in: h,
    nodeRef: D,
    onEnter: U,
    onEntered: P,
    onEntering: j,
    onExit: B,
    onExited: H,
    onExiting: S,
    addEndListener: G,
    timeout: z,
    ...O,
    children: (J, {
      ownerState: F,
      ...N
    }) => /* @__PURE__ */ v.cloneElement(p, {
      style: {
        opacity: 0,
        visibility: J === "exited" && !h ? "hidden" : void 0,
        ...E5[J],
        ...w,
        ...p.props.style
      },
      ref: M,
      ...N
    })
  });
});
function R5(e) {
  return Ge("MuiBackdrop", e);
}
_e("MuiBackdrop", ["root", "invisible"]);
const w5 = (e) => {
  const {
    classes: a,
    invisible: o
  } = e;
  return qe({
    root: ["root", o && "invisible"]
  }, R5, a);
}, M5 = de("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.invisible && a.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), A5 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: c,
    component: d = "div",
    invisible: p = !1,
    open: m,
    components: h = {},
    componentsProps: g = {},
    slotProps: y = {},
    slots: x = {},
    TransitionComponent: C,
    transitionDuration: R,
    ...E
  } = i, w = {
    ...i,
    component: d,
    invisible: p
  }, z = w5(w), k = {
    transition: C,
    root: h.Root,
    ...x
  }, O = {
    ...g,
    ...y
  }, D = {
    slots: k,
    slotProps: O
  }, [M, $] = Ze("root", {
    elementType: M5,
    externalForwardedProps: D,
    className: he(z.root, c),
    ownerState: w
  }), [j, U] = Ze("transition", {
    elementType: T5,
    externalForwardedProps: D,
    ownerState: w
  });
  return /* @__PURE__ */ T.jsx(j, {
    in: m,
    timeout: R,
    ...E,
    ...U,
    children: /* @__PURE__ */ T.jsx(M, {
      "aria-hidden": !0,
      ...$,
      classes: z,
      ref: o,
      children: s
    })
  });
});
function O5(e) {
  const {
    badgeContent: a,
    invisible: o = !1,
    max: i = 99,
    showZero: s = !1
  } = e, c = Mm({
    badgeContent: a,
    max: i
  });
  let d = o;
  o === !1 && a === 0 && !s && (d = !0);
  const {
    badgeContent: p,
    max: m = i
  } = d ? c : e, h = p && Number(p) > m ? `${m}+` : p;
  return {
    badgeContent: p,
    invisible: d,
    max: m,
    displayValue: h
  };
}
function z5(e) {
  return Ge("MuiBadge", e);
}
const eo = _e("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), Ep = 10, Tp = 4, D5 = (e) => {
  const {
    color: a,
    anchorOrigin: o,
    invisible: i,
    overlap: s,
    variant: c,
    classes: d = {}
  } = e, p = {
    root: ["root"],
    badge: ["badge", c, i && "invisible", `anchorOrigin${ue(o.vertical)}${ue(o.horizontal)}`, `anchorOrigin${ue(o.vertical)}${ue(o.horizontal)}${ue(s)}`, `overlap${ue(s)}`, a !== "default" && `color${ue(a)}`]
  };
  return qe(p, z5, d);
}, $5 = de("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), k5 = de("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.badge, a[o.variant], a[`anchorOrigin${ue(o.anchorOrigin.vertical)}${ue(o.anchorOrigin.horizontal)}${ue(o.overlap)}`], o.color !== "default" && a[`color${ue(o.color)}`], o.invisible && a.invisible];
  }
})(Ve(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: Ep * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Ep * 2,
  borderRadius: Ep,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(Tn(["contrastText"])).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      backgroundColor: (e.vars || e).palette[a].main,
      color: (e.vars || e).palette[a].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Tp,
      height: Tp * 2,
      minWidth: Tp * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "right" && a.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "right" && a.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "left" && a.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "left" && a.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "right" && a.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "right" && a.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "left" && a.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "left" && a.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${eo.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.leavingScreen
      })
    }
  }]
})));
function cb(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const N5 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiBadge"
  }), {
    anchorOrigin: s,
    className: c,
    classes: d,
    component: p,
    components: m = {},
    componentsProps: h = {},
    children: g,
    overlap: y = "rectangular",
    color: x = "default",
    invisible: C = !1,
    max: R = 99,
    badgeContent: E,
    slots: w,
    slotProps: z,
    showZero: k = !1,
    variant: O = "standard",
    ...D
  } = i, {
    badgeContent: M,
    invisible: $,
    max: j,
    displayValue: U
  } = O5({
    max: R,
    invisible: C,
    badgeContent: E,
    showZero: k
  }), P = Mm({
    anchorOrigin: cb(s),
    color: x,
    overlap: y,
    variant: O,
    badgeContent: E
  }), S = $ || M == null && O !== "dot", {
    color: B = x,
    overlap: H = y,
    anchorOrigin: G,
    variant: J = O
  } = S ? P : i, F = cb(G), N = J !== "dot" ? U : void 0, V = {
    ...i,
    badgeContent: M,
    invisible: S,
    max: j,
    displayValue: N,
    showZero: k,
    anchorOrigin: F,
    color: B,
    overlap: H,
    variant: J
  }, K = D5(V), Y = {
    slots: {
      root: (w == null ? void 0 : w.root) ?? m.Root,
      badge: (w == null ? void 0 : w.badge) ?? m.Badge
    },
    slotProps: {
      root: (z == null ? void 0 : z.root) ?? h.root,
      badge: (z == null ? void 0 : z.badge) ?? h.badge
    }
  }, [pe, L] = Ze("root", {
    elementType: $5,
    externalForwardedProps: {
      ...Y,
      ...D
    },
    ownerState: V,
    className: he(K.root, c),
    ref: o,
    additionalProps: {
      as: p
    }
  }), [W, re] = Ze("badge", {
    elementType: k5,
    externalForwardedProps: Y,
    ownerState: V,
    className: K.badge
  });
  return /* @__PURE__ */ T.jsxs(pe, {
    ...L,
    children: [g, /* @__PURE__ */ T.jsx(W, {
      ...re,
      children: N
    })]
  });
}), L5 = _e("MuiBox", ["root"]), j5 = us(), rt = _R({
  themeId: Ua,
  defaultTheme: j5,
  defaultClassName: L5.root,
  generateClassName: U1.generate
});
function B5(e) {
  return Ge("MuiButton", e);
}
const zo = _e("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), _5 = /* @__PURE__ */ v.createContext({}), H5 = /* @__PURE__ */ v.createContext(void 0), U5 = (e) => {
  const {
    color: a,
    disableElevation: o,
    fullWidth: i,
    size: s,
    variant: c,
    loading: d,
    loadingPosition: p,
    classes: m
  } = e, h = {
    root: ["root", d && "loading", c, `${c}${ue(a)}`, `size${ue(s)}`, `${c}Size${ue(s)}`, `color${ue(a)}`, o && "disableElevation", i && "fullWidth", d && `loadingPosition${ue(p)}`],
    startIcon: ["icon", "startIcon", `iconSize${ue(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${ue(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, g = qe(h, B5, m);
  return {
    ...m,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...g
  };
}, Mx = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], I5 = de(so, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], a[`${o.variant}${ue(o.color)}`], a[`size${ue(o.size)}`], a[`${o.variant}Size${ue(o.size)}`], o.color === "inherit" && a.colorInherit, o.disableElevation && a.disableElevation, o.fullWidth && a.fullWidth, o.loading && a.loading];
  }
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${zo.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${zo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${zo.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${zo.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Tn()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)` : xt(e.palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette[i].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette[i].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : a,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${zo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${zo.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${zo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), P5 = de("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.startIcon, o.loading && a.startIconLoadingStart, a[`iconSize${ue(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Mx]
})), V5 = de("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.endIcon, o.loading && a.endIconLoadingEnd, a[`iconSize${ue(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Mx]
})), G5 = de("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, a) => a.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), ub = de("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, a) => a.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), jo = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = v.useContext(_5), s = v.useContext(H5), c = ss(i, a), d = Ye({
    props: c,
    name: "MuiButton"
  }), {
    children: p,
    color: m = "primary",
    component: h = "button",
    className: g,
    disabled: y = !1,
    disableElevation: x = !1,
    disableFocusRipple: C = !1,
    endIcon: R,
    focusVisibleClassName: E,
    fullWidth: w = !1,
    id: z,
    loading: k = null,
    loadingIndicator: O,
    loadingPosition: D = "center",
    size: M = "medium",
    startIcon: $,
    type: j,
    variant: U = "text",
    ...P
  } = d, S = Uo(z), B = O ?? /* @__PURE__ */ T.jsx(jm, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), H = {
    ...d,
    color: m,
    component: h,
    disabled: y,
    disableElevation: x,
    disableFocusRipple: C,
    fullWidth: w,
    loading: k,
    loadingIndicator: B,
    loadingPosition: D,
    size: M,
    type: j,
    variant: U
  }, G = U5(H), J = ($ || k && D === "start") && /* @__PURE__ */ T.jsx(P5, {
    className: G.startIcon,
    ownerState: H,
    children: $ || /* @__PURE__ */ T.jsx(ub, {
      className: G.loadingIconPlaceholder,
      ownerState: H
    })
  }), F = (R || k && D === "end") && /* @__PURE__ */ T.jsx(V5, {
    className: G.endIcon,
    ownerState: H,
    children: R || /* @__PURE__ */ T.jsx(ub, {
      className: G.loadingIconPlaceholder,
      ownerState: H
    })
  }), N = s || "", V = typeof k == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: G.loadingWrapper,
      style: {
        display: "contents"
      },
      children: k && /* @__PURE__ */ T.jsx(G5, {
        className: G.loadingIndicator,
        ownerState: H,
        children: B
      })
    })
  ) : null;
  return /* @__PURE__ */ T.jsxs(I5, {
    ownerState: H,
    className: he(i.className, G.root, g, N),
    component: h,
    disabled: y || k,
    focusRipple: !C,
    focusVisibleClassName: he(G.focusVisible, E),
    ref: o,
    type: j,
    id: k ? S : z,
    ...P,
    classes: G,
    children: [J, D !== "end" && V, p, D === "end" && V, F]
  });
});
function q5(e) {
  return Ge("MuiCard", e);
}
_e("MuiCard", ["root"]);
const Y5 = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, q5, a);
}, F5 = de(co, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  overflow: "hidden"
}), Ni = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiCard"
  }), {
    className: s,
    raised: c = !1,
    ...d
  } = i, p = {
    ...i,
    raised: c
  }, m = Y5(p);
  return /* @__PURE__ */ T.jsx(F5, {
    className: he(m.root, s),
    elevation: c ? 8 : void 0,
    ref: o,
    ownerState: p,
    ...d
  });
});
function W5(e) {
  return Ge("MuiCardContent", e);
}
_e("MuiCardContent", ["root"]);
const K5 = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, W5, a);
}, X5 = de("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), es = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiCardContent"
  }), {
    className: s,
    component: c = "div",
    ...d
  } = i, p = {
    ...i,
    component: c
  }, m = K5(p);
  return /* @__PURE__ */ T.jsx(X5, {
    as: c,
    className: he(m.root, s),
    ownerState: p,
    ref: o,
    ...d
  });
});
function Q5(e) {
  const a = Qn(e);
  return a.body === e ? ua(e).innerWidth > a.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ts(e, a) {
  a ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function db(e) {
  return parseInt(ua(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Z5(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), i = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || i;
}
function fb(e, a, o, i, s) {
  const c = [a, o, ...i];
  [].forEach.call(e.children, (d) => {
    const p = !c.includes(d), m = !Z5(d);
    p && m && ts(d, s);
  });
}
function Rp(e, a) {
  let o = -1;
  return e.some((i, s) => a(i) ? (o = s, !0) : !1), o;
}
function J5(e, a) {
  const o = [], i = e.container;
  if (!a.disableScrollLock) {
    if (Q5(i)) {
      const d = W1(ua(i));
      o.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${db(i) + d}px`;
      const p = Qn(i).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (m) => {
        o.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m
        }), m.style.paddingRight = `${db(m) + d}px`;
      });
    }
    let c;
    if (i.parentNode instanceof DocumentFragment)
      c = Qn(i).body;
    else {
      const d = i.parentElement, p = ua(i);
      c = (d == null ? void 0 : d.nodeName) === "HTML" && p.getComputedStyle(d).overflowY === "scroll" ? d : i;
    }
    o.push({
      value: c.style.overflow,
      property: "overflow",
      el: c
    }, {
      value: c.style.overflowX,
      property: "overflow-x",
      el: c
    }, {
      value: c.style.overflowY,
      property: "overflow-y",
      el: c
    }), c.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: c,
      el: d,
      property: p
    }) => {
      c ? d.style.setProperty(p, c) : d.style.removeProperty(p);
    });
  };
}
function e4(e) {
  const a = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && a.push(o);
  }), a;
}
class t4 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(a, o) {
    let i = this.modals.indexOf(a);
    if (i !== -1)
      return i;
    i = this.modals.length, this.modals.push(a), a.modalRef && ts(a.modalRef, !1);
    const s = e4(o);
    fb(o, a.mount, a.modalRef, s, !0);
    const c = Rp(this.containers, (d) => d.container === o);
    return c !== -1 ? (this.containers[c].modals.push(a), i) : (this.containers.push({
      modals: [a],
      container: o,
      restore: null,
      hiddenSiblings: s
    }), i);
  }
  mount(a, o) {
    const i = Rp(this.containers, (c) => c.modals.includes(a)), s = this.containers[i];
    s.restore || (s.restore = J5(s, o));
  }
  remove(a, o = !0) {
    const i = this.modals.indexOf(a);
    if (i === -1)
      return i;
    const s = Rp(this.containers, (d) => d.modals.includes(a)), c = this.containers[s];
    if (c.modals.splice(c.modals.indexOf(a), 1), this.modals.splice(i, 1), c.modals.length === 0)
      c.restore && c.restore(), a.modalRef && ts(a.modalRef, o), fb(c.container, a.mount, a.modalRef, c.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const d = c.modals[c.modals.length - 1];
      d.modalRef && ts(d.modalRef, !1);
    }
    return i;
  }
  isTopModal(a) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === a;
  }
}
const n4 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function a4(e) {
  const a = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(a) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : a;
}
function r4(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const a = (i) => e.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let o = a(`[name="${e.name}"]:checked`);
  return o || (o = a(`[name="${e.name}"]`)), o !== e;
}
function o4(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || r4(e));
}
function i4(e) {
  const a = [], o = [];
  return Array.from(e.querySelectorAll(n4)).forEach((i, s) => {
    const c = a4(i);
    c === -1 || !o4(i) || (c === 0 ? a.push(i) : o.push({
      documentOrder: s,
      tabIndex: c,
      node: i
    }));
  }), o.sort((i, s) => i.tabIndex === s.tabIndex ? i.documentOrder - s.documentOrder : i.tabIndex - s.tabIndex).map((i) => i.node).concat(a);
}
function l4() {
  return !0;
}
function s4(e) {
  const {
    children: a,
    disableAutoFocus: o = !1,
    disableEnforceFocus: i = !1,
    disableRestoreFocus: s = !1,
    getTabbable: c = i4,
    isEnabled: d = l4,
    open: p
  } = e, m = v.useRef(!1), h = v.useRef(null), g = v.useRef(null), y = v.useRef(null), x = v.useRef(null), C = v.useRef(!1), R = v.useRef(null), E = an(Io(a), R), w = v.useRef(null);
  v.useEffect(() => {
    !p || !R.current || (C.current = !o);
  }, [o, p]), v.useEffect(() => {
    if (!p || !R.current)
      return;
    const O = Qn(R.current);
    return R.current.contains(O.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), C.current && R.current.focus()), () => {
      s || (y.current && y.current.focus && (m.current = !0, y.current.focus()), y.current = null);
    };
  }, [p]), v.useEffect(() => {
    if (!p || !R.current)
      return;
    const O = Qn(R.current), D = (j) => {
      w.current = j, !(i || !d() || j.key !== "Tab") && O.activeElement === R.current && j.shiftKey && (m.current = !0, g.current && g.current.focus());
    }, M = () => {
      var P, S;
      const j = R.current;
      if (j === null)
        return;
      if (!O.hasFocus() || !d() || m.current) {
        m.current = !1;
        return;
      }
      if (j.contains(O.activeElement) || i && O.activeElement !== h.current && O.activeElement !== g.current)
        return;
      if (O.activeElement !== x.current)
        x.current = null;
      else if (x.current !== null)
        return;
      if (!C.current)
        return;
      let U = [];
      if ((O.activeElement === h.current || O.activeElement === g.current) && (U = c(R.current)), U.length > 0) {
        const B = !!((P = w.current) != null && P.shiftKey && ((S = w.current) == null ? void 0 : S.key) === "Tab"), H = U[0], G = U[U.length - 1];
        typeof H != "string" && typeof G != "string" && (B ? G.focus() : H.focus());
      } else
        j.focus();
    };
    O.addEventListener("focusin", M), O.addEventListener("keydown", D, !0);
    const $ = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && M();
    }, 50);
    return () => {
      clearInterval($), O.removeEventListener("focusin", M), O.removeEventListener("keydown", D, !0);
    };
  }, [o, i, s, d, p, c]);
  const z = (O) => {
    y.current === null && (y.current = O.relatedTarget), C.current = !0, x.current = O.target;
    const D = a.props.onFocus;
    D && D(O);
  }, k = (O) => {
    y.current === null && (y.current = O.relatedTarget), C.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: k,
      ref: h,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ v.cloneElement(a, {
      ref: E,
      onFocus: z
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: k,
      ref: g,
      "data-testid": "sentinelEnd"
    })]
  });
}
function c4(e) {
  return typeof e == "function" ? e() : e;
}
function u4(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pb = () => {
}, Kc = new t4();
function d4(e) {
  const {
    container: a,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: i = !1,
    closeAfterTransition: s = !1,
    onTransitionEnter: c,
    onTransitionExited: d,
    children: p,
    onClose: m,
    open: h,
    rootRef: g
  } = e, y = v.useRef({}), x = v.useRef(null), C = v.useRef(null), R = an(C, g), [E, w] = v.useState(!h), z = u4(p);
  let k = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (k = !1);
  const O = () => Qn(x.current), D = () => (y.current.modalRef = C.current, y.current.mount = x.current, y.current), M = () => {
    Kc.mount(D(), {
      disableScrollLock: i
    }), C.current && (C.current.scrollTop = 0);
  }, $ = Ln(() => {
    const F = c4(a) || O().body;
    Kc.add(D(), F), C.current && M();
  }), j = () => Kc.isTopModal(D()), U = Ln((F) => {
    x.current = F, F && (h && j() ? M() : C.current && ts(C.current, k));
  }), P = v.useCallback(() => {
    Kc.remove(D(), k);
  }, [k]);
  v.useEffect(() => () => {
    P();
  }, [P]), v.useEffect(() => {
    h ? $() : (!z || !s) && P();
  }, [h, P, z, s, $]);
  const S = (F) => (N) => {
    var V;
    (V = F.onKeyDown) == null || V.call(F, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !j()) && (o || (N.stopPropagation(), m && m(N, "escapeKeyDown")));
  }, B = (F) => (N) => {
    var V;
    (V = F.onClick) == null || V.call(F, N), N.target === N.currentTarget && m && m(N, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const N = X1(e);
      delete N.onTransitionEnter, delete N.onTransitionExited;
      const V = {
        ...N,
        ...F
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: S(V),
        ref: R
      };
    },
    getBackdropProps: (F = {}) => {
      const N = F;
      return {
        "aria-hidden": !0,
        ...N,
        onClick: B(N),
        open: h
      };
    },
    getTransitionProps: () => {
      const F = () => {
        w(!1), c && c();
      }, N = () => {
        w(!0), d && d(), s && P();
      };
      return {
        onEnter: y0(F, (p == null ? void 0 : p.props.onEnter) ?? pb),
        onExited: y0(N, (p == null ? void 0 : p.props.onExited) ?? pb)
      };
    },
    rootRef: R,
    portalRef: U,
    isTopModal: j,
    exited: E,
    hasTransition: z
  };
}
function f4(e) {
  return Ge("MuiModal", e);
}
_e("MuiModal", ["root", "hidden", "backdrop"]);
const p4 = (e) => {
  const {
    open: a,
    exited: o,
    classes: i
  } = e;
  return qe({
    root: ["root", !a && o && "hidden"],
    backdrop: ["backdrop"]
  }, f4, i);
}, m4 = de("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, !o.open && o.exited && a.hidden];
  }
})(Ve(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: a
    }) => !a.open && a.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), h4 = de(A5, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, a) => a.backdrop
})({
  zIndex: -1
}), Ax = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    name: "MuiModal",
    props: a
  }), {
    BackdropComponent: s = h4,
    BackdropProps: c,
    classes: d,
    className: p,
    closeAfterTransition: m = !1,
    children: h,
    container: g,
    component: y,
    components: x = {},
    componentsProps: C = {},
    disableAutoFocus: R = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: z = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: O = !1,
    hideBackdrop: D = !1,
    keepMounted: M = !1,
    onBackdropClick: $,
    onClose: j,
    onTransitionEnter: U,
    onTransitionExited: P,
    open: S,
    slotProps: B = {},
    slots: H = {},
    // eslint-disable-next-line react/prop-types
    theme: G,
    ...J
  } = i, F = {
    ...i,
    closeAfterTransition: m,
    disableAutoFocus: R,
    disableEnforceFocus: E,
    disableEscapeKeyDown: w,
    disablePortal: z,
    disableRestoreFocus: k,
    disableScrollLock: O,
    hideBackdrop: D,
    keepMounted: M
  }, {
    getRootProps: N,
    getBackdropProps: V,
    getTransitionProps: K,
    portalRef: Y,
    isTopModal: pe,
    exited: L,
    hasTransition: W
  } = d4({
    ...F,
    rootRef: o
  }), re = {
    ...F,
    exited: L
  }, te = p4(re), fe = {};
  if (h.props.tabIndex === void 0 && (fe.tabIndex = "-1"), W) {
    const {
      onEnter: De,
      onExited: Se
    } = K();
    fe.onEnter = De, fe.onExited = Se;
  }
  const se = {
    slots: {
      root: x.Root,
      backdrop: x.Backdrop,
      ...H
    },
    slotProps: {
      ...C,
      ...B
    }
  }, [ge, ye] = Ze("root", {
    ref: o,
    elementType: m4,
    externalForwardedProps: {
      ...se,
      ...J,
      component: y
    },
    getSlotProps: N,
    ownerState: re,
    className: he(p, te == null ? void 0 : te.root, !re.open && re.exited && (te == null ? void 0 : te.hidden))
  }), [be, Te] = Ze("backdrop", {
    ref: c == null ? void 0 : c.ref,
    elementType: s,
    externalForwardedProps: se,
    shouldForwardComponentProp: !0,
    additionalProps: c,
    getSlotProps: (De) => V({
      ...De,
      onClick: (Se) => {
        $ && $(Se), De != null && De.onClick && De.onClick(Se);
      }
    }),
    className: he(c == null ? void 0 : c.className, te == null ? void 0 : te.backdrop),
    ownerState: re
  });
  return !M && !S && (!W || L) ? null : /* @__PURE__ */ T.jsx(Rx, {
    ref: Y,
    container: g,
    disablePortal: z,
    children: /* @__PURE__ */ T.jsxs(ge, {
      ...ye,
      children: [!D && s ? /* @__PURE__ */ T.jsx(be, {
        ...Te
      }) : null, /* @__PURE__ */ T.jsx(s4, {
        disableEnforceFocus: E,
        disableAutoFocus: R,
        disableRestoreFocus: k,
        isEnabled: pe,
        open: S,
        children: /* @__PURE__ */ v.cloneElement(h, fe)
      })]
    })
  });
});
function g4(e) {
  return Ge("MuiDivider", e);
}
const mb = _e("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), y4 = (e) => {
  const {
    absolute: a,
    children: o,
    classes: i,
    flexItem: s,
    light: c,
    orientation: d,
    textAlign: p,
    variant: m
  } = e;
  return qe({
    root: ["root", a && "absolute", m, c && "light", d === "vertical" && "vertical", s && "flexItem", o && "withChildren", o && d === "vertical" && "withChildrenVertical", p === "right" && d !== "vertical" && "textAlignRight", p === "left" && d !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", d === "vertical" && "wrapperVertical"]
  }, g4, i);
}, v4 = de("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.absolute && a.absolute, a[o.variant], o.light && a.light, o.orientation === "vertical" && a.vertical, o.flexItem && a.flexItem, o.children && a.withChildren, o.children && o.orientation === "vertical" && a.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && a.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && a.textAlignLeft];
  }
})(Ve(({
  theme: e
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : xt(e.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: e.spacing(2),
      marginRight: e.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: a
    }) => !!a.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.children && a.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(e.vars || e).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.orientation === "vertical" && a.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.textAlign === "right" && a.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.textAlign === "left" && a.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), b4 = de("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.wrapper, o.orientation === "vertical" && a.wrapperVertical];
  }
})(Ve(({
  theme: e
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${e.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    }
  }]
}))), Eu = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: c,
    className: d,
    orientation: p = "horizontal",
    component: m = c || p === "vertical" ? "div" : "hr",
    flexItem: h = !1,
    light: g = !1,
    role: y = m !== "hr" ? "separator" : void 0,
    textAlign: x = "center",
    variant: C = "fullWidth",
    ...R
  } = i, E = {
    ...i,
    absolute: s,
    component: m,
    flexItem: h,
    light: g,
    orientation: p,
    role: y,
    textAlign: x,
    variant: C
  }, w = y4(E);
  return /* @__PURE__ */ T.jsx(v4, {
    as: m,
    className: he(w.root, d),
    role: y,
    ref: o,
    ownerState: E,
    "aria-orientation": y === "separator" && (m !== "hr" || p === "vertical") ? p : void 0,
    ...R,
    children: c ? /* @__PURE__ */ T.jsx(b4, {
      className: w.wrapper,
      ownerState: E,
      children: c
    }) : null
  });
});
Eu && (Eu.muiSkipListHighlight = !0);
function x4(e, a, o) {
  const i = a.getBoundingClientRect(), s = o && o.getBoundingClientRect(), c = ua(a);
  let d;
  if (a.fakeTransform)
    d = a.fakeTransform;
  else {
    const h = c.getComputedStyle(a);
    d = h.getPropertyValue("-webkit-transform") || h.getPropertyValue("transform");
  }
  let p = 0, m = 0;
  if (d && d !== "none" && typeof d == "string") {
    const h = d.split("(")[1].split(")")[0].split(",");
    p = parseInt(h[4], 10), m = parseInt(h[5], 10);
  }
  return e === "left" ? s ? `translateX(${s.right + p - i.left}px)` : `translateX(${c.innerWidth + p - i.left}px)` : e === "right" ? s ? `translateX(-${i.right - s.left - p}px)` : `translateX(-${i.left + i.width - p}px)` : e === "up" ? s ? `translateY(${s.bottom + m - i.top}px)` : `translateY(${c.innerHeight + m - i.top}px)` : s ? `translateY(-${i.top - s.top + i.height - m}px)` : `translateY(-${i.top + i.height - m}px)`;
}
function S4(e) {
  return typeof e == "function" ? e() : e;
}
function Xc(e, a, o) {
  const i = S4(o), s = x4(e, a, i);
  s && (a.style.webkitTransform = s, a.style.transform = s);
}
const C4 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = nr(), s = {
    enter: i.transitions.easing.easeOut,
    exit: i.transitions.easing.sharp
  }, c = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: p = !0,
    children: m,
    container: h,
    direction: g = "down",
    easing: y = s,
    in: x,
    onEnter: C,
    onEntered: R,
    onEntering: E,
    onExit: w,
    onExited: z,
    onExiting: k,
    style: O,
    timeout: D = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: M = ka,
    ...$
  } = a, j = v.useRef(null), U = an(Io(m), j, o), P = (K) => (Y) => {
    K && (Y === void 0 ? K(j.current) : K(j.current, Y));
  }, S = P((K, Y) => {
    Xc(g, K, h), Lm(K), C && C(K, Y);
  }), B = P((K, Y) => {
    const pe = lo({
      timeout: D,
      style: O,
      easing: y
    }, {
      mode: "enter"
    });
    K.style.webkitTransition = i.transitions.create("-webkit-transform", {
      ...pe
    }), K.style.transition = i.transitions.create("transform", {
      ...pe
    }), K.style.webkitTransform = "none", K.style.transform = "none", E && E(K, Y);
  }), H = P(R), G = P(k), J = P((K) => {
    const Y = lo({
      timeout: D,
      style: O,
      easing: y
    }, {
      mode: "exit"
    });
    K.style.webkitTransition = i.transitions.create("-webkit-transform", Y), K.style.transition = i.transitions.create("transform", Y), Xc(g, K, h), w && w(K);
  }), F = P((K) => {
    K.style.webkitTransition = "", K.style.transition = "", z && z(K);
  }), N = (K) => {
    d && d(j.current, K);
  }, V = v.useCallback(() => {
    j.current && Xc(g, j.current, h);
  }, [g, h]);
  return v.useEffect(() => {
    if (x || g === "down" || g === "right")
      return;
    const K = Rs(() => {
      j.current && Xc(g, j.current, h);
    }), Y = ua(j.current);
    return Y.addEventListener("resize", K), () => {
      K.clear(), Y.removeEventListener("resize", K);
    };
  }, [g, x, h]), v.useEffect(() => {
    x || V();
  }, [x, V]), /* @__PURE__ */ T.jsx(M, {
    nodeRef: j,
    onEnter: S,
    onEntered: H,
    onEntering: B,
    onExit: J,
    onExited: F,
    onExiting: G,
    addEndListener: N,
    appear: p,
    in: x,
    timeout: D,
    ...$,
    children: (K, {
      ownerState: Y,
      ...pe
    }) => /* @__PURE__ */ v.cloneElement(m, {
      ref: U,
      style: {
        visibility: K === "exited" && !x ? "hidden" : void 0,
        ...O,
        ...m.props.style
      },
      ...pe
    })
  });
});
function E4(e) {
  return Ge("MuiDrawer", e);
}
_e("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Ox = (e, a) => {
  const {
    ownerState: o
  } = e;
  return [a.root, (o.variant === "permanent" || o.variant === "persistent") && a.docked, a.modal];
}, T4 = (e) => {
  const {
    classes: a,
    anchor: o,
    variant: i
  } = e, s = {
    root: ["root", `anchor${ue(o)}`],
    docked: [(i === "permanent" || i === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${ue(o)}`, i !== "temporary" && `paperAnchorDocked${ue(o)}`]
  };
  return qe(s, E4, a);
}, R4 = de(Ax, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Ox
})(Ve(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), w4 = de("div", {
  shouldForwardProp: Zn,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Ox
})({
  flex: "0 0 auto"
}), M4 = de(co, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.paper, a[`paperAnchor${ue(o.anchor)}`], o.variant !== "temporary" && a[`paperAnchorDocked${ue(o.anchor)}`]];
  }
})(Ve(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "left" && a.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "top" && a.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "right" && a.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "bottom" && a.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), zx = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function A4(e) {
  return ["left", "right"].includes(e);
}
function O4({
  direction: e
}, a) {
  return e === "rtl" && A4(a) ? zx[a] : a;
}
const hb = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiDrawer"
  }), s = nr(), c = Yi(), d = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: p = "left",
    BackdropProps: m,
    children: h,
    className: g,
    elevation: y = 16,
    hideBackdrop: x = !1,
    ModalProps: {
      BackdropProps: C,
      ...R
    } = {},
    onClose: E,
    open: w = !1,
    PaperProps: z = {},
    SlideProps: k,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: D = d,
    variant: M = "temporary",
    slots: $ = {},
    slotProps: j = {},
    ...U
  } = i, P = v.useRef(!1);
  v.useEffect(() => {
    P.current = !0;
  }, []);
  const S = O4({
    direction: c ? "rtl" : "ltr"
  }, p), H = {
    ...i,
    anchor: p,
    elevation: y,
    open: w,
    variant: M,
    ...U
  }, G = T4(H), J = {
    slots: {
      transition: O,
      ...$
    },
    slotProps: {
      paper: z,
      transition: k,
      ...j,
      backdrop: fx(j.backdrop || {
        ...m,
        ...C
      }, {
        transitionDuration: D
      })
    }
  }, [F, N] = Ze("root", {
    ref: o,
    elementType: R4,
    className: he(G.root, G.modal, g),
    shouldForwardComponentProp: !0,
    ownerState: H,
    externalForwardedProps: {
      ...J,
      ...U,
      ...R
    },
    additionalProps: {
      open: w,
      onClose: E,
      hideBackdrop: x,
      slots: {
        backdrop: J.slots.backdrop
      },
      slotProps: {
        backdrop: J.slotProps.backdrop
      }
    }
  }), [V, K] = Ze("paper", {
    elementType: M4,
    shouldForwardComponentProp: !0,
    className: he(G.paper, z.className),
    ownerState: H,
    externalForwardedProps: J,
    additionalProps: {
      elevation: M === "temporary" ? y : 0,
      square: !0
    }
  }), [Y, pe] = Ze("docked", {
    elementType: w4,
    ref: o,
    className: he(G.root, G.docked, g),
    ownerState: H,
    externalForwardedProps: J,
    additionalProps: U
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [L, W] = Ze("transition", {
    elementType: C4,
    ownerState: H,
    externalForwardedProps: J,
    additionalProps: {
      in: w,
      direction: zx[S],
      timeout: D,
      appear: P.current
    }
  }), re = /* @__PURE__ */ T.jsx(V, {
    ...K,
    children: h
  });
  if (M === "permanent")
    return /* @__PURE__ */ T.jsx(Y, {
      ...pe,
      children: re
    });
  const te = /* @__PURE__ */ T.jsx(L, {
    ...W,
    children: re
  });
  return M === "persistent" ? /* @__PURE__ */ T.jsx(Y, {
    ...pe,
    children: te
  }) : /* @__PURE__ */ T.jsx(F, {
    ...N,
    children: te
  });
});
function z4(e) {
  return Ge("MuiFab", e);
}
const gb = _e("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), D4 = (e) => {
  const {
    color: a,
    variant: o,
    classes: i,
    size: s
  } = e, c = {
    root: ["root", o, `size${ue(s)}`, a === "inherit" ? "colorInherit" : a]
  }, d = qe(c, z4, i);
  return {
    ...i,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, $4 = de(so, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], a[`size${ue(o.size)}`], o.color === "inherit" && a.colorInherit, a[ue(o.size)], a[o.color]];
  }
})(Ve(({
  theme: e
}) => {
  var a, o;
  return {
    ...e.typography.button,
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.text.primary : (o = (a = e.palette).getContrastText) == null ? void 0 : o.call(a, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${gb.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Ve(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(Tn(["dark", "contrastText"])).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (e.vars || e).palette[a].contrastText,
      backgroundColor: (e.vars || e).palette[a].main,
      "&:hover": {
        backgroundColor: (e.vars || e).palette[a].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette[a].main
        }
      }
    }
  }))]
})), Ve(({
  theme: e
}) => ({
  [`&.${gb.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), k4 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiFab"
  }), {
    children: s,
    className: c,
    color: d = "default",
    component: p = "button",
    disabled: m = !1,
    disableFocusRipple: h = !1,
    focusVisibleClassName: g,
    size: y = "large",
    variant: x = "circular",
    ...C
  } = i, R = {
    ...i,
    color: d,
    component: p,
    disabled: m,
    disableFocusRipple: h,
    size: y,
    variant: x
  }, E = D4(R);
  return /* @__PURE__ */ T.jsx($4, {
    className: he(E.root, c),
    component: p,
    disabled: m,
    focusRipple: !h,
    focusVisibleClassName: he(E.focusVisible, g),
    ownerState: R,
    ref: o,
    ...C,
    classes: E,
    children: s
  });
}), N4 = (e) => {
  const {
    classes: a,
    disableUnderline: o,
    startAdornment: i,
    endAdornment: s,
    size: c,
    hiddenLabel: d,
    multiline: p
  } = e, m = {
    root: ["root", !o && "underline", i && "adornedStart", s && "adornedEnd", c === "small" && `size${ue(c)}`, d && "hiddenLabel", p && "multiline"],
    input: ["input"]
  }, h = qe(m, s5, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...h
  };
}, L4 = de(Fu, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [...qu(e, a), !o.disableUnderline && a.underline];
  }
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light", o = a ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = a ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = a ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", c = a ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${la.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${la.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : c
    },
    variants: [{
      props: ({
        ownerState: d
      }) => !d.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${la.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${la.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${la.disabled}, .${la.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${la.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Tn()).map(([d]) => {
      var p;
      return {
        props: {
          disableUnderline: !1,
          color: d
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(p = (e.vars || e).palette[d]) == null ? void 0 : p.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: d
      }) => d.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: d,
        size: p
      }) => d.multiline && p === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel && d.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), j4 = de(Wu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Yu
})(Ve(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: a
    }) => a.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: a
    }) => a.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.hiddenLabel && a.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), Ym = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiFilledInput"
  }), {
    disableUnderline: s = !1,
    components: c = {},
    componentsProps: d,
    fullWidth: p = !1,
    hiddenLabel: m,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: g = !1,
    slotProps: y,
    slots: x = {},
    type: C = "text",
    ...R
  } = i, E = {
    ...i,
    disableUnderline: s,
    fullWidth: p,
    inputComponent: h,
    multiline: g,
    type: C
  }, w = N4(i), z = {
    root: {
      ownerState: E
    },
    input: {
      ownerState: E
    }
  }, k = y ?? d ? jn(z, y ?? d) : z, O = x.root ?? c.Root ?? L4, D = x.input ?? c.Input ?? j4;
  return /* @__PURE__ */ T.jsx(qm, {
    slots: {
      root: O,
      input: D
    },
    slotProps: k,
    fullWidth: p,
    inputComponent: h,
    multiline: g,
    ref: o,
    type: C,
    ...R,
    classes: w
  });
});
Ym.muiName = "Input";
function B4(e) {
  return Ge("MuiFormControl", e);
}
_e("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _4 = (e) => {
  const {
    classes: a,
    margin: o,
    fullWidth: i
  } = e, s = {
    root: ["root", o !== "none" && `margin${ue(o)}`, i && "fullWidth"]
  };
  return qe(s, B4, a);
}, H4 = de("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[`margin${ue(o.margin)}`], o.fullWidth && a.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Dx = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiFormControl"
  }), {
    children: s,
    className: c,
    color: d = "primary",
    component: p = "div",
    disabled: m = !1,
    error: h = !1,
    focused: g,
    fullWidth: y = !1,
    hiddenLabel: x = !1,
    margin: C = "none",
    required: R = !1,
    size: E = "medium",
    variant: w = "outlined",
    ...z
  } = i, k = {
    ...i,
    color: d,
    component: p,
    disabled: m,
    error: h,
    fullWidth: y,
    hiddenLabel: x,
    margin: C,
    required: R,
    size: E,
    variant: w
  }, O = _4(k), [D, M] = v.useState(() => {
    let F = !1;
    return s && v.Children.forEach(s, (N) => {
      if (!uu(N, ["Input", "Select"]))
        return;
      const V = uu(N, ["Select"]) ? N.props.input : N;
      V && a5(V.props) && (F = !0);
    }), F;
  }), [$, j] = v.useState(() => {
    let F = !1;
    return s && v.Children.forEach(s, (N) => {
      uu(N, ["Input", "Select"]) && (Cu(N.props, !0) || Cu(N.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [U, P] = v.useState(!1);
  m && U && P(!1);
  const S = g !== void 0 && !m ? g : U;
  let B;
  v.useRef(!1);
  const H = v.useCallback(() => {
    j(!0);
  }, []), G = v.useCallback(() => {
    j(!1);
  }, []), J = v.useMemo(() => ({
    adornedStart: D,
    setAdornedStart: M,
    color: d,
    disabled: m,
    error: h,
    filled: $,
    focused: S,
    fullWidth: y,
    hiddenLabel: x,
    size: E,
    onBlur: () => {
      P(!1);
    },
    onFocus: () => {
      P(!0);
    },
    onEmpty: G,
    onFilled: H,
    registerEffect: B,
    required: R,
    variant: w
  }), [D, d, m, h, $, S, y, x, B, G, H, R, E, w]);
  return /* @__PURE__ */ T.jsx(Gm.Provider, {
    value: J,
    children: /* @__PURE__ */ T.jsx(H4, {
      as: p,
      ownerState: k,
      className: he(O.root, c),
      ref: o,
      ...z,
      children: s
    })
  });
});
function U4(e) {
  return Ge("MuiFormHelperText", e);
}
const yb = _e("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var vb;
const I4 = (e) => {
  const {
    classes: a,
    contained: o,
    size: i,
    disabled: s,
    error: c,
    filled: d,
    focused: p,
    required: m
  } = e, h = {
    root: ["root", s && "disabled", c && "error", i && `size${ue(i)}`, o && "contained", p && "focused", d && "filled", m && "required"]
  };
  return qe(h, U4, a);
}, P4 = de("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.size && a[`size${ue(o.size)}`], o.contained && a.contained, o.filled && a.filled];
  }
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${yb.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${yb.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: a
    }) => a.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), V4 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: c,
    component: d = "p",
    disabled: p,
    error: m,
    filled: h,
    focused: g,
    margin: y,
    required: x,
    variant: C,
    ...R
  } = i, E = Wi(), w = Fi({
    props: i,
    muiFormControl: E,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), z = {
    ...i,
    component: d,
    contained: w.variant === "filled" || w.variant === "outlined",
    variant: w.variant,
    size: w.size,
    disabled: w.disabled,
    error: w.error,
    filled: w.filled,
    focused: w.focused,
    required: w.required
  };
  delete z.ownerState;
  const k = I4(z);
  return /* @__PURE__ */ T.jsx(P4, {
    as: d,
    className: he(k.root, c),
    ref: o,
    ...R,
    ownerState: z,
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      vb || (vb = /* @__PURE__ */ T.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : s
  });
});
function G4(e) {
  return Ge("MuiFormLabel", e);
}
const ns = _e("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), q4 = (e) => {
  const {
    classes: a,
    color: o,
    focused: i,
    disabled: s,
    error: c,
    filled: d,
    required: p
  } = e, m = {
    root: ["root", `color${ue(o)}`, s && "disabled", c && "error", d && "filled", i && "focused", p && "required"],
    asterisk: ["asterisk", c && "error"]
  };
  return qe(m, G4, a);
}, Y4 = de("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.color === "secondary" && a.colorSecondary, o.filled && a.filled];
  }
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Tn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      [`&.${ns.focused}`]: {
        color: (e.vars || e).palette[a].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ns.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ns.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), F4 = de("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, a) => a.asterisk
})(Ve(({
  theme: e
}) => ({
  [`&.${ns.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), W4 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: c,
    color: d,
    component: p = "label",
    disabled: m,
    error: h,
    filled: g,
    focused: y,
    required: x,
    ...C
  } = i, R = Wi(), E = Fi({
    props: i,
    muiFormControl: R,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), w = {
    ...i,
    color: E.color || "primary",
    component: p,
    disabled: E.disabled,
    error: E.error,
    filled: E.filled,
    focused: E.focused,
    required: E.required
  }, z = q4(w);
  return /* @__PURE__ */ T.jsxs(Y4, {
    as: p,
    ownerState: w,
    className: he(z.root, c),
    ref: o,
    ...C,
    children: [s, E.required && /* @__PURE__ */ T.jsxs(F4, {
      ownerState: w,
      "aria-hidden": !0,
      className: z.asterisk,
      children: [" ", "*"]
    })]
  });
}), bb = /* @__PURE__ */ v.createContext();
function K4(e) {
  return Ge("MuiGrid", e);
}
const X4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Q4 = ["column-reverse", "column", "row-reverse", "row"], Z4 = ["nowrap", "wrap-reverse", "wrap"], Vl = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], ms = _e("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...X4.map((e) => `spacing-xs-${e}`),
  // direction values
  ...Q4.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Z4.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Vl.map((e) => `grid-xs-${e}`),
  ...Vl.map((e) => `grid-sm-${e}`),
  ...Vl.map((e) => `grid-md-${e}`),
  ...Vl.map((e) => `grid-lg-${e}`),
  ...Vl.map((e) => `grid-xl-${e}`)
]);
function J4({
  theme: e,
  ownerState: a
}) {
  let o;
  return e.breakpoints.keys.reduce((i, s) => {
    let c = {};
    if (a[s] && (o = a[s]), !o)
      return i;
    if (o === !0)
      c = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (o === "auto")
      c = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const d = ku({
        values: a.columns,
        breakpoints: e.breakpoints.values
      }), p = typeof d == "object" ? d[s] : d;
      if (p == null)
        return i;
      const m = `${Math.round(o / p * 1e8) / 1e6}%`;
      let h = {};
      if (a.container && a.item && a.columnSpacing !== 0) {
        const g = e.spacing(a.columnSpacing);
        if (g !== "0px") {
          const y = `calc(${m} + ${g})`;
          h = {
            flexBasis: y,
            maxWidth: y
          };
        }
      }
      c = {
        flexBasis: m,
        flexGrow: 0,
        maxWidth: m,
        ...h
      };
    }
    return e.breakpoints.values[s] === 0 ? Object.assign(i, c) : i[e.breakpoints.up(s)] = c, i;
  }, {});
}
function ez({
  theme: e,
  ownerState: a
}) {
  const o = ku({
    values: a.direction,
    breakpoints: e.breakpoints.values
  });
  return Aa({
    theme: e
  }, o, (i) => {
    const s = {
      flexDirection: i
    };
    return i.startsWith("column") && (s[`& > .${ms.item}`] = {
      maxWidth: "none"
    }), s;
  });
}
function $x({
  breakpoints: e,
  values: a
}) {
  let o = "";
  Object.keys(a).forEach((s) => {
    o === "" && a[s] !== 0 && (o = s);
  });
  const i = Object.keys(e).sort((s, c) => e[s] - e[c]);
  return i.slice(0, i.indexOf(o));
}
function tz({
  theme: e,
  ownerState: a
}) {
  const {
    container: o,
    rowSpacing: i
  } = a;
  let s = {};
  if (o && i !== 0) {
    const c = ku({
      values: i,
      breakpoints: e.breakpoints.values
    });
    let d;
    typeof c == "object" && (d = $x({
      breakpoints: e.breakpoints.values,
      values: c
    })), s = Aa({
      theme: e
    }, c, (p, m) => {
      const h = e.spacing(p);
      return h !== "0px" ? {
        marginTop: `calc(-1 * ${h})`,
        [`& > .${ms.item}`]: {
          paddingTop: h
        }
      } : d != null && d.includes(m) ? {} : {
        marginTop: 0,
        [`& > .${ms.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return s;
}
function nz({
  theme: e,
  ownerState: a
}) {
  const {
    container: o,
    columnSpacing: i
  } = a;
  let s = {};
  if (o && i !== 0) {
    const c = ku({
      values: i,
      breakpoints: e.breakpoints.values
    });
    let d;
    typeof c == "object" && (d = $x({
      breakpoints: e.breakpoints.values,
      values: c
    })), s = Aa({
      theme: e
    }, c, (p, m) => {
      const h = e.spacing(p);
      if (h !== "0px") {
        const g = `calc(-1 * ${h})`;
        return {
          width: `calc(100% + ${h})`,
          marginLeft: g,
          [`& > .${ms.item}`]: {
            paddingLeft: h
          }
        };
      }
      return d != null && d.includes(m) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${ms.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return s;
}
function az(e, a, o = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [o[`spacing-xs-${String(e)}`]];
  const i = [];
  return a.forEach((s) => {
    const c = e[s];
    Number(c) > 0 && i.push(o[`spacing-${s}-${String(c)}`]);
  }), i;
}
const rz = de("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e, {
      container: i,
      direction: s,
      item: c,
      spacing: d,
      wrap: p,
      zeroMinWidth: m,
      breakpoints: h
    } = o;
    let g = [];
    i && (g = az(d, h, a));
    const y = [];
    return h.forEach((x) => {
      const C = o[x];
      C && y.push(a[`grid-${x}-${String(C)}`]);
    }), [a.root, i && a.container, c && a.item, m && a.zeroMinWidth, ...g, s !== "row" && a[`direction-xs-${String(s)}`], p !== "wrap" && a[`wrap-xs-${String(p)}`], ...y];
  }
})(
  // FIXME(romgrk): Can't use memoTheme here
  ({
    ownerState: e
  }) => ({
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    ...e.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    },
    ...e.zeroMinWidth && {
      minWidth: 0
    },
    ...e.wrap !== "wrap" && {
      flexWrap: e.wrap
    }
  }),
  ez,
  tz,
  nz,
  J4
);
function oz(e, a) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const o = [];
  return a.forEach((i) => {
    const s = e[i];
    if (Number(s) > 0) {
      const c = `spacing-${i}-${String(s)}`;
      o.push(c);
    }
  }), o;
}
const iz = (e) => {
  const {
    classes: a,
    container: o,
    direction: i,
    item: s,
    spacing: c,
    wrap: d,
    zeroMinWidth: p,
    breakpoints: m
  } = e;
  let h = [];
  o && (h = oz(c, m));
  const g = [];
  m.forEach((x) => {
    const C = e[x];
    C && g.push(`grid-${x}-${String(C)}`);
  });
  const y = {
    root: ["root", o && "container", s && "item", p && "zeroMinWidth", ...h, i !== "row" && `direction-xs-${String(i)}`, d !== "wrap" && `wrap-xs-${String(d)}`, ...g]
  };
  return qe(y, K4, a);
}, Nn = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiGrid"
  }), {
    breakpoints: s
  } = nr(), c = Rm(i), {
    className: d,
    columns: p,
    columnSpacing: m,
    component: h = "div",
    container: g = !1,
    direction: y = "row",
    item: x = !1,
    rowSpacing: C,
    spacing: R = 0,
    wrap: E = "wrap",
    zeroMinWidth: w = !1,
    ...z
  } = c, k = C || R, O = m || R, D = v.useContext(bb), M = g ? p || 12 : D, $ = {}, j = {
    ...z
  };
  s.keys.forEach((S) => {
    z[S] != null && ($[S] = z[S], delete j[S]);
  });
  const U = {
    ...c,
    columns: M,
    container: g,
    direction: y,
    item: x,
    rowSpacing: k,
    columnSpacing: O,
    wrap: E,
    zeroMinWidth: w,
    spacing: R,
    ...$,
    breakpoints: s.keys
  }, P = iz(U);
  return /* @__PURE__ */ T.jsx(bb.Provider, {
    value: M,
    children: /* @__PURE__ */ T.jsx(rz, {
      ownerState: U,
      className: he(P.root, d),
      as: h,
      ref: o,
      ...j
    })
  });
});
function Qp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const lz = {
  entering: {
    opacity: 1,
    transform: Qp(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, wp = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Tu = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: d,
    in: p,
    onEnter: m,
    onEntered: h,
    onEntering: g,
    onExit: y,
    onExited: x,
    onExiting: C,
    style: R,
    timeout: E = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = ka,
    ...z
  } = a, k = No(), O = v.useRef(), D = nr(), M = v.useRef(null), $ = an(M, Io(c), o), j = (F) => (N) => {
    if (F) {
      const V = M.current;
      N === void 0 ? F(V) : F(V, N);
    }
  }, U = j(g), P = j((F, N) => {
    Lm(F);
    const {
      duration: V,
      delay: K,
      easing: Y
    } = lo({
      style: R,
      timeout: E,
      easing: d
    }, {
      mode: "enter"
    });
    let pe;
    E === "auto" ? (pe = D.transitions.getAutoHeightDuration(F.clientHeight), O.current = pe) : pe = V, F.style.transition = [D.transitions.create("opacity", {
      duration: pe,
      delay: K
    }), D.transitions.create("transform", {
      duration: wp ? pe : pe * 0.666,
      delay: K,
      easing: Y
    })].join(","), m && m(F, N);
  }), S = j(h), B = j(C), H = j((F) => {
    const {
      duration: N,
      delay: V,
      easing: K
    } = lo({
      style: R,
      timeout: E,
      easing: d
    }, {
      mode: "exit"
    });
    let Y;
    E === "auto" ? (Y = D.transitions.getAutoHeightDuration(F.clientHeight), O.current = Y) : Y = N, F.style.transition = [D.transitions.create("opacity", {
      duration: Y,
      delay: V
    }), D.transitions.create("transform", {
      duration: wp ? Y : Y * 0.666,
      delay: wp ? V : V || Y * 0.333,
      easing: K
    })].join(","), F.style.opacity = 0, F.style.transform = Qp(0.75), y && y(F);
  }), G = j(x), J = (F) => {
    E === "auto" && k.start(O.current || 0, F), i && i(M.current, F);
  };
  return /* @__PURE__ */ T.jsx(w, {
    appear: s,
    in: p,
    nodeRef: M,
    onEnter: P,
    onEntered: S,
    onEntering: U,
    onExit: H,
    onExited: G,
    onExiting: B,
    addEndListener: J,
    timeout: E === "auto" ? null : E,
    ...z,
    children: (F, {
      ownerState: N,
      ...V
    }) => /* @__PURE__ */ v.cloneElement(c, {
      style: {
        opacity: 0,
        transform: Qp(0.75),
        visibility: F === "exited" && !p ? "hidden" : void 0,
        ...lz[F],
        ...R,
        ...c.props.style
      },
      ref: $,
      ...V
    })
  });
});
Tu && (Tu.muiSupportAuto = !0);
const sz = q1({
  themeId: Ua
}), cz = (e) => {
  const {
    classes: a,
    disableUnderline: o
  } = e, s = qe({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, i5, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...s
  };
}, uz = de(Fu, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [...qu(e, a), !o.disableUnderline && a.underline];
  }
})(Ve(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: i
      }) => i.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: i
      }) => !i.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${no.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${no.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${no.disabled}, .${no.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${no.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Tn()).map(([i]) => ({
      props: {
        color: i,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[i].main}`
        }
      }
    }))]
  };
})), dz = de(Wu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Yu
})({}), Fm = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiInput"
  }), {
    disableUnderline: s = !1,
    components: c = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: m = "input",
    multiline: h = !1,
    slotProps: g,
    slots: y = {},
    type: x = "text",
    ...C
  } = i, R = cz(i), w = {
    root: {
      ownerState: {
        disableUnderline: s
      }
    }
  }, z = g ?? d ? jn(g ?? d, w) : w, k = y.root ?? c.Root ?? uz, O = y.input ?? c.Input ?? dz;
  return /* @__PURE__ */ T.jsx(qm, {
    slots: {
      root: k,
      input: O
    },
    slotProps: z,
    fullWidth: p,
    inputComponent: m,
    multiline: h,
    ref: o,
    type: x,
    ...C,
    classes: R
  });
});
Fm.muiName = "Input";
function fz(e) {
  return Ge("MuiInputLabel", e);
}
_e("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const pz = (e) => {
  const {
    classes: a,
    formControl: o,
    size: i,
    shrink: s,
    disableAnimation: c,
    variant: d,
    required: p
  } = e, m = {
    root: ["root", o && "formControl", !c && "animated", s && "shrink", i && i !== "normal" && `size${ue(i)}`, d],
    asterisk: [p && "asterisk"]
  }, h = qe(m, fz, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...h
  };
}, mz = de(W4, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${ns.asterisk}`]: a.asterisk
    }, a.root, o.formControl && a.formControl, o.size === "small" && a.sizeSmall, o.shrink && a.shrink, !o.disableAnimation && a.animated, o.focused && a.focused, a[o.variant]];
  }
})(Ve(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: a
    }) => a.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o
    }) => a === "filled" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o,
      size: i
    }) => a === "filled" && o.shrink && i === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o
    }) => a === "outlined" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), kx = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    name: "MuiInputLabel",
    props: a
  }), {
    disableAnimation: s = !1,
    margin: c,
    shrink: d,
    variant: p,
    className: m,
    ...h
  } = i, g = Wi();
  let y = d;
  typeof y > "u" && g && (y = g.filled || g.focused || g.adornedStart);
  const x = Fi({
    props: i,
    muiFormControl: g,
    states: ["size", "variant", "required", "focused"]
  }), C = {
    ...i,
    disableAnimation: s,
    formControl: g,
    shrink: y,
    size: x.size,
    variant: x.variant,
    required: x.required,
    focused: x.focused
  }, R = pz(C);
  return /* @__PURE__ */ T.jsx(mz, {
    "data-shrink": y,
    ref: o,
    className: he(R.root, m),
    ...h,
    ownerState: C,
    classes: R
  });
}), ro = /* @__PURE__ */ v.createContext({});
function hz(e) {
  return Ge("MuiList", e);
}
_e("MuiList", ["root", "padding", "dense", "subheader"]);
const gz = (e) => {
  const {
    classes: a,
    disablePadding: o,
    dense: i,
    subheader: s
  } = e;
  return qe({
    root: ["root", !o && "padding", i && "dense", s && "subheader"]
  }, hz, a);
}, yz = de("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, !o.disablePadding && a.padding, o.dense && a.dense, o.subheader && a.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Nx = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiList"
  }), {
    children: s,
    className: c,
    component: d = "ul",
    dense: p = !1,
    disablePadding: m = !1,
    subheader: h,
    ...g
  } = i, y = v.useMemo(() => ({
    dense: p
  }), [p]), x = {
    ...i,
    component: d,
    dense: p,
    disablePadding: m
  }, C = gz(x);
  return /* @__PURE__ */ T.jsx(ro.Provider, {
    value: y,
    children: /* @__PURE__ */ T.jsxs(yz, {
      as: d,
      className: he(C.root, c),
      ref: o,
      ownerState: x,
      ...g,
      children: [h, s]
    })
  });
});
function vz(e) {
  return Ge("MuiListItem", e);
}
_e("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
const bz = _e("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
function xz(e) {
  return Ge("MuiListItemSecondaryAction", e);
}
_e("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Sz = (e) => {
  const {
    disableGutters: a,
    classes: o
  } = e;
  return qe({
    root: ["root", a && "disableGutters"]
  }, xz, o);
}, Cz = de("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.disableGutters && a.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState: e
    }) => e.disableGutters,
    style: {
      right: 0
    }
  }]
}), Lx = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s,
    ...c
  } = i, d = v.useContext(ro), p = {
    ...i,
    disableGutters: d.disableGutters
  }, m = Sz(p);
  return /* @__PURE__ */ T.jsx(Cz, {
    className: he(m.root, s),
    ownerState: p,
    ref: o,
    ...c
  });
});
Lx.muiName = "ListItemSecondaryAction";
const Ez = (e, a) => {
  const {
    ownerState: o
  } = e;
  return [a.root, o.dense && a.dense, o.alignItems === "flex-start" && a.alignItemsFlexStart, o.divider && a.divider, !o.disableGutters && a.gutters, !o.disablePadding && a.padding, o.hasSecondaryAction && a.secondaryAction];
}, Tz = (e) => {
  const {
    alignItems: a,
    classes: o,
    dense: i,
    disableGutters: s,
    disablePadding: c,
    divider: d,
    hasSecondaryAction: p
  } = e;
  return qe({
    root: ["root", i && "dense", !s && "gutters", !c && "padding", d && "divider", a === "flex-start" && "alignItemsFlexStart", p && "secondaryAction"],
    container: ["container"]
  }, vz, o);
}, Rz = de("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Ez
})(Ve(({
  theme: e
}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  variants: [{
    props: ({
      ownerState: a
    }) => !a.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disablePadding && a.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disablePadding && !a.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disablePadding && !!a.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState: a
    }) => !!a.secondaryAction,
    style: {
      [`& > .${bz.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.button,
    style: {
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
}))), wz = de("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, a) => a.container
})({
  position: "relative"
}), Mz = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiListItem"
  }), {
    alignItems: s = "center",
    children: c,
    className: d,
    component: p,
    components: m = {},
    componentsProps: h = {},
    ContainerComponent: g = "li",
    ContainerProps: {
      className: y,
      ...x
    } = {},
    dense: C = !1,
    disableGutters: R = !1,
    disablePadding: E = !1,
    divider: w = !1,
    secondaryAction: z,
    slotProps: k = {},
    slots: O = {},
    ...D
  } = i, M = v.useContext(ro), $ = v.useMemo(() => ({
    dense: C || M.dense || !1,
    alignItems: s,
    disableGutters: R
  }), [s, M.dense, C, R]), j = v.useRef(null), U = v.Children.toArray(c), P = U.length && uu(U[U.length - 1], ["ListItemSecondaryAction"]), S = {
    ...i,
    alignItems: s,
    dense: $.dense,
    disableGutters: R,
    disablePadding: E,
    divider: w,
    hasSecondaryAction: P
  }, B = Tz(S), H = an(j, o), G = O.root || m.Root || Rz, J = k.root || h.root || {}, F = {
    className: he(B.root, J.className, d),
    ...D
  };
  let N = p || "li";
  return P ? (N = !F.component && !p ? "div" : N, g === "li" && (N === "li" ? N = "div" : F.component === "li" && (F.component = "div")), /* @__PURE__ */ T.jsx(ro.Provider, {
    value: $,
    children: /* @__PURE__ */ T.jsxs(wz, {
      as: g,
      className: he(B.container, y),
      ref: H,
      ownerState: S,
      ...x,
      children: [/* @__PURE__ */ T.jsx(G, {
        ...J,
        ...!ps(G) && {
          as: N,
          ownerState: {
            ...S,
            ...J.ownerState
          }
        },
        ...F,
        children: U
      }), U.pop()]
    })
  })) : /* @__PURE__ */ T.jsx(ro.Provider, {
    value: $,
    children: /* @__PURE__ */ T.jsxs(G, {
      ...J,
      as: N,
      ref: H,
      ...!ps(G) && {
        ownerState: {
          ...S,
          ...J.ownerState
        }
      },
      ...F,
      children: [U, z && /* @__PURE__ */ T.jsx(Lx, {
        children: z
      })]
    })
  });
}), xb = _e("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Az(e) {
  return Ge("MuiListItemText", e);
}
const Oi = _e("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Oz = (e) => {
  const {
    classes: a,
    inset: o,
    primary: i,
    secondary: s,
    dense: c
  } = e;
  return qe({
    root: ["root", o && "inset", c && "dense", i && s && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Az, a);
}, zz = de("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Oi.primary}`]: a.primary
    }, {
      [`& .${Oi.secondary}`]: a.secondary
    }, a.root, o.inset && a.inset, o.primary && o.secondary && a.multiline, o.dense && a.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${P0.root}:where(& .${Oi.primary})`]: {
    display: "block"
  },
  [`.${P0.root}:where(& .${Oi.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), Dz = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiListItemText"
  }), {
    children: s,
    className: c,
    disableTypography: d = !1,
    inset: p = !1,
    primary: m,
    primaryTypographyProps: h,
    secondary: g,
    secondaryTypographyProps: y,
    slots: x = {},
    slotProps: C = {},
    ...R
  } = i, {
    dense: E
  } = v.useContext(ro);
  let w = m ?? s, z = g;
  const k = {
    ...i,
    disableTypography: d,
    inset: p,
    primary: !!w,
    secondary: !!z,
    dense: E
  }, O = Oz(k), D = {
    slots: x,
    slotProps: {
      primary: h,
      secondary: y,
      ...C
    }
  }, [M, $] = Ze("root", {
    className: he(O.root, c),
    elementType: zz,
    externalForwardedProps: {
      ...D,
      ...R
    },
    ownerState: k,
    ref: o
  }), [j, U] = Ze("primary", {
    className: O.primary,
    elementType: Le,
    externalForwardedProps: D,
    ownerState: k
  }), [P, S] = Ze("secondary", {
    className: O.secondary,
    elementType: Le,
    externalForwardedProps: D,
    ownerState: k
  });
  return w != null && w.type !== Le && !d && (w = /* @__PURE__ */ T.jsx(j, {
    variant: E ? "body2" : "body1",
    component: U != null && U.variant ? void 0 : "span",
    ...U,
    children: w
  })), z != null && z.type !== Le && !d && (z = /* @__PURE__ */ T.jsx(P, {
    variant: "body2",
    color: "textSecondary",
    ...S,
    children: z
  })), /* @__PURE__ */ T.jsxs(M, {
    ...$,
    children: [w, z]
  });
});
function Mp(e, a, o) {
  return e === a ? e.firstChild : a && a.nextElementSibling ? a.nextElementSibling : o ? null : e.firstChild;
}
function Sb(e, a, o) {
  return e === a ? o ? e.firstChild : e.lastChild : a && a.previousElementSibling ? a.previousElementSibling : o ? null : e.lastChild;
}
function jx(e, a) {
  if (a === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : a.repeating ? o[0] === a.keys[0] : o.startsWith(a.keys.join(""));
}
function Gl(e, a, o, i, s, c) {
  let d = !1, p = s(e, a, a ? o : !1);
  for (; p; ) {
    if (p === e.firstChild) {
      if (d)
        return !1;
      d = !0;
    }
    const m = i ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
    if (!p.hasAttribute("tabindex") || !jx(p, c) || m)
      p = s(e, p, o);
    else
      return p.focus(), !0;
  }
  return !1;
}
const $z = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: i,
    autoFocus: s = !1,
    autoFocusItem: c = !1,
    children: d,
    className: p,
    disabledItemsFocusable: m = !1,
    disableListWrap: h = !1,
    onKeyDown: g,
    variant: y = "selectedMenu",
    ...x
  } = a, C = v.useRef(null), R = v.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Xn(() => {
    s && C.current.focus();
  }, [s]), v.useImperativeHandle(i, () => ({
    adjustStyleForScrollbar: (O, {
      direction: D
    }) => {
      const M = !C.current.style.width;
      if (O.clientHeight < C.current.clientHeight && M) {
        const $ = `${W1(ua(O))}px`;
        C.current.style[D === "rtl" ? "paddingLeft" : "paddingRight"] = $, C.current.style.width = `calc(100% + ${$})`;
      }
      return C.current;
    }
  }), []);
  const E = (O) => {
    const D = C.current, M = O.key;
    if (O.ctrlKey || O.metaKey || O.altKey) {
      g && g(O);
      return;
    }
    const j = Qn(D).activeElement;
    if (M === "ArrowDown")
      O.preventDefault(), Gl(D, j, h, m, Mp);
    else if (M === "ArrowUp")
      O.preventDefault(), Gl(D, j, h, m, Sb);
    else if (M === "Home")
      O.preventDefault(), Gl(D, null, h, m, Mp);
    else if (M === "End")
      O.preventDefault(), Gl(D, null, h, m, Sb);
    else if (M.length === 1) {
      const U = R.current, P = M.toLowerCase(), S = performance.now();
      U.keys.length > 0 && (S - U.lastTime > 500 ? (U.keys = [], U.repeating = !0, U.previousKeyMatched = !0) : U.repeating && P !== U.keys[0] && (U.repeating = !1)), U.lastTime = S, U.keys.push(P);
      const B = j && !U.repeating && jx(j, U);
      U.previousKeyMatched && (B || Gl(D, j, !1, m, Mp, U)) ? O.preventDefault() : U.previousKeyMatched = !1;
    }
    g && g(O);
  }, w = an(C, o);
  let z = -1;
  v.Children.forEach(d, (O, D) => {
    if (!/* @__PURE__ */ v.isValidElement(O)) {
      z === D && (z += 1, z >= d.length && (z = -1));
      return;
    }
    O.props.disabled || (y === "selectedMenu" && O.props.selected || z === -1) && (z = D), z === D && (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) && (z += 1, z >= d.length && (z = -1));
  });
  const k = v.Children.map(d, (O, D) => {
    if (D === z) {
      const M = {};
      return c && (M.autoFocus = !0), O.props.tabIndex === void 0 && y === "selectedMenu" && (M.tabIndex = 0), /* @__PURE__ */ v.cloneElement(O, M);
    }
    return O;
  });
  return /* @__PURE__ */ T.jsx(Nx, {
    role: "menu",
    ref: w,
    className: p,
    onKeyDown: E,
    tabIndex: s ? 0 : -1,
    ...x,
    children: k
  });
});
function kz(e) {
  return Ge("MuiPopover", e);
}
_e("MuiPopover", ["root", "paper"]);
function Cb(e, a) {
  let o = 0;
  return typeof a == "number" ? o = a : a === "center" ? o = e.height / 2 : a === "bottom" && (o = e.height), o;
}
function Eb(e, a) {
  let o = 0;
  return typeof a == "number" ? o = a : a === "center" ? o = e.width / 2 : a === "right" && (o = e.width), o;
}
function Tb(e) {
  return [e.horizontal, e.vertical].map((a) => typeof a == "number" ? `${a}px` : a).join(" ");
}
function Qc(e) {
  return typeof e == "function" ? e() : e;
}
const Nz = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"],
    paper: ["paper"]
  }, kz, a);
}, Lz = de(Ax, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({}), Bx = de(co, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, a) => a.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), jz = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: c,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: p,
    anchorReference: m = "anchorEl",
    children: h,
    className: g,
    container: y,
    elevation: x = 8,
    marginThreshold: C = 16,
    open: R,
    PaperProps: E = {},
    // TODO: remove in v7
    slots: w = {},
    slotProps: z = {},
    transformOrigin: k = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O,
    // TODO: remove in v7
    transitionDuration: D = "auto",
    TransitionProps: M = {},
    // TODO: remove in v7
    disableScrollLock: $ = !1,
    ...j
  } = i, U = v.useRef(), P = {
    ...i,
    anchorOrigin: d,
    anchorReference: m,
    elevation: x,
    marginThreshold: C,
    transformOrigin: k,
    TransitionComponent: O,
    transitionDuration: D,
    TransitionProps: M
  }, S = Nz(P), B = v.useCallback(() => {
    if (m === "anchorPosition")
      return p;
    const Te = Qc(c), Se = (Te && Te.nodeType === 1 ? Te : Qn(U.current).body).getBoundingClientRect();
    return {
      top: Se.top + Cb(Se, d.vertical),
      left: Se.left + Eb(Se, d.horizontal)
    };
  }, [c, d.horizontal, d.vertical, p, m]), H = v.useCallback((Te) => ({
    vertical: Cb(Te, k.vertical),
    horizontal: Eb(Te, k.horizontal)
  }), [k.horizontal, k.vertical]), G = v.useCallback((Te) => {
    const De = {
      width: Te.offsetWidth,
      height: Te.offsetHeight
    }, Se = H(De);
    if (m === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Tb(Se)
      };
    const ct = B();
    let Oe = ct.top - Se.vertical, ke = ct.left - Se.horizontal;
    const vt = Oe + De.height, me = ke + De.width, He = ua(Qc(c)), Me = He.innerHeight - C, We = He.innerWidth - C;
    if (C !== null && Oe < C) {
      const Fe = Oe - C;
      Oe -= Fe, Se.vertical += Fe;
    } else if (C !== null && vt > Me) {
      const Fe = vt - Me;
      Oe -= Fe, Se.vertical += Fe;
    }
    if (C !== null && ke < C) {
      const Fe = ke - C;
      ke -= Fe, Se.horizontal += Fe;
    } else if (me > We) {
      const Fe = me - We;
      ke -= Fe, Se.horizontal += Fe;
    }
    return {
      top: `${Math.round(Oe)}px`,
      left: `${Math.round(ke)}px`,
      transformOrigin: Tb(Se)
    };
  }, [c, m, B, H, C]), [J, F] = v.useState(R), N = v.useCallback(() => {
    const Te = U.current;
    if (!Te)
      return;
    const De = G(Te);
    De.top !== null && Te.style.setProperty("top", De.top), De.left !== null && (Te.style.left = De.left), Te.style.transformOrigin = De.transformOrigin, F(!0);
  }, [G]);
  v.useEffect(() => ($ && window.addEventListener("scroll", N), () => window.removeEventListener("scroll", N)), [c, $, N]);
  const V = () => {
    N();
  }, K = () => {
    F(!1);
  };
  v.useEffect(() => {
    R && N();
  }), v.useImperativeHandle(s, () => R ? {
    updatePosition: () => {
      N();
    }
  } : null, [R, N]), v.useEffect(() => {
    if (!R)
      return;
    const Te = Rs(() => {
      N();
    }), De = ua(Qc(c));
    return De.addEventListener("resize", Te), () => {
      Te.clear(), De.removeEventListener("resize", Te);
    };
  }, [c, R, N]);
  let Y = D;
  const pe = {
    slots: {
      transition: O,
      ...w
    },
    slotProps: {
      transition: M,
      paper: E,
      ...z
    }
  }, [L, W] = Ze("transition", {
    elementType: Tu,
    externalForwardedProps: pe,
    ownerState: P,
    getSlotProps: (Te) => ({
      ...Te,
      onEntering: (De, Se) => {
        var ct;
        (ct = Te.onEntering) == null || ct.call(Te, De, Se), V();
      },
      onExited: (De) => {
        var Se;
        (Se = Te.onExited) == null || Se.call(Te, De), K();
      }
    }),
    additionalProps: {
      appear: !0,
      in: R
    }
  });
  D === "auto" && !L.muiSupportAuto && (Y = void 0);
  const re = y || (c ? Qn(Qc(c)).body : void 0), [te, {
    slots: fe,
    slotProps: se,
    ...ge
  }] = Ze("root", {
    ref: o,
    elementType: Lz,
    externalForwardedProps: {
      ...pe,
      ...j
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: w.backdrop
      },
      slotProps: {
        backdrop: fx(typeof z.backdrop == "function" ? z.backdrop(P) : z.backdrop, {
          invisible: !0
        })
      },
      container: re,
      open: R
    },
    ownerState: P,
    className: he(S.root, g)
  }), [ye, be] = Ze("paper", {
    ref: U,
    className: S.paper,
    elementType: Bx,
    externalForwardedProps: pe,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: x,
      style: J ? void 0 : {
        opacity: 0
      }
    },
    ownerState: P
  });
  return /* @__PURE__ */ T.jsx(te, {
    ...ge,
    ...!ps(te) && {
      slots: fe,
      slotProps: se,
      disableScrollLock: $
    },
    children: /* @__PURE__ */ T.jsx(L, {
      ...W,
      timeout: Y,
      children: /* @__PURE__ */ T.jsx(ye, {
        ...be,
        children: h
      })
    })
  });
});
function Bz(e) {
  return Ge("MuiMenu", e);
}
_e("MuiMenu", ["root", "paper", "list"]);
const _z = {
  vertical: "top",
  horizontal: "right"
}, Hz = {
  vertical: "top",
  horizontal: "left"
}, Uz = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Bz, a);
}, Iz = de(jz, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({}), Pz = de(Bx, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, a) => a.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Vz = de($z, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, a) => a.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Gz = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: c,
    className: d,
    disableAutoFocusItem: p = !1,
    MenuListProps: m = {},
    onClose: h,
    open: g,
    PaperProps: y = {},
    PopoverClasses: x,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: R,
      ...E
    } = {},
    variant: w = "selectedMenu",
    slots: z = {},
    slotProps: k = {},
    ...O
  } = i, D = Yi(), M = {
    ...i,
    autoFocus: s,
    disableAutoFocusItem: p,
    MenuListProps: m,
    onEntering: R,
    PaperProps: y,
    transitionDuration: C,
    TransitionProps: E,
    variant: w
  }, $ = Uz(M), j = s && !p && g, U = v.useRef(null), P = (Y, pe) => {
    U.current && U.current.adjustStyleForScrollbar(Y, {
      direction: D ? "rtl" : "ltr"
    }), R && R(Y, pe);
  }, S = (Y) => {
    Y.key === "Tab" && (Y.preventDefault(), h && h(Y, "tabKeyDown"));
  };
  let B = -1;
  v.Children.map(c, (Y, pe) => {
    /* @__PURE__ */ v.isValidElement(Y) && (Y.props.disabled || (w === "selectedMenu" && Y.props.selected || B === -1) && (B = pe));
  });
  const H = {
    slots: z,
    slotProps: {
      list: m,
      transition: E,
      paper: y,
      ...k
    }
  }, G = _i({
    elementType: z.root,
    externalSlotProps: k.root,
    ownerState: M,
    className: [$.root, d]
  }), [J, F] = Ze("paper", {
    className: $.paper,
    elementType: Pz,
    externalForwardedProps: H,
    shouldForwardComponentProp: !0,
    ownerState: M
  }), [N, V] = Ze("list", {
    className: he($.list, m.className),
    elementType: Vz,
    shouldForwardComponentProp: !0,
    externalForwardedProps: H,
    getSlotProps: (Y) => ({
      ...Y,
      onKeyDown: (pe) => {
        var L;
        S(pe), (L = Y.onKeyDown) == null || L.call(Y, pe);
      }
    }),
    ownerState: M
  }), K = typeof H.slotProps.transition == "function" ? H.slotProps.transition(M) : H.slotProps.transition;
  return /* @__PURE__ */ T.jsx(Iz, {
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: D ? "right" : "left"
    },
    transformOrigin: D ? _z : Hz,
    slots: {
      root: z.root,
      paper: J,
      backdrop: z.backdrop,
      ...z.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: z.transition
      }
    },
    slotProps: {
      root: G,
      paper: F,
      backdrop: typeof k.backdrop == "function" ? k.backdrop(M) : k.backdrop,
      transition: {
        ...K,
        onEntering: (...Y) => {
          var pe;
          P(...Y), (pe = K == null ? void 0 : K.onEntering) == null || pe.call(K, ...Y);
        }
      }
    },
    open: g,
    ref: o,
    transitionDuration: C,
    ownerState: M,
    ...O,
    classes: x,
    children: /* @__PURE__ */ T.jsx(N, {
      actions: U,
      autoFocus: s && (B === -1 || p),
      autoFocusItem: j,
      variant: w,
      ...V,
      children: c
    })
  });
});
function qz(e) {
  return Ge("MuiMenuItem", e);
}
const ql = _e("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Yz = (e, a) => {
  const {
    ownerState: o
  } = e;
  return [a.root, o.dense && a.dense, o.divider && a.divider, !o.disableGutters && a.gutters];
}, Fz = (e) => {
  const {
    disabled: a,
    dense: o,
    divider: i,
    disableGutters: s,
    selected: c,
    classes: d
  } = e, m = qe({
    root: ["root", o && "dense", a && "disabled", !s && "gutters", i && "divider", c && "selected"]
  }, qz, d);
  return {
    ...d,
    ...m
  };
}, Wz = de(so, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Yz
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${ql.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : xt(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ql.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ql.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : xt(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${ql.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ql.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${mb.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${mb.inset}`]: {
    marginLeft: 52
  },
  [`& .${Oi.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Oi.inset}`]: {
    paddingLeft: 36
  },
  [`& .${xb.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: a
    }) => !a.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: a
    }) => a.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${xb.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Kz = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: c = "li",
    dense: d = !1,
    divider: p = !1,
    disableGutters: m = !1,
    focusVisibleClassName: h,
    role: g = "menuitem",
    tabIndex: y,
    className: x,
    ...C
  } = i, R = v.useContext(ro), E = v.useMemo(() => ({
    dense: d || R.dense || !1,
    disableGutters: m
  }), [R.dense, d, m]), w = v.useRef(null);
  Xn(() => {
    s && w.current && w.current.focus();
  }, [s]);
  const z = {
    ...i,
    dense: E.dense,
    divider: p,
    disableGutters: m
  }, k = Fz(i), O = an(w, o);
  let D;
  return i.disabled || (D = y !== void 0 ? y : -1), /* @__PURE__ */ T.jsx(ro.Provider, {
    value: E,
    children: /* @__PURE__ */ T.jsx(Wz, {
      ref: O,
      role: g,
      tabIndex: D,
      component: c,
      focusVisibleClassName: he(k.focusVisible, h),
      className: he(k.root, x),
      ...C,
      ownerState: z,
      classes: k
    })
  });
});
function Xz(e) {
  return Ge("MuiNativeSelect", e);
}
const Wm = _e("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Qz = (e) => {
  const {
    classes: a,
    variant: o,
    disabled: i,
    multiple: s,
    open: c,
    error: d
  } = e, p = {
    select: ["select", o, i && "disabled", s && "multiple", d && "error"],
    icon: ["icon", `icon${ue(o)}`, c && "iconOpen", i && "disabled"]
  };
  return qe(p, Xz, a);
}, _x = de("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Wm.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.variant !== "filled" && a.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), Zz = de(_x, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Zn,
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.select, a[o.variant], o.error && a.error, {
      [`&.${Wm.multiple}`]: a.multiple
    }];
  }
})({}), Hx = de("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Wm.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Jz = de(Hx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.icon, o.variant && a[`icon${ue(o.variant)}`], o.open && a.iconOpen];
  }
})({}), e3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const {
    className: i,
    disabled: s,
    error: c,
    IconComponent: d,
    inputRef: p,
    variant: m = "standard",
    ...h
  } = a, g = {
    ...a,
    disabled: s,
    variant: m,
    error: c
  }, y = Qz(g);
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ T.jsx(Zz, {
      ownerState: g,
      className: he(y.select, i),
      disabled: s,
      ref: p || o,
      ...h
    }), a.multiple ? null : /* @__PURE__ */ T.jsx(Jz, {
      as: d,
      ownerState: g,
      className: y.icon
    })]
  });
});
var Rb;
const t3 = de("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Zn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), n3 = de("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Zn
})(Ve(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: a
    }) => !a.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: a
    }) => a.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.withLabel && a.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function a3(e) {
  const {
    children: a,
    classes: o,
    className: i,
    label: s,
    notched: c,
    ...d
  } = e, p = s != null && s !== "", m = {
    ...e,
    notched: c,
    withLabel: p
  };
  return /* @__PURE__ */ T.jsx(t3, {
    "aria-hidden": !0,
    className: i,
    ownerState: m,
    ...d,
    children: /* @__PURE__ */ T.jsx(n3, {
      ownerState: m,
      children: p ? /* @__PURE__ */ T.jsx("span", {
        children: s
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Rb || (Rb = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const r3 = (e) => {
  const {
    classes: a
  } = e, i = qe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, l5, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...i
  };
}, o3 = de(Fu, {
  shouldForwardProp: (e) => Zn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: qu
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Ta.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Ta.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : a
      }
    },
    [`&.${Ta.focused} .${Ta.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Tn()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${Ta.focused} .${Ta.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[o].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Ta.error} .${Ta.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Ta.disabled} .${Ta.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: o,
        size: i
      }) => o.multiline && i === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), i3 = de(a3, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, a) => a.notchedOutline
})(Ve(({
  theme: e
}) => {
  const a = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : a
  };
})), l3 = de(Wu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Yu
})(Ve(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), Km = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: p,
    multiline: m = !1,
    notched: h,
    slots: g = {},
    slotProps: y = {},
    type: x = "text",
    ...C
  } = i, R = r3(i), E = Wi(), w = Fi({
    props: i,
    muiFormControl: E,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), z = {
    ...i,
    color: w.color || "primary",
    disabled: w.disabled,
    error: w.error,
    focused: w.focused,
    formControl: E,
    fullWidth: c,
    hiddenLabel: w.hiddenLabel,
    multiline: m,
    size: w.size,
    type: x
  }, k = g.root ?? s.Root ?? o3, O = g.input ?? s.Input ?? l3, [D, M] = Ze("notchedOutline", {
    elementType: i3,
    className: R.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: z,
    externalForwardedProps: {
      slots: g,
      slotProps: y
    },
    additionalProps: {
      label: p != null && p !== "" && w.required ? /* @__PURE__ */ T.jsxs(v.Fragment, {
        children: [p, " ", "*"]
      }) : p
    }
  });
  return /* @__PURE__ */ T.jsx(qm, {
    slots: {
      root: k,
      input: O
    },
    slotProps: y,
    renderSuffix: ($) => /* @__PURE__ */ T.jsx(D, {
      ...M,
      notched: typeof h < "u" ? h : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: m,
    ref: o,
    type: x,
    ...C,
    classes: {
      ...R,
      notchedOutline: null
    }
  });
});
Km.muiName = "Input";
function Ux(e) {
  return Ge("MuiSelect", e);
}
const Yl = _e("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var wb;
const s3 = de(_x, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Yl.select}`]: a.select
      },
      {
        [`&.${Yl.select}`]: a[o.variant]
      },
      {
        [`&.${Yl.error}`]: a.error
      },
      {
        [`&.${Yl.multiple}`]: a.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Yl.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), c3 = de(Hx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.icon, o.variant && a[`icon${ue(o.variant)}`], o.open && a.iconOpen];
  }
})({}), u3 = de("input", {
  shouldForwardProp: (e) => dx(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, a) => a.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Mb(e, a) {
  return typeof a == "object" && a !== null ? e === a : String(e) === String(a);
}
function d3(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const f3 = (e) => {
  const {
    classes: a,
    variant: o,
    disabled: i,
    multiple: s,
    open: c,
    error: d
  } = e, p = {
    select: ["select", o, i && "disabled", s && "multiple", d && "error"],
    icon: ["icon", `icon${ue(o)}`, c && "iconOpen", i && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return qe(p, Ux, a);
}, p3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  var gt;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: c,
    autoWidth: d,
    children: p,
    className: m,
    defaultOpen: h,
    defaultValue: g,
    disabled: y,
    displayEmpty: x,
    error: C = !1,
    IconComponent: R,
    inputRef: E,
    labelId: w,
    MenuProps: z = {},
    multiple: k,
    name: O,
    onBlur: D,
    onChange: M,
    onClose: $,
    onFocus: j,
    onOpen: U,
    open: P,
    readOnly: S,
    renderValue: B,
    required: H,
    SelectDisplayProps: G = {},
    tabIndex: J,
    // catching `type` from Input which makes no sense for SelectInput
    type: F,
    value: N,
    variant: V = "standard",
    ...K
  } = a, [Y, pe] = $i({
    controlled: N,
    default: g,
    name: "Select"
  }), [L, W] = $i({
    controlled: P,
    default: h,
    name: "Select"
  }), re = v.useRef(null), te = v.useRef(null), [fe, se] = v.useState(null), {
    current: ge
  } = v.useRef(P != null), [ye, be] = v.useState(), Te = an(o, E), De = v.useCallback((xe) => {
    te.current = xe, xe && se(xe);
  }, []), Se = fe == null ? void 0 : fe.parentNode;
  v.useImperativeHandle(Te, () => ({
    focus: () => {
      te.current.focus();
    },
    node: re.current,
    value: Y
  }), [Y]), v.useEffect(() => {
    h && L && fe && !ge && (be(d ? null : Se.clientWidth), te.current.focus());
  }, [fe, d]), v.useEffect(() => {
    c && te.current.focus();
  }, [c]), v.useEffect(() => {
    if (!w)
      return;
    const xe = Qn(te.current).getElementById(w);
    if (xe) {
      const $e = () => {
        getSelection().isCollapsed && te.current.focus();
      };
      return xe.addEventListener("click", $e), () => {
        xe.removeEventListener("click", $e);
      };
    }
  }, [w]);
  const ct = (xe, $e) => {
    xe ? U && U($e) : $ && $($e), ge || (be(d ? null : Se.clientWidth), W(xe));
  }, Oe = (xe) => {
    xe.button === 0 && (xe.preventDefault(), te.current.focus(), ct(!0, xe));
  }, ke = (xe) => {
    ct(!1, xe);
  }, vt = v.Children.toArray(p), me = (xe) => {
    const $e = vt.find((_t) => _t.props.value === xe.target.value);
    $e !== void 0 && (pe($e.props.value), M && M(xe, $e));
  }, He = (xe) => ($e) => {
    let _t;
    if ($e.currentTarget.hasAttribute("tabindex")) {
      if (k) {
        _t = Array.isArray(Y) ? Y.slice() : [];
        const Qt = Y.indexOf(xe.props.value);
        Qt === -1 ? _t.push(xe.props.value) : _t.splice(Qt, 1);
      } else
        _t = xe.props.value;
      if (xe.props.onClick && xe.props.onClick($e), Y !== _t && (pe(_t), M)) {
        const Qt = $e.nativeEvent || $e, Bn = new Qt.constructor(Qt.type, Qt);
        Object.defineProperty(Bn, "target", {
          writable: !0,
          value: {
            value: _t,
            name: O
          }
        }), M(Bn, xe);
      }
      k || ct(!1, $e);
    }
  }, Me = (xe) => {
    S || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(xe.key) && (xe.preventDefault(), ct(!0, xe));
  }, We = fe !== null && L, Fe = (xe) => {
    !We && D && (Object.defineProperty(xe, "target", {
      writable: !0,
      value: {
        value: Y,
        name: O
      }
    }), D(xe));
  };
  delete K["aria-invalid"];
  let Ce, At;
  const Ue = [];
  let Ft = !1;
  (Cu({
    value: Y
  }) || x) && (B ? Ce = B(Y) : Ft = !0);
  const rn = vt.map((xe) => {
    if (!/* @__PURE__ */ v.isValidElement(xe))
      return null;
    let $e;
    if (k) {
      if (!Array.isArray(Y))
        throw new Error(Rr(2));
      $e = Y.some((_t) => Mb(_t, xe.props.value)), $e && Ft && Ue.push(xe.props.children);
    } else
      $e = Mb(Y, xe.props.value), $e && Ft && (At = xe.props.children);
    return /* @__PURE__ */ v.cloneElement(xe, {
      "aria-selected": $e ? "true" : "false",
      onClick: He(xe),
      onKeyUp: (_t) => {
        _t.key === " " && _t.preventDefault(), xe.props.onKeyUp && xe.props.onKeyUp(_t);
      },
      role: "option",
      selected: $e,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": xe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Ft && (k ? Ue.length === 0 ? Ce = null : Ce = Ue.reduce((xe, $e, _t) => (xe.push($e), _t < Ue.length - 1 && xe.push(", "), xe), []) : Ce = At);
  let Bt = ye;
  !d && ge && fe && (Bt = Se.clientWidth);
  let Je;
  typeof J < "u" ? Je = J : Je = y ? null : 0;
  const Ke = G.id || (O ? `mui-component-select-${O}` : void 0), je = {
    ...a,
    variant: V,
    value: Y,
    open: We,
    error: C
  }, ze = f3(je), bt = {
    ...z.PaperProps,
    ...(gt = z.slotProps) == null ? void 0 : gt.paper
  }, lt = Uo();
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ T.jsx(s3, {
      as: "div",
      ref: De,
      tabIndex: Je,
      role: "combobox",
      "aria-controls": We ? lt : void 0,
      "aria-disabled": y ? "true" : void 0,
      "aria-expanded": We ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [w, Ke].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      "aria-required": H ? "true" : void 0,
      "aria-invalid": C ? "true" : void 0,
      onKeyDown: Me,
      onMouseDown: y || S ? null : Oe,
      onBlur: Fe,
      onFocus: j,
      ...G,
      ownerState: je,
      className: he(G.className, ze.select, m),
      id: Ke,
      children: d3(Ce) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        wb || (wb = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ce
    }), /* @__PURE__ */ T.jsx(u3, {
      "aria-invalid": C,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: O,
      ref: re,
      "aria-hidden": !0,
      onChange: me,
      tabIndex: -1,
      disabled: y,
      className: ze.nativeInput,
      autoFocus: c,
      required: H,
      ...K,
      ownerState: je
    }), /* @__PURE__ */ T.jsx(c3, {
      as: R,
      className: ze.icon,
      ownerState: je
    }), /* @__PURE__ */ T.jsx(Gz, {
      id: `menu-${O || ""}`,
      anchorEl: Se,
      open: We,
      onClose: ke,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...z,
      slotProps: {
        ...z.slotProps,
        list: {
          "aria-labelledby": w,
          role: "listbox",
          "aria-multiselectable": k ? "true" : void 0,
          disableListWrap: !0,
          id: lt,
          ...z.MenuListProps
        },
        paper: {
          ...bt,
          style: {
            minWidth: Bt,
            ...bt != null ? bt.style : null
          }
        }
      },
      children: rn
    })]
  });
}), m3 = (e) => {
  const {
    classes: a
  } = e, i = qe({
    root: ["root"]
  }, Ux, a);
  return {
    ...a,
    ...i
  };
}, Xm = {
  name: "MuiSelect",
  overridesResolver: (e, a) => a.root,
  shouldForwardProp: (e) => Zn(e) && e !== "variant",
  slot: "Root"
}, h3 = de(Fm, Xm)(""), g3 = de(Km, Xm)(""), y3 = de(Ym, Xm)(""), Qm = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    name: "MuiSelect",
    props: a
  }), {
    autoWidth: s = !1,
    children: c,
    classes: d = {},
    className: p,
    defaultOpen: m = !1,
    displayEmpty: h = !1,
    IconComponent: g = wx,
    id: y,
    input: x,
    inputProps: C,
    label: R,
    labelId: E,
    MenuProps: w,
    multiple: z = !1,
    native: k = !1,
    onClose: O,
    onOpen: D,
    open: M,
    renderValue: $,
    SelectDisplayProps: j,
    variant: U = "outlined",
    ...P
  } = i, S = k ? e3 : p3, B = Wi(), H = Fi({
    props: i,
    muiFormControl: B,
    states: ["variant", "error"]
  }), G = H.variant || U, J = {
    ...i,
    variant: G,
    classes: d
  }, F = m3(J), {
    root: N,
    ...V
  } = F, K = x || {
    standard: /* @__PURE__ */ T.jsx(h3, {
      ownerState: J
    }),
    outlined: /* @__PURE__ */ T.jsx(g3, {
      label: R,
      ownerState: J
    }),
    filled: /* @__PURE__ */ T.jsx(y3, {
      ownerState: J
    })
  }[G], Y = an(o, Io(K));
  return /* @__PURE__ */ T.jsx(v.Fragment, {
    children: /* @__PURE__ */ v.cloneElement(K, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: S,
      inputProps: {
        children: c,
        error: H.error,
        IconComponent: g,
        variant: G,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: z,
        ...k ? {
          id: y
        } : {
          autoWidth: s,
          defaultOpen: m,
          displayEmpty: h,
          labelId: E,
          MenuProps: w,
          onClose: O,
          onOpen: D,
          open: M,
          renderValue: $,
          SelectDisplayProps: {
            id: y,
            ...j
          }
        },
        ...C,
        classes: C ? jn(V, C.classes) : V,
        ...x ? x.props.inputProps : {}
      },
      ...(z && k || h) && G === "outlined" ? {
        notched: !0
      } : {},
      ref: Y,
      className: he(K.props.className, p, F.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!x && {
        variant: G
      },
      ...P
    })
  });
});
Qm.muiName = "Select";
function v3(e) {
  return Ge("MuiTooltip", e);
}
const nn = _e("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function b3(e) {
  return Math.round(e * 1e5) / 1e5;
}
const x3 = (e) => {
  const {
    classes: a,
    disableInteractive: o,
    arrow: i,
    touch: s,
    placement: c
  } = e, d = {
    popper: ["popper", !o && "popperInteractive", i && "popperArrow"],
    tooltip: ["tooltip", i && "tooltipArrow", s && "touch", `tooltipPlacement${ue(c.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return qe(d, v3, a);
}, S3 = de(Gu, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.popper, !o.disableInteractive && a.popperInteractive, o.arrow && a.popperArrow, !o.open && a.popperClose];
  }
})(Ve(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: a
    }) => !a.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: a
    }) => !a,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${nn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${nn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${nn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${nn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.arrow && !a.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${nn.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.arrow && !!a.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${nn.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.arrow && !a.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${nn.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.arrow && !!a.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${nn.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), C3 = de("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.tooltip, o.touch && a.touch, o.arrow && a.tooltipArrow, a[`tooltipPlacement${ue(o.placement.split("-")[0])}`]];
  }
})(Ve(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : xt(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${nn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${nn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${nn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${nn.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${b3(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.isRtl,
    style: {
      [`.${nn.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${nn.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.isRtl && a.touch,
    style: {
      [`.${nn.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${nn.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => !!a.isRtl,
    style: {
      [`.${nn.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${nn.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => !!a.isRtl && a.touch,
    style: {
      [`.${nn.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${nn.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.touch,
    style: {
      [`.${nn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.touch,
    style: {
      [`.${nn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), E3 = de("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, a) => a.arrow
})(Ve(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : xt(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let Zc = !1;
const Ab = new Pu();
let Fl = {
  x: 0,
  y: 0
};
function Jc(e, a) {
  return (o, ...i) => {
    a && a(o, ...i), e(o, ...i);
  };
}
const Zp = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTooltip"
  }), {
    arrow: s = !1,
    children: c,
    classes: d,
    components: p = {},
    componentsProps: m = {},
    describeChild: h = !1,
    disableFocusListener: g = !1,
    disableHoverListener: y = !1,
    disableInteractive: x = !1,
    disableTouchListener: C = !1,
    enterDelay: R = 100,
    enterNextDelay: E = 0,
    enterTouchDelay: w = 700,
    followCursor: z = !1,
    id: k,
    leaveDelay: O = 0,
    leaveTouchDelay: D = 1500,
    onClose: M,
    onOpen: $,
    open: j,
    placement: U = "bottom",
    PopperComponent: P,
    PopperProps: S = {},
    slotProps: B = {},
    slots: H = {},
    title: G,
    TransitionComponent: J,
    TransitionProps: F,
    ...N
  } = i, V = /* @__PURE__ */ v.isValidElement(c) ? c : /* @__PURE__ */ T.jsx("span", {
    children: c
  }), K = nr(), Y = Yi(), [pe, L] = v.useState(), [W, re] = v.useState(null), te = v.useRef(!1), fe = x || z, se = No(), ge = No(), ye = No(), be = No(), [Te, De] = $i({
    controlled: j,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Se = Te;
  const ct = Uo(k), Oe = v.useRef(), ke = Ln(() => {
    Oe.current !== void 0 && (document.body.style.WebkitUserSelect = Oe.current, Oe.current = void 0), be.clear();
  });
  v.useEffect(() => ke, [ke]);
  const vt = (Ie) => {
    Ab.clear(), Zc = !0, De(!0), $ && !Se && $(Ie);
  }, me = Ln(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Ie) => {
      Ab.start(800 + O, () => {
        Zc = !1;
      }), De(!1), M && Se && M(Ie), se.start(K.transitions.duration.shortest, () => {
        te.current = !1;
      });
    }
  ), He = (Ie) => {
    te.current && Ie.type !== "touchstart" || (pe && pe.removeAttribute("title"), ge.clear(), ye.clear(), R || Zc && E ? ge.start(Zc ? E : R, () => {
      vt(Ie);
    }) : vt(Ie));
  }, Me = (Ie) => {
    ge.clear(), ye.start(O, () => {
      me(Ie);
    });
  }, [, We] = v.useState(!1), Fe = (Ie) => {
    vu(Ie.target) || (We(!1), Me(Ie));
  }, Ce = (Ie) => {
    pe || L(Ie.currentTarget), vu(Ie.target) && (We(!0), He(Ie));
  }, At = (Ie) => {
    te.current = !0;
    const on = V.props;
    on.onTouchStart && on.onTouchStart(Ie);
  }, Ue = (Ie) => {
    At(Ie), ye.clear(), se.clear(), ke(), Oe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", be.start(w, () => {
      document.body.style.WebkitUserSelect = Oe.current, He(Ie);
    });
  }, Ft = (Ie) => {
    V.props.onTouchEnd && V.props.onTouchEnd(Ie), ke(), ye.start(D, () => {
      me(Ie);
    });
  };
  v.useEffect(() => {
    if (!Se)
      return;
    function Ie(on) {
      on.key === "Escape" && me(on);
    }
    return document.addEventListener("keydown", Ie), () => {
      document.removeEventListener("keydown", Ie);
    };
  }, [me, Se]);
  const rn = an(Io(V), L, o);
  !G && G !== 0 && (Se = !1);
  const Bt = v.useRef(), Je = (Ie) => {
    const on = V.props;
    on.onMouseMove && on.onMouseMove(Ie), Fl = {
      x: Ie.clientX,
      y: Ie.clientY
    }, Bt.current && Bt.current.update();
  }, Ke = {}, je = typeof G == "string";
  h ? (Ke.title = !Se && je && !y ? G : null, Ke["aria-describedby"] = Se ? ct : null) : (Ke["aria-label"] = je ? G : null, Ke["aria-labelledby"] = Se && !je ? ct : null);
  const ze = {
    ...Ke,
    ...N,
    ...V.props,
    className: he(N.className, V.props.className),
    onTouchStart: At,
    ref: rn,
    ...z ? {
      onMouseMove: Je
    } : {}
  }, bt = {};
  C || (ze.onTouchStart = Ue, ze.onTouchEnd = Ft), y || (ze.onMouseOver = Jc(He, ze.onMouseOver), ze.onMouseLeave = Jc(Me, ze.onMouseLeave), fe || (bt.onMouseOver = He, bt.onMouseLeave = Me)), g || (ze.onFocus = Jc(Ce, ze.onFocus), ze.onBlur = Jc(Fe, ze.onBlur), fe || (bt.onFocus = Ce, bt.onBlur = Fe));
  const lt = {
    ...i,
    isRtl: Y,
    arrow: s,
    disableInteractive: fe,
    placement: U,
    PopperComponentProp: P,
    touch: te.current
  }, gt = typeof B.popper == "function" ? B.popper(lt) : B.popper, xe = v.useMemo(() => {
    var on, ve;
    let Ie = [{
      name: "arrow",
      enabled: !!W,
      options: {
        element: W,
        padding: 4
      }
    }];
    return (on = S.popperOptions) != null && on.modifiers && (Ie = Ie.concat(S.popperOptions.modifiers)), (ve = gt == null ? void 0 : gt.popperOptions) != null && ve.modifiers && (Ie = Ie.concat(gt.popperOptions.modifiers)), {
      ...S.popperOptions,
      ...gt == null ? void 0 : gt.popperOptions,
      modifiers: Ie
    };
  }, [W, S.popperOptions, gt == null ? void 0 : gt.popperOptions]), $e = x3(lt), _t = typeof B.transition == "function" ? B.transition(lt) : B.transition, Qt = {
    slots: {
      popper: p.Popper,
      transition: p.Transition ?? J,
      tooltip: p.Tooltip,
      arrow: p.Arrow,
      ...H
    },
    slotProps: {
      arrow: B.arrow ?? m.arrow,
      popper: {
        ...S,
        ...gt ?? m.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: B.tooltip ?? m.tooltip,
      transition: {
        ...F,
        ..._t ?? m.transition
      }
    }
  }, [Bn, dn] = Ze("popper", {
    elementType: S3,
    externalForwardedProps: Qt,
    ownerState: lt,
    className: he($e.popper, S == null ? void 0 : S.className)
  }), [Dn, yn] = Ze("transition", {
    elementType: Tu,
    externalForwardedProps: Qt,
    ownerState: lt
  }), [Sn, vn] = Ze("tooltip", {
    elementType: C3,
    className: $e.tooltip,
    externalForwardedProps: Qt,
    ownerState: lt
  }), [Un, Ia] = Ze("arrow", {
    elementType: E3,
    className: $e.arrow,
    externalForwardedProps: Qt,
    ownerState: lt,
    ref: re
  });
  return /* @__PURE__ */ T.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ v.cloneElement(V, ze), /* @__PURE__ */ T.jsx(Bn, {
      as: P ?? Gu,
      placement: U,
      anchorEl: z ? {
        getBoundingClientRect: () => ({
          top: Fl.y,
          left: Fl.x,
          right: Fl.x,
          bottom: Fl.y,
          width: 0,
          height: 0
        })
      } : pe,
      popperRef: Bt,
      open: pe ? Se : !1,
      id: ct,
      transition: !0,
      ...bt,
      ...dn,
      popperOptions: xe,
      children: ({
        TransitionProps: Ie
      }) => /* @__PURE__ */ T.jsx(Dn, {
        timeout: K.transitions.duration.shorter,
        ...Ie,
        ...yn,
        children: /* @__PURE__ */ T.jsxs(Sn, {
          ...vn,
          children: [G, s ? /* @__PURE__ */ T.jsx(Un, {
            ...Ia
          }) : null]
        })
      })
    })]
  });
});
function T3(e) {
  return Ge("MuiTab", e);
}
const Ea = _e("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), R3 = (e) => {
  const {
    classes: a,
    textColor: o,
    fullWidth: i,
    wrapped: s,
    icon: c,
    label: d,
    selected: p,
    disabled: m
  } = e, h = {
    root: ["root", c && d && "labelIcon", `textColor${ue(o)}`, i && "fullWidth", s && "wrapped", p && "selected", m && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return qe(h, T3, a);
}, w3 = de(so, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.label && o.icon && a.labelIcon, a[`textColor${ue(o.textColor)}`], o.fullWidth && a.fullWidth, o.wrapped && a.wrapped, {
      [`& .${Ea.iconWrapper}`]: a.iconWrapper
    }, {
      [`& .${Ea.icon}`]: a.icon
    }];
  }
})(Ve(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState: a
    }) => a.label && (a.iconPosition === "top" || a.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.label && a.iconPosition !== "top" && a.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.icon && a.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: a,
      iconPosition: o
    }) => a.icon && a.label && o === "top",
    style: {
      [`& > .${Ea.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: a,
      iconPosition: o
    }) => a.icon && a.label && o === "bottom",
    style: {
      [`& > .${Ea.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: a,
      iconPosition: o
    }) => a.icon && a.label && o === "start",
    style: {
      [`& > .${Ea.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: a,
      iconPosition: o
    }) => a.icon && a.label && o === "end",
    style: {
      [`& > .${Ea.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${Ea.selected}`]: {
        opacity: 1
      },
      [`&.${Ea.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ea.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Ea.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ea.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Ea.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), eu = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTab"
  }), {
    className: s,
    disabled: c = !1,
    disableFocusRipple: d = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: p,
    icon: m,
    iconPosition: h = "top",
    // eslint-disable-next-line react/prop-types
    indicator: g,
    label: y,
    onChange: x,
    onClick: C,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    selected: E,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: w,
    // eslint-disable-next-line react/prop-types
    textColor: z = "inherit",
    value: k,
    wrapped: O = !1,
    ...D
  } = i, M = {
    ...i,
    disabled: c,
    disableFocusRipple: d,
    selected: E,
    icon: !!m,
    iconPosition: h,
    label: !!y,
    fullWidth: p,
    textColor: z,
    wrapped: O
  }, $ = R3(M), j = m && y && /* @__PURE__ */ v.isValidElement(m) ? /* @__PURE__ */ v.cloneElement(m, {
    className: he($.icon, m.props.className)
  }) : m, U = (S) => {
    !E && x && x(S, k), C && C(S);
  }, P = (S) => {
    w && !E && x && x(S, k), R && R(S);
  };
  return /* @__PURE__ */ T.jsxs(w3, {
    focusRipple: !d,
    className: he($.root, s),
    ref: o,
    role: "tab",
    "aria-selected": E,
    disabled: c,
    onClick: U,
    onFocus: P,
    ownerState: M,
    tabIndex: E ? 0 : -1,
    ...D,
    children: [h === "top" || h === "start" ? /* @__PURE__ */ T.jsxs(v.Fragment, {
      children: [j, y]
    }) : /* @__PURE__ */ T.jsxs(v.Fragment, {
      children: [y, j]
    }), g]
  });
}), Ix = /* @__PURE__ */ v.createContext();
function M3(e) {
  return Ge("MuiTable", e);
}
_e("MuiTable", ["root", "stickyHeader"]);
const A3 = (e) => {
  const {
    classes: a,
    stickyHeader: o
  } = e;
  return qe({
    root: ["root", o && "stickyHeader"]
  }, M3, a);
}, O3 = de("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.stickyHeader && a.stickyHeader];
  }
})(Ve(({
  theme: e
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...e.typography.body2,
    padding: e.spacing(2),
    color: (e.vars || e).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
}))), Ob = "table", z3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTable"
  }), {
    className: s,
    component: c = Ob,
    padding: d = "normal",
    size: p = "medium",
    stickyHeader: m = !1,
    ...h
  } = i, g = {
    ...i,
    component: c,
    padding: d,
    size: p,
    stickyHeader: m
  }, y = A3(g), x = v.useMemo(() => ({
    padding: d,
    size: p,
    stickyHeader: m
  }), [d, p, m]);
  return /* @__PURE__ */ T.jsx(Ix.Provider, {
    value: x,
    children: /* @__PURE__ */ T.jsx(O3, {
      as: c,
      role: c === Ob ? null : "table",
      ref: o,
      className: he(y.root, s),
      ownerState: g,
      ...h
    })
  });
}), Ku = /* @__PURE__ */ v.createContext();
function D3(e) {
  return Ge("MuiTableBody", e);
}
_e("MuiTableBody", ["root"]);
const $3 = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, D3, a);
}, k3 = de("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  display: "table-row-group"
}), N3 = {
  variant: "body"
}, zb = "tbody", L3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTableBody"
  }), {
    className: s,
    component: c = zb,
    ...d
  } = i, p = {
    ...i,
    component: c
  }, m = $3(p);
  return /* @__PURE__ */ T.jsx(Ku.Provider, {
    value: N3,
    children: /* @__PURE__ */ T.jsx(k3, {
      className: he(m.root, s),
      as: c,
      ref: o,
      role: c === zb ? null : "rowgroup",
      ownerState: p,
      ...d
    })
  });
});
function j3(e) {
  return Ge("MuiTableCell", e);
}
const B3 = _e("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), _3 = (e) => {
  const {
    classes: a,
    variant: o,
    align: i,
    padding: s,
    size: c,
    stickyHeader: d
  } = e, p = {
    root: ["root", o, d && "stickyHeader", i !== "inherit" && `align${ue(i)}`, s !== "normal" && `padding${ue(s)}`, `size${ue(c)}`]
  };
  return qe(p, j3, a);
}, H3 = de("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, a[o.variant], a[`size${ue(o.size)}`], o.padding !== "normal" && a[`padding${ue(o.padding)}`], o.align !== "inherit" && a[`align${ue(o.align)}`], o.stickyHeader && a.stickyHeader];
  }
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Bi(xt(e.palette.divider, 1), 0.88) : ji(xt(e.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (e.vars || e).palette.text.primary,
      lineHeight: e.typography.pxToRem(24),
      fontWeight: e.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      lineHeight: e.typography.pxToRem(21),
      fontSize: e.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${B3.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (e.vars || e).palette.background.default
    }
  }]
}))), Db = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTableCell"
  }), {
    align: s = "inherit",
    className: c,
    component: d,
    padding: p,
    scope: m,
    size: h,
    sortDirection: g,
    variant: y,
    ...x
  } = i, C = v.useContext(Ix), R = v.useContext(Ku), E = R && R.variant === "head";
  let w;
  d ? w = d : w = E ? "th" : "td";
  let z = m;
  w === "td" ? z = void 0 : !z && E && (z = "col");
  const k = y || R && R.variant, O = {
    ...i,
    align: s,
    component: w,
    padding: p || (C && C.padding ? C.padding : "normal"),
    size: h || (C && C.size ? C.size : "medium"),
    sortDirection: g,
    stickyHeader: k === "head" && C && C.stickyHeader,
    variant: k
  }, D = _3(O);
  let M = null;
  return g && (M = g === "asc" ? "ascending" : "descending"), /* @__PURE__ */ T.jsx(H3, {
    as: w,
    ref: o,
    className: he(D.root, c),
    "aria-sort": M,
    scope: z,
    ownerState: O,
    ...x
  });
});
function U3(e) {
  return Ge("MuiTableContainer", e);
}
_e("MuiTableContainer", ["root"]);
const I3 = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, U3, a);
}, P3 = de("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  width: "100%",
  overflowX: "auto"
}), V3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTableContainer"
  }), {
    className: s,
    component: c = "div",
    ...d
  } = i, p = {
    ...i,
    component: c
  }, m = I3(p);
  return /* @__PURE__ */ T.jsx(P3, {
    ref: o,
    as: c,
    className: he(m.root, s),
    ownerState: p,
    ...d
  });
});
function G3(e) {
  return Ge("MuiTableHead", e);
}
_e("MuiTableHead", ["root"]);
const q3 = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, G3, a);
}, Y3 = de("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({
  display: "table-header-group"
}), F3 = {
  variant: "head"
}, $b = "thead", W3 = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTableHead"
  }), {
    className: s,
    component: c = $b,
    ...d
  } = i, p = {
    ...i,
    component: c
  }, m = q3(p);
  return /* @__PURE__ */ T.jsx(Ku.Provider, {
    value: F3,
    children: /* @__PURE__ */ T.jsx(Y3, {
      as: c,
      className: he(m.root, s),
      ref: o,
      role: c === $b ? null : "rowgroup",
      ownerState: p,
      ...d
    })
  });
}), K3 = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), X3 = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Q3(e) {
  return Ge("MuiTableRow", e);
}
const kb = _e("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), Z3 = (e) => {
  const {
    classes: a,
    selected: o,
    hover: i,
    head: s,
    footer: c
  } = e;
  return qe({
    root: ["root", o && "selected", i && "hover", s && "head", c && "footer"]
  }, Q3, a);
}, J3 = de("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.head && a.head, o.footer && a.footer];
  }
})(Ve(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${kb.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${kb.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : xt(e.palette.primary.main, e.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
    }
  }
}))), Nb = "tr", Lb = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTableRow"
  }), {
    className: s,
    component: c = Nb,
    hover: d = !1,
    selected: p = !1,
    ...m
  } = i, h = v.useContext(Ku), g = {
    ...i,
    component: c,
    hover: d,
    selected: p,
    head: h && h.variant === "head",
    footer: h && h.variant === "footer"
  }, y = Z3(g);
  return /* @__PURE__ */ T.jsx(J3, {
    as: c,
    ref: o,
    className: he(y.root, s),
    role: c === Nb ? null : "row",
    ownerState: g,
    ...m
  });
});
function eD(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function tD(e, a, o, i = {}, s = () => {
}) {
  const {
    ease: c = eD,
    duration: d = 300
    // standard
  } = i;
  let p = null;
  const m = a[e];
  let h = !1;
  const g = () => {
    h = !0;
  }, y = (x) => {
    if (h) {
      s(new Error("Animation cancelled"));
      return;
    }
    p === null && (p = x);
    const C = Math.min(1, (x - p) / d);
    if (a[e] = c(C) * (o - m) + m, C >= 1) {
      requestAnimationFrame(() => {
        s(null);
      });
      return;
    }
    requestAnimationFrame(y);
  };
  return m === o ? (s(new Error("Element already at target position")), g) : (requestAnimationFrame(y), g);
}
const nD = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function aD(e) {
  const {
    onChange: a,
    ...o
  } = e, i = v.useRef(), s = v.useRef(null), c = () => {
    i.current = s.current.offsetHeight - s.current.clientHeight;
  };
  return Xn(() => {
    const d = Rs(() => {
      const m = i.current;
      c(), m !== i.current && a(i.current);
    }), p = ua(s.current);
    return p.addEventListener("resize", d), () => {
      d.clear(), p.removeEventListener("resize", d);
    };
  }, [a]), v.useEffect(() => {
    c(), a(i.current);
  }, [a]), /* @__PURE__ */ T.jsx("div", {
    style: nD,
    ...o,
    ref: s
  });
}
function rD(e) {
  return Ge("MuiTabScrollButton", e);
}
const oD = _e("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), iD = (e) => {
  const {
    classes: a,
    orientation: o,
    disabled: i
  } = e;
  return qe({
    root: ["root", o, i && "disabled"]
  }, rD, a);
}, lD = de(so, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.root, o.orientation && a[o.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${oD.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), sD = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTabScrollButton"
  }), {
    className: s,
    slots: c = {},
    slotProps: d = {},
    direction: p,
    orientation: m,
    disabled: h,
    ...g
  } = i, y = Yi(), x = {
    isRtl: y,
    ...i
  }, C = iD(x), R = c.StartScrollButtonIcon ?? K3, E = c.EndScrollButtonIcon ?? X3, w = _i({
    elementType: R,
    externalSlotProps: d.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), z = _i({
    elementType: E,
    externalSlotProps: d.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ T.jsx(lD, {
    component: "div",
    className: he(C.root, s),
    ref: o,
    role: null,
    ownerState: x,
    tabIndex: null,
    ...g,
    style: {
      ...g.style,
      ...m === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${y ? -90 : 90}deg)`
      }
    },
    children: p === "left" ? /* @__PURE__ */ T.jsx(R, {
      ...w
    }) : /* @__PURE__ */ T.jsx(E, {
      ...z
    })
  });
});
function cD(e) {
  return Ge("MuiTabs", e);
}
const Ap = _e("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), jb = (e, a) => e === a ? e.firstChild : a && a.nextElementSibling ? a.nextElementSibling : e.firstChild, Bb = (e, a) => e === a ? e.lastChild : a && a.previousElementSibling ? a.previousElementSibling : e.lastChild, tu = (e, a, o) => {
  let i = !1, s = o(e, a);
  for (; s; ) {
    if (s === e.firstChild) {
      if (i)
        return;
      i = !0;
    }
    const c = s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || c)
      s = o(e, s);
    else {
      s.focus();
      return;
    }
  }
}, uD = (e) => {
  const {
    vertical: a,
    fixed: o,
    hideScrollbar: i,
    scrollableX: s,
    scrollableY: c,
    centered: d,
    scrollButtonsHideMobile: p,
    classes: m
  } = e;
  return qe({
    root: ["root", a && "vertical"],
    scroller: ["scroller", o && "fixed", i && "hideScrollbar", s && "scrollableX", c && "scrollableY"],
    list: ["list", "flexContainer", a && "flexContainerVertical", a && "vertical", d && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", p && "scrollButtonsHideMobile"],
    scrollableX: [s && "scrollableX"],
    hideScrollbar: [i && "hideScrollbar"]
  }, cD, m);
}, dD = de("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Ap.scrollButtons}`]: a.scrollButtons
    }, {
      [`& .${Ap.scrollButtons}`]: o.scrollButtonsHideMobile && a.scrollButtonsHideMobile
    }, a.root, o.vertical && a.vertical];
  }
})(Ve(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: a
    }) => a.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.scrollButtonsHideMobile,
    style: {
      [`& .${Ap.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), fD = de("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.scroller, o.fixed && a.fixed, o.hideScrollbar && a.hideScrollbar, o.scrollableX && a.scrollableX, o.scrollableY && a.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), pD = de("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, a) => {
    const {
      ownerState: o
    } = e;
    return [a.list, a.flexContainer, o.vertical && a.flexContainerVertical, o.centered && a.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), mD = de("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, a) => a.indicator
})(Ve(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: e.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: a
    }) => a.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), hD = de(aD)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), _b = {}, gD = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTabs"
  }), s = nr(), c = Yi(), {
    "aria-label": d,
    "aria-labelledby": p,
    action: m,
    centered: h = !1,
    children: g,
    className: y,
    component: x = "div",
    allowScrollButtonsMobile: C = !1,
    indicatorColor: R = "primary",
    onChange: E,
    orientation: w = "horizontal",
    ScrollButtonComponent: z,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: k = "auto",
    selectionFollowsFocus: O,
    slots: D = {},
    slotProps: M = {},
    TabIndicatorProps: $ = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: j = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: U = "primary",
    value: P,
    variant: S = "standard",
    visibleScrollbar: B = !1,
    ...H
  } = i, G = S === "scrollable", J = w === "vertical", F = J ? "scrollTop" : "scrollLeft", N = J ? "top" : "left", V = J ? "bottom" : "right", K = J ? "clientHeight" : "clientWidth", Y = J ? "height" : "width", pe = {
    ...i,
    component: x,
    allowScrollButtonsMobile: C,
    indicatorColor: R,
    orientation: w,
    vertical: J,
    scrollButtons: k,
    textColor: U,
    variant: S,
    visibleScrollbar: B,
    fixed: !G,
    hideScrollbar: G && !B,
    scrollableX: G && !J,
    scrollableY: G && J,
    centered: h && !G,
    scrollButtonsHideMobile: !C
  }, L = uD(pe), W = _i({
    elementType: D.StartScrollButtonIcon,
    externalSlotProps: M.startScrollButtonIcon,
    ownerState: pe
  }), re = _i({
    elementType: D.EndScrollButtonIcon,
    externalSlotProps: M.endScrollButtonIcon,
    ownerState: pe
  }), [te, fe] = v.useState(!1), [se, ge] = v.useState(_b), [ye, be] = v.useState(!1), [Te, De] = v.useState(!1), [Se, ct] = v.useState(!1), [Oe, ke] = v.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), vt = /* @__PURE__ */ new Map(), me = v.useRef(null), He = v.useRef(null), Me = {
    slots: D,
    slotProps: {
      indicator: $,
      scrollButton: j,
      ...M
    }
  }, We = () => {
    const ve = me.current;
    let Re;
    if (ve) {
      const ot = ve.getBoundingClientRect();
      Re = {
        clientWidth: ve.clientWidth,
        scrollLeft: ve.scrollLeft,
        scrollTop: ve.scrollTop,
        scrollWidth: ve.scrollWidth,
        top: ot.top,
        bottom: ot.bottom,
        left: ot.left,
        right: ot.right
      };
    }
    let nt;
    if (ve && P !== !1) {
      const ot = He.current.children;
      if (ot.length > 0) {
        const Ot = ot[vt.get(P)];
        nt = Ot ? Ot.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Re,
      tabMeta: nt
    };
  }, Fe = Ln(() => {
    const {
      tabsMeta: ve,
      tabMeta: Re
    } = We();
    let nt = 0, ot;
    J ? (ot = "top", Re && ve && (nt = Re.top - ve.top + ve.scrollTop)) : (ot = c ? "right" : "left", Re && ve && (nt = (c ? -1 : 1) * (Re[ot] - ve[ot] + ve.scrollLeft)));
    const Ot = {
      [ot]: nt,
      // May be wrong until the font is loaded.
      [Y]: Re ? Re[Y] : 0
    };
    if (typeof se[ot] != "number" || typeof se[Y] != "number")
      ge(Ot);
    else {
      const Cn = Math.abs(se[ot] - Ot[ot]), _n = Math.abs(se[Y] - Ot[Y]);
      (Cn >= 1 || _n >= 1) && ge(Ot);
    }
  }), Ce = (ve, {
    animation: Re = !0
  } = {}) => {
    Re ? tD(F, me.current, ve, {
      duration: s.transitions.duration.standard
    }) : me.current[F] = ve;
  }, At = (ve) => {
    let Re = me.current[F];
    J ? Re += ve : Re += ve * (c ? -1 : 1), Ce(Re);
  }, Ue = () => {
    const ve = me.current[K];
    let Re = 0;
    const nt = Array.from(He.current.children);
    for (let ot = 0; ot < nt.length; ot += 1) {
      const Ot = nt[ot];
      if (Re + Ot[K] > ve) {
        ot === 0 && (Re = ve);
        break;
      }
      Re += Ot[K];
    }
    return Re;
  }, Ft = () => {
    At(-1 * Ue());
  }, rn = () => {
    At(Ue());
  }, [Bt, {
    onChange: Je,
    ...Ke
  }] = Ze("scrollbar", {
    className: he(L.scrollableX, L.hideScrollbar),
    elementType: hD,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Me,
    ownerState: pe
  }), je = v.useCallback((ve) => {
    Je == null || Je(ve), ke({
      overflow: null,
      scrollbarWidth: ve
    });
  }, [Je]), [ze, bt] = Ze("scrollButtons", {
    className: he(L.scrollButtons, j.className),
    elementType: sD,
    externalForwardedProps: Me,
    ownerState: pe,
    additionalProps: {
      orientation: w,
      slots: {
        StartScrollButtonIcon: D.startScrollButtonIcon || D.StartScrollButtonIcon,
        EndScrollButtonIcon: D.endScrollButtonIcon || D.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: W,
        endScrollButtonIcon: re
      }
    }
  }), lt = () => {
    const ve = {};
    ve.scrollbarSizeListener = G ? /* @__PURE__ */ T.jsx(Bt, {
      ...Ke,
      onChange: je
    }) : null;
    const nt = G && (k === "auto" && (ye || Te) || k === !0);
    return ve.scrollButtonStart = nt ? /* @__PURE__ */ T.jsx(ze, {
      direction: c ? "right" : "left",
      onClick: Ft,
      disabled: !ye,
      ...bt
    }) : null, ve.scrollButtonEnd = nt ? /* @__PURE__ */ T.jsx(ze, {
      direction: c ? "left" : "right",
      onClick: rn,
      disabled: !Te,
      ...bt
    }) : null, ve;
  }, gt = Ln((ve) => {
    const {
      tabsMeta: Re,
      tabMeta: nt
    } = We();
    if (!(!nt || !Re)) {
      if (nt[N] < Re[N]) {
        const ot = Re[F] + (nt[N] - Re[N]);
        Ce(ot, {
          animation: ve
        });
      } else if (nt[V] > Re[V]) {
        const ot = Re[F] + (nt[V] - Re[V]);
        Ce(ot, {
          animation: ve
        });
      }
    }
  }), xe = Ln(() => {
    G && k !== !1 && ct(!Se);
  });
  v.useEffect(() => {
    const ve = Rs(() => {
      me.current && Fe();
    });
    let Re;
    const nt = (Cn) => {
      Cn.forEach((_n) => {
        _n.removedNodes.forEach((fa) => {
          Re == null || Re.unobserve(fa);
        }), _n.addedNodes.forEach((fa) => {
          Re == null || Re.observe(fa);
        });
      }), ve(), xe();
    }, ot = ua(me.current);
    ot.addEventListener("resize", ve);
    let Ot;
    return typeof ResizeObserver < "u" && (Re = new ResizeObserver(ve), Array.from(He.current.children).forEach((Cn) => {
      Re.observe(Cn);
    })), typeof MutationObserver < "u" && (Ot = new MutationObserver(nt), Ot.observe(He.current, {
      childList: !0
    })), () => {
      ve.clear(), ot.removeEventListener("resize", ve), Ot == null || Ot.disconnect(), Re == null || Re.disconnect();
    };
  }, [Fe, xe]), v.useEffect(() => {
    const ve = Array.from(He.current.children), Re = ve.length;
    if (typeof IntersectionObserver < "u" && Re > 0 && G && k !== !1) {
      const nt = ve[0], ot = ve[Re - 1], Ot = {
        root: me.current,
        threshold: 0.99
      }, Cn = (zt) => {
        be(!zt[0].isIntersecting);
      }, _n = new IntersectionObserver(Cn, Ot);
      _n.observe(nt);
      const fa = (zt) => {
        De(!zt[0].isIntersecting);
      }, Na = new IntersectionObserver(fa, Ot);
      return Na.observe(ot), () => {
        _n.disconnect(), Na.disconnect();
      };
    }
  }, [G, k, Se, g == null ? void 0 : g.length]), v.useEffect(() => {
    fe(!0);
  }, []), v.useEffect(() => {
    Fe();
  }), v.useEffect(() => {
    gt(_b !== se);
  }, [gt, se]), v.useImperativeHandle(m, () => ({
    updateIndicator: Fe,
    updateScrollButtons: xe
  }), [Fe, xe]);
  const [$e, _t] = Ze("indicator", {
    className: he(L.indicator, $.className),
    elementType: mD,
    externalForwardedProps: Me,
    ownerState: pe,
    additionalProps: {
      style: se
    }
  }), Qt = /* @__PURE__ */ T.jsx($e, {
    ..._t
  });
  let Bn = 0;
  const dn = v.Children.map(g, (ve) => {
    if (!/* @__PURE__ */ v.isValidElement(ve))
      return null;
    const Re = ve.props.value === void 0 ? Bn : ve.props.value;
    vt.set(Re, Bn);
    const nt = Re === P;
    return Bn += 1, /* @__PURE__ */ v.cloneElement(ve, {
      fullWidth: S === "fullWidth",
      indicator: nt && !te && Qt,
      selected: nt,
      selectionFollowsFocus: O,
      onChange: E,
      textColor: U,
      value: Re,
      ...Bn === 1 && P === !1 && !ve.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), Dn = (ve) => {
    if (ve.altKey || ve.shiftKey || ve.ctrlKey || ve.metaKey)
      return;
    const Re = He.current, nt = Qn(Re).activeElement;
    if (nt.getAttribute("role") !== "tab")
      return;
    let Ot = w === "horizontal" ? "ArrowLeft" : "ArrowUp", Cn = w === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (w === "horizontal" && c && (Ot = "ArrowRight", Cn = "ArrowLeft"), ve.key) {
      case Ot:
        ve.preventDefault(), tu(Re, nt, Bb);
        break;
      case Cn:
        ve.preventDefault(), tu(Re, nt, jb);
        break;
      case "Home":
        ve.preventDefault(), tu(Re, null, jb);
        break;
      case "End":
        ve.preventDefault(), tu(Re, null, Bb);
        break;
    }
  }, yn = lt(), [Sn, vn] = Ze("root", {
    ref: o,
    className: he(L.root, y),
    elementType: dD,
    externalForwardedProps: {
      ...Me,
      ...H,
      component: x
    },
    ownerState: pe
  }), [Un, Ia] = Ze("scroller", {
    ref: me,
    className: L.scroller,
    elementType: fD,
    externalForwardedProps: Me,
    ownerState: pe,
    additionalProps: {
      style: {
        overflow: Oe.overflow,
        [J ? `margin${c ? "Left" : "Right"}` : "marginBottom"]: B ? void 0 : -Oe.scrollbarWidth
      }
    }
  }), [Ie, on] = Ze("list", {
    ref: He,
    className: he(L.list, L.flexContainer),
    elementType: pD,
    externalForwardedProps: Me,
    ownerState: pe,
    getSlotProps: (ve) => ({
      ...ve,
      onKeyDown: (Re) => {
        var nt;
        Dn(Re), (nt = ve.onKeyDown) == null || nt.call(ve, Re);
      }
    })
  });
  return /* @__PURE__ */ T.jsxs(Sn, {
    ...vn,
    children: [yn.scrollButtonStart, yn.scrollbarSizeListener, /* @__PURE__ */ T.jsxs(Un, {
      ...Ia,
      children: [/* @__PURE__ */ T.jsx(Ie, {
        "aria-label": d,
        "aria-labelledby": p,
        "aria-orientation": w === "vertical" ? "vertical" : null,
        role: "tablist",
        ...on,
        children: dn
      }), te && Qt]
    }), yn.scrollButtonEnd]
  });
});
function yD(e) {
  return Ge("MuiTextField", e);
}
_e("MuiTextField", ["root"]);
const vD = {
  standard: Fm,
  filled: Ym,
  outlined: Km
}, bD = (e) => {
  const {
    classes: a
  } = e;
  return qe({
    root: ["root"]
  }, yD, a);
}, xD = de(Dx, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, a) => a.root
})({}), as = /* @__PURE__ */ v.forwardRef(function(a, o) {
  const i = Ye({
    props: a,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: c = !1,
    children: d,
    className: p,
    color: m = "primary",
    defaultValue: h,
    disabled: g = !1,
    error: y = !1,
    FormHelperTextProps: x,
    fullWidth: C = !1,
    helperText: R,
    id: E,
    InputLabelProps: w,
    inputProps: z,
    InputProps: k,
    inputRef: O,
    label: D,
    maxRows: M,
    minRows: $,
    multiline: j = !1,
    name: U,
    onBlur: P,
    onChange: S,
    onFocus: B,
    placeholder: H,
    required: G = !1,
    rows: J,
    select: F = !1,
    SelectProps: N,
    slots: V = {},
    slotProps: K = {},
    type: Y,
    value: pe,
    variant: L = "outlined",
    ...W
  } = i, re = {
    ...i,
    autoFocus: c,
    color: m,
    disabled: g,
    error: y,
    fullWidth: C,
    multiline: j,
    required: G,
    select: F,
    variant: L
  }, te = bD(re), fe = Uo(E), se = R && fe ? `${fe}-helper-text` : void 0, ge = D && fe ? `${fe}-label` : void 0, ye = vD[L], be = {
    slots: V,
    slotProps: {
      input: k,
      inputLabel: w,
      htmlInput: z,
      formHelperText: x,
      select: N,
      ...K
    }
  }, Te = {}, De = be.slotProps.inputLabel;
  L === "outlined" && (De && typeof De.shrink < "u" && (Te.notched = De.shrink), Te.label = D), F && ((!N || !N.native) && (Te.id = void 0), Te["aria-describedby"] = void 0);
  const [Se, ct] = Ze("root", {
    elementType: xD,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...be,
      ...W
    },
    ownerState: re,
    className: he(te.root, p),
    ref: o,
    additionalProps: {
      disabled: g,
      error: y,
      fullWidth: C,
      required: G,
      color: m,
      variant: L
    }
  }), [Oe, ke] = Ze("input", {
    elementType: ye,
    externalForwardedProps: be,
    additionalProps: Te,
    ownerState: re
  }), [vt, me] = Ze("inputLabel", {
    elementType: kx,
    externalForwardedProps: be,
    ownerState: re
  }), [He, Me] = Ze("htmlInput", {
    elementType: "input",
    externalForwardedProps: be,
    ownerState: re
  }), [We, Fe] = Ze("formHelperText", {
    elementType: V4,
    externalForwardedProps: be,
    ownerState: re
  }), [Ce, At] = Ze("select", {
    elementType: Qm,
    externalForwardedProps: be,
    ownerState: re
  }), Ue = /* @__PURE__ */ T.jsx(Oe, {
    "aria-describedby": se,
    autoComplete: s,
    autoFocus: c,
    defaultValue: h,
    fullWidth: C,
    multiline: j,
    name: U,
    rows: J,
    maxRows: M,
    minRows: $,
    type: Y,
    value: pe,
    id: fe,
    inputRef: O,
    onBlur: P,
    onChange: S,
    onFocus: B,
    placeholder: H,
    inputProps: Me,
    slots: {
      input: V.htmlInput ? He : void 0
    },
    ...ke
  });
  return /* @__PURE__ */ T.jsxs(Se, {
    ...ct,
    children: [D != null && D !== "" && /* @__PURE__ */ T.jsx(vt, {
      htmlFor: fe,
      id: ge,
      ...me,
      children: D
    }), F ? /* @__PURE__ */ T.jsx(Ce, {
      "aria-describedby": se,
      id: fe,
      labelId: ge,
      value: pe,
      input: Ue,
      ...At,
      children: d
    }) : Ue, R && /* @__PURE__ */ T.jsx(We, {
      id: se,
      ...Fe,
      children: R
    })]
  });
}), SD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), Hb = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
}), "FilterList"), CD = Yt([/* @__PURE__ */ T.jsx("path", {
  d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
}, "0"), /* @__PURE__ */ T.jsx("path", {
  d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
}, "1")], "DoubleArrow"), ED = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Ru() {
  return Ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, Ru.apply(null, arguments);
}
const TD = { default: { palette: { mode: "light" }, typography: {}, shape: { borderRadius: 12 } }, light: { components: { MuiTableRow: { styleOverrides: { head: { background: "#EEEEEE" } } } }, palette: { primary: { main: "#F05F40" }, secondary: { main: "#40f0bb" }, mode: "light", background: { default: "#F5F5F5", cardContainer: "#fafafa" }, customShadow: "0px 6px 9px 0px #00000014" }, typography: {}, shape: { borderRadius: 12 } }, dark: { components: { MuiTableRow: { styleOverrides: { head: { background: "#212121" } } }, MuiCard: { styleOverrides: { root: { backgroundColor: "#424242", backgroundImage: "none" } } }, MuiPaper: { styleOverrides: { root: { backgroundColor: "#424242", backgroundImage: "none" } } } }, palette: { primary: { main: "#F05F40" }, mode: "dark", background: { default: "#303030", paper: "#424242", cardContainer: "#424242" }, customShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)" }, typography: {}, shape: { borderRadius: 12 } }, lightsOut: { components: { MuiTableRow: { styleOverrides: { head: { background: "#212121" } } }, MuiCard: { styleOverrides: { root: { backgroundColor: "#000", backgroundImage: "none" } } }, MuiPaper: { styleOverrides: { root: { backgroundColor: "#000", backgroundImage: "none" } } } }, palette: { primary: { main: "#F05F40" }, mode: "dark", background: { default: "#000", paper: "#000", cardContainer: "#000" } }, shadows: Array(25).fill("0px 4px 12px #888888"), typography: {}, shape: { borderRadius: 12 } } };
let Op = null;
function Ub(e, a, o, i, s) {
  const c = document.getElementById("root");
  Op || (Op = hM.createRoot(c));
  const d = location.pathname.indexOf(a) < 0 ? "" : location.pathname.slice(0, location.pathname.indexOf(a));
  Op.render(Be.createElement(e, { baseURL: a, basename: d, searchData: o, UIOptions: i, deployedBackendURL: s }));
}
function RD(e, a, o) {
  window.onmessage = function(c) {
    if (c.data.type === "dataRefresh") {
      const d = c.data.searchData && c.data.searchData[0];
      Ub(e, a, d, c.data.UIOptions, o);
    }
  }, Ub(e, a, {}, {}, o);
  const i = new ResizeObserver((c) => {
    if (c.length > 0) {
      const d = c[0].target.clientHeight;
      window.parent.postMessage({ type: "resizeIframe", height: d }, "*");
    }
  }), s = document.getElementById("root");
  s && i.observe(s);
}
const wD = de(k4)(({ theme: e }) => ({ zIndex: "5", position: "fixed", bottom: 58, right: 10, opacity: 0.8, width: "48px", height: "48px", [e.breakpoints.up("lg")]: { bottom: 58, right: "calc(100% - 1140px)" } })), Ib = de("div")(({ theme: e }) => ({ display: "flex", justifyContent: "space-evenly", cursor: "pointer", position: "sticky", bottom: 0, backgroundColor: e.palette.background.default, zIndex: 1e3 }));
var MD = v.memo((e) => {
  var O;
  const { isMdUp: a } = e, [o, i] = v.useState(a), [s, c] = v.useState(!1);
  v.useEffect(() => {
    i(a);
  }, [a]);
  const { menu: d, componentFullWidth: p, fullHeight: m, applyBtnMdUp: h, applyBtnMdUpOnClick: g, applyBtnSmDown: y, applyBtnSmDownOnClick: x, filters: C, noOfFilters: R, preventAutoClose: E } = e.secondaryMenu, w = () => {
    i(!o), c(!s);
  }, z = (D) => {
    w(), D();
  }, k = () => {
    w();
  };
  return v.useEffect(() => {
    var D;
    if ((D = e.secondaryMenu) != null && D.menu && document.getElementById("secondaryMenu")) {
      const M = document.getElementById("secondaryMenu").clientHeight > window.innerHeight;
      e.setHeightOverflow(M);
    }
  }, [(O = e.secondaryMenu) == null ? void 0 : O.menu]), Be.createElement(Be.Fragment, null, !o && Be.createElement(wD, { onClick: w, color: "primary", className: p ? "fabButtonClose" : "fabButton" }, C ? R ? Be.createElement(N5, { badgeContent: R, color: "primary" }, Be.createElement(Hb, null)) : Be.createElement(Hb, null) : Be.createElement(SD, null)), a && o && Be.createElement(hb, { variant: "persistent", anchor: "right", open: o, PaperProps: { elevation: 1, id: "secondaryMenu", sx: { boxSizing: "border-box", paddingTop: "4px", width: o ? "100%" : 0, position: "static", height: m ? "inherit" : "auto" } } }, d, h && g ? Be.createElement(Ib, null, Be.createElement(jo, { variant: "outlined", sx: { width: "50%" }, color: "primary", onClick: k }, "Close"), Be.createElement(jo, { variant: "contained", sx: { width: "50%" }, color: "primary", onClick: () => z(g) }, "Apply")) : Be.createElement(rt, { sx: { display: "flex", padding: "16px", cursor: "pointer" }, onClick: w }, Be.createElement(Le, { variant: "caption" }, "Hide Menu"), Be.createElement(CD, { sx: { color: "grey", width: 16, height: 20 } }))), !a && Be.createElement(hb, { anchor: "right", open: s, onClose: w, PaperProps: { sx: { width: "80%" } } }, Be.createElement("div", { tabIndex: 0, role: "button", onClick: y && x || E ? void 0 : w, onKeyDown: y && x || E ? void 0 : w }, E && Be.createElement(rt, { sx: { display: "flex", justifyContent: "flex-start", padding: "10px" } }, Be.createElement(_o, { onClick: w, edge: "end", "aria-label": "close", size: "large" }, Be.createElement(ED, null))), d, y && x && Be.createElement(Ib, null, Be.createElement(jo, { variant: "outlined", color: "primary", style: { width: "50%" }, onClick: k }, "Close"), Be.createElement(jo, { variant: "contained", color: "primary", style: { width: "50%" }, onClick: () => z(x) }, "Apply")))));
});
const AD = ({ secondaryMenuProps: e, isMdUp: a }) => {
  const [o, i] = v.useState(!1), [s, c] = v.useState({ scrollPos: 0, top: 0 }), d = v.useRef(null);
  return v.useEffect(() => {
    const p = () => {
      var g;
      const m = (g = d == null ? void 0 : d.current) == null ? void 0 : g.offsetHeight, h = window.innerHeight;
      c((y) => {
        const x = y.scrollPos - window.scrollY;
        let C = y.top + x;
        return C > 0 && (C = 0), C < h - m && (C = h - m), { top: C, scrollPos: window.scrollY };
      });
    };
    return window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), e && e !== "" && e.menu !== "" ? Be.createElement("div", { ref: d, style: { position: "sticky", top: 0, bottom: "auto", display: "flex", flexDirection: "column", top: o ? s == null ? void 0 : s.top : 0, width: a ? "240px" : 0, height: "100%" } }, Be.createElement(MD, { setHeightOverflow: i, secondaryMenu: e, isMdUp: a })) : null;
}, Pb = (e) => ({ MuiCard: { styleOverrides: { root: ({ theme: a }) => {
  var o, i;
  return { backgroundColor: a.palette.mode === "dark" ? ((i = (o = e.palette) == null ? void 0 : o.background) == null ? void 0 : i.cardContainer) || "#424242" : void 0, backgroundImage: "none" };
} } }, MuiPaper: { styleOverrides: { root: ({ theme: a }) => {
  var o, i;
  return { backgroundColor: a.palette.mode === "dark" ? ((i = (o = e.palette) == null ? void 0 : o.background) == null ? void 0 : i.paper) || "#424242" : void 0, backgroundImage: "none" };
} } } });
class OD extends v.Component {
  constructor(a) {
    super(a), this.state = { themeName: a.themeName || "light" }, this.themeSource = a.theme || TD;
    const o = this.themeSource[this.state.themeName];
    this.theme = us({ ...M0(o), components: { ...Pb(o) } });
  }
  componentDidUpdate(a) {
    if (this.props.themeName !== a.themeName) {
      const o = this.themeSource[this.props.themeName];
      this.theme = us({ ...M0(o), components: { ...Pb(o) } }), this.setState({ themeName: this.props.themeName });
    }
  }
  render() {
    return Be.createElement(LT, { injectFirst: !0 }, Be.createElement(cM, { theme: this.theme }, this.props.children));
  }
}
const Vb = (e) => {
  var O, D;
  const a = v.useRef(!1), o = s1(), i = tr(), s = nr(), c = sz(s.breakpoints.up("md")), [d, p] = v.useState(null), { format: m, UIOptions: h, searchData: g, baseURL: y = "", basename: x = "" } = e, C = m === "fullscreen", R = x + y, { componentStyles: E, ...w } = h || {};
  let z = { setWebsearchHeader: (M) => {
    window.parent.postMessage({ type: "setWebsearchHeader", header: M }, "*");
  }, secondaryMenu: (M) => {
    p(M);
  }, searchQuery: (M) => {
    window.parent.postMessage({ type: "searchQuery", query: M }, "*");
  }, switchFullScreen: (M = !0, $ = !1) => {
    window.parent.postMessage({ type: "switchFullScreen", fullScreen: M, navigatedViaRoute: $ }, "*");
  }, componentLoaded: () => {
    window.parent.postMessage({ type: "componentLoaded" });
  }, loadAiGeneratedResponse: (M) => new Promise(($, j) => {
    const U = Date.now();
    window.addEventListener("message", function P(S) {
      var B, H;
      ((B = S.data) == null ? void 0 : B.type) === "loadAiGeneratedResponseResult" && ((H = S.data) == null ? void 0 : H.requestId) === U && (window.removeEventListener("message", P), S.data.error ? j(new Error(S.data.error)) : $(S.data.response));
    }), window.parent.postMessage({ type: "loadAiGeneratedResponse", payload: M, requestId: U }, "*");
  }), unload: (M = "") => {
    window.parent.postMessage({ type: "unload", message: M });
  } };
  v.useEffect(() => {
    if (!C) return;
    const M = ($) => {
      $.key !== "/" && $.code !== "Slash" || window.parent.postMessage({ type: "searchShortcutPressed", event: { key: $.key, code: $.code } }, "*");
    };
    return document.addEventListener("keydown", M), () => {
      document.removeEventListener("keydown", M);
    };
  }, [C]), v.useEffect(() => {
    if (e.searchData && e.searchData.componentPath) {
      const M = e.searchData.componentPath, $ = M.startsWith(R) ? M.substring(R.length) : M;
      o($, { replace: !0 });
    }
  }, [(O = e == null ? void 0 : e.searchData) == null ? void 0 : O.componentPath]), v.useEffect(() => {
    const M = R + i.pathname + i.search;
    i.pathname, i.search, a.current ? M && (!e.searchData || !e.searchData.componentPath || e.searchData && e.searchData.componentPath && M !== e.searchData.componentPath) && window.parent.postMessage({ type: "updateComponentPath", componentPath: M }, "*") : a.current = !0;
  }, [i == null ? void 0 : i.pathname, i == null ? void 0 : i.search]);
  const k = g && typeof g == "object" && "componentPath" in g ? (({ componentPath: M, ...$ }) => Object.keys($).length > 0 ? $ : {})(g) : g;
  return Be.createElement("div", { style: { display: "flex", position: "relative", flexDirection: "row", width: "100%" } }, Be.createElement("div", { style: { width: c && C && d && d.menu !== "" ? "calc(100% - 400px)" : "100%", maxWidth: c && C && d && d.menu !== "" ? "966px" : "1160px", margin: c && C && ((D = h == null ? void 0 : h.componentStyles) == null ? void 0 : D.margin) || "" } }, Be.createElement(e.comp, Ru({}, e, { UIOptions: w, searchData: k, messageHandlers: z }))), C ? ((M, $) => Be.createElement(AD, { secondaryMenuProps: M, isMdUp: $ }))(d, c) : null);
}, zD = (e) => {
  const a = (o) => {
    let { quickPanel: i, basename: s, searchData: c, UIOptions: d, ...p } = o ? { ...o } : {};
    i = i || !0, s = s || "", p.search = p.search || ((g) => console.log("New query = ", g));
    const m = c && (typeof c == "object" || Array.isArray(c) && c.length > 0);
    let h = !0;
    try {
      h = window.self !== window.top;
    } catch {
      h = !0;
    }
    return Be.createElement(v.Fragment, null, m || d && d.sandbox || !h ? o.match ? Be.createElement(Vb, o) : Be.createElement(wE, { basename: s + o.baseURL }, Be.createElement(OD, { themeName: d && d.themeName, theme: d && d.theme }, Be.createElement(nE, null, Be.createElement(f1, { path: "*", element: Be.createElement(Vb, Ru({}, o, { comp: e, quickPanel: i, format: d.format })) })))) : Be.createElement(Be.Fragment, null), !m && d && d.sandbox ? Be.createElement("div", { style: { position: "fixed", top: 0, width: "100%", display: "flex", justifyContent: "center", backgroundColor: "red", color: "white" } }, Be.createElement("h6", { style: { margin: "5px" } }, " No search data received. Component will not be loaded... ")) : Be.createElement(Be.Fragment, null));
  };
  return a.initHD = RD, a;
};
(function(e, a) {
  a === void 0 && (a = {});
  var o = a.insertAt;
  if (typeof document < "u") {
    var i = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
  }
})(`/* placeholder animations */
.imgComponentStyles_placeholder__GXJke {
    margin: 0 auto;
    width: 100%;
    height: 18px;
    border-radius: 8px;
    background-color: #eee;
}

@keyframes imgComponentStyles_placeHolderShimmer__5-fnD {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.imgComponentStyles_animated-background__vGXc6 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: imgComponentStyles_placeHolderShimmer__5-fnD;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 15%, #b2b2b2 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    border-radius: 20px;
    position: relative;
}

/* blinking dot */
@keyframes imgComponentStyles_up-right__Y-xzl {
    0% {
        transform: scale(1);
        opacity: .25
    }

    50% {
        transform: scale (1, 5);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .25;
    }
}

.imgComponentStyles_border__Lvjsc {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: .25;
}

.imgComponentStyles_dot-animation__T9Onq {
    background-color: white;
    position: relative;
    top: -12px;
    left: 30px;
    -webkit-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -moz-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -o-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
}`);
const nu = {};
let au = null;
async function DD() {
  if (au)
    return au;
  try {
    const e = await fetch("https://date.nager.at/api/v4/AvailableCountries");
    if (!e.ok)
      throw new Error(`Failed to fetch countries: status ${e.status}`);
    return au = await e.json() || [], au;
  } catch (e) {
    return console.error("Error fetching available countries:", e), [
      { key: "US", value: "United States" },
      { key: "GB", value: "United Kingdom" },
      { key: "CA", value: "Canada" },
      { key: "JP", value: "Japan" },
      { key: "DE", value: "Germany" },
      { key: "IN", value: "India" },
      { key: "CN", value: "China" },
      { key: "AU", value: "Australia" },
      { key: "FR", value: "France" },
      { key: "BR", value: "Brazil" },
      { key: "IT", value: "Italy" },
      { key: "ES", value: "Spain" },
      { key: "RU", value: "Russia" },
      { key: "ZA", value: "South Africa" },
      { key: "NZ", value: "New Zealand" }
    ];
  }
}
async function Jp(e, a) {
  if (!e || !a) return [];
  const o = e.trim().toUpperCase(), i = `${o}-${a}`;
  if (nu[i])
    return nu[i];
  try {
    const s = `https://date.nager.at/api/v4/Holidays/${o}/${a}`, c = await fetch(s);
    if (c.status === 404)
      return nu[i] = [], [];
    if (!c.ok)
      throw new Error(`Nager API returned status ${c.status}`);
    const d = await c.json(), p = Array.isArray(d) ? d : [];
    return nu[i] = p, p;
  } catch (s) {
    return console.error(`Error fetching holidays for ${o} in ${a}:`, s), [];
  }
}
const Gb = {
  "united states": "US",
  "united states of america": "US",
  usa: "US",
  us: "US",
  "united kingdom": "GB",
  uk: "GB",
  "great britain": "GB",
  england: "GB",
  gb: "GB",
  scotland: "GB",
  wales: "GB",
  "northern ireland": "GB",
  canada: "CA",
  ca: "CA",
  japan: "JP",
  jp: "JP",
  germany: "DE",
  de: "DE",
  india: "IN",
  in: "IN",
  china: "CN",
  cn: "CN",
  australia: "AU",
  au: "AU",
  france: "FR",
  fr: "FR",
  brazil: "BR",
  br: "BR",
  italy: "IT",
  it: "IT",
  spain: "ES",
  es: "ES",
  russia: "RU",
  ru: "RU",
  "south africa": "ZA",
  za: "ZA",
  "new zealand": "NZ",
  nz: "NZ",
  mexico: "MX",
  mx: "MX",
  netherlands: "NL",
  nl: "NL",
  switzerland: "CH",
  ch: "CH",
  sweden: "SE",
  se: "SE",
  norway: "NO",
  no: "NO",
  finland: "FI",
  fi: "FI",
  denmark: "DK",
  dk: "DK",
  ireland: "IE",
  ie: "IE",
  belgium: "BE",
  be: "BE",
  austria: "AT",
  at: "AT",
  poland: "PL",
  pl: "PL",
  portugal: "PT",
  pt: "PT",
  singapore: "SG",
  sg: "SG",
  "hong kong": "HK",
  hk: "HK",
  "south korea": "KR",
  korea: "KR",
  kr: "KR"
};
function $D(e, a = []) {
  if (!e) return null;
  const o = e.trim().toLowerCase();
  if (Gb[o]) {
    const d = Gb[o], p = a.find((m) => m.key.toUpperCase() === d.toUpperCase());
    return {
      code: d,
      name: p ? p.value : d
    };
  }
  const i = a.find((d) => d.key.toLowerCase() === o);
  if (i)
    return {
      code: i.key.toUpperCase(),
      name: i.value
    };
  const s = a.find((d) => d.value.toLowerCase() === o);
  if (s)
    return {
      code: s.key.toUpperCase(),
      name: s.value
    };
  if (o.length === 2)
    return {
      code: o.toUpperCase(),
      name: o.toUpperCase()
    };
  const c = a.find((d) => d.value.toLowerCase().includes(o));
  return c ? {
    code: c.key.toUpperCase(),
    name: c.value
  } : null;
}
function kD(e, a = []) {
  var d, p, m, h, g, y;
  const o = [];
  e && e.entities && Array.isArray(e.entities) && e.entities.filter(
    (C) => C.collectionType === "HD_LOCATION" || C.entityType === "HD_LOCATION" || C.wgName === "HD_LOCATION"
  ).forEach((C) => {
    var w, z, k, O, D, M, $;
    let R = ((z = (w = C.entityInfo) == null ? void 0 : w.geo) == null ? void 0 : z.countryCode) || ((k = C.entityInfo) == null ? void 0 : k.countryCode) || ((D = (O = C.entityInfo) == null ? void 0 : O.geo) == null ? void 0 : D.country), E = (($ = (M = C.entityInfo) == null ? void 0 : M.geo) == null ? void 0 : $.countryName) || C.word || C.primaryText;
    if (R && R.toUpperCase() === "UK" && (R = "GB"), R) {
      const j = a.find((U) => U.key.toUpperCase() === R.toUpperCase());
      o.push({
        code: R.toUpperCase(),
        name: j ? j.value : E || R
      });
    } else {
      const j = $D(C.word || C.primaryText, a);
      j && o.push(j);
    }
  });
  const i = /* @__PURE__ */ new Set(), s = o.filter((x) => {
    const C = x.code.toUpperCase();
    return i.has(C) ? !1 : (i.add(C), !0);
  });
  let c = s[0] || null;
  if (!c && e) {
    const x = ((m = (p = (d = e.userLocation) == null ? void 0 : d.position) == null ? void 0 : p.coords) == null ? void 0 : m.countryCode) || ((h = e.userLocation) == null ? void 0 : h.countryCode) || ((y = (g = e.userLocation) == null ? void 0 : g.position) == null ? void 0 : y.countryCode);
    if (x) {
      const C = x.toUpperCase() === "UK" ? "GB" : x.toUpperCase(), R = a.find((E) => E.key.toUpperCase() === C);
      c = {
        code: C,
        name: R ? R.value : C
      }, s.push(c);
    }
  }
  return c || (c = { code: "US", name: "United States" }, s.push(c)), {
    primaryCountry: c,
    allCountries: s
  };
}
const Mi = {
  january: 0,
  jan: 0,
  february: 1,
  feb: 1,
  march: 2,
  mar: 2,
  april: 3,
  apr: 3,
  may: 4,
  june: 5,
  jun: 5,
  july: 6,
  jul: 6,
  august: 7,
  aug: 7,
  september: 8,
  sep: 8,
  sept: 8,
  october: 9,
  oct: 9,
  november: 10,
  nov: 10,
  december: 11,
  dec: 11
};
function ND(e) {
  if (!e)
    return {
      year: 2026,
      month: 7,
      date: 24,
      relativeDateStr: "2026-08-24",
      intent: "CHECK_DATE"
    };
  const a = e.toLowerCase().trim(), o = new Date(2026, 7, 24);
  let i = o.getFullYear(), s = null, c = null, d = "LIST_YEAR", p = null;
  const m = a.match(/\b(20\d{2})\b/);
  m ? i = parseInt(m[1], 10) : a.includes("next year") ? i = o.getFullYear() + 1 : a.includes("last year") ? i = o.getFullYear() - 1 : a.includes("this year") && (i = o.getFullYear());
  let h = null;
  for (const g of Object.keys(Mi))
    if (new RegExp(`\\b${g}\\b`, "i").test(a)) {
      h = g;
      break;
    }
  if (h !== null)
    s = Mi[h], d = "LIST_MONTH";
  else if (a.includes("next month")) {
    const g = new Date(o.getFullYear(), o.getMonth() + 1, 1);
    s = g.getMonth(), m || (i = g.getFullYear()), d = "LIST_MONTH";
  } else if (a.includes("last month")) {
    const g = new Date(o.getFullYear(), o.getMonth() - 1, 1);
    s = g.getMonth(), m || (i = g.getFullYear()), d = "LIST_MONTH";
  } else a.includes("this month") && (s = o.getMonth(), d = "LIST_MONTH");
  if (a.includes("today"))
    i = o.getFullYear(), s = o.getMonth(), c = o.getDate(), d = "CHECK_DATE";
  else if (a.includes("tomorrow")) {
    const g = new Date(o.getFullYear(), o.getMonth(), o.getDate() + 1);
    i = g.getFullYear(), s = g.getMonth(), c = g.getDate(), d = "CHECK_DATE";
  } else if (a.includes("yesterday")) {
    const g = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 1);
    i = g.getFullYear(), s = g.getMonth(), c = g.getDate(), d = "CHECK_DATE";
  } else {
    const g = a.match(new RegExp(`\\b(${Object.keys(Mi).join("|")})\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b`));
    if (g)
      s = Mi[g[1]], c = parseInt(g[2], 10), d = "CHECK_DATE";
    else {
      const y = a.match(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(?:of\\s+)?(${Object.keys(Mi).join("|")})\\b`));
      if (y)
        s = Mi[y[2]], c = parseInt(y[1], 10), d = "CHECK_DATE";
      else {
        const x = a.match(/\b(\d{1,2})[/-](\d{1,2})\b/);
        if (x) {
          const C = parseInt(x[1], 10), R = parseInt(x[2], 10);
          C <= 12 && R <= 31 ? (s = C - 1, c = R, d = "CHECK_DATE") : C <= 31 && R <= 12 && (s = R - 1, c = C, d = "CHECK_DATE");
        }
      }
    }
  }
  if (d === "CHECK_DATE" && s !== null && c !== null) {
    const g = String(s + 1).padStart(2, "0"), y = String(c).padStart(2, "0");
    p = `${i}-${g}-${y}`;
  }
  return {
    year: i,
    month: s,
    date: c,
    relativeDateStr: p,
    intent: d
  };
}
function LD(e) {
  var x, C;
  const o = `DTSTART;VALUE=DATE:${e.date.replace(/-/g, "")}`, i = /* @__PURE__ */ new Date(e.date + "T00:00:00"), s = new Date(i.getTime() + 1440 * 60 * 1e3), c = s.getFullYear(), d = String(s.getMonth() + 1).padStart(2, "0"), p = String(s.getDate()).padStart(2, "0"), m = `DTEND;VALUE=DATE:${c}${d}${p}`, h = `${e.date}-${e.name.replace(/\s+/g, "-")}-${e.countryCode}@hyperdart-holidaycalendar`, g = e.name, y = e.localName && e.localName !== e.name ? `Local Name: ${e.localName}\\nType: ${(x = e.types) == null ? void 0 : x.join(", ")}` : `Type: ${(C = e.types) == null ? void 0 : C.join(", ")}`;
  return [
    "BEGIN:VEVENT",
    `UID:${h}`,
    o,
    m,
    `SUMMARY:${g}`,
    `DESCRIPTION:${y}`,
    "STATUS:CONFIRMED",
    "TRANSP:TRANSPARENT",
    "END:VEVENT"
  ].join(`\r
`);
}
function qb(e, a = "holidays.ics") {
  const o = Array.isArray(e) ? e : [e], i = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//hyperDart//Holiday Calendar Component//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];
  o.forEach((m) => {
    i.push(LD(m));
  }), i.push("END:VCALENDAR");
  const s = i.join(`\r
`), c = new Blob([s], { type: "text/calendar;charset=utf-8" }), d = URL.createObjectURL(c), p = document.createElement("a");
  p.href = d, p.setAttribute("download", a), document.body.appendChild(p), p.click(), document.body.removeChild(p), URL.revokeObjectURL(d);
}
function jD({ countries: e, selectedCountry: a, onCountryChange: o }) {
  const i = e.find((s) => s.key.toUpperCase() === a.code.toUpperCase()) || null;
  return /* @__PURE__ */ T.jsx(rt, { sx: { minWidth: 220, mx: 1, my: 1 }, children: /* @__PURE__ */ T.jsx(
    C5,
    {
      size: "small",
      options: e,
      getOptionLabel: (s) => s.value || s.key,
      value: i,
      onChange: (s, c) => {
        c && o({
          code: c.key,
          name: c.value
        });
      },
      renderOption: (s, c) => {
        const { key: d, ...p } = s, m = c.key.toUpperCase().replace(
          /./g,
          (h) => String.fromCodePoint(h.charCodeAt(0) + 127397)
        );
        return /* @__PURE__ */ T.jsxs(rt, { component: "li", sx: { fontSize: 14, gap: 1 }, ...p, children: [
          /* @__PURE__ */ T.jsx("span", { style: { fontSize: "1.2rem" }, children: m }),
          c.value,
          " (",
          c.key,
          ")"
        ] }, c.key);
      },
      renderInput: (s) => /* @__PURE__ */ T.jsx(
        as,
        {
          ...s,
          label: "Select Country",
          variant: "outlined",
          placeholder: "Search country...",
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              backgroundColor: "background.paper",
              "&:hover fieldset": {
                borderColor: "primary.main"
              }
            }
          }
        }
      )
    }
  ) });
}
const Px = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
}), "Download");
function Vx({ holiday: e, onExportICS: a }) {
  const o = /* @__PURE__ */ new Date(e.date + "T00:00:00"), i = o.toLocaleDateString(void 0, { month: "short" }).toUpperCase(), s = o.getDate(), c = o.toLocaleDateString(void 0, { weekday: "short" }), d = (p) => {
    if (!p || p.length === 0) return null;
    const m = p[0].toLowerCase();
    let h = "default";
    return m.includes("public") || m.includes("national") ? h = "success" : m.includes("bank") || m.includes("federal") ? h = "secondary" : m.includes("school") ? h = "warning" : (m.includes("observance") || m.includes("optional")) && (h = "info"), /* @__PURE__ */ T.jsx(
      ki,
      {
        label: p[0],
        color: h,
        size: "small",
        sx: {
          borderRadius: "6px",
          fontWeight: 600,
          textTransform: "capitalize",
          fontSize: "0.75rem",
          height: 20
        }
      }
    );
  };
  return /* @__PURE__ */ T.jsxs(
    Ni,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        p: 2,
        mb: 1.5,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        background: "background.paper",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          borderColor: "primary.light"
        }
      },
      children: [
        /* @__PURE__ */ T.jsxs(
          rt,
          {
            sx: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "primary.light",
              color: "primary.contrastText",
              borderRadius: 2,
              width: 56,
              height: 56,
              mr: 2,
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { fontWeight: 800, fontSize: "0.65rem", lineHeight: 1 }, children: i }),
              /* @__PURE__ */ T.jsx(Le, { variant: "h6", sx: { fontWeight: 800, lineHeight: 1.1 }, children: s }),
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { fontSize: "0.6rem", opacity: 0.8, textTransform: "uppercase" }, children: c })
            ]
          }
        ),
        /* @__PURE__ */ T.jsxs(rt, { sx: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ T.jsx(Le, { variant: "subtitle1", sx: { fontWeight: 600, noWrap: !0, textOverflow: "ellipsis", overflow: "hidden" }, children: e.name }),
          e.localName && e.localName !== e.name && /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "text.secondary", display: "block", noWrap: !0, textOverflow: "ellipsis", overflow: "hidden" }, children: e.localName }),
          /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1, alignItems: "center" }, children: [
            d(e.types),
            e.counties && e.counties.length > 0 && /* @__PURE__ */ T.jsx(Zp, { title: `Applies to states/counties: ${e.counties.join(", ")}`, children: /* @__PURE__ */ T.jsx(
              ki,
              {
                label: `States: ${e.counties.join(", ")}`,
                size: "small",
                variant: "outlined",
                sx: {
                  borderRadius: "6px",
                  fontSize: "0.7rem",
                  height: 20,
                  maxWidth: 180
                }
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ T.jsx(rt, { sx: { ml: 1, display: "flex", gap: 0.5 }, children: /* @__PURE__ */ T.jsx(Zp, { title: "Add to Calendar (ICS)", children: /* @__PURE__ */ T.jsx(
          _o,
          {
            size: "small",
            onClick: () => a(e),
            sx: { color: "text.secondary", "&:hover": { color: "primary.main" } },
            children: /* @__PURE__ */ T.jsx(Px, { fontSize: "small" })
          }
        ) }) })
      ]
    }
  );
}
function BD({ holidays: e, onExportICS: a, onExportAllICS: o }) {
  const [i, s] = v.useState(""), [c, d] = v.useState("ALL"), p = ["ALL"];
  e.forEach((g) => {
    g.counties && Array.isArray(g.counties) && g.counties.forEach((y) => {
      p.includes(y) || p.push(y);
    });
  }), p.sort();
  const m = e.filter((g) => {
    const y = g.name.toLowerCase().includes(i.toLowerCase()) || g.localName && g.localName.toLowerCase().includes(i.toLowerCase()), x = c === "ALL" || g.counties && g.counties.includes(c);
    return y && x;
  }), h = {};
  return m.forEach((g) => {
    const x = (/* @__PURE__ */ new Date(g.date + "T00:00:00")).toLocaleDateString(void 0, { month: "long", year: "numeric" });
    h[x] || (h[x] = []), h[x].push(g);
  }), /* @__PURE__ */ T.jsxs(rt, { children: [
    /* @__PURE__ */ T.jsxs(
      rt,
      {
        sx: {
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", gap: 2, width: { xs: "100%", sm: "auto" }, flex: 1 }, children: [
            /* @__PURE__ */ T.jsx(
              as,
              {
                size: "small",
                placeholder: "Search holidays...",
                value: i,
                onChange: (g) => s(g.target.value),
                sx: { flex: 1, maxWith: 300, "& .MuiOutlinedInput-root": { borderRadius: "24px" } }
              }
            ),
            p.length > 1 && /* @__PURE__ */ T.jsxs(Dx, { size: "small", sx: { minWidth: 150 }, children: [
              /* @__PURE__ */ T.jsx(kx, { id: "subdivision-select-label", children: "Subdivision" }),
              /* @__PURE__ */ T.jsx(
                Qm,
                {
                  labelId: "subdivision-select-label",
                  value: c,
                  label: "Subdivision",
                  onChange: (g) => d(g.target.value),
                  sx: { borderRadius: "24px" },
                  children: p.map((g) => /* @__PURE__ */ T.jsx(Kz, { value: g, children: g === "ALL" ? "All Regions" : g }, g))
                }
              )
            ] })
          ] }),
          m.length > 0 && /* @__PURE__ */ T.jsxs(
            jo,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ T.jsx(Px, {}),
              onClick: () => o(m),
              sx: { borderRadius: "24px", textTransform: "none", fontWeight: 600, flexShrink: 0 },
              children: [
                "Export All (",
                m.length,
                ")"
              ]
            }
          )
        ]
      }
    ),
    Object.keys(h).length === 0 ? /* @__PURE__ */ T.jsx(rt, { sx: { textAlign: "center", py: 6, opacity: 0.5 }, children: /* @__PURE__ */ T.jsx(Le, { variant: "body1", children: "No holidays match your criteria." }) }) : Object.keys(h).map((g) => /* @__PURE__ */ T.jsxs(rt, { sx: { mb: 4 }, children: [
      /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontWeight: 700, color: "primary.main", mb: 1.5, letterSpacing: 0.5 }, children: g }),
      /* @__PURE__ */ T.jsx(Eu, { sx: { mb: 2 } }),
      h[g].map((y, x) => /* @__PURE__ */ T.jsx(
        Vx,
        {
          holiday: y,
          onExportICS: a
        },
        `${y.date}-${y.name}-${x}`
      ))
    ] }, g))
  ] });
}
const _D = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
}), "ArrowBackIosNew"), HD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
}), "ArrowForwardIos"), UD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function ID({ year: e, initialMonth: a, holidays: o, onExportICS: i }) {
  const [s, c] = v.useState(a !== null ? a : (/* @__PURE__ */ new Date()).getMonth()), [d, p] = v.useState(e), [m, h] = v.useState([]), [g, y] = v.useState(""), x = (M, $) => new Date(M, $ + 1, 0).getDate(), C = (M, $) => new Date(M, $, 1).getDay(), R = x(d, s), E = C(d, s), w = () => {
    s === 0 ? (c(11), p((M) => M - 1)) : c((M) => M - 1), h([]);
  }, z = () => {
    s === 11 ? (c(0), p((M) => M + 1)) : c((M) => M + 1), h([]);
  }, k = [];
  for (let M = 0; M < E; M++)
    k.push({ day: null, dateStr: null, holidays: [] });
  for (let M = 1; M <= R; M++) {
    const $ = String(s + 1).padStart(2, "0"), j = String(M).padStart(2, "0"), U = `${d}-${$}-${j}`, P = o.filter((S) => S.date === U);
    k.push({
      day: M,
      dateStr: U,
      holidays: P
    });
  }
  const O = new Date(d, s, 1).toLocaleDateString(void 0, {
    month: "long",
    year: "numeric"
  }), D = (M) => {
    if (!M.day || M.holidays.length === 0) {
      h([]);
      return;
    }
    h(M.holidays), y((/* @__PURE__ */ new Date(M.dateStr + "T00:00:00")).toLocaleDateString(void 0, {
      weekday: "long",
      month: "long",
      day: "numeric"
    }));
  };
  return /* @__PURE__ */ T.jsxs(rt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }, children: [
      /* @__PURE__ */ T.jsx(_o, { size: "small", onClick: w, children: /* @__PURE__ */ T.jsx(_D, { fontSize: "small" }) }),
      /* @__PURE__ */ T.jsx(Le, { variant: "subtitle1", sx: { fontWeight: 700 }, children: O }),
      /* @__PURE__ */ T.jsx(_o, { size: "small", onClick: z, children: /* @__PURE__ */ T.jsx(HD, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ T.jsx(Nn, { container: !0, spacing: 1, columns: 7, sx: { mb: 1, textAlign: "center" }, children: UD.map((M) => /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 1, children: /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: M }) }, M)) }),
    /* @__PURE__ */ T.jsx(Nn, { container: !0, spacing: 1, columns: 7, children: k.map((M, $) => {
      const j = M.holidays && M.holidays.length > 0, U = ($ % 7 === 0 || $ % 7 === 6) && M.day !== null;
      return /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 1, children: /* @__PURE__ */ T.jsxs(
        co,
        {
          onClick: () => D(M),
          sx: {
            aspectRatio: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: M.day && j ? "pointer" : "default",
            visibility: M.day ? "visible" : "hidden",
            bgcolor: j ? "rgba(240, 95, 64, 0.1)" : U ? "rgba(0, 0, 0, 0.02)" : "background.paper",
            border: "1px solid",
            borderColor: j ? "primary.light" : "divider",
            borderRadius: 2,
            position: "relative",
            transition: "transform 0.1s",
            "&:hover": M.day && j ? {
              transform: "scale(1.05)",
              boxShadow: 2
            } : {}
          },
          children: [
            /* @__PURE__ */ T.jsx(
              Le,
              {
                variant: "body2",
                sx: {
                  fontWeight: j ? 700 : 400,
                  color: j ? "primary.main" : U ? "text.secondary" : "text.primary"
                },
                children: M.day
              }
            ),
            j && /* @__PURE__ */ T.jsx(Zp, { title: M.holidays.map((P) => P.name).join(", "), children: /* @__PURE__ */ T.jsx(
              rt,
              {
                sx: {
                  width: 5,
                  height: 5,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: 4
                }
              }
            ) })
          ]
        }
      ) }, $);
    }) }),
    /* @__PURE__ */ T.jsx(Vp, { in: m.length > 0, children: /* @__PURE__ */ T.jsxs(rt, { sx: { mt: 3, p: 2, bgcolor: "background.default", borderRadius: 3, border: "1px solid", borderColor: "divider" }, children: [
      /* @__PURE__ */ T.jsxs(Le, { variant: "caption", sx: { color: "text.secondary", fontWeight: 600, mb: 1, display: "block" }, children: [
        "Holidays on ",
        g
      ] }),
      m.map((M, $) => /* @__PURE__ */ T.jsx(Vx, { holiday: M, onExportICS: i }, $))
    ] }) })
  ] });
}
function PD(e, a, o = []) {
  const i = new Date(e), s = new Date(a);
  i.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0);
  const c = i <= s ? i : s, d = i <= s ? s : i;
  let p = 0, m = 0, h = 0, g = 0;
  const y = new Set(o.map((C) => C.date)), x = new Date(c);
  for (; x <= d; ) {
    p++;
    const C = x.getDay(), R = x.toISOString().split("T")[0];
    C === 0 || C === 6 ? m++ : y.has(R) ? h++ : g++, x.setDate(x.getDate() + 1);
  }
  return {
    workingDays: g,
    totalDays: p,
    weekendDays: m,
    holidayDays: h
  };
}
const VD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), GD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
}), "List"), qD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z"
}), "Calculate"), YD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z"
}), "CompareArrows");
function FD({
  selectedCountry: e,
  year: a,
  holidays: o,
  countries: i,
  allCountries: s,
  onCountryChange: c,
  onYearChange: d,
  onExportICS: p,
  onExportAllICS: m,
  initialMonth: h
}) {
  const [g, y] = v.useState(0), [x, C] = v.useState("2026-08-24"), [R, E] = v.useState("2026-09-07"), [w, z] = v.useState(null), [k, O] = v.useState({}), [D, M] = v.useState(!1);
  v.useEffect(() => {
    if (s.length > 1) {
      M(!0);
      const S = s.map(
        (B) => Jp(B.code, a).then((H) => ({ code: B.code, data: H }))
      );
      Promise.all(S).then((B) => {
        const H = {};
        B.forEach((G) => {
          H[G.code] = G.data;
        }), O(H), M(!1);
      });
    }
  }, [s, a]);
  const $ = () => {
    const S = PD(x, R, o);
    z(S);
  }, j = (S) => S ? S.toUpperCase().replace(
    /./g,
    (B) => String.fromCodePoint(B.charCodeAt(0) + 127397)
  ) : "", P = (() => {
    const S = [];
    return o.forEach((B) => {
      const G = (/* @__PURE__ */ new Date(B.date + "T00:00:00")).getDay();
      G === 1 ? S.push({ holiday: B, type: "3-Day Weekend (Mon)", dates: `${B.date} (Mon)` }) : G === 5 ? S.push({ holiday: B, type: "3-Day Weekend (Fri)", dates: `${B.date} (Fri)` }) : G === 2 ? S.push({ holiday: B, type: "Potential 4-Day Weekend (Tue)", dates: `Bridge Mon (${B.date} is Tue)` }) : G === 4 && S.push({ holiday: B, type: "Potential 4-Day Weekend (Thu)", dates: `Bridge Fri (${B.date} is Thu)` });
    }), S;
  })();
  return /* @__PURE__ */ T.jsxs(rt, { sx: { p: { xs: 1, sm: 3 }, maxWidth: 900, mx: "auto" }, children: [
    /* @__PURE__ */ T.jsx(
      Ni,
      {
        sx: {
          mb: 4,
          borderRadius: 4,
          background: "linear-gradient(135deg, rgba(240, 95, 64, 0.08) 0%, rgba(64, 240, 187, 0.05) 100%)",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
        },
        children: /* @__PURE__ */ T.jsxs(es, { sx: { p: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 2 }, children: [
          /* @__PURE__ */ T.jsxs(rt, { children: [
            /* @__PURE__ */ T.jsxs(Le, { variant: "h4", sx: { fontWeight: 800, display: "flex", alignItems: "center", gap: 1.5 }, children: [
              /* @__PURE__ */ T.jsx("span", { style: { fontSize: "2.5rem" }, children: j(e.code) }),
              e.name
            ] }),
            /* @__PURE__ */ T.jsxs(Le, { variant: "subtitle2", sx: { color: "text.secondary", ml: 0.5 }, children: [
              "Public Holidays Calendar • Year ",
              a
            ] })
          ] }),
          /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", gap: 1.5, alignItems: "center", width: { xs: "100%", sm: "auto" }, justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ T.jsx(
              jD,
              {
                countries: i,
                selectedCountry: e,
                onCountryChange: c
              }
            ),
            /* @__PURE__ */ T.jsx(
              as,
              {
                size: "small",
                type: "number",
                label: "Year",
                value: a,
                onChange: (S) => d(parseInt(S.target.value, 10) || a),
                sx: { width: 100, "& .MuiOutlinedInput-root": { borderRadius: "24px" } },
                inputProps: { min: 1970, max: 2100 }
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ T.jsxs(
      gD,
      {
        value: g,
        onChange: (S, B) => y(B),
        sx: {
          mb: 3,
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator": { height: 3, borderRadius: "3px" }
        },
        children: [
          /* @__PURE__ */ T.jsx(eu, { icon: /* @__PURE__ */ T.jsx(GD, {}), iconPosition: "start", label: "Holidays List", sx: { fontWeight: 600, textTransform: "none" } }),
          /* @__PURE__ */ T.jsx(eu, { icon: /* @__PURE__ */ T.jsx(VD, {}), iconPosition: "start", label: "Monthly Grid", sx: { fontWeight: 600, textTransform: "none" } }),
          /* @__PURE__ */ T.jsx(eu, { icon: /* @__PURE__ */ T.jsx(qD, {}), iconPosition: "start", label: "Working Days", sx: { fontWeight: 600, textTransform: "none" } }),
          s.length > 1 && /* @__PURE__ */ T.jsx(eu, { icon: /* @__PURE__ */ T.jsx(YD, {}), iconPosition: "start", label: "Compare Countries", sx: { fontWeight: 600, textTransform: "none" } })
        ]
      }
    ),
    /* @__PURE__ */ T.jsxs(rt, { sx: { minHeight: 300 }, children: [
      g === 0 && /* @__PURE__ */ T.jsxs(Nn, { container: !0, spacing: 3, children: [
        /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 12, md: P.length > 0 ? 8 : 12, children: o.length === 0 ? /* @__PURE__ */ T.jsxs(xA, { severity: "warning", sx: { borderRadius: 3 }, children: [
          "No public holidays found for ",
          e.name,
          " in ",
          a,
          "."
        ] }) : /* @__PURE__ */ T.jsx(
          BD,
          {
            holidays: o,
            onExportICS: p,
            onExportAllICS: m
          }
        ) }),
        P.length > 0 && /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ T.jsx(Ni, { sx: { borderRadius: 3, border: "1px solid", borderColor: "divider", bgcolor: "background.paper" }, children: /* @__PURE__ */ T.jsxs(es, { children: [
          /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontWeight: 700, mb: 2, color: "primary.main", display: "flex", alignItems: "center", gap: 1 }, children: "✈️ Travel Plan Optimizer" }),
          /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 2 }, children: "Maximize your time off! Here are potential long weekends around public holidays:" }),
          /* @__PURE__ */ T.jsx(rt, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: P.map((S, B) => /* @__PURE__ */ T.jsxs(rt, { sx: { p: 1.5, borderRadius: 2, bgcolor: "background.default", border: "1px solid", borderColor: "divider" }, children: [
            /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontWeight: 600, fontSize: "0.8rem" }, children: S.holiday.name }),
            /* @__PURE__ */ T.jsxs(Le, { variant: "caption", color: "text.secondary", sx: { display: "block" }, children: [
              "Type: ",
              S.type
            ] }),
            /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "primary.main", sx: { fontWeight: 600 }, children: S.dates })
          ] }, B)) })
        ] }) }) })
      ] }),
      g === 1 && /* @__PURE__ */ T.jsx(rt, { sx: { maxWidth: 600, mx: "auto" }, children: /* @__PURE__ */ T.jsx(
        ID,
        {
          year: a,
          initialMonth: h,
          holidays: o,
          onExportICS: p
        }
      ) }),
      g === 2 && /* @__PURE__ */ T.jsx(Ni, { sx: { borderRadius: 3, border: "1px solid", borderColor: "divider" }, children: /* @__PURE__ */ T.jsxs(es, { sx: { p: 4 }, children: [
        /* @__PURE__ */ T.jsx(Le, { variant: "h6", sx: { fontWeight: 700, mb: 1 }, children: "💼 Business Working-Day Calculator" }),
        /* @__PURE__ */ T.jsxs(Le, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 3 }, children: [
          "Calculate total working days (Mon-Fri) between two dates in ",
          e.name,
          ", excluding public holidays."
        ] }),
        /* @__PURE__ */ T.jsxs(Nn, { container: !0, spacing: 2, sx: { mb: 3 }, children: [
          /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 12, sm: 5, children: /* @__PURE__ */ T.jsx(
            as,
            {
              type: "date",
              label: "Start Date",
              fullWidth: !0,
              value: x,
              onChange: (S) => C(S.target.value),
              InputLabelProps: { shrink: !0 },
              sx: { "& .MuiOutlinedInput-root": { borderRadius: "12px" } }
            }
          ) }),
          /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 12, sm: 5, children: /* @__PURE__ */ T.jsx(
            as,
            {
              type: "date",
              label: "End Date",
              fullWidth: !0,
              value: R,
              onChange: (S) => E(S.target.value),
              InputLabelProps: { shrink: !0 },
              sx: { "& .MuiOutlinedInput-root": { borderRadius: "12px" } }
            }
          ) }),
          /* @__PURE__ */ T.jsx(Nn, { item: !0, xs: 12, sm: 2, sx: { display: "flex", alignItems: "stretch" }, children: /* @__PURE__ */ T.jsx(
            jo,
            {
              variant: "contained",
              fullWidth: !0,
              onClick: $,
              sx: { borderRadius: "12px", textTransform: "none", fontWeight: 600 },
              children: "Calculate"
            }
          ) })
        ] }),
        w && /* @__PURE__ */ T.jsxs(rt, { sx: { p: 3, borderRadius: 3, bgcolor: "background.default", border: "1px solid", borderColor: "divider" }, children: [
          /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontWeight: 700, mb: 2 }, children: "Calculation Results:" }),
          /* @__PURE__ */ T.jsxs(Nn, { container: !0, spacing: 2, children: [
            /* @__PURE__ */ T.jsxs(Nn, { item: !0, xs: 6, sm: 3, children: [
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "Working Days" }),
              /* @__PURE__ */ T.jsx(Le, { variant: "h4", sx: { fontWeight: 800, color: "success.main" }, children: w.workingDays })
            ] }),
            /* @__PURE__ */ T.jsxs(Nn, { item: !0, xs: 6, sm: 3, children: [
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "Total Calendar Days" }),
              /* @__PURE__ */ T.jsx(Le, { variant: "h5", sx: { fontWeight: 700 }, children: w.totalDays })
            ] }),
            /* @__PURE__ */ T.jsxs(Nn, { item: !0, xs: 6, sm: 3, children: [
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "Weekend Days" }),
              /* @__PURE__ */ T.jsx(Le, { variant: "h5", sx: { fontWeight: 700 }, children: w.weekendDays })
            ] }),
            /* @__PURE__ */ T.jsxs(Nn, { item: !0, xs: 6, sm: 3, children: [
              /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "Public Holidays" }),
              /* @__PURE__ */ T.jsx(Le, { variant: "h5", sx: { fontWeight: 700, color: "primary.main" }, children: w.holidayDays })
            ] })
          ] })
        ] })
      ] }) }),
      g === 3 && s.length > 1 && /* @__PURE__ */ T.jsxs(rt, { children: [
        /* @__PURE__ */ T.jsxs(Le, { variant: "h6", sx: { fontWeight: 700, mb: 2 }, children: [
          "🌎 Country Comparison Grid (",
          a,
          ")"
        ] }),
        D ? /* @__PURE__ */ T.jsx(Le, { children: "Loading comparative holiday data..." }) : /* @__PURE__ */ T.jsx(V3, { component: co, sx: { borderRadius: 3, border: "1px solid", borderColor: "divider", boxShadow: "none" }, children: /* @__PURE__ */ T.jsxs(z3, { children: [
          /* @__PURE__ */ T.jsx(W3, { children: /* @__PURE__ */ T.jsx(Lb, { children: s.map((S) => /* @__PURE__ */ T.jsxs(Db, { align: "center", sx: { fontWeight: 700, bgcolor: "action.hover" }, children: [
            /* @__PURE__ */ T.jsx("span", { style: { fontSize: "1.2rem", marginRight: "6px" }, children: j(S.code) }),
            S.name
          ] }, S.code)) }) }),
          /* @__PURE__ */ T.jsx(L3, { children: /* @__PURE__ */ T.jsx(Lb, { children: s.map((S) => {
            const B = k[S.code] || [];
            return /* @__PURE__ */ T.jsx(Db, { sx: { verticalAlign: "top", p: 2 }, children: B.length === 0 ? /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "No holidays resolved" }) : /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
              B.slice(0, 15).map((H, G) => /* @__PURE__ */ T.jsxs(rt, { sx: { p: 1, borderRadius: 1.5, bgcolor: "background.default", border: "1px solid", borderColor: "divider" }, children: [
                /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { fontWeight: 700, display: "block", color: "primary.main" }, children: (/* @__PURE__ */ new Date(H.date + "T00:00:00")).toLocaleDateString(void 0, { month: "short", day: "numeric" }) }),
                /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.2 }, children: H.name })
              ] }, G)),
              B.length > 15 && /* @__PURE__ */ T.jsxs(Le, { variant: "caption", color: "text.secondary", align: "center", sx: { display: "block", mt: 1 }, children: [
                "+ ",
                B.length - 15,
                " more"
              ] })
            ] }) }, S.code);
          }) }) })
        ] }) })
      ] })
    ] })
  ] });
}
const WD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CheckCircleOutline"), KD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
}), "CancelOutlined");
function XD({ isHoliday: e, holiday: a, dateStr: o, countryName: i, nextHoliday: s }) {
  var y;
  const c = /* @__PURE__ */ new Date(o + "T00:00:00"), d = c.toLocaleDateString(void 0, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }), p = new Date(2026, 7, 24), m = c - p, h = Math.ceil(m / (1e3 * 60 * 60 * 24));
  let g = "";
  return h === 0 ? g = "🎉 Today!" : h === 1 ? g = "Tomorrow" : h === -1 ? g = "Yesterday" : h > 1 ? g = `In ${h} days` : g = `${Math.abs(h)} days ago`, /* @__PURE__ */ T.jsx(
    Ni,
    {
      sx: {
        maxWidth: 500,
        mx: "auto",
        my: 3,
        borderRadius: 4,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        background: e ? "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.15) 100%)" : "linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)",
        border: "1px solid",
        borderColor: e ? "rgba(76, 175, 80, 0.3)" : "rgba(244, 67, 54, 0.2)",
        overflow: "hidden",
        position: "relative"
      },
      children: /* @__PURE__ */ T.jsxs(es, { sx: { p: 4 }, children: [
        /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 3 }, children: [
          e ? /* @__PURE__ */ T.jsx(WD, { color: "success", sx: { fontSize: 48 } }) : /* @__PURE__ */ T.jsx(KD, { color: "error", sx: { fontSize: 48 } }),
          /* @__PURE__ */ T.jsxs(rt, { children: [
            /* @__PURE__ */ T.jsx(Le, { variant: "h5", sx: { fontWeight: 700, color: e ? "success.main" : "text.primary" }, children: e ? "Yes, it is!" : "No Holiday" }),
            /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "text.secondary", display: "block" }, children: d })
          ] }),
          /* @__PURE__ */ T.jsx(
            ki,
            {
              label: g,
              color: e ? "success" : "default",
              variant: "outlined",
              size: "small",
              sx: { ml: "auto", fontWeight: 600 }
            }
          )
        ] }),
        e ? /* @__PURE__ */ T.jsxs(rt, { children: [
          /* @__PURE__ */ T.jsx(Le, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: a.name }),
          a.localName && a.localName !== a.name && /* @__PURE__ */ T.jsxs(Le, { variant: "body2", sx: { color: "text.secondary", fontStyle: "italic", mb: 2 }, children: [
            "Local name: ",
            a.localName
          ] }),
          /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: [
            (y = a.types) == null ? void 0 : y.map((x, C) => /* @__PURE__ */ T.jsx(
              ki,
              {
                label: x,
                size: "small",
                color: "primary",
                sx: {
                  borderRadius: "6px",
                  fontWeight: 600,
                  textTransform: "capitalize"
                }
              },
              C
            )),
            a.counties && a.counties.length > 0 && /* @__PURE__ */ T.jsx(
              ki,
              {
                label: `Regional (${a.counties.length} subdivisions)`,
                size: "small",
                variant: "outlined",
                sx: { borderRadius: "6px" }
              }
            )
          ] })
        ] }) : /* @__PURE__ */ T.jsxs(rt, { children: [
          /* @__PURE__ */ T.jsxs(Le, { variant: "body1", sx: { color: "text.secondary", mb: 3 }, children: [
            "There is no public holiday in ",
            /* @__PURE__ */ T.jsx("b", { children: i }),
            " on this date."
          ] }),
          s && /* @__PURE__ */ T.jsxs(
            rt,
            {
              sx: {
                p: 2,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                mt: 2
              },
              children: [
                /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "primary.main", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, display: "block", mb: 1 }, children: "Next Public Holiday" }),
                /* @__PURE__ */ T.jsx(Le, { variant: "subtitle2", sx: { fontWeight: 600 }, children: s.name }),
                /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "text.secondary" }, children: (/* @__PURE__ */ new Date(s.date + "T00:00:00")).toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" }) })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const QD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"
}), "Event"), ZD = Yt([/* @__PURE__ */ T.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ T.jsx("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "AccessTime"), JD = Yt(/* @__PURE__ */ T.jsx("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), "OpenInNew");
function e$({
  selectedCountry: e,
  year: a,
  holidays: o,
  dateCheckHoliday: i,
  dateCheckActive: s,
  queryDateStr: c,
  intent: d,
  month: p,
  messageHandlers: m
}) {
  const h = "2026-08-24", g = /* @__PURE__ */ new Date(h + "T00:00:00"), y = o.filter((w) => /* @__PURE__ */ new Date(w.date + "T00:00:00") >= g).sort((w, z) => new Date(w.date) - new Date(z.date)), x = y[0] || null;
  let C = "";
  if (x) {
    const z = /* @__PURE__ */ new Date(x.date + "T00:00:00") - g, k = Math.ceil(z / (1e3 * 60 * 60 * 24));
    k === 0 ? C = `🎉 Today: ${x.name}!` : k === 1 ? C = `Tomorrow: ${x.name}` : C = `${x.name} in ${k} days`;
  }
  const R = (w) => w ? w.toUpperCase().replace(
    /./g,
    (z) => String.fromCodePoint(z.charCodeAt(0) + 127397)
  ) : "", E = () => {
    m && m.switchFullScreen && m.switchFullScreen(!0, !0);
  };
  return /* @__PURE__ */ T.jsx(
    Ni,
    {
      sx: {
        maxWidth: 400,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        background: "background.paper",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ T.jsxs(es, { sx: { p: 2.5 }, children: [
        /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }, children: [
          /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ T.jsx("span", { style: { fontSize: "1.5rem" }, children: R(e.code) }),
            /* @__PURE__ */ T.jsx(Le, { variant: "subtitle1", sx: { fontWeight: 700 }, children: e.name })
          ] }),
          /* @__PURE__ */ T.jsx(Le, { variant: "caption", sx: { color: "text.secondary", fontWeight: 600 }, children: a })
        ] }),
        /* @__PURE__ */ T.jsx(Eu, { sx: { mb: 2 } }),
        s ? /* @__PURE__ */ T.jsx(rt, { sx: { mt: -2, mb: 1 }, children: /* @__PURE__ */ T.jsx(
          XD,
          {
            isHoliday: !!i,
            holiday: i,
            dateStr: c,
            countryName: e.name,
            nextHoliday: x
          }
        ) }) : /* @__PURE__ */ T.jsxs(rt, { children: [
          x && /* @__PURE__ */ T.jsxs(
            rt,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(240, 95, 64, 0.08)",
                p: 1.5,
                borderRadius: 2.5,
                mb: 2.5,
                border: "1px solid",
                borderColor: "rgba(240, 95, 64, 0.15)"
              },
              children: [
                /* @__PURE__ */ T.jsx(ZD, { color: "primary", sx: { fontSize: 18 } }),
                /* @__PURE__ */ T.jsxs(Le, { variant: "caption", sx: { fontWeight: 700, color: "primary.main" }, children: [
                  "Next Holiday: ",
                  C
                ] })
              ]
            }
          ),
          /* @__PURE__ */ T.jsxs(Le, { variant: "subtitle2", sx: { fontWeight: 700, color: "text.primary", mb: 1, display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ T.jsx(QD, { sx: { fontSize: 16 } }),
            d === "LIST_MONTH" && p !== null ? `Holidays in ${new Date(a, p, 1).toLocaleDateString(void 0, { month: "long" })}` : "Upcoming Holidays"
          ] }),
          o.length === 0 ? /* @__PURE__ */ T.jsx(Le, { variant: "body2", color: "text.secondary", sx: { py: 2, textAlign: "center" }, children: "No public holidays found." }) : /* @__PURE__ */ T.jsx(Nx, { disablePadding: !0, sx: { mb: 2 }, children: (d === "LIST_MONTH" && p !== null ? o.filter((w) => (/* @__PURE__ */ new Date(w.date + "T00:00:00")).getMonth() === p) : y).slice(0, 3).map((w, z) => /* @__PURE__ */ T.jsx(Mz, { disableGutters: !0, sx: { py: 1, borderBottom: "1px solid", borderColor: "divider", "&:last-child": { borderBottom: "none" } }, children: /* @__PURE__ */ T.jsx(
            Dz,
            {
              primary: w.name,
              secondary: (/* @__PURE__ */ new Date(w.date + "T00:00:00")).toLocaleDateString(void 0, { month: "short", day: "numeric", weekday: "short" }),
              primaryTypographyProps: { variant: "subtitle2", sx: { fontWeight: 600, fontSize: "0.8rem" } },
              secondaryTypographyProps: { variant: "caption", sx: { color: "text.secondary" } }
            }
          ) }, z)) })
        ] }),
        /* @__PURE__ */ T.jsx(
          jo,
          {
            variant: "contained",
            fullWidth: !0,
            onClick: E,
            endIcon: /* @__PURE__ */ T.jsx(JD, { fontSize: "small" }),
            sx: {
              borderRadius: "24px",
              textTransform: "none",
              fontWeight: 700,
              mt: 1,
              py: 1,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" }
            },
            children: "See Full Year"
          }
        )
      ] })
    }
  );
}
function t$(e) {
  const [a, o] = v.useState([]), [i, s] = v.useState(null), [c, d] = v.useState([]), [p, m] = v.useState(2026), [h, g] = v.useState(null), [y, x] = v.useState(null), [C, R] = v.useState("LIST_YEAR"), [E, w] = v.useState([]), [z, k] = v.useState(!0), [O, D] = v.useState(null);
  v.useRef(!1), v.useEffect(() => {
    async function H() {
      var G, J;
      try {
        const F = await DD();
        o(F);
        const N = e.searchData || {}, V = N.query || N.queryTerm || "", K = ND(V);
        m(K.year), g(K.month), x(K.date), R(K.intent);
        const Y = kD(N, F);
        s(Y.primaryCountry), d(Y.allCountries);
        const pe = await Jp(Y.primaryCountry.code, K.year);
        w(pe), k(!1), (G = e == null ? void 0 : e.messageHandlers) == null || G.componentLoaded();
      } catch (F) {
        console.error("Initialization error:", F), D(F.message), k(!1), (J = e == null ? void 0 : e.messageHandlers) == null || J.componentLoaded();
      }
    }
    H();
  }, []), v.useEffect(() => {
    if (!i) return;
    async function H() {
      k(!0);
      try {
        const G = await Jp(i.code, p);
        w(G), k(!1);
      } catch (G) {
        console.error("Update error:", G), k(!1);
      }
    }
    H();
  }, [i, p]);
  const M = (H) => {
    s(H), d([H]);
  }, $ = (H) => {
    H >= 1970 && H <= 2100 && m(H);
  }, j = (H) => {
    qb(H, `${H.name.replace(/\s+/g, "_")}_${H.date}.ics`);
  }, U = (H) => {
    const G = `${i.code}_${p}_holidays.ics`;
    qb(H, G);
  };
  let P = null, S = null;
  if (C === "CHECK_DATE" && h !== null && y !== null) {
    const H = String(h + 1).padStart(2, "0"), G = String(y).padStart(2, "0");
    S = `${p}-${H}-${G}`, P = E.find((J) => J.date === S) || null;
  }
  return z && E.length === 0 ? /* @__PURE__ */ T.jsxs(rt, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 250, gap: 1.5 }, children: [
    /* @__PURE__ */ T.jsx(jm, { size: 36, color: "primary" }),
    /* @__PURE__ */ T.jsx(Le, { variant: "caption", color: "text.secondary", children: "Loading public holidays..." })
  ] }) : O ? /* @__PURE__ */ T.jsx(rt, { sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ T.jsxs(Le, { color: "error", variant: "body2", children: [
    "Error loading calendar: ",
    O
  ] }) }) : (e.format === "sidebar" || e.format === "mobile") && i ? /* @__PURE__ */ T.jsx(
    e$,
    {
      selectedCountry: i,
      year: p,
      holidays: E,
      dateCheckHoliday: P,
      dateCheckActive: C === "CHECK_DATE",
      queryDateStr: S,
      intent: C,
      month: h,
      messageHandlers: e.messageHandlers
    }
  ) : i ? /* @__PURE__ */ T.jsx(
    FD,
    {
      selectedCountry: i,
      year: p,
      holidays: E,
      countries: a,
      allCountries: c,
      onCountryChange: M,
      onYearChange: $,
      onExportICS: j,
      onExportAllICS: U,
      initialMonth: h
    }
  ) : null;
}
const a$ = zD(t$);
export {
  a$ as default
};
