import React from "react";
import "./mainMenu.css";
import { Link } from "react-router-dom";
import LanguageButton from "../LangButton/LanguageButton";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const Menu = (props) => {

  return (
    <div className="navbar">
      <i className="fa-solid fa-clapperboard"></i>
      <div className="buttons">
        <Link to={"/"} className={"navlink home " + (props.page == "home"  ? "page_now" : "")}>
        {
          getLangOrSetDefault() === "En"
            ? "GENERAL"
            : "ГЛАВНАЯ"
        }
        </Link>

        <Link to={"/searchSeries/"} className={"navlink search " + (props.page == "search" ? "page_now" : "")}>
        {
          getLangOrSetDefault() === "En"
            ? "SERIES LIST"
            : "СПИСОК СЕРИАЛОВ"
        }
        </Link>

      </div>
      <LanguageButton>
        <i className="fa-solid fa-earth-americas"></i>
      </LanguageButton>
      
    </div>
  );
};

export default Menu;