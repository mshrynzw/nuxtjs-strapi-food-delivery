<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const register = async () => {
  try {
    await authStore.register(username.value, email.value, password.value)
    navigateTo('/')
  } catch (e) {
    error.value = '登録に失敗しました。'
  }
}
</script>

<template>
  <form @submit.prevent="register" class="flex-col space-y-4">
    <div>
      <input id="username" v-model="username" type="text" class="input variant-bottomOutlined sz-md" placeholder="Username" required>
    </div>
    <div>
      <input id="email" v-model="email" type="email" class="input variant-bottomOutlined sz-md" placeholder="E-mail" required>
    </div>
    <div>
      <input id="password" v-model="password" type="password" class="input variant-bottomOutlined sz-md" placeholder="Password" required>
    </div>
    <button type="submit" class="btn variant-soft sz-sm intent-primary">Signup</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>