/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-cyan': '#00d9ff',
        'accent-pink': '#ff006e',
        'accent-purple': '#b537f2',
      },
    },
  },
  plugins: [],
}
