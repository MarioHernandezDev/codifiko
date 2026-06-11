<template>
  <div class="w-full relative select-none">

    <div class="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[160px] pointer-events-none -z-0"></div>
    <div class="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[160px] pointer-events-none -z-0"></div>

    <SectionNav />

    <MiniHero
      sysRef="IDENTITY_DOSSIER // node_grx_2026"
      titleFirst="SOBRE"
      titleSecond="MÍ —"
      class="max-w-7xl mx-auto px-4 md:px-10"
    >
      <p class="text-zinc-400 font-sans text-base md:text-lg leading-relaxed border-l border-zinc-800 pl-6 normal-case max-w-2xl tracking-normal">
        Ingeniero de software y arquitecto de interfaces tácticas. Aquí no encontrarás un CV genérico: encontrarás el sistema operativo de una persona que construye productos digitales con propósito, lógica y obsesión por el detalle.
      </p>
    </MiniHero>

    <main class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
      <section id="section1" class="mt-28 md:mt-40 mb-32 md:mb-52">

        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div class="space-y-1">
            <div class="cdk-sys-ref">// IDENTITY_MATRIX</div>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              01 / Perfil de Sistema
            </h2>
          </div>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">CORE_IDENTITY_LOG // ACCESS_GRANTED</span>
        </div>

        <div class="grid grid-cols-12 gap-10 lg:gap-16 items-start">

          <div class="col-span-12 lg:col-span-5 space-y-8">
            <div class="relative group">
              <div class="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>

              <div class="cdk-panel-tactical p-3 group-hover:border-cyan-500/30 transition-colors duration-500">
                <div class="absolute inset-0 bg-scanlines pointer-events-none opacity-30 z-20 mix-blend-overlay"></div>
                <div class="cdk-laser-line"></div>
                <div class="relative overflow-hidden rounded-xl bg-zinc-900/40">
                  <img
                    src="~/assets/img/profile-cyborg-mesh.webp"
                    alt="Mario Hernández — Codifiko Tactical Core"
                    class="w-full h-auto object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-750 ease-out min-h-[320px]"
                  />
                  <div class="absolute inset-4 border border-dashed border-zinc-800/40 rounded-xl flex flex-col items-end justify-end p-4 pointer-events-none group-hover:border-cyan-500/20 transition-colors duration-500">
                    <span class="font-mono text-[8px] text-cyan-400/40 tracking-widest uppercase group-hover:text-cyan-400/70 transition-colors">[ SYSTEM_SCAN_ACTIVE ]</span>
                    <span class="font-mono text-[8px] text-zinc-700 tracking-widest uppercase">MHP // NODE_GRX</span>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-3 -right-3 z-20 bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/40 px-3 py-1.5 rounded-lg shadow-xl transition-colors duration-500">
                <span class="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">Node_ID: </span>
                <span class="font-mono text-[9px] text-white font-bold tracking-wider">#2026_GRX</span>
              </div>
            </div>

            <div class="border border-zinc-900/80 bg-zinc-950/30 rounded-xl p-6 font-mono space-y-5">
              <div class="flex justify-between items-center pb-3 border-b border-zinc-900 text-[10px]">
                <span class="text-zinc-500 font-bold tracking-wider">// SYSTEM_METRICS_ENG</span>
                <div class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="text-emerald-400 font-bold tracking-widest text-[9px]">ONLINE</span>
                </div>
              </div>
              <div class="space-y-4">
                <div v-for="skill in skillMetrics" :key="skill.label" class="space-y-1.5">
                  <div class="flex justify-between text-[9px] tracking-wide">
                    <span class="text-zinc-400">{{ skill.label }}</span>
                    <span class="text-white font-bold bg-zinc-900 px-1.5 py-0.5 rounded text-[8px] border border-zinc-800/60">{{ skill.value }}%</span>
                  </div>
                  <div class="h-2 w-full bg-zinc-950 rounded-md border border-zinc-900 p-[2px] overflow-hidden">
                    <div
                      class="h-full rounded-sm transition-all duration-1000 ease-out relative"
                      :class="skill.barClass"
                      :style="`width: ${skill.value}%`"
                    >
                      <span class="absolute top-0 right-0 h-full w-[4px] bg-white/40 rounded-full blur-[1px]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-7 space-y-12 lg:pl-4">
            <div class="space-y-3 group border-l border-zinc-900 pl-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div class="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// 01 . ACADEMIC_AND_CORPORATE_NODE</div>
              <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                Ingeniería Avanzada en NTT DATA
              </h3>
              <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case tracking-normal">
                Anclado en mi formación superior de <strong class="text-white font-semibold">DAW en el Zaidín Vergeles</strong> completada en este ciclo de 2026, consolidé mi arquitectura lógica trabajando en los entornos de <strong class="text-cyan-400 font-semibold">NTT DATA</strong>. Una etapa de escalado completada con éxito donde asimilé flujos corporativos de alto nivel, despliegues críticos en producción y metodologías ágiles avanzadas en equipos de alto rendimiento.
              </p>
              <p class="text-zinc-500 font-sans text-xs italic leading-relaxed normal-case tracking-normal">
                Aprender bajo presión real, con código en producción y equipos multidisciplinares, fue la forma más brutal y efectiva de escalar. No hay bootcamp que lo replique.
              </p>
            </div>

            <div class="space-y-3 group border-l border-zinc-900 pl-6 hover:border-purple-500/30 transition-colors duration-300">
              <div class="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase">// 02 . LABORATORY_ENVIRONMENT</div>
              <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                El Universo de "Codifiko"
              </h3>
              <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case tracking-normal">
                Mi proyecto <strong class="text-purple-400 font-semibold">Codifiko</strong> no es una simple marca ni un portfolio de exhibición. Es mi laboratorio táctico personal: un entorno diseñado para romper las convenciones del desarrollo web fullstack y explorar la frontera entre diseño de interfaces interactivas y arquitectura de software verdaderamente robusta.
              </p>
              <p class="text-zinc-500 font-sans text-xs italic leading-relaxed normal-case tracking-normal">
                Cada componente que construyo aquí es una hipótesis visual y lógica. Cada animación tiene una intención. El caos tiene estructura.
              </p>
            </div>

            <div class="space-y-3 group border-l border-zinc-900 pl-6 hover:border-amber-500/30 transition-colors duration-300">
              <div class="font-mono text-[9px] text-amber-500 font-bold tracking-widest uppercase">// 03 . ALTERNATE_THREADS</div>
              <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                Sinergia Humana y Soporte Comercial
              </h3>
              <p class="text-zinc-400 font-sans text-base leading-relaxed normal-case tracking-normal">
                Entiendo los problemas complejos como retos colectivos, no como batallas individuales. Mi mentalidad optimista innata me permite integrarme y potenciar cualquier equipo de trabajo con rapidez. En paralelo, aplico mis conocimientos en marketing web y digitalización para dar soporte estratégico a proyectos de personas cercanas.
              </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <div
                v-for="stat in statsStrip"
                :key="stat.label"
                class="bg-zinc-950/40 border border-zinc-900/80 rounded-xl px-4 py-5 text-center group hover:border-zinc-700 hover:bg-zinc-900/20 transition-all duration-300 cursor-default"
              >
                <div class="font-black uppercase italic tracking-tighter leading-none mb-1 text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-105 origin-center" :class="stat.colorClass">
                  {{ stat.value }}
                </div>
                <div class="font-mono text-[8px] text-zinc-500 tracking-widest uppercase mt-2">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>

    <div class="zone-quote">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section class="py-32 md:py-52">
          <div class="relative border-l-2 border-cyan-500 pl-8 md:pl-12 py-6 bg-cyan-500/[0.02] rounded-r-2xl overflow-hidden">
            <span class="absolute top-4 right-6 font-serif text-8xl text-cyan-500/[0.05] leading-none select-none pointer-events-none">"</span>
            <div class="cdk-sys-ref mb-4">// CORE_PHILOSOPHY_TRANSMISSION</div>
            <p class="font-black uppercase italic tracking-tighter text-white text-2xl md:text-4xl leading-tight max-w-3xl mb-6 font-mono">
              El código que nadie ve es tan importante como el que todo el mundo usa. La arquitectura silenciosa sostiene lo que brilla.
            </p>
            <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">MHP // Codifiko Node_GRX · 2026</span>
          </div>
        </section>
      </div>
    </div>

    <div class="zone-arsenal">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section id="section2" class="py-32 md:py-52 relative">

          <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div class="space-y-1">
              <div class="font-mono text-[9px] text-purple-500/70 tracking-widest uppercase">// TECH_STACK_INVENTORY</div>
              <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                02 / Arsenal Técnico
              </h2>
            </div>
            <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">CORE_LOADOUT // SYSTEMS_READY</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
              <div>
                <div class="flex justify-between items-center mb-6 font-mono">
                  <span class="text-[9px] text-cyan-400 font-bold tracking-widest uppercase">// LAYER_01 . UI_UX</span>
                  <span class="text-[9px] text-zinc-600 uppercase">FT_ENG</span>
                </div>
                <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Architectura Frontend</h3>
                <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                  Especializado en la creación de interfaces de usuario reactivas, arquitecturas modulares escalables y experiencias web de alta fidelidad visual con rendimiento optimizado.
                </p>
              </div>
              <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vue 3</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Nuxt 3</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">JavaScript (ES6+)</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Tailwind CSS</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">HTML5 / CSS3</span>
              </div>
            </div>

            <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300">
              <div>
                <div class="flex justify-between items-center mb-6 font-mono">
                  <span class="text-[9px] text-purple-400 font-bold tracking-widest uppercase">// LAYER_02 . RUNTIME</span>
                  <span class="text-[9px] text-zinc-600 uppercase">BK_CORE</span>
                </div>
                <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Lógica & Base de Datos</h3>
                <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                  Construcción de servicios del lado del servidor robustos, gestión de flujos de datos asíncronos y diseño de almacenamiento estructurado y relacional.
                </p>
              </div>
              <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Node.js</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">PHP (Laravel)</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">SQL / MySQL</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">REST APIs</span>
              </div>
            </div>

            <div class="border border-zinc-900 bg-zinc-950/40 rounded-2xl p-6 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div class="flex justify-between items-center mb-6 font-mono">
                  <span class="text-[9px] text-amber-500 font-bold tracking-widest uppercase">// LAYER_03 . DEPLOY_ENV</span>
                  <span class="text-[9px] text-zinc-600 uppercase">INFRA_DEV</span>
                </div>
                <h3 class="text-xl font-black text-white uppercase italic tracking-tight mb-2">Entorno & Despliegue</h3>
                <p class="text-zinc-400 text-sm font-sans mb-8 leading-relaxed">
                  Control de versiones preciso, automatización de entornos locales aislados mediante contenedores y flujos de despliegue continuo en producción corporativa.
                </p>
              </div>
              <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Git / GitHub</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Docker</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vite / Webpack</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Linux / Bash</span>
                <span class="font-mono text-[10px] bg-zinc-900 text-zinc-300 px-3 py-1 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">Figma</span>
              </div>
            </div>
          </div>

          <div class="mt-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl p-4 flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <div class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
              <span>CURRENT_FOCUS: FULLSTACK_ARCHITECTURE // NUXT_3_AND_NODE_RUNTIME</span>
            </div>
            <span class="hidden sm:inline text-zinc-600 uppercase">Codifiko Lab Verified_</span>
          </div>

        </section>
      </div>
    </div>

    <div class="zone-modus">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section id="section-modus" class="py-32 md:py-52">

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

    <div class="zone-workspace">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section id="section3" class="py-32 md:py-52 relative">

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
                  <div class="font-mono text-[10px] text-emerald-400">[04 // AGLE_FLOW]</div>
                  <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-tight">Control Preciso</h4>
                  <p class="text-zinc-500 text-xs font-sans leading-relaxed">Flujo Git profesional mediante ramas estructuradas, commits semánticos y deploys limpios sin fricción en producción.</p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>

    <div class="zone-projects">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section id="section-projects" class="py-32 md:py-52">

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

    <div class="zone-timeline">
      <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <section id="section4" class="py-32 md:py-52">

          <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              04 / Trayectoria
            </h2>
            <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">EXECUTION_LOG_HISTORY</span>
          </div>

          <Timeline :timeline="timeline" />

        </section>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
      <section class="mb-20 border-t border-zinc-900 pt-24 text-center space-y-8 relative overflow-hidden">

        <div class="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <img
            src="~/assets/img/profile-cyborg-mesh.webp"
            alt=""
            class="w-[500px] h-[500px] object-cover opacity-[0.05] blur-2xl grayscale"
          />
        </div>

        <div class="font-mono text-[9px] text-cyan-400 tracking-[0.4em] uppercase">// END_OF_DOSSIER_TRANSMISSION</div>
        <h3 class="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter max-w-4xl mx-auto leading-[0.9]">
          ¿Tienes un reto<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">lógico para mí?-</span>
        </h3>
        <p class="text-zinc-400 font-sans text-base max-w-lg mx-auto normal-case leading-relaxed">
          Mi terminal está abierta para nuevos despliegues, consultorías de interfaz o integración inmediata en células de desarrollo de alto rendimiento.
        </p>
        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center gap-3 bg-white text-black font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5"
          >
            <span>Establecer Conexión</span>
            <span class="text-sm font-sans font-black">→</span>
          </NuxtLink>
          <NuxtLink
            to="/laboratorio"
            class="inline-flex items-center gap-3 border border-zinc-800 text-zinc-400 font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl hover:border-zinc-600 hover:text-white transition-all duration-300"
          >
            [ Explorar Laboratorio ]
          </NuxtLink>
        </div>
        
        <div class="pt-12 flex justify-center gap-6 font-mono text-[9px] text-zinc-700 tracking-widest">
          <span>CPU: 99%</span>
          <span class="text-zinc-900">|</span>
          <span>FPS: 60</span>
          <span class="text-zinc-900">|</span>
          <span>LAT: 12ms</span>
          <span class="text-zinc-900">|</span>
          <span>STATUS: OPERATIONAL</span>
        </div>
      </section>
    </div>

  </div>
</template>

<script setup>
import SectionNav from '~/components/SectionNav.vue'
import Timeline from '~/components/Timeline.vue'

useHead({
  title: 'Sobre Mí — Codifiko',
  meta: [
    { name: 'description', content: 'Perfil de sistema de Mario Hernández. Ingeniero de software fullstack y diseñador de interfaces tácticas.' }
  ]
})

const skillMetrics = [
  { label: 'FRONTEND ENGINEERING',        value: 98,  barClass: 'bg-gradient-to-r from-cyan-500 to-cyan-400'    },
  { label: 'UI / UX DESIGN SYSTEMS',      value: 93,  barClass: 'bg-gradient-to-r from-purple-500 to-purple-400' },
  { label: 'AGENTES IA / INTEGRACIÓN',    value: 90,  barClass: 'bg-gradient-to-r from-amber-500 to-amber-400'   },
  { label: 'COHESIÓN GRUPAL // OPTIMISTA',value: 100, barClass: 'bg-gradient-to-r from-emerald-500 to-cyan-400'  },
]

const statsStrip = [
  { value: '4+', label: 'Años activo',          colorClass: 'text-cyan-400'    },
  { value: '18', label: 'Proyectos lanzados',    colorClass: 'text-purple-400'  },
  { value: '0',  label: 'Bugs en producción',    colorClass: 'text-amber-400'   },
  { value: '∞',  label: 'Commits de curiosidad', colorClass: 'text-emerald-400' },
]

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

const projects = [
  {
    name: 'Codifiko — Tactical Lab',
    tag: '// PROYECTO_FLAGSHIP',
    href: '/laboratorio',
    glowColor: '#22d3ee',
    tagColor: '#22d3ee',
    glyphText: 'CODIFIKO v2',
    badges: ['Nuxt 3', 'Vue 3', 'Three.js', 'TailwindCSS'],
  },
  {
    name: 'Design System Pro',
    tag: '// UI_DESIGN_SYSTEM',
    href: '/laboratorio',
    glowColor: '#a78bfa',
    tagColor: '#a78bfa',
    glyphText: 'UI SYSTEM',
    badges: ['Figma', 'Storybook'],
  },
  {
    name: 'Agente IA Custom',
    tag: '// AI_INTEGRATION',
    href: '/laboratorio',
    glowColor: '#4ade80',
    tagColor: '#4ade80',
    glyphText: 'AI AGENT',
    badges: ['Node.js', 'Prisma'],
  },
  {
    name: 'Nitro API Engine',
    tag: '// BACKEND_CORE',
    href: '/laboratorio',
    glowColor: '#f87171',
    tagColor: '#f87171',
    glyphText: 'REST API',
    badges: ['Node.js', 'Redis', 'PostgreSQL'],
  },
]

const timeline = [
  {
    date: '2026 — Presente',
    role: 'Desarrollador Freelance & Codifiko',
    company: 'Laboratorio Táctico Personal // Granada, ES',
    description: 'Diseño y construcción de ecosistemas digitales de alto impacto para clientes y proyectos propios. Investigación aplicada en interfaces 3D, agentes IA y arquitectura de software moderna.',
    active: true,
  },
  {
    date: '2025 — 2026',
    role: 'Desarrollador Frontend',
    company: 'NTT DATA // Remoto',
    description: 'Desarrollo de aplicaciones corporativas de alto tráfico con Vue 3 y Nuxt. Integración con APIs REST y GraphQL, despliegues en entornos cloud críticos y metodologías Scrum en equipos distribuidos.',
    active: false,
  },
  {
    date: '2024 — 2025',
    role: 'Prácticas de Desarrollo Web',
    company: 'NTT DATA // Granada, ES',
    description: 'Primer contacto real con producción. Mantenimiento y evolución de módulos frontend, optimización de rendimiento y onboarding técnico acelerado en stack empresarial.',
    active: false,
  },
  {
    date: '2022 — 2024',
    role: 'CFGS — Desarrollo de Aplicaciones Web',
    company: 'IES Zaidín Vergeles // Granada, ES',
    description: 'Formación técnica superior en desarrollo fullstack: HTML, CSS, JavaScript, Java, PHP, bases de datos relacionales y primeros proyectos de portfolio con frameworks modernos.',
    active: false,
  },
]
</script>

<style scoped>
/* Transición controlada para el barrido del láser en las tarjetas */
@keyframes laser-scan {
  0%   { top: 0%;   opacity: 0;   }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.7; }
  100% { top: 100%; opacity: 0;   }
}
.group:hover .cdk-laser-line {
  animation: laser-scan 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* PSEUDO-ELEMENTOS DE INTEGRACIÓN CROMÁTICA ESPECÍFICA */
.zone-quote {
  background-color: #030d0d;
  position: relative;
  overflow: hidden;
}
.zone-quote::before {
  content: '01010011 01110100 01100001 01110010 01110100 00100000 01000011 01101111 01100100 01100101 _> EXEC 00110001 0 // NODE_BOOT INIT_SEQ STACK_READY SIGNAL_OK 01001101 01001000 01010000 CODIFIKO_SYS DEPLOY_OK 00110000 01110011';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  font-family: monospace;
  font-size: 10px;
  color: #22d3ee;
  opacity: 0.02;
  word-break: break-all;
  line-height: 2;
  pointer-events: none;
  overflow: hidden;
  padding: 24px;
}

.zone-arsenal {
  background-color: #05030e;
  background-image: radial-gradient(circle, rgba(167, 139, 250, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
  position: relative;
}
.zone-arsenal::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(167, 139, 250, 0.4), transparent);
}

.zone-modus {
  background-color: #0a0701;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(251, 191, 36, 0.015) 24px, rgba(251, 191, 36, 0.015) 25px);
  position: relative;
}
.zone-modus::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(251, 191, 36, 0.4), transparent);
}

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
  15%  { opacity: 1;              }
  85%  { opacity: 1;              }
  100% { width: 100%; left: 0;    opacity: 0;   }
}

.zone-projects {
  background-color: #03030c;
  background-image: radial-gradient(ellipse 90% 60% at 50% 50%, #0a0a2e 0%, #050514 40%, transparent 70%);
  position: relative;
}
.zone-projects::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(129, 140, 248, 0.6), transparent);
}

.zone-timeline {
  background-color: #050506;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255, 255, 255, 0.01) 18px, rgba(255, 255, 255, 0.01) 19px);
  position: relative;
}
.zone-timeline::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, rgba(100, 100, 110, 0.3), transparent);
}
</style>