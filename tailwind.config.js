/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    // themes: ["night"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand"],
      },
    },
  },
  plugins: [require("daisyui"), require("aos")],
};
