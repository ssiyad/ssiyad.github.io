/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['WorkSans', 'sans-serif'],
      mono: ['JetBrainsMono', 'monospace'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
