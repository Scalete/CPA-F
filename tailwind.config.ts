import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-main)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)',
          dark:    'var(--color-brand-dark)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          overlay: 'var(--color-bg-overlay)',
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}

export default config
