import React from 'react';
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import "./CreatorsSection.css";
import SectionName from "../SectionName/SectionName";
const CreatorsSection = () => {
    return (
        <div className="CreatorsSection">
            <SectionName name = "О РАЗРАБОТЧИКАХ"/>
            <div className="Creators">
                <UserProfileCard imageNum="1" nickname="@LordNKey" name="Nikita" creatorsLink="https://github.com/LordNKey"/>
                <UserProfileCard imageNum="2" nickname="@Avantgardee" name="Maksim" creatorsLink="https://github.com/Avantgardee"/>
                <UserProfileCard imageNum="3" nickname="@Temerius" name="Artiom" creatorsLink="https://github.com/Temerius"/>
            </div>
        </div>
    );
};

export default CreatorsSection;