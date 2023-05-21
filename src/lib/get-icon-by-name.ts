import {
  IconBrandAzure,
  IconBrandFirebase,
  IconBrandGolang,
} from '@tabler/icons-react'
import {
  IconBook2,
  IconBrandTailwind,
  IconChecks,
  IconLink,
  IconPencil,
  IconPhoto,
  IconBrandGithub,
  Brain,
  DeviceGamepad2,
  Plant,
  IconBrandMysql,
  News,
  Settings2,
  IconTools,
} from '@tabler/icons-react'
import {
  IconBrandDjango,
  IconBrandNextjs,
  IconBrandPlanetscale,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandDjango,
  IconMarkdown,
  Prompt,
  IconForm,
} from '@tabler/icons-react'

const getIconByName = (name: string) => {
  switch (name) {
    
    case 'Prompt': {
      return Prompt
    }
    case 'Typescript': {
      return IconBrandTypescript
    }
    case 'PlanetScale': {
      return IconBrandPlanetscale
    }
    case 'Next.js': {
      return IconBrandNextjs
    }
    case 'Prisma': {
      return IconBrandPrisma
    }
    case 'MDX': {
      return IconMarkdown
    }
    case 'Tailwindcss': {
      return IconBrandTailwind
    }
    case 'Tools': {
      return IconTools
    }
    case 'Checks': {
      return IconChecks
    }
    case 'Book2': {
      return IconBook2
    }
    case 'Link': {
      return IconLink
    }
    case 'Pencil': {
      return IconPencil
    }
    case 'Photo': {
      return IconPhoto
    }
    case 'Game' : {
      return DeviceGamepad2
    }
    case 'Plant': {
      return Plant
    }
    case 'Firebase': {
      return IconBrandFirebase
    }
    case 'Python': {
      return IconBrandPython
    }
    case 'Django': {
      return IconBrandDjango
    }
    case 'Go': {
      return IconBrandGolang
    }
    case 'Azure': {
      return IconBrandAzure
    }
    case 'News': {
      return News
    }
    case 'Github': {
      return IconBrandGithub
    }
    case 'Mysql': {
      return IconBrandMysql
    }
    case 'Machine learning': {
      return Brain
    }
    case 'Form' : {
      return IconForm
    }
    default: {
      return Settings2
    }
  }
}

export default getIconByName
