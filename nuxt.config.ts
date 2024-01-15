// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    "/js/script.js": {
      proxy: {
        to: "https://plausible.io/js/script.js"
      }
    },
    "/api/event": {
      proxy: {
        to: "https://plausible.io/api/event"
      }
    }
  },
  nitro: {
    routeRules: {
      '*': {
        prerender: true
      },
    }
  },
  devtools: { enabled: true }
});
