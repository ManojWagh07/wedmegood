import React from 'react'
import FirstNav from './Component/FirstNav'
import SecondNav from './Component/SecondNav'
import './Component/index.css'
import Header from './Component/Header'
import Slider from './Component/Slider'
const Home = () => {
  return (
    <div>
        <FirstNav/>
        <SecondNav/>
        <Header/>
        <Slider/>
    </div>
  )
}

export default Home