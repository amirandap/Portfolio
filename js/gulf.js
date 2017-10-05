! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function n(t, e) {
        var n = (e = e || et).createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = dt.type(t);
        return "function" !== n && !dt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function o(t, e, n) {
        return dt.isFunction(e) ? dt.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? dt.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? dt.grep(t, function (t) {
            return st.call(e, t) > -1 !== n
        }) : St.test(e) ? dt.filter(e, t, n) : (e = dt.filter(e, t), dt.grep(t, function (t) {
            return st.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function a(t) {
        var e = {};
        return dt.each(t.match(Dt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function u(t) {
        return t
    }

    function c(t) {
        throw t
    }

    function l(t, e, n, i) {
        var r;
        try {
            t && dt.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && dt.isFunction(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    function f() {
        et.removeEventListener("DOMContentLoaded", f), t.removeEventListener("load", f), dt.ready()
    }

    function h() {
        this.expando = dt.expando + h.uid++
    }

    function p(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Mt.test(t) ? JSON.parse(t) : t)
    }

    function d(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Pt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = p(n)
                } catch (t) {}
                Lt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function m(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return dt.css(t, e, "")
            },
            u = a(),
            c = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
            l = (dt.cssNumber[e] || "px" !== c && +u) && Rt.exec(dt.css(t, e));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do {
                o = o || ".5", l /= o, dt.style(t, e, l + c)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r
    }

    function v(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = Wt[i];
        return r || (e = n.body.appendChild(n.createElement(i)), r = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Wt[i] = r, r)
    }

    function g(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = It.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Ht(i) && (r[o] = v(i))) : "none" !== n && (r[o] = "none", It.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t
    }

    function y(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? dt.merge([t], n) : n
    }

    function $(t, e) {
        for (var n = 0, i = t.length; n < i; n++) It.set(t[n], "globalEval", !e || It.get(e[n], "globalEval"))
    }

    function x(t, e, n, i, r) {
        for (var o, s, a, u, c, l, f = e.createDocumentFragment(), h = [], p = 0, d = t.length; p < d; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === dt.type(o)) dt.merge(h, o.nodeType ? [o] : o);
                else if (Qt.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (Ut.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[a] || Yt._default, s.innerHTML = u[1] + dt.htmlPrefilter(o) + u[2], l = u[0]; l--;) s = s.lastChild;
            dt.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(e.createTextNode(o));
        for (f.textContent = "", p = 0; o = h[p++];)
            if (i && dt.inArray(o, i) > -1) r && r.push(o);
            else if (c = dt.contains(o.ownerDocument, o), s = y(f.appendChild(o), "script"), c && $(s), n)
            for (l = 0; o = s[l++];) Vt.test(o.type || "") && n.push(o);
        return f
    }

    function b() {
        return !0
    }

    function w() {
        return !1
    }

    function C() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function S(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) S(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = w;
        else if (!r) return t;
        return 1 === o && (s = r, r = function (t) {
            return dt().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = dt.guid++)), t.each(function () {
            dt.event.add(this, e, r, i, n)
        })
    }

    function T(t, e) {
        return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? dt(">tbody", t)[0] || t : t
    }

    function E(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function k(t) {
        var e = ne.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function A(t, e) {
        var n, i, r, o, s, a, u, c;
        if (1 === e.nodeType) {
            if (It.hasData(t) && (o = It.access(t), s = It.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) dt.event.add(e, r, c[r][n])
            }
            Lt.hasData(t) && (a = Lt.access(t), u = dt.extend({}, a), Lt.set(e, u))
        }
    }

    function D(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Bt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function j(t, e, i, r) {
        e = rt.apply([], e);
        var o, s, a, u, c, l, f = 0,
            h = t.length,
            p = h - 1,
            d = e[0],
            m = dt.isFunction(d);
        if (m || h > 1 && "string" == typeof d && !ht.checkClone && ee.test(d)) return t.each(function (n) {
            var o = t.eq(n);
            m && (e[0] = d.call(this, n, o.html())), j(o, e, i, r)
        });
        if (h && (o = x(e, t[0].ownerDocument, !1, t, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (u = (a = dt.map(y(o, "script"), E)).length; f < h; f++) c = o, f !== p && (c = dt.clone(c, !0, !0), u && dt.merge(a, y(c, "script"))), i.call(t[f], c, f);
            if (u)
                for (l = a[a.length - 1].ownerDocument, dt.map(a, k), f = 0; f < u; f++) c = a[f], Vt.test(c.type || "") && !It.access(c, "globalEval") && dt.contains(l, c) && (c.src ? dt._evalUrl && dt._evalUrl(c.src) : n(c.textContent.replace(ie, ""), l))
        }
        return t
    }

    function O(t, e, n) {
        for (var i, r = e ? dt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || dt.cleanData(y(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && $(y(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function N(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || se(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !ht.pixelMarginRight() && oe.test(s) && re.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function _(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function I(t) {
        if (t in he) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = fe.length; n--;)
            if ((t = fe[n] + e) in he) return t
    }

    function L(t) {
        var e = dt.cssProps[t];
        return e || (e = dt.cssProps[t] = I(t) || t), e
    }

    function M(t, e, n) {
        var i = Rt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function P(t, e, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === n && (s += dt.css(t, n + Ft[o], !0, r)), i ? ("content" === n && (s -= dt.css(t, "padding" + Ft[o], !0, r)), "margin" !== n && (s -= dt.css(t, "border" + Ft[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Ft[o], !0, r), "padding" !== n && (s += dt.css(t, "border" + Ft[o] + "Width", !0, r)));
        return s
    }

    function q(t, e, n) {
        var i, r = se(t),
            o = N(t, e, r),
            s = "border-box" === dt.css(t, "boxSizing", !1, r);
        return oe.test(o) ? o : (i = s && (ht.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + P(t, e, n || (s ? "border" : "content"), i, r) + "px")
    }

    function R(t, e, n, i, r) {
        return new R.prototype.init(t, e, n, i, r)
    }

    function F() {
        de && (!1 === et.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(F) : t.setTimeout(F, dt.fx.interval), dt.fx.tick())
    }

    function H() {
        return t.setTimeout(function () {
            pe = void 0
        }), pe = dt.now()
    }

    function z(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Ft[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function W(t, e, n) {
        for (var i, r = (U.tweeners[e] || []).concat(U.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function B(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = dt.camelCase(n), r = e[i], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = dt.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function U(t, e, n) {
        var i, r, o = 0,
            s = U.prefilters.length,
            a = dt.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (r) return !1;
                for (var e = pe || H(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: dt.extend({}, e),
                opts: dt.extend(!0, {
                    specialEasing: {},
                    easing: dt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pe || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = dt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            l = c.props;
        for (B(l, c.opts.specialEasing); o < s; o++)
            if (i = U.prefilters[o].call(c, t, l, c.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(c.elem, c.opts.queue).stop = dt.proxy(i.stop, i)), i;
        return dt.map(l, W, c), dt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), dt.fx.timer(dt.extend(u, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function V(t) {
        return (t.match(Dt) || []).join(" ")
    }

    function Y(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Q(t, e, n, i) {
        var r;
        if (Array.isArray(e)) dt.each(e, function (e, r) {
            n || Ee.test(t) ? i(t, r) : Q(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== dt.type(e)) i(t, e);
        else
            for (r in e) Q(t + "[" + r + "]", e[r], n, i)
    }

    function X(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(Dt) || [];
            if (dt.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function G(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, dt.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), u
        }
        var o = {},
            s = t === qe;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function J(t, e) {
        var n, i, r = dt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && dt.extend(!0, t, i), t
    }

    function K(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Z(t, e, n, i) {
        var r, o, s, a, u, c = {},
            l = t.dataTypes.slice();
        if (l[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = l.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = c[u + " " + o] || c["* " + o]))
                for (r in c)
                    if ((a = r.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], l.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && t.throws) e = s(e);
                else try {
                    e = s(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: s ? t : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }
    var tt = [],
        et = t.document,
        nt = Object.getPrototypeOf,
        it = tt.slice,
        rt = tt.concat,
        ot = tt.push,
        st = tt.indexOf,
        at = {},
        ut = at.toString,
        ct = at.hasOwnProperty,
        lt = ct.toString,
        ft = lt.call(Object),
        ht = {},
        pt = "3.2.1",
        dt = function (t, e) {
            return new dt.fn.init(t, e)
        },
        mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        vt = /^-ms-/,
        gt = /-([a-z])/g,
        yt = function (t, e) {
            return e.toUpperCase()
        };
    dt.fn = dt.prototype = {
        jquery: pt,
        constructor: dt,
        length: 0,
        toArray: function () {
            return it.call(this)
        },
        get: function (t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return dt.each(this, t)
        },
        map: function (t) {
            return this.pushStack(dt.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ot,
        sort: tt.sort,
        splice: tt.splice
    }, dt.extend = dt.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (dt.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && dt.isPlainObject(n) ? n : {}, s[e] = dt.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, dt.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === dt.type(t)
        },
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = dt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== ut.call(t) || (e = nt(t)) && ("function" != typeof (n = ct.call(e, "constructor") && e.constructor) || lt.call(n) !== ft))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[ut.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            n(t)
        },
        camelCase: function (t) {
            return t.replace(vt, "ms-").replace(gt, yt)
        },
        each: function (t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(mt, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : ot.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : st.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function (t, e, n) {
            var r, o, s = 0,
                a = [];
            if (i(t))
                for (r = t.length; s < r; s++) null != (o = e(t[s], s, n)) && a.push(o);
            else
                for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t)) return i = it.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(it.call(arguments)))
            }, r.guid = t.guid = t.guid || dt.guid++, r
        },
        now: Date.now,
        support: ht
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = tt[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var $t = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, h, p = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((e ? e.ownerDocument || e : R) !== O && j(e), e = e || O, _)) {
                if (11 !== d && (u = mt.exec(t)))
                    if (r = u[1]) {
                        if (9 === d) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && P(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(r)), n
                    }
                if (x.qsa && !B[t + " "] && (!I || !I.test(t))) {
                    if (1 !== d) p = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace($t, xt) : e.setAttribute("id", a = q), o = (l = S(t)).length; o--;) l[o] = "#" + a + " " + f(l[o]);
                        h = l.join(","), p = vt.test(t) && c(e.parentNode) || e
                    }
                    if (h) try {
                        return G.apply(n, p.querySelectorAll(h)), n
                    } catch (t) {} finally {
                        a === q && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ot, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = O.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function l() {}

        function f(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function h(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = H++;
            return e.first ? function (e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, r);
                return !1
            } : function (e, n, u) {
                var c, l, f, h = [F, a];
                if (u) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, u)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (f = e[q] || (e[q] = {}), l = f[e.uniqueID] || (f[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = l[o]) && c[0] === F && c[1] === a) return h[2] = c[2];
                                if (l[o] = h, h[2] = t(e, n, u)) return !0
                            } return !1
            }
        }

        function p(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function d(t, n, i) {
            for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, c = null != e; a < u; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), i(function (i, s, a, u) {
                var c, l, f, h = [],
                    p = [],
                    v = s.length,
                    g = i || d(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? g : m(g, h, t, a, u),
                    $ = n ? o || (i ? t : v || r) ? [] : s : y;
                if (n && n(y, $, a, u), r)
                    for (c = m($, p), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && ($[p[l]] = !(y[p[l]] = f));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], l = $.length; l--;)(f = $[l]) && c.push(y[l] = f);
                            o(null, $ = [], c, u)
                        }
                        for (l = $.length; l--;)(f = $[l]) && (c = o ? K(i, f) : h[l]) > -1 && (i[c] = !(s[c] = f))
                    }
                } else $ = m($ === s ? $.splice(v, $.length) : $), o ? o(null, s, $, u) : G.apply(s, $)
            })
        }

        function g(t) {
            for (var e, n, i, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = h(function (t) {
                    return t === e
                }, s, !0), c = h(function (t) {
                    return K(e, t) > -1
                }, s, !0), l = [function (t, n, i) {
                    var r = !o && (i || n !== k) || ((e = n).nodeType ? u(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; a < r; a++)
                if (n = b.relative[t[a].type]) l = [h(p(l), n)];
                else {
                    if ((n = b.filter[t[a].type].apply(null, t[a].matches))[q]) {
                        for (i = ++a; i < r && !b.relative[t[i].type]; i++);
                        return v(a > 1 && p(l), a > 1 && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ot, "$1"), n, a < i && g(t.slice(a, i)), i < r && g(t = t.slice(i)), i < r && f(t))
                    }
                    l.push(n)
                }
            return p(l)
        }

        function y(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function (i, s, a, u, c) {
                    var l, f, h, p = 0,
                        d = "0",
                        v = i && [],
                        g = [],
                        y = k,
                        $ = i || o && b.find.TAG("*", c),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = $.length;
                    for (c && (k = s === O || s || c); d !== w && null != (l = $[d]); d++) {
                        if (o && l) {
                            for (f = 0, s || l.ownerDocument === O || (j(l), a = !_); h = t[f++];)
                                if (h(l, s || O, a)) {
                                    u.push(l);
                                    break
                                }
                            c && (F = x)
                        }
                        r && ((l = !h && l) && p--, i && v.push(l))
                    }
                    if (p += d, r && d !== p) {
                        for (f = 0; h = n[f++];) h(v, g, s, a);
                        if (i) {
                            if (p > 0)
                                for (; d--;) v[d] || g[d] || (g[d] = Q.call(u));
                            g = m(g)
                        }
                        G.apply(u, g), c && !i && g.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                    }
                    return c && (F = x, k = y), v
                };
            return r ? i(s) : s
        }
        var $, x, b, w, C, S, T, E, k, A, D, j, O, N, _, I, L, M, P, q = "sizzle" + 1 * new Date,
            R = t.document,
            F = 0,
            H = 0,
            z = n(),
            W = n(),
            B = n(),
            U = function (t, e) {
                return t === e && (D = !0), 0
            },
            V = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            X = Y.push,
            G = Y.push,
            J = Y.slice,
            K = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
            rt = new RegExp(tt + "+", "g"),
            ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            st = new RegExp("^" + tt + "*," + tt + "*"),
            at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            ct = new RegExp(it),
            lt = new RegExp("^" + et + "$"),
            ft = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + it),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            pt = /^h\d$/i,
            dt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            gt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
            yt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            $t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            bt = function () {
                j()
            },
            wt = h(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(Y = J.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: Y.length ? function (t, e) {
                    X.apply(t, J.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, C = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, j = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : R;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, N = O.documentElement, _ = !C(O), R !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", bt, !1) : n.attachEvent && n.attachEvent("onunload", bt)), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = dt.test(O.getElementsByClassName), x.getById = r(function (t) {
                return N.appendChild(t).id = q, !O.getElementsByName || !O.getElementsByName(q).length
            }), x.getById ? (b.filter.ID = function (t) {
                var e = t.replace(gt, yt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && _) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (t) {
                var e = t.replace(gt, yt);
                return function (t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && _) {
                    var n, i, r, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                        for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                    }
                    return []
                }
            }), b.find.TAG = x.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, b.find.CLASS = x.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && _) return e.getElementsByClassName(t)
            }, L = [], I = [], (x.qsa = dt.test(O.querySelectorAll)) && (r(function (t) {
                N.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
            }), r(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (x.matchesSelector = dt.test(M = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = M.call(t, "*"), M.call(t, "[s!='']:x"), L.push("!=", it)
            }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), e = dt.test(N.compareDocumentPosition), P = e || dt.test(N.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return D = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === R && P(R, t) ? -1 : e === O || e.ownerDocument === R && P(R, e) ? 1 : A ? K(A, t) - K(A, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return D = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    u = [e];
                if (!r || !o) return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : A ? K(A, t) - K(A, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; a[i] === u[i];) i++;
                return i ? s(a[i], u[i]) : a[i] === R ? -1 : u[i] === R ? 1 : 0
            }, O) : O
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== O && j(t), n = n.replace(ut, "='$1']"), x.matchesSelector && _ && !B[n + " "] && (!L || !L.test(n)) && (!I || !I.test(n))) try {
                var i = M.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return e(n, O, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== O && j(t), P(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== O && j(t);
            var n = b.attrHandle[e.toLowerCase()],
                i = n && V.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !_) : void 0;
            return void 0 !== i ? i : x.attributes || !_ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function (t) {
            return (t + "").replace($t, xt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (D = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), D) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null, t
        }, w = e.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += w(e);
            return n
        }, (b = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(gt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(gt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(gt, yt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, u) {
                        var c, l, f, h, p, d, m = o !== s ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            g = a && e.nodeName.toLowerCase(),
                            y = !u && !a,
                            $ = !1;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? v.firstChild : v.lastChild], s && y) {
                                for ($ = (p = (c = (l = (f = (h = v)[q] || (h[q] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === F && c[1]) && c[2], h = p && v.childNodes[p]; h = ++p && h && h[m] || ($ = p = 0) || d.pop();)
                                    if (1 === h.nodeType && ++$ && h === e) {
                                        l[t] = [F, p, $];
                                        break
                                    }
                            } else if (y && (h = e, f = h[q] || (h[q] = {}), l = f[h.uniqueID] || (f[h.uniqueID] = {}), c = l[t] || [], p = c[0] === F && c[1], $ = p), !1 === $)
                                for (;
                                    (h = ++p && h && h[m] || ($ = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++$ || (y && (f = h[q] || (h[q] = {}), l = f[h.uniqueID] || (f[h.uniqueID] = {}), l[t] = [F, $]), h !== e)););
                            return ($ -= r) === i || $ % i == 0 && $ / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[q] ? o(n) : o.length > 1 ? (r = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = K(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        r = T(t.replace(ot, "$1"));
                    return r[q] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return t = t.replace(gt, yt),
                        function (e) {
                            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function (t) {
                    return lt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(gt, yt).toLowerCase(),
                        function (e) {
                            var n;
                            do {
                                if (n = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === N
                },
                focus: function (t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !b.pseudos.empty(t)
                },
                header: function (t) {
                    return pt.test(t.nodeName)
                },
                input: function (t) {
                    return ht.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for ($ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[$] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }($);
        for ($ in {
                submit: !0,
                reset: !0
            }) b.pseudos[$] = function (t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }($);
        return l.prototype = b.filters = b.pseudos, b.setFilters = new l, S = e.tokenize = function (t, n) {
            var i, r, o, s, a, u, c, l = W[t + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = t, u = [], c = b.preFilter; a;) {
                i && !(r = st.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ot, " ")
                }), a = a.slice(i.length));
                for (s in b.filter) !(r = ft[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : W(t, u).slice(0)
        }, T = e.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = B[t + " "];
            if (!o) {
                for (e || (e = S(t)), n = e.length; n--;) o = g(e[n]), o[q] ? i.push(o) : r.push(o);
                (o = B(t, y(r, i))).selector = t
            }
            return o
        }, E = e.select = function (t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t,
                h = !i && S(t = l.selector || t);
            if (n = n || [], 1 === h.length) {
                if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && _ && b.relative[o[1].type]) {
                    if (!(e = (b.find.ID(s.matches[0].replace(gt, yt), e) || [])[0])) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (i = u(s.matches[0].replace(gt, yt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = i.length && f(o))) return G.apply(n, i), n;
                        break
                    }
            }
            return (l || T(t, h))(i, e, !_, n, !e || vt.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!D, j(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(O.createElement("fieldset"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(Z, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    dt.find = $t, dt.expr = $t.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = $t.uniqueSort, dt.text = $t.getText, dt.isXMLDoc = $t.isXML, dt.contains = $t.contains, dt.escapeSelector = $t.escape;
    var xt = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && dt(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        bt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = dt.expr.match.needsContext,
        Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        St = /^.[^:#\[\.,]*$/;
    dt.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (dt.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) dt.find(t, r[e], n);
            return i > 1 ? dt.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        },
        is: function (t) {
            return !!o(this, "string" == typeof t && wt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var Tt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (dt.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || Tt, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Ct.test(i[1]) && dt.isPlainObject(e))
                    for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (r = et.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : dt.makeArray(t, this)
    }).prototype = dt.fn, Tt = dt(et);
    var kt = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    dt.fn.extend({
        has: function (t) {
            var e = dt(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (dt.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof t && dt(t);
            if (!wt.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? st.call(dt(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return xt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return xt(t, "parentNode", n)
        },
        next: function (t) {
            return s(t, "nextSibling")
        },
        prev: function (t) {
            return s(t, "previousSibling")
        },
        nextAll: function (t) {
            return xt(t, "nextSibling")
        },
        prevAll: function (t) {
            return xt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return xt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return xt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return bt(t.firstChild)
        },
        contents: function (t) {
            return r(t, "iframe") ? t.contentDocument : (r(t, "template") && (t = t.content || t), dt.merge([], t.childNodes))
        }
    }, function (t, e) {
        dt.fn[t] = function (n, i) {
            var r = dt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (At[t] || dt.uniqueSort(r), kt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var Dt = /[^\x20\t\r\n\f]+/g;
    dt.Callbacks = function (t) {
        t = "string" == typeof t ? a(t) : dt.extend({}, t);
        var e, n, i, r, o = [],
            s = [],
            u = -1,
            c = function () {
                for (r = r || t.once, i = e = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && t.stopOnFalse && (u = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !e && (u = o.length - 1, s.push(n)), function e(n) {
                        dt.each(n, function (n, i) {
                            dt.isFunction(i) ? t.unique && l.has(i) || o.push(i) : i && i.length && "string" !== dt.type(i) && e(i)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function () {
                    return dt.each(arguments, function (t, e) {
                        for (var n;
                            (n = dt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (t) {
                    return t ? dt.inArray(t, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = s = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = s = [], n || e || (o = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return l
    }, dt.extend({
        Deferred: function (e) {
            var n = [
                    ["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2],
                    ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return r.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return dt.Deferred(function (e) {
                            dt.each(n, function (n, i) {
                                var r = dt.isFunction(t[i[4]]) && t[i[4]];
                                o[i[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, i, r) {
                        function o(e, n, i, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    f = function () {
                                        var t, f;
                                        if (!(e < s)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = t && ("object" == typeof t || "function" == typeof t) && t.then, dt.isFunction(f) ? r ? f.call(t, o(s, n, u, r), o(s, n, c, r)) : (s++, f.call(t, o(s, n, u, r), o(s, n, c, r), o(s, n, u, n.notifyWith))) : (i !== u && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    h = r ? f : function () {
                                        try {
                                            f()
                                        } catch (t) {
                                            dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= s && (i !== c && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? h() : (dt.Deferred.getStackHook && (h.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(h))
                            }
                        }
                        var s = 0;
                        return dt.Deferred(function (t) {
                            n[0][3].add(o(0, t, dt.isFunction(r) ? r : u, t.notifyWith)), n[1][3].add(o(0, t, dt.isFunction(e) ? e : u)), n[2][3].add(o(0, t, dt.isFunction(i) ? i : c))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? dt.extend(t, r) : r
                    }
                },
                o = {};
            return dt.each(n, function (t, e) {
                var s = e[2],
                    a = e[5];
                r[e[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function (t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                r = it.call(arguments),
                o = dt.Deferred(),
                s = function (t) {
                    return function (n) {
                        i[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : n, --e || o.resolveWith(i, r)
                    }
                };
            if (e <= 1 && (l(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || dt.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) l(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    dt.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && jt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, dt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Ot = dt.Deferred();
    dt.fn.ready = function (t) {
        return Ot.then(t).catch(function (t) {
            dt.readyException(t)
        }), this
    }, dt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, !0 !== t && --dt.readyWait > 0 || Ot.resolveWith(et, [dt]))
        }
    }), dt.ready.then = Ot.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(dt.ready) : (et.addEventListener("DOMContentLoaded", f), t.addEventListener("load", f));
    var Nt = function (t, e, n, i, r, o, s) {
            var a = 0,
                u = t.length,
                c = null == n;
            if ("object" === dt.type(n)) {
                r = !0;
                for (a in n) Nt(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(dt(t), n)
                })), e))
                for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : u ? e(t[0], n) : o
        },
        _t = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, _t(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[dt.camelCase(e)] = n;
            else
                for (i in e) r[dt.camelCase(i)] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in i ? [e] : e.match(Dt) || []), n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || dt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !dt.isEmptyObject(e)
        }
    };
    var It = new h,
        Lt = new h,
        Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Pt = /[A-Z]/g;
    dt.extend({
        hasData: function (t) {
            return Lt.hasData(t) || It.hasData(t)
        },
        data: function (t, e, n) {
            return Lt.access(t, e, n)
        },
        removeData: function (t, e) {
            Lt.remove(t, e)
        },
        _data: function (t, e, n) {
            return It.access(t, e, n)
        },
        _removeData: function (t, e) {
            It.remove(t, e)
        }
    }), dt.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Lt.get(o), 1 === o.nodeType && !It.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = dt.camelCase(i.slice(5)), d(o, i, r[i]));
                    It.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                Lt.set(this, t)
            }) : Nt(this, function (e) {
                var n;
                if (o && void 0 === e) {
                    if (void 0 !== (n = Lt.get(o, t))) return n;
                    if (void 0 !== (n = d(o, t))) return n
                } else this.each(function () {
                    Lt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Lt.remove(this, t)
            })
        }
    }), dt.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = It.get(t, e), n && (!i || Array.isArray(n) ? i = It.access(t, e, dt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = dt.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = dt._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                dt.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return It.get(t, n) || It.access(t, n, {
                empty: dt.Callbacks("once memory").add(function () {
                    It.remove(t, [e + "queue", n])
                })
            })
        }
    }), dt.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                dt.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = dt.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = It.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var qt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Rt = new RegExp("^(?:([+-])=|)(" + qt + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"],
        Ht = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
        },
        zt = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        Wt = {};
    dt.fn.extend({
        show: function () {
            return g(this, !0)
        },
        hide: function () {
            return g(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ht(this) ? dt(this).show() : dt(this).hide()
            })
        }
    });
    var Bt = /^(?:checkbox|radio)$/i,
        Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Vt = /^$|\/(?:java|ecma)script/i,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var Qt = /<|&#?\w+;/;
    ! function () {
        var t = et.createDocumentFragment().appendChild(et.createElement("div")),
            e = et.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Xt = et.documentElement,
        Gt = /^key/,
        Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, u, c, l, f, h, p, d, m, v = It.get(t);
            if (v)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && dt.find.matchesSelector(Xt, r), n.guid || (n.guid = dt.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                        return void 0 !== dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(Dt) || [""]).length; c--;) a = Kt.exec(e[c]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (f = dt.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = dt.event.special[p] || {}, l = dt.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && dt.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (h = u[p]) || (h = u[p] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, d, s) || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), dt.event.global[p] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, u, c, l, f, h, p, d, m, v = It.hasData(t) && It.get(t);
            if (v && (u = v.events)) {
                for (c = (e = (e || "").match(Dt) || [""]).length; c--;)
                    if (a = Kt.exec(e[c]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (f = dt.event.special[p] || {}, h = u[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) l = h[o], !r && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(t, l));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(t, d, v.handle) || dt.removeEvent(t, p, v.handle), delete u[p])
                    } else
                        for (p in u) dt.event.remove(t, p + e[c], n, i, !0);
                dt.isEmptyObject(u) && It.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, r, o, s, a = dt.event.fix(t),
                u = new Array(arguments.length),
                c = (It.get(this, "events") || {})[a.type] || [],
                l = dt.event.special[a.type] || {};
            for (u[0] = a, e = 1; e < arguments.length; e++) u[e] = arguments[e];
            if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = dt.event.handlers.call(this, a, c), e = 0;
                    (r = s[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s, a = [],
                u = e.delegateCount,
                c = t.target;
            if (u && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) i = e[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? dt(r, this).index(c) > -1 : dt.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, u < e.length && a.push({
                elem: c,
                handlers: e.slice(u)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(dt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: dt.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[dt.expando] ? t : new dt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return r(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, dt.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, dt.Event = function (t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Jt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, dt.event.addProp), dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        dt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || dt.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.fn.extend({
        on: function (t, e, n, i) {
            return S(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return S(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = w), this.each(function () {
                dt.event.remove(this, t, n, e)
            })
        }
    });
    var Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        te = /<script|<style|<link/i,
        ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^true\/(.*)/,
        ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    dt.extend({
        htmlPrefilter: function (t) {
            return t.replace(Zt, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                u = dt.contains(t.ownerDocument, t);
            if (!(ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                for (s = y(a), o = y(t), i = 0, r = o.length; i < r; i++) D(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || y(t), s = s || y(a), i = 0, r = o.length; i < r; i++) A(o[i], s[i]);
                else A(t, a);
            return (s = y(a, "script")).length > 0 && $(s, !u && y(t, "script")), a
        },
        cleanData: function (t) {
            for (var e, n, i, r = dt.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (_t(n)) {
                    if (e = n[It.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                        n[It.expando] = void 0
                    }
                    n[Lt.expando] && (n[Lt.expando] = void 0)
                }
        }
    }), dt.fn.extend({
        detach: function (t) {
            return O(this, t, !0)
        },
        remove: function (t) {
            return O(this, t)
        },
        text: function (t) {
            return Nt(this, function (t) {
                return void 0 === t ? dt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return j(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return j(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return j(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return j(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return dt.clone(this, t, e)
            })
        },
        html: function (t) {
            return Nt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !te.test(t) && !Yt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (dt.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return j(this, arguments, function (e) {
                var n = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(y(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        dt.fn[t] = function (t) {
            for (var n, i = [], r = dt(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), dt(r[s])[e](n), ot.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var re = /^margin/,
        oe = new RegExp("^(" + qt + ")(?!px)[a-z%]+$", "i"),
        se = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
    ! function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Xt.removeChild(s), a = null
            }
        }
        var n, i, r, o, s = et.createElement("div"),
            a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), dt.extend(ht, {
            pixelPosition: function () {
                return e(), n
            },
            boxSizingReliable: function () {
                return e(), i
            },
            pixelMarginRight: function () {
                return e(), r
            },
            reliableMarginLeft: function () {
                return e(), o
            }
        }))
    }();
    var ae = /^(none|table(?!-c[ea]).+)/,
        ue = /^--/,
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        le = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fe = ["Webkit", "Moz", "ms"],
        he = et.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = N(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = dt.camelCase(e),
                    u = ue.test(e),
                    c = t.style;
                return u || (e = L(a)), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e] : ("string" === (o = typeof n) && (r = Rt.exec(n)) && r[1] && (n = m(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u ? c.setProperty(e, n) : c[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = dt.camelCase(e);
            return ue.test(e) || (e = L(a)), (s = dt.cssHooks[e] || dt.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = N(t, e, i)), "normal" === r && e in le && (r = le[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), dt.each(["height", "width"], function (t, e) {
        dt.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !ae.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? q(t, e, i) : zt(t, ce, function () {
                    return q(t, e, i)
                })
            },
            set: function (t, n, i) {
                var r, o = i && se(t),
                    s = i && P(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, o), o);
                return s && (r = Rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), M(t, n, s)
            }
        }
    }), dt.cssHooks.marginLeft = _(ht.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        dt.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Ft[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, re.test(t) || (dt.cssHooks[t + e].set = M)
    }), dt.fn.extend({
        css: function (t, e) {
            return Nt(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = se(t), r = e.length; s < r; s++) o[e[s]] = dt.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), dt.Tween = R, R.prototype = {
        constructor: R,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (dt.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = R.propHooks[this.prop];
            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, dt.fx = R.prototype.init, dt.fx.step = {};
    var pe, de, me = /^(?:toggle|show|hide)$/,
        ve = /queueHooks$/;
    dt.Animation = dt.extend(U, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return m(n.elem, t, Rt.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(e)
            },
            prefilters: [function (t, e, n) {
                var i, r, o, s, a, u, c, l, f = "width" in e || "height" in e,
                    h = this,
                    p = {},
                    d = t.style,
                    m = t.nodeType && Ht(t),
                    v = It.get(t, "fxshow");
                n.queue || (null == (s = dt._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function () {
                    h.always(function () {
                        s.unqueued--, dt.queue(t, "fx").length || s.empty.fire()
                    })
                }));
                for (i in e)
                    if (r = e[i], me.test(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i]) continue;
                            m = !0
                        }
                        p[i] = v && v[i] || dt.style(t, i)
                    }
                if ((u = !dt.isEmptyObject(e)) || !dt.isEmptyObject(p)) {
                    f && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (c = v && v.display) && (c = It.get(t, "display")), "none" === (l = dt.css(t, "display")) && (c ? l = c : (g([t], !0), c = t.style.display || c, l = dt.css(t, "display"), g([t]))), ("inline" === l || "inline-block" === l && null != c) && "none" === dt.css(t, "float") && (u || (h.done(function () {
                        d.display = c
                    }), null == c && (l = d.display, c = "none" === l ? "" : l)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), u = !1;
                    for (i in p) u || (v ? "hidden" in v && (m = v.hidden) : v = It.access(t, "fxshow", {
                        display: c
                    }), o && (v.hidden = !m), m && g([t], !0), h.done(function () {
                        m || g([t]), It.remove(t, "fxshow");
                        for (i in p) dt.style(t, i, p[i])
                    })), u = W(m ? v[i] : 0, i, h), i in v || (v[i] = u.start, m && (u.end = u.start, u.start = 0))
                }
            }],
            prefilter: function (t, e) {
                e ? U.prefilters.unshift(t) : U.prefilters.push(t)
            }
        }), dt.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return dt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in dt.fx.speeds ? i.duration = dt.fx.speeds[i.duration] : i.duration = dt.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
            }, i
        }, dt.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Ht).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var r = dt.isEmptyObject(t),
                    o = dt.speed(e, n, i),
                    s = function () {
                        var e = U(this, dt.extend({}, t), o);
                        (r || It.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = dt.timers,
                        s = It.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && ve.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || dt.dequeue(this, t)
                })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = It.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = dt.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), dt.each(["toggle", "show", "hide"], function (t, e) {
            var n = dt.fn[e];
            dt.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, r)
            }
        }), dt.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            dt.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), dt.timers = [], dt.fx.tick = function () {
            var t, e = 0,
                n = dt.timers;
            for (pe = dt.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || dt.fx.stop(), pe = void 0
        }, dt.fx.timer = function (t) {
            dt.timers.push(t), dt.fx.start()
        }, dt.fx.interval = 13, dt.fx.start = function () {
            de || (de = !0, F())
        }, dt.fx.stop = function () {
            de = null
        }, dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, dt.fn.delay = function (e, n) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(r)
                }
            })
        },
        function () {
            var t = et.createElement("input"),
                e = et.createElement("select").appendChild(et.createElement("option"));
            t.type = "checkbox", ht.checkOn = "" !== t.value, ht.optSelected = e.selected, (t = et.createElement("input")).value = "t", t.type = "radio", ht.radioValue = "t" === t.value
        }();
    var ge, ye = dt.expr.attrHandle;
    dt.fn.extend({
        attr: function (t, e) {
            return Nt(this, dt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? dt.prop(t, e, n) : (1 === o && dt.isXMLDoc(t) || (r = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ht.radioValue && "radio" === e && r(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                r = e && e.match(Dt);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ge = {
        set: function (t, e, n) {
            return !1 === e ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ye[e] || dt.find.attr;
        ye[e] = function (t, e, i) {
            var r, o, s = e.toLowerCase();
            return i || (o = ye[s], ye[s] = r, r = null != n(t, e, i) ? s : null, ye[s] = o), r
        }
    });
    var $e = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function (t, e) {
            return Nt(this, dt.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[dt.propFix[t] || t]
            })
        }
    }), dt.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : $e.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ht.optSelected || (dt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        dt.propFix[this.toLowerCase()] = this
    }), dt.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, u = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).addClass(t.call(this, e, Y(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[u++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = V(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s, a, u = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).removeClass(t.call(this, e, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[u++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = V(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function (n) {
                dt(this).toggleClass(t.call(this, n, Y(this), e), e)
            }) : this.each(function () {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = dt(this), o = t.match(Dt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = Y(this)) && It.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : It.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + V(Y(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g;
    dt.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = dt.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = dt.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), (e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(be, "") : null == n ? "" : n)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : V(dt.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, o = t.options,
                        s = t.selectedIndex,
                        a = "select-one" === t.type,
                        u = a ? null : [],
                        c = a ? s + 1 : o.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (e = dt(n).val(), a) return e;
                            u.push(e)
                        }
                    return u
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = dt.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = dt.inArray(dt.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function () {
        dt.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = dt.inArray(dt(t).val(), e) > -1
            }
        }, ht.checkOn || (dt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var we = /^(?:focusinfocus|focusoutblur)$/;
    dt.extend(dt.event, {
        trigger: function (e, n, i, r) {
            var o, s, a, u, c, l, f, h = [i || et],
                p = ct.call(e, "type") ? e.type : e,
                d = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), p = d.shift(), d.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[dt.expando] ? e : new dt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), f = dt.event.special[p] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !dt.isWindow(i)) {
                    for (u = f.delegateType || p, we.test(u + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || et) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || p, (l = (It.get(s, "events") || {})[e.type] && It.get(s, "handle")) && l.apply(s, n), (l = c && s[c]) && l.apply && _t(s) && (e.result = l.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !_t(i) || c && dt.isFunction(i[p]) && !dt.isWindow(i) && ((a = i[c]) && (i[c] = null), dt.event.triggered = p, i[p](), dt.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(i, null, e)
        }
    }), dt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                dt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return dt.event.trigger(t, e, n, !0)
        }
    }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        dt.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ht.focusin = "onfocusin" in t, ht.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = It.access(i, e);
                r || i.addEventListener(t, n, !0), It.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = It.access(i, e) - 1;
                r ? It.access(i, e, r) : (i.removeEventListener(t, n, !0), It.remove(i, e))
            }
        }
    });
    var Ce = t.location,
        Se = dt.now(),
        Te = /\?/;
    dt.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
    };
    var Ee = /\[\]$/,
        ke = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
    dt.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                var n = dt.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) Q(n, t[n], e, r);
        return i.join("&")
    }, dt.fn.extend({
        serialize: function () {
            return dt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && De.test(this.nodeName) && !Ae.test(t) && (this.checked || !Bt.test(t))
            }).map(function (t, e) {
                var n = dt(this).val();
                return null == n ? null : Array.isArray(n) ? dt.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    });
    var je = /%20/g,
        Oe = /#.*$/,
        Ne = /([?&])_=[^&]*/,
        _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Le = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        Pe = {},
        qe = {},
        Re = "*/".concat("*"),
        Fe = et.createElement("a");
    Fe.href = Ce.href, dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: Ie.test(Ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Re,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? J(J(t, dt.ajaxSettings), e) : J(dt.ajaxSettings, t)
        },
        ajaxPrefilter: X(Pe),
        ajaxTransport: X(qe),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var c, h, p, x, b, w = n;
                l || (l = !0, u && t.clearTimeout(u), r = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (x = K(d, C, i)), x = Z(d, x, C, c), c ? (d.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (dt.lastModified[o] = b), (b = C.getResponseHeader("etag")) && (dt.etag[o] = b)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state, h = x.data, p = x.error, c = !p)) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || w) + "", c ? g.resolveWith(m, [h, w, C]) : g.rejectWith(m, [C, w, p]), C.statusCode($), $ = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? h : p]), y.fireWith(m, [C, w]), f && (v.trigger("ajaxComplete", [C, d]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, u, c, l, f, h, p, d = dt.ajaxSetup({}, n),
                m = d.context || d,
                v = d.context && (m.nodeType || m.jquery) ? dt(m) : dt.event,
                g = dt.Deferred(),
                y = dt.Callbacks("once memory"),
                $ = d.statusCode || {},
                x = {},
                b = {},
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (l) {
                            if (!a)
                                for (a = {}; e = _e.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return l ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == l && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == l && (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (l) C.always(t[C.status]);
                            else
                                for (e in t) $[e] = [$[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (g.promise(C), d.url = ((e || d.url || Ce.href) + "").replace(Me, Ce.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(Dt) || [""], null == d.crossDomain) {
                c = et.createElement("a");
                try {
                    c.href = d.url, c.href = c.href, d.crossDomain = Fe.protocol + "//" + Fe.host != c.protocol + "//" + c.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = dt.param(d.data, d.traditional)), G(Pe, d, n, C), l) return C;
            (f = dt.event && d.global) && 0 == dt.active++ && dt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Le.test(d.type), o = d.url.replace(Oe, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(je, "+")) : (p = d.url.slice(o.length), d.data && (o += (Te.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (o = o.replace(Ne, "$1"), p = (Te.test(o) ? "&" : "?") + "_=" + Se++ + p), d.url = o + p), d.ifModified && (dt.lastModified[o] && C.setRequestHeader("If-Modified-Since", dt.lastModified[o]), dt.etag[o] && C.setRequestHeader("If-None-Match", dt.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers) C.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (!1 === d.beforeSend.call(m, C, d) || l)) return C.abort();
            if (w = "abort", y.add(d.complete), C.done(d.success), C.fail(d.error), r = G(qe, d, n, C)) {
                if (C.readyState = 1, f && v.trigger("ajaxSend", [C, d]), l) return C;
                d.async && d.timeout > 0 && (u = t.setTimeout(function () {
                    C.abort("timeout")
                }, d.timeout));
                try {
                    l = !1, r.send(x, i)
                } catch (t) {
                    if (l) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function (t, e) {
        dt[e] = function (t, n, i, r) {
            return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function (t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, dt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return dt.isFunction(t) ? this.each(function (e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = dt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = dt.isFunction(t);
            return this.each(function (n) {
                dt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                dt(this).replaceWith(this.childNodes)
            }), this
        }
    }), dt.expr.pseudos.hidden = function (t) {
        return !dt.expr.pseudos.visible(t)
    }, dt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, dt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var He = {
            0: 200,
            1223: 204
        },
        ze = dt.ajaxSettings.xhr();
    ht.cors = !!ze && "withCredentials" in ze, ht.ajax = ze = !!ze, dt.ajaxTransport(function (e) {
        var n, i;
        if (ht.cors || ze && !e.crossDomain) return {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(He[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), dt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), dt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = dt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var We = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = We.pop() || dt.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + r) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || dt.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? dt(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, We.push(r)), s && dt.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ht.createHTMLDocument = function () {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), dt.parseHTML = function (t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, r, o;
        return e || (ht.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), r = Ct.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = x([t], e, o), o && o.length && dt(o).remove(), dt.merge([], r.childNodes))
    }, dt.fn.load = function (t, e, n) {
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = V(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && dt.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        dt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), dt.expr.pseudos.animated = function (t) {
        return dt.grep(dt.timers, function (e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, u, c = dt.css(t, "position"),
                l = dt(t),
                f = {};
            "static" === c && (t.style.position = "relative"), a = l.offset(), o = dt.css(t, "top"), u = dt.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (i = l.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : l.css(f)
        }
    }, dt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), e = o.ownerDocument, n = e.documentElement, r = e.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), r(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + dt.css(t[0], "borderTopWidth", !0),
                    left: i.left + dt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - dt.css(n, "marginTop", !0),
                    left: e.left - i.left - dt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || Xt
            })
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        dt.fn[t] = function (i) {
            return Nt(this, function (t, i, r) {
                var o;
                return dt.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), dt.each(["top", "left"], function (t, e) {
        dt.cssHooks[e] = _(ht.pixelPosition, function (t, n) {
            if (n) return n = N(t, e), oe.test(n) ? dt(t).position()[e] + "px" : n
        })
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        dt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            dt.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Nt(this, function (e, n, r) {
                    var o;
                    return dt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? dt.css(e, n, a) : dt.style(e, n, r, a)
                }, e, s ? r : void 0, s)
            }
        })
    }), dt.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), dt.holdReady = function (t) {
        t ? dt.readyWait++ : dt.ready(!0)
    }, dt.isArray = Array.isArray, dt.parseJSON = JSON.parse, dt.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
        return dt
    });
    var Ue = t.jQuery,
        Ve = t.$;
    return dt.noConflict = function (e) {
        return t.$ === dt && (t.$ = Ve), e && t.jQuery === dt && (t.jQuery = Ue), dt
    }, e || (t.jQuery = t.$ = dt), dt
}),
function (t, e, n) {
    "use strict";

    function i(t) {
        return function () {
            var e, n = arguments[0],
                n = "[" + (t ? t + ":" : "") + n + "] http://errors.angularjs.org/1.2.16/" + (t ? t + "/" : "") + n;
            for (e = 1; e < arguments.length; e++) n = n + (1 == e ? "?" : "&") + "p" + (e - 1) + "=" + encodeURIComponent("function" == typeof arguments[e] ? arguments[e].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[e] ? "undefined" : "string" != typeof arguments[e] ? JSON.stringify(arguments[e]) : arguments[e]);
            return Error(n)
        }
    }

    function r(t) {
        if (null == t || E(t)) return !1;
        var e = t.length;
        return !(1 !== t.nodeType || !e) || (x(t) || C(t) || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function o(t, e, n) {
        var i;
        if (t)
            if (S(t))
                for (i in t) "prototype" == i || "length" == i || "name" == i || t.hasOwnProperty && !t.hasOwnProperty(i) || e.call(n, t[i], i);
            else if (t.forEach && t.forEach !== o) t.forEach(e, n);
        else if (r(t))
            for (i = 0; i < t.length; i++) e.call(n, t[i], i);
        else
            for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i);
        return t
    }

    function s(t) {
        var e, n = [];
        for (e in t) t.hasOwnProperty(e) && n.push(e);
        return n.sort()
    }

    function a(t, e, n) {
        for (var i = s(t), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
        return i
    }

    function u(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function c() {
        for (var t, e = rn.length; e;) {
            if (e--, 57 == (t = rn[e].charCodeAt(0))) return rn[e] = "A", rn.join("");
            if (90 != t) return rn[e] = String.fromCharCode(t + 1), rn.join("");
            rn[e] = "0"
        }
        return rn.unshift("0"), rn.join("")
    }

    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        var e = t.$$hashKey;
        return o(arguments, function (e) {
            e !== t && o(e, function (e, n) {
                t[n] = e
            })
        }), l(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function p(t, e) {
        return f(new(f(function () {}, {
            prototype: t
        })), e)
    }

    function d() {}

    function m(t) {
        return t
    }

    function v(t) {
        return function () {
            return t
        }
    }

    function g(t) {
        return void 0 === t
    }

    function y(t) {
        return void 0 !== t
    }

    function $(t) {
        return null != t && "object" == typeof t
    }

    function x(t) {
        return "string" == typeof t
    }

    function b(t) {
        return "number" == typeof t
    }

    function w(t) {
        return "[object Date]" === tn.call(t)
    }

    function C(t) {
        return "[object Array]" === tn.call(t)
    }

    function S(t) {
        return "function" == typeof t
    }

    function T(t) {
        return "[object RegExp]" === tn.call(t)
    }

    function E(t) {
        return t && t.document && t.location && t.alert && t.setInterval
    }

    function k(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function A(t, e, n) {
        var i = [];
        return o(t, function (t, r, o) {
            i.push(e.call(n, t, r, o))
        }), i
    }

    function D(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++)
            if (e === t[n]) return n;
        return -1
    }

    function j(t, e) {
        var n = D(t, e);
        return 0 <= n && t.splice(n, 1), e
    }

    function O(t, e) {
        if (E(t) || t && t.$evalAsync && t.$watch) throw en("cpws");
        if (e) {
            if (t === e) throw en("cpi");
            if (C(t))
                for (var n = e.length = 0; n < t.length; n++) e.push(O(t[n]));
            else {
                n = e.$$hashKey, o(e, function (t, n) {
                    delete e[n]
                });
                for (var i in t) e[i] = O(t[i]);
                l(e, n)
            }
        } else(e = t) && (C(t) ? e = O(t, []) : w(t) ? e = new Date(t.getTime()) : T(t) ? e = RegExp(t.source) : $(t) && (e = O(t, {})));
        return e
    }

    function N(t, e) {
        e = e || {};
        for (var n in t) !t.hasOwnProperty(n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e
    }

    function _(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var i, r = typeof t;
        if (r == typeof e && "object" == r) {
            if (!C(t)) {
                if (w(t)) return w(e) && t.getTime() == e.getTime();
                if (T(t) && T(e)) return t.toString() == e.toString();
                if (t && t.$evalAsync && t.$watch || e && e.$evalAsync && e.$watch || E(t) || E(e) || C(e)) return !1;
                r = {};
                for (i in t)
                    if ("$" !== i.charAt(0) && !S(t[i])) {
                        if (!_(t[i], e[i])) return !1;
                        r[i] = !0
                    }
                for (i in e)
                    if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !S(e[i])) return !1;
                return !0
            }
            if (!C(e)) return !1;
            if ((r = t.length) == e.length) {
                for (i = 0; i < r; i++)
                    if (!_(t[i], e[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function I() {
        return e.securityPolicy && e.securityPolicy.isActive || e.querySelector && !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"))
    }

    function L(t, e) {
        var n = 2 < arguments.length ? Ke.call(arguments, 2) : [];
        return !S(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, n.concat(Ke.call(arguments, 0))) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function M(t, i) {
        var r = i;
        return "string" == typeof t && "$" === t.charAt(0) ? r = n : E(i) ? r = "$WINDOW" : i && e === i ? r = "$DOCUMENT" : i && i.$evalAsync && i.$watch && (r = "$SCOPE"), r
    }

    function P(t, e) {
        return void 0 === t ? n : JSON.stringify(t, M, e ? "  " : null)
    }

    function q(t) {
        return x(t) ? JSON.parse(t) : t
    }

    function R(t) {
        return "function" == typeof t ? t = !0 : t && 0 !== t.length ? (t = Xe("" + t), t = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)) : t = !1, t
    }

    function F(t) {
        t = Ue(t).clone();
        try {
            t.empty()
        } catch (t) {}
        var e = Ue("<div>").append(t).html();
        try {
            return 3 === t[0].nodeType ? Xe(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Xe(e)
            })
        } catch (t) {
            return Xe(e)
        }
    }

    function H(t) {
        try {
            return decodeURIComponent(t)
        } catch (t) {}
    }

    function z(t) {
        var e, n, i = {};
        return o((t || "").split("&"), function (t) {
            t && (e = t.split("="), n = H(e[0]), y(n) && (t = !y(e[1]) || H(e[1]), i[n] ? C(i[n]) ? i[n].push(t) : i[n] = [i[n], t] : i[n] = t))
        }), i
    }

    function W(t) {
        var e = [];
        return o(t, function (t, n) {
            C(t) ? o(t, function (t) {
                e.push(U(n, !0) + (!0 === t ? "" : "=" + U(t, !0)))
            }) : e.push(U(n, !0) + (!0 === t ? "" : "=" + U(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function B(t) {
        return U(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function U(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
    }

    function V(t, n) {
        function i(t) {
            t && a.push(t)
        }
        var r, s, a = [t],
            u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u, function (n) {
            u[n] = !0, i(e.getElementById(n)), n = n.replace(":", "\\:"), t.querySelectorAll && (o(t.querySelectorAll("." + n), i), o(t.querySelectorAll("." + n + "\\:"), i), o(t.querySelectorAll("[" + n + "]"), i))
        }), o(a, function (t) {
            if (!r) {
                var e = c.exec(" " + t.className + " ");
                e ? (r = t, s = (e[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function (e) {
                    !r && u[e.name] && (r = t, s = e.value)
                })
            }
        }), r && n(r, s ? [s] : [])
    }

    function Y(n, i) {
        var r = function () {
                if ((n = Ue(n)).injector()) {
                    var t = n[0] === e ? "document" : F(n);
                    throw en("btstrpd", t)
                }
                return (i = i || []).unshift(["$provide", function (t) {
                    t.value("$rootElement", n)
                }]), i.unshift("ng"), (t = wt(i)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (t, e, n, i, r) {
                    t.$apply(function () {
                        e.data("$injector", i), n(e)(t)
                    })
                }]), t
            },
            s = /^NG_DEFER_BOOTSTRAP!/;
        if (t && !s.test(t.name)) return r();
        t.name = t.name.replace(s, ""), nn.resumeBootstrap = function (t) {
            o(t, function (t) {
                i.push(t)
            }), r()
        }
    }

    function Q(t, e) {
        return e = e || "_", t.replace(sn, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function X(t, e, n) {
        if (!t) throw en("areq", e || "?", n || "required");
        return t
    }

    function G(t, e, n) {
        return n && C(t) && (t = t[t.length - 1]), X(S(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function J(t, e) {
        if ("hasOwnProperty" === t) throw en("badname", e)
    }

    function K(t, e, n) {
        if (!e) return t;
        for (var i, r = t, o = (e = e.split(".")).length, s = 0; s < o; s++) i = e[s], t && (t = (r = t)[i]);
        return !n && S(t) ? L(r, t) : t
    }

    function Z(t) {
        var e = t[0];
        if (t = t[t.length - 1], e === t) return Ue(e);
        var n = [e];
        do {
            if (!(e = e.nextSibling)) break;
            n.push(e)
        } while (e !== t);
        return Ue(n)
    }

    function tt(t) {
        var e = i("$injector"),
            n = i("ng");
        return t = t.angular || (t.angular = {}), t.$$minErr = t.$$minErr || i, t.module || (t.module = function () {
            var t = {};
            return function (i, r, o) {
                if ("hasOwnProperty" === i) throw n("badname", "module");
                return r && t.hasOwnProperty(i) && (t[i] = null), t[i] || (t[i] = function () {
                    function t(t, e, i) {
                        return function () {
                            return n[i || "push"]([t, e, arguments]), u
                        }
                    }
                    if (!r) throw e("nomod", i);
                    var n = [],
                        s = [],
                        a = t("$injector", "invoke"),
                        u = {
                            _invokeQueue: n,
                            _runBlocks: s,
                            requires: r,
                            name: i,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            config: a,
                            run: function (t) {
                                return s.push(t), this
                            }
                        };
                    return o && a(o), u
                }())
            }
        }())
    }

    function et(t) {
        return t.replace(pn, function (t, e, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(dn, "Moz$1")
    }

    function nt(t, e, n, i) {
        function r(t) {
            var r, s, a, u, c, l, f = n && t ? [this.filter(t)] : [this],
                h = e;
            if (!i || null != t)
                for (; f.length;)
                    for (r = f.shift(), s = 0, a = r.length; s < a; s++)
                        for (u = Ue(r[s]), h ? u.triggerHandler("$destroy") : h = !h, c = 0, u = (l = u.children()).length; c < u; c++) f.push(Ve(l[c]));
            return o.apply(this, arguments)
        }
        var o = (o = Ve.fn[t]).$original || o;
        r.$original = o, Ve.fn[t] = r
    }

    function it(t) {
        if (t instanceof it) return t;
        if (x(t) && (t = on(t)), !(this instanceof it)) {
            if (x(t) && "<" != t.charAt(0)) throw mn("nosel");
            return new it(t)
        }
        if (x(t)) {
            var n = t;
            t = e;
            var i;
            if (i = vn.exec(n)) t = [t.createElement(i[1])];
            else {
                var r, o = t;
                if (t = o.createDocumentFragment(), i = [], gn.test(n)) {
                    for (o = t.appendChild(o.createElement("div")), r = (yn.exec(n) || ["", ""])[1].toLowerCase(), r = xn[r] || xn._default, o.innerHTML = "<div>&#160;</div>" + r[1] + n.replace($n, "<$1></$2>") + r[2], o.removeChild(o.firstChild), n = r[0]; n--;) o = o.lastChild;
                    for (n = 0, r = o.childNodes.length; n < r; ++n) i.push(o.childNodes[n]);
                    (o = t.firstChild).textContent = ""
                } else i.push(o.createTextNode(n));
                t.textContent = "", t.innerHTML = "", t = i
            }
            pt(this, t), Ue(e.createDocumentFragment()).append(this)
        } else pt(this, t)
    }

    function rt(t) {
        return t.cloneNode(!0)
    }

    function ot(t) {
        at(t);
        var e = 0;
        for (t = t.childNodes || []; e < t.length; e++) ot(t[e])
    }

    function st(t, e, n, i) {
        if (y(i)) throw mn("offargs");
        var r = ut(t, "events");
        ut(t, "handle") && (g(e) ? o(r, function (e, n) {
            hn(t, n, e), delete r[n]
        }) : o(e.split(" "), function (e) {
            g(n) ? (hn(t, e, r[e]), delete r[e]) : j(r[e] || [], n)
        }))
    }

    function at(t, e) {
        var i = t[cn],
            r = un[i];
        r && (e ? delete un[i].data[e] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), st(t)), delete un[i], t[cn] = n))
    }

    function ut(t, e, n) {
        var i = t[cn],
            i = un[i || -1];
        if (!y(n)) return i && i[e];
        i || (t[cn] = i = ++ln, i = un[i] = {}), i[e] = n
    }

    function ct(t, e, n) {
        var i = ut(t, "data"),
            r = y(n),
            o = !r && y(e),
            s = o && !$(e);
        if (i || s || ut(t, "data", i = {}), r) i[e] = n;
        else {
            if (!o) return i;
            if (s) return i && i[e];
            f(i, e)
        }
    }

    function lt(t, e) {
        return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }

    function ft(t, e) {
        e && t.setAttribute && o(e.split(" "), function (e) {
            t.setAttribute("class", on((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + on(e) + " ", " ")))
        })
    }

    function ht(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function (t) {
                t = on(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", on(n))
        }
    }

    function pt(t, e) {
        if (e) {
            e = e.nodeName || !y(e.length) || E(e) ? [e] : e;
            for (var n = 0; n < e.length; n++) t.push(e[n])
        }
    }

    function dt(t, e) {
        return mt(t, "$" + (e || "ngController") + "Controller")
    }

    function mt(t, e, i) {
        for (9 == (t = Ue(t))[0].nodeType && (t = t.find("html")), e = C(e) ? e : [e]; t.length;) {
            for (var r = t[0], o = 0, s = e.length; o < s; o++)
                if ((i = t.data(e[o])) !== n) return i;
            t = Ue(r.parentNode || 11 === r.nodeType && r.host)
        }
    }

    function vt(t) {
        for (var e = 0, n = t.childNodes; e < n.length; e++) ot(n[e]);
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function gt(t, e) {
        var n = wn[e.toLowerCase()];
        return n && Cn[t.nodeName] && n
    }

    function yt(t, n) {
        var i = function (i, r) {
            if (i.preventDefault || (i.preventDefault = function () {
                    i.returnValue = !1
                }), i.stopPropagation || (i.stopPropagation = function () {
                    i.cancelBubble = !0
                }), i.target || (i.target = i.srcElement || e), g(i.defaultPrevented)) {
                var s = i.preventDefault;
                i.preventDefault = function () {
                    i.defaultPrevented = !0, s.call(i)
                }, i.defaultPrevented = !1
            }
            i.isDefaultPrevented = function () {
                return i.defaultPrevented || !1 === i.returnValue
            }, o(N(n[r || i.type] || []), function (e) {
                e.call(t, i)
            }), 8 >= Be ? (i.preventDefault = null, i.stopPropagation = null, i.isDefaultPrevented = null) : (delete i.preventDefault, delete i.stopPropagation, delete i.isDefaultPrevented)
        };
        return i.elem = t, i
    }

    function $t(t) {
        var e, i = typeof t;
        return "object" == i && null !== t ? "function" == typeof (e = t.$$hashKey) ? e = t.$$hashKey() : e === n && (e = t.$$hashKey = c()) : e = t, i + ":" + e
    }

    function xt(t) {
        o(t, this.put, this)
    }

    function bt(t) {
        var e, n;
        return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(kn, ""), n = n.match(Sn), o(n[1].split(Tn), function (t) {
            t.replace(En, function (t, n, i) {
                e.push(i)
            })
        })), t.$inject = e) : C(t) ? (n = t.length - 1, G(t[n], "fn"), e = t.slice(0, n)) : G(t, "fn", !0), e
    }

    function wt(t) {
        function e(t) {
            return function (e, n) {
                if (!$(e)) return t(e, n);
                o(e, u(t))
            }
        }

        function n(t, e) {
            if (J(t, "service"), (S(e) || C(e)) && (e = p.instantiate(e)), !e.$get) throw An("pget", t);
            return h[t + c] = e
        }

        function i(t, e) {
            return n(t, {
                $get: e
            })
        }

        function r(t) {
            var e, n, i, s, a = [];
            return o(t, function (t) {
                if (!f.get(t)) {
                    f.put(t, !0);
                    try {
                        if (x(t))
                            for (e = Ye(t), a = a.concat(r(e.requires)).concat(e._runBlocks), n = e._invokeQueue, i = 0, s = n.length; i < s; i++) {
                                var o = n[i],
                                    u = p.get(o[0]);
                                u[o[1]].apply(u, o[2])
                            } else S(t) ? a.push(p.invoke(t)) : C(t) ? a.push(p.invoke(t)) : G(t, "module")
                    } catch (e) {
                        throw C(t) && (t = t[t.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), An("modulerr", t, e.stack || e.message || e)
                    }
                }
            }), a
        }

        function s(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === a) throw An("cdep", l.join(" <- "));
                    return t[n]
                }
                try {
                    return l.unshift(n), t[n] = a, t[n] = e(n)
                } catch (e) {
                    throw t[n] === a && delete t[n], e
                } finally {
                    l.shift()
                }
            }

            function i(t, e, i) {
                var r, o, s, a = [],
                    u = bt(t);
                for (o = 0, r = u.length; o < r; o++) {
                    if ("string" != typeof (s = u[o])) throw An("itkn", s);
                    a.push(i && i.hasOwnProperty(s) ? i[s] : n(s))
                }
                return t.$inject || (t = t[r]), t.apply(e, a)
            }
            return {
                invoke: i,
                instantiate: function (t, e) {
                    var n, r = function () {};
                    return r.prototype = (C(t) ? t[t.length - 1] : t).prototype, r = new r, n = i(t, r, e), $(n) || S(n) ? n : r
                },
                get: n,
                annotate: bt,
                has: function (e) {
                    return h.hasOwnProperty(e + c) || t.hasOwnProperty(e)
                }
            }
        }
        var a = {},
            c = "Provider",
            l = [],
            f = new xt,
            h = {
                $provide: {
                    provider: e(n),
                    factory: e(i),
                    service: e(function (t, e) {
                        return i(t, ["$injector", function (t) {
                            return t.instantiate(e)
                        }])
                    }),
                    value: e(function (t, e) {
                        return i(t, v(e))
                    }),
                    constant: e(function (t, e) {
                        J(t, "constant"), h[t] = e, m[t] = e
                    }),
                    decorator: function (t, e) {
                        var n = p.get(t + c),
                            i = n.$get;
                        n.$get = function () {
                            var t = g.invoke(i, n);
                            return g.invoke(e, null, {
                                $delegate: t
                            })
                        }
                    }
                }
            },
            p = h.$injector = s(h, function () {
                throw An("unpr", l.join(" <- "))
            }),
            m = {},
            g = m.$injector = s(m, function (t) {
                return t = p.get(t + c), g.invoke(t.$get, t)
            });
        return o(r(t), function (t) {
            g.invoke(t || d)
        }), g
    }

    function Ct() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, i) {
            function r(t) {
                var e = null;
                return o(t, function (t) {
                    e || "a" !== Xe(t.nodeName) || (e = t)
                }), e
            }

            function s() {
                var t, i = n.hash();
                i ? (t = a.getElementById(i)) ? t.scrollIntoView() : (t = r(a.getElementsByName(i))) ? t.scrollIntoView() : "top" === i && e.scrollTo(0, 0) : e.scrollTo(0, 0)
            }
            var a = e.document;
            return t && i.$watch(function () {
                return n.hash()
            }, function () {
                i.$evalAsync(s)
            }), s
        }]
    }

    function St() {
        this.$get = ["$$rAF", "$timeout", function (t, e) {
            return t.supported ? function (e) {
                return t(e)
            } : function (t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Tt(t, e, i, r) {
        function s(t) {
            try {
                t.apply(null, Ke.call(arguments, 1))
            } finally {
                if (0 == --y)
                    for (; $.length;) try {
                        $.pop()()
                    } catch (t) {
                        i.error(t)
                    }
            }
        }

        function a(t, e) {
            ! function n() {
                o(w, function (t) {
                    t()
                }), b = e(n, t)
            }()
        }

        function u() {
            T = null, C != c.url() && (C = c.url(), o(E, function (t) {
                t(c.url())
            }))
        }
        var c = this,
            l = e[0],
            f = t.location,
            h = t.history,
            p = t.setTimeout,
            m = t.clearTimeout,
            v = {};
        c.isMock = !1;
        var y = 0,
            $ = [];
        c.$$completeOutstandingRequest = s, c.$$incOutstandingRequestCount = function () {
            y++
        }, c.notifyWhenNoOutstandingRequests = function (t) {
            o(w, function (t) {
                t()
            }), 0 === y ? t() : $.push(t)
        };
        var b, w = [];
        c.addPollFn = function (t) {
            return g(b) && a(100, p), w.push(t), t
        };
        var C = f.href,
            S = e.find("base"),
            T = null;
        c.url = function (e, n) {
            return f !== t.location && (f = t.location), h !== t.history && (h = t.history), e ? C != e ? (C = e, r.history ? n ? h.replaceState(null, "", e) : (h.pushState(null, "", e), S.attr("href", S.attr("href"))) : (T = e, n ? f.replace(e) : f.href = e), c) : void 0 : T || f.href.replace(/%27/g, "'")
        };
        var E = [],
            k = !1;
        c.onUrlChange = function (e) {
            return k || (r.history && Ue(t).on("popstate", u), r.hashchange ? Ue(t).on("hashchange", u) : c.addPollFn(u), k = !0), E.push(e), e
        }, c.baseHref = function () {
            var t = S.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var A = {},
            D = "",
            j = c.baseHref();
        c.cookies = function (t, e) {
            var r, o, s, a;
            if (!t) {
                if (l.cookie !== D)
                    for (D = l.cookie, r = D.split("; "), A = {}, s = 0; s < r.length; s++) o = r[s], 0 < (a = o.indexOf("=")) && (t = unescape(o.substring(0, a)), A[t] === n && (A[t] = unescape(o.substring(a + 1))));
                return A
            }
            e === n ? l.cookie = escape(t) + "=;path=" + j + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(e) && 4096 < (r = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + j).length + 1) && i.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!")
        }, c.defer = function (t, e) {
            var n;
            return y++, n = p(function () {
                delete v[n], s(t)
            }, e || 0), v[n] = !0, n
        }, c.defer.cancel = function (t) {
            return !!v[t] && (delete v[t], m(t), s(d), !0)
        }
    }

    function Et() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, i) {
            return new Tt(t, i, e, n)
        }]
    }

    function kt() {
        this.$get = function () {
            function t(t, n) {
                function r(t) {
                    t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in e) throw i("$cacheFactory")("iid", t);
                var s = 0,
                    a = f({}, n, {
                        id: t
                    }),
                    u = {},
                    c = n && n.capacity || Number.MAX_VALUE,
                    l = {},
                    h = null,
                    p = null;
                return e[t] = {
                    put: function (t, e) {
                        if (c < Number.MAX_VALUE && r(l[t] || (l[t] = {
                                key: t
                            })), !g(e)) return t in u || s++, u[t] = e, s > c && this.remove(p.key), e
                    },
                    get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            r(e)
                        }
                        return u[t]
                    },
                    remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete l[t]
                        }
                        delete u[t], s--
                    },
                    removeAll: function () {
                        u = {}, s = 0, l = {}, h = p = null
                    },
                    destroy: function () {
                        l = a = u = null, delete e[t]
                    },
                    info: function () {
                        return f({}, a, {
                            size: s
                        })
                    }
                }
            }
            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function At() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Dt(t, i) {
        var r = {},
            s = "Directive",
            a = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            c = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function e(n, i) {
            return J(n, "directive"), x(n) ? (X(i, "directiveFactory"), r.hasOwnProperty(n) || (r[n] = [], t.factory(n + s, ["$injector", "$exceptionHandler", function (t, e) {
                var i = [];
                return o(r[n], function (r, o) {
                    try {
                        var s = t.invoke(r);
                        S(s) ? s = {
                            compile: v(s)
                        } : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || n, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "A", i.push(s)
                    } catch (t) {
                        e(t)
                    }
                }), i
            }])), r[n].push(i)) : o(n, u(e)), this
        }, this.aHrefSanitizationWhitelist = function (t) {
            return y(t) ? (i.aHrefSanitizationWhitelist(t), this) : i.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (i.imgSrcSanitizationWhitelist(t), this) : i.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, i, u, h, d, g, y, b, w, T, E, k) {
            function A(t, e, n, i, r) {
                t instanceof Ue || (t = Ue(t)), o(t, function (e, n) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = Ue(e).wrap("<span></span>").parent()[0])
                });
                var s = j(t, e, t, n, i, r);
                return D(t, "ng-scope"),
                    function (e, n, i) {
                        X(e, "scope");
                        var r = n ? bn.clone.call(t) : t;
                        o(i, function (t, e) {
                            r.data("$" + e + "Controller", t)
                        }), i = 0;
                        for (var a = r.length; i < a; i++) {
                            var u = r[i].nodeType;
                            1 !== u && 9 !== u || r.eq(i).data("$scope", e)
                        }
                        return n && n(r, e), s && s(e, r, r), r
                    }
            }

            function D(t, e) {
                try {
                    t.addClass(e)
                } catch (t) {}
            }

            function j(t, e, i, r, o, s) {
                for (var a, u, c, l, f = [], h = 0; h < t.length; h++) a = new Z, u = I(t[h], [], a, 0 === h ? r : n, o), (s = u.length ? q(u, t[h], a, e, i, null, [], [], s) : null) && s.scope && D(Ue(t[h]), "ng-scope"), a = s && s.terminal || !(c = t[h].childNodes) || !c.length ? null : j(c, s ? s.transclude : e), f.push(s, a), l = l || s || a, s = null;
                return l ? function (t, i, r, o) {
                    var s, a, u, c, l, h, p;
                    s = i.length;
                    var d = Array(s);
                    for (l = 0; l < s; l++) d[l] = i[l];
                    for (p = l = 0, h = f.length; l < h; p++) a = d[p], i = f[l++], s = f[l++], u = Ue(a), i ? (i.scope ? (c = t.$new(), u.data("$scope", c)) : c = t, (u = i.transclude) || !o && e ? i(s, c, a, r, O(t, u || e)) : i(s, c, a, r, o)) : s && s(t, a.childNodes, n, o)
                } : null
            }

            function O(t, e) {
                return function (n, i, r) {
                    var o = !1;
                    return n || (n = t.$new(), o = n.$$transcluded = !0), i = e(n, i, r), o && i.on("$destroy", L(n, n.$destroy)), i
                }
            }

            function I(t, e, n, i, r) {
                var o, s = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        H(e, jt(Qe(t).toLowerCase()), "E", i, r);
                        for (var u, l, f, h = 0, p = (o = t.attributes) && o.length; h < p; h++) {
                            var d = !1,
                                m = !1;
                            u = o[h], (!Be || 8 <= Be || u.specified) && (f = jt(l = u.name), it.test(f) && (l = Q(f.substr(6), "-")), f === f.replace(/(Start|End)$/, "") + "Start" && (d = l, m = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), s[f = jt(l.toLowerCase())] = l, n[f] = u = on(u.value), gt(t, f) && (n[f] = !0), G(t, e, u, f), H(e, f, "A", i, r, d, m))
                        }
                        if (t = t.className, x(t) && "" !== t)
                            for (; o = c.exec(t);) f = jt(o[2]), H(e, f, "C", i, r) && (n[f] = on(o[3])), t = t.substr(o.index + o[0].length);
                        break;
                    case 3:
                        V(e, t.nodeValue);
                        break;
                    case 8:
                        try {
                            (o = a.exec(t.nodeValue)) && (f = jt(o[1]), H(e, f, "M", i, r) && (n[f] = on(o[2])))
                        } catch (t) {}
                }
                return e.sort(B), e
            }

            function M(t, e, n) {
                var i = [],
                    r = 0;
                if (e && t.hasAttribute && t.hasAttribute(e))
                    do {
                        if (!t) throw On("uterdir", e, n);
                        1 == t.nodeType && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), t = t.nextSibling
                    } while (0 < r);
                else i.push(t);
                return Ue(i)
            }

            function P(t, e, n) {
                return function (i, r, o, s, a) {
                    return r = M(r[0], e, n), t(i, r, o, s, a)
                }
            }

            function q(t, r, s, a, c, l, f, h, p) {
                function d(t, e, n, i) {
                    t && (n && (t = P(t, n, i)), t.require = w.require, (L === w || w.$$isolateScope) && (t = K(t, {
                        isolateScope: !0
                    })), f.push(t)), e && (n && (e = P(e, n, i)), e.require = w.require, (L === w || w.$$isolateScope) && (e = K(e, {
                        isolateScope: !0
                    })), h.push(e))
                }

                function m(t, e, n) {
                    var i, r = "data",
                        s = !1;
                    if (x(t)) {
                        for (;
                            "^" == (i = t.charAt(0)) || "?" == i;) t = t.substr(1), "^" == i && (r = "inheritedData"), s = s || "?" == i;
                        if (i = null, n && "data" === r && (i = n[t]), !(i = i || e[r]("$" + t + "Controller")) && !s) throw On("ctreq", t, T)
                    } else C(t) && (i = [], o(t, function (t) {
                        i.push(m(t, e, n))
                    }));
                    return i
                }

                function v(t, e, a, c, l) {
                    var p, d, v, $, x, b, w, C = {};
                    if (p = r === a ? s : N(s, new Z(Ue(a), s.$attr)), d = p.$$element, L) {
                        var S = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        c = Ue(a), b = e.$new(!0), q && q === L.$$originalDirective ? c.data("$isolateScope", b) : c.data("$isolateScopeNoTemplate", b), D(c, "ng-isolate-scope"), o(L.scope, function (t, n) {
                            var r, o, s, a, u = (l = t.match(S) || [])[3] || n,
                                c = "?" == l[2],
                                l = l[1];
                            switch (b.$$isolateBindings[n] = l + u, l) {
                                case "@":
                                    p.$observe(u, function (t) {
                                        b[n] = t
                                    }), p.$$observers[u].$$scope = e, p[u] && (b[n] = i(p[u])(e));
                                    break;
                                case "=":
                                    if (c && !p[u]) break;
                                    o = g(p[u]), a = o.literal ? _ : function (t, e) {
                                        return t === e
                                    }, s = o.assign || function () {
                                        throw r = b[n] = o(e), On("nonassign", p[u], L.name)
                                    }, r = b[n] = o(e), b.$watch(function () {
                                        var t = o(e);
                                        return a(t, b[n]) || (a(t, r) ? s(e, t = b[n]) : b[n] = t), r = t
                                    }, null, o.literal);
                                    break;
                                case "&":
                                    o = g(p[u]), b[n] = function (t) {
                                        return o(e, t)
                                    };
                                    break;
                                default:
                                    throw On("iscp", L.name, n, t)
                            }
                        })
                    }
                    for (w = l && function (t, e) {
                            var i;
                            return 2 > arguments.length && (e = t, t = n), V && (i = C), l(t, e, i)
                        }, O && o(O, function (t) {
                            var n, i = {
                                $scope: t === L || t.$$isolateScope ? b : e,
                                $element: d,
                                $attrs: p,
                                $transclude: w
                            };
                            "@" == (x = t.controller) && (x = p[t.name]), n = y(x, i), C[t.name] = n, V || d.data("$" + t.name + "Controller", n), t.controllerAs && (i.$scope[t.controllerAs] = n)
                        }), c = 0, v = f.length; c < v; c++) try {
                        ($ = f[c])($.isolateScope ? b : e, d, p, $.require && m($.require, d, C), w)
                    } catch (t) {
                        u(t, F(d))
                    }
                    for (c = e, L && (L.template || null === L.templateUrl) && (c = b), t && t(c, a.childNodes, n, l), c = h.length - 1; 0 <= c; c--) try {
                        ($ = h[c])($.isolateScope ? b : e, d, p, $.require && m($.require, d, C), w)
                    } catch (t) {
                        u(t, F(d))
                    }
                }
                p = p || {};
                for (var b, w, T, E, k, j = -Number.MAX_VALUE, O = p.controllerDirectives, L = p.newIsolateScopeDirective, q = p.templateDirective, H = p.nonTlbTranscludeDirective, B = !1, V = p.hasElementTranscludeDirective, Y = s.$$element = Ue(r), Q = a, X = 0, G = t.length; X < G; X++) {
                    var tt = (w = t[X]).$$start,
                        et = w.$$end;
                    if (tt && (Y = M(r, tt, et)), E = n, j > w.priority) break;
                    if ((E = w.scope) && (b = b || w, w.templateUrl || (U("new/isolated scope", L, w, Y), $(E) && (L = w))), T = w.name, !w.templateUrl && w.controller && (E = w.controller, O = O || {}, U("'" + T + "' controller", O[T], w, Y), O[T] = w), (E = w.transclude) && (B = !0, w.$$tlb || (U("transclusion", H, w, Y), H = w), "element" == E ? (V = !0, j = w.priority, E = M(r, tt, et), Y = s.$$element = Ue(e.createComment(" " + T + ": " + s[T] + " ")), r = Y[0], J(c, Ue(Ke.call(E, 0)), r), Q = A(E, a, j, l && l.name, {
                            nonTlbTranscludeDirective: H
                        })) : (E = Ue(rt(r)).contents(), Y.empty(), Q = A(E, a))), w.template)
                        if (U("template", q, w, Y), q = w, E = S(w.template) ? w.template(Y, s) : w.template, E = nt(E), w.replace) {
                            if (l = w, E = gn.test(E) ? Ue(E) : [], r = E[0], 1 != E.length || 1 !== r.nodeType) throw On("tplrt", T, "");
                            J(c, Y, r), E = I(r, [], G = {
                                $attr: {}
                            });
                            var it = t.splice(X + 1, t.length - (X + 1));
                            L && R(E), t = t.concat(E).concat(it), z(s, G), G = t.length
                        } else Y.html(E);
                    if (w.templateUrl) U("template", q, w, Y), q = w, w.replace && (l = w), v = W(t.splice(X, t.length - X), Y, s, c, Q, f, h, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: L,
                        templateDirective: q,
                        nonTlbTranscludeDirective: H
                    }), G = t.length;
                    else if (w.compile) try {
                        S(k = w.compile(Y, s, Q)) ? d(null, k, tt, et) : k && d(k.pre, k.post, tt, et)
                    } catch (t) {
                        u(t, F(Y))
                    }
                    w.terminal && (v.terminal = !0, j = Math.max(j, w.priority))
                }
                return v.scope = b && !0 === b.scope, v.transclude = B && Q, p.hasElementTranscludeDirective = V, v
            }

            function R(t) {
                for (var e = 0, n = t.length; e < n; e++) t[e] = p(t[e], {
                    $$isolateScope: !0
                })
            }

            function H(e, i, o, a, c, l, f) {
                if (i === c) return null;
                if (c = null, r.hasOwnProperty(i))
                    for (var h, d = 0, m = (i = t.get(i + s)).length; d < m; d++) try {
                        h = i[d], (a === n || a > h.priority) && -1 != h.restrict.indexOf(o) && (l && (h = p(h, {
                            $$start: l,
                            $$end: f
                        })), e.push(h), c = h)
                    } catch (t) {
                        u(t)
                    }
                return c
            }

            function z(t, e) {
                var n = e.$attr,
                    i = t.$attr,
                    r = t.$$element;
                o(t, function (i, r) {
                    "$" != r.charAt(0) && (e[r] && (i += ("style" === r ? ";" : " ") + e[r]), t.$set(r, i, !0, n[r]))
                }), o(e, function (e, o) {
                    "class" == o ? (D(r, e), t.class = (t.class ? t.class + " " : "") + e) : "style" == o ? (r.attr("style", r.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, i[o] = n[o])
                })
            }

            function W(t, e, n, i, r, s, a, u) {
                var c, l, p = [],
                    m = e[0],
                    v = t.shift(),
                    g = f({}, v, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: v
                    }),
                    y = S(v.templateUrl) ? v.templateUrl(e, n) : v.templateUrl;
                return e.empty(), h.get(T.getTrustedResourceUrl(y), {
                        cache: d
                    }).success(function (f) {
                        var h, d;
                        if (f = nt(f), v.replace) {
                            if (f = gn.test(f) ? Ue(f) : [], h = f[0], 1 != f.length || 1 !== h.nodeType) throw On("tplrt", v.name, y);
                            f = {
                                $attr: {}
                            }, J(i, e, h);
                            w = I(h, [], f);
                            $(v.scope) && R(w), t = w.concat(t), z(n, f)
                        } else h = m, e.html(f);
                        for (t.unshift(g), c = q(t, h, n, r, e, v, s, a, u), o(i, function (t, n) {
                                t == h && (i[n] = e[0])
                            }), l = j(e[0].childNodes, r); p.length;) {
                            f = p.shift(), d = p.shift();
                            var x = p.shift(),
                                b = p.shift(),
                                w = e[0];
                            if (d !== m) {
                                var C = d.className;
                                u.hasElementTranscludeDirective && v.replace || (w = rt(h)), J(x, Ue(d), w), D(Ue(w), C)
                            }
                            d = c.transclude ? O(f, c.transclude) : b, c(l, f, w, i, d)
                        }
                        p = null
                    }).error(function (t, e, n, i) {
                        throw On("tpload", i.url)
                    }),
                    function (t, e, n, i, r) {
                        p ? (p.push(e), p.push(n), p.push(i), p.push(r)) : c(l, e, n, i, r)
                    }
            }

            function B(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function U(t, e, n, i) {
                if (e) throw On("multidir", e.name, n.name, t, F(i))
            }

            function V(t, e) {
                var n = i(e, !0);
                n && t.push({
                    priority: 0,
                    compile: v(function (t, e) {
                        var i = e.parent(),
                            r = i.data("$binding") || [];
                        r.push(n), D(i.data("$binding", r), "ng-binding"), t.$watch(n, function (t) {
                            e[0].nodeValue = t
                        })
                    })
                })
            }

            function Y(t, e) {
                if ("srcdoc" == e) return T.HTML;
                var n = Qe(t);
                return "xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? T.RESOURCE_URL : void 0
            }

            function G(t, e, n, r) {
                var o = i(n, !0);
                if (o) {
                    if ("multiple" === r && "SELECT" === Qe(t)) throw On("selmulti", F(t));
                    e.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (e, n, s) {
                                    if (n = s.$$observers || (s.$$observers = {}), l.test(r)) throw On("nodomevents");
                                    (o = i(s[r], !0, Y(t, r))) && (s[r] = o(e), (n[r] || (n[r] = [])).$$inter = !0, (s.$$observers && s.$$observers[r].$$scope || e).$watch(o, function (t, e) {
                                        "class" === r && t != e ? s.$updateClass(t, e) : s.$set(r, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function J(t, n, i) {
                var r, o, s = n[0],
                    a = n.length,
                    u = s.parentNode;
                if (t)
                    for (r = 0, o = t.length; r < o; r++)
                        if (t[r] == s) {
                            t[r++] = i, o = r + a - 1;
                            for (var c = t.length; r < c; r++, o++) o < c ? t[r] = t[o] : delete t[r];
                            t.length -= a - 1;
                            break
                        }
                for (u && u.replaceChild(i, s), (t = e.createDocumentFragment()).appendChild(s), i[Ue.expando] = s[Ue.expando], s = 1, a = n.length; s < a; s++) u = n[s], Ue(u).remove(), t.appendChild(u), delete n[s];
                n[0] = i, n.length = 1
            }

            function K(t, e) {
                return f(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }
            var Z = function (t, e) {
                this.$$element = t, this.$attr = e || {}
            };
            Z.prototype = {
                $normalize: jt,
                $addClass: function (t) {
                    t && 0 < t.length && E.addClass(this.$$element, t)
                },
                $removeClass: function (t) {
                    t && 0 < t.length && E.removeClass(this.$$element, t)
                },
                $updateClass: function (t, e) {
                    var n = Ot(t, e),
                        i = Ot(e, t);
                    0 === n.length ? E.removeClass(this.$$element, i) : 0 === i.length ? E.addClass(this.$$element, n) : E.setClass(this.$$element, n, i)
                },
                $set: function (t, e, i, r) {
                    var s = gt(this.$$element[0], t);
                    s && (this.$$element.prop(t, e), r = s), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = Q(t, "-")), ("A" === (s = Qe(this.$$element)) && "href" === t || "IMG" === s && "src" === t) && (this[t] = e = k(e, "src" === t)), !1 !== i && (null === e || e === n ? this.$$element.removeAttr(r) : this.$$element.attr(r, e)), (i = this.$$observers) && o(i[t], function (t) {
                        try {
                            t(e)
                        } catch (t) {
                            u(t)
                        }
                    })
                },
                $observe: function (t, e) {
                    var n = this,
                        i = n.$$observers || (n.$$observers = {}),
                        r = i[t] || (i[t] = []);
                    return r.push(e), b.$evalAsync(function () {
                        r.$$inter || e(n[t])
                    }), e
                }
            };
            var tt = i.startSymbol(),
                et = i.endSymbol(),
                nt = "{{" == tt || "}}" == et ? m : function (t) {
                    return t.replace(/\{\{/g, tt).replace(/}}/g, et)
                },
                it = /^ngAttr[A-Z]/;
            return A
        }]
    }

    function jt(t) {
        return et(t.replace(Nn, ""))
    }

    function Ot(t, e) {
        var n = "",
            i = t.split(/\s+/),
            r = e.split(/\s+/),
            o = 0;
        t: for (; o < i.length; o++) {
            for (var s = i[o], a = 0; a < r.length; a++)
                if (s == r[a]) continue t;
            n += (0 < n.length ? " " : "") + s
        }
        return n
    }

    function Nt() {
        var t = {},
            e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (e, n) {
            J(e, "controller"), $(e) ? f(t, e) : t[e] = n
        }, this.$get = ["$injector", "$window", function (n, r) {
            return function (o, s) {
                var a, u, c;
                if (x(o) && (a = o.match(e), u = a[1], c = a[3], o = t.hasOwnProperty(u) ? t[u] : K(s.$scope, u, !0) || K(r, u, !0), G(o, u, !0)), a = n.instantiate(o, s), c) {
                    if (!s || "object" != typeof s.$scope) throw i("$controller")("noscp", u || o.name, c);
                    s.$scope[c] = a
                }
                return a
            }
        }]
    }

    function _t() {
        this.$get = ["$window", function (t) {
            return Ue(t.document)
        }]
    }

    function It() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function Lt(t) {
        var e, n, i, r = {};
        return t ? (o(t.split("\n"), function (t) {
            i = t.indexOf(":"), e = Xe(on(t.substr(0, i))), n = on(t.substr(i + 1)), e && (r[e] = r[e] ? r[e] + ", " + n : n)
        }), r) : r
    }

    function Mt(t) {
        var e = $(t) ? t : n;
        return function (n) {
            return e || (e = Lt(t)), n ? e[Xe(n)] || null : e
        }
    }

    function Pt(t, e, n) {
        return S(n) ? n(t, e) : (o(n, function (n) {
            t = n(t, e)
        }), t)
    }

    function qt() {
        var t = /^\s*(\[|\{[^\{])/,
            e = /[\}\]]\s*$/,
            i = /^\)\]\}',?\n/,
            r = {
                "Content-Type": "application/json;charset=utf-8"
            },
            s = this.defaults = {
                transformResponse: [function (n) {
                    return x(n) && (n = n.replace(i, ""), t.test(n) && e.test(n) && (n = q(n))), n
                }],
                transformRequest: [function (t) {
                    return $(t) && "[object File]" !== tn.call(t) && "[object Blob]" !== tn.call(t) ? P(t) : t
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: O(r),
                    put: O(r),
                    patch: O(r)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            u = this.interceptors = [],
            c = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (t, e, i, r, l, h) {
            function p(t) {
                function i(t) {
                    var e = f({}, t, {
                        data: Pt(t.data, t.headers, r.transformResponse)
                    });
                    return 200 <= t.status && 300 > t.status ? e : l.reject(e)
                }
                var r = {
                        method: "get",
                        transformRequest: s.transformRequest,
                        transformResponse: s.transformResponse
                    },
                    a = function (t) {
                        function e(t) {
                            var e;
                            o(t, function (n, i) {
                                S(n) && (e = n(), null != e ? t[i] = e : delete t[i])
                            })
                        }
                        var n, i, r = s.headers,
                            a = f({}, t.headers);
                        e(r = f({}, r.common, r[Xe(t.method)])), e(a);
                        t: for (n in r) {
                            t = Xe(n);
                            for (i in a)
                                if (Xe(i) === t) continue t;
                            a[n] = r[n]
                        }
                        return a
                    }(t);
                f(r, t), r.headers = a, r.method = Je(r.method), (t = Se(r.url) ? e.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n) && (a[r.xsrfHeaderName || s.xsrfHeaderName] = t);
                var u = [function (t) {
                        a = t.headers;
                        var e = Pt(t.data, Mt(a), t.transformRequest);
                        return g(t.data) && o(a, function (t, e) {
                            "content-type" === Xe(e) && delete a[e]
                        }), g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials), d(t, e, a).then(i, i)
                    }, n],
                    c = l.when(r);
                for (o(b, function (t) {
                        (t.request || t.requestError) && u.unshift(t.request, t.requestError), (t.response || t.responseError) && u.push(t.response, t.responseError)
                    }); u.length;) {
                    t = u.shift();
                    var h = u.shift(),
                        c = c.then(t, h)
                }
                return c.success = function (t) {
                    return c.then(function (e) {
                        t(e.data, e.status, e.headers, r)
                    }), c
                }, c.error = function (t) {
                    return c.then(null, function (e) {
                        t(e.data, e.status, e.headers, r)
                    }), c
                }, c
            }

            function d(e, n, i) {
                function o(t, n, i, r) {
                    (200 <= (n = Math.max(n, 0)) && 300 > n ? f.resolve : f.reject)({
                        data: t,
                        status: n,
                        headers: Mt(i),
                        config: e,
                        statusText: r
                    })
                }

                function a() {
                    var t = D(p.pendingRequests, e); - 1 !== t && p.pendingRequests.splice(t, 1)
                }
                var u, c, f = l.defer(),
                    h = f.promise,
                    d = m(e.url, e.params);
                if (p.pendingRequests.push(e), h.then(a, a), (e.cache || s.cache) && !1 !== e.cache && "GET" == e.method && (u = $(e.cache) ? e.cache : $(s.cache) ? s.cache : v), u)
                    if (c = u.get(d), y(c)) {
                        if (c.then) return c.then(a, a), c;
                        C(c) ? o(c[1], c[0], O(c[2]), c[3]) : o(c, 200, {}, "OK")
                    } else u.put(d, h);
                return g(c) && t(e.method, d, n, function (t, e, n, i) {
                    u && (200 <= t && 300 > t ? u.put(d, [t, e, Lt(n), i]) : u.remove(d)), o(e, t, n, i), r.$$phase || r.$apply()
                }, i, e.timeout, e.withCredentials, e.responseType), h
            }

            function m(t, e) {
                if (!e) return t;
                var n = [];
                return a(e, function (t, e) {
                    null === t || g(t) || (C(t) || (t = [t]), o(t, function (t) {
                        $(t) && (t = P(t)), n.push(U(e) + "=" + U(t))
                    }))
                }), 0 < n.length && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }
            var v = i("$http"),
                b = [];
            return o(u, function (t) {
                    b.unshift(x(t) ? h.get(t) : h.invoke(t))
                }), o(c, function (t, e) {
                    var n = x(t) ? h.get(t) : h.invoke(t);
                    b.splice(e, 0, {
                        response: function (t) {
                            return n(l.when(t))
                        },
                        responseError: function (t) {
                            return n(l.reject(t))
                        }
                    })
                }), p.pendingRequests = [],
                function (t) {
                    o(arguments, function (t) {
                        p[t] = function (e, n) {
                            return p(f(n || {}, {
                                method: t,
                                url: e
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function (t) {
                    o(arguments, function (t) {
                        p[t] = function (e, n, i) {
                            return p(f(i || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }
                    })
                }("post", "put"), p.defaults = s, p
        }]
    }

    function Rt(e) {
        if (8 >= Be && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest) return new t.XMLHttpRequest;
        throw i("$httpBackend")("noxhr")
    }

    function Ft() {
        this.$get = ["$browser", "$window", "$document", function (t, e, n) {
            return Ht(t, Rt, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function Ht(t, e, n, i, r) {
        function s(t, e) {
            var n = r.createElement("script"),
                i = function () {
                    n.onreadystatechange = n.onload = n.onerror = null, r.body.removeChild(n), e && e()
                };
            return n.type = "text/javascript", n.src = t, Be && 8 >= Be ? n.onreadystatechange = function () {
                /loaded|complete/.test(n.readyState) && i()
            } : n.onload = n.onerror = function () {
                i()
            }, r.body.appendChild(n), i
        }
        var a = -1;
        return function (r, u, c, l, f, h, p, m) {
            function v() {
                $ = a, b && b(), w && w.abort()
            }

            function g(e, i, r, o, s) {
                C && n.cancel(C), b = w = null, 0 === i && (i = r ? 200 : "file" == Ce(u).protocol ? 404 : 0), e(1223 === i ? 204 : i, r, o, s || ""), t.$$completeOutstandingRequest(d)
            }
            var $;
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Xe(r)) {
                var x = "_" + (i.counter++).toString(36);
                i[x] = function (t) {
                    i[x].data = t
                };
                var b = s(u.replace("JSON_CALLBACK", "angular.callbacks." + x), function () {
                    i[x].data ? g(l, 200, i[x].data) : g(l, $ || -2), i[x] = nn.noop
                })
            } else {
                var w = e(r);
                if (w.open(r, u, !0), o(f, function (t, e) {
                        y(t) && w.setRequestHeader(e, t)
                    }), w.onreadystatechange = function () {
                        if (w && 4 == w.readyState) {
                            var t = null,
                                e = null;
                            $ !== a && (t = w.getAllResponseHeaders(), e = "response" in w ? w.response : w.responseText), g(l, $ || w.status, e, t, w.statusText || "")
                        }
                    }, p && (w.withCredentials = !0), m) try {
                    w.responseType = m
                } catch (t) {
                    if ("json" !== m) throw t
                }
                w.send(c || null)
            }
            if (0 < h) var C = n(v, h);
            else h && h.then && h.then(v)
        }
    }

    function zt() {
        var t = "{{",
            e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r) {
            function o(o, u, c) {
                for (var l, f, h = 0, p = [], d = o.length, m = !1, v = []; h < d;) - 1 != (l = o.indexOf(t, h)) && -1 != (f = o.indexOf(e, l + s)) ? (h != l && p.push(o.substring(h, l)), p.push(h = n(m = o.substring(l + s, f))), h.exp = m, h = f + a, m = !0) : (h != d && p.push(o.substring(h)), h = d);
                if ((d = p.length) || (p.push(""), d = 1), c && 1 < p.length) throw _n("noconcat", o);
                if (!u || m) return v.length = d, h = function (t) {
                    try {
                        for (var e, n = 0, s = d; n < s; n++) "function" == typeof (e = p[n]) && (e = e(t), e = c ? r.getTrusted(c, e) : r.valueOf(e), null === e || g(e) ? e = "" : "string" != typeof e && (e = P(e))), v[n] = e;
                        return v.join("")
                    } catch (e) {
                        t = _n("interr", o, e.toString()), i(t)
                    }
                }, h.exp = o, h.parts = p, h
            }
            var s = t.length,
                a = e.length;
            return o.startSymbol = function () {
                return t
            }, o.endSymbol = function () {
                return e
            }, o
        }]
    }

    function Wt() {
        this.$get = ["$rootScope", "$window", "$q", function (t, e, n) {
            function i(i, o, s, a) {
                var u = e.setInterval,
                    c = e.clearInterval,
                    l = n.defer(),
                    f = l.promise,
                    h = 0,
                    p = y(a) && !a;
                return s = y(s) ? s : 0, f.then(null, null, i), f.$$intervalId = u(function () {
                    l.notify(h++), 0 < s && h >= s && (l.resolve(h), c(f.$$intervalId), delete r[f.$$intervalId]), p || t.$apply()
                }, o), r[f.$$intervalId] = l, f
            }
            var r = {};
            return i.cancel = function (t) {
                return !!(t && t.$$intervalId in r) && (r[t.$$intervalId].reject("canceled"), clearInterval(t.$$intervalId), delete r[t.$$intervalId], !0)
            }, i
        }]
    }

    function Bt() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function Ut(t) {
        for (var e = (t = t.split("/")).length; e--;) t[e] = B(t[e]);
        return t.join("/")
    }

    function Vt(t, e, n) {
        t = Ce(t, n), e.$$protocol = t.protocol, e.$$host = t.hostname, e.$$port = h(t.port) || Ln[t.protocol] || null
    }

    function Yt(t, e, n) {
        var i = "/" !== t.charAt(0);
        i && (t = "/" + t), t = Ce(t, n), e.$$path = decodeURIComponent(i && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname), e.$$search = z(t.search), e.$$hash = decodeURIComponent(t.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function Qt(t, e) {
        if (0 === e.indexOf(t)) return e.substr(t.length)
    }

    function Xt(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function Gt(t) {
        return t.substr(0, Xt(t).lastIndexOf("/") + 1)
    }

    function Jt(t, e) {
        this.$$html5 = !0, e = e || "";
        var i = Gt(t);
        Vt(t, this, t), this.$$parse = function (e) {
            var n = Qt(i, e);
            if (!x(n)) throw Mn("ipthprfx", e, i);
            Yt(n, this, t), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = W(this.$$search),
                e = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = Ut(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = i + this.$$url.substr(1)
        }, this.$$rewrite = function (r) {
            var o;
            return (o = Qt(t, r)) !== n ? (r = o, (o = Qt(e, o)) !== n ? i + (Qt("/", o) || o) : t + r) : (o = Qt(i, r)) !== n ? i + o : i == r + "/" ? i : void 0
        }
    }

    function Kt(t, e) {
        var n = Gt(t);
        Vt(t, this, t), this.$$parse = function (i) {
            var r = Qt(t, i) || Qt(n, i);
            if (!x(r = "#" == r.charAt(0) ? Qt(e, r) : this.$$html5 ? r : "")) throw Mn("ihshprfx", i, e);
            Yt(r, this, t), i = this.$$path;
            var o = /^\/?.*?:(\/.*)/;
            0 === r.indexOf(t) && (r = r.replace(t, "")), o.exec(r) || (i = (r = o.exec(i)) ? r[1] : i), this.$$path = i, this.$$compose()
        }, this.$$compose = function () {
            var n = W(this.$$search),
                i = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = Ut(this.$$path) + (n ? "?" + n : "") + i, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
        }, this.$$rewrite = function (e) {
            if (Xt(t) == Xt(e)) return e
        }
    }

    function Zt(t, e) {
        this.$$html5 = !0, Kt.apply(this, arguments);
        var n = Gt(t);
        this.$$rewrite = function (i) {
            var r;
            return t == Xt(i) ? i : (r = Qt(n, i)) ? t + e + r : n === i + "/" ? n : void 0
        }
    }

    function te(t) {
        return function () {
            return this[t]
        }
    }

    function ee(t, e) {
        return function (n) {
            return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function ne() {
        var e = "",
            n = !1;
        this.hashPrefix = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.html5Mode = function (t) {
            return y(t) ? (n = t, this) : n
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (i, r, o, s) {
            function a(t) {
                i.$broadcast("$locationChangeSuccess", u.absUrl(), t)
            }
            var u, c = r.baseHref(),
                l = r.url();
            n ? (c = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (c || "/"), o = o.history ? Jt : Zt) : (c = Xt(l), o = Kt), (u = new o(c, "#" + e)).$$parse(u.$$rewrite(l)), s.on("click", function (e) {
                if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
                    for (var n = Ue(e.target);
                        "a" !== Xe(n[0].nodeName);)
                        if (n[0] === s[0] || !(n = n.parent())[0]) return;
                    var o = n.prop("href");
                    $(o) && "[object SVGAnimatedString]" === o.toString() && (o = Ce(o.animVal).href);
                    var a = u.$$rewrite(o);
                    o && !n.attr("target") && a && !e.isDefaultPrevented() && (e.preventDefault(), a != r.url() && (u.$$parse(a), i.$apply(), t.angular["ff-684208-preventDefault"] = !0))
                }
            }), u.absUrl() != l && r.url(u.absUrl(), !0), r.onUrlChange(function (t) {
                u.absUrl() != t && (i.$evalAsync(function () {
                    var e = u.absUrl();
                    u.$$parse(t), i.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), r.url(e)) : a(e)
                }), i.$$phase || i.$digest())
            });
            var f = 0;
            return i.$watch(function () {
                var t = r.url(),
                    e = u.$$replace;
                return f && t == u.absUrl() || (f++, i.$evalAsync(function () {
                    i.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (r.url(u.absUrl(), e), a(t))
                })), u.$$replace = !1, f
            }), u
        }]
    }

    function ie() {
        var t = !0,
            e = this;
        this.debugEnabled = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function i(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function r(t) {
                var e = n.console || {},
                    r = e[t] || e.log || d;
                t = !1;
                try {
                    t = !!r.apply
                } catch (t) {}
                return t ? function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(i(e))
                    }), r.apply(e, t)
                } : function (t, e) {
                    r(t, null == e ? "" : e)
                }
            }
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: function () {
                    var n = r("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function re(t, e) {
        if ("constructor" === t) throw qn("isecfld", e);
        return t
    }

    function oe(t, e) {
        if (t) {
            if (t.constructor === t) throw qn("isecfn", e);
            if (t.document && t.location && t.alert && t.setInterval) throw qn("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw qn("isecdom", e)
        }
        return t
    }

    function se(t, e, i, r, o) {
        o = o || {}, e = e.split(".");
        for (var s, a = 0; 1 < e.length; a++) {
            var u = t[s = re(e.shift(), r)];
            u || (u = {}, t[s] = u), (t = u).then && o.unwrapPromises && (Pn(r), "$$v" in t || function (t) {
                t.then(function (e) {
                    t.$$v = e
                })
            }(t), t.$$v === n && (t.$$v = {}), t = t.$$v)
        }
        return s = re(e.shift(), r), t[s] = i
    }

    function ae(t, e, i, r, o, s, a) {
        return re(t, s), re(e, s), re(i, s), re(r, s), re(o, s), a.unwrapPromises ? function (a, u) {
            var c, l = u && u.hasOwnProperty(t) ? u : a;
            return null == l ? l : ((l = l[t]) && l.then && (Pn(s), "$$v" in l || (c = l, c.$$v = n, c.then(function (t) {
                c.$$v = t
            })), l = l.$$v), e ? null == l ? n : ((l = l[e]) && l.then && (Pn(s), "$$v" in l || (c = l, c.$$v = n, c.then(function (t) {
                c.$$v = t
            })), l = l.$$v), i ? null == l ? n : ((l = l[i]) && l.then && (Pn(s), "$$v" in l || (c = l, c.$$v = n, c.then(function (t) {
                c.$$v = t
            })), l = l.$$v), r ? null == l ? n : ((l = l[r]) && l.then && (Pn(s), "$$v" in l || (c = l, c.$$v = n, c.then(function (t) {
                c.$$v = t
            })), l = l.$$v), o ? null == l ? n : ((l = l[o]) && l.then && (Pn(s), "$$v" in l || (c = l, c.$$v = n, c.then(function (t) {
                c.$$v = t
            })), l = l.$$v), l) : l) : l) : l) : l)
        } : function (s, a) {
            var u = a && a.hasOwnProperty(t) ? a : s;
            return null == u ? u : (u = u[t], e ? null == u ? n : (u = u[e], i ? null == u ? n : (u = u[i], r ? null == u ? n : (u = u[r], o ? null == u ? n : u = u[o] : u) : u) : u) : u)
        }
    }

    function ue(t, e) {
        return re(t, e),
            function (e, i) {
                return null == e ? n : (i && i.hasOwnProperty(t) ? i : e)[t]
            }
    }

    function ce(t, e, i) {
        return re(t, i), re(e, i),
            function (i, r) {
                return null == i ? n : (i = (r && r.hasOwnProperty(t) ? r : i)[t], null == i ? n : i[e])
            }
    }

    function le(t, e, i) {
        if (Bn.hasOwnProperty(t)) return Bn[t];
        var r, s = t.split("."),
            a = s.length;
        if (e.unwrapPromises || 1 !== a)
            if (e.unwrapPromises || 2 !== a)
                if (e.csp) r = 6 > a ? ae(s[0], s[1], s[2], s[3], s[4], i, e) : function (t, r) {
                    var o, u = 0;
                    do {
                        o = ae(s[u++], s[u++], s[u++], s[u++], s[u++], i, e)(t, r), r = n, t = o
                    } while (u < a);
                    return o
                };
                else {
                    u = "var p;\n";
                    o(s, function (t, n) {
                        re(t, i), u += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + t + '"))?k:s)') + '["' + t + '"];\n' + (e.unwrapPromises ? 'if (s && s.then) {\n pw("' + i.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
                    });
                    var u = u + "return s;",
                        c = new Function("s", "k", "pw", u);
                    c.toString = v(u), r = e.unwrapPromises ? function (t, e) {
                        return c(t, e, Pn)
                    } : c
                }
        else r = ce(s[0], s[1], i);
        else r = ue(s[0], i);
        return "hasOwnProperty" !== t && (Bn[t] = r), r
    }

    function fe() {
        var t = {},
            e = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0
            };
        this.unwrapPromises = function (t) {
            return y(t) ? (e.unwrapPromises = !!t, this) : e.unwrapPromises
        }, this.logPromiseWarnings = function (t) {
            return y(t) ? (e.logPromiseWarnings = t, this) : e.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function (n, i, r) {
            return e.csp = i.csp, Pn = function (t) {
                    e.logPromiseWarnings && !Rn.hasOwnProperty(t) && (Rn[t] = !0, r.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                },
                function (i) {
                    var r;
                    switch (typeof i) {
                        case "string":
                            return t.hasOwnProperty(i) ? t[i] : (r = new zn(e), r = new Wn(r, n, e).parse(i, !1), "hasOwnProperty" !== i && (t[i] = r), r);
                        case "function":
                            return i;
                        default:
                            return d
                    }
                }
        }]
    }

    function he() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return pe(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function pe(t, e) {
        function i(t) {
            return t
        }

        function r(t) {
            return u(t)
        }
        var s = function () {
                var o, u, l = [];
                return u = {
                    resolve: function (e) {
                        if (l) {
                            var i = l;
                            l = n, o = a(e), i.length && t(function () {
                                for (var t, e = 0, n = i.length; e < n; e++) t = i[e], o.then(t[0], t[1], t[2])
                            })
                        }
                    },
                    reject: function (t) {
                        u.resolve(c(t))
                    },
                    notify: function (e) {
                        if (l) {
                            var n = l;
                            l.length && t(function () {
                                for (var t = 0, i = n.length; t < i; t++) n[t][2](e)
                            })
                        }
                    },
                    promise: {
                        then: function (t, n, a) {
                            var u = s(),
                                c = function (n) {
                                    try {
                                        u.resolve((S(t) ? t : i)(n))
                                    } catch (t) {
                                        u.reject(t), e(t)
                                    }
                                },
                                f = function (t) {
                                    try {
                                        u.resolve((S(n) ? n : r)(t))
                                    } catch (t) {
                                        u.reject(t), e(t)
                                    }
                                },
                                h = function (t) {
                                    try {
                                        u.notify((S(a) ? a : i)(t))
                                    } catch (t) {
                                        e(t)
                                    }
                                };
                            return l ? l.push([c, f, h]) : o.then(c, f, h), u.promise
                        },
                        catch: function (t) {
                            return this.then(null, t)
                        },
                        finally: function (t) {
                            function e(t, e) {
                                var n = s();
                                return e ? n.resolve(t) : n.reject(t), n.promise
                            }

                            function n(n, r) {
                                var o = null;
                                try {
                                    o = (t || i)()
                                } catch (t) {
                                    return e(t, !1)
                                }
                                return o && S(o.then) ? o.then(function () {
                                    return e(n, r)
                                }, function (t) {
                                    return e(t, !1)
                                }) : e(n, r)
                            }
                            return this.then(function (t) {
                                return n(t, !0)
                            }, function (t) {
                                return n(t, !1)
                            })
                        }
                    }
                }
            },
            a = function (e) {
                return e && S(e.then) ? e : {
                    then: function (n) {
                        var i = s();
                        return t(function () {
                            i.resolve(n(e))
                        }), i.promise
                    }
                }
            },
            u = function (t) {
                var e = s();
                return e.reject(t), e.promise
            },
            c = function (n) {
                return {
                    then: function (i, o) {
                        var a = s();
                        return t(function () {
                            try {
                                a.resolve((S(o) ? o : r)(n))
                            } catch (t) {
                                a.reject(t), e(t)
                            }
                        }), a.promise
                    }
                }
            };
        return {
            defer: s,
            reject: u,
            when: function (n, o, c, l) {
                var f, h = s(),
                    p = function (t) {
                        try {
                            return (S(o) ? o : i)(t)
                        } catch (t) {
                            return e(t), u(t)
                        }
                    },
                    d = function (t) {
                        try {
                            return (S(c) ? c : r)(t)
                        } catch (t) {
                            return e(t), u(t)
                        }
                    },
                    m = function (t) {
                        try {
                            return (S(l) ? l : i)(t)
                        } catch (t) {
                            e(t)
                        }
                    };
                return t(function () {
                    a(n).then(function (t) {
                        f || (f = !0, h.resolve(a(t).then(p, d, m)))
                    }, function (t) {
                        f || (f = !0, h.resolve(d(t)))
                    }, function (t) {
                        f || h.notify(m(t))
                    })
                }), h.promise
            },
            all: function (t) {
                var e = s(),
                    n = 0,
                    i = C(t) ? [] : {};
                return o(t, function (t, r) {
                    n++, a(t).then(function (t) {
                        i.hasOwnProperty(r) || (i[r] = t, --n || e.resolve(i))
                    }, function (t) {
                        i.hasOwnProperty(r) || e.reject(t)
                    })
                }), 0 === n && e.resolve(i), e.promise
            }
        }
    }

    function de() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame,
                i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                r = !!n,
                o = r ? function (t) {
                    var e = n(t);
                    return function () {
                        i(e)
                    }
                } : function (t) {
                    var n = e(t, 16.66, !1);
                    return function () {
                        e.cancel(n)
                    }
                };
            return o.supported = r, o
        }]
    }

    function me() {
        var t = 10,
            e = i("$rootScope"),
            n = null;
        this.digestTtl = function (e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (i, s, a, u) {
            function l() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function f(t) {
                if (v.$$phase) throw e("inprog", v.$$phase);
                v.$$phase = t
            }

            function h(t, e) {
                var n = a(t);
                return G(n, e), n
            }

            function p(t, e, n) {
                do {
                    t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]
                } while (t = t.$parent)
            }

            function m() {}
            l.prototype = {
                constructor: l,
                $new: function (t) {
                    return t ? (t = new l, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (t = function () {}, t.prototype = this, t = new t, t.$id = c()), t.this = t, t.$$listeners = {}, t.$$listenerCount = {}, t.$parent = this, t.$$watchers = t.$$nextSibling = t.$$childHead = t.$$childTail = null, t.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = t : this.$$childHead = this.$$childTail = t, t
                },
                $watch: function (t, e, i) {
                    var r = h(t, "watch"),
                        o = this.$$watchers,
                        s = {
                            fn: e,
                            last: m,
                            get: r,
                            exp: t,
                            eq: !!i
                        };
                    if (n = null, !S(e)) {
                        var a = h(e || d, "listener");
                        s.fn = function (t, e, n) {
                            a(n)
                        }
                    }
                    if ("string" == typeof t && r.constant) {
                        var u = s.fn;
                        s.fn = function (t, e, n) {
                            u.call(this, t, e, n), j(o, s)
                        }
                    }
                    return o || (o = this.$$watchers = []), o.unshift(s),
                        function () {
                            j(o, s), n = null
                        }
                },
                $watchCollection: function (t, e) {
                    var n, i, o, s = this,
                        u = 1 < e.length,
                        c = 0,
                        l = a(t),
                        f = [],
                        h = {},
                        p = !0,
                        d = 0;
                    return this.$watch(function () {
                        var t, e;
                        if ($(n = l(s)))
                            if (r(n))
                                for (i !== f && (i = f, d = i.length = 0, c++), t = n.length, d !== t && (c++, i.length = d = t), e = 0; e < t; e++) i[e] !== i[e] && n[e] !== n[e] || i[e] === n[e] || (c++, i[e] = n[e]);
                            else {
                                i !== h && (i = h = {}, d = 0, c++), t = 0;
                                for (e in n) n.hasOwnProperty(e) && (t++, i.hasOwnProperty(e) ? i[e] !== n[e] && (c++, i[e] = n[e]) : (d++, i[e] = n[e], c++));
                                if (d > t)
                                    for (e in c++, i) i.hasOwnProperty(e) && !n.hasOwnProperty(e) && (d--, delete i[e])
                            }
                        else i !== n && (i = n, c++);
                        return c
                    }, function () {
                        if (p ? (p = !1, e(n, n, s)) : e(n, o, s), u)
                            if ($(n))
                                if (r(n)) {
                                    o = Array(n.length);
                                    for (var t = 0; t < n.length; t++) o[t] = n[t]
                                } else
                                    for (t in o = {}, n) Ge.call(n, t) && (o[t] = n[t]);
                        else o = n
                    })
                },
                $digest: function () {
                    var i, r, o, a, u, c, l, h, p, d, g = this.$$asyncQueue,
                        y = this.$$postDigestQueue,
                        $ = t,
                        x = [];
                    f("$digest"), n = null;
                    do {
                        for (c = !1, l = this; g.length;) {
                            try {
                                (d = g.shift()).scope.$eval(d.expression)
                            } catch (t) {
                                v.$$phase = null, s(t)
                            }
                            n = null
                        }
                        t: do {
                            if (a = l.$$watchers)
                                for (u = a.length; u--;) try {
                                    if (i = a[u])
                                        if ((r = i.get(l)) === (o = i.last) || (i.eq ? _(r, o) : "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))) {
                                            if (i === n) {
                                                c = !1;
                                                break t
                                            }
                                        } else c = !0, n = i, i.last = i.eq ? O(r) : r, i.fn(r, o === m ? r : o, l), 5 > $ && (h = 4 - $, x[h] || (x[h] = []), p = S(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp, p += "; newVal: " + P(r) + "; oldVal: " + P(o), x[h].push(p))
                                } catch (t) {
                                    v.$$phase = null, s(t)
                                }
                            if (!(a = l.$$childHead || l !== this && l.$$nextSibling))
                                for (; l !== this && !(a = l.$$nextSibling);) l = l.$parent
                        } while (l = a);
                        if ((c || g.length) && !$--) throw v.$$phase = null, e("infdig", t, P(x))
                    } while (c || g.length);
                    for (v.$$phase = null; y.length;) try {
                        y.shift()()
                    } catch (t) {
                        s(t)
                    }
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v && (o(this.$$listenerCount, L(null, p, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function () {
                            return d
                        })
                    }
                },
                $eval: function (t, e) {
                    return a(t)(this, e)
                },
                $evalAsync: function (t) {
                    v.$$phase || v.$$asyncQueue.length || u.defer(function () {
                        v.$$asyncQueue.length && v.$digest()
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: t
                    })
                },
                $$postDigest: function (t) {
                    this.$$postDigestQueue.push(t)
                },
                $apply: function (t) {
                    try {
                        return f("$apply"), this.$eval(t)
                    } catch (t) {
                        s(t)
                    } finally {
                        v.$$phase = null;
                        try {
                            v.$digest()
                        } catch (t) {
                            throw s(t), t
                        }
                    }
                },
                $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var i = this;
                    do {
                        i.$$listenerCount[t] || (i.$$listenerCount[t] = 0), i.$$listenerCount[t]++
                    } while (i = i.$parent);
                    var r = this;
                    return function () {
                        n[D(n, e)] = null, p(r, 1, t)
                    }
                },
                $emit: function (t, e) {
                    var n, i, r, o = [],
                        a = this,
                        u = !1,
                        c = {
                            name: t,
                            targetScope: a,
                            stopPropagation: function () {
                                u = !0
                            },
                            preventDefault: function () {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = [c].concat(Ke.call(arguments, 1));
                    do {
                        for (n = a.$$listeners[t] || o, c.currentScope = a, i = 0, r = n.length; i < r; i++)
                            if (n[i]) try {
                                n[i].apply(null, l)
                            } catch (t) {
                                s(t)
                            } else n.splice(i, 1), i--, r--;
                        if (u) break;
                        a = a.$parent
                    } while (a);
                    return c
                },
                $broadcast: function (t, e) {
                    for (var n, i, r = this, o = this, a = {
                            name: t,
                            targetScope: this,
                            preventDefault: function () {
                                a.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, u = [a].concat(Ke.call(arguments, 1)); r = o;) {
                        for (a.currentScope = r, n = 0, i = (o = r.$$listeners[t] || []).length; n < i; n++)
                            if (o[n]) try {
                                o[n].apply(null, u)
                            } catch (t) {
                                s(t)
                            } else o.splice(n, 1), n--, i--;
                        if (!(o = r.$$listenerCount[t] && r.$$childHead || r !== this && r.$$nextSibling))
                            for (; r !== this && !(o = r.$$nextSibling);) r = r.$parent
                    }
                    return a
                }
            };
            var v = new l;
            return v
        }]
    }

    function ve() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
            e = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, i) {
                var r, o = i ? e : t;
                return Be && !(8 <= Be) || "" === (r = Ce(n).href) || r.match(o) ? n : "unsafe:" + r
            }
        }
    }

    function ge(t) {
        if ("self" === t) return t;
        if (x(t)) {
            if (-1 < t.indexOf("***")) throw Un("iwcard", t);
            return t = t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + t + "$")
        }
        if (T(t)) return RegExp("^" + t.source + "$");
        throw Un("imatcher")
    }

    function ye(t) {
        var e = [];
        return y(t) && o(t, function (t) {
            e.push(ge(t))
        }), e
    }

    function $e() {
        this.SCE_CONTEXTS = Vn;
        var t = ["self"],
            e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = ye(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = ye(t)), e
        }, this.$get = ["$injector", function (i) {
            function r(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }
            var o = function (t) {
                throw Un("unsafe")
            };
            i.has("$sanitize") && (o = i.get("$sanitize"));
            var s = r(),
                a = {};
            return a[Vn.HTML] = r(s), a[Vn.CSS] = r(s), a[Vn.URL] = r(s), a[Vn.JS] = r(s), a[Vn.RESOURCE_URL] = r(a[Vn.URL]), {
                trustAs: function (t, e) {
                    var i = a.hasOwnProperty(t) ? a[t] : null;
                    if (!i) throw Un("icontext", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" != typeof e) throw Un("itype", t);
                    return new i(e)
                },
                getTrusted: function (i, r) {
                    if (null === r || r === n || "" === r) return r;
                    if ((c = a.hasOwnProperty(i) ? a[i] : null) && r instanceof c) return r.$$unwrapTrustedValue();
                    if (i === Vn.RESOURCE_URL) {
                        var s, u, c = Ce(r.toString()),
                            l = !1;
                        for (s = 0, u = t.length; s < u; s++)
                            if ("self" === t[s] ? Se(c) : t[s].exec(c.href)) {
                                l = !0;
                                break
                            }
                        if (l)
                            for (s = 0, u = e.length; s < u; s++)
                                if ("self" === e[s] ? Se(c) : e[s].exec(c.href)) {
                                    l = !1;
                                    break
                                }
                        if (l) return r;
                        throw Un("insecurl", r.toString())
                    }
                    if (i === Vn.HTML) return o(r);
                    throw Un("unsafe")
                },
                valueOf: function (t) {
                    return t instanceof s ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function xe() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (e, n, i) {
            if (t && n.msie && 8 > n.msieDocumentMode) throw Un("iequirks");
            var r = O(Vn);
            r.isEnabled = function () {
                return t
            }, r.trustAs = i.trustAs, r.getTrusted = i.getTrusted, r.valueOf = i.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = m), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : function (e, n) {
                    return r.getTrusted(t, i(e, n))
                }
            };
            var s = r.parseAs,
                a = r.getTrusted,
                u = r.trustAs;
            return o(Vn, function (t, e) {
                var n = Xe(e);
                r[et("parse_as_" + n)] = function (e) {
                    return s(t, e)
                }, r[et("get_trusted_" + n)] = function (e) {
                    return a(t, e)
                }, r[et("trust_as_" + n)] = function (e) {
                    return u(t, e)
                }
            }), r
        }]
    }

    function be() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, i = {},
                r = h((/android (\d+)/.exec(Xe((t.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((t.navigator || {}).userAgent),
                s = e[0] || {},
                a = s.documentMode,
                u = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                c = s.body && s.body.style,
                l = !1,
                f = !1;
            if (c) {
                for (var p in c)
                    if (l = u.exec(p)) {
                        n = (n = l[0]).substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in c && "webkit"), l = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !r || l && f || (l = x(s.body.style.webkitTransition), f = x(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > r || o),
                hashchange: "onhashchange" in t && (!a || 7 < a),
                hasEvent: function (t) {
                    if ("input" == t && 9 == Be) return !1;
                    if (g(i[t])) {
                        var e = s.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                },
                csp: I(),
                vendorPrefix: n,
                transitions: l,
                animations: f,
                android: r,
                msie: Be,
                msieDocumentMode: a
            }
        }]
    }

    function we() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (t, e, n, i) {
            function r(r, s, a) {
                var u = n.defer(),
                    c = u.promise,
                    l = y(a) && !a;
                return s = e.defer(function () {
                    try {
                        u.resolve(r())
                    } catch (t) {
                        u.reject(t), i(t)
                    } finally {
                        delete o[c.$$timeoutId]
                    }
                    l || t.$apply()
                }, s), c.$$timeoutId = s, o[s] = u, c
            }
            var o = {};
            return r.cancel = function (t) {
                return !!(t && t.$$timeoutId in o) && (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
            }, r
        }]
    }

    function Ce(t, e) {
        var n = t;
        return Be && (Yn.setAttribute("href", n), n = Yn.href), Yn.setAttribute("href", n), {
            href: Yn.href,
            protocol: Yn.protocol ? Yn.protocol.replace(/:$/, "") : "",
            host: Yn.host,
            search: Yn.search ? Yn.search.replace(/^\?/, "") : "",
            hash: Yn.hash ? Yn.hash.replace(/^#/, "") : "",
            hostname: Yn.hostname,
            port: Yn.port,
            pathname: "/" === Yn.pathname.charAt(0) ? Yn.pathname : "/" + Yn.pathname
        }
    }

    function Se(t) {
        return (t = x(t) ? Ce(t) : t).protocol === Qn.protocol && t.host === Qn.host
    }

    function Te() {
        this.$get = v(t)
    }

    function Ee(t) {
        function e(i, r) {
            if ($(i)) {
                var s = {};
                return o(i, function (t, n) {
                    s[n] = e(n, t)
                }), s
            }
            return t.factory(i + n, r)
        }
        var n = "Filter";
        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + n)
            }
        }], e("currency", Ae), e("date", Ie), e("filter", ke), e("json", Le), e("limitTo", Me), e("lowercase", Zn), e("number", De), e("orderBy", Pe), e("uppercase", ti)
    }

    function ke() {
        return function (t, e, n) {
            if (!C(t)) return t;
            var i = typeof n,
                r = [];
            r.check = function (t) {
                for (var e = 0; e < r.length; e++)
                    if (!r[e](t)) return !1;
                return !0
            }, "function" !== i && (n = "boolean" === i && n ? function (t, e) {
                return nn.equals(t, e)
            } : function (t, e) {
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    for (var i in t)
                        if ("$" !== i.charAt(0) && Ge.call(t, i) && n(t[i], e[i])) return !0;
                    return !1
                }
                return e = ("" + e).toLowerCase(), -1 < ("" + t).toLowerCase().indexOf(e)
            });
            var o = function (t, e) {
                if ("string" == typeof e && "!" === e.charAt(0)) return !o(t, e.substr(1));
                switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "string":
                        return n(t, e);
                    case "object":
                        switch (typeof e) {
                            case "object":
                                return n(t, e);
                            default:
                                for (var i in t)
                                    if ("$" !== i.charAt(0) && o(t[i], e)) return !0
                        }
                        return !1;
                    case "array":
                        for (i = 0; i < t.length; i++)
                            if (o(t[i], e)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                    e = {
                        $: e
                    };
                case "object":
                    for (var s in e) ! function (t) {
                        void 0 !== e[t] && r.push(function (n) {
                            return o("$" == t ? n : n && n[t], e[t])
                        })
                    }(s);
                    break;
                case "function":
                    r.push(e);
                    break;
                default:
                    return t
            }
            for (i = [], s = 0; s < t.length; s++) {
                var a = t[s];
                r.check(a) && i.push(a)
            }
            return i
        }
    }

    function Ae(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return g(n) && (n = e.CURRENCY_SYM), je(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }

    function De(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return je(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function je(t, e, n, i, r) {
        if (null == t || !isFinite(t) || $(t)) return "";
        var o = 0 > t,
            s = (t = Math.abs(t)) + "",
            a = "",
            u = [],
            c = !1;
        if (-1 !== s.indexOf("e") && ((l = s.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == l[2] && l[3] > r + 1 ? s = "0" : (a = s, c = !0)), c) 0 < r && -1 < t && 1 > t && (a = t.toFixed(r));
        else {
            s = (s.split(Xn)[1] || "").length, g(r) && (r = Math.min(Math.max(e.minFrac, s), e.maxFrac)), s = Math.pow(10, r), s = (t = ("" + (t = Math.round(t * s) / s)).split(Xn))[0], t = t[1] || "";
            var l = 0,
                f = e.lgSize,
                h = e.gSize;
            if (s.length >= f + h)
                for (l = s.length - f, c = 0; c < l; c++) 0 == (l - c) % h && 0 !== c && (a += n), a += s.charAt(c);
            for (c = l; c < s.length; c++) 0 == (s.length - c) % f && 0 !== c && (a += n), a += s.charAt(c);
            for (; t.length < r;) t += "0";
            r && "0" !== r && (a += i + t.substr(0, r))
        }
        return u.push(o ? e.negPre : e.posPre), u.push(a), u.push(o ? e.negSuf : e.posSuf), u.join("")
    }

    function Oe(t, e, n) {
        var i = "";
        for (0 > t && (i = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function Ne(t, e, n, i) {
        return n = n || 0,
            function (r) {
                return r = r["get" + t](), (0 < n || r > -n) && (r += n), 0 === r && -12 == n && (r = 12), Oe(r, e, i)
            }
    }

    function _e(t, e) {
        return function (n, i) {
            var r = n["get" + t]();
            return i[Je(e ? "SHORT" + t : t)][r]
        }
    }

    function Ie(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var i = 0,
                    r = 0,
                    o = e[8] ? t.setUTCFullYear : t.setFullYear,
                    s = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (i = h(e[9] + e[10]), r = h(e[9] + e[11])), o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])), i = h(e[4] || 0) - i, r = h(e[5] || 0) - r, o = h(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), s.call(t, i, r, o, e)
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, i) {
            var r, s, a = "",
                u = [];
            if (i = i || "mediumDate", i = t.DATETIME_FORMATS[i] || i, x(n) && (n = Kn.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !w(n)) return n;
            for (; i;)(s = Jn.exec(i)) ? (u = u.concat(Ke.call(s, 1)), i = u.pop()) : (u.push(i), i = null);
            return o(u, function (e) {
                r = Gn[e], a += r ? r(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), a
        }
    }

    function Le() {
        return function (t) {
            return P(t, !0)
        }
    }

    function Me() {
        return function (t, e) {
            if (!C(t) && !x(t)) return t;
            if (e = h(e), x(t)) return e ? 0 <= e ? t.slice(0, e) : t.slice(e, t.length) : "";
            var n, i, r = [];
            for (e > t.length ? e = t.length : e < -t.length && (e = -t.length), 0 < e ? (n = 0, i = e) : (n = t.length + e, i = t.length); n < i; n++) r.push(t[n]);
            return r
        }
    }

    function Pe(t) {
        return function (e, n, i) {
            function r(t, e) {
                return R(e) ? function (e, n) {
                    return t(n, e)
                } : t
            }

            function o(t, e) {
                var n = typeof t,
                    i = typeof e;
                return n == i ? ("string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : t < e ? -1 : 1) : n < i ? -1 : 1
            }
            if (!C(e) || !n) return e;
            n = C(n) ? n : [n], n = A(n, function (e) {
                var n = !1,
                    i = e || m;
                if (x(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (n = "-" == e.charAt(0), e = e.substring(1)), (i = t(e)).constant)) {
                    var s = i();
                    return r(function (t, e) {
                        return o(t[s], e[s])
                    }, n)
                }
                return r(function (t, e) {
                    return o(i(t), i(e))
                }, n)
            });
            for (var s = [], a = 0; a < e.length; a++) s.push(e[a]);
            return s.sort(r(function (t, e) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i](t, e);
                    if (0 !== r) return r
                }
                return 0
            }, i))
        }
    }

    function qe(t) {
        return S(t) && (t = {
            link: t
        }), t.restrict = t.restrict || "AC", v(t)
    }

    function Re(t, e, n, i) {
        function r(e, n) {
            n = n ? "-" + Q(n, "-") : "", i.removeClass(t, (e ? pi : hi) + n), i.addClass(t, (e ? hi : pi) + n)
        }
        var s = this,
            a = t.parent().controller("form") || ii,
            u = 0,
            c = s.$error = {},
            l = [];
        s.$name = e.name || e.ngForm, s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, a.$addControl(s), t.addClass(di), r(!0), s.$addControl = function (t) {
            J(t.$name, "input"), l.push(t), t.$name && (s[t.$name] = t)
        }, s.$removeControl = function (t) {
            t.$name && s[t.$name] === t && delete s[t.$name], o(c, function (e, n) {
                s.$setValidity(n, !0, t)
            }), j(l, t)
        }, s.$setValidity = function (t, e, n) {
            var i = c[t];
            if (e) i && (j(i, n), i.length || (--u || (r(e), s.$valid = !0, s.$invalid = !1), c[t] = !1, r(!0, t), a.$setValidity(t, !0, s)));
            else {
                if (u || r(e), i) {
                    if (-1 != D(i, n)) return
                } else c[t] = i = [], u++, r(!1, t), a.$setValidity(t, !1, s);
                i.push(n), s.$valid = !1, s.$invalid = !0
            }
        }, s.$setDirty = function () {
            i.removeClass(t, di), i.addClass(t, mi), s.$dirty = !0, s.$pristine = !1, a.$setDirty()
        }, s.$setPristine = function () {
            i.removeClass(t, mi), i.addClass(t, di), s.$dirty = !1, s.$pristine = !0, o(l, function (t) {
                t.$setPristine()
            })
        }
    }

    function Fe(t, e, i, r) {
        return t.$setValidity(e, i), i ? r : n
    }

    function He(t, e, n) {
        var i = n.prop("validity");
        $(i) && t.$parsers.push(function (n) {
            if (t.$error[e] || !(i.badInput || i.customError || i.typeMismatch) || i.valueMissing) return n;
            t.$setValidity(e, !1)
        })
    }

    function ze(t, e, n, r, o, s) {
        var a = e.prop("validity");
        if (!o.android) {
            var u = !1;
            e.on("compositionstart", function (t) {
                u = !0
            }), e.on("compositionend", function () {
                u = !1, c()
            })
        }
        var c = function () {
            if (!u) {
                var i = e.val();
                R(n.ngTrim || "T") && (i = on(i)), (r.$viewValue !== i || a && "" === i && !a.valueMissing) && (t.$$phase ? r.$setViewValue(i) : t.$apply(function () {
                    r.$setViewValue(i)
                }))
            }
        };
        if (o.hasEvent("input")) e.on("input", c);
        else {
            var l, f = function () {
                l || (l = s.defer(function () {
                    c(), l = null
                }))
            };
            e.on("keydown", function (t) {
                91 === (t = t.keyCode) || 15 < t && 19 > t || 37 <= t && 40 >= t || f()
            }), o.hasEvent("paste") && e.on("paste cut", f)
        }
        e.on("change", c), r.$render = function () {
            e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        };
        var p = n.ngPattern;
        if (p && ((o = p.match(/^\/(.*)\/([gim]*)$/)) ? (p = RegExp(o[1], o[2]), o = function (t) {
                return Fe(r, "pattern", r.$isEmpty(t) || p.test(t), t)
            }) : o = function (n) {
                var o = t.$eval(p);
                if (!o || !o.test) throw i("ngPattern")("noregexp", p, o, F(e));
                return Fe(r, "pattern", r.$isEmpty(n) || o.test(n), n)
            }, r.$formatters.push(o), r.$parsers.push(o)), n.ngMinlength) {
            var d = h(n.ngMinlength);
            o = function (t) {
                return Fe(r, "minlength", r.$isEmpty(t) || t.length >= d, t)
            }, r.$parsers.push(o), r.$formatters.push(o)
        }
        if (n.ngMaxlength) {
            var m = h(n.ngMaxlength);
            o = function (t) {
                return Fe(r, "maxlength", r.$isEmpty(t) || t.length <= m, t)
            }, r.$parsers.push(o), r.$formatters.push(o)
        }
    }

    function We(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function i(t, e) {
                var n = [],
                    i = 0;
                t: for (; i < t.length; i++) {
                    for (var r = t[i], o = 0; o < e.length; o++)
                        if (r == e[o]) continue t;
                    n.push(r)
                }
                return n
            }

            function r(t) {
                if (!C(t)) {
                    if (x(t)) return t.split(" ");
                    if ($(t)) {
                        var e = [];
                        return o(t, function (t, n) {
                            t && e.push(n)
                        }), e
                    }
                }
                return t
            }
            return {
                restrict: "AC",
                link: function (s, a, u) {
                    function c(t, e) {
                        var n = a.data("$classCounts") || {},
                            i = [];
                        return o(t, function (t) {
                            (0 < e || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(0 < e) && i.push(t))
                        }), a.data("$classCounts", n), i.join(" ")
                    }

                    function l(t) {
                        if (!0 === e || s.$index % 2 === e) {
                            h = r(t || []);
                            if (f) {
                                if (!_(t, f)) {
                                    var o = r(f),
                                        l = i(h, o),
                                        h = c(h = i(o, h), -1);
                                    0 === (l = c(l, 1)).length ? n.removeClass(a, h) : 0 === h.length ? n.addClass(a, l) : n.setClass(a, l, h)
                                }
                            } else {
                                l = c(h, 1);
                                u.$addClass(l)
                            }
                        }
                        f = O(t)
                    }
                    var f;
                    s.$watch(u[t], l, !0), u.$observe("class", function (e) {
                        l(s.$eval(u[t]))
                    }), "ngClass" !== t && s.$watch("$index", function (n, i) {
                        var o = 1 & n;
                        if (o !== i & 1) {
                            var a = r(s.$eval(u[t]));
                            o === e ? (o = c(a, 1), u.$addClass(o)) : (o = c(a, -1), u.$removeClass(o))
                        }
                    })
                }
            }
        }]
    }
    var Be, Ue, Ve, Ye, Qe, Xe = function (t) {
            return x(t) ? t.toLowerCase() : t
        },
        Ge = Object.prototype.hasOwnProperty,
        Je = function (t) {
            return x(t) ? t.toUpperCase() : t
        },
        Ke = [].slice,
        Ze = [].push,
        tn = Object.prototype.toString,
        en = i("ng"),
        nn = t.angular || (t.angular = {}),
        rn = ["0", "0", "0"];
    Be = h((/msie (\d+)/.exec(Xe(navigator.userAgent)) || [])[1]), isNaN(Be) && (Be = h((/trident\/.*; rv:(\d+)/.exec(Xe(navigator.userAgent)) || [])[1])), d.$inject = [], m.$inject = [];
    var on = String.prototype.trim ? function (t) {
        return x(t) ? t.trim() : t
    } : function (t) {
        return x(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
    };
    Qe = 9 > Be ? function (t) {
        return t = t.nodeName ? t : t[0], t.scopeName && "HTML" != t.scopeName ? Je(t.scopeName + ":" + t.nodeName) : t.nodeName
    } : function (t) {
        return t.nodeName ? t.nodeName : t[0].nodeName
    };
    var sn = /[A-Z]/g,
        an = {
            full: "1.2.16",
            major: 1,
            minor: 2,
            dot: 16,
            codeName: "badger-enumeration"
        },
        un = it.cache = {},
        cn = it.expando = "ng-" + (new Date).getTime(),
        ln = 1,
        fn = t.document.addEventListener ? function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : function (t, e, n) {
            t.attachEvent("on" + e, n)
        },
        hn = t.document.removeEventListener ? function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            t.detachEvent("on" + e, n)
        };
    it._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var pn = /([\:\-\_]+(.))/g,
        dn = /^moz([A-Z])/,
        mn = i("jqLite"),
        vn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        gn = /<|&#?\w+;/,
        yn = /<([\w:]+)/,
        $n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        xn = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    xn.optgroup = xn.option, xn.tbody = xn.tfoot = xn.colgroup = xn.caption = xn.thead, xn.th = xn.td;
    var bn = it.prototype = {
            ready: function (n) {
                function i() {
                    r || (r = !0, n())
                }
                var r = !1;
                "complete" === e.readyState ? setTimeout(i) : (this.on("DOMContentLoaded", i), it(t).on("load", i))
            },
            toString: function () {
                var t = [];
                return o(this, function (e) {
                    t.push("" + e)
                }), "[" + t.join(", ") + "]"
            },
            eq: function (t) {
                return Ue(0 <= t ? this[t] : this[this.length + t])
            },
            length: 0,
            push: Ze,
            sort: [].sort,
            splice: [].splice
        },
        wn = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        wn[Xe(t)] = t
    });
    var Cn = {};
    o("input select option textarea button form details".split(" "), function (t) {
        Cn[Je(t)] = !0
    }), o({
        data: ct,
        inheritedData: mt,
        scope: function (t) {
            return Ue(t).data("$scope") || mt(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function (t) {
            return Ue(t).data("$isolateScope") || Ue(t).data("$isolateScopeNoTemplate")
        },
        controller: dt,
        injector: function (t) {
            return mt(t, "$injector")
        },
        removeAttr: function (t, e) {
            t.removeAttribute(e)
        },
        hasClass: lt,
        css: function (t, e, i) {
            if (e = et(e), !y(i)) {
                var r;
                return 8 >= Be && "" === (r = t.currentStyle && t.currentStyle[e]) && (r = "auto"), r = r || t.style[e], 8 >= Be && (r = "" === r ? n : r), r
            }
            t.style[e] = i
        },
        attr: function (t, e, i) {
            var r = Xe(e);
            if (wn[r]) {
                if (!y(i)) return t[e] || (t.attributes.getNamedItem(e) || d).specified ? r : n;
                i ? (t[e] = !0, t.setAttribute(e, r)) : (t[e] = !1, t.removeAttribute(r))
            } else if (y(i)) t.setAttribute(e, i);
            else if (t.getAttribute) return t = t.getAttribute(e, 2), null === t ? n : t
        },
        prop: function (t, e, n) {
            if (!y(n)) return t[e];
            t[e] = n
        },
        text: function () {
            function t(t, n) {
                var i = e[t.nodeType];
                if (g(n)) return i ? t[i] : "";
                t[i] = n
            }
            var e = [];
            return 9 > Be ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent", t.$dv = "", t
        }(),
        val: function (t, e) {
            if (g(e)) {
                if ("SELECT" === Qe(t) && t.multiple) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        },
        html: function (t, e) {
            if (g(e)) return t.innerHTML;
            for (var n = 0, i = t.childNodes; n < i.length; n++) ot(i[n]);
            t.innerHTML = e
        },
        empty: vt
    }, function (t, e) {
        it.prototype[e] = function (e, i) {
            var r, o;
            if (t !== vt && (2 == t.length && t !== lt && t !== dt ? e : i) === n) {
                if ($(e)) {
                    for (r = 0; r < this.length; r++)
                        if (t === ct) t(this[r], e);
                        else
                            for (o in e) t(this[r], o, e[o]);
                    return this
                }
                o = (r = t.$dv) === n ? Math.min(this.length, 1) : this.length;
                for (var s = 0; s < o; s++) {
                    var a = t(this[s], e, i);
                    r = r ? r + a : a
                }
                return r
            }
            for (r = 0; r < this.length; r++) t(this[r], e, i);
            return this
        }
    }), o({
        removeData: at,
        dealoc: ot,
        on: function t(n, i, r, s) {
            if (y(s)) throw mn("onargs");
            var a = ut(n, "events"),
                u = ut(n, "handle");
            a || ut(n, "events", a = {}), u || ut(n, "handle", u = yt(n, a)), o(i.split(" "), function (i) {
                var o = a[i];
                if (!o) {
                    if ("mouseenter" == i || "mouseleave" == i) {
                        var s = e.body.contains || e.body.compareDocumentPosition ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        };
                        a[i] = [], t(n, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[i], function (t) {
                            var e = t.relatedTarget;
                            e && (e === this || s(this, e)) || u(t, i)
                        })
                    } else fn(n, i, u), a[i] = [];
                    o = a[i]
                }
                o.push(r)
            })
        },
        off: st,
        one: function (t, e, n) {
            (t = Ue(t)).on(e, function i() {
                t.off(e, n), t.off(e, i)
            }), t.on(e, n)
        },
        replaceWith: function (t, e) {
            var n, i = t.parentNode;
            ot(t), o(new it(e), function (e) {
                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
            })
        },
        children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        },
        contents: function (t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function (t, e) {
            o(new it(e), function (e) {
                1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
            })
        },
        prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new it(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function (t, e) {
            e = Ue(e)[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        },
        remove: function (t) {
            ot(t);
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        after: function (t, e) {
            var n = t,
                i = t.parentNode;
            o(new it(e), function (t) {
                i.insertBefore(t, n.nextSibling), n = t
            })
        },
        addClass: ht,
        removeClass: ft,
        toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var i = n;
                g(i) && (i = !lt(t, e)), (i ? ht : ft)(t, e)
            })
        },
        parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        },
        next: function (t) {
            if (t.nextElementSibling) return t.nextElementSibling;
            for (t = t.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
            return t
        },
        find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: rt,
        triggerHandler: function (t, e, n) {
            e = (ut(t, "events") || {})[e], n = n || [];
            var i = [{
                preventDefault: d,
                stopPropagation: d
            }];
            o(e, function (e) {
                e.apply(t, i.concat(n))
            })
        }
    }, function (t, e) {
        it.prototype[e] = function (e, n, i) {
            for (var r, o = 0; o < this.length; o++) g(r) ? (r = t(this[o], e, n, i), y(r) && (r = Ue(r))) : pt(r, t(this[o], e, n, i));
            return y(r) ? r : this
        }, it.prototype.bind = it.prototype.on, it.prototype.unbind = it.prototype.off
    }), xt.prototype = {
        put: function (t, e) {
            this[$t(t)] = e
        },
        get: function (t) {
            return this[$t(t)]
        },
        remove: function (t) {
            var e = this[t = $t(t)];
            return delete this[t], e
        }
    };
    var Sn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Tn = /,/,
        En = /^\s*(_?)(\S+?)\1\s*$/,
        kn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        An = i("$injector"),
        Dn = i("$animate"),
        jn = ["$provide", function (t) {
            this.$$selectors = {}, this.register = function (e, n) {
                var i = e + "-animation";
                if (e && "." != e.charAt(0)) throw Dn("notcsel", e);
                this.$$selectors[e.substr(1)] = i, t.factory(i, n)
            }, this.classNameFilter = function (t) {
                return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
            }, this.$get = ["$timeout", "$$asyncCallback", function (t, e) {
                return {
                    enter: function (t, n, i, r) {
                        i ? i.after(t) : (n && n[0] || (n = i.parent()), n.append(t)), r && e(r)
                    },
                    leave: function (t, n) {
                        t.remove(), n && e(n)
                    },
                    move: function (t, e, n, i) {
                        this.enter(t, e, n, i)
                    },
                    addClass: function (t, n, i) {
                        n = x(n) ? n : C(n) ? n.join(" ") : "", o(t, function (t) {
                            ht(t, n)
                        }), i && e(i)
                    },
                    removeClass: function (t, n, i) {
                        n = x(n) ? n : C(n) ? n.join(" ") : "", o(t, function (t) {
                            ft(t, n)
                        }), i && e(i)
                    },
                    setClass: function (t, n, i, r) {
                        o(t, function (t) {
                            ht(t, n), ft(t, i)
                        }), r && e(r)
                    },
                    enabled: d
                }
            }]
        }],
        On = i("$compile");
    Dt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Nn = /^(x[\:\-_]|data[\:\-_])/i,
        _n = i("$interpolate"),
        In = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Ln = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Mn = i("$location");
    Zt.prototype = Kt.prototype = Jt.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: te("$$absUrl"),
        url: function (t, e) {
            if (g(t)) return this.$$url;
            var n = In.exec(t);
            return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", e), this
        },
        protocol: te("$$protocol"),
        host: te("$$host"),
        port: te("$$port"),
        path: ee("$$path", function (t) {
            return "/" == t.charAt(0) ? t : "/" + t
        }),
        search: function (t, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (x(t)) this.$$search = z(t);
                    else {
                        if (!$(t)) throw Mn("isrcharg");
                        this.$$search = t
                    }
                    break;
                default:
                    g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(), this
        },
        hash: ee("$$hash", m),
        replace: function () {
            return this.$$replace = !0, this
        }
    };
    var Pn, qn = i("$parse"),
        Rn = {},
        Fn = {
            null: function () {
                return null
            },
            true: function () {
                return !0
            },
            false: function () {
                return !1
            },
            undefined: d,
            "+": function (t, e, i, r) {
                return i = i(t, e), r = r(t, e), y(i) ? y(r) ? i + r : i : y(r) ? r : n
            },
            "-": function (t, e, n, i) {
                return n = n(t, e), i = i(t, e), (y(n) ? n : 0) - (y(i) ? i : 0)
            },
            "*": function (t, e, n, i) {
                return n(t, e) * i(t, e)
            },
            "/": function (t, e, n, i) {
                return n(t, e) / i(t, e)
            },
            "%": function (t, e, n, i) {
                return n(t, e) % i(t, e)
            },
            "^": function (t, e, n, i) {
                return n(t, e) ^ i(t, e)
            },
            "=": d,
            "===": function (t, e, n, i) {
                return n(t, e) === i(t, e)
            },
            "!==": function (t, e, n, i) {
                return n(t, e) !== i(t, e)
            },
            "==": function (t, e, n, i) {
                return n(t, e) == i(t, e)
            },
            "!=": function (t, e, n, i) {
                return n(t, e) != i(t, e)
            },
            "<": function (t, e, n, i) {
                return n(t, e) < i(t, e)
            },
            ">": function (t, e, n, i) {
                return n(t, e) > i(t, e)
            },
            "<=": function (t, e, n, i) {
                return n(t, e) <= i(t, e)
            },
            ">=": function (t, e, n, i) {
                return n(t, e) >= i(t, e)
            },
            "&&": function (t, e, n, i) {
                return n(t, e) && i(t, e)
            },
            "||": function (t, e, n, i) {
                return n(t, e) || i(t, e)
            },
            "&": function (t, e, n, i) {
                return n(t, e) & i(t, e)
            },
            "|": function (t, e, n, i) {
                return i(t, e)(t, e, n(t, e))
            },
            "!": function (t, e, n) {
                return !n(t, e)
            }
        },
        Hn = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        zn = function (t) {
            this.options = t
        };
    zn.prototype = {
        constructor: zn,
        lex: function (t) {
            this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = [];
            var e;
            for (t = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === t[0] && (e = this.tokens[this.tokens.length - 1]) && (e.json = -1 === e.text.indexOf("."));
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && t.unshift(this.ch), this.is("}]") && t.shift(), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var i = this.ch + this.peek(),
                        r = i + this.peek(2),
                        o = Fn[this.ch],
                        s = Fn[i],
                        a = Fn[r];
                    a ? (this.tokens.push({
                        index: this.index,
                        text: r,
                        fn: a
                    }), this.index += 3) : s ? (this.tokens.push({
                        index: this.index,
                        text: i,
                        fn: s
                    }), this.index += 2) : o ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: o,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function (t) {
            return -1 !== t.indexOf(this.ch)
        },
        was: function (t) {
            return -1 !== t.indexOf(this.lastCh)
        },
        peek: function (t) {
            return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t)
        },
        isNumber: function (t) {
            return "0" <= t && "9" >= t
        },
        isWhitespace: function (t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
        },
        isIdent: function (t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t
        },
        isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function (t, e, n) {
            throw n = n || this.index, e = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, qn("lexerr", t, e, this.text)
        },
        readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Xe(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) t += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            t *= 1, this.tokens.push({
                index: e,
                text: t,
                json: !0,
                fn: function () {
                    return t
                }
            })
        },
        readIdent: function () {
            for (var t, e, n, i, r = this, o = "", s = this.index; this.index < this.text.length && ("." === (i = this.text.charAt(this.index)) || this.isIdent(i) || this.isNumber(i));) "." === i && (t = this.index), o += i, this.index++;
            if (t)
                for (e = this.index; e < this.text.length;) {
                    if ("(" === (i = this.text.charAt(e))) {
                        n = o.substr(t - s + 1), o = o.substr(0, t - s), this.index = e;
                        break
                    }
                    if (!this.isWhitespace(i)) break;
                    e++
                }
            if (s = {
                    index: s,
                    text: o
                }, Fn.hasOwnProperty(o)) s.fn = Fn[o], s.json = Fn[o];
            else {
                var a = le(o, this.options, this.text);
                s.fn = f(function (t, e) {
                    return a(t, e)
                }, {
                    assign: function (t, e) {
                        return se(t, o, e, r.text, r.options)
                    }
                })
            }
            this.tokens.push(s), n && (this.tokens.push({
                index: t,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: t + 1,
                text: n,
                json: !1
            }))
        },
        readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", i = t, r = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index),
                    i = i + o;
                if (r) "u" === o ? ((o = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))) : n = (r = Hn[o]) ? n + r : n + o, r = !1;
                else if ("\\" === o) r = !0;
                else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: i,
                        string: n,
                        json: !0,
                        fn: function () {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var Wn = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    Wn.ZERO = f(function () {
        return 0
    }, {
        constant: !0
    }), Wn.prototype = {
        constructor: Wn,
        parse: function (t, e) {
            this.text = t, this.json = e, this.tokens = this.lexer.lex(t), e && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
                this.throwError("is not valid json", {
                    text: t,
                    index: 0
                })
            });
            var n = e ? this.primary() : this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), n.literal = !!n.literal, n.constant = !!n.constant, n
        },
        primary: function () {
            var t;
            if (this.expect("(")) t = this.filterChain(), this.consume(")");
            else if (this.expect("[")) t = this.arrayDeclaration();
            else if (this.expect("{")) t = this.object();
            else {
                var e = this.expect();
                (t = e.fn) || this.throwError("not a primary expression", e), e.json && (t.constant = !0, t.literal = !0)
            }
            for (var n; e = this.expect("(", "[", ".");) "(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        },
        throwError: function (t, e) {
            throw qn("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw qn("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (t, e, n, i) {
            if (0 < this.tokens.length) {
                var r = this.tokens[0],
                    o = r.text;
                if (o === t || o === e || o === n || o === i || !(t || e || n || i)) return r
            }
            return !1
        },
        expect: function (t, e, n, i) {
            return !!(t = this.peek(t, e, n, i)) && (this.json && !t.json && this.throwError("is not valid json", t), this.tokens.shift(), t)
        },
        consume: function (t) {
            this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
        },
        unaryFn: function (t, e) {
            return f(function (n, i) {
                return t(n, i, e)
            }, {
                constant: e.constant
            })
        },
        ternaryFn: function (t, e, n) {
            return f(function (i, r) {
                return t(i, r) ? e(i, r) : n(i, r)
            }, {
                constant: t.constant && e.constant && n.constant
            })
        },
        binaryFn: function (t, e, n) {
            return f(function (i, r) {
                return e(i, r, t, n)
            }, {
                constant: t.constant && n.constant
            })
        },
        statements: function () {
            for (var t = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function (e, n) {
                    for (var i, r = 0; r < t.length; r++) {
                        var o = t[r];
                        o && (i = o(e, n))
                    }
                    return i
                }
        },
        filterChain: function () {
            for (var t, e = this.expression();;) {
                if (!(t = this.expect("|"))) return e;
                e = this.binaryFn(e, t.fn, this.filter())
            }
        },
        filter: function () {
            for (var t = this.expect(), e = this.$filter(t.text), n = [];;) {
                if (!(t = this.expect(":"))) {
                    var i = function (t, i, r) {
                        r = [r];
                        for (var o = 0; o < n.length; o++) r.push(n[o](t, i));
                        return e.apply(t, r)
                    };
                    return function () {
                        return i
                    }
                }
                n.push(this.expression())
            }
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), function (e, i) {
                return n.assign(e, t(e, i), i)
            }) : n
        },
        ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") ? (t = this.ternary(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.ternary()) : void this.throwError("expected :", e)) : n
        },
        logicalOR: function () {
            for (var t, e = this.logicalAND();;) {
                if (!(t = this.expect("||"))) return e;
                e = this.binaryFn(e, t.fn, this.logicalAND())
            }
        },
        logicalAND: function () {
            var t, e = this.equality();
            return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())), e
        },
        equality: function () {
            var t, e = this.relational();
            return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())), e
        },
        relational: function () {
            var t, e = this.additive();
            return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())), e
        },
        additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.fn, this.multiplicative());
            return e
        },
        multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.fn, this.unary());
            return e
        },
        unary: function () {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(Wn.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
        },
        fieldAccess: function (t) {
            var e = this,
                n = this.expect().text,
                i = le(n, this.options, this.text);
            return f(function (e, n, r) {
                return i(r || t(e, n))
            }, {
                assign: function (i, r, o) {
                    return se(t(i, o), n, r, e.text, e.options)
                }
            })
        },
        objectIndex: function (t) {
            var e = this,
                i = this.expression();
            return this.consume("]"), f(function (r, o) {
                var s, a = t(r, o),
                    u = i(r, o);
                return a ? ((a = oe(a[u], e.text)) && a.then && e.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function (t) {
                    s.$$v = t
                })), a = a.$$v), a) : n
            }, {
                assign: function (n, r, o) {
                    var s = i(n, o);
                    return oe(t(n, o), e.text)[s] = r
                }
            })
        },
        functionCall: function (t, e) {
            var n = [];
            if (")" !== this.peekToken().text)
                do {
                    n.push(this.expression())
                } while (this.expect(","));
            this.consume(")");
            var i = this;
            return function (r, o) {
                for (var s = [], a = e ? e(r, o) : r, u = 0; u < n.length; u++) s.push(n[u](r, o));
                return u = t(r, o, a) || d, oe(a, i.text), oe(u, i.text), s = u.apply ? u.apply(a, s) : u(s[0], s[1], s[2], s[3], s[4]), oe(s, i.text)
            }
        },
        arrayDeclaration: function () {
            var t = [],
                e = !0;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    var n = this.expression();
                    t.push(n), n.constant || (e = !1)
                } while (this.expect(","));
            return this.consume("]"), f(function (e, n) {
                for (var i = [], r = 0; r < t.length; r++) i.push(t[r](e, n));
                return i
            }, {
                literal: !0,
                constant: e
            })
        },
        object: function () {
            var t = [],
                e = !0;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = (n = this.expect()).string || n.text;
                    this.consume(":");
                    var i = this.expression();
                    t.push({
                        key: n,
                        value: i
                    }), i.constant || (e = !1)
                } while (this.expect(","));
            return this.consume("}"), f(function (e, n) {
                for (var i = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    i[o.key] = o.value(e, n)
                }
                return i
            }, {
                literal: !0,
                constant: e
            })
        }
    };
    var Bn = {},
        Un = i("$sce"),
        Vn = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Yn = e.createElement("a"),
        Qn = Ce(t.location.href, !0);
    Ee.$inject = ["$provide"], Ae.$inject = ["$locale"], De.$inject = ["$locale"];
    var Xn = ".",
        Gn = {
            yyyy: Ne("FullYear", 4),
            yy: Ne("FullYear", 2, 0, !0),
            y: Ne("FullYear", 1),
            MMMM: _e("Month"),
            MMM: _e("Month", !0),
            MM: Ne("Month", 2, 1),
            M: Ne("Month", 1, 1),
            dd: Ne("Date", 2),
            d: Ne("Date", 1),
            HH: Ne("Hours", 2),
            H: Ne("Hours", 1),
            hh: Ne("Hours", 2, -12),
            h: Ne("Hours", 1, -12),
            mm: Ne("Minutes", 2),
            m: Ne("Minutes", 1),
            ss: Ne("Seconds", 2),
            s: Ne("Seconds", 1),
            sss: Ne("Milliseconds", 3),
            EEEE: _e("Day"),
            EEE: _e("Day", !0),
            a: function (t, e) {
                return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
            },
            Z: function (t) {
                return t = -1 * t.getTimezoneOffset(), t = (0 <= t ? "+" : "") + (Oe(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + Oe(Math.abs(t % 60), 2))
            }
        },
        Jn = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Kn = /^\-?\d+$/;
    Ie.$inject = ["$locale"];
    var Zn = v(Xe),
        ti = v(Je);
    Pe.$inject = ["$parse"];
    var ei = v({
            restrict: "E",
            compile: function (t, n) {
                if (8 >= Be && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function (t, e) {
                    var n = "[object SVGAnimatedString]" === tn.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }),
        ni = {};
    o(wn, function (t, e) {
        if ("multiple" != t) {
            var n = jt("ng-" + e);
            ni[n] = function () {
                return {
                    priority: 100,
                    link: function (t, i, r) {
                        t.$watch(r[n], function (t) {
                            r.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = jt("ng-" + t);
        ni[e] = function () {
            return {
                priority: 99,
                link: function (n, i, r) {
                    var o = t,
                        s = t;
                    "href" === t && "[object SVGAnimatedString]" === tn.call(i.prop("href")) && (s = "xlinkHref", r.$attr[s] = "xlink:href", o = null), r.$observe(e, function (t) {
                        t && (r.$set(s, t), Be && o && i.prop(o, r[s]))
                    })
                }
            }
        }
    });
    var ii = {
        $addControl: d,
        $removeControl: d,
        $setValidity: d,
        $setDirty: d,
        $setPristine: d
    };
    Re.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var ri = function (t) {
            return ["$timeout", function (e) {
                return {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    controller: Re,
                    compile: function () {
                        return {
                            pre: function (t, i, r, o) {
                                if (!r.action) {
                                    var s = function (t) {
                                        t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                    };
                                    fn(i[0], "submit", s), i.on("$destroy", function () {
                                        e(function () {
                                            hn(i[0], "submit", s)
                                        }, 0, !1)
                                    })
                                }
                                var a = i.parent().controller("form"),
                                    u = r.name || r.ngForm;
                                u && se(t, u, o, u), a && i.on("$destroy", function () {
                                    a.$removeControl(o), u && se(t, u, n, u), f(o, ii)
                                })
                            }
                        }
                    }
                }
            }]
        },
        oi = ri(),
        si = ri(!0),
        ai = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        ui = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
        ci = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        li = {
            text: ze,
            number: function (t, e, i, r, o, s) {
                ze(t, e, i, r, o, s), r.$parsers.push(function (t) {
                    var e = r.$isEmpty(t);
                    return e || ci.test(t) ? (r.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t)) : (r.$setValidity("number", !1), n)
                }), He(r, "number", e), r.$formatters.push(function (t) {
                    return r.$isEmpty(t) ? "" : "" + t
                }), i.min && (t = function (t) {
                    var e = parseFloat(i.min);
                    return Fe(r, "min", r.$isEmpty(t) || t >= e, t)
                }, r.$parsers.push(t), r.$formatters.push(t)), i.max && (t = function (t) {
                    var e = parseFloat(i.max);
                    return Fe(r, "max", r.$isEmpty(t) || t <= e, t)
                }, r.$parsers.push(t), r.$formatters.push(t)), r.$formatters.push(function (t) {
                    return Fe(r, "number", r.$isEmpty(t) || b(t), t)
                })
            },
            url: function (t, e, n, i, r, o) {
                ze(t, e, n, i, r, o), t = function (t) {
                    return Fe(i, "url", i.$isEmpty(t) || ai.test(t), t)
                }, i.$formatters.push(t), i.$parsers.push(t)
            },
            email: function (t, e, n, i, r, o) {
                ze(t, e, n, i, r, o), t = function (t) {
                    return Fe(i, "email", i.$isEmpty(t) || ui.test(t), t)
                }, i.$formatters.push(t), i.$parsers.push(t)
            },
            radio: function (t, e, n, i) {
                g(n.name) && e.attr("name", c()), e.on("click", function () {
                    e[0].checked && t.$apply(function () {
                        i.$setViewValue(n.value)
                    })
                }), i.$render = function () {
                    e[0].checked = n.value == i.$viewValue
                }, n.$observe("value", i.$render)
            },
            checkbox: function (t, e, n, i) {
                var r = n.ngTrueValue,
                    o = n.ngFalseValue;
                x(r) || (r = !0), x(o) || (o = !1), e.on("click", function () {
                    t.$apply(function () {
                        i.$setViewValue(e[0].checked)
                    })
                }), i.$render = function () {
                    e[0].checked = i.$viewValue
                }, i.$isEmpty = function (t) {
                    return t !== r
                }, i.$formatters.push(function (t) {
                    return t === r
                }), i.$parsers.push(function (t) {
                    return t ? r : o
                })
            },
            hidden: d,
            button: d,
            submit: d,
            reset: d,
            file: d
        },
        fi = ["$browser", "$sniffer", function (t, e) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function (n, i, r, o) {
                    o && (li[Xe(r.type)] || li.text)(n, i, r, o, e, t)
                }
            }
        }],
        hi = "ng-valid",
        pi = "ng-invalid",
        di = "ng-pristine",
        mi = "ng-dirty",
        vi = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (t, e, n, r, s, a) {
            function u(t, e) {
                e = e ? "-" + Q(e, "-") : "", a.removeClass(r, (t ? pi : hi) + e), a.addClass(r, (t ? hi : pi) + e)
            }
            this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
            var c = s(n.ngModel),
                l = c.assign;
            if (!l) throw i("ngModel")("nonassign", n.ngModel, F(r));
            this.$render = d, this.$isEmpty = function (t) {
                return g(t) || "" === t || null === t || t !== t
            };
            var f = r.inheritedData("$formController") || ii,
                h = 0,
                p = this.$error = {};
            r.addClass(di), u(!0), this.$setValidity = function (t, e) {
                p[t] !== !e && (e ? (p[t] && h--, h || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, h++), p[t] = !e, u(e, t), f.$setValidity(t, e, this))
            }, this.$setPristine = function () {
                this.$dirty = !1, this.$pristine = !0, a.removeClass(r, mi), a.addClass(r, di)
            }, this.$setViewValue = function (n) {
                this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(r, di), a.addClass(r, mi), f.$setDirty()), o(this.$parsers, function (t) {
                    n = t(n)
                }), this.$modelValue !== n && (this.$modelValue = n, l(t, n), o(this.$viewChangeListeners, function (t) {
                    try {
                        t()
                    } catch (t) {
                        e(t)
                    }
                }))
            };
            var m = this;
            t.$watch(function () {
                var e = c(t);
                if (m.$modelValue !== e) {
                    var n = m.$formatters,
                        i = n.length;
                    for (m.$modelValue = e; i--;) e = n[i](e);
                    m.$viewValue !== e && (m.$viewValue = e, m.$render())
                }
                return e
            })
        }],
        gi = function () {
            return {
                require: ["ngModel", "^?form"],
                controller: vi,
                link: function (t, e, n, i) {
                    var r = i[0],
                        o = i[1] || ii;
                    o.$addControl(r), t.$on("$destroy", function () {
                        o.$removeControl(r)
                    })
                }
            }
        },
        yi = v({
            require: "ngModel",
            link: function (t, e, n, i) {
                i.$viewChangeListeners.push(function () {
                    t.$eval(n.ngChange)
                })
            }
        }),
        $i = function () {
            return {
                require: "?ngModel",
                link: function (t, e, n, i) {
                    if (i) {
                        n.required = !0;
                        var r = function (t) {
                            if (!n.required || !i.$isEmpty(t)) return i.$setValidity("required", !0), t;
                            i.$setValidity("required", !1)
                        };
                        i.$formatters.push(r), i.$parsers.unshift(r), n.$observe("required", function () {
                            r(i.$viewValue)
                        })
                    }
                }
            }
        },
        xi = function () {
            return {
                require: "ngModel",
                link: function (t, e, i, r) {
                    var s = (t = /\/(.*)\//.exec(i.ngList)) && RegExp(t[1]) || i.ngList || ",";
                    r.$parsers.push(function (t) {
                        if (!g(t)) {
                            var e = [];
                            return t && o(t.split(s), function (t) {
                                t && e.push(on(t))
                            }), e
                        }
                    }), r.$formatters.push(function (t) {
                        return C(t) ? t.join(", ") : n
                    }), r.$isEmpty = function (t) {
                        return !t || !t.length
                    }
                }
            }
        },
        bi = /^(true|false|\d+)$/,
        wi = function () {
            return {
                priority: 100,
                compile: function (t, e) {
                    return bi.test(e.ngValue) ? function (t, e, n) {
                        n.$set("value", t.$eval(n.ngValue))
                    } : function (t, e, n) {
                        t.$watch(n.ngValue, function (t) {
                            n.$set("value", t)
                        })
                    }
                }
            }
        },
        Ci = qe(function (t, e, i) {
            e.addClass("ng-binding").data("$binding", i.ngBind), t.$watch(i.ngBind, function (t) {
                e.text(t == n ? "" : t)
            })
        }),
        Si = ["$interpolate", function (t) {
            return function (e, n, i) {
                e = t(n.attr(i.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", e), i.$observe("ngBindTemplate", function (t) {
                    n.text(t)
                })
            }
        }],
        Ti = ["$sce", "$parse", function (t, e) {
            return function (n, i, r) {
                i.addClass("ng-binding").data("$binding", r.ngBindHtml);
                var o = e(r.ngBindHtml);
                n.$watch(function () {
                    return (o(n) || "").toString()
                }, function (e) {
                    i.html(t.getTrustedHtml(o(n)) || "")
                })
            }
        }],
        Ei = We("", !0),
        ki = We("Odd", 0),
        Ai = We("Even", 1),
        Di = qe({
            compile: function (t, e) {
                e.$set("ngCloak", n), t.removeClass("ng-cloak")
            }
        }),
        ji = [function () {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Oi = {};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = jt("ng-" + t);
        Oi[e] = ["$parse", function (n) {
            return {
                compile: function (i, r) {
                    var o = n(r[e]);
                    return function (e, n, i) {
                        n.on(Xe(t), function (t) {
                            e.$apply(function () {
                                o(e, {
                                    $event: t
                                })
                            })
                        })
                    }
                }
            }
        }]
    });
    var Ni = ["$animate", function (t) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, i, r, o, s) {
                    var a, u, c;
                    n.$watch(r.ngIf, function (o) {
                        R(o) ? u || (u = n.$new(), s(u, function (n) {
                            n[n.length++] = e.createComment(" end ngIf: " + r.ngIf + " "), a = {
                                clone: n
                            }, t.enter(n, i.parent(), i)
                        })) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), a && (c = Z(a.clone), t.leave(c, function () {
                            c = null
                        }), a = null))
                    })
                }
            }
        }],
        _i = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (t, e, n, i, r) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: nn.noop,
                compile: function (o, s) {
                    var a = s.ngInclude || s.src,
                        u = s.onload || "",
                        c = s.autoscroll;
                    return function (o, s, l, f, h) {
                        var p, d, m, v = 0,
                            g = function () {
                                d && (d.remove(), d = null), p && (p.$destroy(), p = null), m && (i.leave(m, function () {
                                    d = null
                                }), d = m, m = null)
                            };
                        o.$watch(r.parseAsResourceUrl(a), function (r) {
                            var a = function () {
                                    !y(c) || c && !o.$eval(c) || n()
                                },
                                l = ++v;
                            r ? (t.get(r, {
                                cache: e
                            }).success(function (t) {
                                if (l === v) {
                                    var e = o.$new();
                                    f.template = t, t = h(e, function (t) {
                                        g(), i.enter(t, null, s, a)
                                    }), m = t, (p = e).$emit("$includeContentLoaded"), o.$eval(u)
                                }
                            }).error(function () {
                                l === v && g()
                            }), o.$emit("$includeContentRequested")) : (g(), f.template = null)
                        })
                    }
                }
            }
        }],
        Ii = ["$compile", function (t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (e, n, i, r) {
                    n.html(r.template), t(n.contents())(e)
                }
            }
        }],
        Li = qe({
            priority: 450,
            compile: function () {
                return {
                    pre: function (t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        Mi = qe({
            terminal: !0,
            priority: 1e3
        }),
        Pi = ["$locale", "$interpolate", function (t, e) {
            var n = /{}/g;
            return {
                restrict: "EA",
                link: function (i, r, s) {
                    var a = s.count,
                        u = s.$attr.when && r.attr(s.$attr.when),
                        c = s.offset || 0,
                        l = i.$eval(u) || {},
                        f = {},
                        h = e.startSymbol(),
                        p = e.endSymbol(),
                        d = /^when(Minus)?(.+)$/;
                    o(s, function (t, e) {
                        d.test(e) && (l[Xe(e.replace("when", "").replace("Minus", "-"))] = r.attr(s.$attr[e]))
                    }), o(l, function (t, i) {
                        f[i] = e(t.replace(n, h + a + "-" + c + p))
                    }), i.$watch(function () {
                        var e = parseFloat(i.$eval(a));
                        return isNaN(e) ? "" : (e in l || (e = t.pluralCat(e - c)), f[e](i, r, !0))
                    }, function (t) {
                        r.text(t)
                    })
                }
            }
        }],
        qi = ["$parse", "$animate", function (t, n) {
            var s = i("ngRepeat");
            return {
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                link: function (i, a, u, c, l) {
                    var f, h, p, d, m, v, g = u.ngRepeat,
                        y = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                        $ = {
                            $id: $t
                        };
                    if (!y) throw s("iexp", g);
                    if (u = y[1], c = y[2], (y = y[3]) ? (f = t(y), h = function (t, e, n) {
                            return v && ($[v] = t), $[m] = e, $.$index = n, f(i, $)
                        }) : (p = function (t, e) {
                            return $t(e)
                        }, d = function (t) {
                            return t
                        }), !(y = u.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw s("iidexp", u);
                    m = y[3] || y[1], v = y[2];
                    var x = {};
                    i.$watchCollection(c, function (t) {
                        var u, c, f, y, $, b, w, C, S, T = a[0],
                            E = {},
                            k = [];
                        if (r(t)) C = t, f = h || p;
                        else {
                            f = h || d, C = [];
                            for (b in t) t.hasOwnProperty(b) && "$" != b.charAt(0) && C.push(b);
                            C.sort()
                        }
                        for (y = C.length, c = k.length = C.length, u = 0; u < c; u++)
                            if (b = t === C ? u : C[u], w = t[b], w = f(b, w, u), J(w, "`track by` id"), x.hasOwnProperty(w)) S = x[w], delete x[w], E[w] = S, k[u] = S;
                            else {
                                if (E.hasOwnProperty(w)) throw o(k, function (t) {
                                    t && t.scope && (x[t.id] = t)
                                }), s("dupes", g, w);
                                k[u] = {
                                    id: w
                                }, E[w] = !1
                            }
                        for (b in x) x.hasOwnProperty(b) && (S = x[b], u = Z(S.clone), n.leave(u), o(u, function (t) {
                            t.$$NG_REMOVED = !0
                        }), S.scope.$destroy());
                        for (u = 0, c = C.length; u < c; u++) {
                            if (b = t === C ? u : C[u], w = t[b], S = k[u], k[u - 1] && (T = k[u - 1].clone[k[u - 1].clone.length - 1]), S.scope) {
                                $ = S.scope, f = T;
                                do {
                                    f = f.nextSibling
                                } while (f && f.$$NG_REMOVED);
                                S.clone[0] != f && n.move(Z(S.clone), null, Ue(T)), T = S.clone[S.clone.length - 1]
                            } else $ = i.$new();
                            $[m] = w, v && ($[v] = b), $.$index = u, $.$first = 0 === u, $.$last = u === y - 1, $.$middle = !($.$first || $.$last), $.$odd = !($.$even = 0 == (1 & u)), S.scope || l($, function (t) {
                                t[t.length++] = e.createComment(" end ngRepeat: " + g + " "), n.enter(t, null, Ue(T)), T = t, S.scope = $, S.clone = t, E[S.id] = S
                            })
                        }
                        x = E
                    })
                }
            }
        }],
        Ri = ["$animate", function (t) {
            return function (e, n, i) {
                e.$watch(i.ngShow, function (e) {
                    t[R(e) ? "removeClass" : "addClass"](n, "ng-hide")
                })
            }
        }],
        Fi = ["$animate", function (t) {
            return function (e, n, i) {
                e.$watch(i.ngHide, function (e) {
                    t[R(e) ? "addClass" : "removeClass"](n, "ng-hide")
                })
            }
        }],
        Hi = qe(function (t, e, n) {
            t.$watch(n.ngStyle, function (t, n) {
                n && t !== n && o(n, function (t, n) {
                    e.css(n, "")
                }), t && e.css(t)
            }, !0)
        }),
        zi = ["$animate", function (t) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (e, n, i, r) {
                    var s, a, u, c = [];
                    e.$watch(i.ngSwitch || i.on, function (n) {
                        var l, f = c.length;
                        if (0 < f) {
                            if (u) {
                                for (l = 0; l < f; l++) u[l].remove();
                                u = null
                            }
                            for (u = [], l = 0; l < f; l++) {
                                var h = a[l];
                                c[l].$destroy(), u[l] = h, t.leave(h, function () {
                                    u.splice(l, 1), 0 === u.length && (u = null)
                                })
                            }
                        }
                        a = [], c = [], (s = r.cases["!" + n] || r.cases["?"]) && (e.$eval(i.change), o(s, function (n) {
                            var i = e.$new();
                            c.push(i), n.transclude(i, function (e) {
                                var i = n.element;
                                a.push(e), t.enter(e, i.parent(), i)
                            })
                        }))
                    })
                }
            }
        }],
        Wi = qe({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (t, e, n, i, r) {
                i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        Bi = qe({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (t, e, n, i, r) {
                i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        Ui = qe({
            link: function (t, e, n, r, o) {
                if (!o) throw i("ngTransclude")("orphan", F(e));
                o(function (t) {
                    e.empty(), e.append(t)
                })
            }
        }),
        Vi = ["$templateCache", function (t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (e, n) {
                    "text/ng-template" == n.type && t.put(n.id, e[0].text)
                }
            }
        }],
        Yi = i("ngOptions"),
        Qi = v({
            terminal: !0
        }),
        Xi = ["$compile", "$parse", function (t, i) {
            var r = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                a = {
                    $setViewValue: d
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                    var i, r = this,
                        o = {},
                        s = a;
                    r.databound = n.ngModel, r.init = function (t, e, n) {
                        s = t, i = n
                    }, r.addOption = function (e) {
                        J(e, '"option value"'), o[e] = !0, s.$viewValue == e && (t.val(e), i.parent() && i.remove())
                    }, r.removeOption = function (t) {
                        this.hasOption(t) && (delete o[t], s.$viewValue == t && this.renderUnknownOption(t))
                    }, r.renderUnknownOption = function (e) {
                        e = "? " + $t(e) + " ?", i.val(e), t.prepend(i), t.val(e), i.prop("selected", !0)
                    }, r.hasOption = function (t) {
                        return o.hasOwnProperty(t)
                    }, e.$on("$destroy", function () {
                        r.renderUnknownOption = d
                    })
                }],
                link: function (a, u, c, l) {
                    if (l[1]) {
                        var f = l[0];
                        l = l[1];
                        var h, p = c.multiple,
                            d = c.ngOptions,
                            m = !1,
                            v = Ue(e.createElement("option")),
                            $ = Ue(e.createElement("optgroup")),
                            x = v.clone();
                        c = 0;
                        for (var b = u.children(), w = b.length; c < w; c++)
                            if ("" === b[c].value) {
                                h = m = b.eq(c);
                                break
                            }
                        f.init(l, m, x), p && (l.$isEmpty = function (t) {
                            return !t || 0 === t.length
                        }), d ? function (e, o, a) {
                            function u() {
                                var t, n, i, r, u, c = {
                                        "": []
                                    },
                                    d = [""];
                                r = a.$modelValue, u = b(e) || [];
                                var T, E, k, A = h ? s(u) : u;
                                E = {}, i = !1;
                                var D, j;
                                if (p)
                                    if (w && C(r))
                                        for (i = new xt([]), k = 0; k < r.length; k++) E[f] = r[k], i.put(w(e, E), r[k]);
                                    else i = new xt(r);
                                for (k = 0; T = A.length, k < T; k++) {
                                    if (n = k, h) {
                                        if ("$" === (n = A[k]).charAt(0)) continue;
                                        E[h] = n
                                    }
                                    E[f] = u[n], (n = c[t = g(e, E) || ""]) || (n = c[t] = [], d.push(t)), p ? t = y(i.remove(w ? w(e, E) : x(e, E))) : (w ? (t = {}, t[f] = r, t = w(e, t) === w(e, E)) : t = r === x(e, E), i = i || t), D = y(D = l(e, E)) ? D : "", n.push({
                                        id: w ? w(e, E) : h ? A[k] : k,
                                        label: D,
                                        selected: t
                                    })
                                }
                                for (p || (m || null === r ? c[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !i
                                    }) : i || c[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), E = 0, A = d.length; E < A; E++) {
                                    for (n = c[t = d[E]], S.length <= E ? (r = {
                                            element: $.clone().attr("label", t),
                                            label: n.label
                                        }, u = [r], S.push(u), o.append(r.element)) : (u = S[E], (r = u[0]).label != t && r.element.attr("label", r.label = t)), D = null, k = 0, T = n.length; k < T; k++) i = n[k], (t = u[k + 1]) ? (D = t.element, t.label !== i.label && D.text(t.label = i.label), t.id !== i.id && D.val(t.id = i.id), t.selected !== i.selected && D.prop("selected", t.selected = i.selected)) : ("" === i.id && m ? j = m : (j = v.clone()).val(i.id).attr("selected", i.selected).text(i.label), u.push({
                                        element: j,
                                        label: i.label,
                                        id: i.id,
                                        selected: i.selected
                                    }), D ? D.after(j) : r.element.append(j), D = j);
                                    for (k++; u.length > k;) u.pop().element.remove()
                                }
                                for (; S.length > E;) S.pop()[0].element.remove()
                            }
                            var c;
                            if (!(c = d.match(r))) throw Yi("iexp", d, F(o));
                            var l = i(c[2] || c[1]),
                                f = c[4] || c[6],
                                h = c[5],
                                g = i(c[3] || ""),
                                x = i(c[2] ? c[1] : f),
                                b = i(c[7]),
                                w = c[8] ? i(c[8]) : null,
                                S = [
                                    [{
                                        element: o,
                                        label: ""
                                    }]
                                ];
                            m && (t(m)(e), m.removeClass("ng-scope"), m.remove()), o.empty(), o.on("change", function () {
                                e.$apply(function () {
                                    var t, i, r, s, u, c, l, d, m = b(e) || [],
                                        v = {};
                                    if (p) {
                                        for (r = [], u = 0, l = S.length; u < l; u++)
                                            for (t = S[u], s = 1, c = t.length; s < c; s++)
                                                if ((i = t[s].element)[0].selected) {
                                                    if (i = i.val(), h && (v[h] = i), w)
                                                        for (d = 0; d < m.length && (v[f] = m[d], w(e, v) != i); d++);
                                                    else v[f] = m[i];
                                                    r.push(x(e, v))
                                                }
                                    } else {
                                        if ("?" == (i = o.val())) r = n;
                                        else if ("" === i) r = null;
                                        else if (w) {
                                            for (d = 0; d < m.length; d++)
                                                if (v[f] = m[d], w(e, v) == i) {
                                                    r = x(e, v);
                                                    break
                                                }
                                        } else v[f] = m[i], h && (v[h] = i), r = x(e, v);
                                        1 < S[0].length && S[0][1].id !== i && (S[0][1].selected = !1)
                                    }
                                    a.$setViewValue(r)
                                })
                            }), a.$render = u, e.$watch(u)
                        }(a, u, l) : p ? function (t, e, n) {
                            var i;
                            n.$render = function () {
                                var t = new xt(n.$viewValue);
                                o(e.find("option"), function (e) {
                                    e.selected = y(t.get(e.value))
                                })
                            }, t.$watch(function () {
                                _(i, n.$viewValue) || (i = O(n.$viewValue), n.$render())
                            }), e.on("change", function () {
                                t.$apply(function () {
                                    var t = [];
                                    o(e.find("option"), function (e) {
                                        e.selected && t.push(e.value)
                                    }), n.$setViewValue(t)
                                })
                            })
                        }(a, u, l) : function (t, e, n, i) {
                            n.$render = function () {
                                var t = n.$viewValue;
                                i.hasOption(t) ? (x.parent() && x.remove(), e.val(t), "" === t && h.prop("selected", !0)) : g(t) && h ? e.val("") : i.renderUnknownOption(t)
                            }, e.on("change", function () {
                                t.$apply(function () {
                                    x.parent() && x.remove(), n.$setViewValue(e.val())
                                })
                            })
                        }(a, u, l, f)
                    }
                }
            }
        }],
        Gi = ["$interpolate", function (t) {
            var e = {
                addOption: d,
                removeOption: d
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function (n, i) {
                    if (g(i.value)) {
                        var r = t(n.text(), !0);
                        r || i.$set("value", n.text())
                    }
                    return function (t, n, i) {
                        var o = n.parent(),
                            s = o.data("$selectController") || o.parent().data("$selectController");
                        s && s.databound ? n.prop("selected", !1) : s = e, r ? t.$watch(r, function (t, e) {
                            i.$set("value", t), t !== e && s.removeOption(e), s.addOption(t)
                        }) : s.addOption(i.value), n.on("$destroy", function () {
                            s.removeOption(i.value)
                        })
                    }
                }
            }
        }],
        Ji = v({
            restrict: "E",
            terminal: !0
        });
    t.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Ve = t.jQuery) ? (Ue = Ve, f(Ve.fn, {
        scope: bn.scope,
        isolateScope: bn.isolateScope,
        controller: bn.controller,
        injector: bn.injector,
        inheritedData: bn.inheritedData
    }), nt("remove", !0, !0, !1), nt("empty", !1, !1, !1), nt("html", !1, !1, !0)) : Ue = it, nn.element = Ue, function (e) {
        f(e, {
            bootstrap: Y,
            copy: O,
            extend: f,
            equals: _,
            element: Ue,
            forEach: o,
            injector: wt,
            noop: d,
            bind: L,
            toJson: P,
            fromJson: q,
            identity: m,
            isUndefined: g,
            isDefined: y,
            isString: x,
            isFunction: S,
            isObject: $,
            isNumber: b,
            isElement: k,
            isArray: C,
            version: an,
            isDate: w,
            lowercase: Xe,
            uppercase: Je,
            callbacks: {
                counter: 0
            },
            $$minErr: i,
            $$csp: I
        }), Ye = tt(t);
        try {
            Ye("ngLocale")
        } catch (t) {
            Ye("ngLocale", []).provider("$locale", Bt)
        }
        Ye("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({
                $$sanitizeUri: ve
            }), t.provider("$compile", Dt).directive({
                a: ei,
                input: fi,
                textarea: fi,
                form: oi,
                script: Vi,
                select: Xi,
                style: Ji,
                option: Gi,
                ngBind: Ci,
                ngBindHtml: Ti,
                ngBindTemplate: Si,
                ngClass: Ei,
                ngClassEven: Ai,
                ngClassOdd: ki,
                ngCloak: Di,
                ngController: ji,
                ngForm: si,
                ngHide: Fi,
                ngIf: Ni,
                ngInclude: _i,
                ngInit: Li,
                ngNonBindable: Mi,
                ngPluralize: Pi,
                ngRepeat: qi,
                ngShow: Ri,
                ngStyle: Hi,
                ngSwitch: zi,
                ngSwitchWhen: Wi,
                ngSwitchDefault: Bi,
                ngOptions: Qi,
                ngTransclude: Ui,
                ngModel: gi,
                ngList: xi,
                ngChange: yi,
                required: $i,
                ngRequired: $i,
                ngValue: wi
            }).directive({
                ngInclude: Ii
            }).directive(ni).directive(Oi), t.provider({
                $anchorScroll: Ct,
                $animate: jn,
                $browser: Et,
                $cacheFactory: kt,
                $controller: Nt,
                $document: _t,
                $exceptionHandler: It,
                $filter: Ee,
                $interpolate: zt,
                $interval: Wt,
                $http: qt,
                $httpBackend: Ft,
                $location: ne,
                $log: ie,
                $parse: fe,
                $rootScope: me,
                $q: he,
                $sce: xe,
                $sceDelegate: $e,
                $sniffer: be,
                $templateCache: At,
                $timeout: we,
                $window: Te,
                $$rAF: de,
                $$asyncCallback: St
            })
        }])
    }(nn), Ue(e).ready(function () {
        V(e, Y)
    }))
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'),
    function (t, e, n) {
        "use strict";

        function i(t, n, i) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (r, o, s, a, u) {
                    function c() {
                        p && (p.remove(), p = null), f && (f.$destroy(), f = null), h && (i.leave(h, function () {
                            p = null
                        }), p = h, h = null)
                    }

                    function l() {
                        var s = t.current && t.current.locals,
                            a = s && s.$template;
                        if (e.isDefined(a)) {
                            var l = r.$new(),
                                p = t.current,
                                v = u(l, function (t) {
                                    i.enter(t, null, h || o, function () {
                                        !e.isDefined(d) || d && !r.$eval(d) || n()
                                    }), c()
                                });
                            h = v, (f = p.scope = l).$emit("$viewContentLoaded"), f.$eval(m)
                        } else c()
                    }
                    var f, h, p, d = s.autoscroll,
                        m = s.onload || "";
                    r.$on("$routeChangeSuccess", l), l()
                }
            }
        }

        function r(t, e, n) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function (i, r) {
                    var o = n.current,
                        s = o.locals;
                    r.html(s.$template);
                    var a = t(r.contents());
                    if (o.controller) {
                        s.$scope = i;
                        var u = e(o.controller, s);
                        o.controllerAs && (i[o.controllerAs] = u), r.data("$ngControllerController", u), r.children().data("$ngControllerController", u)
                    }
                    a(i)
                }
            }
        }
        var o = e.module("ngRoute", ["ng"]).provider("$route", function () {
            function t(t, n) {
                return e.extend(new(e.extend(function () {}, {
                    prototype: t
                })), n)
            }

            function n(t, e) {
                var n = e.caseInsensitiveMatch,
                    i = {
                        originalPath: t,
                        regexp: t
                    },
                    r = i.keys = [];
                return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (t, e, n, i) {
                    var o = "?" === i ? i : null,
                        s = "*" === i ? i : null;
                    return r.push({
                        name: n,
                        optional: !!o
                    }), e = e || "", (o ? "" : e) + "(?:" + (o ? e : "") + (s && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
                }).replace(/([\/$\*])/g, "\\$1"), i.regexp = new RegExp("^" + t + "$", n ? "i" : ""), i
            }
            var i = {};
            this.when = function (t, r) {
                if (i[t] = e.extend({
                        reloadOnSearch: !0
                    }, r, t && n(t, r)), t) {
                    var o = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
                    i[o] = e.extend({
                        redirectTo: t
                    }, n(o, r))
                }
                return this
            }, this.otherwise = function (t) {
                return this.when(null, t), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (n, r, o, s, a, u, c, l) {
                function f(t, e) {
                    var n = e.keys,
                        i = {};
                    if (!e.regexp) return null;
                    var r = e.regexp.exec(t);
                    if (!r) return null;
                    for (var o = 1, s = r.length; o < s; ++o) {
                        var a = n[o - 1],
                            u = "string" == typeof r[o] ? decodeURIComponent(r[o]) : r[o];
                        a && u && (i[a.name] = u)
                    }
                    return i
                }

                function h() {
                    var t = p(),
                        i = v.current;
                    t && i && t.$$route === i.$$route && e.equals(t.pathParams, i.pathParams) && !t.reloadOnSearch && !m ? (i.params = t.params, e.copy(i.params, o), n.$broadcast("$routeUpdate", i)) : (t || i) && (m = !1, n.$broadcast("$routeChangeStart", t, i), v.current = t, t && t.redirectTo && (e.isString(t.redirectTo) ? r.path(d(t.redirectTo, t.params)).search(t.params).replace() : r.url(t.redirectTo(t.pathParams, r.path(), r.search())).replace()), s.when(t).then(function () {
                        if (t) {
                            var n, i, r = e.extend({}, t.resolve);
                            return e.forEach(r, function (t, n) {
                                r[n] = e.isString(t) ? a.get(t) : a.invoke(t)
                            }), e.isDefined(n = t.template) ? e.isFunction(n) && (n = n(t.params)) : e.isDefined(i = t.templateUrl) && (e.isFunction(i) && (i = i(t.params)), i = l.getTrustedResourceUrl(i), e.isDefined(i) && (t.loadedTemplateUrl = i, n = u.get(i, {
                                cache: c
                            }).then(function (t) {
                                return t.data
                            }))), e.isDefined(n) && (r.$template = n), s.all(r)
                        }
                    }).then(function (r) {
                        t == v.current && (t && (t.locals = r, e.copy(t.params, o)), n.$broadcast("$routeChangeSuccess", t, i))
                    }, function (e) {
                        t == v.current && n.$broadcast("$routeChangeError", t, i, e)
                    }))
                }

                function p() {
                    var n, o;
                    return e.forEach(i, function (i, s) {
                        !o && (n = f(r.path(), i)) && ((o = t(i, {
                            params: e.extend({}, r.search(), n),
                            pathParams: n
                        })).$$route = i)
                    }), o || i[null] && t(i[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function d(t, n) {
                    var i = [];
                    return e.forEach((t || "").split(":"), function (t, e) {
                        if (0 === e) i.push(t);
                        else {
                            var r = t.match(/(\w+)(.*)/),
                                o = r[1];
                            i.push(n[o]), i.push(r[2] || ""), delete n[o]
                        }
                    }), i.join("")
                }
                var m = !1,
                    v = {
                        routes: i,
                        reload: function () {
                            m = !0, n.$evalAsync(h)
                        }
                    };
                return n.$on("$locationChangeSuccess", h), v
            }]
        });
        o.provider("$routeParams", function () {
            this.$get = function () {
                return {}
            }
        }), o.directive("ngView", i), o.directive("ngView", r), i.$inject = ["$route", "$anchorScroll", "$animate"], r.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular),
    function (t, e, n) {
        "use strict";
        e.module("ngAnimate", ["ng"]).factory("$$animateReflow", ["$$rAF", "$document", function (t, e) {
            return function (e) {
                return t(function () {
                    e()
                })
            }
        }]).config(["$provide", "$animateProvider", function (i, r) {
            function o(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.nodeType == l) return n
                }
            }

            function s(t) {
                return e.element(o(t))
            }
            var a = e.noop,
                u = e.forEach,
                c = r.$$selectors,
                l = 1,
                f = "$$ngAnimateState",
                h = "ng-animate",
                p = {
                    running: !0
                };
            i.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (t, n, i, l, d, m, v) {
                function g(t) {
                    if (t) {
                        var e = [],
                            r = {};
                        t = t.substr(1).split("."), (i.transitions || i.animations) && e.push(n.get(c[""]));
                        for (var o = 0; o < t.length; o++) {
                            var s = t[o],
                                a = c[s];
                            a && !r[s] && (e.push(n.get(a)), r[s] = !0)
                        }
                        return e
                    }
                }

                function y(t, n, i) {
                    function r(t, e) {
                        var n = t[e],
                            i = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                        if (n || i) return "leave" == e && (i = n, n = null), $.push({
                            event: e,
                            fn: n
                        }), m.push({
                            event: e,
                            fn: i
                        }), !0
                    }

                    function o(e, n, r) {
                        var o = [];
                        u(e, function (t) {
                            t.fn && o.push(t)
                        });
                        var s = 0;
                        u(o, function (e, u) {
                            var f = function () {
                                t: {
                                    if (n) {
                                        if ((n[u] || a)(), ++s < o.length) break t;
                                        n = null
                                    }
                                    r()
                                }
                            };
                            switch (e.event) {
                                case "setClass":
                                    n.push(e.fn(t, c, l, f));
                                    break;
                                case "addClass":
                                    n.push(e.fn(t, c || i, f));
                                    break;
                                case "removeClass":
                                    n.push(e.fn(t, l || i, f));
                                    break;
                                default:
                                    n.push(e.fn(t, f))
                            }
                        }), n && 0 === n.length && r()
                    }
                    var s = t[0];
                    if (s) {
                        var c, l, f = "setClass" == n,
                            h = f || "addClass" == n || "removeClass" == n;
                        e.isArray(i) && (c = i[0], l = i[1], i = c + " " + l);
                        x = t.attr("class") + " " + i;
                        if (T(x)) {
                            var p = a,
                                d = [],
                                m = [],
                                v = a,
                                y = [],
                                $ = [],
                                x = (" " + x).replace(/\s+/g, ".");
                            return u(g(x), function (t) {
                                !r(t, n) && f && (r(t, "addClass"), r(t, "removeClass"))
                            }), {
                                node: s,
                                event: n,
                                className: i,
                                isClassBased: h,
                                isSetClassOperation: f,
                                before: function (t) {
                                    p = t, o(m, d, function () {
                                        p = a, t()
                                    })
                                },
                                after: function (t) {
                                    v = t, o($, y, function () {
                                        v = a, t()
                                    })
                                },
                                cancel: function () {
                                    d && (u(d, function (t) {
                                        (t || a)(!0)
                                    }), p(!0)), y && (u(y, function (t) {
                                        (t || a)(!0)
                                    }), v(!0))
                                }
                            }
                        }
                    }
                }

                function $(t, n, i, r, o, s, a) {
                    function c(e) {
                        var r = "$animate:" + e;
                        x && x[r] && 0 < x[r].length && d(function () {
                            i.triggerHandler(r, {
                                event: t,
                                className: n
                            })
                        })
                    }

                    function l() {
                        c("before")
                    }

                    function p() {
                        c("after")
                    }

                    function m() {
                        c("close"), a && d(function () {
                            a()
                        })
                    }

                    function v() {
                        v.hasBeenRun || (v.hasBeenRun = !0, s())
                    }

                    function g() {
                        if (!g.hasBeenRun) {
                            g.hasBeenRun = !0;
                            var t = i.data(f);
                            t && ($ && $.isClassBased ? b(i, n) : (d(function () {
                                var t = i.data(f) || {};
                                A == t.index && b(i, n)
                            }), i.data(f, t))), m()
                        }
                    }
                    var $ = y(i, t, n);
                    if ($) {
                        n = $.className;
                        var x = (x = e.element._data($.node)) && x.events;
                        r || (r = o ? o.parent() : i.parent());
                        var S = i.data(f) || {};
                        o = S.active || {};
                        var T = S.totalActive || 0,
                            E = S.last;
                        if ($.isClassBased && (S.disabled || E && !E.isClassBased) || w(i, r)) v(), l(), p(), g();
                        else {
                            if (r = !1, 0 < T) {
                                if (S = [], $.isClassBased) "setClass" == E.event ? (S.push(E), b(i, n)) : o[n] && (k = o[n], k.event == t ? r = !0 : (S.push(k), b(i, n)));
                                else if ("leave" == t && o["ng-leave"]) r = !0;
                                else {
                                    for (var k in o) S.push(o[k]), b(i, k);
                                    o = {}, T = 0
                                }
                                0 < S.length && u(S, function (t) {
                                    t.cancel()
                                })
                            }
                            if (!$.isClassBased || $.isSetClassOperation || r || (r = "addClass" == t == i.hasClass(n)), r) l(), p(), m();
                            else {
                                "leave" == t && i.one("$destroy", function (t) {
                                    var n = (t = e.element(this)).data(f);
                                    n && (n = n.active["ng-leave"]) && (n.cancel(), b(t, "ng-leave"))
                                }), i.addClass(h);
                                var A = C++;
                                T++, o[n] = $, i.data(f, {
                                    last: $,
                                    active: o,
                                    index: A,
                                    totalActive: T
                                }), l(), $.before(function (e) {
                                    var r = i.data(f);
                                    e = e || !r || !r.active[n] || $.isClassBased && r.active[n].event != t, v(), !0 === e ? g() : (p(), $.after(g))
                                })
                            }
                        }
                    } else v(), l(), p(), g()
                }

                function x(t) {
                    (t = o(t)) && (t = e.isFunction(t.getElementsByClassName) ? t.getElementsByClassName(h) : t.querySelectorAll("." + h), u(t, function (t) {
                        (t = (t = e.element(t)).data(f)) && t.active && u(t.active, function (t) {
                            t.cancel()
                        })
                    }))
                }

                function b(t, e) {
                    if (o(t) == o(l)) p.disabled || (p.running = !1, p.structural = !1);
                    else if (e) {
                        var n = t.data(f) || {},
                            i = !0 === e;
                        !i && n.active && n.active[e] && (n.totalActive--, delete n.active[e]), !i && n.totalActive || (t.removeClass(h), t.removeData(f))
                    }
                }

                function w(t, e) {
                    if (p.disabled) return !0;
                    if (o(t) == o(l)) return p.disabled || p.running;
                    do {
                        if (0 === e.length) break;
                        var n = o(e) == o(l),
                            i = (i = n ? p : e.data(f)) && (!!i.disabled || i.running || 0 < i.totalActive);
                        if (n || i) return i;
                        if (n) break
                    } while (e = e.parent());
                    return !0
                }
                var C = 0;
                l.data(f, p), m.$$postDigest(function () {
                    m.$$postDigest(function () {
                        p.running = !1
                    })
                });
                var S = r.classNameFilter(),
                    T = S ? function (t) {
                        return S.test(t)
                    } : function () {
                        return !0
                    };
                return {
                    enter: function (e, n, i, r) {
                        this.enabled(!1, e), t.enter(e, n, i), m.$$postDigest(function () {
                            $("enter", "ng-enter", e = s(e), n, i, a, r)
                        })
                    },
                    leave: function (e, n) {
                        x(e), this.enabled(!1, e), m.$$postDigest(function () {
                            $("leave", "ng-leave", s(e), null, null, function () {
                                t.leave(e)
                            }, n)
                        })
                    },
                    move: function (e, n, i, r) {
                        x(e), this.enabled(!1, e), t.move(e, n, i), m.$$postDigest(function () {
                            $("move", "ng-move", e = s(e), n, i, a, r)
                        })
                    },
                    addClass: function (e, n, i) {
                        e = s(e), $("addClass", n, e, null, null, function () {
                            t.addClass(e, n)
                        }, i)
                    },
                    removeClass: function (e, n, i) {
                        e = s(e), $("removeClass", n, e, null, null, function () {
                            t.removeClass(e, n)
                        }, i)
                    },
                    setClass: function (e, n, i, r) {
                        e = s(e), $("setClass", [n, i], e, null, null, function () {
                            t.setClass(e, n, i)
                        }, r)
                    },
                    enabled: function (t, e) {
                        switch (arguments.length) {
                            case 2:
                                if (t) b(e);
                                else {
                                    var n = e.data(f) || {};
                                    n.disabled = !0, e.data(f, n)
                                }
                                break;
                            case 1:
                                p.disabled = !t;
                                break;
                            default:
                                t = !p.disabled
                        }
                        return !!t
                    }
                }
            }]), r.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (i, r, s, c) {
                function f(t, e) {
                    _ && _(), V.push(e), _ = c(function () {
                        u(V, function (t) {
                            t()
                        }), V = [], _ = null, B = {}
                    })
                }

                function h(t, n) {
                    var i = o(t);
                    t = e.element(i), X.push(t), (i = Date.now() + n) <= Q || (s.cancel(Y), Q = i, Y = s(function () {
                        p(X), X = []
                    }, n, !1))
                }

                function p(t) {
                    u(t, function (t) {
                        (t = t.data(R)) && (t.closeAnimationFn || a)()
                    })
                }

                function d(t, e) {
                    var n = e ? B[e] : null;
                    if (!n) {
                        var r, o, s, a, c = 0,
                            f = 0,
                            h = 0,
                            p = 0;
                        u(t, function (t) {
                            if (t.nodeType == l) {
                                t = i.getComputedStyle(t) || {}, s = t[A + I], c = Math.max(m(s), c), a = t[A + L], r = t[A + M], f = Math.max(m(r), f), o = t[j + M], p = Math.max(m(o), p);
                                var e = m(t[j + I]);
                                0 < e && (e *= parseInt(t[j + P], 10) || 1), h = Math.max(e, h)
                            }
                        }), n = {
                            total: 0,
                            transitionPropertyStyle: a,
                            transitionDurationStyle: s,
                            transitionDelayStyle: r,
                            transitionDelay: f,
                            transitionDuration: c,
                            animationDelayStyle: o,
                            animationDelay: p,
                            animationDuration: h
                        }, e && (B[e] = n)
                    }
                    return n
                }

                function m(t) {
                    var n = 0;
                    return t = e.isString(t) ? t.split(/\s*,\s*/) : [], u(t, function (t) {
                        n = Math.max(parseFloat(t) || 0, n)
                    }), n
                }

                function v(t) {
                    var e = t.parent(),
                        n = e.data(q);
                    return n || (e.data(q, ++U), n = U), n + "-" + o(t).getAttribute("class")
                }

                function g(t, e, n, i) {
                    var r = v(e),
                        s = r + " " + n,
                        u = B[s] ? ++B[s].total : 0,
                        c = {};
                    0 < u && ((r = !B[c = r + " " + (l = n + "-stagger")]) && e.addClass(l), c = d(e, c), r && e.removeClass(l)), i = i || function (t) {
                        return t()
                    }, e.addClass(n);
                    var l = e.data(R) || {},
                        f = i(function () {
                            return d(e, s)
                        });
                    return i = f.transitionDuration, r = f.animationDuration, 0 === i && 0 === r ? (e.removeClass(n), !1) : (e.data(R, {
                        running: l.running || 0,
                        itemIndex: u,
                        stagger: c,
                        timings: f,
                        closeAnimationFn: a
                    }), t = 0 < l.running || "setClass" == t, 0 < i && y(e, n, t), 0 < r && 0 < c.animationDelay && 0 === c.animationDuration && (o(e).style[j] = "none 0s"), !0)
                }

                function y(t, e, n) {
                    "ng-enter" != e && "ng-move" != e && "ng-leave" != e && n ? t.addClass(F) : o(t).style[A + L] = "none"
                }

                function $(t, e) {
                    var n = A + L,
                        i = o(t);
                    i.style[n] && 0 < i.style[n].length && (i.style[n] = ""), t.removeClass(F)
                }

                function x(t) {
                    var e = j;
                    (t = o(t)).style[e] && 0 < t.style[e].length && (t.style[e] = "")
                }

                function b(t, e, n, i) {
                    function r(t) {
                        e.off(y, s), e.removeClass(c), E(e, n), t = o(e);
                        for (var i in x) t.style.removeProperty(x[i])
                    }

                    function s(t) {
                        t.stopPropagation();
                        var e = t.originalEvent || t;
                        t = e.$manualTimeStamp || e.timeStamp || Date.now(), e = parseFloat(e.elapsedTime.toFixed(H)), Math.max(t - g, 0) >= v && e >= d && i()
                    }
                    var a = o(e);
                    if (t = e.data(R), -1 != a.getAttribute("class").indexOf(n) && t) {
                        var c = "";
                        u(n.split(" "), function (t, e) {
                            c += (0 < e ? " " : "") + t + "-active"
                        });
                        var l = t.stagger,
                            f = t.timings,
                            p = t.itemIndex,
                            d = Math.max(f.transitionDuration, f.animationDuration),
                            m = Math.max(f.transitionDelay, f.animationDelay),
                            v = m * W,
                            g = Date.now(),
                            y = O + " " + D,
                            $ = "",
                            x = [];
                        if (0 < f.transitionDuration) {
                            var b = f.transitionPropertyStyle; - 1 == b.indexOf("all") && ($ += N + "transition-property: " + b + ";", $ += N + "transition-duration: " + f.transitionDurationStyle + ";", x.push(N + "transition-property"), x.push(N + "transition-duration"))
                        }
                        return 0 < p && (0 < l.transitionDelay && 0 === l.transitionDuration && ($ += N + "transition-delay: " + w(f.transitionDelayStyle, l.transitionDelay, p) + "; ", x.push(N + "transition-delay")), 0 < l.animationDelay && 0 === l.animationDuration && ($ += N + "animation-delay: " + w(f.animationDelayStyle, l.animationDelay, p) + "; ", x.push(N + "animation-delay"))), 0 < x.length && (f = a.getAttribute("style") || "", a.setAttribute("style", f + " " + $)), e.on(y, s), e.addClass(c), t.closeAnimationFn = function () {
                            r(), i()
                        }, a = (p * (Math.max(l.animationDelay, l.transitionDelay) || 0) + (m + d) * z) * W, t.running++, h(e, a), r
                    }
                    i()
                }

                function w(t, e, n) {
                    var i = "";
                    return u(t.split(","), function (t, r) {
                        i += (0 < r ? "," : "") + (n * e + parseInt(t, 10)) + "s"
                    }), i
                }

                function C(t, e, n, i) {
                    if (g(t, e, n, i)) return function (t) {
                        t && E(e, n)
                    }
                }

                function S(t, e, n, i) {
                    if (e.data(R)) return b(t, e, n, i);
                    E(e, n), i()
                }

                function T(t, e, n, i) {
                    var r = C(t, e, n);
                    if (r) {
                        var o = r;
                        return f(e, function () {
                                $(e, n), x(e), o = S(t, e, n, i)
                            }),
                            function (t) {
                                (o || a)(t)
                            }
                    }
                    i()
                }

                function E(t, e) {
                    t.removeClass(e);
                    var n = t.data(R);
                    n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(R))
                }

                function k(t, n) {
                    var i = "";
                    return t = e.isArray(t) ? t : t.split(/\s+/), u(t, function (t, e) {
                        t && 0 < t.length && (i += (0 < e ? " " : "") + t + n)
                    }), i
                }
                var A, D, j, O, N = "";
                t.ontransitionend === n && t.onwebkittransitionend !== n ? (N = "-webkit-", A = "WebkitTransition", D = "webkitTransitionEnd transitionend") : (A = "transition", D = "transitionend"), t.onanimationend === n && t.onwebkitanimationend !== n ? (N = "-webkit-", j = "WebkitAnimation", O = "webkitAnimationEnd animationend") : (j = "animation", O = "animationend");
                var _, I = "Duration",
                    L = "Property",
                    M = "Delay",
                    P = "IterationCount",
                    q = "$$ngAnimateKey",
                    R = "$$ngAnimateCSS3Data",
                    F = "ng-animate-block-transitions",
                    H = 3,
                    z = 1.5,
                    W = 1e3,
                    B = {},
                    U = 0,
                    V = [],
                    Y = null,
                    Q = 0,
                    X = [];
                return {
                    enter: function (t, e) {
                        return T("enter", t, "ng-enter", e)
                    },
                    leave: function (t, e) {
                        return T("leave", t, "ng-leave", e)
                    },
                    move: function (t, e) {
                        return T("move", t, "ng-move", e)
                    },
                    beforeSetClass: function (t, e, n, i) {
                        var r = k(n, "-remove") + " " + k(e, "-add"),
                            o = C("setClass", t, r, function (i) {
                                var r = t.attr("class");
                                return t.removeClass(n), t.addClass(e), i = i(), t.attr("class", r), i
                            });
                        if (o) return f(t, function () {
                            $(t, r), x(t), i()
                        }), o;
                        i()
                    },
                    beforeAddClass: function (t, e, n) {
                        var i = C("addClass", t, k(e, "-add"), function (n) {
                            return t.addClass(e), n = n(), t.removeClass(e), n
                        });
                        if (i) return f(t, function () {
                            $(t, e), x(t), n()
                        }), i;
                        n()
                    },
                    setClass: function (t, e, n, i) {
                        return n = k(n, "-remove"), e = k(e, "-add"), S("setClass", t, n + " " + e, i)
                    },
                    addClass: function (t, e, n) {
                        return S("addClass", t, k(e, "-add"), n)
                    },
                    beforeRemoveClass: function (t, e, n) {
                        var i = C("removeClass", t, k(e, "-remove"), function (n) {
                            var i = t.attr("class");
                            return t.removeClass(e), n = n(), t.attr("class", i), n
                        });
                        if (i) return f(t, function () {
                            $(t, e), x(t), n()
                        }), i;
                        n()
                    },
                    removeClass: function (t, e, n) {
                        return S("removeClass", t, k(e, "-remove"), n)
                    }
                }
            }])
        }])
    }(window, window.angular),
    function (t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function (t, e) {
        "use strict";

        function n(n, o, a) {
            function u(t, e, i) {
                var r, o = "$()." + n + '("' + e + '")';
                return t.each(function (t, u) {
                    var c = a.data(u, n);
                    if (c) {
                        var l = c[e];
                        if (l && "_" != e.charAt(0)) {
                            var f = l.apply(c, i);
                            r = void 0 === r ? f : r
                        } else s(o + " is not a valid method")
                    } else s(n + " not initialized. Cannot call methods, i.e. " + o)
                }), void 0 !== r ? r : t
            }

            function c(t, e) {
                t.each(function (t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
                })
            }(a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
                return "string" == typeof t ? u(this, t, r.call(arguments, 1)) : (c(this, t), this)
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var r = Array.prototype.slice,
            o = t.console,
            s = void 0 === o ? function () {} : function (t) {
                o.error(t)
            };
        return i(e || t.jQuery), n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), r = n[i += s ? 0 : 1]
                }
                return this
            }
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < u; e++) t[a[e]] = 0;
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var s = n(e);
                r.isBoxSizeOuter = o = 200 == t(s.width), i.removeChild(e)
            }
        }

        function r(r) {
            if (i(), "string" == typeof r && (r = document.querySelector(r)), r && "object" == typeof r && r.nodeType) {
                var s = n(r);
                if ("none" == s.display) return e();
                var c = {};
                c.width = r.offsetWidth, c.height = r.offsetHeight;
                for (var l = c.isBorderBox = "border-box" == s.boxSizing, f = 0; f < u; f++) {
                    var h = a[f],
                        p = s[h],
                        d = parseFloat(p);
                    c[h] = isNaN(d) ? 0 : d
                }
                var m = c.paddingLeft + c.paddingRight,
                    v = c.paddingTop + c.paddingBottom,
                    g = c.marginLeft + c.marginRight,
                    y = c.marginTop + c.marginBottom,
                    $ = c.borderLeftWidth + c.borderRightWidth,
                    x = c.borderTopWidth + c.borderBottomWidth,
                    b = l && o,
                    w = t(s.width);
                !1 !== w && (c.width = w + (b ? 0 : m + $));
                var C = t(s.height);
                return !1 !== C && (c.height = C + (b ? 0 : v + x)), c.innerWidth = c.width - (m + $), c.innerHeight = c.height - (v + x), c.outerWidth = c.width + g, c.outerHeight = c.height + y, c
            }
        }
        var o, s = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = a.length,
            c = !1;
        return r
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var n = {};
        n.extend = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function (t, e) {
            return (t % e + e) % e
        }, n.makeArray = function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function (t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function (t, n) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, i) {
            var r = [];
            return (t = n.makeArray(t)).forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function (t, e, n) {
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function () {
                    i.apply(o, e), delete o[r]
                }, n || 100)
            }
        }, n.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var i = t.console;
        return n.htmlInit = function (e, r) {
            n.docReady(function () {
                var o = n.toDashed(r),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    u = document.querySelectorAll(".js-" + o),
                    c = n.makeArray(a).concat(n.makeArray(u)),
                    l = s + "-options",
                    f = t.jQuery;
                c.forEach(function (t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(l);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    f && f.data(t, r, a)
                })
            })
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function n(t) {
            for (var e in t) return !1;
            return null, !0
        }

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var r = document.documentElement.style,
            o = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            a = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[o],
            u = {
                transform: s,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property",
                transitionDelay: o + "Delay"
            },
            c = i.prototype = Object.create(t.prototype);
        c.constructor = i, c._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, c.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function () {
            this.size = e(this.element)
        }, c.css = function (t) {
            var e = this.element.style;
            for (var n in t) e[u[n] || n] = t[n]
        }, c.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= n ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a
        }, c.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var u = i ? "paddingTop" : "paddingBottom",
                c = i ? "top" : "bottom",
                l = i ? "bottom" : "top",
                f = this.position.y + t[u];
            e[c] = this.getYValue(f), e[l] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, c.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, c._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), !s || this.isTransitioning) {
                var a = t - n,
                    u = e - i,
                    c = {};
                c.transform = this.getTranslate(a, u), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, c.getTranslate = function (t, e) {
            var n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop");
            return t = n ? t : -t, e = i ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, c.moveTo = c._transitionTo, c.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, c._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, c.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var l = "opacity," + s.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        });
        c.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: l,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(a, this, !1)
            }
        }, c.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, c.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var f = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = f[t.propertyName] || t.propertyName;
                delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
        }, c._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return c.removeTransitionStyles = function () {
            this.css(h)
        }, c.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, c.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, c.remove = function () {
            return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, c.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, c.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, c.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, c.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, r, o) {
            return e(t, n, i, r, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                this.element = n, c && (this.$element = c(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
                var r = ++f;
                this.element.outlayerGUID = r, h[r] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                i = e && e[2];
            return n.length ? (n = parseFloat(n)) * (d[i] || 1) : 0
        }
        var u = t.console,
            c = t.jQuery,
            l = function () {},
            f = 0,
            h = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = o.prototype;
        i.extend(p, e.prototype), p.option = function (t) {
            i.extend(this.options, t)
        }, p._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, p.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = new n(e[r], this);
                i.push(o)
            }
            return i
        }, p._filterFindItemElements = function (t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, p.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function () {
            this.getSize()
        }, p.getSize = function () {
            this.size = n(this.element)
        }, p._getMeasurement = function (t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, p.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function (t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, p._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, p.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, p._positionItem = function (t, e, n, i, r) {
            i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n))
        }, p._postLayout = function () {
            this.resizeContainer()
        }, p.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, p._getContainerSize = l, p._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function (t, e) {
            function n() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                ++s == o && n()
            }
            var r = this,
                o = e.length;
            if (e && o) {
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, i)
                })
            } else n()
        }, p.dispatchEvent = function (t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var r = c.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, p.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function (t) {
            (t = this._find(t)) && t.forEach(function (t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t)
        }, p._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = l, p._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t);
            return {
                left: e.left - i.left - r.marginLeft,
                top: e.top - i.top - r.marginTop,
                right: i.right - e.right - r.marginRight,
                bottom: i.bottom - e.bottom - r.marginBottom
            }
        }, p.handleEvent = i.handleEvent, p.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function () {
            this.resize()
        }, i.debounceMethod(o, "onresize", 100), p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, p.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, n) {
                    t.stagger(n * e), t.reveal()
                })
            }
        }, p.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, n) {
                    t.stagger(n * e), t.hide()
                })
            }
        }, p.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, p.getItems = function (t) {
            var e = [];
            return (t = i.makeArray(t)).forEach(function (t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, p.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), i.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete h[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, o.data = function (t) {
            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
            return e && h[e]
        }, o.create = function (t, e) {
            var n = s(o);
            return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), c && c.bridget && c.bridget(t, n), n
        };
        var d = {
            ms: 1,
            s: 1e3
        };
        return o.Item = r, o
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var n = e.prototype = Object.create(t.Item.prototype),
            i = n._create;
        n._create = function () {
            this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
        }, n.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var r = n.destroy;
        return n.destroy = function () {
            r.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";

        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var i = n.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
            i[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), i.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.getSegmentSize = function (t, e) {
            var n = t + e,
                i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var r = this.getFirstItemSize();
                this[n] = r && r[i] || this.isotope.size["inner" + e]
            }
        }, i.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function (t, e) {
            function r() {
                n.apply(this, arguments)
            }
            return r.prototype = Object.create(i), r.prototype.constructor = r, e && (r.options = e), r.prototype.namespace = t, n.modes[t] = r, r
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var n = t.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var i = n.prototype;
        return i._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i,
                a = s && s < 1 ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, i.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && e < 1 ? "round" : "ceil",
                i = Math[n](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var r = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
                    x: this.columnWidth * r.col,
                    y: r.y
                }, s = r.y + t.size.outerHeight, a = i + r.col, u = r.col; u < a; u++) this.colYs[u] = s;
            return o
        }, i._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                n = Math.min.apply(Math, e);
            return {
                col: e.indexOf(n),
                y: n
            }
        }, i._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
            return e
        }, i._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var n = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, n)
        }, i._getHorizontalColPosition = function (t, e) {
            var n = this.horizontalColIndex % this.cols;
            n = t > 1 && n + t > this.cols ? 0 : n;
            var i = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, {
                col: n,
                y: this._getColGroupY(n, t)
            }
        }, i._manageStamp = function (t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft") ? i.left : i.right,
                o = r + n.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, c = s; c <= a; c++) this.colYs[c] = Math.max(u, this.colYs[c])
        }, i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var n = t.create("masonry"),
            i = n.prototype,
            r = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var o in e.prototype) r[o] || (i[o] = e.prototype[o]);
        var s = i.measureColumns;
        i.measureColumns = function () {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = i._getOption;
        return i._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            n = e.prototype;
        return n._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
        }, n._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            n = e.prototype;
        return n._resetLayout = function () {
            this.y = 0
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, n._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (n, i, r, o, s, a) {
            return e(t, n, i, r, o, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, n, i, r, o, s) {
        function a(t, e) {
            return function (n, i) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                        s = n.sortData[o],
                        a = i.sortData[o];
                    if (s > a || s < a) {
                        var u = (void 0 !== e[o] ? e[o] : e) ? 1 : -1;
                        return (s > a ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var u = t.jQuery,
            c = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            l = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        l.Item = o, l.LayoutMode = s;
        var f = l.prototype;
        f._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, f.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, f._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0; n < t.length; n++) t[n].id = this.itemGUID++;
            return this._updateItemsSortData(t), t
        }, f._initLayoutMode = function (t) {
            var e = s.modes[t],
                n = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, n) : n, this.modes[t] = new e(this)
        }, f.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, f._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, f.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, f._init = f.arrange, f._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, f._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, f._bindArrangeComplete = function () {
            function t() {
                e && n && i && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
            }
            var e, n, i, r = this;
            this.once("layoutComplete", function () {
                e = !0, t()
            }), this.once("hideComplete", function () {
                n = !0, t()
            }), this.once("revealComplete", function () {
                i = !0, t()
            })
        }, f._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var n = [], i = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var u = o(a);
                    u && n.push(a), u && a.isHidden ? i.push(a) : u || a.isHidden || r.push(a)
                }
            }
            return {
                matches: n,
                needReveal: i,
                needHide: r
            }
        }, f._getFilterTest = function (t) {
            return u && this.options.isJQueryFiltering ? function (e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return i(e.element, t)
            }
        }, f.updateSortData = function (t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, f._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = h(n)
            }
        }, f._updateItemsSortData = function (t) {
            for (var e = t && t.length, n = 0; e && n < e; n++) t[n].updateSortData()
        };
        var h = function () {
            function t(t, e) {
                return t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var n = t.querySelector(e);
                    return n && n.textContent
                }
            }
            return function (e) {
                if ("string" != typeof e) return e;
                var n = c(e).split(" "),
                    i = n[0],
                    r = i.match(/^\[(.+)\]$/),
                    o = t(r && r[1], i),
                    s = l.sortDataParsers[n[1]];
                return e = s ? function (t) {
                    return t && s(o(t))
                } : function (t) {
                    return t && o(t)
                }
            }
        }();
        l.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, f._sort = function () {
            if (this.options.sortBy) {
                var t = r.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = a(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, f._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, f._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, f._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, f._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, f._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, f._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, f.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, f.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, f.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, f._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, f.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, r = e.length;
                for (n = 0; n < r; n++) i = e[n], this.element.appendChild(i.element);
                var o = this._filter(e).matches;
                for (n = 0; n < r; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < r; n++) delete e[n].isLayoutInstant;
                this.reveal(o)
            }
        };
        var p = f.remove;
        return f.remove = function (t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var n = e && e.length, i = 0; n && i < n; i++) {
                var o = e[i];
                r.removeFrom(this.filteredItems, o)
            }
        }, f.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
            this.options.sortBy = "random", this._sort(), this._layout()
        }, f._noTransition = function (t, e) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.apply(this, e);
            return this.options.transitionDuration = n, i
        }, f.getFilteredItemElements = function () {
            return this.filteredItems.map(function (t) {
                return t.element
            })
        }, l
    });