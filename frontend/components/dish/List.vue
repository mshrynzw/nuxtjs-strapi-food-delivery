<script setup lang="ts">
import type { Dish } from '@/types/dish'
import {useCartStore} from "~/stores/cart"

interface Props{
  dishes: Dish[]
}

const cartStore = useCartStore()

const props = defineProps<Props>()

const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl
</script>

<template>
  <ul class="flex flex-row space-x-4">
    <li v-for="dish in props.dishes" :key="dish.id">
      <div class="max-w-xs card variant-mixed" data-shade="900">
        <nuxt-img
            :src="`${apiBaseUrl}${dish.attributes.image.data.attributes.url}`"
            :alt="dish.attributes.name"
        />
        <h3 class="mt-2 text-sm font-medium text-title">{{ dish.attributes.name }}</h3>
        <span class="text-caption text-xs">{{ dish.attributes.description }}</span>
        <p class="mt-3 text-sm">{{ dish.attributes.price }}円</p>
        <div class="flex justify-end mt-2 space-x-2">
          <button class="btn variant-solid sz-xs intent-primary" @click="cartStore.addItem(dish)">
            <font-awesome-icon icon="plus"/>
          </button>
          <button class="btn variant-solid sz-xs intent-primary" @click="cartStore.removeItem(dish)">
            <font-awesome-icon icon="minus"/>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>