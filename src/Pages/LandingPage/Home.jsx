import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Filter from '../../Components/Filter/Filter'

function Home() {
  return (
    <div className='Home_Container'>
        <Header/>
        <Hero/>
        <Filter/>
    </div>
  )
}

export default Home
