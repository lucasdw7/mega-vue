<!-- ===========================================================
     💡 Mini Fiche : Composant AppHeader.vue
     
     Objectif :
     - Créer une barre de navigation (header) responsive.
     - Afficher le logo et le menu principal.
     - Menu desktop visible, menu mobile (dropdown) pour petits écrans.
     - DaisyUI + Tailwind pour le style.

     Points clés :
     - router-link : navigation interne SPA.
     - lg:hidden / lg:flex : classes Tailwind pour responsive.
     - tabindex=0 : navigation clavier pour le menu déroulant.
     - sticky + z-50 : header toujours visible.
     - Bonnes pratiques : texte clair, éléments accessibles, responsive design.
   =========================================================== -->
<template>
  <header class="navbar bg-base-100 shadow-lg rounded-box sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8">

      <!-- Logo et nom de l'application -->
      <div class="flex-1">
        <!-- Bouton/logo cliquable renvoyant vers la page d'accueil -->
        <a href="/" class="btn btn-ghost normal-case text-xl font-bold text-primary">
         Mega-Vue
        </a>
      </div>

      <!-- Menu principal pour les grands écrans -->
      <nav class="flex-none hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <!-- Chaque item est un router-link pour navigation SPA -->
          <li class="rounded-box">
            <router-link to="/" class="hover:text-primary">Accueil</router-link>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Leçons</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/lesson-bind" class="hover:text-primary">Attribute-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-in-templ" class="hover:text-primary">Inline-templating</router-link>
            </li>
            <li>
              <router-link to="/lesson-event-bind" class="hover:text-primary">Event-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-two-way" class="hover:text-primary">Two-way-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-computed" class="hover:text-primary">Computed-properties</router-link>
            </li>
            <li>
              <router-link to="/lesson-watchers" class="hover:text-primary">Watchers</router-link>
            </li>
            <li>
              <router-link to="/lesson-dyn-style" class="hover:text-primary">Style dynamique</router-link>
            </li>
            <li>
              <router-link to="/lesson-conditions" class="hover:text-primary">Conditional Rendering</router-link>
            </li>
            <li>
              <router-link to="/lesson-cycle" class="hover:text-primary">lifeCycle</router-link>
            </li>
          </ul>
        </details>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Exercices</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/exo-1" class="hover:text-primary">Exo-1</router-link>
            </li>
            <li>
              <router-link to="/exo-dir" class="hover:text-primary">Exo-directive</router-link>
            </li>
            <li>
              <router-link to="/exo-num" class="hover:text-primary">Exo-nombreV-On</router-link>
            </li>
            <li>
              <router-link to="/exo-bug" class="hover:text-primary">Exo-Counter</router-link>
            </li>
            <li>
              <router-link to="/exo-watch" class="hover:text-primary">Exo-watchers</router-link>
            </li>
            <li>
              <router-link to="/exo-style" class="hover:text-primary">Exo-styleDynamique</router-link>
            </li>
            <li>
              <router-link to="/exo-if" class="hover:text-primary">Exo-If</router-link>
            </li>
            <li>
              <router-link to="/exo-cycle" class="hover:text-primary">Exo-Cycle</router-link>
            </li>
             <li>
              <router-link to="/exo-props" class="hover:text-primary">Exo-Props</router-link>
            </li>
          </ul>
        </details>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Tp</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/tp-1" class="hover:text-primary">Tp-1</router-link>
            </li>
            <li>
              <router-link to="/tp-2" class="hover:text-primary">Tp-2-Von</router-link>
            </li>
            <li>
              <router-link to="/tp-3" class="hover:text-primary">Tp-style Dynamique</router-link>
            </li>
             <li>
              <router-link to="/tp-4" class="hover:text-primary">Tp-props-emit</router-link>
            </li>
          </ul>
        </details>
          </li>
        </ul>
      </nav>

      <!-- Menu déroulant pour les écrans mobiles -->
      <div class="flex-none lg:hidden">
        <div class="dropdown ">
          <!-- Bouton hamburger pour ouvrir le menu mobile -->
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <!-- Contenu du menu mobile -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 w-3xs shadow bg-base-100 rounded-box w-auto"
          >
           <li class="rounded-box">
            <router-link to="/" class="hover:text-primary">Accueil</router-link>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Leçons</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/lesson-bind" class="hover:text-primary">Attribute-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-in-templ" class="hover:text-primary">Inline-templating</router-link>
            </li>
            <li>
              <router-link to="/lesson-event-bind" class="hover:text-primary">Event-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-two-way" class="hover:text-primary">Two-way-binding</router-link>
            </li>
            <li>
              <router-link to="/lesson-computed" class="hover:text-primary">Computed-properties</router-link>
            </li>
            <li>
              <router-link to="/lesson-watchers" class="hover:text-primary">Watchers</router-link>
            </li>
            <li>
              <router-link to="/lesson-dyn-style" class="hover:text-primary">Style dynamique</router-link>
            </li>
            <li>
              <router-link to="/lesson-conditions" class="hover:text-primary">Conditional Rendering</router-link>
            </li>
             <li>
              <router-link to="/lesson-cycle" class="hover:text-primary">lifeCycle</router-link>
            </li>
          </ul>
        </details>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Exercices</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/exo-1" class="hover:text-primary">Exo-1</router-link>
            </li>
            <li>
              <router-link to="/exo-dir" class="hover:text-primary">Exo-directive</router-link>
            </li>
            <li>
              <router-link to="/exo-num" class="hover:text-primary">Exo-nombreV-On</router-link>
            </li>
            <li>
              <router-link to="/exo-bug" class="hover:text-primary">Exo-Counter</router-link>
            </li>
            <li>
              <router-link to="/exo-watch" class="hover:text-primary">Exo-watchers</router-link>
            </li>
             <li>
              <router-link to="/exo-style" class="hover:text-primary">Exo-styleDynamique</router-link>
            </li>
             <li>
              <router-link to="/exo-if" class="hover:text-primary">Exo-If</router-link>
            </li>
            <li>
              <router-link to="/exo-cycle" class="hover:text-primary">Exo-Cycle</router-link>
            </li>
            <li>
              <router-link to="/exo-props" class="hover:text-primary">Exo-Props</router-link>
            </li>
          </ul>
        </details>
          </li>
          <li class="rounded-box">
             <details>
          <summary>Tp</summary>
          <ul class="p-2 w-3xs ">
            <li>
              <router-link to="/tp-1" class="hover:text-primary">Tp-1</router-link>
            </li>
            <li>
              <router-link to="/tp-2" class="hover:text-primary">Tp-2-Von</router-link>
            </li>
            <li>
              <router-link to="/tp-3" class="hover:text-primary">Tp-style Dynamique</router-link>
            </li>
             <li>
              <router-link to="/tp-4" class="hover:text-primary">Tp-props-emit</router-link>
            </li>
          </ul>
        </details>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
/**
 * Script Setup - Vue 3
 * - Import RouterLink nécessaire pour navigation interne SPA.
 * - Ici on utilise uniquement router-link → pas de logique JS additionnelle.
 */
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Pas de styles personnalisés ici
   - DaisyUI + Tailwind gèrent la mise en page et le design.
   - Bonnes pratiques : garder le style global cohérent et réutilisable.
*/
</style>
