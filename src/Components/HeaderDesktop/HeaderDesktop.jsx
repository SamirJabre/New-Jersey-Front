import { useState } from "react";
import logo from "../../assets/logo.png";
import ContentCircle from "../../base/Content_Circle/ContentCircle";

function HeaderDesktop() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="w-full h-24 px-10 flex items-center justify-between">
      <div className="h-full w-[15%]">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="w-3/5 h-10 bg-[#E3E3E3] rounded-full p-1 flex justify-between items-center font-inter sm:text-xs md:text-sm xl:text-base 2xl:text-lg relative">
        <select className="h-full w-2/5 bg-white rounded-full flex justify-between items-center px-1 hover:cursor-pointer outline-none">
          <option value="Categories" className="text-gray-400">
            Categories
          </option>
          <option value="All">All</option>
          <option value="football_jerseys">Football Jerseys</option>
          <option value="basketball_jerseys">Basketball Jerseys</option>
          <option value="running_shoes">Running Shoes</option>
          <option value="sports_equipment">Sports Equipment</option>
          <option value="accessories">Accessories</option>
        </select>

        <div className="h-full w-3/5 flex justify-around items-center">
          <a href="" className="hover:scale-105 transition-all duration-150">
            Home
          </a>
          <a href="" className="hover:scale-105 transition-all duration-150">
            Locate Us
          </a>
          <a href="" className="hover:scale-105 transition-all duration-150">
            About
          </a>
          <a href="" className="hover:scale-105 transition-all duration-150">
            Contact Us
          </a>
        </div>
      </div>

      <div className="h-full w-[15%] flex justify-between lg:justify-evenly items-center">
        <ContentCircle
          logo={"search"}
          color={"gray"}
          onPressAction={handleSearch}
        />
        <ContentCircle logo={"cart"} color={"black"} />
        <ContentCircle logo={"Profile"} color={"gray"} />
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-screen flex justify-center items-start pt-24 transition-opacity duration-300 ease-in-out ${
          isSearchVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <input
          type="text"
          placeholder="Search for products"
          className="w-2/5 h-12 rounded-full px-5 z-50 font-inter md:text-xs lg:text-sm xl:text-base 2xl:text-lg outline-none"
        />
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleSearch}
        ></div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
