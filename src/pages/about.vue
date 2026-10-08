<template>
  <section class="placeholder">
    <div class="container">
      <h1>About</h1>
      <p>Coming soon.</p>
    </div>
  </section>
</template>

<style scoped>
.placeholder {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

p {
  margin-top: 12px;
  color: var(--color-text-muted);
}
</style>
