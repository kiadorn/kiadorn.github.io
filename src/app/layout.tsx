import './globals.css'
import type { Metadata } from 'next'
import { inter, robotoSlab } from './fonts'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
