import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import type { ReactNode } from 'react'

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