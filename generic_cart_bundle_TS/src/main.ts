// cut this part and move it manually to the future generic script; put it at the top
window.twik_generic_cart_customization = {
  //text:
  cart_text: "Cart",
  cart_empty_text: "Your cart is empty.",
  checkout_text: "CHECKOUT",
  apply_btn_text: "Apply",
  apply_coupon_placeholder_text: "Enter coupon code.",
  //coupon text:
  coupon_code_text_nocoupon: "Please enter the coupon code.",
  coupon_code_text_failed: "Failed to apply coupon.",
  coupon_code_text_success: "Coupon applied successfully.",

  //sidebar cart:
  //background color
  twik_sidebar_cart_background_color: "white",
  //shadow color
  twik_sidebar_cart_box_shadow_color: "grey",
  // line
  twik_cart_row_color: "lightgrey",

  //////////////////////////////////////////////////////////////////////

  //top header
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
  //////////////////////////////////////////////////////////////////////

  //footer
  //checkout button:
  //button background
  twik_cart_checkout_btn_background_color: "grey",
  //button text font color
  twik_cart_checkout_btn_text_color: "white",
  //////////////////////////////////////////////////////////////////////

  //coupon input:
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

// IN CASE THE VARIANT NEEDS TO BE TWEAKABLE:
// replace "window.$tw = require("jquery");" with a manual addition of minified jquery into readable final
// and inside of the variant get tweaked values from object attached to window
// Add manually a section to a minified script that attaches the variables object to the window

// add jquery
window.$tw = require("jquery");
// const $tw = window.$tw;
// import functions
import { qSel, insAdjHTML, addE } from "./utils/shortcuts";
import { addFontAwesome, interp } from "./utils/useful_functions";
// import constants
import sel from "./constants/selectors";
//import CSS and HTML as long strings
import css from "./temp/css";
import overlayHTML from "./temp/overlay.html";
import cartHTML from "./temp/cart.html";
import { replaceCartButton } from "./js/functions";
import {
  applyCouponForm_submit_listener,
  closeCartOverlay_listener,
  removeCoupon_listener,
  stopProp_listener,
} from "./js/eventListeners";

const tw_gen = window.twik_generic_cart_customization;

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
insAdjHTML(
  document.head,
  "beforeend",
  `
  <style>
    .twik-cart-checkout-btn {
      background-color: ${tw_gen["twik_cart_checkout_btn_background_color"]};
      color: ${tw_gen["twik_cart_checkout_btn_text_color"]};
    }

    .twik-apply-coupon-button {
      background: ${tw_gen["twik_apply_coupon_button_background_color"]};
      color: ${tw_gen["twik_apply_coupon_button_text_color"]};
      border-color: ${tw_gen["twik_apply_coupon_button_border_color"]}
    }

  
    input[type=text] {
      border-color: ${tw_gen["twik_apply_coupon_input_border_color"]}!important;
      background-color: ${tw_gen["twik_apply_coupon_input_background_color"]};
    }
  
    ::placeholder {
      color: ${tw_gen["twik_apply_coupon_placeholder_color"]}!important; 
    }
    
    .twik-remove-item {
      color: ${tw_gen["twik_remove_item_text_color"]};
    }

    .twik-quantity-border-div {
      border-color: ${tw_gen["twik_quantity_border_div_color"]};
      color: ${tw_gen["twik_quantity_inside_div_color"]};
      background-color: ${tw_gen["twik_cart_product_background_input_color"]};

    }

    .twik-cart-product-quantity-input {
      background-color: ${tw_gen["twik_cart_product_background_input_color"]}!important;
      color: ${tw_gen["twik_cart_product_quantity_input_color"]} ;
    }

    .twik-cart-details-header {
      color: ${tw_gen["twik_cart_details_header_text_color"]};
    }

    .twik-cart-price {
      color: ${tw_gen["twik_cart_price_color"]}
    }
    .twik-cart-header-wrapper {
      color: ${tw_gen["twik_cart_header_wrapper_text_color"]}

    }

    
      #twik-sidebar-cart {
        box-shadow: ${tw_gen["twik_sidebar_cart_box_shadow_color"]} 0px 0px 20px;
        background-color: ${tw_gen["twik_sidebar_cart_background_color"]};
      }

      .twik-cart-row:not(:first-child) {
        border-top: 1px solid ${tw_gen["twik_cart_row_color"]};
      }



  </style>
  `
);

addFontAwesome();

// injecting HTML
insAdjHTML(
  document.body,
  "beforeend",
  interp(cartHTML, {
    cart: tw_gen["cart_text"],
    cart_empty_text: tw_gen["cart_empty_text"],
    checkout_text: tw_gen["checkout_text"],
    apply_btn_text: tw_gen["apply_btn_text"],
    apply_coupon_placeholder_text: tw_gen["apply_coupon_placeholder_text"],
    coupon_code_text_nocoupon: tw_gen["coupon_code_text_nocoupon"],
    coupon_code_text_failed: tw_gen["coupon_code_text_failed"],
    coupon_code_text_success: tw_gen["coupon_code_text_success"],
  })
);
insAdjHTML(
  qSel(sel.SIDEBAR_CART_WRAPPER),
  "afterbegin",
  interp(overlayHTML, {})
);

// ---------------------------------------------------------------
/**
 * add event listeners
 */
// ---------------------------------------------------------------
console.log("qSel(sel.SIDEBAR_CART_WRAPPER)", qSel(sel.SIDEBAR_CART_WRAPPER));
console.log("qSel(sel.OVERLAY)", qSel(sel.OVERLAY));
console.log("qSel(sel.CART_CLOSE_WRAPPER)", qSel(sel.CART_CLOSE_WRAPPER));
console.log("qSel(sel.APPLY_COUPON_FORM)", qSel(sel.APPLY_COUPON_FORM));
console.log("qSel(sel.REMOVE_COUPON)", qSel(sel.REMOVE_COUPON));

addE(window, "click", closeCartOverlay_listener);
addE(qSel(sel.SIDEBAR_CART_WRAPPER), "click", stopProp_listener);
addE(qSel(sel.OVERLAY), "click", closeCartOverlay_listener);
addE(qSel(sel.CART_CLOSE_WRAPPER), "click", closeCartOverlay_listener);
addE(qSel(sel.APPLY_COUPON_FORM), "submit", applyCouponForm_submit_listener);
addE(qSel(sel.REMOVE_COUPON), "click", removeCoupon_listener);

// ---------------------------------------------------------------
/**
 * activate main functionality
 */
// ---------------------------------------------------------------
replaceCartButton();
