<script setup>
const loading = ref(true)
</script>

<template>
  <div :class="{ 'is-loading': loading }">
    <ThePreloader @done="loading = false" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
