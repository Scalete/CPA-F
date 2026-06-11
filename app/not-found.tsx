import { headers } from 'next/headers'

import { IntlProvider } from '@app/providers'

import { NotFoundScreen } from '@screens/not-found'

import { routing } from '@shared/config/routing'


export default async function NotFound() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? '/'

  const locale =
    routing.locales.find(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ??
    routing.defaultLocale

  const messages = (await import(`../messages/${locale}.json`)).default

  return (
    <IntlProvider locale={locale} messages={messages}>
      <NotFoundScreen />
    </IntlProvider>
  )
}
