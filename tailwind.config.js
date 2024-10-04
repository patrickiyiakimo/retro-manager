const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        mont: [".montserrat-alternates", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
