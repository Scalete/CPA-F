import axios, { type AxiosInstance } from 'axios'

import { API_KEY, API_URL } from '@shared/config/api'
import type { ApiLocale } from '@shared/types'

import { normalizeApiError } from './errors'

const defaultHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
} as const

function attachErrorInterceptor(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(normalizeApiError(error))
  )

  return instance
}

export const apiClient = attachErrorInterceptor(
  axios.create({
    baseURL: API_URL,
    headers: defaultHeaders,
  })
)

export function createLocaleApiClient(locale: ApiLocale = 'en'): AxiosInstance {
  return attachErrorInterceptor(
    axios.create({
      baseURL: `${API_URL}/${locale}`,
      headers: defaultHeaders,
    })
  )
}
