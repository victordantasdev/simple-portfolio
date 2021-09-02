import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperProjetos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.background.color};
  
  
  ${breakpointsMedia({
    xs: css`
      padding-top: 32px;
    `,

    md: css`
      padding-top: 64px;
    `,
  })}
`;

export default WrapperProjetos;
