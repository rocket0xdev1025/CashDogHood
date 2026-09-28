import { c as e, l as t, n, r, t as i, u as a } from "./index-CDC7euCw.js";
function o(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = o(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function s() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = o(e)) && (r && (r += ` `), (r += t));
  return r;
}
var c = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  l = (e, t) => ({ classGroupId: e, validator: t }),
  u = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  d = `-`,
  ee = [],
  f = `arbitrary..`,
  p = (e) => {
    let t = te(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return h(e);
        let n = e.split(d);
        return m(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? c(i, t) : t) : i || ee;
        }
        return n[e] || ee;
      },
    };
  },
  m = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = m(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(d) : e.slice(t).join(d),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  h = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? f + r : void 0;
        })(),
  te = (e) => {
    let { theme: t, classGroups: n } = e;
    return ne(n, t);
  },
  ne = (e, t) => {
    let n = u();
    for (let r in e) {
      let i = e[r];
      g(i, n, r, t);
    }
    return n;
  },
  g = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      _(i, t, n, r);
    }
  },
  _ = (e, t, n, r) => {
    if (typeof e == `string`) {
      re(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      v(e, t, n, r);
      return;
    }
    y(e, t, n, r);
  },
  re = (e, t, n) => {
    let r = e === `` ? t : b(t, e);
    r.classGroupId = n;
  },
  v = (e, t, n, r) => {
    if (x(e)) {
      g(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(l(n, e));
  },
  y = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      g(o, b(t, a), n, r);
    }
  },
  b = (e, t) => {
    let n = e,
      r = t.split(d),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = u()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  x = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  ie = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  S = `!`,
  C = `:`,
  ae = [],
  w = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  T = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === C) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
            ? n--
            : o === `(`
            ? r++
            : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(S)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(S) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return w(t, l, c, u);
      };
    if (t) {
      let e = t + C,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : w(ae, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  E = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  D = (e) => ({
    cache: ie(e.cacheSize),
    parseClassName: T(e),
    sortModifiers: E(e),
    postfixLookupClassGroupIds: oe(e),
    ...p(e),
  }),
  oe = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  se = /\s+/,
  O = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(se),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: ee,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let m = !!p,
        h;
      if (m) {
        h = r(f.substring(0, p));
        let e = h && o[h] ? r(f) : void 0;
        e && e !== h && ((h = e), (m = !1));
      } else h = r(f);
      if (!h) {
        if (!m) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((h = r(f)), !h)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        m = !1;
      }
      let te = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        ne = ee ? te + S : te,
        g = ne + h;
      if (s.indexOf(g) > -1) continue;
      s.push(g);
      let _ = i(h, m);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        s.push(ne + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  ce = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = le(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  le = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = le(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  ue = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = D(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = O(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(ce(...e));
  },
  k = [],
  A = (e) => {
    let t = (t) => t[e] || k;
    return (t.isThemeGetter = !0), t;
  },
  j = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  M = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  N = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  de = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  P =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  fe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  F = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  I =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  L = (e) => N.test(e),
  R = (e) => !!e && !Number.isNaN(Number(e)),
  z = (e) => !!e && Number.isInteger(Number(e)),
  pe = (e) => e.endsWith(`%`) && R(e.slice(0, -1)),
  B = (e) => de.test(e),
  me = () => !0,
  V = (e) => P.test(e) && !fe.test(e),
  H = () => !1,
  he = (e) => F.test(e),
  ge = (e) => I.test(e),
  _e = (e) => !U(e) && !K(e),
  ve = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  ye = (e) => Y(e, Me, H),
  U = (e) => j.test(e),
  W = (e) => Y(e, Ne, V),
  be = (e) => Y(e, Pe, R),
  xe = (e) => Y(e, Ie, me),
  Se = (e) => Y(e, Fe, H),
  Ce = (e) => Y(e, Ae, H),
  we = (e) => Y(e, je, ge),
  G = (e) => Y(e, Le, he),
  K = (e) => M.test(e),
  q = (e) => X(e, Ne),
  Te = (e) => X(e, Fe),
  Ee = (e) => X(e, Ae),
  De = (e) => X(e, Me),
  Oe = (e) => X(e, je),
  J = (e) => X(e, Le, !0),
  ke = (e) => X(e, Ie, !0),
  Y = (e, t, n) => {
    let r = j.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  X = (e, t, n = !1) => {
    let r = M.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Ae = (e) => e === `position` || e === `percentage`,
  je = (e) => e === `image` || e === `url`,
  Me = (e) => e === `length` || e === `size` || e === `bg-size`,
  Ne = (e) => e === `length`,
  Pe = (e) => e === `number`,
  Fe = (e) => e === `family-name`,
  Ie = (e) => e === `number` || e === `weight`,
  Le = (e) => e === `shadow`,
  Re = ue(() => {
    let e = A(`color`),
      t = A(`font`),
      n = A(`text`),
      r = A(`font-weight`),
      i = A(`tracking`),
      a = A(`leading`),
      o = A(`breakpoint`),
      s = A(`container`),
      c = A(`spacing`),
      l = A(`radius`),
      u = A(`shadow`),
      d = A(`inset-shadow`),
      ee = A(`text-shadow`),
      f = A(`drop-shadow`),
      p = A(`blur`),
      m = A(`perspective`),
      h = A(`aspect`),
      te = A(`ease`),
      ne = A(`animate`),
      g = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      _ = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      re = () => [..._(), K, U],
      v = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      y = () => [`auto`, `contain`, `none`],
      b = () => [K, U, c],
      x = () => [L, `full`, `auto`, ...b()],
      ie = () => [z, `none`, `subgrid`, K, U],
      S = () => [`auto`, { span: [`full`, z, K, U] }, z, K, U],
      C = () => [z, `auto`, K, U],
      ae = () => [`auto`, `min`, `max`, `fr`, K, U],
      w = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      T = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      E = () => [`auto`, ...b()],
      D = () => [
        L,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...b(),
      ],
      oe = () => [
        L,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...b(),
      ],
      se = () => [
        L,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...b(),
      ],
      O = () => [e, K, U],
      ce = () => [..._(), Ee, Ce, { position: [K, U] }],
      le = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ue = () => [`auto`, `cover`, `contain`, De, ye, { size: [K, U] }],
      k = () => [pe, q, W],
      j = () => [``, `none`, `full`, l, K, U],
      M = () => [``, R, q, W],
      N = () => [`solid`, `dashed`, `dotted`, `double`],
      de = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      P = () => [R, pe, Ee, Ce],
      fe = () => [``, `none`, p, K, U],
      F = () => [`none`, R, K, U],
      I = () => [`none`, R, K, U],
      V = () => [R, K, U],
      H = () => [L, `full`, ...b()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [B],
        breakpoint: [B],
        color: [me],
        container: [B],
        "drop-shadow": [B],
        ease: [`in`, `out`, `in-out`],
        font: [_e],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [B],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [B],
        shadow: [B],
        spacing: [`px`, R],
        text: [B],
        "text-shadow": [B],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, L, U, K, h] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, K, U] }],
        "container-named": [ve],
        columns: [{ columns: [R, U, K, s] }],
        "break-after": [{ "break-after": g() }],
        "break-before": [{ "break-before": g() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: re() }],
        overflow: [{ overflow: v() }],
        "overflow-x": [{ "overflow-x": v() }],
        "overflow-y": [{ "overflow-y": v() }],
        overscroll: [{ overscroll: y() }],
        "overscroll-x": [{ "overscroll-x": y() }],
        "overscroll-y": [{ "overscroll-y": y() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: x() }],
        "inset-x": [{ "inset-x": x() }],
        "inset-y": [{ "inset-y": x() }],
        start: [{ "inset-s": x(), start: x() }],
        end: [{ "inset-e": x(), end: x() }],
        "inset-bs": [{ "inset-bs": x() }],
        "inset-be": [{ "inset-be": x() }],
        top: [{ top: x() }],
        right: [{ right: x() }],
        bottom: [{ bottom: x() }],
        left: [{ left: x() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [z, `auto`, K, U] }],
        basis: [{ basis: [L, `full`, `auto`, s, ...b()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [R, L, `auto`, `initial`, `none`, U] }],
        grow: [{ grow: [``, R, K, U] }],
        shrink: [{ shrink: [``, R, K, U] }],
        order: [{ order: [z, `first`, `last`, `none`, K, U] }],
        "grid-cols": [{ "grid-cols": ie() }],
        "col-start-end": [{ col: S() }],
        "col-start": [{ "col-start": C() }],
        "col-end": [{ "col-end": C() }],
        "grid-rows": [{ "grid-rows": ie() }],
        "row-start-end": [{ row: S() }],
        "row-start": [{ "row-start": C() }],
        "row-end": [{ "row-end": C() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ae() }],
        "auto-rows": [{ "auto-rows": ae() }],
        gap: [{ gap: b() }],
        "gap-x": [{ "gap-x": b() }],
        "gap-y": [{ "gap-y": b() }],
        "justify-content": [{ justify: [...w(), `normal`] }],
        "justify-items": [{ "justify-items": [...T(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...T()] }],
        "align-content": [{ content: [`normal`, ...w()] }],
        "align-items": [{ items: [...T(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...T(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": w() }],
        "place-items": [{ "place-items": [...T(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...T()] }],
        p: [{ p: b() }],
        px: [{ px: b() }],
        py: [{ py: b() }],
        ps: [{ ps: b() }],
        pe: [{ pe: b() }],
        pbs: [{ pbs: b() }],
        pbe: [{ pbe: b() }],
        pt: [{ pt: b() }],
        pr: [{ pr: b() }],
        pb: [{ pb: b() }],
        pl: [{ pl: b() }],
        m: [{ m: E() }],
        mx: [{ mx: E() }],
        my: [{ my: E() }],
        ms: [{ ms: E() }],
        me: [{ me: E() }],
        mbs: [{ mbs: E() }],
        mbe: [{ mbe: E() }],
        mt: [{ mt: E() }],
        mr: [{ mr: E() }],
        mb: [{ mb: E() }],
        ml: [{ ml: E() }],
        "space-x": [{ "space-x": b() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": b() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: D() }],
        "inline-size": [{ inline: [`auto`, ...oe()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...oe()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...oe()] }],
        "block-size": [{ block: [`auto`, ...se()] }],
        "min-block-size": [{ "min-block": [`auto`, ...se()] }],
        "max-block-size": [{ "max-block": [`none`, ...se()] }],
        w: [{ w: [s, `screen`, ...D()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...D()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...D()] },
        ],
        h: [{ h: [`screen`, `lh`, ...D()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...D()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...D()] }],
        "font-size": [{ text: [`base`, n, q, W] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, ke, xe] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              pe,
              U,
            ],
          },
        ],
        "font-family": [{ font: [Te, Se, t] }],
        "font-features": [{ "font-features": [U] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, K, U] }],
        "line-clamp": [{ "line-clamp": [R, `none`, K, be] }],
        leading: [{ leading: [a, ...b()] }],
        "list-image": [{ "list-image": [`none`, K, U] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, K, U] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: O() }],
        "text-color": [{ text: O() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...N(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [R, `from-font`, `auto`, K, W] },
        ],
        "text-decoration-color": [{ decoration: O() }],
        "underline-offset": [{ "underline-offset": [R, `auto`, K, U] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: b() }],
        "tab-size": [{ tab: [z, K, U] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              K,
              U,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, K, U] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ce() }],
        "bg-repeat": [{ bg: le() }],
        "bg-size": [{ bg: ue() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  z,
                  K,
                  U,
                ],
                radial: [``, K, U],
                conic: [z, K, U],
              },
              Oe,
              we,
            ],
          },
        ],
        "bg-color": [{ bg: O() }],
        "gradient-from-pos": [{ from: k() }],
        "gradient-via-pos": [{ via: k() }],
        "gradient-to-pos": [{ to: k() }],
        "gradient-from": [{ from: O() }],
        "gradient-via": [{ via: O() }],
        "gradient-to": [{ to: O() }],
        rounded: [{ rounded: j() }],
        "rounded-s": [{ "rounded-s": j() }],
        "rounded-e": [{ "rounded-e": j() }],
        "rounded-t": [{ "rounded-t": j() }],
        "rounded-r": [{ "rounded-r": j() }],
        "rounded-b": [{ "rounded-b": j() }],
        "rounded-l": [{ "rounded-l": j() }],
        "rounded-ss": [{ "rounded-ss": j() }],
        "rounded-se": [{ "rounded-se": j() }],
        "rounded-ee": [{ "rounded-ee": j() }],
        "rounded-es": [{ "rounded-es": j() }],
        "rounded-tl": [{ "rounded-tl": j() }],
        "rounded-tr": [{ "rounded-tr": j() }],
        "rounded-br": [{ "rounded-br": j() }],
        "rounded-bl": [{ "rounded-bl": j() }],
        "border-w": [{ border: M() }],
        "border-w-x": [{ "border-x": M() }],
        "border-w-y": [{ "border-y": M() }],
        "border-w-s": [{ "border-s": M() }],
        "border-w-e": [{ "border-e": M() }],
        "border-w-bs": [{ "border-bs": M() }],
        "border-w-be": [{ "border-be": M() }],
        "border-w-t": [{ "border-t": M() }],
        "border-w-r": [{ "border-r": M() }],
        "border-w-b": [{ "border-b": M() }],
        "border-w-l": [{ "border-l": M() }],
        "divide-x": [{ "divide-x": M() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": M() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...N(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...N(), `hidden`, `none`] }],
        "border-color": [{ border: O() }],
        "border-color-x": [{ "border-x": O() }],
        "border-color-y": [{ "border-y": O() }],
        "border-color-s": [{ "border-s": O() }],
        "border-color-e": [{ "border-e": O() }],
        "border-color-bs": [{ "border-bs": O() }],
        "border-color-be": [{ "border-be": O() }],
        "border-color-t": [{ "border-t": O() }],
        "border-color-r": [{ "border-r": O() }],
        "border-color-b": [{ "border-b": O() }],
        "border-color-l": [{ "border-l": O() }],
        "divide-color": [{ divide: O() }],
        "outline-style": [{ outline: [...N(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [R, K, U] }],
        "outline-w": [{ outline: [``, R, q, W] }],
        "outline-color": [{ outline: O() }],
        shadow: [{ shadow: [``, `none`, u, J, G] }],
        "shadow-color": [{ shadow: O() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, J, G] }],
        "inset-shadow-color": [{ "inset-shadow": O() }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: O() }],
        "ring-offset-w": [{ "ring-offset": [R, W] }],
        "ring-offset-color": [{ "ring-offset": O() }],
        "inset-ring-w": [{ "inset-ring": M() }],
        "inset-ring-color": [{ "inset-ring": O() }],
        "text-shadow": [{ "text-shadow": [`none`, ee, J, G] }],
        "text-shadow-color": [{ "text-shadow": O() }],
        opacity: [{ opacity: [R, K, U] }],
        "mix-blend": [
          { "mix-blend": [...de(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [R] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": P() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": P() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": O() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": O() }],
        "mask-image-t-from-pos": [{ "mask-t-from": P() }],
        "mask-image-t-to-pos": [{ "mask-t-to": P() }],
        "mask-image-t-from-color": [{ "mask-t-from": O() }],
        "mask-image-t-to-color": [{ "mask-t-to": O() }],
        "mask-image-r-from-pos": [{ "mask-r-from": P() }],
        "mask-image-r-to-pos": [{ "mask-r-to": P() }],
        "mask-image-r-from-color": [{ "mask-r-from": O() }],
        "mask-image-r-to-color": [{ "mask-r-to": O() }],
        "mask-image-b-from-pos": [{ "mask-b-from": P() }],
        "mask-image-b-to-pos": [{ "mask-b-to": P() }],
        "mask-image-b-from-color": [{ "mask-b-from": O() }],
        "mask-image-b-to-color": [{ "mask-b-to": O() }],
        "mask-image-l-from-pos": [{ "mask-l-from": P() }],
        "mask-image-l-to-pos": [{ "mask-l-to": P() }],
        "mask-image-l-from-color": [{ "mask-l-from": O() }],
        "mask-image-l-to-color": [{ "mask-l-to": O() }],
        "mask-image-x-from-pos": [{ "mask-x-from": P() }],
        "mask-image-x-to-pos": [{ "mask-x-to": P() }],
        "mask-image-x-from-color": [{ "mask-x-from": O() }],
        "mask-image-x-to-color": [{ "mask-x-to": O() }],
        "mask-image-y-from-pos": [{ "mask-y-from": P() }],
        "mask-image-y-to-pos": [{ "mask-y-to": P() }],
        "mask-image-y-from-color": [{ "mask-y-from": O() }],
        "mask-image-y-to-color": [{ "mask-y-to": O() }],
        "mask-image-radial": [{ "mask-radial": [K, U] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": P() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": P() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": O() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": O() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": _() }],
        "mask-image-conic-pos": [{ "mask-conic": [R] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": P() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": P() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": O() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": O() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: ce() }],
        "mask-repeat": [{ mask: le() }],
        "mask-size": [{ mask: ue() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, K, U] }],
        filter: [{ filter: [``, `none`, K, U] }],
        blur: [{ blur: fe() }],
        brightness: [{ brightness: [R, K, U] }],
        contrast: [{ contrast: [R, K, U] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, f, J, G] }],
        "drop-shadow-color": [{ "drop-shadow": O() }],
        grayscale: [{ grayscale: [``, R, K, U] }],
        "hue-rotate": [{ "hue-rotate": [R, K, U] }],
        invert: [{ invert: [``, R, K, U] }],
        saturate: [{ saturate: [R, K, U] }],
        sepia: [{ sepia: [``, R, K, U] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, K, U] }],
        "backdrop-blur": [{ "backdrop-blur": fe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [R, K, U] }],
        "backdrop-contrast": [{ "backdrop-contrast": [R, K, U] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, R, K, U] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [R, K, U] }],
        "backdrop-invert": [{ "backdrop-invert": [``, R, K, U] }],
        "backdrop-opacity": [{ "backdrop-opacity": [R, K, U] }],
        "backdrop-saturate": [{ "backdrop-saturate": [R, K, U] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, R, K, U] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": b() }],
        "border-spacing-x": [{ "border-spacing-x": b() }],
        "border-spacing-y": [{ "border-spacing-y": b() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              K,
              U,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [R, `initial`, K, U] }],
        ease: [{ ease: [`linear`, `initial`, te, K, U] }],
        delay: [{ delay: [R, K, U] }],
        animate: [{ animate: [`none`, ne, K, U] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [m, K, U] }],
        "perspective-origin": [{ "perspective-origin": re() }],
        rotate: [{ rotate: F() }],
        "rotate-x": [{ "rotate-x": F() }],
        "rotate-y": [{ "rotate-y": F() }],
        "rotate-z": [{ "rotate-z": F() }],
        scale: [{ scale: I() }],
        "scale-x": [{ "scale-x": I() }],
        "scale-y": [{ "scale-y": I() }],
        "scale-z": [{ "scale-z": I() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: V() }],
        "skew-x": [{ "skew-x": V() }],
        "skew-y": [{ "skew-y": V() }],
        transform: [{ transform: [K, U, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: re() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: H() }],
        "translate-x": [{ "translate-x": H() }],
        "translate-y": [{ "translate-y": H() }],
        "translate-z": [{ "translate-z": H() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [z, K, U] }],
        accent: [{ accent: O() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: O() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              K,
              U,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": O() }],
        "scrollbar-track-color": [{ "scrollbar-track": O() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mbs": [{ "scroll-mbs": b() }],
        "scroll-mbe": [{ "scroll-mbe": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pbs": [{ "scroll-pbs": b() }],
        "scroll-pbe": [{ "scroll-pbe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, K, U] },
        ],
        fill: [{ fill: [`none`, ...O()] }],
        "stroke-w": [{ stroke: [R, q, W, be] }],
        stroke: [{ stroke: [`none`, ...O()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function ze(...e) {
  return Re(s(e));
}
var Z = e(),
  Be = `inline-flex items-center justify-center gap-2 font-pixel text-[11px] sm:text-sm uppercase tracking-wide px-5 py-4 border-4 cursor-pointer select-none no-underline transition-transform duration-100 active:translate-y-[3px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60`,
  Ve = {
    gold: `bg-primary text-primary-foreground border-primary-foreground shadow-[inset_-4px_-4px_0_oklch(0.75_0.14_82),0_4px_0_4px_oklch(0_0_0/0.45)] active:shadow-[inset_-4px_-4px_0_oklch(0.75_0.14_82)]`,
    ghost: `bg-surface text-foreground border-border shadow-[inset_-4px_-4px_0_oklch(0.14_0.05_285),0_4px_0_4px_oklch(0_0_0/0.45)] active:shadow-[inset_-4px_-4px_0_oklch(0.14_0.05_285)] hover:text-primary`,
  };
function Q({ children: e, variant: t = `gold`, className: n, ...r }) {
  let i = ze(Be, Ve[t], n);
  if (r.href) {
    let t = r.external ?? r.href.startsWith(`http`);
    return (0, Z.jsx)(`a`, {
      href: r.href,
      className: i,
      ...(t ? { target: `_blank`, rel: `noopener noreferrer` } : {}),
      children: e,
    });
  }
  return (0, Z.jsx)(`button`, {
    type: `button`,
    onClick: r.onClick,
    className: i,
    children: e,
  });
}
function He({ children: e, className: t }) {
  return (0, Z.jsx)(`h2`, {
    className: ze(
      `font-pixel text-xl uppercase leading-tight text-primary px-shadow-gold sm:text-3xl`,
      t
    ),
    children: e,
  });
}
function Ue({ id: e, children: t, className: n }) {
  return (0, Z.jsx)(`section`, {
    id: e,
    className: ze(`scroll-mt-24 px-5 py-20 sm:py-28`, n),
    children: (0, Z.jsx)(`div`, {
      className: `mx-auto w-full max-w-5xl`,
      children: t,
    }),
  });
}
function We() {
  return (0, Z.jsx)(`footer`, {
    className: `flex min-h-[calc(100svh-4rem)] items-center border-t-4 border-primary bg-panel px-5 py-20`,
    children: (0, Z.jsxs)(`div`, {
      className: `mx-auto w-full max-w-5xl text-center`,
      children: [
        (0, Z.jsxs)(`p`, {
          className: `font-pixel text-2xl leading-relaxed text-primary px-shadow-gold sm:text-4xl`,
          children: [`Much Cash.`, (0, Z.jsx)(`br`, {}), `Very Moon.`],
        }),
        (0, Z.jsxs)(`nav`, {
          id: `links`,
          "aria-label": `Community links`,
          className: `mt-10 flex scroll-mt-32 flex-wrap items-center justify-center gap-4`,
          children: [
            (0, Z.jsx)(Q, {
              variant: `ghost`,
              href: n.dexscreener,
              children: `DexScreener`,
            }),
            (0, Z.jsx)(Q, {
              variant: `ghost`,
              href: n.twitter,
              children: `X / Twitter`,
            }),
            (0, Z.jsx)(Q, {
              variant: `ghost`,
              href: n.tiktok,
              children: `TikTok`,
            }),
            (0, Z.jsx)(Q, {
              variant: `ghost`,
              href: n.telegram,
              children: `Telegram`,
            }),
            (0, Z.jsx)(Q, {
              variant: `ghost`,
              href: n.stickerPack,
              children: `Sticker Pack`,
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `mt-6 flex justify-center`,
          children: (0, Z.jsx)(`a`, {
            href: n.geckoterminal,
            target: `_blank`,
            rel: `noopener noreferrer`,
            "aria-label": `View $CASHDOG on GeckoTerminal`,
            className: `inline-flex items-center border-4 border-border bg-background px-5 py-3 transition-colors hover:border-primary`,
            children: (0, Z.jsx)(`img`, {
              src: i.geckoTerminalBadge,
              alt: `CASHDOG live chart on GeckoTerminal`,
              loading: `lazy`,
              decoding: `async`,
              width: 200,
              height: 28,
              className: `h-6 w-auto sm:h-7`,
            }),
          }),
        }),
        (0, Z.jsx)(`p`, {
          className: `mx-auto mt-10 max-w-xl text-muted-foreground`,
          children: `© CASHDOG. Not financial advice. It's a meme with a rocket. DYOR.`,
        }),
      ],
    }),
  });
}
var $ = a(t()),
  Ge = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Ke = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  qe = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  Je = (e) => {
    let t = qe(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Ye = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Xe = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Ze = (0, $.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c
    ) =>
      (0, $.createElement)(
        `svg`,
        {
          ref: c,
          ...Ye,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Ge(`lucide`, i),
          ...(!a && !Xe(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, $.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  ),
  Qe = (e, t) => {
    let n = (0, $.forwardRef)(({ className: n, ...r }, i) =>
      (0, $.createElement)(Ze, {
        ref: i,
        iconNode: t,
        className: Ge(`lucide-${Ke(Je(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return (n.displayName = Je(e)), n;
  },
  $e = Qe(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  et = Qe(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]);
function tt() {
  let [e, t] = (0, $.useState)(!1);
  return (0, Z.jsxs)(`header`, {
    className: `fixed inset-x-0 top-0 z-50 border-b-4 border-primary bg-background/95 backdrop-blur-sm`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3`,
        children: [
          (0, Z.jsxs)(`a`, {
            href: `#top`,
            className: `flex items-center gap-3 no-underline`,
            children: [
              (0, Z.jsx)(`img`, {
                src: i.heroDog,
                alt: `CASHDOG pixel art mascot`,
                width: 34,
                height: 38,
                className: `h-9 w-auto`,
              }),
              (0, Z.jsx)(`span`, {
                className: `font-pixel text-sm text-primary`,
                children: `CASHDOG`,
              }),
            ],
          }),
          (0, Z.jsx)(`nav`, {
            "aria-label": `Primary`,
            className: `hidden items-center gap-6 md:flex`,
            children: r.map((e) =>
              (0, Z.jsx)(
                `a`,
                {
                  href: e.href,
                  className: `font-pixel text-[10px] uppercase tracking-wide text-foreground no-underline transition-colors hover:text-primary`,
                  children: e.label,
                },
                e.href
              )
            ),
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, Z.jsx)(Q, {
                href: n.buy,
                className: `hidden px-4 py-3 sm:inline-flex`,
                children: `Buy $CASHDOG`,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                "aria-label": e ? `Close menu` : `Open menu`,
                "aria-expanded": e,
                onClick: () => t((e) => !e),
                className: `border-4 border-border bg-surface p-2 text-foreground md:hidden`,
                children: e
                  ? (0, Z.jsx)(et, { className: `size-5` })
                  : (0, Z.jsx)($e, { className: `size-5` }),
              }),
            ],
          }),
        ],
      }),
      e
        ? (0, Z.jsx)(`nav`, {
            "aria-label": `Mobile`,
            className: `border-t-4 border-primary bg-panel px-5 py-4 md:hidden`,
            children: (0, Z.jsxs)(`ul`, {
              className: `flex flex-col gap-4`,
              children: [
                r.map((e) =>
                  (0, Z.jsx)(
                    `li`,
                    {
                      children: (0, Z.jsx)(`a`, {
                        href: e.href,
                        onClick: () => t(!1),
                        className: `font-pixel text-[11px] uppercase text-foreground no-underline`,
                        children: e.label,
                      }),
                    },
                    e.href
                  )
                ),
                (0, Z.jsx)(`li`, {
                  children: (0, Z.jsx)(Q, {
                    href: n.buy,
                    className: `w-full`,
                    children: `Buy $CASHDOG`,
                  }),
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
export { Q as a, He as i, We as n, Ue as r, tt as t };
