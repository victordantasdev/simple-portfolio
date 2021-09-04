import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../../Cabecalho';
import Rodape from '../../Rodape';
import SEO from '../../SEO';
import Loading from '../../../assets/Loading';
import Capa from '../../Capa';

export const WebsitePageContext = createContext({
  someFunc: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  toggleTheme,
  configProps,
}) {
  const screenStates = {
    LOADING: 'LOADING',
    SHOWDATA: 'SHOWDATA',
  };

  const [screenState, setScreenState] = useState(
    configProps.needsLoading
      ? screenStates.LOADING
      : screenStates.SHOWDATA,
  );
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.SHOWDATA);
    }, 2.2 * 1000);
  }, [screenStates.SHOWDATA]);

  return (
    <>
      {screenState === 'LOADING' && <Loading />}
      {screenState === 'SHOWDATA' && (
        <>
          <SEO {...seoProps} />
          {configProps.needsCover && <Capa />}
          {menuProps.display && <Cabecalho toggleTheme={toggleTheme} />}
          {children}
          {menuProps.display && <Rodape />}
        </>
      )}
    </>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
  configProps: {
    needsLoading: false,
    needsCover: false,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  configProps: PropTypes.shape({
    needsLoading: PropTypes.bool,
    needsCover: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
