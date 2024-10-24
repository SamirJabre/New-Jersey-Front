import React, { useEffect, useState } from 'react'
import './Filter.css'
import dropdown from '../../Assets/icons/dropdown.svg'

function Filter() {

    const [width, setWidth] =useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
      },[])

  return width > 900 ? (
    <div className='fiter_container'>
        <div className="left_side_filter">
            <div>
                <p>Size</p>
                <img src={dropdown}/>
            </div>

            <div>
                <p>Color</p>
                <img src={dropdown}/>
            </div>

            <div>
                <p>Price</p>
                <img src={dropdown}/>
            </div>
            <div>
                <p>Sale</p>
                <img src={dropdown}/>
            </div>
        </div>

        <div className="right_side_filter">
        <div>
                <p>Sort By</p>
                <img src={dropdown}/>
            </div>
        </div>
    </div>
  ) : 
  (
    <div className='fiter_container_2'>
            <div>
                <p>Size</p>
                <img src={dropdown}/>
            </div>

            <div>
                <p>Color</p>
                <img src={dropdown}/>
            </div>

            <div>
                <p>Price</p>
                <img src={dropdown}/>
            </div>
            <div>
                <p>Sale</p>
                <img src={dropdown}/>
            </div>
        <div>
                <p>Sort By</p>
                <img src={dropdown}/>
            </div>
        
    </div>
  )
}

export default Filter
