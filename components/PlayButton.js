import React, { PropTypes } from 'react';

import '../css/PlayButton';

const PlayButton = ({ onClick }) => (
  <a className="PlayButton" onClick={onClick}>
    <i className="PlayButton-icon" />
  </a>
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequireds
};

export default PlayButton;
