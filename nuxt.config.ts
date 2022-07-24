import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  buildModules: [
    '@unocss/nuxt'
  ],
  target: 'static',
  components: true,
})

