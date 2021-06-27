import sel from "../constants/selectors";
import { qSel } from "../utils/shortcuts";
const $tw = window.$tw;

// ---------------------------------------------------------------
export const openCart = () => {
  $tw(sel.SIDEBAR_CART).animate({
    right: "0px",
  });
};

// ---------------------------------------------------------------
export const closeCart = () => {
  $tw(sel.SIDEBAR_CART).animate({
    right: "-1000px",
  });
};

// ---------------------------------------------------------------
export const openOverlay = () => {
  $tw(sel.OVERLAY).fadeIn();
};

// ---------------------------------------------------------------
export const closeOverlay = () => {
  $tw(sel.OVERLAY).fadeOut();
};

// ---------------------------------------------------------------
export const displayAppliedCouponDiv = (
  coupon = "",
  requestSuccess = false,
  empty = false
) => {
  if (empty) {
    $tw(sel.APPLIED_MESSAGE_COUPON_NOCOUPON).show();
    qSel(sel.APPLIED_COUPON).style.display = "none";
  } else if (!requestSuccess) {
    $tw(sel.APPLIED_MESSAGE_COUPON_ERROR).show();
    qSel(sel.APPLIED_COUPON).style.display = "none";
  } else {
    $tw(sel.APPLIED_MESSAGE_COUPON_SUCCESS).show();
    qSel(sel.APPLIED_COUPON).style.display = "flex";
    qSel(sel.COUPON_NAME).innerText = coupon;
  }
  qSel(sel.APPLIED_COUPON_WRAPPER).style.display = "flex";
};

// ---------------------------------------------------------------
export const hideAppliedCouponDiv = () => {
  $tw(sel.APPLIED_MESSAGE_COUPON_NOCOUPON).hide();
  $tw(sel.APPLIED_MESSAGE_COUPON_SUCCESS).hide();
  $tw(sel.APPLIED_MESSAGE_COUPON_ERROR).hide();

  qSel(sel.APPLIED_COUPON_WRAPPER).style.display = "none";
  qSel(sel.COUPON_NAME).innerHTML = "";
};

// ---------------------------------------------------------------
export const displayLoadingIcon = () => {
  qSel(sel.COUPON_LOADING).style.display = "block";
};

// ---------------------------------------------------------------
export const hideLoadingIcon = () => {
  qSel(sel.COUPON_LOADING).style.display = "none";
};

// ---------------------------------------------------------------
export const displayEmptyCartDiv = () => {
  $tw(sel.CART_EMPTY).show();
};

// ---------------------------------------------------------------
export const hideProductsList = () => {
  $tw(sel.CART_PRODUCT_LIST).hide();
  $tw(".twik-cart-footer").css({ visibility: "hidden" });
};

// ---------------------------------------------------------------
export const displayProductLoading = (target: EventTarget) => {
  (
    (target as HTMLElement).parentElement!.parentElement!.querySelector(
      ".product-loading"
    )! as HTMLElement
  ).style.display = "flex";
};

// ---------------------------------------------------------------
export const hideProductLoading = (target: EventTarget) => {
  (
    (target as HTMLElement).parentElement!.parentElement!.querySelector(
      ".product-loading"
    )! as HTMLElement
  ).style.display = "none";
};
