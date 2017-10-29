import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';

import '../css/Reset';
import '../css/Layout';

const homeLink = location => {
  if (location.pathname === prefixLink('/')) return null;

  return (
    <h1>
      <Link to={prefixLink('/')}>{config.blogTitle}</Link>
    </h1>
  );
};

const Template = ({ location, children }) => {
  const header = homeLink(location);

  return (
    <div className="Layout">
      <div className="Layout-content">
        {header}
        {children}
      </div>
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
};

export default Template;
