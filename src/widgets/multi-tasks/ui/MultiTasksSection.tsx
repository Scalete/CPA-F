import { TaskCard } from './TaskCard'
import { TaskHeroCard } from './TaskHeroCard'
import type { TaskTile } from '../model/types'

interface MultiTasksSectionProps {
  heading: string
  description: string
  tiles: TaskTile[]
}

export function MultiTasksSection({ heading, description, tiles }: MultiTasksSectionProps) {
  const [col2Tiles, col3Tiles] = [tiles.slice(0, 2), tiles.slice(2, 5)]

  return (
    <div className="relative flex flex-col overflow-hidden py-[60px] pb-[9px] max-lg:py-[90px] max-lg:pb-5">
      <div className="flex flex-col">
        <h2 className="mb-[68px] shrink-0 text-right font-display text-[40px] font-semibold uppercase leading-none tracking-[-0.03em] text-accent max-lg:order-2 max-lg:mb-0 max-lg:pt-8 max-lg:text-center max-lg:text-xl">
          {heading}
        </h2>

        <div className="grid grid-cols-1 gap-3 max-lg:order-1 lg:grid-cols-[1.5fr_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-[18px]">
          <TaskHeroCard className="min-w-0" description={description} />

          <div className="flex min-w-0 flex-col gap-3 lg:h-full lg:gap-[18px]">
            {col2Tiles.map((tile) => (
              <TaskCard
                key={tile.title}
                className="lg:flex-1"
                title={tile.title}
                text={tile.text}
              />
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-3 lg:h-full lg:gap-[18px]">
            {col3Tiles.map((tile) => (
              <TaskCard
                key={tile.title}
                className="lg:flex-1"
                title={tile.title}
                text={tile.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
