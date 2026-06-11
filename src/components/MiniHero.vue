<template>
  <header class="relative z-10 mb-20 md:mb-28 pt-12 pb-24 border-b border-zinc-900/40 group select-none">
    
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-48 pointer-events-none overflow-hidden select-none z-0">
      
      <svg 
        class="absolute bottom-0 left-0 w-[200%] h-32 text-cyan-500/20 fill-current animate-wave-slow mix-blend-screen" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d="M0,60 C150,90 350,30 500,65 C650,100 850,30 1000,65 C1150,100 1350,30 1500,65 L1500,120 L0,120 Z"></path>
      </svg>

      <svg 
        class="absolute bottom-0 left-0 w-[200%] h-24 text-purple-600/15 fill-current animate-wave-fast mix-blend-screen" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d="M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 L1200,120 L0,120 Z"></path>
      </svg>
      
      <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#080809] to-transparent"></div>
    </div>

    <div class="relative z-10">
      <div class="inline-flex items-center gap-4 mb-8">
        <span class="h-[1px] w-8 bg-cyan-500 group-hover:w-16 transition-all duration-700"></span>
        <span class="cdk-sys-ref text-cyan-400 tracking-[0.25em]">{{ sysRef }}</span>
      </div>

      <h1 class="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic pr-6">
        {{ titleFirst }} <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-zinc-700 to-[95%] group-hover:to-cyan-400 group-hover:to-[95%] transition-all duration-700">
        {{ titleSecond }}
        </span>
        </h1>

      <div class="mt-8 max-w-xl relative z-20">
        <slot>
          <p class="text-zinc-500 font-mono text-xs md:text-sm leading-relaxed border-l border-zinc-800/80 pl-6">
            Ecosistema de datos y registros en ejecución continua.
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

<style scoped>
/* Animación de desplazamiento infinito para simular el oleaje de frecuencia */
@keyframes wave-data-motion {
  0% { transform: translateX(0); }
  50% { transform: translateX(-25%) scaleY(0.9); }
  100% { transform: translateX(-50%); }
}

.animate-wave-slow {
  animation: wave-data-motion 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

.animate-wave-fast {
  animation: wave-data-motion 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}
</style>