'use client'

import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'

import styles from './Select.module.scss'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  error?: string
  className?: string
}

export function Select({
                         options,
                         value,
                         onChange,
                         placeholder = 'Select',
                         required,
                         error,
                         className,
                       }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={className}>
      <div
        ref={wrapperRef}
        className={clsx(
          styles.wrapper,
          error && styles.wrapperError,
          isOpen && styles.wrapperOpen,
        )}
      >
        <div className={styles.triggerRow}>
          <button
            type="button"
            className={clsx(styles.trigger, selectedOption && styles.triggerHasValue)}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            {selectedOption ? (
              selectedOption.label
            ) : (
              <span>
                {placeholder}
                {required && <span className={styles.requiredMark}>*</span>}
              </span>
            )}
            <span className={clsx(styles.arrow, isOpen && styles.arrowOpen)}></span>
          </button>
        </div>

        <ul
          className={clsx(styles.panel, isOpen && styles.panelOpen)}
          role="listbox"
          aria-label={placeholder}
          aria-hidden={!isOpen}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              className={clsx(
                styles.option,
                value === option.value && styles.optionActive,
              )}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  )
}
