<script setup>

const cart = useCartStore()

</script>

<template>

    <Transition name="slide">
        <aside class="fixed" v-show="cart.isCartVisible">
            <div style="display: flex; flex-direction: column; justify-content: space-between;"
                v-if="cart.cartItems.length">

                <div class="aside-container">
                    <div>
                        <ProductCard v-for="product in cart.cartItems" :product="product" :compact-mode="true">
                        </ProductCard>
                    </div>

                    <div class="cart-footer">
                        <CouponInput></CouponInput>

                        <div class="cart-list">

                            <div class="cart-item">
                                <span> Products price</span>
                                <span>$ {{ cart.itemsPrice }}</span>
                            </div>

                            <div class="cart-item">
                                <span> Delivery price</span>
                                <span>$ {{ cart.deliveryCost }}</span>
                            </div>

                            <div class="cart-item">
                                <span> Discount applied</span>
                                <span>-${{ cart.appliedDiscount ?? 0 }}</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="cart-checkout">
                    <div class="cart-checkout-summary">
                        <span class="price-label">Total price</span>
                        <span class="price-data bold"> $ {{ cart.totalCost }}</span>
                    </div>
                    <NuxtLink to="checkout">
                        <button>
                            Checkout
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <div class="empty-checkout" v-else>
                <img src="assets/question-100.svg">
                <h3> So empty here...</h3>
                <p> Go back and add some items to the cart</p>
            </div>

        </aside>
    </Transition>

</template>

<style scoped>
.empty-checkout {
    margin: auto;

    &>h3 {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    &>img {
        max-width: 24rem;
    }

    @media screen and (max-width:768px) {
        padding: 0 2rem;
    }

}

aside {
    display: flex;
    justify-content: space-between;
    height: 100%;
    top: 0;
    right: 0;
    width: 30rem;
    background-color: #F9F9F9;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 4;
    padding: 0;

    @media screen and (max-width:768px) {
        width: 75%;
    }
}

.aside-container {
    padding: 2rem 2rem 0 2rem;

    @media screen and (max-width:768px) {
        padding: 1rem 1rem 0 1rem;
    }
}

.cart-footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    padding-top: 1.2rem;
    border-top: 0.2px solid #040e3c;
}

.cart-checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 0 2rem;

    @media screen and (max-width:768px) {
        padding: 0 1rem;
    }
}

.cart-checkout-summary {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem 0;
}

.cart-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
}

.price-data {
    font-size: 2rem;
}

button {
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