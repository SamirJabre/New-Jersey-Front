import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Navbar from "../../Components/Navbar/Navbar";
import ContentCircle from "../../base/Content_Circle/ContentCircle";
import search from "../../assets/icons/search.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import forward from "../../assets/icons/forward.svg";

function Header() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCatergoriesVisible, setIsCatergoriesVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const toggleCategories = () => {
    setIsCatergoriesVisible(!isCatergoriesVisible);
  };

  return (
    <header className="w-screen h-16 px-3 flex justify-between items-center">
      <button className="w-8 h-8" onClick={toggleSideNav}>
        <img src={menu} alt="Menu Icon" className="w-full h-full" />
      </button>

      <div
        className={`${
          isSideNavVisible
            ? "h-screen w-full bg-red-500 fixed top-0 left-0 flex justify-between items-center"
            : "hidden"
        } `}
      >
        <div className="h-full w-1/2 bg-blue-500">
        
        </div>



        <div className="h-full w-1/2 bg-yellow-500">
        </div>


        </div>

      <div className="w-4/6 h-8 flex justify-between items-center rounded-full border border-black">
        <input
          type="text"
          placeholder="Search for products and more"
          className="w-11/12 h-full px-2 text-xs rounded-l-full outline-none"
        />
        <button className="w-2/12 h-full flex justify-center items-center">
          <img src={search} alt="Search Icon" />
        </button>
      </div>

      <div className="w-8 h-8">
        <ContentCircle color={"black"} logo={"cart"} />
      </div>
    </header>
  );
  //return width > 1200 ? (
  //   <header className='Home_Header'>
  //           <div className='Home_Logo'>
  //               <img src={logo} alt='logo' id='logo'/>
  //           </div>

  //           <Navbar onpress={toggleCategories}/>

  //           {isCatergoriesVisible &&
  //           <div className="categories_container visible">
  //             <ul>
  //               <li><button>Football Jerseys</button><div className="forward_img"><img src={forward} alt="Forward Icon" /></div></li>
  //               <li><button>Football Balls</button><div className="forward_img"><img src={forward} alt="Forward Icon" /></div></li>
  //               <li><button>Football Accessories</button><div className="forward_img"><img src={forward} alt="Forward Icon" /></div></li>
  //             </ul>
  //           </div>
  //           }

  //           {isSearchVisible && (
  //       <div className="search_container visible">
  //         <input type="text" />
  //         <button onClick={toggleSearch}><img src={close} alt='Close Search'/></button>
  //       </div>
  //     )}

  //           <div className='Home_Content'>
  //             <ContentCircle color={'gray'} logo={'search'} onpress={toggleSearch}/>
  //             <ContentCircle color={'black'} logo={'cart'}/>
  //             <ContentCircle color={'gray'} logo={'profile'}/>
  //           </div>
  //   </header>
  // ) :
  // (
  //   <header className='Home_Header_2'>
  //     <div className='menu'>
  //       <button id='menu_btn' onClick={toggleSideNav}>
  //         <img src={menu} alt='Menu Icon'/>
  //       </button>
  //     </div>

  //     <div className={`side_navigation_bar ${isSideNavVisible ? 'visible' : ''}`}>

  //       <div className="left_side_nav">
  //         <ul>
  //           <li onClick={()=>console.log('clicked')}>Categories</li>
  //           <li>All Products</li>
  //           <li>Locate Us</li>
  //           <li>Out Story</li>
  //           <li>Support</li>
  //         </ul>
  //       </div>

  //       <div className="right_side_nav">
  //         <button id='close_btn' onClick={toggleSideNav}>
  //           <img src={close} alt='Close Icon'/>
  //         </button>
  //         </div>
  //     </div>

  //     <div className="search_bar_2">
  //       <input type="text" placeholder="Search for products, brands and more" id="search_2"/>
  //       <button id='search_btn_2'><img src={search} alt="Search Icon"/></button>
  //     </div>
  //     <div className='Home_Content_2'>
  //       <ContentCircle color={'black'} logo={'cart'}/>
  //     </div>
  //   </header>
  // )
}

export default Header;
