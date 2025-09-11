<!-- 📌 MINI FICHE : INLINE TEMPLATING & ATTRIBUTE BINDING (Vue 3)

💡 Inline Templating :
- {{ variable }} → affiche du texte uniquement (HTML non interprété)
- v-html="variable" → interprète le HTML contenu dans la variable
⚠️ Risque XSS si le contenu provient d’une source externe

💡 Attribute Binding :
- v-bind:attribut="variable" → lie dynamiquement un attribut HTML à une variable
- Notation raccourcie : :attribut="variable"
Exemple :
<a :href="leLien">Lien dynamique</a>

🚀 Quand les utiliser ?
- {{}} → pour le texte simple ou sécuriser le HTML
- v-html → pour injecter du HTML connu et sûr
- :attribut → pour rendre les attributs HTML réactifs
=========================================================== -->

<!-- 📌 Exemple : Inline Templating & Attribute Binding (Vue 3 - Composition API)

- Inline Templating : afficher du contenu HTML ou texte via `{{}}` ou `v-html`
- Attribute Binding : lier dynamiquement des attributs HTML à des variables réactives
=========================================================== -->

<template>
  <!-- ===========================================================
       Section : Inline Templating
       - {{}} → interpolation de texte uniquement (HTML non interprété)
       - v-html → permet d’injecter du HTML depuis une variable
       ⚠️ Attention : v-html peut introduire des risques XSS si le contenu n’est pas sûr
     =========================================================== -->
  <div class="bg-primary-subtle">
    <h5>Inline Templating Mode : Composition</h5>

    <!-- String interpolation : le HTML est affiché tel quel, non interprété -->
    <p class="text-center">{{ unTemplateLivre }}</p>

    <!-- Directive v-html : interprète le HTML contenu dans la variable -->
    <div v-html="unTemplateLivre" class="text-center"></div>
  </div>
  
  <!-- ===========================================================
       Section : Attribute Binding
       - Permet de lier dynamiquement des attributs HTML à une variable
       - v-bind:attribut ou notation raccourcie : :attribut
     =========================================================== -->
  <div>
    <h5>Attribute Binding Mode : Composition</h5>

    <!-- Syntaxe complète : v-bind -->
    <a v-bind:href="leLien" class="text-center">LIEN DYNAMIQUE</a>

    <!-- Notation raccourcie : : -->
    <a :href="leLien" class="text-center">LIEN DYNAMIQUE</a>
  </div>
</template>

<script setup lang='js'>
/**
 * Script setup Vue 3
 * - unTemplateLivre : string contenant du texte ou du HTML
 * - leLien : string utilisée pour binder dynamiquement l'attribut href
 */
import { ref } from 'vue'

// Contenu HTML à afficher avec v-html
const unTemplateLivre = ref('<h1>Les mémoires de Steven Seagal</h1>')

// Lien dynamique pour lier l'attribut href
const leLien = ref('https://www.google.com')
</script>

<style scoped lang="css">
/* Aucun style custom nécessaire, DaisyUI/Tailwind gèrent la mise en forme */
</style>
