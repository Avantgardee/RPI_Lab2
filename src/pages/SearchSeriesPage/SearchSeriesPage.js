import React, { useState } from "react";
import Menu from "../../components/mainMenu/menu";
import styles from "./SearchSeriesPage.module.css";
import SectionName from "../../components/SectionName/SectionName";
import { useDatabase } from "../../DataContext";
import SearchInput from "../../components/SearchInput/SearchInput"
import SearchCard from "../../components/SearchCard/SearchCard";

const SearchSeriesPage = () => {
  const db = useDatabase();


  const [searchResult, setSearchResult] = useState(db.Series.map((a) => {
    return {
      ID: a.ID,
      Data: {
        name: a.mainInfo.name,
        year: a.mainInfo.year,
        genre: a.mainInfo.genre
      },
      Image: {
        src: a.gallery[0],
        alt: a.mainInfo.name,
        width: "100%",
        height: "100%"
      }
    }
  }));

  const findSeries = (searchValue) => {
    const artists = db.Series.filter((a) =>
      a.mainInfo.name.toLowerCase().includes(searchValue.toLowerCase())
    ).map((a) => {
      return {
        ID: a.ID,
        Data: {
          name: a.mainInfo.name,
          year: a.mainInfo.year,
          genre: a.mainInfo.genre
        },
        Image: {
          src: a.gallery[0],
          alt: a.mainInfo.name,
          width: "100%",
          height: "100%"
        }
      };
    });
    setSearchResult(artists);
  };
  console.log(searchResult)
  

  return (
    <>
      <Menu page="search" />
      <div className={styles.SearchSingerWrap}>
      
        <section className="TextSection">
          <SectionName name = "Галерея"/>
        </section>

        <SearchInput onSearch={findSeries} id={"intro"}></SearchInput>

        <SearchCard data={searchResult}></SearchCard>


      </div>
    </>
  );
};

export default SearchSeriesPage;