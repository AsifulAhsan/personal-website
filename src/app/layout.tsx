import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { schibstedGrotesk } from '@/fonts/font'
import './globals.css'
import { NavBar } from '@/components/NavBar';


export const metadata: Metadata = {
  title: 'Asiful Ahsan',
  description: 'Portfolio website',
}

export const viewport: Viewport = {
  themeColor: "#bce4f5"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} antialiased`}>
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
