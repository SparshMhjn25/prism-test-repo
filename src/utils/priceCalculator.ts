export function calculateDiscountedPrice(
    price: number,
    discountPercent: number
): number {
    return price - (price * discountPercent);
}
