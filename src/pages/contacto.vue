<template>
  <div class="w-full relative select-none max-w-7xl mx-auto px-4 md:px-10 font-mono">

    <div class="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div class="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[160px] pointer-events-none -z-10"></div>

    <MiniHero
      sysRef="SECURE_UPLINK // ch_gate_2026"
      titleFirst="HABLEMOS!"
    >
      <p class="text-zinc-400 font-sans text-base md:text-lg leading-relaxed border-l border-zinc-800 pl-6 normal-case max-w-2xl tracking-normal">
      Si quieres comentar tus ideas o colaborar conmigo de cualquier manera hazmelo saber, se aceptan cafés SIEMPRE ;)
      </p>
    </MiniHero>

    <section class="mt-20 md:mt-28 relative z-10">
      <div class="grid grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <div class="col-span-12 lg:col-span-7 space-y-6">
          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-zinc-800/80 transition-all duration-500">
            <div class="absolute inset-0 bg-scanlines pointer-events-none opacity-20 mix-blend-overlay"></div>
            
            <div class="flex justify-between items-center pb-4 border-b border-zinc-900/60 text-[10px] mb-8">
              <span class="text-cyan-400 font-bold tracking-wider">// COM_CHANNEL_INIT_SEQ</span>
              <span class="text-zinc-600 uppercase">Status: Ready_</span>
            </div>

            <form @submit.prevent="handleTransmission" class="space-y-6">
              <div class="space-y-2">
                <label class="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold" for="subject">01 . PROTOCOLO_ASUNTO // </label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">></span>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    placeholder="Eje: Desarrollo de Plataforma E-Commerce / Integración IA"
                    class="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl py-3.5 pl-9 pr-4 text-xs text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300 select-text"
                    :disabled="isTransmitting"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold" for="email">02 . DIRECCIÓN_DE_RETORNO [EMAIL] //</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">></span>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="tu_nodo@dominio.com"
                    class="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl py-3.5 pl-9 pr-4 text-xs text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_15px_rgba(167,139,250,0.05)] transition-all duration-300 select-text"
                    :disabled="isTransmitting"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold" for="message">03 . CUERPO_DE_TRANSMISIÓN [DATA_BUFFER] //</label>
                <div class="relative">
                  <span class="absolute left-4 top-4 text-zinc-600 text-xs">></span>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    placeholder="Escribe los detalles de la operación, requerimientos técnicos, plazos estimados..."
                    class="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl py-3.5 pl-9 pr-4 text-xs text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300 resize-none select-text leading-relaxed"
                    :disabled="isTransmitting"
                  ></textarea>
                </div>
              </div>

              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="isTransmitting"
                  class="w-full group relative overflow-hidden bg-white text-black font-bold text-xs uppercase py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                  :class="!isTransmitting ? 'hover:bg-cyan-400 hover:scale-[1.01]' : ''"
                >
                  <span v-if="transmissionStatus === 'idle'" class="flex items-center gap-2">
                    <span>Lanzar Transmisión Estructurada</span>
                    <span class="text-sm font-sans font-black">→</span>
                  </span>
                  <span v-else-if="transmissionStatus === 'encrypting'">[ CIPHANDO_PAQUETES_LOG_AES256... ]</span>
                  <span v-else-if="transmissionStatus === 'sending'">[ TRANSMITIENDO_A_NODO_CORE... ]</span>
                  <span v-else-if="transmissionStatus === 'success'" class="text-emerald-700 font-black tracking-widest">✓ TRANSMISIÓN_COMPLETADA</span>
                </button>
              </div>
            </form>
          </div>

          <transition name="menu-fade">
            <div v-if="transmissionStatus === 'success'" class="border border-emerald-500/20 bg-emerald-950/10 rounded-xl p-5 text-[11px] text-emerald-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div class="space-y-0.5">
                <div class="font-bold uppercase tracking-wider">// SIGNAL_RECEIVED_OK</div>
                <div class="text-zinc-500 text-[10px]">Tu mensaje ha sido inyectado. Responderé en menos de 24 horas.</div>
              </div>
              <button @click="resetForm" class="text-[9px] uppercase border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-1 rounded hover:bg-emerald-500 hover:text-black transition-all">[ Nueva_Instancia ]</button>
            </div>
          </transition>
        </div>

        <div class="col-span-12 lg:col-span-5 space-y-6">
          <div class="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-6 space-y-5">
            <div class="flex justify-between items-center pb-3 border-b border-zinc-900 text-[10px]">
              <span class="text-zinc-500 font-bold tracking-wider">// HARDWARE_GATEWAY_METADATA</span>
              <span class="text-zinc-700">v2.6</span>
            </div>
            <div class="space-y-3.5 text-xs">
              <div class="flex justify-between items-baseline">
                <span class="text-zinc-500 uppercase text-[10px]">Ubicación Core:</span>
                <span class="text-zinc-300 font-semibold">Granada, España (ES)</span>
              </div>
              <div class="flex justify-between items-baseline">
                <span class="text-zinc-500 uppercase text-[10px]">Zona Horaria:</span>
                <span class="text-zinc-400">CET / CEST [UTC+1]</span>
              </div>
              <div class="flex justify-between items-baseline">
                <span class="text-zinc-500 uppercase text-[10px]">Cifrado Autónomo:</span>
                <span class="text-purple-400 font-bold">End-to-End // TLS 1.3</span>
              </div>
              <div class="flex justify-between items-baseline">
                <span class="text-zinc-500 uppercase text-[10px]">Canal Directo:</span>
                <a href="mailto:mario@codifiko.com" class="text-cyan-400 font-bold hover:underline">mario@codifiko.com</a>
              </div>
            </div>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-6 space-y-4">
            <div class="text-[10px] text-zinc-500 font-bold tracking-wider">// ALTERNATE_UPLINK_NETWORKS</div>
            <div class="grid grid-cols-1 gap-2">
              <a href="https://github.com" target="_blank" rel="noopener" class="flex justify-between items-center bg-zinc-950/40 border border-zinc-900/60 rounded-xl p-4 group hover:border-cyan-500/30 hover:bg-zinc-900/10 transition-all duration-300">
                <div class="space-y-0.5">
                  <div class="text-xs text-white font-bold group-hover:text-cyan-400">GitHub Repository</div>
                  <div class="text-[9px] text-zinc-500 uppercase tracking-widest">Ver Repositorios & Código Limpio</div>
                </div>
                <span class="text-zinc-700 group-hover:text-cyan-400 text-sm">↗</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="flex justify-between items-center bg-zinc-950/40 border border-zinc-900/60 rounded-xl p-4 group hover:border-purple-500/30 hover:bg-zinc-900/10 transition-all duration-300">
                <div class="space-y-0.5">
                  <div class="text-xs text-white font-bold group-hover:text-purple-400">LinkedIn Network</div>
                  <div class="text-[9px] text-zinc-500 uppercase tracking-widest">Conexión Profesional Corporativa</div>
                </div>
                <span class="text-zinc-700 group-hover:text-purple-400 text-sm">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-36 md:mt-48">
      <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div class="space-y-1">
          <div class="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// WORK_FLOW_RULES</div>
          <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
            02 / Protocolos de Operación
          </h2>
        </div>
        <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">ROUTING_POLICIES // PRE_FLIGHT_CHECK</span>
      </div>
        
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-zinc-900/80 bg-zinc-950/20 rounded-2xl p-6 md:p-8 space-y-3 group border-l-2 hover:border-cyan-500/30 transition-all duration-300">
          <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">// 01 . AVAILABILITY_STATUS</div>
          <h3 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors">Disponibilidad e Integración</h3>
          <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">Abierto a colaboraciones freelance selectas, consultorías de arquitectura frontend y contratos remotos dentro de células de desarrollo ágiles.</p>
        </div>

        <div class="border border-zinc-900/80 bg-zinc-950/20 rounded-2xl p-6 md:p-8 space-y-3 group border-l-2 hover:border-purple-500/30 transition-all duration-300">
          <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">// 02 . CORE_STACK_PREFERENCE</div>
          <h3 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-purple-400 transition-colors">Stack de Preferencia</h3>
          <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">Sistemas basados en Vue 3 / Nuxt, arquitecturas backend modulares con Node (NestJS/Nitro), bases de datos PostgreSQL/Redis y Tailwind CSS.</p>
        </div>

        <div class="border border-zinc-900/80 bg-zinc-950/20 rounded-2xl p-6 md:p-8 space-y-3 group border-l-2 hover:border-amber-500/30 transition-all duration-300">
          <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">// 03 . DEVELOPMENT_METHODOLOGY</div>
          <h3 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-amber-400 transition-colors">Metodología Limpia</h3>
          <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">Código tipado estricto, separación estricta de responsabilidades (SOLID), testing unitario, control de Git semántico y despliegues CI/CD automatizados.</p>
        </div>

        <div class="border border-zinc-900/80 bg-zinc-950/20 rounded-2xl p-6 md:p-8 space-y-3 group border-l-2 hover:border-emerald-500/30 transition-all duration-300">
          <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">// 04 . SLA_RESPONSE_TIME</div>
          <h3 class="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-emerald-400 transition-colors">Tiempos de Respuesta</h3>
          <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case">Cualquier paquete de datos entrante por este formulario es procesado directamente, emitiendo una respuesta formal en un plazo inferior a 24 horas.</p>
        </div>
      </div>
    </section>

    <section class="mt-28 mb-36">
      <div class="border border-zinc-900 bg-gradient-to-r from-zinc-950/40 via-purple-950/[0.03] to-cyan-950/[0.03] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="space-y-2 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 rounded-full text-[9px] text-zinc-400 font-bold">
            <span class="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SECURE_DATA_PACKET_v2</span>
          </div>
          <h3 class="text-xl font-black text-white uppercase tracking-tight italic">¿Prefieres revisar mis credenciales offline?</h3>
          <p class="text-zinc-400 font-sans text-sm normal-case leading-relaxed">Descarga mi hoja de ruta técnica completa con todo mi histórico consolidado de ingeniería de software.</p>
        </div>

        <a 
          href="/mario_hernandez_cv.pdf" 
          download
          class="w-full md:w-auto px-6 py-3.5 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-purple-500/40 text-[10px] font-bold text-zinc-300 hover:text-white uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group whitespace-nowrap"
        >
          <span>[ Descargar_CV.pdf ]</span>
          <span class="text-purple-400 group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

useHead({
  title: 'Contacto — Codifiko',
  meta: [
    { name: 'description', content: 'Inicia un canal seguro de transmisión con Mario Hernández. Disponible para despliegues de software, consultoría frontend o integración en células ágiles.' }
  ]
})

const isTransmitting = ref(false)
const transmissionStatus = ref('idle')

const form = reactive({
  subject: '',
  email: '',
  message: ''
})

const handleTransmission = () => {
  if (isTransmitting.value) return
  
  isTransmitting.value = true
  transmissionStatus.value = 'encrypting'

  setTimeout(() => {
    transmissionStatus.value = 'sending'
    setTimeout(() => {
      transmissionStatus.value = 'success'
      isTransmitting.value = false
    }, 1200)
  }, 800)
}

const resetForm = () => {
  form.subject = ''
  form.email = ''
  form.message = ''
  transmissionStatus.value = 'idle'
}
</script>