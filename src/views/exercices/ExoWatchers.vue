<!-- 📌 MINI FICHE : WATCH (Vue 3 - Composition API)

💡 Rôle :
- Surveille une variable réactive (ref, reactive, computed).
- Déclenche une fonction à chaque modification de sa valeur.

🛠️ Syntaxe :
watch(source, (newValue, oldValue) => {
  // action à exécuter
})

⚙️ Options utiles :
- immediate: true  → exécute au montage initial
- deep: true       → surveille les propriétés internes d’un objet/array

🚀 Quand l’utiliser ?
- Exécuter une action "effet secondaire" (reset, API call, log…)
- Réagir à un changement plutôt que calculer une valeur dérivée
  (sinon → utiliser `computed`)

Exemple :
watch(leNombre, (nv, ov) => {
  if (nv === 7) leNombre.value = 0
})
=========================================================== -->

<!-- 💡 Exemple : Compteur avec Watcher (Vue 3 - Composition API)
     - Incrémente un nombre avec un bouton
     - Utilise watch() pour surveiller les changements
     - Réinitialise le compteur à 0 lorsque la valeur atteint 7
     =========================================================== -->

<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <div class="card-body text-center">
                <!-- Titre du composant -->
                <h2 class="card-title text-2xl font-bold mb-4 mx-auto">
                    Compteur avec Watcher
                </h2>

                <!-- Zone compteur -->
                <div class="flex items-center justify-center gap-4">
                    <!-- Bouton incrémentation (+1)
                         - Incrémente directement `leNombre`
                         - Effet hover : léger zoom (scale 110%) -->
                    <button 
                        @click="leNombre++" 
                        type="button"
                        class="btn btn-success transition-transform duration-200 hover:scale-110">
                        +
                    </button>

                    <!-- Affichage de la valeur courante -->
                    <p class="text-xl font-bold">
                        Valeur actuelle : 
                        <span class="badge badge-lg badge-secondary">
                            {{ leNombre }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
/**
 * Script setup Vue 3
 * Exemple d'utilisation de `ref` et `watch`
 * - leNombre : variable réactive du compteur
 * - watch() : exécute une fonction à chaque modification de `leNombre`
 */

import { ref, watch } from 'vue'

// Déclaration d'une variable réactive
const leNombre = ref(0)

// Surveillance de `leNombre`
watch(leNombre, (newValue) => {
    // Si la valeur atteint 7 → réinitialisation du compteur
    if (newValue === 7) {
        leNombre.value = 0
    }
})
</script>
