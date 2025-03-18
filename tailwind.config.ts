import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los archivos en la carpeta src con las extensiones js, ts, jsx, tsx
    "./public/index.html", // Si tienes archivos HTML fuera de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
