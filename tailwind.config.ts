import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fermah: "#1CCB9F",
        dark: "#000A12",
      },
    },
  },
  plugins: [],
};
export default config;
