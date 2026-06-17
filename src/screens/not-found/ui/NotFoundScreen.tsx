'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ButtonSvg } from '@shared/ui/icon'
import { LayoutContainer } from '@shared/ui/layout-container'

export function NotFoundScreen() {
  const t = useTranslations('notFoundPage')

  return (
    <main className="relative flex h-dvh flex-col overflow-hidden">
      <LayoutContainer>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-[13rem] pb-[12rem] text-center max-md:mt-20 max-md:max-h-[524px] max-md:p-0">
          <p  className="
              mb-16
              font-display
              text-[clamp(10rem,28vw,24rem)]
              font-bold
              leading-[0.9]
              tracking-[-2.64px]
              text-white
              max-md:text-[180px]
              max-md:[writing-mode:vertical-lr]
              max-md:[text-orientation:upright]
              max-md:tracking-[-67px]
            "
              aria-label="Error 404">
            404
          </p>

          <Link href="/">
            <ButtonSvg>
              <div className="pt-[9px] text-[23px] tracking-[0.2em] max-md:hidden">{t('cta')}</div>
              <div className="hidden pt-[9px] text-[18px] tracking-[0.12em] max-md:block">{t('ctaMobile')}</div>
            </ButtonSvg>
          </Link>
        </div>
      </LayoutContainer>

      <div
        className="
          absolute
          bottom-[-60px]
          left-[15px]
          scale-x-[-1]
          max-md:right-[-90px]
          max-md:bottom-[-190px]
          max-md:left-auto
          max-md:scale-x-100
        "
        aria-hidden="true"
      >
        <Image
          src="/assets/images/snake.png"
          alt=""
          width={460}
          height={480}
          className="max-w-none object-contain"
          priority
        />
      </div>
    </main>
  )
}
