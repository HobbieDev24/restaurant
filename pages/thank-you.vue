<script setup>

const cart = useCartStore()

const orderNumber = ref('')

async function generateOrderNum() {
    const orderNums = []

    while (orderNums.length < 6) {
        const randomNum = Math.round(Math.random() * 10)
        orderNums.push(randomNum)
    }

    return orderNums.join('')
}

onBeforeMount(async () => {
    orderNumber.value = await generateOrderNum()
})

onMounted(async () => {

    orderNumber.value = await generateOrderNum()

    if (cart.isCartVisible) {
        cart.toggleCartVisibility()
    }

    // localStorage.clear()
    //add route guards
    removeCartLocally()
    cart.reset()
})

useSeoMeta({
    title: 'Thank you',
    description: 'Lorem ipsum'
})

</script>

<template>
    <div class="ty-container">
        <img src="/assets/order-confirmed.svg">
        <h1>Success!</h1>
        <p>Your order number is {{ orderNumber }}</p>
    </div>
</template>


<style scoped>
.ty-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--black);
}

h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
}

img {
    margin-bottom: 2rem;
    max-width: 20rem;
}
</style>