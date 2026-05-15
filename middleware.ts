import createMiddleware from 'next-intl/middleware'

import { routing } from './src/shared/config/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
