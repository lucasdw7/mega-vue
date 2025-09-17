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