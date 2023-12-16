import React from "react";
import "./SeriesInfo.css";
import DescriptionLine from "../DescriptionLine/DescriptionLine";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const SeriesInfo = (props) => {
  return (
    <div className="SeriesInfo">
      <div className="nameOfSeries">{props.name}</div>
      <div className="otherInformation">
        {
            getLangOrSetDefault() === "En"
            ? (
              <>
                <DescriptionLine nameOfLine="Year of release" info={props.year} />
                <DescriptionLine nameOfLine="Country of production" info={props.country} />
                <DescriptionLine nameOfLine="Genre" info={props.genre} />
                <DescriptionLine nameOfLine="Scriptwriters" info={props.writers} />
                <DescriptionLine nameOfLine="Number of seasons" info={props.seasons} />
                <DescriptionLine nameOfLine="Series duration" info={props.time} />
                <DescriptionLine nameOfLine="Description" info={props.article} />
              </>
            )
            : (                
              <>
                <DescriptionLine nameOfLine="Год выпуска" info={props.year} />
                <DescriptionLine nameOfLine="Страна производства" info={props.country} />
                <DescriptionLine nameOfLine="Жанр" info={props.genre} />
                <DescriptionLine nameOfLine="Сценаристы" info={props.writers} />
                <DescriptionLine nameOfLine="Количество сезонов" info={props.seasons} />
                <DescriptionLine nameOfLine="Продолжительность серии" info={props.time} />
                <DescriptionLine nameOfLine="Описание" info={props.article} />
              </>
            )
        }
      </div>
    </div>
  );
};

export default SeriesInfo;