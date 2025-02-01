import logo from "../../assets/logo.png";
import ContentCircle from "../../base/Content_Circle/ContentCircle";

function HeaderDesktop() {
  return (
    <header className="w-full h-24 px-10 flex items-center justify-between">
      <div className="h-full w-[15%]">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="w-3/5 h-10 bg-[#E3E3E3] rounded-full p-1 flex justify-between items-center font-inter sm:text-xs md:text-sm xl:text-base 2xl:text-lg relative">
        <select className="h-full w-2/5 bg-white rounded-full flex justify-between items-center px-1 hover:cursor-pointer outline-none">
          <option value="" disabled selected className="text-gray-400">Categories</option>
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
          onPressAction={() => console.log("Search")}
        />
        <ContentCircle
          logo={"cart"}
          color={"black"}
          onPressAction={() => console.log("Cart")}
        />
        <ContentCircle
          logo={"Profile"}
          color={"gray"}
          onPressAction={() => console.log("Profile")}
        />
      </div>
    </header>
  );
}

export default HeaderDesktop;
