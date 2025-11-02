/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1222",
          light: "#1A2C50",
          soft: "#16254B"
        },
        gold: {
          DEFAULT: "#F4C762",
          soft: "#EEB94A"
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 10px 30px rgba(244,199,98,.35)"
      }
    }
  },
  plugins: []
};
