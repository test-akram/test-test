import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  logo: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://akrem.me'
      : 'http://localhost:3000',
  logo: 'https://akrem.me/static/images/avatar.png',
  title: 'Akrem',
  name: 'Akrem',
<<<<<<< HEAD
  keywords: ['Akram ben ghanem', 'Next.js', 'React', 'TypeScript', 'Node.js'],
=======
  keywords: ['akrem', 'Stage Tunisie', 'React', 'TypeScript'],
>>>>>>> origin/main
  titleTemplate: '- Akrem',
  description: 'Akrem • ICT engineering student • Freelancer',
  githubUsername: 'BarriBarri20',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicon/favicon-32x32.png',
    },
  ],
}
