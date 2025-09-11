<template>
  <!-- Première card (class dynamique )  -->
 <div class="flex w-full bg-info rounded-box p-4">
    <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center" 
    :class="{ color1: ActiveColor1 }" 
    @click="toggleActive(1)">
    content 1
    </div>
    <div class="divider divider-horizontal">OR</div>
    <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center" 
    :class="{ color2: ActiveColor2 }" 
    @click="toggleActive(2)">
    content 2
    </div>
</div>

<div class="divider"></div>

 <!-- Seconde card (style dynamique ) -->
 <div class="flex w-full bg-info rounded-box p-4">
    <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center" 
        :style="style1"
        @click="toggleStyle(1)">
    content 1
    </div>
    <div class="divider divider-horizontal">OR</div>
    <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center" 
        :style="style2"
        @click="toggleStyle(2)">
    content 2
    </div>
</div>


</template>

<script setup lang='js'>
import { ref} from 'vue';

// Première card
const ActiveColor1 = ref(false)
const ActiveColor2 = ref(true)

function toggleActive(card) {
  if (card === 1) {
    ActiveColor1.value = !ActiveColor1.value
  } if (card === 2) {
    ActiveColor2.value = !ActiveColor2.value
  }
}

// Seconde card

// styles réactifs pour chaque card
const style1 = ref({
  backgroundColor: "springgreen",
})
const style2 = ref({
  backgroundColor: "dodgerblue",
})

function toggleStyle(card) {
  if (card === 1) {
    style1.value.backgroundColor =
      style1.value.backgroundColor === "springgreen" ? "gold" : "springgreen"
  } else {
    style2.value.backgroundColor =
      style2.value.backgroundColor === "dodgerblue" ? "paleturquoise" : "dodgerblue"
  }
}

</script>

<style scoped lang="css">

/* classe de style que pour la permière card */
.color1 {
  background-color: deeppink; 
}
.color2 {
  background-color: darkviolet;
}
</style>

<!-- une page de Views pour hoster les 2 composants d'exo

<template>
  <div>
    <!-- <DynamicStylingClassOpt></DynamicStylingClassOpt> 
    <DynamicStylingClassComp></DynamicStylingClassComp>
    <!-- <DynamicInlineStylingOpt></DynamicInlineStylingOpt> 
    <DynamicStylingInlineComp></DynamicStylingInlineComp>
  </div>
</template>

<script setup lang='js'>
import { defineAsyncComponent } from 'vue'

// const DynamicStylingClassOpt = defineAsyncComponent(() => import('../../components/DynamicStylingClassOpt.vue'));
const DynamicStylingClassComp = defineAsyncComponent(() => import('../../components/DynamicStylingClassComp.vue'));
// const DynamicInlineStylingOpt = defineAsyncComponent(() => import('../../components/DynamicInlineStylingOpt.vue'));
const DynamicStylingInlineComp = defineAsyncComponent(() => import('../../components/DynamicStylingInlineComp.vue'));

</script> -->

<!-- Correction : -->

<!-- style dunamique via la class -->
<!-- <template>
  <h3 class="text-center">Comp 2 : Dynamic Styling (Class) Mode : Composition</h3>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
      <div class="col">
        <div class="card" @click="selectionCard(1)" :class="{ class1: selectCard1 }">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" @click="selectionCard(2)" :class="{ 'class2': selectCard2 }">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);

function selectionCard(uneCard) {
  if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
  }
  if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
  }
}

</script>

<style scoped lang="css">
.container {
  background-color: aqua;
}

.class1 {
  background-color: mediumslateblue;
  font-style: italic;
}

.class2 {
  background-color: chartreuse;
  font-size: large;
}
</style> -->

<!-- style dunamique via le style -->
<!-- <template>
  <div>
    <div :style="{ color: activeColor, fontSize: myFont + 'px' }"></div>
  </div>

<h3 class="text-center"> Comp1 :Dynamic Styling (inline) Mode  : Composition</h3>
<div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
    <div class="col">
        <div class="card" @click="selectionCard(1)" v-bind:style="{backgroundColor: selectCard1 ==true ? 'red':'aqua' }">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
        </div>
        </div>
    </div>
    <div class="col">
        <div class="card" @click="selectionCard(2)" :style="{backgroundColor: selectCard2 ? 'green':'violet' }">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
        </div>
        </div>
    </div>
    </div>
    <!-- Ici on a rangé plusieurs modif dans un objet que l'on binder directement 
    <div :style="styleObject">Cool</div>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

// Variables réactives
const activeColor = ref('red');
const myFont = ref(30);
const selectCard1 = ref(false);
const selectCard2 = ref(false);

// Bonus : Objet pour plusieurs styles
const styleObject = ref({
  color: 'red',
  fontSize: '53px',
});

// Méthode pour gérer la sélection des cartes
function selectionCard(uneCard) {
  if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
  }
  if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
  }
}
</script>

<style scoped lang="css">

.container{
  background-color: blueviolet;
}
</style> -->