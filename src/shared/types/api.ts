import type { Locale } from './locale'

export type ApiLocale = Extract<Locale, 'en' | 'ru'>

export type ApiFetchOptions = {
  locale?: ApiLocale
}

export type ApiResponse<T> = {
  data: T
}

export type ApiPostResponse<T> = {
  message: string
  data: T
}
