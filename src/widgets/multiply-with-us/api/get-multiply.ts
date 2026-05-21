import { createLocaleApiClient } from '@shared/api'
import type { ApiLocale } from '@shared/types'

import type { MultiplyResponse } from '../model/types'

export async function getMultiply(
  locale: ApiLocale = 'en'
): Promise<MultiplyResponse> {
  const { data } = await createLocaleApiClient(locale).get<MultiplyResponse>(
    '/multiply'
  )
  return data
}
