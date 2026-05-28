import { clsx } from 'clsx'

import type { LinkButtonProps, LinkButtonVariant } from '../model/types'

const baseClasses = 'font-display uppercase tracking-[0.1em] text-accent'

const variantClasses: Record<LinkButtonVariant, string> = {
  nav: clsx(
    'relative inline-block text-lg font-medium',
    'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-100 after:bg-accent after:transition-transform after:duration-200 after:ease-out',
    'hover:after:origin-bottom-right hover:after:scale-x-0'
  ),
  'nav-mobile':
    'inline-block text-3xl font-bold underline decoration-accent',
  underline:
    'text-sm font-medium underline decoration-accent transition-colors duration-200 hover:text-white sm:text-lg',
}

const activeClasses: Record<LinkButtonVariant, string> = {
  nav: 'text-white after:scale-x-100 hover:after:scale-x-100',
  'nav-mobile': 'text-white',
  underline: 'text-white',
}

function getLinkButtonClassName(
  variant: LinkButtonVariant,
  active: boolean,
  className?: string
) {
  return clsx(baseClasses, variantClasses[variant], active && activeClasses[variant], className)
}

export function LinkButton(props: LinkButtonProps) {
  const { active = false, children, className, variant = 'nav', ...rest } = props
  const classes = getLinkButtonClassName(variant, active, className)

  if (rest.as === 'button') {
    const { as: _as, ...buttonProps } = rest

    return (
      <button className={classes} type="button" {...buttonProps}>
        {children}
      </button>
    )
  }

  const { as: _as, href, ...anchorProps } = rest

  return (
    <a className={classes} href={href} {...anchorProps}>
      {children}
    </a>
  )
}
