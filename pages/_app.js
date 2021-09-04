import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';
import { dark, light } from '../src/theme/colorThemes';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);

  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? dark : light);
  };

  const title = 'Victor Dantas | Portfolio';
  const image = 'https://i.postimg.cc/yxvMPTcF/2021-09-04-19-58.png';
  const urlBase = 'https://victor-dantas-bootcamp-frontend-alura.vercel.app/';
  const description = 'Projeto criado durante o bootcamp de front-end avançado da Alura.';

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="https://github.com/victordantasdev.png" />

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

        <title>{title}</title>
      </Head>

      <ThemeProvider theme={colorTheme}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
