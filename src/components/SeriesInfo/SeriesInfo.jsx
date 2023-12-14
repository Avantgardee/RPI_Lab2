import React from "react";
import "./SeriesInfo.css";
import DescriptionLine from "../DescriptionLine/DescriptionLine";
const SeriesInfo = (props) => {
  return (
    <div className="SeriesInfo">
      <div className="nameOfSeries">{props.name}</div>
      <div className="otherInformation">
        <DescriptionLine nameOfLine="Год выпуска" info={props.year} />
        <DescriptionLine nameOfLine="Страна производства" info={props.country}/>
        <DescriptionLine nameOfLine="Жанр" info={props.genre}/>
        <DescriptionLine nameOfLine="Сценаристы"  info={props.writers}/>
        <DescriptionLine nameOfLine="Количество сезонов"  info={props.seasons}/>
        <DescriptionLine nameOfLine="Продолжительность сезонов"  info={props.time}/>
        <DescriptionLine nameOfLine="Описание"  info={props.article}/>
      </div>
    </div>
  );
};

export default SeriesInfo;