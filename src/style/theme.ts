import { DefaultTheme } from "styled-components";
const colors = {
  ohou_skyblue: "#35C5F0",
  ohou_white: "#FFFFFF",
  ohou_gray01: "#F7F9FA",
  ohou_gray02: "#EDEDED",
  ohou_gray03: "#DBDBDB",
  ohou_gray04: "#757575",
  ohou_gray05: "#424242",
  ohou_gray06: "#292929",
  ohou_black: "#000000",
};

const fonts = {
  ohou_h1: `
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23.17px;
  `,
  ohou_h2: `
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  `,
  ohou_h3: `
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
  `,
  ohou_h4: `
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
  `,
  ohou_b1: `
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.04em;`,
  ohou_b2: `
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.02em;
  `,
  ohou_b3: `
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.04em;
  `,
  ohou_b4: `
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  `,
  ohou_b5: `
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.04em;
  `,
  ohou_small: `
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 13px;
  letter-spacing: -0.04em;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
