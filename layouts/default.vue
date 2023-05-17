<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-5 font-sans text-xl text-slate-950">
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/products" class="btn">Products</NuxtLink>
      </nav>
    </header>
  </div>
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: #12b448;
}
</style>
