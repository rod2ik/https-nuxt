// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  devServer: {
    https: {
      key: './myserver+3-key.pem',
      cert: './myserver+3.pem',
    }
  }
})
