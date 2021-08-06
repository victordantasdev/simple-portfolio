import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const WrapperProjetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const WrapperCards = styled.div`
  display: grid;

  ${breakpointsMedia({
    xs: css`
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(200px, auto);
      grid-gap: 30px 18px;
      width: 90vw;
      padding: 32px 15%;
    `,

    md: css`
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 510px 320px;
      padding: 85px 10% 52px 10%;
    `,
  })}
`;

export const Card = styled.div`
  display: flex;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme: { colorTheme } }) => colorTheme.secondary.color};

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
      grid-row: ${(props) => props.isDestaque && '1 / 2'};
    `,

    md: css`
      grid-column: ${(props) => props.isDestaque && 'span 3'};
      grid-row: ${(props) => props.isDestaque && '2 / auto'};
      flex-direction: ${(props) => (props.isDestaque ? 'row' : 'column')};
    `,
  })}
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.imageURL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
      height: 70%;
    `,

    md: css`
      width: ${(props) => (props.isDestaque ? '75%' : '100%')};
      height: ${(props) => (props.isDestaque ? '100%' : '75%')};  
    `,
  })}
`;

CardImage.Badge = styled.span`
  position: relative;
  top: 18px;
  left: 12px;
  background: ${({ theme: { colorTheme } }) => colorTheme.background.color};
  color: ${({ theme: { colorTheme } }) => colorTheme.background.contrastText};
  border: 1px solid ${({ theme: { colorTheme } }) => colorTheme.background.contrastText};
  padding: 6px;

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.badgeXS};
    `,

    md: css`
      ${TextStyleVariantsMap.badge};
    `,
  })}
`;

export const CardText = styled.div`
  display: flex;
  justify-content: center;
  
  ${breakpointsMedia({
    xs: css`
      align-items: center;
      margin-top: 16px;
    `,

    md: css`
      margin-left: ${(props) => (props.isDestaque && '30px')};
      margin-right: ${(props) => (props.isDestaque && '16px')};
      margin-top: ${(props) => (props.isDestaque ? null : '41px')};
      width: ${(props) => (props.isDestaque && '32%')};
      flex-direction: column;
      align-items: ${(props) => (props.isDestaque ? 'flex-start' : 'center')};
    `,
  })}
`;

export const CardTitle = styled.span`
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.cardTitleXS};
    `,

    md: css`
      ${TextStyleVariantsMap.cardTitle};
    `,
  })}
`;

export const CardDescription = styled.p`
  ${breakpointsMedia({
    xs: css`
      display: none;
    `,

    md: css`
      ${TextStyleVariantsMap.cardText};
      display: ${(props) => (props.isDestaque ? 'inline' : 'none')};
    `,
  })}
`;
