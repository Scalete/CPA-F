import { createLocaleApiClient } from '@shared/api/client'
import type { ApiLocale, TasksResponse } from '@shared/types'

export async function getTasks(
  locale: ApiLocale = 'en'
): Promise<TasksResponse> {
  const { data } = await createLocaleApiClient(locale).get<TasksResponse>(
    '/tasks'
  )
  return data
}
