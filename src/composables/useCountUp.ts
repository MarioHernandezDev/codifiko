import type { Ref } from 'vue'

/**
 * Anima la transición entre el valor anterior y el nuevo de un número
 * reactivo (ease-out cúbico), y devuelve el texto ya formateado. `null`
 * (p.ej. "sin datos de clima todavía") no se anima, se corta directo a '—'.
 */
export function useCountUp(source: Ref<number | null>, decimals = 1) {
  const display = ref(source.value)
  let frame: number | null = null

  watch(source, (next, prev) => {
    if (frame !== null) cancelAnimationFrame(frame)

    if (next === null || prev === null || prev === undefined) {
      display.value = next
      return
    }

    const from = prev
    const start = performance.now()
    const duration = 650

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      display.value = from + (next - from) * eased
      frame = t < 1 ? requestAnimationFrame(step) : null
    }
    frame = requestAnimationFrame(step)
  })

  return computed(() => (display.value === null || display.value === undefined ? '—' : display.value.toFixed(decimals)))
}
