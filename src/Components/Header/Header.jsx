import {useState,useEffect} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Navbar from '../../Components/Navbar/Navbar'
import ContentCircle from '../../base/Content_Circle/ContentCircle'
import search from '../../assets/icons/search.svg'
import menu from '../../assets/icons/menu.svg'
import close from '../../assets/icons/close.svg'

function Header() {

  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  },[])

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };
  const toggleSearch = () => {
    console.log('clicked');
    setIsSearchVisible(!isSearchVisible);
  };
  
  return width > 1200 ? (
    <header className='Home_Header'>
            <div className='Home_Logo'>
                <img src={logo} alt='logo' id='logo'/>
            </div>

            <Navbar/>

            {isSearchVisible && (
        <div className="search_container visible">
          <input type="text" />
          <button onClick={toggleSearch}><img src={close} alt='Close Search'/></button>
        </div>
      )}
      
            

            <div className='Home_Content'>
              <ContentCircle color={'gray'} logo={'search'} onpress={toggleSearch}/>
              <ContentCircle color={'black'} logo={'cart'}/>
              <ContentCircle color={'gray'} logo={'profile'}/>
            </div>
    </header>
  ) :
  (
    <header className='Home_Header_2'>
      <div className='menu'>
        <button id='menu_btn' onClick={toggleSideNav}>
          <img src={menu} alt='Menu Icon'/>
        </button>
      </div>

      <div className={`side_navigation_bar ${isSideNavVisible ? 'visible' : ''}`}>
        
        <div className="left_side_nav">
          <ul>
            <li onClick={()=>console.log('clicked')}>Categories</li>
            <li>All Products</li>
            <li>Locate Us</li>
            <li>Out Story</li>
            <li>Support</li>
          </ul>
        </div>



        <div className="right_side_nav">
          <button id='close_btn' onClick={toggleSideNav}>
            <img src={close} alt='Close Icon'/>
          </button>
          </div>
      </div>

      <div className="search_bar_2">
        <input type="text" placeholder="Search for products, brands and more" id="search_2"/>
        <button id='search_btn_2'><img src={search} alt="Search Icon"/></button>
      </div>
      <div className='Home_Content_2'>
        <ContentCircle color={'black'} logo={'cart'}/>
      </div>
    </header>
  )

}

export default Header
