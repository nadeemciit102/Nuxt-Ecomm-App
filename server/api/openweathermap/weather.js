export default defineEventHandler(async () => {
 
  const { openWeatherMapKey } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${openWeatherMapKey}`
  );

  return (
    data || "This response is from the /api/openweathermap/weather Endpoint"
  );
});
