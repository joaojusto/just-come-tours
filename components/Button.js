import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Button';

const Button = ({ to, children, onClick, alternative }) => {
  const className = classNames({
    Button: true,
    'Button--alternative': alternative
  });

  return (
    <a onClick={onClick} className={className} href={to}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  alternative: PropTypes.bool,
  to: PropTypes.string
};

Button.defaultProps = {
  alternative: false
};

export default Button;
