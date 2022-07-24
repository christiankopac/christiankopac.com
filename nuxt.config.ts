import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  target: 'static',
  components: true,
  unocss: {
    uno: true,
    preflight: true,
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
  }
})

