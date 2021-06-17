var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/prismic-dom/dist/prismic-dom.min.js
var require_prismic_dom_min = __commonJS({
  "node_modules/prismic-dom/dist/prismic-dom.min.js"(exports, module2) {
    !function(e, t) {
      typeof exports == "object" && typeof module2 == "object" ? module2.exports = t() : typeof define == "function" && define.amd ? define("PrismicDOM", [], t) : typeof exports == "object" ? exports.PrismicDOM = t() : e.PrismicDOM = t();
    }(typeof self != "undefined" ? self : exports, function() {
      return function(e) {
        var t = {};
        function n(r) {
          if (t[r])
            return t[r].exports;
          var o = t[r] = { i: r, l: false, exports: {} };
          return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, r) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
        }, n.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
            return e2;
          var r = Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
            for (var o in e2)
              n.d(r, o, function(t3) {
                return e2[t3];
              }.bind(null, o));
          return r;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 1);
      }([function(e, t, n) {
        typeof self != "undefined" && self, e.exports = function(e2) {
          var t2 = {};
          function n2(r) {
            if (t2[r])
              return t2[r].exports;
            var o = t2[r] = { i: r, l: false, exports: {} };
            return e2[r].call(o.exports, o, o.exports, n2), o.l = true, o.exports;
          }
          return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, r) {
            n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: r });
          }, n2.r = function(e3) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
          }, n2.t = function(e3, t3) {
            if (1 & t3 && (e3 = n2(e3)), 8 & t3)
              return e3;
            if (4 & t3 && typeof e3 == "object" && e3 && e3.__esModule)
              return e3;
            var r = Object.create(null);
            if (n2.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e3 }), 2 & t3 && typeof e3 != "string")
              for (var o in e3)
                n2.d(r, o, function(t4) {
                  return e3[t4];
                }.bind(null, o));
            return r;
          }, n2.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return n2.d(t3, "a", t3), t3;
          }, n2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, n2.p = "", n2(n2.s = 0);
        }([function(e2, t2, n2) {
          e2.exports = n2(1);
        }, function(e2, t2, n2) {
          var r = n2(2), o = n2(3);
          e2.exports = { Link: r, Date: o };
        }, function(e2, t2, n2) {
          e2.exports = { url: function(e3, t3) {
            var n3 = e3 && e3.value ? e3.value.document : e3;
            if (e3 && [e3.type, e3.link_type, e3._linkType, e3.linkType].some(function(e4) {
              return e4 && ["Document", "Link.Document", "Link.document"].includes(e4);
            }) && t3 && typeof t3 == "function") {
              var r = t3(n3);
              if (r)
                return r;
            }
            return n3 && n3.url ? n3.url : "";
          } };
        }, function(e2, t2) {
          e2.exports = function(e3) {
            if (!e3)
              return null;
            var t3 = e3.length == 24 ? "".concat(e3.substring(0, 22), ":").concat(e3.substring(22, 24)) : e3;
            return new Date(t3);
          };
        }]);
      }, function(e, t, n) {
        e.exports = n(2);
      }, function(e, t, n) {
        var r = n(0), o = n(3), i = r.Date, u = r.Link;
        e.exports = { Date: i, Link: u, RichText: o };
      }, function(e, t, n) {
        var r = n(4), o = n(0).Link, i = n(5), u = r.Elements;
        function c(e2, t2, n2, r2, c2) {
          switch (t2) {
            case u.heading1:
              return l("h1", n2, c2);
            case u.heading2:
              return l("h2", n2, c2);
            case u.heading3:
              return l("h3", n2, c2);
            case u.heading4:
              return l("h4", n2, c2);
            case u.heading5:
              return l("h5", n2, c2);
            case u.heading6:
              return l("h6", n2, c2);
            case u.paragraph:
              return l("p", n2, c2);
            case u.preformatted:
              return function(e3) {
                return "<pre".concat(a(e3), ">").concat(i(e3.text), "</pre>");
              }(n2);
            case u.strong:
              return l("strong", n2, c2);
            case u.em:
              return l("em", n2, c2);
            case u.listItem:
            case u.oListItem:
              return l("li", n2, c2);
            case u.list:
              return l("ul", n2, c2);
            case u.oList:
              return l("ol", n2, c2);
            case u.image:
              return function(e3, t3) {
                var n3 = t3.linkTo ? o.url(t3.linkTo, e3) : null, r3 = t3.linkTo && t3.linkTo.target ? 'target="'.concat(t3.linkTo.target, '" rel="noopener"') : "", i2 = [t3.label || "", "block-img"], u2 = '<img src="'.concat(t3.url, '" alt="').concat(t3.alt || "", '" copyright="').concat(t3.copyright || "", '">');
                return '\n    <p class="'.concat(i2.join(" "), '">\n      ').concat(n3 ? "<a ".concat(r3, ' href="').concat(n3, '">').concat(u2, "</a>") : u2, "\n    </p>\n  ");
              }(e2, n2);
            case u.embed:
              return function(e3) {
                return '\n    <div data-oembed="'.concat(e3.oembed.embed_url, '"\n      data-oembed-type="').concat(e3.oembed.type, '"\n      data-oembed-provider="').concat(e3.oembed.provider_name, '"\n      ').concat(a(e3), ">\n\n      ").concat(e3.oembed.html, "\n    </div>\n  ");
              }(n2);
            case u.hyperlink:
              return function(e3, t3, n3) {
                var r3 = t3.data.target ? 'target="'.concat(t3.data.target, '" rel="noopener"') : "", u2 = i(o.url(t3.data, e3));
                return "<a ".concat(r3, ' href="').concat(u2, '">').concat(n3.join(""), "</a>");
              }(e2, n2, c2);
            case u.label:
              return function(e3, t3) {
                return "<span ".concat(a(e3.data), ">").concat(t3.join(""), "</span>");
              }(n2, c2);
            case u.span:
              return function(e3) {
                return e3 ? i(e3).replace(/\n/g, "<br />") : "";
              }(r2);
            default:
              return "";
          }
        }
        function a(e2) {
          return e2.label ? ' class="'.concat(e2.label, '"') : "";
        }
        function l(e2, t2, n2) {
          return "<".concat(e2).concat(a(t2), ">").concat(n2.join(""), "</").concat(e2, ">");
        }
        e.exports = { asText: function(e2, t2) {
          return r.asText(e2, t2);
        }, asHtml: function(e2, t2, n2) {
          return r.serialize(e2, c.bind(null, t2), n2).join("");
        }, Elements: u };
      }, function(e, t, n) {
        typeof self != "undefined" && self, e.exports = function(e2) {
          var t2 = {};
          function n2(r) {
            if (t2[r])
              return t2[r].exports;
            var o = t2[r] = { i: r, l: false, exports: {} };
            return e2[r].call(o.exports, o, o.exports, n2), o.l = true, o.exports;
          }
          return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, r) {
            n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: r });
          }, n2.r = function(e3) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
          }, n2.t = function(e3, t3) {
            if (1 & t3 && (e3 = n2(e3)), 8 & t3)
              return e3;
            if (4 & t3 && typeof e3 == "object" && e3 && e3.__esModule)
              return e3;
            var r = Object.create(null);
            if (n2.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e3 }), 2 & t3 && typeof e3 != "string")
              for (var o in e3)
                n2.d(r, o, function(t4) {
                  return e3[t4];
                }.bind(null, o));
            return r;
          }, n2.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return n2.d(t3, "a", t3), t3;
          }, n2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, n2.p = "", n2(n2.s = 4);
        }([function(e2, t2, n2) {
          "use strict";
          var r;
          function o(e3, t3, n3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.PRIORITIES = t2.NODE_TYPES = void 0;
          var i = { heading1: "heading1", heading2: "heading2", heading3: "heading3", heading4: "heading4", heading5: "heading5", heading6: "heading6", paragraph: "paragraph", preformatted: "preformatted", strong: "strong", em: "em", listItem: "list-item", oListItem: "o-list-item", list: "group-list-item", oList: "group-o-list-item", image: "image", embed: "embed", hyperlink: "hyperlink", label: "label", span: "span" };
          t2.NODE_TYPES = i;
          var u = (o(r = {}, i.heading1, 4), o(r, i.heading2, 4), o(r, i.heading3, 4), o(r, i.heading4, 4), o(r, i.heading5, 4), o(r, i.heading6, 4), o(r, i.paragraph, 3), o(r, i.preformatted, 5), o(r, i.strong, 6), o(r, i.em, 6), o(r, i.oList, 1), o(r, i.list, 1), o(r, i.listItem, 1), o(r, i.oListItem, 1), o(r, i.image, 1), o(r, i.embed, 1), o(r, i.hyperlink, 3), o(r, i.label, 4), o(r, i.span, 7), r);
          t2.PRIORITIES = u;
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = void 0;
          var r, o = n2(7), i = n2(2), u = n2(8), c = n2(0), a = (r = n2(3)) && r.__esModule ? r : { default: r };
          function l(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r2 = t3[n3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
            }
          }
          function s2(e3) {
            if (e3.length === 0)
              throw new Error("Unable to elect node on empty list");
            var t3 = function(e4) {
              return function(e5) {
                if (Array.isArray(e5))
                  return e5;
              }(e4) || function(e5) {
                if (Symbol.iterator in Object(e5) || Object.prototype.toString.call(e5) === "[object Arguments]")
                  return Array.from(e5);
              }(e4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }();
            }(e3.sort(function(e4, t4) {
              if (e4.isParentOf(t4))
                return -1;
              if (t4.isParentOf(e4))
                return 1;
              var n3 = c.PRIORITIES[e4.type] - c.PRIORITIES[t4.type];
              return n3 === 0 ? e4.text.length - t4.text.length : n3;
            }));
            return { elected: t3[0], others: t3.slice(1) };
          }
          function f(e3, t3, n3) {
            if (t3.length > 0)
              return function(e4, t4, n4) {
                return t4.reduce(function(r3, o2, u2) {
                  var c2 = [], a2 = u2 === 0 && o2.start > n4.lower, l2 = u2 === t4.length - 1 && n4.upper > o2.end;
                  if (a2) {
                    var s3 = new i.TextNode(n4.lower, o2.start, e4.slice(n4.lower, o2.start));
                    c2 = c2.concat(s3);
                  } else {
                    var f2 = t4[u2 - 1];
                    if (f2 && o2.start > f2.end) {
                      var d3 = e4.slice(f2.end, o2.start), p2 = new i.TextNode(f2.end, o2.start, d3);
                      c2 = c2.concat(p2);
                    }
                  }
                  if (c2 = c2.concat(o2), l2) {
                    var y = new i.TextNode(o2.end, n4.upper, e4.slice(o2.end, n4.upper));
                    c2 = c2.concat(y);
                  }
                  return r3.concat(c2);
                }, []);
              }(e3, d2(e3, t3), n3);
            var r2 = e3.slice(n3.lower, n3.upper);
            return [new i.TextNode(n3.lower, n3.upper, r2)];
          }
          function d2(e3, t3) {
            var n3 = function(e4) {
              return function(e5, t4) {
                return t4.reduce(function(e6, t5) {
                  var n4 = (0, o.last)(e6);
                  if (n4) {
                    if (n4.some(function(e7) {
                      return e7.isParentOf(t5);
                    }))
                      return (0, o.init)(e6).concat([n4.concat(t5)]);
                    var r3 = (0, o.last)(n4);
                    return r3 && function(e7, t6) {
                      return e7.end >= t6.start;
                    }(r3, t5) ? (0, o.init)(e6).concat([n4.concat(t5)]) : e6.concat([[t5]]);
                  }
                  return [[t5]];
                }, []);
              }(0, (0, o.sort)(e4, function(e5, t4) {
                return n4 = t4, e5.start - n4.start || function(e6, t5) {
                  return e6.end - t5.end;
                }(e5, t4);
                var n4;
              }));
            }((0, o.sort)(t3, function(e4, t4) {
              return e4.start - t4.start;
            })).map(s2), r2 = (0, o.flatten)(n3.map(function(t4) {
              return function(e4, t5) {
                var n4 = t5.others.reduce(function(n5, r4) {
                  var o3 = n5.inner, u2 = n5.outer, c2 = function(e5, t6, n6) {
                    return n6.start < t6.start ? { inner: i.SpanNode.slice(n6, t6.start, n6.end, e5), outer: i.SpanNode.slice(n6, n6.start, t6.start, e5) } : n6.end > t6.end ? { inner: i.SpanNode.slice(n6, n6.start, t6.end, e5), outer: i.SpanNode.slice(n6, t6.end, n6.end, e5) } : { inner: n6 };
                  }(e4, t5.elected, r4);
                  return { inner: o3.concat(c2.inner), outer: c2.outer ? u2.concat(c2.outer) : u2 };
                }, { inner: [], outer: [] }), r3 = n4.inner, o2 = n4.outer;
                return [t5.elected.setChildren(f(e4, r3, t5.elected.boundaries()))].concat(d2(e4, o2));
              }(e3, t4);
            }));
            return (0, o.sort)(r2, function(e4, t4) {
              return e4.start - t4.start;
            });
          }
          var p = function() {
            function e3() {
              !function(e4, t4) {
                if (!(e4 instanceof t4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3);
            }
            var t3, n3;
            return t3 = e3, (n3 = [{ key: "fromRichText", value: function(e4) {
              return { key: (0, a.default)(), children: e4.reduce(function(e5, t4, n4) {
                if (u.RichTextBlock.isEmbedBlock(t4.type) || u.RichTextBlock.isImageBlock(t4.type))
                  return e5.concat(new i.BlockNode(t4.type, t4));
                var r2 = function(e6) {
                  var t5 = (e6.spans || []).map(function(t6) {
                    var n6 = e6.text.slice(t6.start, t6.end);
                    return new i.SpanNode(t6.start, t6.end, t6.type, n6, [], t6);
                  }), n5 = { lower: 0, upper: e6.text.length };
                  return f(e6.text, t5, n5);
                }(t4), c2 = e5[e5.length - 1];
                if (u.RichTextBlock.isListItem(t4.type) && c2 && c2 instanceof i.ListBlockNode) {
                  var a2 = new i.ListItemBlockNode(t4, r2), l2 = c2.addChild(a2);
                  return (0, o.init)(e5).concat(l2);
                }
                if (u.RichTextBlock.isOrderedListItem(t4.type) && c2 && c2 instanceof i.OrderedListBlockNode) {
                  var s3 = new i.OrderedListItemBlockNode(t4, r2), d3 = c2.addChild(s3);
                  return (0, o.init)(e5).concat(d3);
                }
                if (u.RichTextBlock.isListItem(t4.type)) {
                  var p2 = new i.ListItemBlockNode(t4, r2), y = new i.ListBlockNode(u.RichTextBlock.emptyList(), [p2]);
                  return e5.concat(y);
                }
                if (u.RichTextBlock.isOrderedListItem(t4.type)) {
                  var h = new i.OrderedListItemBlockNode(t4, r2), v = new i.OrderedListBlockNode(u.RichTextBlock.emptyOrderedList(), [h]);
                  return e5.concat(v);
                }
                return e5.concat(new i.BlockNode(t4.type, t4, r2));
              }, []) };
            } }]) && l(t3, n3), e3;
          }();
          t2.default = p;
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ListBlockNode = t2.OrderedListBlockNode = t2.OrderedListItemBlockNode = t2.ListItemBlockNode = t2.BlockNode = t2.TextNode = t2.SpanNode = t2.Node = void 0;
          var r, o = (r = n2(3)) && r.__esModule ? r : { default: r }, i = n2(0);
          function u(e3) {
            return (u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            })(e3);
          }
          function c(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r2 = t3[n3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
            }
          }
          function a(e3, t3, n3) {
            return t3 && c(e3.prototype, t3), n3 && c(e3, n3), e3;
          }
          function l(e3, t3) {
            if (typeof t3 != "function" && t3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && function(e4, t4) {
              (Object.setPrototypeOf || function(e5, t5) {
                return e5.__proto__ = t5, e5;
              })(e4, t4);
            }(e3, t3);
          }
          function s2(e3) {
            return function() {
              var t3, n3 = f(e3);
              if (function() {
                if (typeof Reflect == "undefined" || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if (typeof Proxy == "function")
                  return true;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                  })), true;
                } catch (e4) {
                  return false;
                }
              }()) {
                var r2 = f(this).constructor;
                t3 = Reflect.construct(n3, arguments, r2);
              } else
                t3 = n3.apply(this, arguments);
              return function(e4, t4) {
                return !t4 || u(t4) !== "object" && typeof t4 != "function" ? function(e5) {
                  if (e5 === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e5;
                }(e4) : t4;
              }(this, t3);
            };
          }
          function f(e3) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
              return e4.__proto__ || Object.getPrototypeOf(e4);
            })(e3);
          }
          function d2(e3, t3) {
            if (!(e3 instanceof t3))
              throw new TypeError("Cannot call a class as a function");
          }
          var p = function e3(t3, n3, r2) {
            d2(this, e3), this.key = (0, o.default)(), this.type = t3, this.element = n3, this.children = r2;
          };
          t2.Node = p;
          var y = function(e3) {
            l(n3, p);
            var t3 = s2(n3);
            function n3(e4, r2, o2, i2, u2, c2) {
              var a2;
              return d2(this, n3), (a2 = t3.call(this, o2, c2, u2)).start = e4, a2.end = r2, a2.text = i2, a2.children = u2, a2;
            }
            return a(n3, [{ key: "boundaries", value: function() {
              return { lower: this.start, upper: this.end };
            } }, { key: "isParentOf", value: function(e4) {
              return this.start <= e4.start && this.end >= e4.end;
            } }, { key: "setChildren", value: function(e4) {
              return new n3(this.start, this.end, this.type, this.text, e4, this.element);
            } }], [{ key: "slice", value: function(e4, t4, r2, o2) {
              return new n3(t4, r2, e4.type, o2.slice(t4, r2), e4.children, e4.element);
            } }]), n3;
          }();
          t2.SpanNode = y;
          var h = function(e3) {
            l(n3, y);
            var t3 = s2(n3);
            function n3(e4, r2, o2) {
              d2(this, n3);
              var u2 = { type: i.NODE_TYPES.span, start: e4, end: r2, text: o2 };
              return t3.call(this, e4, r2, i.NODE_TYPES.span, o2, [], u2);
            }
            return n3;
          }();
          t2.TextNode = h;
          var v = function(e3) {
            l(n3, p);
            var t3 = s2(n3);
            function n3(e4, r2) {
              var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
              return d2(this, n3), t3.call(this, e4, r2, o2);
            }
            return n3;
          }();
          t2.BlockNode = v;
          var m = function(e3) {
            l(n3, v);
            var t3 = s2(n3);
            function n3(e4, r2) {
              return d2(this, n3), t3.call(this, i.NODE_TYPES.listItem, e4, r2);
            }
            return n3;
          }();
          t2.ListItemBlockNode = m;
          var b = function(e3) {
            l(n3, v);
            var t3 = s2(n3);
            function n3(e4, r2) {
              return d2(this, n3), t3.call(this, i.NODE_TYPES.oListItem, e4, r2);
            }
            return n3;
          }();
          t2.OrderedListItemBlockNode = b;
          var g = function(e3) {
            l(n3, v);
            var t3 = s2(n3);
            function n3(e4, r2) {
              return d2(this, n3), t3.call(this, i.NODE_TYPES.oList, e4, r2);
            }
            return a(n3, [{ key: "addChild", value: function(e4) {
              var t4 = this.children.concat(e4);
              return new n3(this.element, t4);
            } }]), n3;
          }();
          t2.OrderedListBlockNode = g;
          var x = function(e3) {
            l(n3, v);
            var t3 = s2(n3);
            function n3(e4, r2) {
              return d2(this, n3), t3.call(this, i.NODE_TYPES.list, e4, r2);
            }
            return a(n3, [{ key: "addChild", value: function(e4) {
              var t4 = this.children.concat(e4);
              return new n3(this.element, t4);
            } }]), n3;
          }();
          t2.ListBlockNode = x;
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function() {
            var e3 = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t3) {
              var n3 = (e3 + 16 * Math.random()) % 16 | 0;
              return e3 = Math.floor(e3 / 16), (t3 == "x" ? n3 : 3 & n3 | 8).toString(16);
            });
          };
        }, function(e2, t2, n2) {
          e2.exports = n2(5);
        }, function(e2, t2, n2) {
          "use strict";
          var r = c(n2(6)), o = c(n2(1)), i = c(n2(9)), u = n2(0);
          function c(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          e2.exports = { asText: r.default, asTree: o.default.fromRichText, serialize: i.default, Elements: u.NODE_TYPES };
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = void 0, t2.default = function(e3, t3) {
            var n3 = typeof t3 == "string" ? t3 : " ";
            return e3.map(function(e4) {
              return e4.text;
            }).join(n3);
          };
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.init = function(e3) {
            return e3.slice(0, -1);
          }, t2.last = function(e3) {
            return e3[e3.length - 1];
          }, t2.flatten = function(e3) {
            var t3 = [], n3 = true, r = false, o = void 0;
            try {
              for (var i, u = e3[Symbol.iterator](); !(n3 = (i = u.next()).done); n3 = true) {
                var c = i.value;
                Array.isArray(c) ? t3.push.apply(t3, c) : t3.push(c);
              }
            } catch (e4) {
              r = true, o = e4;
            } finally {
              try {
                n3 || u.return == null || u.return();
              } finally {
                if (r)
                  throw o;
              }
            }
            return t3;
          }, t2.sort = function(e3, t3) {
            return function(e4) {
              return function(e5) {
                if (Array.isArray(e5)) {
                  for (var t4 = 0, n3 = new Array(e5.length); t4 < e5.length; t4++)
                    n3[t4] = e5[t4];
                  return n3;
                }
              }(e4) || function(e5) {
                if (Symbol.iterator in Object(e5) || Object.prototype.toString.call(e5) === "[object Arguments]")
                  return Array.from(e5);
              }(e4) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
              }();
            }(e3).sort(t3);
          };
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RichTextBlock = void 0;
          var r = n2(0);
          function o(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r2 = t3[n3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
            }
          }
          var i = function() {
            function e3(t4, n4, r2) {
              !function(e4, t5) {
                if (!(e4 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), this.type = t4, this.text = n4, this.spans = r2;
            }
            var t3, n3;
            return t3 = e3, (n3 = [{ key: "isEmbedBlock", value: function(e4) {
              return e4 === r.NODE_TYPES.embed;
            } }, { key: "isImageBlock", value: function(e4) {
              return e4 === r.NODE_TYPES.image;
            } }, { key: "isList", value: function(e4) {
              return e4 === r.NODE_TYPES.list;
            } }, { key: "isOrderedList", value: function(e4) {
              return e4 === r.NODE_TYPES.oList;
            } }, { key: "isListItem", value: function(e4) {
              return e4 === r.NODE_TYPES.listItem;
            } }, { key: "isOrderedListItem", value: function(e4) {
              return e4 === r.NODE_TYPES.oListItem;
            } }, { key: "emptyList", value: function() {
              return { type: r.NODE_TYPES.list, spans: [], text: "" };
            } }, { key: "emptyOrderedList", value: function() {
              return { type: r.NODE_TYPES.oList, spans: [], text: "" };
            } }]) && o(t3, n3), e3;
          }();
          t2.RichTextBlock = i;
        }, function(e2, t2, n2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = void 0;
          var r, o = (r = n2(1)) && r.__esModule ? r : { default: r }, i = n2(2);
          t2.default = function(e3, t3, n3) {
            return o.default.fromRichText(e3).children.map(function(e4, r2) {
              return function(e5, t4, n4, r3) {
                return function e6(n5, o2) {
                  var u = n5 instanceof i.SpanNode ? n5.text : null, c = n5.children.reduce(function(t5, n6, r4) {
                    return t5.concat([e6(n6, r4)]);
                  }, []);
                  return r3 && r3(n5.type, n5.element, u, c, o2) || t4(n5.type, n5.element, u, c, o2);
                }(e5, n4);
              }(e4, t3, r2, n3);
            });
          };
        }]);
      }, function(e, t, n) {
        "use strict";
        var r = /["'&<>]/;
        e.exports = function(e2) {
          var t2, n2 = "" + e2, o = r.exec(n2);
          if (!o)
            return n2;
          var i = "", u = 0, c = 0;
          for (u = o.index; u < n2.length; u++) {
            switch (n2.charCodeAt(u)) {
              case 34:
                t2 = "&quot;";
                break;
              case 38:
                t2 = "&amp;";
                break;
              case 39:
                t2 = "&#39;";
                break;
              case 60:
                t2 = "&lt;";
                break;
              case 62:
                t2 = "&gt;";
                break;
              default:
                continue;
            }
            c !== u && (i += n2.substring(c, u)), c = u + 1, i += t2;
          }
          return c !== u ? i + n2.substring(c, u) : i;
        };
      }]);
    });
  }
});

// node_modules/node-fetch/lib/index.js
var require_lib = __commonJS({
  "node_modules/node-fetch/lib/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var Stream2 = _interopDefault(require("stream"));
    var http2 = _interopDefault(require("http"));
    var Url = _interopDefault(require("url"));
    var https2 = _interopDefault(require("https"));
    var zlib2 = _interopDefault(require("zlib"));
    var Readable2 = Stream2.Readable;
    var BUFFER = Symbol("buffer");
    var TYPE = Symbol("type");
    var Blob2 = class {
      constructor() {
        this[TYPE] = "";
        const blobParts = arguments[0];
        const options2 = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
          const a = blobParts;
          const length = Number(a.length);
          for (let i = 0; i < length; i++) {
            const element = a[i];
            let buffer;
            if (element instanceof Buffer) {
              buffer = element;
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element);
            } else if (element instanceof Blob2) {
              buffer = element[BUFFER];
            } else {
              buffer = Buffer.from(typeof element === "string" ? element : String(element));
            }
            size += buffer.length;
            buffers.push(buffer);
          }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options2 && options2.type !== void 0 && String(options2.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type;
        }
      }
      get size() {
        return this[BUFFER].length;
      }
      get type() {
        return this[TYPE];
      }
      text() {
        return Promise.resolve(this[BUFFER].toString());
      }
      arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
      }
      stream() {
        const readable = new Readable2();
        readable._read = function() {
        };
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === void 0) {
          relativeStart = 0;
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0);
        } else {
          relativeStart = Math.min(start, size);
        }
        if (end === void 0) {
          relativeEnd = size;
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0);
        } else {
          relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob2([], { type: arguments[2] });
        blob[BUFFER] = slicedBuffer;
        return blob;
      }
    };
    Object.defineProperties(Blob2.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Object.defineProperty(Blob2.prototype, Symbol.toStringTag, {
      value: "Blob",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function FetchError2(message, type, systemError) {
      Error.call(this, message);
      this.message = message;
      this.type = type;
      if (systemError) {
        this.code = this.errno = systemError.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError2.prototype = Object.create(Error.prototype);
    FetchError2.prototype.constructor = FetchError2;
    FetchError2.prototype.name = "FetchError";
    var convert;
    try {
      convert = require("encoding").convert;
    } catch (e) {
    }
    var INTERNALS2 = Symbol("Body internals");
    var PassThrough2 = Stream2.PassThrough;
    function Body2(body) {
      var _this = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
      let size = _ref$size === void 0 ? 0 : _ref$size;
      var _ref$timeout = _ref.timeout;
      let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
      if (body == null) {
        body = null;
      } else if (isURLSearchParams(body)) {
        body = Buffer.from(body.toString());
      } else if (isBlob2(body))
        ;
      else if (Buffer.isBuffer(body))
        ;
      else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        body = Buffer.from(body);
      } else if (ArrayBuffer.isView(body)) {
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
      } else if (body instanceof Stream2)
        ;
      else {
        body = Buffer.from(String(body));
      }
      this[INTERNALS2] = {
        body,
        disturbed: false,
        error: null
      };
      this.size = size;
      this.timeout = timeout;
      if (body instanceof Stream2) {
        body.on("error", function(err) {
          const error3 = err.name === "AbortError" ? err : new FetchError2(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
          _this[INTERNALS2].error = error3;
        });
      }
    }
    Body2.prototype = {
      get body() {
        return this[INTERNALS2].body;
      },
      get bodyUsed() {
        return this[INTERNALS2].disturbed;
      },
      arrayBuffer() {
        return consumeBody2.call(this).then(function(buf) {
          return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
      },
      blob() {
        let ct = this.headers && this.headers.get("content-type") || "";
        return consumeBody2.call(this).then(function(buf) {
          return Object.assign(new Blob2([], {
            type: ct.toLowerCase()
          }), {
            [BUFFER]: buf
          });
        });
      },
      json() {
        var _this2 = this;
        return consumeBody2.call(this).then(function(buffer) {
          try {
            return JSON.parse(buffer.toString());
          } catch (err) {
            return Body2.Promise.reject(new FetchError2(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
          }
        });
      },
      text() {
        return consumeBody2.call(this).then(function(buffer) {
          return buffer.toString();
        });
      },
      buffer() {
        return consumeBody2.call(this);
      },
      textConverted() {
        var _this3 = this;
        return consumeBody2.call(this).then(function(buffer) {
          return convertBody(buffer, _this3.headers);
        });
      }
    };
    Object.defineProperties(Body2.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    Body2.mixIn = function(proto) {
      for (const name of Object.getOwnPropertyNames(Body2.prototype)) {
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body2.prototype, name);
          Object.defineProperty(proto, name, desc);
        }
      }
    };
    function consumeBody2() {
      var _this4 = this;
      if (this[INTERNALS2].disturbed) {
        return Body2.Promise.reject(new TypeError(`body used already for: ${this.url}`));
      }
      this[INTERNALS2].disturbed = true;
      if (this[INTERNALS2].error) {
        return Body2.Promise.reject(this[INTERNALS2].error);
      }
      let body = this.body;
      if (body === null) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob2(body)) {
        body = body.stream();
      }
      if (Buffer.isBuffer(body)) {
        return Body2.Promise.resolve(body);
      }
      if (!(body instanceof Stream2)) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      let accum = [];
      let accumBytes = 0;
      let abort = false;
      return new Body2.Promise(function(resolve2, reject) {
        let resTimeout;
        if (_this4.timeout) {
          resTimeout = setTimeout(function() {
            abort = true;
            reject(new FetchError2(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
          }, _this4.timeout);
        }
        body.on("error", function(err) {
          if (err.name === "AbortError") {
            abort = true;
            reject(err);
          } else {
            reject(new FetchError2(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
          }
        });
        body.on("data", function(chunk) {
          if (abort || chunk === null) {
            return;
          }
          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true;
            reject(new FetchError2(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
            return;
          }
          accumBytes += chunk.length;
          accum.push(chunk);
        });
        body.on("end", function() {
          if (abort) {
            return;
          }
          clearTimeout(resTimeout);
          try {
            resolve2(Buffer.concat(accum, accumBytes));
          } catch (err) {
            reject(new FetchError2(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
          }
        });
      });
    }
    function convertBody(buffer, headers) {
      if (typeof convert !== "function") {
        throw new Error("The package `encoding` must be installed to use the textConverted() function");
      }
      const ct = headers.get("content-type");
      let charset = "utf-8";
      let res, str;
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
      }
      str = buffer.slice(0, 1024).toString();
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
      }
      if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
          res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
          if (res) {
            res.pop();
          }
        }
        if (res) {
          res = /charset=(.*)/i.exec(res.pop());
        }
      }
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
      }
      if (res) {
        charset = res.pop();
        if (charset === "gb2312" || charset === "gbk") {
          charset = "gb18030";
        }
      }
      return convert(buffer, "UTF-8", charset).toString();
    }
    function isURLSearchParams(obj) {
      if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
        return false;
      }
      return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
    }
    function isBlob2(obj) {
      return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
    }
    function clone2(instance) {
      let p1, p2;
      let body = instance.body;
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream2 && typeof body.getBoundary !== "function") {
        p1 = new PassThrough2();
        p2 = new PassThrough2();
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS2].body = p1;
        body = p2;
      }
      return body;
    }
    function extractContentType2(body) {
      if (body === null) {
        return null;
      } else if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      } else if (isURLSearchParams(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isBlob2(body)) {
        return body.type || null;
      } else if (Buffer.isBuffer(body)) {
        return null;
      } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        return null;
      } else if (ArrayBuffer.isView(body)) {
        return null;
      } else if (typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${body.getBoundary()}`;
      } else if (body instanceof Stream2) {
        return null;
      } else {
        return "text/plain;charset=UTF-8";
      }
    }
    function getTotalBytes2(instance) {
      const body = instance.body;
      if (body === null) {
        return 0;
      } else if (isBlob2(body)) {
        return body.size;
      } else if (Buffer.isBuffer(body)) {
        return body.length;
      } else if (body && typeof body.getLengthSync === "function") {
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || body.hasKnownLength && body.hasKnownLength()) {
          return body.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream2(dest, instance) {
      const body = instance.body;
      if (body === null) {
        dest.end();
      } else if (isBlob2(body)) {
        body.stream().pipe(dest);
      } else if (Buffer.isBuffer(body)) {
        dest.write(body);
        dest.end();
      } else {
        body.pipe(dest);
      }
    }
    Body2.Promise = global.Promise;
    var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(name) {
      name = `${name}`;
      if (invalidTokenRegex.test(name) || name === "") {
        throw new TypeError(`${name} is not a legal HTTP header name`);
      }
    }
    function validateValue(value) {
      value = `${value}`;
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
      }
    }
    function find(map, name) {
      name = name.toLowerCase();
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key;
        }
      }
      return void 0;
    }
    var MAP = Symbol("map");
    var Headers2 = class {
      constructor() {
        let init2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        this[MAP] = Object.create(null);
        if (init2 instanceof Headers2) {
          const rawHeaders = init2.raw();
          const headerNames = Object.keys(rawHeaders);
          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value);
            }
          }
          return;
        }
        if (init2 == null)
          ;
        else if (typeof init2 === "object") {
          const method = init2[Symbol.iterator];
          if (method != null) {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            const pairs = [];
            for (const pair of init2) {
              if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
                throw new TypeError("Each header pair must be iterable");
              }
              pairs.push(Array.from(pair));
            }
            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              this.append(pair[0], pair[1]);
            }
          } else {
            for (const key of Object.keys(init2)) {
              const value = init2[key];
              this.append(key, value);
            }
          }
        } else {
          throw new TypeError("Provided initializer must be an object");
        }
      }
      get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === void 0) {
          return null;
        }
        return this[MAP][key].join(", ");
      }
      forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        let pairs = getHeaders(this);
        let i = 0;
        while (i < pairs.length) {
          var _pairs$i = pairs[i];
          const name = _pairs$i[0], value = _pairs$i[1];
          callback.call(thisArg, value, name, this);
          pairs = getHeaders(this);
          i++;
        }
      }
      set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== void 0 ? key : name] = [value];
      }
      append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          this[MAP][key].push(value);
        } else {
          this[MAP][name] = [value];
        }
      }
      has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== void 0;
      }
      delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          delete this[MAP][key];
        }
      }
      raw() {
        return this[MAP];
      }
      keys() {
        return createHeadersIterator(this, "key");
      }
      values() {
        return createHeadersIterator(this, "value");
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, "key+value");
      }
    };
    Headers2.prototype.entries = Headers2.prototype[Symbol.iterator];
    Object.defineProperty(Headers2.prototype, Symbol.toStringTag, {
      value: "Headers",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Headers2.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    });
    function getHeaders(headers) {
      let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
      const keys = Object.keys(headers[MAP]).sort();
      return keys.map(kind === "key" ? function(k) {
        return k.toLowerCase();
      } : kind === "value" ? function(k) {
        return headers[MAP][k].join(", ");
      } : function(k) {
        return [k.toLowerCase(), headers[MAP][k].join(", ")];
      });
    }
    var INTERNAL = Symbol("internal");
    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype);
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      };
      return iterator;
    }
    var HeadersIteratorPrototype = Object.setPrototypeOf({
      next() {
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
          throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index2 = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index2 >= len) {
          return {
            value: void 0,
            done: true
          };
        }
        this[INTERNAL].index = index2 + 1;
        return {
          value: values[index2],
          done: false
        };
      }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP]);
      const hostHeaderKey = find(headers[MAP], "Host");
      if (hostHeaderKey !== void 0) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
      }
      return obj;
    }
    function createHeadersLenient(obj) {
      const headers = new Headers2();
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue;
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue;
            }
            if (headers[MAP][name] === void 0) {
              headers[MAP][name] = [val];
            } else {
              headers[MAP][name].push(val);
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]];
        }
      }
      return headers;
    }
    var INTERNALS$12 = Symbol("Response internals");
    var STATUS_CODES = http2.STATUS_CODES;
    var Response3 = class {
      constructor() {
        let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Body2.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers2(opts.headers);
        if (body != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(body);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$12] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        };
      }
      get url() {
        return this[INTERNALS$12].url || "";
      }
      get status() {
        return this[INTERNALS$12].status;
      }
      get ok() {
        return this[INTERNALS$12].status >= 200 && this[INTERNALS$12].status < 300;
      }
      get redirected() {
        return this[INTERNALS$12].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$12].statusText;
      }
      get headers() {
        return this[INTERNALS$12].headers;
      }
      clone() {
        return new Response3(clone2(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        });
      }
    };
    Body2.mixIn(Response3.prototype);
    Object.defineProperties(Response3.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    Object.defineProperty(Response3.prototype, Symbol.toStringTag, {
      value: "Response",
      writable: false,
      enumerable: false,
      configurable: true
    });
    var INTERNALS$22 = Symbol("Request internals");
    var parse_url = Url.parse;
    var format_url = Url.format;
    var streamDestructionSupported = "destroy" in Stream2.Readable.prototype;
    function isRequest2(input) {
      return typeof input === "object" && typeof input[INTERNALS$22] === "object";
    }
    function isAbortSignal2(signal) {
      const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
      return !!(proto && proto.constructor.name === "AbortSignal");
    }
    var Request2 = class {
      constructor(input) {
        let init2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let parsedURL;
        if (!isRequest2(input)) {
          if (input && input.href) {
            parsedURL = parse_url(input.href);
          } else {
            parsedURL = parse_url(`${input}`);
          }
          input = {};
        } else {
          parsedURL = parse_url(input.url);
        }
        let method = init2.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init2.body != null || isRequest2(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let inputBody = init2.body != null ? init2.body : isRequest2(input) && input.body !== null ? clone2(input) : null;
        Body2.call(this, inputBody, {
          timeout: init2.timeout || input.timeout || 0,
          size: init2.size || input.size || 0
        });
        const headers = new Headers2(init2.headers || input.headers || {});
        if (inputBody != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(inputBody);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        let signal = isRequest2(input) ? input.signal : null;
        if ("signal" in init2)
          signal = init2.signal;
        if (signal != null && !isAbortSignal2(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[INTERNALS$22] = {
          method,
          redirect: init2.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal
        };
        this.follow = init2.follow !== void 0 ? init2.follow : input.follow !== void 0 ? input.follow : 20;
        this.compress = init2.compress !== void 0 ? init2.compress : input.compress !== void 0 ? input.compress : true;
        this.counter = init2.counter || input.counter || 0;
        this.agent = init2.agent || input.agent;
      }
      get method() {
        return this[INTERNALS$22].method;
      }
      get url() {
        return format_url(this[INTERNALS$22].parsedURL);
      }
      get headers() {
        return this[INTERNALS$22].headers;
      }
      get redirect() {
        return this[INTERNALS$22].redirect;
      }
      get signal() {
        return this[INTERNALS$22].signal;
      }
      clone() {
        return new Request2(this);
      }
    };
    Body2.mixIn(Request2.prototype);
    Object.defineProperty(Request2.prototype, Symbol.toStringTag, {
      value: "Request",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    });
    function getNodeRequestOptions2(request) {
      const parsedURL = request[INTERNALS$22].parsedURL;
      const headers = new Headers2(request[INTERNALS$22].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError("Only absolute URLs are supported");
      }
      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
      }
      if (request.signal && request.body instanceof Stream2.Readable && !streamDestructionSupported) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
      }
      let contentLengthValue = null;
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes2(request);
        if (typeof totalBytes === "number") {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate");
      }
      let agent = request.agent;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      });
    }
    function AbortError2(message) {
      Error.call(this, message);
      this.type = "aborted";
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError2.prototype = Object.create(Error.prototype);
    AbortError2.prototype.constructor = AbortError2;
    AbortError2.prototype.name = "AbortError";
    var PassThrough$1 = Stream2.PassThrough;
    var resolve_url = Url.resolve;
    function fetch3(url, opts) {
      if (!fetch3.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
      }
      Body2.Promise = fetch3.Promise;
      return new fetch3.Promise(function(resolve2, reject) {
        const request = new Request2(url, opts);
        const options2 = getNodeRequestOptions2(request);
        const send = (options2.protocol === "https:" ? https2 : http2).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort2() {
          let error3 = new AbortError2("The user aborted a request.");
          reject(error3);
          if (request.body && request.body instanceof Stream2.Readable) {
            request.body.destroy(error3);
          }
          if (!response || !response.body)
            return;
          response.body.emit("error", error3);
        };
        if (signal && signal.aborted) {
          abort();
          return;
        }
        const abortAndFinalize = function abortAndFinalize2() {
          abort();
          finalize();
        };
        const req = send(options2);
        let reqTimeout;
        if (signal) {
          signal.addEventListener("abort", abortAndFinalize);
        }
        function finalize() {
          req.abort();
          if (signal)
            signal.removeEventListener("abort", abortAndFinalize);
          clearTimeout(reqTimeout);
        }
        if (request.timeout) {
          req.once("socket", function(socket) {
            reqTimeout = setTimeout(function() {
              reject(new FetchError2(`network timeout at: ${request.url}`, "request-timeout"));
              finalize();
            }, request.timeout);
          });
        }
        req.on("error", function(err) {
          reject(new FetchError2(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
          finalize();
        });
        req.on("response", function(res) {
          clearTimeout(reqTimeout);
          const headers = createHeadersLenient(res.headers);
          if (fetch3.isRedirect(res.statusCode)) {
            const location = headers.get("Location");
            const locationURL = location === null ? null : resolve_url(request.url, location);
            switch (request.redirect) {
              case "error":
                reject(new FetchError2(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                finalize();
                return;
              case "manual":
                if (locationURL !== null) {
                  try {
                    headers.set("Location", locationURL);
                  } catch (err) {
                    reject(err);
                  }
                }
                break;
              case "follow":
                if (locationURL === null) {
                  break;
                }
                if (request.counter >= request.follow) {
                  reject(new FetchError2(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                  finalize();
                  return;
                }
                const requestOpts = {
                  headers: new Headers2(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                };
                if (res.statusCode !== 303 && request.body && getTotalBytes2(request) === null) {
                  reject(new FetchError2("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                  finalize();
                  return;
                }
                if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                  requestOpts.method = "GET";
                  requestOpts.body = void 0;
                  requestOpts.headers.delete("content-length");
                }
                resolve2(fetch3(new Request2(locationURL, requestOpts)));
                finalize();
                return;
            }
          }
          res.once("end", function() {
            if (signal)
              signal.removeEventListener("abort", abortAndFinalize);
          });
          let body = res.pipe(new PassThrough$1());
          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          };
          const codings = headers.get("Content-Encoding");
          if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          const zlibOptions = {
            flush: zlib2.Z_SYNC_FLUSH,
            finishFlush: zlib2.Z_SYNC_FLUSH
          };
          if (codings == "gzip" || codings == "x-gzip") {
            body = body.pipe(zlib2.createGunzip(zlibOptions));
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          if (codings == "deflate" || codings == "x-deflate") {
            const raw = res.pipe(new PassThrough$1());
            raw.once("data", function(chunk) {
              if ((chunk[0] & 15) === 8) {
                body = body.pipe(zlib2.createInflate());
              } else {
                body = body.pipe(zlib2.createInflateRaw());
              }
              response = new Response3(body, response_options);
              resolve2(response);
            });
            return;
          }
          if (codings == "br" && typeof zlib2.createBrotliDecompress === "function") {
            body = body.pipe(zlib2.createBrotliDecompress());
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          response = new Response3(body, response_options);
          resolve2(response);
        });
        writeToStream2(req, request);
      });
    }
    fetch3.isRedirect = function(code) {
      return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
    };
    fetch3.Promise = global.Promise;
    module2.exports = exports = fetch3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports;
    exports.Headers = Headers2;
    exports.Request = Request2;
    exports.Response = Response3;
    exports.FetchError = FetchError2;
  }
});

// node_modules/cross-fetch/dist/node-ponyfill.js
var require_node_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/node-ponyfill.js"(exports, module2) {
    var nodeFetch = require_lib();
    var realFetch = nodeFetch.default || nodeFetch;
    var fetch3 = function(url, options2) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options2);
    };
    fetch3.ponyfill = true;
    module2.exports = exports = fetch3;
    exports.fetch = fetch3;
    exports.Headers = nodeFetch.Headers;
    exports.Request = nodeFetch.Request;
    exports.Response = nodeFetch.Response;
    exports.default = fetch3;
  }
});

// node_modules/@prismicio/client/cjs/@prismicio/client.js
var require_client = __commonJS({
  "node_modules/@prismicio/client/cjs/@prismicio/client.js"(exports, module2) {
    "use strict";
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var crossFetch = _interopDefault(require_node_ponyfill());
    var extendStatics = function(d2, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
        d3.__proto__ = b2;
      } || function(d3, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d3[p] = b2[p];
      };
      return extendStatics(d2, b);
    };
    function __extends(d2, b) {
      extendStatics(d2, b);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var Variation = function() {
      function Variation2(data) {
        this.data = {};
        this.data = data;
      }
      Variation2.prototype.id = function() {
        return this.data.id;
      };
      Variation2.prototype.ref = function() {
        return this.data.ref;
      };
      Variation2.prototype.label = function() {
        return this.data.label;
      };
      return Variation2;
    }();
    var Experiment = function() {
      function Experiment2(data) {
        this.data = {};
        this.data = data;
        this.variations = (data.variations || []).map(function(v) {
          return new Variation(v);
        });
      }
      Experiment2.prototype.id = function() {
        return this.data.id;
      };
      Experiment2.prototype.googleId = function() {
        return this.data.googleId;
      };
      Experiment2.prototype.name = function() {
        return this.data.name;
      };
      return Experiment2;
    }();
    var Experiments = function() {
      function Experiments2(data) {
        if (data) {
          this.drafts = (data.drafts || []).map(function(exp) {
            return new Experiment(exp);
          });
          this.running = (data.running || []).map(function(exp) {
            return new Experiment(exp);
          });
        }
      }
      Experiments2.prototype.current = function() {
        if (this.running.length > 0) {
          return this.running[0];
        } else {
          return null;
        }
      };
      Experiments2.prototype.refFromCookie = function(cookie) {
        if (!cookie || cookie.trim() === "")
          return null;
        var splitted = cookie.trim().split(" ");
        if (splitted.length < 2)
          return null;
        var expId = splitted[0];
        var varIndex = parseInt(splitted[1], 10);
        var exp = this.running.filter(function(exp2) {
          return exp2.googleId() === expId && exp2.variations.length > varIndex;
        })[0];
        return exp ? exp.variations[varIndex].ref() : null;
      };
      return Experiments2;
    }();
    var Form = function() {
      function Form2(form, httpClient) {
        this.httpClient = httpClient;
        this.form = form;
        this.data = {};
        for (var field in form.fields) {
          if (form.fields[field]["default"]) {
            this.data[field] = [form.fields[field]["default"]];
          }
        }
      }
      Form2.prototype.set = function(field, value) {
        var fieldDesc = this.form.fields[field];
        if (!fieldDesc)
          throw new Error("Unknown field " + field);
        var checkedValue = value === "" || value === void 0 ? null : value;
        var values = this.data[field] || [];
        if (fieldDesc.multiple) {
          values = checkedValue ? values.concat([checkedValue]) : values;
        } else {
          values = checkedValue ? [checkedValue] : values;
        }
        this.data[field] = values;
      };
      Form2.prototype.url = function() {
        var url = this.form.action;
        if (this.data) {
          var sep = url.indexOf("?") > -1 ? "&" : "?";
          for (var key in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, key)) {
              var values = this.data[key];
              if (values) {
                for (var i = 0; i < values.length; i++) {
                  url += sep + key + "=" + encodeURIComponent(values[i]);
                  sep = "&";
                }
              }
            }
          }
        }
        return url;
      };
      Form2.prototype.submit = function(cb) {
        return this.httpClient.cachedRequest(this.url()).then(function(response) {
          cb && cb(null, response);
          return response;
        }).catch(function(error3) {
          cb && cb(error3);
          throw error3;
        });
      };
      return Form2;
    }();
    var SearchForm = function(_super) {
      __extends(SearchForm2, _super);
      function SearchForm2(form, httpClient) {
        return _super.call(this, form, httpClient) || this;
      }
      SearchForm2.prototype.set = function(field, value) {
        _super.prototype.set.call(this, field, value);
        return this;
      };
      SearchForm2.prototype.ref = function(ref) {
        return this.set("ref", ref);
      };
      SearchForm2.prototype.query = function(query) {
        if (typeof query === "string") {
          return this.query([query]);
        } else if (Array.isArray(query)) {
          return this.set("q", "[" + query.join("") + "]");
        } else {
          throw new Error("Invalid query : " + query);
        }
      };
      SearchForm2.prototype.pageSize = function(size) {
        return this.set("pageSize", size);
      };
      SearchForm2.prototype.graphQuery = function(query) {
        return this.set("graphQuery", query);
      };
      SearchForm2.prototype.lang = function(langCode) {
        return this.set("lang", langCode);
      };
      SearchForm2.prototype.page = function(p) {
        return this.set("page", p);
      };
      SearchForm2.prototype.after = function(documentId) {
        return this.set("after", documentId);
      };
      SearchForm2.prototype.orderings = function(orderings) {
        if (!orderings) {
          return this;
        } else {
          return this.set("orderings", "[" + orderings.join(",") + "]");
        }
      };
      return SearchForm2;
    }(Form);
    var TagsForm = function(_super) {
      __extends(TagsForm2, _super);
      function TagsForm2(form, httpClient) {
        return _super.call(this, form, httpClient) || this;
      }
      return TagsForm2;
    }(Form);
    var OPERATOR = {
      at: "at",
      not: "not",
      missing: "missing",
      has: "has",
      any: "any",
      in: "in",
      fulltext: "fulltext",
      similar: "similar",
      numberGt: "number.gt",
      numberLt: "number.lt",
      numberInRange: "number.inRange",
      dateBefore: "date.before",
      dateAfter: "date.after",
      dateBetween: "date.between",
      dateDayOfMonth: "date.day-of-month",
      dateDayOfMonthAfter: "date.day-of-month-after",
      dateDayOfMonthBefore: "date.day-of-month-before",
      dateDayOfWeek: "date.day-of-week",
      dateDayOfWeekAfter: "date.day-of-week-after",
      dateDayOfWeekBefore: "date.day-of-week-before",
      dateMonth: "date.month",
      dateMonthBefore: "date.month-before",
      dateMonthAfter: "date.month-after",
      dateYear: "date.year",
      dateHour: "date.hour",
      dateHourBefore: "date.hour-before",
      dateHourAfter: "date.hour-after",
      GeopointNear: "geopoint.near"
    };
    function encode(value) {
      if (typeof value === "string") {
        return '"' + value + '"';
      } else if (typeof value === "number") {
        return value.toString();
      } else if (value instanceof Date) {
        return value.getTime().toString();
      } else if (Array.isArray(value)) {
        return "[" + value.map(function(v) {
          return encode(v);
        }).join(",") + "]";
      } else if (typeof value === "boolean") {
        return value.toString();
      } else {
        throw new Error("Unable to encode " + value + " of type " + typeof value);
      }
    }
    var geopoint = {
      near: function(fragment, latitude, longitude, radius) {
        return "[" + OPERATOR.GeopointNear + "(" + fragment + ", " + latitude + ", " + longitude + ", " + radius + ")]";
      }
    };
    var date = {
      before: function(fragment, before) {
        return "[" + OPERATOR.dateBefore + "(" + fragment + ", " + encode(before) + ")]";
      },
      after: function(fragment, after) {
        return "[" + OPERATOR.dateAfter + "(" + fragment + ", " + encode(after) + ")]";
      },
      between: function(fragment, before, after) {
        return "[" + OPERATOR.dateBetween + "(" + fragment + ", " + encode(before) + ", " + encode(after) + ")]";
      },
      dayOfMonth: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfMonth + "(" + fragment + ", " + day + ")]";
      },
      dayOfMonthAfter: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthAfter + "(" + fragment + ", " + day + ")]";
      },
      dayOfMonthBefore: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthBefore + "(" + fragment + ", " + day + ")]";
      },
      dayOfWeek: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfWeek + "(" + fragment + ", " + encode(day) + ")]";
      },
      dayOfWeekAfter: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekAfter + "(" + fragment + ", " + encode(day) + ")]";
      },
      dayOfWeekBefore: function(fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekBefore + "(" + fragment + ", " + encode(day) + ")]";
      },
      month: function(fragment, month) {
        return "[" + OPERATOR.dateMonth + "(" + fragment + ", " + encode(month) + ")]";
      },
      monthBefore: function(fragment, month) {
        return "[" + OPERATOR.dateMonthBefore + "(" + fragment + ", " + encode(month) + ")]";
      },
      monthAfter: function(fragment, month) {
        return "[" + OPERATOR.dateMonthAfter + "(" + fragment + ", " + encode(month) + ")]";
      },
      year: function(fragment, year) {
        return "[" + OPERATOR.dateYear + "(" + fragment + ", " + year + ")]";
      },
      hour: function(fragment, hour) {
        return "[" + OPERATOR.dateHour + "(" + fragment + ", " + hour + ")]";
      },
      hourBefore: function(fragment, hour) {
        return "[" + OPERATOR.dateHourBefore + "(" + fragment + ", " + hour + ")]";
      },
      hourAfter: function(fragment, hour) {
        return "[" + OPERATOR.dateHourAfter + "(" + fragment + ", " + hour + ")]";
      }
    };
    var number = {
      gt: function(fragment, value) {
        return "[" + OPERATOR.numberGt + "(" + fragment + ", " + value + ")]";
      },
      lt: function(fragment, value) {
        return "[" + OPERATOR.numberLt + "(" + fragment + ", " + value + ")]";
      },
      inRange: function(fragment, before, after) {
        return "[" + OPERATOR.numberInRange + "(" + fragment + ", " + before + ", " + after + ")]";
      }
    };
    var Predicates = {
      at: function(fragment, value) {
        return "[" + OPERATOR.at + "(" + fragment + ", " + encode(value) + ")]";
      },
      not: function(fragment, value) {
        return "[" + OPERATOR.not + "(" + fragment + ", " + encode(value) + ")]";
      },
      missing: function(fragment) {
        return "[" + OPERATOR.missing + "(" + fragment + ")]";
      },
      has: function(fragment) {
        return "[" + OPERATOR.has + "(" + fragment + ")]";
      },
      any: function(fragment, values) {
        return "[" + OPERATOR.any + "(" + fragment + ", " + encode(values) + ")]";
      },
      in: function(fragment, values) {
        return "[" + OPERATOR.in + "(" + fragment + ", " + encode(values) + ")]";
      },
      fulltext: function(fragment, value) {
        return "[" + OPERATOR.fulltext + "(" + fragment + ", " + encode(value) + ")]";
      },
      similar: function(documentId, maxResults) {
        return "[" + OPERATOR.similar + '("' + documentId + '", ' + maxResults + ")]";
      },
      date,
      dateBefore: date.before,
      dateAfter: date.after,
      dateBetween: date.between,
      dayOfMonth: date.dayOfMonth,
      dayOfMonthAfter: date.dayOfMonthAfter,
      dayOfMonthBefore: date.dayOfMonthBefore,
      dayOfWeek: date.dayOfWeek,
      dayOfWeekAfter: date.dayOfWeekAfter,
      dayOfWeekBefore: date.dayOfWeekBefore,
      month: date.month,
      monthBefore: date.monthBefore,
      monthAfter: date.monthAfter,
      year: date.year,
      hour: date.hour,
      hourBefore: date.hourBefore,
      hourAfter: date.hourAfter,
      number,
      gt: number.gt,
      lt: number.lt,
      inRange: number.inRange,
      near: geopoint.near,
      geopoint
    };
    var decode = decodeURIComponent;
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(/; */);
      var dec = opt.decode || decode;
      pairs.forEach(function(pair) {
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      });
      return obj;
    }
    var Cookies = { parse };
    function createPreviewResolver(token, documentId, getDocByID) {
      var resolve2 = function(linkResolver, defaultUrl, cb) {
        if (documentId && getDocByID) {
          return getDocByID(documentId, { ref: token }).then(function(document2) {
            if (!document2) {
              cb && cb(null, defaultUrl);
              return defaultUrl;
            } else {
              var url = linkResolver && linkResolver(document2) || document2.url || defaultUrl;
              cb && cb(null, url);
              return url;
            }
          });
        } else {
          return Promise.resolve(defaultUrl);
        }
      };
      return { token, documentId, resolve: resolve2 };
    }
    var PREVIEW_COOKIE = "io.prismic.preview";
    var EXPERIMENT_COOKIE = "io.prismic.experiment";
    var ResolvedApi = function() {
      function ResolvedApi2(data, httpClient, options2) {
        this.data = data;
        this.masterRef = data.refs.filter(function(ref) {
          return ref.isMasterRef;
        })[0];
        this.experiments = new Experiments(data.experiments);
        this.bookmarks = data.bookmarks;
        this.httpClient = httpClient;
        this.options = options2;
        this.refs = data.refs;
        this.tags = data.tags;
        this.types = data.types;
        this.languages = data.languages;
      }
      ResolvedApi2.prototype.form = function(formId) {
        var form = this.data.forms[formId];
        if (!form) {
          return null;
        }
        if (formId === "tags") {
          return new TagsForm(form, this.httpClient);
        }
        return new SearchForm(form, this.httpClient);
      };
      ResolvedApi2.prototype.searchForm = function(formId) {
        var f = this.form(formId);
        if (f instanceof SearchForm) {
          return f;
        }
        return null;
      };
      ResolvedApi2.prototype.tagsForm = function() {
        var f = this.form("tags");
        if (!f) {
          throw new Error("Missing tags form");
        }
        if (f instanceof TagsForm) {
          return f;
        }
        throw new Error("Unexpected error: tags form is not TagsForm");
      };
      ResolvedApi2.prototype.everything = function() {
        var f = this.searchForm("everything");
        if (!f)
          throw new Error("Missing everything form");
        return f;
      };
      ResolvedApi2.prototype.master = function() {
        return this.masterRef.ref;
      };
      ResolvedApi2.prototype.ref = function(label) {
        var ref = this.data.refs.filter(function(ref2) {
          return ref2.label === label;
        })[0];
        return ref ? ref.ref : null;
      };
      ResolvedApi2.prototype.currentExperiment = function() {
        return this.experiments.current();
      };
      ResolvedApi2.prototype.query = function(q, optionsOrCallback, cb) {
        if (cb === void 0) {
          cb = function() {
          };
        }
        var _a = typeof optionsOrCallback === "function" ? { options: {}, callback: optionsOrCallback } : { options: optionsOrCallback || {}, callback: cb }, options2 = _a.options, callback = _a.callback;
        var form = this.everything();
        for (var key in options2) {
          form = form.set(key, options2[key]);
        }
        if (!options2.ref) {
          var cookieString = "";
          if (this.options.req) {
            cookieString = this.options.req.headers["cookie"] || "";
          } else if (typeof window !== "undefined" && window.document) {
            cookieString = window.document.cookie || "";
          }
          var cookies = Cookies.parse(cookieString);
          var previewRef = cookies[PREVIEW_COOKIE];
          var experimentRef = this.experiments.refFromCookie(cookies[EXPERIMENT_COOKIE]);
          form = form.ref(previewRef || experimentRef || this.masterRef.ref);
        }
        if (q) {
          form.query(q);
        }
        return form.submit(callback);
      };
      ResolvedApi2.prototype.queryFirst = function(q, optionsOrCallback, cb) {
        var _a = typeof optionsOrCallback === "function" ? { options: {}, callback: optionsOrCallback } : { options: optionsOrCallback || {}, callback: cb || function() {
        } }, options2 = _a.options, callback = _a.callback;
        options2.page = 1;
        options2.pageSize = 1;
        return this.query(q, options2).then(function(response) {
          var document2 = response && response.results && response.results[0];
          callback(null, document2);
          return document2;
        }).catch(function(error3) {
          callback(error3);
          throw error3;
        });
      };
      ResolvedApi2.prototype.getByID = function(id, maybeOptions, cb) {
        var options2 = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options2.lang)
          options2.lang = "*";
        return this.queryFirst(Predicates.at("document.id", id), options2, cb);
      };
      ResolvedApi2.prototype.getByIDs = function(ids, maybeOptions, cb) {
        var options2 = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options2.lang)
          options2.lang = "*";
        return this.query(Predicates.in("document.id", ids), options2, cb);
      };
      ResolvedApi2.prototype.getByUID = function(type, uid, maybeOptions, cb) {
        var options2 = maybeOptions ? __assign({}, maybeOptions) : {};
        if (options2.lang === "*")
          throw new Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");
        if (!options2.page)
          options2.page = 1;
        return this.queryFirst(Predicates.at("my." + type + ".uid", uid), options2, cb);
      };
      ResolvedApi2.prototype.getSingle = function(type, maybeOptions, cb) {
        var options2 = maybeOptions ? __assign({}, maybeOptions) : {};
        return this.queryFirst(Predicates.at("document.type", type), options2, cb);
      };
      ResolvedApi2.prototype.getBookmark = function(bookmark, maybeOptions, cb) {
        var id = this.data.bookmarks[bookmark];
        if (id) {
          return this.getByID(id, maybeOptions, cb);
        } else {
          return Promise.reject("Error retrieving bookmarked id");
        }
      };
      ResolvedApi2.prototype.getTags = function(cb) {
        return this.tagsForm().submit(cb);
      };
      ResolvedApi2.prototype.getPreviewResolver = function(token, documentId) {
        return createPreviewResolver(token, documentId, this.getByID.bind(this));
      };
      return ResolvedApi2;
    }();
    function MakeLRUCache(limit) {
      return new LRUCache(limit);
    }
    function LRUCache(limit) {
      this.size = 0;
      this.limit = limit;
      this._keymap = {};
    }
    LRUCache.prototype.put = function(key, value) {
      var entry = { key, value };
      this._keymap[key] = entry;
      if (this.tail) {
        this.tail.newer = entry;
        entry.older = this.tail;
      } else {
        this.head = entry;
      }
      this.tail = entry;
      if (this.size === this.limit) {
        return this.shift();
      } else {
        this.size++;
      }
    };
    LRUCache.prototype.shift = function() {
      var entry = this.head;
      if (entry) {
        if (this.head.newer) {
          this.head = this.head.newer;
          this.head.older = void 0;
        } else {
          this.head = void 0;
        }
        entry.newer = entry.older = void 0;
        delete this._keymap[entry.key];
      }
      console.log("purging ", entry.key);
      return entry;
    };
    LRUCache.prototype.get = function(key, returnEntry) {
      var entry = this._keymap[key];
      if (entry === void 0)
        return;
      if (entry === this.tail) {
        return returnEntry ? entry : entry.value;
      }
      if (entry.newer) {
        if (entry === this.head)
          this.head = entry.newer;
        entry.newer.older = entry.older;
      }
      if (entry.older)
        entry.older.newer = entry.newer;
      entry.newer = void 0;
      entry.older = this.tail;
      if (this.tail)
        this.tail.newer = entry;
      this.tail = entry;
      return returnEntry ? entry : entry.value;
    };
    LRUCache.prototype.find = function(key) {
      return this._keymap[key];
    };
    LRUCache.prototype.set = function(key, value) {
      var oldvalue;
      var entry = this.get(key, true);
      if (entry) {
        oldvalue = entry.value;
        entry.value = value;
      } else {
        oldvalue = this.put(key, value);
        if (oldvalue)
          oldvalue = oldvalue.value;
      }
      return oldvalue;
    };
    LRUCache.prototype.remove = function(key) {
      var entry = this._keymap[key];
      if (!entry)
        return;
      delete this._keymap[entry.key];
      if (entry.newer && entry.older) {
        entry.older.newer = entry.newer;
        entry.newer.older = entry.older;
      } else if (entry.newer) {
        entry.newer.older = void 0;
        this.head = entry.newer;
      } else if (entry.older) {
        entry.older.newer = void 0;
        this.tail = entry.older;
      } else {
        this.head = this.tail = void 0;
      }
      this.size--;
      return entry.value;
    };
    LRUCache.prototype.removeAll = function() {
      this.head = this.tail = void 0;
      this.size = 0;
      this._keymap = {};
    };
    if (typeof Object.keys === "function") {
      LRUCache.prototype.keys = function() {
        return Object.keys(this._keymap);
      };
    } else {
      LRUCache.prototype.keys = function() {
        var keys = [];
        for (var k in this._keymap)
          keys.push(k);
        return keys;
      };
    }
    LRUCache.prototype.forEach = function(fun, context, desc) {
      var entry;
      if (context === true) {
        desc = true;
        context = void 0;
      } else if (typeof context !== "object")
        context = this;
      if (desc) {
        entry = this.tail;
        while (entry) {
          fun.call(context, entry.key, entry.value, this);
          entry = entry.older;
        }
      } else {
        entry = this.head;
        while (entry) {
          fun.call(context, entry.key, entry.value, this);
          entry = entry.newer;
        }
      }
    };
    LRUCache.prototype.toString = function() {
      var s2 = "", entry = this.head;
      while (entry) {
        s2 += String(entry.key) + ":" + entry.value;
        entry = entry.newer;
        if (entry)
          s2 += " < ";
      }
      return s2;
    };
    var DefaultApiCache = function() {
      function DefaultApiCache2(limit) {
        if (limit === void 0) {
          limit = 1e3;
        }
        this.lru = MakeLRUCache(limit);
      }
      DefaultApiCache2.prototype.isExpired = function(key) {
        var value = this.lru.get(key, false);
        if (value) {
          return value.expiredIn !== 0 && value.expiredIn < Date.now();
        } else {
          return false;
        }
      };
      DefaultApiCache2.prototype.get = function(key, cb) {
        var value = this.lru.get(key, false);
        if (value && !this.isExpired(key)) {
          cb(null, value.data);
        } else {
          cb && cb(null);
        }
      };
      DefaultApiCache2.prototype.set = function(key, value, ttl, cb) {
        this.lru.remove(key);
        this.lru.put(key, {
          data: value,
          expiredIn: ttl ? Date.now() + ttl * 1e3 : 0
        });
        cb && cb(null);
      };
      DefaultApiCache2.prototype.remove = function(key, cb) {
        this.lru.remove(key);
        cb && cb(null);
      };
      DefaultApiCache2.prototype.clear = function(cb) {
        this.lru.removeAll();
        cb && cb(null);
      };
      return DefaultApiCache2;
    }();
    function fetchRequest(url, options2, callback) {
      var fetchOptions = {
        headers: {
          Accept: "application/json"
        }
      };
      if (options2 && options2.proxyAgent) {
        fetchOptions.agent = options2.proxyAgent;
      }
      var timeoutId;
      var fetchPromise = crossFetch(url, fetchOptions);
      var promise = options2.timeoutInMs ? Promise.race([
        fetchPromise,
        new Promise(function(_, reject) {
          timeoutId = setTimeout(function() {
            return reject(new Error(url + " response timeout"));
          }, options2.timeoutInMs);
        })
      ]) : fetchPromise;
      promise.then(function(resp) {
        clearTimeout(timeoutId);
        if (~~(resp.status / 100 !== 2)) {
          return resp.text().then(function() {
            var e = new Error("Unexpected status code [" + resp.status + "] on URL " + url);
            e.status = resp.status;
            throw e;
          });
        }
        return resp.json().then(function(result) {
          var cacheControl = resp.headers.get("cache-control");
          var parsedCacheControl = cacheControl ? /max-age=(\d+)/.exec(cacheControl) : null;
          var ttl = parsedCacheControl ? parseInt(parsedCacheControl[1], 10) : void 0;
          callback(null, result, resp, ttl);
        });
      }).catch(function(err) {
        clearTimeout(timeoutId);
        callback(err);
      });
    }
    var DefaultRequestHandler = function() {
      function DefaultRequestHandler2(options2) {
        this.options = options2 || {};
      }
      DefaultRequestHandler2.prototype.request = function(url, callback) {
        fetchRequest(url, this.options, callback);
      };
      return DefaultRequestHandler2;
    }();
    var HttpClient = function() {
      function HttpClient2(requestHandler, cache, proxyAgent, timeoutInMs) {
        this.requestHandler = requestHandler || new DefaultRequestHandler({ proxyAgent, timeoutInMs });
        this.cache = cache || new DefaultApiCache();
      }
      HttpClient2.prototype.request = function(url, callback) {
        this.requestHandler.request(url, function(err, result, xhr, ttl) {
          if (err) {
            callback && callback(err, null, xhr, ttl);
          } else if (result) {
            callback && callback(null, result, xhr, ttl);
          }
        });
      };
      HttpClient2.prototype.cachedRequest = function(url, maybeOptions) {
        var _this = this;
        var options2 = maybeOptions || {};
        var run2 = function(cb) {
          var cacheKey = options2.cacheKey || url;
          _this.cache.get(cacheKey, function(cacheGetError, cacheGetValue) {
            if (cacheGetError || cacheGetValue) {
              cb(cacheGetError, cacheGetValue);
            } else {
              _this.request(url, function(fetchError, fetchValue, _, ttlReq) {
                if (fetchError) {
                  cb(fetchError, null);
                } else {
                  var ttl = ttlReq || options2.ttl;
                  if (ttl) {
                    _this.cache.set(cacheKey, fetchValue, ttl, cb);
                  }
                  cb(null, fetchValue);
                }
              });
            }
          });
        };
        return new Promise(function(resolve2, reject) {
          run2(function(err, value) {
            if (err)
              reject(err);
            if (value)
              resolve2(value);
          });
        });
      };
      return HttpClient2;
    }();
    function separator(url) {
      return url.indexOf("?") > -1 ? "&" : "?";
    }
    var Api = function() {
      function Api2(url, options2) {
        this.options = options2 || {};
        this.url = url;
        var queryStrings = [
          this.options.accessToken && "access_token=" + this.options.accessToken,
          this.options.routes && "routes=" + encodeURIComponent(JSON.stringify(this.options.routes))
        ].filter(Boolean);
        if (queryStrings.length > 0) {
          this.url += separator(url) + queryStrings.join("&");
        }
        this.apiDataTTL = this.options.apiDataTTL || 5;
        this.httpClient = new HttpClient(this.options.requestHandler, this.options.apiCache, this.options.proxyAgent, this.options.timeoutInMs);
      }
      Api2.prototype.get = function(cb) {
        var _this = this;
        return this.httpClient.cachedRequest(this.url, { ttl: this.apiDataTTL }).then(function(data) {
          var resolvedApi = new ResolvedApi(data, _this.httpClient, _this.options);
          cb && cb(null, resolvedApi);
          return resolvedApi;
        }).catch(function(error3) {
          cb && cb(error3);
          throw error3;
        });
      };
      return Api2;
    }();
    var LazySearchForm = function() {
      function LazySearchForm2(id, api2) {
        this.id = id;
        this.api = api2;
        this.fields = {};
      }
      LazySearchForm2.prototype.set = function(key, value) {
        this.fields[key] = value;
        return this;
      };
      LazySearchForm2.prototype.ref = function(ref) {
        return this.set("ref", ref);
      };
      LazySearchForm2.prototype.query = function(query) {
        return this.set("q", query);
      };
      LazySearchForm2.prototype.pageSize = function(size) {
        return this.set("pageSize", size);
      };
      LazySearchForm2.prototype.graphQuery = function(query) {
        return this.set("graphQuery", query);
      };
      LazySearchForm2.prototype.lang = function(langCode) {
        return this.set("lang", langCode);
      };
      LazySearchForm2.prototype.page = function(p) {
        return this.set("page", p);
      };
      LazySearchForm2.prototype.after = function(documentId) {
        return this.set("after", documentId);
      };
      LazySearchForm2.prototype.orderings = function(orderings) {
        return this.set("orderings", orderings);
      };
      LazySearchForm2.prototype.url = function() {
        var _this = this;
        return this.api.get().then(function(api2) {
          return LazySearchForm2.toSearchForm(_this, api2).url();
        });
      };
      LazySearchForm2.prototype.submit = function(cb) {
        var _this = this;
        return this.api.get().then(function(api2) {
          return LazySearchForm2.toSearchForm(_this, api2).submit(cb);
        });
      };
      LazySearchForm2.toSearchForm = function(lazyForm, api2) {
        var form = api2.searchForm(lazyForm.id);
        if (form) {
          return Object.keys(lazyForm.fields).reduce(function(form2, fieldKey) {
            var fieldValue = lazyForm.fields[fieldKey];
            if (fieldKey === "q") {
              return form2.query(fieldValue);
            } else if (fieldKey === "pageSize") {
              return form2.pageSize(fieldValue);
            } else if (fieldKey === "graphQuery") {
              return form2.graphQuery(fieldValue);
            } else if (fieldKey === "lang") {
              return form2.lang(fieldValue);
            } else if (fieldKey === "page") {
              return form2.page(fieldValue);
            } else if (fieldKey === "after") {
              return form2.after(fieldValue);
            } else if (fieldKey === "orderings") {
              return form2.orderings(fieldValue);
            } else {
              return form2.set(fieldKey, fieldValue);
            }
          }, form);
        } else {
          throw new Error("Unable to access to form " + lazyForm.id);
        }
      };
      return LazySearchForm2;
    }();
    var DefaultClient = function() {
      function DefaultClient2(url, options2) {
        this.api = new Api(url, options2);
      }
      DefaultClient2.prototype.getApi = function() {
        return this.api.get();
      };
      DefaultClient2.prototype.everything = function() {
        return this.form("everything");
      };
      DefaultClient2.prototype.form = function(formId) {
        return new LazySearchForm(formId, this.api);
      };
      DefaultClient2.prototype.query = function(q, optionsOrCallback, cb) {
        return this.getApi().then(function(api2) {
          return api2.query(q, optionsOrCallback, cb);
        });
      };
      DefaultClient2.prototype.queryFirst = function(q, optionsOrCallback, cb) {
        return this.getApi().then(function(api2) {
          return api2.queryFirst(q, optionsOrCallback, cb);
        });
      };
      DefaultClient2.prototype.getByID = function(id, options2, cb) {
        return this.getApi().then(function(api2) {
          return api2.getByID(id, options2, cb);
        });
      };
      DefaultClient2.prototype.getByIDs = function(ids, options2, cb) {
        return this.getApi().then(function(api2) {
          return api2.getByIDs(ids, options2, cb);
        });
      };
      DefaultClient2.prototype.getByUID = function(type, uid, options2, cb) {
        return this.getApi().then(function(api2) {
          return api2.getByUID(type, uid, options2, cb);
        });
      };
      DefaultClient2.prototype.getSingle = function(type, options2, cb) {
        return this.getApi().then(function(api2) {
          return api2.getSingle(type, options2, cb);
        });
      };
      DefaultClient2.prototype.getBookmark = function(bookmark, options2, cb) {
        return this.getApi().then(function(api2) {
          return api2.getBookmark(bookmark, options2, cb);
        });
      };
      DefaultClient2.prototype.getTags = function() {
        return this.getApi().then(function(api2) {
          return api2.getTags();
        });
      };
      DefaultClient2.prototype.getPreviewResolver = function(token, documentId) {
        var _this = this;
        var getDocById = function(documentId2, maybeOptions) {
          return _this.getApi().then(function(api2) {
            return api2.getByID(documentId2, maybeOptions);
          });
        };
        return createPreviewResolver(token, documentId, getDocById);
      };
      DefaultClient2.getApi = function(url, options2) {
        var api2 = new Api(url, options2);
        return api2.get();
      };
      return DefaultClient2;
    }();
    var index2 = {
      experimentCookie: EXPERIMENT_COOKIE,
      previewCookie: PREVIEW_COOKIE,
      Predicates,
      predicates: Predicates,
      Experiments,
      Api,
      client,
      getApi,
      api
    };
    function client(url, options2) {
      return new DefaultClient(url, options2);
    }
    function getApi(url, options2) {
      return DefaultClient.getApi(url, options2);
    }
    function api(url, options2) {
      return getApi(url, options2);
    }
    module2.exports = index2;
  }
});

// .svelte-kit/netlify/entry.js
__export(exports, {
  handler: () => handler
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page.path)},
						query: new URLSearchParams(${s$1(page.query.toString())}),
						params: ${s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}<\/script>` : `<script type="svelte-data" url="${url}">${json}<\/script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const { name, message, stack } = error3;
    serialized = try_serialize({ name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error3 };
    }
    return { status, error: error3 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = { ...opts.headers };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: { ...context }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error3 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({ request, options: options2, state, $session, route }) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({ status, error: error3 } = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler2) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler2({ ...request, params });
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let { status = 200, body, headers = {} } = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = { ...headers, "content-type": "application/json" };
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return { status, body: normalized_body, headers };
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const [type, ...directives] = headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    const headers = lowercase_keys(incoming.headers);
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers,
        body: parse_body(incoming.rawBody, headers),
        params: null,
        locals: {}
      },
      resolve: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
var tasks = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var import_prismic_dom = __toModule(require_prismic_dom_min());
var import_client = __toModule(require_client());
var css$4 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$4);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-d679abb1.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-d679abb1.js", "/./_app/chunks/vendor-6101124d.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{ "file": "favicon.png", "size": 1571, "type": "image/png" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/([^/]+?)\/?$/,
      params: (m) => ({ uid: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/[uid].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/[uid].svelte": () => Promise.resolve().then(function() {
    return _uid_;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "/./_app/pages/__layout.svelte-754dab73.js", "css": ["/./_app/assets/pages/__layout.svelte-e7166bd4.css", "/./_app/assets/global-bddaa63c.css"], "js": ["/./_app/pages/__layout.svelte-754dab73.js", "/./_app/chunks/vendor-6101124d.js"], "styles": null }, ".svelte-kit/build/components/error.svelte": { "entry": "/./_app/error.svelte-224b86d7.js", "css": [], "js": ["/./_app/error.svelte-224b86d7.js", "/./_app/chunks/vendor-6101124d.js"], "styles": null }, "src/routes/index.svelte": { "entry": "/./_app/pages/index.svelte-ed151c85.js", "css": ["/./_app/assets/pages/index.svelte-a0d7dad6.css", "/./_app/assets/global-bddaa63c.css"], "js": ["/./_app/pages/index.svelte-ed151c85.js", "/./_app/chunks/vendor-6101124d.js", "/./_app/chunks/client-f4883f29.js"], "styles": null }, "src/routes/[uid].svelte": { "entry": "/./_app/pages/[uid].svelte-4d673bcc.js", "css": ["/./_app/assets/pages/[uid].svelte-16ee5e15.css", "/./_app/assets/global-bddaa63c.css"], "js": ["/./_app/pages/[uid].svelte-4d673bcc.js", "/./_app/chunks/vendor-6101124d.js", "/./_app/chunks/client-f4883f29.js"], "styles": null } };
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({ paths: { "base": "", "assets": "/." } });
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
var css$3 = {
  code: "nav.svelte-ds2fra.svelte-ds2fra{width:100%;padding-top:1rem}nav.svelte-ds2fra a.svelte-ds2fra{color:darkcyan;text-decoration:none;padding-right:1rem;font-weight:bold}",
  map: '{"version":3,"file":"nav.svelte","sources":["nav.svelte"],"sourcesContent":["<nav class=\\"container\\">\\n\\t<div class=\\"menu\\">\\n\\t\\t<a href=\\"/\\">Home</a>\\n\\t\\t<a href=\\"/about\\">About</a>\\n\\t</div>\\n</nav>\\n\\n<style>\\n\\tnav {\\n\\t\\twidth: 100%;\\n\\t\\tpadding-top: 1rem;\\n\\t}\\n\\tnav a {\\n\\t\\tcolor: darkcyan;\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding-right: 1rem;\\n\\t\\tfont-weight: bold;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,GAAG,4BAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IAAI,AAClB,CAAC,AACD,iBAAG,CAAC,CAAC,cAAC,CAAC,AACN,KAAK,CAAE,QAAQ,CACf,eAAe,CAAE,IAAI,CACrB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,IAAI,AAClB,CAAC"}'
};
var Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="${"container svelte-ds2fra"}"><div class="${"menu"}"><a href="${"/"}" class="${"svelte-ds2fra"}">Home</a>
		<a href="${"/about"}" class="${"svelte-ds2fra"}">About</a></div>
</nav>`;
});
var css$2 = {
  code: "footer.svelte-1t05ufr{margin:3rem 0;text-align:center}.flex-layout.svelte-1t05ufr{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\n\\timport Nav from './../lib/nav.svelte';\\n\\timport './../styles/reset.css';\\n\\timport './../styles/global.css';\\n<\/script>\\n\\n<div class=\\"flex-layout\\">\\n\\t<header class=\\"absolute\\">\\n\\t\\t<Nav />\\n\\t</header>\\n\\t<slot />\\n\\t<footer>\\n\\t\\t<p>Aaron Hubbard Web Dev</p>\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\tfooter {\\n\\t\\tmargin: 3rem 0;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.flex-layout {\\n\\t\\tmin-height: 100vh;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiBC,MAAM,eAAC,CAAC,AACP,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,YAAY,eAAC,CAAC,AACb,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,AAC/B,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"flex-layout svelte-1t05ufr"}"><header class="${"absolute"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>
	${slots.default ? slots.default({}) : ``}
	<footer class="${"svelte-1t05ufr"}"><p>Aaron Hubbard Web Dev</p></footer>
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load$2({ error: error22, status }) {
  return { props: { error: error22, status } };
}
var Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error22 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error2,
  load: load$2
});
var apiEndpoint = "https://123magic.prismic.io/api/v2";
var Client = import_client.default.client(apiEndpoint);
var css$1 = {
  code: ".header.svelte-dyh0o5{color:salmon;background-size:contain;background-repeat:no-repeat;background-position-x:right;min-height:25vw;padding-top:2rem;justify-content:flex-end;max-width:700px;margin:0 auto}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport Client from './../../utils/client';\\n\\timport PrismicDom from 'prismic-dom';\\n\\timport '../styles/reset.css';\\n\\timport '../styles/global.css';\\n\\n\\tconsole.log(Client);\\n\\texport async function load() {\\n\\t\\tconst document = await Client.getByUID('page', 'homepage');\\n\\t\\treturn {\\n\\t\\t\\tprops: {\\n\\t\\t\\t\\tdocument\\n\\t\\t\\t}\\n\\t\\t};\\n\\t}\\n\\n\\tconst source = 'Prismic';\\n\\tlet motto = 'A fun place to call home';\\n<\/script>\\n\\n<script>\\n\\timport { dataset_dev } from 'svelte/internal';\\n\\n\\texport let document;\\n<\/script>\\n\\n<main>\\n\\t<div class=\\"header container\\" style=\\"background-image:url('{document.data.image.url}\\">\\n\\t\\t<h1>{document.data.title}</h1>\\n\\t\\t<h2>{motto}</h2>\\n\\t\\t<hr />\\n\\t</div>\\n\\t<div class=\\"container\\">\\n\\t\\t<p>\\n\\t\\t\\tThis page is based on a tutorial from <a\\n\\t\\t\\t\\thref=\\"https://prismic.io/blog/svelte-sveltekit-tutorial\\">{source}</a\\n\\t\\t\\t>\\n\\t\\t</p>\\n\\t\\t<p>{@html PrismicDom.RichText.asHtml(document.data.content)}</p>\\n\\t\\t<!-- <input bind:value={motto} /> -->\\n\\t</div>\\n</main>\\n\\n<style>\\n\\t.header {\\n\\t\\tcolor: salmon;\\n\\t\\tbackground-size: contain;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-position-x: right;\\n\\t\\tmin-height: 25vw;\\n\\t\\tpadding-top: 2rem;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tmax-width: 700px;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,OAAO,cAAC,CAAC,AACR,KAAK,CAAE,MAAM,CACb,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,SAAS,CAC5B,qBAAqB,CAAE,KAAK,CAC5B,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,QAAQ,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC"}`
};
console.log(Client);
async function load$1() {
  const document2 = await Client.getByUID("page", "homepage");
  return { props: { document: document2 } };
}
var source$1 = "Prismic";
var motto$1 = "A fun place to call home";
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { document: document2 } = $$props;
  if ($$props.document === void 0 && $$bindings.document && document2 !== void 0)
    $$bindings.document(document2);
  $$result.css.add(css$1);
  return `<main><div class="${"header container svelte-dyh0o5"}" style="${"background-image:url('" + escape2(document2.data.image.url)}"><h1>${escape2(document2.data.title)}</h1>
		<h2>${escape2(motto$1)}</h2>
		<hr></div>
	<div class="${"container"}"><p>This page is based on a tutorial from <a href="${"https://prismic.io/blog/svelte-sveltekit-tutorial"}">${escape2(source$1)}</a></p>
		<p>${import_prismic_dom.default.RichText.asHtml(document2.data.content)}</p>
		</div>
</main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  load: load$1
});
var css = {
  code: ".header.svelte-1f4r6j{color:chocolate;background-size:contain;background-repeat:no-repeat;background-position-x:right;min-height:25vw;padding-top:2rem;justify-content:flex-end;max-width:700px;margin:0 auto}",
  map: `{"version":3,"file":"[uid].svelte","sources":["[uid].svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport Client from './../../utils/client';\\n\\timport PrismicDom from 'prismic-dom';\\n\\timport '../styles/reset.css';\\n\\timport '../styles/global.css';\\n\\n\\texport async function load({ page }) {\\n\\t\\tconst { uid } = page.params;\\n\\t\\tconst document = await Client.getByUID('page', uid);\\n\\t\\treturn {\\n\\t\\t\\tprops: {\\n\\t\\t\\t\\tdocument,\\n\\t\\t\\t\\tuid\\n\\t\\t\\t}\\n\\t\\t};\\n\\t}\\n<\/script>\\n\\n<script>\\n\\tconst source = 'Prismic';\\n\\tlet motto = 'A fun place to call home';\\n\\texport let document, uid;\\n<\/script>\\n\\n<main>\\n\\t<div class=\\"header container\\" style=\\"background-image:url('{document.data.image.url}\\">\\n\\t\\t<h1>{document.data.title}</h1>\\n\\t\\t<h2>{motto}</h2>\\n\\t\\t<hr />\\n\\t</div>\\n\\t<div class=\\"container\\">\\n\\t\\t<p>\\n\\t\\t\\tThis page is based on a tutorial from <a\\n\\t\\t\\t\\thref=\\"https://prismic.io/blog/svelte-sveltekit-tutorial\\">{source}</a\\n\\t\\t\\t>\\n\\t\\t</p>\\n\\t\\t<p>{@html PrismicDom.RichText.asHtml(document.data.content)}</p>\\n\\t\\t<!-- <input bind:value={motto} /> -->\\n\\t</div>\\n</main>\\n\\n<style>\\n\\t.header {\\n\\t\\tcolor: chocolate;\\n\\t\\tbackground-size: contain;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-position-x: right;\\n\\t\\tmin-height: 25vw;\\n\\t\\tpadding-top: 2rem;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tmax-width: 700px;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0CC,OAAO,cAAC,CAAC,AACR,KAAK,CAAE,SAAS,CAChB,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,SAAS,CAC5B,qBAAqB,CAAE,KAAK,CAC5B,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,QAAQ,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC"}`
};
async function load({ page }) {
  const { uid } = page.params;
  const document2 = await Client.getByUID("page", uid);
  return { props: { document: document2, uid } };
}
var source = "Prismic";
var motto = "A fun place to call home";
var U5Buidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { document: document2 } = $$props, { uid } = $$props;
  if ($$props.document === void 0 && $$bindings.document && document2 !== void 0)
    $$bindings.document(document2);
  if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
    $$bindings.uid(uid);
  $$result.css.add(css);
  return `<main><div class="${"header container svelte-1f4r6j"}" style="${"background-image:url('" + escape2(document2.data.image.url)}"><h1>${escape2(document2.data.title)}</h1>
		<h2>${escape2(motto)}</h2>
		<hr></div>
	<div class="${"container"}"><p>This page is based on a tutorial from <a href="${"https://prismic.io/blog/svelte-sveltekit-tutorial"}">${escape2(source)}</a></p>
		<p>${import_prismic_dom.default.RichText.asHtml(document2.data.content)}</p>
		</div>
</main>`;
});
var _uid_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Buidu5D,
  load
});

// .svelte-kit/netlify/entry.js
async function handler(event) {
  const { path, httpMethod, headers, rawQuery, body, isBase64Encoded } = event;
  const query = new URLSearchParams(rawQuery);
  const rawBody = headers["content-type"] === "application/octet-stream" ? new TextEncoder("base64").encode(body) : isBase64Encoded ? Buffer.from(body, "base64").toString() : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      headers: rendered.headers,
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
