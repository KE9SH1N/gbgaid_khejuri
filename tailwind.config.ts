import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "360px",
			// @media (min-width: 360px)
			sm: "425px",
			// @media (min-width: 425px)
			md: "768px",
			// @media (min-width: 768px)
			lg: "1024px",
			// @media (min-width: 1024px)
			xl: "1440px",
			// @media (min-width: 1440px)
		},
		extend: {
			colors: {
				khejuriPrimaryColor: "#0D4C3B",
				khejuriPrimaryColorLight: "#FEF3E9",
				khejuriActiveColor: "#00B500",
				khejuriSecondaryActiveColor: "#32B840",
				khejuriInactiveColor: "#FF2622",
				khejuriInactiveColorLight: "#EB2B2B",
				khejuriCustomScrollThumbColor: "#f68821ab",
			},
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
				anekBangla: ["Anek Bangla", ...defaultTheme.fontFamily.sans],
			},
			willChange: {
				transform: "transform",
			},
			transitionDuration: {
				"1500": "1500ms",
				"2000": "2000ms",
				"3000": "3000ms",
			},
			blur: {
				xs: "2px",
			},
		},
	},
	plugins: [],
};
export default config;
