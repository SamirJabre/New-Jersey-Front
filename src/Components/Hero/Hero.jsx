import React, { useEffect, useState } from 'react'
import './hero.css'
import one from '../../Assets/1.jpg'
import two from '../../Assets/2.jpg'
import three from '../../Assets/3.png'

function hero() {
    const [current, setCurrent] = useState(one)
    const slideshow=[one, two, three]

    useEffect(()=>{
        let i=0
        setInterval(()=>{
            i++
            if(i===slideshow.length){
                i=0
            }
            setCurrent(slideshow[i])
        }, 3000)
    },[])

  return (
    <div className='hero_section_container'>
        <div className="hero_section_left">
            <h1 >Your One-Stop Shop for Premium</h1>
            <h1>Football Jerseys and Boots</h1>
            <p>Get Started</p>
            <div className="cta_buttons">
                <button>LOG IN</button>
                <button>SIGN UP</button>
            </div>
        </div>
        <div className="hero_section_right">
            <div className="slideshow">
                <img src={current} alt="SlideShow Image"/>
            </div>
        
            <div className="images_order">
                <div className={current === one ? "order focused_image" : "order"} onClick={() => setCurrent(one)}></div>
                <div className={current === two ? "order focused_image" : "order"} onClick={() => setCurrent(two)}></div>
                <div className={current === three ? "order focused_image" : "order"} onClick={() => setCurrent(three)}></div>
            </div>

        </div> 
    </div>
  )
}

export default hero
