import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "styled-reset";

import App from "./App";
import theme from "./style/theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
  } 

  html {
    font-size: 62.5%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
