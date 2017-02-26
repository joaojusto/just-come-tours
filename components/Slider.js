import React, { PropTypes } from 'react';
import ReactSlick from 'react-slick';

import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../css/Slider';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  draggable: true,
  focusOnSelect: true,
  initialSlide: 1
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
