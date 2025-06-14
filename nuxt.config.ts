// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',

  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'fr', // language 2 letters code (e.g. 'fr')
        name: 'Franch', // language name (e.g. 'Français')
        language: 'fr-FR', // language ISO code (e.g. 'fr-FR')
      },
    ],
  },
  content: {
    highlight: {
      langs: ['powershell'],
    },
  }

});
