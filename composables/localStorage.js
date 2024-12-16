export function saveCartLocally(cartArray) {
    localStorage.setItem('cart', JSON.stringify(cartArray))
}

export function retrieveCart() {
    return JSON.parse(localStorage.getItem('cart')) ?? []
}

export function saveCouponLocally(coupon) {
    localStorage.setItem('coupon', JSON.stringify(coupon))
}

export function retrieveCoupon() {
    return JSON.parse(localStorage.getItem('coupon'))
}

export function removeCartLocally() {
    localStorage.removeItem('cart')
}