export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      greet: {
        name: 'George'
      }
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
}));