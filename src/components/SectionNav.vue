<template>
  <nav class="fixed left-0 top-0 h-full hidden lg:flex flex-col justify-center pl-6 z-50 pointer-events-none">
    <ul class="space-y-6 pointer-events-auto">
      <li v-for="(item, i) in sections" :key="item.id"
          class="relative group cursor-pointer transition-all duration-300"
          :class="active === item.id ? 'pl-4' : 'pl-0'"
          @click="scrollTo(item.id)">

        <!-- línea vertical activa -->
        <div class="absolute -left-2 top-0 bottom-0 w-[2px] bg-zinc-800 group-hover:bg-cyan-500/40 transition-colors"
             :class="active === item.id ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : ''"></div>

        <div class="flex items-center gap-3">
          <span class="font-mono text-xs transition-all duration-300"
                :class="active === item.id ? 'text-cyan-400 text-base font-bold' : 'text-zinc-700'">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div class="overflow-hidden transition-all duration-300"
               :class="active === item.id ? 'max-w-[160px] opacity-100' : 'max-w-0 opacity-0'">
            <span class="font-mono text-[10px] uppercase tracking-widest text-white whitespace-nowrap">
              {{ item.label }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'section1', label: 'Perfil de Sistema' },
  { id: 'section2', label: 'Arsenal Técnico' },
  { id: 'section3', label: 'Estación & Enfoque' },
  { id: 'section4', label: 'Trayectoria' },
]

const active = ref('section1')
let observer

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) active.value = entry.target.id
    })
  }, { threshold: 0.4 })

  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => observer && observer.disconnect())
</script>