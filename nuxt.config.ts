import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@base': path.resolve(__dirname, '../tailwind4-nuxt-clean'),
  }
})
