import {
  IconBrandAzure,
  IconBrandFirebase,
  IconBrandGolang,
} from '@tabler/icons-react'
import {
  IconBook2,
  IconBrain,
  IconBrandGithub,
  IconBrandMysql,
  IconBrandTailwind,
  IconChecks,
  IconDeviceGamepad2,
  IconLink,
  IconNews,
  IconPencil,
  IconPhoto,
  IconPlant,
  IconSettings,
  IconTools,
} from '@tabler/icons-react'
import {
  IconBrandDjango,
  IconBrandNextjs,
  IconBrandPlanetscale,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandTypescript,
  IconMarkdown,
  IconPrompt,
} from '@tabler/icons-react'

const getIconByName = (name: string) => {
  switch (name) {
    case 'Prompt': {
      return IconPrompt
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
    case 'Game': {
      return IconDeviceGamepad2
    }
    case 'Plant': {
      return IconPlant
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
      return IconNews
    }
    case 'Github': {
      return IconBrandGithub
    }
    case 'Mysql': {
      return IconBrandMysql
    }
    case 'Machine learning': {
      return IconBrain
    }
    default: {
      return IconSettings
    }
  }
}
export default getIconByName
