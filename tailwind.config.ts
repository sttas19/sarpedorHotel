import type { Config } from "tailwindcss";

const _padding: number = 1;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: `${_padding}rem`,
      screens: {
        "2xl": `calc(1128px + ${2 * _padding}rem)`,
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "hsl(225 12% 19%)",
        white: "hsl(0 0% 100%)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        playfairdisplay: ["var(--font-playfair-display)"],
        manrope: ["var(--font-manrope)"],
        cormorant: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
