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
export const displayAppliedCouponDiv = (coupon = "", requestSuccess = false, empty = false) => {
  const message = qSel(sel.APPLIED_MESSAGE_COUPON);
  if (empty) {
    message.innerHTML = "Please enter the coupon code.";
    message.style.color = "red";
    qSel(sel.APPLIED_COUPON).style.display = "none";
  } else if (!requestSuccess) {
    message.innerHTML = "Failed to apply coupon.";
    message.style.color = "red";
    qSel(sel.APPLIED_COUPON).style.display = "none";
  } else {
    message.innerHTML = "Coupon applied successfully.";
    message.style.color = "green";
    qSel(sel.APPLIED_COUPON).style.display = "flex";
    qSel(sel.COUPON_NAME).innerHTML = coupon;
  }
  qSel(sel.APPLIED_COUPON_WRAPPER).style.display = "flex";
};

// ---------------------------------------------------------------
export const hideAppliedCouponDiv = () => {
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
  ((target as HTMLElement).parentElement!.parentElement!.querySelector(".product-loading")! as HTMLElement).style.display = "flex"
}

// ---------------------------------------------------------------
export const hideProductLoading = (target: EventTarget) => {
  ((target as HTMLElement).parentElement!.parentElement!.querySelector(".product-loading")! as HTMLElement).style.display = "none"
}