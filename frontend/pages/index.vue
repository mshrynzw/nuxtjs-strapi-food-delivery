<template>
  <div class="flex flex-col space-y-8">
    <form class="flex flex-row items-center space-x-4" data-shade="900">
      <button class="btn variant-solid sz-sm intent-primary">Search</button>
      <div class="field">
        <input type='text' class="input variant-mixed sz-md" placeholder="Restaurant name...">
      </div>
    </form>

    <List/>
  </div>
</template>

<script setup lang="ts">
import List from "@/components/restaurant/List.vue"
</script>