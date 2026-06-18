<template>
  <div class="zone-modus w-full left-0 right-0 mb-32 md:mb-52">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-32 md:py-52">
      <section id="section-modus">
        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[9px] text-purple-500/70 tracking-widest uppercase">// CORE_METHODS</div>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              02.5 / Modus Operandi
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">OPERATIONAL_PROTOCOLS // CRITICAL_RUN</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(mod, index) in modusOperandi"
            :key="mod.code"
            class="relative bg-zinc-950/40 border border-zinc-900/80 p-8 md:p-10 rounded-2xl overflow-hidden group transition-all duration-500 flex flex-col justify-between min-h-[340px]"
            :class="[
              index === 0 ? 'hover:border-cyan-500/30' : '',
              index === 1 ? 'hover:border-purple-500/30' : '',
              index === 2 ? 'hover:border-amber-500/30' : ''
            ]"
          >
            <div>
              <div class="flex justify-between items-center mb-8">
                <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase transition-colors duration-300" :class="mod.hoverTitle">
                  {{ mod.code }}
                </span>
                <div class="flex items-center gap-1">
                  <span class="w-1 h-1 rounded-full bg-zinc-800 transition-colors duration-300" :class="index === 0 ? 'group-hover:bg-cyan-400' : ''"></span>
                  <span class="w-1 h-1 rounded-full bg-zinc-800 transition-colors duration-300" :class="index === 1 ? 'group-hover:bg-purple-400' : ''"></span>
                  <span class="w-1 h-1 rounded-full bg-zinc-800 transition-colors duration-300" :class="index === 2 ? 'group-hover:bg-amber-400' : ''"></span>
                </div>
              </div>
              <h4 class="font-black uppercase italic tracking-tight text-white text-2xl md:text-3xl mb-4 transition-colors duration-300" :class="mod.hoverTitle">
                {{ mod.title }}
              </h4>
              <p class="text-zinc-400 font-sans text-sm leading-relaxed normal-case tracking-normal max-w-sm group-hover:text-zinc-300 transition-colors duration-300">
                {{ mod.description }}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
              <div class="font-mono text-[9px] tracking-widest uppercase transition-colors duration-300" :class="mod.accentClass">
                {{ mod.tag }}
              </div>
              <div class="font-mono text-[8px] text-zinc-700 tracking-tighter group-hover:text-zinc-500 transition-colors">
                [ EXEC_OK ]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const modusOperandi = [
  {
    code: 'CMD_01',
    title: 'Build Fast',
    description: 'Itero en sprints cortos. MVP funcional primero, perfección después. Cada día sin código en producción es pérdida de señal real.',
    tag: '// EFFICIENCY_PROTOCOL',
    accentClass: 'text-cyan-400/60',
    hoverTitle: 'group-hover:text-cyan-400',
  },
  {
    code: 'CMD_02',
    title: 'Design Deep',
    description: 'La interfaz no es decoración. Es arquitectura de comportamiento. Cada píxel tiene una razón lógica de existir en el sistema.',
    tag: '// VISUAL_ARCHITECTURE',
    accentClass: 'text-purple-400/60',
    hoverTitle: 'group-hover:text-purple-400',
  },
  {
    code: 'CMD_03',
    title: 'Ship Sharp',
    description: 'Despliegues con zero downtime. Tests automatizados. Documentación viva. Los sistemas que construyo no se caen.',
    tag: '// DEPLOYMENT_STANDARD',
    accentClass: 'text-amber-400/60',
    hoverTitle: 'group-hover:text-amber-400',
  },
]
</script>

<style scoped>
.zone-modus {
  background-color: #0a0701;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(251, 191, 36, 0.015) 24px, rgba(251, 191, 36, 0.015) 25px);
  position: relative;
}
.zone-modus::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(251, 191, 36, 0.4), transparent);
}
</style>