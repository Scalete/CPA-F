import { clsx } from 'clsx'
import Image from 'next/image'

import { assetPaths } from '@shared/assets'

interface TaskHeroCardProps {
  description: string
  className?: string
}

function DescriptionWithHighlight({ text }: { text: string }) {
  const parts = text.split(/(in-house)/i)

  return (
    <p className="min-w-0 p-5 font-display text-base font-bold leading-relaxed text-text [overflow-wrap:anywhere] sm:p-6 sm:text-lg sm:tracking-[-0.00em] lg:px-10 lg:py-7 lg:text-xl lg:leading-tight">
      {parts.map((part, index) =>
        /^in-house$/i.test(part) ? (
          <span key={index} className="text-accent">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </p>
  )
}

export function TaskHeroCard({ description, className }: TaskHeroCardProps) {
  return (
    <article
      className={clsx(
        'relative flex flex-col overflow-hidden rounded-md bg-gradient-brand-purple text-text',
        className
      )}
    >
      <DescriptionWithHighlight text={description} />

      <div className="relative flex justify-center">
        <Image
          className="pointer-events-none w-full select-none object-contain"
          src={assetPaths.images.snakeWithDiamond}
          alt=""
          width={559}
          height={458}
          sizes="(min-width: 1024px) 420px, 100vw"
          aria-hidden
        />
      </div>
    </article>
  )
}
