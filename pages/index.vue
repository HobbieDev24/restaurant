<script setup>

useSeoMeta({
    title: 'Homepage',
    description: 'Lorem ipsum'
})

const data = await $fetch('/api/menu')

</script>

<template>
    <div>
        <div v-for="category in data">
            <h1 :id="category.categoryName"> {{ category.categoryName }} </h1>
            <p>{{ category.categoryDescription }}</p>

            <div class="card-container">
                <ProductCard v-for="product in category.products" :key="product.id" :product="product"
                    :compact-mode="false">
                </ProductCard>
            </div>

        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>


<style scoped>
p {
    color: var(--black);
    margin-bottom: 2rem;
}

h1 {
    margin-bottom: 1rem;
    color: var(--black);
    scroll-margin-top: 1rem;
}

.card-container {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; */

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}
</style>
