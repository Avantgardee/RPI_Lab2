import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import SeriesSection from "../../components/SeriesSection/SeriesSection";
import { useDatabase } from "../../DataContext"
import SectionName from "../../components/SectionName/SectionName";
import styles from "./SeriesPage.module.css";
import Timeline from "../../components/Timeline/Timeline";
import Map from "../../components/Map/Map"
import Menu from "../../components/mainMenu/menu";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

function getEmbeded(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  

const SeriesPage = () => {
    const { id } = useParams();
    const db = useDatabase();

    const series = useMemo(
        () => db.Series.find((e) => e.ID === id),
        [id, db]
    );
    

    return (
        <>
            <Menu page="search"/>
            <div className={styles.SingerPageWrap}>
                <div>


                    <SeriesSection 
                        imagePath={series.mainInfo.imagePath}
                        name={series.mainInfo.name}
                        year={series.mainInfo.year}
                        country={series.mainInfo.country}
                        genre={series.mainInfo.genre}
                        writers={series.mainInfo.writers}
                        seasons={series.mainInfo.seasons}
                        time={series.mainInfo.time}
                        article={series.mainInfo.article}
                    >
                    </SeriesSection>

                    <section className="TextSection">
                    {
                        getLangOrSetDefault() === "En"
                        ? <SectionName name = "Gallery"/>
                        : <SectionName name = "Галерея"/>
                    }
                    </section>

                    <section>
                    <div className={styles.galleryRoot}>
                    {series.gallery.map((e) => (
                        <img src={"/img/" + e} key={e} alt={e}/>
                    ))}
                    </div>
                    </section>
                    
                    <section className="TextSection">
                    {
                        getLangOrSetDefault() === "En"
                        ? <SectionName name = "Trailer"/>
                        : <SectionName name = "Трейлер"/>
                    }
                    </section>

                    <section className={styles.VideoSection}>
                        <iframe className={styles.Video}
                        height={750}
                        src={"https://www.youtube.com/embed/" + getEmbeded(series.ytlink)}
                        frameBorder="0"
                        allowFullScreen
                        />
                    </section>


                    <section className="TextSection">
                    {
                        getLangOrSetDefault() === "En"
                        ? <SectionName name = "History of the series"/>
                        : <SectionName name = "История сериала"/>
                    }
                    </section>

                    <Timeline timeline={series.timeline}/>

                    <Map 
                    Data={{
                    latitude: +series.places.latitude, 
                    longitude: +series.places.longitude, 
                    title: series.places.title,
                    }}
                    style={{ width: "100%", height: "600px" }}></Map>

                </div>
           
            </div>
        </>
    );
};

export default SeriesPage;