import React from "react";

const Button = ({
  btnText,
  onClick,
  login,
  signUp,
  primaryBtn,
  secondaryBtn,
  tabBtn,
  width,
  margin,
  className,
}) => {
  const btnType = () => {
    if (login) {
      return "login-btn";
    } else if (signUp) {
      return "sign-up-btn";
    } else if (primaryBtn) {
      return "primary-btn";
    } else if (secondaryBtn) {
      return "secondary-btn";
    } else if (tabBtn) {
      return "tab-btn";
    }
  };
  return (
    <button
      style={{ width: width ? width : "auto", margin: margin ? margin : "0" }}
      className={`${btnType()} ${className}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
