<!-- <template>
  <main class="container mx-auto p-6">
    <!-- Titre 
      <h1 class="text-2xl font-bold text-center mb-6">
        Ici c'est le composant parent ExoPropsView
      </h1>

    <!-- Formulaire 
    <section class="card bg-base-200 shadow-md p-6 mb-8">
      <form class="space-y-4">
        <!-- Nom 
        <div class="form-control">
          <label class="label" for="name">
            <span class="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            class="input input-bordered w-full"
          />
        </div>

        <!-- Téléphone
        <div class="form-control">
          <label class="label" for="tel">
            <span class="label-text">Tél</span>
          </label>
          <input
            id="tel"
            type="tel"
            placeholder="Votre Tél"
            class="input input-bordered w-full"
          />
        </div>

        <!-- Email 
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Votre EMAIL"
            class="input input-bordered w-full"
          />
        </div>

        <!-- Bouton Ajouter 
        <div class="flex justify-center">
          <button type="submit" class="btn btn-primary w-full sm:w-auto">
            Ajouter Ami
          </button>
        </div>
      </form>
    </section>

    <!-- Liste des amis 
    <section class="space-y-4">
     <OneFriend
     v-for = "ami in lesAmis"
     :key = "ami.id"
     v-bind = "ami"
     />

    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import OneFriend from '../../components/OneFriend.vue';

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);


// // defineProps({
// //   msg: String,
// //   name: String,
// // })
// const props = defineProps(['foo','username'])
// // console.log(props.foo)
// const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style> -->


<!-- Correction -->

<template>
  
    <h1 class="text-3xl">Ici La page des Copains ! </h1>
    <!-- <OneFriend 
    id="toto"
    unAmiName="totoName"
    unAmiPhone="totoPhone"
    unAmiMail="totoMail"
    :premium="true"
    ></OneFriend> -->

    <!-- On arrive a l'utiliser une fois on va le répéter plusieurs fois (cf autant de fois qu'on a des elements dans le tableau) -->
    <OneFriend 
    v-for="ami in lesAmis"
    :id="ami.id"
    :unAmiName="ami.name"
    :unAmiPhone="ami.phone"
    :unAmiMail="ami.email"
    :premium="ami.premium"
    @supp="supInLesAmis"
    @premium="movePremium"
    ></OneFriend>
    <NewFriend

  ></NewFriend>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import OneFriend from '../../components/OneFriend.vue'
import NewFriend from '../../components/NewFriend.vue';

//exo bouton supprimer/////////////////////////////////////////////////
const supInLesAmis = (id: string) => {
    console.log('On arrive dans la fonction supInLesAmis');
    console.log('id', id);
    lesAmis.value = lesAmis.value.filter(ami => ami.id !== id);
}

//exo bouton premium/////////////////////////////////////////////////

const movePremium = (id: string) => {
    console.log('On arrive dans la fonction movePremium');
    console.log('id', id);
    const amiATrouver : any = lesAmis.value.find(ami =>ami.id === id);
    console.log('on a trouver notre ami', amiATrouver)
    console.log(amiATrouver.premium)
    amiATrouver.premium = !amiATrouver?.premium;
}

//tableau d'utilisateurs ( pour les exos et tests )
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);
</script>
