import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";

const NavSec = ({ history }) => {
  return (
    <div className="nav-sec-container">
      <Button btnText="login" login onClick={() => history.push("/login")} />
      <Button
        btnText="sign up"
        signUp
        onClick={() => history.push("/sign-up")}
      />
    </div>
  );
};

export default withRouter(NavSec);
