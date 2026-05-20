import { apiClient } from '@shared/api/client'
import type { FormPayload, FormResponse } from '@shared/types'

export async function submitForm(payload: FormPayload): Promise<FormResponse> {
  const { data } = await apiClient.post<FormResponse>('/form', payload)
  return data
}
