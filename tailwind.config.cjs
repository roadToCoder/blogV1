/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  itineraire: {
				'0%': {
					opacity: '0',
				  	transform: 'translateY(70px)',
					
				},
				'100%': {
					opacity: '1',
				 	transform: 'translateY(0px)',
					
				},
			  },
			  reconversion: {
				'0%': {
					opacity: '0',
				  	transform: 'translateY(20px)',
				},
				'100%': {
					opacity: '1',
				 	transform: 'translateY(0px)',
				},
			  },
			},
			animation: {		  
			  itineraire: 'itineraire 0.7s',
			  reconversion: 'reconversion 0.7s 0.1s',
			},
		},
		fontFamily: {
		'body': [
		'Montserrat', 
		'ui-sans-serif', 
		'system-ui', 
		'-apple-system', 
		'system-ui', 
		'Segoe UI', 
		'Roboto', 
		'Helvetica Neue', 
		'Arial', 
		'Noto Sans', 
		'sans-serif', 
		'Apple Color Emoji', 
		'Segoe UI Emoji', 
		'Segoe UI Symbol', 
		'Noto Color Emoji'
	],
		'sans': [
		'Montserrat', 
		'ui-sans-serif', 
		'system-ui', 
		'-apple-system', 
		'system-ui', 
		'Segoe UI', 
		'Roboto', 
		'Helvetica Neue', 
		'Arial', 
		'Noto Sans', 
		'sans-serif', 
		'Apple Color Emoji', 
		'Segoe UI Emoji', 
		'Segoe UI Symbol', 
		'Noto Color Emoji'
	]
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
