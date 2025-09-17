<!-- 📌 Récap Props & Emits

     🔹 PROPS (entrées du composant)
     - Permettent de recevoir des données d’un parent
     - Déclarées avec `defineProps({ ... })`
     - Doivent être typées (String, Number, Boolean, Object, Array…)
     - Peuvent avoir : required, default
     Exemple :
       const props = defineProps({
         title: { type: String, required: true },
         active: { type: Boolean, default: false }
       })

     🔹 EMITS (sorties du composant)
     - Permettent d’envoyer des événements vers le parent
     - Déclarés avec `defineEmits(["nomEvent"])`
     - Utilisés avec `emit("nomEvent", payload)`
     Exemple :
       const emit = defineEmits(["save"])
       function saveItem() {
         emit("save", { id: 1 })
       }

     🎯 Règle simple :
     - Props = données que le parent DONNE au composant
     - Emits = événements que le composant RENVOIE au parent
   =========================================================== -->

<!-- 📌 Composant "LikeButtons"
     - Affiche deux boutons : Like 👍 et Unlike 👎
     - Émet des événements personnalisés "liked" et "unliked"
     =========================================================== -->

<template>
    <!-- Conteneur flex avec un petit espace entre les boutons -->
    <div class="flex gap-2">
        <!-- Bouton "Like" : vert (success) -->
        <button 
            class="btn btn-success"
            @click="like"
            type="button" 
            aria-label="Aimer le contenu">
            Like
        </button>

        <!-- Bouton "Unlike" : rouge (error) -->
        <button 
            class="btn btn-error"
            @click="unlike"
            type="button"
            aria-label="Ne pas aimer le contenu">
            Unlike
        </button>
    </div>
</template>

<script setup>
/**
 * Import des APIs Vue
 * - defineEmits : permet de déclarer les événements envoyés par le composant
 * - ref         : importé mais non utilisé (⚠ peut être supprimé si inutile)
 */
import { defineEmits } from "vue";

// Déclaration des événements émis par le composant
// - "liked"   : déclenché quand l'utilisateur clique sur "Like"
// - "unliked" : déclenché quand l'utilisateur clique sur "Unlike"
const emit = defineEmits(["liked", "unliked"]);

// Fonction déclenchée au clic sur "Like"
function like() {
    emit("liked");
}

// Fonction déclenchée au clic sur "Unlike"
function unlike() {
    emit("unliked");
}
</script>

<style scoped>

</style>

<!-- V2 (maintenant quand on like il emet l'event "liked" avec 2 variables dedans -->

<!-- <template>
    <div class="flex gap-2 bg-blue-500 p-4 rounded-xl">
        <p> Ici le composant LikeButton</p>
        <button class="btn btn-success" @click="like">Like</button>
        <button class="btn btn-error" @click="unlike">Unlike</button>
    </div>
</template>

<script setup>
// import { defineEmits } from "vue";

// Définition des événements émis par le composant
// Phase 1 on déclare les events
const emit = defineEmits(["liked", "unliked"]);
const uneData = ref('uneDonnée');
const uneAutreDonnee = ref(12);

// Phase 2 on émet les events
function like() {
    // On EMIT un Event Custom
    // emit("liked");
    // On EMIT un Event Custom avec des données dedans
    emit("liked", uneData.value, uneAutreDonnee.value);
}
// Phase 2 on émet les events
function unlike() {
    emit("unliked");
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style> -->