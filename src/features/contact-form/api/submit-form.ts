import { apiClient } from '@shared/api'

import type { FormPayload, FormResponse } from '../model/types'

export async function submitForm(payload: FormPayload): Promise<FormResponse> {
  const { data } = await apiClient.post<FormResponse>('/form', payload)
  return data
}
