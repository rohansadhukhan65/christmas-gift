import Image from "next/image";
import React from "react";

// img import .....
import NavDecor from "../../assets/img/Decoratives/mobNavDecor.png";
import CloseIcons from "../Icons/CloseIcons";
const MobNav = ({isOpen, closeNav}:any) => {
  return (
    <div className={`mobile-nav-container ${isOpen?'w-[100%]':'w-[0%]'}`}>
      <div className={`mobile-nav-inner-container theme-light`}>
        {/* Decor */}
        <div className="mobile-nav-decor-andcross-action">
          <Image src={NavDecor} width={100} height={54.2} alt="Chirtmas" />
          <div onClick={closeNav} className="mobile-nav-close">
            <CloseIcons />
          </div>
        </div>
        {/* Menu items */}
        <div className="mobile-nav-menu-item-container">
          <div className="menu-item">Home</div>
          <div className="menu-item">Celebrate</div>
          <div className="menu-item">Gifts</div>
          <div className="menu-item">New</div>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
