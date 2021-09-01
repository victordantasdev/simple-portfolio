import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export function Sobre() {
  return (
    <h1>
      Página Sobre!
    </h1>
  );
}

export default websitePageHOC(Sobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
