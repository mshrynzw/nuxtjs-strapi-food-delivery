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
  <form @submit.prevent="login">
    <div>
      <label for="identifier">メールアドレス:</label>
      <input id="identifier" v-model="identifier" type="email" required>
    </div>
    <div>
      <label for="password">パスワード:</label>
      <input id="password" v-model="password" type="password" required>
    </div>
    <button type="submit">ログイン</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>