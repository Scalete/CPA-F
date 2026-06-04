import type { ReactNode } from 'react'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { DocumentLang } from './document-lang'

interface IntlProviderProps {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}

export function IntlProvider({ children, locale, messages }: IntlProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentLang />
      {children}
    </NextIntlClientProvider>
  )
}