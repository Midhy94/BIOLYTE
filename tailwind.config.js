/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biolyte: {
          primary: '#D12B81',
          primaryHover: '#B51E6D',
          primaryLight: '#FDF2F8',
          accent: '#D12B81',
          accentHover: '#B51E6D',
          navy: '#1e3157',
          dark: '#172747',
          darker: '#0d172a',
          ice: '#fdf4f8',
          muted: '#6b7b96',
          border: 'rgba(209, 43, 129, 0.15)',
        },
        dtre: {
          navy: '#1e3157',
          dark: '#172747',
          darker: '#0d172a',
          accent: '#D12B81',
          accentHover: '#B51E6D',
          accentLight: '#FDF2F8',
          ice: '#fdf4f8',
          light: '#f8fafc',
          muted: '#6b7b96',
          border: 'rgba(209, 43, 129, 0.15)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"futura-pt"', '"futura-pt-bold"', 'Futura', 'Verdana', 'Arial', 'sans-serif'],
        display: ['"futura-pt"', '"futura-pt-bold"', 'Futura', 'Verdana', 'Arial', 'sans-serif'],
        editorial: ['"futura-pt"', '"futura-pt-bold"', 'Futura', 'Verdana', 'Arial', 'sans-serif'],
        serif: ['"futura-pt"', '"futura-pt-bold"', 'Futura', 'Verdana', 'Arial', 'sans-serif'],
        futura: ['"futura-pt"', '"futura-pt-bold"', 'Futura', 'Verdana', 'Arial', 'sans-serif'],
        inter: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['"Poppins"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.15em',
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
