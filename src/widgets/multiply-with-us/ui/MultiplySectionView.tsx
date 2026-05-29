'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useMemo, useState } from 'react'

import { assetPaths } from '@shared/assets'
import { Footer } from '@shared/ui/footer'
import { TabButton } from '@shared/ui/tab-button'

import { MultiplyCard } from './MultiplyCard'
import styles from './MultiplySection.module.scss'
import { MultiplyItem } from '../model/types'

type MultiplySectionViewProps = {
  heading: string
  data: MultiplyItem[]
}

const tabClasses = [
  styles.tabLarge,
  styles.tabMedium,
  styles.tabSmall,
]

export function MultiplySectionView({ heading, data }: MultiplySectionViewProps) {
  const [activeKey, setActiveKey] = useState(data[0]?.key ?? '')
  const activeItem = useMemo(() => {
    return data.find((item) => item.key === activeKey) ?? data[0]
  }, [data, activeKey])

  if (!activeItem) {
    return null
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Image
          className={styles.snake}
          src={assetPaths.images.snake4}
          alt=""
          width={630}
          height={370}
          aria-hidden="true"
        />

        <h2 className={styles.title}>{heading}</h2>

        <div className={styles.columns}>
          <div className={styles.tabList} role="group" aria-label={heading}>
            {data.map((item, index) => (
              <TabButton
                key={item.key}
                label={item.title}
                className={clsx(
                  styles.tab,
                  tabClasses[index] ?? styles.tabLarge,
                )}
                isActive={item.key === activeItem.key}
                onClick={() => setActiveKey(item.key)}
              />
            ))}
          </div>

          <div className={styles.panel}>
            <MultiplyCard
              step1={activeItem.steps.step_1}
              step2={activeItem.steps.step_2}
              ctaLabel={activeItem.ctaLabel}
            />

            <Footer className={styles.footerDesktop} />
          </div>
        </div>

        <Footer className={styles.footerMobile} />
      </div>
    </section>
  )
}