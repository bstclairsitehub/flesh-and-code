import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        matrix: '#00FF41',
        terminal: '#0D1117',
        signal: '#FF3B3B',
        static: '#B0B0B0',
        chrome: '#D4D4D4',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
      boxShadow: {
        matrix: '0 0 20px rgba(0, 255, 65, 0.3)',
        'matrix-sm': '0 0 10px rgba(0, 255, 65, 0.2)',
      },
      textShadow: {
        matrix: '0 0 10px rgba(0, 255, 65, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
