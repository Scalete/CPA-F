import { clsx } from 'clsx'
import { getTranslations } from 'next-intl/server'

import { MultiplyWithUs } from '@widgets/multiply-with-us'

import { LayoutContainer } from '@shared/ui/layout-container'

import styles from './HomePage.module.scss'

export async function HomePage() {
  const t = await getTranslations('home')

  return (
    <main className={clsx(styles.main, 'bg-gradient-brand')}>
      <LayoutContainer>
        <MultiplyWithUs />
      </LayoutContainer>
    </main>
  )
}
