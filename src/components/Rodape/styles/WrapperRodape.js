import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperRodape = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary.color};

  ${breakpointsMedia({
    xs: css`
      height: 40px;
    `,

    md: css`
      height: 67px;
    `,
  })}
`;

export const RodapeIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary.color};
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.iconURL});
  margin: 0 20px;
`;

WrapperRodape.LeftSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary.color};
  padding: 0 19px;

  a {
    color: ${({ theme }) => theme.secondary.contrastText};
    text-decoration: none;
    background: 
      linear-gradient(to right, transparent, transparent),
      linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
      background-size: 100% 2px, 0 2px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
  }

  a:hover,
  a:focus {
    background-size: 0 2px, 100% 2px;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.logoCabecalhoXS};
    `,

    md: css`
      ${TextStyleVariantsMap.logoCabecalho};
    `,
  })}

  /* ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })} */
`;

WrapperRodape.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  /* flex: 1; */
  order: 2;
  justify-content: flex-end;

  li {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.primary.contrastText};
    text-decoration: none;
    background: 
      linear-gradient(to right, transparent, transparent),
      linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
      background-size: 100% 2px, 0 2px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
  }

  a:hover,
  a:focus {
    background-size: 0 2px, 100% 2px;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.itemCabecalhoXS};
    `,

    md: css`
      ${TextStyleVariantsMap.itemCabecalho};
    `,
  })}
`;

export default WrapperRodape;
