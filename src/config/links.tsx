import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChartBar,
  IconDeviceDesktop,
  IconFileDownload,
  IconFlame,
  IconPencil,
  IconTrophy,
  IconUserCircle,
} from '@tabler/icons-react'
import type { Route } from 'next'

type HeroLinks = {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}[]

type HeaderLinks = {
  icon: React.ReactNode
  href: Route | URL
  text: string
}[]

type FooterLinks = {
  id: number
  links: {
    href: Route | URL
    title: string
  }[]
}[]

type FooterSocialMediaLinks = {
  href: string
  title: string
}[]

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <IconUserCircle />,
    href: '/about',
    text: 'About',
  },
  {
    icon: <IconTrophy />,
    href: '/achievements',
    text: 'Achievements',
  },
  {
    icon: <IconChartBar />,
    href: '/dashboard',
    text: 'Dashboard',
  },
  {
    icon: <IconFlame />,
    href: '/projects',
    text: 'Projects',
  },

  {
    icon: <IconDeviceDesktop />,
    href: '/uses',
    text: 'Uses',
  },
  {
    icon: <IconPencil />,
    href: '/blog',
    text: 'Blog',
  },
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/about',
        title: 'About',
      },
      {
        href: '/dashboard',
        title: 'Dashboard',
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        href: '/uses',
        title: 'Uses',
      },
      {
        href: '/projects',
        title: 'Projects',
      },
      {
        href: '/design',
        title: 'Design',
      },
    ],
  },
]

export const FOOTER_SOCIAL_MEDIA: FooterSocialMediaLinks = [
  {
    href: 'https://www.facebook.com/tszhonglai.0411/',
    title: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/tszhong0411/',
    title: 'Instagram',
  },
  {
    href: 'https://github.com/tszHong0411',
    title: 'GitHub',
  },
  {
    href: 'https://www.youtube.com/@tszhong0411',
    title: 'YouTube',
  },
]

export const HERO_LINKS: HeroLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <IconBrandLinkedin size={28} />,
    href: 'https://www.linkedin.com/in/tszhong0411/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <IconBrandGithub size={28} />,
    href: 'https://github.com/tszhong0411',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <IconFileDownload size={28} />,
    href: 'https://github.com/tszhong0411',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: <IconBrandTwitter size={28} />,
    href: 'https://twitter.com/TszhongLai0411',
  },
]
