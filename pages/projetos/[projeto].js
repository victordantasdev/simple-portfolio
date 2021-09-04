import React from 'react';
import PropTypes from 'prop-types';
import grayMatter from 'gray-matter';
import ProjetoScreen from '../../src/components/screens/ProjetoScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjectPage({ projectData }) {
  return (
    <ProjetoScreen projectData={projectData} />
  );
}

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projectData: PropTypes.array.isRequired,
};

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params }) {
  const projectDataGitHub = await fetch(`https://api.github.com/repos/victordantasdev/${params.projeto}`).then((res) => res.json());

  const mdData = await fetch(`https://raw.githubusercontent.com/victordantasdev/${params.projeto}/main/README.md`)
    .then((res) => res.text())
    .then((data) => data);

  const { content } = grayMatter(mdData);

  const projectData = [
    projectDataGitHub,
    content,
  ];

  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const pinedRepos = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=victordantasdev')
    .then((res) => res.json())
    .then((data) => data);

  const paths = pinedRepos.map((item) => {
    const projeto = item.repo;
    return { params: { projeto } };
  });

  return {
    paths,
    fallback: false,
  };
}
