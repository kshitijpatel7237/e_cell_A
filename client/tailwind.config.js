function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				custom: {
					primary: withOpacity("--color-text-base"),
					secondary: withOpacity("--color-text-muted"),
					accent: withOpacity("--color-text-inverted"),
				},
			}, //usage: text-custom-primary  or text-custom-accent
			backgroundColor: {
				custom: {
					primary: withOpacity("--color-fill"),
					"button-accent": withOpacity("--color-button-accent"),
					"button-accent-hover": withOpacity(
						"--color-button-accent-hover"
					),
					"button-muted": withOpacity("--color-button-muted"),
				},
			}, //usage: bg-custom-primary or bg-custom-butto-accent
			gradientColorStops: {
				custom: {
					hue: withOpacity("--color-fill"),
				},
			}, //usage: you can use the name in gradient's to via and from classes

			//fonts customzation: do it youself 😉 https://www.youtube.com/watch?v=sOnBG2wUm1s
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
