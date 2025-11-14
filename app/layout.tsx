import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'GOSHT - Certified Organic & Halal Meat',
  description: 'Premium organic, certified halal fresh meat shop in Islamabad. Fresh. Ethical. Traceable. Premium quality mutton, veal, and custom cuts.',

  keywords: 'halal meat, organic meat, Islamabad, mutton, veal, certified organic, fresh meat, islamabad meat shop, ethical meat, traceable meat, premium cuts, grass-fed, hormone-free, antibiotic-free',
  icons: {
    icon: [

      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
