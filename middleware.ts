import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './src/shared/config/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const reqHeaders = new Headers(req.headers)
  reqHeaders.set('x-pathname', req.nextUrl.pathname)

  return intlMiddleware(new NextRequest(req.url, { headers: reqHeaders }))
}

export const config = {
  matcher: ['/', '/(ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
