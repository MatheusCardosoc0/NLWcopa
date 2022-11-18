import { useState, useRef, useEffect } from 'react'


function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setPosition(percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [percentage])


  

  return (
    <div className='lg:w-[400px] w-full flex flex-col bg-black p-2 rounded-full'>
      <div
        className='bg-teal-500'
        style={{
          width: `${progressBarWidth}px`
        }}
      ></div>
      <div
        className='bg-teal-500'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}
      ></div>
      <input
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        className='bg-black w-full z-10'
        onChange={onChange}
      />
    </div>
  )
}

export default Slider
