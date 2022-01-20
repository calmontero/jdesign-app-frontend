import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Typography from '@mui/material/Typography';
import Cards from '../Cards/Cards';

function CraftJobs() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

      const cardInfo = [
        {
          image: "https://i.ibb.co/qmTrQ2m/Sample-01.png",
          title: "Caketoppers",
          effect: "fade-right",
        },
        {
          image: "https://i.ibb.co/qmTrQ2m/Sample-01.png",
          title: "Clothes",
          effect: "fade-left",
        },
        {
          image: "https://i.ibb.co/qmTrQ2m/Sample-01.png",
          title: "Ornaments",
          effect: "fade-up-right",
        },
        {
          image: "https://i.ibb.co/qmTrQ2m/Sample-01.png",
          title: "Glass",
          effect: "fade-up-left",
        },
      ];
    
    return (
    <div className="cards-list">
      <div className="grids">
        <Typography gutterBottom variant="h1" component="div">
                JDesigns_arts
        </Typography>
            { cardInfo.map(renderCard => {
                return <Cards renderCard={renderCard} />
                }
            )}
        </div>
      </div>
    )
}

export default CraftJobs;