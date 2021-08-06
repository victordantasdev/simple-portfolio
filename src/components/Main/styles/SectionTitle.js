import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.sectionTitleXS}
    `,

    md: css`
      ${TextStyleVariantsMap.sectionTitle}
    `,
  })}
`;

export default SectionTitle;
