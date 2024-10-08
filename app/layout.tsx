import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})
const fontBody = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'], // Importing both regular and bold weights
    display: 'swap',
    variable: '--font-body',
  })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-body antialiased',
        fontHeading.variable,
        fontBody.variable
      )}>
        {children}
      </body>
    </html>
  )
}