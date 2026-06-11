<template>
  <div class="relative" ref="timelineWrapper">
    <div class="absolute left-[7px] md:left-[11px] top-2 bottom-0 w-[1px] bg-zinc-900 overflow-hidden">
      <div ref="progressLine" class="w-full bg-gradient-to-b from-cyan-400 to-purple-500 origin-top" style="height:0%"></div>
    </div>

    <div class="space-y-10 md:space-y-16">
      <div v-for="(item, i) in timeline" :key="i"
           class="relative pl-8 md:pl-14 group timeline-item"
           :data-index="i">
           
        <div class="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 flex items-center justify-center transition-all duration-500 timeline-node"
          :class="item.active ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.4)]' : 'border-zinc-800 bg-zinc-950 group-hover:border-zinc-600'">
          <div v-if="item.active" class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
        </div>

        <div class="space-y-2">
          <div class="flex flex-wrap items-baseline gap-3">
            <span class="font-mono text-[10px] tracking-widest uppercase" :class="item.active ? 'text-cyan-400' : 'text-zinc-600'">{{ item.date }}</span>
            <span v-if="item.active" class="font-mono text-[9px] text-emerald-400 border border-emerald-800/50 bg-emerald-950/30 px-2 py-0.5 rounded-full">PRESENTE</span>
          </div>
          <h4 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
            {{ item.role }}
          </h4>
          <div class="font-mono text-xs text-zinc-500">{{ item.company }}</div>
          <p class="text-zinc-400 font-sans text-sm leading-relaxed normal-case max-w-2xl">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// CORRECCIÓN PARA V4: Importación nombrada en minúsculas
import { animate } from 'animejs'

const props = defineProps({ timeline: Array })
const timelineWrapper = ref(null)
const progressLine = ref(null)

let itemObserver = null

onMounted(() => {
  const items = timelineWrapper.value.querySelectorAll('.timeline-item')

  itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // En v4 se usa 'animate' en lugar de 'anime'
        animate(entry.target, {
          translateX: [-30, 0],
          opacity: [0, 1]
        }, {
          duration: 700,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // v4 prefiere curvas estándar o predefinidas
        })

        animate(entry.target.querySelector('.timeline-node'), {
          scale: [0, 1]
        }, {
          duration: 600,
          delay: 150,
          easing: 'ease-out-back',
        })
        itemObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  items.forEach(el => {
    el.style.opacity = '0'
    itemObserver.observe(el)
  })

  const updateProgress = () => {
    if (!timelineWrapper.value || !progressLine.value) return
    const rect = timelineWrapper.value.getBoundingClientRect()
    const total = rect.height
    const scrolled = Math.min(Math.max((window.innerHeight * 0.7) - rect.top, 0), total)
    const percent = (scrolled / total) * 100
    
    // En v4 animamos la propiedad directamente
    animate(progressLine.value, {
      height: `${percent}%`
    }, {
      duration: 150,
      easing: 'linear',
    })
  }

  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()

  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
    if (itemObserver) itemObserver.disconnect()
  })
})
</script>