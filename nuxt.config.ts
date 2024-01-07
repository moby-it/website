// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: {
    routeRules: {
      '/': {
        prerender: true
      }
    }
  },
  devtools: { enabled: true }
});
