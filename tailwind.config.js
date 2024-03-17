/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neumorphism: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};