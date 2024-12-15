<script setup>

const cart = useCartStore()

async function findCouponRate(discountCode) {

    if (discountCode === '') {
        cart.appliedCoupon.couponStatus = 'missing'
        return
    }

    const coupons = await $fetch('/api/coupons')
    const foundCoupon = coupons.find((coupon) => coupon.code === discountCode)


    if (foundCoupon) {
        cart.appliedCoupon.couponStatus = 'success'
        cart.appliedCoupon.couponRate = foundCoupon.rate
    }

    else {
        cart.appliedCoupon.couponStatus = 'fail'
        cart.appliedCoupon.couponRate = 0
    }
}

</script>

<template>

    <div>
        <div class="input-container">
            <input placeholder="Coupon code" name="coupon" v-model="cart.appliedCoupon.couponCode" type="text">
            <button @click="findCouponRate(cart.appliedCoupon.couponCode)">Apply</button>
        </div>
        <p v-if="cart.appliedCoupon.couponStatus === 'success'" class="success">Coupon applied!</p>
        <p v-if="cart.appliedCoupon.couponStatus === 'fail'" class="fail">This coupon doesn't exist!</p>
        <p v-if="cart.appliedCoupon.couponStatus === 'missing'" class="missing">No input provided</p>
    </div>

</template>


<style scoped>
p {
    border-radius: var(--rounded);
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0.6rem;
}

p.success {
    color: green;
    background-color: lightgreen;
}

p.fail {
    color: var(--red);
    background-color: lightpink;
}

p.missing {
    color: var(--black);
    background-color: var(--yellow);
}

.input-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    min-height: 2rem;
    font-size: 1rem;
    margin-bottom: 2rem;
}

input,
button {
    padding: 0.6rem;
    border-radius: var(--rounded);
    font-size: 0.8rem;
}

input {

    &:focus,
    :focus-visible,
    :focus-within {
        outline: 1px solid var(--yellow__darkened);
        transition: 0.1s ease-in-out;
    }
}


button {
    padding-inline: 1.2rem;
    font-weight: 600;

    &:hover {
        background-color: var(--grey__darkened);
        scale: 1.05;
    }
}


input::placeholder {
    color: var(--grey__darkened);
}
</style>
