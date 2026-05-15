import { getTranslations } from 'next-intl/server'

import styles from './HomePage.module.scss'

export async function HomePage() {
  const t = await getTranslations('home')

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t('hello')}</h1>
    </main>
  )
}
