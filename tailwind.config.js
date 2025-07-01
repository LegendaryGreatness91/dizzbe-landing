/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6A00",   // Vibrant orange
        secondary: "#006CFF", // Electric blue
        dark: "#0A0A0A",      // Charcoal
        light: "#F5F5F5",     // Soft background
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

