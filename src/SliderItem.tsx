import { SliderItemProps } from './Types'

export const SliderItem = (props: SliderItemProps) => {
  const sliderItemStyle = {
    display: props.show ? 'block' : 'none',
  }

  return (
    <div style={sliderItemStyle} className="slide-container switch-animation">
      <img src={props.slide.img} alt="" />
      <div className="slide-text-group">
        <div className="slide-title">{props.slide.title}</div>
        <div className="slide-text">{props.slide.text}</div>
      </div>
    </div>
  )
}
