import React from "react";
import { Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
    custom: {
      color: "red",
      fontWeight: "bold"
    }
  });
  
  const theme = createTheme();
  
  theme.typography.h1 = {
    '@media (max-width: 549px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5.1rem',
    },
  };

function Header() {
    const classes = useStyles(); 
    const craftHeader = {
        backgroundImage: `url('https://i.ibb.co/Kb7jHFV/background-main.jpg')`, 
        backgroundSize: "cover",
        paddingTop: "60px",
        opacity: "2",
        margin: "20px"
    };

    return (
        <Row className="justify-content-md-center" >
        <Col lg={12} style={craftHeader}  >
            <ThemeProvider theme={theme}>
            <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
                Judith's Designs
            </Typography>
            </ThemeProvider>
            <span  className="font-link"  >
                Papelería creativa para tus eventos, artículos personalizados franelas, tazas, vasos y mucho más...
            </span>
        </Col>
        </Row>
    );
}

export default Header;