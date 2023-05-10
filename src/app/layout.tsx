import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import type { Metadata } from 'next'
// import { Fira_Code, Inter, Noto_Sans_TC } from 'nexst/font/google'
import '@/styles/globals.css'

import KBar from '@/components/KBar'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

import { site } from '@/config/site'

import CustomToaster from './custom-toaster'

import { WithChildren } from '@/types'

type RootLayoutProps = WithChildren

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
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
  manifest: '/static/favicon/site.webmanifest',
  twitter: {
    title: site.name,
    card: 'summary_large_image',
    site: '@TszhongLai0411',
    creator: '@TszhongLai0411',
  },
  keywords: site.keywords,
  themeColor: '#000',
  creator: 'akrembenghanem',
  openGraph: {
    url: `${site.url}`,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: `${site.url}/static/images/og/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: '/static/favicon/favicon.svg',
    shortcut: '/static/favicon/favicon.svg',
    apple: [
      {
        url: '/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [...site.favicons],
  },
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={clsx('font-sans')}>
      <body className='from-black-700 overflow-x-hidden bg-opacity-75 bg-gradient-to-r via-fuchsia-500 to-gray-500 font-default text-hong-fg'>
        <KBar>
          <Header />
          <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
            {children}
          </main>
          <CustomToaster />
          <Footer />
        </KBar>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
