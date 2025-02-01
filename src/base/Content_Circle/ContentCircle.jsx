import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import profile from '../../assets/icons/profile.svg'

function ContentCircle({color , logo , onPressAction}) {
  return (
    <button className={`h-full w-full rounded-full flex justify-center items-center ${color === 'black' ? 'bg-[#1E1E1E]' : 'bg-[#E3E3E3]'} `} onClick={onPressAction}>
            <img src={logo === 'cart' ? cart : logo === 'search' ? search : profile} alt="logo" className='w-[60%] h-[60%]'/>
    </button>
  )
}

export default ContentCircle
