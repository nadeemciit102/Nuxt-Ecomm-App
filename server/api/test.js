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
  
  const { data } = await $fetch("https://jsonplaceholder.typicode.com/todos/1"); //https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=

  return data || "Your API is Unable to Fetch data. Please check later...";
});
