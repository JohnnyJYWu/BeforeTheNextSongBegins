/*! For license information please see styles_c6ee9e7a62d575f28670.js.LICENSE.txt */
"use strict";
(self.webpackChunke20240509robin = self.webpackChunke20240509robin || []).push([
	[869], {
		37844: function(t, e, n) {
			n.d(e, {
				A: function() {
					return u
				}
			});
			var r = n(74061),
				o = n(57566),
				a = n(96127),
				i = n(66045),
				s = n.n(i),
				c = (0, r.defineComponent)({
					__name: "cdkBox",
					props: {
						cdk: null
					},
					emits: ["copy"],
					setup: function(t, e) {
						var n = e.emit,
							r = t;
						return {
							__sfc: !0,
							props: r,
							emits: n,
							onCopy: function() {
								s()({
									text: r.cdk
								}), (0, a.y)((0, o.pp)("toast_copy")), n("copy")
							}
						}
					}
				}),
				u = (0, n(14486).A)(c, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "cdk-box"
					}, [e("div", {
						staticClass: "cdk-box__content"
					}, [t._v(t._s(t.cdk))]), t._v(" "), e("div", {
						staticClass: "cdk-box__copy",
						on: {
							click: n.onCopy
						}
					})])
				}), [], !1, null, "b02075be", null).exports
		},
		62904: function(t, e, n) {
			n.d(e, {
				A: function() {
					return o
				}
			});
			var r = (0, n(74061).defineComponent)({
					__name: "gramophone",
					props: {
						bg: null
					},
					setup: function(t) {
						return {
							__sfc: !0
						}
					}
				}),
				o = (0, n(14486).A)(r, (function() {
					var t = this,
						e = t._self._c;
					return t._self._setupProxy, e("div", {
						staticClass: "gramophone",
						style: {
							backgroundImage: "url(".concat(t.bg, ")")
						}
					}, [e("div", {
						staticClass: "gramophone__film"
					}), t._v(" "), e("div", {
						staticClass: "gramophone__geer"
					}), t._v(" "), e("div", {
						staticClass: "gramophone__pointer"
					})])
				}), [], !1, null, "7b78bdae", null).exports
		},
		60093: function(t, e, n) {
			n.d(e, {
				A: function() {
					return p
				}
			});
			var r = n(74061),
				o = n(74681),
				a = n(57566),
				i = n(36735),
				s = n(55656),
				c = n(72369),
				u = n(7350),
				l = n.n(u),
				d = n(70018),
				f = (0, r.defineComponent)({
					__name: "shareChannels",
					props: {
						id: null
					},
					emits: ["channel", "share"],
					setup: function(t, e) {
						var n = e.emit,
							u = t,
							f = (0, r.ref)(null),
							p = (0, r.computed)((function() {
								return u.id ? {
									title: (0, a.pp)("div_share_title"),
									desc: (0, a.pp)("div_share_desc"),
									url: (0, a.uU)({
										music_id: u.id
									}),
									img_url: (0, a.pp)("div_share_img")
								} : {
									title: (0, a.pp)("share_title"),
									desc: (0, a.pp)("share_desc"),
									url: (0, a.uU)(),
									img_url: (0, a.pp)("share_img")
								}
							})),
							_ = (0, r.computed)((function() {
								return u.id ? {
									key: "m20240318hy4878b4e8",
									lang: (0, a.Xo)(),
									game_biz: d.iG,
									title_key: "div_share_title",
									desc_key: "div_share_desc",
									url: (0, a.uU)({
										music_id: u.id
									}),
									img_key: "div_share_img"
								} : {
									key: "m20240318hy4878b4e8",
									lang: (0, a.Xo)(),
									game_biz: d.iG,
									title_key: "share_title",
									desc_key: "share_desc",
									url: (0, a.uU)(),
									img_key: "share_img"
								}
							})),
							h = (0, i.B)().operations,
							v = (0, c.QN)().currentPage;

						function g(t) {
							var e;
							t === s.I.More && o.IS_SEA ? null === (e = f.value) || void 0 === e || e.handleShare() : n("channel", t, p.value, f)
						}
						var m = l()(g, 2e3);
						return {
							__sfc: !0,
							props: u,
							emits: n,
							shareRef: f,
							shareOpts: p,
							shareOptsSea: _,
							operations: h,
							currentPage: v,
							handleChannel: g,
							onChannel: m,
							onShare: function(t) {
								o.IS_SEA && u.id ? ((0, a.sx)("Button", "Click", "share_more_wizcdk", t.value), n("share", t.value)) : o.IS_SEA && (0, a.sx)("Button", "Click", "share_more", t.value)
							},
							IS_SEA: o.IS_SEA
						}
					}
				}),
				p = (0, n(14486).A)(f, (function() {
					var t = this,
						e = t._self._c,
						r = t._self._setupProxy;
					return e("div", {
						staticClass: "share-channels",
						class: "share-channels__".concat(r.currentPage)
					}, [t._l(r.operations, (function(t) {
						return e("img", {
							key: t.id,
							staticClass: "share-channels__channel",
							attrs: {
								src: t.img
							},
							on: {
								click: function(e) {
									return e.stopPropagation(), r.onChannel(t.id)
								}
							}
						})
					})), t._v(" "), e("Share", {
						ref: "shareRef",
						staticClass: "share-channels__share",
						attrs: {
							icon: n(93496),
							isSea: r.IS_SEA,
							shareOptsCn: r.shareOpts,
							shareOptsSea: r.shareOptsSea,
							platsSeaExcludes: ["image"]
						},
						on: {
							share: r.onShare
						}
					})], 2)
				}), [], !1, null, "58be2428", null).exports
		},
		88850: function(t, e, n) {
			n.d(e, {
				A: function() {
					return At
				}
			});
			var r = n(74061),
				o = n(56173),
				a = n.n(o),
				i = n(69514),
				s = n.n(i),
				c = n(2118),
				u = n(72444),
				l = n(45027),
				d = n(27690),
				f = n(72369),
				p = n(57566),
				_ = n(1972),
				h = n(44467),
				v = n(74681),
				g = n(83249),
				m = n(36735),
				y = n(55656),
				b = (0, r.defineComponent)({
					__name: "backBtn",
					setup: function(t) {
						var e = (0, r.getCurrentInstance)(),
							n = (0, m.B)().currentChanel;
						return {
							__sfc: !0,
							vueInstance: e,
							currentChanel: n,
							showIcon: function() {
								return !!v.IS_BBS || !!(y.I0 && history.length > 1)
							},
							onBack: function() {
								v.IS_BBS ? (e.proxy.$bbsApp.closePage(), (0, p.sx)("Button", "Click", "backstage")) : n === y.c3.Dy && history.back()
							}
						}
					}
				}),
				w = n(14486),
				C = (0, w.A)(b, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return n.showIcon() ? e("button", {
						staticClass: "back-btn",
						on: {
							click: n.onBack
						}
					}) : t._e()
				}), [], !1, null, "1089f396", null).exports,
				x = (0, r.defineComponent)({
					__name: "headNav",
					setup: function(t) {
						var e = (0, f.QN)(),
							n = e.bgm,
							o = e.style,
							a = e.bgmPlayed,
							i = (0, m.B)().showIndexLink,
							s = (0, p.pp)("community_link"),
							c = (0, p.pp)("collection_link"),
							u = (0, r.ref)(null);
						return (0, r.onBeforeUnmount)((function() {
							var t;
							null === (t = u.value) || void 0 === t || t.stop()
						})), {
							__sfc: !0,
							bgm: n,
							style: o,
							bgmPlayed: a,
							showIndexLink: i,
							communityLink: s,
							collectionLink: c,
							meAudioEl: u,
							LangTheme: {
								railColor: "#98958F",
								activeColor: "#1C1214"
							},
							onTap: function(t) {
								a.value = t, (0, p.sx)("Button", "Click", "music", t ? "2" : "1")
							},
							onCollection: function() {
								(0, p.sx)("Button", "Click", "audition"), (0, p.lA)(c)
							},
							onCommunity: function() {
								(0, p.sx)("Button", "Click", "sns_entrance"), (0, p.lA)(s)
							},
							onSelect: function(t) {
								(0, p.sx)("Button", "Click", "language", t)
							},
							onRule: function() {
								(0, p.sx)("Button", "Click", "event_rules"), (0, d.bY)()
							},
							onShare: function() {
								(0, p.sx)("Button", "Click", "share_page"), (0, d.mS)()
							},
							getI18nWord: p.pp,
							getLang: p.Xo,
							meAudio: _.Ay,
							LangSelect: h.A,
							IS_SEA: v.IS_SEA,
							IS_BBS: v.IS_BBS,
							gameBiz: g.iG,
							BackBtn: C
						}
					}
				}),
				k = (0, w.A)(x, (function() {
					var t = this,
						e = t._self._c,
						r = t._self._setupProxy;
					return e("div", {
						staticClass: "head-nav"
					}, [e("div", {
						staticClass: "head-nav__container"
					}, [e("img", {
						staticClass: "head-nav__logo",
						attrs: {
							src: r.getI18nWord("logo")
						}
					}), t._v(" "), e(r.BackBtn, {
						staticClass: "head-nav__btn"
					})], 1), t._v(" "), e("div", {
						staticClass: "head-nav__container"
					}, [e(r.meAudio, {
						ref: "meAudioEl",
						staticClass: "head-nav__btn head-nav__btn--audio",
						attrs: {
							icon: n(26239),
							activeIcon: n(87339),
							src: r.bgm,
							cache: !1,
							index: r.style - 1,
							fade: [600, 600],
							autoplay: r.bgmPlayed,
							volume: .1
						},
						on: {
							tap: r.onTap
						}
					}), t._v(" "), r.showIndexLink && !r.IS_SEA ? [r.collectionLink ? e("button", {
						staticClass: "head-nav__btn head-nav__btn--collection",
						on: {
							click: r.onCollection
						}
					}) : t._e(), t._v(" "), r.communityLink ? e("button", {
						staticClass: "head-nav__btn head-nav__btn--community",
						on: {
							click: r.onCommunity
						}
					}) : t._e()] : t._e(), t._v(" "), !r.IS_BBS && r.IS_SEA ? e(r.LangSelect, {
						staticClass: "head-nav__btn head-nav__btn--lang",
						attrs: {
							icon: n(68061),
							lang: r.getLang(),
							biz: r.gameBiz,
							bg: n(8179),
							themeConfig: r.LangTheme
						},
						on: {
							select: r.onSelect
						}
					}) : t._e(), t._v(" "), e("button", {
						staticClass: "head-nav__btn head-nav__btn--rule",
						on: {
							click: r.onRule
						}
					}), t._v(" "), e("button", {
						staticClass: "head-nav__btn head-nav__btn--share",
						on: {
							click: r.onShare
						}
					})], 2)])
				}), [], !1, null, "b5706042", null).exports,
				S = n(51849),
				P = n(70018),
				I = n(96127),
				L = n(7350),
				E = n.n(L),
				A = n(65623);

			function O(t) {
				return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, O(t)
			}

			function B() {
				B = function() {
					return e
				};
				var t, e = {},
					n = Object.prototype,
					r = n.hasOwnProperty,
					o = Object.defineProperty || function(t, e, n) {
						t[e] = n.value
					},
					a = "function" == typeof Symbol ? Symbol : {},
					i = a.iterator || "@@iterator",
					s = a.asyncIterator || "@@asyncIterator",
					c = a.toStringTag || "@@toStringTag";

				function u(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					u({}, "")
				} catch (t) {
					u = function(t, e, n) {
						return t[e] = n
					}
				}

				function l(t, e, n, r) {
					var a = e && e.prototype instanceof g ? e : g,
						i = Object.create(a.prototype),
						s = new A(r || []);
					return o(i, "_invoke", {
						value: P(t, n, s)
					}), i
				}

				function d(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				e.wrap = l;
				var f = "suspendedStart",
					p = "suspendedYield",
					_ = "executing",
					h = "completed",
					v = {};

				function g() {}

				function m() {}

				function y() {}
				var b = {};
				u(b, i, (function() {
					return this
				}));
				var w = Object.getPrototypeOf,
					C = w && w(w(T([])));
				C && C !== n && r.call(C, i) && (b = C);
				var x = y.prototype = g.prototype = Object.create(b);

				function k(t) {
					["next", "throw", "return"].forEach((function(e) {
						u(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function S(t, e) {
					function n(o, a, i, s) {
						var c = d(t[o], t, a);
						if ("throw" !== c.type) {
							var u = c.arg,
								l = u.value;
							return l && "object" == O(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
								n("next", t, i, s)
							}), (function(t) {
								n("throw", t, i, s)
							})) : e.resolve(l).then((function(t) {
								u.value = t, i(u)
							}), (function(t) {
								return n("throw", t, i, s)
							}))
						}
						s(c.arg)
					}
					var a;
					o(this, "_invoke", {
						value: function(t, r) {
							function o() {
								return new e((function(e, o) {
									n(t, r, e, o)
								}))
							}
							return a = a ? a.then(o, o) : o()
						}
					})
				}

				function P(e, n, r) {
					var o = f;
					return function(a, i) {
						if (o === _) throw new Error("Generator is already running");
						if (o === h) {
							if ("throw" === a) throw i;
							return {
								value: t,
								done: !0
							}
						}
						for (r.method = a, r.arg = i;;) {
							var s = r.delegate;
							if (s) {
								var c = I(s, r);
								if (c) {
									if (c === v) continue;
									return c
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (o === f) throw o = h, r.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							o = _;
							var u = d(e, n, r);
							if ("normal" === u.type) {
								if (o = r.done ? h : p, u.arg === v) continue;
								return {
									value: u.arg,
									done: r.done
								}
							}
							"throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
						}
					}
				}

				function I(e, n) {
					var r = n.method,
						o = e.iterator[r];
					if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, I(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
					var a = d(o, e.iterator, n.arg);
					if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, v;
					var i = a.arg;
					return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
				}

				function L(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function E(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function A(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(L, this), this.reset(!0)
				}

				function T(e) {
					if (e || "" === e) {
						var n = e[i];
						if (n) return n.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								a = function n() {
									for (; ++o < e.length;)
										if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
									return n.value = t, n.done = !0, n
								};
							return a.next = a
						}
					}
					throw new TypeError(O(e) + " is not iterable")
				}
				return m.prototype = y, o(x, "constructor", {
					value: y,
					configurable: !0
				}), o(y, "constructor", {
					value: m,
					configurable: !0
				}), m.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
				}, e.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(x), t
				}, e.awrap = function(t) {
					return {
						__await: t
					}
				}, k(S.prototype), u(S.prototype, s, (function() {
					return this
				})), e.AsyncIterator = S, e.async = function(t, n, r, o, a) {
					void 0 === a && (a = Promise);
					var i = new S(l(t, n, r, o), a);
					return e.isGeneratorFunction(n) ? i : i.next().then((function(t) {
						return t.done ? t.value : i.next()
					}))
				}, k(x), u(x, c, "Generator"), u(x, i, (function() {
					return this
				})), u(x, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(t) {
					var e = Object(t),
						n = [];
					for (var r in e) n.push(r);
					return n.reverse(),
						function t() {
							for (; n.length;) {
								var r = n.pop();
								if (r in e) return t.value = r, t.done = !1, t
							}
							return t.done = !0, t
						}
				}, e.values = T, A.prototype = {
					constructor: A,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
							for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var n = this;

						function o(r, o) {
							return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var i = this.tryEntries[a],
								s = i.completion;
							if ("root" === i.tryLoc) return o("end");
							if (i.tryLoc <= this.prev) {
								var c = r.call(i, "catchLoc"),
									u = r.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var o = this.tryEntries[n];
							if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var a = o;
								break
							}
						}
						a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
						var i = a ? a.completion : {};
						return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(i)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), v
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									E(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, n, r) {
						return this.delegate = {
							iterator: T(e),
							resultName: n,
							nextLoc: r
						}, "next" === this.method && (this.arg = t), v
					}
				}, e
			}

			function T(t, e, n, r, o, a, i) {
				try {
					var s = t[a](i),
						c = s.value
				} catch (t) {
					return void n(t)
				}
				s.done ? e(c) : Promise.resolve(c).then(r, o)
			}

			function W(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var M = (0, r.defineComponent)({
					__name: "compactDisc",
					setup: function(t) {
						var e, o = (0, f.QN)(),
							a = o.style,
							i = o.changePage2,
							s = (0, f.pM)(),
							c = (0, A.E)(),
							u = (0, S.bP)(s),
							d = u.exportLimit,
							_ = u.indexError,
							h = u.indexMsg,
							g = u.pollTimeMs,
							m = (0, r.ref)(0),
							y = (e = new Array(2), function(t) {
								if (Array.isArray(t)) return W(t)
							}(e) || function(t) {
								if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
							}(e) || function(t, e) {
								if (t) {
									if ("string" == typeof t) return W(t, e);
									var n = Object.prototype.toString.call(t).slice(8, -1);
									return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W(t, e) : void 0
								}
							}(e) || function() {
								throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}()).map((function(t, e) {
								var r = e + 1;
								return {
									id: r,
									name: (0, p.pp)("compact_disc_song".concat(r)),
									bg: n(81622)("./compact-disc-img".concat(r, ".gif")),
									bottom: n(96477)("./compact-disc-bottom".concat(r, ".png"))
								}
							}));

						function b() {
							return w.apply(this, arguments)
						}

						function w() {
							var t;
							return t = B().mark((function t() {
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if ((0, p.sx)("Button", "Click", "confirm loop"), !v.IS_BBS && !v.QS.authkey || c.checkLogin()) {
												t.next = 3;
												break
											}
											return t.abrupt("return");
										case 3:
											if (0 !== g.value.length) {
												t.next = 6;
												break
											}
											return t.next = 6, s.getConfig();
										case 6:
											if (!_.value || "development" === P.cA) {
												t.next = 9;
												break
											}
											return h.value && (0, I.y)(h.value), t.abrupt("return");
										case 9:
											i(d.value && !v.IS_SEA ? l.YW.Reveal : l.YW.Stage);
										case 10:
										case "end":
											return t.stop()
									}
								}), t)
							})), w = function() {
								var e = this,
									n = arguments;
								return new Promise((function(r, o) {
									var a = t.apply(e, n);

									function i(t) {
										T(a, r, o, i, s, "next", t)
									}

									function s(t) {
										T(a, r, o, i, s, "throw", t)
									}
									i(void 0)
								}))
							}, w.apply(this, arguments)
						}(0, r.onMounted)((function() {
							m.value = y.findIndex((function(t) {
								return t.id === a.value
							}))
						})), (0, r.watch)(m, (function(t) {
							a.value = y[t].id, (0, p.sx)("Button", "Click", "loop".concat(t + 1))
						}));
						var C = E()(b, 2e3);
						return {
							__sfc: !0,
							style: a,
							changePage2: i,
							indexStore: s,
							account: c,
							exportLimit: d,
							indexError: _,
							indexMsg: h,
							pollTimeMs: g,
							playingIndex: m,
							config: y,
							onleft: function() {
								m.value = (m.value + y.length - 1) % y.length
							},
							onright: function() {
								m.value = (m.value + 1) % y.length
							},
							comfirmStyle: b,
							onComfirm: C,
							getI18nWord: p.pp
						}
					}
				}),
				R = M,
				j = (0, w.A)(R, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "compact-disc"
					}, [e("div", {
						staticClass: "compact-disc__main"
					}, [e("div", {
						staticClass: "compact-disc__btn compact-disc__btn--left",
						on: {
							click: n.onleft
						}
					}), t._v(" "), e("div", {
						staticClass: "compact-disc__lyric-wrapper"
					}, t._l(n.config, (function(r, o) {
						return e("div", {
							key: r.id,
							staticClass: "compact-disc__lyric",
							style: {
								backgroundImage: "url(".concat(r.bg, ")"),
								opacity: n.playingIndex === o ? 1 : 0
							}
						}, [e("div", {
							staticClass: "compact-disc__lyric-name",
							style: {
								backgroundImage: "url(".concat(r.bottom, ")")
							},
							domProps: {
								innerHTML: t._s(r.name)
							}
						})])
					})), 0), t._v(" "), e("div", {
						staticClass: "compact-disc__btn compact-disc__btn--right",
						on: {
							click: n.onright
						}
					})]), t._v(" "), e("div", {
						staticClass: "compact-disc__pagination"
					}, t._l(n.config, (function(t, r) {
						return e("div", {
							key: t.id,
							staticClass: "compact-disc__pagination-dot",
							class: {
								"compact-disc__pagination-dot--active": r === n.playingIndex
							}
						})
					})), 0), t._v(" "), e("button", {
						staticClass: "compact-disc__comfirm-btn",
						on: {
							click: n.onComfirm
						}
					}, [t._v("\n    " + t._s(n.getI18nWord("index_btn")) + "\n  ")])])
				}), [], !1, null, "03f82917", null),
				N = j.exports,
				G = n(70622),
				D = (0, r.defineComponent)({
					__name: "index",
					setup: function(t) {
						var e = (0, p.pp)("home_before_lyrics"),
							n = (0, f.pM)(),
							r = (0, S.bP)(n),
							o = r.showReward,
							a = r.cdk,
							i = (0, G.b)().getCdk;
						return {
							__sfc: !0,
							beforeLyricBg: e,
							cdkStore: n,
							showReward: o,
							cdk: a,
							getCdk: i,
							onCdk: function() {
								(0, p.sx)("Button", "Click", "display_cdk"), i()
							},
							headNav: k,
							compactDisc: N,
							getI18nWord: p.pp
						}
					}
				}),
				Y = (0, w.A)(D, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "page home"
					}, [e("div", {
						staticClass: "home__nav"
					}, [e(n.headNav)], 1), t._v(" "), e("div", {
						staticClass: "home__main"
					}, [e("div", {
						staticClass: "home__before-lyric",
						style: {
							backgroundImage: "url(".concat(n.beforeLyricBg, ")")
						}
					}), t._v(" "), e(n.compactDisc), t._v(" "), n.showReward ? e("div", {
						staticClass: "home__reward-notice",
						domProps: {
							innerHTML: t._s(n.getI18nWord("index_reward"))
						}
					}) : t._e(), t._v(" "), n.cdk ? e("div", {
						staticClass: "home__cdk-check",
						domProps: {
							innerHTML: t._s(n.getI18nWord("cdk_check_btn"))
						},
						on: {
							click: n.onCdk
						}
					}) : t._e()], 1)])
				}), [], !1, null, "f4466f52", null).exports,
				H = (0, r.defineComponent)({
					__name: "loading",
					setup: function(t) {
						var e = 0;
						return (0, r.onMounted)((function() {
							(0, p.in)(), e = Date.now()
						})), (0, r.onBeforeUnmount)((function() {
							(0, p.sx)("page", "loading_finish", "home_finish", Date.now() - e)
						})), {
							__sfc: !0,
							loadingStart: e,
							onBack: function() {
								(0, p.sx)("Button", "Click", "backstage")
							},
							getI18nWord: p.pp,
							backBtn: C
						}
					}
				}),
				q = (0, w.A)(H, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "loading page"
					}, [e("div", {
						staticClass: "loading__head"
					}, [e("img", {
						staticClass: "loading__head-logo",
						attrs: {
							src: n.getI18nWord("logo")
						}
					}), t._v(" "), e(n.backBtn, {
						staticClass: "loading__head-btn",
						nativeOn: {
							click: function(t) {
								return n.onBack.apply(null, arguments)
							}
						}
					})], 1)])
				}), [], !1, null, "29c9eb71", null),
				Q = q.exports,
				F = n(81323),
				z = n(72822),
				U = (0, r.defineComponent)({
					__name: "loopProgress",
					props: {
						progress: null,
						paused: {
							type: Boolean
						},
						started: {
							type: Boolean
						}
					},
					emits: ["pause", "resume"],
					setup: function(t, e) {
						var n = e.emit,
							r = t;
						return {
							__sfc: !0,
							props: r,
							emits: n,
							getClass: function() {
								return r.started ? r.paused ? "paused" : "resume" : "inactive"
							},
							onClick: function() {
								r.started && (r.paused ? n("resume") : n("pause"))
							}
						}
					}
				}),
				X = (0, w.A)(U, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "loop-progress",
						on: {
							click: n.onClick
						}
					}, [e("div", {
						class: "loop-progress__btn loop-progress__".concat(n.getClass())
					}), t._v(" "), t.started ? e("svg", {
						staticClass: "loop-progress__circle",
						attrs: {
							width: "220px",
							height: "220px",
							viewBox: "0 0 220 220",
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg"
						}
					}, [e("circle", {
						staticClass: "circle-load-svg",
						style: {
							"stroke-dasharray": "".concat(Math.floor(570 * t.progress / 100), " 570")
						},
						attrs: {
							cx: "110",
							cy: "110",
							r: "90",
							"stroke-width": "15",
							stroke: "#D5B27C",
							fill: "none"
						}
					})]) : t._e()])
				}), [], !1, null, "2437aacf", null).exports,
				$ = (0, r.defineComponent)({
					__name: "timeProgress",
					props: {
						consume: null,
						total: null
					},
					setup: function(t) {
						return {
							__sfc: !0,
							getI18nWord: p.pp,
							padStart: p.CF
						}
					}
				}),
				J = (0, w.A)($, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "time-progress"
					}, [t._v("\n  " + t._s(n.getI18nWord({
						key: "timeformate",
						data: {
							m1: n.padStart(Math.floor(t.consume / 60)),
							s1: n.padStart(Math.round(t.consume % 60)),
							m2: n.padStart(Math.floor(t.total / 60)),
							s2: n.padStart(Math.round(t.total % 60))
						}
					})) + "\n")])
				}), [], !1, null, "0cc758cc", null).exports,
				V = (0, r.defineComponent)({
					__name: "recordProgress",
					props: {
						progress: null
					},
					setup: function(t) {
						return {
							__sfc: !0
						}
					}
				}),
				K = (0, w.A)(V, (function() {
					var t = this,
						e = t._self._c;
					return t._self._setupProxy, e("div", {
						staticClass: "record-progress"
					}, [e("div", {
						staticClass: "record-progress__main"
					}, [e("div", {
						staticClass: "record-progress__progress",
						style: {
							width: "".concat(t.progress, "%")
						}
					})])])
				}), [], !1, null, "3e44169c", null).exports,
				Z = n(60093),
				tt = n(38221),
				et = n.n(tt);

			function nt(t) {
				return function(t) {
					if (Array.isArray(t)) return rt(t)
				}(t) || function(t) {
					if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
				}(t) || function(t, e) {
					if (t) {
						if ("string" == typeof t) return rt(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rt(t, e) : void 0
					}
				}(t) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function rt(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var ot = (0, r.defineComponent)({
					__name: "index",
					setup: function(t) {
						var e = (0, f.QN)(),
							o = e.style,
							a = e.effect,
							i = e.changePage2,
							s = e.currentPage,
							c = e.referPage,
							u = (0, f.QQ)(),
							_ = u.divConfig,
							h = u.recordResult,
							g = u.generateConfig,
							b = (0, f.pM)(),
							w = (0, S.bP)(b).showReward,
							C = (0, z.ar)(),
							x = C.emit,
							k = C.rolesInStage,
							L = C.stageStart,
							E = C.paused,
							A = C.pause,
							O = C.resume,
							B = C.progress,
							T = C.reset,
							W = C.recording,
							M = C.recordTime,
							R = C.init,
							j = C.play,
							N = C.roles,
							D = (0, G.b)().getCdk,
							Y = (0, r.ref)(),
							H = (0, r.ref)(-1),
							q = (0, r.ref)(),
							Q = (0, r.ref)(-1),
							U = (0, r.ref)([]),
							$ = (0, r.computed)((function() {
								return H.value > -1 ? H.value : Q.value > -1 ? Q.value : -1
							})),
							V = (0, r.computed)((function() {
								return U.value.filter((function(t) {
									return !N.value.find((function(e) {
										return e.pos === t.pos
									}))
								}))
							})),
							tt = (0, r.computed)((function() {
								return L.value && !E.value
							})),
							rt = (0, r.computed)((function() {
								return N.value.map((function(t) {
									return t.source_id
								}))
							})),
							ot = (0, r.ref)(!1),
							at = (0, r.ref)(!1),
							it = (0, r.ref)(!1),
							st = ht(),
							ct = st.show,
							ut = st.showHand,
							lt = st.clear,
							dt = (0, m.B)().onChannelShare,
							ft = null,
							pt = (0, r.computed)((function() {
								return nt(new Array(15)).map((function(t, e) {
									var r = e + 1;
									return {
										id: P.z$[o.value][r],
										src: n(75918)("./".concat(o.value, "/").concat(r, ".png")),
										active: n(32403)("./".concat(o.value, "/").concat(r, "-1.png"))
									}
								}))
							}));

						function _t() {
							var t = Array.from(document.querySelectorAll(".stage__main-position"));
							U.value = t.map((function(t) {
								var e = t.getBoundingClientRect(),
									n = e.x,
									r = e.y,
									o = e.width,
									a = e.height;
								return {
									pos: +t.dataset.pos,
									x: n,
									y: r,
									width: o,
									height: a,
									control: !1
								}
							}));
							var e = document.querySelector(".stage__main"),
								n = null == e ? void 0 : e.getBoundingClientRect();
							console.log("positions", U.value), n && (ft = {
								x: n.x,
								y: n.y,
								width: n.width,
								height: n.height
							}, console.log(ft))
						}

						function ht() {
							var t = v.storage.get("teachShowed"),
								e = (0, r.ref)(!1);
							return {
								show: e,
								showHand: function() {
									s.value !== l.YW.Stage || t || c.value !== l.YW.Home || (a.value.setDragging(!0), e.value = !0, v.storage.set("teachShowed", !0))
								},
								clear: function() {
									a.value.setDragging(!1), e.value = !1
								}
							}
						}

						function vt() {
							var t = yt();
							if (console.log(M.value, L.value), M.value < 14.5 && L.value)(0, I.y)((0, p.pp)("toast_record_time_inadequate"));
							else {
								if (M.value < 14.5) return (0, I.y)((0, p.pp)("toast_record_time_inadequate")), void x("stopRecord");
								x("stopRecord"), (0, p.sx)("Button", "Click", "record", 2, {
									id: nt(new Set(g.value.map((function(t) {
										return t.source_id
									}))))
								}), gt(t)
							}
						}

						function gt(t) {
							var e = (0, d.V5)({
								methods: {
									preview: function() {
										e.close(), null == t || t.close(), T(), i(l.YW.Preview)
									}
								}
							})
						}

						function mt(t, e, n) {
							return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
						}

						function yt() {
							if (L.value) return (0, p.sx)("Button", "Click", "pause"), A(), (0, d.zJ)(O)
						}
						return (0, r.onBeforeMount)((function() {
							if (console.log("refer", c.value), c.value === l.YW.Preview) {
								var t = _.value,
									e = t.offset,
									n = t.initialRoles;
								e && n && (R(n), A(), h.value && gt((0, d.zJ)(O, {
									closeCb: function() {
										j(e)
									}
								})))
							}
						})), (0, r.onMounted)((function() {
							it.value = v.storage.get("haveShowed"), _t(), c.value === l.YW.Home && v.IS_MOB && !v.storage.get("guidanceShowed") ? ((0, d.hR)({
								closedCb: function() {
									ut()
								}
							}), v.storage.set("guidanceShowed", !0)) : ut(), window.addEventListener("resize", et()(_t, 500))
						})), (0, r.onBeforeUnmount)((function() {
							window.removeEventListener("resize", _t)
						})), (0, r.watch)(H, (function(t) {
							-1 === t ? (a.value.setDragging(!1), at.value = !1) : (a.value.setDragging(!0), it.value || (at.value = !0, it.value = !0, v.storage.set("haveShowed", !0)))
						})), (0, r.watch)((function() {
							var t;
							return null === (t = Y.value) || void 0 === t ? void 0 : t.dragEl
						}), (function(t) {
							if (t) {
								var e = t.dataset,
									n = e.index,
									r = e.id;
								t.style.backgroundImage = "url(".concat(pt.value[n].active, ")"), H.value = +r
							} else H.value = -1
						})), (0, r.watch)((function() {
							var t;
							return null === (t = q.value) || void 0 === t ? void 0 : t.dragEl
						}), (function(t) {
							if (t && Number(t.dataset.id) > -1) {
								a.value.setDragging(!0);
								var e = t.dataset,
									n = e.id,
									r = e.index;
								console.log(n, r), t.style.backgroundImage = "url(".concat(pt.value[P.Hp[o.value][+n] - 1].active, ")"), Q.value = +n
							} else a.value.setDragging(!1), Q.value = -1
						})), (0, r.watch)(Q, (function(t) {
							if (t > 0) {
								var e = k.value.find((function(e) {
									return e.source_id === t
								}));
								if (!e) return;
								x({
									type: l.X2.Stop,
									source_id: e.source_id,
									pos: e.pos
								})
							}
						})), (0, r.watch)(M, (function(t) {
							t >= 60 && W.value && (A(), vt())
						})), (0, r.watch)(L, (function(t, e) {
							e && !t && W.value && vt()
						})), {
							__sfc: !0,
							style: o,
							effect: a,
							changePage2: i,
							currentPage: s,
							referPage: c,
							divConfig: _,
							recordResult: h,
							generateConfig: g,
							cdkStore: b,
							showReward: w,
							emit: x,
							rolesInStage: k,
							stageStart: L,
							paused: E,
							pause: A,
							resume: O,
							progress: B,
							reset: T,
							recording: W,
							recordTime: M,
							init: R,
							play: j,
							roles: N,
							getCdk: D,
							buttonDragRef: Y,
							buttonDraggingId: H,
							positionDragRef: q,
							positionDraggingId: Q,
							positions: U,
							draggindId: $,
							emptyPositions: V,
							playing: tt,
							rolesId: rt,
							hiding: ot,
							showNotice: at,
							haveShowed: it,
							teachShow: ct,
							showTeach: ut,
							clearTeach: lt,
							onChannelShare: dt,
							stagePosition: ft,
							controlBtns: pt,
							getPositions: _t,
							useTeach: ht,
							stopRecord: vt,
							recordFinish: gt,
							DRAG_OPTIONS: {
								remove: !1,
								overlapping: 0,
								targetEl: ".stage__position",
								dragValidDis: 10,
								needSyncOverlapping: !1,
								dragInvalidReset: !0,
								pcCanDragScroll: !1,
								angleLimit: 25
							},
							onDragResult: function(t) {
								var e = t.dataset,
									n = t.event,
									r = e.id;
								if (Object.values(P.z$[o.value]).includes(+r)) {
									var a = n.changedTouches && n.changedTouches[0] ? n.changedTouches[0] : n,
										i = a.clientX,
										s = a.clientY;
									if (mt(ft, i, s)) {
										var c = (0, p.wW)(V.value, {
											x: i,
											y: s
										});
										c && (lt(), x({
											pos: c.pos,
											source_id: +r,
											type: l.X2.Show
										}), (0, p.sx)("Button", "Click", "loop_used", rt.value), console.log(r, "->", c.pos))
									}
								}
							},
							inRect: mt,
							onMuted: function(t) {
								console.log("onmuted", t), x({
									type: t.muted ? l.X2.Unmuted : l.X2.Muted,
									source_id: t.source_id,
									pos: t.pos
								}), (0, p.sx)("Button", "Click", "loop_operation", {
									id: t.source_id,
									operation: 1
								})
							},
							onSolo: function(t) {
								(0, p.sx)("Button", "Click", "loop_operation", {
									id: t.source_id,
									operation: 2
								}), x({
									type: l.X2.Solo,
									source_id: t.source_id,
									pos: t.pos
								})
							},
							onStop: function(t) {
								(0, p.sx)("Button", "Click", "loop_operation", {
									id: t.source_id,
									operation: 3
								}), x({
									type: l.X2.Stop,
									source_id: t.source_id,
									pos: t.pos
								}), (0, p.sx)("Button", "Click", "loop_used", rt.value)
							},
							onReset: function() {
								if (tt.value) {
									(0, p.sx)("Button", "Click", "reset"), A();
									var t = (0, d.zJ)(O);
									(0, d.P1)((function() {
										t.close(), O(), T()
									}))
								}
							},
							onPause: yt,
							onRecord: function() {
								console.log("recording", W.value), tt.value && (W.value ? vt() : (x("startRecord"), (0, p.sx)("Button", "Click", "record", 1)))
							},
							onBack: function() {
								if (!tt.value) return T(), void i(l.YW.Home);
								A();
								var t = (0, d.zJ)(O);
								(0, d.P1)((function() {
									t.close(), O(), T(), i(l.YW.Home)
								}))
							},
							onHide: function() {
								ot.value = !0
							},
							onRule: function() {
								(0, p.sx)("Button", "Click", "event_rules"), (0, d.bY)(2)
							},
							onChannel: function(t, e, n) {
								t === y.I.More ? (0, p.sx)("Button", "Click", "share_recording_backup", "more") : t === y.I.Download ? (0, p.sx)("Button", "Click", "share_recording_backup", "download") : (0, p.sx)("Button", "Click", "share_recording_backup", t), dt(t, {
									img_url: e.img_url,
									title: e.title,
									desc: e.desc,
									url: e.url,
									type: "image"
								}, n.value)
							},
							onReward: function() {
								(0, p.sx)("Button", "Click", "claim_reward"), D()
							},
							MeDraggableList: F.gI,
							getI18nWord: p.pp,
							Page: l.YW,
							loopProgress: X,
							timeProgress: J,
							recordProgress: K,
							IS_MOB: v.IS_MOB,
							ShareChannels: Z.A
						}
					}
				}),
				at = ot,
				it = (0, w.A)(at, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "stage page",
						class: ["stage--".concat(n.playing ? "playing" : "prepare"), "stage__style--".concat(n.style)],
						on: {
							click: n.clearTeach
						}
					}, [n.hiding ? t._e() : e("div", {
						staticClass: "stage__head"
					}, [e("button", {
						staticClass: "stage__btn stage__btn--back",
						on: {
							click: n.onBack
						}
					}), t._v(" "), n.recording && n.currentPage === n.Page.Stage ? e(n.recordProgress, {
						attrs: {
							progress: 100 * n.recordTime / 60
						}
					}) : t._e(), t._v(" "), e("div", {
						staticClass: "stage__btn-container"
					}, [n.currentPage === n.Page.Reveal ? e("button", {
						staticClass: "stage__btn stage__btn--reward",
						on: {
							click: n.onReward
						}
					}) : t._e(), t._v(" "), n.currentPage !== n.Page.Stage || n.recording ? t._e() : e("button", {
						staticClass: "stage__btn stage__btn--rule",
						on: {
							click: n.onRule
						}
					}), t._v(" "), n.recording ? t._e() : e("button", {
						staticClass: "stage__btn stage__btn--reset",
						on: {
							click: n.onReset
						}
					}), t._v(" "), e(n.loopProgress, {
						staticClass: "stage__btn",
						attrs: {
							progress: n.progress,
							paused: n.paused,
							started: n.stageStart
						},
						on: {
							pause: n.onPause,
							resume: n.resume
						}
					})], 1)], 1), t._v(" "), n.hiding && n.currentPage === n.Page.Reveal ? [e("img", {
						staticClass: "stage__logo",
						attrs: {
							src: n.getI18nWord("logo")
						}
					}), t._v(" "), e("img", {
						staticClass: "stage__slogan",
						attrs: {
							src: n.getI18nWord("reveal_slogan")
						},
						on: {
							click: function(t) {
								n.hiding = !1
							}
						}
					})] : t._e(), t._v(" "), e(n.MeDraggableList, t._b({
						ref: "positionDragRef",
						staticClass: "stage__main",
						attrs: {
							"data-drageIndex": n.positionDraggingId,
							zIndex: 200
						},
						on: {
							dragEnd: n.onDragResult
						}
					}, "me-draggable-list", n.DRAG_OPTIONS, !1), t._l(n.rolesInStage, (function(r, o) {
						var a;
						return e("v-touch", {
							key: r.id,
							staticClass: "stage__main-position",
							attrs: {
								"data-pos": r.pos,
								"data-id": r.source_id,
								"data-index": o,
								"data-drag": 1
							},
							on: {
								tap: function(t) {
									n.IS_MOB && r.exist && n.onMuted(r)
								},
								press: function(t) {
									n.IS_MOB && r.exist && n.onSolo(r)
								}
							}
						}, [r.exist ? [e("div", {
							class: {
								"stage__loop-controls": !0, "stage__loop-controls--control": null === (a = n.positions[r.pos]) || void 0 === a ? void 0 : a.control
							}
						}, [e("button", {
							staticClass: "stage__loop-btn stage__loop-btn--muted",
							class: {
								"stage__loop-btn--unmuted": !r.muted
							},
							on: {
								click: function(t) {
									return t.stopPropagation(), n.onMuted(r)
								}
							}
						}), t._v(" "), e("button", {
							staticClass: "stage__loop-btn stage__loop-btn--solo",
							class: {
								"stage__loop-btn--unsolo": !r.solo
							},
							on: {
								click: function(t) {
									return t.stopPropagation(), n.onSolo(r)
								}
							}
						}), t._v(" "), e("button", {
							staticClass: "stage__loop-btn stage__loop-btn--stop",
							on: {
								click: function(t) {
									return t.stopPropagation(), n.onStop(r)
								}
							}
						})]), t._v(" "), 100 !== r.progress ? e("div", {
							staticClass: "stage__loop-prepare"
						}, [e("div", {
							staticClass: "stage__loop-prepare-progress",
							style: {
								width: "".concat(r.progress, "%")
							}
						})]) : t._e()] : t._e()], 2)
					})), 1), t._v(" "), n.teachShow ? e("div", {
						staticClass: "stage__teach"
					}, [e("div", {
						staticClass: "stage__teach-arrow"
					}), t._v(" "), e("div", {
						staticClass: "stage__teach-hand"
					}), t._v(" "), e("div", {
						staticClass: "stage__teach-control",
						style: {
							backgroundImage: "url(".concat(n.controlBtns[3].active, ")")
						}
					})]) : t._e(), t._v(" "), e(n.MeDraggableList, t._b({
						ref: "buttonDragRef",
						staticClass: "stage__control",
						attrs: {
							"data-drageIndex": n.buttonDraggingId,
							zIndex: 200
						},
						on: {
							dragEnd: n.onDragResult
						}
					}, "me-draggable-list", n.DRAG_OPTIONS, !1), t._l(n.controlBtns, (function(t, r) {
						return e("button", {
							key: t.id,
							staticClass: "stage__control-btn",
							class: {
								"stage__control-btn--disable": n.rolesInStage.find((function(e) {
									return e.source_id === t.id
								}))
							},
							style: {
								backgroundImage: "url(".concat(t.src, ")"),
								opacity: n.draggindId === t.id ? 0 : 1,
								visibility: n.teachShow && 3 === r ? "hidden" : "visible"
							},
							attrs: {
								"data-index": r,
								"data-id": t.id,
								"data-target-el": ".stage__position",
								"data-item": t,
								"data-drag": 1
							}
						})
					})), 0), t._v(" "), n.showNotice ? e("div", {
						staticClass: "stage__notice",
						domProps: {
							innerHTML: t._s(n.getI18nWord("div_notice"))
						}
					}) : t._e(), t._v(" "), n.showNotice ? e("div", {
						staticClass: "stage__mask"
					}) : t._e(), t._v(" "), n.currentPage === n.Page.Stage ? e("div", {
						staticClass: "stage__record"
					}, [e("div", {
						staticClass: "stage__record-btn-wrapper",
						on: {
							click: n.onRecord
						}
					}, [e("div", {
						staticClass: "stage__record-btn",
						class: {
							"stage__record-btn--recording": n.recording
						}
					}), t._v(" "), e("div", {
						staticClass: "stage__record-btn-center"
					})]), t._v(" "), e("div", {
						staticClass: "stage__record-reward-text"
					}, [e("div", {
						domProps: {
							innerHTML: t._s(n.getI18nWord("diy_record_notice"))
						}
					}), t._v(" "), !n.recording && n.showReward ? e("div", {
						domProps: {
							innerHTML: t._s(n.getI18nWord("diy_record_reward"))
						}
					}) : t._e()]), t._v(" "), n.recording ? e(n.timeProgress, {
						attrs: {
							consume: n.recordTime,
							total: 60
						}
					}) : t._e()], 1) : t._e(), t._v(" "), n.currentPage !== n.Page.Reveal || n.hiding ? t._e() : e("div", {
						staticClass: "stage__hide",
						on: {
							click: n.onHide
						}
					}, [e("div", {
						staticClass: "stage__hide-notice"
					}, [e("div", {
						staticClass: "stage__hide-notice-text",
						domProps: {
							innerHTML: t._s(n.getI18nWord("expose_notice"))
						}
					}), t._v(" "), e(n.ShareChannels, {
						on: {
							channel: n.onChannel
						}
					})], 1)])], 2)
				}), [], !1, null, "ca4c7a0e", null),
				st = it.exports,
				ct = (0, r.defineComponent)({
					__name: "empty",
					setup: function(t) {
						return {
							__sfc: !0
						}
					}
				}),
				ut = (0, w.A)(ct, (function() {
					var t = this._self._c;
					return this._self._setupProxy, t("div", {
						staticClass: "empty"
					})
				}), [], !1, null, "5959bf74", null).exports,
				lt = n(66045),
				dt = n.n(lt),
				ft = n(62904),
				pt = n(52139);

			function _t(t) {
				return _t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _t(t)
			}

			function ht() {
				ht = function() {
					return e
				};
				var t, e = {},
					n = Object.prototype,
					r = n.hasOwnProperty,
					o = Object.defineProperty || function(t, e, n) {
						t[e] = n.value
					},
					a = "function" == typeof Symbol ? Symbol : {},
					i = a.iterator || "@@iterator",
					s = a.asyncIterator || "@@asyncIterator",
					c = a.toStringTag || "@@toStringTag";

				function u(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					u({}, "")
				} catch (t) {
					u = function(t, e, n) {
						return t[e] = n
					}
				}

				function l(t, e, n, r) {
					var a = e && e.prototype instanceof g ? e : g,
						i = Object.create(a.prototype),
						s = new A(r || []);
					return o(i, "_invoke", {
						value: P(t, n, s)
					}), i
				}

				function d(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				e.wrap = l;
				var f = "suspendedStart",
					p = "suspendedYield",
					_ = "executing",
					h = "completed",
					v = {};

				function g() {}

				function m() {}

				function y() {}
				var b = {};
				u(b, i, (function() {
					return this
				}));
				var w = Object.getPrototypeOf,
					C = w && w(w(O([])));
				C && C !== n && r.call(C, i) && (b = C);
				var x = y.prototype = g.prototype = Object.create(b);

				function k(t) {
					["next", "throw", "return"].forEach((function(e) {
						u(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function S(t, e) {
					function n(o, a, i, s) {
						var c = d(t[o], t, a);
						if ("throw" !== c.type) {
							var u = c.arg,
								l = u.value;
							return l && "object" == _t(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
								n("next", t, i, s)
							}), (function(t) {
								n("throw", t, i, s)
							})) : e.resolve(l).then((function(t) {
								u.value = t, i(u)
							}), (function(t) {
								return n("throw", t, i, s)
							}))
						}
						s(c.arg)
					}
					var a;
					o(this, "_invoke", {
						value: function(t, r) {
							function o() {
								return new e((function(e, o) {
									n(t, r, e, o)
								}))
							}
							return a = a ? a.then(o, o) : o()
						}
					})
				}

				function P(e, n, r) {
					var o = f;
					return function(a, i) {
						if (o === _) throw new Error("Generator is already running");
						if (o === h) {
							if ("throw" === a) throw i;
							return {
								value: t,
								done: !0
							}
						}
						for (r.method = a, r.arg = i;;) {
							var s = r.delegate;
							if (s) {
								var c = I(s, r);
								if (c) {
									if (c === v) continue;
									return c
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (o === f) throw o = h, r.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							o = _;
							var u = d(e, n, r);
							if ("normal" === u.type) {
								if (o = r.done ? h : p, u.arg === v) continue;
								return {
									value: u.arg,
									done: r.done
								}
							}
							"throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
						}
					}
				}

				function I(e, n) {
					var r = n.method,
						o = e.iterator[r];
					if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, I(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
					var a = d(o, e.iterator, n.arg);
					if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, v;
					var i = a.arg;
					return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
				}

				function L(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function E(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function A(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(L, this), this.reset(!0)
				}

				function O(e) {
					if (e || "" === e) {
						var n = e[i];
						if (n) return n.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								a = function n() {
									for (; ++o < e.length;)
										if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
									return n.value = t, n.done = !0, n
								};
							return a.next = a
						}
					}
					throw new TypeError(_t(e) + " is not iterable")
				}
				return m.prototype = y, o(x, "constructor", {
					value: y,
					configurable: !0
				}), o(y, "constructor", {
					value: m,
					configurable: !0
				}), m.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
				}, e.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(x), t
				}, e.awrap = function(t) {
					return {
						__await: t
					}
				}, k(S.prototype), u(S.prototype, s, (function() {
					return this
				})), e.AsyncIterator = S, e.async = function(t, n, r, o, a) {
					void 0 === a && (a = Promise);
					var i = new S(l(t, n, r, o), a);
					return e.isGeneratorFunction(n) ? i : i.next().then((function(t) {
						return t.done ? t.value : i.next()
					}))
				}, k(x), u(x, c, "Generator"), u(x, i, (function() {
					return this
				})), u(x, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(t) {
					var e = Object(t),
						n = [];
					for (var r in e) n.push(r);
					return n.reverse(),
						function t() {
							for (; n.length;) {
								var r = n.pop();
								if (r in e) return t.value = r, t.done = !1, t
							}
							return t.done = !0, t
						}
				}, e.values = O, A.prototype = {
					constructor: A,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
							for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var n = this;

						function o(r, o) {
							return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var i = this.tryEntries[a],
								s = i.completion;
							if ("root" === i.tryLoc) return o("end");
							if (i.tryLoc <= this.prev) {
								var c = r.call(i, "catchLoc"),
									u = r.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var o = this.tryEntries[n];
							if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var a = o;
								break
							}
						}
						a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
						var i = a ? a.completion : {};
						return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(i)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), v
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									E(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, n, r) {
						return this.delegate = {
							iterator: O(e),
							resultName: n,
							nextLoc: r
						}, "next" === this.method && (this.arg = t), v
					}
				}, e
			}

			function vt(t, e, n, r, o, a, i) {
				try {
					var s = t[a](i),
						c = s.value
				} catch (t) {
					return void n(t)
				}
				s.done ? e(c) : Promise.resolve(c).then(r, o)
			}

			function gt(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(r, o) {
						var a = t.apply(e, n);

						function i(t) {
							vt(a, r, o, i, s, "next", t)
						}

						function s(t) {
							vt(a, r, o, i, s, "throw", t)
						}
						i(void 0)
					}))
				}
			}
			var mt = (0, r.defineComponent)({
					__name: "preview",
					setup: function(t) {
						var e = (0, z.z5)(),
							n = e.time,
							o = e.atPause,
							a = (0, z.Z3)(),
							i = (0, f.pM)(),
							s = (0, S.bP)(i).showReward,
							c = (0, f.QN)(),
							u = c.changePage2,
							_ = c.currentPage,
							h = c.style,
							v = (0, f.QQ)(),
							g = v.getResultId,
							m = v.recordResult,
							y = m.value,
							b = (0, z.ar)(),
							w = b.init,
							C = b.emit,
							x = b.pause,
							k = b.resume,
							P = b.reset,
							L = b.play,
							E = (0, r.ref)(0),
							A = (0, r.computed)((function() {
								return Math.min(y.total, n.value - E.value)
							})),
							O = (0, r.computed)((function() {
								return A.value >= y.total
							})),
							B = (0, r.ref)(_.value === l.YW.Guest),
							T = !1,
							W = [];

						function M() {
							R(), j()
						}

						function R() {
							var t = y.initialState;
							w((0, pt.A)(t))
						}

						function j() {
							T = !0;
							var t = y.loopTimeBeforeRecord,
								e = y.startTime;
							L(e - t), o && k(), E.value = n.value, N()
						}

						function N() {
							var t = y.actions,
								e = y.startTime;
							console.log("start", y), W = t.map((function(t) {
								return console.log("action", t, t.start - e), a((function() {
									C(t)
								}), t.start - e)
							}))
						}

						function G() {
							return D.apply(this, arguments)
						}

						function D() {
							return (D = gt(ht().mark((function t() {
								var e, n;
								return ht().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return e = !o.value, x(), t.prev = 2, (0, p.sx)("Button", "Click", "share_preview"), t.next = 6, g();
										case 6:
											n = t.sent, (0, d.mS)({
												dialogInfo: {
													id: n
												},
												closedCb: function() {
													e && k()
												}
											}), t.next = 13;
											break;
										case 10:
											t.prev = 10, t.t0 = t.catch(2), console.log(t.t0);
										case 13:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 10]
								])
							})))).apply(this, arguments)
						}

						function Y() {
							return (Y = gt(ht().mark((function t() {
								return ht().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (_.value !== l.YW.Preview) {
												t.next = 5;
												break
											}
											return t.next = 3, G();
										case 3:
											t.next = 8;
											break;
										case 5:
											(0, p.sx)("Button", "Click", "copy_recording_link"), dt()({
												text: window.location.href
											}), (0, I.y)((0, p.pp)("toast_copy"));
										case 8:
										case "end":
											return t.stop()
									}
								}), t)
							})))).apply(this, arguments)
						}

						function H() {
							W.forEach((function(t) {
								null == t || t()
							})), W = []
						}
						return (0, r.onMounted)((function() {
							console.log(y), l.YW.Preview === _.value ? M() : l.YW.Guest === _.value && (h.value = y.style, R(), x())
						})), (0, r.watch)(O, (function(t) {
							t && x()
						})), {
							__sfc: !0,
							time: n,
							atPause: o,
							timeout: a,
							indexStore: i,
							showReward: s,
							changePage2: u,
							currentPage: _,
							style: h,
							getResultId: g,
							recordResult: m,
							props: y,
							init: w,
							emit: C,
							stagePause: x,
							stageResume: k,
							reset: P,
							play: L,
							playStartTime: E,
							consume: A,
							finished: O,
							showLead: B,
							started: T,
							clearTimers: W,
							onBack: function() {
								P(), H(), u(l.YW.Stage)
							},
							run: M,
							initStage: R,
							startPlay: j,
							executeActions: N,
							onPause: function() {
								x()
							},
							onResume: function() {
								T ? O.value ? (P(), M()) : k() : j()
							},
							onPreviewShare: G,
							onShare: function() {
								return Y.apply(this, arguments)
							},
							onHome: function() {
								P(), H(), (0, p.sx)("Button", "Click", "enter_diy"), u(l.YW.Home)
							},
							clearActions: H,
							onStart: function() {
								B.value = !1, T || j()
							},
							getI18nWord: p.pp,
							timeProgress: J,
							loopProgress: X,
							recordProgress: K,
							Page: l.YW,
							gramophone: ft.A
						}
					}
				}),
				yt = mt,
				bt = (0, w.A)(yt, (function() {
					var t = this,
						e = t._self._c,
						r = t._self._setupProxy;
					return e("div", {
						staticClass: "page preview",
						class: {
							guest: r.currentPage === r.Page.Guest
						}
					}, [r.currentPage === r.Page.Preview ? e("div", {
						staticClass: "preview__head"
					}, [e("img", {
						staticClass: "preview__logo",
						attrs: {
							src: r.getI18nWord("logo")
						}
					}), t._v(" "), e("button", {
						staticClass: "preview__btn preview__btn--back",
						on: {
							click: r.onBack
						}
					}), t._v(" "), e(r.recordProgress, {
						staticClass: "preview__record",
						attrs: {
							progress: 100 * r.consume / r.props.total
						}
					}), t._v(" "), e(r.timeProgress, {
						staticClass: "preview__time",
						attrs: {
							total: r.props.total / 1e3,
							consume: r.consume / 1e3
						}
					}), t._v(" "), e(r.loopProgress, {
						staticClass: "preview__loop",
						attrs: {
							started: !0,
							progress: 100 * r.consume / r.props.total,
							paused: r.atPause
						},
						on: {
							pause: r.onPause,
							resume: r.onResume
						}
					})], 1) : t._e(), t._v(" "), r.currentPage === r.Page.Guest ? e("div", {
						staticClass: "guest__head"
					}, [e("img", {
						staticClass: "preview__logo",
						attrs: {
							src: r.getI18nWord("logo")
						}
					}), t._v(" "), e("img", {
						staticClass: "guest__slogan",
						attrs: {
							src: r.getI18nWord("reveal_slogan")
						}
					}), t._v(" "), e("img", {
						staticClass: "guest__reward",
						attrs: {
							src: n(68601),
							alt: ""
						}
					}), t._v(" "), e("div", {
						staticClass: "guest__home-btn",
						domProps: {
							innerHTML: t._s(r.getI18nWord("guest_back_btn"))
						},
						on: {
							click: r.onHome
						}
					}), t._v(" "), e(r.recordProgress, {
						staticClass: "guest__record",
						attrs: {
							progress: 100 * r.consume / r.props.total
						}
					}), t._v(" "), e(r.timeProgress, {
						staticClass: "guest__time",
						attrs: {
							total: r.props.total / 1e3,
							consume: r.consume / 1e3
						}
					}), t._v(" "), e(r.loopProgress, {
						staticClass: "guest__loop",
						attrs: {
							started: !0,
							progress: 100 * r.consume / r.props.total,
							paused: r.atPause
						},
						on: {
							pause: r.onPause,
							resume: r.onResume
						}
					})], 1) : t._e(), t._v(" "), r.showLead ? e("div", {
						staticClass: "guest__lead-wrapper",
						on: {
							click: r.onStart
						}
					}, [e("div", {
						staticClass: "guest__lead"
					})]) : t._e(), t._v(" "), e("div", {
						staticClass: "preview__gramophone"
					}, [e("div", {
						staticClass: "preview__gramophone-text",
						domProps: {
							innerHTML: t._s(r.currentPage === r.Page.Preview ? r.getI18nWord("preview_notice") : r.getI18nWord("guest_notice"))
						}
					}), t._v(" "), e("div", {
						staticClass: "preview__gramophone-bottom"
					}), t._v(" "), e("div", {
						staticClass: "preview__gramophone-machine"
					}), t._v(" "), e("div", {
						staticClass: "preview__gramophone-text-bg"
					}), t._v(" "), e("div", {
						staticClass: "preview__gramophone-text-title"
					})]), t._v(" "), e("div", {
						staticClass: "preview__share-btn",
						on: {
							click: r.onShare
						}
					}, [e(r.gramophone, {
						attrs: {
							bg: n(41779)
						}
					}), t._v(" "), e("div", {
						staticClass: "preview__share-icon"
					}), t._v(" "), r.currentPage === r.Page.Preview && r.showReward ? e("div", {
						staticClass: "preview__share-reward"
					}) : t._e()], 1)])
				}), [], !1, null, "726e9d0c", null).exports,
				wt = n(29925),
				Ct = n(49702),
				xt = n.n(Ct),
				kt = n(86585),
				St = ["params", "url"];

			function Pt(t) {
				return Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, Pt(t)
			}

			function It(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Lt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? It(Object(n), !0).forEach((function(e) {
						var r, o, a, i;
						r = t, o = e, a = n[e], i = function(t, e) {
							if ("object" != Pt(t) || !t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(t, "string");
								if ("object" != Pt(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(o), (o = "symbol" == Pt(i) ? i : String(i)) in r ? Object.defineProperty(r, o, {
							value: a,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : r[o] = a
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}
			var Et = (0, r.defineComponent)({
					__name: "index",
					setup: function(t) {
						var e = (0, f.QN)(),
							n = e.effect,
							o = e.effectMainComplete,
							i = e.currentPage;
						(0, A.E)();
						var d = (0, f.pM)(),
							_ = (0, r.computed)((function() {
								return {
									width: s().instance.canvasStateToLayout.width,
									height: s().instance.canvasStateToLayout.height,
									isSea: v.IS_SEA,
									rotate: s().instance.env.rotate
								}
							}));
						!v.IS_SEA || v.IS_BBS || v.IS_PS || (0, c.ky)({
							biz: P.iG,
							lang: (0, p.Xo)()
						});
						var h = new(xt())({
							maxTime: 1e4,
							minTime: 4e3,
							list: wt.P.preloadImgs.map((function(t) {
								return {
									url: t
								}
							}))
						});

						function g() {
							var t = (0, A.E)(),
								e = (0, S.bP)(t).roleInfo,
								n = {
									lang: (0, p.Xo)(),
									game_biz: P.iG
								};
							return e.value.game_uid ? Lt(Lt({}, n), {}, {
								badge_uid: e.value.game_uid,
								badge_region: e.value.region
							}) : n
						}
						return h.open(), kt.pY.interceptors.request.use((function(t) {
							var e = t.params,
								n = void 0 === e ? {} : e,
								r = t.url,
								o = function(t, e) {
									if (null == t) return {};
									var n, r, o = function(t, e) {
										if (null == t) return {};
										var n, r, o = {},
											a = Object.keys(t);
										for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
										return o
									}(t, e);
									if (Object.getOwnPropertySymbols) {
										var a = Object.getOwnPropertySymbols(t);
										for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
									}
									return o
								}(t, St);
							return (v.IS_BBS || v.QS.authkey) && (r = "/game".concat(r)), Lt(Lt({}, o), {}, {
								url: r,
								params: Lt(Lt({}, n), g())
							})
						})), (0, r.onMounted)((function() {
							y.oi && !v.IS_MOB && y.hr && (0, I.y)((0, p.pp)("toast_yxq_pc_wx"))
						})), {
							__sfc: !0,
							effect: n,
							effectMainComplete: o,
							currentPage: i,
							indexStore: d,
							route: function(t) {
								switch (t) {
									case l.YW.Home:
										return Y;
									case l.YW.Loading:
										return Q;
									case l.YW.Stage:
										return st;
									case l.YW.Preview:
									case l.YW.Guest:
										return bt;
									case l.YW.Reveal:
										return st;
									case l.YW.Empty:
										return ut;
									default:
										return Y
								}
							},
							effectOps: _,
							load: h,
							onComplete: function() {
								o()
							},
							onLoading: function() {
								v.IS_BBS || v.QS.authkey || d.getConfig()
							},
							getParams: g,
							Effect: a(),
							showAniErr: u.A
						}
					}
				}),
				At = (0, w.A)(Et, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "page index"
					}, [e(n.Effect, t._b({
						directives: [{
							name: "append-to-element",
							rawName: "v-append-to-element",
							value: "#canvas-bg",
							expression: "'#canvas-bg'"
						}],
						ref: "effect",
						staticClass: "index__effect",
						on: {
							webglError: function(t) {
								return n.showAniErr("webglErr")
							},
							loadError: function(t) {
								return n.showAniErr("loadErr")
							},
							gpuAccDisable: function(t) {
								return n.showAniErr("gpuAccDisable")
							},
							buildMainComplete: n.onComplete,
							buildLoadingComplete: n.onLoading
						}
					}, "Effect", n.effectOps, !1)), t._v(" "), e(n.route(n.currentPage), {
						tag: "component"
					})], 1)
				}), [], !1, null, "4a9f58a9", null).exports
		},
		31634: function(t, e, n) {
			n.d(e, {
				A: function() {
					return c
				}
			});
			var r = n(74061),
				o = n(37844),
				a = n(57566),
				i = n(55656),
				s = (0, r.defineComponent)({
					__name: "cdkModal",
					props: {
						cdk: null,
						title: null
					},
					emits: ["close"],
					setup: function(t, e) {
						return {
							__sfc: !0,
							emits: e.emit,
							onCopy: function() {
								(0, a.sx)("Button", "Click", "copy_cdk")
							},
							cdkBox: o.A,
							getI18nWord: a.pp,
							onGame: i.O9
						}
					}
				}),
				c = (0, n(14486).A)(s, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "cdk-modal"
					}, [e("div", {
						staticClass: "cdk-modal__close",
						on: {
							click: function(t) {
								return n.emits("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "cdk-modal__main"
					}, [e("div", {
						staticClass: "cdk-modal__title",
						domProps: {
							innerHTML: t._s(t.title)
						}
					}), t._v(" "), t.cdk ? e(n.cdkBox, {
						staticClass: "cdk-modal__cdk",
						attrs: {
							cdk: t.cdk
						},
						on: {
							copy: n.onCopy
						}
					}) : t._e(), t._v(" "), e("div", {
						staticClass: "cdk-modal__game",
						domProps: {
							innerHTML: t._s(n.getI18nWord("game_btn"))
						},
						on: {
							click: n.onGame
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "cdk-modal__notice",
						domProps: {
							innerHTML: t._s(n.getI18nWord("cdk_notice"))
						}
					})])
				}), [], !1, null, "55cb3070", null).exports
		},
		62985: function(t, e, n) {
			n.d(e, {
				A: function() {
					return s
				}
			});
			var r = n(74061),
				o = n(57566),
				a = n(29925),
				i = (0, r.defineComponent)({
					__name: "guidanceModal",
					emits: ["close"],
					setup: function(t, e) {
						var n = e.emit,
							i = a.P.PLAYINGS,
							s = (0, r.ref)(0);

						function c() {
							s.value++, s.value >= i.length && (s.value = 0, n("close"))
						}
						return (0, r.onMounted)((function() {
							document.addEventListener("click", c)
						})), (0, r.onBeforeUnmount)((function() {
							document.removeEventListener("click", c)
						})), {
							__sfc: !0,
							PLAYINGS: i,
							playingIndex: s,
							emits: n,
							onClick: c,
							getI18nWord: o.pp
						}
					}
				}),
				s = (0, n(14486).A)(i, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "guidance-modal"
					}, [e("div", {
						staticClass: "guidance-modal__title"
					}, [t._v(t._s(n.getI18nWord("rule_tab2")))]), t._v(" "), e("div", {
						staticClass: "guidance-modal__content"
					}, t._l(n.PLAYINGS, (function(r) {
						return e("div", {
							key: r.img,
							staticClass: "guidance-modal__item",
							class: {
								"guidance-modal__item--active": r.img === n.PLAYINGS[n.playingIndex].img
							}
						}, [e("img", {
							staticClass: "guidance-modal__item-img",
							attrs: {
								src: r.img
							}
						}), t._v(" "), e("div", {
							staticClass: "guidance-modal__item-text",
							domProps: {
								innerHTML: t._s(r.text)
							}
						})])
					})), 0), t._v(" "), e("div", {
						staticClass: "guidance-modal__pagination"
					}, t._l(n.PLAYINGS.length, (function(t) {
						return e("div", {
							key: t,
							staticClass: "guidance-modal__pagination-dot",
							class: {
								"guidance-modal__pagination-dot--active": t - 1 === n.playingIndex
							}
						})
					})), 0), t._v(" "), e("div", {
						staticClass: "guidance-modal__notice"
					}, [t._v(t._s(n.getI18nWord("guidance_notice")))])])
				}), [], !1, null, "cc4f343e", null).exports
		},
		55283: function(t, e, n) {
			n.d(e, {
				A: function() {
					return i
				}
			});
			var r = n(74061),
				o = n(57566),
				a = (0, r.defineComponent)({
					__name: "pauseModal",
					props: {
						resume: null
					},
					emits: ["close"],
					setup: function(t, e) {
						var n = e.emit,
							r = t;
						return {
							__sfc: !0,
							props: r,
							emits: n,
							onResume: function() {
								n("close"), (0, o.sx)("Button", "Click", "continue"), r.resume()
							},
							getI18nWord: o.pp
						}
					}
				}),
				i = (0, n(14486).A)(a, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "pause-modal"
					}, [e("div", {
						staticClass: "pause-modal__resume-icon",
						on: {
							click: n.onResume
						}
					}), t._v(" "), e("div", {
						staticClass: "pause-modal__resume-text"
					}, [t._v(t._s(n.getI18nWord("resume")))])])
				}), [], !1, null, "7aab85dc", null).exports
		},
		50169: function(t, e, n) {
			n.d(e, {
				A: function() {
					return i
				}
			});
			var r = n(74061),
				o = n(57566),
				a = (0, r.defineComponent)({
					__name: "recomfirm",
					emits: ["close", "comfirm"],
					setup: function(t, e) {
						var n = e.emit;
						return {
							__sfc: !0,
							emits: n,
							onComfirm: function() {
								n("comfirm"), n("close")
							},
							getI18nWord: o.pp
						}
					}
				}),
				i = (0, n(14486).A)(a, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "recomfirm"
					}, [e("div", {
						staticClass: "recomfirm__title",
						domProps: {
							innerHTML: t._s(n.getI18nWord("recomfirm_title"))
						}
					}), t._v(" "), e("div", {
						staticClass: "recomfirm__close",
						on: {
							click: function(t) {
								return n.emits("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "recomfirm__content",
						domProps: {
							innerHTML: t._s(n.getI18nWord("recomfirm_content"))
						}
					}), t._v(" "), e("button", {
						staticClass: "recomfirm__btn",
						domProps: {
							innerHTML: t._s(n.getI18nWord("recomfirm_btn"))
						},
						on: {
							click: n.onComfirm
						}
					})])
				}), [], !1, null, "4fa97462", null).exports
		},
		68039: function(t, e, n) {
			n.d(e, {
				A: function() {
					return y
				}
			});
			var r = n(74061),
				o = n(72369),
				a = n(57566),
				i = n(26980),
				s = n(51849),
				c = n(9175),
				u = n(62904),
				l = (0, r.defineComponent)({
					__name: "recordFinishAction",
					props: {
						title: null
					},
					setup: function(t) {
						return {
							__sfc: !0,
							gramophone: u.A
						}
					}
				}),
				d = n(14486),
				f = (0, d.A)(l, (function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "record-finish-action"
					}, [e(t._self._setupProxy.gramophone, {
						attrs: {
							bg: n(98024)
						}
					}), t._v(" "), e("div", {
						staticClass: "record-finish-action__text-bg"
					}), t._v(" "), e("div", {
						staticClass: "record-finish-action-text",
						domProps: {
							innerHTML: t._s(t.title)
						}
					})], 1)
				}), [], !1, null, "3e73e07c", null).exports;

			function p(t) {
				return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, p(t)
			}

			function _() {
				_ = function() {
					return e
				};
				var t, e = {},
					n = Object.prototype,
					r = n.hasOwnProperty,
					o = Object.defineProperty || function(t, e, n) {
						t[e] = n.value
					},
					a = "function" == typeof Symbol ? Symbol : {},
					i = a.iterator || "@@iterator",
					s = a.asyncIterator || "@@asyncIterator",
					c = a.toStringTag || "@@toStringTag";

				function u(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					u({}, "")
				} catch (t) {
					u = function(t, e, n) {
						return t[e] = n
					}
				}

				function l(t, e, n, r) {
					var a = e && e.prototype instanceof y ? e : y,
						i = Object.create(a.prototype),
						s = new B(r || []);
					return o(i, "_invoke", {
						value: L(t, n, s)
					}), i
				}

				function d(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				e.wrap = l;
				var f = "suspendedStart",
					h = "suspendedYield",
					v = "executing",
					g = "completed",
					m = {};

				function y() {}

				function b() {}

				function w() {}
				var C = {};
				u(C, i, (function() {
					return this
				}));
				var x = Object.getPrototypeOf,
					k = x && x(x(T([])));
				k && k !== n && r.call(k, i) && (C = k);
				var S = w.prototype = y.prototype = Object.create(C);

				function P(t) {
					["next", "throw", "return"].forEach((function(e) {
						u(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function I(t, e) {
					function n(o, a, i, s) {
						var c = d(t[o], t, a);
						if ("throw" !== c.type) {
							var u = c.arg,
								l = u.value;
							return l && "object" == p(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
								n("next", t, i, s)
							}), (function(t) {
								n("throw", t, i, s)
							})) : e.resolve(l).then((function(t) {
								u.value = t, i(u)
							}), (function(t) {
								return n("throw", t, i, s)
							}))
						}
						s(c.arg)
					}
					var a;
					o(this, "_invoke", {
						value: function(t, r) {
							function o() {
								return new e((function(e, o) {
									n(t, r, e, o)
								}))
							}
							return a = a ? a.then(o, o) : o()
						}
					})
				}

				function L(e, n, r) {
					var o = f;
					return function(a, i) {
						if (o === v) throw new Error("Generator is already running");
						if (o === g) {
							if ("throw" === a) throw i;
							return {
								value: t,
								done: !0
							}
						}
						for (r.method = a, r.arg = i;;) {
							var s = r.delegate;
							if (s) {
								var c = E(s, r);
								if (c) {
									if (c === m) continue;
									return c
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (o === f) throw o = g, r.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							o = v;
							var u = d(e, n, r);
							if ("normal" === u.type) {
								if (o = r.done ? g : h, u.arg === m) continue;
								return {
									value: u.arg,
									done: r.done
								}
							}
							"throw" === u.type && (o = g, r.method = "throw", r.arg = u.arg)
						}
					}
				}

				function E(e, n) {
					var r = n.method,
						o = e.iterator[r];
					if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, E(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
					var a = d(o, e.iterator, n.arg);
					if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, m;
					var i = a.arg;
					return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
				}

				function A(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function O(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function B(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(A, this), this.reset(!0)
				}

				function T(e) {
					if (e || "" === e) {
						var n = e[i];
						if (n) return n.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								a = function n() {
									for (; ++o < e.length;)
										if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
									return n.value = t, n.done = !0, n
								};
							return a.next = a
						}
					}
					throw new TypeError(p(e) + " is not iterable")
				}
				return b.prototype = w, o(S, "constructor", {
					value: w,
					configurable: !0
				}), o(w, "constructor", {
					value: b,
					configurable: !0
				}), b.displayName = u(w, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
				}, e.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, u(t, c, "GeneratorFunction")), t.prototype = Object.create(S), t
				}, e.awrap = function(t) {
					return {
						__await: t
					}
				}, P(I.prototype), u(I.prototype, s, (function() {
					return this
				})), e.AsyncIterator = I, e.async = function(t, n, r, o, a) {
					void 0 === a && (a = Promise);
					var i = new I(l(t, n, r, o), a);
					return e.isGeneratorFunction(n) ? i : i.next().then((function(t) {
						return t.done ? t.value : i.next()
					}))
				}, P(S), u(S, c, "Generator"), u(S, i, (function() {
					return this
				})), u(S, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(t) {
					var e = Object(t),
						n = [];
					for (var r in e) n.push(r);
					return n.reverse(),
						function t() {
							for (; n.length;) {
								var r = n.pop();
								if (r in e) return t.value = r, t.done = !1, t
							}
							return t.done = !0, t
						}
				}, e.values = T, B.prototype = {
					constructor: B,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
							for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var n = this;

						function o(r, o) {
							return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var i = this.tryEntries[a],
								s = i.completion;
							if ("root" === i.tryLoc) return o("end");
							if (i.tryLoc <= this.prev) {
								var c = r.call(i, "catchLoc"),
									u = r.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var o = this.tryEntries[n];
							if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var a = o;
								break
							}
						}
						a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
						var i = a ? a.completion : {};
						return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), m
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									O(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, n, r) {
						return this.delegate = {
							iterator: T(e),
							resultName: n,
							nextLoc: r
						}, "next" === this.method && (this.arg = t), m
					}
				}, e
			}

			function h(t, e, n, r, o, a, i) {
				try {
					var s = t[a](i),
						c = s.value
				} catch (t) {
					return void n(t)
				}
				s.done ? e(c) : Promise.resolve(c).then(r, o)
			}
			var v = (0, r.defineComponent)({
					__name: "recordFinishModal",
					emits: ["close", "preview"],
					setup: function(t, e) {
						var n = e.emit,
							r = (0, o.pM)(),
							u = (0, o.QQ)().getResultId,
							l = (0, s.bP)(r).showReward;

						function d() {
							var t;
							return t = _().mark((function t() {
								var e;
								return _().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, (0, a.sx)("Button", "Click", "share_recording"), t.next = 4, u();
										case 4:
											e = t.sent, (0, i.compModal)(c.A, {
												dialogInfo: {
													id: e
												}
											}), t.next = 11;
											break;
										case 8:
											t.prev = 8, t.t0 = t.catch(0), console.log(t.t0);
										case 11:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 8]
								])
							})), d = function() {
								var e = this,
									n = arguments;
								return new Promise((function(r, o) {
									var a = t.apply(e, n);

									function i(t) {
										h(a, r, o, i, s, "next", t)
									}

									function s(t) {
										h(a, r, o, i, s, "throw", t)
									}
									i(void 0)
								}))
							}, d.apply(this, arguments)
						}
						return {
							__sfc: !0,
							emits: n,
							indexStore: r,
							getResultId: u,
							showReward: l,
							onShare: function() {
								return d.apply(this, arguments)
							},
							onPreview: function() {
								(0, a.sx)("Button", "Click", "preview"), n("preview")
							},
							getI18nWord: a.pp,
							recordFinishAction: f
						}
					}
				}),
				g = v,
				m = (0, d.A)(g, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "record-finish-modal"
					}, [e("div", {
						staticClass: "record-finish-modal__title"
					}, [t._v(t._s(n.getI18nWord("record_finish_modal")))]), t._v(" "), e("div", {
						staticClass: "record-finish-modal__close",
						on: {
							click: function(t) {
								return n.emits("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "record-finish-modal__main"
					}, [e(n.recordFinishAction, {
						attrs: {
							title: n.getI18nWord("record_finish_preview")
						},
						nativeOn: {
							click: function(t) {
								return n.onPreview.apply(null, arguments)
							}
						}
					}), t._v(" "), e(n.recordFinishAction, {
						attrs: {
							title: n.getI18nWord("record_finish_share")
						},
						nativeOn: {
							click: function(t) {
								return n.onShare.apply(null, arguments)
							}
						}
					})], 1), t._v(" "), n.showReward ? e("div", {
						staticClass: "record-finish-modal__reward"
					}, [e("div", {
						staticClass: "record-finish-modal__reward-text"
					}, [e("div", {
						domProps: {
							innerHTML: t._s(n.getI18nWord("record_finish_share_reward"))
						}
					})])]) : t._e()])
				}), [], !1, null, "01342df2", null),
				y = m.exports
		},
		22095: function(t, e, n) {
			n.d(e, {
				A: function() {
					return d
				}
			});
			var r = n(74061),
				o = n(69514),
				a = n.n(o),
				i = n(57566),
				s = n(29925),
				c = n(55656),
				u = n(74681),
				l = (0, r.defineComponent)({
					__name: "ruleModal",
					props: {
						tab: null
					},
					emits: ["close"],
					setup: function(t, e) {
						var n = e.emit,
							o = t,
							l = (0, r.ref)(o.tab || 1),
							d = (0, r.ref)(null),
							f = (0, r.computed)((function() {
								var t;
								return (null === (t = d.value) || void 0 === t ? void 0 : t.swiper.activeIndex) || 0
							})),
							p = h(),
							_ = {
								direction: "vertical",
								effect: "fade",
								isRotated: a().instance.env.rotate,
								speed: 0,
								mousewheel: !0,
								fadeEffect: {
									crossFade: !0
								}
							};

						function h() {
							if (u.IS_SEA) return (0, i.pp)("rule_content");
							var t = (0, c.Lw)(),
								e = c.bk[t];
							if (!e) return (0, i.pp)("rule_content");
							var n = e.find((function(t) {
								return (0, i.pp)("rule_content_".concat(t))
							}));
							return n ? (0, i.pp)("rule_content_".concat(n)) : (0, i.pp)("rule_content")
						}
						return {
							__sfc: !0,
							props: o,
							emits: n,
							currentTab: l,
							swiperRef: d,
							playingIndex: f,
							ruleContent: p,
							SCROLL_OPS: {
								bar: {
									background: "#6D5142",
									size: ".16rem",
									keepShow: !0
								},
								rail: {
									opacity: 1,
									size: ".16rem",
									background: "#C4BBB0"
								},
								scrollPanel: {
									scrollingX: !1,
									scrollingY: !0
								},
								vuescroll: {
									wheelScrollDuration: 500,
									wheelDirectionReverse: !1,
									checkShifKey: !0
								}
							},
							SWIPER_OPTIONS: _,
							getRuleContent: h,
							onTab: function(t) {
								l.value = t, (0, i.sx)("Button", "Click", "tab", t)
							},
							getI18nWord: i.pp,
							CONFIG: s.P
						}
					}
				}),
				d = (0, n(14486).A)(l, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "rule-modal",
						class: "rule-modal__active".concat(n.currentTab)
					}, [e("div", {
						staticClass: "rule-modal__clock-boy"
					}), t._v(" "), e("div", {
						staticClass: "rule-modal__close",
						on: {
							click: function(t) {
								return n.emits("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "rule-modal__gramophone"
					}), t._v(" "), e("div", {
						staticClass: "rule-modal__bottom-bg"
					}), t._v(" "), e("div", {
						staticClass: "rule-modal__main"
					}, [1 === n.currentTab ? e("MeScroll", {
						attrs: {
							ops: n.SCROLL_OPS
						}
					}, [e("div", {
						staticClass: "rule-modal__content",
						domProps: {
							innerHTML: t._s(n.ruleContent)
						}
					})]) : t._e(), t._v(" "), 2 === n.currentTab ? e("div", {
						staticClass: "rule-modal__content"
					}, [e("swiper", {
						ref: "swiperRef",
						staticClass: "rule-modal__swiper",
						attrs: {
							options: n.SWIPER_OPTIONS
						}
					}, t._l(n.CONFIG.PLAYINGS, (function(n) {
						return e("swiper-slide", {
							key: n.img,
							staticClass: "rule-modal__swiper-item"
						}, [e("img", {
							staticClass: "rule-modal__swiper-img",
							attrs: {
								src: n.img
							}
						}), t._v(" "), e("div", {
							staticClass: "rule-modal__swiper-text",
							domProps: {
								innerHTML: t._s(n.text)
							}
						})])
					})), 1), t._v(" "), e("div", {
						staticClass: "rule-modal__pagination"
					}, t._l(n.CONFIG.PLAYINGS.length, (function(t) {
						return e("div", {
							key: t,
							staticClass: "rule-modal__pagination-dot",
							class: {
								"rule-modal__pagination-dot--active": t - 1 === n.playingIndex
							}
						})
					})), 0)], 1) : t._e()], 1), t._v(" "), e("div", {
						staticClass: "rule-modal__tab rule-modal__tab1",
						class: {
							"rule-modal__tab--active": 1 === n.currentTab
						},
						domProps: {
							innerHTML: t._s(n.getI18nWord("rule_tab1"))
						},
						on: {
							click: function(t) {
								return n.onTab(1)
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "rule-modal__tab rule-modal__tab2",
						class: {
							"rule-modal__tab--active": 2 === n.currentTab
						},
						domProps: {
							innerHTML: t._s(n.getI18nWord("rule_tab2"))
						},
						on: {
							click: function(t) {
								return n.onTab(2)
							}
						}
					})])
				}), [], !1, null, "5448a84b", null).exports
		},
		9175: function(t, e, n) {
			n.d(e, {
				A: function() {
					return M
				}
			});
			var r = n(74061),
				o = n(57566),
				a = n(72369),
				i = n(37844),
				s = n(60093),
				c = n(51849),
				u = n(36735),
				l = n(55656),
				d = n(70622),
				f = n(26980),
				p = n(45027),
				_ = (0, r.defineComponent)({
					__name: "generateModal",
					props: {
						notice: null
					},
					emits: ["close", "success", "fail", "timeout"],
					setup: function(t, e) {
						var n = e.emit,
							i = (0, a.QQ)().videoConfig;
						return (0, r.watch)((function() {
							return i.status
						}), (function(t) {
							t !== p.jE.Start && (t === p.jE.Success ? n("success") : t === p.jE.Fail ? n("fail") : n("timeout"), n("close"))
						}), {
							immediate: !0
						}), {
							__sfc: !0,
							videoConfig: i,
							emits: n,
							getI18nWord: o.pp
						}
					}
				}),
				h = n(14486),
				v = (0, h.A)(_, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "generate-modal"
					}, [e("div", {
						staticClass: "generate-modal__process"
					}, [t._m(0), t._v(" "), e("div", {
						staticClass: "generate-modal__process-text"
					}, [t._v(t._s(n.getI18nWord({
						key: "generate_process",
						data: {
							num: n.videoConfig.progress
						}
					})))])]), t._v(" "), e("div", {
						staticClass: "generate-modal__main"
					}, [e("div", {
						staticClass: "generate-modal__notice",
						domProps: {
							innerHTML: t._s(t.notice)
						}
					})])])
				}), [function() {
					var t = this._self._c;
					return this._self._setupProxy, t("div", {
						staticClass: "generate-modal__geer"
					}, [t("div", {
						staticClass: "generate-modal__geer-inside"
					})])
				}], !1, null, "9742e5ea", null).exports,
				g = n(96127),
				m = n(79118),
				y = n.n(m),
				b = (0, r.defineComponent)({
					__name: "shareImgWidthQrcode",
					props: {
						href: null
					},
					setup: function(t) {
						var e = t,
							n = (0, r.ref)();

						function a() {
							var t;
							return new(y())(n.value, {
								text: null !== (t = e.href) && void 0 !== t ? t : location.href,
								width: 160,
								height: 160,
								colorDark: "#000000",
								colorLight: "#ffffff",
								correctLevel: y().CorrectLevel.Q
							})
						}
						return (0, r.onMounted)((function() {
							a()
						})), {
							__sfc: !0,
							qrcodeEl: n,
							props: e,
							createQrcode: a,
							getI18nWord: o.pp
						}
					}
				}),
				w = (0, h.A)(b, (function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "qrcode-img"
					}, [e("img", {
						staticClass: "qrcode-img__img",
						attrs: {
							src: t._self._setupProxy.getI18nWord("qrcode_img_bg")
						}
					}), t._v(" "), e("div", {
						ref: "qrcodeEl",
						staticClass: "qrcode-img__qrcode"
					})])
				}), [], !1, null, "2382bd80", null).exports,
				C = (0, r.defineComponent)({
					__name: "picShare",
					props: {
						href: null
					},
					setup: function(t) {
						var e = t,
							n = (0, r.ref)();

						function a() {
							var t;
							return new(y())(n.value, {
								text: null !== (t = e.href) && void 0 !== t ? t : location.href,
								width: 160,
								height: 160,
								colorDark: "#000000",
								colorLight: "#ffffff",
								correctLevel: y().CorrectLevel.Q
							})
						}
						return (0, r.onMounted)((function() {
							a()
						})), {
							__sfc: !0,
							qrcodeEl: n,
							props: e,
							createQrcode: a,
							getI18nWord: o.pp
						}
					}
				}),
				x = (0, h.A)(C, (function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "download-img"
					}, [e("img", {
						staticClass: "download-img__img",
						attrs: {
							src: t._self._setupProxy.getI18nWord("with_qrcode_img")
						}
					}), t._v(" "), e("div", {
						ref: "qrcodeEl",
						staticClass: "download-img__qrcode"
					})])
				}), [], !1, null, "82126f4a", null).exports,
				k = n(74681),
				S = n(32805),
				P = n(48335),
				I = n(70018),
				L = n(65623);

			function E(t) {
				return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, E(t)
			}

			function A() {
				A = function() {
					return e
				};
				var t, e = {},
					n = Object.prototype,
					r = n.hasOwnProperty,
					o = Object.defineProperty || function(t, e, n) {
						t[e] = n.value
					},
					a = "function" == typeof Symbol ? Symbol : {},
					i = a.iterator || "@@iterator",
					s = a.asyncIterator || "@@asyncIterator",
					c = a.toStringTag || "@@toStringTag";

				function u(t, e, n) {
					return Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), t[e]
				}
				try {
					u({}, "")
				} catch (t) {
					u = function(t, e, n) {
						return t[e] = n
					}
				}

				function l(t, e, n, r) {
					var a = e && e.prototype instanceof g ? e : g,
						i = Object.create(a.prototype),
						s = new B(r || []);
					return o(i, "_invoke", {
						value: P(t, n, s)
					}), i
				}

				function d(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}
				e.wrap = l;
				var f = "suspendedStart",
					p = "suspendedYield",
					_ = "executing",
					h = "completed",
					v = {};

				function g() {}

				function m() {}

				function y() {}
				var b = {};
				u(b, i, (function() {
					return this
				}));
				var w = Object.getPrototypeOf,
					C = w && w(w(T([])));
				C && C !== n && r.call(C, i) && (b = C);
				var x = y.prototype = g.prototype = Object.create(b);

				function k(t) {
					["next", "throw", "return"].forEach((function(e) {
						u(t, e, (function(t) {
							return this._invoke(e, t)
						}))
					}))
				}

				function S(t, e) {
					function n(o, a, i, s) {
						var c = d(t[o], t, a);
						if ("throw" !== c.type) {
							var u = c.arg,
								l = u.value;
							return l && "object" == E(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
								n("next", t, i, s)
							}), (function(t) {
								n("throw", t, i, s)
							})) : e.resolve(l).then((function(t) {
								u.value = t, i(u)
							}), (function(t) {
								return n("throw", t, i, s)
							}))
						}
						s(c.arg)
					}
					var a;
					o(this, "_invoke", {
						value: function(t, r) {
							function o() {
								return new e((function(e, o) {
									n(t, r, e, o)
								}))
							}
							return a = a ? a.then(o, o) : o()
						}
					})
				}

				function P(e, n, r) {
					var o = f;
					return function(a, i) {
						if (o === _) throw new Error("Generator is already running");
						if (o === h) {
							if ("throw" === a) throw i;
							return {
								value: t,
								done: !0
							}
						}
						for (r.method = a, r.arg = i;;) {
							var s = r.delegate;
							if (s) {
								var c = I(s, r);
								if (c) {
									if (c === v) continue;
									return c
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (o === f) throw o = h, r.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							o = _;
							var u = d(e, n, r);
							if ("normal" === u.type) {
								if (o = r.done ? h : p, u.arg === v) continue;
								return {
									value: u.arg,
									done: r.done
								}
							}
							"throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
						}
					}
				}

				function I(e, n) {
					var r = n.method,
						o = e.iterator[r];
					if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, I(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
					var a = d(o, e.iterator, n.arg);
					if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, v;
					var i = a.arg;
					return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
				}

				function L(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function O(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function B(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(L, this), this.reset(!0)
				}

				function T(e) {
					if (e || "" === e) {
						var n = e[i];
						if (n) return n.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								a = function n() {
									for (; ++o < e.length;)
										if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
									return n.value = t, n.done = !0, n
								};
							return a.next = a
						}
					}
					throw new TypeError(E(e) + " is not iterable")
				}
				return m.prototype = y, o(x, "constructor", {
					value: y,
					configurable: !0
				}), o(y, "constructor", {
					value: m,
					configurable: !0
				}), m.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
				}, e.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(x), t
				}, e.awrap = function(t) {
					return {
						__await: t
					}
				}, k(S.prototype), u(S.prototype, s, (function() {
					return this
				})), e.AsyncIterator = S, e.async = function(t, n, r, o, a) {
					void 0 === a && (a = Promise);
					var i = new S(l(t, n, r, o), a);
					return e.isGeneratorFunction(n) ? i : i.next().then((function(t) {
						return t.done ? t.value : i.next()
					}))
				}, k(x), u(x, c, "Generator"), u(x, i, (function() {
					return this
				})), u(x, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(t) {
					var e = Object(t),
						n = [];
					for (var r in e) n.push(r);
					return n.reverse(),
						function t() {
							for (; n.length;) {
								var r = n.pop();
								if (r in e) return t.value = r, t.done = !1, t
							}
							return t.done = !0, t
						}
				}, e.values = T, B.prototype = {
					constructor: B,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
							for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var n = this;

						function o(r, o) {
							return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var i = this.tryEntries[a],
								s = i.completion;
							if ("root" === i.tryLoc) return o("end");
							if (i.tryLoc <= this.prev) {
								var c = r.call(i, "catchLoc"),
									u = r.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return o(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var o = this.tryEntries[n];
							if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
								var a = o;
								break
							}
						}
						a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
						var i = a ? a.completion : {};
						return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(i)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									O(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, n, r) {
						return this.delegate = {
							iterator: T(e),
							resultName: n,
							nextLoc: r
						}, "next" === this.method && (this.arg = t), v
					}
				}, e
			}

			function O(t, e, n, r, o, a, i) {
				try {
					var s = t[a](i),
						c = s.value
				} catch (t) {
					return void n(t)
				}
				s.done ? e(c) : Promise.resolve(c).then(r, o)
			}

			function B(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(r, o) {
						var a = t.apply(e, n);

						function i(t) {
							O(a, r, o, i, s, "next", t)
						}

						function s(t) {
							O(a, r, o, i, s, "throw", t)
						}
						i(void 0)
					}))
				}
			}
			var T = (0, r.defineComponent)({
					__name: "shareModal",
					props: {
						id: null
					},
					emits: ["close"],
					setup: function(t, e) {
						var n = e.emit,
							_ = t,
							h = (0, a.pM)(),
							m = (0, a.QN)().currentPage,
							y = (0, a.QQ)(),
							b = y.generateVideo,
							C = y.videoConfig,
							E = (0, d.b)().getCdk,
							O = (0, c.bP)(h),
							T = O.cdk,
							W = O.showReward,
							M = O.exportLimit,
							R = O.ignoreError,
							j = $().show,
							N = (0, L.E)(),
							G = (0, u.B)().onChannelShare,
							D = function() {
								var t = B(A().mark((function t(e, n) {
									var r, o = arguments;
									return A().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (r = o.length > 2 && void 0 !== o[2] ? o[2] : 0, T.value) {
													t.next = 3;
													break
												}
												return t.abrupt("return", E(e, n, r));
											case 3:
											case "end":
												return t.stop()
										}
									}), t)
								})));
								return function(e, n) {
									return t.apply(this, arguments)
								}
							}();

						function Y() {
							return (Y = B(A().mark((function t(e, r, a) {
								var i, s, c, u;
								return A().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (_.id ? e === l.I.More ? (0, o.sx)("Button", "Click", "share_more_wizcdk") : e === l.I.Download ? (0, o.sx)("Button", "Click", "sare_pic_wizcdk") : (0, o.sx)("Button", "Click", "share_channel_wizcdk", e, {
													refer: m.value === p.YW.Preview ? 2 : 1
												}) : e === l.I.More ? (0, o.sx)("Button", "Click", "share_more") : e === l.I.Reserve || e === l.I.Download ? (0, o.sx)("Button", "Click", "save_pic") : (0, o.sx)("Button", "Click", "share_channel", e), i = [l.I.Weibo, l.I.Reserve, l.I.Copy, l.I.More].includes(e), s = e === l.I.Wx && (0, l.Lw)() === l.c3.Browser, !_.id || i || k.IS_SEA || s) {
												t.next = 7;
												break
											}
											Q(e, r, a), t.next = 35;
											break;
										case 7:
											if (c = r.img_url, !k.IS_SEA || e !== l.I.Download) {
												t.next = 25;
												break
											}
											return t.next = 11, H((0, o.uU)({
												music_id: _.id
											}));
										case 11:
											if (c = t.sent, !k.IS_BBS || "hoyolab" !== k.QS.utm_source) {
												t.next = 25;
												break
											}
											if (N.checkLogin()) {
												t.next = 15;
												break
											}
											return t.abrupt("return");
										case 15:
											return u = j(), t.prev = 16, t.next = 19, (0, P.Jp)({
												imgBase64: c,
												checkEventLogin: !0,
												isSea: k.IS_SEA,
												game: "hkrpg",
												cache: !1,
												environment: I.cA
											});
										case 19:
											c = t.sent, t.next = 24;
											break;
										case 22:
											t.prev = 22, t.t0 = t.catch(16);
										case 24:
											u();
										case 25:
											if (!k.IS_BBS) {
												t.next = 33;
												break
											}
											if (!_.id || !(i || k.IS_SEA || s)) {
												t.next = 29;
												break
											}
											return t.next = 29, D(void 0, {
												closeCb: function() {
													n("close")
												}
											}, 2e3);
										case 29:
											return t.next = 31, G(e, {
												img_url: c,
												title: r.title,
												desc: r.desc,
												url: r.url,
												type: "image"
											}, a.value);
										case 31:
											t.next = 35;
											break;
										case 33:
											_.id && (i || k.IS_SEA || s) && D(void 0, {
												closeCb: function() {
													n("close")
												}
											}, 2e3), setTimeout((function() {
												G(e, {
													img_url: c,
													title: r.title,
													desc: r.desc,
													url: r.url,
													type: "image"
												}, a.value)
											}), 500);
										case 35:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[16, 22]
								])
							})))).apply(this, arguments)
						}

						function H(t) {
							return q.apply(this, arguments)
						}

						function q() {
							return (q = B(A().mark((function t(e) {
								var n, r;
								return A().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return n = j(), console.log(e), t.next = 4, (0, S.Ay)(x, {
												props: {
													href: e
												}
											});
										case 4:
											return r = t.sent, n(), t.abrupt("return", r);
										case 7:
										case "end":
											return t.stop()
									}
								}), t)
							})))).apply(this, arguments)
						}

						function Q(t, e) {
							return F.apply(this, arguments)
						}

						function F() {
							return F = B(A().mark((function t(e, r) {
								var a, i, s, c, u = arguments;
								return A().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return i = u.length > 2 && void 0 !== u[2] ? u[2] : null, s = e === l.I.Qq, t.prev = 2, t.next = 5, b(s);
										case 5:
											t.next = 11;
											break;
										case 7:
											return t.prev = 7, t.t0 = t.catch(2), R.value && D((0, o.pp)("cdk_queue"), {
												closeCb: function() {
													n("close")
												}
											}), t.abrupt("return");
										case 11:
											if (!M.value) {
												t.next = 14;
												break
											}
											return D((0, o.pp)("cdk_queue"), {
												closeCb: function() {
													n("close")
												}
											}), t.abrupt("return");
										case 14:
											if (!(C.videoUrl && !s || C.audioUrl && s)) {
												t.next = 17;
												break
											}
											return U(e, r, i), t.abrupt("return");
										case 17:
											return t.next = 19, z(null !== (a = s ? (0, o.pp)("generate_notice_mp3") : (0, o.pp)("generate_notice")) && void 0 !== a ? a : "");
										case 19:
											if ("success" !== (c = t.sent)) {
												t.next = 24;
												break
											}
											U(e, r, i), t.next = 32;
											break;
										case 24:
											if ("fail" !== c) {
												t.next = 31;
												break
											}
											return (0, g.y)((0, o.pp)("toast_generate_fail")), t.next = 28, (0, o.yy)(2e3);
										case 28:
											R.value && D((0, o.pp)("cdk_queue"), {
												closeCb: function() {
													n("close")
												}
											}), t.next = 32;
											break;
										case 31:
											"timeout" === c && D((0, o.pp)("cdk_queue"), {
												closeCb: function() {
													n("close")
												}
											});
										case 32:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 7]
								])
							}))), F.apply(this, arguments)
						}

						function z(t) {
							return new Promise((function(e) {
								var n, r;
								(0, f.compModal)(v, {
									dialogInfo: {
										notice: t
									},
									methods: {
										success: (r = B(A().mark((function t() {
											return A().wrap((function(t) {
												for (;;) switch (t.prev = t.next) {
													case 0:
														e("success");
													case 1:
													case "end":
														return t.stop()
												}
											}), t)
										}))), function() {
											return r.apply(this, arguments)
										}),
										fail: (n = B(A().mark((function t() {
											return A().wrap((function(t) {
												for (;;) switch (t.prev = t.next) {
													case 0:
														e("fail");
													case 1:
													case "end":
														return t.stop()
												}
											}), t)
										}))), function() {
											return n.apply(this, arguments)
										}),
										timeout: function() {
											e("timeout")
										}
									}
								})
							}))
						}

						function U(t, e) {
							return X.apply(this, arguments)
						}

						function X() {
							return X = B(A().mark((function t(e, r) {
								var a, i = arguments;
								return A().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (a = i.length > 2 && void 0 !== i[2] ? i[2] : null, t.prev = 1, !k.IS_BBS) {
												t.next = 9;
												break
											}
											return t.next = 5, D(void 0, {
												closeCb: function() {
													n("close")
												}
											}, 2e3);
										case 5:
											return t.next = 7, G(e, {
												src: e === l.I.Qq ? C.audioUrl : C.videoUrl,
												export_sign: e === l.I.Qq ? C.audioExportSign : C.exportSign,
												req_id: e === l.I.Qq ? C.audioReqId : C.reqId,
												title: r.title,
												desc: r.desc,
												url: r.url,
												type: "video"
											}, a.value);
										case 7:
											t.next = 11;
											break;
										case 9:
											D(void 0, {
												closeCb: function() {
													n("close")
												}
											}, 2e3), setTimeout((function() {
												G(e, {
													src: e === l.I.Qq ? C.audioUrl : C.videoUrl,
													export_sign: e === l.I.Qq ? C.audioExportSign : C.exportSign,
													req_id: e === l.I.Qq ? C.audioReqId : C.reqId,
													title: r.title,
													desc: r.desc,
													url: r.url,
													type: "video"
												}, a.value)
											}), 500);
										case 11:
											t.next = 17;
											break;
										case 13:
											t.prev = 13, t.t0 = t.catch(1), console.log(t.t0), (0, g.y)((0, o.pp)("toast_share_fail"));
										case 17:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[1, 13]
								])
							}))), X.apply(this, arguments)
						}

						function $() {
							var t = (0, r.getCurrentInstance)(),
								e = null;
							return {
								show: function() {
									return e = t.proxy.$mtoast.loading({
											duration: 0
										}),
										function() {
											null !== e && t.proxy.$mtoast.clear(e)
										}
								}
							}
						}
						return {
							__sfc: !0,
							props: _,
							indexStore: h,
							currentPage: m,
							generateVideo: b,
							videoConfig: C,
							openCdk: E,
							cdk: T,
							showReward: W,
							exportLimit: M,
							ignoreError: R,
							emits: n,
							showLoading: j,
							account: N,
							onChannelShare: G,
							getCdk: D,
							handleChannel: function(t, e, n) {
								return Y.apply(this, arguments)
							},
							onShare: function() {
								D(void 0, {
									closeCb: function() {
										n("close")
									}
								})
							},
							createImgWithQrcode: H,
							shareVideo: Q,
							generating: z,
							generateSuccess: U,
							onCopy: function() {
								(0, o.sx)("Button", "Click", "copy_cdk_wizcdk")
							},
							useLoading: $,
							getI18nWord: o.pp,
							shareLink: o.uU,
							cdkBox: i.A,
							ShareChannels: s.A,
							onGame: l.O9,
							shareImgWidthQrcode: w,
							IS_SEA: k.IS_SEA
						}
					}
				}),
				W = T,
				M = (0, h.A)(W, (function() {
					var t = this,
						e = t._self._c,
						n = t._self._setupProxy;
					return e("div", {
						staticClass: "share-modal",
						class: {
							"share-modal--home": !t.id
						}
					}, [e("div", {
						staticClass: "share-modal__bottom"
					}), t._v(" "), e("div", {
						staticClass: "share-modal__clock-boy"
					}), t._v(" "), e("div", {
						staticClass: "share-modal__gramophone"
					}), t._v(" "), t._m(0), t._v(" "), e("div", {
						staticClass: "share-modal__close",
						on: {
							click: function(t) {
								return n.emits("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "share-modal__main"
					}, [n.IS_SEA ? e(n.shareImgWidthQrcode, {
						attrs: {
							href: n.shareLink({
								music_id: t.id
							})
						}
					}) : e("img", {
						staticClass: "share-modal__img",
						attrs: {
							src: n.getI18nWord("share_img")
						}
					}), t._v(" "), t.id ? e("div", {
						staticClass: "share-modal__cdk"
					}, [n.showReward ? e("div", {
						staticClass: "share-modal__cdk-reward",
						domProps: {
							innerHTML: t._s(n.getI18nWord("share_reward"))
						}
					}) : [n.cdk ? [e("div", {
						staticClass: "share-modal__cdk-text",
						domProps: {
							innerHTML: t._s(n.getI18nWord("cdk_text"))
						}
					}), t._v(" "), e(n.cdkBox, {
						staticClass: "share-modal__cdk-box",
						attrs: {
							cdk: n.cdk
						},
						on: {
							copy: n.onCopy
						}
					})] : e("div", {
						staticClass: "share-modal__cdk-exhaust",
						domProps: {
							innerHTML: t._s(n.getI18nWord("share_cdk_exhaust"))
						}
					}), t._v(" "), e("div", {
						staticClass: "share-modal__cdk-game",
						on: {
							click: n.onGame
						}
					}, [t._v(t._s(n.getI18nWord("game_btn")))])]], 2) : t._e(), t._v(" "), e(n.ShareChannels, {
						attrs: {
							id: t.id
						},
						on: {
							channel: n.handleChannel,
							share: n.onShare
						}
					})], 1)])
				}), [function() {
					var t = this,
						e = t._self._c;
					return t._self._setupProxy, e("div", {
						staticClass: "share-modal__geer"
					}, [e("div", {
						staticClass: "share-modal__geer-big"
					}), t._v(" "), e("div", {
						staticClass: "share-modal__geer-small"
					})])
				}], !1, null, "8b95a064", null).exports
		},
		97468: function(t, e, n) {
			n.d(e, {
				A: function() {
					return c
				}
			});
			var r = n(74061),
				o = n(83249),
				a = n(57566),
				i = n(34329),
				s = (0, r.defineComponent)({
					__name: "ps",
					setup: function(t) {
						return {
							__sfc: !0,
							bgImg: {
								w: 2500,
								h: 1080,
								url: (0, a.pp)("ps_img")
							},
							i18nEnv: o.WO,
							ps: i.A
						}
					}
				}),
				c = (0, n(14486).A)(s, (function() {
					var t = this._self._c,
						e = this._self._setupProxy;
					return t(e.ps, {
						attrs: {
							"bg-img": e.bgImg,
							env: e.i18nEnv,
							useOuterRem: !0,
							"qr-bg": {
								x: 1848,
								y: 729,
								w: 312,
								h: 312
							},
							"qr-img": {
								x: 23,
								y: 23,
								w: 265,
								h: 265
							}
						}
					})
				}), [], !1, null, "08af2221", null).exports
		}
	}
]);