'use client'


import Image from 'next/image'
import { useLocale } from 'next-intl'

import { assetPaths } from '@shared/assets'
import { HighlightedText } from '@shared/ui/highlighted-text'
import { Marquee } from '@shared/ui/marquee'
import { Title } from '@shared/ui/title'

import styles from './MultiBenefitsSection.module.scss'
import type { BenefitsResponse } from '../model/types'

const MARQUEE_TEXT = 'DREAM BIG EARN BIG'
const MARQUEE_COPIES = 10

const ACCENT_WORD_BY_LOCALE = {
  en: 'guaranteed',
  ru: 'гарантировать',
}

interface Props {
  data: BenefitsResponse
}

export function MultiBenefitsSectionView({ data }: Props) {
  const locale = useLocale()
  const { title, description, benefits } = data

  const accentWord =
    ACCENT_WORD_BY_LOCALE[locale as keyof typeof ACCENT_WORD_BY_LOCALE] ??
    ACCENT_WORD_BY_LOCALE.en

  return (
    <div className={styles.inner}>
      <Title className={styles.sectionLabel}>MULTI-BENEFITS</Title>

      <Image
        className={styles.image}
        src={assetPaths.images.snake3}
        width={390}
        height={390}
        alt=""
        aria-hidden="true"
      />

      <div className={styles.textArea}>
        <h2 className={styles.heading}>
          <HighlightedText
            text={title}
            highlight={accentWord}
            accentClassName="text-accent"
          />
        </h2>

        <p className={styles.description}>{description}</p>
      </div>

      <Marquee
        text={MARQUEE_TEXT}
        copies={MARQUEE_COPIES}
        className={styles.marquee}
      />

      <div className={styles.cardsArea}>
        {benefits.map((benefit, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.cardText}>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}