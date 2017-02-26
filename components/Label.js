import React, { PropTypes } from 'react';

import '../css/Label';

const Label = ({ children }) =>
  <span className="Label">{children}</span>;

Label.propTypes = {
  children: PropTypes.node.isRequired
};

export default Label;
