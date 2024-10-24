/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#FF6B6B',
		  secondary: '#4ECDC4',
		  accent: '#FFE66D',
		},
		fontFamily: {
		  sans: ['Poppins', 'sans-serif'],
		  display: ['Playfair Display', 'serif'],
		}
	  },
	},
	plugins: [],
  }