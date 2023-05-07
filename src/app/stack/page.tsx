import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'

import { site } from '@/config/site'

const title = 'Stack'
const description =
  'This is what type of technologies I am currently using for different tasks and projects.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.url}/stack`,
  },
  openGraph: {
    url: `${site.url}/stack`,
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
  const page = allPages.find((page) => page.slug === 'stack')

  if (!page) {
    return notFound()
  }

  return page
}

const UsesPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <PageTitle
        title='Stack'
        description='This is what I use for developement in daily basis.'
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

export default UsesPage
