<script setup lang="ts">
import {useQuery} from "@urql/vue"

const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl

const route = useRoute()
const restaurantId = route.params.id

const {data, fetching, error} = useQuery({
  query: `
    query($id: ID!) {
      restaurant(id: $id) {
        data {
          attributes {
            dishes {
              data {
                id
                attributes {
                  name
                  description
                  price
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
        }
      }
    }
  `,
  variables: {id: restaurantId}
})
</script>

<template>
  <div v-if="fetching">読み込み中...</div>
  <div v-else-if="error">エラー: {{ error.message }}</div>
  <ul v-else class="flex flex-row space-x-4">
    <li v-for="dish in data.restaurant.data.attributes.dishes.data" :key="dish.id">
      <div class="max-w-xs card variant-mixed" data-shade="900">
        <nuxt-img
            :src="`${apiBaseUrl}${dish.attributes.image.data.attributes.url}`"
            :alt="dish.attributes.name"
        />
        <h3 class="mt-2 text-sm font-medium text-title">{{ dish.attributes.name }}</h3>
        <span class="text-caption text-xs">{{ dish.attributes.description }}</span>
        <p class="mt-3 text-sm">{{ dish.attributes.price }}円</p>
      </div>
    </li>
  </ul>
</template>