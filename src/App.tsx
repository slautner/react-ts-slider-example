import React, { useEffect, useState } from 'react'
import { Slider } from './Slider'
import './App.css'
import { Slide } from './Types'
import { fetchNasaSlides } from './NasaSlidesApi'

function App() {
  const [slides, setSlides] = useState<Slide[]>([])

  useEffect(() => {
    fetchNasaSlides()
      .then(nasaSlides => setSlides(nasaSlides))
      .catch(error => console.log(error))
  }, [])

  return <Slider slides={slides} />
}

export default App
