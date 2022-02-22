import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
  },

  css: [
    '@/assets/css/main.css',
  ],

  buildModules: ['@nuxtjs/tailwindcss']
})
