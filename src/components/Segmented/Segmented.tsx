'use client'
import { useRef, useState } from 'react'

import Carousel from '@/components/Carousel/Carousel'

const Segmented = () => {
  const [selectedValue2, setSelectedValue2] = useState('complete')

  return (
    <div className='container'>
      <Carousel
        name='group-2'
        callback={(val) => setSelectedValue2(val)}
        defaultIndex={1}
        segments={[
          {
            label: 'First',
            value: 'first',
            ref: useRef(),
          },
          {
            label: 'Second',
            value: 'second',
            ref: useRef(),
          },
          {
            label: 'Third',
            value: 'third',
            ref: useRef(),
          },
        ]}
      />
      <div className='mt-8 space-y-2 sm:mt-8 sm:space-y-0  lg:mx-auto xl:mx-0 xl:max-w-none'>
        <div className='divide-y divide-zinc-600 rounded-lg border border-pink-500 bg-zinc-900 shadow-sm'>
          <div className='p-6'>
            <h2 className='text-2xl font-semibold leading-6 text-white'>
              {selectedValue2}
            </h2>
            <p className='mt-4 text-zinc-300'>{selectedValue2}</p>
            <p className='mt-8'>
              <span className='white text-5xl font-extrabold'>
                {selectedValue2}
              </span>
              <span className='text-base font-medium text-zinc-100'>
                {selectedValue2}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Segmented
