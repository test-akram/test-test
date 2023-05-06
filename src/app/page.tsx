import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

// import Image from 'next/image'
// import Card from '@/components/Card/Card'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import MDXComponents from '@/components/MDXComponents'
// import RingedIconContainer from '@/components/RingedIconContainer/RingedIconContainer'
import Segmented from '@/components/Segmented/Segmented'

// import Tooltip from '@/components/Tooltip/Tooltip'
import { site } from '@/config/site'

// const icons: string[] = ['django', 'python', 'javascript'] // array of icon names

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
      <Hero />
      <Projects />
      <Segmented />
      <div className='my-16 flex flex-col'>
        <MDXComponent
          components={{
            ...MDXComponents,
          }}
        />
      </div>
    </>
  )
}
// const features = [
//   {
//     title: 'Beautiful, reusable components',
//     description:
//       'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
//     large: true,
//     demo: (
//       <div className='flex items-center justify-center space-x-20'>
//         <Tooltip content='Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.'>
//           <Image
//             alt='Auth.js logo'
//             src='/svg_icons_tech_stack/python.svg'
//             width={50}
//             height={50}
//           />
//         </Tooltip>
//         <div className='flex items-center justify-center'>
//           <div className='w-22 h-22 flex items-center justify-center rounded-full ring-4 ring-purple-500'>
//             <div className='flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'>
//               <Image
//                 alt='Prisma logo'
//                 src='/svg_icons_tech_stack/django.svg'
//                 width={50}
//                 height={50}
//               />
//             </div>
//           </div>
//         </div>
//         <Image
//           alt='Auth.js logo'
//           src='/svg_icons_tech_stack/python.svg'
//           width={50}
//           height={50}
//         />
//         <Image
//           alt='Auth.js logo'
//           src='/svg_icons_tech_stack/python.svg'
//           width={50}
//           height={50}
//         />
//         <Image
//           alt='Auth.js logo'
//           src='/svg_icons_tech_stack/python.svg'
//           width={50}
//           height={50}
//         />
//       </div>
//     ),
//   },
//   {
//     title: 'Beautiful, reusable components',
//     description:
//       'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
//     large: true,
//     demo: (
//       <div className='flex items-center justify-center space-x-20'>
//         <Image
//           alt='Auth.js logo'
//           src='/svg_icons_tech_stack/python.svg'
//           width={50}
//           height={50}
//         />
//         <Image
//           alt='Prisma logo'
//           src='/svg_icons_tech_stack/django.svg'
//           width={50}
//           height={50}
//         />
//       </div>
//     ),
//   },
// ]

export default HomePage
