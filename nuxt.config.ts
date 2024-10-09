// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxtjs/i18n', "@nuxt/ui"],
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-08-14',
  future: {
    compatibilityVersion: 4
  },
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
    // routeRules: {
    //   '*': {
    //     prerender: true
    //   },
    // }
  },
  runtimeConfig: {
    automailerApiKey: '',
    public: {
      automailerUrl: '',
    }
  },
  devtools: { enabled: true }
});