import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Apex Flow Plumbing | 24/7 Emergency Plumbing Services',
  description: 'Licensed, insured, and available 24/7. Apex Flow Plumbing delivers fast same-day dispatch for emergency repairs, drain cleaning, water heaters, and gas lines. Upfront pricing and a workmanship warranty.',
  keywords: 'plumbing, emergency plumbing, drain cleaning, water heater, pipe repair, 24/7 service, gas line, preventive maintenance',
  generator: 'v0.app',
  openGraph: {
    title: 'Apex Flow Plumbing | 24/7 Emergency Services',
    description: 'Licensed, insured, available 24/7. Same-day dispatch, upfront pricing, and a workmanship warranty. Book your service in minutes.',
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
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Apex Flow Plumbing',
  description: '24/7 Emergency Plumbing Services — licensed, insured, same-day dispatch with upfront pricing and a workmanship warranty.',
  telephone: '(555) 019-FLOW',
  email: 'info@apexflow.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
  },
  areaServed: 'Local Area',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Heater Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Line Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventive Care' } },
    ],
  },
  mainEntityOfPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer upfront pricing before starting work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every visit starts with a free inspection and a written quote. You approve the price before any work begins — no surprises, no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can a plumber arrive for an emergency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average emergency response time is under 45 minutes. We dispatch the closest available licensed technician 24/7, including nights and weekends.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your plumbers licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every Apex Flow technician is fully licensed, insured, and background-checked. We carry general liability and workers compensation coverage on every job.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is your work covered by a warranty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All repairs are backed by a 1-year workmanship warranty. If the same issue returns within the warranty period, we fix it free of charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve the greater local area and surrounding neighborhoods. Call (555) 019-FLOW with your address and we will confirm coverage and arrival time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept all major credit and debit cards, cash, and digital wallets. Payment is collected only after the work is complete and you are satisfied.',
        },
      },
    ],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
