/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8445A',
          hover: '#D63550',
          light: '#FFF0F2',
          mid: '#FFD6DB',
        },
        brand: {
          dark: '#1A1A2E',
          mid: '#4A4A6A',
          muted: '#8888A8',
          border: '#EEEEF5',
          surface: '#F8F8FC',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl2': '24px',
        'xl3': '32px',
        'xl4': '40px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(26,26,46,0.06)',
        'hover': '0 8px 32px rgba(232,68,90,0.12)',
        'upload': '0 4px 24px rgba(26,26,46,0.08)',
        'button': '0 6px 20px rgba(232,68,90,0.3)',
      },
      animation: {
        'float': 'float-gentle 4s ease-in-out infinite',
        'float-delay': 'float-gentle 4s ease-in-out 1.5s infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(232,68,90,0.3)' },
          '70%': { boxShadow: '0 0 0 12px rgba(232,68,90,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(232,68,90,0)' },
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};