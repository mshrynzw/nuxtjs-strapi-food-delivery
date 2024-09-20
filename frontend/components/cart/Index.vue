<script setup lang="ts">
import type {Dish} from "@/types/dish"
import {useCookie} from "#app"

interface CartCookie {
  items: Dish[];
  total: number;
}

const cartStore = useCartStore()
const cartCookie = useCookie<CartCookie>("cart")
const items = computed(() => cartStore.items.length > 0 ? cartStore.items : cartCookie.value?.items || [])
const total = computed(() => cartStore.total || cartCookie.value?.total || 0)
</script>

<template>
  <div class="card variant-soft max-w-xs" data-shade="900">
    <h3 class="mt-2 text-title text-sm font-medium">Cart</h3>

    <ul>
      <li v-for="item in items" :key="item.id">
        <div>
          <p class="text-sm mt-3">
            {{ item.attributes.name }} x {{ item.attributes.quantity }}
          </p>
          <div class="flex flex-row space-x-2">
            <button class="btn variant-solid sz-xs intent-primary" @click="cartStore.addItem(item)">
              <font-awesome-icon icon="plus"/>
            </button>
            <button class="btn variant-solid sz-xs intent-primary" @click="cartStore.removeItem(item)">
              <font-awesome-icon icon="minus"/>
            </button>
          </div>
        </div>
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