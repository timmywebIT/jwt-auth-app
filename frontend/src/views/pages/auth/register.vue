<template>
  <div>
    <div class="flex justify-center mb-4">
      <FormIcon></FormIcon>
    </div>
    <div>
      <FormInput type="text" placeholder="Введите имя" v-model="auth.user.name"></FormInput>
    </div>
    <div>
      <FormInput type="email" placeholder="Введите email" v-model="auth.user.email"></FormInput>
    </div>
    <div>
      <FormInput type="password" placeholder="Введите пароль" v-model="auth.user.password"></FormInput>
    </div>
    <div  class="flex justify-center mt-4">
      <FormButton @click="auth.createUser()" >Создать</FormButton>
    </div>
  </div>
</template>

<script setup>
import FormButton from "@/components/FormItems/FormButton.vue";


import FormInput from "@/components/FormItems/FormInput.vue";

import {useAuthStore} from "@/stores/auth.js";
import FormIcon from "@/components/FormItems/FormIcon.vue";

const auth = useAuthStore()
</script>

<style scoped>

</style>