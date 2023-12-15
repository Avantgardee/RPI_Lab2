import React from "react";
import "./mainMenu.css";
import { Link } from "react-router-dom";
import LanguageButton from "../LangButton/LanguageButton";

const Menu = (props) => {

  return (
    <div className="navbar">
      <i className="fa-solid fa-clapperboard"></i>
      <div className="buttons">
        <Link to={"/series/"} className={"navlink home " + (props.page == "home"  ? "page_now" : "")}>
                        ГЛАВНАЯ
        </Link>

        <Link to={"/searchSeries/"} className={"navlink search " + (props.page == "search" ? "page_now" : "")}>
                        СПИСОК СЕРИАЛОВ
        </Link>

      </div>
      <LanguageButton>
        <i className="fa-solid fa-earth-americas"></i>
      </LanguageButton>
      
    </div>
  );
};

export default Menu;