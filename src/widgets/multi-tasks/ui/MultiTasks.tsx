import { getLocale, getTranslations } from 'next-intl/server'

import type { ApiLocale } from '@shared/types'
import { LayoutContainer } from '@shared/ui/layout-container'

import { MultiTasksSection } from './MultiTasksSection'
import { getTasks } from '../api/get-tasks'

export async function MultiTasks() {
  const locale = (await getLocale()) as ApiLocale
  const [data, t] = await Promise.all([getTasks(locale), getTranslations('multiTasksSection')])

  return (
    <section className="relative overflow-hidden bg-brand-mid text-text sm:bg-brand-deep">
      <div className="absolute inset-0 bg-gradient-overlay" aria-hidden />

      <LayoutContainer className="relative z-10 flex flex-col sm:!px-12">
        <MultiTasksSection
          description={data.description}
          heading={t('heading')}
          tiles={data.tiles}
        />
      </LayoutContainer>
    </section>
  )
}
