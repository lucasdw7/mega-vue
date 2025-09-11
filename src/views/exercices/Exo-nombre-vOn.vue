<!-- 📌 MINI FICHE : EVENT BINDING (Vue 3 - Composition API)

💡 Rôle :
- Permet de réagir aux événements utilisateur (clic, souris, clavier, etc.)
- Utilise la syntaxe `v-on:event` ou son raccourci `@event`

🛠️ Syntaxe :
<button @click="maFonction()">Cliquez ici</button>
<button v-on:click.right="maFonctionRight()">Clic droit</button>
<button @click.middle="maFonctionMiddle()">Clic molette</button>

⚙️ Points importants :
- `event` peut être normal (`click`) ou spécifique (`click.right`, `click.middle`)
- L’objet `event` est disponible si nécessaire : `@click="maFonction($event)"`
- Pour des événements complexes, vérifier la compatibilité navigateur (clic molette/droit)

🚀 Quand l’utiliser ?
- Pour toutes les interactions utilisateur qui déclenchent une action
- Si la logique dépend d’un événement → method ou composition API function
=========================================================== -->


<!-- 📌 Exemple : Event Binding (Vue 3 + Composition API)
- Démonstration de la gestion des événements souris (clic droit, clic molette).
- Utilisation de `ref()` pour créer une variable réactive.
- Les fonctions `reduire` et `augmenter` modifient la valeur.
=========================================================== -->

<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl rounded-box">
      <div class="card-body">
        <!-- Titre principal -->
        <h5 class="card-title text-2xl font-bold">
          Event Binding Mode : Composition
        </h5>

        <!-- Zone interactive avec binding d'événements -->
        <div class="flex flex-col justify-center items-center my-4 p-8 bg-success-200 rounded-box">
          <div class="join join-horizontal">
            <!-- Clic droit pour réduire la valeur -->
            <button 
              v-on:click.right="reduire(11)" 
              type="button"
              class="join-item btn btn-error text-2xl"
            >
              -
            </button>

            <!-- Affichage de la valeur réactive -->
            <h3 class="mx-3 text-2xl font-bold self-center">
              le nombre : {{ leNombre }}
            </h3>

            <!-- Clic molette pour augmenter la valeur -->
            <button 
              @click.middle="augmenter(99)" 
              type="button"
              class="join-item btn btn-success text-2xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

/* Variable réactive : stocke la valeur du compteur */
const leNombre = ref(0)

/* Fonction : réduit la valeur du compteur */
function reduire(val) {
  leNombre.value -= val
}

/* Fonction : augmente la valeur du compteur */
function augmenter(val) {
  leNombre.value += val
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI & Tailwind → pas de CSS custom ici */
</style>
