import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Filter from '../../Components/Filter/Filter'
import Product from '../../Components/Product/Product'
import Footer from '../../Components/Footer/Footer'
import Login from '../../Components/Login/Login'

function Home() {
  return (
    <div className='Home_Container'>
        <Login/>
        <Header/>
        <Hero/>
        <Filter/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Home
