import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F1F0F3", // Color personalizado principal
        secondary: "#FBFAFD", // Color personalizado secundario
        accent: "#32CD32", // Otro color personalizado
        corporate: "#0401de",
      },
    },
  },
  plugins: [],
} satisfies Config;
