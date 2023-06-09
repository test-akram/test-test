'use client'

import clsx from 'clsx'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import React from 'react'

type ImageProps = {
  rounded?: string
} & NextImageProps

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props
  const [isLoading, setLoading] = React.useState(true)

  return (
    <div
      className={clsx(
        'overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        rounded
      )}
    >
      <NextImage
        className={clsx(
          'shadow-lg duration-700 ease-in-out',
          {
            ['scale-[1.02] blur-xl grayscale']: isLoading,
          },
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading='lazy'
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  )
}
export default Image
