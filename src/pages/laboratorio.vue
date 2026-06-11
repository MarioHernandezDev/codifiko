<template>
  <div class="w-full relative select-none max-w-7xl mx-auto px-4 md:px-10 font-mono">
    
    <div class="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/[0.015] rounded-full blur-[160px] pointer-events-none -z-10"></div>
    <div class="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.015] rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <MiniHero
      sysRef="EXPERIMENTAL_SANDBOX // v1.2.0"
      titleFirst="ENTORNO DE"
      titleSecond="PRUEBAS // LAB"
    >
      <p class="text-zinc-400 font-sans text-base md:text-lg leading-relaxed border-l border-zinc-800 pl-6 normal-case max-w-3xl tracking-normal">
        Bienvenido a mi entorno aislado de ejecución. Este espacio está diseñado para experimentar con lógicas complejas, manipulación avanzada del DOM en tiempo real, matemáticas aplicadas a matrices de renderizado tridimensional y optimización de reactividad asíncrona.
      </p>
    </MiniHero>

    <div class="mt-28 md:mt-36 mb-32 relative z-10 space-y-28">
      
      <section class="space-y-6">
        <div class="border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// EXPERIMENTO_01</div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              01 / Core Game Loadout
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">MODULE // INTERACTIVE_STACK</span>
        </div>
        
        <div class="border border-zinc-900 bg-zinc-950/20 rounded-3xl h-[600px] overflow-hidden backdrop-blur-sm relative">
          <ClientOnly>
            <HomeGameStack />
          </ClientOnly>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        <div class="space-y-6">
          <div class="border-b border-zinc-900 pb-6 flex items-baseline justify-between">
            <div class="space-y-1">
              <div class="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// EXPERIMENTO_02</div>
              <h2 class="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">02 / Vector Math 3D</h2>
            </div>
            <span class="font-mono text-[9px] text-zinc-600 uppercase">MATRIX_ROTATION</span>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 md:p-8 h-[680px] flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
            <div>
              <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">
                Mueve el cursor sobre el chasis. Hemos ajustado las matrices de transformación a una escala amortiguada para lograr un efecto giroscópico sutil y cinemático.
              </p>
            </div>

            <div 
              class="flex-1 my-6 flex items-center justify-center [perspective:1200px] relative min-h-[360px]"
              @mousemove="handlePerspective"
              @mouseleave="resetPerspective"
              ref="phoneWrapper"
            >
              <div 
                ref="phoneChassis"
                class="relative w-[220px] h-[440px] bg-zinc-900 rounded-[38px] p-2.5 border-[5px] border-zinc-800 shadow-[10px_30px_60px_rgba(0,0,0,0.8)] will-change-transform"
                style="transform: rotateX(12deg) rotateY(-15deg) rotateZ(4deg); transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);"
              >
                <div class="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20"></div>
                <div class="w-full h-full bg-black rounded-[28px] overflow-hidden relative border border-zinc-950">
                  <iframe src="/" class="w-full h-full border-none pointer-events-auto select-none opacity-80 group-hover:opacity-100 transition-opacity" title="Cyborg Viewport"></iframe>
                </div>
              </div>
            </div>

            <div class="text-[9px] text-zinc-600 flex justify-between border-t border-zinc-900/60 pt-4">
              <span>ROTATION_LIMIT: +/- 12deg</span>
              <span>SYSTEM: Damping Matrix 3D</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="border-b border-zinc-900 pb-6 flex items-baseline justify-between">
            <div class="space-y-1">
              <div class="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase">// EXPERIMENTO_03</div>
              <h2 class="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">03 / Runtime Monitor</h2>
            </div>
            <span class="font-mono text-[9px] text-zinc-600 uppercase">STREAM_LIVE</span>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 md:p-8 h-[680px] flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
            <div>
              <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">
                Simulador reactivo de procesos en segundo plano. Muestra cómo controlo flujos de información asíncronos y respuestas de APIs mediante arquitectura dirigida por eventos.
              </p>
            </div>

            <div class="flex-1 my-6 bg-zinc-950 border border-zinc-900 rounded-xl p-4 text-[11px] overflow-hidden relative flex flex-col justify-end shadow-inner min-h-[220px]">
              <div class="absolute top-0 inset-x-0 bg-zinc-900/40 border-b border-zinc-900/60 px-4 py-2.5 flex items-center justify-between z-10">
                <span class="text-[9px] text-zinc-500 uppercase tracking-widest">nitro_core_stream.log</span>
                <div class="flex gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                </div>
              </div>
              
              <div class="space-y-1.5 overflow-hidden pt-8 font-mono">
                <div v-for="(log, idx) in serverLogs" :key="idx" :class="log.color" class="whitespace-nowrap overflow-hidden text-ellipsis text-[10px]">
                  <span>[{{ log.time }}]</span> {{ log.message }}
                </div>
              </div>
            </div>

            <div class="bg-zinc-950/60 border border-zinc-900/60 rounded-xl p-4 space-y-3">
              <div class="flex justify-between items-baseline">
                <span class="text-[9px] text-zinc-500 uppercase tracking-wider">// SECURITY_SANDBOX</span>
                <span class="text-[9px] text-red-400 tracking-wider">DEFENSE_ACTIVE</span>
              </div>
              <div class="bg-black/40 border border-zinc-900 rounded-lg h-[90px] relative flex items-center justify-around overflow-hidden">
                <div v-if="gameBreaches.length === 0" class="text-center text-[10px] text-emerald-400 flex flex-col items-center gap-1.5">
                  <span>🛡️ CORE SYSTEM PROTECTED</span>
                  <button @mousemove.once="spawnBreach" class="text-[9px] bg-emerald-950/40 border border-emerald-800/60 px-3 py-0.5 rounded-full text-emerald-300 font-bold uppercase hover:bg-emerald-500 hover:text-black transition-all">Iniciar Simulación</button>
                </div>
                <button v-for="breach in gameBreaches" :key="breach.id" @click="patchBreach(breach.id)" class="w-8 h-8 rounded-full border border-red-500 bg-red-950/40 flex items-center justify-center text-xs animate-ping-subtle">⚠️</button>
              </div>
              <div class="flex justify-between text-[9px] text-zinc-500 pt-1 border-t border-zinc-900/40">
                <span>PARCHES: <span class="text-cyan-400 font-bold">{{ gameScore }}</span></span>
                <span>STATUS: <span class="text-emerald-400">ONLINE</span></span>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'Laboratorio — Codifiko',
  meta: [
    { name: 'description', content: 'Sandbox interactivo de desarrollo fullstack. Experimentos de renderizado en tiempo real, matrices tridimensionales y streams de datos asíncronos.' }
  ]
})

// --- LÓGICA EXPERIMENTO 02: PERSPECTIVA MATRICIAL ---
const phoneWrapper = ref(null)
const phoneChassis = ref(null)

const handlePerspective = (e) => {
  if (!phoneWrapper.value || !phoneChassis.value) return
  
  const bounding = phoneWrapper.value.getBoundingClientRect()
  const x = e.clientX - bounding.left
  const y = e.clientY - bounding.top
  
  const xc = bounding.width / 2
  const yc = bounding.height / 2
  
  const angleX = (yc - y) / yc * 14
  const angleY = (x - xc) / xc * 14
  
  phoneChassis.value.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(${-angleY * 0.15}deg)`
}

const resetPerspective = () => {
  if (!phoneChassis.value) return
  phoneChassis.value.style.transform = 'rotateX(12deg) rotateY(-15deg) rotateZ(4deg)'
}

// --- LÓGICA EXPERIMENTO 03: SIMULADOR DE FLUJOS NITRO/LOGS ---
const serverLogs = ref([])
const gameBreaches = ref([])
const gameScore = ref(0)
let logInterval = null

const logPool = [
  { msg: 'Nitro runtime responding successfully to node_core', color: 'text-zinc-500' },
  { msg: 'GET /api/v1/auth/session - 200 OK (4ms)', color: 'text-emerald-400' },
  { msg: 'Database pool connection status: OPTIMAL', color: 'text-cyan-400' },
  { msg: 'Vite HMR socket open // listening client port', color: 'text-zinc-500' },
  { msg: 'Memory usage footprint stable at 24.8MB', color: 'text-purple-400' },
  { msg: 'Garbage Collector execution finalized gracefully', color: 'text-zinc-600' }
]

const addLog = (message, color = 'text-zinc-500') => {
  const time = new Date().toTimeString().split(' ')[0]
  serverLogs.value.push({ time, message, color })
  if (serverLogs.value.length > 8) serverLogs.value.shift()
}

const spawnBreach = () => {
  if (gameBreaches.value.length > 0) return
  gameBreaches.value.push({ id: Date.now() })
  addLog('CRITICAL UNEXPECTED PROCESS ATTEMPTED DETECTED', 'text-red-400 font-bold animate-pulse')
}

const patchBreach = (id) => {
  gameBreaches.value = gameBreaches.value.filter(b => b.id !== id)
  gameScore.value++
  addLog('Security patch hot-deployed manually on layer 0', 'text-emerald-400 font-bold')
  
  setTimeout(spawnBreach, Math.random() * 4000 + 3000)
}

onMounted(() => {
  for (let i = 0; i < 5; i++) {
    const randomLog = logPool[Math.floor(Math.random() * logPool.length)]
    addLog(randomLog.msg, randomLog.color)
  }

  logInterval = setInterval(() => {
    const randomLog = logPool[Math.floor(Math.random() * logPool.length)]
    addLog(randomLog.msg, randomLog.color)
  }, 2500)
})

onUnmounted(() => {
  if (logInterval) clearInterval(logInterval)
})
</script>