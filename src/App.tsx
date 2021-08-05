import React, { useEffect, useState } from 'react'
import { Slider } from './components/Slider'
import './css/App.css'
import { Slide } from './components/Types'
import { fetchNasaSlides } from './components/NasaSlidesApi'

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
