/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#1090CB", // Primary color
          light: "#34befe", // Lighter shade
          dark: "#0c5f8a", // Darker shade
        },
      },
    },
  },
  plugins: [],
};
