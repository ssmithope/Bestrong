import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-merriweather)'],
        sans: ['var(--font-lato)'],
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: '#BC5A45',
        secondary: '#8A9A5B',
        background: '#F8F5F2',
        'text-main': '#3E3E3E',
        'ui-border': '#D4C5B0',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
