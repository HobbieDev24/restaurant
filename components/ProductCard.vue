<script setup>

const props = defineProps({

    product: {
        type: Object,
        required: true,
    },

    compactMode: {
        type: Boolean,
        required: false,
    }
})

const cart = useCartStore()
const productFound = computed(() => {
    return cart.findItem(props.product)
})

function handleCartClick(product) {

    if (!productFound.value) {
        cart.addToCart(product)
    }

    else {
        cart.removeFromCart(product)
    }
}

const isModalVisible = ref(false)

function toggleModalVisibility() {
    isModalVisible.value = !isModalVisible.value
    document.body.classList.toggle('overflow-hidden');
}

provide('isModalVisible', isModalVisible)
provide('product', props.product)
provide('productFound', productFound)

</script>

<template>

    <ProductModal @toggleModal="toggleModalVisibility" @interactCart="handleCartClick(product)" v-if="isModalVisible">
    </ProductModal>

    <div v-if="!compactMode" class="card">

        <div class="card-header" @click="toggleModalVisibility">

            <div class="relative">
                <span v-if="product.tooltip" class="card-tooltip absolute"> {{ product.tooltip }}</span>
                <img class="card-image" :src="product.image">
            </div>
            <h3 class="card-title"> {{ product.title }}</h3>
            <p class="card-description"> {{ product.description }}</p>
        </div>

        <div class="card-footer">
            <span class="card-footer-price bold">$ {{ product.price }}</span>
            <button @click="handleCartClick(product)" :class="productFound ? 'card-btn-remove' : 'card-btn-add'">
                {{ productFound ? 'Remove from cart' : 'Add to cart' }}
            </button>
        </div>

    </div>

    <div v-if="compactMode">

        <div class="card__compact">

            <div class="card-header">
                <img class="card-image" :src="product.image">
                <div class="col">
                    <h3 class="card-title"> {{ product.title }}</h3>
                    <p class="card-description"> {{ product.description }}</p>
                </div>
            </div>

            <div class="card-footer">

                <div class="item-qty-container">
                    <div @click="cart.decrementItem(product.title)" class="icon-container">
                        <Icon name="ic:baseline-minus"></Icon>
                    </div>

                    <span> {{ product.qty }} </span>

                    <div @click="cart.incrementItem(product.title)" class="icon-container">
                        <Icon name="ic:baseline-plus"></Icon>
                    </div>

                </div>

                <span class="card-footer-price">$ {{ product.price * product.qty }}</span>
            </div>

        </div>
    </div>

</template>


<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    max-width: 20rem;
    background-color: #F9F9F9;
    border-radius: var(--rounded);
}

.card-image {
    width: 100%;
    height: fit-content;
    aspect-ratio: 1/1;
    max-width: 100%;
    margin-bottom: 2rem;
    border-radius: var(--rounded);
}

.card-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    margin-top: 0;
    color: var(--black);
}

.card-description {
    color: var(--grey__darkened);
    margin-bottom: 2rem;
}

.card-header {
    cursor: pointer;
}

.card-tooltip {
    top: 12px;
    right: 12px;
    padding: 0.6rem;
    background-color: var(--red);
    border-radius: var(--rounded);
    color: white;
    font-size: 0.8rem;
    border-radius: 0.6rem;
    font-weight: 600;
}

.icon-container {
    width: 2rem;
    height: 2rem;
    background-color: var(--grey);
    border-radius: var(--rounded);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.item-qty-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.col {
    display: flex;
    flex-direction: column;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.card-footer button {
    border-radius: var(--rounded);
    padding: 0.8rem 1.2rem;
    font-weight: 600;
    color: var(--black);
}

.card-btn-add {
    background-color: var(--yellow);

    &:hover {
        transition: 0.2s ease-in-out;
        background-color: var(--yellow__darkened);
        scale: 1.05;
    }
}

.card-btn-remove {
    background-color: var(--grey);

    &:hover {
        transition: 0.2s ease-in-out;
        background-color: var(--grey__darkened);
        scale: 1.05;
    }
}

.card__compact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;

    &>.card-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 0.6rem;
    }
}

.card__compact .card-description {
    font-size: 0.8rem;
}

.card__compact .card-image {
    width: 5rem;
    height: 5rem;
}

.card__compact .card-title {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
}
</style>