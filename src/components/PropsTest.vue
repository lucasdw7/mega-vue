<!-- 📌 Composant HelloWorld.vue
     - Exemple de composant Vue 3 avec <script setup>
     - Utilise `props` + état local réactif (count)
     - Contient un bouton interactif et du contenu de démo
   =========================================================== -->

<template>
  <!-- Affichage des props reçues -->
  <h1>Salut {{ foo }} - {{ username }}</h1>
  <!-- Autre version possible avec l’ancienne déclaration -->
  <!-- <h1>Salut {{ name }} - {{ msg }}</h1> -->

  <!-- Carte avec un bouton interactif -->
  <div class="card">
    <!-- Bouton qui incrémente le compteur -->
    <!-- ⚠ Accessibilité : on pourrait ajouter aria-label pour préciser l'action -->
    <button type="button" @click="count++">
      count is {{ count }}
    </button>

    <p>
      Edit <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <!-- Liens utiles vers la doc Vue et Vite -->
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      create-vue
    </a>, the official Vue + Vite starter
  </p>

  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
    >
      Vue Docs Scaling up Guide
    </a>.
  </p>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>


<script setup>
import { ref } from 'vue'

// ✅ Définition des props
// Ici on attend deux props : "foo" et "username"
// - Props servent à recevoir des données du parent
// - Déclarées via defineProps()
// - ⚠ Bonne pratique : définir aussi les types et valeurs par défaut
// -----------------------------------------------------------

// Ancienne écriture (commentée pour comparaison) :
// defineProps({
//   msg: String,
//   name: String,
// })

// Version simplifiée
const props = defineProps(['foo','username'])

// Exemple debug (désactivé ici) :
// console.log(props.foo)

// -----------------------------------------------------------
// ✅ Etat local réactif
// `ref` permet de créer une variable réactive (ici compteur)
// -----------------------------------------------------------
const count = ref(0)
</script>

<style scoped>
/* Style local au composant (scoped) */
.read-the-docs {
  color: #888; /* texte grisé */
}
</style>
