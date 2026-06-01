import clsx from 'clsx'

import { LogoSvg } from '@shared/ui/icon'

import styles from './Marquee.module.scss'

interface MarqueeProps {
  text: string
  copies?: number
  duration?: string
  className?: string
}

export function Marquee({
                          text,
                          copies = 8,
                          duration = '40s',
                          className
                        }: MarqueeProps) {
  const items = Array.from({ length: copies }, (_, index) => (
    <span key={index} className={styles.item}>
      {text}
      <LogoSvg className='w-16 h-14 fill-amber-500'/>
    </span>
  ))

  return (
    <div
      className={clsx(styles.root, className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className={styles.track}>
        <div className={styles.group}>{items}</div>
        <div className={styles.group}>{items}</div>
      </div>
    </div>
  )
}