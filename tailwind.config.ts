import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./src/app/**/*.{ts,tsx}",
      "./src/components/**/*.{ts,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        number: ["var(--font-number)", "sans-serif"],
      },
    },
  },
};

export default config;
