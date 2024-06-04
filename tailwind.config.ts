import type { Config } from 'tailwindcss';
import tailwindTypo from "@tailwindcss/typography";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    colors: {
      'primary': '#e2e8f0',
    }
	},

	plugins: [tailwindTypo]
} as Config;
