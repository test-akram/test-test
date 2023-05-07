'use client'
import { createStyles, rem, SegmentedControl } from '@mantine/core'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: 'pink', to: 'orange' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}))

const Segmented = () => {
  const [selectedValue2, setSelectedValue2] = useState('complete')
  const { classes } = useStyles()
  return (
    <div className='container'>
      <SegmentedControl
        radius='xl'
        size='md'
        data={['All', 'AI/ML', 'C++', 'Rust', 'TypeScript']}
        classNames={classes}
        value={selectedValue2}
        onChange={setSelectedValue2}
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
                {selectedValue2 === 'All' && 'All content'}
                {selectedValue2 === 'AI/ML' && 'AI/ML content'}
                {selectedValue2 === 'C++' && 'C++ content'}
                {selectedValue2 === 'Rust' && 'Rust content'}
                {selectedValue2 === 'TypeScript' && 'TypeScript content'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Segmented
