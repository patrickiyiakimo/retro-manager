const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        mont: [".montserrat-alternates", "sans-serif"],
      },
      backgroundImage: {
        'img_404': 'url("/public/images/img_404.jpeg")'
      }
    },
  },
  plugins: [flowbite.plugin()],
};
