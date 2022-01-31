import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
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
  
    const slidesData = [
      {
        id: 1,
        title: 'Image 1',
        label: 'Dolorem officiis temporibus.',
        imgLink: "https://i.ibb.co/K5cbRvz/pagina-4-nuevo.jpg"
      }, {
        id: 2,
        title: 'Image 2',
        label: 'Officia non provident dolor esse et neque.',
        imgLink: "https://i.ibb.co/G2pBNCr/pagina-2-nueva.jpg"
      }, {
        id: 3,
        title: 'Image 3',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        imgLink: "https://i.ibb.co/KVZwhgg/TAZA-ZULE-1.jpg"
      }, {
        id: 4,
        title: 'Image 4',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        imgLink: "https://i.ibb.co/Y0n8xKk/TAZA-KATERIN-NUEVO-2.jpg"
      }, {
        id: 5,
        title: 'Image 5',
        label: 'Placeat odit velit itaque voluptatem.',
        imgLink: "https://i.ibb.co/47WCLh8/globos-valeria.jpg"
      }, {
        id: 6,
        title: 'Image 6',
        label: 'Adipisci officiis repudiandae.',
        imgLink: "https://i.ibb.co/QfcBcVj/franela-karely1.jpg"
      },
    ];

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
            {slidesData.map((slide) =>
              <div className="slick-slide" key={slide.id}>
                <div class="center-image">
                  {/*<img  src={`https://picsum.photos/800/400?img=${slide.id}`} alt={slide.title} />*/}
                  <img  src={slide.imgLink} alt={slide.title} width="400" height="380" object-fit= "cover" />
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
                  {/*<img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} alt={slide.title} />*/}
                  <img  src={slide.imgLink} alt={slide.title} width="150" height="200" object-fit= "cover" />
                </div>
              )}

            </Slider>
          </div>
        </div>
      </div>
    );
}

export default SlickCarousel;