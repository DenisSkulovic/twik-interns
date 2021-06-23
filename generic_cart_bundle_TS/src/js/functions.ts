import { addE, qSel, qSelAll, insAdjHTML } from "../utils/shortcuts";
import { displayEmptyCartDiv, hideProductsList, openCart, openOverlay } from "./displayHide";
import { changeItemQuantity_fetch, getCart_fetch } from "./fetches";
import productListHTML from "../temp/product_list.html"
import { interp } from "../utils/useful_functions";
import sel from "../constants/selectors"
import { minusOne_listener, plusOne_listener, productQuantityInput_input_listener, productQuantityInput_keydown_listener, removeItem_listener, stopProp_listener } from "./eventListeners";

const $tw = window.$tw


// ---------------------------------------------------------------
function numberWithCommas(x: number) {
    let x_str = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x_str)) x_str = x_str.replace(pattern, "$1,$2");
    return x_str;
}

// ---------------------------------------------------------------
export const clearProductsList = () => {
    qSel(sel.CART_PRODUCT_LIST).innerHTML = "";
};

// ---------------------------------------------------------------
export const clearAndHideProductList = () => {
    clearProductsList();
    hideProductsList();
    displayEmptyCartDiv();
};

// ---------------------------------------------------------------
export const setQuantity = async (key: string, newQuantity: number) => {
    const json = await getCart_fetch();
    for (const item of json["items"]) {
        if (item["key"] === key) {
            await changeItemQuantity_fetch(key, newQuantity);
            refreshCart();
        }
    }
};

// ---------------------------------------------------------------
export const changeQuantity = async (key: string, change: number) => {
    const json = await getCart_fetch();
    for (const item of json["items"]) {
        if (item["key"] === key) {
            const newQuantity = parseInt(item["quantity"]) + change;
            await changeItemQuantity_fetch(key, newQuantity);
            refreshCart();
        }
    }
};

// ------------------------------------------------------------------------------
const setAppliedCouponAmount = (json: LooseObject) => {
    let currency = json["currency"];
    let symbol = window.twik_user_data["location"]["currencies"][currency]["symbol"];
    if (json["total_discount"] == 0) {
        qSel(sel.COUPON_AMOUNT).innerHTML = "";
        return;
    }
    qSel(sel.COUPON_AMOUNT).innerHTML = `-${symbol}${numberWithCommas(
        parseInt(json["total_discount"]) / 100
    )}`;
};

// ---------------------------------------------------------------
export const populateProductList = async () => {
    let cartJSON = await getCart_fetch();
    let currency = cartJSON["currency"];
    const currencyJSON = window.twik_user_data["location"]["currencies"];
    let symbol = currencyJSON[currency]["symbol"];
    let total_price_CENTS = cartJSON["total_price"];
    let items = cartJSON["items"];
    // let requiresShipping = cartJSON["requires_shipping"];
    // let subtotal_price_CENTS = cartJSON["items_subtotal_price"];
    // let total_weight = cartJSON["total_weight"];
    // let item_count = cartJSON["item_count"];

    clearAndHideProductList();

    // for some reason sometimes a second button gets added, probably it's kotanical's artifacts
    while (qSelAll(sel.CART_SUBTOTAL).length > 1) {
        qSel(sel.CART_SUBTOTAL).remove();
    }

    qSel(sel.CART_SUBTOTAL).innerHTML = `${symbol}${numberWithCommas(
        total_price_CENTS / 100
    )}`;
    setAppliedCouponAmount(cartJSON)

    items.forEach((item: LooseObject) => {
        $tw(qSel(sel.CART_EMPTY)).hide();
        $tw(".twik-cart-footer").css({ visibility: "visible" });
        $tw(qSel(sel.CART_PRODUCT_LIST)).show();

        const interp_data: LooseObject = {
            url: item["url"],
            image: item["image"],
            product_title: item["product_title"],
            variant_title: item["variant_title"] ? item["variant_title"] : "",
            symbol: symbol,
            final_price: numberWithCommas(
                item["final_price"] / 100
            ),
            key: item["key"],
            quantity: item["quantity"]
        }

        insAdjHTML(
            qSel(sel.CART_PRODUCT_LIST),
            "beforeend",
            interp(productListHTML, interp_data)
        );

        let input = qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT)[
            qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT).length - 1
        ]!;
        let span = qSelAll(sel.CART_PRODUCT_QUANTITY_SPAN)[
            qSelAll(sel.CART_PRODUCT_QUANTITY_SPAN).length - 1
        ]!;

        span.innerHTML = (input as HTMLInputElement).value.replace(/\s/g, "&nbsp;");
        adjustSpanAndInput(span, (input as HTMLInputElement));
    })

};

// ---------------------------------------------------------------
export const adjustSpanAndInput = (span: HTMLElement, input: HTMLInputElement) => {
    if (span.offsetWidth <= 60 && span.offsetWidth >= 25) {
        input.style.width = span.offsetWidth + 5 + "px";
    } else if (span.offsetWidth > 60) {
        input.style.width = 65 + "px";
    }
};

// ---------------------------------------------------------------
export const refreshCart = async () => {
    await populateProductList();
    if (qSelAll(".twik-cart-product").length === 0) {
        clearAndHideProductList();
        return;
    }
    setProductListeners();
};

// ---------------------------------------------------------------
export const replaceCartButton = async () => {
    let originalCartButton: HTMLElement = qSel(sel.ORIGINAL_CART_BUTTON)
    let cloneCartButton = (originalCartButton.cloneNode(true) as HTMLElement);
    cloneCartButton.setAttribute("data-action", "");
    cloneCartButton.setAttribute("onclick", "");
    addE(cloneCartButton, "click", async (e) => {
        e.preventDefault();
        await refreshCart();
        openOverlay();
        openCart();
    });
    originalCartButton.replaceWith(cloneCartButton);
    addE(cloneCartButton.parentElement!, "click", stopProp_listener);
};
//
//
//
//
// ###############################################################################################
// functions that set event listeners

export const setProductListeners = () => {
    // add 1 item buttons
    qSelAll(sel.PLUS_ONE).forEach((btn) => {
        addE(btn, "click", plusOne_listener);
    });

    // remove 1 item buttons
    qSelAll(sel.MINUS_ONE).forEach((btn) => {
        addE(btn, "click", minusOne_listener);
    });

    // remove all item buttons
    qSelAll(sel.REMOVE_ITEM).forEach((btn) => {
        addE(btn, "click", removeItem_listener);
    });

    // quantity input listener
    qSelAll(sel.CART_PRODUCT_QUANTITY_INPUT).forEach((input) => {
        addE(input, "keydown", productQuantityInput_keydown_listener);

        let span = input.parentElement!.querySelector(
            sel.CART_PRODUCT_QUANTITY_SPAN
        )!;

        addE(input, "input", () => { productQuantityInput_input_listener((span as HTMLElement), (input as HTMLInputElement)) });
    });
};
