<template>

<div class="hero bg-accent min-h-screen">
  <div class="hero-content flex flex-col items-center text-center gap-6">
    
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Composant Gestion de l'utilisateur</h1>
    </div>

      <div class="card bg-primary w-96 shadow-sm">
  <div class="card-body items-center text-cente text-base-100">
    <h2 class="card-title">Composant d'affichage des données utilisateur</h2>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</div>

<UserData/>
    
  </div>
</div>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'
import UserData from './UserData.vue';
const lesAmis = ref([
	{
		id: 'UserRegis',
		name: 'Regis',
		age: 69,
	},
]);

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
});
</script>

<style scoped lang="css">
</style>