'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { KeyboardEvent } from 'react'

import { assetPaths } from '@shared/assets'
import { ApplicationModal } from '@shared/ui/application-form'
import { Footer } from '@shared/ui/footer'
import { TabButton } from '@shared/ui/tab-button'
import { Title } from '@shared/ui/title'

import { MultiplyCard } from './MultiplyCard'
import styles from './MultiplySection.module.scss'
import { MultiplyItem } from '../model/types'

interface MultiplySectionViewProps {
  heading: string
  data: MultiplyItem[]
}

const tabClasses = [
  styles.tabLarge,
  styles.tabMedium,
  styles.tabSmall,
]

function normalizeId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9а-яё_-]+/gi, '-')
    .replace(/^-+|-+$/g, '')
}

export function MultiplySectionView({ heading, data }: MultiplySectionViewProps) {
  const [activeKey, setActiveKey] = useState(data[0]?.key ?? '')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const reactId = useId()
  const baseId = reactId.replace(/:/g, '')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const activeItem = useMemo(() => {
    return data.find((item) => item.key === activeKey) ?? data[0]
  }, [data, activeKey])

  const getTabId = useCallback(
    (key: string) => `${baseId}-tab-${normalizeId(key)}`,
    [baseId],
  )

  const getPanelId = useCallback(
    (key: string) => `${baseId}-panel-${normalizeId(key)}`,
    [baseId],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const count = data.length

      if (count === 0) return

      let nextIndex = index

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = (index + 1) % count
          break

        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = (index - 1 + count) % count
          break

        case 'Home':
          nextIndex = 0
          break

        case 'End':
          nextIndex = count - 1
          break

        default:
          return
      }

      event.preventDefault()

      const nextItem = data[nextIndex]

      if (!nextItem) return

      setActiveKey(nextItem.key)
      tabRefs.current[nextIndex]?.focus()
    },
    [data],
  )

  if (!activeItem) {
    return null
  }

  return (
    <>
      <ApplicationModal
        isOpen={isModalOpen}
        onCloseAction={() => setIsModalOpen(false)}
      />

      <div className={styles.section}>
        <div className={styles.inner}>
          <Image
            className={styles.snake}
            src={assetPaths.images.snake4}
            alt=""
            width={630}
            height={370}
            aria-hidden="true"
          />

          <Title className={styles.title}>{heading}</Title>

          <div className={styles.columns}>
            <div
              className={styles.tabList}
              role="tablist"
              aria-label={heading}
            >
              {data.map((item, index) => {
                const isActive = item.key === activeItem.key

                return (
                  <TabButton
                    key={item.key}
                    ref={(element) => {
                      tabRefs.current[index] = element
                    }}
                    id={getTabId(item.key)}
                    role="tab"
                    label={item.title}
                    aria-selected={isActive}
                    aria-controls={getPanelId(item.key)}
                    tabIndex={isActive ? 0 : -1}
                    className={clsx(
                      styles.tab,
                      tabClasses[index] ?? styles.tabLarge,
                    )}
                    isActive={isActive}
                    onClick={() => setActiveKey(item.key)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  />
                )
              })}
            </div>

            <div
              id={getPanelId(activeItem.key)}
              role="tabpanel"
              aria-labelledby={getTabId(activeItem.key)}
              className={styles.panel}
              tabIndex={0}
            >
              <MultiplyCard
                step1={activeItem.steps.step_1}
                step2={activeItem.steps.step_2}
                ctaLabel={activeItem.ctaLabel}
                onCtaClick={() => setIsModalOpen(true)}
              />

              <Footer className={styles.footerDesktop} />
            </div>
          </div>

          <Footer className={styles.footerMobile} />
        </div>
      </div>
    </>
  )
}