import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        space: "#0A0A0A",
        neonBlue: "#00F0FF",
        neonPurple: "#B026FF",
        glowBlue: "#4CACFF",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "particle": "particle 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-1000px) translateX(100px)" },
        },
      },
      backgroundImage: {
        "circuit": "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.96h-2.77zm22.628 0L53.8 8.829 52.385 10.243 41.8 0h3.17zm-16.97 0L36.8 8.829 35.385 10.243 24.8 0h3.17zm4.627 0L41.8 9.971 40.385 11.385 26.8 0h5.8zM16.686 0L0 16.686v-2.83L14.857 0h1.828zM5.373 0L0 5.373v-2.83L3.544 0h1.83zM54.627 0L60 5.373v-2.83L56.456 0h-1.83zM43.343 0L60 16.686v-2.83L45.143 0h-1.8zM32.06 0L60 27.94v-2.83L34.8 0h-2.74zm10.597 0L60 16.686v-2.83L45.143 0h-2.486zM49.8 0L60 10.2v-2.83L52.456 0h-2.656zm-40.2 0L0 10.2v-2.83L7.544 0h2.656zm24.857 0L0 34.857v-2.83L27.544 0h6.913zM60 36.956v-2.83L30.456 0h-2.83L60 36.956zM30.686 0L0 30.686v-2.83L28.456 0h2.23zm13.542 0L0 44.229v-2.83L41.8 0h2.428zM60 41.8v-2.83L44.456 0h-2.83L60 41.8zm-19.314 0L0 22.486v-2.83L38.456 0h2.23zM60 49.8v-2.83L51.456 0h-2.83L60 49.8zm-9.657 0L0 40.143v-2.83L48.456 0h1.887L60 49.8zm-19.314 0L0 30.486v-2.83L28.456 0h2.23L40.686 49.8zm9.657 0L0 40.143v-2.83L38.456 0h2.23L50.343 49.8zm18.627 0L0 50.343v-2.83L58.456 0h.887L68.97 49.8z\" fill=\"%2320232a\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;