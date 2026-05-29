'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from './Footer.module.scss'

export type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations('footer')

  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.socials}>
        <Link href="instagram" className={styles.socialLink}>Instagram</Link>
        <Link href="telegram" className={styles.socialLink}>Telegram</Link>
        <Link href="linkedin" className={styles.socialLink}>Linkedin</Link>
      </div>
      <span className={styles.scrollUp}>{t('scrollToTop')}</span>
    </footer>
  )
}
