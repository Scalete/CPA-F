import { clsx } from 'clsx'
import type { ElementType, ReactNode } from 'react'

import styles from './LayoutContainer.module.scss'

interface LayoutContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const LayoutContainer = ({ children, className, as: Component = 'div' }: LayoutContainerProps) => {
  return (
    <Component className={clsx(styles.container, className)}>
      {children}
    </Component>
  )
}