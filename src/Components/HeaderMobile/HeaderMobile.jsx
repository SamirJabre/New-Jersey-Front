import React from "react";
import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search.svg";
import ContentCircle from "../../base/Content_Circle/ContentCircle";

function HeaderMobile() {
  return (
    <header className="w-screen h-16 flex justify-between items-center px-4">
      <button className="h-8 w-8 ">
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
  );
}

export default HeaderMobile;
