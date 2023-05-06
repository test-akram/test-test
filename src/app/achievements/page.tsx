import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'

import { site } from '@/config/site'

const title = 'Achievements'
const description = 'The list of my achievements.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.url}/achievements`,
  },
  openGraph: {
    url: `${site.url}/achievements`,
    type: 'website',
    title,
    siteName: site.title,
    description,
    locale: 'en-US',
    images: [
      {
        url: `${site.url}/static/images/og/og.png`,
        width: 1200,
        height: 630,
        alt: description,
        type: 'image/png',
      },
    ],
  },
}

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'achievements')

  if (!page) {
    return notFound()
  }

  return page
}

const AchievementsPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)
  return (
    <>
      <PageTitle
        title='Achievements'
        description='The list of my Achievements, I am grateful to my colleagues also.'
      />

      <div className='prose prose-invert w-full max-w-none'>
        <MDXComponent
          components={{
            ...MDXComponents,
          }}
        />
      </div>
    </>
  )
}

export default AchievementsPage
