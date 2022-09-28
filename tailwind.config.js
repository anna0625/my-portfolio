/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand"],
      },
      spacing: {
        screen: "90vw",
      },
    },
  },
  plugins: [require("daisyui")],
};
