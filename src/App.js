import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CraftJobs from "./components/CraftJobs/CraftJobs";
import CraftSwiper from "./components/CraftSwiper/CraftSwiper";
import Home from "./components/Home/Home"; 
import Testimonial from "./components/Testimonial/Testimonial";
import "./styles.scss";
import CraftDownloads from "./components/CraftDownloads/CraftDownloads";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const mainContainer = {
    backgroundColor: '#ffc0cb',
    height: "625px"
  };
  const craftBox = {
    background: "#fefbd8",
    borderRadius: "12px"
  };

  return (
    <Container fluid style={mainContainer} >
      <Navigation />
        <Row className="justify-content-md-center">
        <Col lg={9} style={craftBox} >
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
    </Container>
  );
}


export default App;
