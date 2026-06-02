import type { ReactNode } from 'react'

interface HighlightedTextProps {
  text: string
  highlight: string | string[]
  className?: string
  accentClassName?: string
  caseSensitive?: boolean
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function HighlightedText({
                                  text,
                                  highlight,
                                  className,
                                  accentClassName,
                                  caseSensitive = false,
                                }: HighlightedTextProps): ReactNode {
  const highlights = Array.isArray(highlight) ? highlight : [highlight]

  const filteredHighlights = highlights.filter(Boolean)

  if (!filteredHighlights.length) {
    return <span className={className}>{text}</span>
  }

  const pattern = filteredHighlights.map(escapeRegExp).join('|')
  const flags = caseSensitive ? 'g' : 'gi'
  const regex = new RegExp(`(${pattern})`, flags)

  const parts = text.split(regex)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlighted = filteredHighlights.some((word) =>
          caseSensitive
            ? part === word
            : part.toLowerCase() === word.toLowerCase(),
        )

        if (isHighlighted) {
          return (
            <span key={index} className={accentClassName}>
              {part}
            </span>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </span>
  )
}