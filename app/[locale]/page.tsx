import { setRequestLocale } from 'next-intl/server'

import { HomeScreen } from '@screens/home'
import type { Locale } from '@shared/types'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomeScreen />
}
