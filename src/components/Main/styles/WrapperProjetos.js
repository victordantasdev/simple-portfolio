import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperProjetos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme: { colorTheme } }) => colorTheme.background.color};
  
  
  ${breakpointsMedia({
    xs: css`
      margin-top: 32px;
    `,

    md: css`
      margin-top: 64px;
    `,
  })}
`;

export default WrapperProjetos;
