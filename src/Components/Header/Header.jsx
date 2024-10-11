import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Navbar from '../../Components/Navbar/Navbar'
import ContentCircle from '../../base/Content_Circle/ContentCircle'

function Header() {
  return (
    <header className='Home_Header'>
            <div className='Home_Logo'>
                <img src={logo} alt='logo' id='logo'/>
            </div>

            <Navbar/>

            <div className='Home_Content'>
              <ContentCircle color={'gray'} logo={'search'}/>
              <ContentCircle color={'black'} logo={'cart'}/>
              <ContentCircle color={'gray'} logo={'profile'}/>
            </div>
        </header>
  )
}

export default Header
