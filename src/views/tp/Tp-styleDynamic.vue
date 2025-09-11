<template>
  <h1 class="text-5xl font-bold pb-12">Tp Style dynamique</h1>

  <div class="p-8 flex flex-col">

  <input type="text" placeholder="Hello ou World" class="input input-primary" v-model="textInput" />

  <h2 class="text-xl font-bold" :class="choixTexte" v-show="AfficherTitre">Mon titre dynamique</h2>

  <input type="text" placeholder="Choix de la couleur" class="input input-secondary" v-model="colorInput" />

  <h3 class="text-xl font-bold mb-6 p-2" :style="{ backgroundColor: colorInput }">Mon titre en couleurs dynamique</h3>

  </div>

  <button class="btn btn-warning" @click="toggleTitle">
    {{ AfficherTitre ? "Masquer" : "Afficher" }}Affichage Titre
  </button>

</template>

<script setup lang="js">

import { ref, computed } from 'vue'

const textInput = ref("")

const colorInput = ref("")

const AfficherTitre = ref(true)

const choixTexte = computed(() => {
  if (textInput.value === "hello") {
    return "maClasseHello"
  } else if (textInput.value === "world") {
    return "maClasseWorld"
  }
  return ""
})

function toggleTitle() {
  AfficherTitre.value = !AfficherTitre.value
}
</script>

<style scoped lang="css">
.maClasseHello {
  color: red;
}

.maClasseWorld {
  color: blue;
}
</style>
