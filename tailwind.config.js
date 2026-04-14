/* eslint-disable no-undef */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "light-sweep": "lightSweep 7s ease-in-out infinite",
      },
      keyframes: {
        lightSweep: {
          "0%": { transform: "translateX(-120%) rotate(6deg)" },
          "50%": { transform: "translateX(200%) rotate(6deg)" },
          "100%": { transform: "translateX(200%) rotate(6deg)" },
        },
      },
    },
  },
  plugins: [],
}