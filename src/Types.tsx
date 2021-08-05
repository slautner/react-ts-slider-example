export type Slide = {
  title: string
  text: string
  img: string
  id: number
}

export type ApodData = {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
  copyright?: string
}

export type SliderProps = {
  slides: Slide[]
}

export type SliderItemProps = {
  slide: Slide
  show: boolean
}
