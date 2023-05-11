/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  flipVertical: {
				'50%': { transform: 'rotateX(180deg)' },
			  },
			  itineraire: {
				'0%': {
					opacity: '0',
				  	transform: 'translateY(-12px)',
				},
				'100%': {
					opacity: '1',
				 	transform: 'translateY(0px)',
				},
			  },
			  reconversion: {
				'0%': {
					opacity: '0',
				  	transform: 'translateY(-12px)',
				},
				'100%': {
					opacity: '1',
				 	transform: 'translateY(0px)',
				},
			  },
			},
			animation: {		  
			  itineraire: 'itineraire 0.7s',
			  reconversion: 'reconversion 0.9s',
			},
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
