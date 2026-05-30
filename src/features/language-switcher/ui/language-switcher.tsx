'use client'

import { clsx } from 'clsx'
import { useParams, useSearchParams } from 'next/navigation'

import { Link, usePathname } from '@shared/config/navigation'

type Locale = 'en' | 'ru'

interface LanguageSwitcherProps {
  className?: string
}

const localeItems: Array<{ locale: Locale; label: string }> = [
  { locale: 'en', label: 'ENG' },
  { locale: 'ru', label: 'РУС' },
]

const inactiveLocaleClass =
  'text-accent underline decoration-accent underline-offset-4 transition-colors duration-200 ease-out hover:text-white focus-visible:text-white'

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = useParams<{ locale?: string }>()
  const currentLocale: Locale = params?.locale === 'ru' ? 'ru' : 'en'
  const queryString = searchParams?.toString() ?? ''
  const href = queryString ? `${pathname}?${queryString}` : pathname

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 font-display sm:text-lg text-3xl uppercase tracking-[0.1em]',
        className
      )}
    >
      {localeItems.map(({ locale, label }, idx) => {
        const isActive = currentLocale === locale

        return (
          <span key={locale} className="inline-flex items-center gap-1">
            {idx > 0 && <span className="text-accent">/</span>}
            {isActive ? (
              <span className="cursor-default text-white">{label}</span>
            ) : (
              <Link href={href} locale={locale} className={inactiveLocaleClass}>
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}
