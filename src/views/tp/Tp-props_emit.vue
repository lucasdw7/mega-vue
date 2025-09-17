<template>
<UserActive>
</UserActive>
<UserData @addUser="setAddUser"/>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'
import UserActive from '../../components/UserActive.vue';
import UserData from '../../components/UserData.vue';

const setAddUser = (nameUser, ageUser) => {
    console.log(nameUser,ageUser);

    UserActive.value = {
        name: nameUser,
        age: ageUser,
    }
}

</script>

<style scoped lang="css">

</style>

<!-- Correction -->

<!-- <template>
    <div class="flex justify-center my-8 bg-amber-400 p-4">
        <div class="card w-full max-w-3xl  shadow-xl p-6">
            <h2 class="text-2xl font-bold mb-6 text-center">
                Composant Gestion de l’utilisateur
            </h2>
            <!-- Affichage du user avec le composant enfant 
            <UserActive :username="user.name" :userage="user.age" class="my-4" />
            <!-- Formulaire de mise à jour du user 
            <UserData @set-data="setUserData" class="my-4" />
        </div>
    </div>
</template>

<script setup lang="js">
// import { ref } from 'vue'
// Import des composants enfants
// import TpComponentCommActiveUserOpt from '../../components/TpComponentCommActiveUserOpt.vue'
// import TpComponentCommUserDataOpt from '../../components/TpComponentCommUserDataOpt.vue'

// Objet user
const user = ref({
    name: 'John',
    age: 25,
})

// Fonction de mise à jour (appelée via @set-data)
const setUserData = (nameEvent, ageEvent) => {
    console.log(nameEvent,ageEvent);
    
    user.value = {
        name: nameEvent,
        age: ageEvent,
    }
    // user.name = nameEvent;
    // user.age = ageEvent;
}
</script>

<style scoped>
/* Styles custom éventuels */
</style> -->