// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/styles/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  pages: true,
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  routeRules: {
    '/meet': {
      redirect: 'https://meet.google.com/cxg-nvum-xxf',
    },
    '/music': {
      redirect: 'https://open.spotify.com/playlist/5ONWkSGfSjWjR0OAAotkKg',
    },
    '/resume': {
      redirect: '/docs/resume.pdf',
    },
  },
});
