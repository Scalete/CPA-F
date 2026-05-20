export type Id = string | number

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type Maybe<T> = Nullable<Optional<T>>

export type Dictionary<T = unknown> = Record<string, T>

export type ValueOf<T> = T[keyof T]

export type WithClassName = {
  className?: string
}
