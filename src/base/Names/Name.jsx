import React from 'react'
import './Name.css'

function Name({placeholder , name}) {
  return (
    <input id='name_input' type="text" name={name} placeholder={placeholder}/>
  )
}

export default Name
