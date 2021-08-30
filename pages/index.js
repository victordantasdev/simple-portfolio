import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '../src/components/Loading';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Main from '../src/components/Main';
import Rodape from '../src/components/Rodape';

export default function Home({ toggleTheme }) {
  const screenStates = {
    LOADING: 'LOADING',
    SHOWDATA: 'SHOWDATA',
  };

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  // const [screenState, setScreenState] = useState(screenStates.SHOWDATA);

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
          <Capa />
          <Cabecalho toggleTheme={toggleTheme} />
          <Main />
          <Rodape />
        </>
      )}
    </>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
