import React from 'react'
import logo from '../../assets/logo.png'
import plus from '../../assets/icons/add.svg'
import ContentCircle from '../../base/Content_Circle/ContentCircle'

function HeaderDesktop() {
  return (
    <header className='w-full h-24 px-10 flex items-center justify-between'>

      <div className="h-full w-[15%]">
        <img src={logo} alt="Logo" className='w-full h-full object-contain'/>
      </div>

      <div className="w-3/5 h-10 bg-[#E3E3E3] rounded-full p-1 flex justify-between items-center font-inter sm:text-xs md:text-sm xl:text-base 2xl:text-lg">
        <div className="h-full w-1/3 xl:w-2/4 2xl:w-2/5 bg-white rounded-full flex justify-between items-center px-2 hover:cursor-pointer" onClick={()=>console.log('Category')}>
          <p>Category</p>
          <button className='h-fit w-fit flex justify-center items-center'>
            <img src={plus} alt="Display Categories Icon" className='scale-75'/>
          </button>
        </div>
        <div className="h-full w-2/3 xl:2/4 2xl:w-3/5 flex justify-around items-center">
          <a href="" className='hover:scale-105 transition-all duration-150'>Home</a>
          <a href="" className='hover:scale-105 transition-all duration-150'>Locate Us</a>
          <a href="" className='hover:scale-105 transition-all duration-150'>About</a>
          <a href="" className='hover:scale-105 transition-all duration-150'>Contact Us</a>
        </div>
      </div>


      <div className="h-full w-[15%] flex justify-between lg:justify-evenly items-center">
        <ContentCircle logo={'search'} color={'gray'} onPressAction={()=>console.log('Search')}/>
        <ContentCircle logo={'cart'} color={'black'} onPressAction={()=>console.log('Cart')}/>
        <ContentCircle logo={'Profile'} color={'gray'} onPressAction={()=>console.log('Profile')}/>
      </div>

    </header>
  )
}

export default HeaderDesktop