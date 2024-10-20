import React, { useState } from 'react'
import './ContentCircle.css'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import profile from '../../assets/icons/profile.svg'

function ContentCircle({color , logo , onpress}) {
    const icon = logo;
  return (
    <div className="circle" onClick={onpress}>
        <div className={color}>
            {
                icon === 'search'?
                <img id='circle_icon' src={search} alt='Cirlce Icon'/>
                :icon === 'cart'?
                <img id='circle_icon' src={cart} alt='Cirlce Icon'/>
                :
                <img id='circle_icon' src={profile} alt='Cirlce Icon'/>
            }
        </div>
    </div>
  )
}

export default ContentCircle
