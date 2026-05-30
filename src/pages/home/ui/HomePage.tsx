import { HomeSection } from '@widgets/home-section'
import { MultiplyWithUs } from '@widgets/multiply-with-us'

export const HomePage = () => {
  return (
    <main className="min-h-dvh min-w-[375px] overflow-x-hidden">
      <HomeSection />
      <MultiplyWithUs />
    </main>
  )
}
