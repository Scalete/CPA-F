import { clsx } from 'clsx'
import type { FC } from 'react'

import { ButtonProps } from '../model/types'

const shapeTransition =
  'transition-[fill,stroke] duration-300 ease-out motion-reduce:transition-none'

export const ButtonSvg: FC<ButtonProps> = ({ children = '', className = '', ...props }) => {
  return (
    <button
      className={clsx(
        'group relative inline-flex h-[62px] sm:h-[76px] min-w-[200px] items-center justify-center px-8 py-0',
        'transition-transform duration-150 ease-out',
        'active:scale-[0.97] active:translate-y-0.5 active:duration-75',
        'motion-reduce:active:scale-100 motion-reduce:active:translate-y-0',
        className
      )}
      type="button"
      {...props}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 423 85"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          className={clsx('fill-accent group-hover:fill-bg-deep', shapeTransition)}
          d="M1.25 83.25V9.85855L21.2683 1.25H421.25V77.5855L411.73 83.25H1.25Z"
        />
        <path
          className={clsx('stroke-bg-deep group-hover:stroke-accent', shapeTransition)}
          d="M421.25 1.25V77.5855L411.73 83.25H1.25V9.85855L21.2683 1.25H421.25ZM1.25 9.85855C1.25 9.85855 306.431 9.85855 411.73 9.85855M411.73 83.25C411.73 83.25 411.73 39.3007 411.73 9.85855M411.73 9.85855C415.448 7.27775 421.25 1.25 421.25 1.25"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className={clsx(
          'relative z-10 whitespace-nowrap font-display text-xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em]',
          'text-bg-deep transition-colors duration-300 ease-out group-hover:text-accent',
          'motion-reduce:transition-none'
        )}
      >
        {children}
      </span>
    </button>
  )
}
