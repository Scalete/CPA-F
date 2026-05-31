import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-main)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['var(--text-body)', { lineHeight: 'var(--leading-body)' }],
        button: ['var(--text-button)', { lineHeight: '1.2' }],
        lead: ['var(--text-lead)', { lineHeight: '1.25' }],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          deep: 'var(--color-bg-deep)',
          elevated: 'var(--color-bg-elevated)',
          surface: 'var(--color-bg-surface)',
          muted: 'var(--color-bg-muted)',
          overlay: 'var(--color-bg-overlay)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        brand: {
          orange: 'var(--color-brand-orange)',
          purple: 'var(--color-brand-purple)',
          main: 'var(--color-brand-main)',
          mid: 'var(--color-brand-mid)',
          deep: 'var(--color-brand-deep)',
          bright: 'var(--color-brand-bright)',
          dark: 'var(--color-brand-dark)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-subtle)',
        },
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-brand-purple': 'var(--gradient-brand-purple)',
        'gradient-brand-h': 'var(--gradient-brand-horizontal)',
        'gradient-info': 'var(--gradient-info)',
        'gradient-overlay': 'var(--gradient-overlay)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: '9999px',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      screens: {
        xs: '375px',
        hero: '1000px',
      },
      minHeight: {
        screen: 'max(100dvh, var(--screen-min-height))',
      },
    },
  },
  plugins: [],
}

export default config
