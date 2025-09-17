<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-6">🌐 Radar persistant (Pinia)</h2>

        <!-- 🔹 Formulaire -->
        <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">🏷️ Labels</h3>
                <textarea v-model="labelsInput" class="textarea textarea-bordered w-full" rows="3"
                    placeholder="HTML,CSS,JS,Vue,Nuxt,Tailwind" />
            </div>
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">📈 Données</h3>
                <textarea v-model="valuesInput" class="textarea textarea-bordered w-full" rows="3"
                    placeholder="65,59,90,81,56,55" />
            </div>
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">🎨 Couleur</h3>
                <input v-model="chart.borderColor" type="color" class="input input-bordered w-full" />
            </div>
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">📝 Titre</h3>
                <input v-model="chart.title" class="input input-bordered w-full" placeholder="Radar des Compétences" />
            </div>
        </div>

        <!-- 🔹 Actions -->
        <div class="flex flex-wrap gap-2 mb-6">
            <button class="btn btn-primary" @click="chart.randomize">🔄 Randomiser</button>
            <button class="btn btn-outline" @click="chart.reset">♻️ Reset</button>
        </div>

        <!-- 🔹 Graphique Radar -->
        <div class="h-96">
            <Radar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js'
import { Radar } from 'vue-chartjs'
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

// ✅ Store Pinia
const chart = useChartStore()

// Liaison textarea ↔ store
const labelsInput = ref(chart.labels.join(','))
const valuesInput = ref(chart.values.join(','))

watch([labelsInput, valuesInput], ([newLabels, newValues]) => {
    chart.labels = newLabels.split(',').map(l => l.trim())
    chart.values = newValues.split(',').map(v => Number(v.trim()) || 0)
})

// ⚡ Chart Data
const chartData = computed(() => ({
    labels: chart.labels,
    datasets: [
        {
            label: 'Compétences (%)',
            data: chart.values,
            backgroundColor: `${chart.borderColor}33`,
            borderColor: chart.borderColor,
            borderWidth: 2,
            pointBackgroundColor: chart.borderColor
        }
    ]
}))

// ⚡ Chart Options
const chartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: { color: '#e5e7eb' },
            grid: { color: '#d1d5db' },
            pointLabels: {
                color: '#374151',
                font: { size: 14 }
            },
            ticks: {
                backdropColor: 'transparent',
                color: '#374151'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            labels: { color: '#374151' }
        },
        title: {
            display: true,
            text: chart.title,
            color: '#111827',
            font: { size: 18 }
        }
    }
}))
</script>