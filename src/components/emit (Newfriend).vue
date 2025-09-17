<template>
    <h1 class="text-2xl font-bold mb-4">Ici La page des Copains ! (composant FriendsList.vue ou /exercices/emit.vue) </h1>

	<!-- <OneFriend 
	id="toto"
	unAmiName="totoName"
	unAmiPhone="totoPhone"
	unAmiMail="totoMail"
	:premium="true"
	></OneFriend> -->

	<!-- On arrive a l'utiliser une fois on va le répéter plusieurs fois (cf autant de fois qu'on a des elements dans le tableau) -->
	<!-- en plus avec v-bind dans le v-for ca automatise l'injection des props avec les elements du tableau -->
	<!-- à ce stade on a fait l'exercice sur les props  -->
	<!-- <OneFriend 
	v-for="ami in lesAmis"
	:id="ami.id"
	:unAmiName="ami.name"
	:unAmiPhone="ami.phone"
	:unAmiMail="ami.email"
	:premium="ami.premium"
	></OneFriend> -->

	<!-- Maintenant on va faire l'exercice sur les events avec $emit phase 1 :  -->
	<!-- Dans le composant OneFriend.vue on va ajouter un bouton ou icone "Delete" qui va émettre un event "deleteFriend" -->
	<!--Dans OnFriend.vue -->
	<!-- il faut ajouter un bouton ou icone "Delete" quand on click dessus on va émettre un event "deleteFriend" qui contiendra la props (l'id de l'ami)  -->
	<!-- Dans FriendsList.vue ou ici /exercices/emit.vue-->
	<!-- on va écouter (v-on) l'event "deleteFriend" qui va faire une FONCCION deleteInLesAmis-->
	<!-- dans deleteInLesAmis on va recevoir en paramètre l'id de l'ami et on va se débrouiller pour supprimer l'ami du tableau (filter, splice, etc...) -->
	<!-- <OneFriend 
	v-for="ami in lesAmis"
	:key="ami.id"
	:id="ami.id"
	:unAmiName="ami.name"
	:unAmiPhone="ami.phone"
	:unAmiMail="ami.email"
	:premium="ami.premium"
	@deleteFriend="deleteInLesAmis"
	></OneFriend> -->

	<!-- Exercice Emit (pour MAJ le status premium)--> 
	<!-- Dans OneFriend.vue , on a un bouton pour changer le status premium,  -->
	<!-- le click sur le bouton va emettre un event qui contient la props de l'id -->
	<!-- Dans le Parent réagir à l'event de modif du status premium avec une fonction qui  -->
	<!-- va retrouver via l'id le bon copain dans le tableau afin de mettre à jour son status premium  -->
	<NewFriend @add-friend="addNewFriend"></NewFriend>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	<OneFriend 
	v-for="ami in lesAmis"
	:key="ami.id"
	:id="ami.id"
	:unAmiName="ami.name"
	:unAmiPhone="ami.phone"
	:unAmiMail="ami.email"
	:premium="ami.premium"
	@deleteFriend="deleteInLesAmis"
	@make-premium="changePremiumInLesAmis"
	></OneFriend>
	</div>
</template>

<script setup lang='ts'>

// Notre tableau d'amis un tableau static pour le moment (mais vision API (+store?) ou BDD)
const lesAmis = ref([
	{
		id: 'lasticot',
		name: 'COCO L ASTICOT',
		phone: '01234 5678 991',
		email: 'coco@lasticot.com',
		premium: false
	},
	{
		id: 'falco',
		name: 'Falco Giovanni',
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
		id: 'jarod',
		name: "JAROD from le centre",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: false
	},
	{
		id: 'jdelavega',
		name: "Janine Delavega",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: true
	}
]);

const deleteInLesAmis = (id: string) => {
    console.log('On arrive dans la fonction deleteInLesAmis');
    console.log('id', id);
    lesAmis.value = lesAmis.value.filter(ami => ami.id !== id);
}

const changePremiumInLesAmis = (id: string) => {
    console.log('On arrive dans la fonction changePremiumInLesAmis');
    console.log('id depuis le event make-premium', id);
	const amiAtrouver : any = lesAmis.value.find(ami => ami.id === id);
	console.log('On l a trouvé, il est la c est lui', amiAtrouver);
	console.log(amiAtrouver.premium);
	amiAtrouver.premium = !amiAtrouver.premium;
}

const addNewFriend = (name: string, phone: string, email: string) => {
    console.log('On arrive dans la fonction addNewFriend');
    console.log('name', name);
    console.log('phone', phone);
    console.log('email', email);
	const newFriend:any = {
        id: Math.random().toString(),
        name,
        phone,
        email,
        premium: false
    };

	lesAmis.value.push(newFriend);
}
</script>