import React, { useState } from "react";
import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search.svg";
import ContentCircle from "../../base/Content_Circle/ContentCircle";

function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className="w-screen h-16 flex justify-between items-center px-4">
        <button className="h-8 w-8" onClick={toggleSidebar}>
          <img src={menu} alt="Menu Icon" className="w-full h-full" />
        </button>

        <div className="w-2/3 h-8 bg-white flex justify-between items-center rounded-full border border-black">
          <input
            type="text"
            placeholder="Search for products"
            className="h-full w-5/6 rounded-l-full text-sm pl-3 outline-none"
          />
          <button
            className="h-full w-1/6 rounded-r-full flex justify-center items-center"
            onClick={() => console.log("search")}
          >
            <img src={search} alt="Search Icon" />
          </button>
        </div>

        <div className="h-8 w-8">
          <ContentCircle
            logo={"cart"}
            color={"black"}
            onPressAction={() => console.log("Cart")}
          />
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-3/5 bg-black shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col items-center py-8 px-4`}
      >
        <ul className="px-2 w-full h-fit flex flex-col justify-center items-center text-white font-sans">
          <li className="mb-5 w-full text-center border-b h-10"><button>Home</button></li>
          <li className="mb-5 w-full text-center border-b h-10"><button>Categories</button></li>
          <li className="mb-5 w-full text-center border-b h-10"><button>Locate Us</button></li>
          <li className="mb-5 w-full text-center border-b h-10"><button>Our Story</button></li>
          <li className="mb-5 w-full text-center border-b h-10"><button>Contact Us</button></li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default HeaderMobile;
