export const designTokens = {
  colors: {
    bg: {
      DEFAULT: '#14091a',
      deep: '#0c090e',
      elevated: '#1a0822',
      surface: '#210031',
      muted: '#2a043d',
    },
    accent: {
      DEFAULT: '#fee97d',
      foreground: '#14091a',
    },
    brand: {
      orange: '#dc8400',
      purple: '#9500dc',
      main: '#9e13e0',
      mid: '#560080',
      deep: '#220032',
      bright: '#a30ee9',
      dark: '#8a00cc',
    },
    text: {
      DEFAULT: '#ffffff',
      muted: 'rgba(255, 255, 255, 0.65)',
      subtle: 'rgba(255, 255, 255, 0.4)',
    },
  },
  gradients: {
    brand: '#dc8400 0%, #560080 56%, #220032 100%',
    brandPurple: '#9500dc 0%, #560080 56%, #220032 100%',
    info: '#a30ee9 0%, #8a00cc 100%',
    overlay: '180deg, rgba(20, 9, 26, 0) 0%, rgba(20, 9, 26, 0.92) 100%',
  },
  fontSize: {
    body: '20px',
    button: '23px',
    lead: '24px',
  },
  lineHeight: {
    body: '24px',
  },
  container: {
    maxWidth: '1280px',
  },
} as const
