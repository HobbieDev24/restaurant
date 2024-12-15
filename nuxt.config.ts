// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/icon', '@vueuse/nuxt'],

  app: {
    head: {
      title: 'Restaurant app',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: '/styles.css' }
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    // baseURL: '/restaurant-app/',
    // buildAssetsDir: '/restaurant-app/assets/',
  },

  // nitro: {
  //   preset: 'github-pages',
  //   prerender: {
  //     routes: ['api/menu', 'api/coupons'], // Ensure this route is generated statically
  //   },
  // },
});