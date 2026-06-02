import { HomeSection } from '@widgets/home-section'
import { MultiBenefits } from '@widgets/multi-benefits'
import { MultiTasks } from '@widgets/multi-tasks'
import { MultiplyWithUs } from '@widgets/multiply-with-us'

export const HomePage = () => {
  return (
    <main className="min-h-dvh min-w-[375px] overflow-x-hidden">
      <HomeSection />
      <MultiTasks />
      <MultiBenefits />
      <MultiplyWithUs />
    </main>
  )
}
