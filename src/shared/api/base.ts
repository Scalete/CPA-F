import type { ApiFetchOptions } from '@shared/types'

import { createLocaleApiClient } from './client'

export async function apiFetch<T>(
  path: string,
  { locale = 'en' }: ApiFetchOptions = {}
): Promise<T> {
  const client = createLocaleApiClient(locale)
  const { data } = await client.get<T>(path)
  return data
}
