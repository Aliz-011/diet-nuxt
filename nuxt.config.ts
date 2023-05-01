export default defineNuxtConfig({
  pages: true,
  experimental: {
    payloadExtraction: false,
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'Deen Exercising',
      short_name: 'Deen',
      description: 'web management app',
      theme_color: '#ee5253',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
