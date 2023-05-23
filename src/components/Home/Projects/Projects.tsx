import { IconArrowRight } from '@tabler/icons-react'
import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

import getIconByName from '@/lib/get-icon-by-name'

const Projects = () => {
  return (
    <div className='my-6 flex flex-col'>
      <h2 className='mb-8 text-3xl font-bold'>Projects</h2>
      <div className='flex flex-col gap-8'>
        {allProjects.slice(0, 3).map((project) => {
          const { _id, icon, name, description, slug } = project
          const Icon = getIconByName(icon)

          return (
            <Link
              key={_id}
              href={`/projects/${slug}`}
              className='hover:border-accent-12 flex w-full flex-1 items-center justify-start rounded-lg border border-accent-2 p-4 transition-colors duration-150 sm:px-6'
            >
              <Icon size={48} />
              <div className='px-4'>
                <div>{name}</div>
                <p>{description}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <div className='flex'>
        <Link
          href='/projects'
          className='group my-8 flex items-center gap-4 text-lg font-medium'
        >
          <span>All Projects</span>
          <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  )
}

export default Projects
