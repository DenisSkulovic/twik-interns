const env = require("../../env");
const sel = require("../../selectors");
const oc = require("../../src/js/openClose");
const all = require("../js/all");
import { addE, insAdjHTML, qSel, qSelAll } from "../../utils/shortcuts";
import couponHTML from "../.temp/coupon.html";
import couponStyleHTML from "../.temp/couponStyle.html";
import couponRowHTML from "../.temp/couponRow.html";
import fixedBoxHTML from "../.temp/fixedBox.html";
import overlayCouponsHTML from "../.temp/overlay_coupons.html";

//
//
//
// ------------------------------------------------------------------------------
const applyCouponButton_cart_listener = async () => {
  qSel(sel.APPLY_COUPON_INPUT).value = qSel(
    sel.APPLY_COUPON_INPUT
  ).value.toUpperCase();
  let input_value = qSel(sel.APPLY_COUPON_INPUT).value;
  if (!input_value) {
    $tw(sel.RESPONSE_MESSAGE).show();
    qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_NO_INPUT;
    return;
  }

  oc.hideAppliedCouponSection();
  oc.displayLoadingIcon();

  let res = await fetch(
    `https://voilaapps.co/ajax/get_discount_coupon.php?code=${input_value}&shop_domain=kotanical.myshopify.com`
  );
  let json = await res.json();

  oc.displayAppliedCouponSection();
  oc.hideLoadingIcon();

  $tw(sel.RESPONSE_MESSAGE).show();
  if (json.length === 0) {
    window.sessionStorage.removeItem("applied_coupon");
    qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_ERROR_MESSAGE;
    $tw(sel.APPLIED_COUPON_DIV_WRAPPER).hide();
    return;
  }
  qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_SUCCESS_MESSAGE;
};

//
//
//
// ------------------------------------------------------------------------------
const applyCoupon_fetch = async (coupon) => {
  return await fetch(`https://kotanical.ie/checkout/?discount=${coupon}`);
};

//
//
//
// ------------------------------------------------------------------------------
const unapplyDiscount = () => {
  fetch(
    "https://kotanical.ie/checkout/?discount=dummytexttodisablealldiscounts"
  );
  window.sessionStorage.removeItem("applied_coupon");
  qSel(sel.APPLIED_COUPON_DIV_WRAPPER).style.display = "none";
  qSel(sel.RESPONSE_MESSAGE).innerHTML = "";
};

//
//
//
// ------------------------------------------------------------------------------
const addCouponSectionHTML_and_functionality = async () => {
  if (!qSel("#twik-sidebar-cart .coupon-section")) {
    // inject coupon html
    insAdjHTML(qSel(sel.CART_FOOTER), "afterbegin", couponHTML);
    qSel(".coupons-num").innerHTML = window.sessionStorage.getItem(
      "coupons_num"
    )
      ? window.sessionStorage.getItem("coupons_num")
      : "";

    // inject coupon style
    insAdjHTML(document.head, "beforeend", couponStyleHTML);

    // fetch coupon json
    let res = await fetch(
      "https://voilaapps.co/ajax/get_discount_code.php?shop_domain=kotanical.myshopify.com"
    );
    let json = await res.json();
    qSel(".coupons-num").innerHTML = `${json.length}`;
    window.sessionStorage.setItem("coupons_num", `${json.length}`);

    if (window.sessionStorage.getItem("applied_coupon")) {
      qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_SUCCESS_MESSAGE;
      qSel(sel.APPLIED_COUPON_NAME).innerHTML =
        window.sessionStorage.getItem("applied_coupon");
      $tw(sel.APPLIED_COUPON_DIV_WRAPPER).css({ display: "flex" });
      $tw(sel.RESPONSE_MESSAGE).show();
    } else {
      qSel(sel.APPLIED_COUPON_NAME).innerHTML = "";
      $tw(sel.RESPONSE_MESSAGE).hide();
      $tw(sel.APPLIED_COUPON_DIV_WRAPPER).hide();
    }

    // set listeners
    addE(qSel(".coupon-wrapper"), "click", () => {
      displayCouponsFixedBox();
    });
    addE(
      qSel(sel.APPLY_COUPON_BUTTON_CART),
      "click",
      applyCouponButton_cart_listener
    );
  }
  addE(qSel(".remove-applied-coupon"), "click", unapplyDiscount);
};

//
//
//
// ------------------------------------------------------------------------------
const removeCouponSectionHTML_and_functionality = () => {
  try {
    qSel(".twik-coupon-container").remove();
  } catch {}
  try {
    qSel("#twik-coupon-container-style").remove();
  } catch {}
};

//
//
//
// ------------------------------------------------------------------------------
const populateCouponsFixedBox = (json) => {
  if (qSel(sel.COUPONS_MID_SECTION)) {
    clearCouponsFixedBox();
    json.map((coupon, i) => {
      insAdjHTML(qSel(sel.COUPONS_MID_SECTION), "beforeend", couponRowHTML);
      qSelAll(sel.COUPON_ROW)[i].querySelector(".twik-coupon-code").innerHTML =
        coupon.title;
      qSelAll(sel.COUPON_ROW)[i].querySelector(
        ".twik-coupon-message"
      ).innerHTML = coupon.meta;
      qSelAll(sel.COUPON_ROW)[i].querySelector(
        ".twik-coupon-radio-input"
      ).value = coupon.id;
    });
  }
};

//
//
//
// ------------------------------------------------------------------------------
const clearCouponsFixedBox = () => {
  if (qSel(sel.COUPONS_MID_SECTION)) {
    qSel(sel.COUPONS_MID_SECTION).innerHTML = "";
  }
};

//
//
//
// ------------------------------------------------------------------------------
const hideCouponsFixedBox = () => {
  $tw(sel.COUPONS_FIXED_BOX_WRAPPER).fadeOut("fast");
  $tw(sel.COUPONS_OVERLAY).fadeOut("fast");
};

//
//
//
// ------------------------------------------------------------------------------
const couponRadioInvisibleDiv_listener = (e) => {
  e.stopPropagation();
  qSelAll(sel.COUPON_ROW).forEach((row) => {
    row.querySelector(sel.COUPON_RADIO_INPUT).setAttribute("checked", false);
    row.classList.remove("checked");
  });
  e.target.parentElement
    .querySelector(sel.COUPON_RADIO_INPUT)
    .setAttribute("checked", true);
  e.target.parentElement.parentElement.classList.add("checked");
};

//
//
//
// ------------------------------------------------------------------------------
const applyCouponButton_fixedBox_listener = async (e) => {
  e.preventDefault();

  if (
    !qSel(
      ".twik-coupons-mid-section .twik-coupon-row.checked .twik-coupon-code"
    )
  ) {
    oc.displayNoCouponSelectedMessage();
    return;
  } else {
    oc.hideNoCouponSelectedMessage();
  }

  let coupon = qSel(
    ".twik-coupons-mid-section .twik-coupon-row.checked .twik-coupon-code"
  ).textContent;
  let coupon_id = qSel(
    ".twik-coupons-mid-section .twik-coupon-row.checked .twik-coupon-radio-input"
  ).value;

  oc.hideAppliedCouponSection();
  oc.displayLoadingIcon();

  qSel(".applied-coupon-div").setAttribute("coupon_id", coupon_id);

  hideCouponsFixedBox();

  // apply discount
  let res = await applyCoupon_fetch(coupon);
  await all.refreshCart();

  // if fetch successful
  if (res.ok) {
    qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_SUCCESS_MESSAGE;
    window.sessionStorage.setItem("applied_coupon", coupon);
    $tw(sel.RESPONSE_MESSAGE).show();

    qSel(sel.APPLIED_COUPON_DIV_WRAPPER).style.display = "flex";
    qSel(sel.APPLIED_COUPON_NAME).innerHTML =
      window.sessionStorage.getItem("applied_coupon");
  }
  // if fetch unsuccessful
  else {
    qSel(sel.RESPONSE_MESSAGE).innerHTML = env.COUPON_APPLY_ERROR_MESSAGE;
    window.sessionStorage.removeItem("applied_coupon");
    $tw(sel.RESPONSE_MESSAGE).show();

    qSel(sel.APPLIED_COUPON_DIV_WRAPPER).style.display = "none";
    qSel(sel.APPLIED_COUPON_NAME).innerHTML = "";
  }

  oc.displayAppliedCouponSection();
  oc.hideLoadingIcon();
};

//
//
//
// ------------------------------------------------------------------------------
const displayCouponsFixedBox = async () => {
  let res = await fetch(
    "https://voilaapps.co/ajax/get_discount_code.php?shop_domain=kotanical.myshopify.com"
  );
  let coupons_json = await res.json();
  if (!coupons_json) {
    return;
  }

  if (!qSel(".twik-coupons-fixed-box")) {
    insAdjHTML(document.body, "beforeend", fixedBoxHTML);
    insAdjHTML(document.body, "beforeend", overlayCouponsHTML);

    addE(qSel(".twik-fixed-box-cls"), "click", hideCouponsFixedBox);

    addE(qSel(sel.COUPONS_OVERLAY), "click", (e) => {
      e.stopPropagation();
      hideCouponsFixedBox();
    });
    addE(qSel(sel.COUPONS_FIXED_BOX_WRAPPER), "click", (e) => {
      e.stopPropagation();
    });
  }

  // populate coupons box and set listeners
  populateCouponsFixedBox(coupons_json);
  addE(
    qSel(sel.COUPON_RADIO_INVISIBLE_DIV),
    "click",
    couponRadioInvisibleDiv_listener
  );
  addE(
    qSel(sel.APPLY_COUPON_BUTTON_FIXED_BOX),
    "click",
    applyCouponButton_fixedBox_listener
  );
  addE(qSel(".remove-applied-coupon"), "click", unapplyDiscount);

  $tw(sel.COUPONS_FIXED_BOX_WRAPPER).fadeIn("fast");
  $tw(sel.COUPONS_OVERLAY).fadeIn("fast");
};

//
//
//
// ------------------------------------------------------------------------------
export {
  unapplyDiscount,
  addCouponSectionHTML_and_functionality,
  removeCouponSectionHTML_and_functionality,
  populateCouponsFixedBox,
  clearCouponsFixedBox,
  displayCouponsFixedBox,
  hideCouponsFixedBox,
};
