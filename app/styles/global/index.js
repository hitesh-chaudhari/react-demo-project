import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    user-select: none;
  }

  body {
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    font-weight: 400;
    padding: 0;
    margin: 0;
    background-attachment: fixed;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Lato', sans-serif;
  }

  h5,
  h6,
  input,
  button,
  p {
    font-family: 'Open Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    background: transparent;
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  a > * {
    cursor: pointer !important;
  }

  textarea {
    line-height: 1.5;
  }

  .description, .body {
    width: 80%;
  }

  #app {
    display: inline-block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: inherit;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
