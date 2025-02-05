import React, { useEffect, useState } from "react";
import dropdown from "../../assets/icons/dropdown.svg";

function FilterMobile() {

    const [showSize, setShowSize] = useState(false);

  return (
    <div className="w-[90%] h-12 rounded-xl flex justify-between items-center border border-[#b1b1b1] px-8 font-inter text-sm">
      <div className="relative h-full flex flex-col justify-between items-center">
        <div className="h-full w-fit flex justify-between items-center cursor-pointer" typeof="button" onClick={() => setShowSize(!showSize)}>
          <p className="font-inter text-base">Size</p>
          <img src={dropdown} alt="dropdown" className="w-5 h-5" />
        </div>
        <form className={`${showSize ? 'opacity-100 transform transition-opacity duration-300' : 'opacity-0 pointer-events-none'} absolute top-[105%] h-10 w-32 flex flex-col items-center justify-between bg-red-500`}>
            <label className="">
                XS <input type="radio" name="size" value="XS" />
            </label>
            <label>
                S <input type="radio" name="size" value="S" />
            </label>
        </form>
      </div>
    </div>
  );
}

export default FilterMobile;
