import type { Metadata } from 'next'

import ContactLink from '@/components/ContactLink'

import { site } from '@/config/site'

const title = 'Contact me'
const description =
  'This is my personal contact, You can find here how to reach me on many platforms like twitter, linkedin... and other platforms for freelancing.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.url}/contact`,
  },
  openGraph: {
    url: `${site.url}/contact`,
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

const Contact = () => {
  return (
    <>
      <div className='mx-auto max-w-3xl overflow-hidden'>
        <h1 className='dark:text-white-100·text-3xl·font-extrabold·leading-9·tracking-tight·text-gray-9'>
          Contact
        </h1>
        <div className='pb-8 pt-10'>
          <ul className='font-semi-bold flex flex-col space-y-4'>
            <ContactLink
              href='mailto:akrambenghanem76@gmail.com'
              title='gmail'
              icon='akrambenghanem76'
            />
            <ContactLink
              href='https://github.com/BarriBarri20'
              title='github'
              icon='BarriBarri20'
            />
            <ContactLink
              href='https://www.linkedin.com/in/akram-ben-ghanem/'
              title='linkedin'
              icon='akram-ben-ghanem'
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
