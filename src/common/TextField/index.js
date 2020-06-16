import React from "react";

const TextField = ({
  className,
  textFieldClass,
  value,
  onChange,
  type,
  disabled,
  placeholder,
}) => {
  return (
    <div className={className}>
      <input
        className={`${"text-filed"} ${textFieldClass} `}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
