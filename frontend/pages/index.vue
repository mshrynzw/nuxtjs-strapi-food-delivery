<script setup lang="ts">
const searchQuery = ref("")

const handleSearch = (query: string) => {
  searchQuery.value = query
}
</script>

<template>
  <div class="flex flex-col space-y-8">
    <h1 class="text-4xl text-display font-bold lg:text-5xl">Restaurant</h1>
    <RestaurantSearch v-model="searchQuery" @search="handleSearch"/>
    <RestaurantList :searchQuery="searchQuery"/>
  </div>
</template>