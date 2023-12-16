import React, { useState } from "react";
import "./SearchInput.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

function SearchInput({onSearch, id}) {
  const [inputValue, setInputValue] = useState("");
  
  let HelpInputStr; 
  {
    getLangOrSetDefault() === "En"
    ? HelpInputStr = "I am looking for..."
    : HelpInputStr = "Я ищу..."
  }
  return (
    <div className="Root" id={id}>
      <InputBase
        placeholder = {HelpInputStr}
        className="Input"
        style={{
          color: "#68759E",
          padding: "22px 0 22px 26px",
          fontFamily: "'Raleway', sans-serif",
          fontSize: "25px",
          fontWeight: "700"
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className="Icon" style={{fontSize: "40px"}}/>
          </InputAdornment>
        }
        onChange={(e) => {
          setInputValue(e.target.value); 
          if (e.target.value.trim() !== "") {
            onSearch(e.target.value);
          }
        }}
        value={inputValue}
      />
    </div>
  );
}



export default SearchInput;
