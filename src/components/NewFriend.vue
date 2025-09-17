 <template>
  <div class="bg-base-200 min-h-screen p-6">
        <div class="container mx-auto max-w-4xl">
            <!-- Section Informations personnelles -->
            <div class="card bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h1 class="card-title text-3xl mb-6">Ta pas d'amis ? Remplie un formulaire !</h1>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="votre nom" class="input input-bordered" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Tél</span>
                            </label>
                            <input type="text" placeholder="Votre Tél" class="input input-bordered" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="Votre EMAIL" class="input input-bordered" />
                        </div>

                        <button class="btn btn-primary mt-4">Ajouter</button>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script setup>

</script>

<style></style> 

//////////////////Correction////////////////////

<!-- <template>
    <div class="card w-full  bg-orange-400 shadow-xl my-4">
        <h4 class="mx-3 card-title text-xl font-bold mb-4">Composant NewFriend.vue</h4>
        <div class="card-body">
            <h2 class="card-title text-primary">
                Ajouter un nouveau copain
            </h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="submitDataForm" class="space-y-4">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Nom</span>
                    </label>
                    <input v-model="newFriendName" type="text" placeholder="Entrez le nom de votre copain"
                        class="input input-bordered w-full" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Téléphone</span>
                    </label>
                    <input v-model="newFriendPhone" type="text" placeholder="Entrez le numéro de téléphone de votre copain"
                        class="input input-bordered w-full" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input v-model="newFriendEmail" type="text" placeholder="Entrez l'email de votre copain"
                        class="input input-bordered w-full" />
                </div>
                <button type="submit" class="btn btn-primary w-full">Ajouter</button>
            </form>
            </div>
    </div>
</template>

<script setup lang="js">
const emit = defineEmits(['add-friend']);

const newFriendName = ref('');
const newFriendPhone = ref('');
const newFriendEmail = ref('');

const submitDataForm = ()=> {
    emit('add-friend', newFriendName.value, newFriendPhone.value, newFriendEmail.value);
}
</script> -->
