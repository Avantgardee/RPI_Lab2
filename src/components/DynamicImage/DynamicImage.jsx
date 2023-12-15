import React, { useState, useEffect } from "react";


function DynamicImage(props) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        setImageSrc(`/img/${props.src}`);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
  
    loadImage();
  }, [props.src]);
  

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt={props.alt} style={{width: props.width, height: props.height, objectFit: "cover", objectPosition: "center", borderRadius:"4px"} }/>}
    </div>
  );
}

export default DynamicImage;
