<template>
  <div class="w-full relative select-none overflow-x-hidden">

    <div class="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[160px] pointer-events-none -z-0"></div>
    <div class="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[160px] pointer-events-none -z-0"></div>

    <SectionNav />

    <MiniHero
      sysRef="IDENTITY_DOSSIER // node_grx_2026"
      titleFirst="SOBRE MÍ"
    >
      <p class="text-zinc-400 font-sans text-sm md:text-base leading-relaxed normal-case tracking-normal max-w-xl mx-auto border-t border-zinc-900/60 pt-4 px-4">
        Desarrollador de Aplicaciones Web demasiado motivado con sus proyectos (Flipao de manual)
      </p>
    </MiniHero>

    <main class="relative z-10 space-y-20 md:space-y-0">
      <AboutProfileSection />
      <AboutQuoteSection />
      <AboutArsenalSection />
      <AboutModusSection />
      <AboutWorkspaceSection />
      <AboutProjectsSection />
      <AboutTimelineSection />
    </main>

  </div>
</template>

<script setup>
import SectionNav from '~/components/SectionNav.vue'

useHead({
  title: 'Sobre Mí — Codifiko',
  meta: [
    { name: 'description', content: 'Perfil de sistema de Mario Hernández. Ingeniero de software fullstack y diseñador de interfaces tácticas.' }
  ]
})
</script>