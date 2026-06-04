import { createLocaleApiClient } from '@shared/api'
import type { ApiLocale } from '@shared/types'

import type { BenefitsResponse } from '../model/types'

export async function getBenefits(
  locale: ApiLocale = 'en'
): Promise<BenefitsResponse> {
  const { data } = await createLocaleApiClient(locale).get<BenefitsResponse>(
    '/benefits'
  )
  return data
}
