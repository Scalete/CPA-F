'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { LanguageSwitcher } from '@features/language-switcher'

import { assetPaths } from '@shared/assets'
import { ButtonSvg, InstagramSvg, LinkedinSvg, LogoSvg, TelegramSvg } from '@shared/ui/icon'
import { LayoutContainer } from '@shared/ui/layout-container'
import { LinkButton } from '@shared/ui/link-button'
import { Title } from '@shared/ui/title'

const navItems = ['team', 'benefits', 'join'] as const
const mobileNavItems = ['main', 'team', 'benefits', 'join'] as const

export function HeroSection() {
  const t = useTranslations('heroSection')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <section className="relative bg-brand-mid overflow-hidden sm:bg-gradient-brand text-text">
      <div className="absolute inset-0 bg-gradient-overlay" />

      <LayoutContainer className="relative z-10 flex h-full min-h-full flex-col py-6 sm:py-8 lg:py-10">
        <header className="flex items-center justify-between">
          <Link
            className="font-display text-2xl font-bold tracking-tight text-accent sm:text-3xl"
            href="/"
          >
            <LogoSvg className="w-11 h-6 sm:w-11 sm:h-10 text-white" />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-10">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item}>
                  <LinkButton href={`#${item}`} variant="nav">
                    {t(`nav.${item}`)}
                  </LinkButton>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </nav>

          <LinkButton
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('menu.close') : t('menu.open')}
            as="button"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            variant="underline"
          >
            {t('menu.mobile')}
          </LinkButton>
        </header>

        <div className="flex flex-col mt-24 sm:mt-0 sm:flex-row flex-1 items-center gap-10 py-8 lg:gap-4 lg:py-12">
          <div className="sm:max-w-[620px]">
            <Title accentLastWord variant="hero">
              {t('hero.title')}
            </Title>
            <p className="mt-2 max-w-[440px] text-base leading-relaxed text-text/75 sm:mt-2 sm:text-sm">
              {t('hero.description')}
            </p>

            <ButtonSvg className="mt-8">{t('hero.primaryCta')}</ButtonSvg>
          </div>

          <div>
            <Image
              src={assetPaths.images.snake}
              alt=""
              width={889}
              height={911}
              priority
            />
          </div>
        </div>

        <div className="hidden gap-7 lg:flex">
          <a
            className="text-white transition-colors duration-200 ease-out hover:text-accent"
            href="#"
          >
            <InstagramSvg />
          </a>
          <a
            className="text-white transition-colors duration-200 ease-out hover:text-accent"
            href="#"
          >
            <TelegramSvg />
          </a>
          <a
            className="text-white transition-colors duration-200 ease-out hover:text-accent"
            href="#"
          >
            <LinkedinSvg />
          </a>
        </div>
      </LayoutContainer>

      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-50 flex w-full flex-col bg-brand-mid px-6 py-6 transition-transform duration-300 lg:hidden',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <LogoSvg className="w-11 h-10" />
          </Link>
          <button
            aria-label={t('menu.close')}
            className="font-display text-3xl leading-none text-accent"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-center my-auto">
          <nav>
            <ul className="flex flex-col items-center gap-14">
              {mobileNavItems.map((item) => (
                <li key={item}>
                  <LinkButton
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    variant="nav-mobile"
                  >
                    {t(`nav.${item}`)}
                  </LinkButton>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 flex items-center justify-center gap-7">
            <a href="#">
              <InstagramSvg />
            </a>
            <a href="#">
              <TelegramSvg />
            </a>
            <a href="#">
              <LinkedinSvg />
            </a>
          </div>

          <LanguageSwitcher className="mt-16 items-center justify-center" />
        </div>
      </aside>
    </section>
  )
}
