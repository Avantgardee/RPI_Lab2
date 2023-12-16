import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./UserProfileCard.css";
import { getLangOrSetDefault } from "../../utils/Cookies.js";

const UserProfileCard = (props) => {

    const imagePath = "/img/creator" + props.imageNum + ".png";
    return (
        <Card sx={{ minWidth: 250 }} className="creatorsCard">
            <div className="imgWrapper">
                <CardMedia
                sx={{ height: 170 , width: 170}}
                image={imagePath}
                title="creators"
                className="creatorsImg"
            />
            </div>

            <CardContent >
                <Typography gutterBottom variant="h5" component="div" >
                    <p className="nickname">{props.nickname}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p className="name">{props.name}</p>
                </Typography>
            </CardContent>
            <CardActions >
                <a href={props.creatorsLink} target="_blank" rel="noopener noreferrer" className="go">
                {
                    getLangOrSetDefault() === "En"
                    ? "Follow"
                    : "Перейти"
                }
                </a>
            </CardActions>
        </Card>
    );
};

export default UserProfileCard;