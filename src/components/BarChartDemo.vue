<template>
    <div class="card bg-base-200 shadow-xl p-6 w-full mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">📊 Exemple Chart.js</h2>

        <div class="h-72">
            <!-- On affiche le graphique Bar de vue-chartjs -->
            <Bar :data="chartData" :options="chartOptions" />
        </div>

        <div>
          <button class="btn btn-primary" @click="addFifty"> + 50 </button>

          <button class="btn btn-soft" @click="randomizeData"> Aléatoire</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
/**
 * 1. Importer Chart.js et vue-chartjs
 */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

/**
 * 2. Enregistrer les modules Chart.js (obligatoire)
 */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

//valeur dynamique 
// 2️⃣ Valeur dynamique
const dynamicData = ref(1200)

//////////////////////// Exo 1 BarChart (ajouter 50 et aléatoire à la premiere donnée) //////////////////////////////

const addFifty = () => {
  dynamicData.value += 50
}

const randomizeData = () => {
  // On génère un nouveau tableau de 5 valeurs aléatoires entre 500 et 2500
  const randomValues = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 2000) + 500
  )
  dynamicData.value = randomValues[0]
  
  otherData.value = randomValues.slice(1)
}

// Les autres valeurs (Février → Mai)
const otherData = ref([1500, 900, 2000, 1800])

//////////////////// Fin Exo 1//////////////////////

// 3️⃣ chartData recalculé automatiquement avec computed dès q'une des dépendances (variables) change ici la ref dynamicData
const chartData = computed(() => ({
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
        {
            label: 'Ventes (€)',
            // on utilise dynamicData.value pour Janvier
            data: [dynamicData.value, 1500, 900, 2000, 1800],
            backgroundColor: '#29dbff'
        }
    ]
}))
/**
 * 4. Définir les options
 */
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#374151'
            }
        },
        title: {
            display: true,
            text: 'Evolution des ventes par mois'
        }
    },
    scales: {
        x: {
            ticks: { color: '#374151' }
        },
        y: {
            ticks: { color: '#374151' }
        }
    }
}
</script>