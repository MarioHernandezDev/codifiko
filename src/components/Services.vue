<template>
  <section id="services" class="relative bg-[#080809] py-32 px-6 overflow-hidden border-t border-zinc-900/50">
    <div class="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto space-y-16">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <div class="md:col-span-8 space-y-4">
          <div class="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-cyan-500 uppercase">
            <span class="w-8 h-[1px] bg-cyan-500"></span>
            [ system_capabilities_v2.0 ]
          </div>
          <h2 class="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase font-sans leading-none">
            Ingeniería <br /> <span class="text-zinc-800 italic">Sin Límites.</span>
          </h2>
        </div>
        <div class="md:col-span-4 font-mono text-xs text-zinc-500 md:text-right pb-2">
          // core_capabilities_loaded_successfully <br class="hidden md:inline" />
          // node_grx // speed_optimized: true
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div 
          ref="card1"
          class="lg:col-span-7 group relative p-[1px] rounded-xl bg-gradient-to-br from-zinc-800 to-transparent hover:from-cyan-500/50 transition-all duration-500 ease-out"
          @mousemove="handleMove($event, 0)" @mouseleave="handleLeave(0)" :style="styles[0].card"
        >
          <div class="relative h-full bg-[#0b0b0d] rounded-xl p-8 md:p-10 overflow-hidden">
            <div class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" :style="styles[0].spotlight"></div>
            
            <div class="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div class="flex justify-between items-start">
                <div class="text-cyan-500 text-3xl bg-cyan-950/30 p-4 border border-cyan-800/20 rounded-lg">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <span class="font-mono text-[10px] text-zinc-700 tracking-widest uppercase">[ core_01 ]</span>
              </div>

              <div class="space-y-4">
                <h3 class="text-2xl md:text-3xl font-bold text-white font-sans uppercase">Arquitectura Nuxt & Apps de Alto Rendimiento</h3>
                <p class="text-zinc-400 text-sm leading-relaxed font-sans">
                  No creamos webs corporativas lentas. Desarrollamos infraestructuras de software robustas utilizando **Nuxt 3** y **Vue 3** optimizadas con renderizado híbrido (SSR/ISR). Código limpio, modular, desacoplado de interfaces pesadas, y preparado para escalar ante picos masivos de tráfico sin degradar la experiencia de usuario.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded-sm">Nuxt 3 (SSR)</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded-sm">Vue Composition API</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded-sm">State Management (Pinia)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 bg-[#0b0b0d] border border-zinc-900 rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full"></div>
          <div class="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">// performance_radar</div>
          
          <div class="my-auto py-6 space-y-2">
            <div class="text-6xl md:text-7xl font-black font-sans tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
              100%
            </div>
            <div class="font-mono text-xs text-zinc-400 uppercase tracking-wider">> Core Web Vitals Optimization</div>
            <p class="text-zinc-600 text-xs font-sans leading-relaxed">
              Estructuramos el CSS atómico y diferimos scripts de terceros para garantizar una puntuación impecable en Lighthouse y una carga instantánea real.
            </p>
          </div>

          <div class="flex gap-1 items-end h-8">
            <div class="bg-zinc-800 w-full h-3 group-hover:bg-cyan-500/30 transition-colors duration-300"></div>
            <div class="bg-zinc-800 w-full h-5 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
            <div class="bg-zinc-800 w-full h-8 group-hover:bg-cyan-500 transition-colors duration-700"></div>
            <div class="bg-zinc-800 w-full h-4 group-hover:bg-cyan-500/40 transition-colors duration-200"></div>
          </div>
        </div>

        <div 
          ref="card2"
          class="lg:col-span-5 group relative p-[1px] rounded-xl bg-gradient-to-br from-zinc-800 to-transparent hover:from-purple-500/50 transition-all duration-500 ease-out"
          @mousemove="handleMove($event, 1)" @mouseleave="handleLeave(1)" :style="styles[1].card"
        >
          <div class="relative h-full bg-[#0b0b0d] rounded-xl p-8 overflow-hidden">
            <div class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" :style="styles[1].spotlight"></div>
            
            <div class="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div class="flex justify-between items-start">
                <div class="text-purple-500 text-3xl bg-purple-950/30 p-4 border border-purple-800/20 rounded-lg">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <span class="font-mono text-[10px] text-zinc-700 tracking-widest uppercase">[ core_02 ]</span>
              </div>

              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-white font-sans uppercase">Diseño de Interfaz Radical e Interactivo</h3>
                <p class="text-zinc-400 text-sm leading-relaxed font-sans">
                  Interfaces que se sienten, no solo se ven. Desarrollamos experiencias inmersivas con micro-interacciones pulidas y animaciones fluidas a 60fps usando hardware acelerado. Capturamos la atención del usuario de inmediato, transmitiendo la autoridad técnica de tu marca a través del diseño visual.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-purple-400/70 rounded-sm">Tailwind JIT</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-purple-400/70 rounded-sm">CSS Shaders</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-purple-400/70 rounded-sm">Interactive UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref="card3"
          class="lg:col-span-7 group relative p-[1px] rounded-xl bg-gradient-to-br from-zinc-800 to-transparent hover:from-blue-500/50 transition-all duration-500 ease-out"
          @mousemove="handleMove($event, 2)" @mouseleave="handleLeave(2)" :style="styles[2].card"
        >
          <div class="relative h-full bg-[#0b0b0d] rounded-xl p-8 md:p-10 overflow-hidden">
            <div class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" :style="styles[2].spotlight"></div>
            
            <div class="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div class="flex justify-between items-start">
                <div class="text-blue-500 text-3xl bg-blue-950/30 p-4 border border-blue-800/20 rounded-lg">
                  <i class="fa-solid fa-chart-line"></i>
                </div>
                <span class="font-mono text-[10px] text-zinc-700 tracking-widest uppercase">[ core_03 ]</span>
              </div>

              <div class="space-y-4">
                <h3 class="text-2xl md:text-3xl font-bold text-white font-sans uppercase">Ingeniería SEO & Indexación Dominante</h3>
                <p class="text-zinc-400 text-sm leading-relaxed font-sans">
                  El posicionamiento en Google no es mágico; es pura ingeniería. Optimizamos la estructura de datos semántica (JSON-LD), automatizamos mapas de sitio dinámicos, inyectamos metaetiquetas en el servidor para rastreadores y diseñamos un flujo de enlaces internos limpio. Tu web nace preparada técnicamente para liderar los resultados de búsqueda.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-blue-400/70 rounded-sm">Structured Data</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-blue-400/70 rounded-sm">Dynamic SSR Metatags</span>
                  <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-blue-400/70 rounded-sm">Semantic HTML5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const cardRefs = [ref(null), ref(null), ref(null)]
const styles = reactive([
  { card: {}, spotlight: {} },
  { card: {}, spotlight: {} },
  { card: {}, spotlight: {} }
])

const handleMove = (e, index) => {
  const cards = [card1.value, card2.value, card3.value]
  const card = cards[index]
  if (!card) return
  
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 25
  const rotateY = (centerX - x) / 25

  // Sutil color de brillo interno según la tarjeta para darle dinamismo
  const colors = [
    'rgba(34, 211, 238, 0.08)', // Cian
    'rgba(168, 85, 247, 0.08)', // Morado
    'rgba(59, 130, 246, 0.08)'  // Azul
  ]

  styles[index].card = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    zIndex: 10
  }
  styles[index].spotlight = {
    background: `radial-gradient(450px circle at ${x}px ${y}px, ${colors[index]}, transparent 80%)`
  }
}

const handleLeave = (index) => {
  styles[index].card = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    zIndex: 1
  }
}

// Vinculamos los nombres para los refs individuales de Vue
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
</script>

<style scoped>
.group {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
</style>