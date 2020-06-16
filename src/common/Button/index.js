import React from "react";

const Button = ({
  btnText,
  onClick,
  login,
  signUp,
  primaryBtn,
  secondaryBtn,
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
    }
  };
  return (
    <button className={btnType()} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
