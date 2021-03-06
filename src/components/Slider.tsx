import { SliderProps } from './Types'
import { useState } from 'react'
import { SliderItem } from './SliderItem'
import '../css/Slider.css'

export const Slider = (props: SliderProps) => {
  const [position, setPosition] = useState(0)

  const isLastElement = () => props.slides.length - 1 < position + 1
  const isFirstElement = () => position === 0

  return (
    <section className="slider">
      <span
        className="slider__next-button"
        onClick={() => {
          if (isLastElement()) {
            // set to first
            setPosition(0)
          } else {
            // set to next
            setPosition(position + 1)
          }
        }}
      >
        &#9654;
      </span>

      <span
        className="slider__prev-button"
        onClick={() => {
          if (isFirstElement()) {
            // set to last
            setPosition(props.slides.length - 1)
          } else {
            // set to previous
            setPosition(position - 1)
          }
        }}
      >
        &#9664;
      </span>

      {props.slides.map((slide, index) => (
        <SliderItem key={slide.id} slide={slide} show={index === position} />
      ))}
    </section>
  )
}
