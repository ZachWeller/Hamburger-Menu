import React from "react";
import logo from "../logo.svg";
import "./hamburger.css";

const BurgerMenu = () => {
  const handleMenuStatus = () => {
    const menu = document.getElementById("hamburger-menu");
    const menuText = document.querySelectorAll("#menu-text");
    menu.classList.toggle("toggle");

    menuText.forEach((element) => {
      element.classList.toggle("toggle");
    });
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
            <a className="navigation-link" href="/">
              <img src={logo} alt="Menu Item 1" className="menu-image" />
              <div className="menu-text" id="menu-text">
                MovieQuest
              </div>
            </a>
          </div>

          <div className="menu-item">
            <a className="navigation-link" href="/">
              <img src={logo} alt="Menu Item 2" className="menu-image" />
              <div className="menu-text" id="menu-text">
                TVQuest
              </div>
            </a>
          </div>

          <div className="menu-item">
            <a className="navigation-link" href="/">
              <img src={logo} alt="Menu Item 3" className="menu-image" />
              <div className="menu-text" id="menu-text">
                GameQuest
              </div>
            </a>
          </div>
          <div className="menu-item">
            <a className="navigation-link" href="/">
              <img src={logo} alt="Menu Item 4" className="menu-image" />
              <div className="menu-text" id="menu-text">
                BevQuest
              </div>
            </a>
          </div>
          <br />
          <div className="menu-item">
            <div className="white-text">Check Out Our Other Categories</div>
          </div>
        </div>
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
