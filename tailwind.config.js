/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(99,102,241,0.16), transparent 45%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', ['.light &']);
    }),
  ],
};
