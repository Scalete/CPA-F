'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

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

function buildLocaleHref(pathname: string, currentLocale: Locale, nextLocale: Locale): string {
  const normalizedPath = pathname || '/'
  const basePath =
    currentLocale === 'ru' ? normalizedPath.replace(/^\/ru(?=\/|$)/, '') || '/' : normalizedPath

  if (nextLocale === 'en') {
    return basePath
  }

  return basePath === '/' ? '/ru' : `/ru${basePath}`
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? '/'
  const searchParams = useSearchParams()
  const params = useParams<{ locale?: string }>()
  const currentLocale: Locale = params?.locale === 'ru' ? 'ru' : 'en'
  const queryString = searchParams?.toString() ?? ''

  const handleLocaleSwitch = (locale: Locale) => {
    // next-intl middleware respects NEXT_LOCALE cookie on navigation.
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
  }

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 font-display sm:text-lg text-3xl uppercase tracking-[0.1em]',
        className
      )}
    >
      {localeItems.map(({ locale, label }, idx) => {
        const isActive = currentLocale === locale
        const href = buildLocaleHref(pathname, currentLocale, locale)

        return (
          <span key={locale} className="inline-flex items-center gap-1">
            {idx > 0 && <span className="text-accent">/</span>}
            {isActive ? (
              <span className="cursor-default text-white">{label}</span>
            ) : (
              <Link
                href={queryString ? `${href}?${queryString}` : href}
                onClick={() => handleLocaleSwitch(locale)}
                className={inactiveLocaleClass}
              >
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}
