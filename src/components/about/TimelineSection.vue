<template>
  <div class="zone-timeline w-full left-0 right-0">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-32 md:py-52">
      <section id="section4">
        <div class="mb-14 md:mb-20 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
            04 / Trayectoria
          </h2>
          <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">EXECUTION_LOG_HISTORY</span>
        </div>

        <Timeline :timeline="timeline" />
      </section>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
      <section class="mb-20 border-t border-zinc-900 pt-24 text-center space-y-8 relative overflow-hidden">
        <div class="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <img src="~/assets/img/profile-cyborg-mesh.webp" alt="" class="w-[500px] h-[500px] object-cover opacity-[0.05] blur-2xl grayscale" />
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
          <NuxtLink to="/contacto" class="inline-flex items-center gap-3 bg-white text-black font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5">
            <span>Establecer Conexión</span>
            <span class="text-sm font-sans font-black">→</span>
          </NuxtLink>
          <NuxtLink to="/laboratorio" class="inline-flex items-center gap-3 border border-zinc-800 text-zinc-400 font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl hover:border-zinc-600 hover:text-white transition-all duration-300">
            [ Explorar Laboratorio ]
          </NuxtLink>
        </div>
        
        <div class="pt-12 flex justify-center gap-6 font-mono text-[9px] text-zinc-700 tracking-widest">
          <span>CPU: 99%</span><span class="text-zinc-900">|</span>
          <span>FPS: 60</span><span class="text-zinc-900">|</span>
          <span>LAT: 12ms</span><span class="text-zinc-900">|</span>
          <span>STATUS: OPERATIONAL</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Timeline from '~/components/Timeline.vue'

const timeline = [
  { date: '2026 — Presente', role: 'Desarrollador Freelance & Codifiko', company: 'Laboratorio Táctico Personal // Granada, ES', description: 'Diseño y construcción de ecosistemas digitales de alto impacto para clientes y proyectos propios. Investigación aplicada en interfaces 3D, agentes IA y arquitectura de software moderna.', active: true },
  { date: '2025 — 2026', role: 'Desarrollador Frontend', company: 'NTT DATA // Remoto', description: 'Desarrollo de aplicaciones corporativas de alto tráfico con Vue 3 y Nuxt. Integración con APIs REST y GraphQL, despliegues en entornos cloud críticos y metodologías Scrum en equipos distribuidos.', active: false },
  { date: '2024 — 2025', role: 'Prácticas de Desarrollo Web', company: 'NTT DATA // Granada, ES', description: 'Primer contacto real con producción. Mantenimiento y evolución de módulos frontend, optimización de rendimiento y onboarding técnico acelerado en stack empresarial.', active: false },
  { date: '2022 — 2024', role: 'CFGS — Desarrollo de Aplicaciones Web', company: 'IES Zaidín Vergeles // Granada, ES', description: 'Formación técnica superior en desarrollo fullstack: HTML, CSS, JavaScript, Java, PHP, bases de datos relacionales y primeros proyectos de portfolio con frameworks modernos.', active: false }
]
</script>

<style scoped>
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