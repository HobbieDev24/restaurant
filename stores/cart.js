
export const useCartStore = defineStore('cart', () => {

    const cartItems = ref([])
    const isCartVisible = ref(false)
    const deliveryCost = ref(5)
    const isInitialized = ref(false)
    const formSubmitted = ref(false)

    const appliedCoupon = ref({
        couponCode: '',
        couponRate: 0,
        couponStatus: ''
    })

    const isNotificationVisible = ref(false)

    const notificationContent = ref({
        text: '',
        title: ''
    })

    let notificationTimeout = null

    const itemsQty = computed(() => {
        return cartItems.value.length
    })

    const itemsPrice = computed(() => {

        const prices = []

        cartItems.value.forEach((item) => {
            prices.push(item.price * item.qty)
        })

        const sum = prices.reduce((acc, currentVal) => {
            return acc + currentVal
        }, 0)

        return roundTwoDecimals(sum)
    })

    const appliedDiscount = computed(() => {
        const discount = itemsPrice.value / 100 * appliedCoupon.value.couponRate
        return roundTwoDecimals(discount)
    })

    const totalCost = computed(() => {
        const cost = itemsPrice.value + deliveryCost.value - appliedDiscount.value
        return roundTwoDecimals(cost)
    })

    function roundTwoDecimals(amount) {
        return parseFloat(amount.toFixed(2))
    }

    function addToCart(item) {
        item.qty = 1
        cartItems.value.push(item)
        saveCartLocally(cartItems.value)
        showNotification('Added to cart', item.title)
    }

    function removeFromCart(item) {
        const itemIndex = cartItems.value.findIndex((cartItem) => cartItem.id === item.id)
        cartItems.value.splice(itemIndex, 1)
        saveCartLocally(cartItems.value)
        showNotification('Removed from cart', item.title)
    }

    function incrementItem(productTitle) {
        const foundItem = cartItems.value.find((item) => item.title === productTitle)

        if (foundItem.qty === 10) return

        else {
            foundItem.qty++
        }

        saveCartLocally(cartItems.value)
    }

    function decrementItem(productTitle) {
        const foundItem = cartItems.value.find((item) => item.title === productTitle)

        if (foundItem.qty === 1) {
            removeFromCart(foundItem)
        }

        else {
            foundItem.qty--
        }

        saveCartLocally(cartItems.value)
    }

    function toggleCartVisibility() {
        toggleVisibility(isCartVisible)

        if (!isCartVisible.value && appliedCoupon.value.couponStatus !== 'success') {
            appliedCoupon.value.couponStatus = ''
            appliedCoupon.value.couponCode = ''
            appliedCoupon.value.couponRate = 0
        }
    }

    function findItem(product) {
        return cartItems.value.some((item) => {
            return item.title === product.title
        })
    }

    function reset() {
        cartItems.value = []
        appliedCoupon.value.couponCode = ''
        appliedCoupon.value.couponRate = 0
        appliedCoupon.value.couponStatus = ''
        formSubmitted.value = false
        removeCartLocally()
    }

    function showNotification(messageText, prodTitle) {

        if (notificationTimeout) {
            clearTimeout(notificationTimeout)
        }

        notificationContent.value.text = messageText
        notificationContent.value.title = prodTitle

        isNotificationVisible.value = true

        notificationTimeout = setTimeout(() => {
            isNotificationVisible.value = false
        }, 1600)
    }

    function initializeCart() {
        if (!isInitialized.value) {
            cartItems.value = retrieveCart()
            appliedCoupon.value.couponCode = retrieveCoupon()?.code ?? ''
            appliedCoupon.value.couponRate = retrieveCart()?.rate ?? 0
            isInitialized.value = true
        }
    }

    return {
        cartItems, isCartVisible, addToCart, removeFromCart,
        itemsPrice, itemsQty, incrementItem, decrementItem,
        deliveryCost, toggleCartVisibility, findItem, reset,
        isNotificationVisible, showNotification, notificationContent, appliedCoupon,
        appliedDiscount, totalCost, notificationTimeout, isInitialized, formSubmitted, initializeCart
    }
})