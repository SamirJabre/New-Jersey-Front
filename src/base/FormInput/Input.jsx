import React from 'react'
import './Input.css'

function Input({placeholder , name , type}) {
  return (
    <input id='form_input' type={type} name={name} placeholder={placeholder}/>
  )
}

export default Input
