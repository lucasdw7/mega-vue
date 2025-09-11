<!-- ===========================================================
     💡 Exemple : Text Interpolation Mode (Vue 3 - Composition API)
     - Démonstration des différentes interpolations possibles
       (string, booléen, nombre, tableau, objet, fonctions)
     - Utilise Tailwind + DaisyUI pour la mise en page
     =========================================================== -->
<template>
  <div class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300">
    <!-- Titre principal -->
    <h5 class="text-lg font-semibold text-center mb-6 text-primary">
      Text Interpolation Mode : Composition
    </h5>
    
    <!-- Grille responsive (1 colonne sur mobile, 2 sur desktop) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <!-- Exemple 1 : Variable texte -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable texte</h6>
        <!-- Affiche la valeur de `unLivre` -->
        <p class="text-center p-2 bg-base-100 rounded">{{ unLivre }}</p>
      </div>
      
      <!-- Exemple 2 : Variable booléenne -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable booléenne</h6>
        <!-- Affiche true/false -->
        <p class="text-center p-2 bg-base-100 rounded">{{ isOnline }}</p>
      </div>
      
      <!-- Exemple 3 : Variable numérique -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable numérique</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unNombre }}</p>
      </div>
      
      <!-- Exemple 4 : Tableau complet -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Tableau complet</h6>
        <!-- ⚠️ Bonne pratique : utiliser v-for pour lister les éléments
             Ici affichage brut de l'array -->
        <p class="text-center p-2 bg-base-100 rounded">{{ unTableau }}</p>
      </div>
      
      <!-- Exemple 5 : Premier élément du tableau -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Premier élément du tableau</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unTableau[0] }}</p>
      </div>
      
      <!-- Exemple 6 : Objet complet -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Objet complet</h6>
        <!-- ⚠️ L’affichage direct d’un objet renverra [object Object].
             Bonne pratique : sérialiser avec JSON.stringify pour debug -->
        <p class="text-center p-2 bg-base-100 rounded text-xs font-mono">{{ unObjet }}</p>
      </div>
      
      <!-- Exemple 7 : Accès propriété avec notation point -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété name (notation point)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.name }}</p>
      </div>
      
      <!-- Exemple 8 : Accès propriété avec notation bracket -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété name (notation bracket)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet['name'] }}</p>
      </div>
      
      <!-- Exemple 9 : Propriété tel -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété tel</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.tel }}</p>
      </div>
      
      <!-- Exemple 10 : Propriété tel (dupliquée pour démo) -->
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété tel (dupliquée)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.tel }}</p>
      </div>
      
      <!-- Exemple 11 : Appel de fonction dans le template -->
      <div class="bg-base-200 p-4 rounded-lg col-span-full">
        <!-- ⚠️ Appeler une fonction dans le template provoque un recalcul à chaque re-render
             Bonne pratique → utiliser computed si dépend d’une variable -->
        <h6 class="font-medium text-sm opacity-70 mb-2">{{ afficherLivreRandom() }}</h6>
        <p class="text-center p-3 bg-success text-success-content rounded font-mono">
          {{ fonctionTest() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang='js' setup>
/**
 * Script Setup - Vue 3
 * Déclaration de variables réactives et fonctions simples
 * - Démonstration d’interpolation de différents types de données
 */

import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import { ref } from 'vue'

// String réactive
const unLivre = ref('Les mémoires de Steven Seagal')

// Tableau réactif
const unTableau = ref(['du texte', 99])

// Nombre réactif
const unNombre = ref(1234567890)

// Booléen réactif
const isOnline = ref(false)

// Objet réactif
const unObjet = ref({
  name: 'COOL',
  tel: '060503030',
})

// Fonction simple → renvoie toujours "Hello World"
const fonctionTest = () => {
  return 'Hello World'
}

// Fonction qui renvoie un titre de livre aléatoire
// ⚠️ Mauvaise pratique si appelée dans le template → préférer computed
const afficherLivreRandom = () => {
  const nombreRandom = Math.random()
  if (nombreRandom > 0.5) {
    return 'Le livre de La Jungle'
  } else {
    return 'Le Livre de boba Fet'
  }
}
</script>

<style scoped lang="css">
/* Pas de styles additionnels - DaisyUI + Tailwind suffisent ici */
</style>
