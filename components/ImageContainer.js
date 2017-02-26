import React, { PropTypes } from 'react';

import '../css/ImageContainer';

const ImageContainer = ({ src }) => (
  <div className="ImageContainer">
    <div className="ImageContainer-imageWrapper">
      <img src={src} className="ImageContainer-image" />
    </div>
    <div className="ImageContainer-shadow" />
  </div>
);

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired
};

export default ImageContainer;
