import { adjustSpanAndInput, changeQuantity, setQuantity } from "./functions";
import sel from "../constants/selectors"
import { applyDiscount_fetch, unapplyDiscount_fetch } from "./fetches";
import { closeCart, closeOverlay, displayAppliedCouponDiv, displayLoadingIcon, displayProductLoading, hideAppliedCouponDiv, hideLoadingIcon, hideProductLoading } from "./displayHide";
import { qSel } from "../utils/shortcuts";

// ---------------------------------------------------------------
export const plusOne_listener = async (e: Event) => {
    e.preventDefault();
    displayProductLoading(e.target!)
    await changeQuantity((e.target as HTMLElement).getAttribute("data-key")!, 1);
    hideProductLoading(e.target!)
}

// ---------------------------------------------------------------
export const minusOne_listener = async (e: Event) => {
    e.preventDefault();
    displayProductLoading(e.target!)
    await changeQuantity((e.target as HTMLElement).getAttribute("data-key")!, -1);
    hideProductLoading(e.target!)
}

// ---------------------------------------------------------------
export const removeItem_listener = async (e: Event) => {
    e.preventDefault();
    displayProductLoading(e.target!)
    await setQuantity((e.target as HTMLElement).getAttribute("data-key")!, 0);
    hideProductLoading(e.target!)
}

export const removeCoupon_listener = async () => {
    unapplyDiscount_fetch();
    hideAppliedCouponDiv();
    (qSel(sel.APPLY_COUPON_INPUT) as HTMLInputElement).value = ""
}

// ---------------------------------------------------------------
export const productQuantityInput_keydown_listener = async (e: Event) => {
    let typingTimer: ReturnType<typeof setTimeout>;
    typingTimer = setTimeout(() => { }, 0)
    clearTimeout(typingTimer);
    typingTimer = setTimeout(async () => {
        await setQuantity(
            (e.target as HTMLInputElement).getAttribute("data-key")!,
            parseInt((e.target as HTMLInputElement).value)
        );
    }, 1000);
}

// ---------------------------------------------------------------
export const productQuantityInput_input_listener = (span: HTMLElement, input: HTMLInputElement) => {
    span.innerHTML = (input as HTMLInputElement).value.replace(/\s/g, "&nbsp;");
    adjustSpanAndInput((span as HTMLElement), (input as HTMLInputElement));
}

// ---------------------------------------------------------------
export const applyCouponForm_submit_listener = async (e: Event) => {
    e.preventDefault();

    hideAppliedCouponDiv()
    displayLoadingIcon()

    let form = (e.target as HTMLElement);
    let coupon_input = (form
        .querySelector(sel.APPLY_COUPON_INPUT)! as HTMLInputElement)
    coupon_input.value = coupon_input.value.toUpperCase()
    let coupon =
        coupon_input.value.toUpperCase();
    if (!coupon) {
        hideLoadingIcon()
        displayAppliedCouponDiv(coupon, false, true);
        return
    }
    let requestSuccess = await applyDiscount_fetch(coupon);

    hideLoadingIcon()
    displayAppliedCouponDiv(coupon, requestSuccess);
}

// ---------------------------------------------------------------
export const closeCartOverlay_listener = () => {
    closeCart();
    closeOverlay();
}

// ---------------------------------------------------------------
export const stopProp_listener = (e: Event) => {
    e.stopPropagation();
}