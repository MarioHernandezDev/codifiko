<template>
  <div class="zone-arsenal w-full left-0 right-0">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-24 md:py-40">
      <section id="section2" class="relative">
        
        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase">// TECH_STACK_INVENTORY</div>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              02 / Arsenal Técnico
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">CORE_LOADOUT // SYSTEMS_READY</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 hover:bg-zinc-950/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.02)] transition-all duration-500 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.01] rounded-full blur-2xl group-hover:bg-cyan-500/[0.03] transition-all duration-500"></div>
            <div class="relative z-10">
              <div class="flex justify-between items-center mb-6 font-mono">
                <span class="text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// LAYER_01 . UI_UX</span>
                <span class="text-[9px] text-zinc-600 uppercase">FT_ENG</span>
              </div>
              <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Arquitectura Frontend</h3>
              <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                Especializado en la creación de interface PERSONALIZADAS Y DESDE 0 de usuario animadas, arquitecturas modulares escalables y experiencias web de alta fidelidad visual con rendimiento optimizado.
              </p>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 relative z-10">
              <span 
                v-for="tech in ['Vue 3', 'Nuxt 3', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3']" 
                :key="tech" 
                class="font-mono text-[10px] bg-zinc-900/50 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-900/80 group-hover:border-cyan-500/10 group-hover:text-zinc-300 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-purple-500/30 hover:bg-zinc-950/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.02)] transition-all duration-500 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/[0.01] rounded-full blur-2xl group-hover:bg-purple-500/[0.03] transition-all duration-500"></div>
            <div class="relative z-10">
              <div class="flex justify-between items-center mb-6 font-mono">
                <span class="text-[9px] text-purple-400 font-bold tracking-widest uppercase">// LAYER_02 . RUNTIME</span>
                <span class="text-[9px] text-zinc-600 uppercase">BK_CORE</span>
              </div>
              <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Lógica & Base de Datos</h3>
              <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                Construcción de servicios del lado del backend robustos, gestión de flujos de todo tipo de plataformas y diseño de almacenamiento estructurado y relacional.
              </p>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 relative z-10">
              <span 
                v-for="tech in ['Node.js', 'PHP (Laravel)', 'SQL / MySQL', 'REST APIs']" 
                :key="tech" 
                class="font-mono text-[10px] bg-zinc-900/50 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-900/80 group-hover:border-purple-500/10 group-hover:text-zinc-300 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-amber-500/30 hover:bg-zinc-950/80 hover:shadow-[0_0_30px_rgba(245,158,11,0.02)] transition-all duration-500 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.01] rounded-full blur-2xl group-hover:bg-amber-500/[0.03] transition-all duration-500"></div>
            <div class="relative z-10">
              <div class="flex justify-between items-center mb-6 font-mono">
                <span class="text-[9px] text-amber-500 font-bold tracking-widest uppercase">// LAYER_03 . DEPLOY_ENV</span>
                <span class="text-[9px] text-zinc-600 uppercase">INFRA_DEV</span>
              </div>
              <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Entorno & Despliegue</h3>
              <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                Control de versiones preciso, automatización de entornos mediante contenedores y flujos de despliegue continuo en producción, de los que aprendo cada día un poco más.
              </p>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 relative z-10">
              <span 
                v-for="tech in ['Git / GitHub', 'Docker', 'Linux / Bash', 'Figma']" 
                :key="tech" 
                class="font-mono text-[10px] bg-zinc-900/50 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-900/80 group-hover:border-amber-500/10 group-hover:text-zinc-300 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 bg-zinc-950/40 border border-zinc-900/60 rounded-xl p-4 flex items-center justify-between font-mono text-[9px] text-zinc-500 backdrop-blur-sm">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="tracking-wider">CURRENT_FOCUS: FULLSTACK_ARCHITECTURE // NUXT_3_AND_NODE_RUNTIME</span>
          </div>
          <span class="hidden sm:inline text-zinc-600 uppercase tracking-widest">Codifiko Lab Verified_</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.zone-arsenal {
  background-color: #06050a; /* Ajustado ligeramente para un negro más unificado con el resto */
  background-image: radial-gradient(circle, rgba(167, 139, 250, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
  position: relative;
}
.zone-arsenal::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(167, 139, 250, 0.2), transparent);
}
</style>