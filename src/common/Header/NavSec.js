import React, { useState } from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import PopOver from "../PopOver";
import Company from "./../../assets/img-icon/company.png";
import Admin from "./../../assets/img-icon/admin.png";
import Student from "./../../assets/img-icon/student.png";

const NavSec = ({
  history,
  isLoggedInAction,
  logoutHandler,
  isLoggedInLoader,
  getUserByIdLoader,
  user,
}) => {
  console.log(user && user);
  const [toggle, settoggle] = useState(false);

  return (
    <div className="nav-sec-container">
      {isLoggedInLoader && "loading"}

      {isLoggedInAction && !isLoggedInLoader && !getUserByIdLoader && user && (
        <>
          <p
            className="display-user-name"
            onClick={() => {
              settoggle(!toggle);
            }}
          >
            {user && user.roll === "company" && (
              <img src={Company} alt="logo" className="logo" />
            )}
            {user && user.roll === "admin" && (
              <img src={Admin} alt="logo" className="logo" />
            )}
            {user && user.roll === "student" && (
              <img src={Student} alt="logo" className="logo" />
            )}
            {user && user.firstName + " " + user.lastName}
          </p>
          {toggle && (
            <PopOver
              toggle={toggle}
              settoggle={settoggle}
              logoutHandler={logoutHandler}
              user={user}
            />
          )}
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
