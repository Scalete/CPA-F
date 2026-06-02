import { clsx } from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './Button.module.scss'

export type ButtonVariant = 'primary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  )
}
