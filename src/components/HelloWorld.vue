<!--
=========================================
Mini Fiche : Composant HelloWorld.vue
=========================================
Objectif :
- Exemple de composant Vue 3 avec Composition API et props.
- Démonstration du binding réactif avec ref et interpolation {{ }}.
- Interaction avec un bouton pour modifier une variable réactive.
- Bonne pratique : scoped CSS pour limiter les styles à ce composant.

Points clés :
- `defineProps` : déclaration des props reçues du parent (ici msg de type String).
- `ref()` : variable réactive locale (ici count).
- `@click` : écouteur d’événement pour incrémenter count.
- `scoped` CSS : évite que les styles impactent d’autres composants.
-->

<script setup>
import { ref } from "vue";

// ⚡ Déclaration des props du composant
defineProps({
  msg: String, // message reçu du parent
});

// ⚡ Déclaration d'une variable réactive locale
const count = ref(0); // valeur initiale 0
</script>

<template>
  <!-- Affichage du message reçu via props -->
  <h1>{{ msg }}</h1>

  <!-- Carte contenant le bouton interactif -->
  <div class="card">
    <!-- Bouton qui incrémente count au clic -->
    <button type="button" @click="count++">
      count is {{ count }}
    </button>

    <!-- Instructions pour éditer le composant (HMR) -->
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <!-- Liens utiles pour apprendre Vue + Vite -->
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

  <!-- Petit message stylisé -->
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
/* Style limité à ce composant */
.read-the-docs {
  color: #888; /* gris clair pour le texte informatif */
}
</style>