import { clsx } from 'clsx'

interface TaskCardProps {
  title: string
  text: string
  className?: string
}

export function TaskCard({ title, text, className }: TaskCardProps) {
  return (
    <article
      className={clsx(
        'flex min-w-0 flex-col gap-2 overflow-hidden rounded-md bg-gradient-info p-3 text-text sm:gap-3',
        className
      )}
    >
      <h3 className="min-w-0 font-display text-2xl font-bold uppercase leading-tight tracking-[0.15em] text-accent [overflow-wrap:anywhere] lg:tracking-[0.06em]">
        {title}
      </h3>
      <p className="min-w-0 text-sm font-normal leading-snug text-text/70 [overflow-wrap:anywhere] sm:text-base sm:leading-relaxed">
        {text}
      </p>
    </article>
  )
}
