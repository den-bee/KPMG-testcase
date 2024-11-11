/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1930px",
      },
      backgroundImage: {
        header: "url('images/sustainability/SPT-banner-2000x500px-278.jpg')",
      },
      colors: {
        "kpmg-blue": "#00338D",
        cobalt: "#1E49E2",
        white: "#FFFFFF",
        "dark-blue": "#0C233C",
        "light-blue": "#ACEAFF",
        "pacific-blue": "#00B8F5",
        purple: "#7213EA",
        pink: "#FD349C",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        "open-sans-condensed": ["Open Sans Condensed", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: "0", transform: "translateY(30px)"},
          "100%": {opacity: "1", transform: "translateY(0)"},
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-delay": "fadeIn 1s ease-out forwards 0.1s",
      },
    },
  },
  plugins: [
    function ({addBase, theme}) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.sans"),
          color: theme("colors.kpmg-blue"),
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: theme("fontFamily.open-sans-condensed"),
        },
      });
    },
  ],
};
