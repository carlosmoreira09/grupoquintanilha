!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 24))
    );
  })([
    function (e, t, n) {
      e.exports = !n(3)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (e, t) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, t) {
      var n = (e.exports = { version: "2.4.0" });
      "number" == typeof __e && (__e = n);
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, t) {
      var n = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = n);
    },
    function (e, t, n) {
      var r = n(14),
        i = n(19),
        o = n(21),
        u = Object.defineProperty;
      t.f = n(0)
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), i))
              try {
                return u(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var i = n(11),
        o = r(i);
      t.default = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              (0, o.default)(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    },
    function (e, t) {},
    function (e, t) {
      (function (t) {
        e.exports = t;
      }.call(t, {}));
    },
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, "exports", { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    function (e, t, n) {
      e.exports = { default: n(12), __esModule: !0 };
    },
    function (e, t, n) {
      n(22);
      var r = n(2).Object;
      e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    function (e, t, n) {
      var r = n(1);
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e;
      };
    },
    function (e, t, n) {
      var r = n(13);
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    function (e, t, n) {
      var r = n(1),
        i = n(4).document,
        o = r(i) && r(i.createElement);
      e.exports = function (e) {
        return o ? i.createElement(e) : {};
      };
    },
    function (e, t, n) {
      var r = n(4),
        i = n(2),
        o = n(15),
        u = n(18),
        a = "prototype",
        c = function (e, t, n) {
          var f,
            s,
            l,
            d = e & c.F,
            p = e & c.G,
            v = e & c.S,
            h = e & c.P,
            y = e & c.B,
            m = e & c.W,
            w = p ? i : i[t] || (i[t] = {}),
            b = w[a],
            g = p ? r : v ? r[t] : (r[t] || {})[a];
          p && (n = t);
          for (f in n)
            ((s = !d && g && void 0 !== g[f]) && f in w) ||
              ((l = s ? g[f] : n[f]),
              (w[f] =
                p && "function" != typeof g[f]
                  ? n[f]
                  : y && s
                  ? o(l, r)
                  : m && g[f] == l
                  ? (function (e) {
                      var t = function (t, n, r) {
                        if (this instanceof e) {
                          switch (arguments.length) {
                            case 0:
                              return new e();
                            case 1:
                              return new e(t);
                            case 2:
                              return new e(t, n);
                          }
                          return new e(t, n, r);
                        }
                        return e.apply(this, arguments);
                      };
                      return (t[a] = e[a]), t;
                    })(l)
                  : h && "function" == typeof l
                  ? o(Function.call, l)
                  : l),
              h &&
                (((w.virtual || (w.virtual = {}))[f] = l),
                e & c.R && b && !b[f] && u(b, f, l)));
        };
      (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (e.exports = c);
    },
    function (e, t, n) {
      var r = n(5),
        i = n(20);
      e.exports = n(0)
        ? function (e, t, n) {
            return r.f(e, t, i(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    function (e, t, n) {
      e.exports =
        !n(0) &&
        !n(3)(function () {
          return (
            7 !=
            Object.defineProperty(n(16)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    function (e, t, n) {
      var r = n(1);
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e))))
          return i;
        if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, t, n) {
      var r = n(17);
      r(r.S + r.F * !n(0), "Object", { defineProperty: n(5).f });
    },
    ,
    function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(6),
          i = n.n(r),
          o = n(7),
          u = n.n(o);
        n(8);
        var a = (function () {
          function e(t) {
            var n = this;
            i()(this, e),
              (this.el = t.el),
              (this.lazyClass = t.lazyClass || "lazy"),
              (this.removePreview = t.removePreview || !1),
              (this.scale = t.scale || !1),
              (this.EVENTS = [
                "scroll",
                "wheel",
                "mousewheel",
                "resize",
                "touchmove",
              ]),
              (this.Util = {
                throttle: function (e, t) {
                  var n = null,
                    r = 0;
                  return function () {
                    if (!n) {
                      var i = Date.now() - r,
                        o = this,
                        u = arguments,
                        a = function () {
                          (r = Date.now()), (n = !1), e.apply(o, u);
                        };
                      i >= t ? a() : (n = setTimeout(a, t));
                    }
                  };
                },
                on: function (e, t, n) {
                  e.addEventListener(t, n);
                },
                off: function (e, t, n) {
                  e.removeEventListener(t, n);
                },
              }),
              (this.windowHasBind = !1),
              (this.lazy = this.Util.throttle(function (e) {
                n.fire();
              }, 300)),
              (this.animationEvent = this.getAnimationEvent());
          }
          return (
            u()(e, [
              {
                key: "fire",
                value: function () {
                  this.windowHasBind ||
                    ((this.windowHasBind = !0), this.events(window, !0));
                  var e = document.querySelectorAll(
                      this.el + " img." + this.lazyClass
                    ),
                    t = e.length;
                  if (t > 0)
                    for (var n = 0; n < t; n++) {
                      var r = e[n].getBoundingClientRect();
                      r.top < window.innerHeight &&
                        r.bottom > 0 &&
                        r.left < window.innerWidth &&
                        r.right > 0 &&
                        this.loadImage(e[n]);
                    }
                  else (this.windowHasBind = !1), this.events(window, !1);
                },
              },
              {
                key: "events",
                value: function (e, t) {
                  var n = this;
                  t
                    ? this.EVENTS.forEach(function (t) {
                        n.Util.on(e, t, n.lazy);
                      })
                    : this.EVENTS.forEach(function (t) {
                        n.Util.off(e, t, n.lazy);
                      });
                },
              },
              {
                key: "loadImage",
                value: function (e) {
                  var t = this,
                    n = new Image();
                  e.dataset &&
                    (e.dataset.srcset && (n.srcset = e.dataset.srcset),
                    e.dataset.sizes && (n.sizes = e.dataset.sizes)),
                    (n.src = e.dataset.src),
                    (n.className = "origin"),
                    this.scale && (n.className = "origin-scale"),
                    e.classList.remove("lazy"),
                    (n.onload = function (r) {
                      t.mountImage(e, n);
                    }),
                    (n.onerror = function (t) {
                      e.classList.add("lazy");
                    });
                },
              },
              {
                key: "getAnimationEvent",
                value: function () {
                  var e = document.createElement("fake"),
                    t = {
                      animation: "animationend",
                      OAnimation: "oAnimationEnd",
                      MozAnimation: "animationend",
                      WebkitAnimation: "webkitAnimationEnd",
                    };
                  for (var n in t) if (void 0 !== e.style[n]) return t[n];
                },
              },
              {
                key: "mountImage",
                value: function (e, t) {
                  var n = this,
                    r = e.parentNode;
                  r.appendChild(t).addEventListener(
                    this.animationEvent,
                    function (t) {
                      (t.target.alt = e.alt || ""),
                        e.classList.add("hide"),
                        n.removePreview &&
                          (r.removeChild(e),
                          t.target.classList.remove("origin"),
                          t.target.classList.remove("origin-scale"));
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
        "undefined" != typeof exports
          ? (void 0 !== e && e.exports && (exports = e.exports = a),
            (exports.Progressive = a))
          : "function" == typeof define && n(9)
          ? define("Progressive", [], function () {
              return a;
            })
          : (this.Progressive = a);
      }.call(t, n(10)(e)));
    },
  ]);
});
