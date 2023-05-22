'use client'
import React, { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'

import Image from '@/components/MDXComponents/Image'

import { HERO_LINKS } from '@/config/links'

const Hero = () => {
  const [showAnnotation] = useState(true)

  return (
    <div className='space-y-6 md:my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <div className='space-y-4 md:max-w-lg'>
          <h1 className='text-4xl font-bold text-hong-fg'>Akrem</h1>
          <h2 className='text-lg font-medium text-accent-5'>
            ICT engineering student • Freelancer
          </h2>
          <p className='text-lg'>
            I love building tools that prioritize{' '}
            <RoughNotation type='highlight' color='blue' show={showAnnotation}>
              functionality
            </RoughNotation>
            ,{' '}
            <RoughNotation
              type='highlight'
              color='yellow'
              show={showAnnotation}
            >
              performance
            </RoughNotation>
            , and{' '}
            <RoughNotation
              type='highlight'
              color='purple'
              show={showAnnotation}
            >
              reliability
            </RoughNotation>
            . I am an ICT engineering student with over a year of experience as
            a freelancer. During this time, I have worked on various projects
            encompassing AI, full-stack development, and IoT, with a strong
            focus on Python and TypeScript. Also I love competing and solving
            challenges.
            <br />I am currently looking for a new adventure!
            <RoughNotation type='circle' color='yellow' show={showAnnotation}>
              Hire me?
            </RoughNotation>
          </p>
        </div>
        <div className='h-20 w-20 md:h-28 md:w-28'>
          <Image
            src='/static/images/avatar.png'
            width={112}
            height={112}
            alt='Akrem'
            rounded='rounded-full'
            loading='eager'
            priority
          />
        </div>
      </div>
      <div className='flex gap-6'>
        {HERO_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Hero
