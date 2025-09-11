<!-- 📌 MINI FICHE : EVENT BINDING (Vue 3 - Composition API)

💡 Rôle :
- Permet de réagir aux actions de l'utilisateur (clavier, souris, formulaire…)
- Utilise la syntaxe `v-on:event` ou son raccourci `@event`

🛠️ Syntaxe :
<!-- Souris 
<button @click="maFonction()">Cliquez ici</button>

<!-- Clavier 
<input @keyup="maFonction($event)" />
<input @keyup.esc="maFonctionEsc($event)" />

⚙️ Points importants :
- Les modificateurs d'événements permettent de filtrer ou transformer l'événement :
  .esc, .enter, .prevent, .stop, .middle, .right …
- L'objet `event` est disponible si nécessaire : `@event="maFonction($event)"`
- Préférer v-model pour la saisie de texte en production

🚀 Quand l’utiliser ?
- Pour lancer une action en réponse à un événement utilisateur
- Pour gérer la logique interactive d'un composant
=========================================================== -->

<!-- 📌 TP Event Binding Mode : Composition API (Vue 3)

💡 Objectif :
- Démonstration des différents types d’événements en Vue 3
  (keyup simple, keyup avec modificateur .esc, click)
- Utilisation de `ref()` pour stocker les valeurs réactives
- Affichage en temps réel des inputs et actions utilisateur

⚠️ Bonnes pratiques :
- Préférer v-model pour la liaison d'input en production
- Utiliser modificateurs d'événements (.esc, .prevent, .stop) pour simplifier la logique
- Éviter alert() en production → utiliser modaux ou notifications
=========================================================== -->

<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl rounded-box p-6">
      <h5 class="card-title text-2xl font-bold mb-4">TP Event Binding Mode : Composition</h5>

      <!-- ===============================
           Section : Keyup simple
           - écoute chaque frappe de clavier
           - met à jour la variable `leInput` en temps réel
      ================================ -->
      <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
        <h6 class="text-xl font-semibold mb-2"><code>@keyup</code></h6>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Saisissez du texte</span>
          </div>
          <input 
            type="text" 
            placeholder="Tapez ici..." 
            class="input input-bordered w-full"
            @keyup="afficherInput($event)"
          />
        </label>
        <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
          <p>Le contenu de l'input est : <span class="badge badge-accent">{{ leInput }}</span></p>
        </div>
      </div>

      <!-- ===============================
           Section : Keyup avec modificateur .esc
           - déclenché uniquement quand la touche Échap est relâchée
           - met à jour la variable `leInputConfirm`
      ================================ -->
      <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
        <h6 class="text-xl font-semibold mb-2"><code>@keyup.esc</code></h6>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Tapez et appuyez sur 'Échap'</span>
          </div>
          <input 
            type="text" 
            placeholder="Tapez et appuyez sur 'Esc'" 
            class="input input-bordered w-full"
            @keyup.esc="afficherInputConfirm($event)"
          />
        </label>
        <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
          <p>La valeur confirmée par 'Échap' est : <span class="badge badge-primary">{{ leInputConfirm }}</span></p>
        </div>
      </div>

      <!-- ===============================
           Section : Click event
           - déclenche une alerte
           - méthode `afficherAlerte` appelée lors du click
      ================================ -->
      <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
        <h6 class="text-xl font-semibold mb-2"><code>@click</code></h6>
        <button 
          class="btn btn-error text-white"
          @click="afficherAlerte"
        >
          Afficher une alerte
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

// Variables réactives pour stocker le contenu des inputs
const leInput = ref('')
const leInputConfirm = ref('')

// Méthode pour mettre à jour `leInput` à chaque frappe
function afficherInput(event) {
    leInput.value = event.target.value
}

// Méthode pour mettre à jour `leInputConfirm` uniquement avec touche Échap
function afficherInputConfirm(event) {
    leInputConfirm.value = event.target.value
}

// Méthode pour afficher une alerte (⚠️ à remplacer en prod)
function afficherAlerte() {
    alert('Alerte !')
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind → pas de CSS custom nécessaire */
</style>
