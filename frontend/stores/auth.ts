import {defineStore} from "pinia"
import {$fetch} from "ofetch"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(identifier: string, password: string) {

      try {
        const config = useRuntimeConfig()
        const apiBaseUrl = config.public.apiBaseUrl
        const response = await $fetch(`${apiBaseUrl}/api/auth/local`, {
          method: "POST",
          body: {identifier, password},
        })
        this.user = response.user
        this.token = response.jwt
        localStorage.setItem("token", response.jwt)
      } catch (error) {
        console.error("ログインエラー:", error)
        throw error
      }
    },
    async register(username: string, email: string, password: string) {

      try {
        const config = useRuntimeConfig()
        const apiBaseUrl = config.public.apiBaseUrl
        const response = await $fetch(`${apiBaseUrl}/api/auth/local/register`, {
          method: "POST",
          body: {username, email, password},
        })
        this.user = response.user
        this.token = response.jwt
        localStorage.setItem("token", response.jwt)
      } catch (error) {
        console.error("登録エラー:", error)
        throw error
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem("token")
    },
  },
})