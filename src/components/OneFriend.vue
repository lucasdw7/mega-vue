<!-- Correction  -->
  
  <!-- 📌 Composant "Card Ami"
       - Affiche les informations d’un ami (nom, ID, téléphone, mail)
       - Badge Premium / Standard en fonction de la prop `premium`
       - Utilise DaisyUI pour la mise en forme (cards, badges, etc.)
       =========================================================== -->
  <template>
      <!-- Carte responsive avec DaisyUI -->
      <div class="card w-full max-w-md bg-base-200 shadow-xl my-4">
          <div class="card-body">
              
              <!-- Titre de la carte : nom + badge Premium/Standard -->
              <h2 class="card-title text-primary">
                  <!-- Nom de l'ami -->
                  👤 {{ unAmiName }}
  
                  <!-- Badge dynamique basé sur la prop `premium` -->
                  <div class="badge" :class="premium ? 'badge-success' : 'badge-ghost'">
                      {{ premium ? 'Premium' : 'Standard' }}
                  </div>
              </h2>
  
              <!-- Bloc d’informations avec affichage structuré -->
              <div class="space-y-2 text-base-content">
                  
                  <!-- Identifiant unique -->
                  <p class="flex items-center gap-2">
                      <span class="badge badge-outline badge-primary">ID</span>
                      {{ id }}
                  </p>
  
                  <!-- Numéro de téléphone -->
                  <p class="flex items-center gap-2">
                      <span class="badge badge-outline badge-secondary">📞</span>
                      {{ unAmiPhone }}
                  </p>
  
                  <!-- Adresse e-mail -->
                  <p class="flex items-center gap-2">
                      <span class="badge badge-outline badge-accent">📧</span>
                      {{ unAmiMail }}
                  </p>
              </div>

                <!-- Conteneur des boutons  -->
                <div class="card-actions justify-end mt-4 gap-4">

                  <!-- Bouton premium -->
                  <button class="btn btn-accent btn-dash" @click="btnPremium" type="button" aria-label="Supprimer la card">{{premium}}</button>
                  
                  <!-- Bouton Supprimer -->
                  <button class="btn btn-error btn-dash" @click="" type="button" aria-label="Supprimer la card">Supprimer</button>

                </div>

          </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { defineEmits, ref } from "vue";

///////////////////////////// Exo bouton supprimer///////////////////////////////////////////

// const emitSup = defineEmits(["supp"]); //version emit pour tableau
// const emitSup = defineEmits({ //version emit pour objet

//     //Emits en mode objet pour faire des fonctions et avoir plus de controles
//     'supp': (id)=>{
//         if(id){
//             return true;
//         }else{
//             console.log('id is required');
//             console.warn('C\'est la catastrophe !!!!!!');
//             console.error('ON A PAS DE ID Dans le event supp');
//             return false;
//         }
//     }
// })
// // Fonction déclenchée au clic 
// function supp() {
//     emitSup("supp", props.id);
// }
///////////////////////////// Exo bouton premium///////////////////////////////////////////

const emitPremium = defineEmits({ //version emit pour objet

    //Emits en mode objet pour faire des fonctions et avoir plus de controles
    'premium': (id)=>{
        if(id){
            return true;
        }else{
            console.log('id is required');
            console.warn('C\'est la catastrophe !!!!!!');
            console.error('ON A PAS DE ID Dans le event supp');
            return false;
        }
    }
})
// Fonction déclenchée au clic 
function btnPremium() {
    emitPremium("premium", props.id); 
}

////////////////////////////////////////////////////////////////////////


  /**
   * Déclaration des props du composant
   * - id         : identifiant unique (String, requis)
   * - unAmiName  : nom de l'ami (String, requis)
   * - unAmiPhone : numéro de téléphone (String, requis)
   * - unAmiMail  : adresse e-mail (String, requis)
   * - premium    : indique si l’ami est Premium (Boolean, optionnel, défaut: false)
   */
  const props = defineProps({
      id: {
          type: String,
          required: true,
      },
      unAmiName: {
          type: String,
          required: true,
      },
      unAmiPhone: {
          type: String,
          required: true,
      },
      unAmiMail: {
          type: String,
          required: true,
      },
      premium: {
          type: Boolean,
          required: false,
          default: false,
      },
  })
  </script>

<!-- Exo dde base 
<!-- <template>
  <div
    class="card bg-base-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
  >
    <!-- Nom 
    <h2 class="font-semibold text-lg text-base-content">
      {{ name }}
      <span v-if="premium" class="text-sm text-gray-500">(Ami premium)</span>
    </h2>

    <!-- Actions
    <div class="mt-3 sm:mt-0 flex flex-wrap gap-2">
      <button class="btn btn-outline btn-sm">Afficher détails</button>

      <span v-if="premium" class="badge badge-success gap-1">
        ⭐ Premium
      </span>

      <button class="btn btn-error btn-sm flex items-center gap-1">
        <!-- Icône poubelle 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Suppr.
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  name: String,
  phone: String,
  email: String,
  premium: Boolean
})
</script>

<style></style> -->

