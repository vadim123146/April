export default defineNuxtConfig({
  css: ['@/styles/main.scss'],
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
  modules: ['@pinia/nuxt'],
});

