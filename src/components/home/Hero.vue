<template>
  <section 
    ref="heroContainer"
    class="relative h-screen w-full bg-[#080809] overflow-hidden flex items-center"
  >
    <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

    <div class="relative z-20 w-full lg:w-[60%] px-8 md:px-20 space-y-10">
      
      <div class="space-y-6">
        <div class="inline-flex items-center gap-3 px-3 py-1 border border-cyan-500/30 bg-cyan-950/10 rounded-full">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span class="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase">
            system_status: extremist_visuals
          </span>
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
          DESIGNED <br />
          <span class="reveal-text">TO DOMINATE.</span>
        </h1>

        <p class="max-w-lg text-sm md:text-base font-mono text-zinc-500 leading-relaxed">
          // No construimos sitios web convencionales. <br />
          // Desarrollamos artefactos digitales con ingeniería de vanguardia <br />
          // y una estética que impone autoridad absoluta.
        </p>
      </div>

      <div class="flex flex-wrap gap-6 pt-4">
        <NuxtLink to="/contacto" class="btn-primary">
          ./INICIAR_PROYECTO_
        </NuxtLink>
        <NuxtLink to="/conceptos" class="btn-secondary">
          [ EXPLORAR_NODOS ]
        </NuxtLink>
      </div>

      <div class="pt-12 grid grid-cols-3 gap-8 border-t border-zinc-900 w-fit">
        <div v-for="stat in ['CPU: 99%', 'FPS: 60', 'LAT: 12ms']" :key="stat" class="text-[9px] font-mono text-zinc-700 tracking-widest">
          {{ stat }}
        </div>
      </div>
    </div>

    <div class="absolute right-0 top-0 h-full w-full lg:w-[50%] z-10 select-none pointer-events-none">
      
      <div class="absolute inset-0 z-30 bg-gradient-to-r from-[#080809] via-[#080809]/40 to-transparent"></div>

      <div class="glitch-container h-full w-full relative">
        <div class="glitch-base h-full w-full"></div>
        
        <div class="glitch-layer layer-1 h-full w-full"></div>
        <div class="glitch-layer layer-2 h-full w-full"></div>
        <div class="glitch-layer layer-3 h-full w-full"></div>

        <div class="absolute inset-0 bg-noise opacity-[0.03] z-40"></div>
        <div class="absolute inset-0 bg-scanlines opacity-20 z-40"></div>
      </div>

      <div class="absolute bottom-20 right-10 z-40 font-mono text-[10px] text-cyan-500/30 rotate-90 origin-right tracking-[0.5em]">
        ENCRYPTION_ACTIVE // 0XF293AS
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 1. BOTONES CUSTOM */
.btn-primary {
  @apply px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 relative overflow-hidden;
  box-shadow: 0 0 0px rgba(34, 211, 238, 0);
}
.btn-primary:hover {
  @apply bg-cyan-500;
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.4);
}
.btn-secondary {
  @apply px-10 py-4 border border-zinc-800 text-zinc-500 font-bold text-xs uppercase tracking-widest transition-all duration-300;
}
.btn-secondary:hover {
  @apply border-zinc-500 text-white;
}

/* 2. ANIMACIÓN REVEAL TEXT */
.reveal-text {
  @apply text-transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

@keyframes reveal {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

/* 3. MOTOR DE DISTORSIÓN DE IMAGEN (PARTE DERECHA) */
.glitch-base, .glitch-layer {
  background-image: url('~/assets/img/hero-avatar.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.glitch-base {
  filter: grayscale(1) brightness(0.6) contrast(1.2);
}

.glitch-layer {
  opacity: 0;
}

/* Capa 1: Desplazamiento RGB azul */
.layer-1 {
  animation: glitch-anim-1 4s infinite linear alternate-reverse;
  filter: hue-rotate(90deg) brightness(1.5);
  mix-blend-mode: screen;
}

/* Capa 2: Desplazamiento RGB rojo + Distorsión horizontal */
.layer-2 {
  animation: glitch-anim-2 3.5s infinite linear alternate-reverse;
  filter: hue-rotate(250deg) brightness(1.2);
  mix-blend-mode: color-dodge;
}

/* Capa 3: Flash de ruido blanco intermitente */
.layer-3 {
  animation: glitch-anim-3 5s infinite step-end;
  background: white;
  mix-blend-mode: overlay;
}

/* ANIMACIONES DE DISTORSIÓN AGRESIVA */
@keyframes glitch-anim-1 {
  0% { opacity: 0.2; clip-path: inset(10% 0 30% 0); transform: translateX(-5px); }
  10% { opacity: 0.4; clip-path: inset(40% 0 45% 0); transform: translateX(5px); }
  20% { opacity: 0; clip-path: inset(0 0 0 0); }
  100% { opacity: 0; }
}

@keyframes glitch-anim-2 {
  0% { opacity: 0; }
  15% { opacity: 0.3; clip-path: inset(70% 0 5% 0); transform: translateX(10px); }
  20% { opacity: 0.5; clip-path: inset(20% 0 80% 0); transform: translateX(-10px); }
  25% { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes glitch-anim-3 {
  0%, 100% { opacity: 0; }
  18% { opacity: 0.1; }
  19% { opacity: 0; }
  45% { opacity: 0.05; }
  46% { opacity: 0; }
}

/* OVERLAYS TÉCNICOS */
.bg-scanlines {
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%);
  background-size: 100% 4px;
}
.bg-noise {
  background-image: url('https://media.giphy.com/media/oEI9uWUznW3D2/giphy.gif'); /* Ruido estático opcional */
}
</style>