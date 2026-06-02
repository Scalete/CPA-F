import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type LinkButtonVariant = 'nav' | 'nav-mobile' | 'underline'

type LinkButtonBaseProps = {
  active?: boolean
  children: ReactNode
  className?: string
  variant?: LinkButtonVariant
}

export type LinkButtonProps =
  | (LinkButtonBaseProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkButtonBaseProps> & {
        as?: 'a'
        href: string
      })
  | (LinkButtonBaseProps &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof LinkButtonBaseProps> & {
        as: 'button'
        href?: never
      })
