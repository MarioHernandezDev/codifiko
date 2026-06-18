<template>
  <header class="relative z-10 mb-20 md:mb-24 pt-20 pb-20 border-b border-zinc-900/40 group select-none overflow-hidden text-center flex flex-col items-center justify-center">
    
    <div class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] transition-all duration-1000 group-hover:bg-cyan-500/10"></div>
      
      <div class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-zinc-800/30 via-zinc-900/10 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-4xl px-4 flex flex-col items-center">
      
      <div class="inline-flex items-center gap-3 mb-6 font-mono text-[10px]">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-500/60 transition-colors duration-500 group-hover:bg-cyan-400"></span>
        <span class="text-zinc-500 tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-cyan-400/90">{{ sysRef }}</span>
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-500/60 transition-colors duration-500 group-hover:bg-cyan-400"></span>
      </div>

      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
        {{ titleFirst }} <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-cyan-400 to-zinc-500 bg-[length:200%_auto] bg-center group-hover:bg-left transition-all duration-1000 ease-in-out">
          {{ titleSecond }}
        </span>
      </h1>

      <div class="mt-8 max-w-lg relative z-20">
        <slot>
          <p class="text-zinc-500 font-mono text-xs md:text-sm leading-relaxed border-t border-zinc-900/80 pt-4 px-4">
            // Ecosistema de datos y registros en ejecución continua.
          </p>
        </slot>
      </div>

    </div>
  </header>
</template>

<script setup>
defineProps({
  sysRef: {
    type: String,
    required: true
  },
  titleFirst: {
    type: String,
    required: true
  },
  titleSecond: {
    type: String,
    required: true
  }
})
</script>