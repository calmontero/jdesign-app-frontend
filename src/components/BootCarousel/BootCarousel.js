import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function BootCarousel() {
    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Clothes</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Ornaments</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Glass</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    )
}

export default BootCarousel;