import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import logo from "../icons/logo.svg";
import logoX from "../icons/logo-x.svg";
import logoL from "../icons/logo-l.svg";
import LogoLettersSvg from "../icons/LogoLetters.icon";

const LogoContainer = styled.div`
  width: 204px;
  height: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background-color: white;
`;

export const LogoLetters = props => (
  <LogoLettersSvg {...props} style={{ maxWidth: "101px" }} />
);

const Logo = props => {
  let image;
  let w = "100%";

  switch (props.variant) {
    case "x":
      image = logoX;
      w = "100px";
      break;
    case "l":
      image = logoL;
      break;
    default:
      image = logo;
      break;
  }

  return (
    <LogoContainer>
      <img src={image} style={{ width: w }} alt="Organic" />
    </LogoContainer>
  );
};

Logo.propTypes = {
  /**
   * Logo values "x" | "l"
   */
  variant: PropTypes.string
};

Logo.defaultProps = {
  variant: ""
};

export default Logo;
