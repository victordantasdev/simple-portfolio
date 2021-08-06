import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Main from '../src/components/Main';
import Rodape from '../src/components/Rodape';

export default function Home() {
  return (
    <>
      <Capa />
      <Cabecalho />
      <Main />
      <Rodape />
    </>
  );
}
