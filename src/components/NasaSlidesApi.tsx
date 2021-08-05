import { Slide } from './Types'

type ApodData = {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
  copyright?: string
}

export const fetchNasaSlides = async (): Promise<Slide[]> => {
  const response = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=4Bobk2mYQPoeEgVugTAMyeRrvhwqTXXeZcIWKKZ9&start_date=2018-01-01&end_date=2018-01-20'
  )
  const data = await response.json()

  return data
    .filter((entry: ApodData) => entry.media_type === 'image')
    .map((entry: ApodData, index: number) => {
      return {
        title: entry.title,
        text: entry?.explanation.substring(
          0,
          Math.min(250, entry.explanation.length)
        ),
        img: entry.hdurl,
        id: index,
      }
    })
}
