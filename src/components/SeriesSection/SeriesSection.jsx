import React from 'react';
import "./SeriesSection.css";
import SeriesInfo from "../SeriesInfo/SeriesInfo";
const SeriesSection = (props) => {
    const imagePath = "/img/series" + props.imageNum + ".jpg";
    return (
        <div className="SeriesSection">
        <img src={imagePath} alt={"Series " + props.imageNum} className="imgOfSeries" />
        <SeriesInfo
            name={props.name}//"Симпсоны"
            year={props.year}//"1989"
            country={props.year}//"США"
            genre={props.genre}//"мультфильм, комедия"
            writers={props.writers}//"Джеймс Л. Брукс, Мэтт Грейнинг, Кэролин Омни"
            seasons={props.seasons}//"33"
            time={props.time}//"22 минуты" //"Семейство Симпсонов — папаша Гомер, мама Мардж, дочери Лиза и маленькая Мэгги, и несносный подросток Барт — проживают в среднестатистическом городке Спрингфилд. Гомер трудится на местной атомной станции, Мардж занимается домом и детьми, любознательная Лиза отлично учится в школе, а Барт постоянно попадает во всякие переделки."
            article={props.article}/>
        </div>
    );
};

export default SeriesSection;