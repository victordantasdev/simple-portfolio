import React from 'react';
import WrapperRodape, { Icon, RodapeIcons } from './styles/WrapperRodape';

const socialIcons = [
  {
    id: 1,
    title: 'twitter',
    iconURL: '/svgs/twitter.svg',
    url: 'https://twitter.com/',
  },

  {
    id: 2,
    title: 'github',
    iconURL: '/svgs/github.svg',
    url: 'https://github.com/',
  },

  {
    id: 3,
    title: 'medium',
    iconURL: '/svgs/medium.svg',
    url: 'https://medium.com/',
  },
];

export default function Rodape() {
  return (
    <WrapperRodape>
      <RodapeIcons>
        {socialIcons.map((socialIcon) => (
          <a href={socialIcon.url} key={socialIcon.id} target="_blank" rel="noreferrer">
            <Icon
              iconURL={socialIcon.iconURL}
            />
          </a>
        ))}
      </RodapeIcons>
    </WrapperRodape>
  );
}
