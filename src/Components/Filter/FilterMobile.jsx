  import React, { useEffect, useState } from "react";
  import dropdown from "../../assets/icons/dropdown.svg";

  function FilterMobile() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [price, setPrice] = useState(50);

    return (
      <div className="w-[90%] h-10 rounded-xl flex justify-between items-center border border-[#b1b1b1] px-2 font-inter text-sm my-5">
        <select className="h-full w-fit select-none outline-none bg-transparent">
          <option defaultChecked={true}>Size</option>
          <option>XS</option>
          <option>SM</option>
          <option>MD</option>
          <option>LG</option>
          <option>XL</option>
          <option>2XL</option>
        </select>

        <div className="relative h-full outline-none select-none flex flex-col justify-between items-center">
          <div
            className="h-full w-fit flex justify-center items-center"
            typeof="button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <label>Price</label>
            <img src={dropdown} className="scale-75" />
          </div>

          {showDropdown && (
            <div className="absolute top-[105%] bg-white w-fit h-14 border rounded-2xl border-[#b1b1b1] flex px-2 justify-center items-center">
              <label>0$</label>
              <input type="range" defaultValue={50} onChange={(e)=>setPrice(e.target.value)} className="mx-2 "/>
              <label>{price}$</label>
            </div>
          )}
        </div>

        <select className="h-full w-fit bg-transparent outline-none select-none">
          <option defaultChecked={true}>Sale</option>
          <option>50%</option>
          <option>75%</option>
        </select>

        <select className="h-full w-fit bg-transparent outline-none select-none">
          <option defaultChecked={true}>Sort By</option>
          <option>Asc</option>
          <option>Desc</option>
        </select>
      </div>
    );
  }

  export default FilterMobile;
