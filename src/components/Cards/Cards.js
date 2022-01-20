import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards( { renderCard } ) {
    const { title, image, effect } = renderCard;

    return (
        <div className="cards">
          <div data-aos={effect} className="boxes">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>
                { /* {showForm ? <SlickCarousel /> : null} */}
                  <Link to={"/services"}>{title}</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
    )
}

export default Cards;