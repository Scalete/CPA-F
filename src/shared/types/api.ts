import type { Locale } from './locale'

export type ApiFetchOptions = {
  locale?: Locale
}

export type ApiResponse<T> = {
  data: T
}

export type ApiPostResponse<T> = {
  message: string
  data: T
}
