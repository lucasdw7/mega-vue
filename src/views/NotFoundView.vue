<!--
=========================================
Mini Fiche : Page 404 (Not Found)
=========================================
Objectif :
- Afficher une page personnalisée quand l’utilisateur accède à une route inexistante.
- Créer un effet visuel de "glitch" / "static TV" avec des animations CSS.

Points importants :
- L’accessibilité : prévoir une info texte claire ("File not found").
- Animation CSS : keyframes pour simuler un bruit visuel (noise).
- L’image en arrière-plan donne un effet TV statique mais doit être décorative (penser à aria-hidden si besoin).
- Responsive : éviter que le texte soit trop petit sur mobile.
-->

<template>
  <div class="not-found">
    <!-- Texte principal de l'erreur -->
    <div class="error">404</div>

    <br /><br />

    <!-- Message d'information complémentaire -->
    <span class="info">File not found</span>

    <!-- Image animée en arrière-plan (effet "TV statique") -->
    <img 
      src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" 
      alt="Animation statique TV décorative" 
      class="static" 
    />
  </div>
</template>

<script setup lang="js">
// Pas de logique JS nécessaire ici, simple affichage statique
</script>

<style scoped lang="css">
/* Import de la police pour donner un style unique */
@import url(https://fonts.googleapis.com/css?family=Gilda+Display);

/* Image décorative de fond (statique TV) */
.static {
  opacity: 0.05;   /* Faible opacité pour ne pas gêner la lecture */
  z-index: 230;
  /* user-select: none; (désactivé pour laisser la sélection possible si besoin) */
}

/* Bloc principal de l'erreur 404 */
.error {
  text-align: center;
  font-family: 'Gilda Display', serif;
  font-size: 95px;
  font-style: italic;
  animation: noise 2s linear infinite; /* Animation "glitch" */
  overflow: default; /* Bonne pratique : éviter "default" qui n’existe pas */
}

/* Effet supplémentaire : duplication du texte avec une animation bleue */
.error:after {
  content: '404';
  font-family: 'Gilda Display', serif;
  font-size: 100px;
  font-style: italic;
  position: absolute;
  inset: 0;  /* top/right/bottom/left: 0 */
  margin: auto;
  opacity: 0;
  color: blue;
  animation: noise-1 .2s linear infinite;
}

/* Texte secondaire d’information */
.info {
  font-family: 'Gilda Display', serif;
  font-size: 15px;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: noise-3 1s linear infinite;
}

/* Effet supplémentaire : duplication du texte avec une animation rouge */
.error:before {
  content: '404';
  font-family: 'Gilda Display', serif;
  font-size: 100px;
  font-style: italic;
  text-align: center;
  width: 100px;
  height: 60px;
  line-height: 60px;
  position: absolute;
  inset: 0;
  margin: auto;
  opacity: 0;
  color: red;
  animation: noise-2 .2s linear infinite;
}

/* =====================
   Animations (keyframes)
   ===================== */

/* Animation bleue */
@keyframes noise-1 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: -6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: 2px;}
}

/* Animation rouge */
@keyframes noise-2 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: 6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: -2px;}
}

/* Animation principale du texte */
@keyframes noise {
  0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}  
  4.3% {opacity: 1; transform: scaleY(1.7);}
  43% {opacity: 1; transform: scaleX(1.5);}
}

/* Animation sur le message d’info */
@keyframes noise-3 {
  0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
  4.3% {opacity: 1; transform: scaleY(4);}
  43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
}
</style>
