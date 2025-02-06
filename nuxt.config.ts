// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "km", language: "km-KH", file: "km.json" },
    ],
    lazy: true,
    restructureDir: false,
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/styles/main.css'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
