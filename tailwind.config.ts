import type { Config } from "tailwindcss";
import { safeColors } from "./app/styles/twEnums";

const safety = safeColors.flatMap((color) => [
  `from-${color}-950`,
  `to-${color}-900`,
]);

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: safety,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
