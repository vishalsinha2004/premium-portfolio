/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0C10',
        charcoal: '#1F2833',
        cyanAccent: '#66FCF1',
        mutedTeal: '#45A29E',
      },
      minHeight: {
        'dvh': '100dvh', // Ensures perfect mobile viewport scaling
      }
    },
  },
  plugins: [],
}