import type { ButtonHTMLAttributes, SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}
