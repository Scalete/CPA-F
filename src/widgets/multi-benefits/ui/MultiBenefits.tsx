import { getLocale } from 'next-intl/server'

import type { ApiLocale } from '@shared/types'
import { LayoutContainer } from '@shared/ui/layout-container'
import { Marquee } from '@shared/ui/marquee'

import styles from './MultiBenefitsSection.module.scss'
import { MultiBenefitsSectionView } from './MultiBenefitsSectionView'
import { getBenefits } from '../api/get-benefits'


const MARQUEE_TEXT = 'DREAM BIG EARN BIG'
const MARQUEE_COPIES = 10

export async function MultiBenefits() {
  const locale = (await getLocale()) as ApiLocale
  const data = await getBenefits(locale)

  return (
    <section
      id="benefits"
      className="relative bg-brand-mid overflow-hidden sm:bg-gradient-brand-purple text-text"
    >
      <LayoutContainer className={styles.container}>
        <MultiBenefitsSectionView data={data} />
      </LayoutContainer>

      <Marquee text={MARQUEE_TEXT} copies={MARQUEE_COPIES} className='hidden lg:block mb-14 mt-20'/>
    </section>
  )
}
