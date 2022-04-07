import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './CraftSwiper.css';

function CraftSwiper() {
    const params = useParams();
    const id = params.id;
    const [slides, setSlides] = useState([]);
    const history = useHistory();

    //Recover the data
    useEffect(() => (
        fetch(`https://pure-thicket-24038.herokuapp.com/data/${id}`)
            .then((response) => response.json())
            .then(data => setSlides(data.image))
    ),[]);

    function handleClick() {
        history.goBack();
    }

    return (
        <div className="container">
            <IconButton aria-label="close">
                <CloseIcon onClick={handleClick} />
            </IconButton>
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]} 
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            navigation={true}
            pagination={{
                clickable: true
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            className="mySwiper"
          >
            {slides && slides.map((slide) =>
                <SwiperSlide>
                    <img src={slide} alt="" />
                </SwiperSlide>
            )}
          </Swiper>
        </div>
      );
}

export default CraftSwiper;