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
    backgroundImage: theme.fn.gradient({ from: 'white', to: 'black' }),
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

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: rem(16),
  },

  containerWithBorder: {
    border: `1px solid ${theme.colors.gold}`,
    padding: rem(16),
  },
}))

const Segmented = () => {
  const [selectedValue2, setSelectedValue2] = useState('All')
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      <SegmentedControl
        radius='xl'
        size='md'
        data={['AI/ML', 'C++', 'Rust', 'TypeScript']}
        classNames={classes}
        value={selectedValue2}
        onChange={setSelectedValue2}
      />

      <div className='px-12 py-8 text-white md:px-16 md:py-12 lg:px-24 lg:py-16 xl:px-32 xl:py-20'>
        <h2 className='mb-4 text-4xl font-bold'>
          {selectedValue2 === 'ALL' && 'test'}
          {selectedValue2 === 'AI/ML' && 'AI/t b'}
          {selectedValue2 === 'C++' && 'C++ content'}
          {selectedValue2 === 'Rust' && 'Rust content'}
          {selectedValue2 === 'TypeScript' && 'TypeScript content'}
        </h2>
        <div className='space-y-3'>
          <div key='boo' className='space-y-2'>
            <p className='text-xl font-semibold'>jjjajja</p>
            <p className='text-gray-500'>tunisia</p>
            <p className='text-lg'>
              fa,kl,efakle,fekfl,valuevca ca,kcced,canonicalcadlk, ceae,kl
              ceae,kl
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Segmented
