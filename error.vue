<template>
  <div class="flex-container ml-7 mt-7">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <p class="mb-6">Opss. . .</p>
    <button class="btn" @click="handleClearError">Go to Home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
