<template>
  <main class="min-h-screen bg-[#080809] text-zinc-100 relative overflow-hidden font-sans antialiased">
    
    <div class="absolute inset-0 bg-grid-dots pointer-events-none z-0"></div>

    <div class="relative z-10 space-y-24 md:space-y-40 pb-24">
      
      <Hero />
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-40">
        
        <Services />
        
        <LaboratoryBanner />
        
      </div>
      
    </div>
  </main>
</template>

<script setup>
import Hero from '~/components/home/Hero.vue'
import Services from '~/components/Services.vue'
import LaboratoryBanner from '~/components/home/LaboratoryBanner.vue'
</script>