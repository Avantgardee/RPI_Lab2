import React from "react";
import "./Header.css";
import Menu from "../mainMenu/menu";

const Header = () => {
  return (
    <div className="Header">
      <Menu page="home"/>
      <div className="nameOfSite">
        <h1 >САМЫЕ ДЛИННЫЕ СЕРИАЛЫ</h1>
        <h1>В ИСТОРИИ КИНЕМАТОГРАФА</h1>
      </div>

    </div>
  );
};

export default Header;