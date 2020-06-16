import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";

const NavSec = ({
  history,
  isLoggedInAction,
  logoutHandler,
  isLoggedInLoader,
  getUserByIdLoader,
  user,
}) => {
  console.log(user && user);
  return (
    <div className="nav-sec-container">
      {isLoggedInLoader && "loading"}

      {isLoggedInAction && !isLoggedInLoader && !getUserByIdLoader && user && (
        <>
          <p className="display-user-name">
            {user && user.firstName + " " + user.lastName + " " + user.roll}
          </p>
          <Button btnText="log out" signUp onClick={logoutHandler} />
        </>
      )}

      {!isLoggedInAction && !isLoggedInLoader && (
        <>
          <Button
            btnText="login"
            login
            onClick={() => history.push("/login")}
          />
          <Button
            btnText="sign up"
            signUp
            onClick={() => history.push("/sign-up")}
          />
        </>
      )}
    </div>
  );
};

export default withRouter(NavSec);
