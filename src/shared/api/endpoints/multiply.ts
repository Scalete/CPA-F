import { createLocaleApiClient } from '@shared/api/client'
import type { ApiLocale, MultiplyResponse } from '@shared/types'

export async function getMultiply(
  locale: ApiLocale = 'en'
): Promise<MultiplyResponse> {
  const { data } = await createLocaleApiClient(locale).get<MultiplyResponse>(
    '/multiply'
  )
  return data
}
