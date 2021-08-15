import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme, { colors } from '../src/theme';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(colors.modes.dark);

  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? colors.modes.dark : colors.modes.light);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="https://github.com/victordantasdev.png" />

        <title>Portfolio | Victor Dantas</title>
      </Head>

      <ThemeProvider theme={{ theme, colorTheme }}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
