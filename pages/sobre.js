import React from 'react';
import PropTypes from 'prop-types';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import SobreScreen from '../src/components/screens/SobreScreen';

export function SobrePage({ userData }) {
  return (
    <SobreScreen userData={userData} />
  );
}

SobrePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.array.isRequired,
};

export default websitePageHOC(SobrePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

export async function getStaticProps() {
  const gitHubData = await fetch('https://api.github.com/users/victordantasdev')
    .then((res) => res.json());
  const pinedRepos = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=victordantasdev')
    .then((res) => res.json())
    .then((data) => data);

  const userData = [
    gitHubData,
    pinedRepos,
  ];

  return {
    props: {
      userData,
    },
  };
}
