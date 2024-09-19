<script setup lang="ts">
import type {Dish} from "@/types/dish"

const cartStore = useCartStore()
const items = computed(() => cartStore.items as Dish[])
const total = computed(() => cartStore.total as number)

</script>

<template>
  <div class="card variant-soft max-w-xs" data-shade="900">
    <h3 class="mt-2 text-title text-sm font-medium">Cart</h3>

    <ul>
      <li v-for="item in items" :key="item.id">
        <p class="text-sm mt-3">
          {{ item.attributes.name }} x {{ item.attributes.quantity }}
          <button class="btn variant-solid sz-sm intent-primary" @click="cartStore.addItem(item)">+</button>
          <button class="btn variant-solid sz-sm intent-primary" @click="cartStore.removeItem(item)">-</button>
        </p>
      </li>
    </ul>

    <div class="mt-16">
      <div v-if="total > 0">
        <div class=" text-title text-xs font-medium">{{ total.toString() }}円</div>

        <div class="mt-3 progress sz-sm relative">
          <div class="progress-indicator bg-gradient-to-r from-primary-600 to-accent-500 w-[60%]"></div>
        </div>
        <div class="w-[60%] blur-sm h-6 bg-gradient-to-b from-accent-500/10 to-transparent"></div>
      </div>
    </div>
  </div>
</template>