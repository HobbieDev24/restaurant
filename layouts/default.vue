<script setup>
const cart = useCartStore()
</script>

<template>
    <TheOverlay :key="'cart-overlay'" v-if="cart.isCartVisible" @click="cart.toggleCartVisibility"></TheOverlay>
    <TheNav></TheNav>
    <main>
        <slot></slot>
    </main>
    <TheCart></TheCart>
    <TheScroller></TheScroller>
</template>