import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { IntlProvider } from '@app/providers'
import { locales } from '@shared/config/i18n'
import type { Locale } from '@shared/types'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!locales.includes(locale)) notFound()

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}