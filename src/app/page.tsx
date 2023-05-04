import type { Metadata } from 'next'

import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Segmented from '@/components/Segmented/Segmented'

import { site } from '@/config/site'



export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Segmented />
      
    </>
  )
}

export default HomePage
