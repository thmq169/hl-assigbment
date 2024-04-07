/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#29b363",
        },
        secondary: {
          DEFAULT: "#2c7edb",
        },
      },
    },
  },
  plugins: [],
};
