import type { ElementType, HTMLAttributes, ReactNode } from 'react'

export type TitleVariant = 'hero' | 'section' | 'card' | 'subtitle'

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface TitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> {
  accentLastWord?: boolean
  as?: ElementType
  children: ReactNode
  className?: string
  level?: TitleLevel
  variant?: TitleVariant
}
