import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#116D6E',
        'primary-80': '#408A8B',
        'primary-50': '#88B6B6',
        'primary-30': '#B7D3D3',
        'primary-10': '#E7F0F0',
        'light-secondary': '#F7F7F9',
        'black': '#09090B',
        'black-80': '#3A3A3B',
        'black-50': '#848485',
        'black-30': '#B5B5B5',
        'black-10': '#E6E6E6',
        'dark': '#1F1F1F',
        'dark-secondary': '#2D3333',
        'white-80': '#CCCCCC',
        'white-50': '#7F7F7F',
        'white-30': '#4C4C4C',
        'white-10': '#191919'
      }
    },
  },
  plugins: [],
}
export default config
