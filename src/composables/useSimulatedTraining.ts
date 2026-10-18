export type Sport = 'running' | 'ciclismo' | 'natacion' | 'futbol' | 'otro'
export type Sensation = 'muy mal' | 'mal' | 'normal' | 'bien' | 'muy bien'

export interface City {
  value: string
  label: string
  lat: number
  lon: number
}

export interface Weather {
  time: string
  temp_c: number
  humedad_pct: number
  viento_kmh: number
  uv_index: number
  precipitacion_mm: number
}

export interface TrainingSession {
  id: string
  timestamp: string
  deporte: Sport
  duracion_min: number
  distancia_km: number | null
  esfuerzo_percibido: number
  sensacion_general: Sensation
  ciudad: string
  temp_c: number | null
  humedad_pct: number | null
  viento_kmh: number | null
  uv_index: number | null
  precipitacion_mm: number | null
  clima_disponible: boolean
}

export const SPORTS: { value: Sport; label: string }[] = [
  { value: 'running', label: 'Running' },
  { value: 'ciclismo', label: 'Ciclismo' },
  { value: 'natacion', label: 'Natación' },
  { value: 'futbol', label: 'Fútbol' },
  { value: 'otro', label: 'Otro' },
]

export const CITIES: City[] = [
  { value: 'granada', label: 'Granada', lat: 37.18, lon: -3.6 },
  { value: 'madrid', label: 'Madrid', lat: 40.4168, lon: -3.7038 },
  { value: 'barcelona', label: 'Barcelona', lat: 41.3851, lon: 2.1734 },
  { value: 'sevilla', label: 'Sevilla', lat: 37.3891, lon: -5.9845 },
  { value: 'bilbao', label: 'Bilbao', lat: 43.263, lon: -2.935 },
  { value: 'valencia', label: 'Valencia', lat: 39.4699, lon: -0.3763 },
]

const SENSATIONS: Sensation[] = ['muy mal', 'mal', 'normal', 'bien', 'muy bien']

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

// Rangos realistas por deporte, igual que rellenaría un deportista en el
// formulario original (duración/distancia varían según la disciplina).
const SPORT_RANGES: Record<Sport, { duracion: [number, number]; distancia: [number, number] | null; distanciaProb: number }> = {
  running: { duracion: [20, 75], distancia: [3, 16], distanciaProb: 1 },
  ciclismo: { duracion: [30, 150], distancia: [10, 70], distanciaProb: 1 },
  natacion: { duracion: [20, 60], distancia: [0.5, 3], distanciaProb: 0.6 },
  futbol: { duracion: [45, 100], distancia: null, distanciaProb: 0 },
  otro: { duracion: [15, 90], distancia: [1, 10], distanciaProb: 0.3 },
}

/**
 * Genera una fila sintética de "entrenamiento". El esfuerzo percibido se
 * sesga ligeramente con la temperatura/humedad reales para poder ilustrar,
 * en la demo, la misma hipótesis que plantea el pipeline del notebook
 * (entrenar con calor/humedad se percibe más duro) — no son datos reales.
 */
export function generateSyntheticSession(deporte: Sport, ciudad: string, weather: Weather | null): TrainingSession {
  const range = SPORT_RANGES[deporte]
  const duracion_min = Math.round(randomBetween(range.duracion[0], range.duracion[1]))
  const distancia_km =
    range.distancia && Math.random() < range.distanciaProb
      ? Math.round(randomBetween(range.distancia[0], range.distancia[1]) * 10) / 10
      : null

  let esfuerzo = randomBetween(3, 8)
  if (weather) {
    if (weather.temp_c >= 30) esfuerzo += 2
    else if (weather.temp_c >= 24) esfuerzo += 1
    if (weather.humedad_pct >= 75) esfuerzo += 1
  }
  const esfuerzo_percibido = Math.round(clamp(esfuerzo + randomBetween(-0.5, 0.5), 1, 10))

  const sensationIndex = clamp(Math.round((10 - esfuerzo_percibido) / 2 + randomBetween(-0.6, 0.6)), 0, 4)
  const sensacion_general = SENSATIONS[sensationIndex]

  return {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    deporte,
    duracion_min,
    distancia_km,
    esfuerzo_percibido,
    sensacion_general,
    ciudad,
    temp_c: weather?.temp_c ?? null,
    humedad_pct: weather?.humedad_pct ?? null,
    viento_kmh: weather?.viento_kmh ?? null,
    uv_index: weather?.uv_index ?? null,
    precipitacion_mm: weather?.precipitacion_mm ?? null,
    clima_disponible: weather !== null,
  }
}
