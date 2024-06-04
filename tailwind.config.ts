import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    colors: {
      'primary': '#e2e8f0',
    }
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
