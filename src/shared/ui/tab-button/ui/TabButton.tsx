'use client'

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

import { ArrowIcon } from '@shared/ui/icon'

import styles from './TabButton.module.scss'

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isActive?: boolean
}

export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(function TabButton(
  { label, isActive = false, className, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
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
      <ArrowIcon />
    </button>
  )
})