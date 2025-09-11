//   Mini Fiche mémo : Vue Router 4
//   ================================
//   - `createRouter` : permet de créer une instance du router.
//   - `history: createWebHistory()` : active l'historique HTML5 (URL propres sans `#`).
//   - `routes` : tableau d’objets définissant les chemins (path), noms (name) et composants (component).
//   - `Lazy loading` recommandé : import dynamique des vues (`() => import('...')`) pour optimiser le chargement.
//   - `path: '/:pathMatch(.*)*'` : route "catch-all" (404) si aucune correspondance.
  
//   Bonnes pratiques :
//   - Nommer clairement les routes (`name`) pour une navigation programmatique plus simple.
//   - Grouper les routes par thématique (base, erreurs, exercices, leçons, TP).
//   - Prévoir une page `NotFound` pour l’UX.
//   - Vérifier l’accessibilité (titres clairs, navigation cohérente). 
 
// Ici on va créer une instance de router et config des routes

import { createRouter, createWebHistory } from 'vue-router'

// Création d'une instance de router avec historique HTML5
const router = createRouter({
    history: createWebHistory(), // Mode navigation sans hash (#)
    routes: [

        // ======================
        // Routes de base
        // ======================
        {
            path: '/',               // URL racine
            name: 'home',            // Nom de la route
            component: () => import('../views/Home.vue') // Lazy load du composant
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },

        // ======================
        // Gestion des erreurs
        // ======================
        {
            path: '/:pathMatch(.*)*',  // Match tout ce qui n’existe pas
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },

        // ======================
        // Exercices
        // ======================
        {
            path: '/exo-1',
            name: 'Exo-1',
            component: () => import('../views/exercices/Exo-1.vue')
        },
        {
            path: '/exo-dir',
            name: 'Exo-dir',
            component: () => import('../views/exercices/Exo-Directive.vue')
        },
        {
            path: '/exo-num',
            name: 'Exo-num',
            component: () => import('../views/exercices/Exo-nombre-vOn.vue')
        },
        {
            path: '/exo-bug',
            name: 'Exo-bug',
            component: () => import('../views/exercices/exo-bug-counter.vue')
        },
        {
            path: '/exo-watch',
            name: 'Exo-watch',
            component: () => import('../views/exercices/ExoWatchers.vue')
        },
        {
            path: '/exo-style',
            name: 'Exo-styleDyn',
            component: () => import('../views/exercices/Exo-styleDynamique.vue')
        },

        // ======================
        // Leçons
        // ======================
        {
            path: '/lesson-bind',
            name: 'lesson-bind',
            component: () => import('../views/lessons/attribute-binding.vue')
        },
        {
            path: '/lesson-in-templ',
            name: 'lesson-in-templ',
            component: () => import('../views/lessons/inline-templating.vue')
        },
        {
            path: '/lesson-event-bind',
            name: 'lesson-event-bind',
            component: () => import('../views/lessons/event-binding.vue')
        },
        {
            path: '/lesson-two-way',
            name: 'lesson-two-way',
            component: () => import('../views/lessons/two-way-binding.vue')
        },
        {
            path: '/lesson-computed',
            name: 'lesson-computed',
            component: () => import('../views/lessons/computed-properties.vue')
        },
        {
            path: '/lesson-watchers',
            name: 'lesson-watchers',
            component: () => import('../views/lessons/watchers.vue')
        },
        {
            path: '/lesson-dyn-style',
            name: 'lesson-dyn-style',
            component: () => import('../views/lessons/dynamic-styling.vue')
        },

        // ======================
        // Travaux Pratiques (TP)
        // ======================
        {
            path: '/tp-1',
            name: 'TP-1',
            component: () => import('../views/tp/TpDataBinding.vue')
        },
        {
            path: '/tp-2',
            name: 'TP-2',
            component: () => import('../views/tp/Tp-vOn.vue')
        }
    ]
});

// Export du router pour utilisation dans main.js
export default router;
