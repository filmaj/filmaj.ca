export default function Header({ html, state }) {
  const { attrs } = state;
  return html`
<style>
:host {
  flex-basis: var(--sidebar-threshold);
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

:host > * {
  padding-inline: var(--space-xs);
}

header {
  flex-grow: 1;
}

header h1, header nav a {
  white-space: nowrap;
  text-wrap: nowrap;
}

header nav {
  margin-top: 0.25em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-xs);
}

header nav > * {
  flex-grow: 1;
  flex-basis: calc((var(--sidebar-threshold) - 100%) * 999);
}
</style>
<header>
  <h1>
    <a href="/">Fil Maj</a>
  </h1>
  <nav>
    <a href="/resume"><span class="material-symbols-outlined">rowing</span>Resume</a>
    <a href="/talks"><span class="material-symbols-outlined">record_voice_over</span>Talks</a>
    <a href="/reads"><span class="material-symbols-outlined">local_library</span>Reads</a>
    <a href="/contact"><span class="material-symbols-outlined">contact_mail</span>Contact</a>
  </nav>
</header>
<a href="/">
  <img id="avatar" src="/_public/img/me/fil.svg" alt="Fil Maj's cartoon avatar" />
</a>
<script>
const avatars = ['', '-irritated', '-simplesmile'];
const avatar = document.querySelector('fm-header img#avatar');
setInterval(() => {
  avatar.src = '/_public/img/me/fil' + avatars[Math.floor(Math.random() * avatars.length)] + '.svg';
}, 3000);
</script>
  `;
}
