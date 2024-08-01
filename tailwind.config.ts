// /** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

export const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "body-background": "url('./src/assets/wave.jpg')",
    },
    extend: {
      colors: {},
      container: {
        center: false,
      },
    },
  },
  plugins: [],
};

export default config;
