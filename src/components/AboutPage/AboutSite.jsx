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
      {
        getLangOrSetDefault() === "En"
          ? <TextInSection text = "Welcome to the page dedicated to the longest TV series in the history of cinema! Here, you'll find fascinating information about series that have captured audiences, holding their attention for endless hours. Utilize our convenient search page to easily find the series you're interested in. Each series has its own personalized page with a history, trailer, and event map, providing you with a comprehensive view of the captivating world of lengthy cinematic stories. Let's delve together into the exciting realm of the longest TV series, where every minute becomes a part of an incredible cinematic journey."/>
          : <TextInSection text = "Добро пожаловать на страницу, посвященную самым длинным сериалам в истории кинематографа! Здесь вы найдете увлекательную информацию о сериалах, которые завоевали зрительские сердца, удерживая внимание на протяжении бескрайних часов. Используя нашу удобную страницу поиска, вы легко найдете интересующий вас сериал. Каждый сериал имеет свою персональную страницу с историей, трейлером и картой событий, предоставляя вам полный взгляд на захватывающий мир долгих кинематографических историй. Давайте вместе погрузимся в увлекательный мир самых продолжительных сериалов, где каждая минута становится частью невероятного кинематографического путешествия."/>
      }    
    </div>
  );
};

export default AboutSite;