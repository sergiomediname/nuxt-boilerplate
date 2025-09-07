// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/supabase'],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/login/',
      callback: '/confirm/',
      include: ['/protected(/*)?']
    }
  }
})
