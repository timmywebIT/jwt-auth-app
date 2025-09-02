<template>
  <div class="flex items-center justify-center min-h-screen">
    <router-view></router-view>

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

<style>
body {
  background: #d1bfb0;
}
</style>