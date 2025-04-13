/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        muted: "#9ca3af",
        background: "#0c0c0c",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      fontFamily: {
        sf: ["SF Pro Text", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
