<script setup>

const props = defineProps(['error'])

const handleClearError = () => {
    clearError({ redirect: "/" })
}

</script>

<template>
    <div class="container">
        <h1> Woops.. there is a {{ error.statusCode }} error</h1>
        <p> {{ error.message }}</p>
        <img v-if="error.statusCode === 404" src="/assets/404.svg">
        <button @click="handleClearError">Back to homepage</button>
    </div>
</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--black);
    min-height: 100svh;
}

h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
}

img {
    max-width: 20rem;
}

button {
    margin-top: 2rem;
    border-radius: var(--rounded);
    background-color: var(--yellow);
    padding: 0.8rem 1.2rem;
    font-weight: 600;

    &:hover {
        background-color: var(--yellow__darkened);
        scale: 1.05;
    }
}
</style>