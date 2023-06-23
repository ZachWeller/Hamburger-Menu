import React from "react";
import "./App.css";
import BurgerMenu from "./components/hamburger";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BurgerMenu />
    </div>
  );
}

export default App;
