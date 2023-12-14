import React from "react";
import "./SectionName.css";
const SectionName = (props) => {
  return (
    <div className="nameOfSection">
      {props.name}
    </div>
  );
};

export default SectionName;