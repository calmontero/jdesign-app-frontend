import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./CraftCards.css";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

function Cards( { renderCard } ) {
    const { id, title, image, effect } = renderCard;

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div className="cards">
          <div data-aos={effect} className="boxes">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>
                { /* {showForm ? <SlickCarousel /> : null} */}
                  <Link to={`/services/${id}`}>{title}</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
    )
}

export default Cards;