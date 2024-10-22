import React from 'react'
import './Filter.css'
import dropdown from '../../Assets/icons/dropdown.svg'

function Filter() {
  return (
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
  )
}

export default Filter
