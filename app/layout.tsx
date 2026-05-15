import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Providers } from '@app/providers'
import '@app/styles/globals.css'

const stolzl = localFont({
  src: [
    { path: '../public/fonts/Stolzl-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Stolzl-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-main',
  display: 'swap',
})

const halvarBreit = localFont({
  src: [
    { path: '../public/fonts/HalvarBreit-Lt.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/HalvarBreit-Rg.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/HalvarBreit-Md.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/HalvarBreit-Bd.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CPA Network',
  description: 'CPA Network Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${stolzl.variable} ${halvarBreit.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
