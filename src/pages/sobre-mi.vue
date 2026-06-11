<template>
  <div class="w-full relative py-20">
    
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

    <MiniHero 
      sysRef="IDENTITY_DOSSIER // v2.0.26" 
      titleFirst="MARIO" 
      titleSecond="HERNÁNDEZ -"
      class="max-w-7xl mx-auto px-4 md:px-10"
    >
      <p class="text-zinc-500 font-mono text-sm leading-relaxed border-l border-zinc-800 pl-6 normal-case max-w-xl">
        Ingeniero de software y diseñador de interfaces tácticas. Especializado en la creación de ecosistemas digitales de alto rendimiento.
      </p>
    </MiniHero>

    <main class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 mt-12">
      
      <section class="grid grid-cols-12 gap-12 lg:gap-16 items-center my-24 md:my-36">
        
        <div class="col-span-12 lg:col-span-5 space-y-8 relative">
          <div class="relative group animate-float-tactical">
            <div class="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div class="relative z-10 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-2 backdrop-blur-sm overflow-hidden">
              <div class="cdk-laser-line"></div>
              
              <img 
                :src="'/profile-cyborg-mesh.webp'" 
                alt="Codifiko Tactical Core" 
                class="w-full h-auto object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 min-h-[300px] bg-zinc-900/30"
                @error="(e) => e.target.style.display = 'none'" 
              />
              
              <div class="absolute inset-4 border border-dashed border-zinc-800/60 rounded-xl flex flex-col items-center justify-center font-mono pointer-events-none p-6 text-center">
                <span class="text-xs text-cyan-400 font-bold tracking-widest mb-1">[ UTILITY_MESH_RENDER ]</span>
                <span class="text-[10px] text-zinc-600">Listo para inyectar /profile-cyborg-mesh.webp</span>
              </div>
            </div>
            
            <div class="absolute -bottom-3 -right-3 z-20 bg-[#0b0b0d] border border-zinc-800 px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-widest text-zinc-400 uppercase shadow-xl">
              Node_ID: <span class="text-white font-bold">#2026_GRX</span>
            </div>
          </div>

          <div class="border border-zinc-900 bg-zinc-950/20 rounded-xl p-5 space-y-4 font-mono">
            <div class="flex justify-between items-center text-[10px]">
              <span class="text-zinc-600">// METRICS_ANALYST</span>
              <span class="text-emerald-400 font-bold uppercase tracking-wider">Ready_</span>
            </div>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-[9px] text-zinc-500 mb-1">
                  <span>COHESIÓN GRUPAL // OPTIMISTA</span>
                  <span class="text-zinc-400 font-bold">100%</span>
                </div>
                <div class="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div class="h-full bg-cyan-500 animate-progress w-full"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[9px] text-zinc-500 mb-1">
                  <span>ADAPTACIÓN INTEGRAL / AGENTES IA</span>
                  <span class="text-zinc-400 font-bold">95%</span>
                </div>
                <div class="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-500 animate-progress w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-7 space-y-12 md:space-y-16">
          <div class="space-y-4 relative group">
            <div class="text-[9px] text-cyan-400 font-mono tracking-widest uppercase">// 01 . ACADEMIC_AND_CORPORATE_NODE</div>
            <h2 class="text-3xl font-black text-white uppercase italic tracking-tight font-sans">
              Ingeniería Avanzada en NTT DATA
            </h2>
            <p class="text-zinc-400 font-mono text-sm leading-relaxed normal-case tracking-normal">
              Tras finalizar mi formación superior en <span class="text-zinc-200 font-bold">DAW en el Zaidín Vergeles</span> en este ciclo de 2026, aterricé en los entornos lógicos de <span class="text-cyan-400 font-bold">NTT DATA</span>. Una etapa completada con un éxito absoluto donde asimilé flujos corporativos de alto nivel, despliegues críticos en producción y metodologías ágiles avanzadas.
            </p>
          </div>

          <div class="space-y-4 relative group">
            <div class="text-[9px] text-purple-400 font-mono tracking-widest uppercase">// 02 . LABORATORY_ENVIRONMENT</div>
            <h2 class="text-3xl font-black text-white uppercase italic tracking-tight font-sans">
              El Universo de "Codifiko"
            </h2>
            <p class="text-zinc-400 font-mono text-sm leading-relaxed normal-case tracking-normal">
              Mi proyecto <span class="text-purple-400 font-bold">"codifiko"</span> no es una simple marca, es mi laboratorio táctico personal. Un entorno diseñado para romper las reglas establecidas del desarrollo web fullstack, donde experimento e implemento la fusión perfecta entre diseño de vanguardia y arquitectura de software robusta.
            </p>
          </div>

          <div class="space-y-4 relative group">
            <div class="text-[9px] text-amber-500 font-mono tracking-widest uppercase">// 03 . ALTERNATE_THREADS</div>
            <h2 class="text-3xl font-black text-white uppercase italic tracking-tight font-sans">
              Sinergia Humana y Soporte
            </h2>
            <p class="text-zinc-400 font-mono text-sm leading-relaxed normal-case tracking-normal">
              Entiendo los problemas complejos como retos colectivos. Mi mentalidad optimista innata me permite integrarme y potenciar equipos de trabajo fácilmente. En mis hilos de tiempo secundarios, utilizo mis conocimientos de marketing web y digitalización para dar soporte y elevar los proyectos comerciales de mis seres queridos como hobby.
            </p>
          </div>
        </div>

      </section>

      </main>
  </div>
</template>