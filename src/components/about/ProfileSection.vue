<template>
  <div class="w-full relative z-10 overflow-hidden">
    <section id="section1" class="border-y border-zinc-900/40 bg-zinc-950/[0.1]">
      
      <div class="grid grid-cols-12 items-stretch min-h-[600px] lg:min-h-[700px]">
        
        <div class="col-span-12 lg:col-span-5 relative overflow-hidden bg-zinc-950 flex flex-col justify-between group min-h-[400px] lg:min-h-full">
          
          <img 
            src="~/assets/img/profile-cyborg-mesh.webp" 
            alt="Mario Hernández" 
            class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-0 group-hover:scale-[1.01]"
          />

          <div class="relative z-20 p-6 font-mono text-[9px] text-white/40 tracking-widest">
            // PROFILE_MONITOR_NODE
          </div>
          
          <div class="relative z-20 p-6 font-mono flex justify-between items-end">
            <span class="text-[8px] text-white/30">SYS_MHP // 2026</span>
            <span class="text-[9px] tracking-wider transition-colors duration-300" :class="tabs[activeTab].color">[ {{ tabs[activeTab].id }} ]</span>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-7 flex flex-col justify-center py-12 md:py-16 lg:py-24 px-4 sm:px-8 lg:pl-16 lg:pr-10 max-w-4xl">
          
          <div class="mb-10 space-y-2">
            <div class="font-mono text-[9px] text-cyan-500/80 font-bold tracking-widest uppercase">// 01 . INTERACTIVE_PROFILE</div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              Perfil de Sistema
            </h2>
          </div>

          <div class="relative bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between overflow-hidden backdrop-blur-sm shadow-2xl">
            
            <div class="flex items-center justify-between border-b border-zinc-900/60 pb-4 mb-6">
              <div class="flex items-center gap-3">
                <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 border text-zinc-400 transition-colors duration-300" :class="tabs[activeTab].borderColor">{{ tabs[activeTab].id }}</span>
                <span class="font-mono text-[9px] tracking-widest uppercase text-zinc-500">// INFOSPHERE_NODE</span>
              </div>
              
              <div class="flex items-center gap-1.5 font-mono">
                <button @click="prevTab" class="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-950/40 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-200">
                  <span class="text-xs">←</span>
                </button>
                <button @click="nextTab" class="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-950/40 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-200">
                  <span class="text-xs">→</span>
                </button>
              </div>
            </div>

            <div class="flex-1 flex flex-col justify-center min-h-[290px] sm:min-h-[220px]">
                <Transition name="fade-card" mode="out-in">
                  <div :key="activeTab" class="space-y-6 py-2">
                    <div class="space-y-3">
                      <span class="font-mono text-[9px] uppercase tracking-wider block font-bold" :class="tabs[activeTab].color">
                        ● {{ tabs[activeTab].meta }}
                      </span>
                      <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight">
                        {{ tabs[activeTab].title }}
                      </h3>
                      <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case tracking-normal">
                        <span v-html="tabs[activeTab].content"></span>
                      </p>
                    </div>

                    <div v-if="tabs[activeTab].extra" class="pt-1">
                      </div>
                  </div>
                </Transition>
              </div>

            <div class="grid grid-cols-3 gap-2 font-mono mt-8 pt-4 border-t border-zinc-900/60">
              <button 
                v-for="(tab, key) in tabs" 
                :key="key"
                @click="activeTab = key"
                class="flex flex-col items-start p-2.5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group"
                :class="activeTab === key ? 'bg-zinc-900/20 border-zinc-800 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-400'"
              >
                <span class="text-[8px] block mb-0.5 tracking-wider transition-colors duration-300" :class="activeTab === key ? tab.color : 'text-zinc-600'">{{ tab.id }}</span>
                <span class="text-[10px] font-medium tracking-tight uppercase line-clamp-1">{{ tab.shortTitle }}</span>
                <span class="absolute bottom-0 left-0 h-[1.5px] transition-all duration-500" :class="[tab.bgClass, activeTab === key ? 'w-full' : 'w-0']"></span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('ntt')
const tabOrder = ['ntt', 'codifiko', 'metrics']

const nextTab = () => {
  const currentIndex = tabOrder.indexOf(activeTab.value)
  const nextIndex = (currentIndex + 1) % tabOrder.length
  activeTab.value = tabOrder[nextIndex]
}

const prevTab = () => {
  const currentIndex = tabOrder.indexOf(activeTab.value)
  const prevIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length
  activeTab.value = tabOrder[prevIndex]
}

const tabs = {
  ntt: {
    id: 'NODE_01',
    shortTitle: 'NTT DATA',
    title: 'Ingeniería Avanzada en NTT DATA',
    meta: 'ENTERPRISE ARCHITECTURE',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgClass: 'bg-cyan-500/70',
    content: 'Anclado en mi formación superior de <strong class="text-white font-semibold">DAW en el Zaidín Vergeles</strong> completada en este ciclo de 2026, consolidé mi arquitectura lógica trabajando en los entornos de <strong class="text-cyan-400/90 font-semibold">NTT DATA</strong>. Una etapa de escalado completada con éxito donde asimilé flujos corporativos de alto nivel, despliegues críticos en producción y metodologías ágiles avanzadas en equipos de alto rendimiento.',
    extra: '"Aprender bajo presión real, con código en producción y equipos multidisciplinares, fue la forma más brutal y efectiva de escalar. No hay bootcamp que lo replique."'
  },
  codifiko: {
    id: 'NODE_02',
    shortTitle: 'Codifiko Lab',
    title: 'El Universo de "Codifiko"',
    meta: 'EXPERIMENTAL DEV ENVIRONMENT',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgClass: 'bg-purple-500/70',
    content: 'Mi proyecto <strong class="text-purple-400/90 font-semibold">Codifiko</strong> no es una simple marca ni un portfolio de exhibición. Es mi laboratorio táctico personal: un entorno diseñado para romper las convenciones del desarrollo web fullstack y explorar la frontera entre diseño de interfaces interactivas y arquitectura de software verdaderamente robusta.',
    extra: [
      { label: 'Enfoque', val: 'Exploración Lógica Activa' },
      { label: 'Estructura', val: 'Sistemas Modulares Limpios' }
    ]
  },
  metrics: {
    id: 'NODE_03',
    shortTitle: 'Cohesión',
    title: 'Optimización de Células de Trabajo',
    meta: 'HUMAN CORE & METRICS',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgClass: 'bg-amber-500/70',
    content: 'Entiendo los problemas complejos como retos colectivos de infraestructura, no como bloqueos individuales. Mi mentalidad optimista innata actúa como lubricante lógico para integrarme y potenciar células de desarrollo con agilidad. Además, despliego estrategias de analítica y conversión web para potenciar entornos digitales de partners locales.',
    extra: true
  }
}

const skillMetrics = [
  { label: 'Frontend Architecture', value: 92 },
  { label: 'Backend Lógica', value: 87 },
  { label: 'Interface Design', value: 90 }
]
</script>

<style scoped>
.fade-card-enter-active,
.fade-card-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-card-enter-from {
  opacity: 0;
  transform: translateX(4px);
}
.fade-card-leave-to {
  opacity: 0;
  transform: translateX(-4px);
}
</style>