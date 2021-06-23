// cut this part and move it manually to the future generic script; put it at the top
window.twik_generic_cart_customization = {
  cart_checkout_btn_background_color: "grey"
}

// IN CASE THE VARIANT NEEDS TO BE TWEAKABLE:
// replace "window.$tw = require("jquery");" with a manual addition of minified jquery into readable final
// and inside of the variant get tweaked values from object attached to window
// Add manually a section to a minified script that attaches the variables object to the window

// add jquery
window.$tw = require("jquery");
// const $tw = window.$tw;
// import functions
import { qSel, insAdjHTML, addE } from "./utils/shortcuts";
import {
  addFontAwesome,
  interp,
} from "./utils/useful_functions";
// import constants
import sel from "./constants/selectors";
//import CSS and HTML as long strings
import css from "./temp/css";
import overlayHTML from "./temp/overlay.html";
import cartHTML from "./temp/cart.html";
import { replaceCartButton } from "./js/functions";
import { applyCouponForm_submit_listener, closeCartOverlay_listener, removeCoupon_listener, stopProp_listener } from "./js/eventListeners";





const tw_gen = window.twik_generic_cart_customization

// -----------------------------------------------------------------------------
/**
 * injecting HTML and CSS
 */
// ---------------------------------------------------------------
// injecting CSS
insAdjHTML(
  document.head,
  "beforeend",
  `<style class="twik-style">${css}</style>`
);
insAdjHTML(document.head, "beforeend", `
  <style>
    .twik-cart-checkout-btn {
      background-color: ${tw_gen["cart_checkout_btn_background_color"]};
    }
  </style>
  `)
addFontAwesome()

// injecting HTML
insAdjHTML(document.body, "beforeend", interp(cartHTML, {}));
insAdjHTML(qSel(sel.SIDEBAR_CART_WRAPPER), "afterbegin", interp(overlayHTML, {}));

// ---------------------------------------------------------------
/**
 * add event listeners
 */
// ---------------------------------------------------------------
addE(window, "click", closeCartOverlay_listener);
addE(qSel(sel.SIDEBAR_CART_WRAPPER), "click", stopProp_listener);
addE(qSel(sel.OVERLAY), "click", closeCartOverlay_listener);
addE(qSel(sel.CART_CLOSE_WRAPPER), "click", closeCartOverlay_listener);
addE(qSel(sel.APPLY_COUPON_FORM), "submit", applyCouponForm_submit_listener);
addE(qSel(sel.REMOVE_COUPON), "click", removeCoupon_listener)

// ---------------------------------------------------------------
/**
 * activate main functionality
 */
// ---------------------------------------------------------------
replaceCartButton();
