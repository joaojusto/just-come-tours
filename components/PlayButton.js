import React, { PropTypes } from 'react';

import '../css/PlayButton';

const PlayButton = ({ onClick }) =>
  <button className="PlayButton" onClick={onClick}/>;

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequireds
};

export default PlayButton;
