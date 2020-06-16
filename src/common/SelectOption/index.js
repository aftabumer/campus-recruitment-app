import React from "react";

const SelectOption = ({ onChange, value, SelectOptions }) => {
  return (
    <select
      className="select-option-container"
      onChange={onChange}
      value={value}
    >
      {SelectOptions &&
        SelectOptions.map((item) => (
          <option value={item["key"]}>{item["value"]}</option>
        ))}
    </select>
  );
};

export default SelectOption;
