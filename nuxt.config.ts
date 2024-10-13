// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: '/gallery/',
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts'
  ],
  colorMode: {
    preference: 'dark'
  }
})