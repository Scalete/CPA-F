import axios from 'axios'

import { API_KEY, API_URL } from '@shared/config/api'

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
})

export function createLocaleApiClient(locale: string) {
  return axios.create({
    baseURL: `${API_URL}/${locale}`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  })
}
