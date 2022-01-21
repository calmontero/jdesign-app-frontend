import React from "react";
import "./CraftContainer.css";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CraftJobs from '../CraftJobs/CraftJobs';

const useStyles = makeStyles({
    custom: {
      color: "pink",
      fontWeight: "bold"
    }
  });

function CraftContainer() {
    const classes = useStyles();
    return (
        <div className="craft-container">
            <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
                JDesign Arts
            </Typography>

            <div class="box overlay">
                <CraftJobs />
            </div>
        </div>
    )
}

export default CraftContainer;