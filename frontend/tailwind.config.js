/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'netflix': ['"Netflix Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        green: {
          400: '#10B981',
          500: '#059669',
          600: '#047857',
          700: '#065F46',
        }
      }
    },
  },
  plugins: [],
}
