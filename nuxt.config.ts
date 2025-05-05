// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image","@nuxt/ui"],
  compatibilityDate: "2024-08-14",
  css: ["~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  ui: {
    colorMode: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  routeRules: {
    "/js/script.js": {
      proxy: {
        to: "https://plausible.io/js/script.js",
      },
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
      },
    },
    "/api/event": {
      proxy: {
        to: "https://plausible.io/api/event",
      },
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
      },
    },
  },
  nitro: {
    routeRules: {
      "*": {
        prerender: true,
      },
    },
  },
  runtimeConfig: {},
  devtools: { enabled: true },
});