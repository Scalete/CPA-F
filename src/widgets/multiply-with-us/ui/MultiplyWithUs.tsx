import { getLocale, getTranslations } from 'next-intl/server'

import type { ApiLocale } from '@shared/types'
import { LayoutContainer } from '@shared/ui/layout-container'

import { MultiplySectionView } from './MultiplySectionView'
import { getMultiply } from '../api/get-multiply'
import type { MultiplyAudience, MultiplyItem } from '../model/types'


const AUDIENCE_KEYS = new Set<MultiplyAudience>([
  'for_media_buyers',
  'for_businesses',
  'for_partners',
])

const AUDIENCE_ORDER: MultiplyAudience[] = [
  'for_media_buyers',
  'for_businesses',
  'for_partners',
]

function isAudienceKey(title: string): title is MultiplyAudience {
  return AUDIENCE_KEYS.has(title as MultiplyAudience)
}

export async function MultiplyWithUs() {
  const locale = (await getLocale()) as ApiLocale
  const [items, t] = await Promise.all([
    getMultiply(locale),
    getTranslations('multiplySection'),
  ])

  const audienceLabels: Record<MultiplyAudience, string> = {
    for_media_buyers: t('audience.for_media_buyers'),
    for_businesses: t('audience.for_businesses'),
    for_partners: t('audience.for_partners'),
  }

  const ctaLabels: Record<MultiplyAudience, string> = {
    for_media_buyers: t('cta.for_media_buyers'),
    for_businesses: t('cta.for_businesses'),
    for_partners: t('cta.for_partners'),
  }

  const titlesAreKeys = items.length > 0 && isAudienceKey(items[0].title)

  const resolvedItems: MultiplyItem[] = titlesAreKeys
    ? AUDIENCE_ORDER
      .map((key) => items.find((item) => item.title === key))
      .filter((item): item is NonNullable<typeof item> => item != null)
      .map((item) => ({
        key: item.title,
        title: audienceLabels[item.title as MultiplyAudience],
        steps: item.steps,
        ctaLabel: ctaLabels[item.title as MultiplyAudience],
      }))
    : items.map((item, index) => ({
      key: item.title,
      title: item.title,
      steps: item.steps,
      ctaLabel: ctaLabels[AUDIENCE_ORDER[index] ?? 'for_media_buyers'],
    }))

  return (
    <section className="relative bg-brand-mid overflow-hidden sm:bg-gradient-brand text-text">
      <div className="absolute inset-0 bg-gradient-overlay" />

      <LayoutContainer>
        <MultiplySectionView
          heading={t('heading')}
          data={resolvedItems}
        />
      </LayoutContainer>
    </section>
  )
}
