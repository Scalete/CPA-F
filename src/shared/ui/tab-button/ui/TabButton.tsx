'use client'

import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

import { ArrowIcon } from '@shared/ui/icon'

import styles from './TabButton.module.scss'

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isActive?: boolean
}

export function TabButton({
                            label,
                            isActive = false,
                            className,
                            disabled,
                            ...props
                          }: TabButtonProps) {
  return (
    <button
      type='button'
      disabled={disabled}
      aria-pressed={isActive}
      className={clsx(
        styles.tabButton,
        {
          [styles.active]: isActive,
        },
        className,
      )}
      {...props}
    >
      {label}
      <ArrowIcon/>
    </button>
  )
}