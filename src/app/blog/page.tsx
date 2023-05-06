'use client'
import { useEffect } from 'react'

import useDemoModal from '@/components/useDemoModal/useDemoModal'

const BlogPage = () => {
  const { DemoModal, setShowDemoModal } = useDemoModal()

  useEffect(() => {
    setShowDemoModal(true)
  })

  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
      {1 && <DemoModal />}
    </div>
  )
}

export default BlogPage
