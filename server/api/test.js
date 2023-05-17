// export default defineEventHandler(async (event) => {
//   // Handle Qurey Prams
//   const { name } = getQuery(event);
//   // Handle Post Request Body
//   const { age } = await readBody(event);
//   return {
//     msg: `Hello, ${name} you are ${age} years old`,
//   };
// });
export default defineEventHandler(async () => {
  //const apiKey = "76281adefd1be8ab371c5a756dc5910d";
  const { data } = await $fetch("https://jsonplaceholder.typicode.com/todos/1"); //https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=76281adefd1be8ab371c5a756dc5910d

  return data || "Your API is Unable to Fetch data. Please check later...";
});
