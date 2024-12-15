
export const useCartStore = defineStore('cart', () => {

    const cartItems = ref([])
    const isCartVisible = ref(false)
    const deliveryCost = ref(5)

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

        return Math.round(sum)
    })

    const appliedDiscount = computed(() => {
        return Math.round(itemsPrice.value / 100 * appliedCoupon.value.couponRate)
    })

    const totalCost = computed(() => {
        return itemsPrice.value + deliveryCost.value - appliedDiscount.value
    })

    function addToCart(item) {
        item.qty = 1
        cartItems.value.push(item)
        saveCartLocally(cartItems.value)
        showNotification('Added to cart', item.title)
    }

    function removeFromCart(item) {
        cartItems.value.splice(cartItems.value.indexOf(item), 1)
        saveCartLocally(cartItems.value)
        showNotification('Removed from cart', item.title)
    }

    function incrementItem(productTitle) {
        const foundItem = cartItems.value.find((item) => item.title === productTitle)

        if (foundItem.qty === 10) {
            return
        }

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
        isCartVisible.value = !isCartVisible.value

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
    }

    function showNotification(messageText, prodTitle) {

        //doesn't work
        // if (timeout) { 
        //     clearTimeout(timeout)
        // }

        notificationContent.value.text = messageText
        notificationContent.value.title = prodTitle

        isNotificationVisible.value = true

        const timeout = setTimeout(() => {
            isNotificationVisible.value = false
        }, 1600)
    }

    onMounted(() => {
        cartItems.value = retrieveCart()
        appliedCoupon.value.couponCode = retrieveCoupon()?.code ?? ''
        appliedCoupon.value.couponRate = retrieveCart()?.rate ?? 0
    })

    return {
        cartItems, isCartVisible, addToCart, removeFromCart,
        itemsPrice, itemsQty, incrementItem, decrementItem,
        deliveryCost, toggleCartVisibility, findItem, reset,
        isNotificationVisible, showNotification, notificationContent, appliedCoupon,
        appliedDiscount, totalCost
    }
})