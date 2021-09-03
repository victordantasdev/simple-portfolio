import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-metadata-parser';
import Main from '../src/components/Main';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export function Home({ postsData }) {
  return (
    <Main postsData={postsData} />
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

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postsData: PropTypes.array.isRequired,
};

export async function getServerSideProps() {
  // const reposURL = 'https://api.github.com/users/victordantasdev/repos';
  // const reposDataUnordered = await fetch(reposURL).then((res) => res.json());
  // const reposData = reposDataUnordered.sort((a, b) => b.stargazers_count - a.stargazers_count);

  // const projects = reposData.map((item) => item.html_url);
  // const imagesURLPromisses = await projects.map(async (project) => {
  //   const urlPromisses = await parser(project)
  //     .then((result) => result.og.image);

  //   return urlPromisses;
  // });
  // const imagesURL = await Promise.all(imagesURLPromisses);
  const reposURL = 'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=victordantasdev';
  const reposData = await fetch(reposURL).then((res) => res.json());

  const projects = reposData.map((item) => item.link);
  const imagesURLPromisses = await projects.map(async (project) => {
    const urlPromisses = await parser(project)
      .then((result) => result.og.image);

    return urlPromisses;
  });
  const imagesURL = await Promise.all(imagesURLPromisses);

  const postsData = [
    imagesURL,
    reposData,
  ];

  return {
    props: {
      postsData,
    },
  };
}
