/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['JetBrainsMono', 'monospace'],
      sans: ['WorkSans', 'sans-serif'],
      serif: ['Domine', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
