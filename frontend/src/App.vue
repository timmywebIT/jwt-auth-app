<template>
  <div>
    <h1>Форма</h1>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Имя" />
      <button type="submit">Отправить</button>
    </form>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const response = ref('')

function submitForm() {
  axios.post('http://127.0.0.1:8000/api/contact', { name: name.value })
      .then(res => response.value = `${res.data.message} Имя: ${res.data.name}`)
      .catch(err => response.value = 'Ошибка')
}
</script>