import clsx from 'clsx'
import { getLocale, getTranslations } from 'next-intl/server'

import { getBenefits } from '@shared/api'
import type { ApiLocale } from '@shared/types'

import styles from './HomePage.module.scss'

export async function HomePage() {
  const benefits = await getBenefits((await getLocale()) as ApiLocale)
  console.log('benefits', benefits)

  const t = await getTranslations('home')

  return (
    <main className={clsx(styles.main, 'bg-gradient-brand')}>
      <h1 className={clsx(styles.title, 'text-accent')}>{t('hello')}</h1>
    </main>
  )
}
