import React, { useState, useEffect } from 'react';
import './SlickCarousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SlickCarousel() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
  
      setNav1(slider1);
      setNav2(slider2);
  
    });
  
  
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
  
    const slidesData = [
      {
        id: 1,
        title: 'Image 1',
        label: 'Dolorem officiis temporibus.'
      }, {
        id: 2,
        title: 'Image 2',
        label: 'Officia non provident dolor esse et neque.'
      }, {
        id: 3,
        title: 'Image 3',
        label: 'Ut recusandae vel vitae molestiae id soluta.'
      }, {
        id: 4,
        title: 'Image 4',
        label: 'Qui vel consequatur recusandae illo repellendus.'
      }, {
        id: 5,
        title: 'Image 5',
        label: 'Placeat odit velit itaque voluptatem.'
      }, {
        id: 6,
        title: 'Image 6',
        label: 'Adipisci officiis repudiandae.'
      },
    ];

    return (
      <div className="carousel">
        <a className="close" href="/" >
          <IconButton aria-label="close">
            <CloseIcon />
          </IconButton>
        </a>

        <div className="slider-wrapper">
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
            {slidesData.map((slide) =>
              <div className="slick-slide" key={slide.id}>
                <div class="center-image">
                  <img  src={`https://picsum.photos/800/400?img=${slide.id}`} alt={slide.title} />
                </div>
              </div>
            )}

          </Slider>
          
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>

              {slidesData.map((slide) =>
                <div className="slick-slide" key={slide.id}>
                  <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} alt={slide.title} />
                </div>
              )}

            </Slider>
          </div>
        </div>
      </div>
    );
}

export default SlickCarousel;