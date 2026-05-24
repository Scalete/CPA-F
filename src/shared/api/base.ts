import { createLocaleApiClient } from './client'

interface FetchOptions {
  locale?: string
}

export async function apiFetch<T>(
  path: string,
  { locale = 'en' }: FetchOptions = {}
): Promise<T> {
  const client = createLocaleApiClient(locale)
  const { data } = await client.get<T>(path)
  return data
}
