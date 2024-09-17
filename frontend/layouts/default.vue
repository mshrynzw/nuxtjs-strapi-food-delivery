<template>
  <div class="bg-white dark:bg-gray-950">
    <Header/>
    <div class="overflow-hidden">
      <section class="relative">
        <div class="relative flex justify-center py-24 lg:py-28">
          <slot/>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/Header.vue"
</script>