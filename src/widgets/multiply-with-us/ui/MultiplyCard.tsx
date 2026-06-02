import { ButtonSvg, VerticalArrowIcon } from '@shared/ui/icon'

import styles from './MultiplyCard.module.scss'

interface MultiplyCardProps {
  step1: string
  step2: string
  ctaLabel: string
  onCtaClick?: () => void
}

export function MultiplyCard({
                               step1,
                               step2,
                               ctaLabel,
                               onCtaClick,
                             }: MultiplyCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.cardText}>{step1}</p>

      <div className={styles.arrowDivider} aria-hidden="true">
        <VerticalArrowIcon />
      </div>

      <p className={styles.cardText}>{step2}</p>

      <div className={styles.arrowDivider} aria-hidden="true">
        <VerticalArrowIcon />
      </div>

      <ButtonSvg onClick={onCtaClick}>
        <span className={styles.ctaText}>{ctaLabel}</span>
      </ButtonSvg>
    </div>
  )
}
