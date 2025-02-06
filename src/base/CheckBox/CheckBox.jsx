import React from "react";

function CheckBox({ size }) {
  return (
    <label>
      <input type="checkbox" name="size" value="XS" /> {size}
    </label>
  );
}

export default CheckBox;
