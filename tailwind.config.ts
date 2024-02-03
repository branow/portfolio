import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-midnight':'rgba(0, 0, 0, 0.75)',
        'light-gray':'rgba(0, 0, 0, 0.05)',
        'subtle-shadow':'rgba(0, 0, 0, 0.1)',
        'soft-dimness':'rgba(0, 0, 0, 0.2)',

        'lemon-mist':'rgba(255, 255, 15, 0.1)',
        'olive-yellow':'rgba(219, 217, 85, 1)',
        'soft-sunlight':'rgba(242, 240, 132, 1)',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  dayisyui: {
    themes: ["winter"],
  },
};
export default config;
