(this["webpackJsonpblzd-frontend"] = this["webpackJsonpblzd-frontend"] || []).push([
    [1], {
        100: function(e, t, n) {
            "use strict";
            var a = n(335),
                i = n.n(a),
                r = ["https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed.binance.org"];
            t.a = function() {
                var e = i()(0, r.length - 1);
                return r[e]
            }
        },
        101: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(0),
                i = {
                    translations: [],
                    setTranslations: function() {}
                },
                r = Object(a.createContext)(i)
        },
        102: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "d", (function() {
                return r
            }));
            n(0);
            var a = n(14),
                i = n(1),
                r = function() {
                    return Object(i.jsx)(a.H, {
                        variant: "success",
                        outline: !0,
                        startIcon: Object(i.jsx)(a.L, {}),
                        children: "No Fees"
                    })
                },
                s = function() {
                    return Object(i.jsx)(a.H, {
                        variant: "secondary",
                        outline: !0,
                        startIcon: Object(i.jsx)(a.L, {}),
                        children: "Core"
                    })
                },
                u = function() {
                    return Object(i.jsx)(a.H, {
                        variant: "textSubtle",
                        outline: !0,
                        startIcon: Object(i.jsx)(a.p, {}),
                        children: "Community"
                    })
                },
                o = function() {
                    return Object(i.jsx)(a.H, {
                        variant: "binance",
                        outline: !0,
                        startIcon: Object(i.jsx)(a.d, {}),
                        children: "Binance"
                    })
                }
        },
        106: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            }));
            var a = "0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a",
                i = "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07";
            t.c = [{
                name: "Sawmill",
                description: "",
                originalImage: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png",
                previewImage: "sawmill.png",
                blurImage: "swapsies-blur.png",
                sortOrder: 999,
                bunnyId: 0
            }, {
                name: "Quarry",
                description: "",
                originalImage: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png",
                previewImage: "quarry.png",
                blurImage: "drizzle-blur.png",
                sortOrder: 999,
                bunnyId: 1
            }, {
                name: "Mine",
                description: "",
                originalImage: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png",
                previewImage: "diamond.png",
                blurImage: "sparkle-blur.png",
                sortOrder: 999,
                bunnyId: 4
            }]
        },
        120: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return I
            })), n.d(t, "b", (function() {
                return A
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(19),
                u = n(50),
                o = n(60),
                c = n(57),
                p = n(17),
                d = n(8),
                l = n.n(d),
                y = n(65),
                b = n(69),
                m = n(34),
                f = n(21),
                j = n(25),
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(c.a.map(function() {
                                        var e = Object(r.a)(i.a.mark((function e(t) {
                                            var n, a, r, u, o, c, d, x, O, h, w, v, T, k, g, B, M, I, A, E, S, C;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[56], a = [{
                                                            address: t.tokenAddresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.isTokenOnly ? t.tokenAddresses[56] : n,
                                                            name: "balanceOf",
                                                            params: [Object(f.e)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: t.tokenAddresses[56],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 4, Object(m.a)(y, a);
                                                    case 4:
                                                        return r = e.sent, u = Object(p.a)(r, 6), o = u[0], c = u[1], d = u[2], x = u[3], O = u[4], h = u[5], t.isTokenOnly ? (w = new l.a(d).div(new l.a(10).pow(O)), T = t.tokenSymbol === j.b.BUSD && t.quoteTokenSymbol === j.b.BUSD ? new l.a(1) : new l.a(c).div(new l.a(o)), v = w.times(T)) : (k = new l.a(d).div(new l.a(x)), v = new l.a(c).div(new l.a(10).pow(18)).times(new l.a(2)).times(k), w = new l.a(o).div(new l.a(10).pow(O)).times(k), g = new l.a(c).div(new l.a(10).pow(h)).times(k), T = w.comparedTo(0) > 0 ? g.div(w) : new l.a(c).div(new l.a(o))), e.next = 15, Object(m.a)(b, [{
                                                            address: Object(f.e)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(f.e)(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: Object(f.e)(),
                                                            name: "blzdPerBlock"
                                                        }]);
                                                    case 15:
                                                        return B = e.sent, M = Object(p.a)(B, 3), I = M[0], A = M[1], E = M[2], S = new l.a(I.allocPoint._hex), C = S.div(new l.a(A)), e.abrupt("return", Object(s.a)(Object(s.a)({}, t), {}, {
                                                            tokenAmount: w.toJSON(),
                                                            lpTotalInQuoteToken: v.toJSON(),
                                                            tokenPriceVsQuote: T.toJSON(),
                                                            poolWeight: C.toNumber(),
                                                            multiplier: "".concat(S.div(100).toString(), "X"),
                                                            depositFeeBP: I.depositFeeBP,
                                                            blzdPerBlock: new l.a(E).toNumber()
                                                        }));
                                                    case 23:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(f.e)(), a = c.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(m.a)(y, a);
                                case 4:
                                    return r = e.sent, s = r.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(m.a)(y, n);
                                case 3:
                                    return a = e.sent, r = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(f.e)(), a = c.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(m.a)(b, a);
                                case 4:
                                    return r = e.sent, s = r.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(f.e)(), a = c.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingBlzd",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(m.a)(b, a);
                                case 4:
                                    return r = e.sent, s = r.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = {
                    data: Object(u.a)(c.a)
                },
                k = Object(o.c)({
                    name: "Farms",
                    initialState: T,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(s.a)(Object(s.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(s.a)(Object(s.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                g = k.actions,
                B = g.setFarmsPublicData,
                M = g.setFarmUserData,
                I = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x();
                                    case 2:
                                        n = e.sent, t(B(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                A = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, s, u, o;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, O(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, h(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, w(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, v(e);
                                    case 11:
                                        u = t.sent, o = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: r[t],
                                                stakedBalance: s[t],
                                                earnings: u[t]
                                            }
                                        })), n(M({
                                            arrayOfUserDataObjects: o
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = k.reducer
        },
        122: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(148);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        125: function(e, t, n) {
            "use strict";
            var a, i = n(11),
                r = n(2),
                s = n(206),
                u = Object(r.e)(s.a)(a || (a = Object(i.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }));
            t.a = u
        },
        143: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        144: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return i
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return s
            }));
            var a = n(103);
            a.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var i = new a.a(1),
                r = new a.a(10512e3),
                s = 3
        },
        145: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var a, i, r, s, u, o = n(11),
                c = (n(0), n(2)),
                p = n(103),
                d = n(14),
                l = n(27),
                y = n(327),
                b = n(1),
                m = c.e.div(a || (a = Object(o.a)([""]))),
                f = c.e.div(i || (i = Object(o.a)(["\n  width: ", "px;\n"])), (function(e) {
                    return e.theme.spacing[3]
                })),
                j = c.e.div(r || (r = Object(o.a)(["\n  align-items: center;\n  display: flex;\n"]))),
                x = c.e.div(s || (s = Object(o.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                O = c.e.span(u || (u = Object(o.a)(["\n  color: ", ";\n  font-weight: 700;\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                h = function(e) {
                    var t = e.max,
                        n = e.symbol,
                        a = e.onChange,
                        i = e.onSelectMax,
                        r = e.value,
                        s = e.depositFeeBP,
                        u = void 0 === s ? 0 : s,
                        o = Object(l.a)();
                    return Object(b.jsxs)(m, {
                        children: [Object(b.jsxs)(x, {
                            children: [t.toLocaleString(), " ", n, " ", o(526, "Available")]
                        }), Object(b.jsx)(y.a, {
                            endAdornment: Object(b.jsxs)(j, {
                                children: [Object(b.jsx)(O, {
                                    children: n
                                }), Object(b.jsx)(f, {}), Object(b.jsx)("div", {
                                    children: Object(b.jsx)(d.e, {
                                        size: "sm",
                                        onClick: i,
                                        children: o(452, "Max")
                                    })
                                })]
                            }),
                            onChange: a,
                            placeholder: "0",
                            value: r
                        }), u > 0 ? Object(b.jsxs)(x, {
                            children: [o(10001, "Deposit Fee"), ": ", new p.a(r || 0).times(u / 1e4).toString(), " ", n]
                        }) : null]
                    })
                }
        },
        146: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var a = n(60),
                i = Object(a.c)({
                    name: "Block",
                    initialState: {
                        blockNumber: 0
                    },
                    reducers: {
                        setBlock: function(e, t) {
                            return {
                                blockNumber: t.payload
                            }
                        }
                    }
                }),
                r = i.actions.setBlock;
            t.a = i.reducer
        },
        148: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return d
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(17),
                u = n(0),
                o = n.n(u),
                c = n(1),
                p = o.a.createContext({
                    slow: 0,
                    fast: 0
                }),
                d = function(e) {
                    var t = e.children,
                        n = Object(u.useState)(0),
                        a = Object(s.a)(n, 2),
                        o = a[0],
                        d = a[1],
                        l = Object(u.useState)(0),
                        y = Object(s.a)(l, 2),
                        b = y[0],
                        m = y[1];
                    return Object(u.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        m((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(u.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        d((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(c.jsx)(p.Provider, {
                        value: {
                            slow: o,
                            fast: b
                        },
                        children: t
                    })
                }
        },
        150: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            }));
            var a = n(3),
                i = n.n(a),
                r = n(37),
                s = n(19),
                u = n(6),
                o = n(60),
                c = Object(o.b)("prices/fetch", Object(u.a)(i.a.mark((function e() {
                    var t, n;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.pancakeswap.com/api/v1/price");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, e.abrupt("return", {
                                    update_at: n.update_at,
                                    prices: Object.keys(n.prices).reduce((function(e, t) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(r.a)({}, t.toLowerCase(), n.prices[t]))
                                    }), {})
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                p = Object(o.c)({
                    name: "prices",
                    initialState: {
                        isLoading: !1,
                        lastUpdated: null,
                        data: null
                    },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(c.pending, (function(e) {
                            e.isLoading = !0
                        })), e.addCase(c.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.lastUpdated = t.payload.update_at, e.data = t.payload.prices
                        }))
                    }
                });
            t.a = p.reducer
        },
        203: function(e, t, n) {
            "use strict";
            var a = n(19),
                i = (n(0), n(14)),
                r = n(36),
                s = n(27),
                u = n(1);
            t.a = function(e) {
                var t = Object(s.a)(),
                    n = Object(r.m)(),
                    o = n.connect,
                    c = n.reset,
                    p = Object(i.Q)(o, c).onPresentConnectModal;
                return Object(u.jsx)(i.e, Object(a.a)(Object(a.a)({
                    onClick: p
                }, e), {}, {
                    children: t(292, "Unlock Wallet")
                }))
            }
        },
        205: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        206: function(e, t, n) {
            "use strict";
            var a, i = n(11),
                r = n(2).e.div(a || (a = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }));
            t.a = r
        },
        207: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "c", (function() {
                return i.a
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = n(57),
                i = n(45),
                r = [{
                    id: "belt",
                    address: "0xc9FBedC033a1c479a6AD451ffE463025E92a1d38",
                    isActive: !0,
                    name: "STONE (STONE)",
                    subTitle: "AMM protocol incorporating multi-strategy yield optimization",
                    description: "FlintStone Finance is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. STONE is the governance and incentivization token of FlintStone Finance. STONE will be distributed to all types of pools.",
                    launchDate: "Mar. 10",
                    launchTime: "5PM SGT",
                    saleAmount: "150,000 STONE",
                    raiseAmount: "$3,000,000",
                    cakeToBurn: "$1,500,000",
                    projectSiteUrl: "https://flintstone.finance/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "BELT",
                    releaseBlockNumber: 5493919,
                    campaignId: "511080000"
                }];
            a.a.filter((function(e) {
                return e.isCommunity
            })).map((function(e) {
                return e.tokenSymbol
            }))
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "b", (function() {
                return f
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(0),
                u = n(36),
                o = n(147),
                c = n(26),
                p = n(29),
                d = n(35),
                l = n(31),
                y = function(e) {
                    var t = Object(c.b)(),
                        n = Object(u.m)().account,
                        a = Object(l.f)();
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(d.a)(e, a, n);
                                    case 3:
                                        return s = i.sent, t(Object(p.a)(n)), i.abrupt("return", s);
                                    case 8:
                                        return i.prev = 8, i.t0 = i.catch(0), i.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        }))), [n, t, e, a])
                    }
                },
                b = function(e, t) {
                    var n = Object(c.b)(),
                        a = Object(u.m)().account,
                        o = Object(l.i)(t);
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(d.a)(e, o, a);
                                    case 3:
                                        return s = i.sent, n(Object(p.f)(t, a)), i.abrupt("return", s);
                                    case 8:
                                        return i.prev = 8, i.t0 = i.catch(0), i.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        }))), [a, n, e, o, t])
                    }
                },
                m = function() {
                    var e = Object(u.m)().account,
                        t = Object(l.a)(),
                        n = Object(l.d)();
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function a() {
                            var r;
                            return i.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, Object(d.a)(t, n, e);
                                    case 3:
                                        return r = a.sent, a.abrupt("return", r);
                                    case 7:
                                        return a.prev = 7, a.t0 = a.catch(0), a.abrupt("return", !1);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [0, 7]
                            ])
                        }))), [e, t, n])
                    }
                },
                f = function(e, t) {
                    var n = Object(u.m)().account;
                    return Object(s.useCallback)(Object(r.a)(i.a.mark((function a() {
                        var r;
                        return i.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, e.methods.approve(t, o.ethers.constants.MaxUint256).send({
                                        from: n
                                    });
                                case 3:
                                    return r = a.sent, a.abrupt("return", r);
                                case 7:
                                    return a.prev = 7, a.t0 = a.catch(0), a.abrupt("return", !1);
                                case 10:
                                case "end":
                                    return a.stop()
                            }
                        }), a, null, [
                            [0, 7]
                        ])
                    }))), [n, t, e])
                }
        },
        21: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return p
            }));
            var a = n(46),
                i = function(e) {
                    return e[56], e[56]
                },
                r = function() {
                    return a.a.cake[56]
                },
                s = function() {
                    return a.a.masterChef[56]
                },
                u = function() {
                    return a.a.mulltiCall[56]
                },
                o = function() {
                    return a.a.wbnb[56]
                },
                c = function() {
                    return a.a.lottery[56]
                },
                p = function() {
                    return a.a.lotteryNFT[56]
                }
        },
        214: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(0),
                u = n(36),
                o = n(26),
                c = n(29),
                p = n(35),
                d = n(31),
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(o.b)(),
                        a = Object(u.m)(),
                        l = a.account,
                        y = Object(d.f)(),
                        b = Object(d.i)(e),
                        m = Object(s.useCallback)(function() {
                            var a = Object(r.a)(i.a.mark((function a(r) {
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (0 !== e) {
                                                a.next = 5;
                                                break
                                            }
                                            return a.next = 3, Object(p.i)(y, 0, r, l);
                                        case 3:
                                            a.next = 12;
                                            break;
                                        case 5:
                                            if (!t) {
                                                a.next = 10;
                                                break
                                            }
                                            return a.next = 8, Object(p.e)(b, r, l);
                                        case 8:
                                            a.next = 12;
                                            break;
                                        case 10:
                                            return a.next = 12, Object(p.d)(b, r, l);
                                        case 12:
                                            n(Object(c.i)(e, l)), n(Object(c.g)(e, l));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e) {
                                return a.apply(this, arguments)
                            }
                        }(), [l, n, t, y, b, e]);
                    return {
                        onStake: m
                    }
                };
            t.a = function(e) {
                var t = Object(o.b)(),
                    n = Object(u.m)().account,
                    a = Object(d.f)();
                return {
                    onStake: Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s) {
                            var u;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(p.i)(a, e, s, n);
                                    case 2:
                                        u = i.sent, t(Object(c.a)(n)), console.info(u);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), r)
                        })));
                        return function(e) {
                            return s.apply(this, arguments)
                        }
                    }(), [n, t, a, e])
                }
            }
        },
        215: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return y
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "c", (function() {
                return m
            }));
            var a = n(50),
                i = n(3),
                r = n.n(i),
                s = n(6),
                u = n(0),
                o = n(36),
                c = n(26),
                p = n(29),
                d = n(35),
                l = n(31),
                y = function(e) {
                    var t = Object(c.b)(),
                        n = Object(o.m)().account,
                        a = Object(l.f)();
                    return {
                        onReward: Object(u.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(d.b)(a, e, n);
                                    case 2:
                                        return s = i.sent, t(Object(p.a)(n)), i.abrupt("return", s);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [n, t, e, a])
                    }
                },
                b = function(e) {
                    var t = Object(o.m)().account,
                        n = Object(l.f)();
                    return {
                        onReward: Object(u.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return s = e.reduce((function(e, i) {
                                            return [].concat(Object(a.a)(e), [Object(d.b)(n, i, t)])
                                        }), []), i.abrupt("return", Promise.all(s));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [t, e, n])
                    }
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(c.b)(),
                        a = Object(o.m)(),
                        i = a.account,
                        y = Object(l.i)(e),
                        b = Object(l.f)(),
                        m = Object(u.useCallback)(Object(s.a)(r.a.mark((function a() {
                            return r.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (0 !== e) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.next = 3, Object(d.b)(b, 0, i);
                                    case 3:
                                        a.next = 12;
                                        break;
                                    case 5:
                                        if (!t) {
                                            a.next = 10;
                                            break
                                        }
                                        return a.next = 8, Object(d.h)(y, i);
                                    case 8:
                                        a.next = 12;
                                        break;
                                    case 10:
                                        return a.next = 12, Object(d.g)(y, i);
                                    case 12:
                                        n(Object(p.h)(e, i)), n(Object(p.g)(e, i));
                                    case 14:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        }))), [i, n, t, b, y, e]);
                    return {
                        onReward: m
                    }
                }
        },
        216: function(e, t, n) {
            "use strict";
            var a, i, r = n(11),
                s = (n(0), n(2)),
                u = n(1),
                o = s.e.div(a || (a = Object(r.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"])), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.radii.default
                }), (function(e) {
                    return e.theme.spacing[3]
                })),
                c = s.e.input(i || (i = Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])), (function(e) {
                    return e.theme.colors.primary
                }));
            t.a = function(e) {
                var t = e.endAdornment,
                    n = e.onChange,
                    a = e.placeholder,
                    i = e.startAdornment,
                    r = e.value;
                return Object(u.jsxs)(o, {
                    children: [!!i && i, Object(u.jsx)(c, {
                        placeholder: a,
                        value: r,
                        onChange: n
                    }), !!t && t]
                })
            }
        },
        217: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(17),
                u = n(0),
                o = n.n(u),
                c = n(71),
                p = n(1),
                d = o.a.createContext(0),
                l = function(e) {
                    var t = e.children,
                        n = Object(u.useRef)(0),
                        a = Object(u.useState)(0),
                        o = Object(s.a)(a, 2),
                        l = o[0],
                        y = o[1];
                    return Object(u.useEffect)((function() {
                        var e = Object(c.b)(),
                            t = setInterval(Object(r.a)(i.a.mark((function t() {
                                var a;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.eth.getBlockNumber();
                                        case 2:
                                            (a = t.sent) !== n.current && (n.current = a, y(a));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 6e3);
                        return function() {
                            return clearInterval(t)
                        }
                    }), []), Object(p.jsx)(d.Provider, {
                        value: l,
                        children: t
                    })
                }
        },
        25: function(e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.BNB = "BNB", e.STONE = "STONE", e.CAKE = "CAKE", e.SYRUP = "SYRUP", e.BUSD = "BUSD", e.TWT = "TWT", e.UST = "UST"
                }(a || (a = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance"
                }(i || (i = {}))
        },
        27: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(101),
                r = /%(.*?)%/,
                s = function(e, t, n) {
                    var a = e.find((function(e) {
                        return e.data.stringId === t
                    }));
                    if (a) {
                        var i = a.data.text;
                        return i.includes("%") ? function(e, t) {
                            var n = r.exec(e)[0],
                                a = t.split(" ")[0];
                            return e.replace(n, a)
                        }(i, n) : i
                    }
                    return n
                };
            t.a = function() {
                var e = Object(a.useContext)(i.a).translations;
                return function(t, n) {
                    return "error" === e[0] ? n : e.length > 0 ? s(e, t, n) : n
                }
            }
        },
        29: function(e, t, n) {
            "use strict";
            var a = n(120);
            n.d(t, "b", (function() {
                return a.c
            })), n.d(t, "a", (function() {
                return a.b
            }));
            var i = n(68);
            n.d(t, "c", (function() {
                return i.b
            })), n.d(t, "d", (function() {
                return i.c
            })), n.d(t, "f", (function() {
                return i.d
            })), n.d(t, "g", (function() {
                return i.e
            })), n.d(t, "h", (function() {
                return i.f
            })), n.d(t, "i", (function() {
                return i.g
            }));
            var r = n(146);
            n.d(t, "e", (function() {
                return r.b
            }))
        },
        309: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        31: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return B
            })), n.d(t, "a", (function() {
                return M
            })), n.d(t, "h", (function() {
                return I
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "e", (function() {
                return S
            })), n.d(t, "f", (function() {
                return C
            })), n.d(t, "i", (function() {
                return D
            }));
            var a = n(17),
                i = n(0),
                r = n(72),
                s = n.n(r),
                u = n(36),
                o = n(100),
                c = Object(o.a)(),
                p = new s.a.providers.HttpProvider(c, {
                    timeout: 1e4
                }),
                d = function() {
                    var e = Object(u.m)().ethereum,
                        t = Object(i.useRef)(e),
                        n = Object(i.useState)(new s.a(e || p)),
                        r = Object(a.a)(n, 2),
                        o = r[0],
                        c = r[1];
                    return Object(i.useEffect)((function() {
                        e !== t.current && (c(new s.a(e || p)), t.current = e)
                    }), [e]), o
                },
                l = n(21),
                y = n(207),
                b = n(25),
                m = n(338),
                f = n(65),
                j = n(143),
                x = n(322),
                O = n(323),
                h = n(324),
                w = n(69),
                v = n(77),
                T = n(339),
                k = function(e, t, n) {
                    var r = d(),
                        s = Object(i.useState)(new r.eth.Contract(e, t, n)),
                        u = Object(a.a)(s, 2),
                        o = u[0],
                        c = u[1];
                    return Object(i.useEffect)((function() {
                        c(new r.eth.Contract(e, t, n))
                    }), [e, t, n, r]), o
                },
                g = function(e) {
                    return k(m, e)
                },
                B = function(e) {
                    return k(f, e)
                },
                M = function() {
                    return B(Object(l.b)())
                },
                I = function(e) {
                    return k(j, e)
                },
                A = function(e) {
                    return k(x, e)
                },
                E = function() {
                    return k(O, Object(l.c)())
                },
                S = function() {
                    return k(h, Object(l.d)())
                },
                C = function() {
                    return k(w, Object(l.e)())
                },
                D = function(e) {
                    var t = y.c.find((function(t) {
                            return t.sousId === e
                        })),
                        n = t.poolCategory === b.a.BINANCE ? T : v;
                    return k(n, t.contractAddress[56])
                }
        },
        321: function(e, t, n) {
            "use strict";
            var a, i = n(11),
                r = n(2).e.div(a || (a = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));
            t.a = r
        },
        322: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        323: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        324: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]')
        },
        325: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return y
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(0),
                u = n(36),
                o = n(26),
                c = n(29),
                p = n(35),
                d = n(31),
                l = [],
                y = function(e) {
                    var t = Object(o.b)(),
                        n = Object(u.m)().account,
                        a = Object(d.f)(),
                        y = Object(d.i)(e),
                        b = l.includes(e);
                    return {
                        onUnstake: Object(s.useCallback)(function() {
                            var s = Object(r.a)(i.a.mark((function r(s) {
                                var u, o, d;
                                return i.a.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if (0 !== e) {
                                                i.next = 7;
                                                break
                                            }
                                            return i.next = 3, Object(p.j)(a, 0, s, n);
                                        case 3:
                                            u = i.sent, console.info(u), i.next = 18;
                                            break;
                                        case 7:
                                            if (!b) {
                                                i.next = 14;
                                                break
                                            }
                                            return i.next = 10, Object(p.c)(y, s, n);
                                        case 10:
                                            o = i.sent, console.info(o), i.next = 18;
                                            break;
                                        case 14:
                                            return i.next = 16, Object(p.f)(y, s, n);
                                        case 16:
                                            d = i.sent, console.info(d);
                                        case 18:
                                            t(Object(c.i)(e, n)), t(Object(c.g)(e, n)), t(Object(c.h)(e, n));
                                        case 21:
                                        case "end":
                                            return i.stop()
                                    }
                                }), r)
                            })));
                            return function(e) {
                                return s.apply(this, arguments)
                            }
                        }(), [n, t, b, a, y, e])
                    }
                };
            t.a = function(e) {
                var t = Object(o.b)(),
                    n = Object(u.m)().account,
                    a = Object(d.f)();
                return {
                    onUnstake: Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s) {
                            var u;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(p.j)(a, e, s, n);
                                    case 2:
                                        u = i.sent, t(Object(c.a)(n)), console.info(u);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), r)
                        })));
                        return function(e) {
                            return s.apply(this, arguments)
                        }
                    }(), [n, t, a, e])
                }
            }
        },
        327: function(e, t, n) {
            "use strict";
            var a = n(216);
            n.d(t, "a", (function() {
                return a.a
            }))
        },
        336: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        338: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        339: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        34: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(703),
                u = n(71),
                o = n(309),
                c = n(21),
                p = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, p, d, l, y, b;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(u.b)(), r = new a.eth.Contract(o, Object(c.f)()), p = new s.a(t), d = n.map((function(e) {
                                        return [e.address.toLowerCase(), p.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, r.methods.aggregate(d).call();
                                case 6:
                                    return l = e.sent, y = l.returnData, b = y.map((function(e, t) {
                                        return p.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", b);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = p
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "g", (function() {
                return j
            })), n.d(t, "h", (function() {
                return x
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(8),
                u = n.n(s),
                o = n(147),
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.approve(n.options.address, o.ethers.constants.MaxUint256).send({
                                        from: a
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit(n, new u.a(a).times(new u.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit(new u.a(n).times(new u.a(10).pow(18)).toString()).send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({
                                        from: a,
                                        value: new u.a(n).times(new u.a(10).pow(18)).toString()
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.withdraw(n, new u.a(a).times(new u.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !== t.options.address) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 2:
                                    if ("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !== t.options.address) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 4:
                                    return e.abrupt("return", t.methods.withdraw(new u.a(n).times(new u.a(10).pow(18)).toString()).send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit(n, "0").send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit("0").send({
                                        from: n
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({
                                        from: n,
                                        value: new u.a(0)
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        402: function(e, t) {},
        424: function(e, t) {},
        426: function(e, t) {},
        44: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return f
            })), n.d(t, "d", (function() {
                return j
            })), n.d(t, "b", (function() {
                return x
            })), n.d(t, "c", (function() {
                return O
            })), n.d(t, "h", (function() {
                return h
            })), n.d(t, "j", (function() {
                return w
            })), n.d(t, "i", (function() {
                return v
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "e", (function() {
                return k
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "a", (function() {
                return B
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(8),
                u = n.n(s),
                o = n(0),
                c = n(26),
                p = n(122),
                d = n(71),
                l = n(29),
                y = n(25),
                b = n(150),
                m = new u.a(0),
                f = function() {
                    var e = Object(c.b)(),
                        t = Object(p.a)().slowRefresh;
                    Object(o.useEffect)((function() {
                        e(Object(l.b)()), e(Object(l.c)())
                    }), [e, t]), Object(o.useEffect)((function() {
                        var t = Object(d.c)(),
                            n = setInterval(Object(r.a)(i.a.mark((function n() {
                                var a;
                                return i.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.eth.getBlockNumber();
                                        case 2:
                                            a = n.sent, e(Object(l.e)(a));
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 6e3);
                        return function() {
                            return clearInterval(n)
                        }
                    }), [e])
                },
                j = function() {
                    return Object(c.c)((function(e) {
                        return e.farms.data
                    }))
                },
                x = function(e) {
                    return Object(c.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                O = function(e) {
                    var t = x(e);
                    return {
                        allowance: t.userData ? new u.a(t.userData.allowance) : new u.a(0),
                        tokenBalance: t.userData ? new u.a(t.userData.tokenBalance) : new u.a(0),
                        stakedBalance: t.userData ? new u.a(t.userData.stakedBalance) : new u.a(0),
                        earnings: t.userData ? new u.a(t.userData.earnings) : new u.a(0)
                    }
                },
                h = function(e) {
                    var t = Object(p.a)().fastRefresh,
                        n = Object(c.b)();
                    return Object(o.useEffect)((function() {
                        e && n(Object(l.d)(e))
                    }), [e, n, t]), Object(c.c)((function(e) {
                        return e.pools.data
                    }))
                },
                w = function() {
                    var e = x(5);
                    return e.tokenPriceVsQuote ? new u.a(e.tokenPriceVsQuote) : m
                },
                v = function() {
                    var e = x(6);
                    return e.tokenPriceVsQuote ? new u.a(e.tokenPriceVsQuote) : m
                },
                T = function() {
                    for (var e = j(), t = w(), n = v(), a = new u.a(0), i = 0; i < e.length; i++) {
                        var r = e[i];
                        if (r.lpTotalInQuoteToken) {
                            var s = void 0;
                            s = r.quoteTokenSymbol === y.b.BNB ? t.times(r.lpTotalInQuoteToken) : r.quoteTokenSymbol === y.b.STONE ? n.times(r.lpTotalInQuoteToken) : r.lpTotalInQuoteToken, a = a.plus(s)
                        }
                    }
                    return a
                },
                k = function() {
                    var e = Object(p.a)().slowRefresh,
                        t = Object(c.b)();
                    Object(o.useEffect)((function() {
                        t(Object(b.b)())
                    }), [t, e])
                },
                g = function(e) {
                    var t = Object(c.c)((function(e) {
                            return e.prices.data
                        })),
                        n = e.toLowerCase();
                    return t ? ("bnb" === n && (n = "wbnb"), "btc" === n && (n = "btcb"), t[n]) : null
                },
                B = function() {
                    return Object(c.c)((function(e) {
                        return e.block
                    }))
                }
        },
        45: function(e, t, n) {
            "use strict";
            var a = n(70),
                i = n(25),
                r = [{
                    sousId: 1,
                    stakingToken: a.a.blzd,
                    earningToken: a.a.bnb,
                    contractAddress: {
                        97: "",
                        56: "0x481055C4182B9A5e90d8E7EDe9f65b957dC0Ec22"
                    },
                    poolCategory: i.a.CORE,
                    harvest: !0,
                    tokenPerBlock: "0.002480",
                    sortOrder: 999,
                    isFinished: !0
                }, {
                    sousId: 3,
                    stakingToken: a.a.blzd,
                    earningToken: a.a.btc,
                    contractAddress: {
                        97: "",
                        56: "0xa918f270F3F9bC0032aF233876BA1EE43d4946e5"
                    },
                    poolCategory: i.a.CORE,
                    harvest: !0,
                    tokenPerBlock: "0.0000049603",
                    sortOrder: 999,
                    isFinished: !0
                }, {
                    sousId: 4,
                    stakingToken: a.a.blzd,
                    earningToken: a.a.eth,
                    contractAddress: {
                        97: "",
                        56: "0x6F7CAFCD187d9cAbfa5A0139c7cC28c03BF7633b"
                    },
                    poolCategory: i.a.CORE,
                    harvest: !0,
                    tokenPerBlock: "0.000248",
                    sortOrder: 999,
                    isFinished: !0
                }];
            t.a = r
        },
        46: function(e, t, n) {
            "use strict";
            t.a = {
                cake: {
                    56: "0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2",
                    97: "0x1977ECbdE6832920c3554E238deDFfBC5ed996c9"
                },
                masterChef: {
                    56: "0xD5d5C2aED31F54184D63EdE3b71530ac61980a34",
                    97: ""
                },
                wbnb: {
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    97: ""
                },
                lottery: {
                    56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91",
                    97: ""
                },
                lotteryNFT: {
                    56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1",
                    97: ""
                },
                mulltiCall: {
                    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                    97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412"
                },
                busd: {
                    56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    97: ""
                },
                pointCenterIfo: {
                    56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a",
                    97: "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3"
                }
            }
        },
        500: function(e, t) {},
        502: function(e, t) {},
        534: function(e, t) {},
        539: function(e, t) {},
        54: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return s
            }));
            var a = n(8),
                i = n.n(a),
                r = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = new i.a(e).dividedBy(new i.a(10).pow(t));
                    return n.toNumber()
                },
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new i.a(10).pow(t)).toFixed()
                }
        },
        541: function(e, t) {},
        548: function(e, t) {},
        561: function(e, t) {},
        57: function(e, t, n) {
            "use strict";
            var a = n(46),
                i = n(25),
                r = [{
                    pid: 6,
                    lpSymbol: "STONE-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x8b16a3e3ba1e3f5088489003c48ed91e7ec51a95"
                    },
                    tokenSymbol: "STONE",
                    tokenAddresses: {
                        97: "",
                        56: "0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 2,
                    lpSymbol: "STONE-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x1d185d1e413333a4e0561e149ea4f509a67ccbe7"
                    },
                    tokenSymbol: "STONE",
                    tokenAddresses: {
                        97: "",
                        56: "0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }, {
                    pid: 5,
                    lpSymbol: "WBNB-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x1B96B92314C44b159149f7E0303511fB2Fc4774f"
                    },
                    tokenSymbol: "WBNB",
                    tokenAddresses: {
                        97: "",
                        56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 0,
                    isTokenOnly: !0,
                    lpSymbol: "STONE",
                    lpAddresses: {
                        97: "",
                        56: "0x8b16a3e3ba1e3f5088489003c48ed91e7ec51a95"
                    },
                    tokenSymbol: "STONE",
                    tokenAddresses: {
                        97: "",
                        56: "0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 4,
                    isTokenOnly: !0,
                    lpSymbol: "BUSD",
                    lpAddresses: {
                        97: "",
                        56: "0x8b16a3e3ba1e3f5088489003c48ed91e7ec51a95"
                    },
                    tokenSymbol: "BUSD",
                    tokenAddresses: {
                        97: "",
                        56: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 3,
                    isTokenOnly: !0,
                    lpSymbol: "WBNB",
                    lpAddresses: {
                        97: "",
                        56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
                    },
                    tokenSymbol: "WBNB",
                    tokenAddresses: {
                        97: "",
                        56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }];
            t.a = r
        },
        65: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        68: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return P
            })), n.d(t, "c", (function() {
                return z
            })), n.d(t, "d", (function() {
                return R
            })), n.d(t, "e", (function() {
                return U
            })), n.d(t, "g", (function() {
                return H
            })), n.d(t, "f", (function() {
                return J
            }));
            var a = n(3),
                i = n.n(a),
                r = n(6),
                s = n(37),
                u = n(19),
                o = n(50),
                c = n(60),
                p = n(45),
                d = n(77),
                l = n(205),
                y = n(336),
                b = n(34),
                m = n(21),
                f = n(8),
                j = n.n(f),
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) {
                                        return 0 !== e.sousId
                                    })), n = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "startBlock"
                                        }
                                    })), a = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "bonusEndBlock"
                                        }
                                    })), e.next = 5, Object(b.a)(d, n);
                                case 5:
                                    return r = e.sent, e.next = 8, Object(b.a)(d, a);
                                case 8:
                                    return s = e.sent, e.abrupt("return", t.map((function(e, t) {
                                        var n = r[t],
                                            a = s[t];
                                        return {
                                            sousId: e.sousId,
                                            startBlock: new j.a(n).toJSON(),
                                            endBlock: new j.a(a).toJSON()
                                        }
                                    })));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, s, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) {
                                        return "BNB" !== e.stakingToken.symbol
                                    })), n = p.a.filter((function(e) {
                                        return "BNB" === e.stakingToken.symbol
                                    })), a = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "balanceOf",
                                            params: [Object(m.a)(e.contractAddress)]
                                        }
                                    })), r = n.map((function(e) {
                                        return {
                                            address: Object(m.g)(),
                                            name: "balanceOf",
                                            params: [Object(m.a)(e.contractAddress)]
                                        }
                                    })), e.next = 6, Object(b.a)(l, a);
                                case 6:
                                    return s = e.sent, e.next = 9, Object(b.a)(y, r);
                                case 9:
                                    return u = e.sent, e.abrupt("return", [].concat(Object(o.a)(t.map((function(e, t) {
                                        return {
                                            sousId: e.sousId,
                                            totalStaked: new j.a(s[t]).toJSON()
                                        }
                                    }))), Object(o.a)(n.map((function(e, t) {
                                        return {
                                            sousId: e.sousId,
                                            totalStaked: new j.a(u[t]).toJSON()
                                        }
                                    })))));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                h = n(69),
                w = n(65),
                v = n(71),
                T = p.a.filter((function(e) {
                    return "BNB" !== e.stakingToken.symbol
                })),
                k = p.a.filter((function(e) {
                    return "BNB" === e.stakingToken.symbol
                })),
                g = p.a.filter((function(e) {
                    return 0 !== e.sousId
                })),
                B = Object(v.c)(),
                M = new B.eth.Contract(h, Object(m.e)()),
                I = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = T.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "allowance",
                                            params: [t, Object(m.a)(e.contractAddress)]
                                        }
                                    })), e.next = 3, Object(b.a)(w, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", T.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = T.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(w, n);
                                case 3:
                                    return a = e.sent, r = T.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, B.eth.getBalance(t);
                                case 7:
                                    return o = e.sent, c = k.reduce((function(e, t) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(o).toJSON()))
                                    }), {}), e.abrupt("return", Object(u.a)(Object(u.a)({}, r), c));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = g.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(d, n);
                                case 3:
                                    return a = e.sent, r = g.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, M.methods.userInfo("0", t).call();
                                case 7:
                                    return o = e.sent, c = o.amount, e.abrupt("return", Object(u.a)(Object(u.a)({}, r), {}, {
                                        0: new j.a(c).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = g.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(d, n);
                                case 3:
                                    return a = e.sent, r = g.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, M.methods.pendingBlzd("0", t).call();
                                case 7:
                                    return o = e.sent, e.abrupt("return", Object(u.a)(Object(u.a)({}, r), {}, {
                                        0: new j.a(o).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = {
                    data: Object(o.a)(p.a)
                },
                D = Object(c.c)({
                    name: "Pools",
                    initialState: C,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(u.a)(Object(u.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(u.a)(Object(u.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.sousId,
                                o = e.data.findIndex((function(e) {
                                    return e.sousId === r
                                }));
                            e.data[o] = Object(u.a)(Object(u.a)({}, e.data[o]), {}, {
                                userData: Object(u.a)(Object(u.a)({}, e.data[o].userData), {}, Object(s.a)({}, a, i))
                            })
                        }
                    }
                }),
                L = D.actions,
                N = L.setPoolsPublicData,
                F = L.setPoolsUserData,
                _ = L.updatePoolsUserData,
                P = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n, a, r;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x();
                                    case 2:
                                        return n = e.sent, e.next = 5, O();
                                    case 5:
                                        a = e.sent, r = p.a.map((function(e) {
                                            var t = n.find((function(t) {
                                                    return t.sousId === e.sousId
                                                })),
                                                i = a.find((function(t) {
                                                    return t.sousId === e.sousId
                                                }));
                                            return Object(u.a)(Object(u.a)({}, t), i)
                                        })), t(N(r));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                z = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, s, u, o;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, I(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, A(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, E(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, S(e);
                                    case 11:
                                        u = t.sent, o = p.a.map((function(e) {
                                            return {
                                                sousId: e.sousId,
                                                allowance: a[e.sousId],
                                                stakingTokenBalance: r[e.sousId],
                                                stakedBalance: s[e.sousId],
                                                pendingReward: u[e.sousId]
                                            }
                                        })), n(F(o));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                R = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, I(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "allowance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                U = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, A(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                H = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, E(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                J = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = D.reducer
        },
        69: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract BlzdToken","name":"_blzd","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_blzdPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetDevAddress","type":"event"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddressBb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddressBb","type":"event"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddressSt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddressSt","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blzdPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"blzdPerBlock","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"blzd","outputs":[{"internalType":"contract BlzdToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blzdPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddBb","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddSt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingBlzd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accBlzdPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        70: function(e, t, n) {
            "use strict";
            t.a = {
                bnb: {
                    symbol: "BNB",
                    projectLink: "https://www.binance.com/"
                },
                blzd: {
                    symbol: "STONE",
                    address: {
                        56: "0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2",
                        97: "0x1977ECbdE6832920c3554E238deDFfBC5ed996c9"
                    },
                    decimals: 18,
                    projectLink: "https://flintstone.finance/"
                },
                cake: {
                    symbol: "CAKE",
                    address: {
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                        97: "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe"
                    },
                    decimals: 18,
                    projectLink: "https://pancakeswap.finance/"
                },
                txl: {
                    symbol: "TXL",
                    address: {
                        56: "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://tixl.org/"
                },
                cos: {
                    symbol: "COS",
                    address: {
                        56: "0x96Dd399F9c3AFda1F194182F71600F1B65946501",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.contentos.io/"
                },
                bunny: {
                    symbol: "BUNNY",
                    address: {
                        56: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://pancakebunny.finance/"
                },
                alice: {
                    symbol: "ALICE",
                    address: {
                        56: "0xac51066d7bec65dc4589368da368b212745d63e8",
                        97: ""
                    },
                    decimals: 6,
                    projectLink: "https://www.myneighboralice.com/"
                },
                for: {
                    symbol: "FOR",
                    address: {
                        56: "0x658A109C5900BC6d2357c87549B651670E5b0539",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.for.tube/home"
                },
                bux: {
                    symbol: "BUX",
                    address: {
                        56: "0x211ffbe424b90e25a15531ca322adf1559779e45",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://getbux.com/bux-crypto/"
                },
                nuls: {
                    symbol: "NULS",
                    address: {
                        56: "0x8cd6e29d3686d24d3c2018cee54621ea0f89313b",
                        97: ""
                    },
                    decimals: 8,
                    projectLink: "https://www.nuls.io/"
                },
                belt: {
                    symbol: "BELT",
                    address: {
                        56: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://beta.belt.fi/"
                },
                ramp: {
                    symbol: "RAMP",
                    address: {
                        56: "0x8519ea49c997f50ceffa444d240fb655e89248aa",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://rampdefi.com/"
                },
                bfi: {
                    symbol: "BFI",
                    address: {
                        56: "0x81859801b01764d4f0fa5e64729f5a6c3b91435b",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://bearn.fi/"
                },
                dexe: {
                    symbol: "DEXE",
                    address: {
                        56: "0x039cb485212f996a9dbb85a9a75d898f94d38da6",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://dexe.network/"
                },
                bel: {
                    symbol: "BEL",
                    address: {
                        56: "0x8443f091997f06a61670b735ed92734f5628692f",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://bella.fi/"
                },
                tpt: {
                    symbol: "TPT",
                    address: {
                        56: "0xeca41281c24451168a37211f0bc2b8645af45092",
                        97: ""
                    },
                    decimals: 4,
                    projectLink: "https://www.tokenpocket.pro/"
                },
                watch: {
                    symbol: "WATCH",
                    address: {
                        56: "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://yieldwatch.net/"
                },
                xmark: {
                    symbol: "xMARK",
                    address: {
                        56: "0x26a5dfab467d4f58fb266648cae769503cec9580",
                        97: ""
                    },
                    decimals: 9,
                    projectLink: "https://benchmarkprotocol.finance/"
                },
                bmxx: {
                    symbol: "bMXX",
                    address: {
                        56: "0x4131b87f74415190425ccd873048c708f8005823",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://multiplier.finance/"
                },
                iotx: {
                    symbol: "IOTX",
                    address: {
                        56: "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://iotex.io/"
                },
                bor: {
                    symbol: "BOR",
                    address: {
                        56: "0x92d7756c60dcfd4c689290e8a9f4d263b3b32241",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.boringdao.com/"
                },
                bopen: {
                    symbol: "bOPEN",
                    address: {
                        56: "0xf35262a9d427f96d2437379ef090db986eae5d42",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://opendao.io/"
                },
                dodo: {
                    symbol: "DODO",
                    address: {
                        56: "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://dodoex.io/"
                },
                swingby: {
                    symbol: "SWINGBY",
                    address: {
                        56: "0x71de20e0c4616e7fcbfdd3f875d568492cbe4739",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://swingby.network/"
                },
                bry: {
                    symbol: "BRY",
                    address: {
                        56: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://berrydata.co/"
                },
                zee: {
                    symbol: "ZEE",
                    address: {
                        56: "0x44754455564474a89358b2c2265883df993b12f0",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://zeroswap.io/"
                },
                swgb: {
                    symbol: "SWGb",
                    address: {
                        56: "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://swirgepay.com/"
                },
                sfp: {
                    symbol: "SFP",
                    address: {
                        56: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.safepal.io/"
                },
                lina: {
                    symbol: "LINA",
                    address: {
                        56: "0x762539b45a1dcce3d36d080f74d1aed37844b878",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://linear.finance/"
                },
                lit: {
                    symbol: "LIT",
                    address: {
                        56: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.litentry.com/"
                },
                hget: {
                    symbol: "HGET",
                    address: {
                        56: "0xc7d8d35eba58a0935ff2d5a33df105dd9f071731",
                        97: ""
                    },
                    decimals: 6,
                    projectLink: "https://www.hedget.com/"
                },
                bdo: {
                    symbol: "BDO",
                    address: {
                        56: "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://bdollar.fi/"
                },
                egld: {
                    symbol: "EGLD",
                    address: {
                        56: "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://elrond.com/"
                },
                ust: {
                    symbol: "UST",
                    address: {
                        56: "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://mirror.finance/"
                },
                wsote: {
                    symbol: "wSOTE",
                    address: {
                        56: "0x541e619858737031a1244a5d0cd47e5ef480342c",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://soteria.finance/#/"
                },
                front: {
                    symbol: "FRONT",
                    address: {
                        56: "0x928e55dab735aa8260af3cedada18b5f70c72f1b",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://frontier.xyz/"
                },
                helmet: {
                    symbol: "Helmet",
                    address: {
                        56: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.helmet.insure/"
                },
                btcst: {
                    symbol: "BTCST",
                    address: {
                        56: "0x78650b139471520656b9e7aa7a5e9276814a38e9",
                        97: ""
                    },
                    decimals: 17,
                    projectLink: "https://www.1-b.tc/"
                },
                bscx: {
                    symbol: "BSCX",
                    address: {
                        56: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://bscex.org/"
                },
                ten: {
                    symbol: "TEN",
                    address: {
                        56: "0xdff8cb622790b7f92686c722b02cab55592f152c",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.tenet.farm/"
                },
                balbt: {
                    symbol: "bALBT",
                    address: {
                        56: "0x72faa679e1008ad8382959ff48e392042a8b06f7",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://allianceblock.io/"
                },
                asr: {
                    symbol: "ASR",
                    address: {
                        56: "0x80d5f92c2c8c682070c95495313ddb680b267320",
                        97: ""
                    },
                    decimals: 2,
                    projectLink: "https://www.chiliz.com"
                },
                atm: {
                    symbol: "ATM",
                    address: {
                        56: "0x25e9d05365c867e59c1904e7463af9f312296f9e",
                        97: ""
                    },
                    decimals: 2,
                    projectLink: "https://www.chiliz.com"
                },
                og: {
                    symbol: "OG",
                    address: {
                        56: "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c",
                        97: ""
                    },
                    decimals: 2,
                    projectLink: "https://www.chiliz.com"
                },
                reef: {
                    symbol: "REEF",
                    address: {
                        56: "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://reef.finance/"
                },
                ditto: {
                    symbol: "DITTO",
                    address: {
                        56: "0x233d91a0713155003fc4dce0afa871b508b3b715",
                        97: ""
                    },
                    decimals: 9,
                    projectLink: "https://ditto.money/"
                },
                juv: {
                    symbol: "JUV",
                    address: {
                        56: "0xc40c9a843e1c6d01b7578284a9028854f6683b1b",
                        97: ""
                    },
                    decimals: 2,
                    projectLink: "https://www.chiliz.com"
                },
                psg: {
                    symbol: "PSG",
                    address: {
                        56: "0xbc5609612b7c44bef426de600b5fd1379db2ecf1",
                        97: ""
                    },
                    decimals: 2,
                    projectLink: "https://www.chiliz.com"
                },
                vai: {
                    symbol: "VAI",
                    address: {
                        56: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://venus.io/"
                },
                wbnb: {
                    symbol: "wBNB",
                    address: {
                        56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                        97: "0xae13d989dac2f0debff460ac112a837c89baa7cd"
                    },
                    decimals: 18,
                    projectLink: "https://pancakeswap.finance/"
                },
                blk: {
                    symbol: "BLK",
                    address: {
                        56: "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f",
                        97: ""
                    },
                    decimals: 6,
                    projectLink: "https://blink.wink.org"
                },
                unfi: {
                    symbol: "UNFI",
                    address: {
                        56: "0x728c5bac3c3e370e372fc4671f9ef6916b814d8b",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://unifiprotocol.com"
                },
                twt: {
                    symbol: "TWT",
                    address: {
                        56: "0x4b0f1812e5df2a09796481ff14017e6005508003",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://trustwallet.com/"
                },
                hard: {
                    symbol: "HARD",
                    address: {
                        56: "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
                        97: ""
                    },
                    decimals: 6,
                    projectLink: "https://hard.kava.io"
                },
                broobee: {
                    symbol: "bROOBEE",
                    address: {
                        56: "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://roobee.io/"
                },
                stax: {
                    symbol: "STAX",
                    address: {
                        56: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "http://stablexswap.com/"
                },
                nar: {
                    symbol: "NAR",
                    address: {
                        56: "0xa1303e6199b319a891b79685f0537d289af1fc83",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://narwhalswap.org/"
                },
                nya: {
                    symbol: "NYA",
                    address: {
                        56: "0xbfa0841f7a90c4ce6643f651756ee340991f99d5",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://nyanswop.org/"
                },
                ctk: {
                    symbol: "CTK",
                    address: {
                        56: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
                        97: ""
                    },
                    decimals: 6,
                    projectLink: "https://www.certik.foundation/"
                },
                inj: {
                    symbol: "INJ",
                    address: {
                        56: "0xa2b726b1145a4773f68593cf171187d8ebe4d495",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://injectiveprotocol.com/"
                },
                sxp: {
                    symbol: "SXP",
                    address: {
                        56: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://swipe.io/"
                },
                alpha: {
                    symbol: "ALPHA",
                    address: {
                        56: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://alphafinance.io/"
                },
                xvs: {
                    symbol: "XVS",
                    address: {
                        56: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://venus.io/"
                },
                sushi: {
                    symbol: "SUSHI",
                    address: {
                        56: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://sushi.com/"
                },
                comp: {
                    symbol: "COMP",
                    address: {
                        56: "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://compound.finance/"
                },
                syrup: {
                    symbol: "SYRUP",
                    address: {
                        56: "0x009cF7bC57584b7998236eff51b98A168DceA9B0",
                        97: "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9"
                    },
                    decimals: 18,
                    projectLink: "https://pancakeswap.finance/"
                },
                bifi: {
                    symbol: "BIFI",
                    address: {
                        56: "0xca3f508b8e4dd382ee878a314789373d80a5190a",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://beefy.finance/"
                },
                dusk: {
                    symbol: "DUSK",
                    address: {
                        56: "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://dusk.network/"
                },
                busd: {
                    symbol: "BUSD",
                    address: {
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.paxos.com/busd/"
                },
                eth: {
                    symbol: "ETH",
                    address: {
                        56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://ethereum.org/en/"
                },
                beth: {
                    symbol: "BETH",
                    address: {
                        56: "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://ethereum.org/en/eth2/beacon-chain/"
                },
                mamzn: {
                    symbol: "mAMZN",
                    address: {
                        56: "0x3947B992DC0147D2D89dF0392213781b04B25075",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://mirror.finance/"
                },
                mgoogl: {
                    symbol: "mGOOGL",
                    address: {
                        56: "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://mirror.finance/"
                },
                mnflx: {
                    symbol: "mNFLX",
                    address: {
                        56: "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://mirror.finance/"
                },
                mtsla: {
                    symbol: "mTSLA",
                    address: {
                        56: "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://mirror.finance/"
                },
                ltc: {
                    symbol: "LTC",
                    address: {
                        56: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://litecoin.org/"
                },
                usdc: {
                    symbol: "USDC",
                    address: {
                        56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://www.centre.io/usdc"
                },
                dai: {
                    symbol: "DAI",
                    address: {
                        56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "http://www.makerdao.com/"
                },
                ada: {
                    symbol: "ADA",
                    address: {
                        56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://www.cardano.org/"
                },
                band: {
                    symbol: "BAND",
                    address: {
                        56: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://bandprotocol.com/"
                },
                dot: {
                    symbol: "DOT",
                    address: {
                        56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://polkadot.network/"
                },
                eos: {
                    symbol: "EOS",
                    address: {
                        56: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://eos.io/"
                },
                link: {
                    symbol: "LINK",
                    address: {
                        56: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://chain.link/"
                },
                usdt: {
                    symbol: "USDT",
                    address: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x55d398326f99059ff775485246999027b3197955"
                    },
                    decimals: 18,
                    projectLink: "https://tether.to/"
                },
                btc: {
                    symbol: "BTC",
                    address: {
                        56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://bitcoin.org/"
                },
                xrp: {
                    symbol: "XRP",
                    address: {
                        56: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://ripple.com/xrp/"
                },
                atom: {
                    symbol: "ATOM",
                    address: {
                        56: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://cosmos.network/"
                },
                yfii: {
                    symbol: "YFII",
                    address: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5"
                    },
                    decimals: 18,
                    projectLink: "https://dfi.money/#/"
                },
                xtz: {
                    symbol: "XTZ",
                    address: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x16939ef78684453bfdfb47825f8a5f714f12623a"
                    },
                    decimals: 18,
                    projectLink: "https://www.tezos.com/"
                },
                bch: {
                    symbol: "BCH",
                    address: {
                        56: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "http://bch.info/"
                },
                yfi: {
                    symbol: "YFI",
                    address: {
                        56: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://yearn.finance/"
                },
                uni: {
                    symbol: "UNI",
                    address: {
                        56: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://uniswap.org/"
                },
                fil: {
                    symbol: "FIL",
                    address: {
                        56: "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://filecoin.io/"
                },
                bake: {
                    symbol: "BAKE",
                    address: {
                        56: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://www.bakeryswap.org/"
                },
                burger: {
                    symbol: "BURGER",
                    address: {
                        56: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    decimals: 18,
                    projectLink: "https://burgerswap.org/"
                },
                bdigg: {
                    symbol: "bDIGG",
                    address: {
                        56: "0x5986d5c77c65e5801a5caa4fae80089f870a71da",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://badger.finance/"
                },
                bbadger: {
                    symbol: "bBadger",
                    address: {
                        56: "0x1f7216fdb338247512ec99715587bb97bbf96eae",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://badger.finance/"
                },
                trade: {
                    symbol: "TRADE",
                    address: {
                        56: "0x7af173f350d916358af3e218bdf2178494beb748",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://unitrade.app/"
                },
                pnt: {
                    symbol: "PNT",
                    address: {
                        56: "0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a",
                        97: ""
                    },
                    decimals: 18,
                    projectLink: "https://ptokens.io/"
                }
            }
        },
        701: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, s, u, o, c, p, d, l, y, b, m = n(0),
                f = n.n(m),
                j = n(75),
                x = n.n(j),
                O = n(49),
                h = n(28),
                w = n(36),
                v = n(14),
                T = n(8),
                k = n.n(T),
                g = n(44),
                B = function() {
                    var e = Object(g.i)(),
                        t = e.eq(0) ? "" : " - $".concat(e.toNumber().toLocaleString(void 0, {
                            minimumFractionDigits: 3,
                            maximumFractionDigits: 3
                        }));
                    Object(m.useEffect)((function() {
                        document.title = "FLINTSTONE.FINANCE".concat(t)
                    }), [t])
                },
                M = n(11),
                I = n(2),
                A = Object(I.c)(a || (a = Object(M.a)(["\n  * {\n    font-family: 'Rubik', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) {
                    return e.theme.colors.background
                })),
                E = n(19),
                S = {
                    code: "en",
                    language: "English"
                },
                C = [S],
                D = n(17),
                L = n(101),
                N = n(1),
                F = "pancakeSwapLanguage",
                _ = f.a.createContext({
                    selectedLanguage: S,
                    setSelectedLanguage: function() {},
                    translatedLanguage: S,
                    setTranslatedLanguage: function() {}
                }),
                P = function(e) {
                    var t = e.children,
                        n = Object(m.useState)(S),
                        a = Object(D.a)(n, 2),
                        i = a[0],
                        r = a[1],
                        s = Object(m.useState)(S),
                        u = Object(D.a)(s, 2),
                        o = u[0],
                        c = u[1],
                        p = Object(m.useState)([]),
                        d = Object(D.a)(p, 2),
                        l = d[0],
                        y = d[1];
                    Object(m.useEffect)((function() {
                        var e = localStorage.getItem(F);
                        if (e) {
                            var t = function(e) {
                                return C.filter((function(t) {
                                    return t.code === e
                                }))[0]
                            }(e);
                            r(t)
                        } else r(S)
                    }), []), Object(m.useEffect)((function() {
                        i && fetch("./i18n/".concat(i.code, ".json")).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            e.data.length < 1 ? y(["error"]) : y(e.data)
                        })).then((function() {
                            return c(i)
                        })).catch((function(e) {
                            console.error("ERROR"), console.error(e), y(["error"])
                        }))
                    }), [i, y]);
                    return Object(N.jsx)(_.Provider, {
                        value: {
                            selectedLanguage: i,
                            setSelectedLanguage: function(e) {
                                r(e), localStorage.setItem(F, e.code)
                            },
                            translatedLanguage: o,
                            setTranslatedLanguage: c
                        },
                        children: Object(N.jsx)(L.a.Provider, {
                            value: {
                                translations: l,
                                setTranslations: y
                            },
                            children: t
                        })
                    })
                },
                z = "IS_DARK",
                R = f.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                U = function(e) {
                    var t = e.children,
                        n = Object(m.useState)((function() {
                            var e = localStorage.getItem(z);
                            return !!e && JSON.parse(e)
                        })),
                        a = Object(D.a)(n, 2),
                        i = a[0],
                        r = a[1];
                    return Object(N.jsx)(R.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function() {
                                r((function(e) {
                                    return localStorage.setItem(z, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(N.jsx)(I.b, {
                            theme: i ? v.N : v.O,
                            children: t
                        })
                    })
                },
                H = function() {
                    var e = Object(m.useContext)(R);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(m.useContext)(I.a)
                    }
                },
                J = [{
                    label: "Home",
                    icon: "HomeIcon",
                    href: "/"
                }, {
                    label: "Trade",
                    icon: "InfoIcon",
                    items: [{
                        label: "Exchange",
                        href: "https://exchange.flintstone.finance/#/swap?inputCurrency=0xeca48ab5ee4812eb6395e961dc9aac53e72cc5a2",
                        external: !0
                    }, {
                        label: "Liquidity",
                        href: "https://exchange.flintstone.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xeca48aB5EE4812eB6395E961dC9aac53E72Cc5A2",
                        external: !0
                    }]
                }, {
                    label: "Farms",
                    icon: "FarmIcon",
                    href: "/farms"
                }, {
                    label: "Staking",
                    icon: "SunIcon",
                    href: "/caves"
                }, {
                    label: "LaunchPool",
                    icon: "MoonIcon",
                    href: "/pools"
                }, {
                    label: "IFO",
                    icon: "IfoIcon",
                    href: "/ifo"
                }, {
                    label: "NFT",
                    icon: "NftIcon",
                    href: "/nft"
                }, {
                    label: "More",
                    icon: "MoreIcon",
                    items: [{
                        label: "Gov",
                        href: "https://snapshot.org/#/flintstonefinance.eth",
                        external: !0
                    }, {
                        label: "Gits",
                        href: "/"
                    }]
                }],
                W = function(e) {
                    var t = Object(w.m)(),
                        n = t.account,
                        a = t.connect,
                        i = t.reset,
                        r = Object(m.useContext)(_),
                        s = r.selectedLanguage,
                        u = r.setSelectedLanguage,
                        o = H(),
                        c = o.isDark,
                        p = o.toggleTheme,
                        d = Object(g.i)();
                    return Object(N.jsx)(v.z, Object(E.a)({
                        account: n,
                        login: a,
                        logout: i,
                        isDark: c,
                        toggleTheme: p,
                        currentLang: s && s.code,
                        langs: C,
                        setLang: u,
                        cakePriceUsd: d.toNumber(),
                        links: J,
                        priceLink: "/"
                    }, e))
                },
                q = n(125),
                Q = Object(I.e)(q.a)(i || (i = Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                X = I.e.div(r || (r = Object(M.a)(["\n  transition: transform 0.3s ease;\n  margin-bottom: 24px;\n  animation: pulse 1.25s ease-in-out infinite;\n  @keyframes pulse {\n    0% {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n    50% {\n      -webkit-transform: scale3d(1.05, 1.05, 1.05);\n      transform: scale3d(1.05, 1.05, 1.05);\n    }\n    to {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n  }\n"]))),
                Y = function() {
                    return Object(N.jsx)(Q, {
                        children: Object(N.jsx)(X, {
                            children: Object(N.jsx)("img", {
                                style: {
                                    height: 86
                                },
                                src: "/images/blzd/logo.png",
                                alt: "logo"
                            })
                        })
                    })
                },
                G = n(195),
                V = n.n(G),
                K = n(337),
                Z = n.n(K),
                $ = n(27),
                ee = n(321),
                te = n(102),
                ne = I.e.div(s || (s = Object(M.a)(["\n  background: ", ";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ", ";\n  box-shadow: ", ";\n  flex-direction: column;\n  position: relative;\n"])), (function(e) {
                    return e.theme.card.background
                }), (function(e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "secondary"]
                }), (function(e) {
                    return e.isActive ? "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"
                })),
                ae = I.e.div(u || (u = Object(M.a)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])), (function(e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "text"]
                })),
                ie = I.e.div(o || (o = Object(M.a)(["\n  color: ", ";\n  font-size: 40px;\n  font-weight: 600;\n"])), (function(e) {
                    return e.theme.colors.text
                })),
                re = I.e.div(c || (c = Object(M.a)(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                se = I.e.div(p || (p = Object(M.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  margin-top: 6px;\n"]))),
                ue = I.e.div(d || (d = Object(M.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
                    return e.theme.colors.text
                })),
                oe = I.e.div(l || (l = Object(M.a)(["\n  border-top: 1px solid ", ";\n  padding: 24px;\n"])), (function(e) {
                    return e.theme.isDark ? "#524B63" : "#E9EAEB"
                })),
                ce = function() {
                    var e = Object($.a)();
                    return Object(N.jsxs)(ne, {
                        children: [Object(N.jsxs)("div", {
                            style: {
                                padding: "24px"
                            },
                            children: [Object(N.jsxs)(ae, {
                                children: [e(414, "Your Project?"), " "]
                            }), Object(N.jsx)(v.t, {
                                src: "/images/monster-question.png",
                                width: 64,
                                height: 64,
                                alt: "Your project here"
                            }), Object(N.jsx)(ie, {
                                children: "???"
                            }), Object(N.jsx)(re, {
                                children: e(416, "Create a pool for your token")
                            }), Object(N.jsx)(v.e, {
                                variant: "secondary",
                                as: "button",
                                mb: "16px",
                                onClick: function() {
                                    return alert("We'll announce soon on Telegram how to apply, stay tunned!")
                                },
                                children: e(418, "Apply Now")
                            }), Object(N.jsxs)(se, {
                                children: [Object(N.jsxs)("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [e(736, "APR"), ":"]
                                }), Object(N.jsx)(ue, {
                                    children: "??"
                                })]
                            }), Object(N.jsxs)(se, {
                                children: [Object(N.jsxs)("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [Object(N.jsxs)("span", {
                                        role: "img",
                                        "aria-label": "syrup",
                                        children: ["\u2744\ufe0f", " "]
                                    }), e(384, "Your Stake"), ":"]
                                }), Object(N.jsx)(ue, {
                                    children: "??? STONE"
                                })]
                            })]
                        }), Object(N.jsx)(oe, {
                            children: Object(N.jsx)(te.b, {})
                        })]
                    })
                },
                pe = n(3),
                de = n.n(pe),
                le = n(6),
                ye = n(203),
                be = I.e.div(y || (y = Object(M.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "primary"]
                })),
                me = function(e) {
                    var t = e.text,
                        n = e.isFinished,
                        a = void 0 !== n && n;
                    return Object(N.jsx)(be, {
                        isFinished: a,
                        children: t
                    })
                },
                fe = n(31),
                je = n(209),
                xe = n(214),
                Oe = n(325),
                he = n(54),
                we = n(144),
                ve = n(21),
                Te = n(215),
                ke = n(326),
                ge = n.n(ke),
                Be = Object(I.e)(v.I)(b || (b = Object(M.a)(["\n  color: ", ";\n"])), (function(e) {
                    var t = e.isDisabled,
                        n = e.color,
                        a = e.theme;
                    return t ? a.colors.textDisabled : n
                })),
                Me = function(e) {
                    var t = e.value,
                        n = e.fontSize,
                        a = e.color,
                        i = e.decimals,
                        r = e.isDisabled,
                        s = e.unit,
                        u = Object(m.useRef)(0);
                    return Object(m.useEffect)((function() {
                        u.current = t
                    }), [t]), Object(N.jsxs)(Be, {
                        bold: !0,
                        color: a,
                        fontSize: n,
                        isDisabled: r,
                        children: [Object(N.jsx)(ge.a, {
                            start: u.current,
                            end: t,
                            decimals: i,
                            duration: 1,
                            separator: ","
                        }), t && s && Object(N.jsx)("span", {
                            children: s
                        })]
                    })
                };
            Me.defaultProps = {
                fontSize: "32px",
                isDisabled: !1,
                color: "text",
                decimals: 3
            };
            var Ie, Ae, Ee, Se, Ce, De, Le, Ne, Fe, _e, Pe, ze, Re, Ue, He, Je, We, qe, Qe, Xe, Ye, Ge, Ve, Ke, Ze = Me,
                $e = n(25),
                et = n(70),
                tt = n(91),
                nt = n(145),
                at = function(e) {
                    var t = e.max,
                        n = e.onConfirm,
                        a = e.onDismiss,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        s = Object(m.useState)(""),
                        u = Object(D.a)(s, 2),
                        o = u[0],
                        c = u[1],
                        p = Object(m.useState)(!1),
                        d = Object(D.a)(p, 2),
                        l = d[0],
                        y = d[1],
                        b = Object($.a)(),
                        f = Object(m.useMemo)((function() {
                            return Object(he.b)(t)
                        }), [t]),
                        j = Object(m.useCallback)((function(e) {
                            c(e.currentTarget.value)
                        }), [c]),
                        x = Object(m.useCallback)((function() {
                            c(f)
                        }), [f, c]);
                    return Object(N.jsxs)(v.B, {
                        title: "".concat(b(316, "Deposit"), " ").concat(r, " Tokens"),
                        onDismiss: a,
                        children: [Object(N.jsx)(nt.a, {
                            value: o,
                            onSelectMax: x,
                            onChange: j,
                            max: f,
                            symbol: r
                        }), Object(N.jsxs)(tt.a, {
                            children: [Object(N.jsx)(v.e, {
                                variant: "secondary",
                                onClick: a,
                                children: b(462, "Cancel")
                            }), Object(N.jsx)(v.e, {
                                disabled: l,
                                onClick: Object(le.a)(de.a.mark((function e() {
                                    return de.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return y(!0), e.next = 3, n(o);
                                            case 3:
                                                y(!1), a();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: l ? b(488, "Pending Confirmation") : b(464, "Confirm")
                            })]
                        })]
                    })
                },
                it = function(e) {
                    var t = e.onConfirm,
                        n = e.onDismiss,
                        a = e.max,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        s = Object(m.useState)(""),
                        u = Object(D.a)(s, 2),
                        o = u[0],
                        c = u[1],
                        p = Object(m.useState)(!1),
                        d = Object(D.a)(p, 2),
                        l = d[0],
                        y = d[1],
                        b = Object($.a)(),
                        f = Object(m.useMemo)((function() {
                            return Object(he.b)(a)
                        }), [a]),
                        j = Object(m.useCallback)((function(e) {
                            c(e.currentTarget.value)
                        }), [c]),
                        x = Object(m.useCallback)((function() {
                            c(f)
                        }), [f, c]);
                    return Object(N.jsxs)(v.B, {
                        title: "Withdraw ".concat(r),
                        onDismiss: n,
                        children: [Object(N.jsx)(nt.a, {
                            onSelectMax: x,
                            onChange: j,
                            value: o,
                            max: f,
                            symbol: r
                        }), Object(N.jsxs)(tt.a, {
                            children: [Object(N.jsx)(v.e, {
                                variant: "secondary",
                                onClick: n,
                                children: b(462, "Cancel")
                            }), Object(N.jsx)(v.e, {
                                disabled: l,
                                onClick: Object(le.a)(de.a.mark((function e() {
                                    return de.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return y(!0), e.next = 3, t(o);
                                            case 3:
                                                y(!1), n();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: l ? b(488, "Pending Confirmation") : b(464, "Confirm")
                            })]
                        })]
                    })
                },
                rt = function(e) {
                    var t = e.earnings,
                        n = e.onConfirm,
                        a = e.onDismiss,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        s = Object(m.useState)(!1),
                        u = Object(D.a)(s, 2),
                        o = u[0],
                        c = u[1],
                        p = Object($.a)(),
                        d = Object(m.useMemo)((function() {
                            return Object(he.b)(t)
                        }), [t]);
                    return Object(N.jsxs)(v.B, {
                        title: "".concat(p(999, "Compound"), " ").concat(p(330, "".concat(r, " Earned"))),
                        onDismiss: a,
                        children: [Object(N.jsx)(st, {
                            children: Object(N.jsx)(Ze, {
                                value: Number(d)
                            })
                        }), Object(N.jsxs)(tt.a, {
                            children: [Object(N.jsx)(v.e, {
                                variant: "secondary",
                                onClick: a,
                                children: p(462, "Cancel")
                            }), Object(N.jsx)(v.e, {
                                id: "compound-cake",
                                disabled: o,
                                onClick: Object(le.a)(de.a.mark((function e() {
                                    return de.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c(!0), e.next = 3, n(d);
                                            case 3:
                                                c(!1), a();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: o ? p(488, "Pending Confirmation") : p(464, "Confirm")
                            })]
                        })]
                    })
                },
                st = I.e.div(Ie || (Ie = Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),
                ut = I.e.div(Ae || (Ae = Object(M.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),
                ot = I.e.a(Ee || (Ee = Object(M.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),
                ct = function(e) {
                    var t = e.hasBalance;
                    return void 0 !== t && t ? Object(N.jsxs)("div", {
                        children: [Object(N.jsx)(ut, {
                            children: "Action Required"
                        }), Object(N.jsx)(ot, {
                            href: " https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",
                            target: "_blank",
                            children: "What do I need to do?"
                        })]
                    }) : Object(N.jsx)("div", {
                        children: Object(N.jsx)(ae, {
                            isFinished: !0,
                            children: "FINISHED"
                        })
                    })
                },
                pt = I.e.button(Se || (Se = Object(M.a)(["\n  align-items: center;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: ", "px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  pointer-events: ", ";\n  width: 100%;\n  border: 2px solid ", ";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"])), (function(e) {
                    return e.disabled ? "#ddd" : e.theme.card.background
                }), (function(e) {
                    return e.disabled ? "#acaaaf" : "#32cad7"
                }), (function(e) {
                    return e.fontSize
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.disabled ? "none" : void 0
                }), (function(e) {
                    return e.disabled ? "#eee" : "#33cbd7"
                })),
                dt = Object(I.e)(O.b)(Ce || (Ce = Object(M.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])), (function(e) {
                    return -e.theme.spacing[4]
                }), (function(e) {
                    return e.theme.spacing[4]
                })),
                lt = I.e.a(De || (De = Object(M.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])), (function(e) {
                    return -e.theme.spacing[4]
                }), (function(e) {
                    return e.theme.spacing[4]
                })),
                yt = function(e) {
                    var t, n, a, i = e.children,
                        r = e.disabled,
                        s = e.href,
                        u = e.onClick,
                        o = e.size,
                        c = e.text,
                        p = e.to,
                        d = Object(m.useContext)(I.a),
                        l = d.colors,
                        y = d.spacing,
                        b = l.background;
                    switch (o) {
                        case "sm":
                            n = y[3], t = 36, a = 14;
                            break;
                        case "lg":
                            n = y[4], t = 72, a = 16;
                            break;
                        case "md":
                        default:
                            n = y[4], t = 56, a = 16
                    }
                    var f = Object(m.useMemo)((function() {
                        return p ? Object(N.jsx)(dt, {
                            to: p,
                            children: c
                        }) : s ? Object(N.jsx)(lt, {
                            href: s,
                            target: "__blank",
                            children: c
                        }) : c
                    }), [s, c, p]);
                    return Object(N.jsxs)(pt, {
                        boxShadow: undefined,
                        color: b,
                        disabled: r,
                        fontSize: a,
                        onClick: u,
                        padding: n,
                        size: t,
                        children: [i, f]
                    })
                },
                bt = n(37),
                mt = n(717),
                ft = n(718),
                jt = (Le = {}, Object(bt.a)(Le, $e.a.BINANCE, te.a), Object(bt.a)(Le, $e.a.CORE, te.c), Object(bt.a)(Le, $e.a.COMMUNITY, te.b), Le),
                xt = I.e.div(Ne || (Ne = Object(M.a)(["\n  border-top: 1px solid ", ";\n  color: ", ";\n  padding: 24px;\n"])), (function(e) {
                    return e.theme.isDark ? "#524B63" : "#E9EAEB"
                }), (function(e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled2" : "primary2"]
                })),
                Ot = I.e.button(Fe || (Fe = Object(M.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n  & > svg {\n    margin-left: 4px;\n  }\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                ht = I.e.div(_e || (_e = Object(M.a)(["\n  margin-top: 24px;\n"]))),
                wt = Object(I.e)(v.q)(Pe || (Pe = Object(M.a)(["\n  align-items: center;\n"]))),
                vt = I.e.div(ze || (ze = Object(M.a)(["\n  flex: 1;\n"]))),
                Tt = I.e.div(Re || (Re = Object(M.a)(["\n  font-size: 14px;\n"]))),
                kt = I.e.a(Ue || (Ue = Object(M.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                gt = function(e) {
                    var t = e.projectLink,
                        n = e.decimals,
                        a = e.totalStaked,
                        i = e.isFinished,
                        r = e.startBlock,
                        s = e.endBlock,
                        u = e.poolCategory,
                        o = Object(g.a)().blockNumber,
                        c = Object(m.useState)(!1),
                        p = Object(D.a)(c, 2),
                        d = p[0],
                        l = p[1],
                        y = Object($.a)(),
                        b = d ? mt.a : ft.a,
                        f = jt[u],
                        j = Math.max(r - o, 0),
                        x = Math.max(s - o, 0);
                    return Object(N.jsxs)(xt, {
                        isFinished: i,
                        children: [Object(N.jsxs)(wt, {
                            children: [Object(N.jsx)(vt, {
                                children: Object(N.jsx)(f, {})
                            }), Object(N.jsxs)(Ot, {
                                onClick: function() {
                                    return l(!d)
                                },
                                children: [d ? y(1066, "Hide") : y(658, "Details"), " ", Object(N.jsx)(b, {})]
                            })]
                        }), d && Object(N.jsxs)(ht, {
                            children: [Object(N.jsxs)(wt, {
                                mb: "4px",
                                children: [Object(N.jsx)(vt, {
                                    children: Object(N.jsxs)(Tt, {
                                        children: [Object(N.jsxs)("span", {
                                            role: "img",
                                            "aria-label": "syrup",
                                            children: ["\u2744\ufe0f", " "]
                                        }), y(408, "Total")]
                                    })
                                }), Object(N.jsx)(Ze, {
                                    fontSize: "14px",
                                    isDisabled: i,
                                    value: Object(he.a)(a, n)
                                })]
                            }), j > 0 && Object(N.jsxs)(wt, {
                                mb: "4px",
                                children: [Object(N.jsx)(vt, {
                                    children: Object(N.jsxs)(Tt, {
                                        children: [y(409, "Start"), ":"]
                                    })
                                }), Object(N.jsx)(Ze, {
                                    fontSize: "14px",
                                    isDisabled: i,
                                    value: j,
                                    decimals: 0
                                })]
                            }), 0 === j && x > 0 && Object(N.jsxs)(wt, {
                                mb: "4px",
                                children: [Object(N.jsx)(vt, {
                                    children: Object(N.jsxs)(Tt, {
                                        children: [y(410, "End"), ":"]
                                    })
                                }), Object(N.jsx)(Ze, {
                                    fontSize: "14px",
                                    isDisabled: i,
                                    value: x,
                                    decimals: 0
                                })]
                            }), Object(N.jsx)(kt, {
                                href: t,
                                target: "_blank",
                                children: y(412, "View project site")
                            })]
                        })]
                    })
                },
                Bt = f.a.memo(gt),
                Mt = I.e.div(He || (He = Object(M.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),
                It = I.e.div(Je || (Je = Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),
                At = I.e.div(We || (We = Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),
                Et = I.e.div(qe || (qe = Object(M.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) {
                    return e.theme.spacing[4]
                }), (function(e) {
                    return e.theme.spacing[4]
                })),
                St = I.e.div(Qe || (Qe = Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n"]))),
                Ct = function(e) {
                    var t = e.pool,
                        n = t.sousId,
                        a = t.stakingToken,
                        i = t.earningToken,
                        r = t.harvest,
                        s = t.poolCategory,
                        u = t.totalStaked,
                        o = t.startBlock,
                        c = t.endBlock,
                        p = t.isFinished,
                        d = t.userData,
                        l = t.stakingLimit,
                        y = s === $e.a.BINANCE,
                        b = Object($.a)(),
                        f = Object(fe.b)(a.address ? Object(ve.a)(a.address) : ""),
                        j = Object(w.m)().account,
                        x = Object(je.d)(f, n).onApprove,
                        O = Object(xe.b)(n, y).onStake,
                        h = Object(Oe.b)(n).onUnstake,
                        T = Object(Te.c)(n, y).onReward,
                        B = Object(g.g)(i.symbol),
                        M = function(e, t, n, a) {
                            var i = new k.a(t).times(a).times(we.a),
                                r = new k.a(e).times(n),
                                s = i.div(r).times(100);
                            return s.isNaN() || !s.isFinite() ? null : s.toNumber()
                        }(Object(g.g)(a.symbol), B, Object(he.a)(t.totalStaked, a.decimals), parseFloat(t.tokenPerBlock)),
                        I = Object(m.useState)(!1),
                        A = Object(D.a)(I, 2),
                        E = A[0],
                        S = A[1],
                        C = Object(m.useState)(!1),
                        L = Object(D.a)(C, 2),
                        F = L[0],
                        _ = L[1],
                        P = new k.a((null === d || void 0 === d ? void 0 : d.allowance) || 0),
                        z = new k.a((null === d || void 0 === d ? void 0 : d.stakingTokenBalance) || 0),
                        R = new k.a((null === d || void 0 === d ? void 0 : d.stakedBalance) || 0),
                        U = new k.a((null === d || void 0 === d ? void 0 : d.pendingReward) || 0),
                        H = a.symbol === et.a.syrup.symbol,
                        J = (null === R || void 0 === R ? void 0 : R.toNumber()) > 0,
                        W = !J && !P.toNumber() && !y,
                        q = p && J,
                        Q = new k.a(l).multipliedBy(new k.a(10).pow(i.decimals)),
                        X = Object(v.P)(Object(N.jsx)(at, {
                            max: l && z.isGreaterThan(Q) ? Q : z,
                            onConfirm: O,
                            tokenName: l ? "".concat(a.symbol, " (").concat(l, " max)") : a.symbol
                        })),
                        Y = Object(D.a)(X, 1)[0],
                        G = Object(v.P)(Object(N.jsx)(rt, {
                            earnings: U,
                            onConfirm: O,
                            tokenName: a.symbol
                        })),
                        V = Object(D.a)(G, 1)[0],
                        K = "".concat(t.earningToken.symbol, "-").concat(t.stakingToken.symbol, ".png").toLocaleLowerCase(),
                        Z = Object(v.P)(Object(N.jsx)(it, {
                            max: R,
                            onConfirm: h,
                            tokenName: a.symbol
                        })),
                        ee = Object(D.a)(Z, 1)[0],
                        te = Object(m.useCallback)(Object(le.a)(de.a.mark((function e() {
                            return de.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, S(!0), e.next = 4, x();
                                    case 4:
                                        e.sent || S(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [x, S]);
                    return Object(N.jsxs)(ne, {
                        isActive: q,
                        isFinished: p && 0 !== n,
                        children: [p && 0 !== n && Object(N.jsx)(Mt, {}), Object(N.jsxs)("div", {
                            style: {
                                padding: "24px"
                            },
                            children: [Object(N.jsxs)(ae, {
                                isFinished: p && 0 !== n,
                                children: [H && "[OLD]", " ", i.symbol, " ", b(348, "Pool")]
                            }), Object(N.jsxs)("div", {
                                style: {
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [Object(N.jsx)("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: Object(N.jsx)(v.t, {
                                        src: "/images/pools/".concat(K),
                                        alt: i.symbol,
                                        width: 64,
                                        height: 64
                                    })
                                }), j && r && !H && Object(N.jsx)(yt, {
                                    disabled: !U.toNumber() || F,
                                    text: F ? "Collecting" : "Harvest",
                                    onClick: Object(le.a)(de.a.mark((function e() {
                                        return de.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return _(!0), e.next = 3, T();
                                                case 3:
                                                    _(!1);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))
                                })]
                            }), H ? Object(N.jsx)(ct, {
                                hasBalance: J
                            }) : Object(N.jsxs)(At, {
                                children: [Object(N.jsx)(Ze, {
                                    value: Object(he.a)(U, i.decimals),
                                    isDisabled: p
                                }), 0 === n && j && r && Object(N.jsx)(yt, {
                                    disabled: !U.toNumber() || F,
                                    text: F ? b(999, "Compounding") : b(704, "Compound"),
                                    onClick: V
                                })]
                            }), Object(N.jsx)(me, {
                                isFinished: p && 0 !== n,
                                text: b(330, "".concat(i.symbol, " earned"))
                            }), Object(N.jsxs)(It, {
                                children: [!j && Object(N.jsx)(ye.a, {}), j && (W && !H ? Object(N.jsx)("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: Object(N.jsx)(v.e, {
                                        disabled: p || E,
                                        onClick: te,
                                        width: "100%",
                                        children: "Approve ".concat(a.symbol)
                                    })
                                }) : Object(N.jsxs)(N.Fragment, {
                                    children: [Object(N.jsx)(v.e, {
                                        disabled: R.eq(new k.a(0)) || F,
                                        style: {
                                            width: "80%"
                                        },
                                        onClick: H ? Object(le.a)(de.a.mark((function e() {
                                            return de.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return _(!0), e.next = 3, h("0");
                                                    case 3:
                                                        _(!1);
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))) : ee,
                                        children: "Unstake ".concat(a.symbol)
                                    }), Object(N.jsx)(Et, {}), !H && Object(N.jsx)(v.s, {
                                        style: {
                                            width: "20%"
                                        },
                                        disabled: p && 0 !== n,
                                        onClick: Y,
                                        children: Object(N.jsx)(v.a, {
                                            color: "white"
                                        })
                                    })]
                                }))]
                            }), Object(N.jsxs)(St, {
                                children: [Object(N.jsxs)("div", {
                                    children: [b(736, "APR"), ":"]
                                }), p || H || !M ? "-" : Object(N.jsx)(Ze, {
                                    fontSize: "14px",
                                    isDisabled: p,
                                    value: M,
                                    decimals: 2,
                                    unit: "%"
                                })]
                            }), Object(N.jsxs)(St, {
                                children: [Object(N.jsxs)("div", {
                                    children: [b(384, "Your Stake"), ":"]
                                }), Object(N.jsx)(Ze, {
                                    fontSize: "14px",
                                    isDisabled: p,
                                    value: Object(he.a)(R, a.decimals)
                                })]
                            })]
                        }), Object(N.jsx)(Bt, {
                            projectLink: i.projectLink,
                            decimals: a.decimals,
                            totalStaked: u,
                            startBlock: o,
                            endBlock: c,
                            isFinished: p,
                            poolCategory: s,
                            tokenName: i.symbol,
                            tokenAddress: i.address ? Object(ve.a)(i.address) : "",
                            tokenDecimals: i.decimals
                        })]
                    })
                },
                Dt = function() {
                    var e = Object(h.g)(),
                        t = e.url,
                        n = e.isExact,
                        a = Object($.a)();
                    return Object(N.jsx)(Lt, {
                        children: Object(N.jsxs)(v.f, {
                            activeIndex: n ? 0 : 1,
                            scale: "sm",
                            variant: "subtle",
                            children: [Object(N.jsx)(v.g, {
                                as: O.b,
                                to: "".concat(t),
                                children: a(999, "Active")
                            }), Object(N.jsx)(v.g, {
                                as: O.b,
                                to: "".concat(t, "/history"),
                                children: a(999, "Inactive")
                            })]
                        })
                    })
                },
                Lt = I.e.div(Xe || (Xe = Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),
                Nt = I.e.div(Ye || (Ye = Object(M.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Ft = (I.e.div(Ge || (Ge = Object(M.a)(["\n  align-items: center;\n  color: ", ";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 396px;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])), (function(e) {
                    return e.theme.colors.primary
                })), function() {
                    var e = Object(h.g)().path,
                        t = Object($.a)(),
                        n = Object(w.m)().account,
                        a = Object(g.h)(n),
                        i = Object(g.a)().blockNumber,
                        r = Object(m.useMemo)((function() {
                            return Z()(a, (function(e) {
                                return e.isFinished || i > e.endBlock
                            }))
                        }), [i, a]),
                        s = Object(D.a)(r, 2),
                        u = s[0],
                        o = s[1];
                    return Object(N.jsxs)(q.a, {
                        children: [Object(N.jsxs)("div", {
                            children: [Object(N.jsx)(v.r, {
                                as: "h1",
                                size: "lg",
                                color: "primary",
                                mb: "50px",
                                style: {
                                    textAlign: "center"
                                },
                                children: t(574, "LaunchPool")
                            }), Object(N.jsx)(v.r, {
                                as: "h2",
                                color: "secondary",
                                mb: "50px",
                                style: {
                                    textAlign: "center"
                                },
                                children: t(344, "Stake STONE to earn tokens.")
                            })]
                        }), Object(N.jsx)(Dt, {}), Object(N.jsx)(Nt, {}), Object(N.jsxs)(ee.a, {
                            children: [Object(N.jsx)(h.a, {
                                exact: !0,
                                path: "".concat(e),
                                children: Object(N.jsxs)(N.Fragment, {
                                    children: [V()(o, ["sortOrder"]).map((function(e) {
                                        return Object(N.jsx)(Ct, {
                                            pool: e
                                        }, e.sousId)
                                    })), Object(N.jsx)(ce, {})]
                                })
                            }), Object(N.jsx)(h.a, {
                                path: "".concat(e, "/history"),
                                children: V()(u, ["sortOrder"]).map((function(e) {
                                    return Object(N.jsx)(Ct, {
                                        pool: e
                                    }, e.sousId)
                                }))
                            })]
                        })]
                    })
                }),
                _t = n(143),
                Pt = n(106),
                zt = n(34),
                Rt = I.e.div(Ve || (Ve = Object(M.a)(["\n  padding: 24px;\n  text-align: center;\n"]))),
                Ut = I.e.div(Ke || (Ke = Object(M.a)(["\n  text-align: center;\n"]))),
                Ht = function(e) {
                    var t = e.onDismiss,
                        n = Object($.a)();
                    return Object(N.jsxs)(v.B, {
                        title: n(999, "Congratulations!"),
                        onDismiss: t,
                        children: [Object(N.jsxs)(Rt, {
                            children: [Object(N.jsx)("img", {
                                src: "/images/present.svg",
                                alt: "You won present",
                                style: {
                                    height: "64px",
                                    marginBottom: "24px"
                                }
                            }), Object(N.jsx)(v.r, {
                                size: "lg",
                                color: "secondary",
                                children: n(999, "You won an NFT!")
                            })]
                        }), Object(N.jsx)(Ut, {
                            children: Object(N.jsx)(v.e, {
                                as: "a",
                                href: "/nft",
                                children: n(999, "Go to claim NFT")
                            })
                        })]
                    })
                },
                Jt = function() {
                    var e = Object(w.m)().account,
                        t = Object(v.P)(Object(N.jsx)(Ht, {})),
                        n = Object(D.a)(t, 1)[0],
                        a = Object(m.useRef)((function() {
                            return n()
                        }));
                    return Object(m.useEffect)((function() {
                        var t = function() {
                            var t = Object(le.a)(de.a.mark((function t() {
                                var n, i, r, s, u, o, c, p, d, l, y, b, m, f;
                                return de.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(zt.a)(_t, [{
                                                address: Pt.b,
                                                name: "totalSupplyDistributed"
                                            }, {
                                                address: Pt.b,
                                                name: "currentDistributedSupply"
                                            }, {
                                                address: Pt.b,
                                                name: "canClaim",
                                                params: [e]
                                            }, {
                                                address: Pt.b,
                                                name: "hasClaimed",
                                                params: [e]
                                            }]);
                                        case 2:
                                            n = t.sent, i = Object(D.a)(n, 4), r = i[0], s = i[1], u = i[2], o = i[3], c = Object(D.a)(r, 1), p = c[0], d = Object(D.a)(s, 1), l = d[0], y = Object(D.a)(u, 1), b = y[0], m = Object(D.a)(o, 1), f = m[0], l.lt(p) && b && !f && a.current();
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        e && !document.location.href.includes("/nft") && t()
                    }), [e, a]), Object(N.jsx)("div", {})
                },
                Wt = Object(m.lazy)((function() {
                    return n.e(8).then(n.bind(null, 751))
                })),
                qt = Object(m.lazy)((function() {
                    return n.e(11).then(n.bind(null, 749))
                })),
                Qt = Object(m.lazy)((function() {
                    return n.e(6).then(n.bind(null, 747))
                })),
                Xt = Object(m.lazy)((function() {
                    return n.e(7).then(n.bind(null, 750))
                })),
                Yt = Object(m.lazy)((function() {
                    return n.e(15).then(n.bind(null, 745))
                })),
                Gt = Object(m.lazy)((function() {
                    return n.e(9).then(n.bind(null, 748))
                }));
            k.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var Vt = function() {
                    var e = Object(w.m)(),
                        t = e.account,
                        n = e.connect;
                    return Object(m.useEffect)((function() {
                        !t && window.localStorage.getItem("connectorId") && n("injected")
                    }), [t, n]), Object(g.f)(), Object(g.e)(), B(), Object(N.jsxs)(O.a, {
                        children: [Object(N.jsx)(v.F, {}), Object(N.jsx)(A, {}), Object(N.jsx)(W, {
                            children: Object(N.jsx)(m.Suspense, {
                                fallback: Object(N.jsx)(Y, {}),
                                children: Object(N.jsxs)(h.c, {
                                    children: [Object(N.jsx)(h.a, {
                                        path: "/",
                                        exact: !0,
                                        children: Object(N.jsx)(Wt, {})
                                    }), Object(N.jsx)(h.a, {
                                        path: "/farms",
                                        children: Object(N.jsx)(qt, {})
                                    }), Object(N.jsx)(h.a, {
                                        path: "/caves",
                                        children: Object(N.jsx)(qt, {
                                            tokenMode: !0
                                        })
                                    }), Object(N.jsx)(h.a, {
                                        path: "/pools",
                                        children: Object(N.jsx)(Ft, {})
                                    }), Object(N.jsx)(h.a, {
                                        path: "/ifo",
                                        children: Object(N.jsx)(Xt, {})
                                    }), Object(N.jsx)(h.a, {
                                        path: "/lottery",
                                        children: Object(N.jsx)(Qt, {})
                                    }), Object(N.jsx)(h.a, {
                                        path: "/nft",
                                        children: Object(N.jsx)(Gt, {})
                                    }), Object(N.jsx)(h.a, {
                                        component: Yt
                                    })]
                                })
                            })
                        }), Object(N.jsx)(Jt, {})]
                    })
                },
                Kt = f.a.memo(Vt),
                Zt = n(47),
                $t = n(26),
                en = n(100),
                tn = n(217),
                nn = n(148),
                an = n(60),
                rn = n(120),
                sn = n(68),
                un = n(150),
                on = n(146),
                cn = Object(an.a)({
                    devTools: !1,
                    reducer: {
                        farms: rn.a,
                        pools: sn.a,
                        prices: un.a,
                        block: on.a
                    }
                }),
                pn = function(e) {
                    var t = e.children,
                        n = Object(en.a)(),
                        a = parseInt("56");
                    return Object(N.jsx)($t.a, {
                        store: cn,
                        children: Object(N.jsx)(U, {
                            children: Object(N.jsx)(P, {
                                children: Object(N.jsx)(w.b, {
                                    chainId: a,
                                    connectors: {
                                        walletconnect: {
                                            rpcUrl: n
                                        },
                                        bsc: Zt
                                    },
                                    children: Object(N.jsx)(tn.b, {
                                        children: Object(N.jsx)(nn.b, {
                                            children: Object(N.jsx)(v.C, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            x.a.render(Object(N.jsx)(f.a.StrictMode, {
                children: Object(N.jsx)(pn, {
                    children: Object(N.jsx)(Kt, {})
                })
            }), document.getElementById("root"))
        },
        71: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return d
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return p
            }));
            var a = n(72),
                i = n.n(a),
                r = n(100),
                s = Object(r.a)(),
                u = new i.a.providers.HttpProvider(s, {
                    timeout: 1e4
                }),
                o = new i.a(u),
                c = function() {
                    return new i.a(u)
                },
                p = function(e, t, n) {
                    return new(c().eth.Contract)(e, t, n)
                },
                d = function() {
                    return o
                }
        },
        77: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        91: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a, i, r, s = n(11),
                u = n(0),
                o = n.n(u),
                c = n(2),
                p = n(1),
                d = c.e.div(a || (a = Object(s.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                l = function(e) {
                    var t, n = e.size,
                        a = void 0 === n ? "md" : n,
                        i = Object(u.useContext)(c.a).spacing;
                    switch (a) {
                        case "lg":
                            t = i[6];
                            break;
                        case "sm":
                            t = i[2];
                            break;
                        case "md":
                        default:
                            t = i[4]
                    }
                    return Object(p.jsx)(d, {
                        size: t
                    })
                },
                y = c.e.div(i || (i = Object(s.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"])), (function(e) {
                    return e.theme.colors.primaryDark
                }), (function(e) {
                    return e.theme.spacing[4]
                })),
                b = c.e.div(r || (r = Object(s.a)(["\n  flex: 1;\n  text-align: center;\n"]))),
                m = function(e) {
                    var t = e.children,
                        n = o.a.Children.toArray(t).length;
                    return Object(p.jsx)(y, {
                        children: o.a.Children.map(t, (function(e, t) {
                            return Object(p.jsxs)(p.Fragment, {
                                children: [Object(p.jsx)(b, {
                                    children: e
                                }), t < n - 1 && Object(p.jsx)(l, {})]
                            })
                        }))
                    })
                }
        }
    },
    [
        [701, 2, 3]
    ]
]);
//# sourceMappingURL=main.0736ec60.chunk.js.map