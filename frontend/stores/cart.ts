import {defineStore} from "pinia"
import {useCookie} from "#app"
import type {Dish} from "@/types/dish"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Dish[],
    total: 0,
  }),

  actions: {
    addItem(item: Dish) {
      const newItem = this.items.find((i) => i.id === item.id)

      if (!newItem) {
        item.attributes.quantity = 1
        this.items.push(item)

      } else {
        this.items = this.items.map((i) =>
          i.id === newItem.id
            ? {
              ...i,
              attributes: {
                ...i.attributes,
                quantity: i.attributes.quantity + 1
              }
            }
            : i
        )
      }

      this.total += item.attributes.price
      const cartCookie = useCookie("cart", {
        maxAge: 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
        httpOnly: false,
        sameSite: "strict"
      })
      cartCookie.value = this.items
    },

    removeItem(item: Dish) {
      const newItem = this.items.find((i) => i.id === item.id)

      if (newItem.attributes.quantity > 1) {
        this.items = this.items.map((i) =>
          i.id === newItem.id
            ? {
              ...i,
              attributes: {
                ...i.attributes,
                quantity: i.attributes.quantity - 1
              }
            }
            : i
        )
      } else {
        const index = this.items.findIndex((i) => i.id === newItem.id)
        this.items.splice(index, 1)
      }

      this.total -= item.attributes.price
      const cartCookie = useCookie("cart", {
        maxAge: 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
        httpOnly: false,
        sameSite: "strict"
      })
      cartCookie.value = this.items
    }
  }
})