import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'

import { site } from '@/config/site'

const title = 'About'
const description = 'A student who loves web development.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.url}/about`,
  },
  openGraph: {
    url: `${site.url}/about`,
    type: 'profile',
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
  const page = allPages.find((page) => page.slug === 'about')

  if (!page) {
    return notFound()
  }

  return page
}

const AboutPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <PageTitle title='About' description='👋 Hi there! I am Akram.' />
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

export default AboutPage
