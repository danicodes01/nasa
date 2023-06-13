import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios from 'axios'
import SpaceList from './components/Planets'
import Header from './components/Header'
import Planet from './models/planet'

const App = () => {
  const [planets, setPlanets] = useState<Planet[]>([])

  const searchPlanets = useCallback(async () => {

    let apiKey = process.env.REACT_APP_NASA_API_KEY
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    
    try {
      const response = await axios.get(url)
      const data = await response.data

      let refactorData: Planet[] = []

      for (let k in data) {
        refactorData.push({
          id: data.title,
          date: data.date,
          description: data.explanation,
          media: data.media_type,
          title: data.title,
          url: data.url
        })
      }
      refactorData = refactorData.slice(0, 1)

      setPlanets(refactorData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    searchPlanets()
  }, [searchPlanets])

  return (
    <div className='App'>
      <section>
        <Header />
        <SpaceList items={planets} />
      
        <div style={{ fontWeight: 'lighter', fontSize: '10px' }}>
          {process.env.REACT_APP_ME}
        </div>
      </section>
    </div>
  )
}

export default App
