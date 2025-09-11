<!-- 📌 Mini guide : Function() vs Computed dans Vue 3

✅ Utiliser une function (appel direct dans le template) :
   - Quand tu veux exécuter une action ponctuelle (événement, bouton…)
   - Quand le résultat n’est pas lié à une donnée réactive
   - Exemple : @click="maFonction()" → déclenche une action

⚠️ Attention :
   - Si tu appelles une fonction dans le template {{ maFonction() }},
     elle sera exécutée à CHAQUE re-render → risques de ralentissements.

✅ Utiliser computed :
   - Quand tu veux dériver une donnée à partir de variables réactives
   - Quand le résultat doit être "mémorisé" tant que les dépendances ne changent pas
   - Exemple : const fullName = computed(() => firstName.value + ' ' + lastName.value)

🎯 Règle simple :
   - Donnée réutilisable et dépendante de variables réactives → computed
   - Action unique ou logique déclenchée par l’utilisateur → function

   <!-- 💡 Guide rapide :
     - computed → pour des données dérivées/mémorisées (dépend de ref/reactive)
     - function → pour des actions ponctuelles (events, logique utilisateur)
     - ⚠ éviter {{ maFonction() }} dans le template → recalcul à chaque render -->

<!-- =========================================================== -->

<!-- Version de compteur "buguée"
     - Exemple avec appel direct de fonction dans le template
     - Provoque des ré-exécutions inutiles de la fonction
     - Sert de démonstration pour comparer avec la version "debug"
     =========================================================== -->
     
<template>
    <div class="container mx-auto p-4 md:p-8">
        <!-- Carte principale avec DaisyUI (ombre + arrondis) -->
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            
            <!-- Titre de la carte -->
            <h5 class="card-title text-2xl font-bold mb-4">
                Computed Bug Mode : Composition
            </h5>

            <!-- Zone de compteur avec boutons d'action -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 my-6">
                <!-- Bouton pour réduire la valeur (ici -10) -->
                <button @click="reduire(10)" type="button" class="btn btn-error">-</button>

                <!-- Affichage du nombre actuel -->
                <h3 class="text-3xl font-bold text-center">
                    Le nombre : 
                    <span class="badge badge-lg badge-primary">{{ leNombre }}</span>
                </h3>

                <!-- Bouton pour augmenter la valeur (ici +20) -->
                <button @click="augmenter(20)" type="button" class="btn btn-success">+</button>
            </div>

            <!-- Séparateur DaisyUI -->
            <div class="divider"></div>

            <!-- Zone d'affichage du résultat de la fonction -->
            <div class="text-center mt-6">
                <p class="text-base-content opacity-80">
                    Résultat de la fonction <code>afficherNameUser()</code> :
                    
                    <!-- ⚠ Ici on appelle directement la fonction dans le template.
                         Mauvaise pratique car la fonction sera exécutée à CHAQUE re-render du composant -->
                    <span class="badge badge-info">{{ afficherNameUser() }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
/**
 * Script setup Vue 3 (Composition API)
 * Démonstration d'un compteur avec une fonction utilisée dans le template.
 * Cette approche montre un "bug" : l'appel direct dans le template
 * entraîne des ré-exécutions fréquentes.
 */

import { ref } from 'vue'

// Variable réactive : stocke le nombre affiché
const leNombre = ref(0);

// Variable réactive : stocke le nom de l'utilisateur (vide par défaut)
const nameUser = ref('');

// Fonction qui retourne un texte en fonction de `nameUser`
const afficherNameUser = () => {
    console.log('fonction qui gère le NAME exécutée');
    if (nameUser.value === '') {
        return 'test';
    } else {
        return 'autre Test';
    }
};

// Fonction qui augmente `leNombre` de la valeur passée en argument
const augmenter = (nb) => {
    leNombre.value += nb;
};

// Fonction qui réduit `leNombre` de la valeur passée en argument
const reduire = (nb) => {
    leNombre.value -= nb;
}
</script>

<!-- ===========================================================
     Version débug (meilleure pratique)
     - Utilise computed() pour éviter des appels inutiles
     - Plus performante et plus claire
   =========================================================== -->

<!-- 
<template>
    ...
    <span class="badge badge-info">{{ afficherNameUser }}</span>
    ...
</template>

<script setup lang='js'>
import { ref, computed } from 'vue'

// Variables réactives
const leNombre = ref(0)
const nameUser = ref('')

// Propriété calculée : exécutée uniquement si `nameUser` change
const afficherNameUser = computed(() => {
  console.log('fonction qui gère le NAME exécutée')
  return nameUser.value === '' ? 'test' : 'autre Test'
})

// Méthodes d'incrément/décrément
function augmenter(num) { leNombre.value += num }
function reduire(num) { leNombre.value -= num }
</script>
-->
