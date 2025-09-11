<!-- 📌 Mini fiches Databinding - Vue 3 (Mode Composition API)

💡 Objectif :
- Comprendre comment lier les données du script avec le template

1️⃣ Interpolation (affichage direct)
   - {{ variable }}
   - Exemple : <p>{{ nameUser }}</p>

2️⃣ Attributs dynamiques → v-bind (ou raccourci :)
   - Sert à relier une **donnée réactive** à un attribut HTML
   - Syntaxe : v-bind:attribut="variable"
   - Raccourci : :attribut="variable"
   - Exemple :
       <img v-bind:src="imageUser" :alt="nameUser" />
       <a :href="lienProfil">Profil</a>

   👉 Permet de :
     - Changer dynamiquement le src d’une image
     - Modifier une classe CSS
     - Mettre à jour un id, href, style, disabled, etc.
   ⚠️ Bien écrire l’attribut exact HTML (src, alt, href...)

3️⃣ Liaison avec formulaires
   - :value="variable" → lecture seule
   - v-model="variable" → liaison bidirectionnelle
   - Exemple : <input v-model="nameUser" />

4️⃣ Appels de fonctions dans le template
   - {{ maFonction() }}
   - Exemple : <p>Âge + 10 = {{ augmenterAge() }}</p>

⚠️ Bonnes pratiques :
- Toujours utiliser `ref()` ou `reactive()` pour créer des données réactives
- Dans le script : accéder à la valeur avec `.value`
- Préférer `v-model` aux simples `:value` si on veut modifier l’input

=========================================================== -->

<!-- 📌 TP Databinding - Mode Composition API (Vue 3)

💡 Objectif :
- Démontrer le data binding dans Vue 3
  - Interpolation avec {{ }}
  - Binding d’attributs avec v-bind ou :
  - Affichage des fonctions dans le template
- Utilisation de ref() et fonctions pour manipuler les données

⚠️ Bonnes pratiques :
- Utiliser ref() pour la réactivité
- Accéder aux valeurs avec `.value` dans le script
- Toujours vérifier les attributs HTML (ex: `src` et non `scr`)
=========================================================== -->

<template>
  <!-- Carte utilisateur -->
  <div class="card bg-base-100 w-96 shadow-sm">

    <!-- Image utilisateur -->
    <figure>
      <!-- ✅ correction src -->
      <img v-bind:src="imageUser" :alt="nameUser"/>
    </figure>

    <!-- Corps de la carte -->
    <div class="card-body">

      <!-- Titre et badges -->
      <h2 class="card-title">
        <!-- ✅ correction : name → nameUser -->
        <h1>{{ nameUser }}</h1>
        <!-- ✅ correction : ageUser est un ref -->
        <div class="badge badge-secondary">{{ ageUser }} ans</div>
      </h2>

      <!-- Exemple d’attribut value (démo databinding) -->
      <input type="text" :value="nameUser" class="input input-bordered w-full"/>

      <!-- Tags / badges -->
      <div class="card-actions justify-end mt-4">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>

      <!-- Exemple d’appel fonction dans le template -->
      <p class="mt-4 text-sm">Dans 10 ans : {{ futurAge() }} ans</p>

      <!-- Nombre favori -->
      <p class="mt-2 text-sm">Nombre fétiche : {{ favNumber }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

// ✅ réactif avec ref()
const nameUser = ref('Marius')
const ageUser = ref(48)
const favNumber = ref(Math.floor(Math.random() * 100)) 
const imageUser = ref('https://via.placeholder.com/150')

// Fonction pour calculer âge futur
const futurAge = () => {
  return ageUser.value + 10
}
</script>

<style scoped>
/* Pas de style custom nécessaire, DaisyUI/Tailwind gèrent déjà la carte */
</style>
