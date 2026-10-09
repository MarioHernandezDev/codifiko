<template>
  <section class="legal section">
    <div class="container legal__inner">
      <p class="section__eyebrow">Legal</p>
      <h1 class="section__title">Privacy policy</h1>

      <div class="legal__body">
        <p>
          This site is a personal portfolio with no forms, accounts, or logins — it doesn't collect,
          store, or process any personal data on its own.
        </p>

        <h2>What this site doesn't do</h2>
        <p>No contact forms or data collection, no analytics or tracking scripts, and no cookies used to track or identify you.</p>

        <h2>External resources</h2>
        <p>
          To render fonts and technology icons, this site loads a small number of files from third-party
          services (Google Fonts, Simple Icons, Devicon) via their own CDNs. Loading these files means
          your browser contacts those services directly, which may process your IP address as part of a
          standard web request — the same as visiting any other site that uses them. Their own privacy
          policies apply to that part.
        </p>

        <h2>Getting in touch</h2>
        <p>
          Any information you choose to share with me directly — by email, phone, or LinkedIn — is used
          only to respond to you, and I won't share it with anyone else.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any question about this, email
          <a href="mailto:marioherpad.01@gmail.com">marioherpad.01@gmail.com</a>.
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
