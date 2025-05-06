/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        'gray': {
          900: '#0f1117',
          800: '#171923',
          700: '#2d3748',
          600: '#4a5568',
          500: '#718096',
          400: '#a0aec0',
          300: '#cbd5e0',
          200: '#e2e8f0',
          100: '#f7fafc',
        },
        'indigo': {
          900: '#3c366b',
          800: '#434190',
          700: '#4c51bf',
          600: '#5a67d8',
          500: '#667eea',
          400: '#7f9cf5',
          300: '#a3bffa',
          200: '#c3dafe',
          100: '#ebf4ff',
        },
        'purple': {
          900: '#44337a',
          800: '#553c9a',
          700: '#6b46c1',
          600: '#805ad5',
          500: '#9f7aea',
          400: '#b794f4',
          300: '#d6bcfa',
          200: '#e9d8fd',
          100: '#faf5ff',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(102, 126, 234, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};