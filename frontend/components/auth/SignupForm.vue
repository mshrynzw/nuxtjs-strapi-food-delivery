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
  <form @submit.prevent="register">
    <div>
      <label for="username">ユーザー名:</label>
      <input id="username" v-model="username" type="text" required>
    </div>
    <div>
      <label for="email">メールアドレス:</label>
      <input id="email" v-model="email" type="email" required>
    </div>
    <div>
      <label for="password">パスワード:</label>
      <input id="password" v-model="password" type="password" required>
    </div>
    <button type="submit">登録</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>