import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../../DataContext"
import "./SerialOfTheDaySection.css";
import SectionName from "../SectionName/SectionName";
import SeriesSection from "../SeriesSection/SeriesSection";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const SerialOfTheDaySection = () => {
  
  const { id } = useParams();
  const db = useDatabase();

  const series = useMemo(
      () => db.Series.find((e) => e.ID === "simpsons"),
      [id, db]
  );

  return (

    <div className="SerialOfTheDaySection">
      <hr className="stripes"/>
      {
          getLangOrSetDefault() === "En"
            ? <SectionName name = "SERIAL OF THE DAY"/>
            : <SectionName name = "CЕРИАЛ ДНЯ"/>
      }
      <SeriesSection 
          imagePath={series.mainInfo.imagePath}
          name={series.mainInfo.name}
          year={series.mainInfo.year}
          country={series.mainInfo.country}
          genre={series.mainInfo.genre}
          writers={series.mainInfo.writers}
          seasons={series.mainInfo.seasons}
          time={series.mainInfo.time}
          article={series.mainInfo.article}
      />


      <hr className="stripes"/>
    </div>
  );
};

export default SerialOfTheDaySection;