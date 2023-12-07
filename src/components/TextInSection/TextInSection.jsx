import React from 'react';
import "./TextSection.css";
const TextInSection = (props) => {
    return (
        <div className="TextInSection">
            {props.text}
        </div>
    );
};

export default TextInSection;