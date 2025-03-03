// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/main.css' 
  ],
  ssr: true,
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title:"YouTube",
    
    },
    
  },

  devtools: { enabled: true }
})
