import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import MDXComponents from '@/components/MDXComponents'

// import Segmented from '@/components/Segmented/Segmented'
import { site } from '@/config/site'

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
}

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'page')

  if (!page) {
    return notFound()
  }

  return page
}

const HomePage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <div className='col-span-7'></div>
      <Hero />
      <Projects />
      <h2 className='text-3xl font-bold'>Services</h2>
      <div className='my-2 flex flex-col'>
        <MDXComponent
          components={{
            ...MDXComponents,
          }}
        />
      </div>
    </>
  )
}

export default HomePage
