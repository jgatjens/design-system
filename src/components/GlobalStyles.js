import React from "react";
import { Global, css } from "@emotion/core";
import { normalize } from "polished";

// Apercu pro
import ApercuPro from "../static/fonts/apercu-regular-pro/stylesheet.css";
import ApercuMediumPro from "../static/fonts/apercu-medium-pro/stylesheet.css";
import ApercuBoldPro from "../static/fonts/apercu-bold-pro/stylesheet.css";
// Apercu mono pro
import ApercuMonoPro from "../static/fonts/apercu-mono-regular-pro/stylesheet.css";
import ApercuMonoMediumPro from "../static/fonts/apercu-mono-medium-pro/stylesheet.css";
import ApercuMonoBoldPro from "../static/fonts/apercu-mono-bold-pro/stylesheet.css";

export const GlobalStylesTS = css`
  ${ApercuPro}
  ${ApercuMediumPro}
  ${ApercuBoldPro}

  ${ApercuMonoPro}
  ${ApercuMonoMediumPro}
  ${ApercuMonoBoldPro}

  ${normalize()}

  html,
    body {
    padding: 0;
    margin: 0;
    background: transparent;
    min-height: 100%;
  }
`;

const GlobalStyles = () => <Global styles={GlobalStylesTS} />;

export default GlobalStyles;
