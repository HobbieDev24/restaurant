export function saveCartLocally(cartArray) {
    localStorage.setItem('cart', JSON.stringify(cartArray))
}

export function retrieveCart() {
    return JSON.parse(localStorage.getItem('cart')) ?? []
    // async not working?
    // const response = await JSON.parse(localStorage.getItem('cart')) ?? []
    // return response
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