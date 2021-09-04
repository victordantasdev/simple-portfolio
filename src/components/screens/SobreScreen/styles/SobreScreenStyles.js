import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

// export const WrapperInfo = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export const WrapperInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${({ theme }) => theme.secondary.color};
  padding: 64px;
  border-radius: 10px;
  overflow-wrap: break-word;
  background-color: ${({ theme }) => theme.borders.color};
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

  ${breakpointsMedia({
    xs: css`
      margin: 32px;
    `,

    md: css`
      margin: 32px 10%;
    `,
  })}

  p {
    text-align: justify;
    margin-top: 0;
  }

  a {
    color: ${({ theme }) => theme.secondary.color};
    text-decoration: none;
    background: 
      linear-gradient(to right, transparent, transparent),
      linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    
    &:hover,
    &:focus {
      background-size: 0 2px, 100% 2px;
    }
  }
`;

export const Header = styled.h1`
  border-bottom: 1px solid ${({ theme }) => theme.secondary.color};
  padding-bottom: 16px;
`;

export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.borders.color};
  border-bottom: 1px solid ${({ theme }) => theme.secondary.color};
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const WrapperProjetosInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProjetosInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProjetosHeader = styled.h2``;
export const ProjetosName = styled.a`
  margin-bottom: 8px;
  font-weight: bold;
`;
