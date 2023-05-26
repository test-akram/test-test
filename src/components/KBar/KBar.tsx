'use client'

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconFileDownload,
  IconLink,
} from '@tabler/icons-react'
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from 'kbar'
import { toast } from 'react-hot-toast'

import Results from './Results'

import { WithChildren } from '@/types'

type KBarProps = WithChildren

const KBar = (props: KBarProps) => {
  const { children } = props

  const actions: Action[] = [
    {
      id: 'copy-link',
      name: 'Copy Link',
      keywords: 'copy link',
      section: 'General',
      perform: async () => {
        if (!navigator?.clipboard) {
          toast.error('Access to clipboard rejected!')
        }

        try {
          await navigator.clipboard.writeText(window.location.href)
          toast.success(
            <div className='flex flex-col'>
              <div>Copied</div>
              <div className='text-sm text-accent-5'>
                You can now share it with anyone.
              </div>
            </div>
          )
        } catch {
          toast.error('Failed to copy!')
        }
      },
      icon: <IconLink />,
    },

    {
      id: 'source-code',
      name: 'Source code',
      keywords: 'source code github',
      section: 'General',
      perform: () =>
        window.open('https://github.com/BarriBarri20', '_blank'),
      icon: <IconCode />,
    },
    {
      id: 'github',
      name: 'GitHub',
      keywords: 'github',
      section: 'Social',
      perform: () => window.open('https://github.com/BarriBarri20', '_blank'),
      icon: <IconBrandGithub />,
    },
    {
      id: 'resume',
      name: 'Resume',
      keywords: 'resume / CV',
      section: 'General',
      perform: () =>
        window.open(
          'https://drive.google.com/file/d/1VhW7OWo1gH74U3fYxks7LKZTvEB_XjaD/view?usp=share_link',
          '_blank'
        ),
      icon: <IconFileDownload />,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      keywords: 'linkedin / linkedin',
      section: 'Social',
      perform: () =>
        window.open('https://linkedin/in/akram-ben-ghanem', '_blank'),
      icon: <IconBrandLinkedin />,
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className='z-50 bg-black/10 backdrop-blur'>
            <KBarAnimator className='w-full max-w-lg rounded-lg border border-accent-2 bg-accent-1'>
              <KBarSearch
                className='w-full bg-transparent px-6 py-3 outline-none'
                defaultPlaceholder='Type command or search'
              />
              <Results />
              <div className='h-4'></div>
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  )
}

export default KBar
