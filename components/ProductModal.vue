<script setup>

const product = inject('product')
const productFound = inject('productFound')
const isModalVisible = inject('isModalVisible')

const emits = defineEmits(['toggleModal', 'interactCart'])

function arrayAsString(array) {
    if (array) return array.join(' ')
    else return ''
}

function getBackgroundImg(img) {
    return `background-image: url(${img})`
}

</script>

<template>

    <TheOverlay v-if="isModalVisible" @click="$emit('toggleModal')"></TheOverlay>

    <Transition name="fade">
        <div v-if="isModalVisible" class="container relative">
            <div @click="$emit('toggleModal')" class="absolute close-icon-container">
                <Icon name="material-symbols:close" size="1.2rem" class="close-icon absolute"></Icon>
            </div>

            <div class="row">

                <div class="col prod-content">
                    <div>
                        <h3 class="card-title"> {{ product.title }}</h3>
                        <p class="card-description"> {{ product.description }}</p>
                        <p v-if="product.weight">Weight: {{ product.weight }} grams</p>
                        <p v-if="product.tags">Tags: {{ arrayAsString(product.tags) }}</p>
                        <p v-if="product.allergens">Allergens: {{ arrayAsString(product.allergens) }}</p>
                    </div>
                    <div class="btn-container">
                        <span style="white-space: nowrap;" class="bold">$ {{ product.price }}</span>
                        <button @click="$emit('interactCart')"
                            :class="productFound ? 'card-btn-remove' : 'card-btn-add'">
                            {{ productFound ? 'Remove from cart' : 'Add to cart' }}
                        </button>
                    </div>
                </div>

                <div class="col relative">
                    <div class="img-container" :style="getBackgroundImg(product.image)"></div>
                </div>

            </div>

        </div>

    </Transition>
</template>

<style scoped>
.prod-content {
    margin: 4rem 0;

    @media screen and (max-width:768px) {
        margin: 2rem 0;
    }
}

.container {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    background-color: white;
    border-radius: var(--rounded);
    width: 70%;
    max-width: 50rem;
    max-height: 50rem;
    padding-left: 2rem;

    @media screen and (max-width:768px) {
        padding-inline: 1rem;
    }
}

.close-icon-container {
    right: -40px;
    cursor: pointer;
    background-color: var(--black);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    & .close-icon {
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
    }
}

.col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 50%;
}

.row {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: stretch;
    gap: 4rem;

    @media screen and (max-width:768px) {
        flex-direction: column;
    }
}

p {
    margin-bottom: 1rem;
    color: var(--black);
    font-weight: 500;
}

.card-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    margin-top: 0;
    color: var(--black);
}

.card-description {
    margin-bottom: 2rem;
    color: var(--grey__darkened);
    font-weight: normal;
}

.img-container {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    border-top-right-radius: var(--rounded);
    border-bottom-right-radius: var(--rounded);
}

.btn-container {
    gap: 2rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    & button {
        border-radius: var(--rounded);
        padding: 0.8rem 1.2rem;
        font-weight: 600;
        color: var(--black);
        width: 100%;
    }
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
</style>
