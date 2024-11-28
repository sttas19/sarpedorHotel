import {
  Playfair,
  Playfair_Display,
  Manrope,
  Cormorant,
} from "next/font/google";

const playfair = Playfair({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
  variable: "--font-playfair-display",
});

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["500", "400"],
  variable: "--font-manrope",
});

const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300"],
  variable: "--font-cormorant",
});

const fontsClassName = [
  playfair.variable,
  playfair_display.variable,
  manrope.variable,
  cormorant.variable,
].join(" ");

export { fontsClassName };
