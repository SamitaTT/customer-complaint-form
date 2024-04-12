/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        circles: "url('/overlapping-circles.svg')",
      },
    },
  },
  plugins: [],
};
