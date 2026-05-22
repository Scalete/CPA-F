import { createLocaleApiClient } from '@shared/api'
import type { ApiLocale } from '@shared/types'

import type { TasksResponse } from '../model/types'

export async function getTasks(
  locale: ApiLocale = 'en'
): Promise<TasksResponse> {
  const { data } = await createLocaleApiClient(locale).get<TasksResponse>(
    '/tasks'
  )
  return data
}
