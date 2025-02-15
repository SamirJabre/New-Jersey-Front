import React from 'react'

function Input({placeholder , name , type}) {
  return (
    <input  className='h-12 w-full rounded-[3px] p-2 font-inter bg-[#3E3E3E] placeholder-[#9F9F9F] placeholder-opacity-35 outline-none text-white text-base font-light' type={type} name={name} placeholder={placeholder}/>
  )
}

export default Input
