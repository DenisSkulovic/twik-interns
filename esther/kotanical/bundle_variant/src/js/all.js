const env = require("../../env");
const sel = require("../../selectors");
const coup = require("./coupons");
import { qSel, qSelAll, addE, insAdjHTML } from "../../utils/shortcuts";
import {
  getTwikJson_fetch,
  getShopifyCart_fetch,
} from "../../utils/useful_fetches";
import { numberWithCommas } from "../../utils/useful_functions";
const oc = require("./openClose");

//
//
//
// ------------------------------------------------------------------------------
const clearProductsList = () => {
  qSel(sel.CART_PRODUCT_LIST).innerHTML = "";
};

//
//
//
// ------------------------------------------------------------------------------
const clearAndHideProductList = () => {
  clearProductsList();
  oc.hideProductsList();
  oc.hideCartFooter();
  oc.displayCartEmpty();
  updateShippingText(0);
};

//
//
//
// ------------------------------------------------------------------------------
const setQuantity = async (key, newQuantity) => {
  let json = await getShopifyCart_fetch();
  for (let item of json["items"]) {
    if (item["key"] === key) {
      fetch("/cart/change.js", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: key, quantity: newQuantity }),
        method: "POST",
      })
        .then(() => {
          refreshCart();
        })
        .catch((error) => {
          console.log(`Twik post error: ${error}`);
        });
    }
  }
};

//
//
//
// ------------------------------------------------------------------------------
const setAppliedCouponAmount = (json) => {
  let currency = json["currency"];
  let symbol = twik_user_data["location"]["currencies"][currency]["symbol"];
  if (json["total_discount"] == 0) {
    qSel(sel.APPLIED_COUPON_AMOUNT).innerHTML = "";
    return;
  }
  qSel(sel.APPLIED_COUPON_AMOUNT).innerHTML = `-${symbol}${numberWithCommas(
    parseInt(json["total_discount"]) / 100
  )}`;
};

//
//
//
// ------------------------------------------------------------------------------
const changeQuantity = async (key, change) => {
  let json = await getShopifyCart_fetch();
  for (let item of json["items"]) {
    if (item["key"] === key) {
      let newQuantity = parseInt(item["quantity"]) + change;
      fetch("/cart/change.js", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: key, quantity: newQuantity }),
        method: "POST",
      })
        .then(async () => {
          await refreshCart();
        })
        .catch((error) => {
          console.log(`Twik post error: ${error}`);
        });
    }
  }
};

//
//
//
// ------------------------------------------------------------------------------
const populateProductList = async (cartJSON) => {
  let currency = cartJSON["currency"];
  let symbol = twik_user_data["location"]["currencies"][currency]["symbol"];
  let total_price_CENTS = cartJSON["total_price"];
  let items = cartJSON["items"];
  // let requiresShipping = cartJSON["requires_shipping"];
  // let subtotal_price_CENTS = cartJSON["items_subtotal_price"];
  // let total_discount_CENTS = cartJSON["total_discount"];
  // let total_weight = cartJSON["total_weight"];
  // let item_count = cartJSON["item_count"];

  // for some reason sometimes a second button gets added, probably it's kotanical's artifacts
  while (qSelAll(sel.CART_SUBTOTAL).length > 1) {
    qSel(sel.CART_SUBTOTAL).remove();
  }

  qSel(sel.CART_SUBTOTAL).innerHTML = `${symbol}${numberWithCommas(
    total_price_CENTS / 100
  )}`;

  for (let item of items) {
    oc.hideCartEmpty();
    oc.displayCartFooter();
    oc.displayProductsList();

    insAdjHTML(
      qSel(sel.CART_PRODUCT_LIST),
      "beforeend",
      `
          <div class="twik-cart-product">
              <div class="twik-cart-image-wrapper">
                  <a href="${item["url"]}">
                  <img src="${
                    item["image"]
                  }" alt="product-image" class="twik-cart-image">
                  </a>
              </div>
              <div class="twik-cart-product-details">
                  <a href="${item["url"]}">
                      <div class="twik-cart-details-header">
                          ${item["product_title"]}
                          </div>
                      </a>
                  <div class="twik-cart-details-subheader">${
                    item["variant_title"] ? item["variant_title"] : ""
                  }</div>
                  <div class="twik-cart-price">${symbol}${numberWithCommas(
        item["final_price"] / 100
      )}</div>
                  <div class="twik-cart-product-quantity-container">
                      <div class="twik-cart-product-quantity-wrapper">
                          <div class="twik-quantity-border-div">
                              <div class="twik-minus-one" data-key="${
                                item["key"]
                              }">-</div>
                              <input class="twik-cart-product-quantity-input" type="number" data-key="${
                                item["key"]
                              }" value=${item["quantity"]}>
                              <span class="twik-cart-product-quantity-span"></span>
                              <div class="twik-plus-one" data-key="${
                                item["key"]
                              }">+</div>
                          </div>
                          <div class="twik-remove-item" data-key="${
                            item["key"]
                          }"><div>Remove</div></div>
                      </div>
                  </div>
              </div>
          </div>
          `
    );

    let input = qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT)[
      qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT).length - 1
    ];
    let span = qSelAll(sel.CART_PRODUCT_QUANTITY_SPAN)[
      qSelAll(sel.CART_PRODUCT_QUANTITY_SPAN).length - 1
    ];

    span.innerHTML = input.value.replace(/\s/g, "&nbsp;");
    adjustSpanAndInput(span, input);
    let newShipping = total_price_CENTS / 100;
    updateShippingText(newShipping.toFixed(2));
  }
  if (items.length > 0) {
    coup.removeCouponSectionHTML_and_functionality();
    coup.addCouponSectionHTML_and_functionality();
  } else {
    coup.removeCouponSectionHTML_and_functionality();
  }
};

//
//
//
// ------------------------------------------------------------------------------
const adjustSpanAndInput = (span, input) => {
  if (span.offsetWidth <= 60 && span.offsetWidth >= 25) {
    input.style.width = span.offsetWidth + 5 + "px";
  } else if (span.offsetWidth > 60) {
    input.style.width = 65 + "px";
  }
};

//
//
//
// ------------------------------------------------------------------------------
const refreshCart = async () => {
  let cartJSON = await getShopifyCart_fetch();
  clearAndHideProductList();
  populateProductList(cartJSON);
  if (qSelAll(".twik-cart-product").length === 0) {
    clearAndHideProductList();
    return;
  }
  setAppliedCouponAmount(cartJSON);
  setProductListeners();
};

//
//
//
// ------------------------------------------------------------------------------
const replaceCartButton = () => {
  let cloneCartButton = qSel(sel.ORIGINAL_CART).cloneNode(true);
  cloneCartButton.setAttribute("data-action", "");
  cloneCartButton.setAttribute("onclick", "");
  addE(cloneCartButton, "click", async (e) => {
    e.preventDefault();
    refreshCart();
    oc.openOverlay();
    oc.openCart();
  });
  qSel(sel.ORIGINAL_CART).replaceWith(cloneCartButton);
  addE(cloneCartButton.parentElement, "click", (e) => {
    e.stopPropagation();
  });
};

//
//
//
// ------------------------------------------------------------------------------
const updateShippingText = (currentTotal) => {
  let num = env.FREE_SHIPPING_AMOUNT - currentTotal;
  qSel(".twik-cart-shipping").innerText =
    currentTotal < env.FREE_SHIPPING_AMOUNT
      ? `Spend €${num.toFixed(2)} more and get free shipping!`
      : `You are eligible for free shipping!`;
};

//
//
//
// ------------------------------------------------------------------------------
const setProductListeners = () => {
  qSelAll(".twik-plus-one").forEach((btn) => {
    addE(btn, "click", async (e) => {
      e.preventDefault();
      await changeQuantity(btn.getAttribute("data-key"), 1);
    });
  });

  qSelAll(".twik-minus-one").forEach((btn) => {
    addE(btn, "click", async (e) => {
      e.preventDefault();
      await changeQuantity(btn.getAttribute("data-key"), -1);
    });
  });

  qSelAll(".twik-remove-item").forEach((btn) => {
    addE(btn, "click", async (e) => {
      e.preventDefault();
      await setQuantity(btn.getAttribute("data-key"), 0);
    });
  });

  qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT).forEach((input) => {
    addE(input, "keydown", () => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(async () => {
        await setQuantity(
          input.getAttribute("data-key"),
          parseInt(input.value)
        );
      }, 1000);
    });

    let span = input.parentElement.querySelector(
      sel.CART_PRODUCT_QUANTITY_SPAN
    );
    addE(input, "input", () => {
      span.innerHTML = input.value.replace(/\s/g, "&nbsp;");
      adjustSpanAndInput(span, input);
    });
  });
};

//
//
//
// ------------------------------------------------------------------------------
export {
  numberWithCommas,
  clearAndHideProductList,
  setQuantity,
  setAppliedCouponAmount,
  changeQuantity,
  populateProductList,
  adjustSpanAndInput,
  refreshCart,
  replaceCartButton,
  updateShippingText,
  setProductListeners,
};
