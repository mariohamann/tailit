var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e = Symbol(), r = /* @__PURE__ */ new Map();
class o {
  constructor(t2, r2) {
    if (this._$cssResult$ = true, r2 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = r.get(this.cssText);
    return t && e2 === void 0 && (r.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const i = (t2) => new o(typeof t2 == "string" ? t2 : t2 + "", e), s = (t2, ...r2) => {
  const i2 = t2.length === 1 ? t2[0] : r2.reduce((e2, r3, o2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r3) + t2[o2 + 1], t2[0]);
  return new o(i2, e);
}, n = t ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const r2 of t3.cssRules)
    e2 += r2.cssText;
  return i(e2);
})(t2) : t2;
var a;
const l = window.trustedTypes, d = l ? l.emptyScript : "", c = window.reactiveElementPolyfillSupport, h = { toAttribute(t2, e2) {
  switch (e2) {
    case Boolean:
      t2 = t2 ? d : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, e2) {
  let r2 = t2;
  switch (e2) {
    case Boolean:
      r2 = t2 !== null;
      break;
    case Number:
      r2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        r2 = JSON.parse(t2);
      } catch (t3) {
        r2 = null;
      }
  }
  return r2;
} }, p = (t2, e2) => e2 !== t2 && (e2 == e2 || t2 == t2), u = { attribute: true, type: String, converter: h, reflect: false, hasChanged: p };
class v extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var e2;
    (e2 = this.l) !== null && e2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((e2, r2) => {
      const o2 = this._$Eh(r2, e2);
      o2 !== void 0 && (this._$Eu.set(o2, r2), t2.push(o2));
    }), t2;
  }
  static createProperty(t2, e2 = u) {
    if (e2.state && (e2.attribute = false), this.finalize(), this.elementProperties.set(t2, e2), !e2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const r2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, o2 = this.getPropertyDescriptor(t2, r2, e2);
      o2 !== void 0 && Object.defineProperty(this.prototype, t2, o2);
    }
  }
  static getPropertyDescriptor(t2, e2, r2) {
    return { get() {
      return this[e2];
    }, set(o2) {
      const i2 = this[t2];
      this[e2] = o2, this.requestUpdate(t2, i2, r2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || u;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, e2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const r2 of e2)
        this.createProperty(r2, t3[r2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(t2) {
    const e2 = [];
    if (Array.isArray(t2)) {
      const r2 = new Set(t2.flat(1 / 0).reverse());
      for (const t3 of r2)
        e2.unshift(n(t3));
    } else
      t2 !== void 0 && e2.push(n(t2));
    return e2;
  }
  static _$Eh(t2, e2) {
    const r2 = e2.attribute;
    return r2 === false ? void 0 : typeof r2 == "string" ? r2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var e2, r2;
    ((e2 = this._$Eg) !== null && e2 !== void 0 ? e2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((r2 = t2.hostConnected) === null || r2 === void 0 || r2.call(t2));
  }
  removeController(t2) {
    var e2;
    (e2 = this._$Eg) === null || e2 === void 0 || e2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, e2) => {
      this.hasOwnProperty(e2) && (this._$Et.set(e2, this[e2]), delete this[e2]);
    });
  }
  createRenderRoot() {
    var e2;
    const r2 = (e2 = this.shadowRoot) !== null && e2 !== void 0 ? e2 : this.attachShadow(this.constructor.shadowRootOptions);
    return ((e3, r3) => {
      t ? e3.adoptedStyleSheets = r3.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : r3.forEach((t2) => {
        const r4 = document.createElement("style"), o2 = window.litNonce;
        o2 !== void 0 && r4.setAttribute("nonce", o2), r4.textContent = t2.cssText, e3.appendChild(r4);
      });
    })(r2, this.constructor.elementStyles), r2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var e2;
      return (e2 = t3.hostConnected) === null || e2 === void 0 ? void 0 : e2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var e2;
      return (e2 = t3.hostDisconnected) === null || e2 === void 0 ? void 0 : e2.call(t3);
    });
  }
  attributeChangedCallback(t2, e2, r2) {
    this._$AK(t2, r2);
  }
  _$ES(t2, e2, r2 = u) {
    var o2, i2;
    const s2 = this.constructor._$Eh(t2, r2);
    if (s2 !== void 0 && r2.reflect === true) {
      const n2 = ((i2 = (o2 = r2.converter) === null || o2 === void 0 ? void 0 : o2.toAttribute) !== null && i2 !== void 0 ? i2 : h.toAttribute)(e2, r2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(s2) : this.setAttribute(s2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, e2) {
    var r2, o2, i2;
    const s2 = this.constructor, n2 = s2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = s2.getPropertyOptions(n2), a2 = t3.converter, l2 = (i2 = (o2 = (r2 = a2) === null || r2 === void 0 ? void 0 : r2.fromAttribute) !== null && o2 !== void 0 ? o2 : typeof a2 == "function" ? a2 : null) !== null && i2 !== void 0 ? i2 : h.fromAttribute;
      this._$Ei = n2, this[n2] = l2(e2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, e2, r2) {
    let o2 = true;
    t2 !== void 0 && (((r2 = r2 || this.constructor.getPropertyOptions(t2)).hasChanged || p)(this[t2], e2) ? (this._$AL.has(t2) || this._$AL.set(t2, e2), r2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, r2))) : o2 = false), !this.isUpdatePending && o2 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, e3) => this[e3] = t3), this._$Et = void 0);
    let e2 = false;
    const r2 = this._$AL;
    try {
      e2 = this.shouldUpdate(r2), e2 ? (this.willUpdate(r2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var e3;
        return (e3 = t3.hostUpdate) === null || e3 === void 0 ? void 0 : e3.call(t3);
      }), this.update(r2)) : this._$EU();
    } catch (t3) {
      throw e2 = false, this._$EU(), t3;
    }
    e2 && this._$AE(r2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var e2;
    (e2 = this._$Eg) === null || e2 === void 0 || e2.forEach((t3) => {
      var e3;
      return (e3 = t3.hostUpdated) === null || e3 === void 0 ? void 0 : e3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$EC !== void 0 && (this._$EC.forEach((t3, e2) => this._$ES(e2, this[e2], t3)), this._$EC = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;
v.finalized = true, v.elementProperties = /* @__PURE__ */ new Map(), v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, c == null || c({ ReactiveElement: v }), ((a = globalThis.reactiveElementVersions) !== null && a !== void 0 ? a : globalThis.reactiveElementVersions = []).push("1.3.1");
const m = globalThis.trustedTypes, b = m ? m.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, w = `lit$${(Math.random() + "").slice(9)}$`, g = "?" + w, y = `<${g}>`, $ = document, _ = (t2 = "") => $.createComment(t2), x = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", A = Array.isArray, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, E = /-->/g, k = />/g, C = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, P = /'/g, O = /"/g, j = /^(?:script|style|textarea|title)$/i, U = (t2, ...e2) => ({ _$litType$: 1, strings: t2, values: e2 }), M = Symbol.for("lit-noChange"), z = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), D = $.createTreeWalker($, 129, null, false), H = (t2, e2) => {
  const r2 = t2.length - 1, o2 = [];
  let i2, s2 = e2 === 2 ? "<svg>" : "", n2 = S;
  for (let e3 = 0; e3 < r2; e3++) {
    const r3 = t2[e3];
    let a3, l2, d2 = -1, c2 = 0;
    for (; c2 < r3.length && (n2.lastIndex = c2, l2 = n2.exec(r3), l2 !== null); )
      c2 = n2.lastIndex, n2 === S ? l2[1] === "!--" ? n2 = E : l2[1] !== void 0 ? n2 = k : l2[2] !== void 0 ? (j.test(l2[2]) && (i2 = RegExp("</" + l2[2], "g")), n2 = C) : l2[3] !== void 0 && (n2 = C) : n2 === C ? l2[0] === ">" ? (n2 = i2 != null ? i2 : S, d2 = -1) : l2[1] === void 0 ? d2 = -2 : (d2 = n2.lastIndex - l2[2].length, a3 = l2[1], n2 = l2[3] === void 0 ? C : l2[3] === '"' ? O : P) : n2 === O || n2 === P ? n2 = C : n2 === E || n2 === k ? n2 = S : (n2 = C, i2 = void 0);
    const h2 = n2 === C && t2[e3 + 1].startsWith("/>") ? " " : "";
    s2 += n2 === S ? r3 + y : d2 >= 0 ? (o2.push(a3), r3.slice(0, d2) + "$lit$" + r3.slice(d2) + w + h2) : r3 + w + (d2 === -2 ? (o2.push(void 0), e3) : h2);
  }
  const a2 = s2 + (t2[r2] || "<?>") + (e2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [b !== void 0 ? b.createHTML(a2) : a2, o2];
};
class N {
  constructor({ strings: t2, _$litType$: e2 }, r2) {
    let o2;
    this.parts = [];
    let i2 = 0, s2 = 0;
    const n2 = t2.length - 1, a2 = this.parts, [l2, d2] = H(t2, e2);
    if (this.el = N.createElement(l2, r2), D.currentNode = this.el.content, e2 === 2) {
      const t3 = this.el.content, e3 = t3.firstChild;
      e3.remove(), t3.append(...e3.childNodes);
    }
    for (; (o2 = D.nextNode()) !== null && a2.length < n2; ) {
      if (o2.nodeType === 1) {
        if (o2.hasAttributes()) {
          const t3 = [];
          for (const e3 of o2.getAttributeNames())
            if (e3.endsWith("$lit$") || e3.startsWith(w)) {
              const r3 = d2[s2++];
              if (t3.push(e3), r3 !== void 0) {
                const t4 = o2.getAttribute(r3.toLowerCase() + "$lit$").split(w), e4 = /([.?@])?(.*)/.exec(r3);
                a2.push({ type: 1, index: i2, name: e4[2], strings: t4, ctor: e4[1] === "." ? I : e4[1] === "?" ? q : e4[1] === "@" ? K : F });
              } else
                a2.push({ type: 6, index: i2 });
            }
          for (const e3 of t3)
            o2.removeAttribute(e3);
        }
        if (j.test(o2.tagName)) {
          const t3 = o2.textContent.split(w), e3 = t3.length - 1;
          if (e3 > 0) {
            o2.textContent = m ? m.emptyScript : "";
            for (let r3 = 0; r3 < e3; r3++)
              o2.append(t3[r3], _()), D.nextNode(), a2.push({ type: 2, index: ++i2 });
            o2.append(t3[e3], _());
          }
        }
      } else if (o2.nodeType === 8)
        if (o2.data === g)
          a2.push({ type: 2, index: i2 });
        else {
          let t3 = -1;
          for (; (t3 = o2.data.indexOf(w, t3 + 1)) !== -1; )
            a2.push({ type: 7, index: i2 }), t3 += w.length - 1;
        }
      i2++;
    }
  }
  static createElement(t2, e2) {
    const r2 = $.createElement("template");
    return r2.innerHTML = t2, r2;
  }
}
function R(t2, e2, r2 = t2, o2) {
  var i2, s2, n2, a2;
  if (e2 === M)
    return e2;
  let l2 = o2 !== void 0 ? (i2 = r2._$Cl) === null || i2 === void 0 ? void 0 : i2[o2] : r2._$Cu;
  const d2 = x(e2) ? void 0 : e2._$litDirective$;
  return (l2 == null ? void 0 : l2.constructor) !== d2 && ((s2 = l2 == null ? void 0 : l2._$AO) === null || s2 === void 0 || s2.call(l2, false), d2 === void 0 ? l2 = void 0 : (l2 = new d2(t2), l2._$AT(t2, r2, o2)), o2 !== void 0 ? ((n2 = (a2 = r2)._$Cl) !== null && n2 !== void 0 ? n2 : a2._$Cl = [])[o2] = l2 : r2._$Cu = l2), l2 !== void 0 && (e2 = R(t2, l2._$AS(t2, e2.values), l2, o2)), e2;
}
class B {
  constructor(t2, e2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = e2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var e2;
    const { el: { content: r2 }, parts: o2 } = this._$AD, i2 = ((e2 = t2 == null ? void 0 : t2.creationScope) !== null && e2 !== void 0 ? e2 : $).importNode(r2, true);
    D.currentNode = i2;
    let s2 = D.nextNode(), n2 = 0, a2 = 0, l2 = o2[0];
    for (; l2 !== void 0; ) {
      if (n2 === l2.index) {
        let e3;
        l2.type === 2 ? e3 = new L(s2, s2.nextSibling, this, t2) : l2.type === 1 ? e3 = new l2.ctor(s2, l2.name, l2.strings, this, t2) : l2.type === 6 && (e3 = new W(s2, this, t2)), this.v.push(e3), l2 = o2[++a2];
      }
      n2 !== (l2 == null ? void 0 : l2.index) && (s2 = D.nextNode(), n2++);
    }
    return i2;
  }
  m(t2) {
    let e2 = 0;
    for (const r2 of this.v)
      r2 !== void 0 && (r2.strings !== void 0 ? (r2._$AI(t2, r2, e2), e2 += r2.strings.length - 2) : r2._$AI(t2[e2])), e2++;
  }
}
class L {
  constructor(t2, e2, r2, o2) {
    var i2;
    this.type = 2, this._$AH = z, this._$AN = void 0, this._$AA = t2, this._$AB = e2, this._$AM = r2, this.options = o2, this._$Cg = (i2 = o2 == null ? void 0 : o2.isConnected) === null || i2 === void 0 || i2;
  }
  get _$AU() {
    var t2, e2;
    return (e2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && e2 !== void 0 ? e2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const e2 = this._$AM;
    return e2 !== void 0 && t2.nodeType === 11 && (t2 = e2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, e2 = this) {
    t2 = R(this, t2, e2), x(t2) ? t2 === z || t2 == null || t2 === "" ? (this._$AH !== z && this._$AR(), this._$AH = z) : t2 !== this._$AH && t2 !== M && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : ((t3) => {
      var e3;
      return A(t3) || typeof ((e3 = t3) === null || e3 === void 0 ? void 0 : e3[Symbol.iterator]) == "function";
    })(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, e2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, e2);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== z && x(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k($.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var e2;
    const { values: r2, _$litType$: o2 } = t2, i2 = typeof o2 == "number" ? this._$AC(t2) : (o2.el === void 0 && (o2.el = N.createElement(o2.h, this.options)), o2);
    if (((e2 = this._$AH) === null || e2 === void 0 ? void 0 : e2._$AD) === i2)
      this._$AH.m(r2);
    else {
      const t3 = new B(i2, this), e3 = t3.p(this.options);
      t3.m(r2), this.k(e3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let e2 = T.get(t2.strings);
    return e2 === void 0 && T.set(t2.strings, e2 = new N(t2)), e2;
  }
  S(t2) {
    A(this._$AH) || (this._$AH = [], this._$AR());
    const e2 = this._$AH;
    let r2, o2 = 0;
    for (const i2 of t2)
      o2 === e2.length ? e2.push(r2 = new L(this.M(_()), this.M(_()), this, this.options)) : r2 = e2[o2], r2._$AI(i2), o2++;
    o2 < e2.length && (this._$AR(r2 && r2._$AB.nextSibling, o2), e2.length = o2);
  }
  _$AR(t2 = this._$AA.nextSibling, e2) {
    var r2;
    for ((r2 = this._$AP) === null || r2 === void 0 || r2.call(this, false, true, e2); t2 && t2 !== this._$AB; ) {
      const e3 = t2.nextSibling;
      t2.remove(), t2 = e3;
    }
  }
  setConnected(t2) {
    var e2;
    this._$AM === void 0 && (this._$Cg = t2, (e2 = this._$AP) === null || e2 === void 0 || e2.call(this, t2));
  }
}
class F {
  constructor(t2, e2, r2, o2, i2) {
    this.type = 1, this._$AH = z, this._$AN = void 0, this.element = t2, this.name = e2, this._$AM = o2, this.options = i2, r2.length > 2 || r2[0] !== "" || r2[1] !== "" ? (this._$AH = Array(r2.length - 1).fill(new String()), this.strings = r2) : this._$AH = z;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, e2 = this, r2, o2) {
    const i2 = this.strings;
    let s2 = false;
    if (i2 === void 0)
      t2 = R(this, t2, e2, 0), s2 = !x(t2) || t2 !== this._$AH && t2 !== M, s2 && (this._$AH = t2);
    else {
      const o3 = t2;
      let n2, a2;
      for (t2 = i2[0], n2 = 0; n2 < i2.length - 1; n2++)
        a2 = R(this, o3[r2 + n2], e2, n2), a2 === M && (a2 = this._$AH[n2]), s2 || (s2 = !x(a2) || a2 !== this._$AH[n2]), a2 === z ? t2 = z : t2 !== z && (t2 += (a2 != null ? a2 : "") + i2[n2 + 1]), this._$AH[n2] = a2;
    }
    s2 && !o2 && this.C(t2);
  }
  C(t2) {
    t2 === z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class I extends F {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t2) {
    this.element[this.name] = t2 === z ? void 0 : t2;
  }
}
const V = m ? m.emptyScript : "";
class q extends F {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t2) {
    t2 && t2 !== z ? this.element.setAttribute(this.name, V) : this.element.removeAttribute(this.name);
  }
}
class K extends F {
  constructor(t2, e2, r2, o2, i2) {
    super(t2, e2, r2, o2, i2), this.type = 5;
  }
  _$AI(t2, e2 = this) {
    var r2;
    if ((t2 = (r2 = R(this, t2, e2, 0)) !== null && r2 !== void 0 ? r2 : z) === M)
      return;
    const o2 = this._$AH, i2 = t2 === z && o2 !== z || t2.capture !== o2.capture || t2.once !== o2.once || t2.passive !== o2.passive, s2 = t2 !== z && (o2 === z || i2);
    i2 && this.element.removeEventListener(this.name, this, o2), s2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var e2, r2;
    typeof this._$AH == "function" ? this._$AH.call((r2 = (e2 = this.options) === null || e2 === void 0 ? void 0 : e2.host) !== null && r2 !== void 0 ? r2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class W {
  constructor(t2, e2, r2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = e2, this.options = r2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    R(this, t2);
  }
}
const J = window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q, Z;
J == null || J(N, L), ((f = globalThis.litHtmlVersions) !== null && f !== void 0 ? f : globalThis.litHtmlVersions = []).push("2.2.2");
class X extends v {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const r2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = r2.firstChild), r2;
  }
  update(t2) {
    const e2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = ((t3, e3, r2) => {
      var o2, i2;
      const s2 = (o2 = r2 == null ? void 0 : r2.renderBefore) !== null && o2 !== void 0 ? o2 : e3;
      let n2 = s2._$litPart$;
      if (n2 === void 0) {
        const t4 = (i2 = r2 == null ? void 0 : r2.renderBefore) !== null && i2 !== void 0 ? i2 : null;
        s2._$litPart$ = n2 = new L(e3.insertBefore(_(), t4), t4, void 0, r2 != null ? r2 : {});
      }
      return n2._$AI(t3), n2;
    })(e2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return M;
  }
}
X.finalized = true, X._$litElement$ = true, (Q = globalThis.litElementHydrateSupport) === null || Q === void 0 || Q.call(globalThis, { LitElement: X });
const Y = globalThis.litElementPolyfillSupport;
Y == null || Y({ LitElement: X }), ((Z = globalThis.litElementVersions) !== null && Z !== void 0 ? Z : globalThis.litElementVersions = []).push("3.2.0");
const G = s`${i('@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v125/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")}.material-icons{word-wrap:normal;-webkit-font-smoothing:antialiased;direction:ltr;display:inline-block;font-family:Material Icons;font-size:24px;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1;text-transform:none;white-space:nowrap}\n\n/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}:not(:defined){visibility:hidden}:host{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;line-height:1.5rem}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.invisible{visibility:hidden}.static{position:static}.absolute{position:absolute}.-ml-2\\.5{margin-left:-.625rem}.mr-2{margin-right:.5rem}.-ml-2{margin-left:-.5rem}.-ml-3{margin-left:-.75rem}.mr-1\\.5{margin-right:.375rem}.mr-1{margin-right:.25rem}.mr-0{margin-right:0}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.h-auto{height:auto}.h-0{height:0}.h-7{height:1.75rem}.h-6{height:1.5rem}.w-full{width:100%}.w-6{width:1.5rem}.w-auto{width:auto}.w-0{width:0}.flex-auto{flex:1 1 auto}.flex-shrink-0{flex-shrink:0}.flex-grow-0{flex-grow:0}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.items-center{align-items:center}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-sm{border-radius:.125rem}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-var-600{border-color:var(--tw-var-color-600)}.border-var-50{border-color:var(--tw-var-color-50)}.border-var-100{border-color:var(--tw-var-color-100)}.bg-var-50{background-color:var(--tw-var-color-50)}.bg-var-600{background-color:var(--tw-var-color-600)}.bg-var-100{background-color:var(--tw-var-color-100)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-4{padding:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.text-var{font-size:var(--tw-var-spacing)}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.text-var-600{color:var(--tw-var-color-600)}.text-var-900{color:var(--tw-var-color-900)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.opacity-100{opacity:1}.opacity-0{opacity:0}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.var-indigo{--tw-var-color-50:#eef2ff;--tw-var-color-100:#e0e7ff;--tw-var-color-200:#c7d2fe;--tw-var-color-300:#a5b4fc;--tw-var-color-400:#818cf8;--tw-var-color-500:#6366f1;--tw-var-color-600:#4f46e5;--tw-var-color-700:#4338ca;--tw-var-color-800:#3730a3;--tw-var-color-900:#312e81}.var-green{--tw-var-color-50:#f0fdf4;--tw-var-color-100:#dcfce7;--tw-var-color-200:#bbf7d0;--tw-var-color-300:#86efac;--tw-var-color-400:#4ade80;--tw-var-color-500:#22c55e;--tw-var-color-600:#16a34a;--tw-var-color-700:#15803d;--tw-var-color-800:#166534;--tw-var-color-900:#14532d}.var-gray{--tw-var-color-50:#f9fafb;--tw-var-color-100:#f3f4f6;--tw-var-color-200:#e5e7eb;--tw-var-color-300:#d1d5db;--tw-var-color-400:#9ca3af;--tw-var-color-500:#6b7280;--tw-var-color-600:#4b5563;--tw-var-color-700:#374151;--tw-var-color-800:#1f2937;--tw-var-color-900:#111827}.var-orange{--tw-var-color-50:#fff7ed;--tw-var-color-100:#ffedd5;--tw-var-color-200:#fed7aa;--tw-var-color-300:#fdba74;--tw-var-color-400:#fb923c;--tw-var-color-500:#f97316;--tw-var-color-600:#ea580c;--tw-var-color-700:#c2410c;--tw-var-color-800:#9a3412;--tw-var-color-900:#7c2d12}.var-red{--tw-var-color-50:#fef2f2;--tw-var-color-100:#fee2e2;--tw-var-color-200:#fecaca;--tw-var-color-300:#fca5a5;--tw-var-color-400:#f87171;--tw-var-color-500:#ef4444;--tw-var-color-600:#dc2626;--tw-var-color-700:#b91c1c;--tw-var-color-800:#991b1b;--tw-var-color-900:#7f1d1d}.var-primary{--tw-var-color-50:#f0f9ff;--tw-var-color-100:#e0f2fe;--tw-var-color-200:#bae6fd;--tw-var-color-300:#7dd3fc;--tw-var-color-400:#38bdf8;--tw-var-color-500:#0ea5e9;--tw-var-color-600:#0284c7;--tw-var-color-700:#0369a1;--tw-var-color-800:#075985;--tw-var-color-900:#0c4a6e}.var-secondary{--tw-var-color-50:#fdf2f8;--tw-var-color-100:#fce7f3;--tw-var-color-200:#fbcfe8;--tw-var-color-300:#f9a8d4;--tw-var-color-400:#f472b6;--tw-var-color-500:#ec4899;--tw-var-color-600:#db2777;--tw-var-color-700:#be185d;--tw-var-color-800:#9d174d;--tw-var-color-900:#831843}.var-neutral{--tw-var-color-50:#f9fafb;--tw-var-color-100:#f3f4f6;--tw-var-color-200:#e5e7eb;--tw-var-color-300:#d1d5db;--tw-var-color-400:#9ca3af;--tw-var-color-500:#6b7280;--tw-var-color-600:#4b5563;--tw-var-color-700:#374151;--tw-var-color-800:#1f2937;--tw-var-color-900:#111827}.var-spacing-7{--tw-var-spacing:1.75rem}.var-spacing-4{--tw-var-spacing:1rem}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-var-300:focus{--tw-ring-color:var(--tw-var-color-300)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.not-disabled\\:hover\\:border-var-800:hover:not([disabled]){border-color:var(--tw-var-color-800)}.not-disabled\\:hover\\:bg-var-800:hover:not([disabled]){background-color:var(--tw-var-color-800)}.not-disabled\\:hover\\:text-var-800:hover:not([disabled]){color:var(--tw-var-color-800)}')}`, tt = { "./components/tailit-accordion/tailit-accordion.ts": () => Promise.resolve().then(function() {
  return xt;
}), "./components/tailit-badge/tailit-badge.ts": () => Promise.resolve().then(function() {
  return Ot;
}), "./components/tailit-button/tailit-button.ts": () => Promise.resolve().then(function() {
  return Zt;
}), "./components/tailit-element/tailit-element.ts": () => Promise.resolve().then(function() {
  return wt;
}), "./components/headless/headless-button/headless-button.ts": () => Promise.resolve().then(function() {
  return qt;
}), "./components/headless/headless-expandable/headless-expandable.ts": () => Promise.resolve().then(function() {
  return ft;
}), "./components/tailit-chips/tailit-chip/tailit-chip.ts": () => Promise.resolve().then(function() {
  return ee;
}), "./components/tailit-chips/tailit-chip-avatar/tailit-chip-avatar.ts": () => Promise.resolve().then(function() {
  return ne;
}), "./components/tailit-chips/tailit-chip-filter/tailit-chip-filter.ts": () => Promise.resolve().then(function() {
  return he;
}) };
Object.keys(tt).forEach((t2) => {
  tt[t2]();
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = (t2) => (e2) => typeof e2 == "function" ? ((t3, e3) => (window.customElements.define(t3, e3), e3))(t2, e2) : ((t3, e3) => {
  const { kind: r2, elements: o2 } = e3;
  return { kind: r2, elements: o2, finisher(e4) {
    window.customElements.define(t3, e4);
  } };
})(t2, e2), rt = (t2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(r2) {
  r2.createProperty(e2.key, t2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(r2) {
  r2.createProperty(e2.key, t2);
} };
function ot(t2) {
  return (e2, r2) => r2 !== void 0 ? ((t3, e3, r3) => {
    e3.constructor.createProperty(r3, t3);
  })(t2, e2, r2) : rt(t2, e2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
function it(t2) {
  return ot(__spreadProps(__spreadValues({}, t2), { state: true }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = ({ finisher: t2, descriptor: e2 }) => (r2, o2) => {
  var i2;
  if (o2 === void 0) {
    const o3 = (i2 = r2.originalKey) !== null && i2 !== void 0 ? i2 : r2.key, s2 = e2 != null ? { kind: "method", placement: "prototype", key: o3, descriptor: e2(r2.key) } : __spreadProps(__spreadValues({}, r2), { key: o3 });
    return t2 != null && (s2.finisher = function(e3) {
      t2(e3, o3);
    }), s2;
  }
  {
    const i3 = r2.constructor;
    e2 !== void 0 && Object.defineProperty(r2, o2, e2(o2)), t2 == null || t2(i3, o2);
  }
};
function nt(t2) {
  return st({ finisher: (e2, r2) => {
    Object.assign(e2.prototype[r2], t2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function at(t2, e2) {
  return st({ descriptor: (r2) => {
    const o2 = { get() {
      var e3, r3;
      return (r3 = (e3 = this.renderRoot) === null || e3 === void 0 ? void 0 : e3.querySelector(t2)) !== null && r3 !== void 0 ? r3 : null;
    }, enumerable: true, configurable: true };
    if (e2) {
      const e3 = typeof r2 == "symbol" ? Symbol() : "__" + r2;
      o2.get = function() {
        var r3, o3;
        return this[e3] === void 0 && (this[e3] = (o3 = (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelector(t2)) !== null && o3 !== void 0 ? o3 : null), this[e3];
      };
    }
    return o2;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lt;
function dt(t2, e2, r2) {
  const o2 = new CustomEvent(e2, __spreadValues({ bubbles: true, cancelable: false, composed: true, detail: {} }, r2));
  return t2.dispatchEvent(o2), o2;
}
function ct(t2, e2) {
  return new Promise((r2) => {
    t2.addEventListener(e2, function o2(i2) {
      i2.target === t2 && (t2.removeEventListener(e2, o2), r2());
    });
  });
}
(lt = window.HTMLSlotElement) === null || lt === void 0 || lt.prototype.assignedElements;
var ht = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, ut = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? pt(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && ht(e2, r2, s2), s2;
};
class vt extends X {
  constructor() {
    super(...arguments), this.open = false, this.disabled = false, this.inherit = false, this.renderHeader = (t2) => U`<header part="header" role="button" aria-expanded="${this.open ? "true" : "false"}" aria-controls="body" aria-disabled="${this.disabled ? "true" : "false"}" tabindex="${this.disabled || this.inherit ? "-1" : "0"}" @click="${this.handleSummaryClick}" @keydown="${this.handleSummaryKeyDown}">${t2}</header>`, this.renderBody = (t2) => U`<div id="body">${t2}</div>`;
  }
  async show() {
    if (!this.open && !this.disabled)
      return this.open = true, ct(this, "sl-after-show");
  }
  async hide() {
    if (this.open && !this.disabled)
      return this.open = false, ct(this, "sl-after-hide");
  }
  handleSummaryClick() {
    this.disabled || (this.open ? this.hide() : this.show(), this.header.focus());
  }
  handleSummaryKeyDown(t2) {
    t2.key !== "Enter" && t2.key !== " " || (t2.preventDefault(), this.open ? this.hide() : this.show()), t2.key !== "ArrowUp" && t2.key !== "ArrowLeft" || (t2.preventDefault(), this.hide()), t2.key !== "ArrowDown" && t2.key !== "ArrowRight" || (t2.preventDefault(), this.show());
  }
  async handleOpenChange() {
    this.open ? (dt(this, "sl-show"), dt(this, "sl-after-show")) : (dt(this, "sl-hide"), dt(this, "sl-after-hide"));
  }
}
ut([at('[part="header"]')], vt.prototype, "header", 2), ut([ot({ type: Boolean, reflect: true })], vt.prototype, "open", 2), ut([ot({ type: Boolean, reflect: true })], vt.prototype, "disabled", 2), ut([it()], vt.prototype, "inherit", 2), ut([function(t2, e2) {
  const r2 = { waitUntilFirstUpdate: false, waitUntilFirstUpdate: true };
  return (e3, o2) => {
    const { update: i2 } = e3;
    if (t2 in e3) {
      const s2 = t2;
      e3.update = function(t3) {
        if (t3.has(s2)) {
          const e4 = t3.get(s2), i3 = this[s2];
          e4 !== i3 && (r2.waitUntilFirstUpdate && !this.hasUpdated || this[o2](e4, i3));
        }
        i2.call(this, t3);
      };
    }
  };
}("open")], vt.prototype, "handleOpenChange", 1);
var ft = Object.freeze(Object.defineProperty({ __proto__: null, default: vt }, Symbol.toStringTag, { value: "Module" })), mt = Object.defineProperty;
Object.getOwnPropertyDescriptor;
const bt = (t2) => {
  class e2 extends t2 {
    constructor() {
      super(...arguments), this.coloring = "primary";
    }
    coloringClass() {
      switch (this.coloring) {
        case "primary":
        default:
          return "var-primary";
        case "secondary":
          return "var-secondary";
        case "neutral":
          return "var-neutral";
      }
    }
  }
  return e2.styles = [s`${G}`], ((t3, e3, r2, o2) => {
    for (var i2, s2 = void 0, n2 = t3.length - 1; n2 >= 0; n2--)
      (i2 = t3[n2]) && (s2 = i2(e3, r2, s2) || s2);
    s2 && mt(e3, r2, s2);
  })([ot({ reflect: true })], e2.prototype, "coloring"), e2;
};
var wt = Object.freeze(Object.defineProperty({ __proto__: null, tailitElementProperties: { colorings: ["primary", "secondary", "neutral"] }, TailitElement: bt }, Symbol.toStringTag, { value: "Module" })), gt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, $t = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? yt(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && gt(e2, r2, s2), s2;
};
let _t = class extends bt(vt) {
  render() {
    return U`<div part="base" class="${this.coloringClass()} rounded-sm overflow-hidden shadow-md">${this.renderHeader(U`<div class="flex font-medium text-var-600 items-center p-4 select-none cursor-pointer transition-all ${this.disabled && "cursor-not-allowed"} ${this.open ? "bg-var-50 text-var-900" : "hover:bg-gray-50"}"><div id="summary" part="summary" class="flex flex-auto items-center"><slot name="summary">${this.summary}</slot></div><span class="flex flex-auto flex-grow-0 flex-shrink-0 items-center"><span class="material-icons var-spacing-7 text-var overflow-hidden transition-all ${this.open && "rotate-180"}">expand_more</span></span></div>`)} ${this.renderBody(U`<div class="overflow-hidden transition-all ${this.open ? "h-auto" : "h-0 invisible"}"><div class="p-4" role="region" aria-labelledby="header"><slot></slot></div></div>`)}</div>`;
  }
};
$t([ot()], _t.prototype, "summary", 2), _t = $t([et("tailit-accordion")], _t);
var xt = Object.freeze(Object.defineProperty({ __proto__: null, get default() {
  return _t;
} }, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = (St = class extends class {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, r2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = r2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
} {
  constructor(t2) {
    var e2;
    if (super(t2), t2.type !== 1 || t2.name !== "class" || ((e2 = t2.strings) === null || e2 === void 0 ? void 0 : e2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((e2) => t2[e2]).join(" ") + " ";
  }
  update(t2, [e2]) {
    var r2, o2;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), t2.strings !== void 0 && (this.st = new Set(t2.strings.join(" ").split(/\s/).filter((t3) => t3 !== "")));
      for (const t3 in e2)
        e2[t3] && !((r2 = this.st) === null || r2 === void 0 ? void 0 : r2.has(t3)) && this.et.add(t3);
      return this.render(e2);
    }
    const i2 = t2.element.classList;
    this.et.forEach((t3) => {
      t3 in e2 || (i2.remove(t3), this.et.delete(t3));
    });
    for (const t3 in e2) {
      const r3 = !!e2[t3];
      r3 === this.et.has(t3) || ((o2 = this.st) === null || o2 === void 0 ? void 0 : o2.has(t3)) || (r3 ? (i2.add(t3), this.et.add(t3)) : (i2.remove(t3), this.et.delete(t3)));
    }
    return M;
  }
}, (...t2) => ({ _$litDirective$: St, values: t2 }));
var St, Et = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ct = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? kt(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && Et(e2, r2, s2), s2;
};
let Pt = class extends X {
  constructor() {
    super(...arguments), this.variant = "primary", this.ping = false;
  }
  render() {
    return U`<span part="base" class="${At({ "inline-flex bg-var-600 items-center justify-center rounded-full text-xs font-semibold leading-none rounded whitespace-nowrap py-1 px-2 select-none text-white": true, "var-indigo": this.variant === "primary", "var-green": this.variant === "success", "var-gray": this.variant === "neutral", "var-orange": this.variant === "warning", "var-red": this.variant === "danger", ping: this.ping })}" role="status"><slot></slot></span>`;
  }
};
Pt.styles = [s`.ping{animation:ping 1.5s infinite}@keyframes ping{0%{box-shadow:0 0 0 0 var(--tw-var-color-600)}70%{box-shadow:0 0 0 .5rem transparent}100%{box-shadow:0 0 0 0 transparent}}`], Ct([ot({ reflect: true })], Pt.prototype, "variant", 2), Ct([ot({ type: Boolean, reflect: true })], Pt.prototype, "ping", 2), Pt = Ct([et("sl-badge")], Pt);
var Ot = Object.freeze(Object.defineProperty({ __proto__: null, properties: { variants: ["primary", "success", "neutral", "warning", "danger"] }, get default() {
  return Pt;
} }, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jt = Symbol.for(""), Ut = (t2) => {
  var e2, r2;
  if (((e2 = t2) === null || e2 === void 0 ? void 0 : e2.r) === jt)
    return (r2 = t2) === null || r2 === void 0 ? void 0 : r2._$litStatic$;
}, Mt = (t2, ...e2) => ({ _$litStatic$: e2.reduce((e3, r2, o2) => e3 + ((t3) => {
  if (t3._$litStatic$ !== void 0)
    return t3._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t3}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r2) + t2[o2 + 1], t2[0]), r: jt }), zt = /* @__PURE__ */ new Map(), Tt = ((t2) => (e2, ...r2) => {
  const o2 = r2.length;
  let i2, s2;
  const n2 = [], a2 = [];
  let l2, d2 = 0, c2 = false;
  for (; d2 < o2; ) {
    for (l2 = e2[d2]; d2 < o2 && (s2 = r2[d2], i2 = Ut(s2)) !== void 0; )
      l2 += i2 + e2[++d2], c2 = true;
    a2.push(s2), n2.push(l2), d2++;
  }
  if (d2 === o2 && n2.push(e2[o2]), c2) {
    const t3 = n2.join("$$lit$$");
    (e2 = zt.get(t3)) === void 0 && (n2.raw = n2, zt.set(t3, e2 = n2)), r2 = a2;
  }
  return t2(e2, ...r2);
})(U), Dt = (t2) => t2 != null ? t2 : z;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ht extends Event {
  constructor(t2) {
    super("formdata"), this.formData = t2;
  }
}
class Nt extends FormData {
  constructor(t2) {
    super(t2), this.form = t2, t2.dispatchEvent(new Ht(this));
  }
  append(t2, e2) {
    let r2 = this.form.elements[t2];
    if (r2 || (r2 = document.createElement("input"), r2.type = "hidden", r2.name = t2, this.form.appendChild(r2)), this.has(t2)) {
      const o2 = this.getAll(t2), i2 = o2.indexOf(r2.value);
      i2 !== -1 && o2.splice(i2, 1), o2.push(e2), this.set(t2, o2);
    } else
      super.append(t2, e2);
    r2.value = e2;
  }
}
function Rt() {
  window.FormData && !function() {
    const t2 = document.createElement("form");
    let e2 = false;
    return document.body.append(t2), t2.addEventListener("submit", (t3) => {
      new FormData(t3.target), t3.preventDefault();
    }), t2.addEventListener("formdata", () => e2 = true), t2.dispatchEvent(new Event("submit", { cancelable: true })), t2.remove(), e2;
  }() && (window.FormData = Nt, window.addEventListener("submit", (t2) => {
    t2.defaultPrevented || new FormData(t2.target);
  }));
}
document.readyState === "complete" ? Rt() : window.addEventListener("DOMContentLoaded", () => Rt());
class Bt {
  constructor(t2, e2) {
    (this.host = t2).addController(this), this.options = __spreadValues({ form: (t3) => t3.closest("form"), name: (t3) => t3.name, value: (t3) => t3.value, disabled: (t3) => t3.disabled, reportValidity: (t3) => typeof t3.reportValidity != "function" || t3.reportValidity() }, e2), this.handleFormData = this.handleFormData.bind(this), this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  hostConnected() {
    this.form = this.options.form(this.host), this.form && (this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit));
  }
  hostDisconnected() {
    this.form && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form = void 0);
  }
  handleFormData(t2) {
    const e2 = this.options.disabled(this.host), r2 = this.options.name(this.host), o2 = this.options.value(this.host);
    e2 || typeof r2 != "string" || o2 === void 0 || (Array.isArray(o2) ? o2.forEach((e3) => {
      t2.formData.append(r2, e3.toString());
    }) : t2.formData.append(r2, o2.toString()));
  }
  handleFormSubmit(t2) {
    const e2 = this.options.disabled(this.host), { reportValidity: r2 } = this.options;
    !this.form || this.form.noValidate || e2 || r2(this.host) || (t2.preventDefault(), t2.stopImmediatePropagation());
  }
  submit(t2) {
    if (this.form) {
      const e2 = document.createElement("button");
      e2.type = "submit", e2.style.position = "absolute", e2.style.width = "0", e2.style.height = "0", e2.style.clip = "rect(0 0 0 0)", e2.style.clipPath = "inset(50%)", e2.style.overflow = "hidden", e2.style.whiteSpace = "nowrap", t2 && ["formaction", "formmethod", "formnovalidate", "formtarget"].forEach((r2) => {
        t2.hasAttribute(r2) && e2.setAttribute(r2, t2.getAttribute(r2));
      }), this.form.append(e2), e2.click(), e2.remove();
    }
  }
}
var Lt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, It = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? Ft(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && Lt(e2, r2, s2), s2;
};
const Vt = (t2) => {
  class e2 extends t2 {
    constructor() {
      super(...arguments), this.formSubmitController = new Bt(this, { form: (t3) => {
        if (t3.hasAttribute("form")) {
          const e3 = t3.getRootNode(), r2 = t3.getAttribute("form");
          return e3.getElementById(r2);
        }
        return t3.closest("form");
      } }), this.hasFocus = false, this.disabled = false, this.type = "button";
    }
    click() {
      this.button.click();
    }
    focus(t3) {
      this.button.focus(t3);
    }
    blur() {
      this.button.blur();
    }
    handleBlur() {
      this.hasFocus = false, dt(this, "sl-blur");
    }
    handleFocus() {
      this.hasFocus = true, dt(this, "sl-focus");
    }
    handleClick(t3) {
      if (this.disabled)
        return t3.preventDefault(), void t3.stopPropagation();
      this.type === "submit" && this.formSubmitController.submit(this);
    }
    renderButton(t3, e3) {
      const r2 = !!this.href, o2 = r2 ? Mt`a` : Mt`button`;
      return Tt`
      <${o2}
        class="${e3}"
        part="base"
        ?disabled=${Dt(r2 ? void 0 : this.disabled)}
        type=${Dt(r2 ? void 0 : this.type)}
        name=${Dt(r2 ? void 0 : this.name)}
        value=${Dt(r2 ? void 0 : this.value)}
        href=${Dt(this.href)}
        target=${Dt(this.target)}
        download=${Dt(this.download)}
        rel=${Dt(this.target ? "noreferrer noopener" : void 0)}
        role="button"
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
      ${t3}
      </${o2}>
    `;
    }
  }
  return It([at('[part="base"]')], e2.prototype, "button", 2), It([it()], e2.prototype, "hasFocus", 2), It([ot({ type: Boolean, reflect: true })], e2.prototype, "disabled", 2), It([ot()], e2.prototype, "type", 2), It([ot()], e2.prototype, "name", 2), It([ot()], e2.prototype, "value", 2), It([ot()], e2.prototype, "href", 2), It([ot()], e2.prototype, "target", 2), It([ot()], e2.prototype, "download", 2), It([ot()], e2.prototype, "form", 2), It([ot({ attribute: "formaction" })], e2.prototype, "formAction", 2), It([ot({ attribute: "formmethod" })], e2.prototype, "formMethod", 2), It([ot({ attribute: "formnovalidate", type: Boolean })], e2.prototype, "formNoValidate", 2), It([ot({ attribute: "formtarget" })], e2.prototype, "formTarget", 2), e2;
};
var qt = Object.freeze(Object.defineProperty({ __proto__: null, HeadlessButton: Vt }, Symbol.toStringTag, { value: "Module" })), Kt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, Jt = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? Wt(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && Kt(e2, r2, s2), s2;
};
let Qt = class extends bt(Vt(X)) {
  constructor() {
    super(...arguments), this.variant = "secondary", this.variantClass = () => {
      switch (this.variant) {
        case "primary":
          return "text-white bg-var-600 border border-var-600 not-disabled:hover:bg-var-800 not-disabled:hover:border-var-800";
        case "secondary":
          return "bg-var-50 text-var-600 border border-var-600 not-disabled:hover:text-var-800 not-disabled:hover:border-var-800";
        case "tertiary":
          return "bg-var-50 text-var-600 border border-var-50 not-disabled:hover:text-var-800";
        default:
          return "";
      }
    };
  }
  render() {
    return this.renderButton(Tt`<slot></slot>`, `
        ${this.coloringClass()}
        ${this.variantClass()}
        inline-flex items-center font-medium rounded-lg whitespace-nowrap text-sm px-5 py-2.5 outline-none transition-color
        focus:ring-4 focus:ring-var-300
        disabled:opacity-50 disabled:saturate-75 disabled:cursor-not-allowed
      `);
  }
};
Jt([ot({ reflect: true })], Qt.prototype, "variant", 2), Qt = Jt([et("tailit-button")], Qt);
var Zt = Object.freeze(Object.defineProperty({ __proto__: null, tailitButtonProperties: { variants: ["primary", "secondary", "tertiary"] }, get default() {
  return Qt;
} }, Symbol.toStringTag, { value: "Module" })), Xt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Gt = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? Yt(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && Xt(e2, r2, s2), s2;
};
let te = class extends bt(X) {
  constructor() {
    super(...arguments), this.filled = false, this.as = "span", this.role = "", this.renderChip = (t2) => {
      const e2 = Mt`${((t3) => ({ _$litStatic$: this.as, r: jt }))()}`, r2 = this.filled ? "bg-var-100 border-var-100 text-var-900" : "border-var-600 border text-var-600";
      return Tt`
      <${e2}
        @click=${this.onClick}
        part="base"
        class="${this.coloringClass()} ${r2} text-sm transition-all inline-flex items-center border justify-center rounded-full font-medium leading-none whitespace-nowrap h-7 px-3 select-none" role=${this.role}
      >
        ${t2}
      </${e2}>
    `;
    };
  }
  render() {
    return this.renderChip(Tt`<slot></slot>`);
  }
  onClick() {
  }
};
Gt([ot({ type: Boolean, reflect: true })], te.prototype, "filled", 2), Gt([ot()], te.prototype, "as", 2), Gt([ot()], te.prototype, "role", 2), Gt([nt({ capture: true })], te.prototype, "onClick", 1), te = Gt([et("tailit-chip")], te);
var ee = Object.freeze(Object.defineProperty({ __proto__: null, get default() {
  return te;
} }, Symbol.toStringTag, { value: "Module" })), re = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, ie = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? oe(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && re(e2, r2, s2), s2;
};
let se = class extends te {
  constructor() {
    super(...arguments), this.as = "button", this.img = "", this.filled = false;
  }
  renderAvatar() {
    return this.img ? Tt`<img src="${this.img}" class="w-6 h-6 rounded-full -ml-2.5 mr-2 object-cover overflow-hidden transition-all">` : Tt`<span class="material-icons var-spacing-7 text-gray-400 text-var -ml-3 mr-1.5 overflow-hidden transition-all">account_circle</span>`;
  }
  render() {
    return this.renderChip(Tt`${this.renderAvatar()}<slot></slot>`);
  }
  onClick() {
    this.filled = !this.filled;
  }
};
ie([ot()], se.prototype, "as", 2), ie([ot()], se.prototype, "img", 2), ie([ot({ type: Boolean, reflect: true, attribute: "checked" })], se.prototype, "filled", 2), ie([nt({ capture: true })], se.prototype, "onClick", 1), se = ie([et("tailit-chip-avatar")], se);
var ne = Object.freeze(Object.defineProperty({ __proto__: null, get default() {
  return se;
} }, Symbol.toStringTag, { value: "Module" })), ae = Object.defineProperty, le = Object.getOwnPropertyDescriptor, de = (t2, e2, r2, o2) => {
  for (var i2, s2 = o2 > 1 ? void 0 : o2 ? le(e2, r2) : e2, n2 = t2.length - 1; n2 >= 0; n2--)
    (i2 = t2[n2]) && (s2 = (o2 ? i2(e2, r2, s2) : i2(s2)) || s2);
  return o2 && s2 && ae(e2, r2, s2), s2;
};
let ce = class extends te {
  constructor() {
    super(...arguments), this.as = "button", this.filled = false, this.renderCheckmark = () => Tt`<span class="${this.filled ? "w-auto opacity-100 mr-1" : "invisible w-0 opacity-0 mr-0"} material-icons var-spacing-4 text-var overflow-hidden transition-all">check</span>`;
  }
  render() {
    return this.renderChip(Tt`${this.renderCheckmark()}<slot></slot>`);
  }
  onClick() {
    this.filled = !this.filled;
  }
};
de([ot()], ce.prototype, "as", 2), de([ot({ type: Boolean, reflect: true, attribute: "checked" })], ce.prototype, "filled", 2), de([nt({ capture: true })], ce.prototype, "onClick", 1), ce = de([et("tailit-chip-filter")], ce);
var he = Object.freeze(Object.defineProperty({ __proto__: null, properties: { colors: ["primary", "secondary", "gray"] }, get default() {
  return ce;
} }, Symbol.toStringTag, { value: "Module" }));
export { G as tailwind };
