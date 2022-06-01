import React from "react";
import Header from '../Header/Header';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';
import "../../styles.scss";

function Home() {
    return (
      <Row className="justify-content-md-center" >
        <Header />
        <Col lg={9}  >
        <SocialIcon url="https://www.instagram.com/jdesign_art/" target="_blank" network="instagram" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.facebook.com" target="_blank" network="facebook" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://jdesigns-beta.netlify.app/" target="_blank" label="Share" style={{ height: 35, width: 35 }}/>
        <div className="profile-container">
          <span >
            Diseñadora Gráfica Learn programming with free online courses from real college. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.
          </span>
          <img
            src="https://i.ibb.co/jRD9GYd/Judith.png"
            alt="jdesign-img">
          </img>
        </div>
        </Col>
      </Row>
    );
}

export default Home;

