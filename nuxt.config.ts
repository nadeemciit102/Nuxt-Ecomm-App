// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nadi Ecomm App",
      meta: [{ name: "Nadi Ecomm", content: "A simple Nuxt Tutorial" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    openWeatherMapKey: process.env.OPEN_WEATHER_MAP_API_KEY,
  },
});
