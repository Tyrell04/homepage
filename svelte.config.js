import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { optimizeImports } from "carbon-preprocess-svelte";
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	preprocess: [
		mdsvex(),
		sveltePreprocess({
			typescript: true
		}),
		optimizeImports(),
	],
	extensions: ['.svelte', '.svx']
};

export default config;


