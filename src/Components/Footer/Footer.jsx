import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.png'

function Footer() {
  return (
    <div className='footer_container'>

      <div className="footer_top">
        <div><img id='footer_logo' src={logo} alt="Website Logo" /></div>

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
        <div className="footer_logos"></div>
        <div className="copywrite_text">
          <p>&copy;2024 Copywrite, All rights reserved.</p>
        </div>
      </div>
      
    </div>
  )
}


export default Footer
