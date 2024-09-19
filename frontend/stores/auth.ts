import {defineStore} from "pinia"
import {$fetch} from "ofetch"
import {useCookie} from "#app"

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

        const tokenCookie = useCookie("token", {
          maxAge: 60 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          httpOnly: false,
          sameSite: "strict"
        })
        tokenCookie.value = response.jwt
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

        const tokenCookie = useCookie("token", {
          maxAge: 60 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          httpOnly: false,
          sameSite: "strict"
        })
        tokenCookie.value = response.jwt
      } catch (error) {
        console.error("登録エラー:", error)
        throw error
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem("token")
      const tokenCookie = useCookie("token")
      tokenCookie.value = null
    },
  },
})