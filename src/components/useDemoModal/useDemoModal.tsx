import Image from 'next/image'
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'

import Modal from '@/components/Modal/Modal'

const DemoModel = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean
  setShowDemoModal: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className='w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl'>
        <div className='flex flex-col items-center justify-center  bg-white px-4 py-6 pt-8 text-center md:px-16'>
          <a href='/'>
            <Image
              src='/static/favicon/apple-touch-icon.png'
              alt='Precedent Logo'
              className='h-10 w-10 rounded-full'
              width={20}
              height={20}
            />
          </a>
          {/*          <h3 className='font-display text-2xl font-bold'>Subscribe!</h3>*/}
          <p className='text-sm text-gray-500'>Coming Soon next month!</p>
          {/* </p> */}
          {/*          <form onSubmit={onSubmit} target="_blank">

          <input className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' placeholder='Enter your email' style={{ color: 'blue' }}/>

            <button className='w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200'
    type= "submit"
  >
    Subscribe
  </button>

          </form>*/}
        </div>
      </div>
    </Modal>
  )
}

export default function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false)

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModel
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    )
  }, [showDemoModal, setShowDemoModal])

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback]
  )
}
