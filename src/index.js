import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Original Surfer';
    src: url(https://fonts.gstatic.com/s/originalsurfer/v11/RWmQoKGZ9vIirYntXJ3_MbekzNMSC0Fu.woff2) format('woff2');
    font-style: normal;
    font-weight: 400;
  }

  body {
    background-color: #0D1821;
    margin: 0;
    font-family: 'Original Surfer';
  }

  p, h2, h3, h4, label {
    color: #F0F4EF;
  }

  h1 {
    color: #FF6F59;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
