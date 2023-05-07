'use client'

import { useEffect, useRef, useState } from 'react'
// import style from 'styled-jsx/style'

interface Segment {
  label: string
  value: string
  ref: React.MutableRefObject<HTMLDivElement | undefined>
}

interface CarouselProps {
  name: string
  segments: Segment[]
  callback: (value: string, index: number) => void
  defaultIndex?: number
  // controlRef: React.MutableRefObject<HTMLDivElement>
}

const Carousel: React.FC<CarouselProps> = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  // controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const componentReady = useRef<boolean>(false)

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true
  }, [])

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref
    if (!activeSegmentRef.current) return
  }, [activeIndex, callback, segments])

  const onInputChange = (value: string, index: number) => {
    setActiveIndex(index)
    callback(value, index)
  }

  return (
    <div className='controls-container flex flex-wrap'>
      <div className={`controls ${componentReady.current ? 'ready' : 'idle'}`}>
        {segments?.length &&
          segments.map((item, i) => (
            <div
              key={item.value}
              className={`segment ${
                i === activeIndex ? 'active' : 'inactive'
              } flex-row`}
            >
              <input
                type='radio'
                value={item.value}
                id={item.label}
                name={name}
                onChange={() => onInputChange(item.value, i)}
                checked={i === activeIndex}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Carousel
