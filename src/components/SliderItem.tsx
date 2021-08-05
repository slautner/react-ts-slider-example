import { SliderItemProps } from './Types'
import '../css/SliderItem.css'

export const SliderItem = (props: SliderItemProps) => {
  const sliderItemStyle = {
    display: props.show ? 'block' : 'none',
  }

  return (
    <section
      style={sliderItemStyle}
      className="slider-item__container slider-item__switch-animation"
    >
      <img src={props.slide.img} alt="" />
      <div className="slider-item__group">
        <div className="slider-item__title">{props.slide.title}</div>
        <div className="slider-item__text">{props.slide.text}</div>
      </div>
    </section>
  )
}
