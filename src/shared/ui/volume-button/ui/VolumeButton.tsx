'use client'

import { clsx } from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './VolumeButton.module.scss'

interface VolumeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function VolumeButton({
                               children,
                               className,
                               type = 'button',
                               disabled,
                               ...props
                             }: VolumeButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.volumeButton, className)}
      {...props}
    >
      <span className={styles.left} aria-hidden="true">
        <svg
          viewBox="0 0 22.6 85"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            className={styles.fill}
            d="M1.25 83.25V9.85855L21.2683 1.25H22.6V83.25H1.25Z"
          />
          <path
            className={styles.stroke}
            d="M22.6 1.25H21.2683L1.25 9.85855V83.25H22.6"
          />
        </svg>
      </span>

      <span className={styles.center}>
        <span className={styles.label}>{children}</span>
      </span>

      <span className={styles.right} aria-hidden="true">
        <svg
          viewBox="0 0 11.8 85"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            className={styles.fill}
            d="M0 1.25H9.52V77.5855L0 83.25V1.25Z"
          />
          <path
            className={styles.stroke}
            d="M0 1.25H9.52V77.5855L0 83.25M0 9.85855V83.25M0 9.85855C3.718 7.27775 9.52 1.25 9.52 1.25"
          />
        </svg>
      </span>
    </button>
  )
}