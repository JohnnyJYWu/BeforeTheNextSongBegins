/*! Copyright © 2011 - 2024 miHoYo. All Rights Reserved */ ! function(t, n) {
	"object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.miHoYoAnalysis = n() : t.miHoYoAnalysis = n()
}(window, (function() {
	return function(t) {
		var n = {};

		function e(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
		}
		return e.m = t, e.c = n, e.d = function(t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, {
				enumerable: !0,
				get: r
			})
		}, e.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, e.t = function(t, n) {
			if (1 & n && (t = e(t)), 8 & n) return t;
			if (4 & n && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (e.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & n && "string" != typeof t)
				for (var i in t) e.d(r, i, function(n) {
					return t[n]
				}.bind(null, i));
			return r
		}, e.n = function(t) {
			var n = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function(t, n) {
			return Object.prototype.hasOwnProperty.call(t, n)
		}, e.p = "", e(e.s = 3)
	}([function(t, n) {
		var e = {
			utf8: {
				stringToBytes: function(t) {
					return e.bin.stringToBytes(unescape(encodeURIComponent(t)))
				},
				bytesToString: function(t) {
					return decodeURIComponent(escape(e.bin.bytesToString(t)))
				}
			},
			bin: {
				stringToBytes: function(t) {
					for (var n = [], e = 0; e < t.length; e++) n.push(255 & t.charCodeAt(e));
					return n
				},
				bytesToString: function(t) {
					for (var n = [], e = 0; e < t.length; e++) n.push(String.fromCharCode(t[e]));
					return n.join("")
				}
			}
		};
		t.exports = e
	}, function(t, n, e) {
		var r, i;
		/*!
		 * JavaScript Cookie v2.2.1
		 * https://github.com/js-cookie/js-cookie
		 *
		 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
		 * Released under the MIT license
		 */
		! function(o) {
			if (void 0 === (i = "function" == typeof(r = o) ? r.call(n, e, n, t) : r) || (t.exports = i), !0, t.exports = o(), !!0) {
				var u = window.Cookies,
					a = window.Cookies = o();
				a.noConflict = function() {
					return window.Cookies = u, a
				}
			}
		}((function() {
			function t() {
				for (var t = 0, n = {}; t < arguments.length; t++) {
					var e = arguments[t];
					for (var r in e) n[r] = e[r]
				}
				return n
			}

			function n(t) {
				return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
			}
			return function e(r) {
				function i() {}

				function o(n, e, o) {
					if ("undefined" != typeof document) {
						"number" == typeof(o = t({
							path: "/"
						}, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
						try {
							var u = JSON.stringify(e);
							/^[\{\[]/.test(u) && (e = u)
						} catch (t) {}
						e = r.write ? r.write(e, n) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
						var a = "";
						for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
						return document.cookie = n + "=" + e + a
					}
				}

				function u(t, e) {
					if ("undefined" != typeof document) {
						for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], u = 0; u < o.length; u++) {
							var a = o[u].split("="),
								s = a.slice(1).join("=");
							e || '"' !== s.charAt(0) || (s = s.slice(1, -1));
							try {
								var f = n(a[0]);
								if (s = (r.read || r)(s, f) || n(s), e) try {
									s = JSON.parse(s)
								} catch (t) {}
								if (i[f] = s, t === f) break
							} catch (t) {}
						}
						return t ? i[t] : i
					}
				}
				return i.set = o, i.get = function(t) {
					return u(t, !1)
				}, i.getJSON = function(t) {
					return u(t, !0)
				}, i.remove = function(n, e) {
					o(n, "", t(e, {
						expires: -1
					}))
				}, i.defaults = {}, i.withConverter = e, i
			}((function() {}))
		}))
	}, function(t, n) {
		var e, r;
		e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
			rotl: function(t, n) {
				return t << n | t >>> 32 - n
			},
			rotr: function(t, n) {
				return t << 32 - n | t >>> n
			},
			endian: function(t) {
				if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
				for (var n = 0; n < t.length; n++) t[n] = r.endian(t[n]);
				return t
			},
			randomBytes: function(t) {
				for (var n = []; t > 0; t--) n.push(Math.floor(256 * Math.random()));
				return n
			},
			bytesToWords: function(t) {
				for (var n = [], e = 0, r = 0; e < t.length; e++, r += 8) n[r >>> 5] |= t[e] << 24 - r % 32;
				return n
			},
			wordsToBytes: function(t) {
				for (var n = [], e = 0; e < 32 * t.length; e += 8) n.push(t[e >>> 5] >>> 24 - e % 32 & 255);
				return n
			},
			bytesToHex: function(t) {
				for (var n = [], e = 0; e < t.length; e++) n.push((t[e] >>> 4).toString(16)), n.push((15 & t[e]).toString(16));
				return n.join("")
			},
			hexToBytes: function(t) {
				for (var n = [], e = 0; e < t.length; e += 2) n.push(parseInt(t.substr(e, 2), 16));
				return n
			},
			bytesToBase64: function(t) {
				for (var n = [], r = 0; r < t.length; r += 3)
					for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
				return n.join("")
			},
			base64ToBytes: function(t) {
				t = t.replace(/[^A-Z0-9+\/]/gi, "");
				for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
				return n
			}
		}, t.exports = r
	}, function(t, n, e) {
		"use strict";
		! function(t, n) {
			var e = t();

			function r(t, n, e, r) {
				return l(n - -534, r)
			}

			function i(t, n, e, r) {
				return l(n - 724, r)
			}
			for (;;) try {
				if (565974 === -parseInt(r(0, 38, 0, 51)) / 1 + parseInt(i(0, 1240, 0, 1398)) / 2 + parseInt(r(0, 196, 0, 300)) / 3 * (parseInt(i(0, 1367, 0, 1207)) / 4) + parseInt(i(0, 1492, 0, 1569)) / 5 + -parseInt(r(0, 203, 0, 177)) / 6 * (-parseInt(r(0, 229, 0, 241)) / 7) + -parseInt(i(0, 1378, 0, 1276)) / 8 * (parseInt(r(0, 116, 0, 211)) / 9) + -parseInt(r(0, 76, 0, 46)) / 10) break;
				e.push(e.shift())
			} catch (t) {
				e.push(e.shift())
			}
		}(y);
		var r = {
			value: !0
		};
		Object["defineProp" + u(548, 295, 349, 449)](n, u(583, 295, 575, 441), r);
		var i = Object.assign || function(t) {
				function n(t, n, e, r) {
					return h(t - 345, t, e - 423, n - -807)
				}
				for (var e = 1; e < arguments[o(250, 72, 140, 291)]; e++) {
					var r = arguments[e];
					for (var i in r) Object[n(363, 530, 561)][o(169, 208, 179, 309) + o(362, 156, 230, 242)][o(26, 97, 96, -72)](r, i) && (t[i] = r[i])
				}

				function o(t, n, e, r) {
					return u(t - 25, t, e - 262, e - -219)
				}
				return t
			},
			o = function() {
				function t(t, n, e, r) {
					return u(t - 205, e, e - 233, n - 1094)
				}
				var n = {
					rjlQz: function(t, n) {
						return t < n
					},
					CWeZK: t(1536, 1422, 1518),
					yFdSQ: function(t, n) {
						return t in n
					},
					RfRRr: function(t, n) {
						return t === n
					},
					bCtpe: "zKuiI",
					xvCzE: function(t, n, e) {
						return t(n, e)
					}
				};

				function e(e, r) {
					function i(n, e, r, i) {
						return t(n - 73, e - -1454, n)
					}

					function o(n, e, r, i) {
						return t(n - 0, i - -1386, n)
					}
					for (var u = 0; n.rjlQz(u, r[o(96, 0, 0, 67)]); u++)
						for (var a = n[i(103, -23)][i(-93, -28)]("|"), s = 0;;) {
							switch (a[s++]) {
								case "0":
									n.yFdSQ(i(-10, 92), f) && (f.writable = !0);
									continue;
								case "1":
									Object[o(23, 0, 0, 94) + o(256, 0, 0, 157)](e, f.key, f);
									continue;
								case "2":
									f[o(171, 0, 0, 277) + "le"] = !0;
									continue;
								case "3":
									var f = r[u];
									continue;
								case "4":
									f[o(174, 0, 0, 49)] = f[o(146, 0, 0, 49)] || !1;
									continue
							}
							break
						}
				}
				return function(r, i, o) {
					function u(n, e, r, i) {
						return t(n - 220, e - -534, i)
					}

					function a(n, e, r, i) {
						return t(n - 418, n - -448, r)
					}
					if (n[a(1114, 0, 977)](n[u(1120, 1143, 0, 1079)], n[u(1144, 1143, 0, 1283)])) return i && n.xvCzE(e, r.prototype, i), o && n[a(1220, 0, 1181)](e, r, o), r;
					var s = arguments[_0x22292e];
					for (var f in s) _0x448bd3[u(1095, 942, 0, 1003)]["hasOwnProp" + a(1095, 0, 960)][u(751, 875, 0, 900)](s, f) && (_0x386711[f] = s[f])
				}
			}();

		function u(t, n, e, r) {
			return l(r - -176, n)
		}
		var a = v(e(4)),
			s = v(e(1)),
			f = v(e(5)),
			c = v(e(7));

		function h(t, n, e, r) {
			return l(r - 779, n)
		}

		function l(t, n) {
			var e = y();
			return (l = function(n, r) {
				var i = e[n -= 469];
				if (void 0 === l.KKuelL) {
					var o = function(t) {
						for (var n, e, r = "", i = "", o = 0, u = 0; e = t.charAt(u++); ~e && (n = o % 4 ? 64 * n + e : e, o++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
						for (var a = 0, s = r.length; a < s; a++) i += "%" + ("00" + r.charCodeAt(a).toString(16)).slice(-2);
						return decodeURIComponent(i)
					};
					l.epOzEL = o, t = arguments, l.KKuelL = !0
				}
				var u = e[0],
					a = n + u,
					s = t[a];
				return s ? i = s : (i = l.epOzEL(i), t[a] = i), i
			})(t, n)
		}
		var p = e(13),
			d = e(15);

		function v(t) {
			return t && t[(n = 525, e = 582, h(0, e, 0, n - -871))] ? t : {
				default: t
			};
			var n, e
		}

		function y() {
			var t = ["C3rYAw5NAwz5", "A1P5AuC", "whDyv2q", "Bgjus0q", "B3j5", "B25Ksg0", "tuHxthu", "vhnIz2m", "zgf0yq", "rez3A2m", "ugPyue0", "zfHpuuS", "ChvZAa", "DuffDNK", "D3jPDgfIBgu", "Aw5MBW", "BgvUz3rO", "t3ruEw8", "yxrMDLm", "zc1VCY5OB3LVDG", "CgfNzw5HBwu", "s05wqKm", "sejTtLq", "y29SBgvJDg9YlG", "y0vvENO", "Cgf0Aa", "BML5uuy", "whLyzvu", "D1DkBe4", "zw52AxjVBM1LBG", "Bvn1A1C", "ChvHs3O", "sfPjyKO", "AMvJDf0", "y2XLyxjtDgfZAa", "EuPquxa", "Ag95B3zLCNnLlG", "lNnLyq", "z2v0", "ChjVDg90ExbL", "Dg9VBa", "C2vUza", "uNnVDuq", "zgvMAw5LuhjVCa", "z2v0u2vZC2LVBG", "CMvMzxjYzxi", "q2LSwee", "z0L2AuS", "wuLkqLm", "ugPiwNC", "C3bmyNa", "vxnUwxO", "z2v0sxntzwe", "nZuZmtmYv0XRwxPS", "zgf0yv9IzwXVBG", "AgfZt3DUuhjVCa", "DgvZDa", "Ag95B2XHyI4", "yxv0AgTLEq", "zc5TAwHVEw8UyW", "DxvPza", "BKPxthq", "zxfcA0i", "yMjZqxbW", "DxrTx21LzgL1Bq", "BeTLrKS", "BgfUzW", "AxntDgfZAa", "Dhrkq2G", "C2L6zq", "C2v0uMvXDwvZDa", "Chz2ugq", "tMfTzq", "zLLzy1y", "zK5czMS", "sw5MBW", "u0r3wuO", "mJf8mtz8mJr8ma", "zxzLBNrfEhrYyq", "C2vZC2LVBLn0zq", "quf1Eeu", "mhWZFdr8mtD8mq", "BM93", "Aw5KzxHpzG", "tNfcCvq", "u1HRzuq", "Fdi1FdL8ohWYmG", "u2vYrg4", "BuTbtgW", "DgD3vuW", "CgfNzxvYBa", "mty5mZi4mhrfzNPnyq", "p3rPBwvZDgfTCa", "t2Piuha", "DLj6v0C", "wgXOrxC", "uezXsKu", "mJz8mtL8mtb8mG", "x19LC01VzhvSzq", "BxbHDe8", "Ee52vwG", "uLPtA2K", "BvnbuMS", "Du9iuue", "CgfNzuv4DhjHAq", "C2vH", "zxj0Eq", "z2fTzv91Awq", "BePovKy", "DMfSDwu", "BNfZqu8", "CLfjC0q", "ANngEeG", "EwPHtNa", "x3yY", "ChzqyxjHBxm", "zM9YrwfJAa", "yMPJz04", "tMnts1q", "Cw53y08", "Ce1xr0m", "yMGZtg9NAw5vAq", "CgfNzq", "t05Fu1rfua", "nZmYne1ptKHTCW", "uMzsuNi", "z2v0rxzLBNrjBG", "rKXVzwu", "C1b3zfu", "tenQDfe", "q2fUBM90ignHBa", "mtHet1DfCgK", "swr2DLa", "BLjnqwG", "CY5OB3LVDMvYCW", "mtC4mtuYvxr5EMrN", "ChjVzhvJDgLVBG", "Ec1YCgmTzgv2Aq", "C2vHlG", "DxnLCKv4DhjHAq", "twPmENy", "z2v0ugfNzuLUzG", "DxrTx2LK", "C3rHCNrtDgfZAa", "A2vlyuC", "CK9oB1i", "B3bLBG", "Cg9ZDa", "Bg9N", "yxbPCW", "DxnLCL9PBMzV", "z2v0vxnLCKLUzG", "DvnUCeW", "C2v0", "q0fUBum", "x01jqv9trvntsq", "DMvUDhm", "u1jgCxK", "q29UDgvUDc1nra", "DwvZDeHLywrLCG", "vxnrrvK", "DhLWzq", "mhWXFdj8m3W0", "t3foz3K", "z2v0ugXHDgzVCG", "ywnJB3vUDf9Pza", "vNvL", "Ahr0Chm6lY9Onq", "w29IAMvJDcbpyG", "C0rmuvy", "C2vZC2LVBKLUzG", "Ag9ZDa", "yxv0AgTLEv92zq", "EfvLAgm", "B0LdvMS", "r2PJDNO", "rNDJyve", "ns91CgXVywq", "Aw5ZDgfSBa", "BM5bt3m", "C0X2t0G", "mtf8nNWZ", "zxzLBNrdyxrLzW", "qvv1EK8", "zs5JB20VAduVDq", "Cg9ZDfn0yxnOrq", "zxjZzs5JB20VAa", "yKXABxm", "revfwhG", "zgvMyxvSDa", "sNfIs3y", "rfPvEui", "Eu5YC20", "AfbOwMi", "DhjHy2TfDMvUDa", "CNnPB24", "sfjvsxK", "CgXHDgzVCM0", "t2nQufm", "DvvMuNm", "wxrnwvG", "z2v0ugfYyw1cEq", "BNn0q20", "rhvmALG", "zxzLBNrmAxn0", "m3W0Fdf8mhWY", "Aw9mq1C", "B20VAduVDxbSBW", "z2v0uMvXDwvZDa", "Awv3", "yxbWvMvYC2LVBG", "nZGWwxLbyxPO", "yMHzugy", "zxjYB3i", "vMvYAwzPy2f0Aq", "BMzV", "AgfZvxbKyxrLvq", "Ahr0Chm6lY9Kzq", "nMf4u0fOEa", "z2v0qwnJB3vUDa", "DgHLBG", "Aunitg8", "DxbKyxrLvwLK", "D1vps2i", "rxjIt3O", "s2DSELK", "y29UzMLNDxjHyG", "ohWXn3WXFdD8mq", "AvjfseK", "z2fTzv9IAxO", "DhjHy2TqywDLDG", "EhzdEKu", "uvzXy2m", "yKLPr28", "tgz6Axm", "DMXVzY11CgXVyq", "z2v0rgv2AwnL", "z2v0qwXSugfYyq", "y0jxufO", "ELD0zfy", "yKn0Cgu", "D0vJzu0", "AhjLzG", "z2v0vxvPza", "mJu5nZaZnxPtv3PqsW", "zgv2AwnL", "q3znwfe", "vvrUyKG", "z2fTzv9YzwDPBW", "mJiWntqWnuLAt29rua", "zgv2zwXVCg1LBG", "DMLLDW", "CfPgquK", "D2vIC3rHDgLJlq", "Aw5PDeLUC3rHBG", "zhj0re0", "v2HZwvK", "yLzQrfG", "yMHXAKq", "yxmGysbMDw5JDa", "AxniB3n0u2vH", "z2v0tgfUzW", "D2vIC3rHDgLJlG", "CMvWBgfJzq", "ChvZAfn0yxnO", "B3vdsxG", "ANnSC1i", "D0ncrgW", "z2v0vgLTzq", "tu1wCe8", "tMLft2G", "BwKXog5myw5N", "CenVB2TPzuTLEq", "sgvHzgvYCW", "m3WXnxWXnhW3Fa", "mJr8mJf8nxWYoa", "Bhr1Awq", "B0v4CgLYzxm", "u0DmrMe", "AxniyxnO", "C2vZC2LVBKLKqW", "A3DPDLm", "quz1C2i", "BKTlrKu", "BMvLzfvPza", "vM5ozLa", "A2v5CW", "DxnLqMvHy29U", "Dujxu3i", "m3W0FdeWFde4Fa", "DxrTx3nVDxjJzq", "wwnKAhi", "DgvZDc5Zzwe", "r012Awe", "vgLTzxn0yw1W", "t05Fsuq", "zu1uz1i", "zgv2AwnLx2LK", "yxbWBgLJyxrPBW", "yw5HBhLZAxnwzq", "l2G1l3vWBg9Hza", "CMrNzNe", "BMHQvuO", "y2vFAwq", "mJa1ntmWowm5yG", "z2v0rw52", "C2vZC2LVBKLK", "CMfUzg9Tswq", "zxzLBNrmywjLBa", "z2v0sfruufjLCq", "y2nVDw50Awq", "suDYqxC", "B29RAwvlzxK", "mJv8mtL8mJn8mq", "Cgf0Ag5HBwu", "C2vUzejLywnVBG", "zxzLBNrwywX1zq", "y2fSBa", "AgfZAa", "zK1hEg0", "Fdi3FdiYFdiWFa", "wuDfs2G", "BKLUzM8", "s05bshm", "t21srhO", "v2jeuNq", "z2v0qMGZu2vHqq", "zY11CgXVywqTBW", "BMfTzq", "uLb2u1i", "m3W0Fdj8mhWX", "zxzLBNrby3rPBW", "AwTWvMi", "Dg1zzMG", "C3bSAxq", "zurbCva", "BwLOB3LVlMnVBq", "yxbWx2LK", "Bg9JyxrPB24", "q1DLwKS", "sgvHzgvY", "A2v5", "ndG5nJuYBLfXywvU", "zw51BwvYywjSzq", "DwLK"];
			return (y = function() {
				return t
			})()
		}

		function g(t, n) {
			if (!(t instanceof n)) throw new TypeError(u(0, -141, 0, -51 - -524) + "l a class " + (u(0, 94, 0, 10 - -592) + "ion"))
		}
		var w = function() {
			var t = {
				hPhZb: "9|5|12|26|" + e(1590, 1401, 1582, 1493) + r(192, 154, 118, 213) + r(-194, -173, -203, -93) + "4|2|15|28|" + e(1199, 1515, 1251, 1343) + e(1323, 1140, 1204, 1241) + e(1400, 1555, 1552, 1447),
				nqsAO: r(63, 35, -49, -74),
				fYYcV: "_MIA_SESSI" + r(21, 60, -48, 25),
				mSukW: function(t, n, e) {
					return t(n, e)
				},
				IzsoK: e(1425, 1410, 1479, 1433) + e(1302, 1378, 1345, 1289) + "mihoyo.com" + e(1237, 1118, 1332, 1221),
				CAnmC: "https://lo" + r(-259, -86, -189, -174) + e(1541, 1516, 1299, 1400) + r(-134, -128, 13, 120) + "pload",
				vFWLK: "https://devlog-uploa" + r(-194, -153, -152, -154) + e(1566, 1557, 1471, 1452) + e(1310, 1535, 1392, 1443),
				bIiGo: e(1615, 1389, 1560, 1483) + e(1475, 1528, 1672, 1501) + r(-170, -262, -112, -114) + "om/h5/upload",
				FLoee: e(1136, 1408, 1354, 1306),
				gIviK: r(91, 248, 82, -90) + r(80, 9, -66, 16),
				nnAOs: r(-194, 18, -135, -201),
				fMGxm: r(-187, -285, -114, -54),
				yJPQp: function(t, n) {
					return t < n
				},
				mSARk: function(t, n) {
					return t > n
				},
				oICVk: function(t, n) {
					return t > n
				},
				niyQF: e(1583, 1441, 1436, 1528) + r(-252, -207, -180, -126),
				SGLFa: function(t, n) {
					return t !== n
				},
				iREHI: r(-262, -87, -147, -39),
				DFwkc: "XJftY",
				mpatO: e(1650, 1606, 1612, 1519) + r(-137, 27, -33, -146),
				XwXWd: function(t, n) {
					return t === n
				},
				DyiSU: e(1424, 1261, 1449, 1314),
				XyXeU: e(1444, 1282, 1191, 1288),
				cdwjB: e(1434, 1284, 1491, 1402) + e(1433, 1378, 1385, 1303),
				ttJCh: r(63, 262, 121, 1),
				sLvOH: "-test.",
				kZyiG: e(1493, 1254, 1451, 1322),
				DKMFC: "production",
				YGEKh: "account_id" + r(-3, -89, -57, 80),
				pvvPd: e(1524, 1517, 1264, 1431),
				OcjPS: r(82, 124, 105, 179),
				qnwcO: function(t, n) {
					return t !== n
				},
				NqBqT: r(86, -146, -50, 101) + "d",
				sPwdU: function(t, n) {
					return t > n
				},
				ondHm: function(t, n) {
					return t + n
				},
				bVjDX: function(t, n) {
					return t + n
				},
				spLbp: function(t, n) {
					return t(n)
				},
				tgwUL: "utm_campaign",
				jsFxH: e(1325, 1514, 1262, 1408),
				gQiOH: function(t, n) {
					return t < n
				},
				AyZed: e(1576, 1446, 1271, 1428),
				MMVpO: function(t, n) {
					return t in n
				},
				Tsbgc: function(t, n) {
					return t === n
				},
				JqbKv: r(-269, -168, -205, -356),
				YuJBg: e(1216, 1458, 1223, 1324),
				WbDRt: r(-51, -70, 1, 3) + "r",
				pMWGC: "game_biz",
				dXOQK: function(t, n) {
					return t !== n
				},
				nhjUJ: function(t, n) {
					return t === n
				},
				HZIbJ: function(t, n, e, r) {
					return t(n, e, r)
				},
				fNBfk: function(t, n) {
					return t + n
				},
				uSnpL: r(-237, -135, -79, -248) + "=",
				ouCIx: "&verification=",
				UTnbH: function(t, n) {
					return t > n
				},
				uBWTc: function(t, n) {
					return t !== n
				},
				ErbOz: function(t, n) {
					return t === n
				},
				YtMYX: r(-6, -58, -161, -266),
				Ycdhr: "QVqcc",
				atfvS: e(1454, 1431, 1357, 1403) + e(1307, 1208, 1300, 1224),
				zkGzc: function(t, n) {
					return t(n)
				},
				uOHQA: r(-250, -178, -215, -75),
				IdvvP: function(t, n) {
					return t > n
				},
				rONoR: function(t, n) {
					return t !== n
				},
				CMDOl: function(t, n) {
					return t > n
				},
				pZFAI: function(t, n) {
					return t > n
				},
				eqBkB: function(t, n) {
					return t !== n
				},
				RPvSR: function(t, n) {
					return t !== n
				},
				ikpVb: function(t, n) {
					return t === n
				},
				OmRDz: r(-243, 14, -86, -99),
				AAuxE: function(t, n) {
					return t * n
				},
				lKeFK: function(t, n) {
					return t === n
				},
				drtDM: function(t, n) {
					return t > n
				},
				yNrsm: "bquun",
				wCBDl: r(92, -37, -58, -99),
				WhsYY: function(t, n) {
					return t !== n
				},
				UsnYz: r(93, 84, 99, 222),
				nJWLt: e(1574, 1482, 1580, 1489),
				LARbS: e(1417, 1380, 1303, 1471),
				wEceM: function(t, n) {
					return t !== n
				},
				bhYPf: "POST",
				uAEvy: r(-213, -288, -218, -207) + "n/json",
				SRFqy: function(t, n) {
					return t / n
				},
				uBWSr: "114e9f56fb" + e(1273, 1359, 1061, 1225) + "90bc38fdd7c5",
				lJNVF: "6|16|1|20|" + e(1280, 1314, 1205, 1347) + r(24, -46, 103, 165) + e(1560, 1627, 1507, 1541) + r(42, -67, -85, 52) + "|27|23|11|" + r(43, -149, -74, 85) + "|12|18",
				jDfax: r(123, 216, 80, -24),
				AUuzO: r(59, -187, -54, 2),
				wWJlN: function(t, n) {
					return t + n
				},
				nRMAh: function(t, n) {
					return t + n
				},
				sDLQV: function(t, n, e) {
					return t(n, e)
				},
				RsouD: "[object Ob" + r(-282, -39, -138, -279),
				CvMXQ: function(t, n) {
					return t !== n
				},
				KNAHs: r(-124, 37, 35, -112),
				MHWLu: function(t, n) {
					return t === n
				},
				LCjtQ: "NgrOv",
				nstCm: "dAASF",
				OtTyo: function(t, n) {
					return t === n
				},
				AFusb: r(-100, -166, -183, -164),
				OjHPp: function(t, n) {
					return t > n
				},
				Zsnyz: e(1333, 1194, 1257, 1318),
				ojXrW: e(1285, 1203, 1118, 1226),
				olOdp: "getAccountid",
				fMoYp: e(1246, 1183, 1370, 1247) + "ccountid",
				eMTgR: e(1447, 1636, 1533, 1545),
				bLZms: "getSession" + r(74, -163, -96, -114),
				OqNgy: r(-94, -106, -20, 152) + "o",
				SDwYJ: "getEventInfo",
				xUehc: e(1332, 1600, 1543, 1503) + "ms",
				FwcaQ: e(1309, 1349, 1628, 1460),
				wCkmi: e(1421, 1345, 1386, 1496) + r(205, 76, 38, 200),
				XlhEw: r(134, 18, 51, -58),
				KglzY: e(1461, 1644, 1638, 1474) + r(6, 71, 102, 31),
				uUfRs: "post",
				cBWPZ: e(1259, 1423, 1418, 1409),
				bhqjD: "popStash",
				mKALl: r(-4, 16, -137, -62),
				DEEXx: e(1330, 1513, 1504, 1444),
				rQIsD: "init"
			};

			function n() {
				function i(t, n, e, i) {
					return r(i, n - 204, t - 1050, i - 333)
				}
				var o = t[i(1072, 909, 0, 1225)][u(1242, 952, 975, 1070)]("|");

				function u(t, n, r, i) {
					return e(t - 333, r, r - 115, i - -185)
				}
				for (var s = 0;;) {
					switch (o[s++]) {
						case "0":
							this[u(1357, 0, 1192, 1278)] = (0, d[i(1043, 958, 0, 1188) + "m"])();
							continue;
						case "1":
							this[u(1444, 0, 1356, 1365)] = !1;
							continue;
						case "2":
							this[u(1352, 0, 1054, 1220) + "nfo"] = void 0;
							continue;
						case "3":
							this[i(833, 714, 0, 968) + "rsion"] = "v2";
							continue;
						case "4":
							var f = {};
							f[u(1249, 0, 1305, 1263) + "ory"] = t[i(989, 1139, 0, 1016)], f[i(865, 928, 0, 825) + "n"] = i(1130, 994, 0, 994), f[i(842, 709, 0, 990)] = "", f[u(1221, 0, 893, 1052)] = "", this[i(994, 1009, 0, 1154)] = f;
							continue;
						case "5":
							this.app_id = "";
							continue;
						case "6":
							this[u(1142, 0, 1137, 1160) + i(1151, 1217, 0, 1232)] = t[i(952, 832, 0, 974)];
							continue;
						case "7":
							this[i(1095, 1002, 0, 1131) + "id"] = !1;
							continue;
						case "8":
							this.game_uid = "";
							continue;
						case "9":
							t[u(1217, 0, 1068, 1111)](g, this, n);
							continue;
						case "10":
							this[u(1225, 0, 1264, 1101)] = void 0;
							continue;
						case "11":
							this[i(1159, 1328, 0, 1178) + i(846, 926, 0, 1006)] = i(1034, 872, 0, 988) + i(829, 828, 0, 742);
							continue;
						case "12":
							this.data_belong = "";
							continue;
						case "13":
							this.uuid = a[i(1068, 907, 0, 1016)][i(1122, 1085, 0, 1274)]() || "";
							continue;
						case "14":
							this.pageExtrainfo = void 0;
							continue;
						case "15":
							this["eventExtra" + i(894, 1008, 0, 772)] = void 0;
							continue;
						case "16":
							this.eventList = [];
							continue;
						case "17":
							this[i(1127, 1170, 0, 1008) + "n"] = "";
							continue;
						case "18":
							this.pageurl = void 0;
							continue;
						case "19":
							this[i(942, 926, 0, 915)] = void 0;
							continue;
						case "20":
							this[i(1139, 1273, 0, 1191)] = this[i(931, 787, 0, 864)]();
							continue;
						case "21":
							var c = {};
							c[i(1015, 1079, 0, 1053)] = t.IzsoK, c["production" + u(972, 0, 1213, 1118)] = t.CAnmC, c[i(935, 1079, 0, 1042)] = i(1096, 1064, 0, 1053) + "vlog-uploa" + i(938, 957, 0, 850) + i(1086, 1216, 0, 1186) + "ad", c[i(1171, 1267, 0, 1268)] = t.vFWLK, c[u(1182, 0, 1363, 1331) + "t"] = t[u(1335, 0, 1195, 1314)], this[u(1177, 0, 1293, 1230)] = c;
							continue;
						case "22":
							this.environment = this.getEnv();
							continue;
						case "23":
							this[i(831, 911, 0, 899)] = "";
							continue;
						case "24":
							this.isStash = !1;
							continue;
						case "25":
							this[i(1040, 1031, 0, 1006)] = t[u(1172, 0, 1121, 1208)];
							continue;
						case "26":
							this.lang = "";
							continue;
						case "27":
							this[u(1406, 0, 1226, 1326)] = (0, d.getDevice)();
							continue;
						case "28":
							this[u(1432, 0, 1364, 1368)] = !1;
							continue
					}
					break
				}
			}

			function e(t, n, e, r) {
				return h(0, n, 0, r - -32)
			}

			function r(t, n, e, r) {
				return h(0, t, 0, e - -1469)
			}
			return t.HZIbJ(o, n, [{
				key: t.Zsnyz,
				value: function() {
					var n = window.location[i(794, 794, 835, 712)],
						r = [t[i(527, 670, 602, 558)], t[i(710, 802, 807, 677)], t[i(587, 597, 473, 621)]];

					function i(t, n, r, i) {
						return e(0, t, 0, n - -643)
					}
					for (var o = 0; t[i(744, 658)](o, r.length); o++)
						if (t.mSARk(n.indexOf(r[o]), -1)) return !0;
					return !1
				}
			}, {
				key: t.ojXrW,
				value: function() {
					function n(t, n, e, i) {
						return r(e, n - 106, n - 665, i - 152)
					}
					var e = window[n(0, 487, 361, 401)][i(1468, 1569, 1544, 1542)];
					if (t[i(1422, 1666, 1547, 1602)](e[i(1579, 1537, 1456, 1522)](t[n(0, 520, 608, 647)]), -1)) {
						if (t[i(1736, 1633, 1651, 1639)](t[n(0, 722, 635, 855)], t[i(1456, 1279, 1382, 1223)])) return "production";
						_0x161d21[n(0, 707, 719, 563)](_0x3bef3d)
					}
					if (t[n(0, 596, 676, 627)](e[n(0, 577, 656, 593)](t[n(0, 593, 662, 641)]), -1)) {
						if (!t[n(0, 496, 433, 639)](t.DyiSU, t[n(0, 521, 574, 583)])) return t.cdwjB;
						_0x2140cc[i(1496, 1471, 1520, 1442)](_0x7658bd)
					}

					function i(t, n, e, i) {
						return r(i, n - 61, e - 1544, i - 445)
					}
					return t.mSARk(e[n(0, 577, 664, 410)]("-sea-test."), -1) ? t[i(0, 1354, 1441, 1610)] : e[n(0, 577, 709, 481)](t[n(0, 674, 671, 820)]) > -1 ? t[n(0, 495, 566, 612)] : t.DKMFC
				}
			}, {
				key: "getLang",
				value: function() {
					function t(t, n, r, i) {
						return e(0, t, 0, r - -1407)
					}

					function n(t, n, r, i) {
						return e(0, i, 0, r - -997)
					}
					return this[n(0, 0, 335, 392)] || s[t(-105, 0, 48)][t(-50, 0, -103)](n(0, 0, 540, 470))
				}
			}, {
				key: t.olOdp,
				value: function() {
					function n(t, n, e, i) {
						return r(e, n - 47, n - 1216, i - 349)
					}

					function e(t, n, e, i) {
						return r(i, n - 229, n - 1097, i - 192)
					}
					return s.default.get(t[e(0, 902, 0, 770)]) || s.default[e(0, 964, 0, 855)](t[n(0, 1116, 944, 961)]) || s.default[e(0, 964, 0, 994)]("ltuid_v2") || s[e(0, 1115, 0, 983)][e(0, 964, 0, 958)](t[n(0, 1243, 1365, 1286)])
				}
			}, {
				key: t.fMoYp,
				value: function() {
					function n(t, n, e, i) {
						return r(n, n - 375, t - 221, i - 417)
					}
					if (!t[(i = 666, o = 816, e(0, i, 0, o - -569))](n(99, -44, 0, 1), n(99, -27, 0, 99))) return s.default[n(88, 17, 0, 93)](t[n(134, 167, 0, 73)]);
					var i, o;
					_0xb28f86[_0x53e0a7] = _0x230b9b[_0xfd4ae7]
				}
			}, {
				key: t[e(0, 1241, 0, 1217)],
				value: function() {
					return t[(n = 488, r = 344, e(0, r, 0, n - -906))](window.location.href.indexOf("#/"), -1);
					var n, r
				}
			}, {
				key: t[r(-12, -143, 16, 9)],
				value: function() {
					if (!this["needSessio" + f(668, 565, 583, 701)]) {
						var n = {};
						return n[a(-257, -266, -199, -234)] = "", n[a(-27, -106, -81, -211) + "p"] = "", n
					}
					var i = s[a(30, 63, 29, -25)][a(-253, -142, -122, -46)](this[f(760, 990, 886, 715) + f(632, 544, 573, 646)]),
						o = s[a(40, -133, 29, -49)][f(540, 774, 644, 719)](this[f(549, 591, 685, 758) + f(884, 809, 878, 821)]);
					!i && (o = 0, i = t[a(0, -205, -155, -272)](t[f(855, 837, 863, 969)](this[a(0, -31, -100, -269)], "_"), (0, p[f(596, 610, 568, 522)])()), s[a(175, 35, 29, 123)][f(879, 656, 759, 688)](this[a(190, 26, 120, 232) + a(-111, -54, -193, -350)], i, {
						expires: this[a(-106, -144, 10, 76) + f(1003, 892, 883, 923)]
					})), !(o = t[f(574, 552, 656, 788)](Number, o)) && (o = 0), o += 1, s[a(42, 40, 29, -38)][f(799, 912, 759, 608)](this[a(-96, -31, -81, -27) + a(114, 133, 112, 133)], o, {
						expires: this[a(-30, 128, 10, -146) + "oExpires"]
					});
					var u = {};

					function a(t, n, r, i) {
						return e(0, n, 0, r - -1426)
					}

					function f(t, n, e, i) {
						return r(i, n - 499, e - 777, i - 497)
					}
					return u[a(0, -236, -199)] = i, u.sessionStep = o, u
				}
			}, {
				key: r(74, -132, -30, -148) + "o",
				value: function() {
					function n(t, n, r, i) {
						return e(0, i, 0, t - -9)
					}
					var r = this[n(1536, 0, 0, 1421)]() ? window[i(1228, 1383, 1268, 1103)][n(1230, 0, 0, 1200)][i(1498, 1574, 1667, 1439)]("#", "") : window[n(1250, 0, 0, 1132)][i(1204, 1236, 1332, 1056)];

					function i(t, n, r, i) {
						return e(0, r, 0, t - -31)
					}
					return {
						app_id: this[i(1227, 1174, 1343, 1333)],
						page_url: this[i(1325, 1203, 1324, 1487)] || r,
						page_name: this[n(1277, 0, 0, 1393)] || r,
						page_fullurl: window[n(1250, 0, 0, 1379)][i(1477, 1343, 1609, 1628)],
						utm_source: (0, p[n(1458, 0, 0, 1437) + n(1329, 0, 0, 1467)])(n(1547, 0, 0, 1522)),
						utm_medium: (0, p["getParamBy" + i(1307, 1199, 1450, 1350)])(i(1299, 1202, 1247, 1216)),
						utm_campaign: (0, p["getParamBy" + n(1329, 0, 0, 1469)])(t[n(1346, 0, 0, 1500)]),
						utm_id: (0, p[i(1436, 1360, 1503, 1335) + n(1329, 0, 0, 1470)])(t[i(1347, 1303, 1191, 1485)]),
						document_referrer: document[i(1280, 1273, 1337, 1425)],
						extra_info: this.pageExtrainfo
					}
				}
			}, {
				key: t[r(-160, 115, -8, -50)],
				value: function() {
					function n(t, n, r, i) {
						return e(0, r, 0, t - -382)
					}

					function r(t, n, r, i) {
						return e(0, r, 0, n - -934)
					}
					if (t[n(891, 0, 1059)](t[r(0, 522, 412)], n(850, 0, 695))) return {
						lang: this[r(0, 593, 675)]() || "",
						platform: this.platform,
						device: this[n(1129, 0, 1247)],
						auth_key: ((0, p[r(0, 533, 370) + n(956, 0, 1080)])(t.YuJBg) || "").replace(/\s/g, "+"),
						authkey_ver: (0, p[n(1085, 0, 1195) + n(956, 0, 890)])(t[n(864, 0, 854)]),
						game_biz: (0, p[n(1085, 0, 1158) + "Name"])(t[n(1004, 0, 919)]) || "",
						account_id: this[r(0, 551, 697) + "id"]() || "",
						bh3_sea_account_id: this["getBh3SeaA" + n(849, 0, 926)](),
						game_uid: this.game_uid,
						game_region: this[r(0, 580, 679) + "n"],
						uuid: this[n(944, 0, 1052)],
						device_id: this[r(0, 284, 150)],
						extra_info: this[r(0, 471, 463) + n(1099, 0, 1230)]
					};
					for (var i = 0; t.gQiOH(i, _0x190bf7[n(900, 0, 989)]); i++)
						for (var o = t.AyZed[n(873, 0, 902)]("|"), u = 0;;) {
							switch (o[u++]) {
								case "0":
									var a = _0x2df600[i];
									continue;
								case "1":
									a[n(882, 0, 761)] = a[r(0, 330, 441)] || !1;
									continue;
								case "2":
									a.configurable = !0;
									continue;
								case "3":
									t[n(1153, 0, 1301)](n(993, 0, 1135), a) && (a[n(898, 0, 1056)] = !0);
									continue;
								case "4":
									_0x29d6c0[r(0, 375, 236) + r(0, 438, 347)](_0x23dbc4, a[n(880, 0, 764)], a);
									continue
							}
							break
						}
				}
			}, {
				key: t[r(-230, -34, -95, -131)],
				value: function() {
					function n(t, n, e, i) {
						return r(t, n - 193, e - 304, i - 261)
					}

					function e(t, n, e, i) {
						return r(n, n - 48, e - -117, i - 205)
					}
					var o = t.oICVk(arguments[n(248, -7, 149, 23)], 0) && t.dXOQK(arguments[0], void 0) ? arguments[0] : {},
						u = o[e(0, 47, -106, -130) + e(0, -279, -284, -175)],
						a = o[e(0, -300, -302, -234) + "n"],
						s = o[n(-14, 257, 96, 246)],
						f = o.eventValue,
						c = o.extraInfo,
						h = t[e(0, -468, -331, -275)](c, void 0) ? {} : c,
						l = {
							eventCategory: u,
							eventAction: a,
							eventLabel: s,
							eventValue: f,
							timestamp: (new Date)[n(513, 229, 401, 275)](),
							extra_info: t[n(31, 293, 165, 21)](i, {}, this["eventExtra" + e(0, -412, -273, -217)] || {}, h)
						};
					return l
				}
			}, {
				key: t[r(-150, 2, 2, -117)],
				value: function() {
					function n(t, n, e, i) {
						return r(i, n - 279, e - 1095, i - 3)
					}
					var e = {
							fDwGd: function(n, e) {
								return t[(r = -270, i = -168, l(i - -761, r))](n, e);
								var r, i
							},
							mRpsU: t[n(0, 920, 1076, 1238)],
							nKKFE: t.ouCIx,
							RZSki: function(e, r) {
								return t[(i = 202, o = 40, u = 329, n(0, o - 201, i - -969, u))](e, r);
								var i, o, u
							},
							SerDn: n(0, 1137, 1061, 1166) + n(0, 716, 882, 719),
							PFqJE: function(n, e) {
								return t.uBWTc(n, e)
							},
							CilXA: "mmSEK",
							keKaG: function(e, r) {
								return t[(i = 393, o = 124, u = 266, n(0, o - 236, u - -882, i))](e, r);
								var i, o, u
							},
							DuLjX: t[o(1727, 1726, 1591, 1758)],
							Lfzis: t[o(1699, 1699, 1682, 1596)],
							UsQEY: function(t, n) {
								return t(n)
							}
						},
						i = this;

					function o(t, n, e, i) {
						return r(t, n - 146, e - 1562, i - 214)
					}
					var u = t[n(0, 1107, 1098, 1153)](arguments.length, 0) && void 0 !== arguments[0] ? arguments[0] : {},
						a = this[o(1320, 1487, 1435, 1406) + n(0, 844, 999, 876)](),
						s = a[o(1374, 1302, 1352, 1237)],
						f = a[o(1435, 1370, 1470, 1481) + "p"],
						c = {
							page_info: this.getPageInfo(),
							user_info: this.getUserInfo(),
							event_info: this[n(0, 878, 1050, 1097) + "fo"](u),
							type: this[o(1638, 1557, 1552, 1580)],
							data_belong: this[o(1308, 1321, 1445, 1584) + "g"],
							mia_session_id: s,
							mia_session_step: f,
							analysis_version: this["analysisVe" + n(0, 977, 1119, 1172)]
						};
					return new Promise((function(t) {
						function r(t, e, r, i) {
							return n(0, e - 404, e - -1331, i)
						}

						function u(t, n, e, r) {
							return o(t, n - 13, r - -761, r - 82)
						}
						var a = {
							yenNC: function(t, n) {
								return e.fDwGd(t, n)
							},
							puaKz: function(t, n) {
								return t + n
							},
							Gjcvz: function(t, n) {
								return t + n
							},
							qnmzw: e.mRpsU,
							axYOq: e[r(0, -124, 0, -75)],
							iCHLo: function(t, n) {
								return e[(i = 393, o = 544, r(0, i - 699, 0, o))](t, n);
								var i, o
							},
							NcSKT: e[u(721, 868, 0, 717)],
							SZvyi: function(t, n) {
								return e[(r = -366, i = -371, u(i, i - 134, 0, r - -1092))](t, n);
								var r, i
							},
							LMCYa: "XwVVm",
							VnNfP: e[r(0, -361, 0, -192)]
						};
						if (i[u(775, 627, 0, 693)] && i[r(0, -344, 0, -383)][u(738, 755, 0, 840)] && !i[u(506, 693, 0, 582)])
							if (e[u(603, 782, 0, 774)](e[r(0, -204, 0, -263)], u(522, 792, 0, 651))) {
								var s = _0x6b632[u(842, 791, 0, 924)],
									f = _0x262a28[r(0, -193, 0, -354) + "on"],
									h = a.yenNC(a[u(641, 667, 0, 661)](a[r(0, -232, 0, -376)](_0x276dd2, a.qnmzw), s), a.axYOq) + f;
								_0x3f9eff[r(0, -437, 0, -602)](h, _0xfad337)
							} else i.bbsApp[r(0, -443, 0, -334) + r(0, -248, 0, -359) + "s"]()[u(723, 883, 0, 850)]((function(n) {
								function e(t, n, e, r) {
									return u(n, n - 343, 0, t - -22)
								}

								function r(t, n, e, r) {
									return u(e, n - 486, 0, t - -719)
								}
								var o = {
									GMvia: function(t, n) {
										return a[(e = 1385, r = 1269, l(r - 529, e))](t, n);
										var e, r
									}
								};
								if (n && n[e(616, 611)] && n[e(616, 569)][a[r(29, 154, -42)]]) {
									if (!a.SZvyi(a.LMCYa, a[e(893, 1017)])) return o[e(901, 1059)](_0x3d92a3[r(-96, -227, -78)][r(153, 298, -12)][r(-6, 120, 5)]("#/"), -1);
									var s = n[e(616, 719)]["x-rpc-devi" + r(-131, -53, -267)];
									i[e(560, 587)] = s, c[e(758, 870)][r(-137, -124, -210)] = s
								}
								t(c)
							}));
						else {
							if (e[u(694, 868, 0, 864)] !== r(0, -175, 0, -16)) return void _0x4d24f0[u(908, 980, 0, 894)](_0x2a42b7);
							e[r(0, -247, 0, -254)](t, c)
						}
					}))
				}
			}, {
				key: t[e(0, 1596, 0, 1442)],
				value: function() {
					function n(t, n, e, i) {
						return r(n, n - 396, e - 1424, i - 432)
					}
					var i = {
						xNvUh: t[o(-329, -345, -457, -445)],
						vRzWG: function(n, e) {
							return t.zkGzc(n, e)
						}
					};

					function o(t, n, r, i) {
						return e(0, t, 0, r - -1741)
					}
					if (t[n(0, 1293, 1372, 1235)](t[n(0, 1494, 1356, 1505)], t[n(0, 1298, 1356, 1308)])) return _0x3840b6.default.get(n(0, 1242, 1374, 1542) + "d");
					var u = arguments[o(-589, 0, -459)] > 0 && t[o(-28, 0, -197)](arguments[0], void 0) ? arguments[0] : "",
						a = t[o(-322, 0, -343)](arguments[n(0, 1265, 1269, 1298)], 1) && t[o(-396, 0, -330)](arguments[1], void 0) ? arguments[1] : "",
						s = t.CMDOl(arguments.length, 2) && t[n(0, 1251, 1264, 1094)](arguments[2], void 0) ? arguments[2] : "",
						f = this,
						c = t[o(-241, 0, -223)](arguments[o(-310, 0, -459)], 3) && t[o(-282, 0, -413)](arguments[3], void 0) ? arguments[3] : "",
						h = t.pZFAI(arguments.length, 4) && t[o(-352, 0, -491)](arguments[4], void 0) ? arguments[4] : {};
					try {
						if (t.ikpVb(n(0, 1366, 1338, 1322), t[n(0, 1378, 1232, 1389)])) {
							var l = {
								eventCategory: u,
								eventAction: a,
								eventLabel: s,
								eventValue: c,
								extraInfo: t[o(-609, 0, -488)](Object[o(-587, 0, -436)].toString.call(h), o(-415, 0, -307) + n(0, 1132, 1286, 1383)) ? h : {}
							};
							this.getAllParams(l)[n(0, 1622, 1473, 1390)]((function(t) {
								function n(t, n, e, r) {
									return o(n, 0, e - 154)
								}
								f[n(-201, -96, -254, -348)] ? f.pushStash(t) : f[n(0, -308, -174)](t)
							}))
						} else {
							if (_0x201521 && _0x4bdadb[n(0, 1349, 1261, 1278)] && _0x50d5e0[n(0, 1369, 1261, 1341)][i.xNvUh]) {
								var p = _0x2df65f[o(-509, 0, -467)][i[o(-247, 0, -375)]];
								_0x41e919[o(-651, 0, -523)] = p, _0x2ad8ee[n(0, 1567, 1403, 1450)][o(-388, 0, -523)] = p
							}
							i[o(-526, 0, -381)](_0x11e29e, _0x13c9d4)
						}
					} catch (t) {
						console[o(-275, 0, -327)](t)
					}
				}
			}, {
				key: t.wCkmi,
				value: function() {
					function n(t, n, e, i) {
						return r(e, n - 351, n - 1460, i - 469)
					}
					var e = {
						eDAqP: function(n, e) {
							return t[(r = 113, i = 10, l(i - -641, r))](n, e);
							var r, i
						},
						DZUyB: function(n, e, r) {
							return t[(i = -408, o = -331, l(i - -957, o))](n, e, r);
							var i, o
						},
						jslsR: function(n, e) {
							return t[(r = 1124, i = 1245, l(i - 646, r))](n, e);
							var r, i
						}
					};

					function i(t, n, e, i) {
						return r(e, n - 184, t - 520, i - 348)
					}
					if (t.lKeFK(n(0, 1570, 1435, 1516), "UKHtV")) {
						var o = this;
						this.eventList[n(0, 1405, 1364, 1385)]((function(t, n) {
							function r(t, n, e, r) {
								return i(t - -367, n - 440, e, r - 136)
							}
							var u, a, s;
							e[(u = -180, a = -56, s = -169, i(a - -395, u - 125, u, s - 477))](n, 10) || e[r(173, 112, 156, 63)](_0x332ba9, (function() {
								var n, e, i;
								o[(n = 1124, e = 1050, i = 1073, r(n - 995, e - 44, i, i - 248))](t)
							}), e[r(248, 189, 326, 188)](n, 100))
						}))
					} else {
						var u = this,
							a = t[i(604, 545, 730, 705)](arguments[i(365, 381, 364, 416)], 0) && t[n(0, 1300, 1299, 1235)](arguments[0], void 0) ? arguments[0] : {};
						try {
							var s = a[i(374, 234, 528, 305)],
								f = a[i(332, 343, 238, 469)];
							s && (this[n(0, 1379, 1266, 1515)] = s), f && (t.dXOQK(t[n(0, 1481, 1544, 1312)], t[n(0, 1556, 1622, 1646)]) ? this[i(369, 218, 493, 523)] = f : this[i(439, 500, 352, 503)] = _0x47e5c8), this[i(586, 591, 471, 584) + "ms"](this[i(464, 410, 305, 460)])[i(569, 472, 598, 474)]((function(t) {
								function e(t, e, r, i) {
									return n(0, t - -190, r, i - 296)
								}
								u[e(1166, 0, 1209, 1039)] ? u[e(1363, 0, 1310, 1509)](t) : u[e(1246, 0, 1275, 1248)](t)
							}))
						} catch (t) {
							console[i(497, 496, 426, 332)](t)
						}
					}
				}
			}, {
				key: t[r(-101, -216, -76, 27)],
				value: function() {
					function n(t, n, r, i) {
						return e(0, r, 0, t - -1253)
					}

					function r(t, n, r, i) {
						return e(0, t, 0, n - -481)
					}
					if (t[r(1007, 1041)](t[n(64, 0, 196)], t[r(903, 846)]))
						for (var i = t.LARbS[n(2, 0, 77)]("|"), o = 0;;) {
							switch (i[o++]) {
								case "0":
									this[r(994, 892)] = u;
									continue;
								case "1":
									var u = s[n(12, 0, -35)],
										a = s.region;
									continue;
								case "2":
									this.game_region = a;
									continue;
								case "3":
									var s = t.CMDOl(arguments[n(29, 0, 11)], 0) && t[n(254, 0, 118)](arguments[0], void 0) ? arguments[0] : {};
									continue;
								case "4":
									this[r(1065, 1001) + "id"] = !0;
									continue
							}
							break
						} else {
							var f = arguments[r(867, 801)] > 1 && arguments[1] !== _0x27c50e ? arguments[1] : {},
								c = new this,
								h = {};
							h.Vue = _0x228c1, (0, _0x345b95[r(1041, 1039) + "ce"])(c, _0x5e6dc9(h, f))
						}
				}
			}, {
				key: t[e(0, 1602, 0, 1491)],
				value: function(n) {
					function i(t, n, e, i) {
						return r(n, n - 140, t - 1128, i - 185)
					}

					function o(t, n, r, i) {
						return e(0, i, 0, t - 143)
					}
					if (t[i(1022, 1058, 0, 897)](o(1605, 0, 0, 1640), o(1605, 0, 0, 1472))) {
						var u = t[i(1169, 1243, 0, 1142)],
							a = t[o(1422, 0, 0, 1501)],
							s = (0, f.default)(n),
							h = {};
						h[o(1570, 0, 0, 1537)] = a;
						var l = new Blob([n], h)[i(1026, 939, 0, 965)],
							p = t[o(1439, 0, 0, 1487)](parseInt, t[o(1566, 0, 0, 1733)](Date[i(1039, 1140, 0, 944)](), 1e3), 10),
							d = t[o(1697, 0, 0, 1586)],
							v = (0, c[o(1598, 0, 0, 1498)])([u, s, a, l, p, d].join("\n")),
							y = {};
						return y["Content-Type"] = a, y[i(1115, 1163, 0, 1003) + "5"] = s, y[i(1251, 1414, 0, 1409)] = p, y.Verification = v, y
					}
					_0x4b233e[o(1557, 0, 0, 1470)](_0x451939)
				}
			}, {
				key: t[r(-64, -91, 28, 86)],
				value: function() {
					function n(t, n, e, i) {
						return r(e, n - 34, n - -52, i - 271)
					}
					var i = arguments[n(0, -207, -244, -103)] > 0 && t[n(0, -239, -307, -220)](arguments[0], void 0) ? arguments[0] : {};

					function o(t, n, r, i) {
						return e(0, n, 0, i - -1393)
					}
					try {
						var u = this[o(0, -5, 0, 22)][this[o(0, -228, 0, -98) + "t"]];
						if (!u) return;
						var a = JSON[n(0, -223, -112, -315)](i),
							s = this[o(0, 191, 0, 81) + o(0, 187, 0, 146)](a);
						if (this[o(0, 3, 0, 160)])
							if (t[o(0, 136, 0, 56)] === t[o(0, 144, 0, 56)]) {
								var f = s[n(0, 71, -33, 234)],
									c = s[n(0, -9, 66, 45) + "on"],
									h = t[o(0, 14, 0, -99)](t[o(0, 57, 0, 6)](t[o(0, -47, 0, 6)](u, t[n(0, -71, 44, -35)]), f) + t[n(0, 42, 103, 140)], c);
								navigator[n(0, -253, -403, -312)](h, a)
							} else
								for (var l = t[o(0, -12, 0, -19)].split("|"), p = 0;;) {
									switch (l[p++]) {
										case "0":
											this.game_uid = "";
											continue;
										case "1":
											this.data_belong = "";
											continue;
										case "2":
											this[o(0, 229, 0, 153) + n(0, -256, -88, -397)] = o(0, 159, 0, 28) + n(0, -273, -327, -404);
											continue;
										case "3":
											this[n(0, 25, 154, 89) + "n"] = "";
											continue;
										case "4":
											this[o(0, 266, 0, 157)] = !1;
											continue;
										case "5":
											this[n(0, -271, -200, -172)] = "";
											continue;
										case "6":
											t[n(0, -193, -191, -56)](_0x438347, this, _0x4675a0);
											continue;
										case "7":
											this[n(0, -133, -52, -281)] = _0x2fc117;
											continue;
										case "8":
											this[n(0, 64, 197, 112)] = !1;
											continue;
										case "9":
											this[o(0, -92, 0, -49) + o(0, -254, 0, -112)] = _0xde7d3d;
											continue;
										case "10":
											this[o(0, 199, 0, 133)] = this.getIsSea();
											continue;
										case "11":
											this[o(0, 178, 0, 70)] = (0, _0x51fc67.getPlatform)();
											continue;
										case "12":
											this[n(0, -144, -276, -220) + "pCookieKey"] = t.fYYcV;
											continue;
										case "13":
											this[n(0, -163, -63, -156)] = _0x3af5cf[o(0, 118, 0, 62)][n(0, 20, -149, 152)]() || "";
											continue;
										case "14":
											this.pagename = _0x3e09f9;
											continue;
										case "15":
											var d = {};
											d["eventCateg" + o(0, -43, 0, -123)] = t[o(0, 44, 0, -17)], d[o(0, -137, 0, -141) + "n"] = t.jDfax, d[n(0, -260, -214, -230)] = "", d.eventValue = "", this[n(0, -108, -252, -252)] = d;
											continue;
										case "16":
											this[o(0, -291, 0, -135)] = "";
											continue;
										case "17":
											this[o(0, 167, 0, 89) + "id"] = !1;
											continue;
										case "18":
											this[o(0, -311, 0, -173) + "rsion"] = "v2";
											continue;
										case "19":
											this[o(0, -192, 0, -98) + "t"] = this[n(0, -263, -104, -210)]();
											continue;
										case "20":
											this[o(0, -118, 0, -61)] = "";
											continue;
										case "21":
											this[n(0, -160, -246, -320)] = _0x4d8856;
											continue;
										case "22":
											var v = {};
											v[o(0, 53, 0, 9)] = o(0, -85, 0, 40) + o(0, 9, 0, -104) + o(0, -112, 0, -136) + n(0, -268, -429, -261), v[n(0, -87, -253, -237) + ".sea"] = t[o(0, 39, 0, 27)], v.test = t[o(0, 83, 0, 106)], v[n(0, 69, 229, 234)] = o(0, -80, 0, 90) + n(0, 12, 23, -50) + n(0, -204, -72, -94) + n(0, -37, 123, -149) + "5/upload", v.development = t.bIiGo, this[o(0, 153, 0, 22)] = v;
											continue;
										case "23":
											this[n(0, -156, -16, -249)] = !1;
											continue;
										case "24":
											this[n(0, -62, 17, 103)] = t.FLoee;
											continue;
										case "25":
											this[o(0, -78, 0, 12) + "nfo"] = _0xe234d2;
											continue;
										case "26":
											this[o(0, -18, 0, 118)] = (0, _0x4e54ac[n(0, 13, -119, -94)])();
											continue;
										case "27":
											this[n(0, -19, 48, -134)] = [];
											continue;
										case "28":
											this[o(0, 111, 0, -23) + n(0, -8, -178, 59)] = _0x32266b;
											continue
									}
									break
								} else {
									var y = new XMLHttpRequest;
									y.withCredentials = !0, y[n(0, -77, -2, -234)](t[o(0, 255, 0, 85)], u, !0), Object[n(0, 63, -107, 219)](s)[o(0, 13, 0, -11)]((function(t) {
										var e, r, i, o, u;
										y[(i = 444, o = 563, u = 352, n(0, i - 597, o, u - 61) + (e = -478, r = -619, n(0, e - -250, r, r - 325)))](t, s[t])
									})), y[n(0, -182, -121, -269)](a)
								}
					} catch (t) {
						console[o(0, -45, 0, 86)](t)
					}
				}
			}, {
				key: "postStashE" + r(153, -105, -15, 18),
				value: function() {
					var n = {
						MjLzv: function(t, n) {
							return t > n
						},
						zWtdV: function(n, e, r) {
							return t[(i = -310, o = -163, l(i - -998, o))](n, e, r);
							var i, o
						},
						CeGLB: function(n, e) {
							return t[(r = 912, i = 837, l(r - 313, i))](n, e);
							var r, i
						}
					};

					function i(t, n, e, i) {
						return r(n, n - 34, i - 982, i - 448)
					}
					var o, u, a = this;
					this[(o = 1036, u = 869, e(0, u, 0, o - -434))][i(0, 803, 0, 927)]((function(t, e) {
						function r(t, n, e, r) {
							return i(0, e, 0, t - 637)
						}
						n[r(1588, 0, 1643)](e, 10) || n[r(1687, 0, 1679)](setTimeout, (function() {
							a.post(t)
						}), n.CeGLB(e, 100))
					}))
				}
			}, {
				key: t[r(91, 104, 67, 109)],
				value: function() {
					var n = {};

					function i(t, n, r, i) {
						return e(0, i, 0, t - -1698)
					}

					function o(t, n, e, i) {
						return r(i, n - 116, t - -96, i - 494)
					}
					n.kHVMu = function(t, n) {
						return t === n
					}, n[i(-429, 0, 0, -519)] = t[i(-390, 0, 0, -376)];
					var u = n;
					if (t[o(-21, 9, 0, 58)](t[o(-289, -208, 0, -323)], "ioLCW")) {
						var a = {
							eventCategory: _0x15f6e0,
							eventAction: _0x436261,
							eventLabel: _0x10328e,
							eventValue: _0x2f57eb,
							extraInfo: u.kHVMu(_0x243adc[i(-393, 0, 0, -421)].toString[i(-460, 0, 0, -382)](_0x4cc59f), u[i(-429, 0, 0, -435)]) ? _0xf9cddf : {}
						};
						this[o(-30, -113, 0, -24) + "ms"](a)[o(-47, -65, 0, -129)]((function(t) {
							function n(t, n, e, r) {
								return i(e - 1075, 0, 0, r)
							}
							_0x8dfce0[n(0, 0, 710, 567)] ? _0x4ac7ae[n(0, 0, 907, 830)](t) : _0x168bc8[n(0, 0, 790, 699)](t)
						}))
					} else this.isStash = !0
				}
			}, {
				key: e(0, 1514, 0, 1530),
				value: function(n) {
					function i(t, n, r, i) {
						return e(0, t, 0, i - -1643)
					}

					function o(t, n, e, i) {
						return r(t, n - 473, i - 148, i - 372)
					}
					if (t[o(-103, 141, 0, -17)](t[o(218, 124, 0, 106)], t[i(-21, 0, 0, -175)])) return {
						lang: this.getLang() || "",
						platform: this.platform,
						device: this[i(-70, 0, 0, -132)],
						auth_key: ((0, _0x81cf20["getParamBy" + o(28, 117, 0, 49)])(t.YuJBg) || "")[i(-202, 0, 0, -114)](/\s/g, "+"),
						authkey_ver: (0, _0x53ca80[i(-217, 0, 0, -176) + "Name"])("authkey_ver"),
						game_biz: (0, _0x413318[i(-64, 0, 0, -176) + "Name"])(i(0, 0, 0, -148)) || "",
						account_id: this[o(134, 128, 0, 196) + "id"]() || "",
						bh3_sea_account_id: this[i(-278, 0, 0, -396) + o(37, 88, 0, -58)](),
						game_uid: this.game_uid,
						game_region: this[o(234, 75, 0, 225) + "n"],
						uuid: this.uuid,
						device_id: this[o(-80, -212, 0, -71)],
						extra_info: this[o(80, 114, 0, 116) + "nfo"]
					};
					this[o(313, 10, 0, 181)][o(7, -25, 0, -11)](n)
				}
			}, {
				key: t[e(0, 1662, 0, 1524)],
				value: function() {
					function n(t, n, r, i) {
						return e(0, i, 0, n - -1323)
					}
					this[n(135, 10, -137, 69)] = !1, t[n(-54, -40, 12, 75)](this[n(281, 147, 256, 295)].length, 0) || (this[n(174, 128, 82, 116) + n(234, 99, -47, 35)](), this[n(0, -23, 0, -59)]())
				}
			}, {
				key: t[r(-166, -34, -83, 14)],
				value: function() {
					function n(t, n, r, i) {
						return e(0, t, 0, r - -1476)
					}
					t.AFusb !== t[n(90, 0, 72)] ? this.pagename = _0x266aab : this[n(-95, 0, -6)] = []
				}
			}], [{
				key: t[r(136, -54, 17, -140)],
				value: function(n) {
					var o = t[f(-363, -344, -271, -461)](arguments[s(1164, 1045, 1184, 1046)], 1) && t[f(-337, -452, -227, -174)](arguments[1], void 0) ? arguments[1] : {},
						u = new this,
						a = {};

					function s(t, n, r, i) {
						return e(0, n, 0, i - -236)
					}

					function f(t, n, e, i) {
						return r(i, n - 163, t - -285, i - 205)
					}
					a[f(-290, -242, 0, -263)] = n, (0, p[f(-202, -333, 0, -296) + "ce"])(u, i(a, o))
				}
			}, {
				key: t[e(0, 1242, 0, 1377)],
				value: function() {
					function n(t, n, e, i) {
						return r(e, n - 340, i - 729, i - 381)
					}

					function i(t, n, r, i) {
						return e(0, i, 0, r - -1543)
					}
					var o = t[i(0, 0, -30, 135)](arguments[n(0, 585, 637, 574)], 0) && void 0 !== arguments[0] ? arguments[0] : {},
						u = new this;
					return (0, p.initInstance)(u, o)
				}
			}]), n
		}();
		n.default = w
	}, function(t, n, e) {
		var r;
		"undefined" != typeof self && self, t.exports = (r = e(1), function(t) {
			var n = {};

			function e(r) {
				if (n[r]) return n[r].exports;
				var i = n[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
			}
			return e.m = t, e.c = n, e.d = function(t, n, r) {
				e.o(t, n) || Object.defineProperty(t, n, {
					enumerable: !0,
					get: r
				})
			}, e.r = function(t) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}, e.t = function(t, n) {
				if (1 & n && (t = e(t)), 8 & n) return t;
				if (4 & n && "object" == typeof t && t && t.__esModule) return t;
				var r = Object.create(null);
				if (e.r(r), Object.defineProperty(r, "default", {
						enumerable: !0,
						value: t
					}), 2 & n && "string" != typeof t)
					for (var i in t) e.d(r, i, function(n) {
						return t[n]
					}.bind(null, i));
				return r
			}, e.n = function(t) {
				var n = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(n, "a", n), n
			}, e.o = function(t, n) {
				return Object.prototype.hasOwnProperty.call(t, n)
			}, e.p = "", e(e.s = 0)
		}([function(t, n, e) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var r, i = (r = e(1)) && r.__esModule ? r : {
				default: r
			};

			function o(t) {
				if (window.location.host.indexOf(".mihoyo.com") > -1) i.default.set("_MHYUUID", t, {
					domain: ".mihoyo.com",
					path: "/",
					expires: 365
				});
				else if (window.location.host.indexOf(".hoyolab.com") > -1) i.default.set("_MHYUUID", t, {
					domain: ".hoyolab.com",
					path: "/",
					expires: 365
				});
				else {
					var n = window.location.hostname.split(".").slice(-2).join(".");
					i.default.set("_MHYUUID", t, {
						domain: "." + n,
						path: "/",
						expires: 365
					})
				}
			}
			n.default = {
				getVisitorId: function() {
					var t = this;
					return new Promise((function(n) {
						n(t.getUuid())
					}))
				},
				getUuid: function() {
					var t = i.default.get("_MHYUUID");
					return t ? (o(t), t) : (o(t = function() {
						if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
						if (window.crypto && window.crypto.getRandomValues) {
							var t = new Uint8Array(16);
							window.crypto.getRandomValues(t), t[6] &= 15, t[6] |= 64, t[8] &= 63, t[8] |= 128;
							var n = Array.prototype.map.call(t, (function(t) {
								return ("0" + t.toString(16)).slice(-2)
							})).join("");
							return n.substr(0, 8) + "-" + n.substr(8, 4) + "-4" + n.substr(12, 3) + "-" + n.substr(15, 4) + "-" + n.substr(19, 12)
						}
						var e = Date.now();
						return "undefined" != typeof performance && "function" == typeof performance.now && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
							var n = (e + 16 * Math.random()) % 16 | 0;
							return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
						}))
					}()), t)
				}
			}
		}, function(t, n) {
			t.exports = r
		}]).default)
	}, function(t, n, e) {
		var r, i, o, u, a;
		r = e(2), i = e(0).utf8, o = e(6), u = e(0).bin, (a = function(t, n) {
			t.constructor == String ? t = n && "binary" === n.encoding ? u.stringToBytes(t) : i.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
			for (var e = r.bytesToWords(t), s = 8 * t.length, f = 1732584193, c = -271733879, h = -1732584194, l = 271733878, p = 0; p < e.length; p++) e[p] = 16711935 & (e[p] << 8 | e[p] >>> 24) | 4278255360 & (e[p] << 24 | e[p] >>> 8);
			e[s >>> 5] |= 128 << s % 32, e[14 + (s + 64 >>> 9 << 4)] = s;
			var d = a._ff,
				v = a._gg,
				y = a._hh,
				g = a._ii;
			for (p = 0; p < e.length; p += 16) {
				var w = f,
					b = c,
					m = h,
					x = l;
				f = d(f, c, h, l, e[p + 0], 7, -680876936), l = d(l, f, c, h, e[p + 1], 12, -389564586), h = d(h, l, f, c, e[p + 2], 17, 606105819), c = d(c, h, l, f, e[p + 3], 22, -1044525330), f = d(f, c, h, l, e[p + 4], 7, -176418897), l = d(l, f, c, h, e[p + 5], 12, 1200080426), h = d(h, l, f, c, e[p + 6], 17, -1473231341), c = d(c, h, l, f, e[p + 7], 22, -45705983), f = d(f, c, h, l, e[p + 8], 7, 1770035416), l = d(l, f, c, h, e[p + 9], 12, -1958414417), h = d(h, l, f, c, e[p + 10], 17, -42063), c = d(c, h, l, f, e[p + 11], 22, -1990404162), f = d(f, c, h, l, e[p + 12], 7, 1804603682), l = d(l, f, c, h, e[p + 13], 12, -40341101), h = d(h, l, f, c, e[p + 14], 17, -1502002290), f = v(f, c = d(c, h, l, f, e[p + 15], 22, 1236535329), h, l, e[p + 1], 5, -165796510), l = v(l, f, c, h, e[p + 6], 9, -1069501632), h = v(h, l, f, c, e[p + 11], 14, 643717713), c = v(c, h, l, f, e[p + 0], 20, -373897302), f = v(f, c, h, l, e[p + 5], 5, -701558691), l = v(l, f, c, h, e[p + 10], 9, 38016083), h = v(h, l, f, c, e[p + 15], 14, -660478335), c = v(c, h, l, f, e[p + 4], 20, -405537848), f = v(f, c, h, l, e[p + 9], 5, 568446438), l = v(l, f, c, h, e[p + 14], 9, -1019803690), h = v(h, l, f, c, e[p + 3], 14, -187363961), c = v(c, h, l, f, e[p + 8], 20, 1163531501), f = v(f, c, h, l, e[p + 13], 5, -1444681467), l = v(l, f, c, h, e[p + 2], 9, -51403784), h = v(h, l, f, c, e[p + 7], 14, 1735328473), f = y(f, c = v(c, h, l, f, e[p + 12], 20, -1926607734), h, l, e[p + 5], 4, -378558), l = y(l, f, c, h, e[p + 8], 11, -2022574463), h = y(h, l, f, c, e[p + 11], 16, 1839030562), c = y(c, h, l, f, e[p + 14], 23, -35309556), f = y(f, c, h, l, e[p + 1], 4, -1530992060), l = y(l, f, c, h, e[p + 4], 11, 1272893353), h = y(h, l, f, c, e[p + 7], 16, -155497632), c = y(c, h, l, f, e[p + 10], 23, -1094730640), f = y(f, c, h, l, e[p + 13], 4, 681279174), l = y(l, f, c, h, e[p + 0], 11, -358537222), h = y(h, l, f, c, e[p + 3], 16, -722521979), c = y(c, h, l, f, e[p + 6], 23, 76029189), f = y(f, c, h, l, e[p + 9], 4, -640364487), l = y(l, f, c, h, e[p + 12], 11, -421815835), h = y(h, l, f, c, e[p + 15], 16, 530742520), f = g(f, c = y(c, h, l, f, e[p + 2], 23, -995338651), h, l, e[p + 0], 6, -198630844), l = g(l, f, c, h, e[p + 7], 10, 1126891415), h = g(h, l, f, c, e[p + 14], 15, -1416354905), c = g(c, h, l, f, e[p + 5], 21, -57434055), f = g(f, c, h, l, e[p + 12], 6, 1700485571), l = g(l, f, c, h, e[p + 3], 10, -1894986606), h = g(h, l, f, c, e[p + 10], 15, -1051523), c = g(c, h, l, f, e[p + 1], 21, -2054922799), f = g(f, c, h, l, e[p + 8], 6, 1873313359), l = g(l, f, c, h, e[p + 15], 10, -30611744), h = g(h, l, f, c, e[p + 6], 15, -1560198380), c = g(c, h, l, f, e[p + 13], 21, 1309151649), f = g(f, c, h, l, e[p + 4], 6, -145523070), l = g(l, f, c, h, e[p + 11], 10, -1120210379), h = g(h, l, f, c, e[p + 2], 15, 718787259), c = g(c, h, l, f, e[p + 9], 21, -343485551), f = f + w >>> 0, c = c + b >>> 0, h = h + m >>> 0, l = l + x >>> 0
			}
			return r.endian([f, c, h, l])
		})._ff = function(t, n, e, r, i, o, u) {
			var a = t + (n & e | ~n & r) + (i >>> 0) + u;
			return (a << o | a >>> 32 - o) + n
		}, a._gg = function(t, n, e, r, i, o, u) {
			var a = t + (n & r | e & ~r) + (i >>> 0) + u;
			return (a << o | a >>> 32 - o) + n
		}, a._hh = function(t, n, e, r, i, o, u) {
			var a = t + (n ^ e ^ r) + (i >>> 0) + u;
			return (a << o | a >>> 32 - o) + n
		}, a._ii = function(t, n, e, r, i, o, u) {
			var a = t + (e ^ (n | ~r)) + (i >>> 0) + u;
			return (a << o | a >>> 32 - o) + n
		}, a._blocksize = 16, a._digestsize = 16, t.exports = function(t, n) {
			if (null == t) throw new Error("Illegal argument " + t);
			var e = r.wordsToBytes(a(t, n));
			return n && n.asBytes ? e : n && n.asString ? u.bytesToString(e) : r.bytesToHex(e)
		}
	}, function(t, n) {
		function e(t) {
			return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
		}
		/*!
		 * Determine if an object is a Buffer
		 *
		 * @author   Feross Aboukhadijeh <https://feross.org>
		 * @license  MIT
		 */
		t.exports = function(t) {
			return null != t && (e(t) || function(t) {
				return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0))
			}(t) || !!t._isBuffer)
		}
	}, function(t, n, e) {
		(function(n) {
			var r, i, o, u;
			r = e(2), i = e(0).utf8, o = e(0).bin, (u = function(t, e) {
				var u = r.wordsToBytes(function(t) {
					t.constructor == String ? t = i.stringToBytes(t) : void 0 !== n && "function" == typeof n.isBuffer && n.isBuffer(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
					var e = r.bytesToWords(t),
						o = 8 * t.length,
						u = [],
						a = 1732584193,
						s = -271733879,
						f = -1732584194,
						c = 271733878,
						h = -1009589776;
					e[o >> 5] |= 128 << 24 - o % 32, e[15 + (o + 64 >>> 9 << 4)] = o;
					for (var l = 0; l < e.length; l += 16) {
						for (var p = a, d = s, v = f, y = c, g = h, w = 0; w < 80; w++) {
							if (w < 16) u[w] = e[l + w];
							else {
								var b = u[w - 3] ^ u[w - 8] ^ u[w - 14] ^ u[w - 16];
								u[w] = b << 1 | b >>> 31
							}
							var m = (a << 5 | a >>> 27) + h + (u[w] >>> 0) + (w < 20 ? 1518500249 + (s & f | ~s & c) : w < 40 ? 1859775393 + (s ^ f ^ c) : w < 60 ? (s & f | s & c | f & c) - 1894007588 : (s ^ f ^ c) - 899497514);
							h = c, c = f, f = s << 30 | s >>> 2, s = a, a = m
						}
						a += p, s += d, f += v, c += y, h += g
					}
					return [a, s, f, c, h]
				}(t));
				return e && e.asBytes ? u : e && e.asString ? o.bytesToString(u) : r.bytesToHex(u)
			})._blocksize = 16, u._digestsize = 20, t.exports = u
		}).call(this, e(8).Buffer)
	}, function(t, n, e) {
		"use strict";
		(function(t) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <http://feross.org>
			 * @license  MIT
			 */
			var r = e(10),
				i = e(11),
				o = e(12);

			function u() {
				return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function a(t, n) {
				if (u() < n) throw new RangeError("Invalid typed array length");
				return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n)).__proto__ = s.prototype : (null === t && (t = new s(n)), t.length = n), t
			}

			function s(t, n, e) {
				if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, n, e);
				if ("number" == typeof t) {
					if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
					return h(this, t)
				}
				return f(this, t, n, e)
			}

			function f(t, n, e, r) {
				if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function(t, n, e, r) {
					if (n.byteLength, e < 0 || n.byteLength < e) throw new RangeError("'offset' is out of bounds");
					if (n.byteLength < e + (r || 0)) throw new RangeError("'length' is out of bounds");
					n = void 0 === e && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, e) : new Uint8Array(n, e, r);
					s.TYPED_ARRAY_SUPPORT ? (t = n).__proto__ = s.prototype : t = l(t, n);
					return t
				}(t, n, e, r) : "string" == typeof n ? function(t, n, e) {
					"string" == typeof e && "" !== e || (e = "utf8");
					if (!s.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
					var r = 0 | d(n, e),
						i = (t = a(t, r)).write(n, e);
					i !== r && (t = t.slice(0, i));
					return t
				}(t, n, e) : function(t, n) {
					if (s.isBuffer(n)) {
						var e = 0 | p(n.length);
						return 0 === (t = a(t, e)).length || n.copy(t, 0, 0, e), t
					}
					if (n) {
						if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (r = n.length) != r ? a(t, 0) : l(t, n);
						if ("Buffer" === n.type && o(n.data)) return l(t, n.data)
					}
					var r;
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(t, n)
			}

			function c(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative')
			}

			function h(t, n) {
				if (c(n), t = a(t, n < 0 ? 0 : 0 | p(n)), !s.TYPED_ARRAY_SUPPORT)
					for (var e = 0; e < n; ++e) t[e] = 0;
				return t
			}

			function l(t, n) {
				var e = n.length < 0 ? 0 : 0 | p(n.length);
				t = a(t, e);
				for (var r = 0; r < e; r += 1) t[r] = 255 & n[r];
				return t
			}

			function p(t) {
				if (t >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
				return 0 | t
			}

			function d(t, n) {
				if (s.isBuffer(t)) return t.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var e = t.length;
				if (0 === e) return 0;
				for (var r = !1;;) switch (n) {
					case "ascii":
					case "latin1":
					case "binary":
						return e;
					case "utf8":
					case "utf-8":
					case void 0:
						return q(t).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * e;
					case "hex":
						return e >>> 1;
					case "base64":
						return Y(t).length;
					default:
						if (r) return q(t).length;
						n = ("" + n).toLowerCase(), r = !0
				}
			}

			function v(t, n, e) {
				var r = !1;
				if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
				if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
				if ((e >>>= 0) <= (n >>>= 0)) return "";
				for (t || (t = "utf8");;) switch (t) {
					case "hex":
						return z(this, n, e);
					case "utf8":
					case "utf-8":
						return E(this, n, e);
					case "ascii":
						return L(this, n, e);
					case "latin1":
					case "binary":
						return S(this, n, e);
					case "base64":
						return C(this, n, e);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return P(this, n, e);
					default:
						if (r) throw new TypeError("Unknown encoding: " + t);
						t = (t + "").toLowerCase(), r = !0
				}
			}

			function y(t, n, e) {
				var r = t[n];
				t[n] = t[e], t[e] = r
			}

			function g(t, n, e, r, i) {
				if (0 === t.length) return -1;
				if ("string" == typeof e ? (r = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
					if (i) return -1;
					e = t.length - 1
				} else if (e < 0) {
					if (!i) return -1;
					e = 0
				}
				if ("string" == typeof n && (n = s.from(n, r)), s.isBuffer(n)) return 0 === n.length ? -1 : w(t, n, e, r, i);
				if ("number" == typeof n) return n &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : w(t, [n], e, r, i);
				throw new TypeError("val must be string, number or Buffer")
			}

			function w(t, n, e, r, i) {
				var o, u = 1,
					a = t.length,
					s = n.length;
				if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
					if (t.length < 2 || n.length < 2) return -1;
					u = 2, a /= 2, s /= 2, e /= 2
				}

				function f(t, n) {
					return 1 === u ? t[n] : t.readUInt16BE(n * u)
				}
				if (i) {
					var c = -1;
					for (o = e; o < a; o++)
						if (f(t, o) === f(n, -1 === c ? 0 : o - c)) {
							if (-1 === c && (c = o), o - c + 1 === s) return c * u
						} else -1 !== c && (o -= o - c), c = -1
				} else
					for (e + s > a && (e = a - s), o = e; o >= 0; o--) {
						for (var h = !0, l = 0; l < s; l++)
							if (f(t, o + l) !== f(n, l)) {
								h = !1;
								break
							}
						if (h) return o
					}
				return -1
			}

			function b(t, n, e, r) {
				e = Number(e) || 0;
				var i = t.length - e;
				r ? (r = Number(r)) > i && (r = i) : r = i;
				var o = n.length;
				if (o % 2 != 0) throw new TypeError("Invalid hex string");
				r > o / 2 && (r = o / 2);
				for (var u = 0; u < r; ++u) {
					var a = parseInt(n.substr(2 * u, 2), 16);
					if (isNaN(a)) return u;
					t[e + u] = a
				}
				return u
			}

			function m(t, n, e, r) {
				return N(q(n, t.length - e), t, e, r)
			}

			function x(t, n, e, r) {
				return N(function(t) {
					for (var n = [], e = 0; e < t.length; ++e) n.push(255 & t.charCodeAt(e));
					return n
				}(n), t, e, r)
			}

			function A(t, n, e, r) {
				return x(t, n, e, r)
			}

			function _(t, n, e, r) {
				return N(Y(n), t, e, r)
			}

			function B(t, n, e, r) {
				return N(function(t, n) {
					for (var e, r, i, o = [], u = 0; u < t.length && !((n -= 2) < 0); ++u) e = t.charCodeAt(u), r = e >> 8, i = e % 256, o.push(i), o.push(r);
					return o
				}(n, t.length - e), t, e, r)
			}

			function C(t, n, e) {
				return 0 === n && e === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(n, e))
			}

			function E(t, n, e) {
				e = Math.min(t.length, e);
				for (var r = [], i = n; i < e;) {
					var o, u, a, s, f = t[i],
						c = null,
						h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
					if (i + h <= e) switch (h) {
						case 1:
							f < 128 && (c = f);
							break;
						case 2:
							128 == (192 & (o = t[i + 1])) && (s = (31 & f) << 6 | 63 & o) > 127 && (c = s);
							break;
						case 3:
							o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & f) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (c = s);
							break;
						case 4:
							o = t[i + 1], u = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & a) && (s = (15 & f) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & a) > 65535 && s < 1114112 && (c = s)
					}
					null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += h
				}
				return function(t) {
					var n = t.length;
					if (n <= 4096) return String.fromCharCode.apply(String, t);
					var e = "",
						r = 0;
					for (; r < n;) e += String.fromCharCode.apply(String, t.slice(r, r += 4096));
					return e
				}(r)
			}
			n.Buffer = s, n.SlowBuffer = function(t) {
				+t != t && (t = 0);
				return s.alloc(+t)
			}, n.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
				try {
					var t = new Uint8Array(1);
					return t.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
				} catch (t) {
					return !1
				}
			}(), n.kMaxLength = u(), s.poolSize = 8192, s._augment = function(t) {
				return t.__proto__ = s.prototype, t
			}, s.from = function(t, n, e) {
				return f(null, t, n, e)
			}, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
				value: null,
				configurable: !0
			})), s.alloc = function(t, n, e) {
				return function(t, n, e, r) {
					return c(n), n <= 0 ? a(t, n) : void 0 !== e ? "string" == typeof r ? a(t, n).fill(e, r) : a(t, n).fill(e) : a(t, n)
				}(null, t, n, e)
			}, s.allocUnsafe = function(t) {
				return h(null, t)
			}, s.allocUnsafeSlow = function(t) {
				return h(null, t)
			}, s.isBuffer = function(t) {
				return !(null == t || !t._isBuffer)
			}, s.compare = function(t, n) {
				if (!s.isBuffer(t) || !s.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
				if (t === n) return 0;
				for (var e = t.length, r = n.length, i = 0, o = Math.min(e, r); i < o; ++i)
					if (t[i] !== n[i]) {
						e = t[i], r = n[i];
						break
					}
				return e < r ? -1 : r < e ? 1 : 0
			}, s.isEncoding = function(t) {
				switch (String(t).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, s.concat = function(t, n) {
				if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === t.length) return s.alloc(0);
				var e;
				if (void 0 === n)
					for (n = 0, e = 0; e < t.length; ++e) n += t[e].length;
				var r = s.allocUnsafe(n),
					i = 0;
				for (e = 0; e < t.length; ++e) {
					var u = t[e];
					if (!s.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
					u.copy(r, i), i += u.length
				}
				return r
			}, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
				var t = this.length;
				if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var n = 0; n < t; n += 2) y(this, n, n + 1);
				return this
			}, s.prototype.swap32 = function() {
				var t = this.length;
				if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var n = 0; n < t; n += 4) y(this, n, n + 3), y(this, n + 1, n + 2);
				return this
			}, s.prototype.swap64 = function() {
				var t = this.length;
				if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var n = 0; n < t; n += 8) y(this, n, n + 7), y(this, n + 1, n + 6), y(this, n + 2, n + 5), y(this, n + 3, n + 4);
				return this
			}, s.prototype.toString = function() {
				var t = 0 | this.length;
				return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : v.apply(this, arguments)
			}, s.prototype.equals = function(t) {
				if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				return this === t || 0 === s.compare(this, t)
			}, s.prototype.inspect = function() {
				var t = "",
					e = n.INSPECT_MAX_BYTES;
				return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
			}, s.prototype.compare = function(t, n, e, r, i) {
				if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === n && (n = 0), void 0 === e && (e = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), n < 0 || e > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
				if (r >= i && n >= e) return 0;
				if (r >= i) return -1;
				if (n >= e) return 1;
				if (this === t) return 0;
				for (var o = (i >>>= 0) - (r >>>= 0), u = (e >>>= 0) - (n >>>= 0), a = Math.min(o, u), f = this.slice(r, i), c = t.slice(n, e), h = 0; h < a; ++h)
					if (f[h] !== c[h]) {
						o = f[h], u = c[h];
						break
					}
				return o < u ? -1 : u < o ? 1 : 0
			}, s.prototype.includes = function(t, n, e) {
				return -1 !== this.indexOf(t, n, e)
			}, s.prototype.indexOf = function(t, n, e) {
				return g(this, t, n, e, !0)
			}, s.prototype.lastIndexOf = function(t, n, e) {
				return g(this, t, n, e, !1)
			}, s.prototype.write = function(t, n, e, r) {
				if (void 0 === n) r = "utf8", e = this.length, n = 0;
				else if (void 0 === e && "string" == typeof n) r = n, e = this.length, n = 0;
				else {
					if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					n |= 0, isFinite(e) ? (e |= 0, void 0 === r && (r = "utf8")) : (r = e, e = void 0)
				}
				var i = this.length - n;
				if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				r || (r = "utf8");
				for (var o = !1;;) switch (r) {
					case "hex":
						return b(this, t, n, e);
					case "utf8":
					case "utf-8":
						return m(this, t, n, e);
					case "ascii":
						return x(this, t, n, e);
					case "latin1":
					case "binary":
						return A(this, t, n, e);
					case "base64":
						return _(this, t, n, e);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return B(this, t, n, e);
					default:
						if (o) throw new TypeError("Unknown encoding: " + r);
						r = ("" + r).toLowerCase(), o = !0
				}
			}, s.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};

			function L(t, n, e) {
				var r = "";
				e = Math.min(t.length, e);
				for (var i = n; i < e; ++i) r += String.fromCharCode(127 & t[i]);
				return r
			}

			function S(t, n, e) {
				var r = "";
				e = Math.min(t.length, e);
				for (var i = n; i < e; ++i) r += String.fromCharCode(t[i]);
				return r
			}

			function z(t, n, e) {
				var r = t.length;
				(!n || n < 0) && (n = 0), (!e || e < 0 || e > r) && (e = r);
				for (var i = "", o = n; o < e; ++o) i += U(t[o]);
				return i
			}

			function P(t, n, e) {
				for (var r = t.slice(n, e), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
				return i
			}

			function O(t, n, e) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (t + n > e) throw new RangeError("Trying to access beyond buffer length")
			}

			function D(t, n, e, r, i, o) {
				if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (n > i || n < o) throw new RangeError('"value" argument is out of bounds');
				if (e + r > t.length) throw new RangeError("Index out of range")
			}

			function k(t, n, e, r) {
				n < 0 && (n = 65535 + n + 1);
				for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (n & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
			}

			function T(t, n, e, r) {
				n < 0 && (n = 4294967295 + n + 1);
				for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = n >>> 8 * (r ? i : 3 - i) & 255
			}

			function j(t, n, e, r, i, o) {
				if (e + r > t.length) throw new RangeError("Index out of range");
				if (e < 0) throw new RangeError("Index out of range")
			}

			function M(t, n, e, r, o) {
				return o || j(t, 0, e, 4), i.write(t, n, e, r, 23, 4), e + 4
			}

			function R(t, n, e, r, o) {
				return o || j(t, 0, e, 8), i.write(t, n, e, r, 52, 8), e + 8
			}
			s.prototype.slice = function(t, n) {
				var e, r = this.length;
				if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < t && (n = t), s.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, n)).__proto__ = s.prototype;
				else {
					var i = n - t;
					e = new s(i, void 0);
					for (var o = 0; o < i; ++o) e[o] = this[o + t]
				}
				return e
			}, s.prototype.readUIntLE = function(t, n, e) {
				t |= 0, n |= 0, e || O(t, n, this.length);
				for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i;
				return r
			}, s.prototype.readUIntBE = function(t, n, e) {
				t |= 0, n |= 0, e || O(t, n, this.length);
				for (var r = this[t + --n], i = 1; n > 0 && (i *= 256);) r += this[t + --n] * i;
				return r
			}, s.prototype.readUInt8 = function(t, n) {
				return n || O(t, 1, this.length), this[t]
			}, s.prototype.readUInt16LE = function(t, n) {
				return n || O(t, 2, this.length), this[t] | this[t + 1] << 8
			}, s.prototype.readUInt16BE = function(t, n) {
				return n || O(t, 2, this.length), this[t] << 8 | this[t + 1]
			}, s.prototype.readUInt32LE = function(t, n) {
				return n || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
			}, s.prototype.readUInt32BE = function(t, n) {
				return n || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
			}, s.prototype.readIntLE = function(t, n, e) {
				t |= 0, n |= 0, e || O(t, n, this.length);
				for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i;
				return r >= (i *= 128) && (r -= Math.pow(2, 8 * n)), r
			}, s.prototype.readIntBE = function(t, n, e) {
				t |= 0, n |= 0, e || O(t, n, this.length);
				for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
				return o >= (i *= 128) && (o -= Math.pow(2, 8 * n)), o
			}, s.prototype.readInt8 = function(t, n) {
				return n || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
			}, s.prototype.readInt16LE = function(t, n) {
				n || O(t, 2, this.length);
				var e = this[t] | this[t + 1] << 8;
				return 32768 & e ? 4294901760 | e : e
			}, s.prototype.readInt16BE = function(t, n) {
				n || O(t, 2, this.length);
				var e = this[t + 1] | this[t] << 8;
				return 32768 & e ? 4294901760 | e : e
			}, s.prototype.readInt32LE = function(t, n) {
				return n || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
			}, s.prototype.readInt32BE = function(t, n) {
				return n || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
			}, s.prototype.readFloatLE = function(t, n) {
				return n || O(t, 4, this.length), i.read(this, t, !0, 23, 4)
			}, s.prototype.readFloatBE = function(t, n) {
				return n || O(t, 4, this.length), i.read(this, t, !1, 23, 4)
			}, s.prototype.readDoubleLE = function(t, n) {
				return n || O(t, 8, this.length), i.read(this, t, !0, 52, 8)
			}, s.prototype.readDoubleBE = function(t, n) {
				return n || O(t, 8, this.length), i.read(this, t, !1, 52, 8)
			}, s.prototype.writeUIntLE = function(t, n, e, r) {
				(t = +t, n |= 0, e |= 0, r) || D(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
				var i = 1,
					o = 0;
				for (this[n] = 255 & t; ++o < e && (i *= 256);) this[n + o] = t / i & 255;
				return n + e
			}, s.prototype.writeUIntBE = function(t, n, e, r) {
				(t = +t, n |= 0, e |= 0, r) || D(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
				var i = e - 1,
					o = 1;
				for (this[n + i] = 255 & t; --i >= 0 && (o *= 256);) this[n + i] = t / o & 255;
				return n + e
			}, s.prototype.writeUInt8 = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
			}, s.prototype.writeUInt16LE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : k(this, t, n, !0), n + 2
			}, s.prototype.writeUInt16BE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : k(this, t, n, !1), n + 2
			}, s.prototype.writeUInt32LE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : T(this, t, n, !0), n + 4
			}, s.prototype.writeUInt32BE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : T(this, t, n, !1), n + 4
			}, s.prototype.writeIntLE = function(t, n, e, r) {
				if (t = +t, n |= 0, !r) {
					var i = Math.pow(2, 8 * e - 1);
					D(this, t, n, e, i - 1, -i)
				}
				var o = 0,
					u = 1,
					a = 0;
				for (this[n] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o - 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
				return n + e
			}, s.prototype.writeIntBE = function(t, n, e, r) {
				if (t = +t, n |= 0, !r) {
					var i = Math.pow(2, 8 * e - 1);
					D(this, t, n, e, i - 1, -i)
				}
				var o = e - 1,
					u = 1,
					a = 0;
				for (this[n + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o + 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
				return n + e
			}, s.prototype.writeInt8 = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1
			}, s.prototype.writeInt16LE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : k(this, t, n, !0), n + 2
			}, s.prototype.writeInt16BE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : k(this, t, n, !1), n + 2
			}, s.prototype.writeInt32LE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : T(this, t, n, !0), n + 4
			}, s.prototype.writeInt32BE = function(t, n, e) {
				return t = +t, n |= 0, e || D(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : T(this, t, n, !1), n + 4
			}, s.prototype.writeFloatLE = function(t, n, e) {
				return M(this, t, n, !0, e)
			}, s.prototype.writeFloatBE = function(t, n, e) {
				return M(this, t, n, !1, e)
			}, s.prototype.writeDoubleLE = function(t, n, e) {
				return R(this, t, n, !0, e)
			}, s.prototype.writeDoubleBE = function(t, n, e) {
				return R(this, t, n, !1, e)
			}, s.prototype.copy = function(t, n, e, r) {
				if (e || (e = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && r < e && (r = e), r === e) return 0;
				if (0 === t.length || 0 === this.length) return 0;
				if (n < 0) throw new RangeError("targetStart out of bounds");
				if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), t.length - n < r - e && (r = t.length - n + e);
				var i, o = r - e;
				if (this === t && e < n && n < r)
					for (i = o - 1; i >= 0; --i) t[i + n] = this[i + e];
				else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
					for (i = 0; i < o; ++i) t[i + n] = this[i + e];
				else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), n);
				return o
			}, s.prototype.fill = function(t, n, e, r) {
				if ("string" == typeof t) {
					if ("string" == typeof n ? (r = n, n = 0, e = this.length) : "string" == typeof e && (r = e, e = this.length), 1 === t.length) {
						var i = t.charCodeAt(0);
						i < 256 && (t = i)
					}
					if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
					if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
				} else "number" == typeof t && (t &= 255);
				if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
				if (e <= n) return this;
				var o;
				if (n >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
					for (o = n; o < e; ++o) this[o] = t;
				else {
					var u = s.isBuffer(t) ? t : q(new s(t, r).toString()),
						a = u.length;
					for (o = 0; o < e - n; ++o) this[o + n] = u[o % a]
				}
				return this
			};
			var I = /[^+\/0-9A-Za-z-_]/g;

			function U(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16)
			}

			function q(t, n) {
				var e;
				n = n || 1 / 0;
				for (var r = t.length, i = null, o = [], u = 0; u < r; ++u) {
					if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
						if (!i) {
							if (e > 56319) {
								(n -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							if (u + 1 === r) {
								(n -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							i = e;
							continue
						}
						if (e < 56320) {
							(n -= 3) > -1 && o.push(239, 191, 189), i = e;
							continue
						}
						e = 65536 + (i - 55296 << 10 | e - 56320)
					} else i && (n -= 3) > -1 && o.push(239, 191, 189);
					if (i = null, e < 128) {
						if ((n -= 1) < 0) break;
						o.push(e)
					} else if (e < 2048) {
						if ((n -= 2) < 0) break;
						o.push(e >> 6 | 192, 63 & e | 128)
					} else if (e < 65536) {
						if ((n -= 3) < 0) break;
						o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
					} else {
						if (!(e < 1114112)) throw new Error("Invalid code point");
						if ((n -= 4) < 0) break;
						o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
					}
				}
				return o
			}

			function Y(t) {
				return r.toByteArray(function(t) {
					if ((t = function(t) {
							return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
						}(t).replace(I, "")).length < 2) return "";
					for (; t.length % 4 != 0;) t += "=";
					return t
				}(t))
			}

			function N(t, n, e, r) {
				for (var i = 0; i < r && !(i + e >= n.length || i >= t.length); ++i) n[i + e] = t[i];
				return i
			}
		}).call(this, e(9))
	}, function(t, n) {
		var e;
		e = function() {
			return this
		}();
		try {
			e = e || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (e = window)
		}
		t.exports = e
	}, function(t, n, e) {
		"use strict";
		n.byteLength = function(t) {
			var n = f(t),
				e = n[0],
				r = n[1];
			return 3 * (e + r) / 4 - r
		}, n.toByteArray = function(t) {
			var n, e, r = f(t),
				u = r[0],
				a = r[1],
				s = new o(function(t, n, e) {
					return 3 * (n + e) / 4 - e
				}(0, u, a)),
				c = 0,
				h = a > 0 ? u - 4 : u;
			for (e = 0; e < h; e += 4) n = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], s[c++] = n >> 16 & 255, s[c++] = n >> 8 & 255, s[c++] = 255 & n;
			2 === a && (n = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[c++] = 255 & n);
			1 === a && (n = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, s[c++] = n >> 8 & 255, s[c++] = 255 & n);
			return s
		}, n.fromByteArray = function(t) {
			for (var n, e = t.length, i = e % 3, o = [], u = 0, a = e - i; u < a; u += 16383) o.push(c(t, u, u + 16383 > a ? a : u + 16383));
			1 === i ? (n = t[e - 1], o.push(r[n >> 2] + r[n << 4 & 63] + "==")) : 2 === i && (n = (t[e - 2] << 8) + t[e - 1], o.push(r[n >> 10] + r[n >> 4 & 63] + r[n << 2 & 63] + "="));
			return o.join("")
		};
		for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = u.length; a < s; ++a) r[a] = u[a], i[u.charCodeAt(a)] = a;

		function f(t) {
			var n = t.length;
			if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var e = t.indexOf("=");
			return -1 === e && (e = n), [e, e === n ? 0 : 4 - e % 4]
		}

		function c(t, n, e) {
			for (var i, o, u = [], a = n; a < e; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
			return u.join("")
		}
		i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
	}, function(t, n) {
		n.read = function(t, n, e, r, i) {
			var o, u, a = 8 * i - r - 1,
				s = (1 << a) - 1,
				f = s >> 1,
				c = -7,
				h = e ? i - 1 : 0,
				l = e ? -1 : 1,
				p = t[n + h];
			for (h += l, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + t[n + h], h += l, c -= 8);
			for (u = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; u = 256 * u + t[n + h], h += l, c -= 8);
			if (0 === o) o = 1 - f;
			else {
				if (o === s) return u ? NaN : 1 / 0 * (p ? -1 : 1);
				u += Math.pow(2, r), o -= f
			}
			return (p ? -1 : 1) * u * Math.pow(2, o - r)
		}, n.write = function(t, n, e, r, i, o) {
			var u, a, s, f = 8 * o - i - 1,
				c = (1 << f) - 1,
				h = c >> 1,
				l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				p = r ? 0 : o - 1,
				d = r ? 1 : -1,
				v = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
			for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (a = isNaN(n) ? 1 : 0, u = c) : (u = Math.floor(Math.log(n) / Math.LN2), n * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (n += u + h >= 1 ? l / s : l * Math.pow(2, 1 - h)) * s >= 2 && (u++, s /= 2), u + h >= c ? (a = 0, u = c) : u + h >= 1 ? (a = (n * s - 1) * Math.pow(2, i), u += h) : (a = n * Math.pow(2, h - 1) * Math.pow(2, i), u = 0)); i >= 8; t[e + p] = 255 & a, p += d, a /= 256, i -= 8);
			for (u = u << i | a, f += i; f > 0; t[e + p] = 255 & u, p += d, u /= 256, f -= 8);
			t[e + p - d] |= 128 * v
		}
	}, function(t, n) {
		var e = {}.toString;
		t.exports = Array.isArray || function(t) {
			return "[object Array]" == e.call(t)
		}
	}, function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = !0,
			i = function() {
				var t = (window.location.hostname.match(/^.*?.([^.]*?.com)$/) || [])[1] || "mihoyo.com";
				return {
					development: "https://devapi-takumi." + t + "/common/badge/v1",
					test: "https://devapi-takumi." + t + "/common/badge/v1",
					prerelease: "https://preapi-takumi." + t + "/common/badge/v1",
					production: "https://api-takumi." + t + "/common/badge/v1"
				}
			},
			o = n.getParamByName = function(t) {
				var n = t.replace(/[\[\]]/g, "\\$&"),
					e = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
					r = window.location.search,
					i = e.exec(r);
				if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
			},
			u = function() {
				return "true" === o("mia_preload_track_stash")
			},
			a = function(t) {
				t.bbsApp.onWebViewWillAppear((function() {
					console.log("mihoyo-analysis: onWebViewWillAppear"), t.popStash()
				})), t.bbsApp.getIsAppearing().then((function(n) {
					n || (console.log("mihoyo-analysis: getIsAppearing"), t.startStash())
				}))
			};
		n.initInstance = function(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				o = n.Vue,
				s = n.dataBelong,
				f = void 0 === s ? [] : s,
				c = n.appId,
				h = n.router,
				l = n.needUid,
				p = n.env,
				d = n.isSea,
				v = void 0 !== d && d,
				y = n.debug,
				g = void 0 !== y && y,
				w = n.pagename,
				b = n.device_id,
				m = void 0 === b ? "" : b,
				x = n.pageExtrainfo,
				A = n.userExtrainfo,
				_ = n.eventExtrainfo,
				B = n.type,
				C = void 0 === B ? "tool" : B,
				E = n.autoTrackPageview,
				L = void 0 === E || E,
				S = n.setMiaToVue,
				z = void 0 === S || S,
				P = n.needSessionInfo,
				O = void 0 !== P && P,
				D = n.sessionInfoExpires,
				k = void 0 === D ? 1 / 48 : D,
				T = n.host,
				j = void 0 === T ? "" : T,
				M = n.lang,
				R = void 0 === M ? "" : M,
				I = n.useBeacon,
				U = void 0 !== I && I,
				q = o || window.Vue;
			if (!window.MIHOYO_ANALYSIS_LOGINEFFECT && navigator && navigator.userAgent.includes("miHoYoBBS/")) {
				window.MIHOYO_ANALYSIS_LOGINEFFECT = !0, e(14);
				var Y = {
						test: "https://devapi-takumi.mihoyo.com/",
						production: "https://api-takumi.mihoyo.com/"
					},
					N = i(),
					W = function() {
						var n = new XMLHttpRequest;
						n.withCredentials = !0;
						var e = Y.production;
						["development", "test", "sandbox"].includes(p || t.environment) && (e = Y.test), window.location.host.indexOf("miyoushe.com") >= 0 && (e = e.replace("mihoyo.com", "miyoushe.com")), n.onreadystatechange = function() {
							4 === n.readyState && 200 === n.status && (0 !== JSON.parse(n.responseText).retcode && q.prototype.$bbsApp.getCookieToken(!0).then((function() {
								q.prototype.$bbsApp.toLogin()
							})))
						}, n.open("GET", e + "auth/api/getUserAccountInfoByCookieToken", !0), n.send()
					};
				window.addEventListener("ajaxReadyStateChange", (function(t) {
					try {
						var n = t.detail;
						if (Object.values(N).some((function(t) {
								return n.responseURL.indexOf(t) >= 0
							}))) return;
						if (4 === n.readyState && 200 === n.status) {
							var e = JSON.parse(n.responseText);
							if (!q) {
								if (!window.Vue) return;
								q = window.Vue
							}[-100, 10001].includes(e.retcode) && q && q.prototype && q.prototype.$bbsApp && q.prototype.$bbsApp.getCookieInfo().then((function(t) {
								var n = t.data;
								n && n.ltoken && W()
							}))
						}
					} catch (t) {
						console.log(t)
					}
				}))
			}
			if (!c) throw console.error("请传入appId"), new Error("请传入appId");
			if (!Array.isArray(f)) throw console.error("dataBelong的类型为数组"), t.data_belong = "", new Error("dataBelong的类型为数组");
			return t.data_belong = f.join(","), p && t.apis[p] && (t.environment = p), (v || t.isHostSea) && "production" === t.environment && (t.environment = "production.sea"), g && (t.environment = "test"), (v || t.isHostSea) && "test" === t.environment && (t.environment = "test.sea"), q && q.prototype && z && (q.prototype.$mia = t), t.app_id = "" + c, t.needUid = l || !1, t.lang = R, t.pagename = w, t.pageExtrainfo = x, t.userExtrainfo = A, t.eventExtrainfo = _, t.type = C, t.device_id = m, t.needSessionInfo = O, t.sessionInfoExpires = k, t.host = j, t.bbsApp = q && q.prototype && q.prototype.$bbsApp, t.useBeacon = U && navigator && navigator.sendBeacon && "function" == typeof navigator.sendBeacon, u() && t.bbsApp && t.bbsApp.getIsAppearing && r && (r = !1, a(t)), L && (q ? h && h.afterEach((function(n) {
				var e = n || {},
					r = (e.meta || {}).miaPagename;
				t.pageurl = e.path, t.pagename = r || e.name || e.path, t.trackPageview()
			})) : t.trackPageview()), t
		}, n.randomId = function() {
			var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
				n = [],
				e = Math.random,
				r = void 0;
			n[8] = n[13] = n[18] = n[23] = n[28] = n[33] = n[38] = n[43] = n[48] = n[53] = n[58] = "-", n[14] = "4";
			for (var i = 0; i < 64; i++) n[i] || (r = 0 | 16 * e(), n[i] = t[19 === i ? 3 & r | 8 : 15 & r]);
			return n.join("").toLowerCase()
		}
	}, function(t, n, e) {
		"use strict";
		! function() {
			if ("function" == typeof window.CustomEvent) return !1;

			function t(t, n) {
				n = n || {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				};
				var e = document.createEvent("CustomEvent");
				return e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), e
			}
			t.prototype = window.Event.prototype, window.CustomEvent = t
		}(),
		function() {
			function t(t) {
				var n = new CustomEvent(t, {
					detail: this
				});
				window.dispatchEvent(n)
			}
			var n = window.XMLHttpRequest;
			window.XMLHttpRequest = function() {
				var e = new n;
				e.addEventListener("abort", (function() {
					t.call(this, "ajaxAbort")
				}), !1), e.addEventListener("error", (function() {
					t.call(this, "ajaxError")
				}), !1), e.addEventListener("load", (function() {
					t.call(this, "ajaxLoad")
				}), !1), e.addEventListener("loadstart", (function() {
					t.call(this, "ajaxLoadStart")
				}), !1), e.addEventListener("progress", (function() {
					t.call(this, "ajaxProgress")
				}), !1), e.addEventListener("timeout", (function() {
					t.call(this, "ajaxTimeout")
				}), !1), e.addEventListener("loadend", (function() {
					t.call(this, "ajaxLoadEnd")
				}), !1), e.addEventListener("readystatechange", (function() {
					t.call(this, "ajaxReadyStateChange")
				}), !1);
				var r = e.send;
				e.send = function() {
					for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
					r.apply(e, i), e.body = i[0], t.call(e, "ajaxSend")
				};
				var i = e.open;
				e.open = function() {
					for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					i.apply(e, r), e.method = r[0], e.orignUrl = r[1], e.async = r[2], t.call(e, "ajaxOpen")
				};
				var o = e.setRequestHeader;
				return e.requestHeader = {}, e.setRequestHeader = function(t, n) {
					e.requestHeader[t] = n, o.call(e, t, n)
				}, e
			}
		}()
	}, function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.getDevice = n.getPlatform = n.PLATFORM = n.DEVICE = void 0;
		var r, i = e(16),
			o = (r = i) && r.__esModule ? r : {
				default: r
			};
		var u = n.DEVICE = {
				UNKNOWN: "unknown",
				IOS: "ios",
				ANDROID: "android",
				WINDOWS: "windows",
				MACOS: "macos"
			},
			a = n.PLATFORM = {
				UNKNOWN: "unknown",
				BBS: "bbs"
			};
		n.getPlatform = function() {
			return o.default.bbs() ? a.BBS : a.UNKNOWN
		}, n.getDevice = function() {
			return o.default.ios() ? u.IOS : o.default.android() ? u.ANDROID : o.default.macos() ? u.MACOS : o.default.isWindows() ? u.WINDOWS : u.UNKNOWN
		}
	}, function(t, n, e) {
		/*! Copyright © 2011 - 2023 miHoYo. All Rights Reserved */
		"undefined" != typeof self && self, t.exports = function() {
			"use strict";
			var t = {
					673: function(t, n, e) {
						function r(t) {
							return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
								return typeof t
							} : function(t) {
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
							})(t)
						}

						function i(t, n) {
							for (var e = 0; e < n.length; e++) {
								var r = n[e];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
							}
						}

						function o(t, n, e) {
							return (n = u(n)) in t ? Object.defineProperty(t, n, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[n] = e, t
						}

						function u(t) {
							var n = function(t, n) {
								if ("object" !== r(t) || null === t) return t;
								var e = t[Symbol.toPrimitive];
								if (void 0 !== e) {
									var i = e.call(t, n);
									if ("object" !== r(i)) return i;
									throw new TypeError("@@toPrimitive must return a primitive value.")
								}
								return String(t)
							}(t, "string");
							return "symbol" === r(n) ? n : String(n)
						}
						var a, s;
						e.d(n, {
								default: function() {
									return h
								}
							}),
							function(t) {
								t.desktop = "desktop", t.tablet = "tablet", t.mobile = "mobile"
							}(a || (a = {})),
							function(t) {
								t.pc = "pc", t.mobile = "mobile", t.ps4 = "ps4", t.ps5 = "ps5"
							}(s || (s = {}));
						var f = [s.pc, s.mobile, s.ps4, s.ps5],
							c = {
								queryString: function(t, n) {
									var e = t.replace(/[\[\]]/g, "\\$&"),
										r = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(n);
									return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
								},
								formatParams: function(t) {
									var n = t || {};
									return Object.keys(n).reduce((function(t, e) {
										return t.push("".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(n[e]))), t
									}), []).join("&")
								},
								getType: function(t) {
									return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
								},
								isEmpty: function(t) {
									var n = !0;
									return t && "string" == typeof t && String(t).trim() && (n = !1), n
								},
								dealStr: function(t, n) {
									var e = String(t).trim() || "";
									return "lower" === n ? e.toLowerCase() : "upper" === n ? e.toUpperCase() : e
								},
								includes: function(t, n) {
									return -1 !== t.indexOf(n)
								},
								find: function(t, n) {
									return this.includes(n, t)
								},
								findIndex: function(t, n, e) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										if (n.call(e, i, r, t)) return r
									}
									return -1
								}
							},
							h = function() {
								function t(n) {
									var e = n.window,
										r = n.userAgent,
										i = n.url,
										u = n.language;
									! function(t, n) {
										if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
									}(this, t), o(this, "userAgent", void 0), o(this, "url", void 0), o(this, "window", void 0), o(this, "lang", void 0), this.userAgent = r.toLowerCase(), this.url = i, this.window = e, this.lang = u
								}
								var n, r;
								return n = t, (r = [{
									key: "mobile",
									value: function() {
										return "ios" === this.platform() || "android" === this.platform() || this.iphone() || this.iwatch() || this.ipod() || this.androidPhone() || this.blackberryPhone() || this.windowsPhone() || this.fxosPhone() || this.meego() || this.samsungPhone() || this.othersMobile()
									}
								}, {
									key: "tablet",
									value: function() {
										return this.ipad() || this.androidTablet() || this.blackberryTablet() || this.windowsTablet() || this.fxosTablet() || this.samsungTablet()
									}
								}, {
									key: "desktop",
									value: function() {
										var t = this;
										return ["pc", "mac"].some((function(n) {
											return n === t.platform()
										})) || !this.tablet() && !this.mobile()
									}
								}, {
									key: "portrait",
									value: function() {
										var t = this.window;
										return t ? t.screen.orientation && Object.prototype.hasOwnProperty.call(t, "onorientationchange") ? this.includes(t.screen.orientation.type, "portrait") : this.ios() && Object.prototype.hasOwnProperty.call(t, "orientation") ? 90 !== Math.abs(t.orientation) : t.innerHeight / t.innerWidth > 1 : "mobile" === this.getDeviceType()
									}
								}, {
									key: "landscape",
									value: function() {
										var t = this.window;
										return t ? t.screen.orientation && Object.prototype.hasOwnProperty.call(t, "onorientationchange") ? this.includes(t.screen.orientation.type, "landscape") : this.ios() && Object.prototype.hasOwnProperty.call(t, "orientation") ? 90 === Math.abs(t.orientation) : t.innerHeight / t.innerWidth < 1 : !this.portrait()
									}
								}, {
									key: "getOrient",
									value: function() {
										return this.portrait() ? "portrait" : this.landscape() ? "landscape" : ""
									}
								}, {
									key: "getDeviceEnd",
									value: function() {
										var t;
										return this.desktop() ? t = a.desktop : this.tablet() ? t = a.tablet : this.mobile() ? t = a.mobile : console.warn("unknown device end"), t
									}
								}, {
									key: "getDeviceType",
									value: function() {
										var t = this.desktop() ? s.pc : this.tablet() || this.mobile() ? s.mobile : void 0;
										if (!t) {
											var n = c.dealStr(this.queryString("device_type"));
											if (!c.isEmpty(n)) {
												var e = c.findIndex(f, (function(t) {
													return -1 !== n.search(t)
												}));
												t = -1 !== e ? f[e] : void 0
											}
											t || console.warn("unknown device type")
										}
										return t
									}
								}, {
									key: "platform",
									value: function() {
										return c.dealStr(this.queryString("plat_type"), "lower")
									}
								}, {
									key: "trident",
									value: function() {
										return this.find("trident")
									}
								}, {
									key: "presto",
									value: function() {
										return this.find("presto")
									}
								}, {
									key: "webkit",
									value: function() {
										return this.find("applewebkit")
									}
								}, {
									key: "gecko",
									value: function() {
										return this.find("gecko") && this.find("firefox")
									}
								}, {
									key: "language",
									value: function() {
										return this.lang
									}
								}, {
									key: "isWindows",
									value: function() {
										return this.find("windows")
									}
								}, {
									key: "windowsPhone",
									value: function() {
										return this.isWindows() && this.find("phone")
									}
								}, {
									key: "windowsTablet",
									value: function() {
										return this.isWindows() && this.find("touch") && !this.windowsPhone()
									}
								}, {
									key: "isNode",
									value: function() {
										return "undefined" == typeof window && void 0 !== e.g
									}
								}, {
									key: "iphone",
									value: function() {
										return !this.isWindows() && this.find("iphone")
									}
								}, {
									key: "iwatch",
									value: function() {
										return this.find("iwatch")
									}
								}, {
									key: "ipod",
									value: function() {
										return this.find("ipod")
									}
								}, {
									key: "ipad",
									value: function() {
										return this.find("ipad") || Boolean(this.window && "MacIntel" === this.window.navigator.platform && this.window.navigator.maxTouchPoints > 1)
									}
								}, {
									key: "macos",
									value: function() {
										return "mac" === this.platform() || this.find("mac")
									}
								}, {
									key: "ios",
									value: function() {
										return "ios" === this.platform() || this.iphone() || this.iwatch() || this.ipod() || this.ipad()
									}
								}, {
									key: "android",
									value: function() {
										return !this.isWindows() && ("android" === this.platform() || this.find("android"))
									}
								}, {
									key: "androidPhone",
									value: function() {
										return this.android() && this.find("mobile")
									}
								}, {
									key: "androidTablet",
									value: function() {
										return this.android() && !this.find("mobile")
									}
								}, {
									key: "blackberry",
									value: function() {
										return this.find("blackberry") || this.find("bb10")
									}
								}, {
									key: "blackberryPhone",
									value: function() {
										return this.blackberry() && !this.find("tablet")
									}
								}, {
									key: "blackberryTablet",
									value: function() {
										return this.blackberry() && this.find("tablet")
									}
								}, {
									key: "meego",
									value: function() {
										return this.find("meego")
									}
								}, {
									key: "fxos",
									value: function() {
										return (this.find("(mobile") || this.find("(tablet")) && this.find(" rv:")
									}
								}, {
									key: "fxosPhone",
									value: function() {
										return this.fxos() && this.find("mobile")
									}
								}, {
									key: "fxosTablet",
									value: function() {
										return this.fxos() && this.find("tablet")
									}
								}, {
									key: "mumu",
									value: function() {
										return this.find("mumu") || this.find("build/v417ir;wv")
									}
								}, {
									key: "u3d",
									value: function() {
										return !!this.userAgent.match(/unity 3d/)
									}
								}, {
									key: "ps",
									value: function() {
										return this.includes(this.platform(), "ps") || this.find("playstation")
									}
								}, {
									key: "wxwork",
									value: function() {
										return this.find("wxwork")
									}
								}, {
									key: "harmony",
									value: function() {
										return this.find("harmonyos")
									}
								}, {
									key: "harmonyPhone",
									value: function() {
										return this.harmony() && this.find("mobile")
									}
								}, {
									key: "bbs",
									value: function() {
										return this.find("mihoyobbs")
									}
								}, {
									key: "game",
									value: function() {
										return this.find("mihoyo") && !this.bbs()
									}
								}, {
									key: "wx",
									value: function() {
										return this.find("micromessenger")
									}
								}, {
									key: "weibo",
									value: function() {
										return this.find("weibo")
									}
								}, {
									key: "safari",
									value: function() {
										return this.find("safari") && !this.find("chrome") && !this.find("browser")
									}
								}, {
									key: "edge",
									value: function() {
										return this.find("edge")
									}
								}, {
									key: "qqb",
									value: function() {
										return this.find("mqqbrowser")
									}
								}, {
									key: "samsungbrowser",
									value: function() {
										return this.find("samsungbrowser")
									}
								}, {
									key: "samsungPhone",
									value: function() {
										return this.android() && this.find("sm-")
									}
								}, {
									key: "samsungTablet",
									value: function() {
										return this.samsungbrowser() && !this.samsungPhone()
									}
								}, {
									key: "othersMobile",
									value: function() {
										return !!this.userAgent.match(/mobile|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|samsungbrowser|huaweibrowser/i)
									}
								}, {
									key: "includes",
									value: function(t, n) {
										return c.includes(t, n)
									}
								}, {
									key: "find",
									value: function(t) {
										var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
										return n ? c.includes(n, t) : c.find(t, this.userAgent)
									}
								}, {
									key: "queryString",
									value: function(t) {
										function n(n) {
											return t.apply(this, arguments)
										}
										return n.toString = function() {
											return t.toString()
										}, n
									}((function(t) {
										return c.queryString(t, this.url)
									}))
								}]) && i(n.prototype, r), Object.defineProperty(n, "prototype", {
									writable: !1
								}), t
							}()
					},
					572: function(t, n, e) {
						function r(t) {
							return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
								return typeof t
							} : function(t) {
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
							})(t)
						}

						function i(t, n) {
							return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
								return t.__proto__ = n, t
							})(t, n)
						}

						function o(t) {
							var n = function() {
								if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
								if (Reflect.construct.sham) return !1;
								if ("function" == typeof Proxy) return !0;
								try {
									return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
								} catch (t) {
									return !1
								}
							}();
							return function() {
								var e, r = a(t);
								if (n) {
									var i = a(this).constructor;
									e = Reflect.construct(r, arguments, i)
								} else e = r.apply(this, arguments);
								return u(this, e)
							}
						}

						function u(t, n) {
							if (n && ("object" === r(n) || "function" == typeof n)) return n;
							if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}

						function a(t) {
							return (a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
								return t.__proto__ || Object.getPrototypeOf(t)
							})(t)
						}
						e.d(n, {
							default: function() {
								return s
							}
						});
						var s = function(t) {
							! function(t, n) {
								if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
								t.prototype = Object.create(n && n.prototype, {
									constructor: {
										value: t,
										writable: !0,
										configurable: !0
									}
								}), Object.defineProperty(t, "prototype", {
									writable: !1
								}), n && i(t, n)
							}(r, t);
							var n, e = o(r);

							function r() {
								return function(t, n) {
									if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
								}(this, r), e.call(this, void 0)
							}
							return n = r, Object.defineProperty(n, "prototype", {
								writable: !1
							}), n
						}(e(793).default)
					},
					793: function(t, n, e) {
						function r(t) {
							return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
								return typeof t
							} : function(t) {
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
							})(t)
						}

						function i(t, n) {
							return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
								return t.__proto__ = n, t
							})(t, n)
						}

						function o(t) {
							var n = function() {
								if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
								if (Reflect.construct.sham) return !1;
								if ("function" == typeof Proxy) return !0;
								try {
									return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
								} catch (t) {
									return !1
								}
							}();
							return function() {
								var e, r = a(t);
								if (n) {
									var i = a(this).constructor;
									e = Reflect.construct(r, arguments, i)
								} else e = r.apply(this, arguments);
								return u(this, e)
							}
						}

						function u(t, n) {
							if (n && ("object" === r(n) || "function" == typeof n)) return n;
							if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}

						function a(t) {
							return (a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
								return t.__proto__ || Object.getPrototypeOf(t)
							})(t)
						}
						e.d(n, {
							default: function() {
								return s
							}
						});
						var s = function(t) {
							! function(t, n) {
								if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
								t.prototype = Object.create(n && n.prototype, {
									constructor: {
										value: t,
										writable: !0,
										configurable: !0
									}
								}), Object.defineProperty(t, "prototype", {
									writable: !1
								}), n && i(t, n)
							}(r, t);
							var n, e = o(r);

							function r(t) {
								var n;
								if (function(t, n) {
										if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
									}(this, r), t) {
									var i = t.headers,
										o = t.url || "",
										a = i["user-agent"] || "",
										s = i["accept-language"] || "",
										f = /([a-z0-9_-]+)(\s|,|;|$)/i.exec(s),
										c = (f && f[1] || "").toLowerCase();
									n = e.call(this, {
										url: o,
										userAgent: a,
										language: c
									})
								} else {
									if ("undefined" == typeof window) throw new TypeError('The "req" parameter is required on the server side');
									n = e.call(this, {
										window: window,
										url: window.location.href,
										userAgent: window.navigator.userAgent,
										language: (navigator.browserLanguage || window.navigator.language).toLowerCase()
									})
								}
								return u(n)
							}
							return n = r, Object.defineProperty(n, "prototype", {
								writable: !1
							}), n
						}(e(673).default)
					}
				},
				n = {};

			function e(r) {
				var i = n[r];
				if (void 0 !== i) return i.exports;
				var o = n[r] = {
					exports: {}
				};
				return t[r](o, o.exports, e), o.exports
			}
			e.d = function(t, n) {
				for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
					enumerable: !0,
					get: n[r]
				})
			}, e.g = function() {
				if ("object" == typeof globalThis) return globalThis;
				try {
					return this || new Function("return this")()
				} catch (t) {
					if ("object" == typeof window) return window
				}
			}(), e.o = function(t, n) {
				return Object.prototype.hasOwnProperty.call(t, n)
			};
			var r, i = {};
			return r = e(572), i.default = new r.default, i.default
		}()
	}]).default
}));