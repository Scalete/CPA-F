import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/config/i18n.ts')

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app':      require('path').resolve(__dirname, 'src/app'),
      '@pages':    require('path').resolve(__dirname, 'src/pages'),
      '@widgets':  require('path').resolve(__dirname, 'src/widgets'),
      '@features': require('path').resolve(__dirname, 'src/features'),
      '@entities': require('path').resolve(__dirname, 'src/entities'),
      '@shared':   require('path').resolve(__dirname, 'src/shared'),
    }
    return config
  }
}

export default withNextIntl(nextConfig)
