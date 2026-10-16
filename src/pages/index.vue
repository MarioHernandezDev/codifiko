<script setup>
usePageSeo({
  title: 'Mario Hernández Padial — Web Developer in Padul, Granada',
  description: 'Portfolio of Mario Hernández Padial, a web developer and designer based in Padul, Granada, Spain. Vue & Nuxt projects, freelance work, and a growing focus on Machine Learning.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mario Hernández Padial',
        url: 'https://codifiko.vercel.app',
        image: 'https://codifiko.vercel.app/img/profile.jpg',
        jobTitle: 'Web Developer',
        description: 'Web developer & designer based in Padul, Granada, Spain, with a growing focus on Machine Learning.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Padul',
          addressRegion: 'Granada',
          addressCountry: 'ES',
        },
        sameAs: [
          'https://www.linkedin.com/in/marioherpad/',
        ],
      }),
    },
  ],
})
</script>

<template> 
  <HomeHero />
  <HomeIntro />
  <HomeStack />
  <HomeExperience />
  <HomeCta />
</template>
