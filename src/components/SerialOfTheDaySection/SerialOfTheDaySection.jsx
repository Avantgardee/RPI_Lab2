import React from "react";
import "./SerialOfTheDaySection.css";
import SectionName from "../SectionName/SectionName";
import SeriesSection from "../SeriesSection/SeriesSection";
const SerialOfTheDaySection = () => {
  return (

    <div className="SerialOfTheDaySection">
      <hr className="stripes"/>
      <SectionName name = "CЕРИАЛ ДНЯ"/>
      <SeriesSection
        imagePath="series1.jpg"
        name="Симпсоны"
        year="1989"
        country="США"
        genre="мультфильм, комедия"
        writers="Джеймс Л. Брукс, Мэтт Грейнинг, Кэролин Омни"
        seasons="33"
        time="22 минуты"
        article="Семейство Симпсонов — папаша Гомер, мама Мардж, дочери Лиза и маленькая Мэгги, и несносный подросток Барт — проживают в среднестатистическом городке Спрингфилд. Гомер трудится на местной атомной станции, Мардж занимается домом и детьми, любознательная Лиза отлично учится в школе, а Барт постоянно попадает во всякие переделки."/>

      <hr className="stripes"/>
    </div>
  );
};

export default SerialOfTheDaySection;