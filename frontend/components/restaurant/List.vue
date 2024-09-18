<script lang="ts" setup>
import {useQuery} from "@urql/vue"
import { defineProps } from 'vue'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl

const {data, fetching, error} = useQuery({
  query: `
    {
      restaurants{
        data {
          id
          attributes{
            name
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `
})

const restaurants = computed(() => {
  if (!data.value || !data.value.restaurants || !data.value.restaurants.data) {
    return []
  }
  return data.value.restaurants.data.filter((restaurant: Restaurant) => 
    restaurant.attributes.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})
</script>

<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <ul v-else class="flex flex-row space-x-4">
    <li v-for="restaurant in restaurants">
      <div class="max-w-xs card variant-mixed" data-shade="900">
        <nuxt-img :src="`${apiBaseUrl}${restaurant.attributes.image.data[0].attributes.url}`" :alt="restaurant.attributes.name" />
        <h3 class="mt-2 text-sm font-medium text-title">{{ restaurant.attributes.name }}</h3>
        <p class="mt-3 text-sm">{{ restaurant.attributes.description[0].children[0].text }}</p>
      </div>
    </li>
  </ul>
</template>
