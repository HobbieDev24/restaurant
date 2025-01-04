export default defineNuxtRouteMiddleware((to, from) => {
    const cart = useCartStore()
    if (from.path !== '/checkout' && !cart.formSubmitted) {
        throw new Error('This page will be available once you complete checkout!')
    }
})