const env = require("../../env");
const sel = require("../../selectors");
import { qSel } from "../../utils/shortcuts";

// -----------------------------------------------------------
// cart
const openCart = () => {
  $tw(sel.SIDEBAR_CART).animate({
    right: "0px",
  });
};
const closeCart = () => {
  $tw(sel.SIDEBAR_CART).animate({
    right: "-1000px",
  });
};

// -----------------------------------------------------------
//overlay
const openOverlay = () => {
  $tw(sel.OVERLAY).fadeIn();
};
const closeOverlay = () => {
  $tw(sel.OVERLAY).fadeOut();
};

// -----------------------------------------------------------
// products list
const displayProductsList = () => {
  $tw(sel.CART_PRODUCT_LIST).show();
};
const hideProductsList = () => {
  $tw(sel.CART_PRODUCT_LIST).hide();
};

// -----------------------------------------------------------
// cart footer
const displayCartFooter = () => {
  $tw(sel.CART_FOOTER).css({ visibility: "visible" });
};
const hideCartFooter = () => {
  $tw(sel.CART_FOOTER).css({ visibility: "hidden" });
};

// -----------------------------------------------------------
// cart empty
const displayCartEmpty = () => {
  $tw(sel.CART_EMPTY).show();
};
const hideCartEmpty = () => {
  $tw(sel.CART_EMPTY).hide();
};

// -----------------------------------------------------------
// applied coupon section
const displayAppliedCouponSection = () => {
  $tw(sel.RESPONSE_MESSAGE).hide();
  $tw(sel.APPLIED_COUPON_DIV_WRAPPER).css({ display: "flex" });
};
const hideAppliedCouponSection = () => {
  $tw(sel.RESPONSE_MESSAGE).hide();
  $tw(sel.APPLIED_COUPON_DIV_WRAPPER).css({ display: "none" });
};

// -----------------------------------------------------------
// loading icon
const displayLoadingIcon = () => {
  $tw(sel.LOADING).show();
};
const hideLoadingIcon = () => {
  $tw(sel.LOADING).hide();
};

const displayNoCouponSelectedMessage = () => {
  $tw(sel.FIXED_BOX_ERROR).show();
};

const hideNoCouponSelectedMessage = () => {
  $tw(sel.FIXED_BOX_ERROR).hide();
};

// -----------------------------------------------------------
export {
  openCart,
  closeCart,
  openOverlay,
  closeOverlay,
  displayProductsList,
  hideProductsList,
  displayCartFooter,
  hideCartFooter,
  displayCartEmpty,
  hideCartEmpty,
  displayAppliedCouponSection,
  hideAppliedCouponSection,
  displayLoadingIcon,
  hideLoadingIcon,
  displayNoCouponSelectedMessage,
  hideNoCouponSelectedMessage,
};
