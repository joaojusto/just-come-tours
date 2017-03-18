import React, { PropTypes } from 'react';
import ReactSlick from 'react-slick';

import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../css/Slider';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        draggable: true,
      }
    },
    {
      breakpoint: 9999,
      settings: {
        initialSlide: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        draggable: false,
        focusOnSelect: false,
      }
    }
  ]
};

const Slider = ({ children }) => (
  <ReactSlick {...settings}>
    {children}
  </ReactSlick>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Slider;
