import React, { PropTypes } from 'react';

import '../css/PageTitle';

const PageTitle = ({ children }) => <h1 className="PageTitle">{children}</h1>;

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitle;
