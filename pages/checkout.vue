<script setup>

const cart = useCartStore()

definePageMeta({
    middleware: ['route-checkout']
})

onMounted(() => {
    if (cart.isCartVisible) {
        cart.toggleCartVisibility()
    }
})

useSeoMeta({
    title: 'Checkout',
    description: 'Lorem ipsum'
})

</script>


<template>
    <div style="margin-block: 4rem;" class="form-container">
        <CheckoutForm></CheckoutForm>
    </div>
</template>


<style scoped></style>