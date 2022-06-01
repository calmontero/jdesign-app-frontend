import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles.scss";

function Cards( { renderCard } ) {
    const { id, title, image, effect } = renderCard;

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
      <div data-aos={effect} className="cards-craft">
      <img
        className="image"
        src={image}
        alt="jdesign-img"
      />
        <div className="cardBody">
          <h2> {title} </h2>
          <Link to={`/services/${id}`}><button type="button" class="btn btn-outline-secondary"> Ver</button></Link>
        </div>
      </div>
    )
}

export default Cards;