import React from "react";
import "./CraftContainer.css";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CraftJobs from '../CraftJobs/CraftJobs';
import Testimonial from "../Testimonial/Testimonial";

const useStyles = makeStyles({
    custom: {
      color: "red",
      fontWeight: "bold"
    }
  });

function CraftContainer() {
    const classes = useStyles();

    return (
        <div className="craft-container">
            <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
                Judith's Designs
            </Typography>
            <span className="font-link">
                This is with Font Link. We are linking the fonts from the Google Fonts.
                This is with Font Link. We are linking the fonts from the Google Fonts.
            </span>
            <div class="box overlay">
                <CraftJobs />
                <Testimonial />
            </div>
        </div>
    )
}

export default CraftContainer;