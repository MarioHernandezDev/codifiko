<template>
  <section id="about" class="relative bg-[#080809] py-32 px-6 overflow-hidden">
    <div class="max-w-4xl mx-auto space-y-16">
      
      <div class="space-y-4">
        <div class="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-purple-500 uppercase">
          <span class="w-8 h-[1px] bg-purple-500"></span>
          [ phase_02 // manifesto ]
        </div>
        <h2 class="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          CÓDIGO CON <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic">ACTITUD.</span>
        </h2>
      </div>

      <div class="space-y-12">
        <p 
          v-for="(text, index) in manifestoItems" 
          :key="index"
          ref="revealRefs"
          class="text-2xl md:text-4xl font-bold leading-tight transition-all duration-1000 ease-out"
          :class="visibleStates[index] ? 'text-white opacity-100 translate-y-0' : 'text-zinc-800 opacity-20 translate-y-8'"
        >
          <span class="text-purple-500 font-mono text-sm mr-4">0{{ index + 1 }}_</span>
          {{ text }}
        </p>
      </div>

      <div class="pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-900">
        <div class="space-y-4">
          <h4 class="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">// el_arquitecto</h4>
          <p class="text-zinc-400 font-sans leading-relaxed">
            Soy un artesano digital obsesionado con la intersección entre la estética radical y la eficiencia de software. Codifiko no es una agencia, es mi declaración de guerra contra las webs mediocres y lentas.
          </p>
        </div>
        <div class="flex items-center justify-end">
          <div class="px-6 py-3 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-none text-[10px] font-mono text-zinc-500 tracking-widest uppercase italic">
            "Software should be felt, not just used."
          </div>
        </div>
      </div>
    </div>

    <div class="absolute -right-20 top-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const manifestoItems = [
  "No arrastramos bloques. Escribimos cada línea de código.",
  "Si no es ultra-rápido, no es Codifiko. Cero basura técnica.",
  "Diseñamos experiencias que enganchan, no simples páginas.",
  "El SEO no es un extra, es el núcleo de nuestra arquitectura.",
  "Tu aura digital define tu éxito. Nosotros la construimos."
]

const revealRefs = ref([])
const visibleStates = ref(manifestoItems.map(() => false))

onMounted(() => {
  const observerOptions = {
    root: null,
    threshold: 0.5, // Se activa cuando el 50% de la frase está visible
    rootMargin: '0px 0px -10% 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = revealRefs.value.indexOf(entry.target)
        if (index !== -1) {
          visibleStates.value[index] = true
        }
      }
    })
  }, observerOptions)

  revealRefs.value.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* Optimizamos para que el scroll se sienta premium */
section {
  will-change: transform;
}
</style>