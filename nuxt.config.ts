// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Configuración de compatibilidad de Nuxt
  compatibilityDate: '2024-11-01',

  srcDir: 'src/',

  // Habilitar las herramientas de desarrollo en local
  devtools: { enabled: true },

  // 1. Módulos oficiales de Nuxt
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  // 2. Configuración global de la App y SEO (Metadatos principales)
  app: {
    head: {
      title: 'Codifiko | Diseño y Desarrollo Web en Granada',
      htmlAttrs: {
        lang: 'es' // Indica a Google que tu web está en español
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Desarrollo web a medida en Granada. Páginas web ultra rápidas, optimizadas para SEO en Google y diseñadas para digitalizar y hacer crecer tu negocio.' 
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 3. Configuración del servidor de desarrollo de Vite para Docker
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 24678
      }
    }
  }
})