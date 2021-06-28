// cut this part and move it manually to the future generic script; put it at the top
window.twik_generic_cart_customization = {
  // -------------------Text: ------------------------
  //cart text:
  cart_text: "Cart",
  //empty cart text:
  cart_empty_text: "Your cart is empty.",
  //checkout text:
  checkout_text: "CHECKOUT",
  //apply text:
  apply_btn_text: "Apply",
  //applu coupon placeholder text (input):
  apply_coupon_placeholder_text: "Enter coupon code.",

  //---------------------------------------------
  //coupon text:
  //no coupon message:
  coupon_code_text_nocoupon: "Please enter the coupon code.",
  //failed message:
  coupon_code_text_failed: "Failed to apply coupon.",
  // success message:
  coupon_code_text_success: "Coupon applied successfully.",

  //---------------------------------------------
  //--------------------- Style ----------------------------
  //Sidebar Cart:
  //background color
  twik_sidebar_cart_background_color: "white",
  //shadow color
  twik_sidebar_cart_box_shadow_color: "grey",
  // line
  twik_cart_row_color: "lightgrey",

  //---------------------------------------------

  //Top Header:
  //remove item text color
  twik_remove_item_text_color: "gray",
  //quantity box border color
  twik_quantity_border_div_color: "lightgrey",
  //quantity box inside numbers
  twik_quantity_inside_div_color: "black",
  //quantity box inside text
  twik_cart_product_quantity_input_color: "black",
  //quantity box inside background
  twik_cart_product_background_input_color: "white",
  //cart selected item text color
  twik_cart_details_header_text_color: "black",
  //cart price color
  twik_cart_price_color: "black",
  //cart text (header) color
  twik_cart_header_wrapper_text_color: "black",

  //---------------------------------------------

  //Footer:
  //checkout button:
  //button background
  twik_cart_checkout_btn_background_color: "grey",
  //button text font color
  twik_cart_checkout_btn_text_color: "white",
  //---------------------------------------------

  //Coupon input:
  //button background
  twik_apply_coupon_button_background_color: "gray",
  //button text font color
  twik_apply_coupon_button_text_color: "white",
  //button border
  twik_apply_coupon_button_border_color: "gray",
  //input border
  twik_apply_coupon_input_border_color: "gray",
  //input background color
  twik_apply_coupon_input_background_color: "white",
  //input text color
  twik_apply_coupon_placeholder_color: "gray",
};

/*! For license information please see final.js.LICENSE.txt */
(() => {
  var e = {
      584: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            OVERLAY: "#twik-generic-cart-overlay",
            SIDEBAR_CART_WRAPPER: "#twik-sidebar-cart-wrapper",
            SIDEBAR_CART: "#twik-sidebar-cart",
            CART_PRODUCT_LIST: ".twik-cart-product-list",
            CART_EMPTY: ".twik-cart-empty",
            ORIGINAL_CART_BUTTON: 'a[href="/cart"]',
            APPLIED_MESSAGE_COUPON: ".twik-applied-coupon-message",
            APPLIED_MESSAGE_COUPON_SUCCESS:
              ".twik-applied-coupon-message .success",
            APPLIED_MESSAGE_COUPON_ERROR: ".twik-applied-coupon-message .error",
            APPLIED_MESSAGE_COUPON_NOCOUPON:
              ".twik-applied-coupon-message .nocoupon",
            APPLIED_COUPON: ".twik-applied-coupon",
            COUPON_NAME: ".twik-coupon-name",
            APPLIED_COUPON_WRAPPER: ".twik-applied-coupon-container",
            COUPON_LOADING: ".coupon-loading",
            CART_SUBTOTAL: ".twik-cart-subtotal",
            CART_PRODUCT_QUANTITY_INPUT: ".twik-cart-product-quantity-input",
            CART_PRODUCT_QUANTITY_SPAN: ".twik-cart-product-quantity-span",
            PLUS_ONE: ".twik-plus-one",
            MINUS_ONE: ".twik-minus-one",
            REMOVE_ITEM: ".twik-remove-item",
            CART_CLOSE_WRAPPER: ".twik-cart-close-wrapper",
            APPLY_COUPON_FORM: ".twik-apply-coupon-form",
            APPLY_COUPON_INPUT: ".twik-apply-coupon-input",
            REMOVE_COUPON: ".remove-applied-coupon",
            COUPON_AMOUNT: ".twik-coupon-amount",
          });
      },
      446: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hideProductLoading =
            t.displayProductLoading =
            t.hideProductsList =
            t.displayEmptyCartDiv =
            t.hideLoadingIcon =
            t.displayLoadingIcon =
            t.hideAppliedCouponDiv =
            t.displayAppliedCouponDiv =
            t.closeOverlay =
            t.openOverlay =
            t.closeCart =
            t.openCart =
              void 0);
        var i = r(n(584)),
          o = n(940),
          a = window.$tw;
        (t.openCart = function () {
          a(i.default.SIDEBAR_CART).animate({ right: "0px" });
        }),
          (t.closeCart = function () {
            a(i.default.SIDEBAR_CART).animate({ right: "-1000px" });
          }),
          (t.openOverlay = function () {
            a(i.default.OVERLAY).fadeIn();
          }),
          (t.closeOverlay = function () {
            a(i.default.OVERLAY).fadeOut();
          }),
          (t.displayAppliedCouponDiv = function (e, t, n) {
            void 0 === e && (e = ""),
              void 0 === t && (t = !1),
              void 0 === n && (n = !1),
              n
                ? (a(i.default.APPLIED_MESSAGE_COUPON_NOCOUPON).show(),
                  (o.qSel(i.default.APPLIED_COUPON).style.display = "none"))
                : t
                ? (a(i.default.APPLIED_MESSAGE_COUPON_SUCCESS).show(),
                  (o.qSel(i.default.APPLIED_COUPON).style.display = "flex"),
                  (o.qSel(i.default.COUPON_NAME).innerText = e))
                : (a(i.default.APPLIED_MESSAGE_COUPON_ERROR).show(),
                  (o.qSel(i.default.APPLIED_COUPON).style.display = "none")),
              (o.qSel(i.default.APPLIED_COUPON_WRAPPER).style.display = "flex");
          }),
          (t.hideAppliedCouponDiv = function () {
            a(i.default.APPLIED_MESSAGE_COUPON_NOCOUPON).hide(),
              a(i.default.APPLIED_MESSAGE_COUPON_SUCCESS).hide(),
              a(i.default.APPLIED_MESSAGE_COUPON_ERROR).hide(),
              (o.qSel(i.default.APPLIED_COUPON_WRAPPER).style.display = "none"),
              (o.qSel(i.default.COUPON_NAME).innerHTML = "");
          }),
          (t.displayLoadingIcon = function () {
            o.qSel(i.default.COUPON_LOADING).style.display = "block";
          }),
          (t.hideLoadingIcon = function () {
            o.qSel(i.default.COUPON_LOADING).style.display = "none";
          }),
          (t.displayEmptyCartDiv = function () {
            a(i.default.CART_EMPTY).show();
          }),
          (t.hideProductsList = function () {
            a(i.default.CART_PRODUCT_LIST).hide(),
              a(".twik-cart-footer").css({ visibility: "hidden" });
          }),
          (t.displayProductLoading = function (e) {
            e.parentElement.parentElement.querySelector(
              ".product-loading"
            ).style.display = "flex";
          }),
          (t.hideProductLoading = function (e) {
            e.parentElement.parentElement.querySelector(
              ".product-loading"
            ).style.display = "none";
          });
      },
      558: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(o) {
                return function (s) {
                  return (function (o) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, s]);
                };
              }
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.stopProp_listener =
            t.closeCartOverlay_listener =
            t.applyCouponForm_submit_listener =
            t.productQuantityInput_input_listener =
            t.productQuantityInput_keydown_listener =
            t.removeCoupon_listener =
            t.removeItem_listener =
            t.minusOne_listener =
            t.plusOne_listener =
              void 0);
        var a = n(254),
          s = o(n(584)),
          c = n(849),
          u = n(446),
          l = n(940);
        (t.plusOne_listener = function (e) {
          return r(void 0, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    e.preventDefault(),
                    u.displayProductLoading(e.target),
                    [4, a.changeQuantity(e.target.getAttribute("data-key"), 1)]
                  );
                case 1:
                  return t.sent(), u.hideProductLoading(e.target), [2];
              }
            });
          });
        }),
          (t.minusOne_listener = function (e) {
            return r(void 0, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      e.preventDefault(),
                      u.displayProductLoading(e.target),
                      [
                        4,
                        a.changeQuantity(e.target.getAttribute("data-key"), -1),
                      ]
                    );
                  case 1:
                    return t.sent(), u.hideProductLoading(e.target), [2];
                }
              });
            });
          }),
          (t.removeItem_listener = function (e) {
            return r(void 0, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      e.preventDefault(),
                      u.displayProductLoading(e.target),
                      [4, a.setQuantity(e.target.getAttribute("data-key"), 0)]
                    );
                  case 1:
                    return t.sent(), u.hideProductLoading(e.target), [2];
                }
              });
            });
          }),
          (t.removeCoupon_listener = function () {
            return r(void 0, void 0, void 0, function () {
              return i(this, function (e) {
                return (
                  c.unapplyDiscount_fetch(),
                  u.hideAppliedCouponDiv(),
                  (l.qSel(s.default.APPLY_COUPON_INPUT).value = ""),
                  [2]
                );
              });
            });
          }),
          (t.productQuantityInput_keydown_listener = function (e) {
            return r(void 0, void 0, void 0, function () {
              var t;
              return i(this, function (n) {
                return (
                  (t = setTimeout(function () {}, 0)),
                  clearTimeout(t),
                  (t = setTimeout(function () {
                    return r(void 0, void 0, void 0, function () {
                      return i(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [
                              4,
                              a.setQuantity(
                                e.target.getAttribute("data-key"),
                                parseInt(e.target.value)
                              ),
                            ];
                          case 1:
                            return t.sent(), [2];
                        }
                      });
                    });
                  }, 1e3)),
                  [2]
                );
              });
            });
          }),
          (t.productQuantityInput_input_listener = function (e, t) {
            (e.innerHTML = t.value.replace(/\s/g, "&nbsp;")),
              a.adjustSpanAndInput(e, t);
          }),
          (t.applyCouponForm_submit_listener = function (e) {
            return r(void 0, void 0, void 0, function () {
              var t, n, r, o;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      e.preventDefault(),
                      u.hideAppliedCouponDiv(),
                      u.displayLoadingIcon(),
                      (t = e.target),
                      ((n = t.querySelector(
                        s.default.APPLY_COUPON_INPUT
                      )).value = n.value.toUpperCase()),
                      (r = n.value.toUpperCase())
                        ? [4, c.applyDiscount_fetch(r)]
                        : (u.hideLoadingIcon(),
                          u.displayAppliedCouponDiv(r, !1, !0),
                          [2])
                    );
                  case 1:
                    return (
                      (o = i.sent()),
                      u.hideLoadingIcon(),
                      u.displayAppliedCouponDiv(r, o),
                      [2]
                    );
                }
              });
            });
          }),
          (t.closeCartOverlay_listener = function () {
            u.closeCart(), u.closeOverlay();
          }),
          (t.stopProp_listener = function (e) {
            e.stopPropagation();
          });
      },
      849: function (e, t) {
        "use strict";
        var n =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(o) {
                return function (s) {
                  return (function (o) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, s]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.changeItemQuantity_fetch =
            t.unapplyDiscount_fetch =
            t.applyDiscount_fetch =
            t.getCart_fetch =
              void 0),
          (t.getCart_fetch = function () {
            return n(void 0, void 0, void 0, function () {
              return r(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, fetch("/cart.json")];
                  case 1:
                    return [4, e.sent().json()];
                  case 2:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (t.applyDiscount_fetch = function (e) {
            return n(void 0, void 0, void 0, function () {
              return r(this, function (t) {
                switch (t.label) {
                  case 0:
                    return e ? [4, fetch("/checkout/?discount=" + e)] : [2, !1];
                  case 1:
                    return [2, !!t.sent().ok];
                }
              });
            });
          }),
          (t.unapplyDiscount_fetch = function () {
            return n(void 0, void 0, void 0, function () {
              return r(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      fetch(
                        "/checkout/?discount=dummytexttodisablealldiscounts"
                      ),
                    ];
                  case 1:
                    return [2, !!e.sent().ok];
                }
              });
            });
          }),
          (t.changeItemQuantity_fetch = function (e, t) {
            return n(void 0, void 0, void 0, function () {
              return r(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      fetch("/cart/change.js", {
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id: e, quantity: t }),
                        method: "POST",
                      }),
                    ];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          });
      },
      254: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(o) {
                return function (s) {
                  return (function (o) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, s]);
                };
              }
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setProductListeners =
            t.replaceCartButton =
            t.refreshCart =
            t.adjustSpanAndInput =
            t.populateProductList =
            t.changeQuantity =
            t.setQuantity =
            t.clearAndHideProductList =
            t.clearProductsList =
              void 0);
        var a = n(940),
          s = n(446),
          c = n(849),
          u = o(n(71)),
          l = n(738),
          p = o(n(584)),
          d = n(558),
          f = window.$tw;
        function h(e) {
          for (var t = e.toString(), n = /(-?\d+)(\d{3})/; n.test(t); )
            t = t.replace(n, "$1,$2");
          return t;
        }
        (t.clearProductsList = function () {
          a.qSel(p.default.CART_PRODUCT_LIST).innerHTML = "";
        }),
          (t.clearAndHideProductList = function () {
            t.clearProductsList(),
              s.hideProductsList(),
              s.displayEmptyCartDiv();
          }),
          (t.setQuantity = function (e, n) {
            return r(void 0, void 0, void 0, function () {
              var r, o, a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, c.getCart_fetch()];
                  case 1:
                    (r = i.sent()), (o = 0), (a = r.items), (i.label = 2);
                  case 2:
                    return o < a.length
                      ? a[o].key !== e
                        ? [3, 4]
                        : [4, c.changeItemQuantity_fetch(e, n)]
                      : [3, 5];
                  case 3:
                    i.sent(), t.refreshCart(), (i.label = 4);
                  case 4:
                    return o++, [3, 2];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (t.changeQuantity = function (e, n) {
            return r(void 0, void 0, void 0, function () {
              var r, o, a, s, u;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, c.getCart_fetch()];
                  case 1:
                    (r = i.sent()), (o = 0), (a = r.items), (i.label = 2);
                  case 2:
                    return o < a.length
                      ? (s = a[o]).key !== e
                        ? [3, 4]
                        : ((u = parseInt(s.quantity) + n),
                          [4, c.changeItemQuantity_fetch(e, u)])
                      : [3, 5];
                  case 3:
                    i.sent(), t.refreshCart(), (i.label = 4);
                  case 4:
                    return o++, [3, 2];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (t.populateProductList = function () {
            return r(void 0, void 0, void 0, function () {
              var e, n, r, o, s, d;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, c.getCart_fetch()];
                  case 1:
                    for (
                      e = i.sent(),
                        n = e.currency,
                        r = window.twik_user_data.location.currencies,
                        o = r[n].symbol,
                        s = e.total_price,
                        d = e.items,
                        t.clearAndHideProductList();
                      a.qSelAll(p.default.CART_SUBTOTAL).length > 1;

                    )
                      a.qSel(p.default.CART_SUBTOTAL).remove();
                    return (
                      (a.qSel(p.default.CART_SUBTOTAL).innerHTML =
                        "" + o + h(s / 100)),
                      (function (e) {
                        var t = e.currency,
                          n =
                            window.twik_user_data.location.currencies[t].symbol;
                        0 != e.total_discount
                          ? (a.qSel(p.default.COUPON_AMOUNT).innerHTML =
                              "-" + n + h(parseInt(e.total_discount) / 100))
                          : (a.qSel(p.default.COUPON_AMOUNT).innerHTML = "");
                      })(e),
                      d.forEach(function (e) {
                        f(a.qSel(p.default.CART_EMPTY)).hide(),
                          f(".twik-cart-footer").css({ visibility: "visible" }),
                          f(a.qSel(p.default.CART_PRODUCT_LIST)).show();
                        var n = {
                          url: e.url,
                          image: e.image,
                          product_title: e.product_title,
                          variant_title: e.variant_title ? e.variant_title : "",
                          symbol: o,
                          final_price: h(e.final_price / 100),
                          key: e.key,
                          quantity: e.quantity,
                        };
                        a.insAdjHTML(
                          a.qSel(p.default.CART_PRODUCT_LIST),
                          "beforeend",
                          l.interp(u.default, n)
                        );
                        var r = a.qSelAll(
                            p.default.CART_PRODUCT_QUANTITY_INPUT
                          )[
                            a.qSelAll(p.default.CART_PRODUCT_QUANTITY_INPUT)
                              .length - 1
                          ],
                          i = a.qSelAll(p.default.CART_PRODUCT_QUANTITY_SPAN)[
                            a.qSelAll(p.default.CART_PRODUCT_QUANTITY_SPAN)
                              .length - 1
                          ];
                        (i.innerHTML = r.value.replace(/\s/g, "&nbsp;")),
                          t.adjustSpanAndInput(i, r);
                      }),
                      [2]
                    );
                }
              });
            });
          }),
          (t.adjustSpanAndInput = function (e, t) {
            e.offsetWidth <= 60 && e.offsetWidth >= 25
              ? (t.style.width = e.offsetWidth + 5 + "px")
              : e.offsetWidth > 60 && (t.style.width = "65px");
          }),
          (t.refreshCart = function () {
            return r(void 0, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, t.populateProductList()];
                  case 1:
                    return (
                      e.sent(),
                      0 === a.qSelAll(".twik-cart-product").length
                        ? (t.clearAndHideProductList(), [2])
                        : (t.setProductListeners(), [2])
                    );
                }
              });
            });
          }),
          (t.replaceCartButton = function () {
            return r(void 0, void 0, void 0, function () {
              var e, n;
              return i(this, function (o) {
                return (
                  (e = a.qSel(p.default.ORIGINAL_CART_BUTTON)),
                  (n = e.cloneNode(!0)).setAttribute("data-action", ""),
                  n.setAttribute("onclick", ""),
                  a.addE(n, "click", function (e) {
                    return r(void 0, void 0, void 0, function () {
                      return i(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e.preventDefault(), [4, t.refreshCart()];
                          case 1:
                            return n.sent(), s.openOverlay(), s.openCart(), [2];
                        }
                      });
                    });
                  }),
                  e.replaceWith(n),
                  a.addE(n.parentElement, "click", d.stopProp_listener),
                  [2]
                );
              });
            });
          }),
          (t.setProductListeners = function () {
            a.qSelAll(p.default.PLUS_ONE).forEach(function (e) {
              a.addE(e, "click", d.plusOne_listener);
            }),
              a.qSelAll(p.default.MINUS_ONE).forEach(function (e) {
                a.addE(e, "click", d.minusOne_listener);
              }),
              a.qSelAll(p.default.REMOVE_ITEM).forEach(function (e) {
                a.addE(e, "click", d.removeItem_listener);
              }),
              a
                .qSelAll(p.default.CART_PRODUCT_QUANTITY_INPUT)
                .forEach(function (e) {
                  a.addE(e, "keydown", d.productQuantityInput_keydown_listener);
                  var t = e.parentElement.querySelector(
                    p.default.CART_PRODUCT_QUANTITY_SPAN
                  );
                  a.addE(e, "input", function () {
                    d.productQuantityInput_input_listener(t, e);
                  });
                });
          });
      },
      450: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (window.$tw = n(755));
        var i = n(940),
          o = n(738),
          a = r(n(584)),
          s = r(n(728)),
          c = r(n(627)),
          u = r(n(155)),
          l = n(254),
          p = n(558),
          d = window.twik_generic_cart_customization;
        i.insAdjHTML(
          document.head,
          "beforeend",
          '<style class="twik-style">' + s.default + "</style>"
        ),
          i.insAdjHTML(
            document.head,
            "beforeend",
            "\n  <style>\n    .twik-cart-checkout-btn {\n      background-color: " +
              d.twik_cart_checkout_btn_background_color +
              ";\n      color: " +
              d.twik_cart_checkout_btn_text_color +
              ";\n    }\n\n    .twik-apply-coupon-button {\n      background: " +
              d.twik_apply_coupon_button_background_color +
              ";\n      color: " +
              d.twik_apply_coupon_button_text_color +
              ";\n      border-color: " +
              d.twik_apply_coupon_button_border_color +
              "\n    }\n\n  \n    input[type=text] {\n      border-color: " +
              d.twik_apply_coupon_input_border_color +
              "!important;\n      background-color: " +
              d.twik_apply_coupon_input_background_color +
              ";\n    }\n  \n    ::placeholder {\n      color: " +
              d.twik_apply_coupon_placeholder_color +
              "!important; \n    }\n    \n    .twik-remove-item {\n      color: " +
              d.twik_remove_item_text_color +
              ";\n    }\n\n    .twik-quantity-border-div {\n      border-color: " +
              d.twik_quantity_border_div_color +
              ";\n      color: " +
              d.twik_quantity_inside_div_color +
              ";\n      background-color: " +
              d.twik_cart_product_background_input_color +
              ";\n\n    }\n\n    .twik-cart-product-quantity-input {\n      background-color: " +
              d.twik_cart_product_background_input_color +
              "!important;\n      color: " +
              d.twik_cart_product_quantity_input_color +
              " ;\n    }\n\n    .twik-cart-details-header {\n      color: " +
              d.twik_cart_details_header_text_color +
              ";\n    }\n\n    .twik-cart-price {\n      color: " +
              d.twik_cart_price_color +
              "\n    }\n    .twik-cart-header-wrapper {\n      color: " +
              d.twik_cart_header_wrapper_text_color +
              "\n\n    }\n\n    \n      #twik-sidebar-cart {\n        box-shadow: " +
              d.twik_sidebar_cart_box_shadow_color +
              " 0px 0px 20px;\n        background-color: " +
              d.twik_sidebar_cart_background_color +
              ";\n      }\n\n      .twik-cart-row:not(:first-child) {\n        border-top: 1px solid " +
              d.twik_cart_row_color +
              ";\n      }\n\n\n\n  </style>\n  "
          ),
          o.addFontAwesome(),
          i.insAdjHTML(
            document.body,
            "beforeend",
            o.interp(u.default, {
              cart: d.cart_text,
              cart_empty_text: d.cart_empty_text,
              checkout_text: d.checkout_text,
              apply_btn_text: d.apply_btn_text,
              apply_coupon_placeholder_text: d.apply_coupon_placeholder_text,
              coupon_code_text_nocoupon: d.coupon_code_text_nocoupon,
              coupon_code_text_failed: d.coupon_code_text_failed,
              coupon_code_text_success: d.coupon_code_text_success,
            })
          ),
          i.insAdjHTML(
            i.qSel(a.default.SIDEBAR_CART_WRAPPER),
            "afterbegin",
            o.interp(c.default, {})
          ),
          console.log(
            "qSel(sel.SIDEBAR_CART_WRAPPER)",
            i.qSel(a.default.SIDEBAR_CART_WRAPPER)
          ),
          console.log("qSel(sel.OVERLAY)", i.qSel(a.default.OVERLAY)),
          console.log(
            "qSel(sel.CART_CLOSE_WRAPPER)",
            i.qSel(a.default.CART_CLOSE_WRAPPER)
          ),
          console.log(
            "qSel(sel.APPLY_COUPON_FORM)",
            i.qSel(a.default.APPLY_COUPON_FORM)
          ),
          console.log(
            "qSel(sel.REMOVE_COUPON)",
            i.qSel(a.default.REMOVE_COUPON)
          ),
          i.addE(window, "click", p.closeCartOverlay_listener),
          i.addE(
            i.qSel(a.default.SIDEBAR_CART_WRAPPER),
            "click",
            p.stopProp_listener
          ),
          i.addE(
            i.qSel(a.default.OVERLAY),
            "click",
            p.closeCartOverlay_listener
          ),
          i.addE(
            i.qSel(a.default.CART_CLOSE_WRAPPER),
            "click",
            p.closeCartOverlay_listener
          ),
          i.addE(
            i.qSel(a.default.APPLY_COUPON_FORM),
            "submit",
            p.applyCouponForm_submit_listener
          ),
          i.addE(
            i.qSel(a.default.REMOVE_COUPON),
            "click",
            p.removeCoupon_listener
          ),
          l.replaceCartButton();
      },
      155: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            '\n<div id="twik-sidebar-cart-wrapper">\n  <div id="twik-sidebar-cart">\n    <div class="twik-cart-row twik-cart-header-wrapper">\n      <div class="twik-cart-header">\n        <a href="/cart">{{cart}}</a>\n        <div class="twik-cart-close-wrapper">\n          <div class="twik-cart-close">\n            <svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14">\n              <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="twik-cart-row twik-cart-product-list-wrapper">\n      <div style="display: none;" class="twik-cart-product-list">\n\n      </div>\n      <div class="twik-cart-empty">{{cart_empty_text}}</div>\n    </div>\n    <div class="twik-cart-row twik-cart-footer">\n      <div class="twik-cart-apply-coupon-wrapper">\n        <div class="twik-apply-coupon-form-wrapper">\n          <form class="twik-apply-coupon-form">\n            <input type="text" class="twik-apply-coupon-input" placeholder="{{apply_coupon_placeholder_text}}"></input>\n            <button type="submit" class="twik-apply-coupon-button">{{apply_btn_text}}</button>\n          </form>\n        </div>\n        <div class="twik-applied-coupon-container" style="display:none;">\n          <div class="twik-applied-coupon-wrapper">\n            <div class="twik-applied-coupon">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="cpn_svg">\n                <path\n                  d="M17.78 3.09C17.45 2.443 16.778 2 16 2h-5.165c-.535 0-1.046.214-1.422.593l-6.82 6.89c0 .002 0 .003-.002.003-.245.253-.413.554-.5.874L.738 8.055c-.56-.953-.24-2.178.712-2.737L9.823.425C10.284.155 10.834.08 11.35.22l4.99 1.337c.755.203 1.293.814 1.44 1.533z"\n                  fill-opacity=".55"></path>\n                <path\n                  d="M10.835 2H16c1.105 0 2 .895 2 2v5.172c0 .53-.21 1.04-.586 1.414l-6.818 6.818c-.777.778-2.036.782-2.82.01l-5.166-5.1c-.786-.775-.794-2.04-.02-2.828.002 0 .003 0 .003-.002l6.82-6.89C9.79 2.214 10.3 2 10.835 2zM13.5 8c.828 0 1.5-.672 1.5-1.5S14.328 5 13.5 5 12 5.672 12 6.5 12.672 8 13.5 8z">\n                </path>\n              </svg>\n              <div class="twik-coupon-name"></div>\n              <div class="twik-coupon-amount"></div>\n              <div class="remove-applied-coupon">x</div>\n            </div>\n          </div>\n          <div class="twik-applied-coupon-message">\n            <div class="success">{{coupon_code_text_success}}</div>\n            <div class="error">{{coupon_code_text_failed}}</div>\n            <div class="nocoupon">{{coupon_code_text_nocoupon}}</div>\n          </div>\n        </div>\n        <div class="coupon-loading" style="display:none;">\n          <i class="fa-2x fa fas fa-spinner fa-pulse coupon-loading-icon" aria-hidden="true"></i>\n        </div>\n      </div>\n      <div class="twik-cart-checkout-btn-wrapper">\n        <a href="/checkout" role="button" class="twik-cart-checkout-btn-a">\n          <div class="twik-cart-checkout-btn">\n            <span class="twik-cart-checkout-text">{{checkout_text}}</span>\n            <span style="font-size: 0.25em;">&#x2588</span>\n            <span class="twik-cart-subtotal">subtotal</span>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n');
      },
      728: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            "\n#twik-generic-cart-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  z-index: 99999;\n  left: 0px;\n  top: 0px; }\n\n#twik-sidebar-cart-wrapper {\n  /* Chrome, Safari, Edge, Opera */\n  /* Firefox */ }\n  #twik-sidebar-cart-wrapper #twik-sidebar-cart {\n    direction: ltr !important;\n    position: fixed;\n    height: 100vh;\n    top: 0;\n    z-index: 999999;\n    right: -1000px;\n    display: grid;\n    grid-template-rows: 70px 1fr 110px;\n    /* grid-gap: 10px; */\n    min-width: 300px;\n    width: 350px; }\n  #twik-sidebar-cart-wrapper .twik-cart-empty {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  #twik-sidebar-cart-wrapper .twik-cart-product {\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-image-wrapper {\n    position: relative;\n    height: 100%;\n    width: 30%;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-image {\n    width: 100px;\n    height: 100px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-details {\n    display: table-cell;\n    flex-direction: column;\n    width: 70%;\n    padding-left: 30px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-details > div:not(:last-child) {\n    margin-bottom: 6px; }\n  #twik-sidebar-cart-wrapper .twik-cart-price {\n    margin-bottom: 12px; }\n  #twik-sidebar-cart-wrapper .twik-cart-close-wrapper {\n    position: absolute;\n    right: 0px;\n    top: 50%;\n    transform: translate(-100%, -50%);\n    cursor: pointer;\n    width: 25px;\n    height: 25px; }\n  #twik-sidebar-cart-wrapper .twik-cart-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%; }\n  #twik-sidebar-cart-wrapper .twik-cart-close svg {\n    stroke-width: 1.5px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-list-wrapper {\n    overflow-y: auto;\n    overflow-x: none; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-wrapper {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-container {\n    width: 100%; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-wrapper {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 72px 40px 1fr; }\n  #twik-sidebar-cart-wrapper .product-loading {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  #twik-sidebar-cart-wrapper .twik-remove-item {\n    position: absolute;\n    top: 50%;\n    right: 0px;\n    transform: translateY(-50%);\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn span {\n    padding-left: 5px;\n    padding-right: 5px; }\n  #twik-sidebar-cart-wrapper .twik-cart-header-wrapper {\n    display: flex;\n    align-items: center;\n    position: relative; }\n  #twik-sidebar-cart-wrapper .twik-cart-shipping-wrapper {\n    display: flex;\n    align-items: center; }\n  #twik-sidebar-cart-wrapper .twik-cart-header-wrapper,\n  #twik-sidebar-cart-wrapper .twik-cart-shipping-wrapper,\n  #twik-sidebar-cart-wrapper .twik-cart-product-list-wrapper,\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-wrapper {\n    padding-left: 30px;\n    padding-right: 30px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input {\n    text-align: center;\n    margin: 0;\n    padding: 0; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input,\n  #twik-sidebar-cart-wrapper .twik-plus-one,\n  #twik-sidebar-cart-wrapper .twik-minus-one {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none; }\n  #twik-sidebar-cart-wrapper .twik-plus-one,\n  #twik-sidebar-cart-wrapper .twik-minus-one {\n    width: 20px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input {\n    width: 25px; }\n  #twik-sidebar-cart-wrapper .twik-plus-one,\n  #twik-sidebar-cart-wrapper .twik-minus-one,\n  #twik-sidebar-cart-wrapper .twik-remove-item {\n    cursor: pointer; }\n  #twik-sidebar-cart-wrapper .twik-quantity-border-div {\n    border-style: solid;\n    border-width: 1px;\n    display: inline-flex;\n    height: 30px; }\n  #twik-sidebar-cart-wrapper .twik-cart-details-header {\n    font-size: 16px; }\n  #twik-sidebar-cart-wrapper .twik-cart-details-subheader,\n  #twik-sidebar-cart-wrapper .twik-cart-price,\n  #twik-sidebar-cart-wrapper .twik-remove-item {\n    font-size: 13px; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a,\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a:hover,\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a:focus,\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a:active {\n    text-decoration: none;\n    color: inherit; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-span {\n    position: absolute;\n    left: -9999px;\n    display: inline-block;\n    visibility: hidden;\n    min-width: 25px; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input::-webkit-outer-spin-button,\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0; }\n  #twik-sidebar-cart-wrapper .twik-cart-product-quantity-input[type=number] {\n    -moz-appearance: textfield; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a {\n    width: 100% !important; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn {\n    width: 100% !important; }\n  #twik-sidebar-cart-wrapper .twik-coupon-name {\n    font-weight: 900;\n    font-size: 0.8em; }\n  #twik-sidebar-cart-wrapper .twik-coupon-amount {\n    color: red;\n    font-size: 0.8em; }\n  #twik-sidebar-cart-wrapper .coupon-wrapper svg {\n    width: 18px;\n    margin-right: 7px;\n    position: relative;\n    top: 3px;\n    overflow: hidden; }\n  #twik-sidebar-cart-wrapper .twik-coupon-div svg {\n    width: 15px;\n    margin-right: 7px;\n    position: relative;\n    overflow: hidden; }\n  #twik-sidebar-cart-wrapper #twik-sidebar-cart {\n    grid-template-rows: 70px 1fr 170px; }\n  #twik-sidebar-cart-wrapper .twik-cart-footer {\n    padding: 14px 24px 24px 24px;\n    display: grid;\n    grid-template-rows: 85px 50px; }\n  #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-wrapper {\n    padding: 0; }\n  #twik-sidebar-cart-wrapper .apply-coupon-input {\n    height: 42px;\n    padding: 10px;\n    border: 1px solid black; }\n  #twik-sidebar-cart-wrapper .discount-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 92px; }\n  #twik-sidebar-cart-wrapper .twik-coupon-container {\n    width: 100%;\n    padding: 10px 0;\n    display: grid;\n    grid-template-rows: 47px 26px 26px 30px; }\n  #twik-sidebar-cart-wrapper .apply-coupon-btn {\n    padding: 5px 25px;\n    color: #fff;\n    text-transform: none;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 13px;\n    background: #3a3a3a;\n    border: 0;\n    border-radius: 0;\n    min-height: 42px;\n    height: 42px;\n    width: 100%;\n    text-align: center; }\n  #twik-sidebar-cart-wrapper .coupon-wrapper {\n    cursor: pointer;\n    position: relative; }\n  #twik-sidebar-cart-wrapper .coupon-loading {\n    position: absolute;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%); }\n  #twik-sidebar-cart-wrapper .coupon-loading-icon {\n    width: 32px;\n    height: 32px;\n    margin: 0;\n    padding: 0; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon-container {\n    display: flex;\n    flex-direction: column; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon-wrapper {\n    display: flex; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon-message .success {\n    display: none;\n    color: green; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon-message .error {\n    display: none;\n    color: red; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon-message .nocoupon {\n    display: none;\n    color: red; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    position: relative;\n    background-color: rgba(113, 113, 113, 0.11);\n    padding: 5px;\n    margin: 5px 0px 0px 0px;\n    height: 23px; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon > div {\n    padding-left: 10px; }\n  #twik-sidebar-cart-wrapper .twik-applied-coupon svg {\n    width: 20px; }\n  #twik-sidebar-cart-wrapper .remove-applied-coupon {\n    cursor: pointer;\n    font-weight: 900;\n    height: 30px; }\n  #twik-sidebar-cart-wrapper .product-loading-icon {\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    padding: 0; }\n  #twik-sidebar-cart-wrapper .twik-apply-coupon-form {\n    display: grid;\n    grid-template-columns: 1fr 70px; }\n  #twik-sidebar-cart-wrapper .twik-apply-coupon-input {\n    height: 35px;\n    border: 1px solid;\n    text-indent: 10px; }\n  #twik-sidebar-cart-wrapper .twik-apply-coupon-button {\n    border-style: solid;\n    border-width: 1px;\n    font-weight: 900;\n    height: 35px; }\n  #twik-sidebar-cart-wrapper .twik-cart-apply-coupon-wrapper {\n    display: grid;\n    grid-template-rows: 35px 1fr;\n    position: relative; }\n  @media only screen and (max-width: 440px) {\n    #twik-sidebar-cart-wrapper .twik-cart-header-wrapper,\n    #twik-sidebar-cart-wrapper .twik-cart-shipping-wrapper,\n    #twik-sidebar-cart-wrapper .twik-cart-product-list-wrapper,\n    #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-wrapper {\n      padding-left: 15px;\n      padding-right: 15px; }\n    #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-a,\n    #twik-sidebar-cart-wrapper .twik-cart-checkout-btn {\n      width: 100% !important; }\n    #twik-sidebar-cart-wrapper #twik-sidebar-cart {\n      grid-template-rows: 50px 1fr 70px;\n      width: 90%; }\n    #twik-sidebar-cart-wrapper .twik-cart-details-header {\n      font-size: 13px; }\n    #twik-sidebar-cart-wrapper .twik-cart-checkout-btn-wrapper {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n    #twik-sidebar-cart-wrapper .twik-cart-image-wrapper {\n      width: 40%; }\n    #twik-sidebar-cart-wrapper .twik-cart-product-details {\n      display: table-cell;\n      flex-direction: column;\n      width: 60%;\n      padding-left: 5px; }\n    #twik-sidebar-cart-wrapper .twik-cart-close-wrapper {\n      transform: translate(-50%, -50%); }\n    #twik-sidebar-cart-wrapper .twik-cart-details-subheader,\n    #twik-sidebar-cart-wrapper .twik-cart-price,\n    #twik-sidebar-cart-wrapper .twik-remove-item {\n      font-size: 10px; }\n    #twik-sidebar-cart-wrapper .twik-cart-shipping {\n      font-size: 13px; } }\n\n#twik-sidebar-cart-wrapper a,\n#twik-sidebar-cart-wrapper a:hover,\n#twik-sidebar-cart-wrapper a:focus,\n#twik-sidebar-cart-wrapper a:active {\n  text-decoration: none;\n  color: inherit; }\n\n");
      },
      627: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = '\n<div id="twik-generic-cart-overlay"></div>\n');
      },
      71: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            '\n<div class="twik-cart-product">\n    <div class="twik-cart-image-wrapper">\n        <a href="{{url}}">\n            <img src="{{image}}" alt="product-image" class="twik-cart-image">\n        </a>\n    </div>\n    <div class="twik-cart-product-details">\n        <a href="{{url}}">\n            <div class="twik-cart-details-header">\n                {{product_title}}\n            </div>\n        </a>\n        <div class="twik-cart-details-subheader">{{variant_title}}</div>\n        <div class="twik-cart-price">{{final_price}}</div>\n        <div class="twik-cart-product-quantity-container">\n            <div class="twik-cart-product-quantity-wrapper">\n                <div class="twik-quantity-border-div">\n                    <div class="twik-minus-one" data-key="{{key}}">-</div>\n                    <input class="twik-cart-product-quantity-input" type="number" data-key="{{key}}" value={{quantity}}>\n                    <span class="twik-cart-product-quantity-span"></span>\n                    <div class="twik-plus-one" data-key="{{key}}">+</div>\n                </div>\n                <div class="product-loading" style="display:none;">\n                    <i class="fa-1x fa fas fa-spinner fa-pulse product-loading-icon" aria-hidden="true"></i>\n                </div>\n                <div class="twik-remove-item" data-key="{{key}}">\n                    Remove\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');
      },
      940: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.insAdjEl = t.insAdjHTML = t.addE = t.qSelAll = t.qSel = void 0),
          (t.qSel = function (e) {
            return document.querySelector(e);
          }),
          (t.qSelAll = function (e) {
            return document.querySelectorAll(e);
          }),
          (t.addE = function (e, t, n) {
            e.addEventListener(t, n);
          }),
          (t.insAdjHTML = function (e, t, n) {
            e.insertAdjacentHTML(t, n);
          }),
          (t.insAdjEl = function (e, t, n) {
            e.insertAdjacentElement(t, n);
          });
      },
      738: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getCookie =
            t.addFontAwesome =
            t.get_CSS_Selector =
            t.interp =
              void 0),
          (t.interp = function (e, t) {
            for (var n = /{{(\w+)}}/g; e.match(n); ) {
              var r = (e.match(n) || [])[0] || "",
                i = r.substring(2, r.length - 2);
              e = e.replace(r, "" + t[i]);
            }
            return e;
          }),
          (t.get_CSS_Selector = function (e) {
            for (
              var t = e, n = [];
              "html" != (null == t ? void 0 : t.nodeName.toLowerCase()) &&
              (t = null == t ? void 0 : t.parentElement) &&
              n.unshift(
                t.nodeName.toLowerCase() +
                  (t.id ? "#" + t.id : "") +
                  (t.className ? "." + t.className.replace(/\s+/g, ".") : "")
              );

            );
            return n.join(" > ");
          }),
          (t.addFontAwesome = function () {
            document.head.insertAdjacentHTML(
              "beforeend",
              '\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        '
            );
          }),
          (t.getCookie = function (e) {
            var t,
              n = ("; " + document.cookie).split("; " + e + "=");
            return 2 === n.length
              ? null === (t = n.pop()) || void 0 === t
                ? void 0
                : t.split(";").shift()
              : "";
          });
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            c = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            u = o.push,
            l = o.indexOf,
            p = {},
            d = p.toString,
            f = p.hasOwnProperty,
            h = f.toString,
            v = h.call(Object),
            g = {},
            y = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            w = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              i,
              o = (n = n || w).createElement("script");
            if (((o.text = e), t))
              for (r in b)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function k(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? p[d.call(e)] || "object"
              : typeof e;
          }
          var _ = "3.6.0",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function T(e) {
            var t = !!e && "length" in e && e.length,
              n = k(e);
            return (
              !y(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: _,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  c = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof a &&
                    ((u = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === c && ((a = this), s--);
                  s < c;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (u &&
                          r &&
                          (C.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = C.extend(u, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            C.extend({
              expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== d.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = f.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (T(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (T(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (T(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return c(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                p["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              c,
              u,
              l,
              p,
              d,
              f,
              h,
              v,
              g,
              y,
              m,
              w,
              b = "sizzle" + 1 * new Date(),
              x = e.document,
              k = 0,
              _ = 0,
              C = ce(),
              T = ce(),
              A = ce(),
              E = ce(),
              S = function (e, t) {
                return e === t && (p = !0), 0;
              },
              P = {}.hasOwnProperty,
              O = [],
              N = O.pop,
              L = O.push,
              D = O.push,
              q = O.slice,
              j = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "[\\x20\\t\\r\\n\\f]",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                M +
                ")(?:" +
                I +
                "*([*^$|!~]?=)" +
                I +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                I +
                "*\\]",
              U =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              W = new RegExp(I + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              $ = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              z = new RegExp(I + "|>"),
              Y = new RegExp(U),
              Q = new RegExp("^" + M + "$"),
              G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + U),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              V = /HTML$/i,
              X = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                d();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((O = q.call(x.childNodes)), x.childNodes),
                O[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: O.length
                  ? function (e, t) {
                      L.apply(e, q.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
              var o,
                s,
                u,
                l,
                p,
                h,
                y,
                m = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return r;
              if (!i && (d(t), (t = t || f), v)) {
                if (11 !== x && (p = Z.exec(e)))
                  if ((o = p[1])) {
                    if (9 === x) {
                      if (!(u = t.getElementById(o))) return r;
                      if (u.id === o) return r.push(u), r;
                    } else if (
                      m &&
                      (u = m.getElementById(o)) &&
                      w(t, u) &&
                      u.id === o
                    )
                      return r.push(u), r;
                  } else {
                    if (p[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = p[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !E[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === x && (z.test(e) || $.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((l = t.getAttribute("id"))
                          ? (l = l.replace(re, ie))
                          : t.setAttribute("id", (l = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (l ? "#" + l : ":scope") + " " + we(h[s]);
                    y = h.join(",");
                  }
                  try {
                    return D.apply(r, m.querySelectorAll(y)), r;
                  } catch (t) {
                    E(e, !0);
                  } finally {
                    l === b && t.removeAttribute("id");
                  }
                }
              }
              return c(e.replace(B, "$1"), t, r, i);
            }
            function ce() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ue(e) {
              return (e[b] = !0), e;
            }
            function le(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function pe(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ue(function (t) {
                return (
                  (t = +t),
                  ue(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !V.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : x;
                return a != f && 9 === a.nodeType && a.documentElement
                  ? ((h = (f = a).documentElement),
                    (v = !o(f)),
                    x != f &&
                      (i = f.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", oe, !1)
                        : i.attachEvent && i.attachEvent("onunload", oe)),
                    (n.scope = le(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = le(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = le(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = le(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !f.getElementsByName || !f.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (g = []),
                    (n.qsa = K.test(f.querySelectorAll)) &&
                      (le(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      le(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      le(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          y.push("!=", U);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (w =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (S = t
                      ? function (e, t) {
                          if (e === t) return (p = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == f || (e.ownerDocument == x && w(x, e))
                                ? -1
                                : t == f || (t.ownerDocument == x && w(x, t))
                                ? 1
                                : l
                                ? j(l, e) - j(l, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (p = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : l
                              ? j(l, e) - j(l, t)
                              : 0;
                          if (i === o) return de(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? de(a[r], s[r])
                            : a[r] == x
                            ? -1
                            : s[r] == x
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  v &&
                  !E[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  E(t, !0);
                }
              return se(t, f, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != f && d(e), w(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != f && d(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && P.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((p = !n.detectDuplicates),
                (l = !n.sortStable && e.slice(0)),
                e.sort(S),
                p)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (l = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ue,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            Y.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + I + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = se.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, c) {
                          var u,
                            l,
                            p,
                            d,
                            f,
                            h,
                            v = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !c && !s,
                            w = !1;
                          if (g) {
                            if (o) {
                              for (; v; ) {
                                for (d = t; (d = d[v]); )
                                  if (
                                    s
                                      ? d.nodeName.toLowerCase() === y
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && m)
                            ) {
                              for (
                                w =
                                  (f =
                                    (u =
                                      (l =
                                        (p = (d = g)[b] || (d[b] = {}))[
                                          d.uniqueID
                                        ] || (p[d.uniqueID] = {}))[e] ||
                                      [])[0] === k && u[1]) && u[2],
                                  d = f && g.childNodes[f];
                                (d =
                                  (++f && d && d[v]) || (w = f = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++w && d === t) {
                                  l[e] = [k, f, w];
                                  break;
                                }
                            } else if (
                              (m &&
                                (w = f =
                                  (u =
                                    (l =
                                      (p = (d = t)[b] || (d[b] = {}))[
                                        d.uniqueID
                                      ] || (p[d.uniqueID] = {}))[e] ||
                                    [])[0] === k && u[1]),
                              !1 === w)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[v]) ||
                                  (w = f = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? d.nodeName.toLowerCase() !== y
                                  : 1 !== d.nodeType) ||
                                  !++w ||
                                  (m &&
                                    ((l =
                                      (p = d[b] || (d[b] = {}))[d.uniqueID] ||
                                      (p[d.uniqueID] = {}))[e] = [k, w]),
                                  d !== t));

                              );
                            return (w -= i) === r || (w % r == 0 && w / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return i[b]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ue(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = j(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ue(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                    return r[b]
                      ? ue(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ue(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ue(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ue(function (e) {
                    return (
                      Q.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return X.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function we(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = _++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, c) {
                    var u,
                      l,
                      p,
                      d = [k, s];
                    if (c) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((l =
                              (p = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (p[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((u = l[o]) && u[0] === k && u[1] === s)
                              return (d[2] = u[2]);
                            if (((l[o] = d), (d[2] = e(t, n, c)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function ke(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, c = e.length, u = null != t;
                s < c;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
              return a;
            }
            function _e(e, t, n, r, i, o) {
              return (
                r && !r[b] && (r = _e(r)),
                i && !i[b] && (i = _e(i, o)),
                ue(function (o, a, s, c) {
                  var u,
                    l,
                    p,
                    d = [],
                    f = [],
                    h = a.length,
                    v =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!o && t) ? v : ke(v, d, e, s, c),
                    y = n ? (i || (o ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, y, s, c), r))
                    for (u = ke(y, f), r(u, [], s, c), l = u.length; l--; )
                      (p = u[l]) && (y[f[l]] = !(g[f[l]] = p));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (u = [], l = y.length; l--; )
                          (p = y[l]) && u.push((g[l] = p));
                        i(null, (y = []), u, c);
                      }
                      for (l = y.length; l--; )
                        (p = y[l]) &&
                          (u = i ? j(o, p) : d[l]) > -1 &&
                          (o[u] = !(a[u] = p));
                    }
                  } else (y = ke(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, c) : D.apply(a, y);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  c = a ? 1 : 0,
                  l = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  p = be(
                    function (e) {
                      return j(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== u)) ||
                        ((t = n).nodeType ? l(e, n, r) : p(e, n, r));
                      return (t = null), i;
                    },
                  ];
                c < o;
                c++
              )
                if ((n = r.relative[e[c].type])) d = [be(xe(d), n)];
                else {
                  if ((n = r.filter[e[c].type].apply(null, e[c].matches))[b]) {
                    for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                    return _e(
                      c > 1 && xe(d),
                      c > 1 &&
                        we(
                          e
                            .slice(0, c - 1)
                            .concat({ value: " " === e[c - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      c < i && Ce(e.slice(c, i)),
                      i < o && Ce((e = e.slice(i))),
                      i < o && we(e)
                    );
                  }
                  d.push(n);
                }
              return xe(d);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    c,
                    u,
                    l = T[e + " "];
                  if (l) return t ? 0 : l.slice(0);
                  for (s = e, c = [], u = r.preFilter; s; ) {
                    for (a in ((n && !(i = F.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), c.push((o = []))),
                    (n = !1),
                    (i = $.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(B, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = G[a].exec(s)) ||
                        (u[a] && !(i = u[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : T(e, c).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    s = A[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ce(t[n]))[b] ? i.push(s) : o.push(s);
                    (s = A(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, a, s, c, l) {
                            var p,
                              h,
                              g,
                              y = 0,
                              m = "0",
                              w = o && [],
                              b = [],
                              x = u,
                              _ = o || (i && r.find.TAG("*", l)),
                              C = (k += null == x ? 1 : Math.random() || 0.1),
                              T = _.length;
                            for (
                              l && (u = a == f || a || l);
                              m !== T && null != (p = _[m]);
                              m++
                            ) {
                              if (i && p) {
                                for (
                                  h = 0,
                                    a ||
                                      p.ownerDocument == f ||
                                      (d(p), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(p, a || f, s)) {
                                    c.push(p);
                                    break;
                                  }
                                l && (k = C);
                              }
                              n && ((p = !g && p) && y--, o && w.push(p));
                            }
                            if (((y += m), n && m !== y)) {
                              for (h = 0; (g = t[h++]); ) g(w, b, a, s);
                              if (o) {
                                if (y > 0)
                                  for (; m--; )
                                    w[m] || b[m] || (b[m] = N.call(c));
                                b = ke(b);
                              }
                              D.apply(c, b),
                                l &&
                                  !o &&
                                  b.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(c);
                            }
                            return l && ((k = C), (u = x)), w;
                          };
                        return n ? ue(o) : o;
                      })(o, i)
                    )).selector = e;
                  }
                  return s;
                }),
              (c = se.select =
                function (e, t, n, i) {
                  var o,
                    c,
                    u,
                    l,
                    p,
                    d = "function" == typeof e && e,
                    f = !i && a((e = d.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (c = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (u = c[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[c[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(u.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(c.shift().value.length));
                    }
                    for (
                      o = G.needsContext.test(e) ? 0 : c.length;
                      o-- && ((u = c[o]), !r.relative[(l = u.type)]);

                    )
                      if (
                        (p = r.find[l]) &&
                        (i = p(
                          u.matches[0].replace(te, ne),
                          (ee.test(c[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((c.splice(o, 1), !(e = i.length && we(c))))
                          return D.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || s(e, f))(
                      i,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(S).join("") === b),
              (n.detectDuplicates = !!p),
              d(),
              (n.sortDetached = le(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              le(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                pe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                le(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                pe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              le(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                pe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (C.find = A),
            (C.expr = A.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = A.uniqueSort),
            (C.text = A.getText),
            (C.isXMLDoc = A.isXML),
            (C.contains = A.contains),
            (C.escapeSelector = A.escape);
          var E = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && C(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            S = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            P = C.expr.match.needsContext;
          function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var N =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return y(t)
              ? C.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? C.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (C.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && P.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : q.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : w,
                      !0
                    )
                  ),
                  N.test(r[1]) && C.isPlainObject(t))
                )
                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = w.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (D = C(w));
          var j = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function I(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && C(e);
              if (!P.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(C(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return E(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return E(e, "parentNode", n);
                },
                next: function (e) {
                  return I(e, "nextSibling");
                },
                prev: function (e) {
                  return I(e, "previousSibling");
                },
                nextAll: function (e) {
                  return E(e, "nextSibling");
                },
                prevAll: function (e) {
                  return E(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return E(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return E(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return S((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return S(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (O(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, r) {
                  var i = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = C.filter(r, i)),
                    this.length > 1 &&
                      (R[e] || C.uniqueSort(i), j.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var M = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function U(e) {
            throw e;
          }
          function W(e, t, n, r) {
            var i;
            try {
              e && y((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && y((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(M) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              c = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, r) {
                          y(r)
                            ? (e.unique && u.has(r)) || o.push(r)
                            : r && r.length && "string" !== k(r) && t(r);
                        });
                      })(arguments),
                      n && !t && c()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || c()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return u;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, r) {
                          var i = y(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            c = arguments,
                            u = function () {
                              var r, u;
                              if (!(e < o)) {
                                if ((r = n.apply(s, c)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  y(u)
                                    ? i
                                      ? u.call(r, a(o, t, H, i), a(o, t, U, i))
                                      : (o++,
                                        u.call(
                                          r,
                                          a(o, t, H, i),
                                          a(o, t, U, i),
                                          a(o, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((s = void 0), (c = [r])),
                                      (i || t.resolveWith)(s, c));
                              }
                            },
                            l = i
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (r) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(r, l.stackTrace),
                                      e + 1 >= o &&
                                        (n !== U && ((s = void 0), (c = [r])),
                                        t.rejectWith(s, c));
                                  }
                                };
                          e
                            ? l()
                            : (C.Deferred.getStackHook &&
                                (l.stackTrace = C.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return C.Deferred(function (r) {
                        t[0][3].add(a(0, r, y(i) ? i : H, r.notifyWith)),
                          t[1][3].add(a(0, r, y(e) ? e : H)),
                          t[2][3].add(a(0, r, y(n) ? n : U));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = s.call(arguments),
                  o = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || y(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) W(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              B.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var F = C.Deferred();
          function $() {
            w.removeEventListener("DOMContentLoaded", $),
              r.removeEventListener("load", $),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              F.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || F.resolveWith(w, [C]));
              },
            }),
            (C.ready.then = F.then),
            "complete" === w.readyState ||
            ("loading" !== w.readyState && !w.documentElement.doScroll)
              ? r.setTimeout(C.ready)
              : (w.addEventListener("DOMContentLoaded", $),
                r.addEventListener("load", $));
          var z = function (e, t, n, r, i, o, a) {
              var s = 0,
                c = e.length,
                u = null == n;
              if ("object" === k(n))
                for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                y(r) || (a = !0),
                u &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(C(e), n);
                      }))),
                t)
              )
                for (; s < c; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : u ? t.call(e) : c ? t(e[0], n) : o;
            },
            Y = /^-ms-/,
            Q = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function V(e) {
            return e.replace(Y, "ms-").replace(Q, G);
          }
          var X = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = C.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    X(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[V(t)] = n;
                else for (r in t) i[V(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][V(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(V)
                      : (t = V(t)) in r
                      ? [t]
                      : t.match(M) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(o)),
                    1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = V(r.slice(5))), ne(o, r, i[r]));
                    K.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : z(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, C.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = C.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = w.documentElement,
            se = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ce = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ce) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function le(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              c = s(),
              u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              l =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== u && +c)) &&
                ie.exec(C.css(e, t));
            if (l && l[3] !== u) {
              for (c /= 2, u = u || l[3], l = +c || 1; a--; )
                C.style(e, t, l + u),
                  (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
                  (l /= o);
              (l *= 2), C.style(e, t, l + u), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +c || 0),
                (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = u), (r.start = l), (r.end = i))),
              i
            );
          }
          var pe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = pe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (pe[r] = i),
              i)
            );
          }
          function fe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = K.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ue(r) && (i[o] = de(r)))
                  : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ue(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = w.createDocumentFragment().appendChild(w.createElement("div"))),
            (ve = w.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var we = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && O(e, t)) ? C.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
            (we.th = we.td),
            g.option ||
              (we.optgroup = we.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var ke = /<|&#?\w+;/;
          function _e(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                c,
                u,
                l,
                p = t.createDocumentFragment(),
                d = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((o = e[f]) || 0 === o)
                if ("object" === k(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (ke.test(o)) {
                  for (
                    a = a || p.appendChild(t.createElement("div")),
                      s = (ye.exec(o) || ["", ""])[1].toLowerCase(),
                      c = we[s] || we._default,
                      a.innerHTML = c[1] + C.htmlPrefilter(o) + c[2],
                      l = c[0];
                    l--;

                  )
                    a = a.lastChild;
                  C.merge(d, a.childNodes),
                    ((a = p.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (p.textContent = "", f = 0; (o = d[f++]); )
              if (r && C.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((u = se(o)),
                (a = be(p.appendChild(o), "script")),
                u && xe(a),
                n)
              )
                for (l = 0; (o = a[l++]); ) me.test(o.type || "") && n.push(o);
            return p;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Te() {
            return !0;
          }
          function Ae() {
            return !1;
          }
          function Ee(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return w.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Se(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Se(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Ae;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, i, r, n);
              })
            );
          }
          function Pe(e, t, n) {
            n
              ? (K.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        K.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: C.event.trigger(
                            C.extend(o[0], C.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && C.event.add(e, t, Te);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                c,
                u,
                l,
                p,
                d,
                f,
                h,
                v,
                g = K.get(e);
              if (X(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && C.find.matchesSelector(ae, i),
                    n.guid || (n.guid = C.guid++),
                    (c = g.events) || (c = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(M) || [""]).length;
                  u--;

                )
                  (f = v = (s = Ce.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    f &&
                      ((p = C.event.special[f] || {}),
                      (f = (i ? p.delegateType : p.bindType) || f),
                      (p = C.event.special[f] || {}),
                      (l = C.extend(
                        {
                          type: f,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && C.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (d = c[f]) ||
                        (((d = c[f] = []).delegateCount = 0),
                        (p.setup && !1 !== p.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(f, a))),
                      p.add &&
                        (p.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                      (C.event.global[f] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                c,
                u,
                l,
                p,
                d,
                f,
                h,
                v,
                g = K.hasData(e) && K.get(e);
              if (g && (c = g.events)) {
                for (u = (t = (t || "").match(M) || [""]).length; u--; )
                  if (
                    ((f = v = (s = Ce.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      p = C.event.special[f] || {},
                        d =
                          c[(f = (r ? p.delegateType : p.bindType) || f)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = d.length;
                      o--;

                    )
                      (l = d[o]),
                        (!i && v !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (d.splice(o, 1),
                          l.selector && d.delegateCount--,
                          p.remove && p.remove.call(e, l));
                    a &&
                      !d.length &&
                      ((p.teardown && !1 !== p.teardown.call(e, h, g.handle)) ||
                        C.removeEvent(e, f, g.handle),
                      delete c[f]);
                  } else for (f in c) C.event.remove(e, f + t[u], n, r, !0);
                C.isEmptyObject(c) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                c = C.event.fix(e),
                u =
                  (K.get(this, "events") || Object.create(null))[c.type] || [],
                l = C.event.special[c.type] || {};
              for (s[0] = c, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((c.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, c))
              ) {
                for (
                  a = C.event.handlers.call(this, c, u), t = 0;
                  (i = a[t++]) && !c.isPropagationStopped();

                )
                  for (
                    c.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !c.isImmediatePropagationStopped();

                  )
                    (c.rnamespace &&
                      !1 !== o.namespace &&
                      !c.rnamespace.test(o.namespace)) ||
                      ((c.handleObj = o),
                      (c.data = o.data),
                      void 0 !==
                        (r = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (c.result = r) &&
                        (c.preventDefault(), c.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, c), c.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                c = t.delegateCount,
                u = e.target;
              if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < c; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? C(i, this).index(u) > -1
                          : C.find(i, this, null, [u]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                c < t.length && s.push({ elem: u, handlers: t.slice(c) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click", Te),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      K.get(t, "click")) ||
                    O(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Te
                      : Ae),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: Ae,
              isPropagationStopped: Ae,
              isImmediatePropagationStopped: Ae,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Te),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Te),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Te),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
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
                code: !0,
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
                which: !0,
              },
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return Pe(this, e, Ee), !1;
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (i && (i === r || C.contains(r, i))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, r) {
                return Se(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Se(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    C(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ae),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Oe = /<script|<style|<link/i,
            Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (O(e, "table") &&
                O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function qe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function je(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Re(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (i in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    C.event.add(t, i, s[i][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (a = C.extend({}, o)), Z.set(t, a));
            }
          }
          function Ie(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, r) {
            t = c(t);
            var i,
              o,
              a,
              s,
              u,
              l,
              p = 0,
              d = e.length,
              f = d - 1,
              h = t[0],
              v = y(h);
            if (
              v ||
              (d > 1 && "string" == typeof h && !g.checkClone && Ne.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r);
              });
            if (
              d &&
              ((o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = C.map(be(i, "script"), qe)).length; p < d; p++)
                (u = i),
                  p !== f &&
                    ((u = C.clone(u, !0, !0)),
                    s && C.merge(a, be(u, "script"))),
                  n.call(e[p], u, p);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, C.map(a, je), p = 0;
                  p < s;
                  p++
                )
                  (u = a[p]),
                    me.test(u.type || "") &&
                      !K.access(u, "globalEval") &&
                      C.contains(l, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !u.noModule &&
                          C._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            l
                          )
                        : x(u.textContent.replace(Le, ""), u, l));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var r, i = t ? C.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || C.cleanData(be(r)),
                r.parentNode &&
                  (n && se(r) && xe(be(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                c = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++)
                  Ie(o[r], a[r]);
              if (t)
                if (n)
                  for (
                    o = o || be(e), a = a || be(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Re(o[r], a[r]);
                else Re(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  xe(a, !c && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (X(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? C.event.remove(n, r)
                          : C.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Me(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Me(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !we[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Me(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, r = [], i = C(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      C(i[a])[t](n),
                      u.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Ue = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            Fe = new RegExp(oe.join("|"), "i");
          function $e(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || We(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = C.style(e, t)),
                !g.pixelBoxStyles() &&
                  Ue.test(a) &&
                  Fe.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(u).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (c = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (o = 12 === t(l.offsetWidth / 3)),
                  ae.removeChild(u),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              a,
              s,
              c,
              u = w.createElement("div"),
              l = w.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === l.style.backgroundClip),
              C.extend(g, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), c;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == s &&
                      ((e = w.createElement("table")),
                      (t = w.createElement("tr")),
                      (n = w.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ye = ["Webkit", "Moz", "ms"],
            Qe = w.createElement("div").style,
            Ge = {};
          function Ve(e) {
            return (
              C.cssProps[e] ||
              Ge[e] ||
              (e in Qe
                ? e
                : (Ge[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Qe) return e;
                    })(e) || e))
            );
          }
          var Xe = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (c += C.css(e, n + oe[a], !0, i)),
                r
                  ? ("content" === n &&
                      (c -= C.css(e, "padding" + oe[a], !0, i)),
                    "margin" !== n &&
                      (c -= C.css(e, "border" + oe[a] + "Width", !0, i)))
                  : ((c += C.css(e, "padding" + oe[a], !0, i)),
                    "padding" !== n
                      ? (c += C.css(e, "border" + oe[a] + "Width", !0, i))
                      : (s += C.css(e, "border" + oe[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (c +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        c -
                        s -
                        0.5
                    )
                  ) || 0),
              c
            );
          }
          function nt(e, t, n) {
            var r = We(e),
              i =
                (!g.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, r),
              o = i,
              a = $e(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && i) ||
                (!g.reliableTrDimensions() && O(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === C.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, i) {
            return new rt.prototype.init(e, t, n, r, i);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = $e(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = V(t),
                  c = Je.test(t),
                  u = e.style;
                if (
                  (c || (t = Ve(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : u[t];
                "string" == (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = le(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      c ||
                      (n += (i && i[3]) || (C.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (c ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = V(t);
              return (
                Je.test(t) || (t = Ve(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = $e(e, t, r)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Xe.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Be(e, Ke, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = We(e),
                    a = !g.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                    c = r ? tt(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (c -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    c &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    et(0, n, c)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = ze(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat($e(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = et);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return z(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; a < i; a++)
                        o[t[a]] = C.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = rt.prototype.init),
            (C.fx.step = {});
          var it,
            ot,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function ct() {
            ot &&
              (!1 === w.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ct)
                : r.setTimeout(ct, C.fx.interval),
              C.fx.tick());
          }
          function ut() {
            return (
              r.setTimeout(function () {
                it = void 0;
              }),
              (it = Date.now())
            );
          }
          function lt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function pt(e, t, n) {
            for (
              var r,
                i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function dt(e, t, n) {
            var r,
              i,
              o = 0,
              a = dt.prefilters.length,
              s = C.Deferred().always(function () {
                delete c.elem;
              }),
              c = function () {
                if (i) return !1;
                for (
                  var t = it || ut(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = 1 - (n / u.duration || 0),
                    o = 0,
                    a = u.tweens.length;
                  o < a;
                  o++
                )
                  u.tweens[o].run(r);
                return (
                  s.notifyWith(e, [u, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [u, 1, 0]),
                      s.resolveWith(e, [u]),
                      !1)
                );
              },
              u = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = C.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? u.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                      : s.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              l = u.props;
            for (
              (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = V(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = C.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(l, u.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = dt.prefilters[o].call(u, e, l, u.opts)))
                return (
                  y(r.stop) &&
                    (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              C.map(l, pt, u),
              y(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              C.fx.timer(
                C.extend(c, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (C.Animation = C.extend(dt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return le(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (dt.tweeners[n] = dt.tweeners[n] || []),
                  dt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l,
                  p = "width" in t || "height" in t,
                  d = this,
                  f = {},
                  h = e.style,
                  v = e.nodeType && ue(e),
                  g = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = C._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), at.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    f[r] = (g && g[r]) || C.style(e, r);
                  }
                if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                  for (r in (p &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = g && g.display) && (u = K.get(e, "display")),
                    "none" === (l = C.css(e, "display")) &&
                      (u
                        ? (l = u)
                        : (fe([e], !0),
                          (u = e.style.display || u),
                          (l = C.css(e, "display")),
                          fe([e]))),
                    ("inline" === l || ("inline-block" === l && null != u)) &&
                      "none" === C.css(e, "float") &&
                      (c ||
                        (d.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((l = h.display), (u = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (c = !1),
                  f))
                    c ||
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = K.access(e, "fxshow", { display: u })),
                      o && (g.hidden = !v),
                      v && fe([e], !0),
                      d.done(function () {
                        for (r in (v || fe([e]), K.remove(e, "fxshow"), f))
                          C.style(e, r, f[r]);
                      })),
                      (c = pt(v ? g[r] : 0, r, d)),
                      r in g ||
                        ((g[r] = c.start),
                        v && ((c.end = c.start), (c.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                C.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in C.fx.speeds
                      ? (r.duration = C.fx.speeds[r.duration])
                      : (r.duration = C.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && C.dequeue(this, r.queue);
                }),
                r
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = C.isEmptyObject(e),
                  o = C.speed(t, n, r),
                  a = function () {
                    var t = dt(this, C.extend({}, e), o);
                    (i || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = C.timers,
                      a = K.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = C.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(lt(t, !0), e, r, i);
              };
            }),
            C.each(
              {
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (it = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              ot || ((ot = !0), ct());
            }),
            (C.fx.stop = function () {
              ot = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = w.createElement("input"),
                t = w
                  .createElement("select")
                  .appendChild(w.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = w.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ft,
            ht = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return z(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (i =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = C.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && O(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(M);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || C.find.attr;
              ht[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ht[a]),
                    (ht[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ht[a] = o)),
                  i
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function yt(e) {
            return (e.match(M) || []).join(" ");
          }
          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(M)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return z(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c = 0;
                if (y(e))
                  return this.each(function (t) {
                    C(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = wt(e)).length)
                  for (; (n = this[c++]); )
                    if (
                      ((i = mt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c = 0;
                if (y(e))
                  return this.each(function (t) {
                    C(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                  for (; (n = this[c++]); )
                    if (
                      ((i = mt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : y(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, o, a;
                      if (r)
                        for (i = 0, o = C(this), a = wt(e); (t = a[i++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + yt(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = y(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, C(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = C.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    C.valHooks[i.type] ||
                    C.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : yt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      c = a ? o + 1 : i.length;
                    for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = C.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        C.inArray(C.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in r);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            kt = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                s,
                c,
                u,
                l,
                p,
                d,
                h = [n || w],
                v = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = d = s = n = n || w),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(v + C.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (u = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(v, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (p = C.event.special[v] || {}),
                  i || !p.trigger || !1 !== p.trigger.apply(n, t)))
              ) {
                if (!i && !p.noBubble && !m(n)) {
                  for (
                    c = p.delegateType || v,
                      xt.test(c + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || w) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = o > 1 ? c : p.bindType || v),
                    (l =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && l.apply(a, t),
                    (l = u && a[u]) &&
                      l.apply &&
                      X(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  i ||
                    e.isDefaultPrevented() ||
                    (p._default && !1 !== p._default.apply(h.pop(), t)) ||
                    !X(n) ||
                    (u &&
                      y(n[v]) &&
                      !m(n) &&
                      ((s = n[u]) && (n[u] = null),
                      (C.event.triggered = v),
                      e.isPropagationStopped() && d.addEventListener(v, kt),
                      n[v](),
                      e.isPropagationStopped() && d.removeEventListener(v, kt),
                      (C.event.triggered = void 0),
                      s && (n[u] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(r, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      K.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t) - 1;
                    i
                      ? K.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var _t = r.location,
            Ct = { guid: Date.now() },
            Tt = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var At = /\[\]$/,
            Et = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              C.each(t, function (t, i) {
                n || At.test(e)
                  ? r(e, i)
                  : Ot(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== k(t)) r(e, t);
            else for (i in t) Ot(e + "[" + i + "]", t[i], n, r);
          }
          (C.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Ot(n, e[n], t, i);
            return r.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Pt.test(this.nodeName) &&
                      !St.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(Et, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Et, "\r\n") };
                  })
                  .get();
              },
            });
          var Nt = /%20/g,
            Lt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            jt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            It = {},
            Mt = {},
            Ht = "*/".concat("*"),
            Ut = w.createElement("a");
          function Wt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
              if (y(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Bt(e, t, n, r) {
            var i = {},
              o = e === Mt;
            function a(s) {
              var c;
              return (
                (i[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var u = s(t, n, r);
                  return "string" != typeof u || o || i[u]
                    ? o
                      ? !(c = u)
                      : void 0
                    : (t.dataTypes.unshift(u), a(u), !1);
                }),
                c
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function Ft(e, t) {
            var n,
              r,
              i = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e;
          }
          (Ut.href = _t.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    _t.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e);
              },
              ajaxPrefilter: Wt(It),
              ajaxTransport: Wt(Mt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l,
                  p,
                  d,
                  f = C.ajaxSetup({}, t),
                  h = f.context || f,
                  v = f.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  g = C.Deferred(),
                  y = C.Callbacks("once memory"),
                  m = f.statusCode || {},
                  b = {},
                  x = {},
                  k = "canceled",
                  _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!a)
                          for (a = {}; (t = qt.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) _.always(e[_.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return n && n.abort(t), T(0, t), this;
                    },
                  };
                if (
                  (g.promise(_),
                  (f.url = ((e || f.url || _t.href) + "").replace(
                    Rt,
                    _t.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  c = w.createElement("a");
                  try {
                    (c.href = f.url),
                      (c.href = c.href),
                      (f.crossDomain =
                        Ut.protocol + "//" + Ut.host !=
                        c.protocol + "//" + c.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = C.param(f.data, f.traditional)),
                  Bt(It, f, t, _),
                  u)
                )
                  return _;
                for (p in ((l = C.event && f.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !jt.test(f.type)),
                (i = f.url.replace(Lt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Nt, "+"))
                  : ((d = f.url.slice(i.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((i += (Tt.test(i) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((i = i.replace(Dt, "$1")),
                      (d = (Tt.test(i) ? "&" : "?") + "_=" + Ct.guid++ + d)),
                    (f.url = i + d)),
                f.ifModified &&
                  (C.lastModified[i] &&
                    _.setRequestHeader("If-Modified-Since", C.lastModified[i]),
                  C.etag[i] && _.setRequestHeader("If-None-Match", C.etag[i])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  _.setRequestHeader("Content-Type", f.contentType),
                _.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  _.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, _, f) || u))
                  return _.abort();
                if (
                  ((k = "abort"),
                  y.add(f.complete),
                  _.done(f.success),
                  _.fail(f.error),
                  (n = Bt(Mt, f, t, _)))
                ) {
                  if (
                    ((_.readyState = 1), l && v.trigger("ajaxSend", [_, f]), u)
                  )
                    return _;
                  f.async &&
                    f.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      _.abort("timeout");
                    }, f.timeout));
                  try {
                    (u = !1), n.send(b, T);
                  } catch (e) {
                    if (u) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, a, c) {
                  var p,
                    d,
                    w,
                    b,
                    x,
                    k = t;
                  u ||
                    ((u = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = c || ""),
                    (_.readyState = e > 0 ? 4 : 0),
                    (p = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, c = e.dataTypes;
                          "*" === c[0];

                        )
                          c.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              c.unshift(i);
                              break;
                            }
                        if (c[0] in n) o = c[0];
                        else {
                          for (i in n) {
                            if (!c[0] || e.converters[i + " " + c[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== c[0] && c.unshift(o), n[o];
                      })(f, _, a)),
                    !p &&
                      C.inArray("script", f.dataTypes) > -1 &&
                      C.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        c,
                        u = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          u[a.toLowerCase()] = e.converters[a];
                      for (o = l.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !c &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (c = o),
                          (o = l.shift()))
                        )
                          if ("*" === o) o = c;
                          else if ("*" !== c && c !== o) {
                            if (!(a = u[c + " " + o] || u["* " + o]))
                              for (i in u)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = u[c + " " + s[0]] || u["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[i])
                                    : !0 !== u[i] &&
                                      ((o = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + c + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, b, _, p)),
                    p
                      ? (f.ifModified &&
                          ((x = _.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[i] = x),
                          (x = _.getResponseHeader("etag")) && (C.etag[i] = x)),
                        204 === e || "HEAD" === f.type
                          ? (k = "nocontent")
                          : 304 === e
                          ? (k = "notmodified")
                          : ((k = b.state), (d = b.data), (p = !(w = b.error))))
                      : ((w = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (_.status = e),
                    (_.statusText = (t || k) + ""),
                    p
                      ? g.resolveWith(h, [d, k, _])
                      : g.rejectWith(h, [_, k, w]),
                    _.statusCode(m),
                    (m = void 0),
                    l &&
                      v.trigger(p ? "ajaxSuccess" : "ajaxError", [
                        _,
                        f,
                        p ? d : w,
                      ]),
                    y.fireWith(h, [_, k]),
                    l &&
                      (v.trigger("ajaxComplete", [_, f]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return _;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, r, i) {
                return (
                  y(n) && ((i = i || r), (r = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var $t = { 0: 200, 1223: 204 },
            zt = C.ajaxSettings.xhr();
          (g.cors = !!zt && "withCredentials" in zt),
            (g.ajax = zt = !!zt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (zt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                $t[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      w.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Yt,
            Qt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Qt.pop() || C.expando + "_" + Ct.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Gt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Gt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Gt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || C.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(i)),
                      a && y(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Yt = w.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Yt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          w.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = w.location.href),
                        t.head.appendChild(r))
                      : (t = w)),
                  (o = !n && []),
                  (i = N.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = _e([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], i.childNodes)));
              var r, i, o;
            }),
            (C.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? C("<div>").append(C.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u = C.css(e, "position"),
                  l = C(e),
                  p = {};
                "static" === u && (e.style.position = "relative"),
                  (s = l.offset()),
                  (o = C.css(e, "top")),
                  (c = C.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + c).indexOf("auto") > -1
                    ? ((a = (r = l.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
                  y(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (p.top = t.top - s.top + a),
                  null != t.left && (p.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, p) : l.css(p);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === C.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - C.css(r, "marginTop", !0),
                    left: t.left - i.left - C.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (r) {
                  return z(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (m(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = ze(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = $e(e, t)), Ue.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  C.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                      this,
                      function (t, n, i) {
                        var o;
                        return m(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? C.css(t, n, s)
                          : C.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || C.guid++),
                i
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = O),
            (C.isFunction = y),
            (C.isWindow = m),
            (C.camelCase = V),
            (C.type = k),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Vt, "");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Xt = r.jQuery,
            Jt = r.$;
          return (
            (C.noConflict = function (e) {
              return (
                r.$ === C && (r.$ = Jt),
                e && r.jQuery === C && (r.jQuery = Xt),
                C
              );
            }),
            void 0 === i && (r.jQuery = r.$ = C),
            C
          );
        });
      },
    },
    t = {};
  !(function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  })(450);
})();
