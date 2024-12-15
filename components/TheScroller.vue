<script setup>

function handleScroll() {
    window.scrollTo({
        top: 20,
        left: 0,
        behavior: "smooth",
    });
}

const cart = useCartStore()

</script>

<template>
    <button class="fixed" v-if="!cart.isCartVisible" @click="handleScroll">
        <Icon name="tabler:arrow-up" size="1.5rem"></Icon>
    </button>
</template>

<style scoped>
button {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    bottom: 4rem;
    right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--grey__darkened);
        scale: 1.05;
    }
}
</style>