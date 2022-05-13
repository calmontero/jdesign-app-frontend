import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CraftJobs from "./components/CraftJobs/CraftJobs";
import CraftSwiper from "./components/CraftSwiper/CraftSwiper";
import Home from "./components/Home/Home"; 
import Testimonial from "./components/Testimonial/Testimonial";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./styles.scss";
import CraftDownloads from "./components/CraftDownloads/CraftDownloads";
import { Container, Row, Col } from 'react-bootstrap';
//import { isMobile, browserName } from "react-device-detect";

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

function App() {
  const classes = useStyles(); 
  const mainContainer = {backgroundColor: '#ffc0cb'};
  const craftHeader = {
    backgroundImage: `url('https://i.ibb.co/Kb7jHFV/background-main.jpg')`, 
    backgroundSize: "cover"
  };
  const craftBox = {
    background: "#fefbd8",
    opacity: "2",
    borderRadius: "12px",
    height: "fit-content"
  };

  return (
    
    <Container fluid style={mainContainer} bsClass="mainContainer">
      <Row>
      <Col>
        <Row className="justify-content-md-center" >
        <Navigation />
        <Col lg={9} style={craftHeader} bsClass="craftHeader" >
          
        <ThemeProvider theme={theme}>
          <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
              Judith's Designs
          </Typography>
          </ThemeProvider>
          <span  className="font-link"  >
            Papelería creativa para tus eventos, artículos personalizados franelas, tazas, vasos y mucho más...
          </span>
            <Row>
            <Col style={craftBox} bsClass="craftBox" >
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/jobs">
                <CraftJobs />
              </Route>
              <Route exact path="/testimonials">
                <Testimonial />
              </Route>
              <Route exact path="/downloads">
                <CraftDownloads />
              </Route>
              <Route exact path="/services/:id">
                {/*<SlickCarousel />*/}
                <CraftSwiper />
              </Route>
            </Switch>
            </Col>
            </Row>
        </Col>
        </Row>
      </Col>
      </Row>
    </Container>
  );
}


export default App;
