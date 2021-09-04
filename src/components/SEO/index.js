import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle }) {
  const hasTitle = Boolean(headTitle);
  const baseTitle = 'Protfolio';
  const title = hasTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;

  return (
    <Head>
      <title>{title}</title>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
};
