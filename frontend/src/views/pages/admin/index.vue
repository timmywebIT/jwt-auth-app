<template>
<h1>Привет, ты админ !</h1>
<FormButton @click="auth.logoutUser(router)">Выйти</FormButton>
</template>

<script setup>
import FormButton from "@/components/FormItems/FormButton.vue";
import {useAuthStore} from "@/stores/auth.js";
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter();

</script>


<style scoped>

</style>