import React from "react";
import "./CraftContainer.css";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    custom: {
      color: "#00EE00",
      fontWeight: "bold"
    }
  });

function CraftContainer() {
    const classes = useStyles();
    return (
        <div className="craft-container">
            <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
                JDesigns Arts
            </Typography>
            <div class="box overlay">

            </div>
        </div>
    )
}

export default CraftContainer;