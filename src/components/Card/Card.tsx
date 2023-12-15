import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import Balancer from 'react-wrap-balancer'

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string
  description: string
  demo: ReactNode
  large?: boolean
}) {
  return (
    <div
      className={`bg-grey relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 shadow-md ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className='flex h-60 items-center justify-center'>{demo}</div>
      <div className='mx-auto max-w-md text-center'>
        <h2 className='font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal'>
          <Balancer>{title}</Balancer>
        </h2>
        <div className='prose-sm -mt-2 leading-normal text-gray-500 md:prose'>
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    {...props}
                    className='font-medium text-gray-800 underline transition-colors'
                  />
                )
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </div>
  )
}
