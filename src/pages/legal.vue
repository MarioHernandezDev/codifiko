<template>
  <section class="legal section">
    <div class="container legal__inner">
      <p class="section__eyebrow">Legal</p>
      <h1 class="section__title">Legal notice</h1>

      <div class="legal__body">
        <p>
          This website, <strong>codifiko.vercel.app</strong>, is a personal, non-commercial portfolio
          owned and maintained by <strong>Mario Hernández Padial</strong>, an individual based in Spain.
          It doesn't sell anything, process payments, or operate as a registered business.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:marioherpad.01@gmail.com">marioherpad.01@gmail.com</a>
        </p>

        <h2>Purpose</h2>
        <p>This site exists to showcase personal and professional work, and to make it easy to get in touch.</p>

        <h2>Content &amp; intellectual property</h2>
        <p>
          All text, design, and code on this site are the author's own work unless otherwise noted.
          Technology logos and icons belong to their respective owners and are used only to indicate the
          tools this site's author works with.
        </p>

        <h2>Applicable law</h2>
        <p>
          This notice is governed by Spanish and EU law, including the LSSI-CE (Ley de Servicios de la
          Sociedad de la Información) where it applies to a personal website like this one.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legal__inner {
  max-width: 680px;
}

.legal__body {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.legal__body p {
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.legal__body a {
  color: var(--color-accent-dark);
}

.legal__body h2 {
  margin-top: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-text);
}
</style>
