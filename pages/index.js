import React from 'react';
import Main from '../src/components/Main';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export function Home() {
  return (
    <Main />
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    configProps: {
      needsLoading: true,
      needsCover: true,
    },
  },
});
