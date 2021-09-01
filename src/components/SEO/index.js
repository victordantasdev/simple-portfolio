import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle }) {
  const hasTitle = Boolean(headTitle);
  const baseTitle = 'Protfolio';
  const title = hasTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;
  const image = 'https://i.postimg.cc/sXt0R71S/home.png';
  const urlBase = 'https://instalura-victordantasdev.vercel.app/';
  const description = 'Esse projeto é o desafio do módulo 01 do Bootcamp de Front-End avançado da Alura. O objetivo principal é criarmos um portfólio para colocar todos os projetos, artigos e o que mais formos desenvolvendo durante todo o bootcamp. Nesse primeiro desafio, criaremos a página inicial e ao longo do bootcamp evoluímos sobre o projeto.';

  return (
    <Head>
      <title>{title}</title>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
};
