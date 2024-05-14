"use client";
import React, { useState } from "react";
import Logo from "../Icons/Logo";
import NightThemeIcon from "../Icons/NightThemeIcon";
import MenuIcon from "../Icons/MenuIcon";
import MobNav from "../MobNav/MobNav";

const Header = () => {
  const [isMobNavShow, setIsMovNavShow] = useState(false);
  const NavOpenCloseHandler = () => {
    console.clear();
    setIsMovNavShow((p: any) => !p);
  };

  return (
    <>
      <div className="header-container">
        <div>
          <Logo />
        </div>
        <div className="nav-items-wrapper">
          <div className="desktop-nav-container">
            <div className="desktop-nav-item active">Home</div>
            <div className="desktop-nav-item">Celebrate</div>
            <div className="desktop-nav-item">Gift</div>
            <div className="desktop-nav-item">New</div>
          </div>
          <div className="header-actions-container">
            <div className="theme-changer">
              <NightThemeIcon />
            </div>
            <div className="mobile-nav" onClick={NavOpenCloseHandler}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      <MobNav isOpen={isMobNavShow} closeNav={NavOpenCloseHandler} />
    </>
  );
};

export default Header;
