export default function Layout({ html, state }) {
  const { attrs } = state;
  return html`
<style>
  :root {
    --sidebar-threshold: 20rem;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }
  main {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 65%;
  }
  article {
    max-width: 60ch;
    margin-inline: auto;
  }
  /* scale material icons */
  .material-symbols-outlined {
    font-size: inherit !important;
    letter-spacing: inherit !important;
    line-height: inherit !important;
    position: relative;
    top: 0.15em;
    margin-right: 0.2em;
  }
</style>
<div>
  <fm-header></fm-header>
  <main>
    <article class="flow">
      <slot></slot>
    </article>
  </main>
</div>
  `;
}
