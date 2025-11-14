// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... your existing config
  theme: {
    extend: {
      // ... your existing extend
      keyframes: {
        'gradient-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
      },
    },
  },
  plugins: [],
}