<script setup lang="ts">
const searchQuery = defineModel<string>()

const emit = defineEmits(['search'])

const handleSubmit = () => {
  emit('search', searchQuery.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-row items-center space-x-4" data-shade="900">
    <button type="submit" class="btn variant-soft sz-sm intent-primary">Search</button>
    <div class="field">
      <input type="text" class="input variant-mixed sz-md" placeholder="Restaurant name..." v-model="searchQuery">
    </div>
  </form>
</template>