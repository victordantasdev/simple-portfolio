import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { Content, Header, WrapperProject } from './styles/ProjetosScreenStyles';

export default function ProjectPage({ projectData }) {
  return (
    <WrapperProject>
      <Header>
        {projectData[0].name}
        {' '}
        -
        {' '}
        <a
          href={projectData[0].html_url}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </Header>
      <Content>
        <Markdown>{projectData[1]}</Markdown>
      </Content>
    </WrapperProject>
  );
}

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projectData: PropTypes.array.isRequired,
};
