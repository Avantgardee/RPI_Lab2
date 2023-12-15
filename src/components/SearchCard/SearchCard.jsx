import React from "react";
import "./SearchCard.css";
import { getLangOrSetDefault } from "../../utils/Cookies.js";
import DynamicImage from "../DynamicImage/DynamicImage.jsx";
function SearchCard(props) {

  if (!props.data || props.data.length === 0) {
    return (
      <div className="NotFound">
        <p>
        {
          getLangOrSetDefault() === "En"
            ? "Nothing found. Try looking for something else..."
            : "Ничего не найдено. Попробуйте искать иначе..."
        }
        </p>
      </div>
    );
  }

  return(
    <div className="CardsWrapper">
      {props.data.map((a, index) => (
        <a key={index} href={`/seriesPage/${a.ID}`} className="SearchCard">
          <div className="ImgWrap">
            <DynamicImage {...a.Image}></DynamicImage>
          </div>
          <div className="Info">
            <h3 style={{color: "#FFFFFF"}}>{a.Data.name}</h3>
            <h3 style={{color: "#BCBCBC"}}>{a.Data.year}</h3>
            <h3 style={{color: "#BCBCBC"}}>{a.Data.genre}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SearchCard;
