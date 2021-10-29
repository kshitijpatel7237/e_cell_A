const defaultTheme = require('tailwindcss/defaultTheme')

const plugin = require('tailwindcss/plugin')
function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

// eslint-disable-next-line no-undef
module.exports = {
	purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				custom: {
					primary: withOpacity("--color-primary"),
					secondary: withOpacity("--color-secondary"),
					accent: withOpacity("--color-accent"),
					muted: withOpacity("--color-muted"),
				},
			}, //usage: text-custom-primary  or text-custom-accent
			backgroundColor: {
				custom: {
					primary: withOpacity("--color-primary"),
					"button-accent": withOpacity("--color-accent"),
					"button-accent-hover": withOpacity(
						"--color-accent"
					),
					"button-muted": withOpacity("--color-muted"),
				},
			}, //usage: bg-custom-primary or bg-custom-butto-accent
			gradientColorStops: {
				custom: {
					hue: withOpacity("--color-fill"),
				},
			}, //usage: you can use the name in gradient's to via and from classes
			fontFamily: {
				sans: ["'Poppins'", ...defaultTheme.fontFamily.sans]
			}
			//fonts customzation: do it youself 😉 https://www.youtube.com/watch?v=sOnBG2wUm1s
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
		},
	},
	plugins: [
		plugin(function({ addUtilities }) {
		const newUtilities = {
		/* Hide scrollbar for Chrome, Safari and Opera */
		'.no-scrollbar::-webkit-scrollbar': {
			'display': 'none',
			'scroll-behavior': 'smooth',
		},

		/* Hide scrollbar for IE, Edge and Firefox */
		'.no-scrollbar': {
			'-ms-overflow-style': 'none',  /* IE and Edge */
			'scrollbar-width': 'none',  /* Firefox */
			'scroll-behavior': 'smooth',
		},
		}

		addUtilities(newUtilities, ['responsive', 'hover'])
	  })
	],
}