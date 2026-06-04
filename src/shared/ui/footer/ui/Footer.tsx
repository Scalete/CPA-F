'use client'

import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'

import { LinkButton } from '@shared/ui/link-button'

import styles from './Footer.module.scss'

interface FooterProps  {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations('footer')

  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.socials}>
        <LinkButton href="https://www.instagram.com/">
          {t('socials.instagram')}
        </LinkButton>
        <LinkButton href="https://t.me/">
          {t('socials.telegram')}
        </LinkButton>
        <LinkButton href="https://www.linkedin.com/">
          {t('socials.linkedin')}
        </LinkButton>
      </div>
      <LinkButton as='button'>
        {t('scrollToTop')}
      </LinkButton>
    </footer>
  )
}
