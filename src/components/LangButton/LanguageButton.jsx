import React from "react";
import "./LanguageButton.css";
import { getLangOrSetDefault, setLang } from "../../utils/Cookies";

function LanguageButton({children}) {
  const lang = getLangOrSetDefault();

  const changeButton = () => {
    setLang(lang === "En" ? "Ru" : "En");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return(
    <button className="LanguageButton" onClick={() => changeButton()}>{children}</button>
  );
} 

export default LanguageButton;
