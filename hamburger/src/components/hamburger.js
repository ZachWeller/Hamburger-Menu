import React, { useState } from "react";
import logo from "../logo.svg";
import "./hamburger.css";

const BurgerMenu = () => {
  //Use state to tell if the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  //Grabbing the class of both the button and the menu div
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const button = document.querySelector(".hamburger");

  const handleMenuStatus = () => {
    const menu = document.getElementById("hamburger-menu");
    const menuText = document.getElementById("menu-text");
    menu.classList.toggle("toggle");
    menuText.classList.toggle("toggle");
  };

  return (
    <>
      <div className="hamburger-menu" id="hamburger-menu">
        <button className="hamburger" onClick={handleMenuStatus}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </button>
        <div className="menu-image-container" id="menu-image-container">
          <div className="menu-item">
            <a href="/">
              <img src={logo} alt="Menu Item 1" className="menu-image" />
            </a>
            <div className="menu-text" id="menu-text">
              Item 1
            </div>
          </div>

          <div className="menu-item">
            <a href="/">
              <img src={logo} alt="Menu Item 2" className="menu-image" />
            </a>
          </div>

          <div className="menu-item">
            <a href="/">
              <img src={logo} alt="Menu Item 3" className="menu-image" />
            </a>
          </div>
          <div className="menu-item">
            <a href="/">
              <img src={logo} alt="Menu Item 4" className="menu-image" />
            </a>
          </div>
        </div>
        <div></div>
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
