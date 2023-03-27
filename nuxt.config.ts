// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://staging.mazaady.com/api/',
    },
  },
    modules: ['@nuxtjs/tailwindcss'],
    app:{
      head:{
        link: [
                {rel:'stylesheet',  href:'https://fonts.cdnfonts.com/css/helvetica-neue-lt-std-55'}
        ]
      }
    }
})
