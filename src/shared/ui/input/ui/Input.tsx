import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  required?: boolean
  error?: string
}

export function Input({
                        label,
                        required = false,
                        error,
                        className,
                        ...rest
                      }: InputProps) {
  return (
    <div className={className}>
      <div className={clsx(styles.wrapper, error && styles.wrapperError)}>
        <input className={styles.input} placeholder=" " {...rest} />

        <span className={styles.placeholder} aria-hidden="true">
          {label}
          {required && <span className={styles.requiredMark}>*</span>}
        </span>
      </div>

      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  )
}