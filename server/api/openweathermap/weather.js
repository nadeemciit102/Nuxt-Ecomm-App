export default defineEventHandler(async () => {
  //const apiKey = "76281adefd1be8ab371c5a756dc5910d";
  const { openWeatherMapKey } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${openWeatherMapKey}`
  );

  return (
    data || "This response is from the /api/openweathermap/weather Endpoint"
  );
});
