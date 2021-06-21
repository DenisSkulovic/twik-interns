// tools
import { qSel, qSelAll, addE, insAdjEl, insAdjHTML } from "../utils/shortcuts";

// functions
const all = require("./js/all");
const oc = require("./js/openClose");

// css & html
import css from "./.temp/css";
import cartHTML from "./.temp/cart.html";
import overlayHTML from "./.temp/overlay.html";

// libraries
import { addFontAwesome } from "../utils/useful_functions";
window.$tw = require("jquery");

// ########################################################################
/**
 * injecting HTML and CSS
 */

// injecting CSS
insAdjHTML(
  document.head,
  "beforeend",
  `<style class="twik-style">${css}</style>`
);

addFontAwesome();

// injecting HTML
insAdjHTML(document.body, "beforeend", cartHTML);
insAdjHTML(document.body, "beforeend", overlayHTML);

// ########################################################################
/**
 * adding event listeners
 */

addE(window, "click", () => {
  oc.closeCart();
  oc.closeOverlay();
});

addE(qSel("#twik-sidebar-cart-wrapper"), "click", (e) => {
  e.stopPropagation();
});

addE(qSel("#twik-overlay"), "click", () => {
  oc.closeCart();
  oc.closeOverlay();
});

addE(qSel(".twik-cart-close-wrapper"), "click", () => {
  oc.closeCart();
  oc.closeOverlay();
});

// ########################################################################
/**
 * activating functionality
 */
all.replaceCartButton();
