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
    backgroundImage: theme.fn.gradient({ from: 'blue', to: 'purple' }),
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

  content: {
    marginTop: rem(8),
    width: '100%',
    maxWidth: rem(480),
    backgroundColor: theme.colors.zinc,
    border: `1px solid ${theme.colors.pink}`,
    borderRadius: rem(8),
    boxShadow: theme.shadows.sm,
  },

  title: {
    color: theme.colors.white,
    fontSize: rem(32),
    fontWeight: 700,
    lineHeight: rem(40),
    marginBottom: rem(16),
  },

  text: {
    color: theme.colors.zinc,
    fontSize: rem(16),
    lineHeight: rem(24),
    marginBottom: rem(24),
  },

  highlight: {
    color: theme.colors.white,
    fontSize: rem(64),
    fontWeight: 900,
    lineHeight: rem(80),
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

      <div className='border-4 border-white bg-gradient-to-r from-purple-400 to-pink-500 px-12 py-8 text-white md:px-16 md:py-12 lg:px-24 lg:py-16 xl:px-32 xl:py-20'>
        <h2 className='mb-4 text-4xl font-bold'>{selectedValue2}</h2>
        <p className='mb-6 text-lg'>
          {selectedValue2 === 'AI/ML' && 'AI/ML content'}
          {selectedValue2 === 'C++' && 'C++ content'}
          {selectedValue2 === 'Rust' && 'Rust content'}
          {selectedValue2 === 'TypeScript' && 'TypeScript content'}
        </p>
        <p className='rounded-full bg-white px-4 py-2 font-bold text-purple-500 transition duration-300 hover:bg-purple-500 hover:text-white'>
          {selectedValue2}
        </p>
      </div>
    </div>
  )
}

export default Segmented
