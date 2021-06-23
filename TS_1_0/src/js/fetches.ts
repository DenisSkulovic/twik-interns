// ---------------------------------------------------------------
export const getCart_fetch = async () => {
    const res = await fetch("/cart.json");
    return await res.json();
};

// ---------------------------------------------------------------
export const applyDiscount_fetch = async (coupon: string) => {
    if (!coupon) return false
    const res = await fetch(`/checkout/?discount=${coupon}`);
    return res.ok ? true : false;
};

// ---------------------------------------------------------------
export const unapplyDiscount_fetch = async () => {
    const res = await fetch(
        "/checkout/?discount=dummytexttodisablealldiscounts"
    );
    return res.ok ? true : false;
};

// ---------------------------------------------------------------
export const changeItemQuantity_fetch = async (key: string, newQuantity: number) => {
    await fetch("/cart/change.js", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: key, quantity: newQuantity }),
        method: "POST",
    });
};