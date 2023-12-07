import React from 'react';
import "./DescriptionLine.css";
const DescriptionLine = (props) => {
    return (
        <div className="DescriptionLine">
        <div className="parametr">{props.nameOfLine} {":"} <p className="textFacts">{props.info}</p></div>
        </div>
    );
};

export default DescriptionLine;