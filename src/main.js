
// Mini Fiche : main.js (Point d’entrée Vue)
// =========================================
// Objectif :
// - Initialiser l’application Vue.
// - Importer les styles globaux, le composant racine <App/> et le router.
// - Monter l’app sur l’élément DOM #app.

// Points importants :
// - `createApp(App)` → crée une nouvelle instance de l’application Vue.
// - `.use(router)` → active le router (vue-router) pour la navigation entre pages.
// - `.mount('#app')` → injecte l’application dans la div avec id="app" (index.html).


import { createApp } from 'vue'   // Import de la fonction pour créer l’app
import './style.css'              // Import des styles globaux
import App from './App.vue'       // Composant racine (layout global de l’app)
import router from './router'     // Import de la configuration du router

// ✅ Initialisation de l’application
createApp(App)
  .use(router)    // On active Vue Router
  .mount('#app')  // On monte l’app dans la div #app (index.html)


// Alternative plus "détaillée", mais identique :
// const app = createApp(App);  // On crée l’application
// app.use(router);             // On active Vue Router
// app.mount('#app');           // On monte l’application

