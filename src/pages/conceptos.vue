<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
    
    <section class="max-w-7xl mx-auto px-4 pt-32 pb-16 md:pt-48 md:pb-24">
      <div class="max-w-4xl space-y-6">
        <div class="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
          [ experimental_lab // v1.2.0 ]
        </div>
        <h1 class="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">
          Conceptos <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600">
            & Experimentos-
          </span>
        </h1>
        <p class="font-sans text-lg md:text-xl text-zinc-400 normal-case max-w-2xl leading-relaxed">
          Un espacio dedicado a romper las reglas de la maquetación web tradicional. Código creativo, físicas en tiempo real, interacciones en tres dimensiones y conceptos avanzados de ingeniería frontend.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-5 space-y-6 md:pr-8">
        <div class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">// INTERACCIÓN_01</div>
        <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tight text-white">
          RESPONSIVE <br><span class="text-cyan-400">ESTABILIZADO</span>
        </h2>
        <p class="font-sans text-sm text-zinc-400 leading-relaxed normal-case">
          Mueve el cursor sobre el dispositivo. Hemos ajustado las matrices de transformación a una escala amortiguada para lograr un efecto giroscópico sutil y cinemático.
        </p>
        <div class="p-4 bg-zinc-900/40 border border-zinc-900 rounded-xl font-mono text-xs text-zinc-500 space-y-1">
          <div>SYSTEM: Damping Matrix 3D</div>
          <div>ROTATION_LIMIT: +/- 12deg</div>
          <div>INTERACTIVE: stable</div>
        </div>
      </div>

      <div 
        class="md:col-span-7 flex items-center justify-center [perspective:1200px] py-12"
        @mousemove="handlePerspective"
        @mouseleave="resetPerspective"
        ref="phoneWrapper"
      >
        <div 
          ref="phoneChassis"
          class="relative w-[290px] h-[580px] bg-zinc-900 rounded-[42px] p-3 border-[6px] border-zinc-800 shadow-[10px_30px_60px_rgba(0,0,0,0.8)] will-change-transform"
          style="transform: rotateX(12deg) rotateY(-15deg) rotateZ(4deg); transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);"
        >
          <div class="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20"></div>

          <div class="w-full h-full bg-black rounded-[32px] overflow-hidden relative border border-zinc-950">
            <div class="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 border border-zinc-900"></div>
            
            <iframe 
              src="/" 
              class="w-full h-full border-none pointer-events-auto select-none"
              title="Cyborg Viewport"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div class="md:col-span-4 space-y-4">
          <div class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">// EXPERIMENTO_02</div>
          <h2 class="text-3xl font-black uppercase italic text-white">LOGS DE SERVIDOR<br><span class="text-purple-500">EN TIEMPO REAL</span></h2>
          <p class="font-sans text-xs text-zinc-400 normal-case leading-relaxed">
            Simulador reactivo de procesos en segundo plano. Muestra cómo controlo flujos de información asíncronos y respuestas de APIs mediante arquitectura dirigida por eventos.
          </p>
        </div>
        
        <div class="md:col-span-8 bg-zinc-950 border border-zinc-900 rounded-xl p-4 font-mono text-xs text-zinc-400 shadow-2xl relative overflow-hidden h-[220px] flex flex-col justify-end">
          <div class="absolute top-0 inset-x-0 bg-zinc-900/50 border-b border-zinc-900 px-4 py-2 flex items-center justify-between">
            <span class="text-[10px] text-zinc-500 uppercase tracking-widest">nitro_core_stream.log</span>
            <div class="flex gap-1.5">
              <span class="w-2 h-2 rounded-full bg-zinc-800"></span>
              <span class="w-2 h-2 rounded-full bg-zinc-800"></span>
              <span class="w-2 h-2 rounded-full bg-zinc-600 animate-pulse"></span>
            </div>
          </div>
          <div class="space-y-1 overflow-y-hidden pt-6">
            <div v-for="(log, idx) in serverLogs" :key="idx" :class="log.color" class="transition-all duration-300 transform translate-y-0 opacity-100">
              <span class="text-zinc-600">[{{ log.time }}]</span> {{ log.message }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 border-t border-zinc-900 bg-zinc-900/10">
      <div class="max-w-7xl mx-auto px-4 mb-12">
        <div class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">// ESTRUCTURA_03</div>
        <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tight text-white">
          ARQUITECTURA BACKEND
        </h2>
      </div>

      <div class="w-full overflow-x-auto flex gap-6 px-4 md:px-24 pb-8 scrollbar-thin scrollbar-thumb-zinc-800">
        <div class="min-w-[300px] md:min-w-[400px] bg-zinc-900/40 border border-zinc-900 p-8 rounded-2xl space-y-4 group hover:border-purple-500/30 transition-colors duration-300">
          <div class="font-mono text-xs text-purple-400">01 / DOCKER ENGINE</div>
          <h3 class="text-xl font-bold text-white uppercase italic">Aislamiento de Entornos</h3>
          <p class="font-sans text-xs text-zinc-400 leading-relaxed normal-case">Contenerización completa de microservicios mediante Docker, garantizando paridad absoluta en staging.</p>
        </div>

        <div class="min-w-[300px] md:min-w-[400px] bg-zinc-900/40 border border-zinc-900 p-8 rounded-2xl space-y-4 group hover:border-cyan-500/30 transition-colors duration-300">
          <div class="font-mono text-xs text-cyan-400">02 / NITRO CORE</div>
          <h3 class="text-xl font-bold text-white uppercase italic">Server-Side Rendering</h3>
          <p class="font-sans text-xs text-zinc-400 leading-relaxed normal-case">Lógica de servidor híbrida optimizada mediante Nitro, sirviendo rutas dinámicas con tiempos de respuesta ínfimos.</p>
        </div>

        <div class="min-w-[300px] md:min-w-[400px] bg-zinc-900/40 border border-zinc-900 p-8 rounded-2xl space-y-4 group hover:border-emerald-500/30 transition-colors duration-300">
          <div class="font-mono text-xs text-emerald-400">03 / REALTIME DATA</div>
          <h3 class="text-xl font-bold text-white uppercase italic">WebSockets & Streams</h3>
          <p class="font-sans text-xs text-zinc-400 leading-relaxed normal-case">Canales de comunicación bidireccional persistentes en tiempo real para transmisión de telemetría.</p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div class="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 space-y-6">
        <div class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">// COMPONENTES_TÁCTICOS</div>
        <h3 class="text-2xl font-black text-white uppercase italic">Micro-UI Feedback</h3>
        
        <div class="space-y-4">
          <div class="space-y-1">
            <div class="flex justify-between font-mono text-[10px] text-zinc-500">
              <span>SCANNING_NETWORK_INTEGRITY...</span>
              <span class="text-cyan-400">87%</span>
            </div>
            <div class="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden relative">
              <div class="absolute inset-y-0 left-0 bg-cyan-400 rounded-full w-[87%] animate-pulse"></div>
            </div>
          </div>

          <div class="pt-2">
            <button class="relative px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs tracking-wider uppercase text-zinc-300 group transition-all duration-300 hover:border-cyan-500 hover:text-white">
              <span class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></span>
              Invocación de Núcleo
            </button>
          </div>
        </div>
      </div>

      <div class="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between space-y-6">
        <div>
          <div class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">// SECURITY_SANDBOX</div>
          <h3 class="text-2xl font-black text-white uppercase italic">Defensa de Servidor</h3>
          <p class="font-sans text-xs text-zinc-400 normal-case leading-relaxed mt-1">
            Haz clic en los nodos de brechas antes de que se llenen para estabilizar la seguridad del núcleo.
          </p>
        </div>

        <div class="bg-black border border-zinc-950 rounded-xl p-4 h-[120px] relative flex items-center justify-around overflow-hidden">
          <div v-if="gameBreaches.length === 0" class="text-center font-mono text-xs text-emerald-400 flex flex-col items-center gap-1">
            <span>🛡️ SISTEMA PROTEGIDO</span>
            <button @mousemove.once="spawnBreach" class="text-[9px] bg-emerald-950/40 border border-emerald-800 px-3 py-1 rounded-full text-emerald-300 uppercase hover:bg-emerald-500 hover:text-black transition-all">Iniciar Simulación</button>
          </div>
          
          <button 
            v-for="breach in gameBreaches" 
            :key="breach.id"
            @click="patchBreach(breach.id)"
            class="w-10 h-10 rounded-full border border-red-500 bg-red-950/40 flex items-center justify-center font-mono text-xs text-red-400 font-bold animate-ping-subtle hover:scale-110 active:scale-95 transition-transform"
            :style="{ transform: `scale(${breach.scale})` }"
          >
            ⚠️
          </button>
        </div>
        <div class="flex justify-between font-mono text-[10px] text-zinc-500">
          <span>PARCHES_APLICADOS: <span class="text-cyan-400">{{ gameScore }}</span></span>
          <span>ESTADO: <span class="text-emerald-400">ONLINE</span></span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// --- CONTROL MÓVIL 3D (ESTABILIZADO) ---
const phoneWrapper = ref(null)
const phoneChassis = ref(null)

const handlePerspective = (e) => {
  if (!phoneWrapper.value || !phoneChassis.value) return

  const rect = phoneWrapper.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  // Amortiguación avanzada: reducidas las divisiones para limitar la rotación a máx ~12 grados
  const rotateX = 12 - (y / rect.height) * 12
  const rotateY = -15 + (x / rect.width) * 14

  phoneChassis.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(4deg)`
}

const resetPerspective = () => {
  if (!phoneChassis.value) return
  phoneChassis.value.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
  phoneChassis.value.style.transform = 'rotateX(12deg) rotateY(-15deg) rotateZ(4deg)'
}

// --- CONSOLA DE LOGS EN VIVO (BACKEND) ---
const serverLogs = ref([
  { time: '16:00:01', message: 'Nitro server warmed up successfully.', color: 'text-zinc-500' },
  { time: '16:00:03', message: 'WebSocket tunnel initialized on core-port :3000.', color: 'text-cyan-400' }
])

const sampleLogs = [
  { message: 'GET /api/v1/concepts - Status 200 - 12ms', color: 'text-emerald-400' },
  { message: 'Buffer stream allocated successfully [chunk_size: 64kb]', color: 'text-zinc-400' },
  { message: 'Incoming encryption protocol verified: TLS_AES_256_GCM', color: 'text-purple-400' },
  { message: 'Garbage Collector flushed 4.2MB heap memory.', color: 'text-zinc-500' },
  { message: 'Cache revalidated for edge routing.', color: 'text-cyan-500' }
]

let logInterval = null

// --- MINIJUEGO EXTRA: MATRIX DEFENDER ---
const gameBreaches = ref([])
const gameScore = ref(0)
let gameInterval = null

const spawnBreach = () => {
  if (gameBreaches.value.length < 3) {
    gameBreaches.value.push({
      id: Date.now(),
      scale: 1
    })
  }
}

const patchBreach = (id) => {
  gameBreaches.value = gameBreaches.value.filter(b => b.id !== id)
  gameScore.value++
  setTimeout(spawnBreach, Math.random() * 1500 + 500)
}

// Ciclos de vida para lanzar intervalos
onMounted(() => {
  // Bucle de logs falsos de servidor
  logInterval = setInterval(() => {
    const timeStr = new Date().toTimeString().split(' ')[0]
    const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)]
    serverLogs.value.push({ time: timeStr, ...randomLog })
    if (serverLogs.value.length > 7) serverLogs.value.shift()
  }, 2200)

  // Bucle del minijuego
  gameInterval = setInterval(() => {
    if (gameBreaches.value.length > 0) {
      gameBreaches.value.forEach(b => b.scale += 0.05)
      // Si crece demasiado, se reinicia esa brecha
      if (gameBreaches.value.some(b => b.scale > 1.6)) {
        gameBreaches.value = []
      }
    }
  }, 300)
})

onUnmounted(() => {
  clearInterval(logInterval)
  clearInterval(gameInterval)
})
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #09090b;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 2px;
}

@keyframes ping-subtle {
  0% { transform: scale(0.95); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.9; }
}

.animate-ping-subtle {
  animation: ping-subtle 2s infinite ease-in-out;
}
</style>