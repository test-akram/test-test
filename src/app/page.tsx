import type { Metadata } from 'next'

import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Segmented from '@/components/Segmented/Segmented'
import RingedIconContainer from '@/components/RingedIconContainer/RingedIconContainer'
import Card from '@/components/Card/Card'
import Tooltip from '@/components/Tooltip/Tooltip'
import Image from "next/image";

import { site } from '@/config/site'


const icons = ["django", "python", "javascript"]; // array of icon names


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
      <RingedIconContainer iconNames={icons} />
      

      <div className=" w-full max-w-screen-xl animate-fade-up px-5 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>

    </>
  )
}
const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
        <Image alt="Auth.js logo" src="/svg_icons_tech_stack/python.svg" width={50} height={50} />
        </Tooltip>
        <div class="flex items-center justify-center">
  <div class="w-22 h-22 rounded-full ring-4 ring-purple-500 flex items-center justify-center">
    <div class="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <Image alt="Prisma logo" src="/svg_icons_tech_stack/django.svg" width={50} height={50} />
        </div>
        </div>
        </div>
        <Image alt="Auth.js logo" src="/svg_icons_tech_stack/python.svg" width={50} height={50} />
        <Image alt="Auth.js logo" src="/svg_icons_tech_stack/python.svg" width={50} height={50} />
        <Image alt="Auth.js logo" src="/svg_icons_tech_stack/python.svg" width={50} height={50} />

      
      </div>
    ),


  },
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/svg_icons_tech_stack/python.svg" width={50} height={50} />
        <Image alt="Prisma logo" src="/svg_icons_tech_stack/django.svg" width={50} height={50} />
      </div>
    ),


  },
]

export default HomePage
