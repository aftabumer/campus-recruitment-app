import React, { useEffect } from "react";
import LayoutWrapper from "./../LayoutWrapper";
import LogoSec from "./LogoSec";
import NavSec from "./NavSec";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authAction } from "../../store/action";

const Header = ({
  history,
  isLoggedInAction,
  logoutAction,
  isLoggedInLoader,
  getUserByIdLoader,
  user,
  isLoggedIn,
}) => {
  useEffect(() => {
    debugger;
    isLoggedInAction();
  }, [isLoggedInAction]);

  const logoutHandler = () => {
    logoutAction();
    history.push("/");
  };

  return (
    <header className="header-container">
      <LayoutWrapper>
        <div className="header-section">
          <div className="logo-sec">
            <LogoSec />
          </div>
          <div className="nav-sec">
            <NavSec
              isLoggedInAction={isLoggedIn}
              isLoggedInLoader={isLoggedInLoader}
              logoutHandler={logoutHandler}
              getUserByIdLoader={getUserByIdLoader}
              user={user}
            />
          </div>
        </div>
      </LayoutWrapper>
    </header>
  );
};
const mapStateToProps = (state) => {
  const {
    authReducer: {
      isLoggedIn,
      isLoggedInLoader,
      isLoggedInError,
      logout,
      logoutLoader,
      logoutError,
      getUserByIdLoader,
      user,
    },
  } = state;

  return {
    isLoggedIn,
    isLoggedInLoader,
    isLoggedInError,
    logout,
    logoutLoader,
    logoutError,
    getUserByIdLoader,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
    logoutAction: (payload) => dispatch(authAction.logout(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
