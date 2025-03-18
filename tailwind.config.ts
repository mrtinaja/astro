import { Config } from "./node_modules/tailwindcss";

const config: Config = {
  content: ["./src/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;