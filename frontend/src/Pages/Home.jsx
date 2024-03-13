import React from 'react'
import Navbar from '../Elements/Navbar'
import Weather from './Weather'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='container'>
    
      <Weather/>
    </div>
    </div>
  )
}

export default Home

