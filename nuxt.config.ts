// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
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
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    public: {
      automailerUrl: ''
    }
  },
  devtools: { enabled: true }
});
