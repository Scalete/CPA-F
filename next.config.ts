import path from 'node:path'

import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/config/i18n.ts')

const nextConfig: NextConfig = {
  webpack(config, { dir }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(dir, 'src/app'),
      '@screens': path.resolve(dir, 'src/screens'),
      '@widgets': path.resolve(dir, 'src/widgets'),
      '@features': path.resolve(dir, 'src/features'),
      '@entities': path.resolve(dir, 'src/entities'),
      '@shared': path.resolve(dir, 'src/shared'),
    }
    return config
  },
}

export default withNextIntl(nextConfig)
