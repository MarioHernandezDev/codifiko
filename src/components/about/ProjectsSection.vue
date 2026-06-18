<template>
  <div class="zone-projects w-full left-0 right-0 mb-32 md:mb-52">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-32 md:py-52">
      <section id="section-projects">
        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[9px] text-cyan-500/70 tracking-widest uppercase">// STABLE_BUILDS</div>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              03.5 / Proyectos
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">DEPLOYMENT_GALLERY // TOTAL_04</span>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <NuxtLink
            v-for="(proj, index) in projects"
            :key="proj.name"
            :to="proj.href"
            class="relative rounded-2xl border border-zinc-900/80 bg-zinc-950/40 p-6 md:p-8 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-500 min-h-[300px]"
            :class="[
              (index === 0 || index === 3) ? 'col-span-12 lg:col-span-8' : 'col-span-12 sm:col-span-6 lg:col-span-4',
              (index === 0 || index === 3) ? 'hover:border-cyan-500/40' : 'hover:border-purple-500/40'
            ]"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 :style="`background: radial-gradient(600px circle at 50% 50%, ${proj.glowColor}08, transparent 40%);`"></div>
            
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span class="font-black uppercase italic tracking-tighter opacity-[0.03] transition-transform duration-700 group-hover:scale-110"
                    :class="(index === 0 || index === 3) ? 'text-7xl md:text-9xl' : 'text-5xl'"
                    :style="`color: ${proj.glowColor}`">
                {{ proj.glyphText }}
              </span>
            </div>

            <div v-if="index === 0 || index === 3" class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:animate-scan pointer-events-none"></div>

            <div class="flex justify-between items-start relative z-10">
              <div class="font-mono text-[9px] tracking-widest uppercase border border-zinc-900 bg-zinc-950/80 px-2.5 py-1 rounded-md"
                   :style="`color: ${proj.tagColor}; border-color: ${proj.glowColor}20`">
                {{ proj.tag }}
              </div>
              <div class="w-8 h-8 border border-zinc-900 rounded-xl flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm group-hover:border-zinc-500 transition-colors duration-300">
                <span class="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" :style="`color: ${proj.glowColor}`">↗</span>
              </div>
            </div>

            <div class="space-y-4 relative z-10 pt-12">
              <h3 class="font-black uppercase italic tracking-tighter text-white leading-none transition-colors duration-300"
                  :class="[(index === 0 || index === 3) ? 'text-3xl md:text-4xl group-hover:text-cyan-400' : 'text-xl group-hover:text-purple-400']">
                {{ proj.name }}
              </h3>
              <div class="flex gap-1.5 flex-wrap">
                <span v-for="badge in proj.badges" :key="badge"
                      class="font-mono text-[9px] text-zinc-400 border border-zinc-900/60 bg-zinc-900/20 px-2.5 py-1 rounded-md uppercase tracking-wider group-hover:border-zinc-800 transition-colors">
                  {{ badge }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { name: 'Codifiko — Tactical Lab', tag: '// PROYECTO_FLAGSHIP', href: '/laboratorio', glowColor: '#22d3ee', tagColor: '#22d3ee', glyphText: 'CODIFIKO v2', badges: ['Nuxt 3', 'Vue 3', 'Three.js', 'TailwindCSS'] },
  { name: 'Design System Pro', tag: '// UI_DESIGN_SYSTEM', href: '/laboratorio', glowColor: '#a78bfa', tagColor: '#a78bfa', glyphText: 'UI SYSTEM', badges: ['Figma', 'Storybook'] },
  { name: 'Agente IA Custom', tag: '// AI_INTEGRATION', href: '/laboratorio', glowColor: '#4ade80', tagColor: '#4ade80', glyphText: 'AI AGENT', badges: ['Node.js', 'Prisma'] },
  { name: 'Nitro API Engine', tag: '// BACKEND_CORE', href: '/laboratorio', glowColor: '#f87171', tagColor: '#f87171', glyphText: 'REST API', badges: ['Node.js', 'Redis', 'PostgreSQL'] },
]
</script>

<style scoped>
.zone-projects {
  background-color: #03030c;
  background-image: radial-gradient(ellipse 90% 60% at 50% 50%, #0a0a2e 0%, #050514 40%, transparent 70%);
  position: relative;
}
.zone-projects::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(129, 140, 248, 0.6), transparent);
}
@keyframes scan-line {
  0% { left: -100%; }
  100% { left: 100%; }
}
.group:hover .group-hover\:animate-scan {
  animation: scan-line 2s linear infinite;
}
</style>