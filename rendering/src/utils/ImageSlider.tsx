"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/utils/ImageSlider.css';

const ImageSlider = () => {
  console.log("Image Slider");

  const settings = {
    dots: true,
  };
  return (
    <>
      <h1>Image Slider</h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ImageSlider