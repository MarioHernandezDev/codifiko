<script setup>
usePageSeo({
  title: 'About — Mario Hernández Padial',
  description: 'The story behind Mario Hernández Padial: a self-taught web developer based in Padul, Granada, now combining software development with a Machine Learning master\'s degree.',
})
</script>

<template>
  <PageHero eyebrow="About">
    <template #title>
      <span class="reveal" style="--reveal-delay: .12s"><span>Developer by trade,</span></span>
      <span class="reveal" style="--reveal-delay: .2s"><span>florist by <i>accident</i>.</span></span>
    </template>
    <template #text>22 years old, based in Spain — here's the longer version of how I got here.</template>
  </PageHero>

  <AboutStory />
  <AboutSkills />
  <AboutTimeline />
  <HomeCta />
</template>
