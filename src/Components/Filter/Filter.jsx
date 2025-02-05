import React, { useEffect, useState } from "react";
import dropdown from "../../assets/icons/dropdown.svg";
import "./Filter.css";

function Filter() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-5/6 h-12 m-5 rounded-2xl flex justify-start items-center border border-[#b1b1b1] px-2">
      <select className="h-full w-14 px-2 bg-transparent">
        <option defaultChecked={true}>Size</option>
        <option>XS</option>
        <option>SM</option>
        <option>MD</option>
        <option>LG</option>
        <option>XL</option>
        <option>2XL</option>
      </select>

      <div
        className="h-full w-fit flex justify-center items-center"
        typeof="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <label>Price</label>
        <img src={dropdown} className="scale-75" />
      </div>

      <select className="h-full w-14 px-2 bg-red-500">
        <option defaultChecked={true}>Sale</option>
        <option>50% Sale</option>
        <option>75% Sale</option>
      </select>


      <select className="h-full w-fit px-2 bg-transparent">
        <option defaultChecked={true}>Product Type</option>
        <option>Men</option>
        <option>Women</option>
        <option>Adidas</option>
        <option>Nike</option>
        <option>Reebok</option>
        <option>Puma</option>
      </select>

    </div>
  );
}

export default Filter;
