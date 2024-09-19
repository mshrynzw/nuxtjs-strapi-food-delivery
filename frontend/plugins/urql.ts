import {defineNuxtPlugin} from "#app"
import urql, {createClient} from "@urql/vue"
import { cacheExchange, fetchExchange } from '@urql/core'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.apiBaseUrl

  const client = createClient({
    url: `${apiBaseUrl}/graphql`,
    exchanges: [cacheExchange, fetchExchange],
  })

  nuxtApp.vueApp.use(urql, client)
})