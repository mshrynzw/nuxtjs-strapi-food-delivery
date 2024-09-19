<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const identifier = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    await authStore.login(identifier.value, password.value)
    navigateTo('/')
  } catch (e) {
    error.value = 'ログインに失敗しました。'
  }
}
</script>

<template>
  <form @submit.prevent="login" class="flex-col space-y-4">
    <div>
      <input id="identifier" v-model="identifier" type="email" class="input variant-bottomOutlined sz-md" placeholder="E-Mail" required>
    </div>
    <div>
      <input id="password" v-model="password" type="password" class="input variant-bottomOutlined sz-md" placeholder="Password" required>
    </div>
    <button type="submit" class="btn variant-soft sz-sm intent-primary">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>