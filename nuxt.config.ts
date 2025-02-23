import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@vueuse/nuxt', '@nuxt/icon'],
  vite: {
    plugins: [tailwindcss()],
  },
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
