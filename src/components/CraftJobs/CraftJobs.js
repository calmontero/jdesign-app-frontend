import React from 'react';
import "aos/dist/aos.css";
import CraftCards from '../CraftCards/CraftCards';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custom: {
    color: "red",
    fontWeight: "bold"
  }
});

function CraftJobs() {
  const classes = useStyles();
  const cardInfo = [
    {
      image: "https://i.ibb.co/qmTrQ2m/Sample-01.png",
      title: "Caketoppers",
      effect: "fade-right",
    },
    {
      image: "https://i.ibb.co/1bbBJ8Y/Sample-02.png",
      title: "Clothes",
      effect: "fade-left",
    },
    {
      image: "https://i.ibb.co/551ksvr/Sample-04.png",
      title: "Ornaments",
      effect: "fade-up-right",
    },
    {
      image: "https://i.ibb.co/TqRNTT4/Sample-03.png",
      title: "Glass",
      effect: "fade-up-left",
    },
  ];
    
    return (
    <div className="cards-list">
      <Typography gutterBottom variant="h2" component="div" align='center' className={classes.custom} >
          Jobs
      </Typography>
      <div className="grids">
            { cardInfo.map(renderCard => {
                return <CraftCards renderCard={renderCard} />
                }
            )}
        </div>
      </div>
    )
}

export default CraftJobs;