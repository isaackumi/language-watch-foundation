import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/data/content'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import JsonLd from '@/components/JsonLd'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://languagewatchfoundation.org'),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: 'LANGUAGE WATCH Foundation (LWF)' }],
  creator: 'LANGUAGE WATCH Foundation (LWF)',
  publisher: 'LANGUAGE WATCH Foundation (LWF)',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://languagewatchfoundation.org',
    siteName: siteContent.meta.title,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteContent.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <head>
        <link rel="icon" href="/images/logo/nananom.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/nananom.jpg" />
        <meta name="theme-color" content="#e7a906" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sourceSans.className} antialiased`}>
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-white focus:text-gray-900 focus:rounded-xl focus:shadow-lg focus:font-bold focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-surface font-sans antialiased">
          <Navigation />
          <div id="main-content" tabIndex={-1}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
