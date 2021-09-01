import React from 'react';
import PropTypes from 'prop-types';

export default function WebsiteGlobalProvider({ children }) {
  return (
    <>
      {children}
    </>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
