// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  pages: true,
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'catppuccin-mocha',
        },
      },
    },
  },
  routeRules: {
    '/resume': {
      redirect: '/docs/resume.pdf',
    },
  },
  compatibilityDate: '2025-02-22',
});
