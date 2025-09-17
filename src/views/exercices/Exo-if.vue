<!-- <template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  type="text" placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3" v-model="textInput" />

            <button  class="btn btn-primary mb-4" @click="addFilm">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <div >
                <h3 class="text-xl font-semibold mb-2" v-if="mesFilms.length">Votre film ajouté :{{ textInput }} </h3>
            </div>

            <p class="text-gray-500" >
                Pas encore de films dans votre liste ? Veuillez en ajouter un.
            </p>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref} from 'vue'

const textInput = ref("")
const mesFilms = ref([])

function addFilm(){
  mesFilms.value.push(textInput.value)
}


</script>

<style scoped lang="css">
</style> -->

<!-- Correction:  -->
<!-- <template>

    <div class="container mx-auto p-4 md:p-8">
      <div class="card bg-base-100 shadow-xl rounded-box p-6">
        <h2 class="text-2xl font-bold text-center mb-4">🎬 WatchList (Films à voir)</h2>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Nom du film :</span>
          </label>
          <input v-model="nomFilm" type="text" placeholder="Entrez un nom de film" class="input input-bordered w-full" />
        </div>
        <button @click="ajouterFilm" class="btn btn-primary mt-3">
          Ajouter à votre Liste
        </button>
        <div class="divider my-6"></div>
        <div class="text-center">
          <h3 v-if="mesFilms.length" class="text-xl font-bold mb-2">Votre  Film : {{ nomFilm }}</h3>
          <p v-else class="text-lg text-base-content opacity-75">
            Pas encore de films dans votre liste ? Veuillez en ajouter un.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang='js'>
//   import { ref } from 'vue'
  const nomFilm = ref('')
  const mesFilms = ref([])
  
  function ajouterFilm() {
    mesFilms.value.push(nomFilm.value)
  }
  </script>
  
  <style scoped lang="css">
  </style>
   -->

   <!-- Version avec V-for  -->

  <!-- <template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl rounded-box p-6">
      <h2 class="text-2xl font-bold text-center mb-4">🎬 WatchList (Films à voir)</h2>

      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">Nom du film :</span>
        </label>
        <input 
          v-model="nomFilm" 
          type="text" 
          placeholder="Entrez un nom de film" 
          class="input input-bordered w-full" 
        />
      </div>

      <button @click="ajouterFilm" class="btn btn-primary mt-3">
        Ajouter à votre Liste
      </button>

      <div class="divider my-6"></div>

      <div class="text-center">
        <h3 v-if="mesFilms.length" class="text-xl font-bold mb-4">
          🎥 Votre Liste de Films :
        </h3>
        <p v-else class="text-lg text-base-content opacity-75">
          Pas encore de films dans votre liste ? Veuillez en ajouter un.
        </p>
      </div>

      <ul class="list-disc list-inside space-y-2">
        <li 
          v-for="(film, index) in mesFilms" 
          :key="index"
          @click="supprimerFilm(index)"
          class="cursor-pointer hover:text-red-500 transition"
        >
          {{ film }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const nomFilm = ref('')
const mesFilms = ref([])

function ajouterFilm() {
  if (nomFilm.value.trim() !== '') {
    mesFilms.value.push(nomFilm.value.trim())
    nomFilm.value = '' 
  }
}

function supprimerFilm(index) {
  mesFilms.value.splice(index, 1)
}
</script>

<style scoped lang="css">

li {
  font-size: 18px;
  cursor: pointer;
}
</style> -->

<!-- Correction version v-for -->

<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">
                WatchList 🎬 (Films à voir + v-if+v-for) - Mode : Composition
            </h2>

            <!-- Input -->
            <input v-model="nomFilm" type="text" placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3" />

            <!-- Bouton Ajouter -->
            <button @click="ajouterFilm" class="btn btn-primary mb-4">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <!-- Aucun film -->
            <h2 v-if="mesFilms.length === 0" class="text-gray-500 text-lg">
                Aucun Films à Voir ?
            </h2>

            <!-- Liste de films -->
            <ul v-else class="flex flex-col space-y-2">
                <li v-for="(unFilm, index) in mesFilms" :key="index" @click="supprimerFilm(index)"
                    class="badge badge-outline cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    {{ index + 1 }} - {{ unFilm }} - 🚮
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const nomFilm = ref('')
const mesFilms = ref([])

function ajouterFilm() {
    if (nomFilm.value.trim() === '') return
    mesFilms.value.push(nomFilm.value.trim())
    nomFilm.value = ''
}

function supprimerFilm(index) {
    mesFilms.value.splice(index, 1)
}
</script>

<style scoped lang="css">
/* Rien de spécial, DaisyUI gère tout */
</style>