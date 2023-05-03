import { allPages, allProjects } from 'contentlayer/generated'

import { site } from '@/config/site'

const sitemap = async () => {
  const routes = [
    '',
    '/projects',
    '/dashboard',
    ...allPages.map((page) => `/${page.slug}`),
    ...allProjects.map((project) => `/projects/${project.slug}`),
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}

export default sitemap
