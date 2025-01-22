import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        white: '#fff',
        black: '#09090a',
        highlight: '#0088ff',
        brand: 'rgb(var(--brand-color) / <alpha-value>)',
        purple: {
          100: '#f6f2ff',
          200: '#e5dbff',
          300: '#c1abff',
          400: '#936bff',
          500: '#6436e2',
          600: '#4c29ab',
        },
        red: {
          100: '#fff2f4',
          200: '#ffdbdf',
          300: '#faafb7',
          400: '#fa7d8a',
          500: '#fa2e43',
          600: '#df072e',
        },
        violet: {
          100: '#fff2f9',
          200: '#ffdbed',
          300: '#ffa8d4',
          400: '#e3599e',
          500: '#c42173',
          600: '#911855',
        },
        blue: {
          100: '#f2f2ff',
          200: '#dbdbff',
          300: '#b8b8ff',
          400: '#8f8ff7',
          500: '#6060e9',
          600: '#4a4ab5',
        },
        green: {
          100: '#e8fae9',
          200: '#d4fad6',
          300: '#99f799',
          400: '#6ce06c',
          500: '#3bd23c',
          600: '#31b032',
        },
        orange: {
          100: '#fff8f2',
          200: '#ffe5cf',
          300: '#ffd6b3',
          400: '#ffb777',
          500: '#ffa352',
          600: '#e7832c',
        },
        neutral: {
          100: '#f7f8fa',
          200: '#d3d7e1',
          300: '#b9beca',
          400: '#9fa5b4',
          500: '#868c9e',
          600: '#6c7387',
          700: '#525a71',
          800: '#38415a',
          900: '#1e2844',
        },
        gray: {
          100: '#fafafa',
          200: '#f2f3f5',
          300: '#ebebeb',
          400: '#e0e0e0',
          500: '#c8c8c8',
          600: '#888',
          700: '#555',
          800: '#20222d',
          900: '#13151b',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [], //require('@tailwindcss/forms')
};
export default config;
