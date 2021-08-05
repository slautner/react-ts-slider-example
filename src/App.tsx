import React, { useEffect, useState } from 'react'
import { Slider } from './Slider'
import './App.css'
import { ApodData, Slide } from './Types'

function App() {
  const [slides, setSlides] = useState<Slide[]>([])

  useEffect(() => {
    loadData()
      .then(result => setSlides(result))
      .catch(error => console.log(error))
  }, [])

  const loadData = async () => {
    const response = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=4Bobk2mYQPoeEgVugTAMyeRrvhwqTXXeZcIWKKZ9&start_date=2018-01-01&end_date=2018-01-20'
    )
    const data = await response.json()

    const slides: Slide[] = data
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
    return slides
  }

  return <Slider slides={slides} />
}

export default App
