// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-14',
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
    regionalPricingApiKey: '',
    automailerApiKey: '',
    public: {
      automailerUrl: 'https://automailer.moby-it.com/send-email',
      regionalPricingUrl: 'https://pricing.moby-it.com/regionalPrices'
    }
  },
  devtools: { enabled: true }
});
