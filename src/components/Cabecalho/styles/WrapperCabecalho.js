import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperCabecalho = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme: { colorTheme } }) => colorTheme.primary.color};
  border-top: 4px solid ${({ theme: { colorTheme } }) => colorTheme.secondary.color};

  ${breakpointsMedia({
    xs: css`
      height: 40px;
    `,

    md: css`
      height: 67px;
    `,
  })}
`;

WrapperCabecalho.LeftSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colorTheme } }) => colorTheme.secondary.color};
  padding: 0 19px;

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.logoCabecalhoXS};
    `,

    md: css`
      ${TextStyleVariantsMap.logoCabecalho};
    `,
  })}
`;

WrapperCabecalho.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  order: 2;
  justify-content: flex-end;

  li {
    list-style: none;
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

export default WrapperCabecalho;
