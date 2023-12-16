import React from "react";
import SectionName from "../SectionName/SectionName";
import "./AboutSIte.css";
import TextInSection from "../TextInSection/TextInSection";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const AboutSite = () => {
  return (
    <div className="TextSection">
      {
        getLangOrSetDefault() === "En"
          ? <SectionName name = "ABOUT PAGE"/>
          : <SectionName name = "O СТРАНИЦЕ"/>
      }
      <TextInSection text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    </div>
  );
};

export default AboutSite;