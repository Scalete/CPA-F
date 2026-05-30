import { clsx } from 'clsx'
import { createElement, type ElementType } from 'react'

import type { TitleLevel, TitleProps, TitleVariant } from '../model/types'

const defaultLevelByVariant: Record<TitleVariant, TitleLevel> = {
  hero: 1,
  section: 2,
  card: 3,
  subtitle: 4,
}

const variantClasses: Record<TitleVariant, string> = {
  hero: 'font-display text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-text sm:text-5xl sm:tracking-[-0.02em] lg:text-6xl',
  section:
    'font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-text sm:text-4xl lg:text-5xl',
  card: 'font-display text-xl font-semibold leading-snug tracking-[0.02em] text-text sm:text-2xl',
  subtitle:
    'font-display text-lg font-medium leading-relaxed tracking-[0.1em] uppercase text-text/75 sm:text-xl',
}

function renderAccentLastWord(title: string) {
  const lastSpace = title.lastIndexOf(' ')

  if (lastSpace === -1) {
    return <span className="text-accent">{title}</span>
  }

  return (
    <>
      {title.slice(0, lastSpace)} <span className="text-accent">{title.slice(lastSpace + 1)}</span>
    </>
  )
}

export function Title({
  accentLastWord = false,
  as,
  children,
  className,
  level,
  variant = 'section',
  ...props
}: TitleProps) {
  const Component = as ?? (`h${level ?? defaultLevelByVariant[variant]}` as ElementType)
  const content =
    accentLastWord && typeof children === 'string' ? renderAccentLastWord(children) : children

  return createElement(
    Component,
    {
      className: clsx(variantClasses[variant], className),
      ...props,
    },
    content
  )
}
