<template>
  <div class="bg-[#080809] min-h-screen text-zinc-100 antialiased overflow-x-hidden flex flex-col justify-between font-mono">
    
    <header class="fixed top-4 left-0 w-full z-50 px-4 md:px-8 pointer-events-none">
      <div class="max-w-5xl mx-auto bg-zinc-950/40 backdrop-blur-xl border border-zinc-900/80 rounded-full px-5 md:px-6 py-3 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto transition-all duration-300">
        
        <NuxtLink to="/" @click="closeMenu" class="group flex items-center gap-3 text-xs font-black tracking-[0.25em] text-white uppercase transition-colors">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
          </span>
          <span class="group-hover:text-cyan-400 transition-colors">
            CODIFI<span class="text-cyan-400">KO</span><span class="animate-pulse text-purple-500">._</span>
          </span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest">
          <NuxtLink to="/sobre-mi" class="nav-link text-zinc-400 hover:text-white transition-colors relative py-1" active-class="text-cyan-400 active-nav-link">
            <span class="bracket opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-cyan-500/50">[</span>sobre_mí<span class="bracket opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-cyan-500/50">]</span>
          </NuxtLink>
          
          <NuxtLink to="/conceptos" class="nav-link text-zinc-400 hover:text-white transition-colors relative py-1" active-class="text-cyan-400 active-nav-link">
            <span class="bracket opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-purple-500/50">[</span>conceptos<span class="bracket opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-purple-500/50">]</span>
          </NuxtLink>
          
          <NuxtLink to="/contacto" class="relative overflow-hidden px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-cyan-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] btn-nav-contact" active-class="border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span class="relative z-10">./contacto</span>
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transition-transform duration-500 ease-out btn-bg-slide"></div>
          </NuxtLink>
        </nav>

        <button @click="toggleMenu" class="lg:hidden relative z-50 p-2 text-zinc-400 hover:text-white focus:outline-none flex flex-col justify-center items-center gap-1.5 w-8 h-8">
          <span class="h-[1px] w-5 bg-current transition-transform duration-300 ease-in-out" :class="{'rotate-45 translate-y-[7px] text-cyan-400': isMenuOpen}"></span>
          <span class="h-[1px] w-5 bg-current transition-opacity duration-300 ease-in-out" :class="{'opacity-0': isMenuOpen}"></span>
          <span class="h-[1px] w-5 bg-current transition-transform duration-300 ease-in-out" :class="{'-rotate-45 -translate-y-[7px] text-cyan-400': isMenuOpen}"></span>
        </button>
      </div>
    </header>

    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-[#080809]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center p-8 md:p-16 space-y-12">
        <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div class="space-y-2 relative z-10">
          <span class="text-[9px] text-cyan-500/40 tracking-[0.3em] font-mono block">// navigation_nodes</span>
          <nav class="flex flex-col space-y-6 text-3xl md:text-5xl font-black uppercase tracking-tighter">
            <NuxtLink to="/sobre-mi" @click="toggleMenu" class="mobile-link" active-class="text-cyan-400">Sobre Mí <span class="text-xs font-mono text-zinc-600 tracking-normal ml-2">01/</span></NuxtLink>
            <NuxtLink to="/conceptos" @click="toggleMenu" class="mobile-link" active-class="text-purple-400">Conceptos <span class="text-xs font-mono text-zinc-600 tracking-normal ml-2">02/</span></NuxtLink>
            <NuxtLink to="/contacto" @click="toggleMenu" class="mobile-link" active-class="text-cyan-400">Contacto <span class="text-xs font-mono text-zinc-600 tracking-normal ml-2">03/</span></NuxtLink>
          </nav>
        </div>
      </div>
    </transition>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="bg-[#050506] border-t border-zinc-900 pt-16 pb-8 px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 relative z-10">
        <div class="md:col-span-2 space-y-4">
          <div class="text-sm font-black tracking-[0.2em] text-white">CODIFI<span class="text-cyan-400">KO</span></div>
          <p class="text-[11px] text-zinc-500 max-w-sm leading-relaxed uppercase">
            Desarrollo de ecosistemas web avanzados, arquitectura de software limpia e interfaces tridimensionales interactivas.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full text-[9px] text-zinc-400">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            ALL_SYSTEMS_OPERATIONAL
          </div>
        </div>

        <div class="space-y-3">
          <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">// index_nodes</div>
          <ul class="space-y-2 text-[11px] text-zinc-500 uppercase">
            <li><NuxtLink to="/sobre-mi" class="hover:text-cyan-400 transition-colors">./sobre_mí</NuxtLink></li>
            <li><NuxtLink to="/conceptos" class="hover:text-purple-400 transition-colors">./conceptos</NuxtLink></li>
            <li><NuxtLink to="/contacto" class="hover:text-cyan-400 transition-colors">./contacto</NuxtLink></li>
          </ul>
        </div>

        <div class="space-y-3">
          <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">// external_uplinks</div>
          <ul class="space-y-2 text-[11px] text-zinc-500 uppercase">
            <li><a href="https://github.com" target="_blank" rel="noopener" class="hover:text-white transition-colors flex items-center gap-1">GitHub <span class="text-[9px] text-zinc-700">↗</span></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-white transition-colors flex items-center gap-1">LinkedIn <span class="text-[9px] text-zinc-700">↗</span></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener" class="hover:text-white transition-colors flex items-center gap-1">X_Twitter <span class="text-[9px] text-zinc-700">↗</span></a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-6xl mx-auto border-t border-zinc-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-zinc-600 tracking-widest uppercase">
        <div>codifiko_network // core_node_grx_2026</div>
        <div>[ secure_access_granted // © {{ currentYear }} ]</div>
      </div>
    </footer>

    <transition name="fade-scale">
      <button 
        v-if="showScrollButton" 
        @click="scrollToTop" 
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-cyan-400 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 group pointer-events-auto flex items-center justify-center shadow-2xl"
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const showScrollButton = ref(false)
const currentYear = new Date().getFullYear()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Forzado por JS por si acaso
  })
}

// Sensor de posición de scroll
const checkScroll = () => {
  // Muestra el botón solo cuando el usuario baja más de 400 píxeles
  showScrollButton.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style>
/* TRANSICIÓN DE PÁGINAS GENERAL (SMOOTH TRANSITIONS) */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Animaciones del menú móvil */
.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity 0.3s ease;
}
.menu-fade-enter-from, .menu-fade-leave-to {
  opacity: 0;
}

/* Animación de aparición de la flecha de subida */
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(10px);
}

/* Estilos de links del header */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: linear-gradient(to right, #22d3ee, #a855f7);
  transition: width 0.3s ease, left 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
  left: 0;
}
.active-nav-link {
  text-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
}
.btn-nav-contact:hover .btn-bg-slide {
  transform: translateX(0);
}
</style>