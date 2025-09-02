<template>
  <div>
    <div class="flex justify-center mb-4">
      <RegisterIcon></RegisterIcon>
    </div>
    <div>
      <input type="text" placeholder="Введите имя">
    </div>
    <div>
      <input type="email" placeholder="Введите email">
    </div>
    <div>
      <input type="password" placeholder="Введите пароль">
    </div>
    <div class="flex justify-center mt-4">
      <RegisterButton>Создать</RegisterButton>
    </div>
  </div>
</template>

<script setup>
import RegisterButton from "@/components/RegisterItems/RegisterButton.vue";
import RegisterIcon from "@/components/RegisterItems/RegisterIcon.vue";
</script>

<style scoped>
input {
  background-color: #fafafa;
  margin: 0.4em auto;
  padding: 0.6em 0.6em;
  border-radius: 0.8em;
}
</style>