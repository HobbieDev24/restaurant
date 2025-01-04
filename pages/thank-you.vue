<script setup>

definePageMeta({
    middleware: ['route-thank-you']
})

const cart = useCartStore()

async function generateOrderNum() {
    const orderNums = []

    while (orderNums.length < 6) {
        const randomNum = Math.round(Math.random() * 10)
        orderNums.push(randomNum)
    }

    return orderNums.join('')
}

const { data: orderNumber, status } = await useAsyncData('key', generateOrderNum)

onMounted(async () => {

    if (cart.isCartVisible) {
        cart.toggleCartVisibility()
    }

    cart.reset()

})

useSeoMeta({
    title: 'Thank you',
    description: 'Lorem ipsum'
})

</script>

<template>
    <div v-if="status === 'success'" class="ty-container">
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