import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD400",
          red: "#EF2F2F",
          blue: "#063B7A",
          sky: "#EAF6FF",
          green: "#27B86A",
          cream: "#FFFDF7"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(6, 59, 122, 0.16)"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.35rem"
      }
    }
  },
  plugins: []
};

export default config;
