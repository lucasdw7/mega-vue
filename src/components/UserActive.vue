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

<!-- <UserData/> -->
    
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
        required: true,
        default: 'regis',
        validator: (value) => {
          return value.length > O
        }
    },
    age: {
        type: Number,
        required: true,
        default: 79
    },
});
</script>

<style scoped lang="css">
</style>

<!-- Correction  -->

<!-- <template>
  <div class="card bg-primary text-primary-content shadow-xl w-80 mx-auto my-4">
    <h2 class="text-2xl font-bold mb-6 text-center">
                Composant affichage des données utilisateur
            </h2>
    <div class="card-body items-center text-center">
      <h4 class="card-title text-xl font-bold">{{ username }}</h4>
      <p class="text-lg">{{ userage }} ans</p>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

// ✅ On déclare les props en Composition API
const props = defineProps({
  username: {
    type: String,
    required: true,
    // default: 'John Doe',
    // validator: (value) => {
    //   return value.length > 0
    // }
  },
  userage: {
    type: Number,
    required: true, 
    // default: 0
  }
})
</script>

<style scoped>
/* Tu peux ajouter du style perso ici si besoin */
</style> -->