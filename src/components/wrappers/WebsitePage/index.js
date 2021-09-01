import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../../Cabecalho';
import Rodape from '../../Rodape';
import SEO from '../../SEO';

export const WebsitePageContext = createContext({
  someFunc: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  toggleTheme,
}) {
  return (
    <WebsitePageContext.Provider>
      <SEO {...seoProps} />
      {menuProps.display && <Cabecalho toggleTheme={toggleTheme} />}
      {children}
      <Rodape />
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
