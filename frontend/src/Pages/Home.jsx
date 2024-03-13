import React from 'react'
import Weather, { CurrentLocation } from './Weather'
import './Weather.css'

const Home = () => {
  return (
    <div className='container'>
      <Weather/>
    </div>
  )
}

export default Home
