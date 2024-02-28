/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['JetBrainsMono', 'monospace'],
      sans: ['Geist', 'sans-serif'],
      serif: ['Domine', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
