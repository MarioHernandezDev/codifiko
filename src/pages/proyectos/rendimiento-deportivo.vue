<script setup>
usePageSeo({
  title: 'Rendimiento deportivo y clima — Proyectos',
  description: 'Demo interactiva: simulación de un pipeline ETL que cruza entrenamientos de deportistas con datos meteorológicos en directo, con gráficos en vivo.',
})
</script>

<template>
  <PageHero eyebrow="Proyecto · Machine Learning">
    <template #title>
      <span class="reveal" style="--reveal-delay: .12s"><span>¿El clima</span></span>
      <span class="reveal" style="--reveal-delay: .2s"><span>afecta al <i>esfuerzo</i>?</span></span>
    </template>
    <template #text>Simulación interactiva del pipeline ETL "Rendimiento deportivo + condiciones ambientales".</template>
  </PageHero>

  <ProyectosRendimientoDeportivo />

  <HomeCta />
</template>
