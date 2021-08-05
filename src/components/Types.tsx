export type Slide = {
  title: string
  text: string
  img: string
  id: number
}

export type SliderProps = {
  slides: Slide[]
}

export type SliderItemProps = {
  slide: Slide
  show: boolean
}
