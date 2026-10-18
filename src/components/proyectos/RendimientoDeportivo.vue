<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, ScatterChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { CITIES, SPORTS, generateSyntheticSession } from '~/composables/useSimulatedTraining'
import { useCountUp } from '~/composables/useCountUp'

use([CanvasRenderer, BarChart, LineChart, ScatterChart, GridComponent, LegendComponent, TooltipComponent])

// Paleta propia de este proyecto (no toca el sistema de diseño global del
// sitio en assets/css/main.css — ver las CSS vars --rd-* en <style>). Canvas
// no entiende var(--...), así que se repiten en hex aquí para los gráficos.
const DARK_CHART = { axis: 'rgba(244,237,225,0.75)', grid: 'rgba(244,237,225,0.16)', mark: '#c6ff5e', markSoft: 'rgba(198,255,94,0.18)' }
const LIGHT_CHART = { axis: 'rgba(20,20,15,0.6)', grid: 'rgba(20,20,15,0.14)', mark: '#14140f', markSoft: 'rgba(20,20,15,0.1)' }
const TOOLTIP = { backgroundColor: '#14140f', borderWidth: 0, textStyle: { color: '#f4ede1' }, extraCssText: 'box-shadow: 0 16px 32px -16px rgba(0,0,0,.45); border-radius: 10px;' }

const BATCH_SIZES = [20, 50, 100, 200]

// Mismo orden que las columnas del dataset final del notebook — se reutiliza
// tal cual como cabecera del CSV exportado.
const CSV_COLUMNS = [
  'timestamp', 'deporte', 'duracion_min', 'distancia_km', 'esfuerzo_percibido', 'sensacion_general',
  'ciudad', 'temp_c', 'humedad_pct', 'viento_kmh', 'uv_index', 'precipitacion_mm', 'clima_disponible',
]

const nextSport = ref('running')
const nextCity = ref(CITIES[0].value)
const sessions = ref([])
const simulating = ref(false)
const simulatingBatch = ref(false)
const simulateError = ref('')

const filterSport = ref('todos')
const filterCity = ref('todos')
const batchSize = ref(BATCH_SIZES[0])

async function simulate() {
  simulating.value = true
  simulateError.value = ''

  const city = CITIES.find((c) => c.value === nextCity.value)
  let weather = null

  try {
    weather = await $fetch('/api/weather', { query: { lat: city.lat, lon: city.lon } })
  } catch {
    simulateError.value = 'No se ha podido consultar el clima en directo. La sesión se guarda igual, con el flag "clima disponible" en falso — igual que haría el pipeline real.'
  }

  sessions.value.push(generateSyntheticSession(nextSport.value, city.label, weather))
  simulating.value = false
}

// Genera batchSize entrenamientos de golpe, con deporte y ciudad al azar en
// cada uno. Para no pedir el clima una vez por entrenamiento, agrupa primero
// las ciudades que han salido sorteadas y pide cada una solo una vez (como
// mucho hay 6 llamadas, sea el lote de 20 o de 200).
async function simulateBatch() {
  simulatingBatch.value = true
  simulateError.value = ''

  const picks = Array.from({ length: batchSize.value }, () => ({
    sport: SPORTS[Math.floor(Math.random() * SPORTS.length)].value,
    city: CITIES[Math.floor(Math.random() * CITIES.length)],
  }))

  const uniqueCities = [...new Map(picks.map((p) => [p.city.value, p.city])).values()]
  const weatherByCity = new Map()

  await Promise.all(
    uniqueCities.map(async (city) => {
      try {
        weatherByCity.set(city.value, await $fetch('/api/weather', { query: { lat: city.lat, lon: city.lon } }))
      } catch {
        weatherByCity.set(city.value, null)
      }
    })
  )

  if ([...weatherByCity.values()].every((w) => w === null)) {
    simulateError.value = 'No se ha podido consultar el clima en directo. El lote se genera igual, sin datos meteorológicos.'
  }

  // Un único push con todas las filas ya construidas: dispara un solo
  // repintado de los gráficos en vez de uno por fila.
  const newSessions = picks.map((pick) =>
    generateSyntheticSession(pick.sport, pick.city.label, weatherByCity.get(pick.city.value))
  )
  sessions.value.push(...newSessions)

  simulatingBatch.value = false
}

function reset() {
  sessions.value = []
}

const filteredSessions = computed(() =>
  sessions.value.filter(
    (s) =>
      (filterSport.value === 'todos' || s.deporte === filterSport.value) &&
      (filterCity.value === 'todos' || s.ciudad === filterCity.value)
  )
)

const sportLabel = (value) => SPORTS.find((s) => s.value === value)?.label ?? value

const stats = computed(() => {
  const list = filteredSessions.value
  if (list.length === 0) {
    return { count: 0, avgTemp: null, avgEsfuerzo: null, topSport: null }
  }

  const withClima = list.filter((s) => s.clima_disponible)
  const avgTemp = withClima.length
    ? withClima.reduce((sum, s) => sum + s.temp_c, 0) / withClima.length
    : null
  const avgEsfuerzo = list.reduce((sum, s) => sum + s.esfuerzo_percibido, 0) / list.length

  const counts = {}
  for (const s of list) counts[s.deporte] = (counts[s.deporte] ?? 0) + 1
  const topSport = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null

  return { count: list.length, avgTemp, avgEsfuerzo, topSport }
})

// Correlación de Pearson + recta de regresión lineal entre temperatura y
// esfuerzo percibido, calculadas a la vez porque comparten las mismas sumas.
// Solo cuenta con sesiones que sí tienen clima (clima_disponible); con menos
// de 3 puntos ninguno de los dos números dice nada fiable.
const regression = computed(() => {
  const list = filteredSessions.value.filter((s) => s.clima_disponible)
  const n = list.length
  if (n < 3) return null

  const temps = list.map((s) => s.temp_c)
  const esfuerzos = list.map((s) => s.esfuerzo_percibido)
  const meanTemp = temps.reduce((a, b) => a + b, 0) / n
  const meanEsfuerzo = esfuerzos.reduce((a, b) => a + b, 0) / n

  let num = 0
  let denTemp = 0
  let denEsfuerzo = 0
  for (let i = 0; i < n; i++) {
    const dt = temps[i] - meanTemp
    const de = esfuerzos[i] - meanEsfuerzo
    num += dt * de
    denTemp += dt * dt
    denEsfuerzo += de * de
  }

  const r = denTemp === 0 || denEsfuerzo === 0 ? 0 : num / Math.sqrt(denTemp * denEsfuerzo)
  const slope = denTemp === 0 ? 0 : num / denTemp
  const intercept = meanEsfuerzo - slope * meanTemp
  const minTemp = Math.min(...temps)
  const maxTemp = Math.max(...temps)

  return {
    n,
    r,
    // Solo los dos puntos extremos: una recta no necesita más para dibujarse.
    line: [
      [minTemp, intercept + slope * minTemp],
      [maxTemp, intercept + slope * maxTemp],
    ],
  }
})

const correlationText = computed(() => {
  if (!regression.value) return ''
  const { r } = regression.value

  const abs = Math.abs(r)
  const strength =
    abs < 0.1 ? 'prácticamente no hay relación entre temperatura y esfuerzo'
    : abs < 0.3 ? 'una relación débil'
    : abs < 0.5 ? 'una relación moderada'
    : abs < 0.7 ? 'una relación notable'
    : 'una relación fuerte'

  if (abs < 0.1) return strength
  const direction = r > 0 ? 'a más calor, esfuerzo percibido algo más alto' : 'a más calor, esfuerzo percibido algo más bajo'
  return `${strength}: ${direction}`
})

// Cifras animadas (cuentan hacia arriba/abajo al cambiar en vez de saltar).
const correlationSource = computed(() => regression.value?.r ?? null)
const correlationDisplay = useCountUp(correlationSource, 2)
const sessionsDisplay = useCountUp(computed(() => stats.value.count), 0)
const avgTempDisplay = useCountUp(computed(() => stats.value.avgTemp), 1)
const avgEsfuerzoDisplay = useCountUp(computed(() => stats.value.avgEsfuerzo), 1)

const scatterOption = computed(() => ({
  backgroundColor: 'transparent',
  legend: regression.value
    ? { bottom: 0, data: ['Entrenamientos', 'Tendencia'], textStyle: { color: DARK_CHART.axis } }
    : undefined,
  grid: { left: 56, right: 24, top: 28, bottom: regression.value ? 72 : 48, containLabel: true },
  tooltip: {
    ...TOOLTIP,
    trigger: 'item',
    formatter: (p) =>
      p.seriesName === 'Tendencia'
        ? 'Tendencia (regresión lineal)'
        : `<strong>${p.value[1]}/10</strong> de esfuerzo &middot; ${p.value[0]}&deg;C`,
  },
  xAxis: {
    type: 'value',
    name: 'Temperatura (°C)',
    nameLocation: 'middle',
    nameGap: 30,
    nameTextStyle: { color: DARK_CHART.axis },
    axisLine: { lineStyle: { color: DARK_CHART.grid } },
    splitLine: { lineStyle: { color: DARK_CHART.grid } },
    axisLabel: { color: DARK_CHART.axis },
  },
  yAxis: {
    type: 'value',
    name: 'Esfuerzo percibido',
    min: 0,
    max: 10,
    nameTextStyle: { color: DARK_CHART.axis },
    axisLine: { lineStyle: { color: DARK_CHART.grid } },
    splitLine: { lineStyle: { color: DARK_CHART.grid } },
    axisLabel: { color: DARK_CHART.axis },
  },
  series: [
    {
      name: 'Entrenamientos',
      type: 'scatter',
      symbolSize: 14,
      itemStyle: { color: DARK_CHART.mark, opacity: 0.9 },
      data: filteredSessions.value
        .filter((s) => s.clima_disponible)
        .map((s) => [s.temp_c, s.esfuerzo_percibido]),
      animationEasing: 'cubicOut',
    },
    ...(regression.value
      ? [
          {
            name: 'Tendencia',
            type: 'line',
            showSymbol: false,
            silent: true,
            lineStyle: { type: 'dashed', width: 2, color: '#f4ede1' },
            data: regression.value.line,
          },
        ]
      : []),
  ],
}))

const lineOption = computed(() => {
  const list = filteredSessions.value
  return {
    backgroundColor: 'transparent',
    grid: { left: 48, right: 24, top: 28, bottom: 48, containLabel: true },
    tooltip: {
      ...TOOLTIP,
      trigger: 'axis',
      formatter: (params) => {
        const p = params[0]
        const s = list[p.dataIndex]
        if (!s) return ''
        return `Sesión ${p.dataIndex + 1} &middot; ${sportLabel(s.deporte)}<br/><strong>${s.esfuerzo_percibido}/10</strong> de esfuerzo`
      },
    },
    xAxis: {
      type: 'category',
      data: list.map((_, i) => `#${i + 1}`),
      axisLine: { lineStyle: { color: LIGHT_CHART.grid } },
      axisLabel: { color: LIGHT_CHART.axis },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      name: 'Esfuerzo percibido',
      min: 0,
      max: 10,
      nameTextStyle: { color: LIGHT_CHART.axis },
      axisLine: { lineStyle: { color: LIGHT_CHART.grid } },
      splitLine: { lineStyle: { color: LIGHT_CHART.grid } },
      axisLabel: { color: LIGHT_CHART.axis },
    },
    series: [
      {
        type: 'line',
        lineStyle: { width: 2, color: LIGHT_CHART.mark },
        itemStyle: { color: LIGHT_CHART.mark, borderWidth: 2, borderColor: '#f3c94c' },
        symbolSize: 8,
        areaStyle: { color: LIGHT_CHART.markSoft },
        data: list.map((s) => s.esfuerzo_percibido),
        animationEasing: 'cubicOut',
        label: {
          show: true,
          formatter: (p) => (p.dataIndex === list.length - 1 ? `${p.value}/10` : ''),
          color: LIGHT_CHART.mark,
          fontWeight: 600,
        },
      },
    ],
  }
})

const barOption = computed(() => {
  const list = filteredSessions.value
  const counts = SPORTS.map((sport) => list.filter((s) => s.deporte === sport.value).length)
  return {
    backgroundColor: 'transparent',
    grid: { left: 40, right: 24, top: 28, bottom: 48, containLabel: true },
    tooltip: {
      ...TOOLTIP,
      trigger: 'item',
      formatter: (p) => `<strong>${p.value}</strong> sesión(es) de ${p.name}`,
    },
    xAxis: {
      type: 'category',
      data: SPORTS.map((s) => s.label),
      axisLine: { lineStyle: { color: LIGHT_CHART.grid } },
      axisLabel: { color: LIGHT_CHART.axis },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      axisLine: { lineStyle: { color: LIGHT_CHART.grid } },
      splitLine: { lineStyle: { color: LIGHT_CHART.grid } },
      axisLabel: { color: LIGHT_CHART.axis },
    },
    series: [
      {
        type: 'bar',
        barMaxWidth: 28,
        itemStyle: { color: LIGHT_CHART.mark, borderRadius: [6, 6, 0, 0] },
        label: { show: true, position: 'top', color: LIGHT_CHART.axis },
        data: counts,
        animationEasing: 'elasticOut',
        animationDelay: (i) => i * 60,
      },
    ],
  }
})

const formatNumber = (value, decimals = 1) => (value === null || value === undefined ? '—' : value.toFixed(decimals))
const formatDate = (iso) => new Date(iso).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' })

function csvEscape(value) {
  if (value === null || value === undefined) return ''
  const str = String(value)
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str
}

// Exporta exactamente lo que se ve en la tabla (respeta los filtros activos),
// con BOM al principio para que Excel detecte bien los acentos en UTF-8.
function downloadCsv() {
  const rows = filteredSessions.value.map((s) => CSV_COLUMNS.map((key) => csvEscape(s[key])).join(','))
  const csv = [CSV_COLUMNS.join(','), ...rows].join('\n')
  const blob = new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `rendimiento-deportivo_${Date.now()}.csv`
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <section class="rendimiento section">
    <div class="rendimiento__inner">
      <div class="rendimiento__header">
        <div class="rendimiento__header-text">
          <p class="section__eyebrow">Proyecto &middot; Machine Learning</p>
          <h2 class="section__title">Rendimiento deportivo y clima</h2>
          <p class="rendimiento__intro">
            Este proyecto nace de un pipeline ETL real del máster: cruzar entrenamientos de deportistas con las
            condiciones meteorológicas del momento, para ver si el calor o la humedad afectan al esfuerzo percibido.
            Aquí abajo tienes una <strong>simulación interactiva</strong> de ese mismo pipeline: el clima es real
            (consultado en directo a Open-Meteo), los entrenamientos son sintéticos y se generan en tu navegador.
          </p>
        </div>

        <div class="rendimiento__note">
          <p class="rendimiento__note-label">Cómo he llegado hasta aquí?? </p>
          <p class="rendimiento__note-text">
            En el máster trabajamos sobre todo con Python: pandas, matplotlib, notebooks de Jupyter, así diseñé
            el pipeline original de este proyecto. Para esta
            demo he consultado en un manual de Nuxt, que se puede mejorar un poco más el tema de los gráficos, entocnes
            con mi amigo Claudio (xd), hemos conseguido llevar ese mismo análisis a una página
            web de verdad... Todo funcional de momento!
          </p>
          <p class="rendimiento__note-text">
            POR QUÉ DE TODO ESTO:

                      Un gráfico de matplotlib es como una foto: lo dibujas y, para verlo distinto, tienes que volver a
            ejecutar la celda. Una web hecha con JavaScript se queda "escuchando" todo el rato, así que al
            pulsar un botón reacciona al instante, sin que nadie vuelva a ejecutar nada. Para conseguirlo aquí
            he tenido que aprender un nuevo componente para Nuxt y una librería de gráficos (ECharts) que no había tocado en clase.
          </p>
        </div>
      </div>

      <div class="rendimiento__toolbar">
        <div class="rendimiento__toolbar-bg" aria-hidden="true">
          <svg class="rendimiento__toolbar-wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path class="rendimiento__toolbar-wave-path" d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150" />
          </svg>
        </div>

        <div class="rendimiento__toolbar-inner">

          <div class="rendimiento__toolbar-row">
            <div class="rendimiento__field">
              <label for="next-sport">Deporte</label>
              <select id="next-sport" v-model="nextSport">
                <option v-for="sport in SPORTS" :key="sport.value" :value="sport.value">{{ sport.label }}</option>
              </select>
            </div>

            <div class="rendimiento__field">
              <label for="next-city">Ciudad</label>
              <select id="next-city" v-model="nextCity">
                <option v-for="city in CITIES" :key="city.value" :value="city.value">{{ city.label }}</option>
              </select>
            </div>

            <button type="button" class="btn rendimiento__btn-primary" :disabled="simulating || simulatingBatch" @click="simulate">
              <span class="btn__label">
                <span class="btn__label-text">
                  <span v-if="simulating" class="rendimiento__spinner" aria-hidden="true"></span>
                  {{ simulating ? 'Consultando clima…' : 'Simular entrenamiento' }}
                </span>
                <span class="btn__label-text btn__label-text--clone" aria-hidden="true">{{ simulating ? 'Consultando clima…' : 'Simular entrenamiento' }}</span>
              </span>
            </button>

            <div class="rendimiento__field">
              <label for="batch-size">Tamaño del lote</label>
              <select id="batch-size" v-model.number="batchSize">
                <option v-for="size in BATCH_SIZES" :key="size" :value="size">{{ size }}</option>
              </select>
            </div>

            <button type="button" class="btn rendimiento__btn-secondary" :disabled="simulating || simulatingBatch" @click="simulateBatch">
              <span class="btn__label">
                <span class="btn__label-text">
                  <span v-if="simulatingBatch" class="rendimiento__spinner" aria-hidden="true"></span>
                  {{ simulatingBatch ? 'Generando lote…' : `Generar ${batchSize} aleatorios` }}
                </span>
                <span class="btn__label-text btn__label-text--clone" aria-hidden="true">{{ simulatingBatch ? 'Generando lote…' : `Generar ${batchSize} aleatorios` }}</span>
              </span>
            </button>

            <button v-if="sessions.length" type="button" class="rendimiento__reset" @click="reset">
              Reiniciar
            </button>
          </div>

          <p class="rendimiento__toolbar-hint">
            «Generar {{ batchSize }} aleatorios» sortea deporte y ciudad en cada uno, pero pide el clima real una
            sola vez por ciudad (como mucho {{ CITIES.length }} llamadas, aunque el lote sea de 200).
          </p>
        </div>
      </div>

      <p v-if="simulateError" class="rendimiento__error">{{ simulateError }}</p>

      <template v-if="sessions.length === 0">
        <p class="rendimiento__empty">
          Todavía no hay entrenamientos simulados. Pulsa «Simular entrenamiento» para generar el primero.
        </p>
      </template>

      <template v-else>
        <div class="rendimiento__bento-grid">
          <div class="rendimiento__bento rendimiento__bento--ink rendimiento__bento--hero">
            <p class="rendimiento__bento-label">Correlación temperatura &middot; esfuerzo</p>
            <p class="rendimiento__bento-figure">{{ regression ? correlationDisplay : '—' }}</p>
            <p class="rendimiento__bento-caption">
              {{ regression ? correlationText : 'Simula al menos 3 sesiones con clima disponible para calcularla.' }}
            </p>
          </div>

          <div class="rendimiento__bento rendimiento__bento--yellow">
            <p class="rendimiento__bento-label">Sesiones simuladas</p>
            <p class="rendimiento__bento-value">{{ sessionsDisplay }}</p>
          </div>

          <div class="rendimiento__bento rendimiento__bento--pink">
            <p class="rendimiento__bento-label">Temperatura media</p>
            <p class="rendimiento__bento-value">{{ avgTempDisplay }}&deg;C</p>
          </div>

          <div class="rendimiento__bento rendimiento__bento--moss">
            <p class="rendimiento__bento-label">Esfuerzo medio</p>
            <p class="rendimiento__bento-value">{{ avgEsfuerzoDisplay }}/10</p>
          </div>

          <div class="rendimiento__bento rendimiento__bento--cream">
            <p class="rendimiento__bento-label">Deporte más simulado</p>
            <Transition name="rd-fade" mode="out-in">
              <p class="rendimiento__bento-value rendimiento__bento-value--text" :key="stats.topSport">
                {{ stats.topSport ? sportLabel(stats.topSport) : '—' }}
              </p>
            </Transition>
          </div>
        </div>

        <div class="rendimiento__filters">
          <div class="rendimiento__field">
            <label for="filter-sport">Filtrar por deporte</label>
            <select id="filter-sport" v-model="filterSport">
              <option value="todos">Todos</option>
              <option v-for="sport in SPORTS" :key="sport.value" :value="sport.value">{{ sport.label }}</option>
            </select>
          </div>
          <div class="rendimiento__field">
            <label for="filter-city">Filtrar por ciudad</label>
            <select id="filter-city" v-model="filterCity">
              <option value="todos">Todas</option>
              <option v-for="city in CITIES" :key="city.value" :value="city.label">{{ city.label }}</option>
            </select>
          </div>
        </div>

        <ClientOnly>
          <div class="rendimiento__charts">
            <div class="rendimiento__bento rendimiento__bento--moss rendimiento__chart rendimiento__chart--wide">
              <h3 class="rendimiento__chart-title">¿Entrenas peor con calor?</h3>
              <VChart class="rendimiento__chart-canvas" :option="scatterOption" autoresize />
            </div>
            <div class="rendimiento__bento rendimiento__bento--pink rendimiento__chart">
              <h3 class="rendimiento__chart-title">Sesiones por deporte</h3>
              <VChart class="rendimiento__chart-canvas" :option="barOption" autoresize />
            </div>
            <div class="rendimiento__bento rendimiento__bento--yellow rendimiento__chart">
              <h3 class="rendimiento__chart-title">Evolución del esfuerzo percibido</h3>
              <VChart class="rendimiento__chart-canvas" :option="lineOption" autoresize />
            </div>
          </div>
          <template #fallback>
            <p class="rendimiento__empty">Cargando gráficos…</p>
          </template>
        </ClientOnly>

        <div class="rendimiento__table-card">
          <div class="rendimiento__table-header">
            <div>
              <h3 class="rendimiento__table-title">Datos de la muestra</h3>
              <p class="rendimiento__table-count">{{ filteredSessions.length }} fila(s)</p>
            </div>
            <button
              type="button"
              class="rendimiento__csv-btn"
              :disabled="filteredSessions.length === 0"
              @click="downloadCsv"
            >
              Descargar CSV &darr;
            </button>
          </div>

          <div class="rendimiento__table-wrap">
            <table class="rendimiento__table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Deporte</th>
                  <th>Duración</th>
                  <th>Distancia</th>
                  <th>Esfuerzo</th>
                  <th>Sensación</th>
                  <th>Ciudad</th>
                  <th>Temp.</th>
                  <th>Humedad</th>
                  <th>Clima</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s in [...filteredSessions].reverse()" :key="s.id">
                  <td>{{ formatDate(s.timestamp) }}</td>
                  <td>{{ sportLabel(s.deporte) }}</td>
                  <td>{{ s.duracion_min }} min</td>
                  <td>{{ s.distancia_km !== null ? `${s.distancia_km} km` : '—' }}</td>
                  <td>{{ s.esfuerzo_percibido }}/10</td>
                  <td>{{ s.sensacion_general }}</td>
                  <td>{{ s.ciudad }}</td>
                  <td>{{ s.clima_disponible ? `${formatNumber(s.temp_c)}°C` : '—' }}</td>
                  <td>{{ s.clima_disponible ? `${formatNumber(s.humedad_pct, 0)}%` : '—' }}</td>
                  <td>{{ s.clima_disponible ? 'Sí' : 'No disponible' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.rendimiento {
  /* Paleta propia de este proyecto: no se reutiliza en el resto del sitio a
     propósito, para que se sienta como una pieza con identidad aparte. */
  --rd-ink: #14140f;
  --rd-cream: #f4ede1;
  --rd-yellow: #f3c94c;
  --rd-yellow-ink: #1c1203;
  --rd-pink: #f3a6c4;
  --rd-pink-ink: #3a0e21;
  --rd-moss: #1f3a26;
}

/* Esta página vive más ancha que el resto del sitio (que se queda en
   --container-max: 1200px): es un proyecto aparte y se le deja su propio
   lienzo, más "panel de control" que "artículo". La textura de líneas solo
   vive en el <section> (ocupa el 100% real del viewport) y se asoma por los
   huecos entre tarjetas del bento grid y alrededor del texto. */
.rendimiento.section {
  position: relative;
  background-color: var(--color-bg);
  background-image: repeating-linear-gradient(
    135deg,
    rgba(56, 102, 62, 0.07) 0px,
    rgba(56, 102, 62, 0.07) 1px,
    transparent 1px,
    transparent 28px
  );
}

.rendimiento__inner {
  max-width: 1680px;
  margin: 0 auto;
  padding-left: clamp(20px, 4vw, 64px);
  padding-right: clamp(20px, 4vw, 64px);
}

/* El título/intro y la nota de aprendizaje van lado a lado: con la página ya
   ancha (1680px), apilar todo en una sola columna angosta dejaba muchísimo
   hueco muerto a la derecha. En móvil/tablet vuelve a apilarse. */
.rendimiento__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 420px);
  gap: 40px;
  align-items: start;
}

@media (max-width: 1000px) {
  .rendimiento__header {
    grid-template-columns: 1fr;
  }
}

.rendimiento__intro {
  margin-top: 20px;
  max-width: 640px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

/* Nota al margen, no tarjeta de datos: por eso un borde de color en vez del
   tratamiento "bento" completo — es contexto para quien lea, no una métrica. */
.rendimiento__note {
  padding: 18px 24px;
  border-left: 3px solid #c6ff5e;
  border-radius: 0 16px 16px 0;
  background: var(--rd-cream);
}

.rendimiento__note-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--rd-ink);
}

.rendimiento__note-text {
  margin-top: 10px;
  font-size: 0.92rem;
  line-height: 1.6;
  color: rgba(20, 20, 15, 0.72);
}

.rendimiento__note-text + .rendimiento__note-text {
  margin-top: 10px;
}

/* Panel de control oscuro: mismo lenguaje visual que el header/hero del
   sitio (negro + onda verde animada de fondo), para que el simulador se lea
   como una herramienta aparte y no como un párrafo más de la página. */
.rendimiento__toolbar {
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  border-radius: 24px;
  background: var(--color-black);
}

.rendimiento__toolbar::after {
  content: '';
  position: absolute;
  right: -8%;
  bottom: -35%;
  z-index: 0;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(198, 255, 94, 0.16), transparent 70%);
  filter: blur(10px);
  pointer-events: none;
}

.rendimiento__toolbar-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.rendimiento__toolbar-wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.rendimiento__toolbar-wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.25;
  animation: rendimiento-wave-float 13s ease-in-out infinite alternate;
}

@keyframes rendimiento-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-16px) scaleY(1.05);
  }
}

.rendimiento__toolbar-inner {
  position: relative;
  z-index: 1;
  padding: 28px 32px 24px;
}

.rendimiento__toolbar-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.rendimiento__live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: rendimiento-pulse 1.8s ease-in-out infinite;
}

@keyframes rendimiento-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.75); }
}

.rendimiento__toolbar-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px;
  margin-top: 16px;
}

.rendimiento__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rendimiento__field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.rendimiento__field select {
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: #ffffff;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  min-width: 150px;
  transition: border-color 0.2s ease;
}

.rendimiento__field select:focus-visible {
  border-color: var(--color-accent-dark);
  outline: none;
}

.rendimiento__toolbar .rendimiento__field label {
  color: rgba(244, 237, 225, 0.72);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.rendimiento__toolbar .rendimiento__field select {
  border: 1.5px solid rgba(244, 237, 225, 0.3);
  background: #211f17;
  color: #f4ede1;
  font-weight: 600;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.rendimiento__toolbar .rendimiento__field select:hover {
  border-color: rgba(244, 237, 225, 0.55);
}

.rendimiento__toolbar .rendimiento__field select:focus-visible {
  border-color: #c6ff5e;
  background: #272518;
  outline: none;
  box-shadow: 0 0 0 3px rgba(198, 255, 94, 0.22);
}

.rendimiento__toolbar .btn {
  height: 44px;
}

/* Botón primario con relleno lima sólido: la variante .btn--glass-green del
   sitio está pensada para fondos claros (texto verde oscuro), por eso se
   leía mal sobre el panel negro. Esta sí está pensada para ello. */
.rendimiento__btn-primary {
  background: #c6ff5e;
  border-color: #c6ff5e;
  color: var(--rd-ink);
}

.rendimiento__btn-primary .btn__label-text--clone {
  color: var(--rd-ink);
}

.rendimiento__btn-primary:hover {
  background: #d8ff8c;
}

/* Secundario: contorno lima sobre transparente, que se rellena al hover —
   misma mecánica de "texto que sube" que el resto de .btn del sitio, pero
   con suficiente contraste real sobre negro (antes era .btn--glass-white,
   demasiado apagado aquí). */
.rendimiento__btn-secondary {
  background: transparent;
  border: 1.5px solid #c6ff5e;
  color: #c6ff5e;
}

.rendimiento__btn-secondary .btn__label-text--clone {
  color: var(--rd-ink);
}

.rendimiento__btn-secondary:hover {
  background: #c6ff5e;
  color: var(--rd-ink);
}

.rendimiento__spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid rgba(140, 140, 120, 0.4);
  border-top-color: currentColor;
  vertical-align: -1px;
  animation: rendimiento-spin 0.7s linear infinite;
}

@keyframes rendimiento-spin {
  to { transform: rotate(360deg); }
}

.rendimiento__reset {
  height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  border: 1.5px solid rgba(244, 237, 225, 0.3);
  background: transparent;
  color: rgba(244, 237, 225, 0.75);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.rendimiento__reset:hover {
  border-color: #c6ff5e;
  color: #c6ff5e;
}

.rendimiento__toolbar-hint {
  margin-top: 16px;
  max-width: 640px;
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgba(244, 237, 225, 0.55);
}

.rendimiento__error {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--color-accent-soft);
  color: var(--color-text);
  font-size: 0.9rem;
}

.rendimiento__empty {
  margin-top: 32px;
  padding: 32px;
  border-radius: 16px;
  border: 1px dashed var(--color-border);
  text-align: center;
  color: var(--color-text-muted);
}

/* La pieza "bento": una tarjeta con fondo de color plano, un brillo sutil
   arriba a la izquierda (el mismo truco de .page-hero__glow pero como
   degradado dentro de la propia tarjeta) y una pequeña animación de entrada
   la primera vez que aparece. El hover nunca se recorta (sin overflow en el
   padre) para que la sombra y el desplazamiento se vean enteros. */
.rendimiento__bento {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: 24px;
  animation: rd-card-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.rendimiento__bento > * {
  position: relative;
  z-index: 1;
}

.rendimiento__bento:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px -26px rgba(0, 0, 0, 0.45);
}

@keyframes rd-card-in {
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .rendimiento__bento,
  .rendimiento__toolbar-wave-path,
  .rendimiento__live-dot {
    animation: none;
  }
}

.rendimiento__bento--ink { background: var(--rd-ink); color: var(--rd-cream); }
.rendimiento__bento--yellow { background: var(--rd-yellow); color: var(--rd-yellow-ink); }
.rendimiento__bento--pink { background: var(--rd-pink); color: var(--rd-pink-ink); }
.rendimiento__bento--moss { background: var(--rd-moss); color: var(--rd-cream); }
.rendimiento__bento--cream { background: var(--rd-cream); color: var(--rd-ink); }

.rendimiento__bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(120px, auto));
  gap: 16px;
  margin-top: 32px;
}

.rendimiento__bento-grid .rendimiento__bento:nth-child(1) { animation-delay: 0ms; }
.rendimiento__bento-grid .rendimiento__bento:nth-child(2) { animation-delay: 70ms; }
.rendimiento__bento-grid .rendimiento__bento:nth-child(3) { animation-delay: 120ms; }
.rendimiento__bento-grid .rendimiento__bento:nth-child(4) { animation-delay: 170ms; }
.rendimiento__bento-grid .rendimiento__bento:nth-child(5) { animation-delay: 220ms; }

.rendimiento__bento--hero {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rendimiento__bento-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  opacity: 0.65;
}

.rendimiento__bento-figure {
  margin-top: 12px;
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: clamp(2.75rem, 5vw, 4rem);
  line-height: 1;
}

.rendimiento__bento-caption {
  margin-top: 12px;
  max-width: 36ch;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.8;
}

.rendimiento__bento-value {
  margin-top: 10px;
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1;
}

.rendimiento__bento-value--text {
  font-size: 1.3rem;
  text-transform: capitalize;
}

.rd-fade-enter-active,
.rd-fade-leave-active {
  transition: opacity 0.25s ease;
}

.rd-fade-enter-from,
.rd-fade-leave-to {
  opacity: 0;
}

.rendimiento__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.rendimiento__charts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 28px;
}

.rendimiento__charts .rendimiento__bento:nth-child(1) { animation-delay: 0ms; }
.rendimiento__charts .rendimiento__bento:nth-child(2) { animation-delay: 80ms; }
.rendimiento__charts .rendimiento__bento:nth-child(3) { animation-delay: 160ms; }

.rendimiento__chart--wide {
  grid-column: 1 / -1;
}

.rendimiento__chart-title {
  font-size: 1.05rem;
  font-weight: 600;
}

.rendimiento__chart-canvas {
  width: 100%;
  height: 320px;
  margin-top: 12px;
}

/* Tabla siempre visible, como un panel más del dashboard: cabecera fija y
   scroll propio en vez de alargar la página indefinidamente con lotes de
   200 filas. */
.rendimiento__table-card {
  margin-top: 28px;
  border-radius: 20px;
  background: var(--rd-cream);
  overflow: hidden;
}

.rendimiento__table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
}

.rendimiento__table-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--rd-ink);
}

.rendimiento__table-count {
  margin-top: 4px;
  font-size: 0.85rem;
  color: rgba(20, 20, 15, 0.6);
}

.rendimiento__csv-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  border: none;
  background: var(--rd-ink);
  color: var(--rd-cream);
  font-weight: 600;
  font-size: 0.82rem;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
}

.rendimiento__csv-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  background: var(--rd-moss);
}

.rendimiento__csv-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.rendimiento__table-wrap {
  max-height: 440px;
  overflow: auto;
  border-top: 2px solid var(--rd-ink);
}

.rendimiento__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
}

.rendimiento__table th,
.rendimiento__table td {
  padding: 10px 16px;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid rgba(20, 20, 15, 0.1);
}

.rendimiento__table th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--rd-ink);
  color: var(--rd-cream);
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.rendimiento__table tbody tr:hover {
  background: rgba(243, 201, 76, 0.35);
}

@media (max-width: 900px) {
  .rendimiento__bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .rendimiento__bento--hero {
    grid-column: 1 / -1;
    grid-row: auto;
  }

  .rendimiento__charts {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .rendimiento__bento-grid {
    grid-template-columns: 1fr;
  }

  .rendimiento__bento--hero {
    grid-column: 1;
  }

  .rendimiento__table-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
