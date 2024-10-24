import React from 'react'
import './Footer.css'
import logo_white from '../../Assets/logo_white.png'
import facebook from '../../Assets/icons/facebook.png'
import instagram from '../../Assets/icons/instagram.png'
import x from '../../Assets/icons/x.png'
import youtube from '../../Assets/icons/youtube.png'

function Footer() {
  return (
    <div className='footer_container'>

      <div className="footer_top">
        <div><img id='footer_logo' src={logo_white} alt="Website Logo" /></div>

        <div>
          <ul>
            <li>WEEKLY THEMES</li>
            <li>PRE-SALE</li>
            <li>SUBMIT A TICKET</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>SERVICES</li>
            <li>FIND US</li>
            <li>ABOUT</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>SUPPORT</li>
            <li>CONTACT US</li>
            <li>CHUPAPI MUNANIO</li>
          </ul>
        </div>
      </div>

      <div className="footer_middle"></div>

      <div className="footer_bottom">

        <div className="footer_logos">
          <img src={facebook} alt="Facebook Icon" />
          <img src={instagram} alt="Instagram Icon" />
          <img src={x} alt="X Icon" />
          <img src={youtube} alt="Youtube Icon" />
        </div>

        <div className="copywrite_text">
          <p>&copy;2024 Copywrite, All rights reserved.</p>
        </div>
      </div>
      
    </div>
  )
}


export default Footer
