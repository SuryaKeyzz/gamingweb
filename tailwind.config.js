/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        good: "url('/img/latar1.jpg')",
        evil: "url('/img/background2.jpg')",
      },
      colors: {
        primary: "#2C7873",
        dark: "#0f172a",
        tosca: "#5b247a",
        blues: "#1bcedf",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
