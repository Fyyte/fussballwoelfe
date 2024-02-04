// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// allows vite access to ./posts
	server: {
		fs: {
			allow: ['./']
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			regions: ['arn1']
		})
	}
};

export default config;
