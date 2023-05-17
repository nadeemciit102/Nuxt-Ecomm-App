<template>
  <ProductDetail :product="product" />
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}
</script>

<style scoped>
p {
  margin: 20px 0;
}
</style>
