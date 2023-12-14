import React from "react";
import AboutSite from "../../components/AboutPage/AboutSite";
import SerialOfTheDaySection from "../../components/SerialOfTheDaySection/SerialOfTheDaySection";
import CreatorsSection from "../../components/CreatorsSection/CreatorsSection";

const MainPage = () => {
  return (
    <div>
      <AboutSite/>
      <SerialOfTheDaySection/>
      <CreatorsSection/>
    </div>
  );
};

export default MainPage;