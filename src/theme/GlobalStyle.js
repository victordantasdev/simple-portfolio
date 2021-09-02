import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  
  html,
  body {
    margin: 0;
    padding: 0;
    transition: all 0.5s ease-in-out;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.background.color};
    color: ${({ theme }) => theme.background.contrastText};

    ::-webkit-scrollbar {
      width: 10px;
      padding: 1px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 2.5px;
      background: linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
    }
  }
`;

export default GlobalStyle;
