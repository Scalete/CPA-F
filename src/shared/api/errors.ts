import type { AxiosError } from 'axios'

export type ApiErrorPayload = {
  message?: string
  status?: number
}

export class ApiError extends Error {
  readonly status: number
  readonly payload: ApiErrorPayload | undefined
  readonly isApiError = true

  constructor(message: string, status: number, payload?: ApiErrorPayload) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.payload = payload
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}

export function normalizeApiError(error: unknown): ApiError {
  if (isApiError(error)) {
    return error
  }

  if (isAxiosError(error)) {
    const status = error.response?.status ?? 0
    const payload = error.response?.data as ApiErrorPayload | undefined
    const message =
      payload?.message ??
      error.message ??
      'Request failed'

    return new ApiError(message, status, payload)
  }

  if (error instanceof Error) {
    return new ApiError(error.message, 0)
  }

  return new ApiError('Unknown error', 0)
}

function isAxiosError(error: unknown): error is AxiosError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as AxiosError).isAxiosError === true
  )
}
