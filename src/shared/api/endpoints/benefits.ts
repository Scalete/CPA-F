import { createLocaleApiClient } from '@shared/api/client'
import type { ApiLocale, BenefitsResponse } from '@shared/types'

export async function getBenefits(
  locale: ApiLocale = 'en'
): Promise<BenefitsResponse> {
  const { data } = await createLocaleApiClient(locale).get<BenefitsResponse>(
    '/benefits'
  )
  return data
}
