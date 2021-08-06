import React from 'react';
import WrapperProjetos from './styles/WrapperProjetos';
import SectionTitle from './styles/SectionTitle';
import {
  Card,
  CardText,
  CardTitle,
  CardImage,
  WrapperCards,
  CardDescription,
} from './styles/CardStyles';
import StyledLink from '../common/StyledLink';

const cardsInfos = [
  {
    id: 1,
    title: 'Projeto Report',
    image: 'images/CardImage_01.png',
    text: '',
    isDestaque: false,
  },

  {
    id: 2,
    title: 'Projeto Report',
    image: 'images/CardImage_02.png',
    text: '',
    isDestaque: false,
  },

  {
    id: 3,
    title: 'Projeto Report',
    image: 'images/CardImage_01.png',
    text: '',
    isDestaque: false,
  },

  {
    id: 4,
    title: 'Projeto Report',
    image: 'images/CardImage_02.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    isDestaque: true,
  },
];

export default function Main() {
  return (
    <WrapperProjetos>
      <SectionTitle>
        Meus projetos
      </SectionTitle>

      <WrapperCards>
        {cardsInfos.map((cardInfo) => (
          <Card key={cardInfo.id} isDestaque={cardInfo.isDestaque}>

            <CardImage imageURL={cardInfo.image} isDestaque={cardInfo.isDestaque}>
              {cardInfo.isDestaque && <CardImage.Badge>Destaque</CardImage.Badge>}
            </CardImage>

            <CardText isDestaque={cardInfo.isDestaque}>
              <StyledLink href={cardInfo.title.replace(' ', '_')}>
                <CardTitle>{cardInfo.title}</CardTitle>
              </StyledLink>

              <CardDescription isDestaque={cardInfo.isDestaque}>
                {cardInfo.text}
              </CardDescription>
            </CardText>

          </Card>
        ))}
      </WrapperCards>

    </WrapperProjetos>
  );
}
