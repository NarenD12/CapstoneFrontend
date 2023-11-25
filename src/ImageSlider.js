import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
   

        const settings = {
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 2000,
            // centerMode: true,
            // centerPadding: '60px',
            variableWidth: false,
            adaptiveHeight: false,
        };
        return (
            <div className="image-slider-container">
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
    </div>
);
};

export default ImageSlider;