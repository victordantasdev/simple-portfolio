import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const WrapperProject = styled.article`
  border: 1px solid ${({ theme }) => theme.secondary.color};
  padding: 16px;
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

export const Content = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  hr {
    width: 100%;
  }

  p>img {
    width: auto;
  }

  p>img:first-child,
  ul>li>p>img, 
  table>tr>td>img {
    width: 100%;
  }

  code {
    display: block;
    white-space: pre-wrap   
  }
`;
