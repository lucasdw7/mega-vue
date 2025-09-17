<template>

  <div>
    <h1 class="text-3xl font-bold text-primary mb-6 text-center">Une simple requête HTTP Get</h1>
  </div>

  <div>
    <h2 class="text-xl font-semibold text-secondary mb-4">Les Pokémon:</h2>
    <div>

    </div>
  </div>

  <div class="grid gap-2">
    <h2 class="text-xl font-semibold text-secondary mb-4">Météo Toulouse</h2>
    <div class="p-2 rounded bg-base-100 shadow-sm">

    </div>
    <div class="p-2 rounded bg-base-100 shadow-sm">
      
    </div>
    <div class="p-2 rounded bg-base-100 shadow-sm">
      
    </div>
    <div class="p-2 rounded bg-base-100 shadow-sm">
      
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref} from 'vue'

// const props = defineProps({
//   // v-model
//   modelValue: {
//     default: '',
//   },
// });

// const emit = defineEmits({
//   // v-model event with validation
//   'update:modelValue': (value) => value !== null,
// });

// const value = computed({
//   get () {
//     return props.modelValue;
//   },
//   set (value) {
//     emit('update:modelValue', value);
//   },
// });

// const stopWatch = watch(
//   () => props.modelValue, async (_newValue, _oldValue) => {
//     // do something
//   },
//   {
//     immediate: true
//   }
// );

const ApiUtilisateur = ref([])
const loading = ref(true)
const error = ref(null)

async function pokemon () {
  try {
     // appel API
     const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
     if (!response.ok) {
       throw new Error("Erreur lors du chargement des données")
     }
     // stocke les données
    ApiUtilisateur.value = await response.json()
   } catch (err) {
     error.value = err.message
   } finally {
     loading.value = false
   }
}

async function meteo() {
  try {
     // appel API
     const response = await fetch("https://prevision-meteo.ch/services/json/toulouse")
     if (!response.ok) {
       throw new Error("Erreur lors du chargement des données")
     }
     // stocke les données
    ApiUtilisateur.value = await response.json()
   } catch (err) {
     error.value = err.message
   } finally {
     loading.value = false
   }
}
onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>

