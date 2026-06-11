<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 py-12 relative animate-fade-in">
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

    <div class="border-b border-zinc-900 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
      <div class="space-y-2">
        <div class="cdk-sys-ref">// SYSTEM_NODE: /CONCEPTOS</div>
        <h1 class="cdk-title-page">
          LAB_DE_ARQUITECTURA<span class="text-purple-400">.sys</span>
        </h1>
      </div>
      
      <div class="flex flex-wrap gap-2 text-[10px] font-mono tracking-wider">
        <button class="px-3 py-1.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
          [ ALL_NODES ]
        </button>
        <button class="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300 transition-colors">
          [ CORE_API ]
        </button>
        <button class="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300 transition-colors">
          [ PERFORMANCE_UX ]
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      
      <div class="cdk-panel hover:border-purple-500/30 group">
        <div class="flex justify-between items-start mb-4">
          <span class="text-[10px] font-mono text-zinc-600 font-bold tracking-widest">NODE_ID // 001</span>
          <span class="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono uppercase tracking-widest font-bold">OPTIMIZED</span>
        </div>
        
        <h2 class="text-xl font-bold text-white uppercase group-hover:text-purple-400 transition-colors duration-300 mb-2">
          Arquitectura SSR de Alta Disponibilidad
        </h2>
        
        <p class="cdk-text-mono-sm text-zinc-400 mb-6">
          Despliegue de un ecosistema desacoplado utilizando Nuxt y Nitro Engine, optimizando métricas Core Web Vitals (LCP, FID) para maximizar el posicionamiento SEO y garantizar cargas instantáneas bajo estrés.
        </p>

        <div class="bg-zinc-950/60 border border-zinc-900/60 rounded-xl p-4 mb-6 font-mono text-[10px] space-y-2 text-zinc-500">
          <div class="flex justify-between"><span class="text-zinc-600">INFRASTRUCTURE:</span> <span class="text-zinc-300">Docker containers</span></div>
          <div class="flex justify-between"><span class="text-zinc-600">LOAD_TIME:</span> <span class="text-purple-400">&lt; 450ms (TTFB)</span></div>
          <div class="flex justify-between"><span class="text-zinc-600">SEO_RANK_CORE:</span> <span class="text-white font-bold">100 / 100 PERFORMANCE</span></div>
        </div>

        <div class="flex flex-wrap gap-2 border-t border-zinc-900/60 pt-4">
          <span class="cdk-badge-tech">Nuxt 4</span>
          <span class="cdk-badge-tech">Nitro</span>
          <span class="cdk-badge-tech">Docker</span>
          <span class="cdk-badge-tech">SEO Opt.</span>
        </div>
      </div>

      <div class="cdk-panel hover:border-cyan-500/30 group">
        <div class="flex justify-between items-start mb-4">
          <span class="text-[10px] font-mono text-zinc-600 font-bold tracking-widest">NODE_ID // 002</span>
          <span class="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[9px] font-mono uppercase tracking-widest font-bold">STABLE</span>
        </div>
        
        <h2 class="text-xl font-bold text-white uppercase group-hover:text-cyan-400 transition-colors duration-300 mb-2">
          Motores API Concurrente y Caché
        </h2>
        
        <p class="cdk-text-mono-sm text-zinc-400 mb-6">
          Diseño y desarrollo de backends modulares orientados a microservicios. Implementación de capas de persistencia y sistemas de caché en tiempo real con Redis para mitigar la latencia de consulta en bases de datos relacionales.
        </p>

        <div class="bg-zinc-950/60 border border-zinc-900/60 rounded-xl p-4 mb-6 font-mono text-[10px] space-y-2 text-zinc-500">
          <div class="flex justify-between"><span class="text-zinc-600">ARCH_PATTERN:</span> <span class="text-zinc-300">RESTful / Event-Driven</span></div>
          <div class="flex justify-between"><span class="text-zinc-600">DATA_ENGINE:</span> <span class="text-cyan-400">PostgreSQL + Redis</span></div>
          <div class="flex justify-between"><span class="text-zinc-600">INTEGRITY:</span> <span class="text-white font-bold">Secure JWT / CORS Gate</span></div>
        </div>

        <div class="flex flex-wrap gap-2 border-t border-zinc-900/60 pt-4">
          <span class="cdk-badge-tech">Node.js</span>
          <span class="cdk-badge-tech">Express</span>
          <span class="cdk-badge-tech">Redis</span>
          <span class="cdk-badge-tech">PostgreSQL</span>
        </div>
      </div>

    </div>
  </div>
</template>