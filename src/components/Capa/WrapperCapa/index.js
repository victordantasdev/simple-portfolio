import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperCapa = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #fff
  ;
  background-image: url('/images/bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  

  ${breakpointsMedia({
    xs: css`
      h1{
        ${TextStyleVariantsMap.titleCapaXS};
      }

      p{
        ${TextStyleVariantsMap.subTitleCapaXS};
      }
    `,

    md: css`
      h1{
        ${TextStyleVariantsMap.titleCapa};
      }

      p{
        ${TextStyleVariantsMap.subTitleCapaXS};
      }
    `,
  })}
`;

export default WrapperCapa;
