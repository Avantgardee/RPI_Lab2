import React from "react";
import "./Header.css";
import Menu from "../mainMenu/menu";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const Header = () => {
  return (
    <div className="Header">
      <Menu page="home"/>
      <div className="nameOfSite">
        <h1 >
        {
          getLangOrSetDefault() === "En"
            ? "THE LONGEST RUNNING SERIES"
            : "САМЫЕ ДЛИННЫЕ СЕРИАЛЫ"
        }
        </h1>
        <h1>
        {
          getLangOrSetDefault() === "En"
            ? "IN CINEMATIC HISTORY"
            : "В ИСТОРИИ КИНЕМАТОГРАФА"
        }
        </h1>
      </div>

    </div>
  );
};

export default Header;