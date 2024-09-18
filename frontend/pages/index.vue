<script setup lang="ts">
const searchQuery = ref('')

const handleSearch = (query: string) => {
  searchQuery.value = query
}
</script>

<template>
  <div class="flex flex-col space-y-8">
    <RestaurantSearch v-model="searchQuery" @search="handleSearch" />
    <RestaurantList :searchQuery="searchQuery" />
  </div>
</template>