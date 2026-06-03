import { HeroSection } from '@widgets/hero-section'
import { MultiBenefits } from '@widgets/multi-benefits'
import { MultiTasks } from '@widgets/multi-tasks'
import { MultiplyWithUs } from '@widgets/multiply-with-us'

export const HomeScreen = () => {
  return (
    <main className="min-h-dvh min-w-[375px] overflow-x-hidden">
      <HeroSection />
      <MultiTasks />
      <MultiBenefits />
      <MultiplyWithUs />
    </main>
  )
}
