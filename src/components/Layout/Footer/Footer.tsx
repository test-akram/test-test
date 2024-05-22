import Link from 'next/link'

import { FOOTER_LINKS, FOOTER_SOCIAL_MEDIA } from '@/config/links'

import NowPlaying from './NowPlaying'

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-4xl flex-col px-8 pb-8'>
      <NowPlaying />
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className='mb-10 flex flex-col items-start gap-4 pr-4'
          >
            {list.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='animated text-accent-5 transition-colors duration-300 hover:text-hong-fg'
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
        <div className='mb-10 flex flex-col items-start gap-4 pr-4'>
          {FOOTER_SOCIAL_MEDIA.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className='animated text-accent-5 transition-colors duration-300 hover:text-hong-fg'
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className='mt-20 text-sm'>
        &copy; Akram {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
