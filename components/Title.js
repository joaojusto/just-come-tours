import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Title';

const Title = ({ children, alternative }) => {
  const className = classNames({
    'Title': true,
    'Title--alternative': alternative
  });

  return <h1 className={className}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  alternative: PropTypes.bool
};

Title.defaultProps = {
  alternative: false
};

export default Title;
