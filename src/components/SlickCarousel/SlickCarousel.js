import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './SlickCarousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SlickCarousel() {
    const params = useParams();
    const id = params.id;
    console.log(id);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [slides, setSlides] = useState([]);
    const history = useHistory();
  
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    });
  
    function handleClick() {
      history.goBack();
    }
  
    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    };
  
    const settingsThumbs = {
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px'
    };

    //Recover the data
    useEffect(() => (
      fetch(`http://localhost:4000/data/${id}`)
        .then((response) => response.json())
        .then(data => setSlides(data.image))
    ),[]);

    return (
      <div className="carousel">        
          <IconButton aria-label="close">
            <CloseIcon onClick={handleClick} />
          </IconButton>
        
        <div className="slider-wrapper">
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
            {slides && slides.map((slide) =>
              <div className="slick-slide" key={slide.id}>
                <div class="center-image">
                  <img  src={slide} alt="" width="400" height="380" object-fit= "cover" />
                </div>
              </div>
            )}

          </Slider>
          
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>

              {slides && slides.map((slide) =>
                <div className="slick-slide" key={slide.id}>
                  <img  src={slide} alt="" width="150" height="200" object-fit= "cover" />
                </div>
              )}

            </Slider>
          </div>
        </div>
      </div>
    );
}

export default SlickCarousel;