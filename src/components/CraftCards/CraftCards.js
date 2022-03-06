import React, { useEffect } from "react";
import { Card, Col, Container, CardGroup, Row } from "react-bootstrap";
//import "./CraftCards.css";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

function Cards( { renderCard } ) {
    const { id, title, image, effect } = renderCard;

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div data-aos={effect} className="boxes">
          <Container fluid>
            <CardGroup className="m-5 d-block">
              <Card className="m-3 border-1 shadow" style={{ height: '300px', maxwidth: "100%", backgroundColor: '#B7E0F2', borderRadius: 55, padding: '3rem' }}>
                <Row>
                <Col>
                  <Card.Img variant="top" src={image} style={{objectFit: 'contain', borderRadius: 55, height: '200px'}} />
                </Col>
                <Col>
                <Card.Body>
                  <Card.Title as="h1" style={{ textAlign: 'center', alignItems: "center", minHeight: "50vh" }} >
                    <Link to={`/services/${id}`}>{title}</Link>
                  </Card.Title>
                </Card.Body>
                </Col>
              </Row>
              </Card>
            </CardGroup>
          </Container>
        </div>
    )
}

export default Cards;