import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Button';

const Button = ({ children, onClick, alternative }) => {
  const className = classNames({
    'Button': true,
    'Button--alternative': alternative
  });

  return <button onClick={onClick} className={className}>
    {children}
  </button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  alternative: PropTypes.bool
};

Button.defaultProps = {
  alternative: false
};

export default Button;
  
