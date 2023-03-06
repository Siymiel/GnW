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
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
    };
    return (
      <div className="">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1677432658720-3d84f9d657b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="w-full object-cover object-top"
              alt="Flowbite Logo"
              style={{ height: "100vh" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="w-full object-cover object-top"
              alt="Flowbite Logo"
              style={{ height: "100vh" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              className="w-full object-cover object-top"
              alt="Flowbite Logo"
              style={{ height: "100vh" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="w-full object-cover object-top"
              alt="Flowbite Logo"
              style={{ height: "100vh" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542308239-3860f3197faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="w-full object-cover object-top"
              alt="Flowbite Logo"
              style={{ height: "100vh" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
