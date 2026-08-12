export function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}