<script setup>

const cart = useCartStore()

</script>

<template>

    <Transition name="slide">
        <div v-if="cart.isNotificationVisible" class="container absolute">
            <p>{{ cart.notificationContent.text }}:</p>
            <span> {{ cart.notificationContent.title }}</span>
        </div>
    </Transition>

</template>


<style scoped>
.container {
    background-color: wheat;
    padding: 1rem;
    top: 60px;
    right: 24px;
    font-size: 0.8rem;
    width: 10rem;
    color: var(--black);
    border-radius: var(--rounded);
}

p {
    font-weight: 700;
    margin-bottom: 0.4rem;
}
</style>
