export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Mario Hernández Padial',
      titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} · Mario Hernández Padial` : 'Mario Hernández Padial',
      meta: [
        { name: 'description', content: 'Mario Hernández Padial — Web developer & designer, Machine Learning master\'s student.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap' },
      ],
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 24678
      }
    }
  },
})