import React from "react";
import LayoutWrapper from "./../LayoutWrapper";
import LogoSec from "./LogoSec";
import NavSec from "./NavSec";

const Header = () => {
  return (
    <header className="header-container">
      <LayoutWrapper>
        <div className="header-section">
          <div className="logo-sec">
            <LogoSec />
          </div>
          <div className="nav-sec">
            <NavSec />
          </div>
        </div>
      </LayoutWrapper>
    </header>
  );
};

export default Header;
