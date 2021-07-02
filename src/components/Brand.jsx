import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="assets/img/partners/1.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/2.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/3.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/4.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/5.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/6.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/7.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/8.png" alt="partners brand" />
        </li>
      </Slider>
    </ul>
  );
}
