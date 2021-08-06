import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export default function breakpointsMedia(cssByBreakpoints) {
  // cssByBreakpoints => Todo o CSS com os estilos
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map(
    (breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `,
  );
}
