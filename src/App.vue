<template>
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <h3 class="text-3xl">{{ magicNumber }}</h3>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card-body">
  <h2 class="card-title"> {{ magicString }}</h2>
  <h3 class="text-xl"> age: {{ magicNumber }} </h3>
  <p>{{ magicTab[[]] }}</p>
  <p>{{ magicObject }}</p>
  <p>{{ magicBooleen }}</p>


</div>
</template>

<script setup lang="js">
const magicNumber = 42;
const magicString = 'Pepe la débrouille';
const magicBooleen = true;
const magicTab = ['archi','journaliste']
const magicObject = {'rugby':'basket'};
</script>


<style scoped>
</style>