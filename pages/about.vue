<template>
  <div>
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorum
      molestiae necessitatibus libero, ipsa excepturi qui assumenda molestias
      sed quo natus tenetur ab reprehenderit quisquam, repellat culpa nihil?
      Ducimus, veritatis?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sit
      laboriosam voluptatum perspiciatis vitae pariatur aliquam recusandae
      cumque dignissimos at, aut dolores officia eius nostrum quibusdam
      perferendis corporis error consequatur?
    </p>
    <!-- <p class="text-2xl">{{ data.msg }}</p> -->
    <p class="text-red-700 mt-4">{{ data }}</p>
    <p class="text-red-700 mt-2">{{ weather }}</p>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/test?name=nadeem", {
//   method: "post",
//   body: { age: 30 },
// });
const { data } = await useFetch("/api/test");
const { data: weather } = await useFetch("/api/openweathermap/weather");
</script>

<style scoped>
h1 {
  font-size: xx-large;
}
/* p {
  margin: 20px 0;
  color: rgb(9, 12, 2);
} */
</style>
