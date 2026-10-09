<template>
  <div class="app-shell">
    <NavBar />
    <main class="app-main">
      <slot />
    </main>
    <TheFooter />
    <CookieNotice />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}
</style>
