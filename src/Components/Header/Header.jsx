import {useState,useEffect} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Navbar from '../../Components/Navbar/Navbar'
import ContentCircle from '../../base/Content_Circle/ContentCircle'

function Header() {

  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  },[])
  
  return width > 1200 ? (
    <header className='Home_Header'>
            <div className='Home_Logo'>
                <img src={logo} alt='logo' id='logo'/>
            </div>

            <Navbar/>

            <div className='Home_Content'>
              <ContentCircle color={'gray'} logo={'search'}/>
              <ContentCircle color={'black'} logo={'cart'}/>
              <ContentCircle color={'gray'} logo={'profile'}/>
            </div>
    </header>
  ) :
  (
    <header>
      <h1>Hello World</h1>
    </header>
  )

}

export default Header
