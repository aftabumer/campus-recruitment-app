import React from "react";
import MainLogo from "./../../assets/img-icon/logo.png";
import { withRouter } from "react-router-dom";

const LogoSec = ({ history }) => {
  return (
    <div className="logo-sec-container" onClick={() => history.push("/")}>
      <img src={MainLogo} alt="logo" className="main-logo" />
      <h1 className="main-heading">CRS</h1>
    </div>
  );
};

export default withRouter(LogoSec);
