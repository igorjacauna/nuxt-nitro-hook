// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'azure-functions',
    // hooks: {
    //   compiled: () => {
    //     console.log('\n\n\n ######## My hook in nuxt.config.ts ######## \n\n\n')
    //   }
    // }
  }
})
