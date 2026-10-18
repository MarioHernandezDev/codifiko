// Proxy a Open-Meteo: evita CORS desde el cliente y permite cachear la
// respuesta un rato corto, ya que el dato "current" solo cambia cada 15min.
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lat = Number(query.lat)
  const lon = Number(query.lon)

  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request', message: 'Parámetros lat/lon inválidos' })
  }

  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,precipitation',
    timezone: 'Europe/Madrid',
  })

  const response = await $fetch<{
    current: {
      time: string
      temperature_2m: number
      relative_humidity_2m: number
      wind_speed_10m: number
      uv_index: number
      precipitation: number
    }
  }>(`https://api.open-meteo.com/v1/forecast?${params.toString()}`)

  setResponseHeader(event, 'Cache-Control', 'public, max-age=300')

  return {
    time: response.current.time,
    temp_c: response.current.temperature_2m,
    humedad_pct: response.current.relative_humidity_2m,
    viento_kmh: response.current.wind_speed_10m,
    uv_index: response.current.uv_index,
    precipitacion_mm: response.current.precipitation,
  }
})
