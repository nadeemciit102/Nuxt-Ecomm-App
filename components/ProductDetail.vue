<template>
  <div class="flex">
    <img class="h-auto max-w-xl" :src="product.image" alt="image thumb" />
    <div class="flex flex-col justify-start p-12 leading-normal">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ product.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ product.description }}
      </p>
      <span class="text-3xl pb-4 font-bold text-gray-900 dark:text-white"
        >Price: {{ product.price }} $</span
      >
      <!-- <div class="w-60">
        <p
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <i class="material-icons">add_shopping_cart</i> add to cart
        </p>
      </div> -->
      <button class="btn flex mr-2 max-w-fit">
        <i class="material-icons">add_shopping_cart</i>
        <span class="text-lg ml-4 mr-4">Add to cart</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
