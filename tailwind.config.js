/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E9E1D8',
          300: '#D8CDC1',
        },
        ink: {
          900: '#0F1412',
          800: '#19201C',
          700: '#27322D',
          600: '#43514A',
        },
        emerald: {
          950: '#042F24',
          900: '#064E3B',
          800: '#08634B',
          700: '#0D7B5E',
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
        },
        accent: {
          gold: '#D97706',
          coral: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'sharp': '4px 4px 0px 0px #0F1412',
        'sharp-lg': '8px 8px 0px 0px #0F1412',
        'sharp-emerald': '4px 4px 0px 0px #064E3B',
      }
    },
  },
  plugins: [],
};
