import React, { useEffect } from 'react'
import './Navbar.css'
import add from '../../assets/icons/add.svg'

function Navbar({onpress}) {


  return (
    <nav className='Home_Nav'>

                <div onClick={onpress} className='category_container'>
                    <p>Category</p>
                    <div className='category_dropdown'>
                    <img src={add} alt='show-categories' id='category_dropdown'/>
                    </div>
                </div>

                <div className='content_container'>
                    <ul className='navbar_content'>
                        <li>Products</li>
                        <li>Locate Us</li>
                        <li>Our Story</li>
                        <li>Support</li>
                    </ul>
                </div>

            </nav>
  )
}

export default Navbar
