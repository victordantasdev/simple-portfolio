import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfilePicture,
  ProjetosHeader,
  ProjetosInfo,
  ProjetosName,
  UserInfoCard,
  WrapperInfo,
  WrapperProjetosInfo,
} from './styles/SobreScreenStyles';

export default function SobreScreen({ userData }) {
  return (
    <WrapperInfo>
      <UserInfoCard>
        <ProfilePicture src={userData[0].avatar_url} alt="" />
        <h1>
          {userData[0].name}
        </h1>

        <p>
          {userData[0].login}
        </p>
        <p>
          {userData[0].bio}
        </p>

        <p>
          Sobre:
          Sou apaixonado por tecnologia, desenvolvimento e engenharia.
          Meu foco de estudos é em desenvolvimento front-end utilizando
          as tecnologias mais modernas do mercado como JavaScript, TypeScript,
          ReactJS e Next.js, mas sem esquecer da base da computação e sempre
          buscando a melhor experiência para o usuário final.
          Trabalho e acredito em ações que possam gerar um impacto positivo na
          vida das pessoas e do meio ambiente.
        </p>

      </UserInfoCard>
      <WrapperProjetosInfo>
        <ProjetosHeader>Principais Projetos</ProjetosHeader>
        {userData[1].map((item) => (
          <ProjetosInfo key={item.repo}>
            <ProjetosName href={item.link} target="_blank">
              {item.repo}
            </ProjetosName>
          </ProjetosInfo>
        ))}
      </WrapperProjetosInfo>
    </WrapperInfo>
  );
}

SobreScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.array.isRequired,
};
