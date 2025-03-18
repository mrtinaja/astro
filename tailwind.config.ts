import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que Tailwind busque todos los archivos correctos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
