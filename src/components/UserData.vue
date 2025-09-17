<template>

<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-title text-xl font-bold">Formulaire d'édition</legend>

  <label class="label">Votre nom </label>
  <input type="name" class="input" placeholder="Entrez votre nom" v-model = "nameUser"/>

  <label class="label">Votre âge</label>
  <input type="age" class="input" placeholder="Entrez votre âge" v-model = "ageUser" />

  <button class="btn btn-primary mt-4" @:click="add">Mettre à jour</button>
</fieldset>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const nameUser = ref("");
const ageUser = ref("");

const emit = defineEmits(['addUser'])

function add(){
    emit('addUser',{
        name:nameUser.value,
        age:ageUser.value,
    }
    )
}
</script>

<style scoped lang="css">
</style>

<!-- Correction -->

<!-- <template>
    <section class="flex justify-center my-6">
        <form @submit.prevent="submitData" class="card w-full max-w-md bg-base-200 shadow-xl p-6">
            <h2 class="text-xl font-bold mb-4">Composant Formulaire d'édition 📝</h2>

            <!-- Champ Nom 
            <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Votre nom</span>
                </label>
                <input v-model="enteredName" type="text" placeholder="Entrez votre nom"
                    class="input input-bordered input-primary w-full" />
            </div>

            <!-- Champ Âge 
            <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Votre âge</span>
                </label>
                <input v-model="enteredAge" type="number" placeholder="Entrez votre âge"
                    class="input input-bordered input-primary w-full" />
            </div>

            <!-- Bouton 
            <div class="form-control mt-6">
                <button class="btn btn-primary w-full">Mettre à jour</button>
            </div>
        </form>
    </section>
</template>

<script setup>
// import { ref } from 'vue'

// Champs du formulaire
const enteredName = ref('')
const enteredAge = ref('')

const emit = defineEmits(['set-data'])
// Émission des données au parent
function submitData() {
    // on émet l’évènement
    // ⚠️ En Composition API, on définit emit :
    emit('set-data', enteredName.value, enteredAge.value)
}

// On définit l'emit avec defineEmits
</script>

<style scoped>
/* Si tu veux du style custom supplémentaire */
</style> -->