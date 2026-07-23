import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Apex Flow Plumbing | 24/7 Emergency Plumbing Services',
  description: 'Professional plumbing services available 24/7. Expert drain cleaning, water heater repair, and emergency pipe solutions. Same-day service guaranteed.',
  keywords: 'plumbing, emergency plumbing, drain cleaning, water heater, pipe repair, 24/7 service',
  generator: 'v0.app',
  openGraph: {
    title: 'Apex Flow Plumbing | 24/7 Emergency Services',
    description: 'Fast, reliable plumbing solutions when you need them most',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#ff7a00' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Apex Flow Plumbing',
              description: '24/7 Emergency Plumbing Services',
              telephone: '(555) 019-FLOW',
              areaServed: 'Local Area',
              contactType: 'Customer Service',
              availableLanguage: ['en'],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
