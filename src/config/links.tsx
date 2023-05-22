import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileDownload,
  IconFlame,
  IconPencil,
  IconPhone,
  IconStack,
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
    icon: <IconFlame />,
    href: '/projects',
    text: 'Projects',
  },

  {
    icon: <IconStack />,
    href: '/stack',
    text: 'Stack',
  },
  {
    icon: <IconPencil />,
    href: '/blog',
    text: 'Blog',
  },
  {
    icon: <IconPhone />,
    href: '/contact',
    text: 'Contact',
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
        href: '/contact',
        title: 'Contact',
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        href: '/achievements',
        title: 'Achievements',
      },

      {
        href: '/stack',
        title: 'Stack',
      },
      {
        href: '/projects',
        title: 'Projects',
      },
    ],
  },
]

export const FOOTER_SOCIAL_MEDIA: FooterSocialMediaLinks = [
  {
    href: 'https://www.linkedin.com/in/akram-ben-ghanem/',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/BarriBarri20',
    title: 'GitHub',
  },
  {
    href: 'https://stackoverflow.com/users/15809896/akram-ben-ghanem',
    title: 'Stackoverflow',
  },
]

export const HERO_LINKS: HeroLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <IconBrandLinkedin size={28} />,
    href: 'https://www.linkedin.com/in/akram-ben-ghanem/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <IconBrandGithub size={28} />,
    href: 'https://github.com/BarriBarri20',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: <IconBrandTwitter size={28} />,
    href: 'https://twitter.com/akram-ben-ghanem',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <IconFileDownload size={28} />,
    href: 'https://drive.google.com/file/d/1DgzqVRTnRRMRmbehoWzjmao2no1mxB2_/view?usp=share_link',
  },
]
