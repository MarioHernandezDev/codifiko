<template>
  <section class="relative rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 md:p-12 overflow-hidden group">
    <div class="absolute inset-0 scanlines-overlay opacity-10 pointer-events-none"></div>
    <div class="absolute top-6 right-6 font-mono text-[8px] text-zinc-700 tracking-widest uppercase hidden sm:block">
      SEC_ACCESS // AUTH_REQ_NONE
    </div>

    <div class="relative z-10 max-w-2xl space-y-4">
      <span class="font-mono text-[9px] text-purple-400 border border-purple-500/20 bg-purple-950/30 px-2.5 py-1 rounded-md uppercase tracking-widest">
        // EXPERIMENTAL_ZONE
      </span>
      <h2 class="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tight pt-2">
        ¿Quieres ver código creativo en acción?
      </h2>
      <p class="text-zinc-400 text-sm leading-relaxed font-sans">
        He desarrollado un entorno aislado de pruebas tipográficas, físicas matemáticas e incluso minijuegos interactivos donde experimento con el rendimiento y la lógica avanzada en tiempo real.
      </p>
      <div class="pt-2">
        <NuxtLink 
          to="/laboratorio" 
          class="inline-flex items-center font-mono text-[10px] font-bold tracking-widest text-white uppercase border border-zinc-800 hover:border-purple-500/40 bg-zinc-950 px-4 py-2.5 rounded-xl transition-all duration-300"
        >
          Acceder al Laboratorio Real-Time →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>