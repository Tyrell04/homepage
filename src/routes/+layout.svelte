<script lang="ts">
	import { Theme } from 'carbon-components-svelte';
	import "carbon-components-svelte/css/all.css";
	import "../lib/styles/index.scss";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<Theme
	theme="g90"
	tokens={{
    "interactive-01": "var(--colorPrimary)",
    "hover-primary": "var(--colorSecondary)",
    "active-primary": "var(--colorAccent)",
  }}
>
	<Navbar />
	<main>
<slot />
	</main>

</Theme>

<style>
	:global(body) {
		font-family: 'IBM Plex Sans', sans-serif;
	}
  main {
      max-width: 1440px;
      margin: 0 auto;
      padding: 2rem;
  }
</style>