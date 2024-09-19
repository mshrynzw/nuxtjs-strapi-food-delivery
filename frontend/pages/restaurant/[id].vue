<script setup lang="ts">
import {useQuery} from "@urql/vue"
import CartIndex from '@/components/cart/Index.vue'

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
  <div v-else class="flex flex-row space-x-8">
    <DishList :dishes="data.restaurant.data.attributes.dishes.data" class="basis-2/3"/>
    <CartIndex class="basis-1/3"/>
  </div>
</template>