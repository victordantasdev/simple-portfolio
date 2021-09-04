import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${breakpointsMedia({
    xs: css`
      padding-top: 32px;
    `,

    md: css`
      padding: 32px 32px 0 32px;
    `,
  })}
`;

export const ProjectName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  overflow-wrap: break-word;

  color: ${({ theme }) => theme.primary.contrastText};
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
`;

export const Card = styled.article`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px 32px 32px;
  background-color: ${({ theme }) => theme.borders.color};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover ${ProjectName} {
    background-size: 0 2px, 100% 2px;
  }
`;

export const Title = styled.header`
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const CardImage = styled.img`
  /* height: 100%; */
  width: 100%;
  border-radius: 5%;
  padding: 0 16px 0 16px;
`;
