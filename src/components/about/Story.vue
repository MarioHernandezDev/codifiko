<template>
  <section class="story section">
    <div class="story__media" aria-hidden="true">
      <img src="/img/background-image.jpg" alt="" />
    </div>

    <div class="container story__inner">
      <div class="story__content">
        <p class="section__eyebrow">The short version</p>
        <h2 class="section__title">
          Three years of flowers, one year of <span class="story__title-accent">game controllers</span>,
          and a lot of code in between.
        </h2>

        <div class="story__body">
          <p>
            I started out as a web developer and designer — it's been my hobby turned profession for a
            while now. But before any of that, I spent three years working in a <mark>flower shop</mark>: one as a
            clerk, two as the store manager, running the place and a small team under daily pressure.
          </p>
          <p>
            In between, I spent a year as a store assistant at a video game shop — different pace,
            same idea: dealing with people, stock, and problems on the spot. Later came an internship
            at <mark>NTT DATA</mark> and a year of freelance projects for other companies, which is
            where the "developer" part really took shape.
          </p>
          <p>
            Right now I'm finishing a master's in <mark>Machine Learning, Data Management &amp; Training</mark>,
            aiming to move from building the web to understanding the data behind it — data science and AI
            are where I want to end up, even if code stays my favourite hobby either way.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  position: relative;
  overflow: hidden;
}

/* Panel diagonal con la foto — mismo patrón que Experience en el home,
   sin sticky, solo de fondo/cohesión visual detrás del texto. */
.story__media {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 42%;
  margin-right: calc(-50vw + 50%);
  overflow: hidden;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  pointer-events: none;
}

.story__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.story__inner {
  position: relative;
  z-index: 1;
}

.story__content {
  max-width: 620px;
}

.story__title-accent {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  color: var(--color-accent-dark);
}

.story__body {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.story__body p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.story__body strong {
  color: var(--color-text);
  font-weight: 700;
}

@media (max-width: 900px) {
  .story__media {
    display: none;
  }
}
</style>
