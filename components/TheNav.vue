<script setup>

import { useResizeObserver } from '@vueuse/core';

const cart = useCartStore()

const data = await $fetch('/api/menu')
const categoryLinks = data.map((category) => category.categoryName)

const isMenuVisible = ref(false)
const windowSize = ref(null)
let isMobile = ref(false)

onMounted(() => {

    useResizeObserver(document.body, (entries) => {
        const entry = entries[0]
        const { width } = entry.contentRect
        windowSize.value = width

        if (windowSize.value <= 768) {
            isMobile.value = true
        }
    })
})

function toggleMenuVisibility() {
    isMenuVisible.value = !isMenuVisible.value
    document.body.classList.toggle('overflow-hidden')
}

provide('navLinks', categoryLinks)

</script>


<template>

    <nav>
        <div class="nav-left">
            <NuxtLink to="/">
                <img src="/assets/logo.png">
            </NuxtLink>

            <ul>
                <li v-for="link in categoryLinks">
                    <a :href="'/#' + link"> {{ link }} </a>
                </li>
            </ul>
        </div>

        <div class="relative" :class="isMobile ? 'nav-right-mobile' : ''">
            <div class="cart-icon-container relative" @click="cart.toggleCartVisibility">
                <Icon name="mdi:cart" size="1.6rem" style="margin: auto;"></Icon>
                <span class="cart-number absolute" v-if="cart.itemsQty > 0"> {{ cart.itemsQty }}</span>
            </div>
            <CartNotification></CartNotification>

            <div @click="toggleMenuVisibility" v-if="isMobile" class="hamburger-icon">
                <Icon name="icon-park-outline:hamburger-button" size="2rem"></Icon>
            </div>

        </div>

        <HamburgerMenu @closeIconClick="toggleMenuVisibility" v-if="isMobile && isMenuVisible"></HamburgerMenu>
    </nav>

</template>


<style scoped>
.nav-right-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

img {
    cursor: pointer;
    width: 6rem;

    @media screen and (max-width:768px) {
        width: 4rem;
    }
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: var(--grey);
}

.nav-left {
    display: flex;
    gap: 4rem;
    align-items: center;

    @media screen and (max-width:768px) {
        gap: 1rem;
    }
}

ul {
    list-style: none;
    display: flex;
    gap: 4rem;

    @media screen and (max-width:768px) {
        display: none;
    }
}

li>a {
    color: var(--black);
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border-radius: var(--rounded);

    @media screen and (max-width:768px) {
        padding: 0.4rem;
    }

    &:hover {
        transition: 0.2s ease-in-out;
        background-color: var(--red);
        color: white;
        font-weight: 700;
    }
}

.cart-icon-container {
    border-radius: var(--rounded);
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow);
    cursor: pointer;

    &:hover {
        background-color: var(--yellow__darkened);
        scale: 1.05;
    }
}

.cart-number {
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
    color: white;
    font-weight: 700;
    text-align: center;
    align-content: center;
    background-color: var(--red);
    top: -6px;
    right: -6px;
}
</style>