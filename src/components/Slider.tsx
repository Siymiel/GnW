import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HeroSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2000,
      fade: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://source.unsplash.com/random"
              className="w-full object-cover object-center"
              alt="Flowbite Logo"
              style={{ height: "85vh" }}
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random"
              className="w-full object-cover object-center"
              alt="Flowbite Logo"
              style={{ height: "85vh" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
