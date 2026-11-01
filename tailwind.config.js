/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27485D",
        accent: "#476D73",
        muted: "#767676",
        danger: "#B42318",
        panelStart: "#517879",
        panelEnd: "#1E3E57",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        form: "400px",
      },
    },
  },
  plugins: [],
};


