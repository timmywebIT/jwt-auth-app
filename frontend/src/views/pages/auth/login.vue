<template>
  <div>
    <div class="flex justify-center mb-4">
      <FormIcon></FormIcon>
    </div>
    <div>
      <FormInput v-model="auth.user.email" type="email" placeholder="Введите email"></FormInput>
    </div>
    <div>
      <FormInput v-model="auth.user.password" type="password" placeholder="Введите пароль"></FormInput>
    </div>
    <div  class="flex justify-center mt-4">
      <FormButton @click="auth.loginUser()">Войти</FormButton>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/auth.js";
import FormInput from "@/components/FormItems/FormInput.vue";
import FormIcon from "@/components/FormItems/FormIcon.vue";
import FormButton from "@/components/FormItems/FormButton.vue";

const auth = useAuthStore()

</script>

<style scoped>

</style>