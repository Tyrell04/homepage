import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { optimizeImports } from 'carbon-preprocess-svelte';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [
				vitePreprocess(),
				optimizeImports(),
			],
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@carbon/themes/scss/themes";'
			}
		},
}});