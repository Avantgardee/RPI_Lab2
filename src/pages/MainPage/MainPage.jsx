import React from "react";
import AboutSite from "../../components/AboutPage/AboutSite";
import SerialOfTheDaySection from "../../components/SerialOfTheDaySection/SerialOfTheDaySection";
import CreatorsSection from "../../components/CreatorsSection/CreatorsSection";
import Header from "../../components/Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header/>
      <AboutSite/>
      <SerialOfTheDaySection/>
      <CreatorsSection/>
    </div>
  );
};

export default MainPage;