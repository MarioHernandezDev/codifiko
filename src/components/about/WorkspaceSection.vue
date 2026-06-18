<template>
  <div class="zone-workspace w-full left-0 right-0 mb-32 md:mb-52">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-32 md:py-52">
      <section id="section3" class="relative">
        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[9px] text-cyan-500/70 tracking-widest uppercase">// ENV_SPECIFICATION_v2</div>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              03 / Estación & Enfoque
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">WORKSPACE // CORE_PHILOSOPHY</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div class="space-y-8">
            <div class="space-y-2">
              <div class="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">// 03.1 / WORKSPACE_SETUP</div>
              <h3 class="text-2xl font-black text-white uppercase italic tracking-tight">La Estación de Trabajo</h3>
              <p class="text-zinc-400 text-sm font-sans leading-relaxed">
                Un entorno físico optimizado para el desarrollo de software de alta concentración. Creo firmemente que un hardware predecible, ordenado y silencioso se traduce directamente en un código más limpio y estructurado. Despliego mis proyectos desde mi oficina local en Granada, España.
              </p>
            </div>
            <div class="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-6 font-mono text-xs divide-y divide-zinc-900/60">
              <div class="py-3 flex justify-between items-center first:pt-0">
                <span class="text-zinc-500 uppercase">Sistema Base</span>
                <span class="text-zinc-300 font-bold">PC Custom Architecture</span>
              </div>
              <div class="py-3 flex justify-between items-center">
                <span class="text-zinc-500 uppercase">Entorno OS</span>
                <span class="text-zinc-300">Linux Ubuntu / Windows Dual-Boot</span>
              </div>
              <div class="py-3 flex justify-between items-center">
                <span class="text-zinc-500 uppercase">Core IDE</span>
                <span class="text-zinc-300 text-cyan-400">VS Code // Custom Tech Theme</span>
              </div>
              <div class="py-3 flex justify-between items-center">
                <span class="text-zinc-500 uppercase">Monitoreo visual</span>
                <span class="text-zinc-300">Dual Screen Setup 4K</span>
              </div>
              <div class="py-3 flex justify-between items-center last:pb-0">
                <span class="text-zinc-500 uppercase">Audio Engine</span>
                <span class="text-zinc-300">Studio Monitors (Lofi / Darkwave focus)</span>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div class="space-y-2">
              <div class="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">// 03.2 / CORE_METRICS</div>
              <h3 class="text-2xl font-black text-white uppercase italic tracking-tight">Filosofía de Desarrollo</h3>
              <p class="text-zinc-400 text-sm font-sans leading-relaxed">
                No entiendo el desarrollo web como el simple hecho de apilar líneas de código hasta que funcionen. Mi enfoque está estrictamente alineado con los estándares modernos de ingeniería de software para asegurar productos rentables, duraderos y veloces.
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="border border-zinc-900 bg-zinc-950/40 p-5 rounded-xl space-y-2 group hover:border-zinc-800 transition-colors">
                <div class="font-mono text-[10px] text-cyan-400">[01 // RENDIMIENTO]</div>
                <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-tight">Lighthouse FPS</h4>
                <p class="text-zinc-500 text-xs font-sans leading-relaxed">Optimización crítica de carga. Arquitecturas ligeras que buscan rozar el 100% de rendimiento en las auditorías de Google.</p>
              </div>
              <div class="border border-zinc-900 bg-zinc-950/40 p-5 rounded-xl space-y-2 group hover:border-zinc-800 transition-colors">
                <div class="font-mono text-[10px] text-purple-400">[02 // CLEAN_CODE]</div>
                <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-tight">Modularidad Pura</h4>
                <p class="text-zinc-500 text-xs font-sans leading-relaxed">Escribo código pensando en el "yo" del futuro y en otros desarrolladores. Componentes atómicos, legibles y desacoplados.</p>
              </div>
              <div class="border border-zinc-900 bg-zinc-950/40 p-5 rounded-xl space-y-2 group hover:border-zinc-800 transition-colors">
                <div class="font-mono text-[10px] text-amber-400">[03 // SEO_INDEX]</div>
                <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-tight">Estructura Semántica</h4>
                <p class="text-zinc-500 text-xs font-sans leading-relaxed">Marcado HTML5 estricto para que los rastreadores de Google indexen, entiendan y posicionen el negocio de forma orgánica.</p>
              </div>
              <div class="border border-zinc-900 bg-zinc-950/40 p-5 rounded-xl space-y-2 group hover:border-zinc-800 transition-colors">
                <div class="font-mono text-[10px] text-emerald-400">[04 // AGILE_FLOW]</div>
                <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-tight">Control Preciso</h4>
                <p class="text-zinc-500 text-xs font-sans leading-relaxed">Flujo Git profesional mediante ramas estructuradas, commits semánticos y deploys limpios sin fricción en producción.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.zone-workspace {
  background-color: #02060e;
  position: relative;
  overflow: hidden;
}
.zone-workspace::before {
  content: ''; position: absolute; top: 0; left: 0; width: 0%; height: 2px;
  background: linear-gradient(to right, transparent, #22d3ee, #a78bfa, transparent);
  animation: progress-load 4s ease-in-out infinite;
}
@keyframes progress-load {
  0%   { width: 0%;   left: 0;    opacity: 0;   }
  15%  { opacity: 1;                }
  85%  { opacity: 1;                }
  100% { width: 100%; left: 0;    opacity: 0;   }
}
</style>