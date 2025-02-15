import React from 'react'

function Name({placeholder , name}) {
  return (
    <input className='h-full w-[49%] rounded-[3px] p-2 font-inter bg-[#3E3E3E] placeholder-[#9F9F9F] placeholder-opacity-35 outline-none text-white text-base font-light' type="text" name={name} placeholder={placeholder}/>
  )
}

export default Name
