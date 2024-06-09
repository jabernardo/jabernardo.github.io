import type { Config } from 'tailwindcss';
import tailwindTypo from "@tailwindcss/typography";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    colors: {
      'background': '#dddbd8',
      'primary': '#caffcd',
      'secondary': '#d75819',
      'text': '#242424',
      'highlight': '#349b54',
    }
	},

	plugins: [tailwindTypo]
} as Config;
