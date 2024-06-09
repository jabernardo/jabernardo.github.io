import type { Config } from 'tailwindcss';
import tailwindTypo from "@tailwindcss/typography";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    screens: {
      'xsm': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
