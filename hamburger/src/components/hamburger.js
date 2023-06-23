import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../logo.svg";
import "./hamburger.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuStatus = () => {
    setIsOpen(true);
  };

  if (isOpen == true) {
    return ;
  }

  return (
    <>
      <div className="hamburger-menu">
        <button className="hamburger" onClick={handleMenuStatus}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </button>
        <div className="menu-image-container">
          <a href="/">
            <img src={logo} alt="Menu Item 1" className="menu-image" />
          </a>
          <a href="/">
            <img src={logo} alt="Menu Item 2" className="menu-image" />
          </a>
          <a href="/">
            <img src={logo} alt="Menu Item 3" className="menu-image" />
          </a>
          <a href="/">
            <img src={logo} alt="Menu Item 4" className="menu-image" />
          </a>
        </div>
        {isOpen && (
          <div
          className={`background-div2 ${showAnimatedDiv ? "visible" : ""}`}
          >
            
          </div>
        )}
      </div>
    </>
    // <Menu>
    //   <a className="menu-item" href="/">
    //     <img src={logo} alt="Menu Icon 1" />
    //     <span>Text 1</span>
    //   </a>

    //   <a className="menu-item" href="/">
    //     <img src={logo} alt="Menu Icon 2" />
    //     <span>Text 2</span>
    //   </a>

    //   <a className="menu-item" href="/">
    //     <img src={logo} alt="Menu Icon 3" />
    //     <span>Text 3</span>
    //   </a>
    // </Menu>
  );
};

export default BurgerMenu;
