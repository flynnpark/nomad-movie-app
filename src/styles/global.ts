import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
      font-family: 'Raleway', sans-serif;
      background-color: #1e272e;
      color: #d2dae2;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
`;
