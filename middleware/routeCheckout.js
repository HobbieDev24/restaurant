export default defineNuxtRouteMiddleware((to, from) => {
    const cart = useCartStore()
    console.log(cart.itemsPrice)
    if (cart.itemsPrice === 0) {
        throw new Error('This page will be available once you add items to cart!')
    }
})