export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vercel/analytics/nuxt'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Mario Hernández Padial — Web Developer in Padul, Granada',
      titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} · Mario Hernández Padial` : 'Mario Hernández Padial — Web Developer in Padul, Granada',
      meta: [
        { name: 'description', content: 'Mario Hernández Padial — web developer & designer based in Padul, Granada, Spain. Vue & Nuxt projects, freelance work, and a growing focus on Machine Learning.' },
        { name: 'theme-color', content: '#171412' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Mario Hernández Padial' },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mario Hernández Padial' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://codifiko.vercel.app/img/profile.jpg' },

        { name: 'twitter:card', content: 'summary' },

        ...(process.env.NUXT_GOOGLE_SITE_VERIFICATION
          ? [{ name: 'google-site-verification', content: process.env.NUXT_GOOGLE_SITE_VERIFICATION }]
          : []),
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Archivo+Black&display=swap' },
        { rel: 'preload', href: '/img/herovid.mp4', as: 'video', type: 'video/mp4' },

        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
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